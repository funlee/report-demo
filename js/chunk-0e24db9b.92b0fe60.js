(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-0e24db9b"],{"2bd3":function(e,t,a){"use strict";var n=a("4ea4"),c=a("dbce");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=c(a("ab5b")),r=(0,n(a("f3f8")).default)(l.createElement("path",{d:"M17 20.41L18.41 19 15 15.59 13.59 17 17 20.41zM7.5 8H11v5.59L5.59 19 7 20.41l6-6V8h3.5L12 3.5 7.5 8z"}),"CallMerge");t.default=r},5849:function(e,t,a){"use strict";var n=a("4ea4"),c=a("dbce");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=c(a("ab5b")),r=(0,n(a("f3f8")).default)(l.createElement("path",{d:"M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z"}),"Settings");t.default=r},8769:function(e,t,a){"use strict";var n=a("4ea4"),c=a("dbce");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=c(a("ab5b")),r=(0,n(a("f3f8")).default)(l.createElement("path",{d:"M20 18c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2H0v2h24v-2h-4zM4 6h16v10H4V6z"}),"Laptop");t.default=r},b177:function(e,t,a){"use strict";var n=a("4ea4"),c=a("dbce");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=c(a("ab5b")),r=(0,n(a("f3f8")).default)(l.createElement("path",{d:"M2 20h20v-4H2v4zm2-3h2v2H4v-2zM2 4v4h20V4H2zm4 3H4V5h2v2zm-4 7h20v-4H2v4zm2-3h2v2H4v-2z"}),"Storage");t.default=r},f423:function(e,t,a){"use strict";a.r(t);var n=a("ab5b"),c=a.n(n),l=a("8776"),r=a("34a4"),i=a("47f5"),o=a("b177"),d=a.n(o),u=a("5849"),s=a.n(u),f=a("8769"),v=a.n(f),b=a("2bd3"),p=a.n(b),h=a("72c7"),g=a("980a"),m=a.n(g),y=a("687f"),z=[{id:"ScreenSet",label:m.a.get("setting.report"),icon:s.a,receptor:"screen"},{id:"PageSet",label:m.a.get("setting.page"),icon:v.a,receptor:"page"},{id:"DataSet",label:m.a.get("setting.data"),icon:d.a,receptor:"layer",excludes:[].concat(y.e,y.d,y.f)},{id:"DrillDownSet",label:m.a.get("setting.drillDown"),icon:p.a,receptor:"layer",includes:[].concat(y.b)}],M=Object(i.a)({root:{width:50,height:"100%",color:"#fff"},btn:{cursor:"pointer",height:50,width:"100&",display:"flex",alignItems:"center",justifyContent:"center",borderBottom:"1px solid rgba(0, 0, 0, 0.12)"},active:{backgroundColor:"#c5cae9"},disable:{cursor:"not-allowed"}});function w(e){var t=e.selectedLayer,a=e.selectedLayerType,n=e.settingPanelKind,i=Object(r.b)().enqueueSnackbar,o=M(),d=function(e,c,l,r){var i=r.length>0?r.includes(a):l.every((function(e){return e!==a}));return"layer"!==c||t&&!i?e===n?o.btn+" + "+o.active:o.btn:o.btn+" + "+o.disable};return c.a.createElement("div",{className:o.root},z.map((function(e){var r=e.id,o=e.label,u=e.receptor,s=e.icon,f=e.includes,v=void 0===f?[]:f,b=e.excludes,p=void 0===b?[]:b;return c.a.createElement(h.a,{title:o,placement:"left",key:r},c.a.createElement("div",{className:d(r,u,v,p),onClick:function(){return function(e,c,r,o){var d=o.length>0?o.includes(a):r.every((function(e){return e!==a}));"layer"!==c||t&&!d?l.actions.editor.setSettingPanelKind({panelKind:e===n?null:e}):i(m.a.get("setting.no.layer.selected"),{variant:"error",autoHideDuration:1500,anchorOrigin:{horizontal:"center",vertical:"top"},preventDuplicate:!0})}(r,u,v,p)}},c.a.createElement(s,null)))})))}t.default=Object(n.memo)(w)}}]);