import codecs
import json
from pathlib import Path
import re
import subprocess

from langflow.base.legal_chunker.prompts.OpenAI.templates_chunker.page_classifier_EN import PAGE_CLASSIFIER_EN
from langflow.base.legal_chunker.prompts.OpenAI.templates_chunker.headlines_row_metadata_EN import HEADLINES_ROW_METADATA_EN
from langflow.base.legal_chunker.prompts.OpenAI.templates_chunker.exception_history_template_EN import EXCEPTION_HISTORY_TEMPLATE_EN
from langflow.base.legal_chunker.prompts.OpenAI.templates_chunker.annex_identifier_EN import ANNEX_IDENTIFIER_EN
from langflow.base.legal_chunker.prompts.OpenAI.templates_chunker.sub_headline_identifier_EN import SUBHEADLINES_IDENTIFIER_EN
from langflow.base.legal_chunker.prompts.OpenAI.templates_chunker.subheadlines_row_metadata_EN import SUBHEADLINES_ROW_METADATA_EN

from langflow.base.legal_chunker.components.create_row_tags import create_row_tags
from langflow.base.legal_chunker.components.headline_validator import validate_headlines
from langflow.base.legal_chunker.components.get_article_sections import get_article_sections
from langflow.base.legal_chunker.components.remove_first_line import remove_first_line

from numpy import indices
import unidecode


