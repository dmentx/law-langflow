"use strict";(self.webpackChunklangflow_docs=self.webpackChunklangflow_docs||[]).push([[8929],{9411:(M,j,N)=>{N.r(j),N.d(j,{assets:()=>e,contentTitle:()=>T,default:()=>x,frontMatter:()=>g,metadata:()=>y,toc:()=>u});var D=N(4848),I=N(8453);const g={title:"Render",sidebar_position:4,slug:"/deployment-render"},T=void 0,y={id:"Deployment/deployment-render",title:"Render",description:"Deploy on Render",source:"@site/docs/Deployment/deployment-render.md",sourceDirName:"Deployment",slug:"/deployment-render",permalink:"/deployment-render",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"Render",sidebar_position:4,slug:"/deployment-render"},sidebar:"defaultSidebar",previous:{title:"GCP",permalink:"/deployment-gcp"},next:{title:"Railway",permalink:"/deployment-railway"}},e={},u=[{value:"Deploy on Render",id:"20a959b7047e44e490cc129fd21895c0",level:2}];function A(M){const j={a:"a",code:"code",h2:"h2",hr:"hr",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",...(0,I.R)(),...M.components};return(0,D.jsxs)(D.Fragment,{children:[(0,D.jsx)(j.h2,{id:"20a959b7047e44e490cc129fd21895c0",children:"Deploy on Render"}),"\n",(0,D.jsx)(j.hr,{}),"\n",(0,D.jsxs)(j.p,{children:[(0,D.jsx)(j.a,{href:"http://render.com/",children:"Render.com"})," is a unified cloud platform designed to make deploying web applications, APIs, and static sites easy. It provides a streamlined experience with powerful features like automatic SSL, managed databases, and auto-deploy from Git, making it a popular choice for developers looking to simplify their deployment workflows."]}),"\n",(0,D.jsx)(j.p,{children:"Deploying Langflow to Render is a straightforward process that can be completed in just a few steps:"}),"\n",(0,D.jsxs)(j.ol,{children:["\n",(0,D.jsxs)(j.li,{children:["\n",(0,D.jsxs)(j.p,{children:[(0,D.jsx)(j.strong,{children:"Click the Button Below"}),": Start by clicking the deployment button provided below. This will redirect you to the Render platform."]}),"\n",(0,D.jsx)(j.p,{children:(0,D.jsx)(j.a,{href:"https://render.com/deploy?repo=https%3A%2F%2Fgithub.com%2Flangflow-ai%2Flangflow%2Ftree%2Fdev",children:(0,D.jsx)(j.img,{alt:"Deploy to Render",src:N(4137).A+"",width:"153",height:"40"})})}),"\n"]}),"\n",(0,D.jsxs)(j.li,{children:["\n",(0,D.jsxs)(j.p,{children:[(0,D.jsx)(j.strong,{children:"Select the Blueprint Configuration"}),": Once on the Render platform, you will be prompted to provide a blueprint name and to select the branch for your ",(0,D.jsx)(j.code,{children:"render.yaml"})," file in Langflow. This configuration file includes all the necessary settings and resources to deploy Langflow in Render. The default is ",(0,D.jsx)(j.code,{children:"main"}),"."]}),"\n"]}),"\n",(0,D.jsxs)(j.li,{children:["\n",(0,D.jsxs)(j.p,{children:["The ",(0,D.jsx)(j.code,{children:"render.yaml"})," file specifies a ",(0,D.jsx)(j.code,{children:"standard"})," Render instance, because Langflow requires at least 2 GB of RAM to run. This may require a credit card to sign up. Review the pricing details on the Render platform to understand any costs involved before proceeding. If you need to change your plan later, from the Render dashboard, go to ",(0,D.jsx)(j.strong,{children:"Settings"})," > ",(0,D.jsx)(j.strong,{children:"Instance Type"}),"."]}),"\n",(0,D.jsx)(j.p,{children:(0,D.jsx)(j.img,{src:N(7940).A+"",width:"2828",height:"1146"})}),"\n"]}),"\n",(0,D.jsxs)(j.li,{children:["\n",(0,D.jsxs)(j.p,{children:["Click ",(0,D.jsx)(j.strong,{children:"Deploy Blueprint"})," to deploy Langflow. Render will handle the rest, including setting up the database, deploying the Langflow instance, and starting the application."]}),"\n",(0,D.jsx)(j.p,{children:(0,D.jsx)(j.img,{src:N(2945).A+"",width:"2832",height:"624"})}),"\n"]}),"\n"]}),"\n",(0,D.jsx)(j.p,{children:"By following these steps, your Langflow instance will be successfully deployed on Render."})]})}function x(M={}){const{wrapper:j}={...(0,I.R)(),...M.components};return j?(0,D.jsx)(j,{...M,children:(0,D.jsx)(A,{...M})}):A(M)}},7940:(M,j,N)=>{N.d(j,{A:()=>D});const D=N.p+"assets/images/render-deploy-plan-a56d543199fd9081f447f572d9ae3b17.png"},4137:(M,j,N)=>{N.d(j,{A:()=>D});const D="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTUzIiBoZWlnaHQ9IjQwIiB2aWV3Qm94PSIwIDAgMTUzIDQwIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cmVjdCB3aWR0aD0iMTUzIiBoZWlnaHQ9IjQwIiBmaWxsPSIjOEEwNUZGIi8+CjxwYXRoIGQ9Ik0xNy41MDAxIDIxTDE4LjIwNTEgMjEuNzA1TDE5LjUwMDEgMjAuNDE1VjI2LjVIMjAuNTAwMVYyMC40MTVMMjEuNzk1MSAyMS43MDVMMjIuNTAwMSAyMUwyMC4wMDAxIDE4LjVMMTcuNTAwMSAyMVoiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGQ9Ik0yMy43NTAxIDIzSDIzLjUwMDFWMjJIMjMuNzUwMUMyNC4zNDY4IDIyLjAyMzkgMjQuOTI4NiAyMS44MDk3IDI1LjM2NzQgMjEuNDA0N0MyNS44MDYyIDIwLjk5OTYgMjYuMDY2MiAyMC40MzY4IDI2LjA5MDEgMTkuODRDMjYuMTEzOSAxOS4yNDMzIDI1Ljg5OTggMTguNjYxNSAyNS40OTQ3IDE4LjIyMjdDMjUuMDg5NiAxNy43ODM4IDI0LjUyNjggMTcuNTIzOSAyMy45MzAxIDE3LjVIMjMuNTAwMUwyMy40NTAxIDE3LjA5QzIzLjMzOTEgMTYuMjQ4MyAyMi45MjYgMTUuNDc1NSAyMi4yODc2IDE0LjkxNTdDMjEuNjQ5MiAxNC4zNTU5IDIwLjgyOTEgMTQuMDQ3MyAxOS45ODAxIDE0LjA0NzNDMTkuMTMxIDE0LjA0NzMgMTguMzEwOSAxNC4zNTU5IDE3LjY3MjUgMTQuOTE1N0MxNy4wMzQxIDE1LjQ3NTUgMTYuNjIxIDE2LjI0ODMgMTYuNTEwMSAxNy4wOUwxNi41MDAxIDE3LjVIMTYuMDcwMUMxNS40NzMzIDE3LjUyMzkgMTQuOTEwNSAxNy43ODM4IDE0LjUwNTQgMTguMjIyN0MxNC4xMDAzIDE4LjY2MTUgMTMuODg2MiAxOS4yNDMzIDEzLjkxMDEgMTkuODRDMTMuOTMzOSAyMC40MzY4IDE0LjE5MzkgMjAuOTk5NiAxNC42MzI3IDIxLjQwNDdDMTUuMDcxNSAyMS44MDk3IDE1LjY1MzMgMjIuMDIzOSAxNi4yNTAxIDIySDE2LjUwMDFWMjNIMTYuMjUwMUMxNS40NDgzIDIyLjk5NSAxNC42NzY2IDIyLjY5MzcgMTQuMDgzNSAyMi4xNTQxQzEzLjQ5MDUgMjEuNjE0NSAxMy4xMTc4IDIwLjg3NDcgMTMuMDM3MSAyMC4wNzdDMTIuOTU2NSAxOS4yNzkyIDEzLjE3MzYgMTguNDc5OCAxMy42NDY3IDE3LjgzMjVDMTQuMTE5OCAxNy4xODUxIDE0LjgxNTUgMTYuNzM1NSAxNS42MDAxIDE2LjU3QzE1LjgxNTkgMTUuNTYzMyAxNi4zNzA1IDE0LjY2MSAxNy4xNzEyIDE0LjAxMzhDMTcuOTcxOSAxMy4zNjY1IDE4Ljk3MDQgMTMuMDEzNCAyMC4wMDAxIDEzLjAxMzRDMjEuMDI5NyAxMy4wMTM0IDIyLjAyODIgMTMuMzY2NSAyMi44Mjg5IDE0LjAxMzhDMjMuNjI5NiAxNC42NjEgMjQuMTg0MiAxNS41NjMzIDI0LjQwMDEgMTYuNTdDMjUuMTg0NiAxNi43MzU1IDI1Ljg4MDMgMTcuMTg1MSAyNi4zNTM0IDE3LjgzMjVDMjYuODI2NSAxOC40Nzk4IDI3LjA0MzYgMTkuMjc5MiAyNi45NjMgMjAuMDc3QzI2Ljg4MjMgMjAuODc0NyAyNi41MDk2IDIxLjYxNDUgMjUuOTE2NiAyMi4xNTQxQzI1LjMyMzUgMjIuNjkzNyAyNC41NTE4IDIyLjk5NSAyMy43NTAxIDIzWiIgZmlsbD0id2hpdGUiLz4KPHBhdGggZD0iTTM5LjA2MzIgMjVIMzUuNDM3MlYxNC45OUgzOS4wNjMyQzQxLjgyMTIgMTQuOTkgNDMuNTE1MiAxNi43ODIgNDMuNTE1MiAyMC4wMDJDNDMuNTE1MiAyMy4yMjIgNDEuODIxMiAyNSAzOS4wNjMyIDI1Wk0zNi42OTcyIDIzLjg4SDM5LjA2MzJDNDEuNjExMiAyMy44OCA0Mi4xOTkyIDIxLjk2MiA0Mi4xOTkyIDIwLjAwMkM0Mi4xOTkyIDE4LjA0MiA0MS42MTEyIDE2LjExIDM5LjA2MzIgMTYuMTFIMzYuNjk3MlYyMy44OFpNNTEuNDMwOSAyMS4xNjRDNTEuNDMwOSAyMS4zNzQgNTEuNDMwOSAyMS42MTIgNTEuNDE2OSAyMS43MjRINDUuODMwOUM0NS44NTg5IDIyLjk4NCA0Ni41NTg5IDI0LjI0NCA0OC4xNDA5IDI0LjI0NEM0OS41NDA5IDI0LjI0NCA1MC4wNzI5IDIzLjMwNiA1MC4xOTg5IDIyLjgwMkg1MS4zMzI5QzUwLjk2ODkgMjQuMTMyIDQ5Ljk2MDkgMjUuMjEgNDguMTI2OSAyNS4yMUM0NS44NzI5IDI1LjIxIDQ0LjY1NDkgMjMuNTg2IDQ0LjY1NDkgMjEuNDE2QzQ0LjY1NDkgMTkuMTM0IDQ2LjAxMjkgMTcuNjUgNDguMTI2OSAxNy42NUM1MC4yMTI5IDE3LjY1IDUxLjQzMDkgMTkuMDc4IDUxLjQzMDkgMjEuMTY0Wk00NS44MzA5IDIwLjc0NEg1MC4yNDA5QzUwLjI0MDkgMTkuNTY4IDQ5LjQwMDkgMTguNjE2IDQ4LjA3MDkgMTguNjE2QzQ2LjgzODkgMTguNjE2IDQ1LjkwMDkgMTkuNDk4IDQ1LjgzMDkgMjAuNzQ0Wk01Ni4xODk4IDE3LjY2NEM1Ny45ODE4IDE3LjY2NCA1OS40MDk4IDE5LjA3OCA1OS40MDk4IDIxLjQzQzU5LjQwOTggMjMuNzgyIDU3Ljk4MTggMjUuMTk2IDU2LjE4OTggMjUuMTk2QzU1LjA0MTggMjUuMTk2IDU0LjM2OTggMjQuNjkyIDUzLjk0OTggMjQuMDc2SDUzLjkyMThWMjcuNDc4SDUyLjgwMThWMTcuODZINTMuOTIxOFYxOC43NDJINTMuOTQ5OEM1NC4zNjk4IDE4LjE5NiA1NS4wNDE4IDE3LjY2NCA1Ni4xODk4IDE3LjY2NFpNNTYuMDc3OCAyNC4yMTZDNTcuNTQ3OCAyNC4yMTYgNTguMjMzOCAyMi44MyA1OC4yMzM4IDIxLjQzQzU4LjIzMzggMjAuMDMgNTcuNTQ3OCAxOC42NDQgNTYuMDc3OCAxOC42NDRDNTQuNzQ3OCAxOC42NDQgNTMuOTIxOCAxOS43NSA1My45MjE4IDIxLjQzQzUzLjkyMTggMjMuMTEgNTQuNzQ3OCAyNC4yMTYgNTYuMDc3OCAyNC4yMTZaTTYxLjkwOTQgMjVINjAuNzg5NFYxNC45OUg2MS45MDk0VjI1Wk02Ni43ODU1IDI1LjIxQzY0LjYwMTUgMjUuMjEgNjMuMjg1NSAyMy42NTYgNjMuMjg1NSAyMS40M0M2My4yODU1IDE5LjIwNCA2NC42MDE1IDE3LjY1IDY2Ljc4NTUgMTcuNjVDNjguOTU1NSAxNy42NSA3MC4yNzE1IDE5LjIwNCA3MC4yNzE1IDIxLjQzQzcwLjI3MTUgMjMuNjU2IDY4Ljk1NTUgMjUuMjEgNjYuNzg1NSAyNS4yMVpNNjYuNzg1NSAyNC4yM0M2OC4zODE1IDI0LjIzIDY5LjA5NTUgMjIuOTU2IDY5LjA5NTUgMjEuNDNDNjkuMDk1NSAxOS45MDQgNjguMzgxNSAxOC42MyA2Ni43ODU1IDE4LjYzQzY1LjE3NTUgMTguNjMgNjQuNDYxNSAxOS45MDQgNjQuNDYxNSAyMS40M0M2NC40NjE1IDIyLjk1NiA2NS4xNzU1IDI0LjIzIDY2Ljc4NTUgMjQuMjNaTTcyLjIwMiAyNy41MDZDNzEuOTUgMjcuNTA2IDcxLjc4MiAyNy40OTIgNzEuNDYgMjcuNDM2VjI2LjQ4NEM3MS42OTggMjYuNTEyIDcxLjgxIDI2LjUyNiA3Mi4wMiAyNi41MjZDNzIuNjA4IDI2LjUyNiA3My4yNTIgMjYuMTYyIDczLjU2IDI0LjkzTDcwLjY2MiAxNy44Nkg3MS45MjJMNzQuMTIgMjMuNTQ0SDc0LjE0OEw3Ni4yNDggMTcuODZINzcuNDUyTDc0LjU2OCAyNS4yMUM3My44NTQgMjcuMDE2IDczLjE2OCAyNy41MDYgNzIuMjAyIDI3LjUwNlpNODQuMjM3IDE3Ljg2VjE4Ljg0SDgyLjgzN1YyMy4xMzhDODIuODM3IDIzLjg5NCA4My4wMTkgMjQuMDkgODMuNjQ5IDI0LjA5QzgzLjg4NyAyNC4wOSA4My45OTkgMjQuMDc2IDg0LjIzNyAyNC4wNDhWMjVDODMuOTE1IDI1LjA1NiA4My43NDcgMjUuMDcgODMuNDk1IDI1LjA3QzgyLjQ0NSAyNS4wNyA4MS43MTcgMjQuNzA2IDgxLjcxNyAyMy4wODJWMTguODRIODAuNjY3VjE3Ljg2SDgxLjcxN1YxNS40OEg4Mi44MzdWMTcuODZIODQuMjM3Wk04OC41MDk1IDI1LjIxQzg2LjMyNTUgMjUuMjEgODUuMDA5NSAyMy42NTYgODUuMDA5NSAyMS40M0M4NS4wMDk1IDE5LjIwNCA4Ni4zMjU1IDE3LjY1IDg4LjUwOTUgMTcuNjVDOTAuNjc5NSAxNy42NSA5MS45OTU1IDE5LjIwNCA5MS45OTU1IDIxLjQzQzkxLjk5NTUgMjMuNjU2IDkwLjY3OTUgMjUuMjEgODguNTA5NSAyNS4yMVpNODguNTA5NSAyNC4yM0M5MC4xMDU1IDI0LjIzIDkwLjgxOTUgMjIuOTU2IDkwLjgxOTUgMjEuNDNDOTAuODE5NSAxOS45MDQgOTAuMTA1NSAxOC42MyA4OC41MDk1IDE4LjYzQzg2Ljg5OTUgMTguNjMgODYuMTg1NSAxOS45MDQgODYuMTg1NSAyMS40M0M4Ni4xODU1IDIyLjk1NiA4Ni44OTk1IDI0LjIzIDg4LjUwOTUgMjQuMjNaTTk3Ljk4IDI1SDk2LjcyVjE0Ljk5SDEwMC43MzhDMTAyLjkzNiAxNC45OSAxMDQuMDg0IDE2LjAyNiAxMDQuMDg0IDE3Ljg3NEMxMDQuMDg0IDE5LjEyIDEwMy4zMTQgMjAuMDcyIDEwMi4yNjQgMjAuMzI0VjIwLjM1MkMxMDQuNTE4IDIwLjc4NiAxMDMuNjkyIDI0Ljc0OCAxMDQuMjI0IDI0LjkxNlYyNUgxMDIuODY2QzEwMi40MzIgMjQuNTggMTAzLjM4NCAyMC45NTQgMTAwLjg1IDIwLjk1NEg5Ny45OFYyNVpNOTcuOTggMTkuODM0SDEwMC40NDRDMTAxLjk3IDE5LjgzNCAxMDIuODI0IDE5LjE0OCAxMDIuODI0IDE3LjkwMkMxMDIuODI0IDE2Ljc1NCAxMDIuMTggMTYuMTEgMTAwLjQ4NiAxNi4xMUg5Ny45OFYxOS44MzRaTTExMS45NjIgMjEuMTY0QzExMS45NjIgMjEuMzc0IDExMS45NjIgMjEuNjEyIDExMS45NDggMjEuNzI0SDEwNi4zNjJDMTA2LjM5IDIyLjk4NCAxMDcuMDkgMjQuMjQ0IDEwOC42NzIgMjQuMjQ0QzExMC4wNzIgMjQuMjQ0IDExMC42MDQgMjMuMzA2IDExMC43MyAyMi44MDJIMTExLjg2NEMxMTEuNSAyNC4xMzIgMTEwLjQ5MiAyNS4yMSAxMDguNjU4IDI1LjIxQzEwNi40MDQgMjUuMjEgMTA1LjE4NiAyMy41ODYgMTA1LjE4NiAyMS40MTZDMTA1LjE4NiAxOS4xMzQgMTA2LjU0NCAxNy42NSAxMDguNjU4IDE3LjY1QzExMC43NDQgMTcuNjUgMTExLjk2MiAxOS4wNzggMTExLjk2MiAyMS4xNjRaTTEwNi4zNjIgMjAuNzQ0SDExMC43NzJDMTEwLjc3MiAxOS41NjggMTA5LjkzMiAxOC42MTYgMTA4LjYwMiAxOC42MTZDMTA3LjM3IDE4LjYxNiAxMDYuNDMyIDE5LjQ5OCAxMDYuMzYyIDIwLjc0NFpNMTE2LjgzMyAxNy42NjRDMTE4LjEzNSAxNy42NjQgMTE5LjIyNyAxOC4zNzggMTE5LjIyNyAyMC4wMTZWMjVIMTE4LjEwN1YyMC4yOTZDMTE4LjEwNyAxOS4zNzIgMTE3LjY3MyAxOC42NDQgMTE2LjU1MyAxOC42NDRDMTE1LjI5MyAxOC42NDQgMTE0LjQ1MyAxOS40NDIgMTE0LjQ1MyAyMC41NDhWMjVIMTEzLjMzM1YxNy44NkgxMTQuNDUzVjE4LjcxNEgxMTQuNDgxQzExNC44NTkgMTguMjEgMTE1LjYxNSAxNy42NjQgMTE2LjgzMyAxNy42NjRaTTEyNi4wNDcgMTguNzg0VjE0Ljk5SDEyNy4xNjdWMjVIMTI2LjA0N1YyNC4xMThIMTI2LjAxOUMxMjUuNTk5IDI0LjY2NCAxMjQuOTI3IDI1LjE5NiAxMjMuNzc5IDI1LjE5NkMxMjEuOTg3IDI1LjE5NiAxMjAuNTU5IDIzLjc4MiAxMjAuNTU5IDIxLjQzQzEyMC41NTkgMTkuMDc4IDEyMS45ODcgMTcuNjY0IDEyMy43NzkgMTcuNjY0QzEyNC45MjcgMTcuNjY0IDEyNS41OTkgMTguMTY4IDEyNi4wMTkgMTguNzg0SDEyNi4wNDdaTTEyMy44OTEgMjQuMjE2QzEyNS4yMjEgMjQuMjE2IDEyNi4wNDcgMjMuMTEgMTI2LjA0NyAyMS40M0MxMjYuMDQ3IDE5Ljc1IDEyNS4yMjEgMTguNjQ0IDEyMy44OTEgMTguNjQ0QzEyMi40MjEgMTguNjQ0IDEyMS43MzUgMjAuMDMgMTIxLjczNSAyMS40M0MxMjEuNzM1IDIyLjgzIDEyMi40MjEgMjQuMjE2IDEyMy44OTEgMjQuMjE2Wk0xMzUuMzIzIDIxLjE2NEMxMzUuMzIzIDIxLjM3NCAxMzUuMzIzIDIxLjYxMiAxMzUuMzA5IDIxLjcyNEgxMjkuNzIzQzEyOS43NTEgMjIuOTg0IDEzMC40NTEgMjQuMjQ0IDEzMi4wMzMgMjQuMjQ0QzEzMy40MzMgMjQuMjQ0IDEzMy45NjUgMjMuMzA2IDEzNC4wOTEgMjIuODAySDEzNS4yMjVDMTM0Ljg2MSAyNC4xMzIgMTMzLjg1MyAyNS4yMSAxMzIuMDE5IDI1LjIxQzEyOS43NjUgMjUuMjEgMTI4LjU0NyAyMy41ODYgMTI4LjU0NyAyMS40MTZDMTI4LjU0NyAxOS4xMzQgMTI5LjkwNSAxNy42NSAxMzIuMDE5IDE3LjY1QzEzNC4xMDUgMTcuNjUgMTM1LjMyMyAxOS4wNzggMTM1LjMyMyAyMS4xNjRaTTEyOS43MjMgMjAuNzQ0SDEzNC4xMzNDMTM0LjEzMyAxOS41NjggMTMzLjI5MyAxOC42MTYgMTMxLjk2MyAxOC42MTZDMTMwLjczMSAxOC42MTYgMTI5Ljc5MyAxOS40OTggMTI5LjcyMyAyMC43NDRaTTEzOS44MTYgMTcuNjY0QzE0MC4wODIgMTcuNjY0IDE0MC4yNzggMTcuNjc4IDE0MC40NzQgMTcuNzA2VjE4LjgyNkMxNDAuMzA2IDE4Ljc5OCAxNDAuMTggMTguNzg0IDE0MC4wMTIgMTguNzg0QzEzOC42OTYgMTguNzg0IDEzNy44MTQgMTkuODIgMTM3LjgxNCAyMS4xOTJWMjVIMTM2LjY5NFYxNy44NkgxMzcuODE0VjE5LjI3NEgxMzcuODQyQzEzOC4yMiAxOC4zMzYgMTM4Ljc5NCAxNy42NjQgMTM5LjgxNiAxNy42NjRaIiBmaWxsPSJ3aGl0ZSIvPgo8L3N2Zz4K"},2945:(M,j,N)=>{N.d(j,{A:()=>D});const D=N.p+"assets/images/render-deployed-overview-20965820aa54ac367c359d12c50ff6a6.png"},8453:(M,j,N)=>{N.d(j,{R:()=>T,x:()=>y});var D=N(6540);const I={},g=D.createContext(I);function T(M){const j=D.useContext(g);return D.useMemo((function(){return"function"==typeof M?M(j):{...j,...M}}),[j,M])}function y(M){let j;return j=M.disableParentContext?"function"==typeof M.components?M.components(I):M.components||I:T(M.components),D.createElement(g.Provider,{value:j},M.children)}}}]);