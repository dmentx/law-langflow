"use strict";(self.webpackChunklangflow_docs=self.webpackChunklangflow_docs||[]).push([[1246],{3509:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>c,toc:()=>a});var n=r(4848),s=r(8453);const i={title:"Blog Writer",sidebar_position:1,slug:"/starter-projects-blog-writer"},o=void 0,c={id:"Starter-Projects/starter-projects-blog-writer",title:"Blog Writer",description:"Build a blog writer with OpenAI that uses URLs for reference content.",source:"@site/docs/Starter-Projects/starter-projects-blog-writer.md",sourceDirName:"Starter-Projects",slug:"/starter-projects-blog-writer",permalink:"/starter-projects-blog-writer",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Blog Writer",sidebar_position:1,slug:"/starter-projects-blog-writer"},sidebar:"defaultSidebar",previous:{title:"Basic Prompting",permalink:"/starter-projects-basic-prompting"},next:{title:"Document QA",permalink:"/starter-projects-document-qa"}},l={},a=[{value:"Prerequisites",id:"899268e6c12c49b59215373a38287507",level:2},{value:"Blog Writer",id:"ef6e7555a96d4cbab169fbd2d8578bdc",level:2},{value:"Create the Blog Writer project",id:"0c1a9c65b7d640f693ec3aad963416ff",level:3},{value:"Run the Blog Writer",id:"b93be7a567f5400293693b31b8d0f81a",level:3}];function d(e){const t={a:"a",code:"code",h2:"h2",h3:"h3",hr:"hr",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:"Build a blog writer with OpenAI that uses URLs for reference content."}),"\n",(0,n.jsx)(t.h2,{id:"899268e6c12c49b59215373a38287507",children:"Prerequisites"}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"/getting-started-installation",children:"Langflow installed and running"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://platform.openai.com/",children:"OpenAI API key created"})}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"ef6e7555a96d4cbab169fbd2d8578bdc",children:"Blog Writer"}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h3,{id:"0c1a9c65b7d640f693ec3aad963416ff",children:"Create the Blog Writer project"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:["From the Langflow dashboard, click\xa0",(0,n.jsx)(t.strong,{children:"New Project"}),"."]}),"\n",(0,n.jsxs)(t.li,{children:["Select\xa0",(0,n.jsx)(t.strong,{children:"Blog Writer"}),"."]}),"\n",(0,n.jsxs)(t.li,{children:["A workspace for the\xa0",(0,n.jsx)(t.strong,{children:"Blog Writer"})," is displayed."]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:r(1298).A+"",width:"2000",height:"915"})}),"\n",(0,n.jsxs)(t.p,{children:["This flow creates a one-shot article generator with\xa0",(0,n.jsx)(t.strong,{children:"Prompt"}),",\xa0",(0,n.jsx)(t.strong,{children:"OpenAI"}),", and\xa0",(0,n.jsx)(t.strong,{children:"Chat Output"}),"\xa0components, augmented with reference content and instructions from the\xa0",(0,n.jsx)(t.strong,{children:"URL"}),"\xa0and\xa0",(0,n.jsx)(t.strong,{children:"Instructions"}),"\xa0components."]}),"\n",(0,n.jsxs)(t.p,{children:["The\xa0",(0,n.jsx)(t.strong,{children:"Template"}),"\xa0field of the ",(0,n.jsx)(t.strong,{children:"Prompt"})," looks like this:"]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:r(2225).A+"",width:"3008",height:"1692"})}),"\n",(0,n.jsxs)(t.p,{children:["The\xa0",(0,n.jsx)(t.code,{children:"{instructions}"}),"\xa0value is received from the\xa0",(0,n.jsx)(t.strong,{children:"Instructions"}),"\xa0component. One or more\xa0",(0,n.jsx)(t.code,{children:"{references}"}),"\xa0 are received from a list of URLs."]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"URL"})," extracts raw text and metadata from one or more web links."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Parse Data"})," converts the data coming from the ",(0,n.jsx)(t.strong,{children:"URL"})," component into plain text to feed a prompt."]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:r(2545).A+"",width:"1022",height:"974"})}),"\n",(0,n.jsx)(t.h3,{id:"b93be7a567f5400293693b31b8d0f81a",children:"Run the Blog Writer"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:["Click the\xa0",(0,n.jsx)(t.strong,{children:"Playground"}),"\xa0button. Here you can chat with the AI that has access to the ",(0,n.jsx)(t.strong,{children:"URL"})," content."]}),"\n",(0,n.jsxs)(t.li,{children:["Click the\xa0",(0,n.jsx)(t.strong,{children:"Lighting Bolt"}),"\xa0icon to run it."]}),"\n",(0,n.jsxs)(t.li,{children:["To write about something different, change the values in the\xa0",(0,n.jsx)(t.strong,{children:"URL"}),"\xa0component and adjust the instructions on the left side bar of the ",(0,n.jsx)(t.strong,{children:"Playground"}),". Try again and see what the LLM constructs."]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:r(775).A+"",width:"864",height:"486"})})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},1298:(e,t,r)=>{r.d(t,{A:()=>n});const n=r.p+"assets/images/1190998947-8b21612eb550df8064412299959cf147.png"},2545:(e,t,r)=>{r.d(t,{A:()=>n});const n=r.p+"assets/images/25156979-f9afe1dc4e9909a38175ff116e661ec3.png"},2225:(e,t,r)=>{r.d(t,{A:()=>n});const n=r.p+"assets/images/257920618-0d1d385e97f8cf314cce8ca33bf0f99d.png"},775:(e,t,r)=>{r.d(t,{A:()=>n});const n=r.p+"assets/images/447530731-02815856687a7761856799816c74f168.png"},8453:(e,t,r)=>{r.d(t,{R:()=>o,x:()=>c});var n=r(6540);const s={},i=n.createContext(s);function o(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);