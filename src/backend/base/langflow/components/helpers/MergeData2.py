from langflow.custom.custom_component.component import Component
from langflow.inputs.inputs import DataInput
from langflow.logging import logger
from langflow.schema.data import Data
from langflow.template.field.base import Output
import pandas as pd
import numpy as np

class MergeData2Component(Component):
    display_name = "Merge Data (Part 2)"
    name = "MergeData2"
    
    inputs = [
        DataInput(
            name="data",
            display_name="Data",
            required=True,
            list=True
        )
    ]
    
    outputs= [
        Output(display_name="Merged Data", name="merged_data", method="build")
    ]
    
    def build(self) -> list[Data]:
        data_list: list[Data] = self.data
        if not data_list:
            return []
        
        try:
            # Erstellen eines DataFrames aus den Data-Objekten
            df = pd.DataFrame([data.data for data in data_list])
            
            rows = len(df)
            for idx, col in enumerate(df.columns[1:], start=1):  # Erste Spalte bleibt unverändert
                shift_count = idx * (rows // len(df.columns))
                df[col] = df[col].shift(-shift_count).fillna("")
                
            # Konvertiere leere Strings in NaN, dann entferne Zeilen, die komplett leer sind
            df.replace("", np.nan, inplace=True)
            df_cleaned = df.dropna(how="all").reset_index(drop=True)
            
            
            # Konvertieren des bereinigten DataFrames in list[Data]
            merged_data_list = [Data(data=row) for row in df_cleaned.to_dict(orient='records')]
        
        except Exception:
            logger.exception("An error occurred during the data merging process.")
            raise
        print(merged_data_list)
        return merged_data_list