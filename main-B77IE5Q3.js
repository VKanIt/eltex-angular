import{a as xt,b as Mt,c as Dt}from"./chunk-FC2POGUO.js";import{a as H,b as tt}from"./chunk-3YR6N5UW.js";import{a as It,b as Rt,c as kt,d as Ot,f as Bt,h as Z,i as w,j as W,k as wt}from"./chunk-7IWI6RVV.js";import{$ as _t,A as nt,B as it,C as ot,D as at,F as st,G as U,H as lt,I as mt,J as ct,K as Q,L as ut,N as dt,O as pt,Q as gt,R as Ce,S as ft,T as ht,U as bt,W as vt,X as yt,aa as Ct,ba as p,ca as Et,da as Y,ea as St,v as rt}from"./chunk-HV245LZV.js";import{f as K,h as V}from"./chunk-5ELVLONN.js";import{f as He,g as Ue,h as je,i as _e,j as Ge,k as Xe,l as A,m as ze,n as Ve,q as qe,r as Je,s as $e,t as Ke,v as Qe,w as Ye,x as Ze,y as We,z as et}from"./chunk-4UKYNXQH.js";import{$b as Pe,Ba as Oe,Cb as _,Db as c,Eb as d,Fb as F,Ga as Be,Gb as C,H as z,Hb as y,Ib as k,Ob as B,Pb as J,Wa as m,_b as be,a as fe,aa as f,ac as Te,bb as we,bc as l,cc as L,da as Me,dc as Ne,ea as De,ec as $,fa as s,fc as ve,h as b,hb as R,n as X,na as he,nc as Fe,oa as I,qa as Ie,ra as Re,ua as ke,va as v,vb as Ae,vc as Le,w as x,wb as T,xb as N,yc as ye}from"./chunk-KFF767DV.js";var At=[{path:"",loadComponent:()=>import("./chunk-TZCG67AD.js").then(n=>n.Index),title:"\u0413\u043B\u0430\u0432\u043D\u0430\u044F"},{path:"blogs",loadComponent:()=>import("./chunk-BACGZK75.js").then(n=>n.Blogs),children:[{path:"",title:"\u0411\u043B\u043E\u0433",loadComponent:()=>import("./chunk-EEDZVX7P.js").then(n=>n.BlogsList)},{path:":id",loadComponent:()=>import("./chunk-YPOVVVPM.js").then(n=>n.Blog)}]},{path:"**",loadComponent:()=>import("./chunk-ZHK3XTMU.js").then(n=>n.PageNotFound)}];var Xt=(n,r,e)=>{let t=["POST","PUT","PATCH"].indexOf(n.method.toUpperCase())!==-1,i=g=>["variables","extensions"].indexOf(g.toLowerCase())!==-1,o=n.body.length,a=n.options&&n.options.useMultipart,h;if(a){if(o)return new b(g=>g.error(new Error("File upload is not available when combined with Batching")));if(!t)return new b(g=>g.error(new Error("File upload is not available when GET is used")));if(!e)return new b(g=>g.error(new Error(`To use File upload you need to pass "extractFiles" function from "extract-files" library to HttpLink's options`)));h=e(n.body),a=!!h.files.size}let D={};if(o){if(!t)return new b(g=>g.error(new Error("Batching is not available for GET requests")));D={body:n.body}}else{let g=a?h.clone:n.body;t?D={body:g}:D={params:Object.keys(n.body).reduce((u,M)=>{let P=n.body[M];return u[M]=i(M)?JSON.stringify(P):P,u},{})}}if(a&&t){let g=new FormData;g.append("operations",JSON.stringify(D.body));let S={},u=h.files,M=0;u.forEach(P=>{S[++M]=P}),g.append("map",JSON.stringify(S)),M=0,u.forEach((P,q)=>{g.append(++M+"",q,q.name)}),D.body=g}return r.request(n.method,n.url,fe(fe({observe:"response",responseType:"json",reportProgress:!1},D),n.options))},zt=n=>n instanceof _e?n:new _e(n);var Vt=(n,r)=>n&&r?r.keys().reduce((e,t)=>e.set(t,r.getAll(t)),n):r||n,Pt=(n,r)=>n&&r?[...n.keys()].reduce((e,t)=>e.set(t,n.get(t)),r):r||n;function qt(...n){return n.find(r=>typeof r<"u")}function Jt(n){let r=zt(n.headers);if(n.clientAwareness){let{name:e,version:t}=n.clientAwareness;e&&!r.has("apollographql-client-name")&&(r=r.set("apollographql-client-name",e)),t&&!r.has("apollographql-client-version")&&(r=r.set("apollographql-client-version",t))}return r}var $t={batchInterval:10,batchMax:10,uri:"graphql",method:"POST",withCredentials:!1,includeQuery:!0,includeExtensions:!1,useMultipart:!1};function j(n,r,e){return qt(n[e],r[e],$t[e])}function Kt(n){let r={status:n.status,statusText:n.statusText,ok:n.ok,url:n.url||"",headers:new Headers,type:"error",redirected:!1};n.headers.keys().forEach(t=>{let i=n.headers.getAll(t);i&&i.forEach(o=>r.headers.append(t,o))});let e=typeof n.error=="string"?n.error:JSON.stringify(n.error||{});return n.status>=300?new Ot(`Response not successful: Received status code ${n.status}`,{response:r,bodyText:e}):new Error(n.message)}var Ee=class extends Rt{httpClient;options;requester;print=It;constructor(r,e){super(),this.httpClient=r,this.options=e,this.options.operationPrinter&&(this.print=this.options.operationPrinter),this.requester=t=>new b(i=>{let o=t.getContext(),a=j(o,this.options,"method"),h=j(o,this.options,"includeQuery"),D=j(o,this.options,"includeExtensions"),g=j(o,this.options,"uri"),S=j(o,this.options,"withCredentials"),u=j(o,this.options,"useMultipart"),M=this.options.useGETForQueries===!0,P=Pt(o.httpContext,Pt(this.options.httpContext,new Ge)),q=t.query.definitions.some(O=>O.kind==="OperationDefinition"&&O.operation==="query");M&&q&&(a="GET");let Gt=Vt(this.options.headers,Jt(o)),ge={method:a,url:typeof g=="function"?g(t):g,body:{operationName:t.operationName,variables:t.variables},options:{withCredentials:S,useMultipart:u,headers:Gt,context:P}};D&&(ge.body.extensions=t.extensions),h&&(ge.body.query=this.print(t.query));let xe=Xt(ge,this.httpClient,this.options.extractFiles).subscribe({next:O=>{t.setContext({response:O}),i.next(O.body)},error:O=>{O instanceof Xe?i.error(Kt(O)):i.error(O)},complete:()=>i.complete()});return()=>{xe.closed||xe.unsubscribe()}})}request(r){return this.requester(r)}},Tt=(()=>{class n{httpClient;constructor(e){this.httpClient=e}create(e){return new Ee(this.httpClient,e)}static \u0275fac=function(t){return new(t||n)(De(A))};static \u0275prov=f({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var G="refresh_token";var Nt=(n,r)=>{let e=localStorage.getItem(G);if(!e)return r(n);let t=n.clone({withCredentials:!0,setHeaders:{Authorization:`Bearer ${e}`}});return r(t)};var ee=(()=>{class n{constructor(){this.document=s(he),this.platformId=s(Be),this.documentIsAccessible=Ue(this.platformId)}static getCookieRegExp(e){let t=e.replace(/([[\]{}()|=;+?,.*^$\\])/gi,"\\$1");return new RegExp("(?:^"+t+"|;\\s*"+t+")=(.*?)(?:;|$)")}static safeDecodeURIComponent(e){try{return decodeURIComponent(e)}catch{return e}}check(e){return this.documentIsAccessible?(e=encodeURIComponent(e),n.getCookieRegExp(e).test(this.document.cookie)):!1}get(e){if(this.check(e)){e=encodeURIComponent(e);let i=n.getCookieRegExp(e).exec(this.document.cookie);return i?.[1]?n.safeDecodeURIComponent(i[1]):""}else return""}getAll(){if(!this.documentIsAccessible)return{};let e={},t=this.document;return t.cookie&&t.cookie!==""&&t.cookie.split(";").forEach(i=>{let[o,a]=i.split("=");e[n.safeDecodeURIComponent(o.replace(/^ /,""))]=n.safeDecodeURIComponent(a)}),e}set(e,t,i,o,a,h,D,g){if(!this.documentIsAccessible)return;if(typeof i=="number"||i instanceof Date||o||a||h||D){let M={expires:i,path:o,domain:a,secure:h,sameSite:D||"Lax",partitioned:g};this.set(e,t,M);return}let S=encodeURIComponent(e)+"="+encodeURIComponent(t)+";",u=i||{};if(u.expires)if(typeof u.expires=="number"){let M=new Date(new Date().getTime()+u.expires*1e3*60*60*24);S+="Expires="+M.toUTCString()+";"}else S+="Expires="+u.expires.toUTCString()+";";u.path&&(S+="Path="+u.path+";"),u.domain&&(S+="Domain="+u.domain+";"),u.secure===!1&&u.sameSite==="None"&&(u.secure=!0,console.warn(`[ngx-cookie-service] Cookie ${e} was forced with secure flag because sameSite=None.More details : https://github.com/stevermeister/ngx-cookie-service/issues/86#issuecomment-597720130`)),u.secure&&(S+="Secure;"),u.sameSite||(u.sameSite="Lax"),S+="SameSite="+u.sameSite+";",u.partitioned&&(S+="Partitioned;"),this.document.cookie=S}delete(e,t,i,o,a="Lax"){if(!this.documentIsAccessible)return;let h=new Date("Thu, 01 Jan 1970 00:00:01 GMT");this.set(e,"",{expires:h,path:t,domain:i,secure:o,sameSite:a})}deleteAll(e,t,i,o="Lax"){if(!this.documentIsAccessible)return;let a=this.getAll();for(let h in a)a.hasOwnProperty(h)&&this.delete(h,e,t,i,o)}static{this.\u0275fac=function(t){return new(t||n)}}static{this.\u0275prov=f({token:n,factory:n.\u0275fac,providedIn:"root"})}}return n})();var Ft={providers:[ee,ke(),et(At),ze(Ve([Nt])),{provide:wt,useValue:w},{provide:Fe,useValue:"ru"},{provide:xt,useValue:{horizontalPosition:"end",verticalPosition:"top",duration:3e3}},Bt(()=>({link:s(Tt).create({uri:"/graphql"}),cache:new kt}))]};function Qt(n,r){if(n&1&&(c(0,"mat-error",7),l(1),d()),n&2){let e=J();m(),L(e.validation.getErrorMessage("login","\u043B\u043E\u0433\u0438\u043D"))}}function Yt(n,r){if(n&1&&(c(0,"mat-error",7),l(1),d()),n&2){let e=J();m(),L(e.validation.getErrorMessage("email","email"))}}function Zt(n,r){if(n&1&&(c(0,"mat-error",7),l(1),d()),n&2){let e=J();m(),L(e.validation.getErrorMessage("password","\u043F\u0430\u0440\u043E\u043B\u044C"))}}var te=class n{dialogRef=s(nt);data=s(it);validation=s(Ce);isRegister=v(!1);authForm=new ct({login:new Q(null,[U.required]),email:new Q(null,[U.required,U.email]),password:new Q(null,[U.required,U.minLength(6)])});constructor(){this.validation.setForm(this.authForm)}closeDialog(){this.dialogRef.close()}auth(r){r.preventDefault(),this.authForm.markAllAsTouched(),!(!this.authForm.controls.login.valid||!this.authForm.controls.password.valid||this.isRegister()&&!this.authForm.controls.email.valid)&&this.dialogRef.close({form:this.authForm.value,isRegister:this.isRegister()})}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=R({type:n,selectors:[["app-auth-modal"]],features:[$([{provide:Ce,useClass:ft}])],decls:33,vars:13,consts:[[1,"modal-header"],["matIconButton","","title","\u041D\u0430\u0437\u0430\u0434",3,"click","hidden"],[1,"title"],["matIconButton","","title","\u0417\u0430\u043A\u0440\u044B\u0442\u044C",3,"click"],["novalidate","",3,"submit","formGroup"],[1,"mb-05"],["type","text","matInput","","formControlName","login"],[1,"invalid-message"],[1,"mb-05",3,"hidden"],["type","email","matInput","","formControlName","email"],[1,"mb-1"],["type","password","matInput","","formControlName","password"],[1,"auth-btn"],["matButton","filled","type","submit",3,"hidden","disabled"],["matButton","outlined",3,"click","hidden","disabled"]],template:function(e,t){if(e&1&&(c(0,"div",0)(1,"button",1),B("click",function(){return t.isRegister.set(!1)}),c(2,"mat-icon"),l(3,"arrow_back"),d()(),c(4,"p",2),l(5),d(),c(6,"button",3),B("click",function(){return t.closeDialog()}),c(7,"mat-icon"),l(8,"close"),d()()(),c(9,"mat-dialog-content")(10,"form",4),B("submit",function(o){return t.auth(o)}),c(11,"mat-form-field",5)(12,"mat-label"),l(13,"\u041B\u043E\u0433\u0438\u043D"),d(),F(14,"input",6),T(15,Qt,2,1,"mat-error",7),d(),c(16,"mat-form-field",8)(17,"mat-label"),l(18,"Email"),d(),F(19,"input",9),T(20,Yt,2,1,"mat-error",7),d(),c(21,"mat-form-field",10)(22,"mat-label"),l(23,"\u041F\u0430\u0440\u043E\u043B\u044C"),d(),F(24,"input",11),T(25,Zt,2,1,"mat-error",7),d(),c(26,"div",12)(27,"button",13),l(28," \u0412\u0445\u043E\u0434 "),d(),c(29,"button",14),B("click",function(){return t.isRegister.set(!0)}),l(30," \u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044F "),d(),c(31,"button",13),l(32," \u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043E\u0432\u0430\u0442\u044C\u0441\u044F "),d()()()()),e&2){m(),_("hidden",!t.isRegister()),m(4),Ne(" ",t.isRegister()?"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044F":"\u0412\u043E\u0439\u0442\u0438"," "),m(5),_("formGroup",t.authForm);let i=t.validation.isInvalid("login");m(5),N(i?15:-1),m(),_("hidden",!t.isRegister());let o=t.validation.isInvalid("email");m(4),N(o?20:-1);let a=t.validation.isInvalid("password");m(5),N(a?25:-1),m(2),_("hidden",t.isRegister())("disabled",t.data.isDisabled()),m(2),_("hidden",t.isRegister())("disabled",t.data.isDisabled()),m(2),_("hidden",!t.isRegister())("disabled",t.data.isDisabled())}},dependencies:[at,gt,ut,st,lt,mt,pt,dt,K,St,Y,Et,Ct,_t,vt,ht,bt,yt],styles:["[_nghost-%COMP%]{display:block}.auth-btn[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center}.auth-btn[_ngcontent-%COMP%]   .mdc-button[_ngcontent-%COMP%]:first-child{margin-bottom:var(--p-m-1)}"],changeDetection:0})};var Lt=()=>({exact:!0}),re=class n{dialog=s(ot);authService=s(V);destroyRef=s(I);snackBar=s(Mt);client=this.authService.client;isShowLogout=v(!1);openAuthModal(){this.dialog.open(te,{data:{isDisabled:this.authService.isDisabled}}).afterClosed().pipe(p(this.destroyRef)).subscribe(e=>{e!==void 0&&(this.isShowLogout.set(!1),e.isRegister?this.authService.register(e.form.login,e.form.password,e.form.email).pipe(p(this.destroyRef),z(t=>(this.snackBar.open(t.error.message),this.authService.isDisabled.set(!1),X))).subscribe(t=>{this.login(e),this.snackBar.open(t)}):this.login(e,!0))})}login(r,e=!1){this.authService.login(r.form.login,r.form.password).pipe(p(this.destroyRef),z(t=>(this.authService.isDisabled.set(!1),this.snackBar.open(t.error.message),X))).subscribe(t=>{e&&this.snackBar.open(t)})}logout(){this.authService.logout().pipe(p(this.destroyRef)).subscribe(r=>{this.snackBar.open(r)})}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=R({type:n,selectors:[["app-header"]],decls:23,vars:8,consts:[[1,"container","header"],[1,"header__title"],[1,"header__nav"],["routerLink","/","routerLinkActive","active",1,"link",3,"routerLinkActiveOptions"],["routerLink","/blogs/","routerLinkActive","active",1,"link",3,"routerLinkActiveOptions"],[1,"link",3,"click","hidden"],[1,"login",3,"hidden"],["title","\u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C",1,"btn-icon","text-green",3,"click"],[1,"form-logout",3,"hidden"],["matButton","filled",3,"click"]],template:function(e,t){e&1&&(c(0,"header",0)(1,"p",1),l(2," \u041C\u043E\u0435 \u043F\u043E\u0440\u0442\u0444\u043E\u043B\u0438\u043E "),d(),c(3,"nav",2)(4,"ul")(5,"li")(6,"a",3),l(7," \u041E\u0431\u043E \u043C\u043D\u0435 "),d()(),c(8,"li")(9,"a",4),l(10," \u0411\u043B\u043E\u0433 "),d()(),c(11,"li")(12,"button",5),B("click",function(){return t.openAuthModal()}),l(13," \u0412\u0445\u043E\u0434 "),d(),c(14,"div",6)(15,"button",7),B("click",function(){return t.isShowLogout.update(o=>!o)}),c(16,"mat-icon"),l(17,"account_circle"),d()(),c(18,"div",8)(19,"span"),l(20),d(),c(21,"button",9),B("click",function(){return t.logout()}),l(22," \u0412\u044B\u0445\u043E\u0434 "),d()()()()()()()),e&2&&(m(6),_("routerLinkActiveOptions",ve(6,Lt)),m(3),_("routerLinkActiveOptions",ve(7,Lt)),m(3),_("hidden",t.client().id!==null),m(2),_("hidden",t.client().id===null),m(4),_("hidden",!t.isShowLogout()),m(2),L(t.client().username))},dependencies:[Ze,We,K,Y],styles:[".header[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;padding-top:var(--p-m-2);padding-bottom:var(--p-m-4)}.header__title[_ngcontent-%COMP%]{font-size:var(--fs-4)}.header__nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{display:flex;list-style:none;padding-left:0}.header__nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:not(:nth-last-child(1)){padding-right:var(--p-m-4)}@media(max-width:800px){.header__title[_ngcontent-%COMP%]{font-size:var(--fs-6)}.header__nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:not(:nth-last-child(1)){padding-right:var(--p-m-2)}}.login[_ngcontent-%COMP%]{position:relative}.login[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{display:block;margin-bottom:var(--p-m-1)}.login[_ngcontent-%COMP%]   .form-logout[_ngcontent-%COMP%]{position:absolute;top:0;right:0;margin-top:30px;padding:var(--p-m-1);border-radius:var(--border-radius);border:1px solid var(--bs-green);background-color:#fff}"],changeDetection:0})};var ne=class n{static \u0275fac=function(e){return new(e||n)};static \u0275cmp=R({type:n,selectors:[["app-footer"]],decls:34,vars:0,consts:[[1,"bg-black"],[1,"footer","container"],[1,"footer__layout"],[1,"head-1","head__footer"],["target","_blank","href","mailto:alex@creativeblog.ru"],["target","_blank","href","tel:+79991234567"],[1,"footer__socials"],["href","https://vk.com/alex","target","_blank","title","vk"],["href","https://t.me/alex","target","_blank","title","telegram"],["href","https://github.com/alex","target","_blank","title","git"],[1,"head-1","head__footer_mobile"],["method","post"],["type","input","name","title","placeholder","\u0412\u0430\u0448 Email \u0430\u0434\u0440\u0435\u0441"],["name","text","placeholder","\u041E\u043F\u0438\u0448\u0438\u0442\u0435 \u0432\u0430\u0448 \u043F\u0440\u043E\u0435\u043A\u0442","rows","5"],[1,"content-center"],["type","submit",1,"btn"]],template:function(e,t){e&1&&(C(0,"footer",0)(1,"div",1)(2,"div",2)(3,"p",3),l(4," \u041F\u043E\u0437\u0434\u043E\u0440\u043E\u0432\u0430\u0439\u0441\u044F \u0438 \u0434\u0430\u0432\u0430\u0439 \u0440\u0430\u0431\u043E\u0442\u0430\u0442\u044C \u0432\u043C\u0435\u0441\u0442\u0435! "),y(),C(5,"p"),l(6," Email: "),C(7,"a",4),l(8,"alex@creativeblog.ru"),y(),k(9,"br"),l(10," \u0422\u0435\u043B\u0435\u0444\u043E\u043D: "),C(11,"a",5),l(12,"+7 (999) 123-45-67"),y()(),C(13,"div",6),k(14,"a",7)(15,"a",8)(16,"a",9),y()(),C(17,"div",2)(18,"p",10),l(19," \u041F\u043E\u0437\u0434\u043E\u0440\u043E\u0432\u0430\u0439\u0441\u044F \u0438 \u0434\u0430\u0432\u0430\u0439 \u0440\u0430\u0431\u043E\u0442\u0430\u0442\u044C \u0432\u043C\u0435\u0441\u0442\u0435! "),y(),C(20,"form",11)(21,"label")(22,"span"),l(23,"Email"),y(),k(24,"input",12),y(),C(25,"label")(26,"span"),l(27,"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u0432\u043E\u0435 \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0435"),y(),k(28,"textarea",13),y(),C(29,"div",14)(30,"button",15),l(31," \u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C "),y()()()(),C(32,"div",2),l(33," \xA9 2026 Brand, Inc "),y()()())},styles:[".footer[_ngcontent-%COMP%]{color:#fff;padding-block:var(--p-m-5);display:flex;flex-wrap:wrap}.footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#fff}.footer__layout[_ngcontent-%COMP%]{width:50%}.footer__layout[_ngcontent-%COMP%]:nth-child(1){padding-right:var(--p-m-1)}.footer__layout[_ngcontent-%COMP%]:nth-child(2){padding-left:var(--p-m-1)}.footer[_ngcontent-%COMP%]   .head__footer_mobile[_ngcontent-%COMP%]{display:none}.footer__socials[_ngcontent-%COMP%]{display:flex;margin-top:var(--p-m-3)}.footer__socials[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:not(:nth-last-child(1)){padding-right:var(--p-m-5)}.footer__socials[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{height:20px;width:20px}@media(min-width:801px){.footer__layout[_ngcontent-%COMP%]:nth-child(3){margin-top:var(--p-m-2)}}@media(max-width:800px){.footer__layout[_ngcontent-%COMP%]{width:100%}.footer__layout[_ngcontent-%COMP%]:nth-child(1){order:2;margin-bottom:var(--p-m-3)}.footer__layout[_ngcontent-%COMP%]:nth-child(2){order:1;margin-bottom:var(--p-m-3)}.footer__layout[_ngcontent-%COMP%]:nth-child(3){order:3}.footer__layout[_ngcontent-%COMP%]:nth-child(n){padding:0}.footer[_ngcontent-%COMP%]   .head__footer[_ngcontent-%COMP%]{display:none}.footer[_ngcontent-%COMP%]   .head__footer_mobile[_ngcontent-%COMP%]{display:block;margin-bottom:var(--p-m-2)}}"],changeDetection:0})};function Wt(n,r){n&1&&k(0,"div",2)}var er=new Me("MAT_PROGRESS_BAR_DEFAULT_OPTIONS");var Ut=(()=>{class n{_elementRef=s(Oe);_ngZone=s(Re);_changeDetectorRef=s(Le);_renderer=s(we);_cleanupTransitionEnd;constructor(){let e=rt(),t=s(er,{optional:!0});this._isNoopAnimation=e==="di-disabled",e==="reduced-motion"&&this._elementRef.nativeElement.classList.add("mat-progress-bar-reduced-motion"),t&&(t.color&&(this.color=this._defaultColor=t.color),this.mode=t.mode||this.mode)}_isNoopAnimation;get color(){return this._color||this._defaultColor}set color(e){this._color=e}_color;_defaultColor="primary";get value(){return this._value}set value(e){this._value=Ht(e||0),this._changeDetectorRef.markForCheck()}_value=0;get bufferValue(){return this._bufferValue||0}set bufferValue(e){this._bufferValue=Ht(e||0),this._changeDetectorRef.markForCheck()}_bufferValue=0;animationEnd=new Ie;get mode(){return this._mode}set mode(e){this._mode=e,this._changeDetectorRef.markForCheck()}_mode="determinate";ngAfterViewInit(){this._ngZone.runOutsideAngular(()=>{this._cleanupTransitionEnd=this._renderer.listen(this._elementRef.nativeElement,"transitionend",this._transitionendHandler)})}ngOnDestroy(){this._cleanupTransitionEnd?.()}_getPrimaryBarTransform(){return`scaleX(${this._isIndeterminate()?1:this.value/100})`}_getBufferBarFlexBasis(){return`${this.mode==="buffer"?this.bufferValue:100}%`}_isIndeterminate(){return this.mode==="indeterminate"||this.mode==="query"}_transitionendHandler=e=>{this.animationEnd.observers.length===0||!e.target||!e.target.classList.contains("mdc-linear-progress__primary-bar")||(this.mode==="determinate"||this.mode==="buffer")&&this._ngZone.run(()=>this.animationEnd.next({value:this.value}))};static \u0275fac=function(t){return new(t||n)};static \u0275cmp=R({type:n,selectors:[["mat-progress-bar"]],hostAttrs:["role","progressbar","aria-valuemin","0","aria-valuemax","100","tabindex","-1",1,"mat-mdc-progress-bar","mdc-linear-progress"],hostVars:10,hostBindings:function(t,i){t&2&&(Ae("aria-valuenow",i._isIndeterminate()?null:i.value)("mode",i.mode),Te("mat-"+i.color),Pe("_mat-animation-noopable",i._isNoopAnimation)("mdc-linear-progress--animation-ready",!i._isNoopAnimation)("mdc-linear-progress--indeterminate",i._isIndeterminate()))},inputs:{color:"color",value:[2,"value","value",ye],bufferValue:[2,"bufferValue","bufferValue",ye],mode:"mode"},outputs:{animationEnd:"animationEnd"},exportAs:["matProgressBar"],decls:7,vars:5,consts:[["aria-hidden","true",1,"mdc-linear-progress__buffer"],[1,"mdc-linear-progress__buffer-bar"],[1,"mdc-linear-progress__buffer-dots"],["aria-hidden","true",1,"mdc-linear-progress__bar","mdc-linear-progress__primary-bar"],[1,"mdc-linear-progress__bar-inner"],["aria-hidden","true",1,"mdc-linear-progress__bar","mdc-linear-progress__secondary-bar"]],template:function(t,i){t&1&&(C(0,"div",0),k(1,"div",1),T(2,Wt,1,0,"div",2),y(),C(3,"div",3),k(4,"span",4),y(),C(5,"div",5),k(6,"span",4),y()),t&2&&(m(),be("flex-basis",i._getBufferBarFlexBasis()),m(),N(i.mode==="buffer"?2:-1),m(),be("transform",i._getPrimaryBarTransform()))},styles:[`.mat-mdc-progress-bar {
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
`],encapsulation:2,changeDetection:0})}return n})();function Ht(n,r=0,e=100){return Math.max(r,Math.min(e,n))}var ie=class n{limit=6;count=v(0);limitActive=v(0);blogs=v([]);isLoad=v(!1);isDisabled=v(!1);updateBlogs(r){this.blogs.set(r)}static \u0275fac=function(e){return new(e||n)};static \u0275prov=f({token:n,factory:n.\u0275fac})};var oe=class n{destroyRef=s(I);httpClient=s(A);blogMapper=s(Z);blogsStore=s(H);getBlogs(r=!1,e=null){this.blogsStore.isLoad.set(!1),r?this.blogsStore.limitActive.update(t=>t+this.blogsStore.limit):(this.blogsStore.updateBlogs([]),this.blogsStore.limitActive.set(e??this.blogsStore.limit)),this.httpClient.get("/api/articles",{params:{page:1,limit:this.blogsStore.limitActive()}}).pipe(p(this.destroyRef)).subscribe(t=>{this.blogsStore.count.set(t.total);let i=[];t.items.map(o=>{i.push(this.blogMapper.mapBlog(o))}),this.blogsStore.updateBlogs(i),this.blogsStore.isLoad.set(!0)})}addBlog(r,e){this.blogsStore.isDisabled.set(!0);let t=new FormData;return t.append("title",r.title),t.append("content",r.text),e!==null&&t.append("image",e),r.categoryId!==null&&r.categoryId!==void 0&&t.append("categoryId",r.categoryId),this.httpClient.post("/api/articles",t).pipe(p(this.destroyRef),x(i=>{if(i.status!==void 0)return this.blogsStore.isDisabled.set(!1),i.message;let o=this.blogsStore.blogs();return o.unshift(this.blogMapper.mapBlog(i)),this.blogsStore.count()+1>this.blogsStore.limit&&o.splice(o.length-1,1),this.blogsStore.isDisabled.set(!1),o}))}editBlog(r,e,t){this.blogsStore.isDisabled.set(!0);let i=new FormData;return i.append("title",r.title),i.append("content",r.text),r.image!==null&&i.append("image",r.image),r.categoryId!==null&&i.append("categoryId",r.categoryId),this.httpClient.patch(`/api/articles/${t}`,i).pipe(p(this.destroyRef),x(o=>{if(o.status!==void 0)return this.blogsStore.isDisabled.set(!1),o.message;let a=this.blogsStore.blogs();return a[e]=this.blogMapper.mapBlog(o),this.blogsStore.updateBlogs([]),this.blogsStore.isDisabled.set(!1),a}))}deleteBlog(r,e){return this.blogsStore.isDisabled.set(!0),this.httpClient.delete(`/api/articles/${e}`).pipe(p(this.destroyRef),x(t=>t.status!==void 0?(this.blogsStore.isDisabled.set(!1),t.message):(this.getBlogs(!1,this.blogsStore.limitActive()),this.blogsStore.isDisabled.set(!1),null)))}getCountComments(){return this.httpClient.get("/api/comments/count").pipe(p(this.destroyRef),x(r=>r))}static \u0275fac=function(e){return new(e||n)};static \u0275prov=f({token:n,factory:n.\u0275fac})};var ae=class n{loadInStorage(r,e=!1){let t=localStorage.getItem(r),i=[];return t!==null&&t!==""&&(i=JSON.parse(t),e||(i.map(o=>{o.date=new Date(o.date)}),i.sort((o,a)=>a.date.getTime()-o.date.getTime()))),i}static \u0275fac=function(e){return new(e||n)};static \u0275prov=f({token:n,factory:n.\u0275fac})};var se=class n{blogsStore=s(H);storageService=s(W);getBlogs(r=!1,e=null){this.blogsStore.isLoad.set(!1),r||this.blogsStore.updateBlogs([]),setTimeout(()=>{let t=this.storageService.loadInStorage("blogs");this.blogsStore.count.set(t.length),r?this.blogsStore.limitActive.update(i=>i+this.blogsStore.limit):this.blogsStore.limitActive.set(e??this.blogsStore.limit),this.blogsStore.updateBlogs(t.slice(0,this.blogsStore.limitActive())),this.blogsStore.isLoad.set(!0)},1e3)}addBlog(r){return new b(e=>{this.blogsStore.isDisabled.set(!0),setTimeout(()=>{let t=this.storageService.loadInStorage("blogs");r.id=(t.length>0?t.reduce((i,o)=>Math.max(i,o.id),1):0)+1,t.unshift(r),localStorage.setItem("blogs",JSON.stringify(t)),t=t.slice(0,this.blogsStore.limitActive()),e.next(t),this.blogsStore.isDisabled.set(!1)},1e3)})}editBlog(r,e){return new b(t=>{this.blogsStore.isDisabled.set(!0),setTimeout(()=>{let i=this.storageService.loadInStorage("blogs");i[e].title=r.title,i[e].text=r.text,i[e].image=null,localStorage.setItem("blogs",JSON.stringify(i)),i=i.slice(0,this.blogsStore.limitActive()),t.next(i),this.blogsStore.isDisabled.set(!1)},1e3)})}deleteBlog(r){return new b(e=>{this.blogsStore.isDisabled.set(!0),setTimeout(()=>{let t=this.storageService.loadInStorage("blogs"),o=this.storageService.loadInStorage("comments").filter(a=>a.blogId!==t[r].id);t.splice(r,1),localStorage.setItem("blogs",JSON.stringify(t)),localStorage.setItem("comments",JSON.stringify(o)),t=t.slice(0,this.blogsStore.limitActive()),e.next(t),this.blogsStore.isDisabled.set(!1)},1e3)})}getCountComments(){return this.storageService.loadInStorage("comments",!0).length}static \u0275fac=function(e){return new(e||n)};static \u0275prov=f({token:n,factory:n.\u0275fac})};var le=class n{mapBlog(r){let e={id:r.id,date:new Date(r.createdAt),title:r.title,text:r.content,image:r.imgSrc!==null?(w.apiUrl!==null?w.apiUrl:"")+r.imgSrc:null,rating:r.rating,categoryId:r.categoryId,comments:[]};return r.comments!==void 0&&r.comments.map(t=>{e.comments.push({id:t.id,name:t.username,text:t.content,date:new Date(t.createdAt),rating:t.rating,blogId:t.articleId})}),e}mapComment(r){return{id:r.id,name:r.username,text:r.content,date:new Date(r.createdAt),rating:r.rating,blogId:r.articleId}}static \u0275fac=function(e){return new(e||n)};static \u0275prov=f({token:n,factory:n.\u0275fac})};var me=class n{destroyRef=s(I);httpClient=s(A);getCategories(){return this.httpClient.get("/api/categories").pipe(p(this.destroyRef),x(r=>r.map(e=>this.mapCategory(e))))}addCategory(r){return this.httpClient.post("/api/categories",{name:r}).pipe(p(this.destroyRef),x(e=>e.status!==void 0?e.message:this.mapCategory(e)))}mapCategory(r){return{id:r.id,name:r.name}}static \u0275fac=function(e){return new(e||n)};static \u0275prov=f({token:n,factory:n.\u0275fac})};var ce=class n{getCategories(){return new b(r=>{r.next([])})}addCategory(r){return new b(e=>{e.next({id:"id",name:"\u041A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u044F"})})}mapCategory(r){return{id:r.id,name:r.name}}static \u0275fac=function(e){return new(e||n)};static \u0275prov=f({token:n,factory:n.\u0275fac})};var ue=class n{isDisabled=v(!1);client=v({id:null,username:null,email:null,role:null});getClient(){return new b(r=>{let e=localStorage.getItem("client_id");if(e===null||e==="")return;let t=[],i=localStorage.getItem("clients");i!==null&&i!==""&&(t=JSON.parse(i));let o=t.find(a=>a.id===e);o!==void 0&&this.client.set(o),r.next(!0)})}login(r,e){return new b(t=>{this.isDisabled.set(!0),setTimeout(()=>{let i=localStorage.getItem("clients"),o=[];i!==null&&i!==""&&(o=JSON.parse(i));let a=o.find(h=>h.username===r&&h.password===e);if(a===void 0){t.error({error:{message:"\u041D\u0435\u0432\u0435\u0440\u043D\u044B\u0439 \u043B\u043E\u0433\u0438\u043D \u0438\u043B\u0438 \u043F\u0430\u0440\u043E\u043B\u044C"}}),this.isDisabled.set(!1);return}this.client.set({id:a.id,username:a.username,email:a.email,role:a.role}),localStorage.setItem("client_id",a.id??""),t.next("\u0423\u0441\u043F\u0435\u0448\u043D\u044B\u0439 \u0432\u0445\u043E\u0434"),this.isDisabled.set(!1)},1e3)})}register(r,e,t){return new b(i=>{this.isDisabled.set(!0),setTimeout(()=>{let o=localStorage.getItem("clients"),a=[];o!==null&&o!==""&&(a=JSON.parse(o));let h=crypto.randomUUID();a.push({id:h,username:r,email:t,role:"admin",password:e}),localStorage.setItem("clients",JSON.stringify(a)),localStorage.setItem("client_id",h),this.client.set({id:h,username:r,email:t,role:"admin"}),i.next("\u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C \u0443\u0441\u043F\u0435\u0448\u043D\u043E \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043E\u0432\u0430\u043D"),this.isDisabled.set(!1)},1e3)})}logout(){return new b(r=>{this.isDisabled.set(!0),setTimeout(()=>{localStorage.removeItem("client_id"),this.client.set({id:null,username:null,email:null,role:null}),r.next("\u0423\u0441\u043F\u0435\u0448\u043D\u044B\u0439 \u0432\u044B\u0445\u043E\u0434"),this.isDisabled.set(!1)},1e3)})}refreshToken(){return new b(r=>{r.next("")})}static \u0275fac=function(e){return new(e||n)};static \u0275prov=f({token:n,factory:n.\u0275fac})};var de=class n{httpClient=s(A);destroyRef=s(I);cookieService=s(ee);isDisabled=v(!1);client=v({id:null,username:null,email:null,role:null});getClient(){return this.httpClient.get("/api/auth/me").pipe(p(this.destroyRef),z(()=>X),x(r=>(this.client.set(r),!0)))}login(r,e){return this.isDisabled.set(!0),this.httpClient.post("/api/auth/login",{login:r,password:e}).pipe(p(this.destroyRef),x(t=>(this.isDisabled.set(!1),localStorage.setItem(G,t.access_token),this.client.set({id:t.user.id,username:t.user.username,email:t.user.email,role:t.user.role}),"\u0423\u0441\u043F\u0435\u0448\u043D\u044B\u0439 \u0432\u0445\u043E\u0434")))}register(r,e,t){return this.isDisabled.set(!0),this.httpClient.post("/api/users/register",{username:r,password:e,email:t}).pipe(p(this.destroyRef),x(i=>(this.isDisabled.set(!1),this.client.set({id:i.user.id,username:i.user.username,email:i.user.email,role:i.user.role}),i.message)))}logout(){return this.httpClient.post("/api/auth/logout",{}).pipe(p(this.destroyRef),x(r=>(this.isDisabled.set(!1),localStorage.removeItem(G),this.client.set({id:null,username:null,email:null,role:null}),r.message)))}refreshToken(){return this.httpClient.post("/api/auth/refresh",null).pipe(p(this.destroyRef),x(r=>(localStorage.setItem(G,r.access_token),"")))}static \u0275fac=function(e){return new(e||n)};static \u0275prov=f({token:n,factory:n.\u0275fac})};var pe=class n{router=s(Ye);destroyRef=s(I);authService=s(V);isNavigating=v(!1);value=v(0);constructor(){this.authService.getClient().pipe(p(this.destroyRef)).subscribe(r=>{r&&this.authService.refreshToken().pipe(p(this.destroyRef)).subscribe()}),this.router.events.pipe(p(this.destroyRef)).subscribe(r=>{r instanceof qe&&(this.value.set(0),this.isNavigating.set(!0));for(let e=0;e<=100;e++)this.value.set(e);(r instanceof Je||r instanceof $e||r instanceof Ke)&&(this.value.set(100),this.isNavigating.set(!1))})}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=R({type:n,selectors:[["app-root"]],features:[$([{provide:H,useClass:ie},{provide:tt,useClass:w.useServiceLc?se:oe},{provide:W,useClass:ae},{provide:Z,useClass:le},{provide:Dt,useClass:w.useServiceLc?ce:me},{provide:V,useClass:w.useServiceLc?ue:de}])],decls:4,vars:2,consts:[["mode","determinate",1,"progress-bar",3,"hidden","value"]],template:function(e,t){e&1&&F(0,"mat-progress-bar",0)(1,"app-header")(2,"router-outlet")(3,"app-footer"),e&2&&_("hidden",!t.isNavigating())("value",t.value())},dependencies:[Qe,re,ne,Ut],encapsulation:2})};function tr(n){let r=n,e=Math.floor(Math.abs(n)),t=n.toString().replace(/^[^.]*\.?/,"").length;return t===0&&e%10===1&&e%100!==11?1:t===0&&e%10===Math.floor(e%10)&&e%10>=2&&e%10<=4&&!(e%100>=12&&e%100<=14)?3:t===0&&e%10===0||t===0&&e%10===Math.floor(e%10)&&e%10>=5&&e%10<=9||t===0&&e%100===Math.floor(e%100)&&e%100>=11&&e%100<=14?4:5}var jt=["ru",[["AM","PM"]],void 0,[["\u0412","\u041F","\u0412","\u0421","\u0427","\u041F","\u0421"],["\u0432\u0441","\u043F\u043D","\u0432\u0442","\u0441\u0440","\u0447\u0442","\u043F\u0442","\u0441\u0431"],["\u0432\u043E\u0441\u043A\u0440\u0435\u0441\u0435\u043D\u044C\u0435","\u043F\u043E\u043D\u0435\u0434\u0435\u043B\u044C\u043D\u0438\u043A","\u0432\u0442\u043E\u0440\u043D\u0438\u043A","\u0441\u0440\u0435\u0434\u0430","\u0447\u0435\u0442\u0432\u0435\u0440\u0433","\u043F\u044F\u0442\u043D\u0438\u0446\u0430","\u0441\u0443\u0431\u0431\u043E\u0442\u0430"],["\u0432\u0441","\u043F\u043D","\u0432\u0442","\u0441\u0440","\u0447\u0442","\u043F\u0442","\u0441\u0431"]],void 0,[["\u042F","\u0424","\u041C","\u0410","\u041C","\u0418","\u0418","\u0410","\u0421","\u041E","\u041D","\u0414"],["\u044F\u043D\u0432.","\u0444\u0435\u0432\u0440.","\u043C\u0430\u0440.","\u0430\u043F\u0440.","\u043C\u0430\u044F","\u0438\u044E\u043D.","\u0438\u044E\u043B.","\u0430\u0432\u0433.","\u0441\u0435\u043D\u0442.","\u043E\u043A\u0442.","\u043D\u043E\u044F\u0431.","\u0434\u0435\u043A."],["\u044F\u043D\u0432\u0430\u0440\u044F","\u0444\u0435\u0432\u0440\u0430\u043B\u044F","\u043C\u0430\u0440\u0442\u0430","\u0430\u043F\u0440\u0435\u043B\u044F","\u043C\u0430\u044F","\u0438\u044E\u043D\u044F","\u0438\u044E\u043B\u044F","\u0430\u0432\u0433\u0443\u0441\u0442\u0430","\u0441\u0435\u043D\u0442\u044F\u0431\u0440\u044F","\u043E\u043A\u0442\u044F\u0431\u0440\u044F","\u043D\u043E\u044F\u0431\u0440\u044F","\u0434\u0435\u043A\u0430\u0431\u0440\u044F"]],[["\u042F","\u0424","\u041C","\u0410","\u041C","\u0418","\u0418","\u0410","\u0421","\u041E","\u041D","\u0414"],["\u044F\u043D\u0432.","\u0444\u0435\u0432\u0440.","\u043C\u0430\u0440\u0442","\u0430\u043F\u0440.","\u043C\u0430\u0439","\u0438\u044E\u043D\u044C","\u0438\u044E\u043B\u044C","\u0430\u0432\u0433.","\u0441\u0435\u043D\u0442.","\u043E\u043A\u0442.","\u043D\u043E\u044F\u0431.","\u0434\u0435\u043A."],["\u044F\u043D\u0432\u0430\u0440\u044C","\u0444\u0435\u0432\u0440\u0430\u043B\u044C","\u043C\u0430\u0440\u0442","\u0430\u043F\u0440\u0435\u043B\u044C","\u043C\u0430\u0439","\u0438\u044E\u043D\u044C","\u0438\u044E\u043B\u044C","\u0430\u0432\u0433\u0443\u0441\u0442","\u0441\u0435\u043D\u0442\u044F\u0431\u0440\u044C","\u043E\u043A\u0442\u044F\u0431\u0440\u044C","\u043D\u043E\u044F\u0431\u0440\u044C","\u0434\u0435\u043A\u0430\u0431\u0440\u044C"]],[["\u0434\u043E \u043D.\u044D.","\u043D.\u044D."],["\u0434\u043E \u043D. \u044D.","\u043D. \u044D."],["\u0434\u043E \u0420\u043E\u0436\u0434\u0435\u0441\u0442\u0432\u0430 \u0425\u0440\u0438\u0441\u0442\u043E\u0432\u0430","\u043E\u0442 \u0420\u043E\u0436\u0434\u0435\u0441\u0442\u0432\u0430 \u0425\u0440\u0438\u0441\u0442\u043E\u0432\u0430"]],1,[6,0],["dd.MM.y","d MMM y\u202F'\u0433'.","d MMMM y\u202F'\u0433'.","EEEE, d MMMM y\u202F'\u0433'."],["HH:mm","HH:mm:ss","HH:mm:ss z","HH:mm:ss zzzz"],["{1}, {0}",void 0,void 0,void 0],[",","\xA0",";","%","+","-","E","\xD7","\u2030","\u221E","\u043D\u0435\xA0\u0447\u0438\u0441\u043B\u043E",":"],["#,##0.###","#,##0\xA0%","#,##0.00\xA0\xA4","#E0"],"RUB","\u20BD","\u0440\u043E\u0441\u0441\u0438\u0439\u0441\u043A\u0438\u0439 \u0440\u0443\u0431\u043B\u044C",{BYN:[void 0,"\u0440."],GEL:[void 0,"\u10DA"],PHP:[void 0,"\u20B1"],RON:[void 0,"L"],RUB:["\u20BD"],RUR:["\u0440."],THB:["\u0E3F"],TMT:["\u0422\u041C\u0422"],TWD:["NT$"],UAH:["\u20B4"],XXX:["XXXX"]},"ltr",tr];He(jt);je(pe,Ft).catch(n=>console.error(n));
