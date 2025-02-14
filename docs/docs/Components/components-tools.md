# Tools

Tool components are used to interact with external services, APIs, and tools. They can be used to search the web, query databases, and perform other tasks.



## Calculator Tool

This component creates a tool for performing basic arithmetic operations on a given expression.

### Parameters

#### Inputs

| Name       | Type   | Description                                                        |
|------------|--------|--------------------------------------------------------------------|
| expression | String | The arithmetic expression to evaluate (e.g., `4*4*(33/22)+12-20`). |

#### Outputs

| Name   | Type | Description                                     |
|--------|------|-------------------------------------------------|
| result | Tool | Calculator tool for use in LangChain            |

This component allows you to evaluate basic arithmetic expressions. It supports addition, subtraction, multiplication, division, and exponentiation. The tool uses a secure evaluation method that prevents the execution of arbitrary Python code.



## Python Code Structured Tool

This component creates a structured tool from Python code using a dataclass.

The component dynamically updates its configuration based on the provided Python code, allowing for custom function arguments and descriptions.

### Parameters

#### Inputs

| Name                   | Type         | Description                           |
|------------------------|--------------|---------------------------------------|
| tool_code              | String       | Python code for the tool's dataclass  |
| tool_name              | String       | Name of the tool                      |
| tool_description       | String       | Description of the tool               |
| return_direct          | Boolean      | Whether to return the function output directly |
| tool_function          | String       | Selected function for the tool        |
| global_variables        | Dict         | Global variables or data for the tool |

#### Outputs

| Name        | Type  | Description                             |
|-------------|-------|-----------------------------------------|
| result_tool  | Tool  │ Structured tool created from the Python code |

## Python REPL Tool

This component creates a Python REPL (Read-Eval-Print Loop) tool for executing Python code.

### Parameters

#### Inputs

| Name            | Type         | Description                                             |
|-----------------|--------------|--------------------------------------------------------|
| name            | String       | The name of the tool (default: "python_repl")          |
| description     | String       | A description of the tool's functionality               |
| global_imports  | List[String] | List of modules to import globally (default: ["math"])  |

#### Outputs

| Name | Type | Description                                |
|------|------|--------------------------------------------|
| tool | Tool | Python REPL tool for use in LangChain      |

## Retriever Tool

This component creates a tool for interacting with a retriever in LangChain.

### Parameters

#### Inputs

| Name        | Type          | Description                                 |
|-------------|---------------|---------------------------------------------|
| retriever   | BaseRetriever | The retriever to interact with              |
| name        | String        | The name of the tool                        |
| description | String        | A description of the tool's functionality   |

#### Outputs

| Name | Type | Description                                |
|------|------|--------------------------------------------|
| tool | Tool | Retriever tool for use in LangChain        |



## Wikipedia API

This component creates a tool for searching and retrieving information from Wikipedia.

### Parameters

#### Inputs

| Name                    | Type    | Description                                                |
|-------------------------|---------|-----------------------------------------------------------|
| input_value             | String  | Search query input                                         |
| lang                    | String  | Language code for Wikipedia (default: "en")                |
| k                       | Integer | Number of results to return                                |
| load_all_available_meta | Boolean | Whether to load all available metadata (advanced)          |
| doc_content_chars_max   | Integer | Maximum number of characters for document content (advanced)|

#### Outputs

| Name    | Type      | Description                           |
|---------|-----------|---------------------------------------|
| results | List[Data]| List of Wikipedia search results      |
| tool    | Tool      | Wikipedia search tool for use in LangChain |

