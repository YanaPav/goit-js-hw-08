!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};function r(e){return e&&e.constructor===Symbol?"symbol":typeof e}var i="Expected a function",o=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,f=/^0o[0-7]+$/i,c=parseInt,l="object"==typeof n&&n&&n.Object===Object&&n,s="object"==typeof self&&self&&self.Object===Object&&self,d=l||s||Function("return this")(),m=Object.prototype.toString,v=Math.max,g=Math.min,p=function(){return d.Date.now()};function y(e,t,n){var r,o,a,u,f,c,l=0,s=!1,d=!1,m=!0;if("function"!=typeof e)throw new TypeError(i);function y(t){var n=r,i=o;return r=o=void 0,l=t,u=e.apply(i,n)}function j(e){return l=e,f=setTimeout(w,t),s?y(e):u}function h(e){var n=e-c;return void 0===c||n>=t||n<0||d&&e-l>=a}function w(){var e=p();if(h(e))return O(e);f=setTimeout(w,function(e){var n=t-(e-c);return d?g(n,a-(e-l)):n}(e))}function O(e){return f=void 0,m&&r?y(e):(r=o=void 0,u)}function T(){var e=p(),n=h(e);if(r=arguments,o=this,c=e,n){if(void 0===f)return j(c);if(d)return f=setTimeout(w,t),y(c)}return void 0===f&&(f=setTimeout(w,t)),u}return t=S(t)||0,b(n)&&(s=!!n.leading,a=(d="maxWait"in n)?v(S(n.maxWait)||0,t):a,m="trailing"in n?!!n.trailing:m),T.cancel=function(){void 0!==f&&clearTimeout(f),l=0,r=c=o=f=void 0},T.flush=function(){return void 0===f?u:O(p())},T}function b(e){var t=void 0===e?"undefined":r(e);return!!e&&("object"==t||"function"==t)}function S(e){if("number"==typeof e)return e;if(function(e){return"symbol"==(void 0===e?"undefined":r(e))||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==m.call(e)}(e))return NaN;if(b(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=b(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(o,"");var n=u.test(e);return n||f.test(e)?c(e.slice(2),n?2:8):a.test(e)?NaN:+e}t=function(e,t,n){var r=!0,o=!0;if("function"!=typeof e)throw new TypeError(i);return b(n)&&(r="leading"in n?!!n.leading:r,o="trailing"in n?!!n.trailing:o),y(e,t,{leading:r,maxWait:t,trailing:o})};var j=document.querySelector(".feedback-form"),h=document.querySelector('[name="email"]'),w=document.querySelector('[name="message"]'),O=JSON.parse(localStorage.getItem("feedback-form-state"));h.value=O?O.email:"",w.value=O?O.message:"",j.addEventListener("input",e(t)((function(e){var t=e.target,n=t.name,r=t.value;"email"===n?T.email=r:"message"===n&&(T.message=r);i=T,savedFormData=JSON.stringify(i),localStorage.setItem("feedback-form-state",savedFormData);var i}),500)),j.addEventListener("submit",(function(e){e.preventDefault(),console.log(T),localStorage.clear(),j.reset()}));var T={email:"",message:""}}();
//# sourceMappingURL=03-feedback.dd07a453.js.map
