

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
        path= Path("file_upload/excels/text.xlsx").resolve()
        df.to_excel(excel_writer=path)
        file_url = upload_blob_file(path,".xlsx")
        os.remove(path)
        return Message(text=f"[Download Excel]({str(file_url)})")