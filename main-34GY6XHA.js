import{a as z,b as T,c as I,d as L,e as V,f as j,g as H,h as Z,i as G}from"./chunk-URHO372X.js";import{c as U}from"./chunk-3FCJQKUF.js";import{$ as x,Ha as D,Ia as S,Ja as w,Ma as u,N as M,Na as p,Oa as g,P as l,Pa as B,Qa as a,Ra as t,Sa as m,aa as P,ab as v,bb as X,ca as k,cb as N,da as h,db as i,gb as y,ha as O,oa as c,ob as F,qb as E,sa as A,vb as R,ya as d}from"./chunk-7LVRBC5G.js";var q=[{path:"",loadComponent:()=>import("./chunk-WWKEXFET.js").then(n=>n.Index),title:"\u0413\u043B\u0430\u0432\u043D\u0430\u044F"},{path:"blogs",loadComponent:()=>import("./chunk-B6WRNWP5.js").then(n=>n.Blogs),title:"\u0411\u043B\u043E\u0433"}];var $={providers:[k(),G(q)]};var J=()=>({exact:!0}),f=class n{static \u0275fac=function(e){return new(e||n)};static \u0275cmp=d({type:n,selectors:[["app-header"]],decls:11,vars:4,consts:[[1,"container","header"],[1,"header__title"],[1,"header__nav"],["routerLink","/","routerLinkActive","active",1,"link",3,"routerLinkActiveOptions"],["routerLink","/blogs/","routerLinkActive","active",1,"link",3,"routerLinkActiveOptions"]],template:function(e,r){e&1&&(p(0,"header",0)(1,"p",1),i(2," \u041C\u043E\u0435 \u043F\u043E\u0440\u0442\u0444\u043E\u043B\u0438\u043E "),g(),p(3,"nav",2)(4,"ul")(5,"li")(6,"a",3),i(7," \u041E\u0431\u043E \u043C\u043D\u0435 "),g()(),p(8,"li")(9,"a",4),i(10," \u0411\u043B\u043E\u0433 "),g()()()()()),e&2&&(c(6),u("routerLinkActiveOptions",y(2,J)),c(3),u("routerLinkActiveOptions",y(3,J)))},dependencies:[H,Z],styles:[".header[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;padding-top:var(--p-m-2);padding-bottom:var(--p-m-4)}.header__title[_ngcontent-%COMP%]{font-size:var(--fs-4)}.header__nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{display:flex;list-style:none;padding-left:0}.header__nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:not(:nth-last-child(1)){padding-right:var(--p-m-4)}@media(max-width:800px){.header__title[_ngcontent-%COMP%]{font-size:var(--fs-6)}.header__nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:not(:nth-last-child(1)){padding-right:var(--p-m-2)}}"],changeDetection:0})};var _=class n{static \u0275fac=function(e){return new(e||n)};static \u0275cmp=d({type:n,selectors:[["app-footer"]],decls:34,vars:0,consts:[[1,"bg-black"],[1,"footer","container"],[1,"footer__layout"],[1,"head-1","head__footer"],["target","_blank","href","mailto:alex@creativeblog.ru"],["target","_blank","href","tel:+79991234567"],[1,"footer__socials"],["href","https://vk.com/alex","target","_blank","title","vk"],["href","https://t.me/alex","target","_blank","title","telegram"],["href","https://github.com/alex","target","_blank","title","git"],[1,"head-1","head__footer_mobile"],["method","post"],["type","input","name","title","placeholder","\u0412\u0430\u0448 Email \u0430\u0434\u0440\u0435\u0441"],["name","text","placeholder","\u041E\u043F\u0438\u0448\u0438\u0442\u0435 \u0432\u0430\u0448 \u043F\u0440\u043E\u0435\u043A\u0442","rows","5"],[1,"content-center"],["type","submit",1,"btn"]],template:function(e,r){e&1&&(a(0,"footer",0)(1,"div",1)(2,"div",2)(3,"p",3),i(4," \u041F\u043E\u0437\u0434\u043E\u0440\u043E\u0432\u0430\u0439\u0441\u044F \u0438 \u0434\u0430\u0432\u0430\u0439 \u0440\u0430\u0431\u043E\u0442\u0430\u0442\u044C \u0432\u043C\u0435\u0441\u0442\u0435! "),t(),a(5,"p"),i(6," Email: "),a(7,"a",4),i(8,"alex@creativeblog.ru"),t(),m(9,"br"),i(10," \u0422\u0435\u043B\u0435\u0444\u043E\u043D: "),a(11,"a",5),i(12,"+7 (999) 123-45-67"),t()(),a(13,"div",6),m(14,"a",7)(15,"a",8)(16,"a",9),t()(),a(17,"div",2)(18,"p",10),i(19," \u041F\u043E\u0437\u0434\u043E\u0440\u043E\u0432\u0430\u0439\u0441\u044F \u0438 \u0434\u0430\u0432\u0430\u0439 \u0440\u0430\u0431\u043E\u0442\u0430\u0442\u044C \u0432\u043C\u0435\u0441\u0442\u0435! "),t(),a(20,"form",11)(21,"label")(22,"span"),i(23,"Email"),t(),m(24,"input",12),t(),a(25,"label")(26,"span"),i(27,"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u0432\u043E\u0435 \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0435"),t(),m(28,"textarea",13),t(),a(29,"div",14)(30,"button",15),i(31," \u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C "),t()()()(),a(32,"div",2),i(33," \xA9 2026 Brand, Inc "),t()()())},styles:[".footer[_ngcontent-%COMP%]{color:#fff;padding-block:var(--p-m-5);display:flex;flex-wrap:wrap}.footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#fff}.footer__layout[_ngcontent-%COMP%]{width:50%}.footer__layout[_ngcontent-%COMP%]:nth-child(1){padding-right:var(--p-m-1)}.footer__layout[_ngcontent-%COMP%]:nth-child(2){padding-left:var(--p-m-1)}.footer[_ngcontent-%COMP%]   .head__footer_mobile[_ngcontent-%COMP%]{display:none}.footer__socials[_ngcontent-%COMP%]{display:flex;margin-top:var(--p-m-3)}.footer__socials[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:not(:nth-last-child(1)){padding-right:var(--p-m-5)}.footer__socials[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{height:20px;width:20px}@media(min-width:801px){.footer__layout[_ngcontent-%COMP%]:nth-child(3){margin-top:var(--p-m-2)}}@media(max-width:800px){.footer__layout[_ngcontent-%COMP%]{width:100%}.footer__layout[_ngcontent-%COMP%]:nth-child(1){order:2;margin-bottom:var(--p-m-3)}.footer__layout[_ngcontent-%COMP%]:nth-child(2){order:1;margin-bottom:var(--p-m-3)}.footer__layout[_ngcontent-%COMP%]:nth-child(3){order:3}.footer__layout[_ngcontent-%COMP%]:nth-child(n){padding:0}.footer[_ngcontent-%COMP%]   .head__footer[_ngcontent-%COMP%]{display:none}.footer[_ngcontent-%COMP%]   .head__footer_mobile[_ngcontent-%COMP%]{display:block;margin-bottom:var(--p-m-2)}}"],changeDetection:0})};function Y(n,o){n&1&&m(0,"div",2)}var ee=new M("MAT_PROGRESS_BAR_DEFAULT_OPTIONS");var W=(()=>{class n{_elementRef=l(O);_ngZone=l(P);_changeDetectorRef=l(F);_renderer=l(A);_cleanupTransitionEnd;constructor(){let e=U(),r=l(ee,{optional:!0});this._isNoopAnimation=e==="di-disabled",e==="reduced-motion"&&this._elementRef.nativeElement.classList.add("mat-progress-bar-reduced-motion"),r&&(r.color&&(this.color=this._defaultColor=r.color),this.mode=r.mode||this.mode)}_isNoopAnimation;get color(){return this._color||this._defaultColor}set color(e){this._color=e}_color;_defaultColor="primary";get value(){return this._value}set value(e){this._value=Q(e||0),this._changeDetectorRef.markForCheck()}_value=0;get bufferValue(){return this._bufferValue||0}set bufferValue(e){this._bufferValue=Q(e||0),this._changeDetectorRef.markForCheck()}_bufferValue=0;animationEnd=new x;get mode(){return this._mode}set mode(e){this._mode=e,this._changeDetectorRef.markForCheck()}_mode="determinate";ngAfterViewInit(){this._ngZone.runOutsideAngular(()=>{this._cleanupTransitionEnd=this._renderer.listen(this._elementRef.nativeElement,"transitionend",this._transitionendHandler)})}ngOnDestroy(){this._cleanupTransitionEnd?.()}_getPrimaryBarTransform(){return`scaleX(${this._isIndeterminate()?1:this.value/100})`}_getBufferBarFlexBasis(){return`${this.mode==="buffer"?this.bufferValue:100}%`}_isIndeterminate(){return this.mode==="indeterminate"||this.mode==="query"}_transitionendHandler=e=>{this.animationEnd.observers.length===0||!e.target||!e.target.classList.contains("mdc-linear-progress__primary-bar")||(this.mode==="determinate"||this.mode==="buffer")&&this._ngZone.run(()=>this.animationEnd.next({value:this.value}))};static \u0275fac=function(r){return new(r||n)};static \u0275cmp=d({type:n,selectors:[["mat-progress-bar"]],hostAttrs:["role","progressbar","aria-valuemin","0","aria-valuemax","100","tabindex","-1",1,"mat-mdc-progress-bar","mdc-linear-progress"],hostVars:10,hostBindings:function(r,s){r&2&&(D("aria-valuenow",s._isIndeterminate()?null:s.value)("mode",s.mode),N("mat-"+s.color),X("_mat-animation-noopable",s._isNoopAnimation)("mdc-linear-progress--animation-ready",!s._isNoopAnimation)("mdc-linear-progress--indeterminate",s._isIndeterminate()))},inputs:{color:"color",value:[2,"value","value",E],bufferValue:[2,"bufferValue","bufferValue",E],mode:"mode"},outputs:{animationEnd:"animationEnd"},exportAs:["matProgressBar"],decls:7,vars:5,consts:[["aria-hidden","true",1,"mdc-linear-progress__buffer"],[1,"mdc-linear-progress__buffer-bar"],[1,"mdc-linear-progress__buffer-dots"],["aria-hidden","true",1,"mdc-linear-progress__bar","mdc-linear-progress__primary-bar"],[1,"mdc-linear-progress__bar-inner"],["aria-hidden","true",1,"mdc-linear-progress__bar","mdc-linear-progress__secondary-bar"]],template:function(r,s){r&1&&(a(0,"div",0),m(1,"div",1),S(2,Y,1,0,"div",2),t(),a(3,"div",3),m(4,"span",4),t(),a(5,"div",5),m(6,"span",4),t()),r&2&&(c(),v("flex-basis",s._getBufferBarFlexBasis()),c(),w(s.mode==="buffer"?2:-1),c(),v("transform",s._getPrimaryBarTransform()))},styles:[`.mat-mdc-progress-bar {
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
`],encapsulation:2,changeDetection:0})}return n})();function Q(n,o=0,e=100){return Math.max(o,Math.min(e,n))}var b=class n{router=l(j);isNavigating=h(!1);value=h(0);constructor(){this.router.events.subscribe(o=>{o instanceof z&&(this.value.set(0),this.isNavigating.set(!0));for(let e=0;e<=100;e++)this.value.set(e);(o instanceof T||o instanceof I||o instanceof L)&&(this.value.set(100),this.isNavigating.set(!1))})}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=d({type:n,selectors:[["app-root"]],decls:4,vars:2,consts:[["mode","determinate",1,"progress-bar",3,"hidden","value"]],template:function(e,r){e&1&&B(0,"mat-progress-bar",0)(1,"app-header")(2,"router-outlet")(3,"app-footer"),e&2&&u("hidden",!r.isNavigating())("value",r.value())},dependencies:[V,f,_,W],encapsulation:2})};R(b,$).catch(n=>console.error(n));
