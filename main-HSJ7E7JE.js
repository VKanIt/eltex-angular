import{a as Te,c as Ne}from"./chunk-MTLB64L4.js";import{a as w,b as Pe}from"./chunk-3YR6N5UW.js";import{a as Fe,b as Le,c as He,d as Xe,f as Ge,h as F,i as S,j as L,k as je}from"./chunk-7IWI6RVV.js";import{G as Ae,P as g}from"./chunk-THNXNBAS.js";import"./chunk-4F7KV6NL.js";import{f as ve,h as _e,i as ee,j as Ce,k as Ee,l as R,m as Se,p as xe,q as Me,r as Oe,s as Be,u as Ie,v as Re,w as we,x as De,y as ke}from"./chunk-JA35RNUH.js";import{$b as ge,Ba as le,Cb as P,Db as T,Eb as N,Fb as de,Gb as c,Hb as m,Ib as b,Wa as O,_b as Z,a as K,aa as l,ac as fe,bb as me,bc as p,da as ne,ea as oe,ec as be,fa as a,fc as Y,h as d,hb as E,nc as he,oa as I,qa as ie,ra as ae,ua as se,va as v,vb as ce,vc as ye,w as C,wb as pe,xb as ue,yc as W}from"./chunk-KFF767DV.js";var ze=[{path:"",loadComponent:()=>import("./chunk-UT2T7KIJ.js").then(t=>t.Index),title:"\u0413\u043B\u0430\u0432\u043D\u0430\u044F"},{path:"blogs",loadComponent:()=>import("./chunk-TILBTHPE.js").then(t=>t.Blogs),children:[{path:"",title:"\u0411\u043B\u043E\u0433",loadComponent:()=>import("./chunk-G7LPBHRG.js").then(t=>t.BlogsList)},{path:":id",loadComponent:()=>import("./chunk-GUNOBJF3.js").then(t=>t.Blog)}]},{path:"**",loadComponent:()=>import("./chunk-ZHK3XTMU.js").then(t=>t.PageNotFound)}];var We=(t,r,e)=>{let n=["POST","PUT","PATCH"].indexOf(t.method.toUpperCase())!==-1,o=s=>["variables","extensions"].indexOf(s.toLowerCase())!==-1,i=t.body.length,u=t.options&&t.options.useMultipart,B;if(u){if(i)return new d(s=>s.error(new Error("File upload is not available when combined with Batching")));if(!n)return new d(s=>s.error(new Error("File upload is not available when GET is used")));if(!e)return new d(s=>s.error(new Error(`To use File upload you need to pass "extractFiles" function from "extract-files" library to HttpLink's options`)));B=e(t.body),u=!!B.files.size}let _={};if(i){if(!n)return new d(s=>s.error(new Error("Batching is not available for GET requests")));_={body:t.body}}else{let s=u?B.clone:t.body;n?_={body:s}:_={params:Object.keys(t.body).reduce((x,h)=>{let M=t.body[h];return x[h]=o(h)?JSON.stringify(M):M,x},{})}}if(u&&n){let s=new FormData;s.append("operations",JSON.stringify(_.body));let k={},x=B.files,h=0;x.forEach(M=>{k[++h]=M}),s.append("map",JSON.stringify(k)),h=0,x.forEach((M,A)=>{s.append(++h+"",A,A.name)}),_.body=s}return r.request(t.method,t.url,K(K({observe:"response",responseType:"json",reportProgress:!1},_),t.options))},et=t=>t instanceof ee?t:new ee(t);var tt=(t,r)=>t&&r?r.keys().reduce((e,n)=>e.set(n,r.getAll(n)),t):r||t,Ve=(t,r)=>t&&r?[...t.keys()].reduce((e,n)=>e.set(n,t.get(n)),r):r||t;function rt(...t){return t.find(r=>typeof r<"u")}function nt(t){let r=et(t.headers);if(t.clientAwareness){let{name:e,version:n}=t.clientAwareness;e&&!r.has("apollographql-client-name")&&(r=r.set("apollographql-client-name",e)),n&&!r.has("apollographql-client-version")&&(r=r.set("apollographql-client-version",n))}return r}var ot={batchInterval:10,batchMax:10,uri:"graphql",method:"POST",withCredentials:!1,includeQuery:!0,includeExtensions:!1,useMultipart:!1};function D(t,r,e){return rt(t[e],r[e],ot[e])}function it(t){let r={status:t.status,statusText:t.statusText,ok:t.ok,url:t.url||"",headers:new Headers,type:"error",redirected:!1};t.headers.keys().forEach(n=>{let o=t.headers.getAll(n);o&&o.forEach(i=>r.headers.append(n,i))});let e=typeof t.error=="string"?t.error:JSON.stringify(t.error||{});return t.status>=300?new Xe(`Response not successful: Received status code ${t.status}`,{response:r,bodyText:e}):new Error(t.message)}var te=class extends Le{httpClient;options;requester;print=Fe;constructor(r,e){super(),this.httpClient=r,this.options=e,this.options.operationPrinter&&(this.print=this.options.operationPrinter),this.requester=n=>new d(o=>{let i=n.getContext(),u=D(i,this.options,"method"),B=D(i,this.options,"includeQuery"),_=D(i,this.options,"includeExtensions"),s=D(i,this.options,"uri"),k=D(i,this.options,"withCredentials"),x=D(i,this.options,"useMultipart"),h=this.options.useGETForQueries===!0,M=Ve(i.httpContext,Ve(this.options.httpContext,new Ce)),A=n.query.definitions.some(y=>y.kind==="OperationDefinition"&&y.operation==="query");h&&A&&(u="GET");let Ye=tt(this.options.headers,nt(i)),$={method:u,url:typeof s=="function"?s(n):s,body:{operationName:n.operationName,variables:n.variables},options:{withCredentials:k,useMultipart:x,headers:Ye,context:M}};_&&($.body.extensions=n.extensions),B&&($.body.query=this.print(n.query));let re=We($,this.httpClient,this.options.extractFiles).subscribe({next:y=>{n.setContext({response:y}),o.next(y.body)},error:y=>{y instanceof Ee?o.error(it(y)):o.error(y)},complete:()=>o.complete()});return()=>{re.closed||re.unsubscribe()}})}request(r){return this.requester(r)}},Ue=(()=>{class t{httpClient;constructor(e){this.httpClient=e}create(e){return new te(this.httpClient,e)}static \u0275fac=function(n){return new(n||t)(oe(R))};static \u0275prov=l({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var qe={providers:[se(),ke(ze),Se(),{provide:je,useValue:S},{provide:he,useValue:"ru"},{provide:Te,useValue:{horizontalPosition:"end",verticalPosition:"top",duration:3e3}},Ge(()=>({link:a(Ue).create({uri:"/graphql"}),cache:new He}))]};var Je=()=>({exact:!0}),H=class t{static \u0275fac=function(e){return new(e||t)};static \u0275cmp=E({type:t,selectors:[["app-header"]],decls:11,vars:4,consts:[[1,"container","header"],[1,"header__title"],[1,"header__nav"],["routerLink","/","routerLinkActive","active",1,"link",3,"routerLinkActiveOptions"],["routerLink","/blogs/","routerLinkActive","active",1,"link",3,"routerLinkActiveOptions"]],template:function(e,n){e&1&&(T(0,"header",0)(1,"p",1),p(2," \u041C\u043E\u0435 \u043F\u043E\u0440\u0442\u0444\u043E\u043B\u0438\u043E "),N(),T(3,"nav",2)(4,"ul")(5,"li")(6,"a",3),p(7," \u041E\u0431\u043E \u043C\u043D\u0435 "),N()(),T(8,"li")(9,"a",4),p(10," \u0411\u043B\u043E\u0433 "),N()()()()()),e&2&&(O(6),P("routerLinkActiveOptions",Y(2,Je)),O(3),P("routerLinkActiveOptions",Y(3,Je)))},dependencies:[we,De],styles:[".header[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;padding-top:var(--p-m-2);padding-bottom:var(--p-m-4)}.header__title[_ngcontent-%COMP%]{font-size:var(--fs-4)}.header__nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{display:flex;list-style:none;padding-left:0}.header__nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:not(:nth-last-child(1)){padding-right:var(--p-m-4)}@media(max-width:800px){.header__title[_ngcontent-%COMP%]{font-size:var(--fs-6)}.header__nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:not(:nth-last-child(1)){padding-right:var(--p-m-2)}}"],changeDetection:0})};var X=class t{static \u0275fac=function(e){return new(e||t)};static \u0275cmp=E({type:t,selectors:[["app-footer"]],decls:34,vars:0,consts:[[1,"bg-black"],[1,"footer","container"],[1,"footer__layout"],[1,"head-1","head__footer"],["target","_blank","href","mailto:alex@creativeblog.ru"],["target","_blank","href","tel:+79991234567"],[1,"footer__socials"],["href","https://vk.com/alex","target","_blank","title","vk"],["href","https://t.me/alex","target","_blank","title","telegram"],["href","https://github.com/alex","target","_blank","title","git"],[1,"head-1","head__footer_mobile"],["method","post"],["type","input","name","title","placeholder","\u0412\u0430\u0448 Email \u0430\u0434\u0440\u0435\u0441"],["name","text","placeholder","\u041E\u043F\u0438\u0448\u0438\u0442\u0435 \u0432\u0430\u0448 \u043F\u0440\u043E\u0435\u043A\u0442","rows","5"],[1,"content-center"],["type","submit",1,"btn"]],template:function(e,n){e&1&&(c(0,"footer",0)(1,"div",1)(2,"div",2)(3,"p",3),p(4," \u041F\u043E\u0437\u0434\u043E\u0440\u043E\u0432\u0430\u0439\u0441\u044F \u0438 \u0434\u0430\u0432\u0430\u0439 \u0440\u0430\u0431\u043E\u0442\u0430\u0442\u044C \u0432\u043C\u0435\u0441\u0442\u0435! "),m(),c(5,"p"),p(6," Email: "),c(7,"a",4),p(8,"alex@creativeblog.ru"),m(),b(9,"br"),p(10," \u0422\u0435\u043B\u0435\u0444\u043E\u043D: "),c(11,"a",5),p(12,"+7 (999) 123-45-67"),m()(),c(13,"div",6),b(14,"a",7)(15,"a",8)(16,"a",9),m()(),c(17,"div",2)(18,"p",10),p(19," \u041F\u043E\u0437\u0434\u043E\u0440\u043E\u0432\u0430\u0439\u0441\u044F \u0438 \u0434\u0430\u0432\u0430\u0439 \u0440\u0430\u0431\u043E\u0442\u0430\u0442\u044C \u0432\u043C\u0435\u0441\u0442\u0435! "),m(),c(20,"form",11)(21,"label")(22,"span"),p(23,"Email"),m(),b(24,"input",12),m(),c(25,"label")(26,"span"),p(27,"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u0432\u043E\u0435 \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0435"),m(),b(28,"textarea",13),m(),c(29,"div",14)(30,"button",15),p(31," \u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C "),m()()()(),c(32,"div",2),p(33," \xA9 2026 Brand, Inc "),m()()())},styles:[".footer[_ngcontent-%COMP%]{color:#fff;padding-block:var(--p-m-5);display:flex;flex-wrap:wrap}.footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#fff}.footer__layout[_ngcontent-%COMP%]{width:50%}.footer__layout[_ngcontent-%COMP%]:nth-child(1){padding-right:var(--p-m-1)}.footer__layout[_ngcontent-%COMP%]:nth-child(2){padding-left:var(--p-m-1)}.footer[_ngcontent-%COMP%]   .head__footer_mobile[_ngcontent-%COMP%]{display:none}.footer__socials[_ngcontent-%COMP%]{display:flex;margin-top:var(--p-m-3)}.footer__socials[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:not(:nth-last-child(1)){padding-right:var(--p-m-5)}.footer__socials[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{height:20px;width:20px}@media(min-width:801px){.footer__layout[_ngcontent-%COMP%]:nth-child(3){margin-top:var(--p-m-2)}}@media(max-width:800px){.footer__layout[_ngcontent-%COMP%]{width:100%}.footer__layout[_ngcontent-%COMP%]:nth-child(1){order:2;margin-bottom:var(--p-m-3)}.footer__layout[_ngcontent-%COMP%]:nth-child(2){order:1;margin-bottom:var(--p-m-3)}.footer__layout[_ngcontent-%COMP%]:nth-child(3){order:3}.footer__layout[_ngcontent-%COMP%]:nth-child(n){padding:0}.footer[_ngcontent-%COMP%]   .head__footer[_ngcontent-%COMP%]{display:none}.footer[_ngcontent-%COMP%]   .head__footer_mobile[_ngcontent-%COMP%]{display:block;margin-bottom:var(--p-m-2)}}"],changeDetection:0})};function at(t,r){t&1&&b(0,"div",2)}var st=new ne("MAT_PROGRESS_BAR_DEFAULT_OPTIONS");var Ke=(()=>{class t{_elementRef=a(le);_ngZone=a(ae);_changeDetectorRef=a(ye);_renderer=a(me);_cleanupTransitionEnd;constructor(){let e=Ae(),n=a(st,{optional:!0});this._isNoopAnimation=e==="di-disabled",e==="reduced-motion"&&this._elementRef.nativeElement.classList.add("mat-progress-bar-reduced-motion"),n&&(n.color&&(this.color=this._defaultColor=n.color),this.mode=n.mode||this.mode)}_isNoopAnimation;get color(){return this._color||this._defaultColor}set color(e){this._color=e}_color;_defaultColor="primary";get value(){return this._value}set value(e){this._value=$e(e||0),this._changeDetectorRef.markForCheck()}_value=0;get bufferValue(){return this._bufferValue||0}set bufferValue(e){this._bufferValue=$e(e||0),this._changeDetectorRef.markForCheck()}_bufferValue=0;animationEnd=new ie;get mode(){return this._mode}set mode(e){this._mode=e,this._changeDetectorRef.markForCheck()}_mode="determinate";ngAfterViewInit(){this._ngZone.runOutsideAngular(()=>{this._cleanupTransitionEnd=this._renderer.listen(this._elementRef.nativeElement,"transitionend",this._transitionendHandler)})}ngOnDestroy(){this._cleanupTransitionEnd?.()}_getPrimaryBarTransform(){return`scaleX(${this._isIndeterminate()?1:this.value/100})`}_getBufferBarFlexBasis(){return`${this.mode==="buffer"?this.bufferValue:100}%`}_isIndeterminate(){return this.mode==="indeterminate"||this.mode==="query"}_transitionendHandler=e=>{this.animationEnd.observers.length===0||!e.target||!e.target.classList.contains("mdc-linear-progress__primary-bar")||(this.mode==="determinate"||this.mode==="buffer")&&this._ngZone.run(()=>this.animationEnd.next({value:this.value}))};static \u0275fac=function(n){return new(n||t)};static \u0275cmp=E({type:t,selectors:[["mat-progress-bar"]],hostAttrs:["role","progressbar","aria-valuemin","0","aria-valuemax","100","tabindex","-1",1,"mat-mdc-progress-bar","mdc-linear-progress"],hostVars:10,hostBindings:function(n,o){n&2&&(ce("aria-valuenow",o._isIndeterminate()?null:o.value)("mode",o.mode),fe("mat-"+o.color),ge("_mat-animation-noopable",o._isNoopAnimation)("mdc-linear-progress--animation-ready",!o._isNoopAnimation)("mdc-linear-progress--indeterminate",o._isIndeterminate()))},inputs:{color:"color",value:[2,"value","value",W],bufferValue:[2,"bufferValue","bufferValue",W],mode:"mode"},outputs:{animationEnd:"animationEnd"},exportAs:["matProgressBar"],decls:7,vars:5,consts:[["aria-hidden","true",1,"mdc-linear-progress__buffer"],[1,"mdc-linear-progress__buffer-bar"],[1,"mdc-linear-progress__buffer-dots"],["aria-hidden","true",1,"mdc-linear-progress__bar","mdc-linear-progress__primary-bar"],[1,"mdc-linear-progress__bar-inner"],["aria-hidden","true",1,"mdc-linear-progress__bar","mdc-linear-progress__secondary-bar"]],template:function(n,o){n&1&&(c(0,"div",0),b(1,"div",1),pe(2,at,1,0,"div",2),m(),c(3,"div",3),b(4,"span",4),m(),c(5,"div",5),b(6,"span",4),m()),n&2&&(O(),Z("flex-basis",o._getBufferBarFlexBasis()),O(),ue(o.mode==="buffer"?2:-1),O(),Z("transform",o._getPrimaryBarTransform()))},styles:[`.mat-mdc-progress-bar {
  --mat-progress-bar-animation-multiplier: 1;
  display: block;
  text-align: start;
}
.mat-mdc-progress-bar[mode=query] {
  transform: scaleX(-1);
}
.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__buffer-dots,
.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__primary-bar,
.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__secondary-bar,
.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__bar-inner.mdc-linear-progress__bar-inner {
  animation: none;
}
.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__primary-bar,
.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__buffer-bar {
  transition: transform 1ms;
}

.mat-progress-bar-reduced-motion {
  --mat-progress-bar-animation-multiplier: 2;
}

.mdc-linear-progress {
  position: relative;
  width: 100%;
  transform: translateZ(0);
  outline: 1px solid transparent;
  overflow-x: hidden;
  transition: opacity 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1);
  height: max(var(--mat-progress-bar-track-height, 4px), var(--mat-progress-bar-active-indicator-height, 4px));
}
@media (forced-colors: active) {
  .mdc-linear-progress {
    outline-color: CanvasText;
  }
}

.mdc-linear-progress__bar {
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto 0;
  width: 100%;
  animation: none;
  transform-origin: top left;
  transition: transform 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1);
  height: var(--mat-progress-bar-active-indicator-height, 4px);
}
.mdc-linear-progress--indeterminate .mdc-linear-progress__bar {
  transition: none;
}
[dir=rtl] .mdc-linear-progress__bar {
  right: 0;
  transform-origin: center right;
}

.mdc-linear-progress__bar-inner {
  display: inline-block;
  position: absolute;
  width: 100%;
  animation: none;
  border-top-style: solid;
  border-color: var(--mat-progress-bar-active-indicator-color, var(--mat-sys-primary));
  border-top-width: var(--mat-progress-bar-active-indicator-height, 4px);
}

.mdc-linear-progress__buffer {
  display: flex;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto 0;
  width: 100%;
  overflow: hidden;
  height: var(--mat-progress-bar-track-height, 4px);
  border-radius: var(--mat-progress-bar-track-shape, var(--mat-sys-corner-none));
}

.mdc-linear-progress__buffer-dots {
  background-image: radial-gradient(circle, var(--mat-progress-bar-track-color, var(--mat-sys-surface-variant)) calc(var(--mat-progress-bar-track-height, 4px) / 2), transparent 0);
  background-repeat: repeat-x;
  background-size: calc(calc(var(--mat-progress-bar-track-height, 4px) / 2) * 5);
  background-position: left;
  flex: auto;
  transform: rotate(180deg);
  animation: mdc-linear-progress-buffering calc(250ms * var(--mat-progress-bar-animation-multiplier)) infinite linear;
}
@media (forced-colors: active) {
  .mdc-linear-progress__buffer-dots {
    background-color: ButtonBorder;
  }
}
[dir=rtl] .mdc-linear-progress__buffer-dots {
  animation: mdc-linear-progress-buffering-reverse calc(250ms * var(--mat-progress-bar-animation-multiplier)) infinite linear;
  transform: rotate(0);
}

.mdc-linear-progress__buffer-bar {
  flex: 0 1 100%;
  transition: flex-basis 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1);
  background-color: var(--mat-progress-bar-track-color, var(--mat-sys-surface-variant));
}

.mdc-linear-progress__primary-bar {
  transform: scaleX(0);
}
.mdc-linear-progress--indeterminate .mdc-linear-progress__primary-bar {
  left: -145.166611%;
}
.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__primary-bar {
  animation: mdc-linear-progress-primary-indeterminate-translate calc(2s * var(--mat-progress-bar-animation-multiplier)) infinite linear;
}
.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__primary-bar > .mdc-linear-progress__bar-inner {
  animation: mdc-linear-progress-primary-indeterminate-scale calc(2s * var(--mat-progress-bar-animation-multiplier)) infinite linear;
}
[dir=rtl] .mdc-linear-progress.mdc-linear-progress--animation-ready .mdc-linear-progress__primary-bar {
  animation-name: mdc-linear-progress-primary-indeterminate-translate-reverse;
}
[dir=rtl] .mdc-linear-progress.mdc-linear-progress--indeterminate .mdc-linear-progress__primary-bar {
  right: -145.166611%;
  left: auto;
}

.mdc-linear-progress__secondary-bar {
  display: none;
}
.mdc-linear-progress--indeterminate .mdc-linear-progress__secondary-bar {
  left: -54.888891%;
  display: block;
}
.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__secondary-bar {
  animation: mdc-linear-progress-secondary-indeterminate-translate calc(2s * var(--mat-progress-bar-animation-multiplier)) infinite linear;
}
.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__secondary-bar > .mdc-linear-progress__bar-inner {
  animation: mdc-linear-progress-secondary-indeterminate-scale calc(2s * var(--mat-progress-bar-animation-multiplier)) infinite linear;
}
[dir=rtl] .mdc-linear-progress.mdc-linear-progress--animation-ready .mdc-linear-progress__secondary-bar {
  animation-name: mdc-linear-progress-secondary-indeterminate-translate-reverse;
}
[dir=rtl] .mdc-linear-progress.mdc-linear-progress--indeterminate .mdc-linear-progress__secondary-bar {
  right: -54.888891%;
  left: auto;
}

@keyframes mdc-linear-progress-buffering {
  from {
    transform: rotate(180deg) translateX(calc(var(--mat-progress-bar-track-height, 4px) * -2.5));
  }
}
@keyframes mdc-linear-progress-primary-indeterminate-translate {
  0% {
    transform: translateX(0);
  }
  20% {
    animation-timing-function: cubic-bezier(0.5, 0, 0.701732, 0.495819);
    transform: translateX(0);
  }
  59.15% {
    animation-timing-function: cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);
    transform: translateX(83.67142%);
  }
  100% {
    transform: translateX(200.611057%);
  }
}
@keyframes mdc-linear-progress-primary-indeterminate-scale {
  0% {
    transform: scaleX(0.08);
  }
  36.65% {
    animation-timing-function: cubic-bezier(0.334731, 0.12482, 0.785844, 1);
    transform: scaleX(0.08);
  }
  69.15% {
    animation-timing-function: cubic-bezier(0.06, 0.11, 0.6, 1);
    transform: scaleX(0.661479);
  }
  100% {
    transform: scaleX(0.08);
  }
}
@keyframes mdc-linear-progress-secondary-indeterminate-translate {
  0% {
    animation-timing-function: cubic-bezier(0.15, 0, 0.515058, 0.409685);
    transform: translateX(0);
  }
  25% {
    animation-timing-function: cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);
    transform: translateX(37.651913%);
  }
  48.35% {
    animation-timing-function: cubic-bezier(0.4, 0.627035, 0.6, 0.902026);
    transform: translateX(84.386165%);
  }
  100% {
    transform: translateX(160.277782%);
  }
}
@keyframes mdc-linear-progress-secondary-indeterminate-scale {
  0% {
    animation-timing-function: cubic-bezier(0.205028, 0.057051, 0.57661, 0.453971);
    transform: scaleX(0.08);
  }
  19.15% {
    animation-timing-function: cubic-bezier(0.152313, 0.196432, 0.648374, 1.004315);
    transform: scaleX(0.457104);
  }
  44.15% {
    animation-timing-function: cubic-bezier(0.257759, -0.003163, 0.211762, 1.38179);
    transform: scaleX(0.72796);
  }
  100% {
    transform: scaleX(0.08);
  }
}
@keyframes mdc-linear-progress-primary-indeterminate-translate-reverse {
  0% {
    transform: translateX(0);
  }
  20% {
    animation-timing-function: cubic-bezier(0.5, 0, 0.701732, 0.495819);
    transform: translateX(0);
  }
  59.15% {
    animation-timing-function: cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);
    transform: translateX(-83.67142%);
  }
  100% {
    transform: translateX(-200.611057%);
  }
}
@keyframes mdc-linear-progress-secondary-indeterminate-translate-reverse {
  0% {
    animation-timing-function: cubic-bezier(0.15, 0, 0.515058, 0.409685);
    transform: translateX(0);
  }
  25% {
    animation-timing-function: cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);
    transform: translateX(-37.651913%);
  }
  48.35% {
    animation-timing-function: cubic-bezier(0.4, 0.627035, 0.6, 0.902026);
    transform: translateX(-84.386165%);
  }
  100% {
    transform: translateX(-160.277782%);
  }
}
@keyframes mdc-linear-progress-buffering-reverse {
  from {
    transform: translateX(-10px);
  }
}
`],encapsulation:2,changeDetection:0})}return t})();function $e(t,r=0,e=100){return Math.max(r,Math.min(e,t))}var G=class t{limit=6;count=v(0);limitActive=v(0);blogs=v([]);isLoad=v(!1);isDisabled=v(!1);updateBlogs(r){this.blogs.set(r)}static \u0275fac=function(e){return new(e||t)};static \u0275prov=l({token:t,factory:t.\u0275fac})};var j=class t{destroyRef=a(I);httpClient=a(R);blogMapper=a(F);blogsStore=a(w);getBlogs(r=!1,e=null){this.blogsStore.isLoad.set(!1),r?this.blogsStore.limitActive.update(n=>n+this.blogsStore.limit):(this.blogsStore.updateBlogs([]),this.blogsStore.limitActive.set(e??this.blogsStore.limit)),this.httpClient.get("/api/articles",{params:{page:1,limit:this.blogsStore.limitActive()}}).pipe(g(this.destroyRef)).subscribe(n=>{this.blogsStore.count.set(n.total);let o=[];n.items.map(i=>{o.push(this.blogMapper.mapBlog(i))}),this.blogsStore.updateBlogs(o),this.blogsStore.isLoad.set(!0)})}addBlog(r,e){this.blogsStore.isDisabled.set(!0);let n=new FormData;return n.append("title",r.title),n.append("content",r.text),e!==null&&n.append("image",e),r.categoryId!==null&&r.categoryId!==void 0&&n.append("categoryId",r.categoryId),this.httpClient.post("/api/articles",n).pipe(g(this.destroyRef),C(o=>{if(o.status!==void 0)return this.blogsStore.isDisabled.set(!1),o.message;let i=this.blogsStore.blogs();return i.unshift(this.blogMapper.mapBlog(o)),this.blogsStore.count()+1>this.blogsStore.limit&&i.splice(i.length-1,1),this.blogsStore.isDisabled.set(!1),i}))}editBlog(r,e,n){this.blogsStore.isDisabled.set(!0);let o=new FormData;return o.append("title",r.title),o.append("content",r.text),r.image!==null&&o.append("image",r.image),r.categoryId!==null&&o.append("categoryId",r.categoryId),this.httpClient.patch(`/api/articles/${n}`,o).pipe(g(this.destroyRef),C(i=>{if(i.status!==void 0)return this.blogsStore.isDisabled.set(!1),i.message;let u=this.blogsStore.blogs();return u[e]=this.blogMapper.mapBlog(i),this.blogsStore.updateBlogs([]),this.blogsStore.isDisabled.set(!1),u}))}deleteBlog(r,e){return this.blogsStore.isDisabled.set(!0),this.httpClient.delete(`/api/articles/${e}`).pipe(g(this.destroyRef),C(n=>n.status!==void 0?(this.blogsStore.isDisabled.set(!1),n.message):(this.getBlogs(!1,this.blogsStore.limitActive()),this.blogsStore.isDisabled.set(!1),null)))}getCountComments(){return this.httpClient.get("/api/comments/count").pipe(g(this.destroyRef),C(r=>r))}static \u0275fac=function(e){return new(e||t)};static \u0275prov=l({token:t,factory:t.\u0275fac})};var z=class t{loadInStorage(r,e=!1){let n=localStorage.getItem(r),o=[];return n!==null&&n!==""&&(o=JSON.parse(n),e||(o.map(i=>{i.date=new Date(i.date)}),o.sort((i,u)=>u.date.getTime()-i.date.getTime()))),o}static \u0275fac=function(e){return new(e||t)};static \u0275prov=l({token:t,factory:t.\u0275fac})};var V=class t{blogsStore=a(w);storageService=a(L);getBlogs(r=!1,e=null){this.blogsStore.isLoad.set(!1),r||this.blogsStore.updateBlogs([]),setTimeout(()=>{let n=this.storageService.loadInStorage("blogs");this.blogsStore.count.set(n.length),r?this.blogsStore.limitActive.update(o=>o+this.blogsStore.limit):this.blogsStore.limitActive.set(e??this.blogsStore.limit),this.blogsStore.updateBlogs(n.slice(0,this.blogsStore.limitActive())),this.blogsStore.isLoad.set(!0)},1e3)}addBlog(r){return new d(e=>{this.blogsStore.isDisabled.set(!0),setTimeout(()=>{let n=this.storageService.loadInStorage("blogs");r.id=(n.length>0?n.reduce((o,i)=>Math.max(o,i.id),1):0)+1,n.unshift(r),localStorage.setItem("blogs",JSON.stringify(n)),n=n.slice(0,this.blogsStore.limitActive()),e.next(n),this.blogsStore.isDisabled.set(!1)},1e3)})}editBlog(r,e){return new d(n=>{this.blogsStore.isDisabled.set(!0),setTimeout(()=>{let o=this.storageService.loadInStorage("blogs");o[e].title=r.title,o[e].text=r.text,o[e].image=null,localStorage.setItem("blogs",JSON.stringify(o)),o=o.slice(0,this.blogsStore.limitActive()),n.next(o),this.blogsStore.isDisabled.set(!1)},1e3)})}deleteBlog(r){return new d(e=>{this.blogsStore.isDisabled.set(!0),setTimeout(()=>{let n=this.storageService.loadInStorage("blogs"),i=this.storageService.loadInStorage("comments").filter(u=>u.blogId!==n[r].id);n.splice(r,1),localStorage.setItem("blogs",JSON.stringify(n)),localStorage.setItem("comments",JSON.stringify(i)),n=n.slice(0,this.blogsStore.limitActive()),e.next(n),this.blogsStore.isDisabled.set(!1)},1e3)})}getCountComments(){return this.storageService.loadInStorage("comments",!0).length}static \u0275fac=function(e){return new(e||t)};static \u0275prov=l({token:t,factory:t.\u0275fac})};var U=class t{mapBlog(r){let e={id:r.id,date:new Date(r.createdAt),title:r.title,text:r.content,image:r.imgSrc!==null?(S.apiUrl!==null?S.apiUrl:"")+r.imgSrc:null,rating:r.rating,categoryId:r.categoryId,comments:[]};return r.comments!==void 0&&r.comments.map(n=>{e.comments.push({id:n.id,name:n.username,text:n.content,date:new Date(n.createdAt),rating:n.rating,blogId:n.articleId})}),e}mapComment(r){return{id:r.id,name:r.username,text:r.content,date:new Date(r.createdAt),rating:r.rating,blogId:r.articleId}}static \u0275fac=function(e){return new(e||t)};static \u0275prov=l({token:t,factory:t.\u0275fac})};var q=class t{destroyRef=a(I);httpClient=a(R);getCategories(){return this.httpClient.get("/api/categories").pipe(g(this.destroyRef),C(r=>r.map(e=>this.mapCategory(e))))}addCategory(r){return this.httpClient.post("/api/categories",{name:r}).pipe(g(this.destroyRef),C(e=>e.status!==void 0?e.message:this.mapCategory(e)))}mapCategory(r){return{id:r.id,name:r.name}}static \u0275fac=function(e){return new(e||t)};static \u0275prov=l({token:t,factory:t.\u0275fac})};var J=class t{getCategories(){return new d(r=>{r.next([])})}addCategory(r){return new d(e=>{e.next({id:"id",name:"\u041A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u044F"})})}mapCategory(r){return{id:r.id,name:r.name}}static \u0275fac=function(e){return new(e||t)};static \u0275prov=l({token:t,factory:t.\u0275fac})};var Q=class t{router=a(Re);destroyRef=a(I);isNavigating=v(!1);value=v(0);constructor(){this.router.events.pipe(g(this.destroyRef)).subscribe(r=>{r instanceof xe&&(this.value.set(0),this.isNavigating.set(!0));for(let e=0;e<=100;e++)this.value.set(e);(r instanceof Me||r instanceof Oe||r instanceof Be)&&(this.value.set(100),this.isNavigating.set(!1))})}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=E({type:t,selectors:[["app-root"]],features:[be([{provide:w,useClass:G},{provide:Pe,useClass:S.useServiceLc?V:j},{provide:L,useClass:z},{provide:F,useClass:U},{provide:Ne,useClass:S.useServiceLc?J:q}])],decls:4,vars:2,consts:[["mode","determinate",1,"progress-bar",3,"hidden","value"]],template:function(e,n){e&1&&de(0,"mat-progress-bar",0)(1,"app-header")(2,"router-outlet")(3,"app-footer"),e&2&&P("hidden",!n.isNavigating())("value",n.value())},dependencies:[Ie,H,X,Ke],encapsulation:2})};function lt(t){let r=t,e=Math.floor(Math.abs(t)),n=t.toString().replace(/^[^.]*\.?/,"").length;return n===0&&e%10===1&&e%100!==11?1:n===0&&e%10===Math.floor(e%10)&&e%10>=2&&e%10<=4&&!(e%100>=12&&e%100<=14)?3:n===0&&e%10===0||n===0&&e%10===Math.floor(e%10)&&e%10>=5&&e%10<=9||n===0&&e%100===Math.floor(e%100)&&e%100>=11&&e%100<=14?4:5}var Ze=["ru",[["AM","PM"]],void 0,[["\u0412","\u041F","\u0412","\u0421","\u0427","\u041F","\u0421"],["\u0432\u0441","\u043F\u043D","\u0432\u0442","\u0441\u0440","\u0447\u0442","\u043F\u0442","\u0441\u0431"],["\u0432\u043E\u0441\u043A\u0440\u0435\u0441\u0435\u043D\u044C\u0435","\u043F\u043E\u043D\u0435\u0434\u0435\u043B\u044C\u043D\u0438\u043A","\u0432\u0442\u043E\u0440\u043D\u0438\u043A","\u0441\u0440\u0435\u0434\u0430","\u0447\u0435\u0442\u0432\u0435\u0440\u0433","\u043F\u044F\u0442\u043D\u0438\u0446\u0430","\u0441\u0443\u0431\u0431\u043E\u0442\u0430"],["\u0432\u0441","\u043F\u043D","\u0432\u0442","\u0441\u0440","\u0447\u0442","\u043F\u0442","\u0441\u0431"]],void 0,[["\u042F","\u0424","\u041C","\u0410","\u041C","\u0418","\u0418","\u0410","\u0421","\u041E","\u041D","\u0414"],["\u044F\u043D\u0432.","\u0444\u0435\u0432\u0440.","\u043C\u0430\u0440.","\u0430\u043F\u0440.","\u043C\u0430\u044F","\u0438\u044E\u043D.","\u0438\u044E\u043B.","\u0430\u0432\u0433.","\u0441\u0435\u043D\u0442.","\u043E\u043A\u0442.","\u043D\u043E\u044F\u0431.","\u0434\u0435\u043A."],["\u044F\u043D\u0432\u0430\u0440\u044F","\u0444\u0435\u0432\u0440\u0430\u043B\u044F","\u043C\u0430\u0440\u0442\u0430","\u0430\u043F\u0440\u0435\u043B\u044F","\u043C\u0430\u044F","\u0438\u044E\u043D\u044F","\u0438\u044E\u043B\u044F","\u0430\u0432\u0433\u0443\u0441\u0442\u0430","\u0441\u0435\u043D\u0442\u044F\u0431\u0440\u044F","\u043E\u043A\u0442\u044F\u0431\u0440\u044F","\u043D\u043E\u044F\u0431\u0440\u044F","\u0434\u0435\u043A\u0430\u0431\u0440\u044F"]],[["\u042F","\u0424","\u041C","\u0410","\u041C","\u0418","\u0418","\u0410","\u0421","\u041E","\u041D","\u0414"],["\u044F\u043D\u0432.","\u0444\u0435\u0432\u0440.","\u043C\u0430\u0440\u0442","\u0430\u043F\u0440.","\u043C\u0430\u0439","\u0438\u044E\u043D\u044C","\u0438\u044E\u043B\u044C","\u0430\u0432\u0433.","\u0441\u0435\u043D\u0442.","\u043E\u043A\u0442.","\u043D\u043E\u044F\u0431.","\u0434\u0435\u043A."],["\u044F\u043D\u0432\u0430\u0440\u044C","\u0444\u0435\u0432\u0440\u0430\u043B\u044C","\u043C\u0430\u0440\u0442","\u0430\u043F\u0440\u0435\u043B\u044C","\u043C\u0430\u0439","\u0438\u044E\u043D\u044C","\u0438\u044E\u043B\u044C","\u0430\u0432\u0433\u0443\u0441\u0442","\u0441\u0435\u043D\u0442\u044F\u0431\u0440\u044C","\u043E\u043A\u0442\u044F\u0431\u0440\u044C","\u043D\u043E\u044F\u0431\u0440\u044C","\u0434\u0435\u043A\u0430\u0431\u0440\u044C"]],[["\u0434\u043E \u043D.\u044D.","\u043D.\u044D."],["\u0434\u043E \u043D. \u044D.","\u043D. \u044D."],["\u0434\u043E \u0420\u043E\u0436\u0434\u0435\u0441\u0442\u0432\u0430 \u0425\u0440\u0438\u0441\u0442\u043E\u0432\u0430","\u043E\u0442 \u0420\u043E\u0436\u0434\u0435\u0441\u0442\u0432\u0430 \u0425\u0440\u0438\u0441\u0442\u043E\u0432\u0430"]],1,[6,0],["dd.MM.y","d MMM y\u202F'\u0433'.","d MMMM y\u202F'\u0433'.","EEEE, d MMMM y\u202F'\u0433'."],["HH:mm","HH:mm:ss","HH:mm:ss z","HH:mm:ss zzzz"],["{1}, {0}",void 0,void 0,void 0],[",","\xA0",";","%","+","-","E","\xD7","\u2030","\u221E","\u043D\u0435\xA0\u0447\u0438\u0441\u043B\u043E",":"],["#,##0.###","#,##0\xA0%","#,##0.00\xA0\xA4","#E0"],"RUB","\u20BD","\u0440\u043E\u0441\u0441\u0438\u0439\u0441\u043A\u0438\u0439 \u0440\u0443\u0431\u043B\u044C",{BYN:[void 0,"\u0440."],GEL:[void 0,"\u10DA"],PHP:[void 0,"\u20B1"],RON:[void 0,"L"],RUB:["\u20BD"],RUR:["\u0440."],THB:["\u0E3F"],TMT:["\u0422\u041C\u0422"],TWD:["NT$"],UAH:["\u20B4"],XXX:["XXXX"]},"ltr",lt];ve(Ze);_e(Q,qe).catch(t=>console.error(t));
