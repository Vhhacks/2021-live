(this["webpackJsonphack-global-events"]=this["webpackJsonphack-global-events"]||[]).push([[0],[,,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(1),s=n.n(a),c=n(3),i=n.n(c),r=(n(13),n(7)),o=n(4),l=n(5),u=n(8),v=n(6),h=(n(14),n(15),n.p+"static/media/logo.2e41a574.png"),d=n(0);var b=function(){return Object(d.jsxs)("div",{className:"header-container",children:[Object(d.jsx)("a",{href:"https://vhhacks.ca/",children:Object(d.jsx)("img",{src:h,alt:"vhHacks logo",className:"logo-image"})}),Object(d.jsx)("h1",{children:"vhHacks 2021"}),Object(d.jsx)("h3",{className:"subtitle",children:"live schedule"})]})},j=(n(17),n.p+"static/media/back-arrow.383b74d2.svg");function p(e){var t=new Date(e),n=0===t.getMinutes()?"00":t.getMinutes();return t.getHours()+":"+n}function m(e){var t=new Date(e);return["January","February","March","April","May","June","July","August","September","October","November","December"][t.getMonth()]+" "+t.getDate()+", "+t.getFullYear()}n(18);var f=function(e){var t=e.type,n=e.size;return Object(d.jsx)("div",{className:"type-tag "+t+" "+n,children:t})};n(19),n.p;function O(e){var t=e.isOpen,n=void 0!==t&&t,a=e.event,s=(e.events,e.changeEvent,e.close),c=!0===n?"sidebar":"inactive",i=1e3*a.starttime,r=1e3*a.endtime;return Object(d.jsxs)("div",{className:c,children:[Object(d.jsx)("img",{src:j,alt:"",className:"back-arrow-image",onClick:s}),Object(d.jsx)("h1",{className:"sidebar-event-name",children:a.name}),Object(d.jsx)("h2",{className:"sidebar-event-date",children:m(i)}),Object(d.jsxs)("h2",{className:"sidebar-event-time",children:[p(i),0!=r&&" - "+p(r)]}),Object(d.jsx)(f,{type:a.eventtype,size:"large-tt"}),Object(d.jsx)("h3",{className:"sidebar-header",children:"Description"}),Object(d.jsxs)("p",{className:"description-body",children:[a.description,a.description&&Object(d.jsx)("br",{}),"Join us in "+a.location+" of the vhHacks Virtual Venue to participate."]})]})}n(20);function g(e){var t=e.event,n=e.update;return Object(d.jsxs)("div",{className:"card "+t.eventtype+"-card",onClick:n,children:[Object(d.jsxs)("h3",{className:"event-name",children:[" ",t.name," "]}),Object(d.jsx)(f,{type:t.eventtype,size:"small-tt"})]})}var x=function(e){Object(u.a)(n,e);var t=Object(v.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).state={events:[],activeEvent:{},sidebarOpen:!1,loggedIn:!1},a}return Object(l.a)(n,[{key:"componentDidMount",value:function(){this.grabEvents()}},{key:"componentDidUpdate",value:function(){this.grabEvents()}},{key:"grabEvents",value:function(){var e=this;fetch("https://spreadsheets.google.com/feeds/list/1prC0JJpl7fpFOkaEUGu0vDXPVB8A6c4UIJmKNExd0yY/1/public/values?alt=json").then((function(e){return e.json()})).then((function(t){var n,a=[],s=t.feed.entry,c=Object(r.a)(s);try{for(c.s();!(n=c.n()).done;){var i=n.value,o={};for(var l in i)l.startsWith("gsx$")&&(o[l.replace("gsx$","")]=i[l].$t);a.push(o)}}catch(v){c.e(v)}finally{c.f()}var u=a.sort((function(e,t){return e.starttime-t.starttime}));e.setState({events:u})}))}},{key:"render",value:function(){var e=this;return Object(d.jsxs)("div",{className:this.state.sidebarOpen?"left-shift main-container":"main-container",children:[Object(d.jsx)(b,{}),Object(d.jsx)(O,{isOpen:this.state.sidebarOpen,event:this.state.activeEvent,events:this.state.events,changeEvent:function(t){e.setState({activeEvent:t})},close:function(){e.setState({sidebarOpen:!1})}}),Object(d.jsx)("div",{className:"events-container",children:this.state.events.map((function(t){return Object(d.jsx)(g,{event:t,update:function(){e.setState({activeEvent:t,sidebarOpen:!0})}})}))})]})}}]),n}(s.a.Component),y=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,22)).then((function(t){var n=t.getCLS,a=t.getFID,s=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),a(e),s(e),c(e),i(e)}))};i.a.render(Object(d.jsx)(s.a.StrictMode,{children:Object(d.jsx)(x,{})}),document.getElementById("root")),y()}],[[21,1,2]]]);
//# sourceMappingURL=main.a70b0069.chunk.js.map