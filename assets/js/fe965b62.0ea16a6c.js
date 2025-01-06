"use strict";(self.webpackChunklangflow_docs=self.webpackChunklangflow_docs||[]).push([[784],{2095:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>r,default:()=>h,frontMatter:()=>c,metadata:()=>i,toc:()=>l});var s=n(4848),o=n(8453);const c={title:"Document QA",sidebar_position:2,slug:"/starter-projects-document-qa"},r=void 0,i={id:"Starter-Projects/starter-projects-document-qa",title:"Document QA",description:"Build a question-and-answer chatbot with a document loaded from local memory.",source:"@site/docs/Starter-Projects/starter-projects-document-qa.md",sourceDirName:"Starter-Projects",slug:"/starter-projects-document-qa",permalink:"/law-langflow/starter-projects-document-qa",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Document QA",sidebar_position:2,slug:"/starter-projects-document-qa"},sidebar:"defaultSidebar",previous:{title:"Basic Prompting",permalink:"/law-langflow/starter-projects-basic-prompting"},next:{title:"\ud83d\udcda New to LLMs?",permalink:"/law-langflow/guides-new-to-llms"}},a={},l=[{value:"Prerequisites",id:"6555c100a30e4a21954af25e2e05403a",level:2},{value:"Document QA",id:"acc90b19d4634c279b3e4e19e4e7ab1d",level:2},{value:"Create the Document QA project",id:"204500104f024553aab2b633bb99f603",level:3},{value:"Run the Document QA",id:"f58fcc2b9e594156a829b1772b6a7191",level:3}];function d(e){const t={a:"a",code:"code",h2:"h2",h3:"h3",hr:"hr",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:"Build a question-and-answer chatbot with a document loaded from local memory."}),"\n",(0,s.jsx)(t.h2,{id:"6555c100a30e4a21954af25e2e05403a",children:"Prerequisites"}),"\n",(0,s.jsx)(t.hr,{}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://platform.openai.com/",children:"OpenAI API key created"})}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"acc90b19d4634c279b3e4e19e4e7ab1d",children:"Document QA"}),"\n",(0,s.jsx)(t.hr,{}),"\n",(0,s.jsx)(t.h3,{id:"204500104f024553aab2b633bb99f603",children:"Create the Document QA project"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["From the Langflow dashboard, click\xa0",(0,s.jsx)(t.strong,{children:"New Project"}),"."]}),"\n",(0,s.jsxs)(t.li,{children:["Select\xa0",(0,s.jsx)(t.strong,{children:"Document QA"}),"."]}),"\n",(0,s.jsxs)(t.li,{children:["The\xa0",(0,s.jsx)(t.strong,{children:"Document QA"}),"\xa0project is created."]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:n(2996).A+"",width:"2000",height:"968"})}),"\n",(0,s.jsxs)(t.p,{children:["This flow is composed of a standard chatbot with the\xa0",(0,s.jsx)(t.strong,{children:"Chat Input"}),",\xa0",(0,s.jsx)(t.strong,{children:"Prompt"}),",\xa0",(0,s.jsx)(t.strong,{children:"OpenAI"}),", and\xa0",(0,s.jsx)(t.strong,{children:"Chat Output"}),"\xa0components, but it also incorporates a ",(0,s.jsx)(t.strong,{children:"File"})," component, which loads a file from your local machine. ",(0,s.jsx)(t.strong,{children:"Parse Data"})," is used to convert the data from ",(0,s.jsx)(t.strong,{children:"File"})," into the\xa0",(0,s.jsx)(t.strong,{children:"Prompt"}),"\xa0component as\xa0",(0,s.jsx)(t.code,{children:"{Document}"}),". The\xa0",(0,s.jsx)(t.strong,{children:"Prompt"}),"\xa0component is instructed to answer questions based on the contents of\xa0",(0,s.jsx)(t.code,{children:"{Document}"}),". This gives the\xa0",(0,s.jsx)(t.strong,{children:"OpenAI"}),"\xa0component context it would not otherwise have access to."]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:n(228).A+"",width:"3104",height:"1746"})}),"\n",(0,s.jsx)(t.h3,{id:"f58fcc2b9e594156a829b1772b6a7191",children:"Run the Document QA"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["To select a document to load, in the\xa0",(0,s.jsx)(t.strong,{children:"File"}),"\xa0component, click the\xa0",(0,s.jsx)(t.strong,{children:"Path"}),"\xa0field. Select a local file, and then click\xa0",(0,s.jsx)(t.strong,{children:"Open"}),". The file name appears in the field."]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:n(2543).A+"",width:"2656",height:"1494"})}),"\n",(0,s.jsxs)(t.ol,{start:"2",children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["Click the\xa0",(0,s.jsx)(t.strong,{children:"Playground"}),"\xa0button. Here you can chat with the AI that has access to your document's content."]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"Type in a question about the document content and press Enter. You should see a contextual response."}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},2543:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/1073956357-ad06ac6117db6c773f2b153e155e6fd2.png"},228:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/1140665127-3f2b06d41cf3e8871307680b17f373e9.png"},2996:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/626991262-cc5dec3680402e7b7692bccb6a3f3085.png"},8453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>i});var s=n(6540);const o={},c=s.createContext(o);function r(e){const t=s.useContext(c);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),s.createElement(c.Provider,{value:t},e.children)}}}]);