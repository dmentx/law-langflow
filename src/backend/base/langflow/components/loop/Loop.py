from langflow.custom.custom_component.component import Component
from langflow.inputs.inputs import DropdownInput, HandleInput, MultilineInput
from langflow.schema.data import Data
from langflow.template.field.base import Output


class LoopComponent(Component):
    display_name="Loop"
    description="A Loop Component"
    icon="repeat"
    name="LoopComponent"
    
    inputs = [
        MultilineInput(name="template", display_name="Template", required=False),
        HandleInput(name="iterator",
                    display_name="Iterator", 
                    info="Please provide a Iterator Component",
                    input_types=["IteratorComponent"], 
                    list=True,
                    required=True),
        DropdownInput(name="loop_variant",display_name="Loop Variant", options=["Iterate"], value="Iterate")
    ]
    
    outputs = [
        Output(name="loop",display_name="Data List", method="build_loop")
    ]
    
    def build_loop(self) -> list[Data]:
        data = Data(text_key="wew")
        self.status = data
        return data