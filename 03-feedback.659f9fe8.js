!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};function n(e){if(Array.isArray(e))return e}function r(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}function o(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function a(e,t){if(e){if("string"==typeof e)return i(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?i(e,t):void 0}}function u(e,t){return n(e)||r(e)||a(e,t)||o()}var f;function l(e){return e&&e.constructor===Symbol?"symbol":typeof e}var c="Expected a function",s=/^\s+|\s+$/g,d=/^[-+]0x[0-9a-f]+$/i,v=/^0b[01]+$/i,m=/^0o[0-7]+$/i,y=parseInt,b="object"==typeof t&&t&&t.Object===Object&&t,p="object"==typeof self&&self&&self.Object===Object&&self,g=b||p||Function("return this")(),h=Object.prototype.toString,j=Math.max,S=Math.min,w=function(){return g.Date.now()};function O(e,t,n){var r,o,i,a,u,f,l=0,s=!1,d=!1,v=!0;if("function"!=typeof e)throw new TypeError(c);function m(t){var n=r,i=o;return r=o=void 0,l=t,a=e.apply(i,n)}function y(e){return l=e,u=setTimeout(p,t),s?m(e):a}function b(e){var n=e-f;return void 0===f||n>=t||n<0||d&&e-l>=i}function p(){var e=w();if(b(e))return g(e);u=setTimeout(p,function(e){var n=t-(e-f);return d?S(n,i-(e-l)):n}(e))}function g(e){return u=void 0,v&&r?m(e):(r=o=void 0,a)}function h(){var e=w(),n=b(e);if(r=arguments,o=this,f=e,n){if(void 0===u)return y(f);if(d)return u=setTimeout(p,t),m(f)}return void 0===u&&(u=setTimeout(p,t)),a}return t=A(t)||0,T(n)&&(s=!!n.leading,i=(d="maxWait"in n)?j(A(n.maxWait)||0,t):i,v="trailing"in n?!!n.trailing:v),h.cancel=function(){void 0!==u&&clearTimeout(u),l=0,r=f=o=u=void 0},h.flush=function(){return void 0===u?a:g(w())},h}function T(e){var t=void 0===e?"undefined":l(e);return!!e&&("object"==t||"function"==t)}function A(e){if("number"==typeof e)return e;if(function(e){return"symbol"==(void 0===e?"undefined":l(e))||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==h.call(e)}(e))return NaN;if(T(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=T(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(s,"");var n=v.test(e);return n||m.test(e)?y(e.slice(2),n?2:8):d.test(e)?NaN:+e}f=function(e,t,n){var r=!0,o=!0;if("function"!=typeof e)throw new TypeError(c);return T(n)&&(r="leading"in n?!!n.leading:r,o="trailing"in n?!!n.trailing:o),O(e,t,{leading:r,maxWait:t,trailing:o})};var E=document.querySelector(".feedback-form");E.addEventListener("input",e(f)((function(e){var t=e.target,n=t.name,r=t.value;x[n]=r,localStorage.setItem("feedback-form-state",JSON.stringify(x))}),500)),E.addEventListener("submit",(function(e){e.preventDefault();var t=e.currentTarget.elements.email.value,n=e.currentTarget.elements.message.value;if(!t||!n)return void console.log("All fields must be filled");console.log(x),localStorage.removeItem("feedback-form-state"),E.reset(),x={}}));var I,x={};(I=localStorage.getItem("feedback-form-state"))&&(I=JSON.parse(I),Object.entries(I).forEach((function(e){var t=u(e,2),n=t[0],r=t[1];E.elements[n].value=r,x[n]=r})))}();
//# sourceMappingURL=03-feedback.659f9fe8.js.map
