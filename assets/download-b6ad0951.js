import{u as m,a as p,h as C,b as F,E as _,t as g,j as v,o as e,M as b,c as x,d as y,e as M,H as S,f as E,g as H,l as I,m as B,I as k,n as z,i as D,B as V,k as O}from"./index-f7a2ca74.js";import{F as R}from"./file-9e3e80d6.js";import"./firebase-b549415f.js";function q({isOpen:u,onClose:f}){const{i18n:o}=m(),[,h]=p(),[n,i]=C(""),[r,a]=F(async function(s){r.error=void 0;let c;try{c=await R.I.doesExist(s)}catch(w){_.I.notifyUserOfError(o.t("download.error_file_existance"),w);return}if(c)await h({slug:"file",params:{wordCode:s}}),i("");else throw g({title:o.t("download.file_doesnt_exist"),status:"error",duration:void 0,isClosable:!0}),new Error}),l=()=>{f(),i("")},d=v();return e(O,{children:e(b,{isCentered:!0,isOpen:u,onClose:l,initialFocusRef:d,children:[e(x,{}),e(y,{mx:3,children:[e(M,{children:e(S,{fontSize:"xl",children:o.t("download.btn_download_file")})}),e(E,{onClick:l}),e(H,{children:e("form",{onSubmit:async t=>{t.preventDefault(),await a(n)},children:e(I,{id:"wordCode",isInvalid:!!r.error,children:[e(B,{children:o.t("download.word_code")}),e(k,{ref:d,placeholder:o.t("download.unique_code"),size:"lg",fontFamily:"heading",fontWeight:"medium",fontSize:"lg",value:n,onChange:t=>{r.error=void 0,i(t.target.value)},onSubmit:()=>a(n)}),e(z,{children:o.t("download.add_info")})]})})}),e(D,{children:e(V,{colorScheme:"violet",mr:3,isDisabled:n.split(" ").length!==3,onClick:()=>a(n),children:o.t("download.btn_open_file")})})]})]})})}export{q as default};