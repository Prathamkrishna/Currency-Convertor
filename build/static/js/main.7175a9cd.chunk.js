(this.webpackJsonpcurrencyconv=this.webpackJsonpcurrencyconv||[]).push([[0],{10:function(r,e,n){},16:function(r,e,n){"use strict";n.r(e);var t=n(3),a=n(1),c=n.n(a),u=n(4),i=n.n(u),b=(n(10),[{eur:{conversion:"USDEUR",finalcur:"EUR",name:"Euro",rate:.82},gdb:{conversion:"USDGDB",finalcur:"GDB",name:"British Pound",rate:.71},cad:{conversion:"USDCAD",finalcur:"CAD",name:"Canadian Dollar",rate:1.21},pln:{conversion:"USDPLN",finalcur:"PLN",name:"Polish Zloty",rate:3.78},inr:{conversion:"USDINR",finalcur:"INR",name:"Indian Rupee",rate:73.61}}]),j=n(0);function o(r){return Object(j.jsxs)("div",{children:["The converted amount to other currencies is:",function(e,n,t){if(e.eur.finalcur===n){var a=e.gdb.rate/e.eur.rate*r.amount,c=e.cad.rate/e.eur.rate*r.amount,u=e.pln.rate/e.eur.rate*r.amount,i=e.inr.rate/e.eur.rate*r.amount;return Object(j.jsxs)("div",{children:[Object(j.jsx)("br",{}),e.gdb.finalcur,": ",a,Object(j.jsx)("br",{}),e.cad.finalcur,": ",c,Object(j.jsx)("br",{}),e.pln.finalcur,": ",u,Object(j.jsx)("br",{}),e.inr.finalcur,": ",i]})}if(e.gdb.finalcur===n){var b=e.eur.rate/e.gdb.rate*r.amount,o=e.cad.rate/e.gdb.rate*r.amount,s=e.pln.rate/e.gdb.rate*r.amount,l=e.inr.rate/e.gdb.rate*r.amount;return Object(j.jsxs)("div",{children:[Object(j.jsx)("br",{}),e.eur.finalcur,": ",b,Object(j.jsx)("br",{}),e.cad.finalcur,": ",o,Object(j.jsx)("br",{}),e.pln.finalcur,": ",s,Object(j.jsx)("br",{}),e.inr.finalcur,": ",l]})}if(e.cad.finalcur===n){var d=e.eur.rate/e.cad.rate*r.amount,m=e.gdb.rate/e.cad.rate*r.amount,O=e.pln.rate/e.cad.rate*r.amount,x=e.inr.rate/e.cad.rate*r.amount;return Object(j.jsxs)("div",{children:[Object(j.jsx)("br",{}),e.eur.finalcur,": ",d,Object(j.jsx)("br",{}),e.gdb.finalcur,": ",m,Object(j.jsx)("br",{}),e.pln.finalcur,": ",O,Object(j.jsx)("br",{}),e.inr.finalcur,": ",x]})}if(e.inr.finalcur===n){var f=e.eur.rate/e.inr.rate*r.amount,v=e.gdb.rate/e.inr.rate*r.amount,h=e.cad.rate/e.inr.rate*r.amount,p=e.pln.rate/e.inr.rate*r.amount;return Object(j.jsxs)("div",{children:[Object(j.jsx)("br",{}),e.eur.finalcur,": ",f,Object(j.jsx)("br",{}),e.gdb.finalcur,": ",v,Object(j.jsx)("br",{}),e.cad.finalcur,": ",h,Object(j.jsx)("br",{}),e.pln.finalcur,": ",p]})}}(r.data,r.currency,r.amount)]})}function s(r){return"USD"!==r.currency?Object(j.jsx)(j.Fragment,{children:b.map((function(e,n){return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)(o,{data:e,currency:r.currency,amount:r.amount})})}))}):Object(j.jsxs)(j.Fragment,{children:["The converted amount to other currencies is:",b.map((function(e,n){return Object(j.jsx)(j.Fragment,{children:l(e,r.amount)})}))]})}function l(r,e){var n=r.eur.rate*e,t=r.gdb.rate*e,a=r.cad.rate*e,c=r.pln.rate*e,u=r.inr.rate*e;return Object(j.jsxs)("div",{children:[r.eur.finalcur,": ",n,Object(j.jsx)("br",{}),r.gdb.finalcur,": ",t,Object(j.jsx)("br",{}),r.cad.finalcur,": ",a,Object(j.jsx)("br",{}),r.pln.finalcur,": ",c,Object(j.jsx)("br",{}),r.inr.finalcur,": ",u]})}var d=n(5);function m(){var r=c.a.useMemo((function(){return[{primary:!0,type:"linear",position:"bottom"},{type:"linear",position:"left"}]}),[]);return Object(j.jsx)("div",{style:{width:"500px",height:"300px"},children:Object(j.jsx)(d.Chart,{style:{color:"blue"},axes:r,data:[{Currency:{USD:"USD",rate:{2020:50,2021:60},EUR:"EUR"}}]})})}var O=[{abbr:"USD",name:"US Dollar"},{abbr:"GDB",name:"British Pounds"},{abbr:"INR",name:"Indian Rupee"},{abbr:"EUR",name:"Euro"},{abbr:"CAD",name:"Canadian Dollar"}];function x(){var r=Object(a.useState)("USD"),e=Object(t.a)(r,2),n=e[0],c=e[1],u=Object(a.useState)({eventCount:0,Amount:"0"}),i=Object(t.a)(u,2),b=i[0],o=i[1];return Object(j.jsxs)("div",{children:["Enter currency: ",Object(j.jsx)("input",{type:"number",onChange:function(r){o({Amount:r.target.value})}}),Object(j.jsx)("br",{}),Object(j.jsx)("div",{className:"optionss",children:Object(j.jsx)("select",{children:O.map((function(r){return Object(j.jsx)("option",{value:r.name,onClick:function(){return e=r.abbr,void c(e);var e},children:"".concat(r.name," \u2014 ").concat(r.abbr)},r.abbr)}))})}),Object(j.jsx)("br",{}),Object(j.jsxs)("div",{children:["The amount entered is ",b.Amount," ",n,"."]}),Object(j.jsx)("br",{}),Object(j.jsx)("div",{children:Object(j.jsx)(s,{currency:n,amount:b.Amount})}),Object(j.jsx)("br",{}),Object(j.jsx)("div",{children:Object(j.jsx)(m,{})})]})}i.a.render(Object(j.jsx)(x,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.7175a9cd.chunk.js.map