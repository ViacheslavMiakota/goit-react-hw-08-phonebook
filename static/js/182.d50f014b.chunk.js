"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[182],{2182:function(n,e,r){r.r(e),r.d(e,{default:function(){return J}});var t,a,i,o,s,d,c,l,u,p,x=r(2791),m=r(9434),f=r(168),h=r(6088),b=h.Z.div(t||(t=(0,f.Z)(["\n  display: flex;\n  flex-direction: column;\n  padding: 40px;\n  gap: 20px;\n  align-items: center;\n"]))),g=h.Z.h1(a||(a=(0,f.Z)(["\n  color: #331616a3;\n"]))),j=h.Z.h2(i||(i=(0,f.Z)(["\n  font-size: 1.8em;\n  margin-block-end: 0.57em;\n  margin-block-start: 0.57em;\n"]))),Z=h.Z.p(o||(o=(0,f.Z)(["\n  padding: 12px;\n  color: green;\n  font-size: 24px;\n  display: flex;\n  width: 300px;\n  border: solid 2px;\n  border-color: green;\n  border-radius: 8px;\n  gap: 12px;\n"]))),v=r(8402),w=r(184),y=function(n){return(0,w.jsx)(v.fe,{visible:Boolean(n),height:"480",width:"480",ariaLabel:"dna-loading",wrapperStyle:{},wrapperClass:"dna-wrapper"})},k=r(6052),C=function(n){return n.contacts},L=function(n){return n.contacts.isLoading},F=function(n){return n.contacts.error},z=r(5264),A=h.Z.form(s||(s=(0,f.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 12px;\n  min-width: 350px;\n  border: solid 2px;\n  border-radius: 8px;\n  padding: 8px;\n"]))),E=h.Z.label(d||(d=(0,f.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n"]))),I=h.Z.input(c||(c=(0,f.Z)(["\n  min-width: 320px;\n  padding: 8px;\n"]))),N=h.Z.button(l||(l=(0,f.Z)(["\n  padding: 8px;\n  background-color: #00000085;\n  color: #fff;\n  border-color: #00000085;\n  border-radius: 8px;\n"]))),_=function(){var n=(0,m.I0)(),e=(0,m.v9)(C);return(0,w.jsxs)(A,{onSubmit:function(r){r.preventDefault();var t=r.target,a=t.name.value,i=t.number.value;if(e.items.find((function(n){return n.name.toLowerCase()===a.toLowerCase()})))return z.Notify.warning("".concat(a," is already in contacts"));n((0,k.uK)({name:a,number:i})),t.reset()},children:[(0,w.jsxs)(E,{htmlFor:"",children:["Name",(0,w.jsx)(I,{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]}),(0,w.jsxs)(E,{htmlFor:"",children:["Number",(0,w.jsx)(I,{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})]}),(0,w.jsx)(N,{type:"submit",children:"Add contact"})]})},q=h.Z.li(u||(u=(0,f.Z)(["\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  width: 350px;\n  background-color: #bdbdbdd1;\n  padding: 4px 8px;\n  border-radius: 4px;\n"]))),B=function(n){var e=n.id,r=n.name,t=n.number,a=(0,m.I0)();return(0,w.jsxs)(q,{children:[(0,w.jsxs)("p",{children:[r,":"]}),(0,w.jsx)("p",{children:t}),(0,w.jsx)(N,{onClick:function(){return a((0,k.GK)(e))},children:"DELETE"})]})},D=h.Z.ul(p||(p=(0,f.Z)(["\n  margin: 0;\n  padding: 0;\n"]))),K=function(n){return n.filters.status},P=function(){var n=(0,m.v9)(C),e=function(n,e){var r=n.toLowerCase().trim();return e.items.filter((function(n){return n.name.toLowerCase().includes(r)}))}((0,m.v9)(K),n);return e.map((function(n){var e=n.id,r=n.name,t=n.number;return(0,w.jsx)(D,{children:(0,w.jsx)(B,{name:r,id:e,number:t})},e)}))},S=r(9585),G=function(){var n=(0,m.I0)();return(0,w.jsxs)(E,{htmlFor:"",children:["Find contacts by name",(0,w.jsx)(I,{type:"text",name:"filter",onChange:function(e){return n((0,S.y)(e.target.value))}})]})};function J(){var n=(0,m.I0)(),e=(0,m.v9)(C),r=(0,m.v9)(L),t=(0,m.v9)(F);return(0,x.useEffect)((function(){n((0,k.yF)())}),[n]),(0,w.jsxs)(b,{children:[(0,w.jsx)(g,{children:"Phonebook"}),(0,w.jsx)(_,{}),(0,w.jsx)(j,{children:"Contacts"}),r&&!t&&(0,w.jsx)(y,{isLoading:r}),e.items.length>0?(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(G,{}),(0,w.jsx)(P,{})]}):(0,w.jsx)(Z,{children:"Your phone book is empty, your first contact has been added"})]})}}}]);
//# sourceMappingURL=182.d50f014b.chunk.js.map