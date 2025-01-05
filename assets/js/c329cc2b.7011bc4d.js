"use strict";(self.webpackChunklangflow_docs=self.webpackChunklangflow_docs||[]).push([[9304],{4905:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>d,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var n=t(4848),a=t(8453);const o={title:"Chat Memory",sidebar_position:1,slug:"/guides-chat-memory"},r=void 0,i={id:"Guides/guides-chat-memory",title:"Chat Memory",description:"Langflow allows every chat message to be stored, and a single flow can have multiple memory sessions. This enables you to create separate memories for agents to store and recall information as needed.",source:"@site/docs/Guides/guides-chat-memory.md",sourceDirName:"Guides",slug:"/guides-chat-memory",permalink:"/law-langflow/guides-chat-memory",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Chat Memory",sidebar_position:1,slug:"/guides-chat-memory"},sidebar:"defaultSidebar",previous:{title:"\ud83d\udcda New to LLMs?",permalink:"/law-langflow/guides-new-to-llms"},next:{title:"Data & Message",permalink:"/law-langflow/guides-data-message"}},d={},c=[{value:"Session ID",id:"4ee86e27d1004e8288a72c633c323703",level:2}];function l(e){const s={a:"a",code:"code",em:"em",h2:"h2",hr:"hr",img:"img",p:"p",strong:"strong",...(0,a.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(s.p,{children:["Langflow allows every chat message to be stored, and a single flow can have multiple memory sessions. This enables you to create separate ",(0,n.jsx)(s.em,{children:"memories"})," for agents to store and recall information as needed."]}),"\n",(0,n.jsxs)(s.p,{children:["In any project, as long as there are ",(0,n.jsx)(s.a,{href:"/components-io",children:(0,n.jsx)(s.strong,{children:"Chat"})})," being used, memories are always being stored by default. These are messages from a user to the AI or vice-versa."]}),"\n",(0,n.jsxs)(s.p,{children:["To see and access this history of messages, Langflow features a component called ",(0,n.jsx)(s.strong,{children:"Chat Memory"}),". It retrieves previous messages and outputs them in structured format or parsed."]}),"\n",(0,n.jsxs)(s.p,{children:["Memories can be visualized and managed directly from the ",(0,n.jsx)(s.strong,{children:"Playground"}),". You can edit and remove previous messages to inspect and validate the AI\u2019s response behavior. You can remove or edit previous messages to get your models acting just right."]}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{src:t(7960).A+"",width:"3040",height:"1710"})}),"\n",(0,n.jsx)(s.p,{children:"Modifying these memories will influence the behavior of the chatbot responses, as long as an agent uses them. Here you have the ability to remove or edit previous messages, allowing them to manipulate and explore how these changes affect model responses."}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{src:t(3412).A+"",width:"3072",height:"1728"})}),"\n",(0,n.jsx)(s.h2,{id:"4ee86e27d1004e8288a72c633c323703",children:"Session ID"}),"\n",(0,n.jsx)(s.hr,{}),"\n",(0,n.jsxs)(s.p,{children:["Chat conversations store messages categorized by a ",(0,n.jsx)(s.code,{children:"Session ID"}),". A a single flow can host multiple session IDs, and different flows can also share the same one."]}),"\n",(0,n.jsxs)(s.p,{children:["The ",(0,n.jsx)(s.strong,{children:"Chat Memory"})," component also retrieves message histories by ",(0,n.jsx)(s.code,{children:"Session ID"})," which users can change in the advanced settings."]}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{src:t(3805).A+"",width:"2624",height:"1476"})}),"\n",(0,n.jsxs)(s.p,{children:["By default, if the ",(0,n.jsx)(s.code,{children:"Session ID"}),"  value is empty, it is set to match the the same value as the ",(0,n.jsx)(s.code,{children:"Flow ID"}),"."]}),"\n",(0,n.jsxs)(s.p,{children:["You can also display all messages stored across every flow and session by going to\xa0",(0,n.jsx)(s.strong,{children:"Settings"}),"\xa0>\xa0",(0,n.jsx)(s.strong,{children:"Messages"}),"."]}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{src:t(7359).A+"",width:"2944",height:"1656"})})]})}function h(e={}){const{wrapper:s}={...(0,a.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},7359:(e,s,t)=>{t.d(s,{A:()=>n});const n=t.p+"assets/images/1313358839-7224cf6604214148d5ca6dbdf71f276f.png"},7960:(e,s,t)=>{t.d(s,{A:()=>n});const n=t.p+"assets/images/1988919422-5f3ccaf67118e2ddbd00e534fba37c2a.png"},3805:(e,s,t)=>{t.d(s,{A:()=>n});const n=t.p+"assets/images/207457678-ab685bf50b3f8bdafee95048d764a684.png"},3412:(e,s,t)=>{t.d(s,{A:()=>n});const n=t.p+"assets/images/948333764-06ef22f7a0401054a818bd7025be1719.png"},8453:(e,s,t)=>{t.d(s,{R:()=>r,x:()=>i});var n=t(6540);const a={},o=n.createContext(a);function r(e){const s=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function i(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),n.createElement(o.Provider,{value:s},e.children)}}}]);