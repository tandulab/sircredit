import{_ as N,c as k,w as a,n as E,r as u,o as i,a as e,t as r,b as o,d as _,e as h,f as S,g as x,u as A,h as O,i as R,j as D,D as C,s as I,k as T,l as w,m as d}from"../index83433.js";const H={props:{label:String,url:String,value:String,background:String},setup(){}},B={class:"col-12 flex align-items-center justify-content-between pt-0"},L={class:"text-900"},M=e("i",{class:"pi arrow-right-icon"},null,-1),V={key:0,class:"col-12 text-4xl text-900 pb-0"};function U(f,b,c,t,v,g){const m=u("router-link"),n=u("Card");return i(),k(n,{class:"w-3",style:E({background:c.background})},{content:a(()=>[e("div",B,[e("b",L,r(c.label),1),o(m,{to:{name:"foro-pratiche",params:{id:c.url}},class:"text-color-secondary font-semibold"},{default:a(()=>[M]),_:1},8,["to"])]),c.value!="undefined"?(i(),_("div",V,[e("b",null,r(c.value),1)])):h("",!0)]),_:1},8,["style"])}const Y=N(H,[["render",U]]),j={setup(){S(()=>{});const f=x(()=>t.getters[C.CURRENT_DASHBOARD]),b=x(()=>t.getters["auth/currentUser"]),c=x(()=>b.value?`${b.value.first_name} ${b.value.last_name}`:""),t=A(),v=async function(){I(t);try{const n=await t.dispatch(T.FETCH_DASHBOARD);return w(t),n}catch{w(t)}},g=n=>{D.push({name:"dettaglio-pratica",params:{id:n.data.product_request_id}})},m=n=>{D.push({name:"foro-pratiche",params:{assigned_to:n.data.user_id,id:"oggi"}})};return O(async()=>{v()}),{dashboard:f,currentUserName:c,onRowSelect:g,onRowSelectOperator:m,moment:R}},components:{CardDashboard:Y}};const F={class:"dashboard m-4"},G={class:"col-12 flex align-items-center"},P=e("i",{class:"pi penguin-icon mr-3"},null,-1),q={class:"uppercase m-0"},z={class:"bg-white flex align-items-center justify-content-between column-gap-4 p-4 border-round-xl"},Z={class:"today-wrapper"},J={class:"col-12 flex align-items-center"},K=e("b",{class:"text-900 mr-2"},"OGGI",-1),Q=e("i",{class:"pi arrow-right-icon"},null,-1),W={class:"col-12 text-4xl text-900"},X={class:"flex justify-content-between column-gap-4 mt-4 wrapper-table"},$={key:0},ee={style:{height:"calc(58vh - 23rem)"}},te={key:0},oe={key:0},ae={class:"flex flex-column"},se=e("br",null,null,-1),ne={key:0},re={class:"flex align-items-center justify-content-between w-full mb-5"},le=e("h2",{class:"m-0"},"APPUNTAMENTI DI FILIALE",-1),ce=e("b",{class:"text-color-secondary font-semibold"},"CALENDARIO FILIALE",-1),de={style:{height:"calc(100vh - 23rem)"}},ie={class:"flex flex-column"},_e=e("br",null,null,-1),ue={key:0},me={class:"flex justify-content-between column-gap-4 mt-4"},he={style:{height:"27vh"}};function be(f,b,c,t,v,g){const m=u("router-link"),n=u("CardDashboard"),l=u("Column"),p=u("DataTable"),y=u("Card");return i(),_("div",F,[e("div",G,[P,e("h1",q,"BUON LAVORO "+r(t.currentUserName),1)]),e("div",z,[e("div",Z,[e("div",J,[K,o(m,{to:{name:"foro-pratiche",params:{id:"oggi"}},class:"text-color-secondary font-semibold inline-flex"},{default:a(()=>[Q]),_:1})]),e("div",W,[e("b",null,r(t.dashboard.today_counter),1)])]),o(n,{label:"NUOVE",value:t.dashboard.new_product_requests_counter+"",url:"nuove",background:"#E78B1D"},null,8,["value"]),o(n,{label:"IN LAVORAZIONE",value:t.dashboard.in_lavorazione_counter+"",url:"in_lavorazione",background:"#EBEDEF"},null,8,["value"]),o(n,{label:"IN GESTIONE",value:t.dashboard.in_gestione_counter+"",url:"in_gestione",background:"#E1E3E5"},null,8,["value"]),o(n,{label:"TERMINATE",value:t.dashboard.terminati_counter+"",url:"terminate",background:"#D6D9DA"},null,8,["value"])]),e("div",X,[o(y,{class:"w-6"},{content:a(()=>[e("h2",null,[d(" I MIEI RICONTATTI "),t.dashboard.recalls?(i(),_("span",$,"("+r(t.dashboard.recalls.length)+")",1)):h("",!0)]),e("div",ee,[o(p,{value:t.dashboard.recalls,selectionMode:"single",onRowSelect:t.onRowSelect,scrollable:!0,scrollHeight:"flex"},{empty:a(()=>[d(" Nessun ricontatto trovato. ")]),default:a(()=>[o(l,{field:"product_request_number",header:"Pratica"}),o(l,{field:"last_name",header:"Cognome",sortable:!0},{body:a(({data:s})=>[s.contact?(i(),_("span",te,r(s.contact.last_name),1)):h("",!0)]),_:1}),o(l,{field:"first_name",header:"Nome",sortable:!0},{body:a(({data:s})=>[s.contact?(i(),_("span",oe,r(s.contact.first_name),1)):h("",!0)]),_:1}),o(l,{field:"date",header:"Data e ora"},{body:a(({data:s})=>[e("div",ae,[d(r(t.moment(s.date).format("DD/MM/YYYY")),1),se,s.start_at?(i(),_("span",ne,r(t.moment.utc().startOf("day").add(s.start_at,"minutes").format("HH:mm")),1)):h("",!0)])]),_:1})]),_:1},8,["value","onRowSelect"])])]),_:1}),o(y,{class:"w-6"},{content:a(()=>[e("div",re,[le,o(m,{to:"/calendario"},{default:a(()=>[ce]),_:1})]),e("div",de,[o(p,{value:t.dashboard.appointments,responsiveLayout:"scroll",scrollable:!0,scrollHeight:"flex"},{empty:a(()=>[d(" Nessun appuntamento trovato. ")]),default:a(()=>[o(l,{field:"code",header:"Pratica"}),o(l,{field:"last_name",header:"Cognome",sortable:!0},{body:a(({data:s})=>[d(r(s.user.last_name),1)]),_:1}),o(l,{field:"first_name",header:"Nome",sortable:!0},{body:a(({data:s})=>[d(r(s.user.first_name),1)]),_:1}),o(l,{field:"title",header:"Titolo",sortable:!0}),o(l,{field:"date",header:"Data e ora"},{body:a(({data:s})=>[e("div",ie,[d(r(t.moment(s.date).format("DD/MM/YYYY")),1),_e,s.start_at?(i(),_("span",ue,r(t.moment.utc().startOf("day").add(s.start_at,"minutes").format("HH:mm")),1)):h("",!0)])]),_:1})]),_:1},8,["value"])])]),_:1})]),e("div",me,[o(y,{class:"w-6"},{content:a(()=>[e("div",he,[o(p,{value:t.dashboard.in_gestione,selectionMode:"single",scrollable:!0,scrollHeight:"flex",onRowSelect:t.onRowSelectOperator},{empty:a(()=>[d(" Nessun risultato trovato. ")]),default:a(()=>[o(l,{field:"name",header:"Operatore"}),o(l,{field:"counter",header:"Numero pratiche"})]),_:1},8,["value","onRowSelect"])])]),_:1})])])}const ve=N(j,[["render",be]]);export{ve as default};
