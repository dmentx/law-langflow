---
title: Vector Stores
sidebar_position: 10
slug: /components-vector-stores
---
# Vector Stores

Vector databases are used to store and search for vectors. They can be used to store embeddings, search for similar vectors, and perform other vector operations.



## Chroma DB

This component creates a Chroma Vector Store with search capabilities.
For more information, see the [Chroma documentation](https://docs.trychroma.com/).

### Parameters

#### Inputs

| Name                         | Type          | Description                                      |
|------------------------------|---------------|--------------------------------------------------|
| collection_name               | String        | The name of the Chroma collection. Default: "langflow". |
| persist_directory             | String        | The directory to persist the Chroma database.     |
| search_query                  | String        | The query to search for in the vector store.      |
| ingest_data                   | Data          | The data to ingest into the vector store (list of Data objects). |
| embedding                     | Embeddings    | The embedding function to use for the vector store. |
| chroma_server_cors_allow_origins | String     | CORS allow origins for the Chroma server.         |
| chroma_server_host            | String        | Host for the Chroma server.                       |
| chroma_server_http_port       | Integer       | HTTP port for the Chroma server.                  |
| chroma_server_grpc_port       | Integer       | gRPC port for the Chroma server.                  |
| chroma_server_ssl_enabled     | Boolean       | Enable SSL for the Chroma server.                 |
| allow_duplicates              | Boolean       | Allow duplicate documents in the vector store.    |
| search_type                   | String        | Type of search to perform: "Similarity" or "MMR". |
| number_of_results             | Integer       | Number of results to return from the search. Default: 10. |
| limit                         | Integer       | Limit the number of records to compare when Allow Duplicates is False. |

#### Outputs

| Name           | Type          | Description                    |
|----------------|---------------|--------------------------------|
| vector_store   | Chroma        | Chroma vector store instance   |
| search_results | List[Data]    | Results of similarity search   |



## FAISS

This component creates a FAISS Vector Store with search capabilities.
For more information, see the [FAISS documentation](https://faiss.ai/index.html).

### Parameters

#### Intputs

| Name                      | Type          | Description                                      |
|---------------------------|---------------|--------------------------------------------------|
| index_name                 | String        | The name of the FAISS index. Default: "langflow_index". |
| persist_directory          | String        | Path to save the FAISS index. It will be relative to where Langflow is running. |
| search_query               | String        | The query to search for in the vector store.     |
| ingest_data                | Data          | The data to ingest into the vector store (list of Data objects or documents). |
| allow_dangerous_deserialization | Boolean  | Set to True to allow loading pickle files from untrusted sources. Default: True (advanced). |
| embedding                  | Embeddings    | The embedding function to use for the vector store. |
| number_of_results          | Integer       | Number of results to return from the search. Default: 4 (advanced). |

#### Outputs

| Name           | Type                   | Description                    |
|----------------|------------------------|--------------------------------|
| vector_store   | FAISS                  | A FAISS vector store instance configured with the specified parameters. |


## Milvus

This component creates a Milvus Vector Store with search capabilities.
For more information, see the [Milvus documentation](https://milvus.io/docs).

### Parameters

#### Intputs

| Name                    | Type          | Description                                      |
|-------------------------|---------------|--------------------------------------------------|
| collection_name          | String        | Name of the Milvus collection                    |
| collection_description   | String        | Description of the Milvus collection             |
| uri                      | String        | Connection URI for Milvus                        |
| password                 | SecretString  | Password for Milvus                              |
| username                 | SecretString  | Username for Milvus                              |
| batch_size               | Integer       | Number of data to process in a single batch      |
| search_query             | String        | Query for similarity search                      |
| ingest_data              | Data          | Data to be ingested into the vector store        |
| embedding                | Embeddings    | Embedding function to use                        |
| number_of_results        | Integer       | Number of results to return in search            |
| search_type              | String        | Type of search to perform                        |
| search_score_threshold   | Float         | Minimum similarity score for search results      |
| search_filter            | Dict          | Metadata filters for search query                |
| setup_mode               | String        | Configuration mode for setting up the vector store |
| vector_dimensions        | Integer       | Number of dimensions of the vectors              |
| pre_delete_collection    | Boolean       | Whether to delete the collection before creating a new one |

#### Outputs

| Name           | Type                   | Description                    |
|----------------|------------------------|--------------------------------|
| vector_store   | Milvus                 | A Milvus vector store instance configured with the specified parameters. |


## PGVector

This component creates a PGVector Vector Store with search capabilities.
For more information, see the [PGVector documentation](https://github.com/pgvector/pgvector).

### Parameters

###### Intputs

| Name            | Type         | Description                               |
| --------------- | ------------ | ----------------------------------------- |
| pg_server_url   | SecretString | PostgreSQL server connection string       |
| collection_name | String       | Table name for the vector store           |
| search_query    | String       | Query for similarity search               |
| ingest_data     | Data         | Data to be ingested into the vector store |
| embedding       | Embeddings   | Embedding function to use                 |
| number_of_results | Integer    | Number of results to return in search     |

#### Outputs

| Name          | Type        | Description                               |
| ------------- | ----------- | ----------------------------------------- |
| vector_store  | PGVector    | PGVector vector store instance            |
| search_results| List[Data]  | Results of similarity search              |




## Qdrant

This component creates a Qdrant Vector Store with search capabilities.
For more information, see the [Qdrant documentation](https://qdrant.tech/documentation/).

### Parameters

#### Inputs

| Name                 | Type         | Description                               |
| -------------------- | ------------ | ----------------------------------------- |
| collection_name       | String       | Name of the Qdrant collection             |
| host                 | String       | Qdrant server host                        |
| port                 | Integer      | Qdrant server port                        |
| grpc_port            | Integer      | Qdrant gRPC port                          |
| api_key              | SecretString | API key for Qdrant                        |
| prefix               | String       | Prefix for Qdrant                         |
| timeout              | Integer      | Timeout for Qdrant operations             |
| path                 | String       | Path for Qdrant                           |
| url                  | String       | URL for Qdrant                            |
| distance_func        | String       | Distance function for vector similarity   |
| content_payload_key  | String       | Key for content payload                   |
| metadata_payload_key | String       | Key for metadata payload                  |
| search_query         | String       | Query for similarity search               |
| ingest_data          | Data         | Data to be ingested into the vector store |
| embedding            | Embeddings   | Embedding function to use                 |
| number_of_results    | Integer      | Number of results to return in search     |

#### Outputs

| Name          | Type     | Description                               |
| ------------- | -------- | ----------------------------------------- |
| vector_store  | Qdrant   | Qdrant vector store instance              |
| search_results| List[Data] | Results of similarity search            |


## Redis

This component creates a Redis Vector Store with search capabilities.
For more information, see the [Redis documentation](https://redis.io/docs/latest/develop/interact/search-and-query/advanced-concepts/vectors/).

### Parameters

#### Inputs

| Name              | Type         | Description                               |
| ----------------- | ------------ | ----------------------------------------- |
| redis_server_url  | SecretString | Redis server connection string            |
| redis_index_name  | String       | Name of the Redis index                   |
| code              | String       | Custom code for Redis (advanced)          |
| schema            | String       | Schema for Redis index                    |
| search_query      | String       | Query for similarity search               |
| ingest_data       | Data         | Data to be ingested into the vector store |
| number_of_results | Integer      | Number of results to return in search     |
| embedding         | Embeddings   | Embedding function to use                 |

#### Outputs

| Name          | Type     | Description                               |
| ------------- | -------- | ----------------------------------------- |
| vector_store  | Redis    | Redis vector store instance               |
| search_results| List[Data]| Results of similarity search             |


## Supabase

This component creates a Supabase Vector Store with search capabilities.
For more information, see the [Supabase documentation](https://supabase.com/docs/guides/ai).

### Parameters

#### Inputs

| Name                | Type         | Description                               |
| ------------------- | ------------ | ----------------------------------------- |
| supabase_url        | String       | URL of the Supabase instance              |
| supabase_service_key| SecretString | Service key for Supabase authentication   |
| table_name          | String       | Name of the table in Supabase             |
| query_name          | String       | Name of the query to use                  |
| search_query        | String       | Query for similarity search               |
| ingest_data         | Data         | Data to be ingested into the vector store |
| embedding           | Embeddings   | Embedding function to use                 |
| number_of_results   | Integer      | Number of results to return in search     |

#### Outputs

| Name          | Type               | Description                               |
| ------------- | ------------------ | ----------------------------------------- |
| vector_store  | SupabaseVectorStore | Supabase vector store instance            |
| search_results| List[Data]          | Results of similarity search              |




## Weaviate

This component facilitates a Weaviate Vector Store setup, optimizing text and document indexing and retrieval.
For more information, see the [Weaviate Documentation](https://weaviate.io/developers/weaviate).

### Parameters

#### Inputs

| Name          | Type         | Description                               |
|---------------|--------------|-------------------------------------------|
| weaviate_url  | String       | Default instance URL                      |
| search_by_text| Boolean      | Indicates whether to search by text       |
| api_key       | SecretString | Optional API key for authentication       |
| index_name    | String       | Optional index name                       |
| text_key      | String       | Default text extraction key               |
| input         | Document     | Document or record                        |
| embedding     | Embeddings   | Model used                                |
| attributes    | List[String] | Optional additional attributes            |

#### Outputs

| Name         | Type             | Description                   |
|--------------|------------------|-------------------------------|
| vector_store | WeaviateVectorStore | Weaviate vector store instance |

**Note:** Ensure Weaviate instance is running and accessible. Verify API key, index name, text key, and attributes are set correctly.

