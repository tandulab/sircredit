import{f as D,ab as x,u as q,I as M,ad as V,q as _,$ as F,g as $,W as w,l as k,K as b,i as A,j as K,R as N,X as B,_ as C,d as R,b as t,w as m,U as L,r as n,o as U,m as I,ac as E,a as h,t as Q}from"../index83433.js";const O={setup(){D(()=>{d.value=!0,x.register("myfilter",(e,u)=>e===u),T()});const i=q(),a=M();V();const v=_(),s=F(),d=_(!0),f=_(),r=_(),c=_([{items:[{label:"Elimina"}]}]),p=_({name:{value:"",matchMode:"contains"},main_request_status_name:{value:"",matchMode:"contains"}}),S=$(()=>i.getters[B.CURRENT_REQUEST_STATUSES]),T=async function(){try{const e=await i.dispatch(w.FETCH_ALL_PRODUCTS_REQUEST_STATUS_CHILDREN);return d.value=!1,e}catch(e){k(i),b(a,e)}},g=(e,u)=>{f.value.toggle(e),r.value=u},y=e=>{K.push({name:"dettaglio-stato-pratica",params:{id:e}})},o=e=>{s.require({header:"Elimina stato",target:e.currentTarget,message:'Sei sicuro di voler eliminare lo stato "'+r.value.name+'" ?',icon:"pi pi-info-circle",acceptClass:"p-button-primary",accept:()=>{l(r.value.id)}})},l=async function(e){try{const u=await i.dispatch(w.DELETE_REQUEST_STATUS,e);return d.value=!1,N(a,{message:"Stato eliminato correttamente.",title:""}),T(),u}catch(u){b(a,u)}};return{dt:v,request_statuses:S,loading:d,toggle:g,menu:f,items:c,filters:p,openDetail:y,confirmDelete:o,moment:A}}};const j={class:"flex justify-content-end mr-4"};function G(i,a,v,s,d,f){const r=n("InputText"),c=n("Column"),p=n("Button"),S=n("Menu"),T=n("DataTable"),g=n("DynamicDialog"),y=n("ConfirmDialog");return U(),R(L,null,[t(T,{value:s.request_statuses,loading:s.loading,rowGroupMode:"rowspan",responsiveLayout:"scroll",sortMode:"single",removableSort:"",filters:s.filters,"onUpdate:filters":a[1]||(a[1]=o=>s.filters=o),filterDisplay:"row",metaKeySelection:!1,dataKey:"id",globalFilterFields:["name","main_request_status_name"]},{empty:m(()=>[I(" Nessuno stato trovato. ")]),default:m(()=>[t(c,{field:"name",header:"Stato",sortable:!0,showFilterMatchModes:!1,showFilterOperator:!1,showFilterMenu:!1,style:{width:"60rem"}},{filter:m(({filterModel:o,filterCallback:l})=>[t(r,{type:"text",modelValue:o.value,"onUpdate:modelValue":e=>o.value=e,class:"p-column-filter",placeholder:"Ricerca per stato",onKeydown:E(e=>l(),["enter"])},null,8,["modelValue","onUpdate:modelValue","onKeydown"])]),_:1}),t(c,{field:"main_request_status_name",header:"Macro stato",sortable:!0,showFilterMatchModes:!1,showFilterOperator:!1,showFilterMenu:!1,style:{width:"50rem"}},{filter:m(({filterModel:o,filterCallback:l})=>[t(r,{type:"text",modelValue:o.value,"onUpdate:modelValue":e=>o.value=e,class:"p-column-filter",placeholder:"Ricerca per macro stato",onKeydown:E(e=>l(),["enter"])},null,8,["modelValue","onUpdate:modelValue","onKeydown"])]),_:1}),t(c,{header:""},{body:m(({data:o})=>[h("div",j,[t(p,{type:"button",onClick:l=>s.toggle(l,o),"aria-haspopup":"true","aria-controls":"overlay_menu",class:"p-button-text p-button-rounded text-300 surface-200",icon:"pi pi-ellipsis-h"},null,8,["onClick"]),t(S,{id:"overlay_menu",ref:"menu",model:s.items,popup:!0,data:o},{item:m(({item:l})=>[h("div",{onClick:a[0]||(a[0]=e=>s.confirmDelete(e))},Q(l.label),1)]),_:2},1032,["model","data"])])]),_:1})]),_:1},8,["value","loading","filters"]),t(g),t(y)],64)}const H=C(O,[["render",G]]),P={setup(){return{}},components:{RequestStateTable:H}},W={class:"request m-4"},X={class:"flex justify-content-between align-items-center"},z=h("h1",{class:"uppercase"},"Stati pratica",-1);function J(i,a,v,s,d,f){const r=n("Button"),c=n("RequestStateTable"),p=n("Card");return U(),R("div",W,[t(p,null,{content:m(()=>[h("div",X,[z,t(r,{label:"Nuovo stato pratica",onClick:a[0]||(a[0]=S=>i.$router.push("/dettaglio-stato-pratica"))})]),t(c)]),_:1})])}const Z=C(P,[["render",J]]);export{Z as default};
