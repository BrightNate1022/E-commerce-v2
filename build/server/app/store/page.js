(()=>{var e={};e.id=114,e.ids=[114],e.modules={7849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},5403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},4749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},1017:e=>{"use strict";e.exports=require("path")},7310:e=>{"use strict";e.exports=require("url")},911:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>i.a,__next_app__:()=>m,originalPathname:()=>p,pages:()=>c,routeModule:()=>u,tree:()=>d}),r(9474),r(2029),r(5866);var s=r(3191),a=r(8716),n=r(7922),i=r.n(n),o=r(5231),l={};for(let e in o)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>o[e]);r.d(t,l);let d=["",{children:["store",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,9474)),"/Users/nathanbright/econ-exmpl/src/app/store/page.tsx"]}]},{metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,3881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(r.bind(r,2029)),"/Users/nathanbright/econ-exmpl/src/app/layout.tsx"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,5866,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,3881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],c=["/Users/nathanbright/econ-exmpl/src/app/store/page.tsx"],p="/store/page",m={require:r,loadChunk:()=>Promise.resolve()},u=new s.AppPageRouteModule({definition:{kind:a.x.APP_PAGE,page:"/store/page",pathname:"/store",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},5125:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,2994,23)),Promise.resolve().then(r.t.bind(r,6114,23)),Promise.resolve().then(r.t.bind(r,9727,23)),Promise.resolve().then(r.t.bind(r,9671,23)),Promise.resolve().then(r.t.bind(r,1868,23)),Promise.resolve().then(r.t.bind(r,4759,23))},679:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,9404,23))},3322:(e,t,r)=>{Promise.resolve().then(r.bind(r,5649))},7210:(e,t,r)=>{"use strict";r.d(t,{Z:()=>a});let s={items:[],HandleClick:function(e){s.HandleClick2(e),e.quantity++},HandleClick2:function(e){e.quantity<1&&(s.items.push(e),console.log("hurray"))}},a=s},5649:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>l});var s=r(326);r(7577);var a=r(6226),n=r(7210);class i{constructor(e,t,r,s,a,n,i){this.id=e,this.title=t,this.price=r,this.description=s,this.image=a,this.category=n,this.quantity=0}}let o=[];function l(){return s.jsx(s.Fragment,{children:s.jsx("div",{className:"columns-2",style:{paddingTop:"3%",paddingLeft:"15%",paddingRight:"15%"},children:o.map(e=>(0,s.jsxs)("div",{className:"container text-pretty text-center bg-gray-100/20 border-gray-600 border-4 m-5 pb-12",children:[s.jsx(a.default,{src:e.image,alt:e.title,width:250,height:250,style:{display:"block",marginRight:"auto",marginLeft:"auto",marginTop:"10%"}}),s.jsx("h1",{className:"font-bold text-2xl mt-10 mb-2 pr-10 pl-10",children:e.title}),(0,s.jsxs)("h2",{className:"font-bold text-xl mt-2 mb-2",children:["$",e.price.toFixed(2)]}),(0,s.jsxs)("h1",{className:"font-bold mt-2 mb-2",children:[`${e.title.substr(0,50)} ...`," "]}),s.jsx("button",{className:"font-bold text-2xl bg-slate-500/50 p-3 rounded-lg",onClick:()=>{console.log(e),console.log(n.Z),n.Z.HandleClick(e)},children:"Add to cart"})]},e.id))})})}fetch("https://fakestoreapi.com/products").then(e=>{e.json().then(e=>{o=e.map(e=>new i(e.id,e.title,e.price,e.description,e.image,e.category,e.quantity))}),console.log(o)})},2029:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>i,metadata:()=>n});var s=r(9510);r(5023);var a=r(7371);let n={title:"StoreExample",description:"Example of a store with Next.js"};function i({children:e}){return s.jsx("html",{children:(0,s.jsxs)("body",{children:[s.jsx("section",{children:(0,s.jsxs)("nav",{className:" fixed right-0 text-center  mt-5 ",children:[s.jsx("div",{className:"mt-3 ",children:s.jsx(a.default,{className:" bg-gray-100/20 border-2 border-rounded-lg text-2xl pr-5 pl-5 ",href:"/",children:"Home"})}),s.jsx("div",{className:"mt-3",children:s.jsx(a.default,{className:"bg-gray-100/20 text-2xl border-2 border-rounded-lg pr-6 pl-6",href:"/store",children:"Store"})}),s.jsx("div",{className:"mt-3 mb-3",children:s.jsx(a.default,{className:"bg-gray-100/20 text-2xl border-2 border-rounded-lg pr-7  pl-7",href:"/cart",children:"Cart"})})]})}),e]})})}},9474:(e,t,r)=>{"use strict";r.r(t),r.d(t,{$$typeof:()=>i,__esModule:()=>n,default:()=>o});var s=r(8570);let a=(0,s.createProxy)(String.raw`/Users/nathanbright/econ-exmpl/src/app/store/page.tsx`),{__esModule:n,$$typeof:i}=a;a.default;let o=(0,s.createProxy)(String.raw`/Users/nathanbright/econ-exmpl/src/app/store/page.tsx#default`)},3881:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>a});var s=r(6621);let a=e=>[{type:"image/x-icon",sizes:"16x16",url:(0,s.fillMetadataSegment)(".",e.params,"favicon.ico")+""}]},5023:()=>{}};var t=require("../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),s=t.X(0,[948,707,621,226],()=>r(911));module.exports=s})();