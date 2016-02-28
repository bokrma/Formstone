/*! formstone v0.8.40 [touch.js] 2016-02-28 | MIT License | formstone.it */

!function(a,b,c){"use strict";function d(a){a.touches=[],a.touching=!1,this.on(r.dragStart,s.killEvent),a.swipe&&(a.pan=!0),a.scale&&(a.axis=!1),a.axisX="x"===a.axis,a.axisY="y"===a.axis,b.support.pointer?(o(this,"none"),this.on(r.pointerDown,a,f)):this.on(r.touchStart,a,f).on(r.mouseDown,a,g)}function e(a){this.off(r.namespace),o(this,"")}function f(a){a.preventManipulation&&a.preventManipulation();var b=a.data,c=a.originalEvent;if(c.type.match(/(up|end|cancel)$/i))return void k(a);if(c.pointerId){var d=!1;for(var e in b.touches)b.touches[e].id===c.pointerId&&(d=!0,b.touches[e].pageX=c.pageX,b.touches[e].pageY=c.pageY);d||b.touches.push({id:c.pointerId,pageX:c.pageX,pageY:c.pageY})}else b.touches=c.touches;c.type.match(/(down|start)$/i)?g(a):c.type.match(/move$/i)&&h(a)}function g(c){var d=c.data,e="undefined"!==a.type(d.touches)?d.touches[0]:null;d.touching||(d.startE=c.originalEvent,d.startX=e?e.pageX:c.pageX,d.startY=e?e.pageY:c.pageY,d.startT=(new Date).getTime(),d.scaleD=1,d.passed=!1),d.$links&&d.$links.off(r.click);var g=l(d.scale?r.scaleStart:r.panStart,c,d.startX,d.startY,d.scaleD,0,0,"","");if(d.scale&&d.touches&&d.touches.length>=2){var i=d.touches;d.pinch={startX:m(i[0].pageX,i[1].pageX),startY:m(i[0].pageY,i[1].pageY),startD:n(i[1].pageX-i[0].pageX,i[1].pageY-i[0].pageY)},g.pageX=d.startX=d.pinch.startX,g.pageY=d.startY=d.pinch.startY}d.touching||(d.touching=!0,d.pan&&t.on(r.mouseMove,d,h).on(r.mouseUp,d,k),b.support.pointer?t.on([r.pointerMove,r.pointerUp,r.pointerCancel].join(" "),d,f):t.on([r.touchMove,r.touchEnd,r.touchCancel].join(" "),d,f),d.$el.trigger(g))}function h(b){var c=b.data,d="undefined"!==a.type(c.touches)?c.touches[0]:null,e=d?d.pageX:b.pageX,f=d?d.pageY:b.pageY,g=e-c.startX,h=f-c.startY,i=g>0?"right":"left",j=h>0?"down":"up",o=Math.abs(g)>u,p=Math.abs(h)>u;if(!c.passed&&c.axis&&(c.axisX&&p||c.axisY&&o))k(b);else{!c.passed&&(!c.axis||c.axis&&c.axisX&&o||c.axisY&&p)&&(c.passed=!0),c.passed&&(s.killEvent(b),s.killEvent(c.startE));var q=!0,t=l(c.scale?r.scale:r.pan,b,e,f,c.scaleD,g,h,i,j);if(c.scale)if(c.touches&&c.touches.length>=2){var v=c.touches;c.pinch.endX=m(v[0].pageX,v[1].pageX),c.pinch.endY=m(v[0].pageY,v[1].pageY),c.pinch.endD=n(v[1].pageX-v[0].pageX,v[1].pageY-v[0].pageY),c.scaleD=c.pinch.endD/c.pinch.startD,t.pageX=c.pinch.endX,t.pageY=c.pinch.endY,t.scale=c.scaleD,t.deltaX=c.pinch.endX-c.pinch.startX,t.deltaY=c.pinch.endY-c.pinch.startY}else c.pan||(q=!1);q&&c.$el.trigger(t)}}function i(b,c){b.on(r.click,c,j);var d=a._data(b[0],"events").click;d.unshift(d.pop())}function j(a){s.killEvent(a,!0),a.data.$links.off(r.click)}function k(b){var c=b.data,d="undefined"!==a.type(c.touches)?c.touches[0]:null,e=d?d.pageX:b.pageX,f=d?d.pageY:b.pageY,g=e-c.startX,h=f-c.startY,j=(new Date).getTime(),k=c.scale?r.scaleEnd:r.panEnd,m=g>0?"right":"left",n=h>0?"down":"up",o=Math.abs(g)>1,p=Math.abs(h)>1;if(c.swipe&&Math.abs(g)>u&&j-c.startT<v&&(k=r.swipe),c.axis&&(c.axisX&&p||c.axisY&&o)||o||p){c.$links=c.$el.find("a");for(var q=0,s=c.$links.length;s>q;q++)i(c.$links.eq(q),c)}var w=l(k,b,e,f,c.scaleD,g,h,m,n);t.off([r.touchMove,r.touchEnd,r.touchCancel,r.mouseMove,r.mouseUp,r.pointerMove,r.pointerUp,r.pointerCancel].join(" ")),c.$el.trigger(w),c.touches=[],c.scale,c.touching=!1}function l(b,c,d,e,f,g,h,i,j){return a.Event(b,{originalEvent:c,bubbles:!0,pageX:d,pageY:e,scale:f,deltaX:g,deltaY:h,directionX:i,directionY:j})}function m(a,b){return(a+b)/2}function n(a,b){return Math.sqrt(a*a+b*b)}function o(a,b){a.css({"-ms-touch-action":b,"touch-action":b})}var p=!b.window.PointerEvent,q=b.Plugin("touch",{widget:!0,defaults:{axis:!1,pan:!1,scale:!1,swipe:!1},methods:{_construct:d,_destruct:e},events:{pointerDown:p?"MSPointerDown":"pointerdown",pointerUp:p?"MSPointerUp":"pointerup",pointerMove:p?"MSPointerMove":"pointermove",pointerCancel:p?"MSPointerCancel":"pointercancel"}}),r=q.events,s=q.functions,t=b.$window,u=10,v=50;r.pan="pan",r.panStart="panstart",r.panEnd="panend",r.scale="scale",r.scaleStart="scalestart",r.scaleEnd="scaleend",r.swipe="swipe"}(jQuery,Formstone);