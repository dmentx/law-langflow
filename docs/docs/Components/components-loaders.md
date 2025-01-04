---
title: Loaders
sidebar_position: 7
slug: /components-loaders
---

# Loaders

Loaders are components used to load documents from various sources, such as databases, websites, and local files. They can be used to fetch data from external sources and convert it into a format that can be processed by other components.



## Unstructured

This component uses the [Unstructured](https://unstructured.io/) library to load and parse PDF, DOCX, and TXT files into structured data. This component works with both the open-source library and the Unstructured API.

### Parameters

#### Inputs:

| Name | Display Name | Info |
| --- | --- | --- |
| file | File | The path to the file to be parsed (supported types: pdf, docx, txt) |


#### Outputs:

| Name | Display Name | Info |
| --- | --- | --- |
| data | Data | List of Data objects containing the parsed content from the input file |