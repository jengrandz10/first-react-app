(this.webpackJsonpreactproj=this.webpackJsonpreactproj||[]).push([[0],[,,,,,,,,,function(e,n,t){e.exports=t(18)},,,,,function(e,n,t){},function(e,n,t){e.exports=t.p+"static/media/logo.5d5d9eef.svg"},function(e,n,t){},function(e,n,t){},function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),s=t(3),o=t.n(s),c=(t(14),t(7)),i=t(1),l=t(4),u=t(5),d=t(8),m=t(6),h=(t(15),t(16),t(17),function(e){return r.a.createElement("div",{className:"Person"},r.a.createElement("p",{onClick:e.click},"I'm a ",e.name," and I am ",e.age," yrs old!"),r.a.createElement("p",null,e.children),r.a.createElement("input",{type:"text",onChange:e.changed,value:e.name}))}),p=function(e){Object(d.a)(t,e);var n=Object(m.a)(t);function t(){var e;Object(l.a)(this,t);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(e=n.call.apply(n,[this].concat(r))).state={persons:[{id:"1",name:"Jen",age:30},{id:"2",name:"Jhazz",age:3},{id:"3",name:"Jamica",age:9}],otherSate:"some other value",showPersons:!1},e.deletePersonsHandler=function(n){var t=Object(i.a)(e.state.persons);t.splice(n,1),e.setState({persons:t})},e.nameChangeHandler=function(n,t){var a=e.state.persons.findIndex((function(e){return e.id===t})),r=Object(c.a)({},e.state.persons[a]);r.name=n.target.value;var s=Object(i.a)(e.state.persons);s[a]=r,e.setState({persons:s})},e.togglePersonsHandler=function(){var n=e.state.showPersons;e.setState({showPersons:!n})},e}return Object(u.a)(t,[{key:"render",value:function(){var e=this,n={},t=null;this.state.showPersons&&(t=r.a.createElement("div",null,this.state.persons.map((function(n,t){return r.a.createElement(h,{click:e.deletePersonsHandler.bind(e,t),name:n.name,age:n.age,key:n.id,changed:function(t){return e.nameChangeHandler(t,n.id)}})}))),n.backgroundColor="red");var a=[];return this.state.persons.length<=2&&a.push("red"),this.state.persons.length<=1&&a.push("bold"),r.a.createElement("div",{className:"App"},r.a.createElement("h1",null,"Hi, I'm a React App"),r.a.createElement("p",{className:a.join(" ")},"This is really working!"),r.a.createElement("button",{className:"red",style:n,onClick:this.togglePersonsHandler},"Show Persons"),t)}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(p,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[9,1,2]]]);
//# sourceMappingURL=main.61a1c68e.chunk.js.map