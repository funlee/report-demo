(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-17b805d4"],{6855:function(e,t,r){e.exports={grid:"style-module_grid_1Dc3R"}},ec26:function(e,t,r){"use strict";r.r(t);var i=r("f0e4"),a=r.n(i),n=r("ab5b"),o=r.n(n),s=r("6855"),c=r.n(s),l=r("8f12"),g=function(e){var t=e.showGrid,r=e.width,i=e.height,s=e.bgColor,g=e.gridSize,d=e.setCanvasPosition,b=e.bgImgData,u=a()(e,["showGrid","width","height","bgColor","gridSize","setCanvasPosition","bgImgData"]),h=Object(n.useRef)(null),f=Object(n.useCallback)((function(){if(h.current){var e=h.current.getContext("2d"),a=window.devicePixelRatio;if(h.current.width=r*a,h.current.height=i*a,e){var n=r,o=i;if(e.scale(a,a),e.clearRect(0,0,n,o),e.strokeStyle="rgba(100, 100, 100, 0.4)",e.fillStyle="rgba(0,0,0,0)",e.lineWidth=1,e.beginPath(),e.rect(0,0,n,o),e.stroke(),e.fill(),t){var s=.5,c=0;for(e.translate(.5,.5),e.lineWidth=1,e.save();s<=n;)e.restore(),e.strokeStyle=c%4==0?"rgb(215,215,215)":"rgb(235,235,235)",e.beginPath(),e.moveTo(s,0),e.lineTo(s,o),s+=g,c++,e.stroke();for(s=.5,c=0;s<=o;)e.restore(),e.strokeStyle=c%4==0?"rgb(215,215,215)":"rgb(235,235,235)",e.beginPath(),e.moveTo(0,s),e.lineTo(n,s),s+=g,c++,e.stroke()}}}}),[t,g,r,i]),w=Object(n.useCallback)((function(e){if(e){var t=e.getBoundingClientRect();d({x:t.x,y:t.y}),f()}}),[f,d]),v=Object(n.useMemo)((function(){return b&&""!==b.url?{width:r,height:i,backgroundImage:"url("+b.url+")",backgroundSize:"cover"}:{width:r,height:i,backgroundColor:s}}),[r,i,b,s]);return o.a.createElement("div",Object.assign({id:l.a,className:e.className,ref:w,style:Object.assign({},v)},u),o.a.createElement("canvas",{className:c.a.grid,ref:h}),e.children)};g.defaultProps={showGrid:!0,gridSize:10},t.default=Object(n.memo)(g)}}]);