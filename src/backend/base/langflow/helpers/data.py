
from typing import Union

from langchain_core.documents import Document

from langflow.schema import Data
from langflow.schema.message import Message


def docs_to_data(documents: list[Document]) -> list[Data]:
    """
    Converts a list of Documents to a list of Data.

    Args:
        documents (list[Document]): The list of Documents to convert.

    Returns:
        list[Data]: The converted list of Data.
    """
    return [Data.from_document(document) for document in documents]


def data_to_text(template: str, data: Union[Data, list[Data]], sep: str = "\n") -> str:
    """
    Converts a list of Data to a list of texts.

    Args:
        data (list[Data]): The list of Data to convert.

    Returns:
        str: The converted text.
    """
    if isinstance(data, (Data)):
        data = [data]
    # Check if there are any format strings in the template
    _data = []
    for value in data:
        # If it is not a record, create one with the key "text"
        if not isinstance(value, Data):
            value = Data(text=value)
        _data.append(value)

    formated_data = [template.format(data=value.data, **value.data) for value in _data]
    return sep.join(formated_data)


def messages_to_text(template: str, messages: Union[Message, list[Message]]) -> str:
    """
    Converts a list of Messages to a list of texts.

    Args:
        messages (list[Message]): The list of Messages to convert.

    Returns:
        list[str]: The converted list of texts.
    """
    if isinstance(messages, (Message)):
        messages = [messages]
    # Check if there are any format strings in the template
    _messages = []
    for message in messages:
        # If it is not a message, create one with the key "text"
        if not isinstance(message, Message):
            raise ValueError("All elements in the list must be of type Message.")
        _messages.append(message)

    formated_messages = [template.format(data=message.model_dump(), **message.model_dump()) for message in _messages]
    return "\n".join(formated_messages)


def dataList_to_DataList_from_template(template: str, data: Union[Data, list[Data]]) -> list[Data]:
    """
    Converts a Data object or a list of Data objects into a list of Data objects based on the specified template.

    Args:
        template (str): The template string used for formatting.
        data (Union[Data, List[Data]]): A single Data object or a list of Data objects to convert.

    Returns:
        List[Data]: A list of Data objects with their 'text' fields formatted according to the specified template.
    """

    # If data is a single Data object, wrap it in a list
    if isinstance(data, Data):
        data = [data]

    # List to hold the formatted Data objects
    formatted_data_list = []

    for value in data:
        # Ensure that each value is a Data object
        if not isinstance(value, Data):
            value = Data(text=value)

        # Format the text according to the template
        formatted_text = template.format(data=value.data, **value.data)
        
        # Create a new Data object with the formatted text and add it to the list
        formatted_data = Data(text=formatted_text)
        formatted_data_list.append(formatted_data)

    return formatted_data_list