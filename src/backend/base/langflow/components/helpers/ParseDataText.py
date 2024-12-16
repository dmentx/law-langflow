import string
from langflow.custom import Component
from langflow.helpers.data import data_to_text
from langflow.io import DataInput, MultilineInput, Output, StrInput
from langflow.schema.message import Message


class ParseDataToTextComponent(Component):
    display_name = "Parse Data to Text"
    description = "Convert Data into plain text following a specified template."
    icon = "braces"
    name = "ParseDataText"

    inputs = [
        DataInput(name="data", display_name="Data", info="The data to convert to text."),
        MultilineInput(
            name="template",
            display_name="Template",
            info="The template to use for formatting the data. "
            "It can contain the keys {text}, {data} or any other key in the Data.",
            value="{text}",
        ),
        StrInput(name="sep", display_name="Separator", advanced=True, value="\n"),
    ]

    outputs = [
        Output(display_name="Text", name="text", method="parse_data"),
    ]

    def parse_data(self) -> Message:
        data = self.data if isinstance(self.data, list) else [self.data]
        template = self.template
        result_string = data_to_text(template, data, sep=self.sep)
        new_string = f"{str(self.template)}\n {result_string} "
        self.status = new_string
        return Message(text=new_string)