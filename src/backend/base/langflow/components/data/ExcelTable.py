import logging
from langflow.inputs import FileInput
from langflow.custom import Component
from langflow.inputs.inputs import StrInput
from langflow.schema.data import Data
from langflow.template.field.base import Output
from openpyxl.utils.cell import coordinate_from_string
import pandas as pd

class ExcelTableComponent(Component):
    display_name = "Excel Table"
    description = "Load excel table as Data"
    icon = "table"
    name = "excel_table"
    
    inputs = [
        FileInput(
            name="path",
            display_name = "Path",
            file_types = ["xlsx"]
        ),
        StrInput(
            name = "cells",
            display_name = "Cell Range",
            required=True,
            info="Enter the range in which the table lies. Example: A4:N28"
            
        )
    ]
    
    outputs = [
        Output(display_name="Data", name="data", method="load_excel"),
    ]
    
    
    def convert_range_string_to_read_excel_args(self, excel_range):
        '''
        Converts a range (i.e. something like 'A3:D20') and returns
        the corresponding arguments to use in pd.read_excel.
        '''
        # Get cell addresses from range (i.e. A3 and D20)
        upper_left, lower_right = excel_range.split(':')
        
        # Convert cell address ('A3') to col (A) and row (3)
        left_col, top_row = coordinate_from_string(upper_left)
        right_col, bottom_row = coordinate_from_string(lower_right)
        
        return {'usecols': f'{left_col}:{right_col}',
                'skiprows': int(top_row) - 1,
                'nrows': int(bottom_row) - int(top_row) + 1}
        
        
    
    def load_excel(self) -> list[Data]:
        if not self.path:
            raise ValueError("Please, upload a file to use this component.")
        resolved_path = self.resolve_path(self.path)
        excel_range = self.cells
        args = self.convert_range_string_to_read_excel_args(excel_range)
        df = pd.read_excel(resolved_path,**args)
        df_dict = df.to_dict(orient='records')
        data_list = [Data(data=data) for data in df_dict]
        self.status = data_list
        return data_list
        
        
        
        