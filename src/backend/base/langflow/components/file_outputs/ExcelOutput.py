

import os
from pathlib import Path
from langflow.custom.custom_component.component import Component
from langflow.helpers.file_upload import upload_blob_file
from langflow.inputs.inputs import DataInput
from langflow.schema.data import Data
from langflow.schema.message import Message
from langflow.template.field.base import Output
import pandas as pd


class ExcelOutputComponent(Component):
    display_name = "Excel Output",
    description = "Output as Excel file"
    icon = "grid-3x3"
    name = "ExcelComponent"
    
    inputs = [
        DataInput(
            name="data_list",
            display_name="Input Data List",
            required=True,
            list=True
        )
    ]
    
    outputs = [
        Output(display_name="Excel File", name="excel_file", method="make_excel")
    ]
    
    def make_excel(self) -> Message:
        data:list[Data] = self.data_list
        data_dict = [data_i.data for data_i in data]
        df = pd.DataFrame(data_dict)

        folder_path = Path("file_upload/excels")
        folder_path.mkdir(parents=True, exist_ok=True) 

        file_path = folder_path / "text.xlsx" 
        df.to_excel(excel_writer=file_path)

        file_url = upload_blob_file(file_path, ".xlsx")
        os.remove(file_path)  
        return Message(text=f"[Download Excel]({str(file_url)})")