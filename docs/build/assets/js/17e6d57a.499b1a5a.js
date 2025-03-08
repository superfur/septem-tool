"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[875],{7211:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>t,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>r,toc:()=>a});const r=JSON.parse('{"id":"api/cx","title":"CSS \u7c7b\u540d\u51fd\u6570","description":"cx","source":"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/api/cx.md","sourceDirName":"api","slug":"/api/cx","permalink":"/tool/docs/api/cx","draft":false,"unlisted":false,"editUrl":"https://github.com/septem/tool/tree/main/docs/docs/api/cx.md","tags":[],"version":"current","sidebarPosition":7,"frontMatter":{"sidebar_position":7},"sidebar":"apiSidebar","previous":{"title":"\u67e5\u8be2\u5b57\u7b26\u4e32\u51fd\u6570","permalink":"/tool/docs/api/qs"}}');var s=i(4848),c=i(8453);const l={sidebar_position:7},o="CSS \u7c7b\u540d\u51fd\u6570",t={},a=[{value:"cx",id:"cx",level:2},{value:"\u8bed\u6cd5",id:"\u8bed\u6cd5",level:3},{value:"\u53c2\u6570",id:"\u53c2\u6570",level:3},{value:"\u8fd4\u56de\u503c",id:"\u8fd4\u56de\u503c",level:3},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:3},{value:"\u7279\u6b8a\u60c5\u51b5",id:"\u7279\u6b8a\u60c5\u51b5",level:3}];function d(n){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,c.R)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.header,{children:(0,s.jsx)(e.h1,{id:"css-\u7c7b\u540d\u51fd\u6570",children:"CSS \u7c7b\u540d\u51fd\u6570"})}),"\n",(0,s.jsx)(e.h2,{id:"cx",children:"cx"}),"\n",(0,s.jsx)(e.p,{children:"\u6761\u4ef6\u6027\u5730\u5c06 CSS \u7c7b\u540d\u7ec4\u5408\u5728\u4e00\u8d77\u3002"}),"\n",(0,s.jsx)(e.h3,{id:"\u8bed\u6cd5",children:"\u8bed\u6cd5"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-js",children:"cx(...args)\n"})}),"\n",(0,s.jsx)(e.h3,{id:"\u53c2\u6570",children:"\u53c2\u6570"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.code,{children:"...args"})," (...any): \u8981\u7ec4\u5408\u7684\u7c7b\u540d\u3002\u53ef\u4ee5\u662f\uff1a","\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u5b57\u7b26\u4e32"}),"\n",(0,s.jsx)(e.li,{children:"\u6570\u5b57"}),"\n",(0,s.jsx)(e.li,{children:"\u5bf9\u8c61\uff08\u952e\u4e3a\u7c7b\u540d\uff0c\u503c\u4e3a\u6761\u4ef6\uff09"}),"\n",(0,s.jsx)(e.li,{children:"\u6570\u7ec4\uff08\u5d4c\u5957\u7684\u7c7b\u540d\uff09"}),"\n",(0,s.jsx)(e.li,{children:"\u5047\u503c\uff08\u4f1a\u88ab\u5ffd\u7565\uff09"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(e.h3,{id:"\u8fd4\u56de\u503c",children:"\u8fd4\u56de\u503c"}),"\n",(0,s.jsx)(e.p,{children:"(string): \u8fd4\u56de\u7ec4\u5408\u540e\u7684\u7c7b\u540d\u5b57\u7b26\u4e32"}),"\n",(0,s.jsx)(e.h3,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-js",children:"// \u5b57\u7b26\u4e32\u548c\u6570\u5b57\ncx('foo', 'bar');\n// => 'foo bar'\n\n// \u5bf9\u8c61\uff08\u6761\u4ef6\u6027\uff09\ncx({\n  foo: true,\n  bar: false,\n  baz: true\n});\n// => 'foo baz'\n\n// \u6570\u7ec4\ncx(['foo', 'bar'], 'baz');\n// => 'foo bar baz'\n\n// \u590d\u6742\u7ec4\u5408\ncx(\n  'foo',\n  { bar: true, baz: false },\n  ['qux', 'quux'],\n  ['corge', { grault: true }]\n);\n// => 'foo bar qux quux corge grault'\n"})}),"\n",(0,s.jsx)(e.h3,{id:"\u7279\u6b8a\u60c5\u51b5",children:"\u7279\u6b8a\u60c5\u51b5"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u5ffd\u7565\u5047\u503c"}),"\n",(0,s.jsx)(e.li,{children:"\u7a7a\u5b57\u7b26\u4e32\u3001\u7a7a\u6570\u7ec4\u548c\u7a7a\u5bf9\u8c61\u4f1a\u8fd4\u56de\u7a7a\u5b57\u7b26\u4e32"}),"\n",(0,s.jsx)(e.li,{children:"\u6570\u5b57\u4f1a\u88ab\u8f6c\u6362\u4e3a\u5b57\u7b26\u4e32"}),"\n",(0,s.jsx)(e.li,{children:"\u5d4c\u5957\u6570\u7ec4\u4f1a\u88ab\u5c55\u5e73"}),"\n"]})]})}function u(n={}){const{wrapper:e}={...(0,c.R)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(d,{...n})}):d(n)}},8453:(n,e,i)=>{i.d(e,{R:()=>l,x:()=>o});var r=i(6540);const s={},c=r.createContext(s);function l(n){const e=r.useContext(c);return r.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function o(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:l(n.components),r.createElement(c.Provider,{value:e},n.children)}}}]);