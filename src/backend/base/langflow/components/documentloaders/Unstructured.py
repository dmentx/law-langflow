from turtle import mode
from langchain_unstructured import UnstructuredLoader
from langchain_community.document_loaders import UnstructuredExcelLoader
import logging

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
    
    def load_documents(self) -> list[Data]:
        file_path = self.file
        loader = UnstructuredLoader(file_path, url="http://localhost:8000", partition_via_api=True)
        docs = loader.load()
        logging.warning(len(docs))
        data = [Data.from_document(doc) for doc in docs]
        return data

