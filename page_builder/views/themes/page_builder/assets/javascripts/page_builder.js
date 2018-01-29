"use strict";var _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};!function(t){"function"==typeof define&&define.amd?define(t):"undefined"!=typeof module&&void 0!==module.exports?module.exports=t():"undefined"!=typeof Package?Sortable=t():window.Sortable=t()}(function(){function t(t,e){if(!t||!t.nodeType||1!==t.nodeType)throw"Sortable: `el` must be HTMLElement, and not "+{}.toString.call(t);this.el=t,this.options=e=v({},e),t[k]=this;var n={group:Math.random(),sort:!0,disabled:!1,store:null,handle:null,scroll:!0,scrollSensitivity:30,scrollSpeed:10,draggable:/[uo]l/i.test(t.nodeName)?"li":">*",ghostClass:"sortable-ghost",chosenClass:"sortable-chosen",ignore:"a, img",filter:null,animation:0,setData:function(t,e){t.setData("Text",e.textContent)},dropBubble:!1,dragoverBubble:!1,dataIdAttr:"data-id",delay:0,forceFallback:!1,fallbackClass:"sortable-fallback",fallbackOnBody:!1};for(var i in n)!(i in e)&&(e[i]=n[i]);W(e);for(var a in this)"_"===a.charAt(0)&&(this[a]=this[a].bind(this));this.nativeDraggable=!e.forceFallback&&P,o(t,"mousedown",this._onTapStart),o(t,"touchstart",this._onTapStart),this.nativeDraggable&&(o(t,"dragover",this),o(t,"dragenter",this)),H.push(this._onDragOver),e.store&&this.sort(e.store.get(this))}function e(t){D&&D.state!==t&&(s(D,"display",t?"none":""),!t&&D.state&&S.insertBefore(D,b),D.state=t)}function n(t,e,n){if(t){n=n||M,e=e.split(".");var i=e.shift().toUpperCase(),o=new RegExp("\\s("+e.join("|")+")(?=\\s)","g");do{if(">*"===i&&t.parentNode===n||(""===i||t.nodeName.toUpperCase()==i)&&(!e.length||((" "+t.className+" ").match(o)||[]).length==e.length))return t}while(t!==n&&(t=t.parentNode))}return null}function i(t){t.dataTransfer&&(t.dataTransfer.dropEffect="move"),t.preventDefault()}function o(t,e,n){t.addEventListener(e,n,!1)}function a(t,e,n){t.removeEventListener(e,n,!1)}function r(t,e,n){if(t)if(t.classList)t.classList[n?"add":"remove"](e);else{var i=(" "+t.className+" ").replace(U," ").replace(" "+e+" "," ");t.className=(i+(n?" "+e:"")).replace(U," ")}}function s(t,e,n){var i=t&&t.style;if(i){if(void 0===n)return M.defaultView&&M.defaultView.getComputedStyle?n=M.defaultView.getComputedStyle(t,""):t.currentStyle&&(n=t.currentStyle),void 0===e?n:n[e];e in i||(e="-webkit-"+e),i[e]=n+("string"==typeof n?"":"px")}}function l(t,e,n){if(t){var i=t.getElementsByTagName(e),o=0,a=i.length;if(n)for(;o<a;o++)n(i[o],o);return i}return[]}function d(t,e,n,i,o,a,r){var s=M.createEvent("Event"),l=(t||e[k]).options,d="on"+n.charAt(0).toUpperCase()+n.substr(1);s.initEvent(n,!0,!0),s.to=e,s.from=o||e,s.item=i||e,s.clone=D,s.oldIndex=a,s.newIndex=r,e.dispatchEvent(s),l[d]&&l[d].call(t,s)}function c(t,e,n,i,o,a){var r,s,l=t[k],d=l.options.onMove;return r=M.createEvent("Event"),r.initEvent("move",!0,!0),r.to=e,r.from=t,r.dragged=n,r.draggedRect=i,r.related=o||e,r.relatedRect=a||e.getBoundingClientRect(),t.dispatchEvent(r),d&&(s=d.call(l,r)),s}function h(t){t.draggable=!1}function u(){Y=!1}function f(t,e){var n=t.lastElementChild,i=n.getBoundingClientRect();return(e.clientY-(i.top+i.height)>5||e.clientX-(i.right+i.width)>5)&&n}function p(t){for(var e=t.tagName+t.className+t.src+t.href+t.textContent,n=e.length,i=0;n--;)i+=e.charCodeAt(n);return i.toString(36)}function g(t){var e=0;if(!t||!t.parentNode)return-1;for(;t&&(t=t.previousElementSibling);)"TEMPLATE"!==t.nodeName.toUpperCase()&&e++;return e}function m(t,e){var n,i;return function(){void 0===n&&(n=arguments,i=this,setTimeout(function(){1===n.length?t.call(i,n[0]):t.apply(i,n),n=void 0},e))}}function v(t,e){if(t&&e)for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n]);return t}var b,_,y,D,S,w,T,x,C,E,q,I,N,O,L,B,R,$={},U=/\s+/g,k="Sortable"+(new Date).getTime(),A=window,M=A.document,j=A.parseInt,P=!!("draggable"in M.createElement("div")),X=function(t){return t=M.createElement("x"),t.style.cssText="pointer-events:auto","auto"===t.style.pointerEvents}(),Y=!1,F=Math.abs,H=[],V=m(function(t,e,n){if(n&&e.scroll){var i,o,a,r,s=e.scrollSensitivity,l=e.scrollSpeed,d=t.clientX,c=t.clientY,h=window.innerWidth,u=window.innerHeight;if(x!==n&&(T=e.scroll,x=n,!0===T)){T=n;do{if(T.offsetWidth<T.scrollWidth||T.offsetHeight<T.scrollHeight)break}while(T=T.parentNode)}T&&(i=T,o=T.getBoundingClientRect(),a=(F(o.right-d)<=s)-(F(o.left-d)<=s),r=(F(o.bottom-c)<=s)-(F(o.top-c)<=s)),a||r||(a=(h-d<=s)-(d<=s),r=(u-c<=s)-(c<=s),(a||r)&&(i=A)),$.vx===a&&$.vy===r&&$.el===i||($.el=i,$.vx=a,$.vy=r,clearInterval($.pid),i&&($.pid=setInterval(function(){i===A?A.scrollTo(A.pageXOffset+a*l,A.pageYOffset+r*l):(r&&(i.scrollTop+=r*l),a&&(i.scrollLeft+=a*l))},24)))}},30),W=function(t){var e=t.group;e&&"object"==(void 0===e?"undefined":_typeof(e))||(e=t.group={name:e}),["pull","put"].forEach(function(t){t in e||(e[t]=!0)}),t.groups=" "+e.name+(e.put.join?" "+e.put.join(" "):"")+" "};return t.prototype={constructor:t,_onTapStart:function(t){var e=this,i=this.el,o=this.options,a=t.type,r=t.touches&&t.touches[0],s=(r||t).target,l=s,c=o.filter;if(!("mousedown"===a&&0!==t.button||o.disabled)&&(s=n(s,o.draggable,i))){if(I=g(s),"function"==typeof c){if(c.call(this,t,s,this))return d(e,l,"filter",s,i,I),void t.preventDefault()}else if(c&&(c=c.split(",").some(function(t){if(t=n(l,t.trim(),i))return d(e,t,"filter",s,i,I),!0})))return void t.preventDefault();o.handle&&!n(l,o.handle,i)||this._prepareDragStart(t,r,s)}},_prepareDragStart:function(t,e,n){var i,a=this,s=a.el,d=a.options,c=s.ownerDocument;n&&!b&&n.parentNode===s&&(L=t,S=s,b=n,_=b.parentNode,w=b.nextSibling,O=d.group,i=function(){a._disableDelayedDrag(),b.draggable=!0,r(b,a.options.chosenClass,!0),a._triggerDragStart(e)},d.ignore.split(",").forEach(function(t){l(b,t.trim(),h)}),o(c,"mouseup",a._onDrop),o(c,"touchend",a._onDrop),o(c,"touchcancel",a._onDrop),d.delay?(o(c,"mouseup",a._disableDelayedDrag),o(c,"touchend",a._disableDelayedDrag),o(c,"touchcancel",a._disableDelayedDrag),o(c,"mousemove",a._disableDelayedDrag),o(c,"touchmove",a._disableDelayedDrag),a._dragStartTimer=setTimeout(i,d.delay)):i())},_disableDelayedDrag:function(){var t=this.el.ownerDocument;clearTimeout(this._dragStartTimer),a(t,"mouseup",this._disableDelayedDrag),a(t,"touchend",this._disableDelayedDrag),a(t,"touchcancel",this._disableDelayedDrag),a(t,"mousemove",this._disableDelayedDrag),a(t,"touchmove",this._disableDelayedDrag)},_triggerDragStart:function(t){t?(L={target:b,clientX:t.clientX,clientY:t.clientY},this._onDragStart(L,"touch")):this.nativeDraggable?(o(b,"dragend",this),o(S,"dragstart",this._onDragStart)):this._onDragStart(L,!0);try{M.selection?M.selection.empty():window.getSelection().removeAllRanges()}catch(t){}},_dragStarted:function(){S&&b&&(r(b,this.options.ghostClass,!0),t.active=this,d(this,S,"start",b,S,I))},_emulateDragOver:function(){if(B){if(this._lastX===B.clientX&&this._lastY===B.clientY)return;this._lastX=B.clientX,this._lastY=B.clientY,X||s(y,"display","none");var t=M.elementFromPoint(B.clientX,B.clientY),e=t,n=" "+this.options.group.name,i=H.length;if(e)do{if(e[k]&&e[k].options.groups.indexOf(n)>-1){for(;i--;)H[i]({clientX:B.clientX,clientY:B.clientY,target:t,rootEl:e});break}t=e}while(e=e.parentNode);X||s(y,"display","")}},_onTouchMove:function(e){if(L){t.active||this._dragStarted(),this._appendGhost();var n=e.touches?e.touches[0]:e,i=n.clientX-L.clientX,o=n.clientY-L.clientY,a=e.touches?"translate3d("+i+"px,"+o+"px,0)":"translate("+i+"px,"+o+"px)";R=!0,B=n,s(y,"webkitTransform",a),s(y,"mozTransform",a),s(y,"msTransform",a),s(y,"transform",a),e.preventDefault()}},_appendGhost:function(){if(!y){var t,e=b.getBoundingClientRect(),n=s(b),i=this.options;y=b.cloneNode(!0),r(y,i.ghostClass,!1),r(y,i.fallbackClass,!0),s(y,"top",e.top-j(n.marginTop,10)),s(y,"left",e.left-j(n.marginLeft,10)),s(y,"width",e.width),s(y,"height",e.height),s(y,"opacity","0.8"),s(y,"position","fixed"),s(y,"zIndex","100000"),s(y,"pointerEvents","none"),i.fallbackOnBody&&M.body.appendChild(y)||S.appendChild(y),t=y.getBoundingClientRect(),s(y,"width",2*e.width-t.width),s(y,"height",2*e.height-t.height)}},_onDragStart:function(t,e){var n=t.dataTransfer,i=this.options;this._offUpEvents(),"clone"==O.pull&&(D=b.cloneNode(!0),s(D,"display","none"),S.insertBefore(D,b)),e?("touch"===e?(o(M,"touchmove",this._onTouchMove),o(M,"touchend",this._onDrop),o(M,"touchcancel",this._onDrop)):(o(M,"mousemove",this._onTouchMove),o(M,"mouseup",this._onDrop)),this._loopId=setInterval(this._emulateDragOver,50)):(n&&(n.effectAllowed="move",i.setData&&i.setData.call(this,n,b)),o(M,"drop",this),setTimeout(this._dragStarted,0))},_onDragOver:function(t){var i,o,a,r=this.el,l=this.options,d=l.group,h=d.put,p=O===d,g=l.sort;if(void 0!==t.preventDefault&&(t.preventDefault(),!l.dragoverBubble&&t.stopPropagation()),R=!0,O&&!l.disabled&&(p?g||(a=!S.contains(b)):O.pull&&h&&(O.name===d.name||h.indexOf&&~h.indexOf(O.name)))&&(void 0===t.rootEl||t.rootEl===this.el)){if(V(t,l,this.el),Y)return;if(i=n(t.target,l.draggable,r),o=b.getBoundingClientRect(),a)return e(!0),void(D||w?S.insertBefore(b,D||w):g||S.appendChild(b));if(0===r.children.length||r.children[0]===y||r===t.target&&(i=f(r,t))){if(i){if(i.animated)return;v=i.getBoundingClientRect()}e(p),!1!==c(S,r,b,o,i,v)&&(b.contains(r)||(r.appendChild(b),_=r),this._animate(o,b),i&&this._animate(v,i))}else if(i&&!i.animated&&i!==b&&void 0!==i.parentNode[k]){C!==i&&(C=i,E=s(i),q=s(i.parentNode));var m,v=i.getBoundingClientRect(),T=v.right-v.left,x=v.bottom-v.top,I=/left|right|inline/.test(E.cssFloat+E.display)||"flex"==q.display&&0===q["flex-direction"].indexOf("row"),N=i.offsetWidth>b.offsetWidth,L=i.offsetHeight>b.offsetHeight,B=(I?(t.clientX-v.left)/T:(t.clientY-v.top)/x)>.5,$=i.nextElementSibling,U=c(S,r,b,o,i,v);if(!1!==U){if(Y=!0,setTimeout(u,30),e(p),1===U||-1===U)m=1===U;else if(I){var A=b.offsetTop,M=i.offsetTop;m=A===M?i.previousElementSibling===b&&!N||B&&N:M>A}else m=$!==b&&!L||B&&L;b.contains(r)||(m&&!$?r.appendChild(b):i.parentNode.insertBefore(b,m?$:i)),_=b.parentNode,this._animate(o,b),this._animate(v,i)}}}},_animate:function(t,e){var n=this.options.animation;if(n){var i=e.getBoundingClientRect();s(e,"transition","none"),s(e,"transform","translate3d("+(t.left-i.left)+"px,"+(t.top-i.top)+"px,0)"),e.offsetWidth,s(e,"transition","all "+n+"ms"),s(e,"transform","translate3d(0,0,0)"),clearTimeout(e.animated),e.animated=setTimeout(function(){s(e,"transition",""),s(e,"transform",""),e.animated=!1},n)}},_offUpEvents:function(){var t=this.el.ownerDocument;a(M,"touchmove",this._onTouchMove),a(t,"mouseup",this._onDrop),a(t,"touchend",this._onDrop),a(t,"touchcancel",this._onDrop)},_onDrop:function(e){var n=this.el,i=this.options;clearInterval(this._loopId),clearInterval($.pid),clearTimeout(this._dragStartTimer),a(M,"mousemove",this._onTouchMove),this.nativeDraggable&&(a(M,"drop",this),a(n,"dragstart",this._onDragStart)),this._offUpEvents(),e&&(R&&(e.preventDefault(),!i.dropBubble&&e.stopPropagation()),y&&y.parentNode.removeChild(y),b&&(this.nativeDraggable&&a(b,"dragend",this),h(b),r(b,this.options.ghostClass,!1),r(b,this.options.chosenClass,!1),S!==_?(N=g(b))>=0&&(d(null,_,"sort",b,S,I,N),d(this,S,"sort",b,S,I,N),d(null,_,"add",b,S,I,N),d(this,S,"remove",b,S,I,N)):(D&&D.parentNode.removeChild(D),b.nextSibling!==w&&(N=g(b))>=0&&(d(this,S,"update",b,S,I,N),d(this,S,"sort",b,S,I,N))),t.active&&(null!==N&&-1!==N||(N=I),d(this,S,"end",b,S,I,N),this.save())),S=b=_=y=w=D=T=x=L=B=R=N=C=E=O=t.active=null)},handleEvent:function(t){var e=t.type;"dragover"===e||"dragenter"===e?b&&(this._onDragOver(t),i(t)):"drop"!==e&&"dragend"!==e||this._onDrop(t)},toArray:function(){for(var t,e=[],i=this.el.children,o=0,a=i.length,r=this.options;o<a;o++)t=i[o],n(t,r.draggable,this.el)&&e.push(t.getAttribute(r.dataIdAttr)||p(t));return e},sort:function(t){var e={},i=this.el;this.toArray().forEach(function(t,o){var a=i.children[o];n(a,this.options.draggable,i)&&(e[t]=a)},this),t.forEach(function(t){e[t]&&(i.removeChild(e[t]),i.appendChild(e[t]))})},save:function(){var t=this.options.store;t&&t.set(this)},closest:function(t,e){return n(t,e||this.options.draggable,this.el)},option:function(t,e){var n=this.options;if(void 0===e)return n[t];n[t]=e,"group"===t&&W(n)},destroy:function(){var t=this.el;t[k]=null,a(t,"mousedown",this._onTapStart),a(t,"touchstart",this._onTapStart),this.nativeDraggable&&(a(t,"dragover",this),a(t,"dragenter",this)),Array.prototype.forEach.call(t.querySelectorAll("[draggable]"),function(t){t.removeAttribute("draggable")}),H.splice(H.indexOf(this._onDragOver),1),this._onDrop(),this.el=t=null}},t.utils={on:o,off:a,css:s,find:l,is:function(t,e){return!!n(t,e,t)},extend:v,throttle:m,closest:n,toggleClass:r,index:g},t.create=function(e,n){return new t(e,n)},t.version="1.4.2",t});var _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};!function(t){"function"==typeof define&&define.amd?define(["jquery"],t):t("object"===("undefined"==typeof exports?"undefined":_typeof(exports))?require("jquery"):jQuery)}(function(t){function e(n,i){this.$element=t(n),this.options=t.extend({},e.DEFAULTS,t.isPlainObject(i)&&i),this.init()}var n=t("body"),i="qor.pagebuilder",o="click."+i;return e.prototype={constructor:e,init:function(){var e=this.$element,n=e.data(),i=e.parents(".qor-dragable"),o=e.data("placeholder"),a=this,r={minimumResultsForSearch:8,dropdownParent:e.parent()};this.$selector=i.find(".qor-dragable__list-data"),this.$sortableList=i.find(".qor-dragable__list"),this.$parent=i;var s=i.find(".qor-dragable__list")[0];this.sortable=window.Sortable.create(s,{animation:150,handle:".qor-dragable__list-handle",filter:".qor-dragable__list-delete",dataIdAttr:"data-index",onFilter:function(e){var n=t(e.item),i=n.data("index");n.remove(),a.removeItemsFromList(i)},onUpdate:function(){a.renderOption()}}),n.remoteData&&(r.ajax=t.fn.select2.ajaxCommonOptions(n),r.templateResult=function(n){var i=e.parents(".qor-field").find('[name="select2-result-template"]');return t.fn.select2.ajaxFormatResult(n,i)},r.templateSelection=function(n){if(n.loading)return n.text;var i=e.parents(".qor-field").find('[name="select2-selection-template"]');return t.fn.select2.ajaxFormatResult(n,i)}),e.is("select")&&(e.on("change",function(){setTimeout(function(){i.find(".select2-selection__choice").hide()},1),t(".select2-search__field").attr("placeholder",o)}).on("select2:select",function(t){a.addItems(t.params.data)}).on("select2:unselect",function(t){a.removeItems(t.params.data)}),e.select2(r),i.find(".select2-container").hide(),i.find(".select2-selection__choice").hide(),t(".select2-search__field").attr("placeholder",o)),this.bind()},bind:function(){this.$parent.on(o,".qor-dragable__button-add",this.show.bind(this)).on(o,'[data-select-modal="many_sortable"]',this.openSortable.bind(this))},unbind:function(){this.$parent.off(o)},openSortable:function(e){var i=t(e.target).data();this.BottomSheets=n.data("qor.bottomsheets"),this.selectListingUrl=i.selectListingUrl,i.ingoreSubmit=!0,i.url=i.selectListingUrl,i.selectDefaultCreating&&(i.url=i.selectCreatingUrl),this.BottomSheets.open(i,this.handleBottomSelect.bind(this))},show:function(){var t=this.$parent.find(".select2-container");t.show(),this.$parent.find(".qor-dragable__button-add").hide(),setTimeout(function(){t.find(".select2-search__field").click()},100)},handleBottomSelect:function(t){var e={onSelect:this.onSelectResults.bind(this),onSubmit:this.onSubmitResults.bind(this)};t.qorSelectCore(e).addClass("qor-bottomsheets__select-many qor-bottomsheets__pagebuilder"),this.$bottomsheets=t,this.initTab()},onSelectResults:function(t){this.addItems(this.collectData(t))},onSubmitResults:function(t){this.addItems(this.collectData(t),!0)},collectData:function(e){var n=this.$element.data("remote-data-primary-key"),i=t.extend({},e);return i.SortableID=e[n]||e.primaryKey||e.Id||e.ID,i.SortableValue=e.Name||e.text||e.Text||e.Title||e.Code||i.SortableID,i},renderHint:function(e){return window.Mustache.render(t('[name="qor-pagebuilder-hint"]').html(),e)},initTab:function(){var t=this.$element.data(),e=this.$bottomsheets,n=e.find(".qor-bottomsheets__body");e.addClass("has-tab"),e.find(".qor-bottomsheets__title").html(t.selectTitle),n.html(""),n.append('<ul class="qor-bottomsheets__tab clearfix">\n                    <li class="is-active" data-tab-type="create" data-tab-url="'+t.selectCreatingUrl+'">'+t.selectCreatingTitle+'</li>\n                    <li data-tab-url="'+t.selectListingUrl+'" data-tab-type="list">'+t.selectListingTitle+'</li>\n                </ul>\n                <div class="qor-bottomsheets__tab-content"></div>'),e.on(o,".qor-bottomsheets__tab li",this.switchResource.bind(this)),e.find(".is-active").click()},switchResource:function(e){var n=t(e.target),i=n.data("tab-url"),o=this.$bottomsheets;o.find(".qor-bottomsheets__tab li").removeClass("is-active"),n.addClass("is-active"),t.ajax(i,{method:"GET",dataType:"html",success:function(e){o.find(".qor-bottomsheets__tab-content").attr("content-type",n.data("tab-type")),o.find(".qor-bottomsheets__tab-content").html(t(e).find(".mdl-layout__content.qor-page").html()).trigger("enable")}})},renderItem:function(t){return window.Mustache.render(e.LIST_HTML,t)},renderOption:function(){var t=this.sortable.toArray(),n=this.$parent.find(".qor-dragable__list-data");n.empty(),window._.each(t,function(t){n.append(window.Mustache.render(e.OPTION_HTML,{value:t}))})},removeItems:function(t){this.$parent.find(".qor-dragable__list").find('li[data-index="'+t.id+'"]').remove(),this.renderOption()},removeItemsFromList:function(){this.renderOption()},addItems:function(e,n){e.PreviewIcon||(e.PreviewIcon=e.$clickElement.find(".qor-preview-icon").parent().html()),e.EditUrl=this.selectListingUrl+"/"+e.SortableID,this.$sortableList.append(this.renderItem(e)),this.renderOption(),n&&this.$bottomsheets.find(".qor-widget__cancel").click(),this.$bottomsheets.remove(),t(".qor-bottomsheets").is(":visible")||t("body").removeClass("qor-bottomsheets-open")},destroy:function(){var t=this.$element;this.sortable.destroy(),this.unbind(),t.is("select")&&t.select2("destroy"),t.removeData(i)}},e.DEFAULTS={},e.LIST_HTML='<li data-index="[[SortableID]]" data-value="[[SortableValue]]">\n                                    [[#PreviewIcon]][[&PreviewIcon]][[/PreviewIcon]]\n                                    <span>\n                                        <a href="[[EditUrl]]" data-url="[[EditUrl]]" data-ajax-mute="true" data-bottomsheet-classname="qor_pagebuilder--edit_widget">[[SortableValue]]</a></span>\n                                    <div><i class="material-icons qor-dragable__list-delete">clear</i><i class="material-icons qor-dragable__list-handle">drag_handle</i></div>\n                                </li>',e.OPTION_HTML='<option selected value="[[value]]"></option>',e.plugin=function(n){return this.each(function(){var o,a=t(this),r=a.data(i);if(!r){if(/destroy/.test(n))return;a.data(i,r=new e(this,n))}"string"==typeof n&&t.isFunction(o=r[n])&&o.apply(r)})},t(function(){var n='[data-toggle="qor.pagebuilder"]';t(document).on("disable.qor.pagebuilder",function(i){e.plugin.call(t(n,i.target),"destroy")}).on("enable.qor.pagebuilder",function(i){e.plugin.call(t(n,i.target))}).triggerHandler("enable.qor.pagebuilder")}),e});