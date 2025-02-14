from langchain_openai import AzureChatOpenAI
from langflow.base.models.model import LCModelComponent
from langflow.field_typing import LanguageModel
from langflow.inputs.inputs import StrInput
from langflow.io import DropdownInput, FloatInput, IntInput, SecretStrInput


class AzureChatOpenAIComponent(LCModelComponent):
    display_name: str = "Azure OpenAI"
    description: str = "Generate text using Azure OpenAI LLMs."
    documentation: str = "https://python.langchain.com/docs/integrations/llms/azure_openai"
    beta = False
    icon = "Azure"
    name = "AzureOpenAIModel"

    AZURE_OPENAI_API_VERSIONS = [
        "2024-08-01-preview",
        "2024-02-15-preview",
        "2023-03-15-preview",
        "2023-05-15",
        "2023-06-01-preview",
        "2023-07-01-preview",
        "2023-08-01-preview",
        "2023-09-01-preview",
        "2023-12-01-preview",
        "2024-04-09",
        "2024-05-13",
    ]

    inputs = LCModelComponent._base_inputs + [
        StrInput(
            name="azure_endpoint",
            display_name="Azure Endpoint",
            info="Your Azure endpoint, including the resource. Example: `https://example-resource.azure.openai.com/`",
            required=True,
        ),
        StrInput(name="azure_deployment", display_name="Deployment Name", required=True),
        SecretStrInput(name="api_key", display_name="API Key"),
        DropdownInput(
            name="api_version",
            display_name="API Version",
            options=AZURE_OPENAI_API_VERSIONS,
            value=AZURE_OPENAI_API_VERSIONS[-1],
        ),
        FloatInput(name="temperature", display_name="Temperature", value=0.7),
        IntInput(
            name="max_tokens",
            display_name="Max Tokens",
            advanced=True,
            info="The maximum number of tokens to generate. Set to 0 for unlimited tokens.",
        ),
    ]

    def build_model(self) -> LanguageModel:  # type: ignore[type-var]
        azure_endpoint = self.azure_endpoint
        azure_deployment = self.azure_deployment
        api_version = self.api_version
        api_key = self.api_key
        temperature = self.temperature
        max_tokens = self.max_tokens
        stream = self.stream

        try:
            output = AzureChatOpenAI(
                azure_endpoint=azure_endpoint,
                azure_deployment=azure_deployment,
                api_version=api_version,
                api_key=api_key,
                temperature=temperature,
                max_tokens=max_tokens or None,
                streaming=stream,
            )
        except Exception as e:
            raise ValueError(f"Could not connect to AzureOpenAI API: {str(e)}") from e

        return output  # type: ignore
