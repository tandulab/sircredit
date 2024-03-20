import{f as I,ab as x,u as E,I as D,q as m,g as T,a7 as K,l as U,K as S,a1 as k,T as q,i as j,j as L,a9 as M,X as Q,a2 as z,O as $,_ as b,c as B,w as u,r as f,o as h,m as G,b as r,ac as R,d as y,t as N,a as F}from"../index25247.js";const H={setup(){I(()=>{p.value=!0,a.value={first:0,rows:C.value.rows,sortField:null,sortOrder:null,filters:o.value};const e=localStorage.getItem("dt-contacts");if(a.value.page==null&&e){let d=JSON.parse(e);a.value.first=d.first,a.value.page=d.first/a.value.rows}x.register("myfilter",(d,P)=>d===P),v(),O(),A()});const n=E(),l=D(),C=m(),o=m({first_name:{value:"",matchMode:"contains"},last_name:{value:"",matchMode:"contains"},phone:{value:"",matchMode:"contains"},company:{value:"",matchMode:"contains"},job_type:{value:"",matchMode:"contains"},status:{value:"",matchMode:"contains"}}),p=m(!0),a=m(),_=m(0),i=m([{label:"My Filter",value:"myfilter"}]),w=T(()=>n.getters[M.CURRENT_CONTACTS]),g=T(()=>n.getters[Q.CURRENT_REQUEST_STATUSES]),t=T(()=>n.getters[z.CURRENT_COMPANIES]),c=T(()=>n.getters[$.CURRENT_INIT_PRODUCT_REQUEST]),s=e=>{L.push({name:"dettaglio-utente",params:{id:e.data.id}})};function v(){p.value=!0;const e=new Map;e.set("first_name",o.value.first_name.value),e.set("last_name",o.value.last_name.value),e.set("job_type",o.value.job_type.value),e.set("company",o.value.company.value),e.set("phone",o.value.phone.value),e.set("page",a.value.page+1),e.set("per_page",a.value.rows),a.value.sortField&&(a.value.sortOrder==1?e.set("sorted_by",a.value.sortField+"_asc"):e.set("sorted_by",a.value.sortField+"_desc")),setTimeout(()=>{V(e)},Math.random()*1e3+250)}const V=async function(e){try{const d=await n.dispatch(K.FETCH_ALL_CONTACTS,e);return p.value=!1,d}catch(d){U(n),S(l,d)}},O=async function(){try{const e=await n.dispatch(k.FETCH_ALL_COMPANIES,null);return p.value=!1,e}catch(e){U(n),S(l,e)}},A=async function(){try{return await n.dispatch(q.INIT_PRODUCT_REQUEST)}catch(e){S(l,e)}};return{dt:C,requests:w,filters:o,loading:p,totalRecords:_,lazyParams:a,loadLazyData:v,matchModes:i,response_companies:t,requests_status:g,initProductRequest:c,onPage:e=>{a.value=e,v()},onSort:e=>{a.value=e,v()},onFilter:()=>{a.value.page=0,a.value.filters=o.value,v()},onRowSelect:s,moment:j}}};const W={key:0},Y={key:1};function J(n,l,C,o,p,a){const _=f("InputText"),i=f("Column"),w=f("Dropdown"),g=f("DataTable");return h(),B(g,{value:o.requests.contacts,lazy:!0,paginator:!0,rows:30,filters:o.filters,"onUpdate:filters":l[0]||(l[0]=t=>o.filters=t),ref:"dt",dataKey:"id",totalRecords:o.requests.total,loading:o.loading,onPage:l[1]||(l[1]=t=>o.onPage(t)),onSort:l[2]||(l[2]=t=>o.onSort(t)),onFilter:l[3]||(l[3]=t=>o.onFilter()),filterDisplay:"row",selectionMode:"single",onRowSelect:o.onRowSelect,stateStorage:"local",stateKey:"dt-contacts",removableSort:""},{empty:u(()=>[G(" Nessun utente trovato. ")]),default:u(()=>[r(i,{field:"first_name",header:"Nome",filterMatchMode:"startsWith",ref:"first_name",sortable:!0,showFilterMatchModes:!1,showFilterOperator:!1,showFilterMenu:!1},{filter:u(({filterModel:t,filterCallback:c})=>[r(_,{type:"text",modelValue:t.value,"onUpdate:modelValue":s=>t.value=s,onKeydown:R(s=>c(),["enter"]),class:"p-column-filter",placeholder:"Ricerca per nome"},null,8,["modelValue","onUpdate:modelValue","onKeydown"])]),_:1},512),r(i,{field:"last_name",header:"Cognome",filterField:"last_name",ref:"last_name",sortable:!0,showFilterMatchModes:!1,showFilterOperator:!1,showFilterMenu:!1},{filter:u(({filterModel:t,filterCallback:c})=>[r(_,{type:"text",modelValue:t.value,"onUpdate:modelValue":s=>t.value=s,onKeydown:R(s=>c(),["enter"]),class:"p-column-filter",placeholder:"Ricerca per cognome"},null,8,["modelValue","onUpdate:modelValue","onKeydown"])]),_:1},512),r(i,{field:"phone",header:"Numero di telefono",filterMatchMode:"startsWith",ref:"phone",showFilterMatchModes:!1,showFilterOperator:!1,showFilterMenu:!1},{filter:u(({filterModel:t,filterCallback:c})=>[r(_,{type:"text",modelValue:t.value,"onUpdate:modelValue":s=>t.value=s,onKeydown:R(s=>c(),["enter"]),class:"p-column-filter",placeholder:"Ricerca per telefono"},null,8,["modelValue","onUpdate:modelValue","onKeydown"])]),_:1},512),r(i,{field:"company",header:"Nome azienda / CF-P.IVA",sortable:!0,showFilterMatchModes:!1,filterField:"company",ref:"company",showFilterOperator:!1,showFilterMenu:!1},{body:u(({data:t})=>[t.company?(h(),y("span",W,N(t.company.name),1)):(h(),y("span",Y,"-"))]),filter:u(({filterModel:t,filterCallback:c})=>[r(w,{modelValue:t.value,"onUpdate:modelValue":s=>t.value=s,options:o.response_companies.companies,class:"p-column-filter",placeholder:"Filtra per azienda",onChange:s=>c(),optionLabel:"name",optionValue:"id"},null,8,["modelValue","onUpdate:modelValue","options","onChange"])]),_:1},512),r(i,{field:"job_type",ref:"job_type",header:"Tipologia lavoro",sortable:!0,showFilterMatchModes:!1,showFilterOperator:!1,showFilterMenu:!1},{filter:u(({filterModel:t,filterCallback:c})=>[r(w,{modelValue:t.value,"onUpdate:modelValue":s=>t.value=s,options:o.initProductRequest.job_types,class:"p-column-filter",placeholder:"Filtra per tipologia lavoro",onChange:s=>c()},null,8,["modelValue","onUpdate:modelValue","options","onChange"])]),_:1},512),r(i,{field:"sircredit_products_counter",header:"Prodotti SirCredit",sortable:!0})]),_:1},8,["value","filters","totalRecords","loading","onRowSelect"])}const X=b(H,[["render",J]]),Z={setup(){const n=E();return{users:T(()=>n.getters[M.CURRENT_CONTACTS])}},components:{UsersTable:X}},ee={class:"request m-4"},te={class:"flex justify-content-between align-items-center"},oe={class:"uppercase"},ae={key:0},se={key:1};function le(n,l,C,o,p,a){const _=f("UsersTable"),i=f("Card");return h(),y("div",ee,[r(i,null,{content:u(()=>[F("div",te,[F("h1",oe,[o.users.total==1?(h(),y("span",ae," 1 Utente")):(h(),y("span",se,N(o.users.total)+" Utenti",1))])]),r(_)]),_:1})])}const ue=b(Z,[["render",le]]);export{ue as default};