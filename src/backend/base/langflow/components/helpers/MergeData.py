
from langflow.custom.custom_component.component import Component
from langflow.inputs.inputs import DataInput
from langflow.logging import logger
from langflow.schema import Data
from langflow.template.field.base import Output
import pandas as pd


class MergeDataComponent(Component):
    display_name = "Merge Data (Part 1)"
    description = "Combines multiple data sources into a single unified Data object."
    beta: bool = False
    name = "MergeData"

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
            merged_data_dicts = pd.DataFrame([data.data for data in data_list]).fillna("").to_dict(orient="records")
            merged_data_list = [Data(data=merged_dict) for merged_dict in merged_data_dicts]
        except Exception:
            logger.exception("An error occurred during the data merging process.")
            raise

        self.status = merged_data_list
        return merged_data_list
