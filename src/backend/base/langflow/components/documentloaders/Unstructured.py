from turtle import mode
from langchain_unstructured import UnstructuredLoader
from langchain_community.document_loaders import UnstructuredExcelLoader

from langflow.custom import Component

from langflow.inputs import FileInput, SecretStrInput
from langflow.schema import Data
from langflow.template import Output


class UnstructuredComponent(Component):
    display_name = "Unstructured"
    description = "Uses Unstructured.io to extract clean text from raw source documents. Supports: PDF, DOCX, TXT, XLSX"
    documentation = "https://python.langchain.com/v0.2/docs/integrations/providers/unstructured/"
    trace_type = "tool"
    icon = "Unstructured"
    name = "Unstructured"

    inputs = [
        FileInput(
            name="file",
            display_name="File",
            required=True,
            info="The path to the file with which you want to use Unstructured to parse.",
            file_types=["pdf", "docx", "txt","xlsx"],  # TODO: Support all unstructured file types
        )
    ]

    outputs = [
        Output(name="data", display_name="Data", method="load_documents"),
    ]

    def build_unstructured(self) -> UnstructuredLoader:
        file_paths = [self.file]

        loader = UnstructuredLoader(
            file_paths,
        )

        return loader
    
    def build_unstructured_excel(self) -> UnstructuredExcelLoader:
        file_paths = [self.file]
        
        loader = UnstructuredExcelLoader(
            file_paths,
            mode="elements"
        )
        
        return loader
        

    def load_documents(self) -> list[Data]:
        file_path = [self.file][0]
        try:
            if file_path.endswith(".xlsx"):
                unstructured = self.build_unstructured_excel()
                documents = unstructured.load()
                data = [Data.from_document(doc) for doc in documents]
                self.status = data
                return data
            else:
                unstructured = self.build_unstructured()
                documents = unstructured.load()
                data = [Data.from_document(doc) for doc in documents]  # Using the from_document method of Data
                self.status = data
                return data
        except Exception as e:
            raise ValueError(f"Error loading file {file_path}: {e}") from e