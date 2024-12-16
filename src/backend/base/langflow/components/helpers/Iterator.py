# import json
# from langchain_openai import AzureChatOpenAI
# from langflow.custom.custom_component.component import Component
# from langflow.field_typing.constants import LanguageModel
# from langflow.inputs.input_mixin import FieldTypes
# from langflow.inputs.inputs import DataInput, HandleInput, MessageTextInput, MultilineInput
# from langflow.schema.data import Data
# from langflow.template.field.base import Output
# from langchain_core.prompts import ChatPromptTemplate
# from langchain_core.output_parsers import StrOutputParser



# class IteratorComponent(Component):
#     display_name = "Iterator"
#     description = "A Loop Component"
#     icon = "repeat"
#     name = "IteratorComponent"
    
#     inputs = [
#         DataInput(
#             name="input_list",
#             display_name="Input Data List",
#             required=True,
#             list=True
#             ),
#         HandleInput(
#             name="llm",
#             display_name="Language Model",
#             input_types=["LanguageModel"],
#             required=True
#         ),
#         MultilineInput(
#             name="prompt",
#             display_name="Prompt",
#             required=True,
#             info="Write your prompt with variable {yourInput}. This Component will run this prompt on every entry on your input list."
#         )
#     ]
#     outputs = [
#         Output(display_name="Output List", name="iterator_output", method= "get_iterator")
#     ]
    
#     def get_iterator(self) ->list[Data]:
#         rList:list[Data] = []
#         llmModel = self.llm
#         system_template = "You are an experienced lawyer from Osborne Clarke (OC)."
#         human_template = self.prompt
#         prompt_template = ChatPromptTemplate.from_messages(
#             [("system", system_template), ("user", human_template)]
#         )
#         chain = prompt_template | llmModel | StrOutputParser()
#         input_list = self.input_list
#         for sentence in input_list:
#             if not isinstance(sentence, Data):
#                 raise ValueError("Input list must contain Data objects")
#             output = chain.invoke({"yourInput":json.dumps(sentence)})
#             data = Data(data={"text": output})
#             rList.append(data)
            
#         self.status = rList
#         return rList
             
        
        
        
        
        
    
    
    
    
    
    