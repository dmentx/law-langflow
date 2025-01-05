from pathlib import Path
from langflow.base.legal_chunker.legal_chunker import OCSLegalChunker
from langflow.custom.custom_component.component import Component
from langflow.inputs.inputs import FileInput, HandleInput
from langflow.schema.data import Data
from langflow.template.field.base import Output
from langflow.field_typing import Embeddings
import json

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
            display_name="Language Model",
            input_types=["LanguageModel"],
            required=True
        ),
    ]
    
    outputs = [
        Output(display_name="Chunks", name="legal_embeddings", method="process_pdf")
    ]
    
    def process_pdf(self) -> Data:
        path = Path(self.file)
        print(path)
        azure_client = self.llm
        legal_chunker_processor = OCSLegalChunker(path,azure_client,show_isolated_headlines=True)
        json_str = legal_chunker_processor.process()
        json_list = json.loads(json_str)
        chunk_list_data:list[Data] = []
        for chunk in json_list:
            json_dictP = {"Legal Chunk":chunk}
            data = Data(data=json_dictP)
            chunk_list_data.append(data)
        data = chunk_list_data
        return data