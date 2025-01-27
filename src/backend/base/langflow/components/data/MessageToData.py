from loguru import logger
import ast  
from langflow.custom import Component
from langflow.io import MessageInput, Output
from langflow.schema import Data
from langflow.schema.message import Message


class MessageToDataComponent(Component):
    display_name = "Message to Data"
    description = "Convert a Message object to a Data object"
    icon = "message-square-share"
    name = "MessagetoData"

    inputs = [
        MessageInput(
            name="message",
            display_name="Message",
            info="The Message object to convert to a Data object",
        ),
    ]

    outputs = [
        Output(display_name="Data", name="data", method="convert_message_to_data"),
    ]

    def convert_message_to_data(self) -> Data:
        message: Message = self.message
        if isinstance(message, Message):
            if isinstance(message.text, str):
                try:
                    parsed_dict = ast.literal_eval(message.text)
                    if isinstance(parsed_dict, dict):
                        return Data(data=parsed_dict)
                except (ValueError, SyntaxError) as exc:
                    logger.opt(exception=True).debug(f"Error Conversion Failed: {exc}")
            
            # Fallback
            return Data(data=self.message.data)

        msg = "Error converting Message to Data: Input must be a Message object"
        logger.opt(exception=True).debug(msg)
        self.status = msg
        return Data(data={"error": msg})
