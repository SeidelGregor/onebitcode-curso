(()=>{"use strict";function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(e,n){for(var r=0;r<n.length;r++){var o=n[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,(void 0,i=function(e,n){if("object"!==t(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var o=r.call(e,"string");if("object"!==t(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(o.key),"symbol"===t(i)?i:String(i)),o)}var i}const n=function(){function t(e,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.nome=e,this.distancia=n}var n,r;return n=t,(r=[{key:"getNome",value:function(){return this.nome}},{key:"getDistancia",value:function(){return this.distancia}}])&&e(n.prototype,r),Object.defineProperty(n,"prototype",{writable:!1}),t}(),r={planetas:[]};var o=new n("Mercurio",.39),i=new n("Venus",.72),a=new n("Terra",1),u=new n("Marte",1.52),c=new n("Jupiter",5.2),l=new n("Saturno",9.53),f=new n("Urano",19.1),s=new n("Netuno",30);r.planetas.push(o),r.planetas.push(i),r.planetas.push(a),r.planetas.push(u),r.planetas.push(c),r.planetas.push(l),r.planetas.push(f),r.planetas.push(s);const p=r;function y(t){return y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},y(t)}function m(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,b(r.key),r)}}function b(t){var e=function(t,e){if("object"!==y(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==y(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===y(e)?e:String(e)}var v=new(function(){function t(){var e,n,r;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),e=this,r=149587870,(n=b(n="UA"))in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r}var e,n;return e=t,(n=[{key:"converter",value:function(t){return this.UA*t}}])&&m(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}());p.planetas.forEach((function(t){var e=t.nome,n=t.distancia.toFixed(2),r=v.converter(n).toFixed(2),o=document.querySelector("#sistemaSolar"),i=document.createElement("p");i.textContent="".concat(e," está a ").concat(n,"UA ou ").concat(r,"Km do Sol (1UA = ").concat(v.UA,"Km)"),o.appendChild(i)}))})();