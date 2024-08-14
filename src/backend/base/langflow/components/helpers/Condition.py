
from enum import Enum
from langflow.custom import Component
from langflow.custom.eval import eval_custom_component_code
from langflow.inputs import StrInput
from langflow.inputs.inputs import DropdownInput, MessageInput, MessageTextInput
from langflow.schema.message import Message
from langflow.template import Output
from sympy import false




class ConditionComponent(Component):
    display_name = "Condition"
    description = "Custom Condition"
    name = "Condition"
    icon = "split"
    
    class ConditionOption(Enum):
        EQUALS = "Equals"
        NOT_EQUALS = "Not Equals"
        CONTAINS = "Contains"
        NOT_CONTAINS = "Not Contains"
        START_WITH = "Start With"
        END_WITH = "End With"
        GREATER_THAN = "Greater Than"
        LESS_THAN = "Less Than"
        
        @classmethod
        def list(cls):
            return list(map(lambda c: c.value, cls))


    
    
    
    inputs = [
        MessageTextInput(
            name= "input_text",
            display_name="Message Input",
            info= "Text to be processed.",
            required= True
        ),
        MessageTextInput(
            name="text_compare",
            display_name="Match Text",
            info="The text input to compare against"
        ),
        DropdownInput(
            name="operator",
            display_name="Operator",
            info="The operator to apply for comparing the texts.",
            options= ConditionOption.list()
        ),
        StrInput(
            name = "custom_prompt_condition",
            display_name= "Custom Prompt Condition",
            info= "Optional: Add custom condition."
        ),
        MessageInput(
            name="message",
            display_name="Message",
            info="The message to pass through either route.",
        ),
    ]

    outputs = [
        Output(display_name="True Route", name="true_result", method="true_response"),
        Output(display_name="False Route", name="false_result", method="false_response"),
    ]
    
    @staticmethod
    def num_condition(a,b, condition):
        return condition(a,b)
    
    

    def evaluate_condition(self, input_text: str, text_compare: str, operator: str, custom_prompt_condition: str) -> bool:
        if not custom_prompt_condition:
            match operator:
                case ConditionComponent.ConditionOption.EQUALS:
                    return input_text == text_compare
                case ConditionComponent.ConditionOption.NOT_EQUALS:
                    return input_text != text_compare
                case ConditionComponent.ConditionOption.CONTAINS:
                    return text_compare in input_text
                case ConditionComponent.ConditionOption.NOT_CONTAINS:
                    return text_compare not in input_text
                case ConditionComponent.ConditionOption.START_WITH:
                    return input_text.startswith(text_compare)
                case ConditionComponent.ConditionOption.END_WITH:
                    return input_text.endswith(text_compare)
                case ConditionComponent.ConditionOption.GREATER_THAN:
                    return self.num_condition(int(input_text), int(text_compare), lambda x, y: x > y)
                case ConditionComponent.ConditionOption.LESS_THAN:
                    return self.num_condition(int(input_text), int(text_compare), lambda x, y: x < y)
                case _:
                    return False
        else:
            self.evaluate_custom_prompt_condition(input_text, text_compare, custom_prompt_condition)
        return False
    
    def evaluate_custom_prompt_condition(self, input_text: str, text_compare: str, custom_prompt_condition: str ) -> bool:
        return false
        
    
    def true_response(self) -> Message:
        result = self.evaluate_condition(self.input_text, self.text_compare, self.operator, self.custom_prompt_condition ) 
        if result:
            self.status = self.message
            return self.message
        else:
            self.stop("true_result")
            return None # type: ignore
        
    def false_response(self) -> Message:
        result = self.evaluate_condition(self.input_text, self.text_compare, self.operator, self.custom_prompt_condition)
        if not result:
            self.status = self.message
            return self.message
        else:
            self.stop("false_result")
            return None  # type: ignore


