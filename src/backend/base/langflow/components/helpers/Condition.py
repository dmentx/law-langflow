
from enum import Enum
from langflow.custom import Component
from langflow.inputs import StrInput
from langflow.inputs.inputs import DropdownInput, MessageInput, MessageTextInput
from langflow.schema.message import Message
from langflow.template import Output



class ConditionOption(Enum):
    EQUALS = "Equals"
    NOT_EQUALS = "Not Equals"
    CONTAINS = "Contains"
    NOT_CONTAINS = "Not Contains"
    START_WITH = "Start With"
    END_WITH = "End With"
    GREATER_THAN = "Greater Than"
    LESS_THAN = "Less Than"



class Condition(Component):
    icon = "split"

    @staticmethod
    def get_condition_option() -> list:
        options = []
        for condition in ConditionOption:
            options.append(condition)
        return options
    
    
    
    
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
            options=get_condition_option()
        ),
        StrInput(
            name = "custom_prompt_condition",
            display_name= "Custom Prompt Condition",
            info= "Optional: Add custom condition."
        )
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
                case ConditionOption.EQUALS:
                    return input_text == text_compare
                case ConditionOption.NOT_EQUALS:
                    return input_text != text_compare
                case ConditionOption.CONTAINS:
                    return text_compare in input_text
                case ConditionOption.NOT_CONTAINS:
                    return text_compare not in input_text
                case ConditionOption.START_WITH:
                    return input_text.startswith(text_compare)
                case ConditionOption.END_WITH:
                    return input_text.endswith(text_compare)
                case ConditionOption.GREATER_THAN:
                    return self.num_condition(int(input_text), int(text_compare), lambda x, y: x > y)
                case ConditionOption.LESS_THAN:
                    return self.num_condition(int(input_text), int(text_compare), lambda x, y: x < y)
                case _:
                    return False
        return False
    
    def true_response(self) -> Message:
        result = self.evaluate_condition(self.input_text, self.text_compare, self.operator, self.custom_prompt_condition ) 
        if result:
            self.status = self.message
            return self.message
        else:
            self.stop("true_result")
            return None # type: ignore
        
    def false_response(self) -> Message:
        result = self.evaluate_condition(self.input_text, self.match_text, self.operator, self.case_sensitive)
        if not result:
            self.status = self.message
            return self.message
        else:
            self.stop("false_result")
            return None  # type: ignore


