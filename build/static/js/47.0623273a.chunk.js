(this.webpackJsonpprojetJordan=this.webpackJsonpprojetJordan||[]).push([[47],{116:function(t,n,e){"use strict";e.r(n),e.d(n,"ion_ripple_effect",(function(){return l}));var o=e(17),a=e(2),i=e.n(a),r=e(4),c=e(5),s=e(8),u=e(14),f=e(15),l=function(){function t(n){Object(c.a)(this,t),Object(u.o)(this,n),this.type="bounded"}return Object(s.a)(t,[{key:"addRipple",value:function(){var t=Object(r.a)(i.a.mark((function t(n,e){var o=this;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",new Promise((function(t){Object(u.h)((function(){var a=o.el.getBoundingClientRect(),i=a.width,r=a.height,c=Math.sqrt(i*i+r*r),s=Math.max(r,i),f=o.unbounded?s:c+p,l=Math.floor(s*m),b=f/l,h=n-a.left,y=e-a.top;o.unbounded&&(h=.5*i,y=.5*r);var v=h-.5*l,j=y-.5*l,O=.5*i-h,g=.5*r-y;Object(u.f)((function(){var n=document.createElement("div");n.classList.add("ripple-effect");var e=n.style;e.top=j+"px",e.left=v+"px",e.width=e.height=l+"px",e.setProperty("--final-scale","".concat(b)),e.setProperty("--translate-end","".concat(O,"px, ").concat(g,"px")),(o.el.shadowRoot||o.el).appendChild(n),setTimeout((function(){t((function(){d(n)}))}),325)}))}))})));case 1:case"end":return t.stop()}}),t)})));return function(n,e){return t.apply(this,arguments)}}()},{key:"render",value:function(){var t,n=Object(f.b)(this);return Object(u.j)(u.c,{role:"presentation",class:(t={},Object(o.a)(t,n,!0),Object(o.a)(t,"unbounded",this.unbounded),t)})}},{key:"unbounded",get:function(){return"unbounded"===this.type}},{key:"el",get:function(){return Object(u.k)(this)}}]),t}(),d=function(t){t.classList.add("fade-out"),setTimeout((function(){t.remove()}),200)},p=10,m=.5;l.style=":host{left:0;right:0;top:0;bottom:0;position:absolute;contain:strict;pointer-events:none}:host(.unbounded){contain:layout size style}.ripple-effect{border-radius:50%;position:absolute;background-color:currentColor;color:inherit;contain:strict;opacity:0;animation:225ms rippleAnimation forwards, 75ms fadeInAnimation forwards;will-change:transform, opacity;pointer-events:none}.fade-out{transform:translate(var(--translate-end)) scale(var(--final-scale, 1));animation:150ms fadeOutAnimation forwards}@keyframes rippleAnimation{from{animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transform:scale(1)}to{transform:translate(var(--translate-end)) scale(var(--final-scale, 1))}}@keyframes fadeInAnimation{from{animation-timing-function:linear;opacity:0}to{opacity:0.16}}@keyframes fadeOutAnimation{from{animation-timing-function:linear;opacity:0.16}to{opacity:0}}"}}]);
//# sourceMappingURL=47.0623273a.chunk.js.map