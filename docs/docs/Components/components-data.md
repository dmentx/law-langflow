---
title: Data
sidebar_position: 5
slug: /components-data
---

## API Request

This component sends HTTP requests to the specified URLs.

Use this component to interact with external APIs or services and retrieve data. Ensure that the URLs are valid and that you configure the method, headers, body, and timeout correctly.

### Parameters

#### Inputs

| Name     | Display Name   | Info                                                        |
|----------|----------------|-------------------------------------------------------------|
| URLs     | URLs           | The URLs to target                                          |
| curl     | curl           | Paste a curl command to fill in the dictionary fields for headers and body |
| Method   | HTTP Method    | The HTTP method to use, such as GET or POST                |
| Headers  | Headers        | The headers to include with the request                     |
| Body     | Request Body   | The data to send with the request (for methods like POST, PATCH, PUT) |
| Timeout  | Timeout        | The maximum time to wait for a response                    |

## Directory

This component recursively loads files from a directory, with options for file types, depth, and concurrency.

### Parameters

| Input | Type | Description |
|-------|------|-------------|
| path | MessageTextInput | Path to the directory to load files from |
| types | MessageTextInput | File types to load (leave empty to load all types) |
| depth | IntInput | Depth to search for files |
| max_concurrency | IntInput | Maximum concurrency for loading files |
| load_hidden | BoolInput | If true, hidden files will be loaded |
| recursive | BoolInput | If true, the search will be recursive |
| silent_errors | BoolInput | If true, errors will not raise an exception |
| use_multithreading | BoolInput | If true, multithreading will be used |

| Output | Type | Description |
|--------|------|-------------|
| data | List[Data] | Loaded file data from the directory |

## File

The FileComponent is a class that loads and parses text files of various supported formats, converting the content into a Data object. It supports multiple file types and provides an option for silent error handling.

### Parameters

#### Inputs

| Name           | Display Name   | Info                                         |
|----------------|----------------|----------------------------------------------|
| path           | Path           | File path to load.                          |
| silent_errors   | Silent Errors  | If true, errors will not raise an exception. |

#### Outputs

| Name | Display Name | Info                                      |
|------|--------------|-------------------------------------------|
| data | Data         | Parsed content of the file as a Data object. |


## URL

The URLComponent is a class that fetches content from one or more URLs, processes the content, and returns it as a list of Data objects. It ensures that the provided URLs are valid and uses WebBaseLoader to fetch the content.

### Parameters

#### Inputs

| Name | Display Name | Info                    |
|------|--------------|-------------------------|
| urls | URLs         | Enter one or more URLs  |

#### Outputs

| Name | Display Name | Info                                                           |
|------|--------------|----------------------------------------------------------------|
| data | Data         | List of Data objects containing fetched content and metadata   |

## Excel Table

In this Component you can load an Excel file and define the cell range like in Excel.
For example: (A4:N28) and your Output is a Data table.

### Parameters

#### Inputs

| Name | Display Name | Info                    |
|------|--------------|-------------------------|
| path | Path         | Provide an Excel file   |
| cells | Cell Range  | Provide the cell range  |
| sheet_name | Sheet Name | The sheet name where your table is |

#### Outputs

| Output | Type | Description |
|--------|------|-------------|
| data | Data | Loaded table from the file|

## Message to Data

This component converts a Message object to a Data object. If the Message is a Python dictionary, the dictionary is automatically converted to a Data table.

### Parameters

#### Inputs

| Name | Type   | Description                                   |
|------|--------|-----------------------------------------------|
| message | Message | A Message object |

#### Outputs

| Name        | Type | Description                            |
|-------------|------|----------------------------------------|
| data | Data | The Data object |

## Webhook Input

This component defines a webhook input for the flow. The flow can be triggered by an external HTTP POST request (webhook) sending a JSON payload.

If the input is not valid JSON, the component will wrap it in a "payload" field. The component's status will reflect any errors or the processed data.

### Parameters

#### Inputs

| Name | Type   | Description                                   |
|------|--------|-----------------------------------------------|
| data | String | JSON payload for testing the webhook component |

#### Outputs

| Name        | Type | Description                            |
|-------------|------|----------------------------------------|
| output_data | Data | Processed data from the webhook input |

