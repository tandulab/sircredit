import{E as N,u as D,I as k,q as _,f as $,g as C,s as A,aa as E,R as M,l as R,a8 as x,_ as w,o as g,d as h,a as u,b as o,r as i,ab as B,ad as V,K as L,i as z,j,X as F,w as T,U as q,m as P,t as U}from"../index83433.js";const G={setup(){const s=N("dialogRef"),t=D(),S=k(),e=_(),p=_();$(()=>{e.value=s.value.data.current_status,p.value=s.value.data.user_id});const d=C(()=>t.getters[x.CURRENT_USER]),a=_([{name:"Abilitato",value:!0},{name:"Non abilitato ",value:!1}]),n=async function(){let f={user:{enabled:e.value,id:p.value}};A(t);try{const c=await t.dispatch(E.UPDATE_USER,f);return M(S,{message:"Stato aggiornato correttamente.",title:""}),R(t),b(),s.value.close(),c}catch{R(t)}},l=function(){s.value.close(),e.value=s.value.data.current_status},b=async function(){try{return await t.dispatch(E.UPDATE_CURRENT_USER_STATUS,d.value)}catch{R(t)}};return{statuses:a,current_status:e,changeStatus:n,closeDialog:l}}};const I={class:"ml-0 pl-0"},K={class:"field col-7"},O=u("label",null,"Stato",-1),Q=u("br",null,null,-1),H={class:"col-12 flex justify-content-end mt-4"};function X(s,t,S,e,p,d){const a=i("Dropdown"),n=i("Button");return g(),h("div",I,[u("div",K,[O,Q,o(a,{modelValue:e.current_status,"onUpdate:modelValue":t[0]||(t[0]=l=>e.current_status=l),options:e.statuses,optionLabel:"name",optionValue:"value",class:"p-column-filter w-full",placeholder:"Seleziona stato"},null,8,["modelValue","options"])]),u("div",H,[o(n,{label:"Annulla",class:"p-button-outlined mr-3",onClick:e.closeDialog},null,8,["onClick"]),o(n,{label:"Conferma",class:"",onClick:t[1]||(t[1]=l=>e.changeStatus())})])])}const J=w(G,[["render",X]]),W={setup(){$(()=>{d.value=!0,p.value={first:0,rows:e.value.rows,sortField:null,sortOrder:null},B.register("myfilter",(r,v)=>r===v),m()});const s=D(),t=k(),S=V(),e=_(),p=_(),d=_(!0),a=_(),n=_(),l=_([{items:[{label:"Modifica stato"},{label:"Modifica"}]}]),b=C(()=>s.getters[x.CURRENT_USERS]),f=C(()=>s.getters[F.CURRENT_REQUEST_STATUSES]),c=r=>{j.push({name:"dettaglio-team",params:{id:r.data.id}})};function m(){d.value=!0;const r=new Map;setTimeout(()=>{y(r)},Math.random()*1e3+250)}const y=async function(r){try{const v=await s.dispatch(E.FETCH_ALL_USERS,r);return d.value=!1,v}catch(v){R(s),L(t,v)}};return{dt:e,users:b,loading:d,loadLazyData:m,requests_status:f,toggle:(r,v)=>{a.value.toggle(r),n.value=v},menu:a,items:l,onRowSelect:c,openDialog:r=>{S.open(J,{props:{header:"Modifica utente",modal:!0,style:{width:"400px"}},data:{current_status:n.value.enabled,user_id:n.value.id}})},moment:z}}};const Y={key:0},Z=u("span",{class:"circle"},null,-1),ee=u("span",null,"Abilitato",-1),te=[Z,ee],oe={key:1},ae=u("span",{class:"circle red"},null,-1),se=u("span",null,"Non abilitato",-1),ne=[ae,se],le=["onClick"];function ce(s,t,S,e,p,d){const a=i("Column"),n=i("Button"),l=i("Menu"),b=i("DataTable"),f=i("DynamicDialog");return g(),h(q,null,[o(b,{value:e.users,lazy:!0,rows:30,ref:"dt",dataKey:"id",loading:e.loading,selectionMode:"single",onRowSelect:e.onRowSelect},{empty:T(()=>[P(" Nessun utente trovato. ")]),default:T(()=>[o(a,{field:"first_name",header:"Nome"}),o(a,{field:"last_name",header:"Cognome"}),o(a,{field:"email",header:"Email"}),o(a,{field:"role",header:"Ruolo",ref:"role",class:"capitalize"},null,512),o(a,{field:"enabled",header:"Stato",ref:"enabled"},{body:T(({data:c})=>[c.enabled?(g(),h("div",Y,te)):(g(),h("div",oe,ne))]),_:1},512),o(a,{header:"",style:{width:"80px"}},{body:T(({data:c})=>[o(n,{type:"button",onClick:m=>e.toggle(m,c),"aria-haspopup":"true","aria-controls":"overlay_menu",class:"p-button-text p-button-rounded text-300 surface-200",icon:"pi pi-ellipsis-h"},null,8,["onClick"]),o(l,{id:"overlay_menu",ref:"menu",model:e.items,popup:!0,data:c},{item:T(({item:m})=>[m.label=="Modifica stato"?(g(),h("div",{key:0,onClick:t[0]||(t[0]=y=>e.openDialog(y))},U(m.label),1)):(g(),h("div",{key:1,onClick:y=>e.onRowSelect({data:{id:c.id}})},U(m.label),9,le))]),_:2},1032,["model","data"])]),_:1})]),_:1},8,["value","loading","onRowSelect"]),o(f)],64)}const re=w(W,[["render",ce]]),ie={setup(){return{}},components:{TeamTable:re}},ue={class:"request m-4"},de={class:"flex justify-content-between align-items-center"},_e=u("h1",{class:"uppercase"},"Team",-1);function me(s,t,S,e,p,d){const a=i("Button"),n=i("TeamTable"),l=i("Card");return g(),h("div",ue,[o(l,null,{content:T(()=>[u("div",de,[_e,o(a,{label:"Nuovo accesso team",onClick:t[0]||(t[0]=b=>s.$router.push("/dettaglio-team"))})]),o(n)]),_:1})])}const ge=w(ie,[["render",me]]);export{ge as default};