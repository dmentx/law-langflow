"use strict";(self.webpackChunklangflow_docs=self.webpackChunklangflow_docs||[]).push([[9126],{1723:(e,t,n)=>{n.r(t),n.d(t,{CH:()=>l,assets:()=>d,chCodeConfig:()=>h,contentTitle:()=>r,default:()=>f,frontMatter:()=>s,metadata:()=>c,toc:()=>u});var o=n(4848),a=n(8453),i=n(4754);const s={title:"Auto-saving",sidebar_position:6,slug:"/configuration-auto-save"},r=void 0,c={id:"Configuration/configuration-auto-saving",title:"Auto-saving",description:"Langflow currently supports both manual and auto-saving functionality.",source:"@site/docs/Configuration/configuration-auto-saving.md",sourceDirName:"Configuration",slug:"/configuration-auto-save",permalink:"/configuration-auto-save",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{title:"Auto-saving",sidebar_position:6,slug:"/configuration-auto-save"},sidebar:"defaultSidebar",previous:{title:"Backend-Only",permalink:"/configuration-backend-only"},next:{title:"LangSmith",permalink:"/integrations-langsmith"}},d={},l={annotations:i.hk,Code:i.Cy},h={staticMediaQuery:"not screen, (max-width: 768px)",lineNumbers:!0,showCopyButton:!0,themeName:"github-dark"},u=[{value:"Auto-saving",id:"auto-saving",level:2},{value:"Manual Saving",id:"manual-saving",level:2},{value:"Disable Auto Saving",id:"environment",level:2}];function g(e){const t={code:"code",h2:"h2",img:"img",p:"p",...(0,a.R)(),...e.components};return l||p("CH",!1),l.Code||p("CH.Code",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("style",{dangerouslySetInnerHTML:{__html:'[data-ch-theme="github-dark"] {  --ch-t-colorScheme: dark;--ch-t-foreground: #c9d1d9;--ch-t-background: #0d1117;--ch-t-lighter-inlineBackground: #0d1117e6;--ch-t-editor-background: #0d1117;--ch-t-editor-foreground: #c9d1d9;--ch-t-editor-lineHighlightBackground: #6e76811a;--ch-t-editor-rangeHighlightBackground: #ffffff0b;--ch-t-editor-infoForeground: #3794FF;--ch-t-editor-selectionBackground: #264F78;--ch-t-focusBorder: #1f6feb;--ch-t-tab-activeBackground: #0d1117;--ch-t-tab-activeForeground: #c9d1d9;--ch-t-tab-inactiveBackground: #010409;--ch-t-tab-inactiveForeground: #8b949e;--ch-t-tab-border: #30363d;--ch-t-tab-activeBorder: #0d1117;--ch-t-editorGroup-border: #30363d;--ch-t-editorGroupHeader-tabsBackground: #010409;--ch-t-editorLineNumber-foreground: #6e7681;--ch-t-input-background: #0d1117;--ch-t-input-foreground: #c9d1d9;--ch-t-input-border: #30363d;--ch-t-icon-foreground: #8b949e;--ch-t-sideBar-background: #010409;--ch-t-sideBar-foreground: #c9d1d9;--ch-t-sideBar-border: #30363d;--ch-t-list-activeSelectionBackground: #6e768166;--ch-t-list-activeSelectionForeground: #c9d1d9;--ch-t-list-hoverBackground: #6e76811a;--ch-t-list-hoverForeground: #c9d1d9; }'}}),"\n",(0,o.jsx)(t.p,{children:"Langflow currently supports both manual and auto-saving functionality."}),"\n",(0,o.jsx)(t.h2,{id:"auto-saving",children:"Auto-saving"}),"\n",(0,o.jsx)(t.p,{children:"When Langflow is in Auto-saving mode, all changes are saved automatically. Auto-save progress is indicated in the left side of the top bar: when a flow is being saved, a Loading icon indicates that the flow is being saved in the database."}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{src:n(2539).A+"",width:"956",height:"364"})}),"\n",(0,o.jsx)(t.p,{children:"If you try to exit the flow page before auto-save completes, a dialog will appear to confirm you want to exit before the flow has saved."}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{src:n(2608).A+"",width:"1078",height:"390"})}),"\n",(0,o.jsx)(t.p,{children:"When the flow has successfully saved, you can click the 'Exit' button."}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{src:n(3401).A+"",width:"1070",height:"392"})}),"\n",(0,o.jsx)(t.h2,{id:"manual-saving",children:"Manual Saving"}),"\n",(0,o.jsx)(t.p,{children:"When auto-saving is disabled, you need to manually save your flow when making changes. You can still run the flow without saving, for testing purposes."}),"\n",(0,o.jsx)(t.p,{children:"If you make any changes and Langflow detects that the saved flow is different from the current flow, a Save button will be enabled and the last time saved will appear at the left side of the topbar. To save the flow, click the Save button, or hit Ctrl+S or Command+S."}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{src:n(4534).A+"",width:"1018",height:"334"})}),"\n",(0,o.jsx)(t.p,{children:"If you try to exit after making changes and not saving, a confirmation dialog will appear. You can choose to exit anyway or save and exit."}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{src:n(838).A+"",width:"1048",height:"530"})}),"\n",(0,o.jsx)(t.h2,{id:"environment",children:"Disable Auto Saving"}),"\n",(0,o.jsx)(t.p,{children:"In Langflow, all changes made in the flows are saved automatically. However, you may prefer to disable this functionality, if you want a quick way to prototype and test changes before they are actually saved to the database."}),"\n",(0,o.jsx)(t.p,{children:"If you wish to disable this functionality, you can run Langflow with an environment variable to tell Langflow to use manual saving."}),"\n",(0,o.jsx)(l.Code,{codeConfig:h,northPanel:{tabs:[""],active:"",heightRatio:1},files:[{name:"",focus:"",code:{lines:[{tokens:[{content:"langflow ",props:{style:{color:"#FFA657"}}},{content:"--no-auto-saving",props:{style:{color:"#79C0FF"}}}]},{tokens:[{content:"# or",props:{style:{color:"#8B949E"}}}]},{tokens:[{content:"python ",props:{style:{color:"#FFA657"}}},{content:"-m ",props:{style:{color:"#79C0FF"}}},{content:"langflow ",props:{style:{color:"#A5D6FF"}}},{content:"--no-auto-saving",props:{style:{color:"#79C0FF"}}}]}],lang:"shell"},annotations:[]}]}),"\n",(0,o.jsxs)(t.p,{children:["If you installed the local version of Langflow, you can set an environment variable and load it automatically by inserting this line into the ",(0,o.jsx)(t.code,{children:".env"})," file inside the directory."]}),"\n",(0,o.jsx)(l.Code,{codeConfig:h,northPanel:{tabs:[""],active:"",heightRatio:1},files:[{name:"",focus:"",code:{lines:[{tokens:[{content:"LANGFLOW_AUTO_SAVING=false",props:{}}]}],lang:"text"},annotations:[]}]})]})}function f(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(g,{...e})}):g(e)}function p(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},3401:(e,t,n)=>{n.d(t,{A:()=>o});const o=n.p+"assets/images/flow-saved-fad45d2c9cd4145efec98ee82011ab32.png"},2608:(e,t,n)=>{n.d(t,{A:()=>o});const o=n.p+"assets/images/flow-saving-488fa7317259c2ed5d9c81d0f9325765.png"},838:(e,t,n)=>{n.d(t,{A:()=>o});const o=n.p+"assets/images/flow-unsaved-5698807bbe4832df7d973bb1bbfb15a2.png"},4534:(e,t,n)=>{n.d(t,{A:()=>o});const o=n.p+"assets/images/manual-save-button-bd257ccfa6dbbbe42f6d816da99f7c3c.png"},2539:(e,t,n)=>{n.d(t,{A:()=>o});const o=n.p+"assets/images/saving-header-17981caf9c18b586c0f00b0a03483036.png"}}]);