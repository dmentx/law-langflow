from langflow.custom import Component
from langflow.helpers.data import data_to_text, dataList_to_DataList_from_template
from langflow.inputs.inputs import BoolInput
from langflow.io import DataInput, MultilineInput, Output, StrInput
from langflow.schema.data import Data


class ParseDataComponent(Component):
    display_name = "Parse Data"
    description = "Convert Data into plain text or Data List following a specified template."
    icon = "braces"
    name = "ParseData"

    inputs = [
        DataInput(name="data", display_name="Data", info="The data to convert to text."),
        MultilineInput(
            name="template",
            display_name="Template",
            info="The template to use for formatting the data. It can contain the keys {text}, {data} or any other key in the Data.",
            value="{text}",
        ),
        StrInput(name="sep", display_name="Separator", advanced=True, value="\n"),
        BoolInput(
            name="dataList",
            display_name="Data as List",
            info="Check this if you want the Data as list",
            dynamic=True
        )
    ]

    outputs = [
        Output(display_name="Text", name="text", method="parse_data"),
    ]

    def parse_data(self) -> list[Data]:
        data = self.data if isinstance(self.data, list) else [self.data]
        template = self.template
        if self.dataList:
            result_list = dataList_to_DataList_from_template(template, data)
            return result_list
            
        result_string = data_to_text(template, data, sep=self.sep)
        self.status = result_string
        return [Data(text_key=result_string)]
