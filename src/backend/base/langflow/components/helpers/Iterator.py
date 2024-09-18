from langchain_openai import AzureChatOpenAI
from langflow.components.inputs import ChatInput
from langflow.components.outputs import ChatOutput
from langflow.custom.custom_component.component import Component
from langflow.field_typing.constants import LanguageModel
from langflow.inputs.inputs import DropdownInput, HandleInput, MessageTextInput, StrInput
from langflow.template.field.base import Input, Output
from langchain_core.prompts import ChatPromptTemplate
from langchain_core.output_parsers import StrOutputParser



class IteratorComponent(Component):
    display_name = "Iterator"
    description = "A Loop Component"
    icon = "repeat"
    name = "IteratorComponent"
    
    inputs = [
        StrInput(
            name="input_list",
            display_name="Input List",
            required=True,
            is_list=True
        ),
        HandleInput(
            name="llm",
            display_name="Language Model",
            input_types=["LanguageModel"],
            required=True
        ),
        MessageTextInput(
            name="prompt",
            display_name="Prompt",
            required=True,
            info="Write your prompt with variable {{yourInput}}. This Component will run this prompt on every entry on your input list."
        )
    ]
    outputs = [
        Output(display_name="The Iterartor", name="iterator", method= "get_iterator")
    ]
    
    def get_iterator(self) ->list[str]:
        rList = []
        llmModel:AzureChatOpenAI = self.llm
        system_template = "You are an experienced lawyer from Osborne Clarke (OC)."
        human_template = self.prompt
        prompt_template = ChatPromptTemplate.from_messages(
            [("system", system_template), ("user", human_template)]
        )
        chain = prompt_template | llmModel | StrOutputParser
        input_list:list[str] = self.input_list
        for sentence in input_list:
            output = chain.invoke({"yourInput":sentence})
            rList.append(output)
            
        return rList
            
        
        
        
        
        
    
    
    
    
    
    