function mygridapp(){var O='bootstrap',P='begin',Q='gwt.codesvr.mygridapp=',R='gwt.codesvr=',S='mygridapp',T='startup',U='DUMMY',V=0,W=1,X='iframe',Y='javascript:""',Z='position:absolute; width:0; height:0; border:none; left: -1000px;',$=' top: -1000px;',_='CSS1Compat',ab='<!doctype html>',bb='',cb='<html><head><\/head><body><\/body><\/html>',db='undefined',eb='DOMContentLoaded',fb=50,gb='Chrome',hb='eval("',ib='");',jb='script',kb='javascript',lb='moduleStartup',mb='moduleRequested',nb='Failed to load ',ob='head',pb='meta',qb='name',rb='mygridapp::',sb='::',tb='gwt:property',ub='content',vb='=',wb='gwt:onPropertyErrorFn',xb='Bad handler "',yb='" for "gwt:onPropertyErrorFn"',zb='gwt:onLoadErrorFn',Ab='" for "gwt:onLoadErrorFn"',Bb='#',Cb='?',Db='/',Eb='img',Fb='clear.cache.gif',Gb='baseUrl',Hb='mygridapp.nocache.js',Ib='base',Jb='//',Kb='modernie',Lb='MSIE',Mb='Trident',Nb='yes',Ob='none',Pb='selectorCapability',Qb='function',Rb='native',Sb='js',Tb='user.agent',Ub='webkit',Vb='safari',Wb='msie',Xb=10,Yb=11,Zb='ie10',$b=9,_b='ie9',ac=8,bc='ie8',cc='gecko',dc='gecko1_8',ec=2,fc=3,gc=4,hc='selectingPermutation',ic='mygridapp.devmode.js',jc='D307160D9BC60452CA1F2C3E355C3B51',kc=':1',lc=':10',mc=':2',nc=':3',oc=':4',pc=':5',qc=':6',rc=':7',sc=':8',tc=':9',uc=':',vc='.cache.js',wc='link',xc='rel',yc='stylesheet',zc='href',Ac='loadExternalRefs',Bc='styles.css',Cc='end',Dc='http:',Ec='file:',Fc='_gwt_dummy_',Gc='__gwtDevModeHook:mygridapp',Hc='Ignoring non-whitelisted Dev Mode URL: ',Ic=':moduleBase';var o=window;var p=document;r(O,P);function q(){var a=o.location.search;return a.indexOf(Q)!=-1||a.indexOf(R)!=-1}
function r(a,b){if(o.__gwtStatsEvent){o.__gwtStatsEvent({moduleName:S,sessionId:o.__gwtStatsSessionId,subSystem:T,evtGroup:a,millis:(new Date).getTime(),type:b})}}
mygridapp.__sendStats=r;mygridapp.__moduleName=S;mygridapp.__errFn=null;mygridapp.__moduleBase=U;mygridapp.__softPermutationId=V;mygridapp.__computePropValue=null;mygridapp.__getPropMap=null;mygridapp.__installRunAsyncCode=function(){};mygridapp.__gwtStartLoadingFragment=function(){return null};mygridapp.__gwt_isKnownPropertyValue=function(){return false};mygridapp.__gwt_getMetaProperty=function(){return null};var s=null;var t=o.__gwt_activeModules=o.__gwt_activeModules||{};t[S]={moduleName:S};mygridapp.__moduleStartupDone=function(e){var f=t[S].bindings;t[S].bindings=function(){var a=f?f():{};var b=e[mygridapp.__softPermutationId];for(var c=V;c<b.length;c++){var d=b[c];a[d[V]]=d[W]}return a}};var u;function v(){w();return u}
function w(){if(u){return}var a=p.createElement(X);a.src=Y;a.id=S;a.style.cssText=Z+$;a.tabIndex=-1;p.body.appendChild(a);u=a.contentDocument;if(!u){u=a.contentWindow.document}u.open();var b=document.compatMode==_?ab:bb;u.write(b+cb);u.close()}
function A(k){function l(a){function b(){if(typeof p.readyState==db){return typeof p.body!=db&&p.body!=null}return /loaded|complete/.test(p.readyState)}
var c=b();if(c){a();return}function d(){if(!c){c=true;a();if(p.removeEventListener){p.removeEventListener(eb,d,false)}if(e){clearInterval(e)}}}
if(p.addEventListener){p.addEventListener(eb,d,false)}var e=setInterval(function(){if(b()){d()}},fb)}
function m(c){function d(a,b){a.removeChild(b)}
var e=v();var f=e.body;var g;if(navigator.userAgent.indexOf(gb)>-1&&window.JSON){var h=e.createDocumentFragment();h.appendChild(e.createTextNode(hb));for(var i=V;i<c.length;i++){var j=window.JSON.stringify(c[i]);h.appendChild(e.createTextNode(j.substring(W,j.length-W)))}h.appendChild(e.createTextNode(ib));g=e.createElement(jb);g.language=kb;g.appendChild(h);f.appendChild(g);d(f,g)}else{for(var i=V;i<c.length;i++){g=e.createElement(jb);g.language=kb;g.text=c[i];f.appendChild(g);d(f,g)}}}
mygridapp.onScriptDownloaded=function(a){l(function(){m(a)})};r(lb,mb);var n=p.createElement(jb);n.src=k;if(mygridapp.__errFn){n.onerror=function(){mygridapp.__errFn(S,new Error(nb+code))}}p.getElementsByTagName(ob)[V].appendChild(n)}
mygridapp.__startLoadingFragment=function(a){return D(a)};mygridapp.__installRunAsyncCode=function(a){var b=v();var c=b.body;var d=b.createElement(jb);d.language=kb;d.text=a;c.appendChild(d);c.removeChild(d)};function B(){var c={};var d;var e;var f=p.getElementsByTagName(pb);for(var g=V,h=f.length;g<h;++g){var i=f[g],j=i.getAttribute(qb),k;if(j){j=j.replace(rb,bb);if(j.indexOf(sb)>=V){continue}if(j==tb){k=i.getAttribute(ub);if(k){var l,m=k.indexOf(vb);if(m>=V){j=k.substring(V,m);l=k.substring(m+W)}else{j=k;l=bb}c[j]=l}}else if(j==wb){k=i.getAttribute(ub);if(k){try{d=eval(k)}catch(a){alert(xb+k+yb)}}}else if(j==zb){k=i.getAttribute(ub);if(k){try{e=eval(k)}catch(a){alert(xb+k+Ab)}}}}}__gwt_getMetaProperty=function(a){var b=c[a];return b==null?null:b};s=d;mygridapp.__errFn=e}
function C(){function e(a){var b=a.lastIndexOf(Bb);if(b==-1){b=a.length}var c=a.indexOf(Cb);if(c==-1){c=a.length}var d=a.lastIndexOf(Db,Math.min(c,b));return d>=V?a.substring(V,d+W):bb}
function f(a){if(a.match(/^\w+:\/\//)){}else{var b=p.createElement(Eb);b.src=a+Fb;a=e(b.src)}return a}
function g(){var a=__gwt_getMetaProperty(Gb);if(a!=null){return a}return bb}
function h(){var a=p.getElementsByTagName(jb);for(var b=V;b<a.length;++b){if(a[b].src.indexOf(Hb)!=-1){return e(a[b].src)}}return bb}
function i(){var a=p.getElementsByTagName(Ib);if(a.length>V){return a[a.length-W].href}return bb}
function j(){var a=p.location;return a.href==a.protocol+Jb+a.host+a.pathname+a.search+a.hash}
var k=g();if(k==bb){k=h()}if(k==bb){k=i()}if(k==bb&&j()){k=e(p.location.href)}k=f(k);return k}
function D(a){if(a.match(/^\//)){return a}if(a.match(/^[a-zA-Z]+:\/\//)){return a}return mygridapp.__moduleBase+a}
function F(){var f=[];var g=V;function h(a,b){var c=f;for(var d=V,e=a.length-W;d<e;++d){c=c[a[d]]||(c[a[d]]=[])}c[a[e]]=b}
var i=[];var j=[];function k(a){var b=j[a](),c=i[a];if(b in c){return b}var d=[];for(var e in c){d[c[e]]=e}if(s){s(a,d,b)}throw null}
j[Kb]=function(){{var a=o.navigator.userAgent;if(a.indexOf(Lb)==-1&&a.indexOf(Mb)!=-1){return Nb}return Ob}};i[Kb]={none:V,yes:W};j[Pb]=function(){return !/_force_no_native/.test(document.location.search)&&typeof document.querySelectorAll==Qb?Rb:Sb};i[Pb]={js:V,'native':W};j[Tb]=function(){var a=navigator.userAgent.toLowerCase();var b=p.documentMode;if(function(){return a.indexOf(Ub)!=-1}())return Vb;if(function(){return a.indexOf(Wb)!=-1&&(b>=Xb&&b<Yb)}())return Zb;if(function(){return a.indexOf(Wb)!=-1&&(b>=$b&&b<Yb)}())return _b;if(function(){return a.indexOf(Wb)!=-1&&(b>=ac&&b<Yb)}())return bc;if(function(){return a.indexOf(cc)!=-1||b>=Yb}())return dc;return bb};i[Tb]={gecko1_8:V,ie10:W,ie8:ec,ie9:fc,safari:gc};__gwt_isKnownPropertyValue=function(a,b){return b in i[a]};mygridapp.__getPropMap=function(){var a={};for(var b in i){if(i.hasOwnProperty(b)){a[b]=k(b)}}return a};mygridapp.__computePropValue=k;o.__gwt_activeModules[S].bindings=mygridapp.__getPropMap;r(O,hc);if(q()){return D(ic)}var l;try{h([Ob,Sb,dc],jc);h([Ob,Rb,dc],jc+kc);h([Ob,Rb,Vb],jc+lc);h([Nb,Sb,dc],jc+mc);h([Nb,Rb,dc],jc+nc);h([Ob,Sb,Zb],jc+oc);h([Ob,Rb,Zb],jc+pc);h([Ob,Sb,bc],jc+qc);h([Ob,Rb,bc],jc+rc);h([Ob,Sb,_b],jc+sc);h([Ob,Rb,_b],jc+tc);l=f[k(Kb)][k(Pb)][k(Tb)];var m=l.indexOf(uc);if(m!=-1){g=parseInt(l.substring(m+W),Xb);l=l.substring(V,m)}}catch(a){}mygridapp.__softPermutationId=g;return D(l+vc)}
function G(){if(!o.__gwt_stylesLoaded){o.__gwt_stylesLoaded={}}function c(a){if(!__gwt_stylesLoaded[a]){var b=p.createElement(wc);b.setAttribute(xc,yc);b.setAttribute(zc,D(a));p.getElementsByTagName(ob)[V].appendChild(b);__gwt_stylesLoaded[a]=true}}
r(Ac,P);c(Bc);r(Ac,Cc)}
B();mygridapp.__moduleBase=C();t[S].moduleBase=mygridapp.__moduleBase;var H=F();if(o){var I=!!(o.location.protocol==Dc||o.location.protocol==Ec);o.__gwt_activeModules[S].canRedirect=I;function J(){var b=Fc;try{o.sessionStorage.setItem(b,b);o.sessionStorage.removeItem(b);return true}catch(a){return false}}
if(I&&J()){var K=Gc;var L=o.sessionStorage[K];if(!/^http:\/\/(localhost|127\.0\.0\.1)(:\d+)?\/.*$/.test(L)){if(L&&(window.console&&console.log)){console.log(Hc+L)}L=bb}if(L&&!o[K]){o[K]=true;o[K+Ic]=C();var M=p.createElement(jb);M.src=L;var N=p.getElementsByTagName(ob)[V];N.insertBefore(M,N.firstElementChild||N.children[V]);return false}}}G();r(O,Cc);A(H);return true}
mygridapp.succeeded=mygridapp();