(this["webpackJsonphack-global-events"]=this["webpackJsonphack-global-events"]||[]).push([[0],[,,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c=n(1),s=n.n(c),a=n(5),i=n.n(a),r=(n(11),n(2)),o=(n(12),n(13),n.p+"static/media/logo.2e41a574.png"),l=n(0);var u=function(){return Object(l.jsxs)("div",{className:"header-container",children:[Object(l.jsx)("a",{href:"https://vhhacks.ca/",children:Object(l.jsx)("img",{src:o,alt:"vhHacks logo",className:"logo-image"})}),Object(l.jsx)("h1",{children:"vhHacks 2021"}),Object(l.jsx)("h3",{className:"subtitle",children:"live schedule"})]})},j=(n(15),n.p+"static/media/back-arrow.383b74d2.svg");function b(e){var t=new Date(1e3*e),n=0===t.getMinutes()?"00":t.getMinutes();return t.getHours()+":"+n}function d(e){var t=new Date(1e3*e);return["January","February","March","April","May","June","July","August","September","October","November","December"][t.getMonth()]+" "+t.getDate()+", "+t.getFullYear()}n(16);var v=function(e){var t=e.type,n=e.size;return Object(l.jsx)("div",{className:"type-tag "+t+" "+n,children:t})};n(17);function h(e){var t=e.event,n=e.size;return Object(l.jsx)("div",{children:Object(l.jsxs)("h2",{className:"event-time et-"+n,children:[b(t.starttime),t.endtime&&" - "+b(t.endtime)]})})}n(18);var m=n.p+"static/media/defaultpic.67bc13d7.png";var f=function(e){var t=e.name,n=e.pic,c=m;return n&&(c=n),Object(l.jsxs)("div",{className:"horizontal-container",children:[Object(l.jsx)("img",{src:c,className:"speaker-pic"}),Object(l.jsx)("p",{className:"speaker-name",children:t})]})};function O(e){var t=e.isOpen,n=e.event,c=e.close,s=t?"sidebar-active":"sidebar-inactive";return Object(l.jsxs)("div",{className:s+" sidebar",children:[Object(l.jsx)("img",{src:j,alt:"back",className:"back-arrow-image",onClick:c}),Object(l.jsx)("h1",{className:"sidebar-event-name",children:n.name}),Object(l.jsx)("h2",{className:"sidebar-event-date",children:d(n.starttime)}),Object(l.jsx)(h,{className:"sidebar-event-time",event:n,size:"large"}),Object(l.jsx)(v,{type:n.eventtype,size:"large-tt"}),n.host&&Object(l.jsxs)("div",{children:[Object(l.jsx)("h3",{className:"sidebar-header",children:"Host"}),Object(l.jsx)(f,{name:n.host,pic:n.hostpic})]}),Object(l.jsx)("h3",{className:"sidebar-header",children:"Description"}),Object(l.jsxs)("p",{className:"description-body",children:[n.description,"Join us in "+n.location+" of the vhHacks Virtual Venue to participate."]})]})}var p=n(6);n(19);function x(e){var t=e.event,n=e.setActiveEvent;return Object(l.jsxs)("div",{className:"card "+t.eventtype+"-card",onClick:function(){return n(t)},children:[Object(l.jsxs)("h3",{className:"event-name",children:[" ",t.name," "]}),Object(l.jsx)(h,{event:t,size:"small"}),Object(l.jsx)(v,{type:t.eventtype,size:"small-tt"})]})}function g(e){var t=e.setActiveEvent,n=Object(c.useState)([]),s=Object(r.a)(n,2),a=s[0],i=s[1];return Object(c.useEffect)((function(){fetch("https://spreadsheets.google.com/feeds/list/1prC0JJpl7fpFOkaEUGu0vDXPVB8A6c4UIJmKNExd0yY/1/public/values?alt=json").then((function(e){return e.json()})).then((function(e){var t,n=[],c=e.feed.entry,s=Object(p.a)(c);try{for(s.s();!(t=s.n()).done;){var a=t.value,i={};for(var r in a)r.startsWith("gsx$")&&(i[r.replace("gsx$","")]=a[r].$t);n.push(i)}}catch(o){s.e(o)}finally{s.f()}return n.sort((function(e,t){return e.starttime-t.starttime}))})).then((function(e){return i(e)}))}),[]),Object(l.jsx)("div",{children:a.map((function(e){return Object(l.jsx)(x,{event:e,setActiveEvent:t})}))})}function N(){var e=Object(c.useState)({}),t=Object(r.a)(e,2),n=t[0],s=t[1],a=Object(c.useState)(!1),i=Object(r.a)(a,2),o=i[0],j=i[1],b=Object(c.useRef)(!1);return Object(c.useEffect)((function(){b.current&&j(!0)}),[n]),Object(c.useEffect)((function(){b.current=!0}),[]),Object(l.jsxs)("div",{className:o?"left-shift main-container":"main-container",children:[Object(l.jsx)(u,{}),Object(l.jsx)(O,{isOpen:o,event:n,close:function(){return j(!1)}}),Object(l.jsx)(g,{setActiveEvent:s})]})}var y=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,21)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),c(e),s(e),a(e),i(e)}))};i.a.render(Object(l.jsx)(s.a.StrictMode,{children:Object(l.jsx)(N,{})}),document.getElementById("root")),y()}],[[20,1,2]]]);
//# sourceMappingURL=main.bfcf0cb1.chunk.js.map