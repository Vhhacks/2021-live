(this["webpackJsonphack-global-events"]=this["webpackJsonphack-global-events"]||[]).push([[0],[,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),s=n(3),i=n.n(s),r=(n(12),n(4)),o=n(5),l=n(7),v=n(6),u=(n(13),n(14),n.p+"static/media/logo.98737b8b.svg"),d=n(0);var h=function(){return Object(d.jsxs)("div",{className:"header-container",children:[Object(d.jsx)("a",{href:"https://hackthenorth.com/",children:Object(d.jsx)("img",{src:u,alt:"HGI logo",className:"logo-image"})}),Object(d.jsx)("h1",{children:"events"})]})},b=(n(16),n.p+"static/media/back-arrow.383b74d2.svg");n(17);function j(e){switch(e){case"workshop":return"workshop";case"activity":return"activity";case"tech_talk":return"tech talk"}}var p=function(e){var t=e.type,n=e.location;return Object(d.jsx)("div",{className:"type-tag "+t+" "+n,children:j(t)})},m=(n(18),n.p+"static/media/defaultpic.ab943bc3.svg");var f=function(e){var t=e.name,n=e.pic,a=m;return null!==n&&(a=n),Object(d.jsxs)("div",{className:"horizontal-container",children:[Object(d.jsx)("img",{src:a,alt:"speaker",className:"speaker-pic"}),Object(d.jsx)("p",{className:"speaker-name",children:t})]})};n(19);var O=function(e){var t=e.relatedEventId,n=e.events,a=e.changeEvent,c=n.find((function(e){return e.id==t}));return Object(d.jsxs)("div",{children:[" ",c&&Object(d.jsx)("a",{className:"related-event",onClick:function(){return a(c)},children:c.name})]})};function g(e){var t=new Date(e),n=0===t.getMinutes()?"00":t.getMinutes();return t.getHours()+":"+n}function x(e){var t=new Date(e);return["January","February","March","April","May","June","July","August","September","October","November","December"][t.getMonth()]+" "+t.getDate()+", "+t.getFullYear()}function k(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"public";return"public"===t?e.public_url:"private"===t?e.private_url:void 0}var _=function(e){var t=e.isOpen,n=void 0!==t&&t,a=e.event,c=e.events,s=e.changeEvent,i=e.close,r=!0===n?"sidebar":"inactive";return Object(d.jsxs)("div",{className:r,children:[Object(d.jsx)("img",{src:b,alt:"",className:"back-arrow-image",onClick:i}),Object(d.jsx)("h1",{className:"sidebar-event-name",children:a.name}),Object(d.jsx)("h2",{className:"sidebar-event-date",children:x(a.start_time)}),Object(d.jsxs)("h2",{className:"sidebar-event-time",children:[g(a.start_time)," - ",g(a.end_time)]}),Object(d.jsx)(p,{type:a.event_type,location:"sidebar-tt"}),a.speakers&&Object(d.jsxs)("div",{children:[Object(d.jsx)("h3",{children:"Speakers"}),a.speakers.map((function(e){return Object(d.jsx)(f,{name:e.name,pic:e.profile_pic})}))]}),Object(d.jsx)("h3",{children:"Description"}),Object(d.jsx)("p",{className:"description-body",children:a.description}),a.related_events&&Object(d.jsxs)("div",{children:[Object(d.jsx)("h3",{children:"Related Events"}),a.related_events.map((function(e){return Object(d.jsx)(O,{relatedEventId:e,events:c,changeEvent:s})}))]}),Object(d.jsx)("a",{target:"_blank",href:k(a),className:"attend-button",children:Object(d.jsx)("div",{children:"attend!"})})]})};n(20);var y=function(e){var t=e.event,n=e.update;return Object(d.jsxs)("div",{className:"card "+t.event_type+"-card",onClick:n,children:[Object(d.jsxs)("h3",{className:"event-name",children:[" ",t.name," "]}),Object(d.jsx)(p,{type:t.event_type,location:"main-page-tt"})]})},N=function(e){Object(l.a)(n,e);var t=Object(v.a)(n);function n(e){var a;return Object(r.a)(this,n),(a=t.call(this,e)).state={events:[],activeEvent:{},sidebarOpen:!1,loggedIn:!1},a}return Object(o.a)(n,[{key:"componentDidMount",value:function(){this.grabEvents()}},{key:"componentDidUpdate",value:function(){this.grabEvents()}},{key:"grabEvents",value:function(){var e=this;fetch("https://api.hackthenorth.com/v3/graphql?query={ events { id name event_type permission start_time end_time description speakers { name profile_pic } public_url private_url related_events } }").then((function(e){return e.json()})).then((function(t){var n=t.data.events.sort((function(e,t){return e.start_time-t.start_time}));!1===e.state.loggedIn&&(n=n.filter((function(e){return"public"===e.permission}))),e.setState({events:n})}))}},{key:"render",value:function(){var e=this;return Object(d.jsxs)("div",{className:this.state.sidebarOpen?"left-shift main-container":"main-container",children:[Object(d.jsx)(h,{}),Object(d.jsx)(_,{isOpen:this.state.sidebarOpen,event:this.state.activeEvent,events:this.state.events,changeEvent:function(t){e.setState({activeEvent:t})},close:function(){e.setState({sidebarOpen:!1})}}),Object(d.jsx)("div",{className:"events-container",children:this.state.events.map((function(t){return Object(d.jsx)(y,{event:t,update:function(){e.setState({activeEvent:t,sidebarOpen:!0})}})}))})]})}}]),n}(c.a.Component),E=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,22)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,s=t.getLCP,i=t.getTTFB;n(e),a(e),c(e),s(e),i(e)}))};i.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(N,{})}),document.getElementById("root")),E()}],[[21,1,2]]]);
//# sourceMappingURL=main.826cc4de.chunk.js.map