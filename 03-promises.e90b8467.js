!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},n={},t=e.parcelRequired7c6;null==t&&((t=function(e){if(e in o)return o[e].exports;if(e in n){var t=n[e];delete n[e];var r={id:e,exports:{}};return o[e]=r,t.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,o){n[e]=o},e.parcelRequired7c6=t);var r=t("h6c0i"),i={form:document.querySelector(".form")};function a(e,o){var n=Math.random()>.3;return new Promise((function(t,r){setTimeout((function(){n?t({position:e,delay:o}):r({position:e,delay:o})}),o)}))}i.form.addEventListener("submit",(function(e){e.preventDefault();for(var o=Number(i.form.delay.value),n=Number(i.form.step.value),t=Number(i.form.amount.value),u=1;u<=t;u+=1)a(u,o+n*(u-1)).then((function(e){var o=e.position,n=e.delay;r.Notify.success("✅ Fulfilled promise ".concat(o," in ").concat(n,"ms"))})).catch((function(e){var o=e.position,n=e.delay;r.Notify.failure("❌ Rejected promise ".concat(o," in ").concat(n,"ms"))}))}))}();
//# sourceMappingURL=03-promises.e90b8467.js.map
