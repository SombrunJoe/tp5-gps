(this.webpackJsonpprojetJordan=this.webpackJsonpprojetJordan||[]).push([[28],{106:function(n,i,t){"use strict";t.r(i),t.d(i,"ion_loading",(function(){return v}));var e=t(17),o=t(2),a=t.n(o),r=t(4),s=t(5),d=t(8),c=t(14),l=t(15),p=(t(16),t(6)),u=t(45),g=(t(31),t(27)),h=t(134),m=function(n){var i=Object(p.a)(),t=Object(p.a)(),e=Object(p.a)();return t.addElement(n.querySelector("ion-backdrop")).fromTo("opacity",.01,"var(--backdrop-opacity)").beforeStyles({"pointer-events":"none"}).afterClearStyles(["pointer-events"]),e.addElement(n.querySelector(".loading-wrapper")).keyframes([{offset:0,opacity:.01,transform:"scale(1.1)"},{offset:1,opacity:1,transform:"scale(1)"}]),i.addElement(n).easing("ease-in-out").duration(200).addAnimation([t,e])},f=function(n){var i=Object(p.a)(),t=Object(p.a)(),e=Object(p.a)();return t.addElement(n.querySelector("ion-backdrop")).fromTo("opacity","var(--backdrop-opacity)",0),e.addElement(n.querySelector(".loading-wrapper")).keyframes([{offset:0,opacity:.99,transform:"scale(1)"},{offset:1,opacity:0,transform:"scale(0.9)"}]),i.addElement(n).easing("ease-in-out").duration(200).addAnimation([t,e])},b=function(n){var i=Object(p.a)(),t=Object(p.a)(),e=Object(p.a)();return t.addElement(n.querySelector("ion-backdrop")).fromTo("opacity",.01,"var(--backdrop-opacity)").beforeStyles({"pointer-events":"none"}).afterClearStyles(["pointer-events"]),e.addElement(n.querySelector(".loading-wrapper")).keyframes([{offset:0,opacity:.01,transform:"scale(1.1)"},{offset:1,opacity:1,transform:"scale(1)"}]),i.addElement(n).easing("ease-in-out").duration(200).addAnimation([t,e])},y=function(n){var i=Object(p.a)(),t=Object(p.a)(),e=Object(p.a)();return t.addElement(n.querySelector("ion-backdrop")).fromTo("opacity","var(--backdrop-opacity)",0),e.addElement(n.querySelector(".loading-wrapper")).keyframes([{offset:0,opacity:.99,transform:"scale(1)"},{offset:1,opacity:0,transform:"scale(0.9)"}]),i.addElement(n).easing("ease-in-out").duration(200).addAnimation([t,e])},v=function(){function n(i){var t=this;Object(s.a)(this,n),Object(c.o)(this,i),this.didPresent=Object(c.g)(this,"ionLoadingDidPresent",7),this.willPresent=Object(c.g)(this,"ionLoadingWillPresent",7),this.willDismiss=Object(c.g)(this,"ionLoadingWillDismiss",7),this.didDismiss=Object(c.g)(this,"ionLoadingDidDismiss",7),this.presented=!1,this.keyboardClose=!0,this.duration=0,this.backdropDismiss=!1,this.showBackdrop=!0,this.translucent=!1,this.animated=!0,this.onBackdropTap=function(){t.dismiss(void 0,g.a)}}return Object(d.a)(n,[{key:"connectedCallback",value:function(){Object(g.f)(this.el)}},{key:"componentWillLoad",value:function(){if(void 0===this.spinner){var n=Object(l.b)(this);this.spinner=l.c.get("loadingSpinner",l.c.get("spinner","ios"===n?"lines":"crescent"))}}},{key:"present",value:function(){var n=Object(r.a)(a.a.mark((function n(){var i=this;return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(g.e)(this,"loadingEnter",m,b,void 0);case 2:this.duration>0&&(this.durationTimeout=setTimeout((function(){return i.dismiss()}),this.duration+10));case 3:case"end":return n.stop()}}),n,this)})));return function(){return n.apply(this,arguments)}}()},{key:"dismiss",value:function(n,i){return this.durationTimeout&&clearTimeout(this.durationTimeout),Object(g.g)(this,n,i,"loadingLeave",f,y)}},{key:"onDidDismiss",value:function(){return Object(g.h)(this.el,"ionLoadingDidDismiss")}},{key:"onWillDismiss",value:function(){return Object(g.h)(this.el,"ionLoadingWillDismiss")}},{key:"render",value:function(){var n,i=this.message,t=this.spinner,o=Object(l.b)(this);return Object(c.j)(c.c,{onIonBackdropTap:this.onBackdropTap,tabindex:"-1",style:{zIndex:"".concat(4e4+this.overlayIndex)},class:Object.assign(Object.assign({},Object(h.b)(this.cssClass)),(n={},Object(e.a)(n,o,!0),Object(e.a)(n,"loading-translucent",this.translucent),n))},Object(c.j)("ion-backdrop",{visible:this.showBackdrop,tappable:this.backdropDismiss}),Object(c.j)("div",{tabindex:"0"}),Object(c.j)("div",{class:"loading-wrapper ion-overlay-wrapper",role:"dialog"},t&&Object(c.j)("div",{class:"loading-spinner"},Object(c.j)("ion-spinner",{name:t,"aria-hidden":"true"})),i&&Object(c.j)("div",{class:"loading-content",innerHTML:Object(u.a)(i)})),Object(c.j)("div",{tabindex:"0"}))}},{key:"el",get:function(){return Object(c.k)(this)}}]),n}();v.style={ios:".sc-ion-loading-ios-h{--min-width:auto;--width:auto;--min-height:auto;--height:auto;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;left:0;right:0;top:0;bottom:0;display:flex;position:fixed;align-items:center;justify-content:center;outline:none;font-family:var(--ion-font-family, inherit);contain:strict;touch-action:none;user-select:none;z-index:1001}.overlay-hidden.sc-ion-loading-ios-h{display:none}.loading-wrapper.sc-ion-loading-ios{display:flex;align-items:inherit;justify-content:inherit;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);background:var(--background);opacity:0;z-index:10}.spinner-lines.sc-ion-loading-ios,.spinner-lines-small.sc-ion-loading-ios,.spinner-bubbles.sc-ion-loading-ios,.spinner-circles.sc-ion-loading-ios,.spinner-crescent.sc-ion-loading-ios,.spinner-dots.sc-ion-loading-ios{color:var(--spinner-color)}.sc-ion-loading-ios-h{--background:var(--ion-overlay-background-color, var(--ion-color-step-100, #f9f9f9));--max-width:270px;--max-height:90%;--spinner-color:var(--ion-color-step-600, #666666);--backdrop-opacity:var(--ion-backdrop-opacity, 0.3);color:var(--ion-text-color, #000);font-size:14px}.loading-wrapper.sc-ion-loading-ios{border-radius:8px;padding-left:34px;padding-right:34px;padding-top:24px;padding-bottom:24px}@supports (margin-inline-start: 0) or (-webkit-margin-start: 0){.loading-wrapper.sc-ion-loading-ios{padding-left:unset;padding-right:unset;-webkit-padding-start:34px;padding-inline-start:34px;-webkit-padding-end:34px;padding-inline-end:34px}}@supports (backdrop-filter: blur(0)){.loading-translucent.sc-ion-loading-ios-h .loading-wrapper.sc-ion-loading-ios{background-color:rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.8);backdrop-filter:saturate(180%) blur(20px)}}.loading-content.sc-ion-loading-ios{font-weight:bold}.loading-spinner.sc-ion-loading-ios+.loading-content.sc-ion-loading-ios{margin-left:16px}@supports (margin-inline-start: 0) or (-webkit-margin-start: 0){.loading-spinner.sc-ion-loading-ios+.loading-content.sc-ion-loading-ios{margin-left:unset;-webkit-margin-start:16px;margin-inline-start:16px}}",md:".sc-ion-loading-md-h{--min-width:auto;--width:auto;--min-height:auto;--height:auto;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;left:0;right:0;top:0;bottom:0;display:flex;position:fixed;align-items:center;justify-content:center;outline:none;font-family:var(--ion-font-family, inherit);contain:strict;touch-action:none;user-select:none;z-index:1001}.overlay-hidden.sc-ion-loading-md-h{display:none}.loading-wrapper.sc-ion-loading-md{display:flex;align-items:inherit;justify-content:inherit;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);background:var(--background);opacity:0;z-index:10}.spinner-lines.sc-ion-loading-md,.spinner-lines-small.sc-ion-loading-md,.spinner-bubbles.sc-ion-loading-md,.spinner-circles.sc-ion-loading-md,.spinner-crescent.sc-ion-loading-md,.spinner-dots.sc-ion-loading-md{color:var(--spinner-color)}.sc-ion-loading-md-h{--background:var(--ion-color-step-50, #f2f2f2);--max-width:280px;--max-height:90%;--spinner-color:var(--ion-color-primary, #3880ff);--backdrop-opacity:var(--ion-backdrop-opacity, 0.32);color:var(--ion-color-step-850, #262626);font-size:14px}.loading-wrapper.sc-ion-loading-md{border-radius:2px;padding-left:24px;padding-right:24px;padding-top:24px;padding-bottom:24px;box-shadow:0 16px 20px rgba(0, 0, 0, 0.4)}@supports (margin-inline-start: 0) or (-webkit-margin-start: 0){.loading-wrapper.sc-ion-loading-md{padding-left:unset;padding-right:unset;-webkit-padding-start:24px;padding-inline-start:24px;-webkit-padding-end:24px;padding-inline-end:24px}}.loading-spinner.sc-ion-loading-md+.loading-content.sc-ion-loading-md{margin-left:16px}@supports (margin-inline-start: 0) or (-webkit-margin-start: 0){.loading-spinner.sc-ion-loading-md+.loading-content.sc-ion-loading-md{margin-left:unset;-webkit-margin-start:16px;margin-inline-start:16px}}"}},134:function(n,i,t){"use strict";t.d(i,"a",(function(){return d})),t.d(i,"b",(function(){return c})),t.d(i,"c",(function(){return s})),t.d(i,"d",(function(){return p}));var e=t(2),o=t.n(e),a=t(4),r=t(17),s=function(n,i){return null!==i.closest(n)},d=function(n,i){return"string"===typeof n&&n.length>0?Object.assign(Object(r.a)({"ion-color":!0},"ion-color-".concat(n),!0),i):i},c=function(n){var i={};return function(n){return void 0!==n?(Array.isArray(n)?n:n.split(" ")).filter((function(n){return null!=n})).map((function(n){return n.trim()})).filter((function(n){return""!==n})):[]}(n).forEach((function(n){return i[n]=!0})),i},l=/^[a-z][a-z0-9+\-.]*:/,p=function(){var n=Object(a.a)(o.a.mark((function n(i,t,e,a){var r;return o.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(null==i||"#"===i[0]||l.test(i)){n.next=5;break}if(!(r=document.querySelector("ion-router"))){n.next=5;break}return null!=t&&t.preventDefault(),n.abrupt("return",r.push(i,e,a));case 5:return n.abrupt("return",!1);case 6:case"end":return n.stop()}}),n)})));return function(i,t,e,o){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=28.ac4e78df.chunk.js.map