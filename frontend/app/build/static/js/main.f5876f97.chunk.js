(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{77:function(t,e,r){t.exports=r(91)},85:function(t,e,r){},86:function(t,e,r){},91:function(t,e,r){"use strict";r.r(e);var n=r(0),o=r.n(n),a=r(53),i=r.n(a),c=(r(85),r(36)),u=r(37),l=r(62),s=r(54),f=r(63),h=(r(86),r(138)),p=r(133),d=r(135),v=r(55),y=r(12),m=r(126),g=r(136),w=r(131),b=r(137),E=r(139);function x(){x=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,n=Object.defineProperty||function(t,e,r){t[e]=r.value},o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",i=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(C){u=function(t,e,r){return t[e]=r}}function l(t,e,r,o){var a=e&&e.prototype instanceof h?e:h,i=Object.create(a.prototype),c=new O(o||[]);return n(i,"_invoke",{value:E(t,r,c)}),i}function s(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(C){return{type:"throw",arg:C}}}t.wrap=l;var f={};function h(){}function p(){}function d(){}var v={};u(v,a,function(){return this});var y=Object.getPrototypeOf,m=y&&y(y(S([])));m&&m!==e&&r.call(m,a)&&(v=m);var g=d.prototype=h.prototype=Object.create(v);function w(t){["next","throw","return"].forEach(function(e){u(t,e,function(t){return this._invoke(e,t)})})}function b(t,e){var o;n(this,"_invoke",{value:function(n,a){function i(){return new e(function(o,i){!function n(o,a,i,c){var u=s(t[o],t,a);if("throw"!==u.type){var l=u.arg,f=l.value;return f&&"object"==typeof f&&r.call(f,"__await")?e.resolve(f.__await).then(function(t){n("next",t,i,c)},function(t){n("throw",t,i,c)}):e.resolve(f).then(function(t){l.value=t,i(l)},function(t){return n("throw",t,i,c)})}c(u.arg)}(n,a,o,i)})}return o=o?o.then(i,i):i()}})}function E(t,e,r){var n="suspendedStart";return function(o,a){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw a;return _()}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var c=L(i,r);if(c){if(c===f)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var u=s(t,e,r);if("normal"===u.type){if(n=r.done?"completed":"suspendedYield",u.arg===f)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n="completed",r.method="throw",r.arg=u.arg)}}}function L(t,e){var r=t.iterator[e.method];if(void 0===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,L(t,e),"throw"===e.method))return f;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return f}var n=s(r,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,f;var o=n.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,f):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,f)}function k(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function j(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function O(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(k,this),this.reset(!0)}function S(t){if(t){var e=t[a];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:_}}function _(){return{value:void 0,done:!0}}return p.prototype=d,n(g,"constructor",{value:d,configurable:!0}),n(d,"constructor",{value:p,configurable:!0}),p.displayName=u(d,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===p||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,d):(t.__proto__=d,u(t,c,"GeneratorFunction")),t.prototype=Object.create(g),t},t.awrap=function(t){return{__await:t}},w(b.prototype),u(b.prototype,i,function(){return this}),t.AsyncIterator=b,t.async=function(e,r,n,o,a){void 0===a&&(a=Promise);var i=new b(l(e,r,n,o),a);return t.isGeneratorFunction(r)?i:i.next().then(function(t){return t.done?t.value:i.next()})},w(g),u(g,c,"Generator"),u(g,a,function(){return this}),u(g,"toString",function(){return"[object Generator]"}),t.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},t.values=S,O.prototype={constructor:O,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(j),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return i.type="throw",i.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],i=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var c=r.call(a,"catchLoc"),u=r.call(a,"finallyLoc");if(c&&u){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,f):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),f},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),j(r),f}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;j(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:S(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),f}},t}function L(t){var e=Object(n.useState)(!1),r=Object(y.a)(e,2),a=r[0],i=r[1],c=function(){var t=Object(v.a)(x().mark(function t(){return x().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:try{i(!0),fetch("/submit-email").then(function(t){return console.log(t)}).finally(function(){return i(!1)})}catch(e){i(!1),console.error(e)}case 1:case"end":return t.stop()}},t)}));return function(){return t.apply(this,arguments)}}();return o.a.createElement(h.a,{sx:{display:"flex",padding:"2px",alignContent:"center",justifyContent:"center",alignItems:"center",maxWidth:"75%"}},o.a.createElement(m.a,{spacing:2,sx:{alignItems:"center",justifyContent:"center"}},o.a.createElement(g.a,{sx:{textAlign:"center"}},o.a.createElement("h2",null,"Subscribe to our newsletter!")),a?o.a.createElement(E.a,null):o.a.createElement(m.a,{spacing:2},o.a.createElement(g.a,null,o.a.createElement(w.a,{className:"input",id:"first-name",label:"First Name",variant:"outlined"}),o.a.createElement(w.a,{className:"input",id:"last-name",label:"Last Name",variant:"outlined"})),o.a.createElement(g.a,null,o.a.createElement(w.a,{className:"input",id:"email",label:"Email",variant:"outlined",required:!0})),o.a.createElement(g.a,{sx:{textAlign:"center"}},o.a.createElement(b.a,{variant:"contained",sx:{width:"100%"},onClick:function(){return c()}},"Submit")))))}var k=function(){return n.createElement("p",null,"Todays Stocks")},j=function(t){function e(t){var r;return Object(c.a)(this,e),(r=Object(l.a)(this,Object(s.a)(e).call(this,t))).state={selected:"SignUp"},r}return Object(f.a)(e,t),Object(u.a)(e,[{key:"handleClick",value:function(t){this.setState({selected:t})}},{key:"render",value:function(){var t,e=this;switch(this.state.selected){case"SignUp":t=n.createElement(L,null);break;case"TodaysStocks":t=n.createElement(k,null)}return n.createElement(h.a,{sx:{display:"flex",flexDirection:"column",alignItems:"center",gap:"2em"}},n.createElement(p.a,{"aria-label":"breadcrumb"},n.createElement(d.a,{underline:"hover",color:"inherit",onClick:function(){return e.handleClick("SignUp")}},"Signup"),n.createElement(d.a,{underline:"hover",color:"inherit",onClick:function(){return e.handleClick("TodaysStocks")}},"Todays Stocks")),t)}}]),e}(n.Component),O=function(t){t&&t instanceof Function&&r.e(3).then(r.bind(null,141)).then(function(e){var r=e.getCLS,n=e.getFID,o=e.getFCP,a=e.getLCP,i=e.getTTFB;r(t),n(t),o(t),a(t),i(t)})};i.a.createRoot(document.getElementById("root")).render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(j,null))),O()}},[[77,1,2]]]);
//# sourceMappingURL=main.f5876f97.chunk.js.map