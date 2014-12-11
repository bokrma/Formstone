/*! Formstone v0.0.1 [lightbox.js] 2014-12-11 | MIT License | formstone.it */

!function(a,b,c){"use strict";function d(){Q=b.$body}function e(a){this.on(M.click,a,h)}function f(){j(),this.off(M.namespace)}function g(b,c){b instanceof a&&h.apply(O,[{data:a.extend({},{$object:b},J,c||{})}])}function h(c){if(!R){var d=c.data,e=d.$el,f=d.$object,g=e&&e[0].href?e[0].href||"":"",h=e&&e[0].hash?e[0].hash||"":"",k=g.toLowerCase().split(".").pop().split(/\#|\?/),l=k[0],n=e?e.data(I+"-type"):"",o="image"===n||a.inArray(l,d.extensions)>-1||"data:image"===g.substr(0,10),q=g.indexOf("youtube.com/embed")>-1||g.indexOf("player.vimeo.com/video")>-1,r="url"===n||!o&&!q&&"http"===g.substr(0,4)&&!h,t="element"===n||!o&&!q&&!r&&"#"===h.substr(0,1),u="undefined"!=typeof f;if(t&&(g=h),!(o||q||r||t||u))return;if(N.killEvent(c),R=a.extend({},{visible:!1,resizeTimer:null,touchTimer:null,gallery:{active:!1},isMobile:b.isMobile||d.mobile,isAnimating:!0,oldContentHeight:0,oldContentWidth:0},d),R.margin*=2,R.type=o?"image":q?"video":"element",o||q){var B=e.data(I+"-gallery");B&&(R.gallery.active=!0,R.gallery.id=B,R.gallery.$items=a("a[data-lightbox-gallery= "+R.gallery.id+"], a[rel= "+R.gallery.id+"]"),R.gallery.index=R.gallery.$items.index(R.$el),R.gallery.total=R.gallery.$items.length-1)}var C="";R.isMobile||(C+='<div class="'+[K.raw.overlay,R.customClass].join(" ")+'"></div>');var D=[K.raw.base,K.raw.loading,K.raw.animating,R.customClass];R.fixed&&D.push(K.raw.fixed),R.isMobile&&D.push(K.raw.mobile),r&&D.push(K.raw.iframed),(t||u)&&D.push(K.raw.inline),C+='<div class="'+D.join(" ")+'">',C+='<span class="'+K.raw.close+'">'+R.labels.close+"</span>",C+='<span class="'+K.raw.loading_icon+'"></span>',C+='<div class="'+K.raw.container+'">',C+='<div class="'+K.raw.content+'">',(o||q)&&(C+='<div class="'+K.raw.meta+'">',R.gallery.active&&(C+='<div class="'+[K.raw.control,K.raw.control_previous].join(" ")+'">'+R.labels.previous+"</div>",C+='<div class="'+[K.raw.control,K.raw.control_next].join(" ")+'">'+R.labels.next+"</div>",C+='<p class="'+K.raw.position+'"',R.gallery.total<1&&(C+=' style="display: none;"'),C+=">",C+='<span class="'+K.raw.position_current+'">'+(R.gallery.index+1)+"</span> ",C+=R.labels.count,C+=' <span class="'+K.raw.position_total+'">'+(R.gallery.total+1)+"</span>",C+="</p>"),C+='<div class="'+K.raw.caption+'">',C+=R.formatter.call(e,d),C+="</div></div>"),C+="</div></div></div>",Q.append(C),R.$overlay=a(K.overlay),R.$lightbox=a(K.base),R.$close=a(K.close),R.$container=a(K.container),R.$content=a(K.content),R.$meta=a(K.meta),R.$position=a(K.position),R.$caption=a(K.caption),R.$controls=a(K.control),R.paddingVertical=R.isMobile?R.$close.outerHeight()/2:parseInt(R.$lightbox.css("paddingTop"),10)+parseInt(R.$lightbox.css("paddingBottom"),10),R.paddingHorizontal=R.isMobile?0:parseInt(R.$lightbox.css("paddingLeft"),10)+parseInt(R.$lightbox.css("paddingRight"),10),R.contentHeight=R.$lightbox.outerHeight()-R.paddingVertical,R.contentWidth=R.$lightbox.outerWidth()-R.paddingHorizontal,R.controlHeight=R.$controls.outerHeight(),m(),R.gallery.active&&w(),P.on(M.resize,i).on(M.keyDown,x),Q.on(M.clickTouchStart,[K.overlay,K.close].join(", "),j).on(M.touchMove,N.killEvent),R.gallery.active&&R.$lightbox.on(M.clickTouchStart,K.control,v),R.$lightbox.transition({property:"opacity"},function(){o?p(g):q?s(g):r?z(g):t?y(g):u&&A(R.$object)}).addClass(K.raw.open),R.$overlay.addClass(K.raw.open)}}function i(a){"object"!=typeof a&&(R.targetHeight=arguments[0],R.targetWidth=arguments[1]),"element"===R.type?B(R.$content.find("> :first-child")):"image"===R.type?q():"video"===R.type&&t(),l()}function j(a){N.killEvent(a),R&&(R.$lightbox.transition("destroy"),R.$container.transition("destroy"),R.$lightbox.addClass(K.raw.animating).transition({property:"opacity"},function(){R.$lightbox.off(M.namespace),R.$container.off(M.namespace),P.off(M.namespace),Q.off(M.namespace),R.$overlay.remove(),R.$lightbox.remove(),R=null,P.trigger(M.close)}),R.$lightbox.removeClass(K.raw.open),R.$overlay.removeClass(K.raw.open),N.clearTimer(R.resizeTimer))}function k(){{var a=n();R.isMobile?0:R.duration}R.isMobile||R.$controls.css({marginTop:(R.contentHeight-R.controlHeight-R.metaHeight)/2}),!R.visible&&R.isMobile&&R.gallery.active&&R.$content.on(M.touchStart,K.image,D),R.$lightbox.transition({property:"height"},function(){R.$container.transition({property:"opacity"},function(){R.$lightbox.removeClass(K.raw.animating),R.isAnimating=!1}),R.$lightbox.removeClass(K.raw.loading),R.visible=!0,P.trigger(M.open),R.gallery.active&&u()}),R.isMobile||R.$lightbox.css({height:R.contentHeight+R.paddingVertical,width:R.contentWidth+R.paddingHorizontal,top:R.fixed?0:a.top});var b=R.oldContentHeight!==R.contentHeight||R.oldContentWidth!==R.contentWidth;(R.isMobile||!b)&&R.$lightbox.transition("resolve"),R.oldContentHeight=R.contentHeight,R.oldContentWidth=R.contentWidth}function l(){if(R.visible&&!R.isMobile){var a=n();R.$controls.css({marginTop:(R.contentHeight-R.controlHeight-R.metaHeight)/2}),R.$lightbox.css({height:R.contentHeight+R.paddingVertical,width:R.contentWidth+R.paddingHorizontal,top:R.fixed?0:a.top})}}function m(){var a=n();R.$lightbox.css({top:R.fixed?0:a.top})}function n(){if(R.isMobile)return{left:0,top:0};var a={left:(P.width()-R.contentWidth-R.paddingHorizontal)/2,top:R.top<=0?(P.height()-R.contentHeight-R.paddingVertical)/2:R.top};return R.fixed!==!0&&(a.top+=P.scrollTop()),a}function o(){var a=this.attr("title");return a!==c&&""!==a.trim()?'<p class="caption">'+a.trim()+"</p>":""}function p(b){R.$image=a("<img>"),R.$image.one(M.load,function(){var a=G(R.$image);R.naturalHeight=a.naturalHeight,R.naturalWidth=a.naturalWidth,R.retina&&(R.naturalHeight/=2,R.naturalWidth/=2),R.$content.prepend(R.$image),""===R.$caption.html()?R.$caption.hide():R.$caption.show(),q(),k()}).error(C).attr("src",b).addClass(K.raw.image),(R.$image[0].complete||4===R.$image[0].readyState)&&R.$image.trigger(M.load)}function q(){var a=0;for(R.windowHeight=R.viewportHeight=P.height()-R.paddingVertical,R.windowWidth=R.viewportWidth=P.width()-R.paddingHorizontal,R.contentHeight=1/0,R.contentWidth=1/0,R.imageMarginTop=0,R.imageMarginLeft=0;R.contentHeight>R.viewportHeight&&2>a;)R.imageHeight=0===a?R.naturalHeight:R.$image.outerHeight(),R.imageWidth=0===a?R.naturalWidth:R.$image.outerWidth(),R.metaHeight=0===a?0:R.metaHeight,0===a&&(R.ratioHorizontal=R.imageHeight/R.imageWidth,R.ratioVertical=R.imageWidth/R.imageHeight,R.isWide=R.imageWidth>R.imageHeight),R.imageHeight<R.minHeight&&(R.minHeight=R.imageHeight),R.imageWidth<R.minWidth&&(R.minWidth=R.imageWidth),R.isMobile?(R.$meta.css({width:R.windowWidth}),R.metaHeight=R.$meta.outerHeight(!0),R.contentHeight=R.viewportHeight-R.paddingVertical,R.contentWidth=R.viewportWidth-R.paddingHorizontal,r(),R.imageMarginTop=(R.contentHeight-R.targetImageHeight-R.metaHeight)/2,R.imageMarginLeft=(R.contentWidth-R.targetImageWidth)/2):(0===a&&(R.viewportHeight-=R.margin+R.paddingVertical,R.viewportWidth-=R.margin+R.paddingHorizontal),R.viewportHeight-=R.metaHeight,r(),R.contentHeight=R.targetImageHeight,R.contentWidth=R.targetImageWidth),R.$meta.css({width:R.contentWidth}),R.$image.css({height:R.targetImageHeight,width:R.targetImageWidth,marginTop:R.imageMarginTop,marginLeft:R.imageMarginLeft}),R.isMobile||(R.metaHeight=R.$meta.outerHeight(!0),R.contentHeight+=R.metaHeight),a++}function r(){var a=R.isMobile?R.contentHeight-R.metaHeight:R.viewportHeight,b=R.isMobile?R.contentWidth:R.viewportWidth;R.isWide?(R.targetImageWidth=b,R.targetImageHeight=R.targetImageWidth*R.ratioHorizontal,R.targetImageHeight>a&&(R.targetImageHeight=a,R.targetImageWidth=R.targetImageHeight*R.ratioVertical)):(R.targetImageHeight=a,R.targetImageWidth=R.targetImageHeight*R.ratioVertical,R.targetImageWidth>b&&(R.targetImageWidth=b,R.targetImageHeight=R.targetImageWidth*R.ratioHorizontal)),(R.targetImageWidth>R.imageWidth||R.targetImageHeight>R.imageHeight)&&(R.targetImageHeight=R.imageHeight,R.targetImageWidth=R.imageWidth),(R.targetImageWidth<R.minWidth||R.targetImageHeight<R.minHeight)&&(R.targetImageWidth<R.minWidth?(R.targetImageWidth=R.minWidth,R.targetImageHeight=R.targetImageWidth*R.ratioHorizontal):(R.targetImageHeight=R.minHeight,R.targetImageWidth=R.targetImageHeight*R.ratioVertical))}function s(b){R.$videoWrapper=a('<div class="'+K.raw.videoWrapper+'"></div>'),R.$video=a('<iframe class="'+K.raw.video+'" seamless="seamless"></iframe>'),R.$video.attr("src",b).addClass(K.raw.video).prependTo(R.$videoWrapper),R.$content.prepend(R.$videoWrapper),t(),k()}function t(){R.windowHeight=R.viewportHeight=R.contentHeight=P.height()-R.paddingVertical,R.windowWidth=R.viewportWidth=R.contentWidth=P.width()-R.paddingHorizontal,R.videoMarginTop=0,R.videoMarginLeft=0,R.isMobile?(R.$meta.css({width:R.windowWidth}),R.metaHeight=R.$meta.outerHeight(!0),R.viewportHeight-=R.metaHeight,R.targetVideoWidth=R.viewportWidth,R.targetVideoHeight=R.targetVideoWidth*R.videoRatio,R.targetVideoHeight>R.viewportHeight&&(R.targetVideoHeight=R.viewportHeight,R.targetVideoWidth=R.targetVideoHeight/R.videoRatio),R.videoMarginTop=(R.viewportHeight-R.targetVideoHeight)/2,R.videoMarginLeft=(R.viewportWidth-R.targetVideoWidth)/2):(R.viewportHeight=R.windowHeight-R.margin,R.viewportWidth=R.windowWidth-R.margin,R.targetVideoWidth=R.videoWidth>R.viewportWidth?R.viewportWidth:R.videoWidth,R.targetVideoWidth<R.minWidth&&(R.targetVideoWidth=R.minWidth),R.targetVideoHeight=R.targetVideoWidth*R.videoRatio,R.contentHeight=R.targetVideoHeight,R.contentWidth=R.targetVideoWidth),R.$meta.css({width:R.contentWidth}),R.$videoWrapper.css({height:R.targetVideoHeight,width:R.targetVideoWidth,marginTop:R.videoMarginTop,marginLeft:R.videoMarginLeft}),R.isMobile||(R.metaHeight=R.$meta.outerHeight(!0),R.contentHeight=R.targetVideoHeight+R.metaHeight)}function u(){var b="";R.gallery.index>0&&(b=R.gallery.$items.eq(R.gallery.index-1).attr("href"),b.indexOf("youtube.com/embed")<0&&b.indexOf("player.vimeo.com/video")<0&&a('<img src="'+b+'">')),R.gallery.index<R.gallery.total&&(b=R.gallery.$items.eq(R.gallery.index+1).attr("href"),b.indexOf("youtube.com/embed")<0&&b.indexOf("player.vimeo.com/video")<0&&a('<img src="'+b+'">'))}function v(b){N.killEvent(b);var c=a(b.currentTarget);R.isAnimating||c.hasClass(K.raw.control_disabled)||(R.isAnimating=!0,R.gallery.index+=c.hasClass(K.raw.control_next)?1:-1,R.gallery.index>R.gallery.total&&(R.gallery.index=R.gallery.total),R.gallery.index<0&&(R.gallery.index=0),R.$lightbox.addClass([K.raw.loading,K.raw.animating].join(" ")),R.$container.transition({property:"opacity"},function(){"undefined"!=typeof R.$image&&R.$image.remove(),"undefined"!=typeof R.$videoWrapper&&R.$videoWrapper.remove(),R.$el=R.gallery.$items.eq(R.gallery.index),R.$caption.html(R.formatter.call(R.$el,R)),R.$position.find(K.position_current).html(R.gallery.index+1);var a=R.$el.attr("href"),b=a.indexOf("youtube.com/embed")>-1||a.indexOf("player.vimeo.com/video")>-1;b?s(a):p(a),w()}))}function w(){R.$controls.removeClass(K.raw.control_disabled),0===R.gallery.index&&R.$controls.filter(K.control_previous).addClass(L.control_disabled),R.gallery.index===R.gallery.total&&R.$controls.filter(K.control_next).addClass(L.control_disabled)}function x(a){!R.gallery.active||37!==a.keyCode&&39!==a.keyCode?27===a.keyCode&&R.$close.trigger(M.click):(N.killEvent(a),R.$controls.filter(37===a.keyCode?K.control_previous:K.control_next).trigger(M.click))}function y(b){var c=a(b).find("> :first-child").clone();A(c)}function z(b){b+=b.indexOf("?")>-1?"&"+R.requestKey+"=true":"?"+R.requestKey+"=true";var c=a('<iframe class="'+K.raw.iframe+'" src="'+b+'"></iframe>');A(c)}function A(a){R.$content.append(a),B(a),k()}function B(a){R.windowHeight=P.height()-R.paddingVertical,R.windowWidth=P.width()-R.paddingHorizontal,R.objectHeight=a.outerHeight(!0),R.objectWidth=a.outerWidth(!0),R.targetHeight=R.targetHeight||(R.$el?R.$el.data(I+"-height"):null),R.targetWidth=R.targetWidth||(R.$el?R.$el.data(I+"-width"):null),R.maxHeight=R.windowHeight<0?R.minHeight:R.windowHeight,R.isIframe=a.is("iframe"),R.objectMarginTop=0,R.objectMarginLeft=0,R.isMobile||(R.windowHeight-=R.margin,R.windowWidth-=R.margin),R.contentHeight=R.targetHeight?R.targetHeight:R.isIframe||R.isMobile?R.windowHeight:R.objectHeight,R.contentWidth=R.targetWidth?R.targetWidth:R.isIframe||R.isMobile?R.windowWidth:R.objectWidth,(R.isIframe||R.isObject)&&R.isMobile?(R.contentHeight=R.windowHeight,R.contentWidth=R.windowWidth):R.isObject&&(R.contentHeight=R.contentHeight>R.windowHeight?R.windowHeight:R.contentHeight,R.contentWidth=R.contentWidth>R.windowWidth?R.windowWidth:R.contentWidth)}function C(){var b=a('<div class="'+K.raw.error+'"><p>Error Loading Resource</p></div>');R.type="element",R.$meta.remove(),R.$image.off(M.namespace),A(b)}function D(a){if(N.killEvent(a),N.clearTimer(R.touchTimer),!R.isAnimating){var b="undefined"!=typeof a.originalEvent.targetTouches?a.originalEvent.targetTouches[0]:null;R.xStart=b?b.pageX:a.clientX,R.leftPosition=0,R.touchMax=1/0,R.touchMin=-1/0,R.edge=.25*R.contentWidth,0===R.gallery.index&&(R.touchMax=0),R.gallery.index===R.gallery.total&&(R.touchMin=0),R.$lightbox.on(M.touchMove,E).one(M.touchEnd,F)}}function E(a){var b="undefined"!=typeof a.originalEvent.targetTouches?a.originalEvent.targetTouches[0]:null;R.delta=R.xStart-(b?b.pageX:a.clientX),R.delta>20&&N.killEvent(a),R.canSwipe=!0;var c=-R.delta;c<R.touchMin&&(c=R.touchMin,R.canSwipe=!1),c>R.touchMax&&(c=R.touchMax,R.canSwipe=!1),R.$image.css({transform:"translate3D("+c+"px,0,0)"}),R.touchTimer=N.startTimer(R.touchTimer,300,function(){F(a)})}function F(a){N.killEvent(a),N.clearTimer(R.touchTimer),R.$lightbox.off([M.touchMove,M.touchEnd].join("")),R.delta&&(R.$lightbox.addClass(K.raw.animating),R.swipe=!1,R.canSwipe&&(R.delta>R.edge||R.delta<-R.edge)?(R.swipe=!0,R.$image.css(R.delta<=R.leftPosition?{transform:"translate3D("+R.contentWidth+"px,0,0)"}:{transform:"translate3D("+-R.contentWidth+"px,0,0)"})):R.$image.css({transform:"translate3D(0,0,0)"}),R.swipe&&R.$controls.filter(R.delta<=R.leftPosition?K.control_previous:K.control_next).trigger(M.click),N.startTimer(R.resetTimer,R.duration,function(){R.$lightbox.removeClass(K.raw.animating)}))}function G(a){var b=a[0],c=new Image;return"undefined"!=typeof b.naturalHeight?{naturalHeight:b.naturalHeight,naturalWidth:b.naturalWidth}:"img"===b.tagName.toLowerCase()?(c.src=b.src,{naturalHeight:c.height,naturalWidth:c.width}):!1}var H=b.Plugin("lightbox",{widget:!0,defaults:{customClass:"",extensions:["jpg","sjpg","jpeg","png","gif"],fixed:!1,formatter:o,labels:{close:"Close",count:"of",next:"Next",previous:"Previous"},margin:50,minHeight:100,minWidth:100,mobile:!1,retina:!1,requestKey:"boxer",top:0,videoRatio:.5625,videoWidth:600},classes:["loading","animating","fixed","mobile","inline","iframed","open","overlay","close","loading_icon","container","content","image","video","video_wrapper","meta","control","control_previous","control_next","control_disabled","position","position_current","position_total","caption","iframe","error"],events:{open:"open",close:"close"},methods:{_setup:d,_construct:e,_destruct:f,resize:i},utilities:{_initialize:g,close:j}}),I=H.namespace,J=H.defaults,K=H.classes,L=K.raw,M=H.events,N=H.functions,O=b.window,P=b.$window,Q=null,R=null}(jQuery,Formstone);