


from cohere import Tool
from langflow.custom.custom_component.component import Component
from langflow.inputs.inputs import DataInput, HandleInput
from langflow.schema.data import Data
from langflow.template.field.base import Output


class IteratorComponent(Component):
    display_name = "Iterator"
    description = "A Component from the Loop package"
    icon = "list-restart"
    name = "IteratorComponent"
    
    inputs = [
        DataInput(
            name="input_list",
            display_name="Input Data List",
            required=True,
            list=True
            ),
        HandleInput(
            name="condition",
            display_name="Condition",
            input_types=["Condition"],
            advanced=True,
            required=False
        ),
    ]
    
    outputs = [
        Output(name="iterator_tool",display_name="Iterator Tool", method="build_tool")
    ]
    
    def build_tool(self) -> list[Data]:
        data = Data()
        ld = [data]
        return ld
    
    
    
    