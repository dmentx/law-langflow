
from langchain_core.tools import Tool
from enum import Enum
import logging
import os
from dotenv import load_dotenv
from langchain_openai import AzureChatOpenAI
from langchain_core.prompts import ChatPromptTemplate
from langchain.output_parsers.boolean import BooleanOutputParser
from langflow.schema.data import Data
from sqlalchemy import null
from word2number.w2n import word_to_num
from word2num_de import word_to_number
from numbers import Number
from langflow.api.log_router import logs
from langflow.custom import Component
from langflow.custom.eval import eval_custom_component_code
from langflow.inputs import StrInput
from langflow.inputs.inputs import DropdownInput, MessageInput, MessageTextInput, BoolInput
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
            input_types = ["Message", "Data"],
            required= True,
        ),
        StrInput(
            name = "column",
            display_name = "Column name",
            required = False
        ),
        MessageTextInput(
            name="text_compare",
            display_name="Match Text",
            info="The text input to compare against",
            input_types= ["Message","Data"],
            list=True
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
        BoolInput(
            name = "list_output",
            display_name = "Get filtered list as output",
            dynamic = True,
            advanced=True
        ),
        MessageInput(
            name="message",
            display_name="Message",
            info="The message to pass through either route.",
        ),
    ]

    outputs = [
        Output(display_name="True Route", name="true_result", method="true_response",types=["Message","Data"]),
        Output(display_name="False Route", name="false_result", method="false_response")
    ]
    
    @staticmethod
    def num_condition(a,b, condition):
        return condition(a,b)
    
    @staticmethod
    def convert_dataList_to_string(data_list:list[Data]):
        data_strings = [str(data.get_text) for data in data_list]
        return " + ".join(data_strings)
    
    def filter_list_of_condition(self)->list[Data]:
        input_list:list[Data] = self.input_text
        match_value = self.text_compare
        condition = self.operator
        column = self.column
        output_list:list[Data]
        match condition:
            case ConditionComponent.ConditionOption.GREATER_THAN.value:
                output_list =[data for data in input_list if float(data.data.get(column,0)) > match_value]
                return output_list
            case ConditionComponent.ConditionOption.LESS_THAN.value:
                output_list =[data for data in input_list if float(data.data.get(column,0)) < match_value]
                return output_list
            case ConditionComponent.ConditionOption.EQUALS.value:
                output_list = [
                    data for data in input_list
                    if (float(data.data.get(column, 0)) == match_value if isinstance(match_value, (int, float)) else data.data.get(column) == match_value)
                ]
                return output_list

            case ConditionComponent.ConditionOption.NOT_EQUALS.value:
                output_list = [
                    data for data in input_list
                    if (float(data.data.get(column, 0)) != match_value if isinstance(match_value, (int, float)) else data.data.get(column) != match_value)
                ]
                return output_list
            case ConditionComponent.ConditionOption.CONTAINS.value:
                output_list = [data for data in input_list if str(data.data.get(column)) in match_value]
                return output_list
            case ConditionComponent.ConditionOption.NOT_CONTAINS.value:
                output_list = [data for data in input_list if str(data.data.get(column)) not in match_value]
                return output_list
            case ConditionComponent.ConditionOption.START_WITH.value:
                output_list = [data for data in input_list if str(data.data.get(column)).startswith(match_value)]
                return output_list
            case ConditionComponent.ConditionOption.END_WITH.value:
                output_list = [data for data in input_list if str(data.data.get(column)).endswith(match_value)]               
            case _:
                return False    
                
            
        
        
    

    def evaluate_condition(self, input_text: str, text_compare: str, operator: str, custom_prompt_condition: str) -> bool:
        if self.list_output:
            self.filter_list_of_condition
        if not custom_prompt_condition:
            match operator:
                case ConditionComponent.ConditionOption.EQUALS.value:
                    return input_text == text_compare
                case ConditionComponent.ConditionOption.NOT_EQUALS.value:
                    return input_text != text_compare
                case ConditionComponent.ConditionOption.CONTAINS.value:
                    return text_compare in input_text
                case ConditionComponent.ConditionOption.NOT_CONTAINS.value:
                    return text_compare not in input_text
                case ConditionComponent.ConditionOption.START_WITH.value:
                    return input_text.startswith(text_compare)
                case ConditionComponent.ConditionOption.END_WITH.value:
                    return input_text.endswith(text_compare)
                case ConditionComponent.ConditionOption.GREATER_THAN.value:
                    return self.num_condition(self.get_number_string(input_text),self.get_number_string(text_compare), lambda x, y: x > y)
                case ConditionComponent.ConditionOption.LESS_THAN.value:
                    return self.num_condition(self.get_number_string(input_text),self.get_number_string(text_compare), lambda x, y: x < y)
                case _:
                    return False
        else:
            return self.evaluate_custom_prompt_condition(input_text, text_compare, custom_prompt_condition)
    
    def evaluate_custom_prompt_condition(self, input_text: str, text_compare: str, custom_prompt_condition) -> bool:
        if(isinstance(custom_prompt_condition,list)):
            custom_prompt_condition = self.convert_dataList_to_string(custom_prompt_condition)
        model = AzureChatOpenAI(
            azure_endpoint=os.environ["AZURE_OPENAI_ENDPOINT"],
            azure_deployment=os.environ["AZURE_OPENAI_API_DEPLOYMENT_NAME"],
            api_version=os.environ["AZURE_OPENAI_API_VERSION"],
            )
        
        system_template = "You get two inputs and a condition and check whether the condition is true or false. Answer with YES or NO"
        human_template = "Input 1: {input_text}. Condition: {custom_prompt_condition}. Input 2: {text_compare}"
        prompt_template = ChatPromptTemplate.from_messages(
            [("system", system_template), ("user", human_template)]
        )
        parser = BooleanOutputParser()
        chain = prompt_template | model | parser
        output = chain.invoke({"input_text":input_text, "custom_prompt_condition": custom_prompt_condition, "text_compare":text_compare})
        logging.warning(output)
        return output
    
    def true_response(self) -> Message | list[Data]:
        result = self.evaluate_condition(self.input_text, self.text_compare, self.operator, self.custom_prompt_condition)
        if result:
            logging.info(f"{result}")
            self.status = self.message
            return self.message
        else:
            self.stop("true_result")
            return None # type: ignore
        
    def false_response(self) -> Message:
        result = self.evaluate_condition(self.input_text, self.text_compare, self.operator, self.custom_prompt_condition)
        if not result:
            logging.info(f"{result}")
            self.status = self.message
            return self.message
        else:
            self.stop("false_result")
            return None  # type: ignore

    def get_number_string(self, number):
        try:
            return word_to_num(number)
        except ValueError:
            try:
                return word_to_number(number)
            except ValueError:
                return number
                              