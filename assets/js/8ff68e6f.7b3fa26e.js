"use strict";(self.webpackChunklangflow_docs=self.webpackChunklangflow_docs||[]).push([[2624],{5646:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>d,default:()=>a,frontMatter:()=>i,metadata:()=>l,toc:()=>h});var r=n(4848),s=n(8453);const i={},d="Tools",l={id:"Components/components-tools",title:"Tools",description:"Tool components are used to interact with external services, APIs, and tools. They can be used to search the web, query databases, and perform other tasks.",source:"@site/docs/Components/components-tools.md",sourceDirName:"Components",slug:"/Components/components-tools",permalink:"/Components/components-tools",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"Memories",permalink:"/Components/components-memories"},next:{title:"Global Variables",permalink:"/settings-global-variables"}},o={},h=[{value:"Calculator Tool",id:"calculator-tool",level:2},{value:"Parameters",id:"parameters",level:3},{value:"Inputs",id:"inputs",level:4},{value:"Outputs",id:"outputs",level:4},{value:"Python Code Structured Tool",id:"python-code-structured-tool",level:2},{value:"Parameters",id:"parameters-1",level:3},{value:"Inputs",id:"inputs-1",level:4},{value:"Outputs",id:"outputs-1",level:4},{value:"Python REPL Tool",id:"python-repl-tool",level:2},{value:"Parameters",id:"parameters-2",level:3},{value:"Inputs",id:"inputs-2",level:4},{value:"Outputs",id:"outputs-2",level:4},{value:"Retriever Tool",id:"retriever-tool",level:2},{value:"Parameters",id:"parameters-3",level:3},{value:"Inputs",id:"inputs-3",level:4},{value:"Outputs",id:"outputs-3",level:4},{value:"Wikipedia API",id:"wikipedia-api",level:2},{value:"Parameters",id:"parameters-4",level:3},{value:"Inputs",id:"inputs-4",level:4},{value:"Outputs",id:"outputs-4",level:4}];function c(e){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"tools",children:"Tools"}),"\n",(0,r.jsx)(t.p,{children:"Tool components are used to interact with external services, APIs, and tools. They can be used to search the web, query databases, and perform other tasks."}),"\n",(0,r.jsx)(t.h2,{id:"calculator-tool",children:"Calculator Tool"}),"\n",(0,r.jsx)(t.p,{children:"This component creates a tool for performing basic arithmetic operations on a given expression."}),"\n",(0,r.jsx)(t.h3,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsx)(t.h4,{id:"inputs",children:"Inputs"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Name"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsx)(t.tbody,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"expression"}),(0,r.jsx)(t.td,{children:"String"}),(0,r.jsxs)(t.td,{children:["The arithmetic expression to evaluate (e.g., ",(0,r.jsx)(t.code,{children:"4*4*(33/22)+12-20"}),")."]})]})})]}),"\n",(0,r.jsx)(t.h4,{id:"outputs",children:"Outputs"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Name"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsx)(t.tbody,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"result"}),(0,r.jsx)(t.td,{children:"Tool"}),(0,r.jsx)(t.td,{children:"Calculator tool for use in LangChain"})]})})]}),"\n",(0,r.jsx)(t.p,{children:"This component allows you to evaluate basic arithmetic expressions. It supports addition, subtraction, multiplication, division, and exponentiation. The tool uses a secure evaluation method that prevents the execution of arbitrary Python code."}),"\n",(0,r.jsx)(t.h2,{id:"python-code-structured-tool",children:"Python Code Structured Tool"}),"\n",(0,r.jsx)(t.p,{children:"This component creates a structured tool from Python code using a dataclass."}),"\n",(0,r.jsx)(t.p,{children:"The component dynamically updates its configuration based on the provided Python code, allowing for custom function arguments and descriptions."}),"\n",(0,r.jsx)(t.h3,{id:"parameters-1",children:"Parameters"}),"\n",(0,r.jsx)(t.h4,{id:"inputs-1",children:"Inputs"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Name"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"tool_code"}),(0,r.jsx)(t.td,{children:"String"}),(0,r.jsx)(t.td,{children:"Python code for the tool's dataclass"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"tool_name"}),(0,r.jsx)(t.td,{children:"String"}),(0,r.jsx)(t.td,{children:"Name of the tool"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"tool_description"}),(0,r.jsx)(t.td,{children:"String"}),(0,r.jsx)(t.td,{children:"Description of the tool"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"return_direct"}),(0,r.jsx)(t.td,{children:"Boolean"}),(0,r.jsx)(t.td,{children:"Whether to return the function output directly"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"tool_function"}),(0,r.jsx)(t.td,{children:"String"}),(0,r.jsx)(t.td,{children:"Selected function for the tool"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"global_variables"}),(0,r.jsx)(t.td,{children:"Dict"}),(0,r.jsx)(t.td,{children:"Global variables or data for the tool"})]})]})]}),"\n",(0,r.jsx)(t.h4,{id:"outputs-1",children:"Outputs"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Name"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsx)(t.tbody,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"result_tool"}),(0,r.jsx)(t.td,{children:"Tool  \u2502 Structured tool created from the Python code"}),(0,r.jsx)(t.td,{})]})})]}),"\n",(0,r.jsx)(t.h2,{id:"python-repl-tool",children:"Python REPL Tool"}),"\n",(0,r.jsx)(t.p,{children:"This component creates a Python REPL (Read-Eval-Print Loop) tool for executing Python code."}),"\n",(0,r.jsx)(t.h3,{id:"parameters-2",children:"Parameters"}),"\n",(0,r.jsx)(t.h4,{id:"inputs-2",children:"Inputs"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Name"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"name"}),(0,r.jsx)(t.td,{children:"String"}),(0,r.jsx)(t.td,{children:'The name of the tool (default: "python_repl")'})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"description"}),(0,r.jsx)(t.td,{children:"String"}),(0,r.jsx)(t.td,{children:"A description of the tool's functionality"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"global_imports"}),(0,r.jsx)(t.td,{children:"List[String]"}),(0,r.jsx)(t.td,{children:'List of modules to import globally (default: ["math"])'})]})]})]}),"\n",(0,r.jsx)(t.h4,{id:"outputs-2",children:"Outputs"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Name"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsx)(t.tbody,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"tool"}),(0,r.jsx)(t.td,{children:"Tool"}),(0,r.jsx)(t.td,{children:"Python REPL tool for use in LangChain"})]})})]}),"\n",(0,r.jsx)(t.h2,{id:"retriever-tool",children:"Retriever Tool"}),"\n",(0,r.jsx)(t.p,{children:"This component creates a tool for interacting with a retriever in LangChain."}),"\n",(0,r.jsx)(t.h3,{id:"parameters-3",children:"Parameters"}),"\n",(0,r.jsx)(t.h4,{id:"inputs-3",children:"Inputs"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Name"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"retriever"}),(0,r.jsx)(t.td,{children:"BaseRetriever"}),(0,r.jsx)(t.td,{children:"The retriever to interact with"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"name"}),(0,r.jsx)(t.td,{children:"String"}),(0,r.jsx)(t.td,{children:"The name of the tool"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"description"}),(0,r.jsx)(t.td,{children:"String"}),(0,r.jsx)(t.td,{children:"A description of the tool's functionality"})]})]})]}),"\n",(0,r.jsx)(t.h4,{id:"outputs-3",children:"Outputs"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Name"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsx)(t.tbody,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"tool"}),(0,r.jsx)(t.td,{children:"Tool"}),(0,r.jsx)(t.td,{children:"Retriever tool for use in LangChain"})]})})]}),"\n",(0,r.jsx)(t.h2,{id:"wikipedia-api",children:"Wikipedia API"}),"\n",(0,r.jsx)(t.p,{children:"This component creates a tool for searching and retrieving information from Wikipedia."}),"\n",(0,r.jsx)(t.h3,{id:"parameters-4",children:"Parameters"}),"\n",(0,r.jsx)(t.h4,{id:"inputs-4",children:"Inputs"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Name"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"input_value"}),(0,r.jsx)(t.td,{children:"String"}),(0,r.jsx)(t.td,{children:"Search query input"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"lang"}),(0,r.jsx)(t.td,{children:"String"}),(0,r.jsx)(t.td,{children:'Language code for Wikipedia (default: "en")'})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"k"}),(0,r.jsx)(t.td,{children:"Integer"}),(0,r.jsx)(t.td,{children:"Number of results to return"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"load_all_available_meta"}),(0,r.jsx)(t.td,{children:"Boolean"}),(0,r.jsx)(t.td,{children:"Whether to load all available metadata (advanced)"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"doc_content_chars_max"}),(0,r.jsx)(t.td,{children:"Integer"}),(0,r.jsx)(t.td,{children:"Maximum number of characters for document content (advanced)"})]})]})]}),"\n",(0,r.jsx)(t.h4,{id:"outputs-4",children:"Outputs"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Name"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"results"}),(0,r.jsx)(t.td,{children:"List[Data]"}),(0,r.jsx)(t.td,{children:"List of Wikipedia search results"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"tool"}),(0,r.jsx)(t.td,{children:"Tool"}),(0,r.jsx)(t.td,{children:"Wikipedia search tool for use in LangChain"})]})]})]})]})}function a(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>d,x:()=>l});var r=n(6540);const s={},i=r.createContext(s);function d(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);