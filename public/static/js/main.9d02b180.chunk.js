(this["webpackJsonpnode-project"]=this["webpackJsonpnode-project"]||[]).push([[0],{33:function(e,t,n){e.exports=n(71)},38:function(e,t,n){},68:function(e,t){},71:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(26),i=n.n(o),s=(n(38),n(39),n(27)),l=n(28),c=n(31),u=n(29),m=n(32),p=n(30),f=n.n(p)()(),h=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(c.a)(this,Object(u.a)(t).call(this,e))).onSubmit=function(e){e.preventDefault();var t=""===n.state.lines?10:n.state.lines;f.emit("getLines",t)},n.onChangeOfLines=function(e){n.setState({lines:e.target.value})},f.on("change",(function(e){return n.setState({data:e.output})})),n.state={data:[],lines:""},n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"renderList",value:function(){return this.state.data.map((function(e,t){return r.a.createElement("li",{key:t,className:"list-group-item"},e)}))}},{key:"render",value:function(){return r.a.createElement("div",{className:"container",style:{marginTop:50}},r.a.createElement("form",{className:"form-inline",onSubmit:this.onSubmit},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"No of Lines:"),r.a.createElement("input",{type:"number",className:"form-control",value:this.state.lines,onChange:this.onChangeOfLines})),r.a.createElement("div",{className:"form-group"},"\xa0",r.a.createElement("input",{type:"submit",className:"btn btn-primary",value:"Get"}))),r.a.createElement("br",null),r.a.createElement("ul",{className:"list-group col-sm-4"},this.renderList()))}}]),t}(a.Component);var d=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(h,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(d,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[33,1,2]]]);
//# sourceMappingURL=main.9d02b180.chunk.js.map