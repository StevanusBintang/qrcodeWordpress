!function(e){var t={};function a(n){if(t[n])return t[n].exports;var r=t[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,a),r.l=!0,r.exports}a.m=e,a.c=t,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)a.d(n,r,function(t){return e[t]}.bind(null,r));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="",a(a.s=15)}({15:function(e,t){ea.hooks.addAction("init","ea",(function(){elementorFrontend.hooks.addAction("frontend/element_ready/eael-login-register.default",(function(e,t){var a=e.find(".eael-login-registration-wrapper"),n=a.data("widget-id"),r=a.data("recaptcha-sitekey"),i=a.data("recaptcha-sitekey-v3"),o=void 0!==a.data("is-ajax")&&"yes"==a.data("is-ajax"),c=e.find("[data-logged-in-location]").data("logged-in-location"),d=e.find("#eael-login-form-wrapper"),l=d.data("recaptcha-theme"),s=d.data("recaptcha-size"),p=e.find("#eael-register-form-wrapper"),f=p.data("recaptcha-theme"),u=p.data("recaptcha-size"),g=a.data("login-recaptcha-version"),h=a.data("register-recaptcha-version"),m=e.find("#eael-lr-reg-toggle"),y=e.find("#eael-lr-login-toggle"),v=d.find("#eael-user-password"),w="undefined"!=typeof grecaptcha&&null!==grecaptcha,b=new URLSearchParams(location.search),k=document.getElementById("login-recaptcha-node-"+n),_=document.getElementById("register-recaptcha-node-"+n);void 0!==c&&""!==c&&location.replace(c),"form"===m.data("action")&&m.on("click",(function(e){e.preventDefault(),b.has("eael-register")||b.append("eael-register",1),window.history.replaceState({},"","".concat(location.pathname,"?").concat(b)),d.hide(),p.fadeIn()})),"form"===y.data("action")&&y.on("click",(function(e){b.has("eael-register")&&b.delete("eael-register"),window.history.replaceState({},"","".concat(location.pathname,"?").concat(b)),e.preventDefault(),p.hide(),d.fadeIn()}));var j=!1;function x(){if("function"!=typeof grecaptcha.render)return!1;k&&"v3"!==h&&grecaptcha.render(k,{sitekey:r,theme:l,size:s}),_&&"v3"!==g&&grecaptcha.render(_,{sitekey:r,theme:f,size:u})}if(t(document).on("click","#wp-hide-pw",(function(e){var a=t(this).find("span");j?(v.attr("type","password"),a.removeClass("dashicons-hidden").addClass("dashicons-visibility"),j=!1):(v.attr("type","text"),a.removeClass("dashicons-visibility").addClass("dashicons-hidden"),j=!0)})),t('form input[type="submit"]',e).on("click",(function(a){if(!o){w&&("v3"===g||"v3"===h)&&grecaptcha.execute(i,{action:"eael_login_register_form"}).then((function(a){0===t('form input[name="g-recaptcha-response"]',e).length?t("form",e).append('<input type="hidden" name="g-recaptcha-response" value="'+a+'">'):t('form input[name="g-recaptcha-response"]',e).val(a)}))}})),w&&isEditMode)x();else{var S=window.performance.getEntriesByType("navigation");S.length>0&&S[0].loadEventEnd>0?w&&x():t(window).on("load",(function(){w&&x()}))}}))}))}});