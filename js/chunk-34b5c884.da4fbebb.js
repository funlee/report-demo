(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-34b5c884","chunk-73686c17"],{1378:function(e,n,t){"use strict";var o=t("4ea4"),r=t("dbce");Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=r(t("ab5b")),i=(0,o(t("f3f8")).default)(a.createElement("path",{d:"M5.88 4.12L13.76 12l-7.88 7.88L8 22l10-10L8 2z"}),"ArrowForwardIos");n.default=i},"794c":function(e,n,t){"use strict";t.r(n);var o=t("ab5b"),r=t("47f5"),a=t("8e30"),i=t("81df"),l=t("1378"),c=t.n(l),u=t("d7bc"),s=t.n(u),f=Object(r.a)((function(e){return{menuItem:{backgroundColor:function(n){return n.isSubMenuOpen?e.palette.action.hover:"transparent"},minWidth:"12rem"},contentContainer:{width:"100%",display:"flex",justifyContent:"space-between",alignItems:"center"},name:{paddingRight:6},hotKey:{color:"#aaa",fontSize:10},expandIcon:{fontSize:12}}})),d=o.forwardRef((function(e,n){var t=e.id,r=e.name,l=e.hotKey,u=e.childrenItems,s=void 0===u?[]:u,p=e.onClick,y=o.useState(null),h=y[0],m=y[1],v=Boolean(Boolean(h)),g=f({isSubMenuOpen:v}),w=(null==s?void 0:s.length)||!1,b=!w;return o.createElement(a.a,{ref:n,disableRipple:!0,className:g.menuItem,onClick:function(e){e.stopPropagation(),b&&p(t)},onMouseEnter:function(e){m(e.currentTarget)},onMouseLeave:function(){m(null)}},o.createElement("div",{className:g.contentContainer},o.createElement("span",{className:g.name},r),o.createElement("span",{className:g.hotKey},l),w&&o.createElement(c.a,{className:g.expandIcon})),w&&o.createElement(o.Fragment,null,o.createElement(i.a,{style:{pointerEvents:"none"},anchorEl:h,open:v,getContentAnchorEl:null,anchorOrigin:{vertical:"top",horizontal:"right"},transformOrigin:{vertical:"top",horizontal:"left"},PaperProps:{elevation:4}},o.createElement("div",{style:{pointerEvents:"auto"}},s.map((function(e){var n=e.id,t=e.name,r=e.children,a=e.hotKey;return o.createElement(d,{key:n,id:n,name:t,hotKey:a,childrenItems:r,onClick:p})}))))))}));d.propTypes={id:s.a.any,name:s.a.any,hotKey:s.a.any,childrenItems:s.a.any,onClick:s.a.any},n.default=d},fc92:function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return M}));var o=t("ab5b"),r=t.n(o),a=t("81df"),i=t("794c"),l="undefined"!=typeof navigator&&navigator.userAgent.toLowerCase().indexOf("firefox")>0;function c(e,n,t){e.addEventListener?e.addEventListener(n,t,!1):e.attachEvent&&e.attachEvent("on".concat(n),(function(){t(window.event)}))}function u(e,n){for(var t=n.slice(0,n.length-1),o=0;o<t.length;o++)t[o]=e[t[o].toLowerCase()];return t}function s(e){"string"!=typeof e&&(e="");for(var n=(e=e.replace(/\s/g,"")).split(","),t=n.lastIndexOf("");t>=0;)n[t-1]+=",",n.splice(t,1),t=n.lastIndexOf("");return n}for(var f={backspace:8,tab:9,clear:12,enter:13,return:13,esc:27,escape:27,space:32,left:37,up:38,right:39,down:40,del:46,delete:46,ins:45,insert:45,home:36,end:35,pageup:33,pagedown:34,capslock:20,num_0:96,num_1:97,num_2:98,num_3:99,num_4:100,num_5:101,num_6:102,num_7:103,num_8:104,num_9:105,num_multiply:106,num_add:107,num_enter:108,num_subtract:109,num_decimal:110,num_divide:111,"⇪":20,",":188,".":190,"/":191,"`":192,"-":l?173:189,"=":l?61:187,";":l?59:186,"'":222,"[":219,"]":221,"\\":220},d={"⇧":16,shift:16,"⌥":18,alt:18,option:18,"⌃":17,ctrl:17,control:17,"⌘":91,cmd:91,command:91},p={16:"shiftKey",18:"altKey",17:"ctrlKey",91:"metaKey",shiftKey:16,ctrlKey:17,altKey:18,metaKey:91},y={16:!1,18:!1,17:!1,91:!1},h={},m=1;m<20;m++)f["f".concat(m)]=111+m;var v=[],g="all",w=[],b=function(e){return f[e.toLowerCase()]||d[e.toLowerCase()]||e.toUpperCase().charCodeAt(0)};function k(e){g=e||"all"}function O(){return g||"all"}var K=function(e){var n=e.key,t=e.scope,o=e.method,r=e.splitKey,a=void 0===r?"+":r;s(n).forEach((function(e){var n=e.split(a),r=n.length,i=n[r-1],l="*"===i?"*":b(i);if(h[l]){t||(t=O());var c=r>1?u(d,n):[];h[l]=h[l].map((function(e){return(!o||e.method===o)&&e.scope===t&&function(e,n){for(var t=e.length>=n.length?e:n,o=e.length>=n.length?n:e,r=!0,a=0;a<t.length;a++)-1===o.indexOf(t[a])&&(r=!1);return r}(e.mods,c)?{}:e}))}}))};function E(e,n,t){var o;if(n.scope===t||"all"===n.scope){for(var r in o=n.mods.length>0,y)Object.prototype.hasOwnProperty.call(y,r)&&(!y[r]&&n.mods.indexOf(+r)>-1||y[r]&&-1===n.mods.indexOf(+r))&&(o=!1);(0!==n.mods.length||y[16]||y[18]||y[17]||y[91])&&!o&&"*"!==n.shortcut||!1===n.method(e,n)&&(e.preventDefault?e.preventDefault():e.returnValue=!1,e.stopPropagation&&e.stopPropagation(),e.cancelBubble&&(e.cancelBubble=!0))}}function C(e){var n=h["*"],t=e.keyCode||e.which||e.charCode;if(x.filter.call(this,e)){if(93!==t&&224!==t||(t=91),-1===v.indexOf(t)&&229!==t&&v.push(t),["ctrlKey","altKey","shiftKey","metaKey"].forEach((function(n){var t=p[n];e[n]&&-1===v.indexOf(t)?v.push(t):!e[n]&&v.indexOf(t)>-1?v.splice(v.indexOf(t),1):"metaKey"===n&&e[n]&&3===v.length&&(e.ctrlKey||e.shiftKey||e.altKey||(v=v.slice(v.indexOf(t))))})),t in y){for(var o in y[t]=!0,d)d[o]===t&&(x[o]=!0);if(!n)return}for(var r in y)Object.prototype.hasOwnProperty.call(y,r)&&(y[r]=e[p[r]]);e.getModifierState&&(!e.altKey||e.ctrlKey)&&e.getModifierState("AltGraph")&&(-1===v.indexOf(17)&&v.push(17),-1===v.indexOf(18)&&v.push(18),y[17]=!0,y[18]=!0);var a=O();if(n)for(var i=0;i<n.length;i++)n[i].scope===a&&("keydown"===e.type&&n[i].keydown||"keyup"===e.type&&n[i].keyup)&&E(e,n[i],a);if(t in h)for(var l=0;l<h[t].length;l++)if(("keydown"===e.type&&h[t][l].keydown||"keyup"===e.type&&h[t][l].keyup)&&h[t][l].key){for(var c=h[t][l],u=c.splitKey,s=c.key.split(u),f=[],m=0;m<s.length;m++)f.push(b(s[m]));f.sort().join("")===v.sort().join("")&&E(e,c,a)}}}function x(e,n,t){v=[];var o=s(e),r=[],a="all",i=document,l=0,f=!1,p=!0,m="+";for(void 0===t&&"function"==typeof n&&(t=n),"[object Object]"===Object.prototype.toString.call(n)&&(n.scope&&(a=n.scope),n.element&&(i=n.element),n.keyup&&(f=n.keyup),void 0!==n.keydown&&(p=n.keydown),"string"==typeof n.splitKey&&(m=n.splitKey)),"string"==typeof n&&(a=n);l<o.length;l++)r=[],(e=o[l].split(m)).length>1&&(r=u(d,e)),(e="*"===(e=e[e.length-1])?"*":b(e))in h||(h[e]=[]),h[e].push({keyup:f,keydown:p,scope:a,mods:r,shortcut:o[l],method:t,key:o[l],splitKey:m});void 0!==i&&!function(e){return w.indexOf(e)>-1}(i)&&window&&(w.push(i),c(i,"keydown",(function(e){C(e)})),c(window,"focus",(function(){v=[]})),c(i,"keyup",(function(e){C(e),function(e){var n=e.keyCode||e.which||e.charCode,t=v.indexOf(n);if(t>=0&&v.splice(t,1),e.key&&"meta"===e.key.toLowerCase()&&v.splice(0,v.length),93!==n&&224!==n||(n=91),n in y)for(var o in y[n]=!1,d)d[o]===n&&(x[o]=!1)}(e)})))}var j={setScope:k,getScope:O,deleteScope:function(e,n){var t,o;for(var r in e||(e=O()),h)if(Object.prototype.hasOwnProperty.call(h,r))for(t=h[r],o=0;o<t.length;)t[o].scope===e?t.splice(o,1):o++;O()===e&&k(n||"all")},getPressedKeyCodes:function(){return v.slice(0)},isPressed:function(e){return"string"==typeof e&&(e=b(e)),-1!==v.indexOf(e)},filter:function(e){var n=e.target||e.srcElement,t=n.tagName,o=!0;return!n.isContentEditable&&("INPUT"!==t&&"TEXTAREA"!==t&&"SELECT"!==t||n.readOnly)||(o=!1),o},unbind:function(e){if(e){if(Array.isArray(e))e.forEach((function(e){e.key&&K(e)}));else if("object"==typeof e)e.key&&K(e);else if("string"==typeof e){for(var n=arguments.length,t=new Array(n>1?n-1:0),o=1;o<n;o++)t[o-1]=arguments[o];var r=t[0],a=t[1];"function"==typeof r&&(a=r,r=""),K({key:e,scope:r,method:a,splitKey:"+"})}}else Object.keys(h).forEach((function(e){return delete h[e]}))}};for(var S in j)Object.prototype.hasOwnProperty.call(j,S)&&(x[S]=j[S]);if("undefined"!=typeof window){var P=window.hotkeys;x.noConflict=function(e){return e&&window.hotkeys===x&&(window.hotkeys=P),x},window.hotkeys=x}var _=x;function A(e,n){var t="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(t)return(t=t.call(e)).next.bind(t);if(Array.isArray(e)||(t=function(e,n){if(!e)return;if("string"==typeof e)return I(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return I(e,n)}(e))||n&&e&&"number"==typeof e.length){t&&(e=t);var o=0;return function(){return o>=e.length?{done:!0}:{done:!1,value:e[o++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function I(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,o=new Array(n);t<n;t++)o[t]=e[t];return o}var L={mouseX:null,mouseY:null};function M(e){var n=e.menuItems,t=e.children,l=e.style,c=r.a.useState(null),u=c[0],s=c[1],f=r.a.useState(L),d=f[0],p=f[1],y=Object(o.useMemo)((function(){var e=[];return function n(t){for(var o,r=A(t);!(o=r()).done;){var a=o.value;a.hotKey&&a.handle&&e.push({hotKey:a.hotKey,handle:a.handle}),a.children&&n(a.children)}}(n),e}),[n]),h=r.a.useRef(void 0);Object(o.useEffect)((function(){for(var e=function(e){var n=y[e];_(n.hotKey.toLowerCase(),(function(e){e.preventDefault(),n.handle(h.current)}))},n=0;n<y.length;n++)e(n);return function(){for(var e=0;e<y.length;e++){var n=y[e];_.unbind(n.hotKey.toLowerCase())}}}),[y]);var m=function(e){s(null),v(e,n).handle(h)},v=function e(n,t,o){void 0===o&&(o=0);var r=n.split("-").slice(0,o+1).join("-"),a=t.find((function(e){return e.id===r}));return a&&a.children?e(n,a.children,o+=1):a};return r.a.createElement("div",{onContextMenu:function(e){e.preventDefault(),e.stopPropagation(),s(e.currentTarget),p({mouseX:e.clientX-2,mouseY:e.clientY-4}),h.current=Object.assign({},e)},style:Object.assign({cursor:"context-menu"},l)},t,0!==n.length&&d.mouseX&&d.mouseY&&r.a.createElement(a.a,{anchorReference:"anchorPosition",anchorEl:u,open:Boolean(u),onClose:function(){s(null),p(L)},getContentAnchorEl:null,anchorPosition:null!==d.mouseY&&null!==d.mouseX?{top:d.mouseY,left:d.mouseX}:void 0,PaperProps:{elevation:4}},n.map((function(e){var n=e.id,t=e.name,o=e.hotKey,a=e.children;return r.a.createElement(i.default,{key:n,id:n,name:t,hotKey:o,childrenItems:a,onClick:m})}))))}}}]);