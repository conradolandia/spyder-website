import{m as g,t as m,b as l,a as u,k as c,c as f,s as d,o as _,f as p}from"../chunks/31.BsTA5Y8h.js";import{s as P}from"../chunks/scheduler.DK_yUdRf.js";import{S as b,i as y,u as $,v as w,w as h,n as N,l as S,x as k}from"../chunks/index.BH5W4qoH.js";import{B as j}from"../chunks/Blog.DUiE-I33.js";let r=10;async function B({params:a}){g.setMetadata({title:`${m} | ${l}`,description:u,keywords:c.join(", "),author:f,url:d,image:_});const e=parseInt(a.page,r)||1,{posts:o,totalPages:t}=await p(e,r);return{props:{posts:o,pageNum:e,totalPages:t}}}async function M(){const{_:a,totalPages:e}=await p(1,r);return Array.from({length:e},(t,n)=>({page:`${n+1}`}))}const v=!0,C=Object.freeze(Object.defineProperty({__proto__:null,entries:M,load:B,prerender:v},Symbol.toStringTag,{value:"Module"}));function z(a){let e,o;return e=new j({props:{data:a[0],pageNum:a[1],totalPages:a[2]}}),{c(){$(e.$$.fragment)},l(t){w(e.$$.fragment,t)},m(t,n){h(e,t,n),o=!0},p(t,[n]){const s={};n&1&&(s.data=t[0]),n&2&&(s.pageNum=t[1]),n&4&&(s.totalPages=t[2]),e.$set(s)},i(t){o||(N(e.$$.fragment,t),o=!0)},o(t){S(e.$$.fragment,t),o=!1},d(t){k(e,t)}}}function I(a,e,o){let{data:t}=e,n,s;return a.$$set=i=>{"data"in i&&o(0,t=i.data)},a.$$.update=()=>{a.$$.dirty&1&&o(1,n=t.props.pageNum),a.$$.dirty&1&&o(2,s=t.props.totalPages)},[t,n,s]}class D extends b{constructor(e){super(),y(this,e,I,z,P,{data:0})}}export{D as component,C as universal};
