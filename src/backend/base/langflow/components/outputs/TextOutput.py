from langflow.base.io.text import TextComponent
from langflow.inputs.inputs import StrInput
from langflow.io import MultilineInput, Output
from langflow.schema.message import Message


class TextOutputComponent(TextComponent):
    display_name = "Text Output"
    description = "Display a text output in the Playground."
    icon = "type"
    name = "TextOutput"

    inputs = [
        MultilineInput(
            name="input_value",
            display_name="Text",
            info="Text to be passed as output.",
        ),
        StrInput(
            name="text_output_value",
            display_name= "Text Output",
            info = "Text to be shown to User",
            advanced= True
        )
    ]
    outputs = [
        Output(display_name="Text", name="text", method="text_response"),
    ]

    def text_response(self) -> Message:
        if not self.text_output_value:
             message = Message(
            text=self.input_value,
        )
             self.status = self.input_value
             return message
        else:
            message = Message(
                text=self.text_output_value
            )
            self.status = self.text_output_value
            return message