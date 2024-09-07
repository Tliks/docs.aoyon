"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[28],{3486:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>s,contentTitle:()=>d,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var l=n(4848),t=n(8453);const i={},d="Module Creator",o={id:"description/CreateModule",title:"Module Creator",description:"\u6a5f\u80fd",source:"@site/docs/03-description/01-CreateModule.md",sourceDirName:"03-description",slug:"/description/CreateModule",permalink:"/SMU-Docs/en/docs/description/CreateModule",draft:!1,unlisted:!1,editUrl:"https://github.com/Tliks/SMU-Docs/docs/03-description/01-CreateModule.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"SceneMeshUtils - \u6982\u8981",permalink:"/SMU-Docs/en/docs/intro"},next:{title:"Create Mask Texture",permalink:"/SMU-Docs/en/docs/description/CreateMaskTexture"}},s={},c=[{value:"\u6a5f\u80fd",id:"\u6a5f\u80fd",level:2},{value:"\u5b9f\u884c\u5834\u6240",id:"\u5b9f\u884c\u5834\u6240",level:2},{value:"\u4f7f\u3044\u65b9",id:"\u4f7f\u3044\u65b9",level:2},{value:"Create Module",id:"create-module",level:3},{value:"Create Module (Merged)",id:"create-module-merged",level:3},{value:"Create Module with Triangle Selector",id:"create-module-with-triangle-selector",level:3}];function a(e){const r={a:"a",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ul:"ul",...(0,t.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(r.header,{children:(0,l.jsx)(r.h1,{id:"module-creator",children:"Module Creator"})}),"\n",(0,l.jsx)(r.h2,{id:"\u6a5f\u80fd",children:"\u6a5f\u80fd"}),"\n",(0,l.jsxs)(r.ul,{children:["\n",(0,l.jsx)(r.li,{children:"\u30a2\u30d0\u30bf\u30fc\u3084\u8863\u88c5\u306e\u4e00\u90e8\u306e\u307f\u3092\u53d6\u308a\u51fa\u3057\u3001\u4ed6\u306e\u30a2\u30d0\u30bf\u30fc\u306b\u4f7f\u7528\u3059\u308b\u3053\u3068\u3092\u76ee\u7684\u3068\u3057\u305f\u6a5f\u80fd"}),"\n",(0,l.jsx)(r.li,{children:"\u6b32\u3057\u3044\u30e1\u30c3\u30b7\u30e5\u306e\u7b87\u6240\u3092\u6307\u5b9a\u3057\u305f\u4e0a\u3067\u30a6\u30a7\u30a4\u30c8\u3084PhysBone\u7b49\u3092\u8d70\u67fb\u3057\u5fc5\u8981\u6700\u4f4e\u9650\u306e\u69cb\u6210\u306ePrefab Variant\u3092\u751f\u6210"}),"\n"]}),"\n",(0,l.jsx)(r.h2,{id:"\u5b9f\u884c\u5834\u6240",children:"\u5b9f\u884c\u5834\u6240"}),"\n",(0,l.jsxs)(r.ul,{children:["\n",(0,l.jsx)(r.li,{children:"Skinned Mesh Renderer\u304c\u3064\u3044\u305f\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306e\u53f3\u30af\u30ea\u30c3\u30af\u30e1\u30cb\u30e5\u30fc"}),"\n",(0,l.jsx)(r.li,{children:"Module Creator / Create Module"}),"\n",(0,l.jsx)(r.li,{children:"Module Creator / Create Module (Merged)"}),"\n",(0,l.jsx)(r.li,{children:"Module Creator / Create Module with Triangle Selector"}),"\n"]}),"\n",(0,l.jsx)(r.h2,{id:"\u4f7f\u3044\u65b9",children:"\u4f7f\u3044\u65b9"}),"\n",(0,l.jsx)(r.h3,{id:"create-module",children:"Create Module"}),"\n",(0,l.jsxs)(r.ul,{children:["\n",(0,l.jsx)(r.li,{children:"Skinned Mesh Renderer\u304c\u3064\u3044\u305f\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306e\u53f3\u30af\u30ea\u30c3\u30af\u30e1\u30cb\u30e5\u30fc\u304b\u3089Module Creator / Create Module"}),"\n",(0,l.jsx)(r.li,{children:"\u9078\u629e\u3055\u308c\u305f\u30e1\u30c3\u30b7\u30e5\u3092\u542b\u3080Prefab\u3068\u305d\u306e\u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u304cAssets\u3068Hierarchy\u306b\u305d\u308c\u305e\u308c\u751f\u6210\u3055\u308c\u307e\u3059"}),"\n",(0,l.jsx)(r.li,{children:"\u4ed6\u306e\u30a2\u30d0\u30bf\u30fc\u306b\u9069\u7528\u3059\u308b\u969b\u306fMA SetupOutfits/Merge Armature/Bone Proxy\u3092\u60f3\u5b9a\u3057\u3066\u3044\u307e\u3059\u3002"}),"\n"]}),"\n",(0,l.jsx)(r.h3,{id:"create-module-merged",children:"Create Module (Merged)"}),"\n",(0,l.jsxs)(r.ul,{children:["\n",(0,l.jsx)(r.li,{children:"\u8907\u6570\u306eSkinned Mesh Renderer\u3092\u307e\u3068\u3081\u3066\u5358\u4e00\u306ePrefab\u306b\u3057\u307e\u3059\u3002\u305d\u308c\u4ee5\u5916\u306f\u901a\u5e38\u306eCreate Module\u3068\u540c\u3058\u3067\u3059\u3002"}),"\n",(0,l.jsx)(r.li,{children:"\u8907\u6570\u306eSkinned Mesh Renderer\u304c\u3064\u3044\u305f\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u3092\u9078\u629e\u3057\u305f\u4e0a\u3067\u53f3\u30af\u30ea\u30c3\u30af\u30e1\u30cb\u30e5\u30fc\u304b\u3089Module Creator / Create Module (Merged)"}),"\n"]}),"\n",(0,l.jsx)(r.h3,{id:"create-module-with-triangle-selector",children:"Create Module with Triangle Selector"}),"\n",(0,l.jsxs)(r.ul,{children:["\n",(0,l.jsx)(r.li,{children:"\u5358\u4e00\u306eSkinned Mesh Renderer\u306e\u3046\u3061\u3001\u305d\u306e\u4e00\u90e8\u306e\u307f\u3092Prefab\u306b\u3057\u307e\u3059\u3002"}),"\n",(0,l.jsx)(r.li,{children:"Skinned Mesh Renderer\u304c\u3064\u3044\u305f\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306e\u53f3\u30af\u30ea\u30c3\u30af\u30e1\u30cb\u30e5\u30fc\u304b\u3089Module Creator / Create Module with Triangle Selector"}),"\n",(0,l.jsx)(r.li,{children:"Add Selection\u304b\u3089Triangle Selector\u3092\u8d77\u52d5"}),"\n",(0,l.jsxs)(r.li,{children:["\u6b32\u3057\u3044\u7b87\u6240\u306e\u30e1\u30c3\u30b7\u30e5\u3092\u6307\u5b9a\u3057\u305f\u4e0a\u3067Apply\u3002\u8a73\u7d30\u306f",(0,l.jsx)(r.a,{href:"../TriangleSelector",children:"Triangle Selector"}),"\u304b\u3089"]}),"\n",(0,l.jsx)(r.li,{children:"Create Module\u3092\u30af\u30ea\u30c3\u30af"}),"\n",(0,l.jsx)(r.li,{children:"\u672a\u9078\u629e\u306e\u30e2\u30b8\u30e5\u30fc\u30eb\u3092\u542b\u3080\u306f\u9078\u629e\u3057\u3066\u3044\u306a\u3044\u7b87\u6240\u306ePrefab\u3082\u540c\u6642\u306b\u51fa\u529b\u3057\u307e\u3059\u3002\u30e1\u30c3\u30b7\u30e5\u30922\u3064\u306b\u5206\u96e2\u3059\u308b\u3088\u3046\u306a\u30a4\u30e1\u30fc\u30b8\u3067\u3059\u3002"}),"\n"]})]})}function u(e={}){const{wrapper:r}={...(0,t.R)(),...e.components};return r?(0,l.jsx)(r,{...e,children:(0,l.jsx)(a,{...e})}):a(e)}},8453:(e,r,n)=>{n.d(r,{R:()=>d,x:()=>o});var l=n(6540);const t={},i=l.createContext(t);function d(e){const r=l.useContext(i);return l.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function o(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:d(e.components),l.createElement(i.Provider,{value:r},e.children)}}}]);