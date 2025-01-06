"use strict";(self.webpackChunklangflow_docs=self.webpackChunklangflow_docs||[]).push([[5772],{9481:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>a,frontMatter:()=>n,metadata:()=>c,toc:()=>h});var s=r(4848),d=r(8453);const n={title:"Vector Stores",sidebar_position:10,slug:"/components-vector-stores"},i="Vector Stores",c={id:"Components/components-vector-stores",title:"Vector Stores",description:"Vector databases are used to store and search for vectors. They can be used to store embeddings, search for similar vectors, and perform other vector operations.",source:"@site/docs/Components/components-vector-stores.md",sourceDirName:"Components",slug:"/components-vector-stores",permalink:"/law-langflow/components-vector-stores",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:10,frontMatter:{title:"Vector Stores",sidebar_position:10,slug:"/components-vector-stores"},sidebar:"defaultSidebar",previous:{title:"Prompts",permalink:"/law-langflow/components-prompts"},next:{title:"Tools",permalink:"/law-langflow/Components/components-tools"}},l={},h=[{value:"Chroma DB",id:"chroma-db",level:2},{value:"Parameters",id:"parameters",level:3},{value:"Inputs",id:"inputs",level:4},{value:"Outputs",id:"outputs",level:4},{value:"FAISS",id:"faiss",level:2},{value:"Parameters",id:"parameters-1",level:3},{value:"Intputs",id:"intputs",level:4},{value:"Outputs",id:"outputs-1",level:4},{value:"Milvus",id:"milvus",level:2},{value:"Parameters",id:"parameters-2",level:3},{value:"Intputs",id:"intputs-1",level:4},{value:"Outputs",id:"outputs-2",level:4},{value:"PGVector",id:"pgvector",level:2},{value:"Parameters",id:"parameters-3",level:3},{value:"Intputs",id:"intputs-2",level:6},{value:"Outputs",id:"outputs-3",level:4},{value:"Qdrant",id:"qdrant",level:2},{value:"Parameters",id:"parameters-4",level:3},{value:"Inputs",id:"inputs-1",level:4},{value:"Outputs",id:"outputs-4",level:4},{value:"Redis",id:"redis",level:2},{value:"Parameters",id:"parameters-5",level:3},{value:"Inputs",id:"inputs-2",level:4},{value:"Outputs",id:"outputs-5",level:4},{value:"Supabase",id:"supabase",level:2},{value:"Parameters",id:"parameters-6",level:3},{value:"Inputs",id:"inputs-3",level:4},{value:"Outputs",id:"outputs-6",level:4},{value:"Weaviate",id:"weaviate",level:2},{value:"Parameters",id:"parameters-7",level:3},{value:"Inputs",id:"inputs-4",level:4},{value:"Outputs",id:"outputs-7",level:4}];function o(e){const t={a:"a",h1:"h1",h2:"h2",h3:"h3",h4:"h4",h6:"h6",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"vector-stores",children:"Vector Stores"}),"\n",(0,s.jsx)(t.p,{children:"Vector databases are used to store and search for vectors. They can be used to store embeddings, search for similar vectors, and perform other vector operations."}),"\n",(0,s.jsx)(t.h2,{id:"chroma-db",children:"Chroma DB"}),"\n",(0,s.jsxs)(t.p,{children:["This component creates a Chroma Vector Store with search capabilities.\nFor more information, see the ",(0,s.jsx)(t.a,{href:"https://docs.trychroma.com/",children:"Chroma documentation"}),"."]}),"\n",(0,s.jsx)(t.h3,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsx)(t.h4,{id:"inputs",children:"Inputs"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Name"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"collection_name"}),(0,s.jsx)(t.td,{children:"String"}),(0,s.jsx)(t.td,{children:'The name of the Chroma collection. Default: "langflow".'})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"persist_directory"}),(0,s.jsx)(t.td,{children:"String"}),(0,s.jsx)(t.td,{children:"The directory to persist the Chroma database."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"search_query"}),(0,s.jsx)(t.td,{children:"String"}),(0,s.jsx)(t.td,{children:"The query to search for in the vector store."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"ingest_data"}),(0,s.jsx)(t.td,{children:"Data"}),(0,s.jsx)(t.td,{children:"The data to ingest into the vector store (list of Data objects)."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"embedding"}),(0,s.jsx)(t.td,{children:"Embeddings"}),(0,s.jsx)(t.td,{children:"The embedding function to use for the vector store."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"chroma_server_cors_allow_origins"}),(0,s.jsx)(t.td,{children:"String"}),(0,s.jsx)(t.td,{children:"CORS allow origins for the Chroma server."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"chroma_server_host"}),(0,s.jsx)(t.td,{children:"String"}),(0,s.jsx)(t.td,{children:"Host for the Chroma server."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"chroma_server_http_port"}),(0,s.jsx)(t.td,{children:"Integer"}),(0,s.jsx)(t.td,{children:"HTTP port for the Chroma server."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"chroma_server_grpc_port"}),(0,s.jsx)(t.td,{children:"Integer"}),(0,s.jsx)(t.td,{children:"gRPC port for the Chroma server."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"chroma_server_ssl_enabled"}),(0,s.jsx)(t.td,{children:"Boolean"}),(0,s.jsx)(t.td,{children:"Enable SSL for the Chroma server."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"allow_duplicates"}),(0,s.jsx)(t.td,{children:"Boolean"}),(0,s.jsx)(t.td,{children:"Allow duplicate documents in the vector store."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"search_type"}),(0,s.jsx)(t.td,{children:"String"}),(0,s.jsx)(t.td,{children:'Type of search to perform: "Similarity" or "MMR".'})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"number_of_results"}),(0,s.jsx)(t.td,{children:"Integer"}),(0,s.jsx)(t.td,{children:"Number of results to return from the search. Default: 10."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"limit"}),(0,s.jsx)(t.td,{children:"Integer"}),(0,s.jsx)(t.td,{children:"Limit the number of records to compare when Allow Duplicates is False."})]})]})]}),"\n",(0,s.jsx)(t.h4,{id:"outputs",children:"Outputs"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Name"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"vector_store"}),(0,s.jsx)(t.td,{children:"Chroma"}),(0,s.jsx)(t.td,{children:"Chroma vector store instance"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"search_results"}),(0,s.jsx)(t.td,{children:"List[Data]"}),(0,s.jsx)(t.td,{children:"Results of similarity search"})]})]})]}),"\n",(0,s.jsx)(t.h2,{id:"faiss",children:"FAISS"}),"\n",(0,s.jsxs)(t.p,{children:["This component creates a FAISS Vector Store with search capabilities.\nFor more information, see the ",(0,s.jsx)(t.a,{href:"https://faiss.ai/index.html",children:"FAISS documentation"}),"."]}),"\n",(0,s.jsx)(t.h3,{id:"parameters-1",children:"Parameters"}),"\n",(0,s.jsx)(t.h4,{id:"intputs",children:"Intputs"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Name"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"index_name"}),(0,s.jsx)(t.td,{children:"String"}),(0,s.jsx)(t.td,{children:'The name of the FAISS index. Default: "langflow_index".'})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"persist_directory"}),(0,s.jsx)(t.td,{children:"String"}),(0,s.jsx)(t.td,{children:"Path to save the FAISS index. It will be relative to where Langflow is running."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"search_query"}),(0,s.jsx)(t.td,{children:"String"}),(0,s.jsx)(t.td,{children:"The query to search for in the vector store."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"ingest_data"}),(0,s.jsx)(t.td,{children:"Data"}),(0,s.jsx)(t.td,{children:"The data to ingest into the vector store (list of Data objects or documents)."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"allow_dangerous_deserialization"}),(0,s.jsx)(t.td,{children:"Boolean"}),(0,s.jsx)(t.td,{children:"Set to True to allow loading pickle files from untrusted sources. Default: True (advanced)."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"embedding"}),(0,s.jsx)(t.td,{children:"Embeddings"}),(0,s.jsx)(t.td,{children:"The embedding function to use for the vector store."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"number_of_results"}),(0,s.jsx)(t.td,{children:"Integer"}),(0,s.jsx)(t.td,{children:"Number of results to return from the search. Default: 4 (advanced)."})]})]})]}),"\n",(0,s.jsx)(t.h4,{id:"outputs-1",children:"Outputs"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Name"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsx)(t.tbody,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"vector_store"}),(0,s.jsx)(t.td,{children:"FAISS"}),(0,s.jsx)(t.td,{children:"A FAISS vector store instance configured with the specified parameters."})]})})]}),"\n",(0,s.jsx)(t.h2,{id:"milvus",children:"Milvus"}),"\n",(0,s.jsxs)(t.p,{children:["This component creates a Milvus Vector Store with search capabilities.\nFor more information, see the ",(0,s.jsx)(t.a,{href:"https://milvus.io/docs",children:"Milvus documentation"}),"."]}),"\n",(0,s.jsx)(t.h3,{id:"parameters-2",children:"Parameters"}),"\n",(0,s.jsx)(t.h4,{id:"intputs-1",children:"Intputs"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Name"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"collection_name"}),(0,s.jsx)(t.td,{children:"String"}),(0,s.jsx)(t.td,{children:"Name of the Milvus collection"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"collection_description"}),(0,s.jsx)(t.td,{children:"String"}),(0,s.jsx)(t.td,{children:"Description of the Milvus collection"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"uri"}),(0,s.jsx)(t.td,{children:"String"}),(0,s.jsx)(t.td,{children:"Connection URI for Milvus"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"password"}),(0,s.jsx)(t.td,{children:"SecretString"}),(0,s.jsx)(t.td,{children:"Password for Milvus"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"username"}),(0,s.jsx)(t.td,{children:"SecretString"}),(0,s.jsx)(t.td,{children:"Username for Milvus"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"batch_size"}),(0,s.jsx)(t.td,{children:"Integer"}),(0,s.jsx)(t.td,{children:"Number of data to process in a single batch"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"search_query"}),(0,s.jsx)(t.td,{children:"String"}),(0,s.jsx)(t.td,{children:"Query for similarity search"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"ingest_data"}),(0,s.jsx)(t.td,{children:"Data"}),(0,s.jsx)(t.td,{children:"Data to be ingested into the vector store"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"embedding"}),(0,s.jsx)(t.td,{children:"Embeddings"}),(0,s.jsx)(t.td,{children:"Embedding function to use"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"number_of_results"}),(0,s.jsx)(t.td,{children:"Integer"}),(0,s.jsx)(t.td,{children:"Number of results to return in search"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"search_type"}),(0,s.jsx)(t.td,{children:"String"}),(0,s.jsx)(t.td,{children:"Type of search to perform"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"search_score_threshold"}),(0,s.jsx)(t.td,{children:"Float"}),(0,s.jsx)(t.td,{children:"Minimum similarity score for search results"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"search_filter"}),(0,s.jsx)(t.td,{children:"Dict"}),(0,s.jsx)(t.td,{children:"Metadata filters for search query"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"setup_mode"}),(0,s.jsx)(t.td,{children:"String"}),(0,s.jsx)(t.td,{children:"Configuration mode for setting up the vector store"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"vector_dimensions"}),(0,s.jsx)(t.td,{children:"Integer"}),(0,s.jsx)(t.td,{children:"Number of dimensions of the vectors"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"pre_delete_collection"}),(0,s.jsx)(t.td,{children:"Boolean"}),(0,s.jsx)(t.td,{children:"Whether to delete the collection before creating a new one"})]})]})]}),"\n",(0,s.jsx)(t.h4,{id:"outputs-2",children:"Outputs"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Name"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsx)(t.tbody,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"vector_store"}),(0,s.jsx)(t.td,{children:"Milvus"}),(0,s.jsx)(t.td,{children:"A Milvus vector store instance configured with the specified parameters."})]})})]}),"\n",(0,s.jsx)(t.h2,{id:"pgvector",children:"PGVector"}),"\n",(0,s.jsxs)(t.p,{children:["This component creates a PGVector Vector Store with search capabilities.\nFor more information, see the ",(0,s.jsx)(t.a,{href:"https://github.com/pgvector/pgvector",children:"PGVector documentation"}),"."]}),"\n",(0,s.jsx)(t.h3,{id:"parameters-3",children:"Parameters"}),"\n",(0,s.jsx)(t.h6,{id:"intputs-2",children:"Intputs"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Name"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"pg_server_url"}),(0,s.jsx)(t.td,{children:"SecretString"}),(0,s.jsx)(t.td,{children:"PostgreSQL server connection string"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"collection_name"}),(0,s.jsx)(t.td,{children:"String"}),(0,s.jsx)(t.td,{children:"Table name for the vector store"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"search_query"}),(0,s.jsx)(t.td,{children:"String"}),(0,s.jsx)(t.td,{children:"Query for similarity search"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"ingest_data"}),(0,s.jsx)(t.td,{children:"Data"}),(0,s.jsx)(t.td,{children:"Data to be ingested into the vector store"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"embedding"}),(0,s.jsx)(t.td,{children:"Embeddings"}),(0,s.jsx)(t.td,{children:"Embedding function to use"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"number_of_results"}),(0,s.jsx)(t.td,{children:"Integer"}),(0,s.jsx)(t.td,{children:"Number of results to return in search"})]})]})]}),"\n",(0,s.jsx)(t.h4,{id:"outputs-3",children:"Outputs"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Name"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"vector_store"}),(0,s.jsx)(t.td,{children:"PGVector"}),(0,s.jsx)(t.td,{children:"PGVector vector store instance"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"search_results"}),(0,s.jsx)(t.td,{children:"List[Data]"}),(0,s.jsx)(t.td,{children:"Results of similarity search"})]})]})]}),"\n",(0,s.jsx)(t.h2,{id:"qdrant",children:"Qdrant"}),"\n",(0,s.jsxs)(t.p,{children:["This component creates a Qdrant Vector Store with search capabilities.\nFor more information, see the ",(0,s.jsx)(t.a,{href:"https://qdrant.tech/documentation/",children:"Qdrant documentation"}),"."]}),"\n",(0,s.jsx)(t.h3,{id:"parameters-4",children:"Parameters"}),"\n",(0,s.jsx)(t.h4,{id:"inputs-1",children:"Inputs"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Name"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"collection_name"}),(0,s.jsx)(t.td,{children:"String"}),(0,s.jsx)(t.td,{children:"Name of the Qdrant collection"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"host"}),(0,s.jsx)(t.td,{children:"String"}),(0,s.jsx)(t.td,{children:"Qdrant server host"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"port"}),(0,s.jsx)(t.td,{children:"Integer"}),(0,s.jsx)(t.td,{children:"Qdrant server port"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"grpc_port"}),(0,s.jsx)(t.td,{children:"Integer"}),(0,s.jsx)(t.td,{children:"Qdrant gRPC port"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"api_key"}),(0,s.jsx)(t.td,{children:"SecretString"}),(0,s.jsx)(t.td,{children:"API key for Qdrant"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"prefix"}),(0,s.jsx)(t.td,{children:"String"}),(0,s.jsx)(t.td,{children:"Prefix for Qdrant"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"timeout"}),(0,s.jsx)(t.td,{children:"Integer"}),(0,s.jsx)(t.td,{children:"Timeout for Qdrant operations"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"path"}),(0,s.jsx)(t.td,{children:"String"}),(0,s.jsx)(t.td,{children:"Path for Qdrant"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"url"}),(0,s.jsx)(t.td,{children:"String"}),(0,s.jsx)(t.td,{children:"URL for Qdrant"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"distance_func"}),(0,s.jsx)(t.td,{children:"String"}),(0,s.jsx)(t.td,{children:"Distance function for vector similarity"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"content_payload_key"}),(0,s.jsx)(t.td,{children:"String"}),(0,s.jsx)(t.td,{children:"Key for content payload"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"metadata_payload_key"}),(0,s.jsx)(t.td,{children:"String"}),(0,s.jsx)(t.td,{children:"Key for metadata payload"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"search_query"}),(0,s.jsx)(t.td,{children:"String"}),(0,s.jsx)(t.td,{children:"Query for similarity search"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"ingest_data"}),(0,s.jsx)(t.td,{children:"Data"}),(0,s.jsx)(t.td,{children:"Data to be ingested into the vector store"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"embedding"}),(0,s.jsx)(t.td,{children:"Embeddings"}),(0,s.jsx)(t.td,{children:"Embedding function to use"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"number_of_results"}),(0,s.jsx)(t.td,{children:"Integer"}),(0,s.jsx)(t.td,{children:"Number of results to return in search"})]})]})]}),"\n",(0,s.jsx)(t.h4,{id:"outputs-4",children:"Outputs"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Name"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"vector_store"}),(0,s.jsx)(t.td,{children:"Qdrant"}),(0,s.jsx)(t.td,{children:"Qdrant vector store instance"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"search_results"}),(0,s.jsx)(t.td,{children:"List[Data]"}),(0,s.jsx)(t.td,{children:"Results of similarity search"})]})]})]}),"\n",(0,s.jsx)(t.h2,{id:"redis",children:"Redis"}),"\n",(0,s.jsxs)(t.p,{children:["This component creates a Redis Vector Store with search capabilities.\nFor more information, see the ",(0,s.jsx)(t.a,{href:"https://redis.io/docs/latest/develop/interact/search-and-query/advanced-concepts/vectors/",children:"Redis documentation"}),"."]}),"\n",(0,s.jsx)(t.h3,{id:"parameters-5",children:"Parameters"}),"\n",(0,s.jsx)(t.h4,{id:"inputs-2",children:"Inputs"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Name"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"redis_server_url"}),(0,s.jsx)(t.td,{children:"SecretString"}),(0,s.jsx)(t.td,{children:"Redis server connection string"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"redis_index_name"}),(0,s.jsx)(t.td,{children:"String"}),(0,s.jsx)(t.td,{children:"Name of the Redis index"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"code"}),(0,s.jsx)(t.td,{children:"String"}),(0,s.jsx)(t.td,{children:"Custom code for Redis (advanced)"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"schema"}),(0,s.jsx)(t.td,{children:"String"}),(0,s.jsx)(t.td,{children:"Schema for Redis index"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"search_query"}),(0,s.jsx)(t.td,{children:"String"}),(0,s.jsx)(t.td,{children:"Query for similarity search"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"ingest_data"}),(0,s.jsx)(t.td,{children:"Data"}),(0,s.jsx)(t.td,{children:"Data to be ingested into the vector store"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"number_of_results"}),(0,s.jsx)(t.td,{children:"Integer"}),(0,s.jsx)(t.td,{children:"Number of results to return in search"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"embedding"}),(0,s.jsx)(t.td,{children:"Embeddings"}),(0,s.jsx)(t.td,{children:"Embedding function to use"})]})]})]}),"\n",(0,s.jsx)(t.h4,{id:"outputs-5",children:"Outputs"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Name"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"vector_store"}),(0,s.jsx)(t.td,{children:"Redis"}),(0,s.jsx)(t.td,{children:"Redis vector store instance"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"search_results"}),(0,s.jsx)(t.td,{children:"List[Data]"}),(0,s.jsx)(t.td,{children:"Results of similarity search"})]})]})]}),"\n",(0,s.jsx)(t.h2,{id:"supabase",children:"Supabase"}),"\n",(0,s.jsxs)(t.p,{children:["This component creates a Supabase Vector Store with search capabilities.\nFor more information, see the ",(0,s.jsx)(t.a,{href:"https://supabase.com/docs/guides/ai",children:"Supabase documentation"}),"."]}),"\n",(0,s.jsx)(t.h3,{id:"parameters-6",children:"Parameters"}),"\n",(0,s.jsx)(t.h4,{id:"inputs-3",children:"Inputs"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Name"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"supabase_url"}),(0,s.jsx)(t.td,{children:"String"}),(0,s.jsx)(t.td,{children:"URL of the Supabase instance"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"supabase_service_key"}),(0,s.jsx)(t.td,{children:"SecretString"}),(0,s.jsx)(t.td,{children:"Service key for Supabase authentication"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"table_name"}),(0,s.jsx)(t.td,{children:"String"}),(0,s.jsx)(t.td,{children:"Name of the table in Supabase"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"query_name"}),(0,s.jsx)(t.td,{children:"String"}),(0,s.jsx)(t.td,{children:"Name of the query to use"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"search_query"}),(0,s.jsx)(t.td,{children:"String"}),(0,s.jsx)(t.td,{children:"Query for similarity search"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"ingest_data"}),(0,s.jsx)(t.td,{children:"Data"}),(0,s.jsx)(t.td,{children:"Data to be ingested into the vector store"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"embedding"}),(0,s.jsx)(t.td,{children:"Embeddings"}),(0,s.jsx)(t.td,{children:"Embedding function to use"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"number_of_results"}),(0,s.jsx)(t.td,{children:"Integer"}),(0,s.jsx)(t.td,{children:"Number of results to return in search"})]})]})]}),"\n",(0,s.jsx)(t.h4,{id:"outputs-6",children:"Outputs"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Name"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"vector_store"}),(0,s.jsx)(t.td,{children:"SupabaseVectorStore"}),(0,s.jsx)(t.td,{children:"Supabase vector store instance"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"search_results"}),(0,s.jsx)(t.td,{children:"List[Data]"}),(0,s.jsx)(t.td,{children:"Results of similarity search"})]})]})]}),"\n",(0,s.jsx)(t.h2,{id:"weaviate",children:"Weaviate"}),"\n",(0,s.jsxs)(t.p,{children:["This component facilitates a Weaviate Vector Store setup, optimizing text and document indexing and retrieval.\nFor more information, see the ",(0,s.jsx)(t.a,{href:"https://weaviate.io/developers/weaviate",children:"Weaviate Documentation"}),"."]}),"\n",(0,s.jsx)(t.h3,{id:"parameters-7",children:"Parameters"}),"\n",(0,s.jsx)(t.h4,{id:"inputs-4",children:"Inputs"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Name"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"weaviate_url"}),(0,s.jsx)(t.td,{children:"String"}),(0,s.jsx)(t.td,{children:"Default instance URL"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"search_by_text"}),(0,s.jsx)(t.td,{children:"Boolean"}),(0,s.jsx)(t.td,{children:"Indicates whether to search by text"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"api_key"}),(0,s.jsx)(t.td,{children:"SecretString"}),(0,s.jsx)(t.td,{children:"Optional API key for authentication"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"index_name"}),(0,s.jsx)(t.td,{children:"String"}),(0,s.jsx)(t.td,{children:"Optional index name"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"text_key"}),(0,s.jsx)(t.td,{children:"String"}),(0,s.jsx)(t.td,{children:"Default text extraction key"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"input"}),(0,s.jsx)(t.td,{children:"Document"}),(0,s.jsx)(t.td,{children:"Document or record"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"embedding"}),(0,s.jsx)(t.td,{children:"Embeddings"}),(0,s.jsx)(t.td,{children:"Model used"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"attributes"}),(0,s.jsx)(t.td,{children:"List[String]"}),(0,s.jsx)(t.td,{children:"Optional additional attributes"})]})]})]}),"\n",(0,s.jsx)(t.h4,{id:"outputs-7",children:"Outputs"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Name"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsx)(t.tbody,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"vector_store"}),(0,s.jsx)(t.td,{children:"WeaviateVectorStore"}),(0,s.jsx)(t.td,{children:"Weaviate vector store instance"})]})})]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Note:"})," Ensure Weaviate instance is running and accessible. Verify API key, index name, text key, and attributes are set correctly."]})]})}function a(e={}){const{wrapper:t}={...(0,d.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},8453:(e,t,r)=>{r.d(t,{R:()=>i,x:()=>c});var s=r(6540);const d={},n=s.createContext(d);function i(e){const t=s.useContext(n);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:i(e.components),s.createElement(n.Provider,{value:t},e.children)}}}]);