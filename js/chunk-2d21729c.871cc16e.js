(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-2d21729c"],{c60c:function(e,t,n){"use strict";function r(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(n)return(n=n.call(e)).next.bind(n);if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"==typeof e)return i(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return i(e,t)}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0;return function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}n.r(t);var o=function(e){return Object.prototype.toString.call(e).slice(8,-1)},s=function(){function e(){this.events={},e.controller=null}e.getController=function(){return this.controller||(this.controller=new e),this.controller};var t=e.prototype;return t.addListener=function(e,t){if(!function e(t){return"function"==typeof t||t instanceof RegExp||!(!t||"object"!=typeof t)&&e(t.listener)}(t))throw new TypeError("listener must be a function");if(-1===this.events[e].findIndex((function(e){return e.id===t.id})))return this.events[e].push(t),!0;var n=this.events[e].findIndex((function(e){return e.id===t.id}));return this.events[e].splice(n,1,t),!1},t.addOnceListener=function(e,t){return this.addListener(e,t)},t.removeListener=function(e,t){if(this.events[e]){var n=this.events[e],r=n.findIndex((function(e){return e.id===t.id}));return-1!==r&&(n.splice(r,1),!0)}return!1},t.removeEvent=function(e){if("String"===o(e))return delete this.events[e];if("RegExp"===o(e)){for(var t=!0,n=0,r=Object.keys(this.events);n<r.length;n++){var i=r[n];if(e.test(i))delete this.events[i]||(t=!1);else;}return t}return this.events={},!1},t.emit=function(e,t){if("String"===o(e)){if(this.events[e]){for(var n,i=r(this.events[e]);!(n=i()).done;){var s=n.value;s.once&&this.removeListener(e,s),s.listener.call(this,t)}return!0}}else if("RegExp"===o(e)){for(var u=0,c=Object.keys(this.events);u<c.length;u++){var l=c[u];if(e.test(l))for(var a,f=r(this.events[l]);!(a=f()).done;){var v=a.value;v.once&&this.removeListener(l,v),v.listener.call(this,t)}else;}return!0}return!1},e}();t.default=s}}]);