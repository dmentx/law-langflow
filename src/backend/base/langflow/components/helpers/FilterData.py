from enum import Enum
from langflow.custom import Component
from langflow.io import DataInput, StrInput, Output, DropdownInput
from langflow.schema import Data


class FilterDataComponent(Component):
    display_name = "Filter Data"
    description = "Filters Data object."
    name = "FilterData"
    icon = "filter"
    
    class ConditionOption(Enum):
        EQUALS = "Equals"
        NOT_EQUALS = "Not Equals"
        CONTAINS = "Contains"
        NOT_CONTAINS = "Not Contains"
        START_WITH = "Start With"
        END_WITH = "End With"
        GREATER_THAN = "Greater Than"
        LESS_THAN = "Less Than"    

    inputs = [
        DataInput(
            name="data_list",
            display_name="Data",
            info="Data object to filter.",
        ),
        StrInput(
            name="column",
            display_name="Column name",
            required=False
        ),
        StrInput(
            name="text_compare",
            display_name="Match Text",
            info="The text input to compare against"
        ),
        DropdownInput(
            name="operator",
            display_name="Operator",
            info="The operator to apply for comparing the texts.",
            options=[option.value for option in ConditionOption]
        )
    ]

    outputs = [
        Output(
            display_name="Filtered Data",
            name="filtered_data",
            method="filter_data",
            types=["Data"]
        ),
    ]
    
    def evaluate_condition(self) -> list[Data]:
        input_list: list[Data] = self.data_list
        match_value: str = self.text_compare
        condition = self.operator
        column: str = self.column
        output_list: list[Data] = []

        try:
            match condition:
                case FilterDataComponent.ConditionOption.GREATER_THAN.value:
                    output_list = [data for data in input_list if float(data.data.get(column, 0)) > float(match_value)]
                case FilterDataComponent.ConditionOption.LESS_THAN.value:
                    output_list = [data for data in input_list if float(data.data.get(column, 0)) < float(match_value)]
                case FilterDataComponent.ConditionOption.EQUALS.value:
                    output_list = [data for data in input_list if str(data.data.get(column)) == str(match_value)]
                case FilterDataComponent.ConditionOption.NOT_EQUALS.value:
                    output_list = [
                        data for data in input_list
                        if (float(data.data.get(column, 0)) != float(match_value) if isinstance(match_value, (int, float)) else data.data.get(column) != match_value)
                    ]
                case FilterDataComponent.ConditionOption.CONTAINS.value:
                    output_list = [data for data in input_list if match_value in str(data.data.get(column, ""))]
                case FilterDataComponent.ConditionOption.NOT_CONTAINS.value:
                    output_list = [data for data in input_list if match_value not in str(data.data.get(column, ""))]
                case FilterDataComponent.ConditionOption.START_WITH.value:
                    output_list = [data for data in input_list if str(data.data.get(column, "")).startswith(match_value)]
                case FilterDataComponent.ConditionOption.END_WITH.value:
                    output_list = [data for data in input_list if str(data.data.get(column, "")).endswith(match_value)]
                case _:
                    pass  
        except (TypeError, ValueError) as e:
            print(f"Error in condition evaluation: {e}")
        
        return output_list
    
    def filter_data(self) -> list[Data]:
        return self.evaluate_condition()
