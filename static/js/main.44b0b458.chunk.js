(this.webpackJsonpreact_pagination=this.webpackJsonpreact_pagination||[]).push([[0],{11:function(e,a,c){"use strict";c.r(a);var t=c(4),n=c.n(t),l=c(1);c(9);function s(e,a){const c=[];for(let t=e;t<=a;t+=1)c.push(t);return c}var i=c(2),r=c.n(i),o=c(0);const j=e=>{let{total:a,perPage:c,currentPage:t,onPageChange:n}=e;const l=Math.ceil(a/c),i=s(1,l),j=e=>{e!==t&&n(e)};return Object(o.jsxs)("ul",{className:"pagination",children:[Object(o.jsx)("li",{className:r()("page-item",{disabled:1===t}),children:Object(o.jsx)("a",{"data-cy":"prevLink",className:"page-link",href:"#prev","aria-disabled":1===t,onClick:()=>j(t-1),children:"\xab"})}),i.map((e=>Object(o.jsx)("li",{className:r()("page-item",{active:e===t}),children:Object(o.jsx)("a",{"data-cy":"pageLink",className:"page-link",href:"#".concat(e),onClick:()=>j(e),children:e})},e))),Object(o.jsx)("li",{className:r()("page-item",{disabled:t===l}),children:Object(o.jsx)("a",{"data-cy":"nextLink",className:"page-link",href:"#next","aria-disabled":t===l,onClick:()=>j(t+1),children:"\xbb"})})]})},d=s(1,42).map((e=>+e)),m=[3,5,10,20],h=()=>{const[e,a]=Object(l.useState)(m[1]),[c,t]=Object(l.useState)(1),n=Object(l.useMemo)((()=>{const a=c*e-e,t=c*e;return d.slice(a,t)}),[c,e]);return Object(o.jsxs)("div",{className:"container",children:[Object(o.jsx)("h1",{children:"Items with Pagination"}),Object(o.jsx)("p",{className:"lead","data-cy":"info",children:"Page ".concat(c," (items ").concat(n[0]," - ").concat(n[n.length-1]," of ").concat(42,")")}),Object(o.jsxs)("div",{className:"form-group row",children:[Object(o.jsx)("div",{className:"col-3 col-sm-2 col-xl-1",children:Object(o.jsx)("select",{"data-cy":"perPageSelector",id:"perPageSelector",className:"form-control",value:e,onChange:e=>{a(+e.target.value),t(1)},children:m.map((e=>Object(o.jsx)("option",{value:e,children:e},e)))})}),Object(o.jsx)("label",{htmlFor:"perPageSelector",className:"col-form-label col",children:"items per page"})]}),Object(o.jsx)(j,{total:42,perPage:e,currentPage:c,onPageChange:e=>t(e)}),Object(o.jsx)("ul",{children:n.map((e=>Object(o.jsx)("li",{"data-cy":"item",children:"Item ".concat(e)},e)))})]})};n.a.render(Object(o.jsx)(h,{}),document.getElementById("root"))},9:function(e,a,c){}},[[11,1,2]]]);
//# sourceMappingURL=main.44b0b458.chunk.js.map