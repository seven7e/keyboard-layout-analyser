(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],[,,,,,function(e,t,n){e.exports=n(15)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},,,function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(2),c=n.n(o),i=(n(10),n(11),n(4)),l=(n(12),n(3)),u=n.n(l);function s(e){var t="#d9d9d9";return e>5.99?t="#993366":e>4.99?t="#cc0000":e>3.99?t="#ff3300":e>2.99?t="#ffcc00":e>1.99?t="#ccff33":e>1.49?t="#99ff66":e>.99&&(t="#00ff00"),t}function f(e){var t=e.keyModel.width*e.unitWidth,n={width:"".concat(t,"%"),paddingBottom:"".concat(e.unitWidth,"%")};return r.a.createElement("div",{className:"keyboard-button-wrapper",style:n},r.a.createElement("div",{className:"keyboard-button",style:{backgroundColor:s(e.keyModel.effort)}},r.a.createElement("div",{className:"keyboard-button-content"},e.keyModel.label)))}function d(e){u.a.sum(e.row.map((function(e){return e.width})));return r.a.createElement("div",{className:"keyboard-row"},e.row.map((function(e,t){return r.a.createElement(f,{key:t,keyModel:e,unitWidth:6.8})})))}var m=function(e){return r.a.createElement("div",{className:"keyboard-layout"},e.rows.map((function(e,t){return r.a.createElement(d,{key:t,row:e})})))},h={tab:1.5,caps:2,l_shift:2.5,r_shift:2,enter:1.5},p={tab:"Tab",caps:"Caps Lock",l_shift:"Shift",r_shift:"Shift",enter:"Enter"};function y(e){var t=h[e.toLowerCase()];return t||1}function v(e){var t=p[e];return t||e.toUpperCase()}function w(e){return e.split(/\s+/).map((function(e){return{code:e,shift:e,label:v(e),width:y(e),effort:1}}))}function b(e,t,n,a){return t<e.length&&n<e[t].length?e[t][n]:a}var E=[[0,4,2,2,3,4,5,3,2,2,4,0,0,0],[0,1.5,1,1,1,3,3,1,1,1,1.5,0,0],[0,4,4,3,2,5,3,2,3,4,4,0]],k=[[1.5,1,1,1,1,1,1,1,1,1,1,1,1,1],[1.85,1,1,1,1,1,1,1,1,1,1,1,1.65],[2.25,1,1,1,1,1,1,1,1,1,1,2.25]],g={qwerty:["tab q w d f k j u r l ; [ ] |","caps a s e t g y n i o h - enter","l_shift z x c v b p m , . / r_shift"]},x={};Object.keys(g).forEach((function(e,t){var n=g[e].map(w);n.forEach((function(e,t){e.forEach((function(e,n){e.width=b(k,t,n,1),e.effort=b(E,t,n,0)}))})),x[e]=n})),console.log(x);var C=x;var N=function(e){var t=Object(a.useState)(""),n=Object(i.a)(t,2),o=n[0],c=n[1];return r.a.createElement("div",null,r.a.createElement("p",null,"Test"),r.a.createElement("div",{style:{textAlign:"center"}},r.a.createElement("div",{style:{width:"80%",display:"inline-block"}},r.a.createElement(m,{rows:C.qwerty}))),r.a.createElement("div",{style:{marginTop:"20px"}},r.a.createElement("textarea",{defaultValue:"Enter text here...",onChange:function(e){return function(e){c(e.target.value)}(e)},style:{width:"60%",height:"200px"}}),r.a.createElement("button",{type:"button",style:{backgroundColor:"#99ddff",margin:"10px",height:"50px",width:"80px",display:"inline-block"},onClick:function(){return function(e,t){console.log("evaluate",e,t)}(o,C.qwerty)}},"Calculate")))};var _=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(N,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(_,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[5,1,2]]]);
//# sourceMappingURL=main.0202a41a.chunk.js.map