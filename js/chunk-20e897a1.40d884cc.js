(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-20e897a1"],{5219:function(e,t,a){"use strict";var o=a("c31d"),n=a("15fd"),r=a("ab5b"),l=(a("d7bc"),a("8ae8")),c=a("1f64"),i=a("c9ef"),d=a("36ab"),s=a("e29a"),p=r.forwardRef((function(e,t){var a=e.classes,c=e.className,i=e.color,p=void 0===i?"secondary":i,m=e.edge,h=void 0!==m&&m,g=e.size,b=void 0===g?"medium":g,u=Object(n.a)(e,["classes","className","color","edge","size"]),f=r.createElement("span",{className:a.thumb});return r.createElement("span",{className:Object(l.a)(a.root,c,{start:a.edgeStart,end:a.edgeEnd}[h],"small"===b&&a["size".concat(Object(d.a)(b))])},r.createElement(s.a,Object(o.a)({type:"checkbox",icon:f,checkedIcon:f,classes:{root:Object(l.a)(a.switchBase,a["color".concat(Object(d.a)(p))]),input:a.input,checked:a.checked,disabled:a.disabled},ref:t},u)),r.createElement("span",{className:a.track}))}));t.a=Object(c.a)((function(e){return{root:{display:"inline-flex",width:58,height:38,overflow:"hidden",padding:12,boxSizing:"border-box",position:"relative",flexShrink:0,zIndex:0,verticalAlign:"middle","@media print":{colorAdjust:"exact"}},edgeStart:{marginLeft:-8},edgeEnd:{marginRight:-8},switchBase:{position:"absolute",top:0,left:0,zIndex:1,color:"light"===e.palette.type?e.palette.grey[50]:e.palette.grey[400],transition:e.transitions.create(["left","transform"],{duration:e.transitions.duration.shortest}),"&$checked":{transform:"translateX(20px)"},"&$disabled":{color:"light"===e.palette.type?e.palette.grey[400]:e.palette.grey[800]},"&$checked + $track":{opacity:.5},"&$disabled + $track":{opacity:"light"===e.palette.type?.12:.1}},colorPrimary:{"&$checked":{color:e.palette.primary.main,"&:hover":{backgroundColor:Object(i.c)(e.palette.primary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"&$disabled":{color:"light"===e.palette.type?e.palette.grey[400]:e.palette.grey[800]},"&$checked + $track":{backgroundColor:e.palette.primary.main},"&$disabled + $track":{backgroundColor:"light"===e.palette.type?e.palette.common.black:e.palette.common.white}},colorSecondary:{"&$checked":{color:e.palette.secondary.main,"&:hover":{backgroundColor:Object(i.c)(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"&$disabled":{color:"light"===e.palette.type?e.palette.grey[400]:e.palette.grey[800]},"&$checked + $track":{backgroundColor:e.palette.secondary.main},"&$disabled + $track":{backgroundColor:"light"===e.palette.type?e.palette.common.black:e.palette.common.white}},sizeSmall:{width:40,height:24,padding:7,"& $thumb":{width:16,height:16},"& $switchBase":{padding:4,"&$checked":{transform:"translateX(16px)"}}},checked:{},disabled:{},input:{left:"-100%",width:"300%"},thumb:{boxShadow:e.shadows[1],backgroundColor:"currentColor",width:20,height:20,borderRadius:"50%"},track:{height:"100%",width:"100%",borderRadius:7,zIndex:-1,transition:e.transitions.create(["opacity","background-color"],{duration:e.transitions.duration.shortest}),backgroundColor:"light"===e.palette.type?e.palette.common.black:e.palette.common.white,opacity:"light"===e.palette.type?.38:.3}}}),{name:"MuiSwitch"})(p)},"6ac5":function(e,t,a){"use strict";a.r(t);var o=a("ab5b"),n=a.n(o),r=a("47f5"),l=a("6413"),c=a("980a"),i=a.n(c),d=a("4dc0"),s=a("5219"),p=a("72c7"),m=Object(r.a)((function(){return Object(l.a)({tablecellIcon:{fontSize:"90%"},popoverContainer:{position:"absolute",backgroundColor:"#fff",top:36,left:"50%",marginLeft:-100,zIndex:1e3,borderRadius:4,boxShadow:"0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12)"},popoverWrap:{padding:10},classify:{marginBottom:"10px"},til:{color:"#222"},popoverItem:{display:"flex",alignItems:"center",width:200,overflow:"hidden",paddingLeft:"20px","& .innermix":{flexShrink:1,flexGrow:1,display:"flex",alignItems:"center","& .iconfont":{height:"20px",lineHeight:"20px",margin:"0 2px",padding:"0 2px"},"& .active":{backgroundColor:"rgba(0, 0, 0, 0.12)"},"& input":{fontSize:14}}},itemLabel:{width:120,whiteSpace:"nowrap"},itemInput:{flexShrink:1,flexGrow:1,textAlign:"center"}})}));function h(e){var t=e.open,a=e.initData,o=e.onSCAXChange,r=m(),l=a.headerHeight,c=a.wrapText,h=a.rowStyle,g=h.fontSize,b=h.fontWeight,u=h.fontStyle,f=h.color;return n.a.createElement(n.a.Fragment,null,n.a.createElement("i",{className:"iconfont icontablecell "+r.tablecellIcon}),t&&n.a.createElement("div",{className:r.popoverContainer},n.a.createElement("div",{className:r.popoverWrap},n.a.createElement("div",{className:r.classify},n.a.createElement("div",{className:r.til},"表头："),n.a.createElement("div",{className:r.popoverItem},n.a.createElement("div",{className:r.itemLabel},"行高："),n.a.createElement("div",{className:r.itemInput},n.a.createElement(d.AXInputNumber,{defaultValue:l,onAXChange:function(e){return o("headerHeight",e)},min:0})))),n.a.createElement("div",{className:r.classify},n.a.createElement("div",{className:r.til},"单元格："),n.a.createElement("div",{className:r.popoverItem},n.a.createElement("div",{className:r.itemLabel},"自动换行："),n.a.createElement("div",{className:r.itemInput},n.a.createElement(s.a,{checked:c,size:"small",onChange:function(e){return o("wrapText",e.target.checked)},color:"primary"}))),n.a.createElement("div",{className:r.popoverItem},n.a.createElement("div",{className:r.itemLabel},"文本样式："),n.a.createElement("div",{className:"innermix"},n.a.createElement(p.a,{title:i.a.get("shortcut.title.fontsize"),arrow:!0,placement:"bottom"},n.a.createElement("div",{style:{flex:1}},n.a.createElement(d.AXInputNumber,{defaultValue:g,min:0,onAXChange:function(e){return o("rowStyle.fontSize",e)}}))),n.a.createElement("i",{className:"iconfont iconfontweight "+("bolder"===b?"active":""),onClick:function(){o("rowStyle.fontWeight","bolder"===b?"normal":"bolder")}}),n.a.createElement("i",{className:"iconfont iconfontstyle "+("italic"===u?"active":""),onClick:function(){o("rowStyle.fontStyle","italic"===u?"normal":"italic")}}),n.a.createElement(d.AXFontColor,{defaultValue:f,onAXChange:function(e){return o("rowStyle.color",e)}})))))))}t.default=Object(o.memo)(h)}}]);