class OCSLegalChunker():
    """
    Process legal documents to split them into legal semantic chunks.
    Can be imported and used in other projects.
    """
    MAX_RETRIES = 10
    CHUNK_SUB_HEADLINES = True
    
    def __init__(self, pdf_path: Path, azure_client, show_isolated_headlines, verbose=False):
        """Initialize without pdf_path, allowing for more flexible usage"""
        self.pdf_path = pdf_path
        self.azure_client = azure_client
        self.show_isolated_headlines = show_isolated_headlines
        self.legal_text = None
        self.ocr_pdfbox = None
        self.verbose = verbose
        
    def load_document(self):
        """Load and prepare a document for processing"""
        """
        self.ocr_pdfbox = OCR_PDFBox(pdf_path)
         self.legal_text = self.extract_and_clean_pdf()
        """
        command = ["java", "-cp", "./java/pdfbox-app-3.0.3.jar;./java/gson-2.11.0.jar;./java", "PDFStripper", self.pdf_path] 
        result = subprocess.run(command, capture_output=True,text=True)
        self.legal_text = codecs.decode(result.stdout, 'unicode_escape')
        self.legal_text = self.legal_text.encode('latin1').decode('utf-8')
        self.legal_text = self.extract_and_clean_pdf()
        return self
        
    def extract_and_clean_pdf(self):
        legal_text = self.legal_text
        cleaned_legal_text = unidecode(legal_text.replace("§", "PARAGRAPH"))
        return cleaned_legal_text
    
    def process(self):
        """
        Process the document and return chunks.
        """
        if self.pdf_path:
            self.load_document()
            
        if not self.legal_text:
            raise ValueError("No document loaded. Either call load_document() first or provide pdf_path to process()")
        
        try:
            classifications = self.classify_pages()
            self.legal_text = self.remove_classified_pages(classifications)
            
            legal_text_rowmetadata = create_row_tags(self.legal_text)
            headlines = self.generate_headlines(legal_text_rowmetadata)
            
            final_output = []
            
            if headlines:
                indices = [int(row[3:]) - 1 for row in headlines]
                article_sections = get_article_sections(self.legal_text,indices)
                
                last_chunk = create_row_tags(article_sections[-1])
                response_annex_lastChunk = self.azure_client.generate_response(
                    ANNEX_IDENTIFIER_EN,
                    f"Input: {last_chunk}"
                )
                
                if response_annex_lastChunk != 'null':
                    last_article_cleaned = self.get_lines_up_to(
                        article_sections[-1],
                        int(response_annex_lastChunk)
                    )
                    article_sections[-1] = last_article_cleaned
                
                if self.CHUNK_SUB_HEADLINES:
                    final_output = self.process_article_sections(article_sections)
                else:
                    final_output = article_sections
                
                final_output = [entry for entry in final_output if entry]
                
            return json.dumps(final_output)
        except Exception as e:
            print(f"Error processing document: {str(e)}")
            return json.dumps([])
            
    def classify_pages(self):
        # Regex pattern for page markers  
        pattern = r"<PAGE\s*\d+\s*END>"  
        
        # Split the string based on the page markers  
        page_list = re.split(pattern, self.legal_text)  
        
        # Remove the empty entry at the beginning, if present  
        page_list = [page.strip() for page in page_list if page.strip()]  
        
        # Output the list of pages  
        classifications = []  
        for i, page in enumerate(page_list):  
            #print(page + "\n_________________________________")  
            page_class = self.azure_client.generate_response(  
                PAGE_CLASSIFIER_EN,  
                f"Input: {page}"  
            )  
            classifications.append({"page_num": i+1, "classification": page_class})

            return classifications
        
    def remove_classified_pages(self, classifications):
        # Regex pattern for page markers  
        pattern = r"<PAGE\s*\d+\s*END>"
        
        # Splitting and cleaning the text 
        pages = re.split(pattern, self.legal_text)  # splitting the text by page breaks
        pages = [page for page in pages if page]  # removing empty elements

        # Remove the pages in reverse order to keep the indices intact
        for item in sorted(classifications, key=lambda x: x["page_num"], reverse=True):  
            page_num = item["page_num"]
            classification = item["classification"]  
            if classification == "table/title":
                pages.pop(page_num - 1)  # Remove the classified page  

        self.legal_text = ''.join(pages)

        # Clean up any remaining markers after removal
        pattern = r"<PAGE\s*\d+\s*START>"  
        pages_cleaned = re.split(pattern, self.legal_text)
        
        return ''.join(pages_cleaned)
    
    def generate_headlines(self, legal_text_rowmetadata):
        exception_history = EXCEPTION_HISTORY_TEMPLATE_EN
        headline_row_metadata = HEADLINES_ROW_METADATA_EN
        retries = 0

        response_headlines = self.azure_client.generate_response(
            headline_row_metadata,
            f"Input: {legal_text_rowmetadata}"
            ) 

        while retries < self.MAX_RETRIES:
            output = response_headlines
            validated_output = validate_headlines(self.legal_text, output, exception_history, retries, self.azure_client)
            if output and validated_output[0]:  
                #print(f"Success: {output}")
                break
            else:  
                #print(f"Validation failed. Try {retries+1} of {self.MAX_RETRIES}")
                exception_history = validated_output[1]
                retries = validated_output[2]  
                headline_row_metadata =  f"{HEADLINES_ROW_METADATA_EN}\n\n{exception_history }"

        if retries == self.MAX_RETRIES:
            if self.verbose:
                print("Maximum number of attempts reached. No further retries.")

        if output:
            headlines = eval(output)
            if self.verbose:
                for headline in headlines:
                    print(headline)
            return headlines
    
    def get_lines_up_to(self, string, x):
        lines = string.split('\n')   
        selected_lines = lines[:x]  
        result = '\n'.join(selected_lines)   
        return result 

    def process_article_sections(self, article_sections):
        chunk_classifications = []

        for chunk in article_sections:
            chunk_classifier = self.azure_client.generate_response(
                SUBHEADLINES_IDENTIFIER_EN, 
                f"Input: {chunk}"
            )
            
            chunk_classifications.append(chunk_classifier)


        subheadings_splitpoints = []

        for index, chunk in enumerate(article_sections):
            if chunk_classifications[index] == "TRUE":
                chunk_reduced = remove_first_line(chunk)
                chunk_rowmetadata = create_row_tags(chunk_reduced)

                response_subheading = self.azure_client.generate_response(
                    SUBHEADLINES_ROW_METADATA_EN, 
                    f"Input: {chunk_rowmetadata}"
                )

                try:
                    array = json.loads(response_subheading)
                    subheadings_splitpoints.append(array)
                except:
                    subheadings_splitpoints.append(None)
                    
            else:
                subheadings_splitpoints.append(None)

        final_output = []

        for index, chunk in enumerate(article_sections):
            if subheadings_splitpoints[index] != None:
                indices = [int(row[3:]) for row in subheadings_splitpoints[index]]
                sub_sections = get_article_sections(chunk, indices)

                if self.show_isolated_headlines:
                    top_rows = chunk.split("\n")[:indices[0]]
                    final_output.append('\n'.join(top_rows))
                
                for subsection in sub_sections:
                    final_output.append(subsection)
            else:
                final_output.append(chunk)

        return final_output
    