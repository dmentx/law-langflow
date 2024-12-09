from pathlib import Path
from langflow.base.legal_chunker.legal_chunker import OCSLegalChunker
from langflow.custom.custom_component.component import Component
from langflow.inputs.inputs import FileInput, HandleInput
from langflow.schema.data import Data
from langflow.template.field.base import Output
from langflow.field_typing import Embeddings

class LegalChunkerComponent(Component):
    display_name = "Legal Chunker"
    description = "Process legal documents to split them into legal semantic chunks."
    name = "LegalChunker"
    icon = "section"
    
    inputs = [
        FileInput(
            name="file",
            display_name="Pdf Document",
            info = "A pdf file is required",
            required=True,
            fileTypes=["pdf"]
        ),
        HandleInput(
            name = "llm",
            display_name="Azure Language Model",
            input_types=["LanguageModel"],
            required=True
        ),
        # HandleInput(
        #     name="azure_embedding",
        #     display_name = "Azure Embedding Model",
        #     input_types=["Embeddings"],
        #     required=True
        # )
    ]
    
    outputs = [
        Output(display_name="Chunks", name="legal_embeddings", method="process_pdf")
    ]
    
    def process_pdf(self) -> Data:
        path = Path(self.file)
        print(path)
        azure_client = self.llm
        legal_chunker_processor = OCSLegalChunker(path,azure_client,show_isolated_headlines=True)
        res = legal_chunker_processor.process()
        print(res)
        return res