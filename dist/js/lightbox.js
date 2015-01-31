/*! Formstone v0.0.1 [lightbox.js] 2015-01-31 | MIT License | formstone.it */

!function(a,b,c){"use strict";function d(){P=b.$body,Q=a("html, body")}function e(){R&&j()}function f(a){this.on(L.click,a,i)}function g(){k(),this.off(L.namespace)}function h(b,c){b instanceof a&&i.apply(N,[{data:a.extend({},{$object:b},I,c||{})}])}function i(c){if(!R){var d=c.data,e=d.$el,f=d.$object,g=e&&e[0].href?e[0].href||"":"",h=e&&e[0].hash?e[0].hash||"":"",i=g.toLowerCase().split(".").pop().split(/\#|\?/),j=i[0],l=e?e.data(H+"-type"):"",m="image"===l||a.inArray(j,d.extensions)>-1||"data:image"===g.substr(0,10),o=g.indexOf("youtube.com/embed")>-1||g.indexOf("player.vimeo.com/video")>-1,p="url"===l||!m&&!o&&"http"===g.substr(0,4)&&!h,r="element"===l||!m&&!o&&!p&&"#"===h.substr(0,1),s="undefined"!=typeof f;if(r&&(g=h),!(m||o||p||r||s))return;if(M.killEvent(c),R=a.extend({},{visible:!1,gallery:{active:!1},isMobile:b.isMobile||d.mobile,isAnimating:!0,oldContentHeight:0,oldContentWidth:0},d),R.margin*=2,R.type=m?"image":o?"video":"element",m||o){var u=e.data(H+"-gallery");u&&(R.gallery.active=!0,R.gallery.id=u,R.gallery.$items=a("a[data-lightbox-gallery= "+R.gallery.id+"], a[rel= "+R.gallery.id+"]"),R.gallery.index=R.gallery.$items.index(R.$el),R.gallery.total=R.gallery.$items.length-1)}var v="";R.isMobile||(v+='<div class="'+[J.raw.overlay,R.customClass].join(" ")+'"></div>');var C=[J.raw.base,J.raw.loading,J.raw.animating,R.customClass];R.fixed&&C.push(J.raw.fixed),R.isMobile&&C.push(J.raw.mobile),p&&C.push(J.raw.iframed),(r||s)&&C.push(J.raw.inline),v+='<div class="'+C.join(" ")+'">',v+='<button type="button" class="'+J.raw.close+'">'+R.labels.close+"</button>",v+='<span class="'+J.raw.loading_icon+'"></span>',v+='<div class="'+J.raw.container+'">',v+='<div class="'+J.raw.content+'">',(m||o)&&(v+='<div class="'+J.raw.meta+'">',R.gallery.active&&(v+='<button type="button" class="'+[J.raw.control,J.raw.control_previous].join(" ")+'">'+R.labels.previous+"</button>",v+='<button type="button" class="'+[J.raw.control,J.raw.control_next].join(" ")+'">'+R.labels.next+"</button>",v+='<p class="'+J.raw.position+'"',R.gallery.total<1&&(v+=' style="display: none;"'),v+=">",v+='<span class="'+J.raw.position_current+'">'+(R.gallery.index+1)+"</span> ",v+=R.labels.count,v+=' <span class="'+J.raw.position_total+'">'+(R.gallery.total+1)+"</span>",v+="</p>"),v+='<div class="'+J.raw.caption+'">',v+=R.formatter.call(e,d),v+="</div></div>"),v+="</div></div></div>",P.append(v),R.$overlay=a(J.overlay),R.$lightbox=a(J.base),R.$close=a(J.close),R.$container=a(J.container),R.$content=a(J.content),R.$meta=a(J.meta),R.$position=a(J.position),R.$caption=a(J.caption),R.$controls=a(J.control),R.paddingVertical=R.isMobile?R.$close.outerHeight()/2:parseInt(R.$lightbox.css("paddingTop"),10)+parseInt(R.$lightbox.css("paddingBottom"),10),R.paddingHorizontal=R.isMobile?0:parseInt(R.$lightbox.css("paddingLeft"),10)+parseInt(R.$lightbox.css("paddingRight"),10),R.contentHeight=R.$lightbox.outerHeight()-R.paddingVertical,R.contentWidth=R.$lightbox.outerWidth()-R.paddingHorizontal,R.controlHeight=R.$controls.outerHeight(),n(),R.gallery.active&&x(),O.on(L.keyDown,y),P.on(L.clickTouchStart,[J.overlay,J.close].join(", "),k),R.gallery.active&&R.$lightbox.on(L.clickTouchStart,J.control,w),R.$lightbox.transition({property:"opacity"},function(){m?q(g):o?t(g):p?A(g):r?z(g):s&&B(R.$object)}).addClass(J.raw.open),R.$overlay.addClass(J.raw.open)}}function j(a){"object"!=typeof a&&(R.targetHeight=arguments[0],R.targetWidth=arguments[1]),"element"===R.type?C(R.$content.find("> :first-child")):"image"===R.type?r():"video"===R.type&&u(),m()}function k(a){M.killEvent(a),R&&(R.$lightbox.transition("destroy"),R.$container.transition("destroy"),R.$lightbox.addClass(J.raw.animating).transition({property:"opacity"},function(){R.$lightbox.off(L.namespace),R.$container.off(L.namespace),O.off(L.namespace),P.off(L.namespace),R.$overlay.remove(),R.$lightbox.remove(),R=null,O.trigger(L.close)}),R.$lightbox.removeClass(J.raw.open),R.$overlay.removeClass(J.raw.open),R.isMobile&&Q.removeClass(K.lock))}function l(){{var a=o();R.isMobile?0:R.duration}R.isMobile||R.$controls.css({marginTop:(R.contentHeight-R.controlHeight-R.metaHeight)/2}),!R.visible&&R.isMobile&&R.gallery.active&&R.$content.touch({axis:"x",swipe:!0}).on(L.swipe,E),R.$lightbox.transition({property:R.contentHeight!==R.oldContentHeight?"height":"width"},function(){R.$container.transition({property:"opacity"},function(){R.$lightbox.removeClass(J.raw.animating),R.isAnimating=!1}),R.$lightbox.removeClass(J.raw.loading),R.visible=!0,O.trigger(L.open),R.gallery.active&&v()}),R.isMobile||R.$lightbox.css({height:R.contentHeight+R.paddingVertical,width:R.contentWidth+R.paddingHorizontal,top:R.fixed?0:a.top});var b=R.oldContentHeight!==R.contentHeight||R.oldContentWidth!==R.contentWidth;(R.isMobile||!b)&&R.$lightbox.transition("resolve"),R.oldContentHeight=R.contentHeight,R.oldContentWidth=R.contentWidth,R.isMobile&&Q.addClass(K.lock)}function m(){if(R.visible&&!R.isMobile){var a=o();R.$controls.css({marginTop:(R.contentHeight-R.controlHeight-R.metaHeight)/2}),R.$lightbox.css({height:R.contentHeight+R.paddingVertical,width:R.contentWidth+R.paddingHorizontal,top:R.fixed?0:a.top})}}function n(){var a=o();R.$lightbox.css({top:R.fixed?0:a.top})}function o(){if(R.isMobile)return{left:0,top:0};var a={left:(O.width()-R.contentWidth-R.paddingHorizontal)/2,top:R.top<=0?(O.height()-R.contentHeight-R.paddingVertical)/2:R.top};return R.fixed!==!0&&(a.top+=O.scrollTop()),a}function p(){var a=this.attr("title");return a!==c&&""!==a.trim()?'<p class="caption">'+a.trim()+"</p>":""}function q(b){R.$image=a("<img>"),R.$image.one(L.load,function(){var a=F(R.$image);R.naturalHeight=a.naturalHeight,R.naturalWidth=a.naturalWidth,R.retina&&(R.naturalHeight/=2,R.naturalWidth/=2),R.$content.prepend(R.$image),""===R.$caption.html()?R.$caption.hide():R.$caption.show(),r(),l()}).error(D).attr("src",b).addClass(J.raw.image),(R.$image[0].complete||4===R.$image[0].readyState)&&R.$image.trigger(L.load)}function r(){var a=0;for(R.windowHeight=R.viewportHeight=O.height()-R.paddingVertical,R.windowWidth=R.viewportWidth=O.width()-R.paddingHorizontal,R.contentHeight=1/0,R.contentWidth=1/0,R.imageMarginTop=0,R.imageMarginLeft=0;R.contentHeight>R.viewportHeight&&2>a;)R.imageHeight=0===a?R.naturalHeight:R.$image.outerHeight(),R.imageWidth=0===a?R.naturalWidth:R.$image.outerWidth(),R.metaHeight=0===a?0:R.metaHeight,0===a&&(R.ratioHorizontal=R.imageHeight/R.imageWidth,R.ratioVertical=R.imageWidth/R.imageHeight,R.isWide=R.imageWidth>R.imageHeight),R.imageHeight<R.minHeight&&(R.minHeight=R.imageHeight),R.imageWidth<R.minWidth&&(R.minWidth=R.imageWidth),R.isMobile?(R.$meta.css({width:R.windowWidth}),R.metaHeight=R.$meta.outerHeight(!0),R.contentHeight=R.viewportHeight-R.paddingVertical,R.contentWidth=R.viewportWidth-R.paddingHorizontal,s(),R.imageMarginTop=(R.contentHeight-R.targetImageHeight-R.metaHeight)/2,R.imageMarginLeft=(R.contentWidth-R.targetImageWidth)/2):(0===a&&(R.viewportHeight-=R.margin+R.paddingVertical,R.viewportWidth-=R.margin+R.paddingHorizontal),R.viewportHeight-=R.metaHeight,s(),R.contentHeight=R.targetImageHeight,R.contentWidth=R.targetImageWidth),R.$meta.css({width:R.contentWidth}),R.$image.css({height:R.targetImageHeight,width:R.targetImageWidth,marginTop:R.imageMarginTop,marginLeft:R.imageMarginLeft}),R.isMobile||(R.metaHeight=R.$meta.outerHeight(!0),R.contentHeight+=R.metaHeight),a++}function s(){var a=R.isMobile?R.contentHeight-R.metaHeight:R.viewportHeight,b=R.isMobile?R.contentWidth:R.viewportWidth;R.isWide?(R.targetImageWidth=b,R.targetImageHeight=R.targetImageWidth*R.ratioHorizontal,R.targetImageHeight>a&&(R.targetImageHeight=a,R.targetImageWidth=R.targetImageHeight*R.ratioVertical)):(R.targetImageHeight=a,R.targetImageWidth=R.targetImageHeight*R.ratioVertical,R.targetImageWidth>b&&(R.targetImageWidth=b,R.targetImageHeight=R.targetImageWidth*R.ratioHorizontal)),(R.targetImageWidth>R.imageWidth||R.targetImageHeight>R.imageHeight)&&(R.targetImageHeight=R.imageHeight,R.targetImageWidth=R.imageWidth),(R.targetImageWidth<R.minWidth||R.targetImageHeight<R.minHeight)&&(R.targetImageWidth<R.minWidth?(R.targetImageWidth=R.minWidth,R.targetImageHeight=R.targetImageWidth*R.ratioHorizontal):(R.targetImageHeight=R.minHeight,R.targetImageWidth=R.targetImageHeight*R.ratioVertical))}function t(b){R.$videoWrapper=a('<div class="'+J.raw.videoWrapper+'"></div>'),R.$video=a('<iframe class="'+J.raw.video+'" seamless="seamless"></iframe>'),R.$video.attr("src",b).addClass(J.raw.video).prependTo(R.$videoWrapper),R.$content.prepend(R.$videoWrapper),u(),l()}function u(){R.windowHeight=R.viewportHeight=R.contentHeight=O.height()-R.paddingVertical,R.windowWidth=R.viewportWidth=R.contentWidth=O.width()-R.paddingHorizontal,R.videoMarginTop=0,R.videoMarginLeft=0,R.isMobile?(R.$meta.css({width:R.windowWidth}),R.metaHeight=R.$meta.outerHeight(!0),R.viewportHeight-=R.metaHeight,R.targetVideoWidth=R.viewportWidth,R.targetVideoHeight=R.targetVideoWidth*R.videoRatio,R.targetVideoHeight>R.viewportHeight&&(R.targetVideoHeight=R.viewportHeight,R.targetVideoWidth=R.targetVideoHeight/R.videoRatio),R.videoMarginTop=(R.viewportHeight-R.targetVideoHeight)/2,R.videoMarginLeft=(R.viewportWidth-R.targetVideoWidth)/2):(R.viewportHeight=R.windowHeight-R.margin,R.viewportWidth=R.windowWidth-R.margin,R.targetVideoWidth=R.videoWidth>R.viewportWidth?R.viewportWidth:R.videoWidth,R.targetVideoWidth<R.minWidth&&(R.targetVideoWidth=R.minWidth),R.targetVideoHeight=R.targetVideoWidth*R.videoRatio,R.contentHeight=R.targetVideoHeight,R.contentWidth=R.targetVideoWidth),R.$meta.css({width:R.contentWidth}),R.$videoWrapper.css({height:R.targetVideoHeight,width:R.targetVideoWidth,marginTop:R.videoMarginTop,marginLeft:R.videoMarginLeft}),R.isMobile||(R.metaHeight=R.$meta.outerHeight(!0),R.contentHeight=R.targetVideoHeight+R.metaHeight)}function v(){var b="";R.gallery.index>0&&(b=R.gallery.$items.eq(R.gallery.index-1).attr("href"),b.indexOf("youtube.com/embed")<0&&b.indexOf("player.vimeo.com/video")<0&&a('<img src="'+b+'">')),R.gallery.index<R.gallery.total&&(b=R.gallery.$items.eq(R.gallery.index+1).attr("href"),b.indexOf("youtube.com/embed")<0&&b.indexOf("player.vimeo.com/video")<0&&a('<img src="'+b+'">'))}function w(b){M.killEvent(b);var c=a(b.currentTarget);R.isAnimating||c.hasClass(J.raw.control_disabled)||(R.isAnimating=!0,R.gallery.index+=c.hasClass(J.raw.control_next)?1:-1,R.gallery.index>R.gallery.total&&(R.gallery.index=R.gallery.total),R.gallery.index<0&&(R.gallery.index=0),R.$lightbox.addClass([J.raw.loading,J.raw.animating].join(" ")),R.$container.transition({property:"opacity"},function(){"undefined"!=typeof R.$image&&R.$image.remove(),"undefined"!=typeof R.$videoWrapper&&R.$videoWrapper.remove(),R.$el=R.gallery.$items.eq(R.gallery.index),R.$caption.html(R.formatter.call(R.$el,R)),R.$position.find(J.position_current).html(R.gallery.index+1);var a=R.$el.attr("href"),b=a.indexOf("youtube.com/embed")>-1||a.indexOf("player.vimeo.com/video")>-1;b?t(a):q(a),x()}))}function x(){R.$controls.removeClass(J.raw.control_disabled),0===R.gallery.index&&R.$controls.filter(J.control_previous).addClass(K.control_disabled),R.gallery.index===R.gallery.total&&R.$controls.filter(J.control_next).addClass(K.control_disabled)}function y(a){!R.gallery.active||37!==a.keyCode&&39!==a.keyCode?27===a.keyCode&&R.$close.trigger(L.click):(M.killEvent(a),R.$controls.filter(37===a.keyCode?J.control_previous:J.control_next).trigger(L.click))}function z(b){var c=a(b).find("> :first-child").clone();B(c)}function A(b){b+=b.indexOf("?")>-1?"&"+R.requestKey+"=true":"?"+R.requestKey+"=true";var c=a('<iframe class="'+J.raw.iframe+'" src="'+b+'"></iframe>');B(c)}function B(a){R.$content.append(a),C(a),l()}function C(a){R.windowHeight=O.height()-R.paddingVertical,R.windowWidth=O.width()-R.paddingHorizontal,R.objectHeight=a.outerHeight(!0),R.objectWidth=a.outerWidth(!0),R.targetHeight=R.targetHeight||(R.$el?R.$el.data(H+"-height"):null),R.targetWidth=R.targetWidth||(R.$el?R.$el.data(H+"-width"):null),R.maxHeight=R.windowHeight<0?R.minHeight:R.windowHeight,R.isIframe=a.is("iframe"),R.objectMarginTop=0,R.objectMarginLeft=0,R.isMobile||(R.windowHeight-=R.margin,R.windowWidth-=R.margin),R.contentHeight=R.targetHeight?R.targetHeight:R.isIframe||R.isMobile?R.windowHeight:R.objectHeight,R.contentWidth=R.targetWidth?R.targetWidth:R.isIframe||R.isMobile?R.windowWidth:R.objectWidth,(R.isIframe||R.isObject)&&R.isMobile?(R.contentHeight=R.windowHeight,R.contentWidth=R.windowWidth):R.isObject&&(R.contentHeight=R.contentHeight>R.windowHeight?R.windowHeight:R.contentHeight,R.contentWidth=R.contentWidth>R.windowWidth?R.windowWidth:R.contentWidth)}function D(){var b=a('<div class="'+J.raw.error+'"><p>Error Loading Resource</p></div>');R.type="element",R.$meta.remove(),R.$image.off(L.namespace),B(b)}function E(a){R.$controls.filter("left"===a.directionX?J.control_next:J.control_previous).trigger(L.click)}function F(a){var b=a[0],c=new Image;return"undefined"!=typeof b.naturalHeight?{naturalHeight:b.naturalHeight,naturalWidth:b.naturalWidth}:"img"===b.tagName.toLowerCase()?(c.src=b.src,{naturalHeight:c.height,naturalWidth:c.width}):!1}var G=b.Plugin("lightbox",{widget:!0,defaults:{customClass:"",extensions:["jpg","sjpg","jpeg","png","gif"],fixed:!1,formatter:p,labels:{close:"Close",count:"of",next:"Next",previous:"Previous"},margin:50,minHeight:100,minWidth:100,mobile:!1,retina:!1,requestKey:"boxer",top:0,videoRatio:.5625,videoWidth:600},classes:["loading","animating","fixed","mobile","inline","iframed","open","overlay","close","loading_icon","container","content","image","video","video_wrapper","meta","control","control_previous","control_next","control_disabled","position","position_current","position_total","caption","iframe","error","lock"],events:{open:"open",close:"close",swipe:"swipe"},methods:{_setup:d,_construct:f,_destruct:g,_resize:e,resize:j},utilities:{_initialize:h,close:k}}),H=G.namespace,I=G.defaults,J=G.classes,K=J.raw,L=G.events,M=G.functions,N=b.window,O=b.$window,P=null,Q=null,R=null}(jQuery,Formstone);