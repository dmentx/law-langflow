---
title: Embedding Models
sidebar_position: 4
slug: /components-embedding-models
---

# Embedding Models

Embeddings models are used to convert text into numerical vectors. These vectors can be used for various tasks such as similarity search, clustering, and classification.



## Azure OpenAI Embeddings

This component generates embeddings using Azure OpenAI models.

### Parameters

#### Inputs

| Name | Type | Description |
|------|------|-------------|
| Azure Endpoint | String | Your Azure endpoint, including the resource. Example: `https://example-resource.azure.openai.com/` |
| Deployment Name | String | The name of the deployment |
| API Version | String | The API version to use, options include various dates |
| API Key | String | The API key to access the Azure OpenAI service |

#### Outputs

| Name | Type | Description |
|------|------|-------------|
| embeddings | Embeddings | An instance for generating embeddings using Azure OpenAI |



## NVIDIA

This component generates embeddings using NVIDIA models.

### Parameters

#### Inputs

| Name | Type | Description |
|------|------|-------------|
| model | String | The NVIDIA model to use for embeddings (e.g., nvidia/nv-embed-v1) |
| base_url | String | Base URL for the NVIDIA API (default: https://integrate.api.nvidia.com/v1) |
| nvidia_api_key | SecretString | API key for authenticating with NVIDIA's service |
| temperature | Float | Model temperature for embedding generation (default: 0.1) |

#### Outputs

| Name | Type | Description |
|------|------|-------------|
| embeddings | Embeddings | NVIDIAEmbeddings instance for generating embeddings |

## Ollama Embeddings

This component generates embeddings using Ollama models.

### Parameters

#### Inputs

| Name | Type | Description |
|------|------|-------------|
| Ollama Model | String | Name of the Ollama model to use (default: `llama2`) |
| Ollama Base URL | String | Base URL of the Ollama API (default: `http://localhost:11434`) |
| Model Temperature | Float | Temperature parameter for the model. Adjusts the randomness in the generated embeddings |

#### Outputs

| Name | Type | Description |
|------|------|-------------|
| embeddings | Embeddings | An instance for generating embeddings using Ollama |

## OpenAI Embeddings

This component is used to load embedding models from [OpenAI](https://openai.com/).

### Parameters

#### Inputs

| Name | Type | Description |
|------|------|-------------|
| OpenAI API Key | String | The API key to use for accessing the OpenAI API |
| Default Headers | Dict | Default headers for the HTTP requests |
| Default Query | NestedDict | Default query parameters for the HTTP requests |
| Allowed Special | List | Special tokens allowed for processing (default: `[]`) |
| Disallowed Special | List | Special tokens disallowed for processing (default: `["all"]`) |
| Chunk Size | Integer | Chunk size for processing (default: `1000`) |
| Client | Any | HTTP client for making requests |
| Deployment | String | Deployment name for the model (default: `text-embedding-3-small`) |
| Embedding Context Length | Integer | Length of embedding context (default: `8191`) |
| Max Retries | Integer | Maximum number of retries for failed requests (default: `6`) |
| Model | String | Name of the model to use (default: `text-embedding-3-small`) |
| Model Kwargs | NestedDict | Additional keyword arguments for the model |
| OpenAI API Base | String | Base URL of the OpenAI API |
| OpenAI API Type | String | Type of the OpenAI API |
| OpenAI API Version | String | Version of the OpenAI API |
| OpenAI Organization | String | Organization associated with the API key |
| OpenAI Proxy | String | Proxy server for the requests |
| Request Timeout | Float | Timeout for the HTTP requests |
| Show Progress Bar | Boolean | Whether to show a progress bar for processing (default: `False`) |
| Skip Empty | Boolean | Whether to skip empty inputs (default: `False`) |
| TikToken Enable | Boolean | Whether to enable TikToken (default: `True`) |
| TikToken Model Name | String | Name of the TikToken model |

#### Outputs

| Name | Type | Description |
|------|------|-------------|
| embeddings | Embeddings | An instance for generating embeddings using OpenAI |

## VertexAI Embeddings

This component is a wrapper around [Google Vertex AI](https://cloud.google.com/vertex-ai) [Embeddings API](https://cloud.google.com/vertex-ai/docs/generative-ai/embeddings/get-text-embeddings).

### Parameters

#### Inputs

| Name | Type | Description |
|------|------|-------------|
| credentials | Credentials | The default custom credentials to use |
| location | String | The default location to use when making API calls (default: `us-central1`) |
| max_output_tokens | Integer | Token limit determines the maximum amount of text output from one prompt (default: `128`) |
| model_name | String | The name of the Vertex AI large language model (default: `text-bison`) |
| project | String | The default GCP project to use when making Vertex API calls |
| request_parallelism | Integer | The amount of parallelism allowed for requests issued to VertexAI models (default: `5`) |
| temperature | Float | Tunes the degree of randomness in text generations. Should be a non-negative value (default: `0`) |
| top_k | Integer | How the model selects tokens for output, the next token is selected from the top `k` tokens (default: `40`) |
| top_p | Float | Tokens are selected from the most probable to least until the sum of their probabilities exceeds the top `p` value (default: `0.95`) |
| tuned_model_name | String | The name of a tuned model. If provided, `model_name` is ignored |
| verbose | Boolean | This parameter controls the level of detail in the output. When set to `True`, it prints internal states of the chain to help debug (default: `False`) |

#### Outputs

| Name | Type | Description |
|------|------|-------------|
| embeddings | Embeddings | An instance for generating embeddings using VertexAI |

## Embedding similarity

This component computes selected forms of similarity between two embedding vectors.

### Parameters

#### Inputs

| Name | Type | Description |
|------|------|-------------|
| embedding_vectors | Embedding Vectors | A list containing exactly two data objects with embedding vectors to compare. |
| similarity_metric | Similarity Metric | Select the similarity metric to use. Options: "Cosine Similarity", "Euclidean Distance", "Manhattan Distance".|

#### Outputs

| Name | Type | Description |
|------|------|-------------|
| similarity_data| Similarity Data | Data object containing the computed similarity score and additional information. |

## Text Embedder

This component generates embeddings for a given message using a specified embedding model.

### Parameters

#### Inputs

| Name            | Type          | Description                                              |
|-----------------|---------------|----------------------------------------------------------|
| embedding_model | Embedding Model | The embedding model to use for generating embeddings.     |
| message         | Message       | The message for which to generate embeddings.             |

#### Outputs

| Name      | Type          | Description                                                |
|-----------|---------------|------------------------------------------------------------|
| embeddings| Embedding Data | Data object containing the original text and its embedding vector. |



[Previous Vector Stores](/components-vector-stores)

