from langflow.custom.custom_component.component import Component
from langflow.inputs.inputs import DataInput, DropdownInput, HandleInput, IteratorListInput, MultilineInput
from langflow.schema.data import Data
from langflow.template.field.base import Output


class LoopComponent(Component):
    display_name="Loop"
    description="A Loop Component"
    icon="repeat"
    name="LoopComponent"
    
    inputs = [
        MultilineInput(name="template", display_name="Template", required=False),
        IteratorListInput(name="iterator",
                    display_name="Lists", 
                    info="Please provide your lists",
                    is_list=True,
                    input_types=["Data"],
                    required=True),
        DropdownInput(name="loop_variant",display_name="Loop Variant", options=["Iterate"], value="Iterate")
    ]
    
    outputs = [
        Output(name="loop",display_name="Data List", method="build_loop")
    ]
    
    def build_loop(self) -> list[Data]:
        l1 = self.iterator[0]
        l2 = self.iterator[1]
        print(l1)
        print(l2)
        data = Data(text_key="wew")
        self.status = data
        return data