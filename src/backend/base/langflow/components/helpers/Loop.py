from langflow.custom.custom_component.component import Component
from langflow.inputs.inputs import DataInput, DropdownInput, HandleInput, MultilineInput
from langflow.schema.data import Data
from langflow.template.field.base import Output
from langchain_core.prompts import ChatPromptTemplate
from langchain_core.output_parsers import StrOutputParser


class LoopComponent(Component):
    display_name="Loop"
    description="A Loop Component"
    icon="repeat"
    name="LoopComponent"
    
    inputs = [
        MultilineInput(
            name="prompt",
            display_name="Prompt",
            required=True,
            info="Write your prompt with variable {yourInput1} and 2. This Component will run this prompt on every entry on your input list."
        ),
        DataInput(
            name="iterator",
            display_name="Lists", 
            info="Please provide your lists",
            is_list=True,
            input_types=["Data"],
            required=True),
        HandleInput(
            name="llm",
            display_name="Language Model",
            input_types=["LanguageModel"],
            required=True
        ),
        DataInput(
            name="iterator2",
            display_name="Iterator 2",
            is_list=True,
            required = False,
            advanced=True
        ),
        DropdownInput(name="loop_variant",display_name="Loop Variant", options=["Iterate"], value="Iterate")
    ]
    
    outputs = [
        Output(name="loop",display_name="Data List", method="build_loop")
    ]
    
    def build_loop(self) -> list[Data]:
        if not hasattr(self.iterator2, '__iter__') or len(self.iterator2) == 0:
            rList:list[Data] = []
            llm_model = self.llm
            system_template = "You are an experienced lawyer from Osborne Clarke (OC)."
            human_template = self.prompt
            prompt_template = ChatPromptTemplate.from_messages(
                [("system", system_template), ("user", human_template)]
            )
            chain = prompt_template | llm_model | StrOutputParser()
            for sentence in self.iterator:
                if not isinstance(sentence,Data):
                    raise ValueError("Input list must contain Data objects")
                output = chain.invoke({"yourInput1":list(sentence.data.values())[0]})
                data = Data(data={"text": output})
                rList.append(data)
            self.status = rList
            return rList
        else:
            rList:list[Data] = []
            llm_model = self.llm
            system_template = "You are an experienced lawyer from Osborne Clarke (OC)."
            human_template = self.prompt
            prompt_template = ChatPromptTemplate.from_messages(
                [("system", system_template), ("user", human_template)]
            )
            chain = prompt_template | llm_model | StrOutputParser()
            for sentence1 in self.iterator:
                for sentence2 in self.iterator2:
                    print(sentence2)
                    output = chain.invoke({"yourInput1": str(sentence1), "yourInput2": str(sentence2)})
                    data = Data(data={"text": output})
                    rList.append(data)
            self.status = rList
            return rList        
