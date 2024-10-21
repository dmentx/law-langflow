from pathlib import Path
from fpdf import FPDF
from langflow import logging
from langflow.custom import Component
from langflow.inputs.inputs import DataInput, MessageTextInput
from langflow.schema.data import Data
from langflow.schema.message import Message
from langflow.template.field.base import Output
import pandas as pd


class PdfOutputComponent(Component):
    display_name = "PDF Output"
    description = "Output a PDF File"
    icon = "file-user"
    name = "pdf_output"
    
    inputs = [
        DataInput(
            name= "data",
            display_name="Data Input",
            info= "The Data to save as a pdf"
        ),
        MessageTextInput(
            name="text",
            display_name= "Text",
            info="Text to save as as pdf"
        )
    ]
    
    outputs = [
        Output(display_name="PDF Output", name="pdf_output", method="make_pdf")
    ]
    
    
    def count_header(self, headers:list) -> int:
        return len(headers)
        
    
    def make_pdf(self) -> Message:
        data: list[Data] = self.data
        data_dict = [data_i.data for data_i in data]
        df = pd.DataFrame(data_dict)
        pdf = FPDF()
        pdf.set_auto_page_break(auto=True, margin=15)
        pdf.add_page()
        pdf.set_font('arial', size=12)
        if ( (len(df.columns)) > 4):
            len_columns = len(df.columns)
            error_message = f"The table has {len_columns} columns. The table should have less then 4 columns"
            self.status = error_message
            raise RuntimeError(error_message)
        else:
            df_html = df.to_html()
            pdf.write_html(df_html)
            path = Path("pdfs/test.pdf").resolve()    
            pdf.output(path)
            return Message(text=str(path))
        
        
        