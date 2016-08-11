/*! formstone v1.2.2 [carousel.js] 2016-08-11 | GPL-3.0 License | formstone.it */

!function(a){"function"==typeof define&&define.amd?define(["jquery","./core","./mediaquery","./touch"],a):a(jQuery,Formstone)}(function(a,b){"use strict";function c(a){R.iterate.call(S,i)}function d(){S=a(O.base)}function e(c){var e;c.didPan=!1,c.carouselClasses=[P.base,c.theme,c.customClass,c.rtl?P.rtl:P.ltr],c.maxWidth=c.maxWidth===1/0?"100000px":c.maxWidth,c.mq="(min-width:"+c.minWidth+") and (max-width:"+c.maxWidth+")",c.customControls="object"===a.type(c.controls)&&c.controls.previous&&c.controls.next,c.customPagination="string"===a.type(c.pagination),c.id=this.attr("id"),c.id?c.ariaId=c.id:(c.ariaId=c.rawGuid,this.attr("id",c.ariaId)),b.support.transform||(c.useMargin=!0);var f="",i="",k=[P.control,P.control_previous].join(" "),l=[P.control,P.control_next].join(" ");c.controls&&!c.customControls&&(f+='<div class="'+P.controls+'" aria-label="carousel controls" aria-controls="'+c.ariaId+'">',f+='<button type="button" class="'+k+'" aria-label="'+c.labels.previous+'">'+c.labels.previous+"</button>",f+='<button type="button" class="'+l+'" aria-label="'+c.labels.next+'">'+c.labels.next+"</button>",f+="</div>"),c.pagination&&!c.customPagination&&(i+='<div class="'+P.pagination+'" aria-label="carousel pagination" aria-controls="'+c.ariaId+'" role="navigation">',i+="</div>"),c.autoHeight&&c.carouselClasses.push(P.auto_height),c.contained&&c.carouselClasses.push(P.contained),c.single&&c.carouselClasses.push(P.single),this.addClass(c.carouselClasses.join(" ")).wrapInner('<div class="'+P.wrapper+'" aria-live="polite"><div class="'+P.container+'"><div class="'+P.canister+'"></div></div></div>').append(f).wrapInner('<div class="'+P.viewport+'"></div>').append(i),c.$viewport=this.find(O.viewport).eq(0),c.$container=this.find(O.container).eq(0),c.$canister=this.find(O.canister).eq(0),c.$pagination=this.find(O.pagination).eq(0),c.$controlPrevious=c.$controlNext=a(""),c.customControls?(c.$controls=a(c.controls.container).addClass([P.controls,P.controls_custom].join(" ")),c.$controlPrevious=a(c.controls.previous).addClass(k),c.$controlNext=a(c.controls.next).addClass(l)):(c.$controls=this.find(O.controls).eq(0),c.$controlPrevious=c.$controls.find(O.control_previous),c.$controlNext=c.$controls.find(O.control_next)),c.$controlItems=c.$controlPrevious.add(c.$controlNext),c.customPagination&&(c.$pagination=a(c.pagination).addClass([P.pagination])),c.$paginationItems=c.$pagination.find(O.page),c.index=0,c.enabled=!1,c.leftPosition=0,c.autoTimer=null,c.resizeTimer=null;var m=this.data(M+"-linked");c.linked=!!m&&"[data-"+M+'-linked="'+m+'"]',c.linked&&(c.paged=!0);var n=this.data(M+"-controller-for")||"";if(c.$subordinate=a(n),c.$subordinate.length&&(c.controller=!0),"object"===a.type(c.show)){var o=c.show,p=[],q=[];for(e in o)o.hasOwnProperty(e)&&q.push(e);q.sort(R.sortAsc);for(e in q)q.hasOwnProperty(e)&&p.push({width:parseInt(q[e]),count:o[q[e]],mq:window.matchMedia("(min-width: "+parseInt(q[e])+"px)")});c.show=p}j(c),a.fsMediaquery("bind",c.rawGuid,c.mq,{enter:function(){h.call(c.$el,c)},leave:function(){g.call(c.$el,c)}}),d(),c.carouselClasses.push(P.enabled),c.carouselClasses.push(P.animated)}function f(b){R.clearTimer(b.autoTimer),R.clearTimer(b.resizeTimer),g.call(this,b),a.fsMediaquery("unbind",b.rawGuid),b.id!==b.ariaId&&this.removeAttr("id"),b.$controlItems.removeClass([O.control,P.control_previous,O.control_next,O.visible].join(" ")).off(Q.namespace),b.$images.off(Q.namespace),b.$canister.fsTouch("destroy"),b.$items.removeClass([P.item,P.visible,O.item_previous,O.item_next].join(" ")).unwrap().unwrap().unwrap().unwrap(),b.controls&&!b.customControls&&b.$controls.remove(),b.customControls&&b.$controls.removeClass([P.controls,P.controls_custom,P.visible].join(" ")),b.pagination&&!b.customPagination&&b.$pagination.remove(),b.customPagination&&b.$pagination.html("").removeClass([P.pagination,P.visible].join(" ")),this.removeClass(b.carouselClasses.join(" ")),d()}function g(a){a.enabled&&(R.clearTimer(a.autoTimer),a.enabled=!1,a.$subordinate.off(Q.update),this.removeClass([P.enabled,P.animated].join(" ")).off(Q.namespace),a.$canister.fsTouch("destroy").off(Q.namespace).attr("style","").css(U,"none"),a.$items.css({width:"",height:""}).removeClass([P.visible,O.item_previous,O.item_next].join(" ")),a.$images.off(Q.namespace),a.$controlItems.off(Q.namespace),a.$pagination.html("").off(Q.namespace),u(a),a.useMargin?a.$canister.css({marginLeft:""}):a.$canister.css(T,""),a.index=0)}function h(a){a.enabled||(a.enabled=!0,this.addClass(P.enabled),a.$controlItems.on(Q.click,a,r),a.$pagination.on(Q.click,O.page,a,s),a.$items.on(Q.click,a,H),a.$subordinate.on(Q.update,a,I),I({data:a},0),a.$canister.fsTouch({axis:"x",pan:!0,swipe:!0}).on(Q.panStart,a,y).on(Q.pan,a,z).on(Q.panEnd,a,A).on(Q.swipe,a,E).css(U,""),j(a),a.$images.on(Q.load,a,p),a.autoAdvance&&(a.autoTimer=R.startTimer(a.autoTimer,a.autoTime,function(){q(a)},!0)),i.call(this,a))}function i(a){if(a.enabled){var b,c,d,e,f,g,h,i,j,k;if(a.count=a.$items.length,a.count<1)return u(a),void a.$canister.css({height:""});for(this.removeClass(P.animated),a.containerWidth=a.$container.outerWidth(!1),a.visible=x(a),a.perPage=a.paged?1:a.visible,a.itemMarginLeft=parseInt(a.$items.eq(0).css("marginLeft")),a.itemMarginRight=parseInt(a.$items.eq(0).css("marginRight")),a.itemMargin=a.itemMarginLeft+a.itemMarginRight,isNaN(a.itemMargin)&&(a.itemMargin=0),a.itemWidth=(a.containerWidth-a.itemMargin*(a.visible-1))/a.visible,a.itemHeight=0,a.pageWidth=a.paged?a.itemWidth:a.containerWidth,a.pageCount=Math.ceil(a.count/a.perPage),a.canisterWidth=a.single?a.containerWidth:(a.pageWidth+a.itemMargin)*a.pageCount,a.$canister.css({width:a.matchWidth?a.canisterWidth:1e6,height:""}),a.$items.css({width:a.matchWidth?a.itemWidth:"",height:""}).removeClass([P.visible,P.item_previous,P.item_next].join(" ")),a.pages=[],c=0,d=0;c<a.count;c+=a.perPage){for(g=a.$items.slice(c,c+a.perPage),i=0,j=0,g.length<a.perPage&&(g=0===c?a.$items:a.$items.slice(a.$items.length-a.perPage)),h=a.rtl?g.eq(g.length-1):g.eq(0),k=h.position().left,e=0;e<g.length;e++)f=g.eq(e).outerWidth(!0),b=g.eq(e).outerHeight(),i+=f,b>j&&(j=b);a.pages.push({left:a.rtl?k-(a.canisterWidth-i):k,height:j,width:i,$items:g}),j>a.itemHeight&&(a.itemHeight=j),d++}a.paged&&(a.pageCount-=a.count%a.visible),a.pageCount<=0&&(a.pageCount=1),a.maxMove=-a.pages[a.pageCount-1].left,a.autoHeight?a.$canister.css({height:a.pages[0].height}):a.matchHeight&&a.$items.css({height:a.itemHeight});var l="";for(c=0;c<a.pageCount;c++)l+='<button type="button" class="'+P.page+'">'+(c+1)+"</button>";a.$pagination.html(l),a.pageCount<=1?u(a):v(a),a.$paginationItems=a.$pagination.find(O.page),t(a,a.index,!1),setTimeout(function(){a.$el.addClass(P.animated)},5)}}function j(a){a.$items=a.$canister.children().not(":hidden").addClass(P.item),a.$images=a.$canister.find("img"),a.totalImages=a.$images.length}function k(a){a.enabled&&l.call(this,a,!1)}function l(a,b){a.$images.off(Q.namespace),b!==!1&&a.$canister.html(b),a.index=0,j(a),i.call(this,a)}function m(a,b,c,d,e){a.enabled&&(R.clearTimer(a.autoTimer),"undefined"==typeof e&&(e=!0),t(a,b-1,e,c,d))}function n(a){var b=a.index-1;a.infinite&&b<0&&(b=a.pageCount-1),t(a,b)}function o(a){var b=a.index+1;a.infinite&&b>=a.pageCount&&(b=0),t(a,b)}function p(a){var b=a.data;b.resizeTimer=R.startTimer(b.resizeTimer,20,function(){i.call(b.$el,b)})}function q(a){var b=a.index+1;b>=a.pageCount&&(b=0),t(a,b)}function r(b){R.killEvent(b);var c=b.data,d=c.index+(a(b.currentTarget).hasClass(P.control_next)?1:-1);R.clearTimer(c.autoTimer),t(c,d)}function s(b){R.killEvent(b);var c=b.data,d=c.$paginationItems.index(a(b.currentTarget));R.clearTimer(c.autoTimer),t(c,d)}function t(b,c,d,e,f){if(c<0&&(c=b.infinite?b.pageCount-1:0),c>=b.pageCount&&(c=b.infinite?0:b.pageCount-1),!(b.count<1)){b.pages[c]&&(b.leftPosition=-b.pages[c].left),b.leftPosition=J(b,b.leftPosition),b.useMargin?b.$canister.css({marginLeft:b.leftPosition}):d===!1?(b.$canister.css(U,"none").css(T,"translateX("+b.leftPosition+"px)"),setTimeout(function(){b.$canister.css(U,"")},5)):b.$canister.css(T,"translateX("+b.leftPosition+"px)"),b.$items.removeClass([P.visible,P.item_previous,P.item_next].join(" "));for(var g=0,h=b.pages.length;g<h;g++)g===c?b.pages[g].$items.addClass(P.visible).attr("aria-hidden","false"):b.pages[g].$items.not(b.pages[c].$items).addClass(g<c?P.item_previous:P.item_next).attr("aria-hidden","true");b.autoHeight&&b.$canister.css({height:b.pages[c].height}),d!==!1&&e!==!0&&c!==b.index&&(b.infinite||c>-1&&c<b.pageCount)&&b.$el.trigger(Q.update,[c]),b.index=c,b.linked&&f!==!0&&a(b.linked).not(b.$el)[N]("jump",b.index+1,!0,!0),w(b)}}function u(a){a.$controls.removeClass(P.visible),a.$controlItems.removeClass(P.visible),a.$pagination.removeClass(P.visible)}function v(a){a.$controls.addClass(P.visible),a.$controlItems.addClass(P.visible),a.$pagination.addClass(P.visible)}function w(a){a.$paginationItems.removeClass(P.active).eq(a.index).addClass(P.active),a.infinite?a.$controlItems.addClass(P.visible):a.pageCount<1?a.$controlItems.removeClass(P.visible):(a.$controlItems.addClass(P.visible),a.index<=0?a.$controlPrevious.removeClass(P.visible):(a.index>=a.pageCount-1||!a.single&&a.leftPosition===a.maxMove)&&a.$controlNext.removeClass(P.visible))}function x(c){var d=1;if(c.single)return d;if("array"===a.type(c.show))for(var e in c.show)c.show.hasOwnProperty(e)&&(b.support.nativeMatchMedia?c.show[e].mq.matches&&(d=c.show[e].count):c.show[e].width<b.fallbackWidth&&(d=c.show[e].count));else d=c.show;return c.fill&&c.count<d?c.count:d}function y(b,c){var d=b.data;if(R.clearTimer(d.autoTimer),!d.single){if(d.useMargin)d.leftPosition=parseInt(d.$canister.css("marginLeft"));else{var e=d.$canister.css(T).split(",");d.leftPosition=parseInt(e[4])}if(d.$canister.css(U,"none"),z(b),d.linked&&c!==!0){var f=b.deltaX/d.pageWidth;d.rtl&&(f*=-1),a(d.linked).not(d.$el)[N]("panStart",f)}}d.isTouching=!0}function z(b,c){var d=b.data;if(!d.single&&(d.touchLeft=J(d,d.leftPosition+b.deltaX),d.useMargin?d.$canister.css({marginLeft:d.touchLeft}):d.$canister.css(T,"translateX("+d.touchLeft+"px)"),d.linked&&c!==!0)){var e=b.deltaX/d.pageWidth;d.rtl&&(e*=-1),a(d.linked).not(d.$el)[N]("pan",e)}}function A(b,c){var d=b.data,e=Math.abs(b.deltaX),f=K(d,b),g=!1;if(d.didPan=!1,!d.single){var h,i,j=Math.abs(d.touchLeft),k=!1,l=d.rtl?"right":"left";if(b.directionX===l)for(h=0,i=d.pages.length;h<i;h++)k=d.pages[h],j>Math.abs(k.left)+20&&(g=h+1);else for(h=d.pages.length-1,i=0;h>=i;h--)k=d.pages[h],j<Math.abs(k.left)&&(g=h-1)}g===!1&&(g=e<50?d.index:d.index+f),g!==d.index&&(d.didPan=!0),d.linked&&c!==!0&&a(d.linked).not(d.$el)[N]("panEnd",g),G(d,g)}function B(a,b){if(R.clearTimer(a.autoTimer),!a.single){if(a.rtl&&(b*=-1),a.useMargin)a.leftPosition=parseInt(a.$canister.css("marginLeft"));else{var c=a.$canister.css(T).split(",");a.leftPosition=parseInt(c[4])}a.$canister.css(U,"none");var d={data:a,deltaX:a.pageWidth*b};z(d,!0)}a.isTouching=!0}function C(a,b){if(!a.single){a.rtl&&(b*=-1);var c=a.pageWidth*b;a.touchLeft=J(a,a.leftPosition+c),a.useMargin?a.$canister.css({marginLeft:a.touchLeft}):a.$canister.css(T,"translateX("+a.touchLeft+"px)")}}function D(a,b){G(a,b,!0)}function E(b,c){var d=b.data,e=K(d,b),f=d.index+e;d.linked&&c!==!0&&a(d.linked).not(d.$el)[N]("swipe",b.directionX),G(d,f)}function F(a,b){var c={data:a,directionX:b};E(c,!0)}function G(a,b){a.$canister.css(U,""),t(a,b),a.isTouching=!1}function H(b){var c=b.data,d=a(b.currentTarget);if(!c.didPan&&(d.trigger(Q.itemClick),c.controller)){var e=c.$items.index(d);I(b,e),c.$subordinate[N]("jump",e+1,!0)}}function I(a,b){var c=a.data;if(c.controller){var d=c.$items.eq(b);c.$items.removeClass(P.active),d.addClass(P.active);for(var e=0;e<c.pageCount;e++)if(c.pages[e].$items.is(d)){t(c,e,!0,!0);break}}}function J(a,b){return isNaN(b)?b=0:a.rtl?(b>a.maxMove&&(b=a.maxMove),b<0&&(b=0)):(b<a.maxMove&&(b=a.maxMove),b>0&&(b=0)),b}function K(a,b){return a.rtl?"right"===b.directionX?1:-1:"left"===b.directionX?1:-1}var L=b.Plugin("carousel",{widget:!0,defaults:{autoAdvance:!1,autoHeight:!1,autoTime:8e3,contained:!0,controls:!0,customClass:"",fill:!1,infinite:!1,labels:{next:"Next",previous:"Previous"},matchHeight:!1,matchWidth:!0,maxWidth:1/0,minWidth:"0px",paged:!1,pagination:!0,rtl:!1,show:1,single:!1,theme:"fs-light",useMargin:!1},classes:["ltr","rtl","viewport","wrapper","container","canister","item","item_previous","item_next","controls","controls_custom","control","control_previous","control_next","pagination","page","animated","enabled","visible","active","auto_height","contained","single"],events:{itemClick:"itemClick",update:"update"},methods:{_construct:e,_destruct:f,_resize:c,disable:g,enable:h,jump:m,previous:n,next:o,reset:k,resize:i,update:l,panStart:B,pan:C,panEnd:D,swipe:F}}),M=L.namespace,N=L.namespaceClean,O=L.classes,P=O.raw,Q=L.events,R=L.functions,S=[],T=b.transform,U=b.transition});