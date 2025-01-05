from langflow.custom import Component
from langflow.inputs.inputs import DropdownInput
from langflow.template.field.base import Output
from langflow.field_typing.constants import OutputParser
from langflow.schema.message import Message
from langchain_core.output_parsers import CommaSeparatedListOutputParser ,JsonOutputParser, XMLOutputParser, NumberedListOutputParser

class OutputParserComponent(Component):
    display_name = "Output Parser"
    description = "Parse the output of an LLM into specified output."
    icon="notebook-pen"
    name= "ouput_parser"
    
    inputs = [
        DropdownInput(
            name="parser_type",
            display_name="Parser",
            options=["JSON","CSV","XML","NUMBER"],
            required=True
        ),
    ]
    
    outputs = [
        Output(
            display_name="Format Instructions",
            name="format_instructions",
            info="Pass to a prompt template to include formatting instructions for LLM responses.",
            method="format_instructions",
        )
    ]



    def format_instructions(self) -> Message:
        if self.parser_type == "CSV":
            return Message(text=CommaSeparatedListOutputParser().get_format_instructions())
        elif self.parser_type == "JSON":
            return Message(text=JsonOutputParser().get_format_instructions())
        elif self.parser_type == "XML":
            return Message(text=XMLOutputParser().get_format_instructions())
        elif self.parser_type == "NUMBER":
            return Message(text=NumberedListOutputParser().get_format_instructions())
        msg = "Unsupported or missing parser"
        raise ValueError(msg)