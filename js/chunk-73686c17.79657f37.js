(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-73686c17"],{1378:function(e,n,t){"use strict";var a=t("4ea4"),o=t("dbce");Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=o(t("ab5b")),l=(0,a(t("f3f8")).default)(r.createElement("path",{d:"M5.88 4.12L13.76 12l-7.88 7.88L8 22l10-10L8 2z"}),"ArrowForwardIos");n.default=l},"794c":function(e,n,t){"use strict";t.r(n);var a=t("ab5b"),o=t("47f5"),r=t("8e30"),l=t("81df"),i=t("1378"),c=t.n(i),s=t("d7bc"),u=t.n(s),d=Object(o.a)((function(e){return{menuItem:{backgroundColor:function(n){return n.isSubMenuOpen?e.palette.action.hover:"transparent"},minWidth:"12rem"},contentContainer:{width:"100%",display:"flex",justifyContent:"space-between",alignItems:"center"},name:{paddingRight:6},hotKey:{color:"#aaa",fontSize:10},expandIcon:{fontSize:12}}})),m=a.forwardRef((function(e,n){var t=e.id,o=e.name,i=e.hotKey,s=e.childrenItems,u=void 0===s?[]:s,p=e.onClick,f=a.useState(null),h=f[0],v=f[1],y=Boolean(Boolean(h)),b=d({isSubMenuOpen:y}),E=(null==u?void 0:u.length)||!1,g=!E;return a.createElement(r.a,{ref:n,disableRipple:!0,className:b.menuItem,onClick:function(e){e.stopPropagation(),g&&p(t)},onMouseEnter:function(e){v(e.currentTarget)},onMouseLeave:function(){v(null)}},a.createElement("div",{className:b.contentContainer},a.createElement("span",{className:b.name},o),a.createElement("span",{className:b.hotKey},i),E&&a.createElement(c.a,{className:b.expandIcon})),E&&a.createElement(a.Fragment,null,a.createElement(l.a,{style:{pointerEvents:"none"},anchorEl:h,open:y,getContentAnchorEl:null,anchorOrigin:{vertical:"top",horizontal:"right"},transformOrigin:{vertical:"top",horizontal:"left"},PaperProps:{elevation:4}},a.createElement("div",{style:{pointerEvents:"auto"}},u.map((function(e){var n=e.id,t=e.name,o=e.children,r=e.hotKey;return a.createElement(m,{key:n,id:n,name:t,hotKey:r,childrenItems:o,onClick:p})}))))))}));m.propTypes={id:u.a.any,name:u.a.any,hotKey:u.a.any,childrenItems:u.a.any,onClick:u.a.any},n.default=m}}]);