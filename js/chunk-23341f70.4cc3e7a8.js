(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-23341f70"],{"4afd":function(e,t,a){"use strict";a.r(t);var i=a("ab5b"),n=a.n(i),l=a("72c7"),s=a("538fa"),c=a.n(s);t.default=function(e){var t=e.title,a=e.data,s=e.placement,o=void 0===s?"bottom":s,u=e.initValue,d=void 0===u?"":u,r=e.onSelectChange,m=Object(i.useState)(""),p=m[0],f=m[1],y=function(e){return function(){f(e),r(e)}};return Object(i.useEffect)((function(){f(d)}),[d]),n.a.createElement("div",{className:c.a.displayList},n.a.createElement("div",{className:c.a.displayListTitle},t),n.a.createElement("div",{className:c.a.displayListContent},n.a.createElement("ul",null,a.map((function(e){var t=e.name,a=e.value;return n.a.createElement(l.a,{arrow:!0,key:a,title:t,placement:o},n.a.createElement("li",{className:p===a?c.a.active:"",onClick:y(a)},t))})))))}},"538fa":function(e,t,a){e.exports={displayList:"style-module_displayList_3ln6A",displayListTitle:"style-module_displayListTitle_27uC3",displayListContent:"style-module_displayListContent__F-rm",active:"style-module_active_2z2T4"}}}]);