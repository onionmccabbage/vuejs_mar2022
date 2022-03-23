(function(e){function t(t){for(var o,i,s=t[0],u=t[1],c=t[2],l=0,h=[];l<s.length;l++)i=s[l],r[i]&&h.push(r[i][0]),r[i]=0;for(o in u)Object.prototype.hasOwnProperty.call(u,o)&&(e[o]=u[o]);p&&p(t);while(h.length)h.shift()();return a.push.apply(a,c||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],o=!0,i=1;i<n.length;i++){var u=n[i];0!==r[u]&&(o=!1)}o&&(a.splice(t--,1),e=s(s.s=n[0]))}return e}var o={},r={app:0},a=[];function i(e){return s.p+"js/"+({about:"about"}[e]||e)+"."+{about:"f679a119"}[e]+".js"}function s(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var t=[],n=r[e];if(0!==n)if(n)t.push(n[2]);else{var o=new Promise(function(t,o){n=r[e]=[t,o]});t.push(n[2]=o);var a,u=document.createElement("script");u.charset="utf-8",u.timeout=120,s.nc&&u.setAttribute("nonce",s.nc),u.src=i(e),a=function(t){u.onerror=u.onload=null,clearTimeout(c);var n=r[e];if(0!==n){if(n){var o=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src,i=new Error("Loading chunk "+e+" failed.\n("+o+": "+a+")");i.type=o,i.request=a,n[1](i)}r[e]=void 0}};var c=setTimeout(function(){a({type:"timeout",target:u})},12e4);u.onerror=u.onload=a,document.head.appendChild(u)}return Promise.all(t)},s.m=e,s.c=o,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)s.d(n,o,function(t){return e[t]}.bind(null,o));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/",s.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],c=u.push.bind(u);u.push=t,u=u.slice();for(var l=0;l<u.length;l++)t(u[l]);var p=c;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var o=n("64a9"),r=n.n(o);r.a},"0ac0":function(e,t,n){"use strict";var o=n("acd8"),r=n.n(o);r.a},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("097d");var o=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("div",{attrs:{id:"nav"}},[n("router-link",{attrs:{to:"/"}},[e._v("Home")]),e._v(" |\n    "),n("router-link",{attrs:{to:"/about"}},[e._v("About")])],1),n("router-view")],1)},a=[],i=(n("034f"),n("2877")),s={},u=Object(i["a"])(s,r,a,!1,null,null,null);u.options.__file="App.vue";var c=u.exports,l=n("8c4f"),p=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[n("Swapi",{attrs:{msg:"Welcome to Your Vue.js App"}})],1)},h=[],f=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"hello"},[n("div",[n("h2",[e._v(e._s(e.title))]),n("form",{on:{submit:function(t){t.preventDefault(),e.handleFormSubmit(e.chosen)}}},[n("select",{directives:[{name:"model",rawName:"v-model",value:e.chosen.category,expression:"chosen.category"}],on:{change:function(t){var n=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){var t="_value"in e?e._value:e.value;return t});e.$set(e.chosen,"category",t.target.multiple?n:n[0])}}},[n("option",{attrs:{disabled:"",value:"0"}},[e._v("Category")]),e._l(e.categories,function(t,o){return n("option",{key:o,domProps:{value:t.value}},[e._v("\n            "+e._s(t.text)+"\n        ")])})],2),n("br"),n("input",{directives:[{name:"model",rawName:"v-model",value:e.chosen.catNum,expression:"chosen.catNum"}],attrs:{placeholder:"which number",type:"number",min:"0",max:"5"},domProps:{value:e.chosen.catNum},on:{input:function(t){t.target.composing||e.$set(e.chosen,"catNum",t.target.value)}}}),n("button",{attrs:{disabled:0===e.chosen.catNum||""===e.chosen.category}},[e._v("Go")])]),n("ul",e._l(e.results,function(t,o){return n("li",{key:o},[n("a",{attrs:{href:"#"},on:{click:function(n){n.preventDefault(),e.showDetails(t)}}},[e._v(e._s(t.name))])])}),0),n("aside",{directives:[{name:"show",rawName:"v-show",value:e.detailsVisible,expression:"detailsVisible"}]},[n("p",[e._v("Name: "+e._s(e.which.name))]),n("ul",[e.which.eye_color?n("li",[e._v("Eyes: "+e._s(e.which.eye_color))]):e._e(),e.which.population?n("li",[e._v("Population: "+e._s(e.which.population))]):e._e(),e.which.manufacturer?n("li",[e._v("Manufacturer: "+e._s(e.which.manufacturer))]):e._e(),e.which.average_height?n("li",[e._v("Av. Height: "+e._s(e.which.average_height))]):e._e(),e.which.designation?n("li",[e._v("Designation: "+e._s(e.which.designation))]):e._e()])]),n("stats")],1)])},v=[],m=n("cebc"),d=n("bc3a"),_=n.n(d),b=n("a7fe"),g=n.n(b),w=n("2f62"),y=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h3",[e._v("Monitor")]),n("p",[e._v("There are "+e._s(e.countResults)+" results ")])])},O=[],S={name:"Stats",data:function(){return{msg:""}},methods:Object(m["a"])({},Object(w["d"])(["REMOVE_ALL"]),Object(w["b"])(["removeAll"]),{removeAllLinks:function(){var e=this;this.removeAll().then(function(){e.msg="All link removed"})}}),computed:Object(m["a"])({},Object(w["c"])(["countResults"]))},j=S,k=Object(i["a"])(j,y,O,!1,null,"191c0ce7",null);k.options.__file="Stats.vue";var A=k.exports,E={name:"HelloWorld",data:function(){return{which:{},result:{},detailsVisible:!1,chosen:{catNum:1,category:"people"},categories:[{text:"People",value:"people"},{text:"Planets",value:"planets"},{text:"Vehicles",value:"vehicles"},{text:"Species",value:"species"},{text:"Starships",value:"starships"}]}},components:{Stats:A},computed:Object(m["a"])({},Object(w["e"])(["title","links","results"])),methods:Object(m["a"])({showDetails:function(e){console.log("toggling details"),this.which=e,this.detailsVisible=!this.detailsVisible}},Object(w["d"])(["ADD_LINK"],["ADD_RESULT"]),Object(w["b"])(["handleFormSubmit"],["makeSwapiRequest"],["removeLink"],["showResultdetails"]),{removeThisLink:function(e){this.removeLink(e)}})},x=E,L=(n("0ac0"),Object(i["a"])(x,f,v,!1,null,"e26ea5ee",null));L.options.__file="Swapi.vue";var D=L.exports,R={name:"home",components:{Swapi:D}},N=R,T=Object(i["a"])(N,p,h,!1,null,null,null);T.options.__file="Home.vue";var P=T.exports;o["a"].use(l["a"]);var V=new l["a"]({mode:"history",base:"/",routes:[{path:"/",name:"home",component:P},{path:"/about",name:"about",component:function(){return n.e("about").then(n.bind(null,"f820"))}}]}),M=n("795b"),$=n.n(M);o["a"].use(w["a"]);var I=new w["a"].Store({state:{title:"Swapi - the Star Wars API",links:[],results:[]},getters:{countResults:function(e){return e.results.length}},mutations:{ADD_LINK:function(e,t){e.links.push(t)},REMOVE_LINK:function(e,t){e.links.splice(t,1)},ADD_TO_RESULTS:function(e,t){e.results.push(t)},REMOVE_ALL:function(e){e.links=[]}},actions:{showResultdetails:function(){console.log("show results details action called")},pushResultToStore:function(e,t){e.commit("ADD_RESULT",t)},handleFormSubmit:function(e,t){_.a.get("https://swapi.co/api/".concat(t.category,"/").concat(t.catNum)).then(function(t){console.log(t.data),e.commit("ADD_TO_RESULTS",t.data)})},removeLink:function(e,t){e.commit("REMOVE_LINK",t)},removeAll:function(e){var t=e.commit;return new $.a(function(e,n){setTimeout(function(){t("REMOVE_ALL"),e()},1500)})}}});o["a"].use(g.a,_.a),o["a"].config.productionTip=!1,new o["a"]({router:V,store:I,render:function(e){return e(c)}}).$mount("#app")},"64a9":function(e,t,n){},acd8:function(e,t,n){}});
//# sourceMappingURL=app.748004f2.js.map