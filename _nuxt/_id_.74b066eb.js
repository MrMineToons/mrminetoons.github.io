import{_ as le}from"./HeaderBar.a38dda14.js";import{h as ne,i as se,j as ie,k as l,l as de,o as w,b as L,e as t,f as a,c as F,w as u,r as s,t as re}from"./entry.1d8b2dcb.js";const ue={key:0},ce={key:1,class:"card"},pe={class:"card mt-6 grid p-fluid formgrid justify-content-center"},me={class:"justify-content-evenly col-9"},ve={class:"field mb-6 justify-content-between formgroup-inline col"},fe={class:"field mb-5 col"},_e={class:"p-float-label"},ye=a("label",{for:"UUID"},"UUID",-1),be={class:"field mb-5 formgroup-inline col justify-content-between"},we={class:"p-float-label w-5 my-auto"},Ve=a("label",{for:"comprador"},"Comprador",-1),he={class:"p-float-label w-5 my-auto"},ge=a("label",{for:"vendedor"},"Vendedor",-1),xe={class:"field mb-5 formgroup-inline col justify-content-between"},Ee={class:"p-float-label w-5 my-auto"},Ue=a("label",{for:"tipoTransacao"},"Tipo da Transa\xE7\xE3o",-1),De={class:"p-float-label w-5 my-auto"},Te=a("label",{for:"produtos"},"Produtos",-1),Pe={class:"field mb-5 formgroup-inline col justify-content-between"},je={class:"p-float-label w-5 my-auto"},Ce=a("label",{for:"valor_da_compra"},"Valor da Compra",-1),ke={class:"p-float-label w-5 my-auto"},Le=a("label",{for:"valor_pago"},"Valor Pago",-1),Ie={class:"field mb-5 formgroup-inline col justify-content-between"},Re={class:"field mb-5 formgroup-inline justify-content-between"},Se={class:"field mb-5 formgroup-inline justify-content-between"},Be=a("div",{class:"confirmation-content"},[a("i",{class:"pi pi-exclamation-triangle mr-3",style:{"font-size":"2rem"}}),a("span",null,"Voc\xEA tem certeza que deseja excluir a parcela?")],-1),$e=ne({__name:"[id]",setup(Ne){const f=se(),$=ie().params.id,I=l(),R=l([]),A="http://mrminetoons.pythonanywhere.com/api/movimento/transacao_entidade/"+$,H="http://mrminetoons.pythonanywhere.com/api/core/entidades",O="http://mrminetoons.pythonanywhere.com/api/core/produtos",q="http://mrminetoons.pythonanywhere.com/api/movimento/metodos_pagamento",V=l(""),h=l(null),g=l(""),x=l(""),E=l(),U=l(0),D=l(0),T=l(""),c=l(!1),_=l([]),S=l(!1),y=l(!1),i=l(),j=l(),B=l(),N=l([]),J=[{nome:"Cliente",id:"C"},{nome:"Empresa",id:"E"}];function K(){S.value=!0}async function Y(){let n=[];const o=await fetch(A),d=await fetch(H),m=await fetch(O),C=await fetch(q);i.value=await o.json(),j.value=await d.json(),B.value=await m.json(),N.value=await C.json(),V.value=i.value.id,h.value=i.value.comprador.id,g.value=i.value.vendedor.id,x.value=i.value.tipo_transacao,U.value=i.value.valor_da_compra,D.value=i.value.valor_pago,T.value=i.value.descricao,c.value=i.value.faturado,_.value=i.value.parcelas,i.value.produto_registrado.forEach(p=>{n.push(p.id)}),E.value=n}de(()=>{Y(),K()});const G=n=>{let{newData:o,index:d}=n;_.value[d]=o};function Q(n){y.value=!0,I.value=n}function W(n){y.value=!1,X(n)}async function X(n){const o=await _.value[n].id,d="http://mrminetoons.pythonanywhere.com/api/movimento/parcela/"+o+"/",m=await fetch(d,{method:"DELETE"});console.log(m.status),m.status===204?(_.value.splice(n,1),f.add({severity:"success",summary:"Sucesso",detail:"Parcela deletada!",life:3e3})):f.add({severity:"error",summary:"Erro",detail:"N\xE3o foi possivel deletar a parcela! Tente recarregar a p\xE1gina.",life:3e3})}async function Z(){const n="http://mrminetoons.pythonanywhere.com/api/movimento/transacao_entidade/"+V.value+"/",o={vendedor:g.value,comprador:h.value,tipo_transacao:x.value,produto_registrado:E.value,descricao:T.value,valor_da_compra:U.value,valor_pago:D.value,faturado:c.value};try{(await fetch(n,{method:"PATCH",headers:{Accept:"application/json","Content-Type":"application/json;charset=utf-8"},body:JSON.stringify(o)})).status===200?f.add({severity:"success",summary:"Sucesso",detail:"Transa\xE7\xE3o salva com sucesso!",life:3e3}):f.add({severity:"error",summary:"Erro",detail:"N\xE3o foi possivel salvar a Transa\xE7\xE3o! Tente recarregar a p\xE1gina.",life:3e3})}catch{f.add({severity:"error",summary:"Erro",detail:"N\xE3o foi possivel salvar a Transa\xE7\xE3o! Talvez o servidor esteja offline.",life:3e3})}}return(n,o)=>{const d=s("Toast"),m=s("ProgressSpinner"),C=le,p=s("Button"),M=s("InputText"),P=s("Dropdown"),ee=s("MultiSelect"),k=s("InputNumber"),oe=s("Textarea"),z=s("ToggleButton"),v=s("Column"),ae=s("DataTable"),te=s("Dialog");return w(),L("div",null,[t(d),S.value==!1?(w(),L("div",ue,[t(m)])):(w(),L("div",ce,[t(C),a("div",pe,[a("div",me,[a("div",ve,[t(p,{class:"w-3 p-button-danger",label:"Delete",icon:"pi pi-trash"}),t(p,{class:"w-3 p-button-success",label:"Save",icon:"pi pi-check",onClick:o[0]||(o[0]=e=>Z())})]),a("div",fe,[a("span",_e,[t(M,{id:"UUID",type:"text",class:"p-input-filled w-full",modelValue:V.value,"onUpdate:modelValue":o[1]||(o[1]=e=>V.value=e),disabled:""},null,8,["modelValue"]),ye])]),a("div",be,[a("span",we,[t(P,{id:"comprador",modelValue:h.value,"onUpdate:modelValue":o[2]||(o[2]=e=>h.value=e),class:"w-full",options:j.value,optionLabel:"nome",optionValue:"id"},null,8,["modelValue","options"]),Ve]),a("span",he,[t(P,{id:"vendedor",modelValue:g.value,"onUpdate:modelValue":o[3]||(o[3]=e=>g.value=e),class:"w-full",options:j.value,optionLabel:"nome",optionValue:"id"},null,8,["modelValue","options"]),ge])]),a("div",xe,[a("span",Ee,[t(P,{id:"tipoTransacao",modelValue:x.value,"onUpdate:modelValue":o[4]||(o[4]=e=>x.value=e),class:"w-full",options:J,optionLabel:"nome",optionValue:"id"},null,8,["modelValue"]),Ue]),a("span",De,[t(ee,{id:"produtos",modelValue:E.value,"onUpdate:modelValue":o[5]||(o[5]=e=>E.value=e),class:"w-full",options:B.value,optionLabel:"nome",optionValue:"id",filter:!0},null,8,["modelValue","options"]),Te])]),a("div",Pe,[a("span",je,[t(k,{id:"valor_da_compra",modelValue:U.value,"onUpdate:modelValue":o[6]||(o[6]=e=>U.value=e),class:"",mode:"currency",currency:"BRL"},null,8,["modelValue"]),Ce]),a("span",ke,[t(k,{id:"valor_pago",modelValue:D.value,"onUpdate:modelValue":o[7]||(o[7]=e=>D.value=e),class:"w-full",mode:"currency",currency:"BRL"},null,8,["modelValue"]),Le])]),a("div",Ie,[t(oe,{modelValue:T.value,"onUpdate:modelValue":o[8]||(o[8]=e=>T.value=e),autoResize:!0,rows:"3"},null,8,["modelValue"])]),a("div",Re,[a("div",null,[c.value?(w(),F(z,{key:0,modelValue:c.value,"onUpdate:modelValue":o[9]||(o[9]=e=>c.value=e),class:"min-w-min bg-blue-500",onLabel:"Faturado",offLabel:"N\xE3o Faturado",onIcon:"pi pi-check",offIcon:"pi pi-times"},null,8,["modelValue"])):(w(),F(z,{key:1,modelValue:c.value,"onUpdate:modelValue":o[10]||(o[10]=e=>c.value=e),class:"min-w-min bg-red-500",onLabel:"Faturado",offLabel:"N\xE3o Faturado",onIcon:"pi pi-check",offIcon:"pi pi-times"},null,8,["modelValue"]))])]),a("div",Se,[t(ae,{value:_.value,editMode:"row",class:"w-full",responsiveLayout:"scroll",dataKey:"id",editingRows:R.value,"onUpdate:editingRows":o[11]||(o[11]=e=>R.value=e),onRowEditSave:G},{default:u(()=>[t(v,{field:"id",header:"UUID"}),t(v,{field:"metodo_pagamento",header:"M\xE9todo de Pagamento"},{editor:u(({data:e,field:r})=>[t(P,{modelValue:e[r],"onUpdate:modelValue":b=>e[r]=b,options:N.value,optionLabel:"nome"},null,8,["modelValue","onUpdate:modelValue","options"])]),body:u(e=>[a("div",null,re(e.data.metodo_pagamento.nome),1)]),_:1}),t(v,{field:"descricao",header:"Descri\xE7\xE3o"},{editor:u(({data:e,field:r})=>[t(M,{modelValue:e[r],"onUpdate:modelValue":b=>e[r]=b,autofocus:""},null,8,["modelValue","onUpdate:modelValue"])]),_:1}),t(v,{field:"valor",header:"Pre\xE7o"},{editor:u(({data:e,field:r})=>[t(k,{modelValue:e[r],"onUpdate:modelValue":b=>e[r]=b,class:"w-full",mode:"currency",currency:"BRL"},null,8,["modelValue","onUpdate:modelValue"])]),_:1}),t(v,{rowEditor:!0,header:"Editar",style:{width:"10%"},bodyStyle:"text-align:center"}),t(v,{style:{width:"10%"},header:"Deletar",bodyStyle:"text-align:center"},{body:u(e=>[t(p,{icon:"pi pi-delete-left",class:"p-button-raised p-button-rounded",style:{"font-size":"2rem"},onClick:r=>Q(e.index)},null,8,["onClick"])]),_:1})]),_:1},8,["value","editingRows"])])])]),t(te,{visible:y.value,"onUpdate:visible":o[14]||(o[14]=e=>y.value=e),style:{width:"450px"},header:"Confirm",modal:!0},{footer:u(()=>[t(p,{label:"No",icon:"pi pi-times",class:"p-button-text",onClick:o[12]||(o[12]=e=>y.value=!1)}),t(p,{label:"Yes",icon:"pi pi-check",class:"p-button-text",onClick:o[13]||(o[13]=e=>W(I.value))})]),default:u(()=>[Be]),_:1},8,["visible"])]))])}}});export{$e as default};
