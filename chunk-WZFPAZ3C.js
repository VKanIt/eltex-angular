import{e as me,g as E,h as se,i as de,j as ce,k as Z}from"./chunk-7IWI6RVV.js";import{a as Vt,b as $t,c as qt,d as Ht,f as q,g as _,h as H,i as Jt,j as J,k as L,l as Qt,m as Kt,n as Xt,o as Yt,p as Zt,q as Q,r as N,s as K,t as te,u as ee,w as ie,x as ne,y as oe,z as ae}from"./chunk-4J24N5AP.js";import{P as p,Q as X,R as re,S as Y}from"./chunk-THNXNBAS.js";import{a as $,b as Ut}from"./chunk-OIP4OB57.js";import{f as zt}from"./chunk-4F7KV6NL.js";import{e as Gt,n as Lt,t as Wt}from"./chunk-JA35RNUH.js";import{$b as Tt,Ab as At,Bb as kt,Cb as u,Db as m,Eb as s,Fb as w,Gb as Ot,H as O,Hb as Bt,Ob as h,Pb as ut,Qb as pt,Rb as j,Ua as Rt,W as St,Wa as d,Y as U,a as st,aa as x,ac as Ft,ba as xt,bc as c,cc as C,da as I,dc as B,e as yt,ec as F,f as _t,fa as r,fc as Nt,gc as Pt,h as S,hb as f,i as dt,ib as wt,ic as gt,j as Mt,jb as V,kc as bt,l as z,oa as R,pc as jt,qa as It,s as Dt,sc as G,va as b,w as k,wb as ct,xb as lt,yb as Et}from"./chunk-KFF767DV.js";var M=new I("\u0421\u0435\u0440\u0432\u0438\u0441 \u0445\u0440\u0430\u043D\u0438\u043B\u0438\u0449\u0435 \u0434\u0430\u043D\u043D\u044B\u0445 \u0441\u0442\u0430\u0442\u044C\u0438");var W=new I("\u0421\u0435\u0440\u0432\u0438\u0441 \u0434\u043B\u044F \u0440\u0430\u0431\u043E\u0442\u044B \u0441 \u043E\u0434\u043D\u043E\u0439 \u0441\u0442\u0430\u0442\u044C\u0435\u0439");var tt=class n{limitComments=6;blog=b({id:1,date:new Date,title:"",text:"",image:null,rating:0,categoryId:null,comments:[]});comments=b([]);countComments=b(0);limitActiveComments=b(0);isDisabled=b(!1);updateBlog(e){this.blog.set(e)}updateComments(e){this.comments.set(e)}static \u0275fac=function(i){return new(i||n)};static \u0275prov=x({token:n,factory:n.\u0275fac})};var le=E`
query Article($id: ID!) {
    article(id: $id) {
        avgRating
        categoryId
        content
        createdAt
        id
        imgSrc
        rating
        title
        updatedAt
        votes
        votesCount
        comments {
            articleId
            avgRating
            content
            createdAt
            id
            rating
            username
            votes
            votesCount
        }
    }
}
`;var ue=E`
mutation CreateComment($body: CreateCommentInput!) {
    createComment(createComment: $body) {
        articleId
        avgRating
        content
        createdAt
        id
        rating
        username
        votes
        votesCount
    }
}
`;var pe=E`
mutation UpdateCommentRating($id: ID!, $rating: Float!) {
    updateCommentRating(id: $id, rating: $rating) {
        rating
    }
}`;var ge=E`
mutation ArticleUpdateRating($id: ID!, $rating: Float!) {
    articleUpdateRating(id: $id, rating: $rating) {
        rating
    }
}
`;var et=class n{blogStore=r(M);blogMapper=r(se);apollo=r(me);destroyRef=r(R);getBlog(e){return this.apollo.query({query:le,variables:{id:e}}).pipe(p(this.destroyRef),O(i=>(console.log(i),"")),k(i=>{let t=this.blogMapper.mapBlog(i.data.article);this.blogStore.updateBlog(t);let o=this.getCommentsBlog(t.id,!1);return this.blogStore.updateComments(o),""}))}addComment(e){return this.blogStore.isDisabled.set(!0),this.apollo.mutate({mutation:ue,variables:{body:{articleId:e.blogId,content:e.text,username:e.name}}}).pipe(p(this.destroyRef),O(i=>(console.log(i),[])),k(i=>{let t=this.blogMapper.mapComment(i.data.createComment),o=this.blogStore.blog().comments;return o.unshift(t),this.blogStore.isDisabled.set(!1),o}))}updateRatingBlog(e,i){return this.blogStore.isDisabled.set(!0),this.apollo.mutate({mutation:ge,variables:{id:e,rating:i}}).pipe(p(this.destroyRef),O(t=>(console.log(t),[])),k(t=>{let o=this.blogStore.blog();return o.rating=t.data.articleUpdateRating.rating,this.blogStore.isDisabled.set(!1),o}))}updateRatingComment(e,i){return this.blogStore.isDisabled.set(!0),this.apollo.mutate({mutation:pe,variables:{id:e,rating:i}}).pipe(p(this.destroyRef),O(t=>(console.log(t),[])),k(t=>{let o=this.blogStore.blog().comments,a=o.findIndex(l=>l.id===e);return o[a].rating=t.data.updateCommentRating.rating,this.blogStore.isDisabled.set(!1),o}))}getCommentsBlog(e,i=!1,t=[]){let o=t.length===0?this.blogStore.blog().comments:t;return o.sort((a,l)=>l.date.getTime()-a.date.getTime()),this.blogStore.countComments.set(o.length),i?this.blogStore.limitActiveComments.update(a=>a+this.blogStore.limitComments):t.length===0&&this.blogStore.limitActiveComments.set(this.blogStore.limitComments),o.slice(0,this.blogStore.limitActiveComments())}static \u0275fac=function(i){return new(i||n)};static \u0275prov=x({token:n,factory:n.\u0275fac})};var Me=["*"];var De=[[["","mat-card-avatar",""],["","matCardAvatar",""]],[["mat-card-title"],["mat-card-subtitle"],["","mat-card-title",""],["","mat-card-subtitle",""],["","matCardTitle",""],["","matCardSubtitle",""]],"*"],Se=["[mat-card-avatar], [matCardAvatar]",`mat-card-title, mat-card-subtitle,
      [mat-card-title], [mat-card-subtitle],
      [matCardTitle], [matCardSubtitle]`,"*"],xe=new I("MAT_CARD_CONFIG"),be=(()=>{class n{appearance;constructor(){let i=r(xe,{optional:!0});this.appearance=i?.appearance||"raised"}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=f({type:n,selectors:[["mat-card"]],hostAttrs:[1,"mat-mdc-card","mdc-card"],hostVars:8,hostBindings:function(t,o){t&2&&Tt("mat-mdc-card-outlined",o.appearance==="outlined")("mdc-card--outlined",o.appearance==="outlined")("mat-mdc-card-filled",o.appearance==="filled")("mdc-card--filled",o.appearance==="filled")},inputs:{appearance:"appearance"},exportAs:["matCard"],ngContentSelectors:Me,decls:1,vars:0,template:function(t,o){t&1&&(pt(),j(0))},styles:[`.mat-mdc-card {
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  position: relative;
  border-style: solid;
  border-width: 0;
  background-color: var(--mat-card-elevated-container-color, var(--mat-sys-surface-container-low));
  border-color: var(--mat-card-elevated-container-color, var(--mat-sys-surface-container-low));
  border-radius: var(--mat-card-elevated-container-shape, var(--mat-sys-corner-medium));
  box-shadow: var(--mat-card-elevated-container-elevation, var(--mat-sys-level1));
}
.mat-mdc-card::after {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: solid 1px transparent;
  content: "";
  display: block;
  pointer-events: none;
  box-sizing: border-box;
  border-radius: var(--mat-card-elevated-container-shape, var(--mat-sys-corner-medium));
}

.mat-mdc-card-outlined {
  background-color: var(--mat-card-outlined-container-color, var(--mat-sys-surface));
  border-radius: var(--mat-card-outlined-container-shape, var(--mat-sys-corner-medium));
  border-width: var(--mat-card-outlined-outline-width, 1px);
  border-color: var(--mat-card-outlined-outline-color, var(--mat-sys-outline-variant));
  box-shadow: var(--mat-card-outlined-container-elevation, var(--mat-sys-level0));
}
.mat-mdc-card-outlined::after {
  border: none;
}

.mat-mdc-card-filled {
  background-color: var(--mat-card-filled-container-color, var(--mat-sys-surface-container-highest));
  border-radius: var(--mat-card-filled-container-shape, var(--mat-sys-corner-medium));
  box-shadow: var(--mat-card-filled-container-elevation, var(--mat-sys-level0));
}

.mdc-card__media {
  position: relative;
  box-sizing: border-box;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
.mdc-card__media::before {
  display: block;
  content: "";
}
.mdc-card__media:first-child {
  border-top-left-radius: inherit;
  border-top-right-radius: inherit;
}
.mdc-card__media:last-child {
  border-bottom-left-radius: inherit;
  border-bottom-right-radius: inherit;
}

.mat-mdc-card-actions {
  display: flex;
  flex-direction: row;
  align-items: center;
  box-sizing: border-box;
  min-height: 52px;
  padding: 8px;
}

.mat-mdc-card-title {
  font-family: var(--mat-card-title-text-font, var(--mat-sys-title-large-font));
  line-height: var(--mat-card-title-text-line-height, var(--mat-sys-title-large-line-height));
  font-size: var(--mat-card-title-text-size, var(--mat-sys-title-large-size));
  letter-spacing: var(--mat-card-title-text-tracking, var(--mat-sys-title-large-tracking));
  font-weight: var(--mat-card-title-text-weight, var(--mat-sys-title-large-weight));
}

.mat-mdc-card-subtitle {
  color: var(--mat-card-subtitle-text-color, var(--mat-sys-on-surface));
  font-family: var(--mat-card-subtitle-text-font, var(--mat-sys-title-medium-font));
  line-height: var(--mat-card-subtitle-text-line-height, var(--mat-sys-title-medium-line-height));
  font-size: var(--mat-card-subtitle-text-size, var(--mat-sys-title-medium-size));
  letter-spacing: var(--mat-card-subtitle-text-tracking, var(--mat-sys-title-medium-tracking));
  font-weight: var(--mat-card-subtitle-text-weight, var(--mat-sys-title-medium-weight));
}

.mat-mdc-card-title,
.mat-mdc-card-subtitle {
  display: block;
  margin: 0;
}
.mat-mdc-card-avatar ~ .mat-mdc-card-header-text .mat-mdc-card-title,
.mat-mdc-card-avatar ~ .mat-mdc-card-header-text .mat-mdc-card-subtitle {
  padding: 16px 16px 0;
}

.mat-mdc-card-header {
  display: flex;
  padding: 16px 16px 0;
}

.mat-mdc-card-content {
  display: block;
  padding: 0 16px;
}
.mat-mdc-card-content:first-child {
  padding-top: 16px;
}
.mat-mdc-card-content:last-child {
  padding-bottom: 16px;
}

.mat-mdc-card-title-group {
  display: flex;
  justify-content: space-between;
  width: 100%;
}

.mat-mdc-card-avatar {
  height: 40px;
  width: 40px;
  border-radius: 50%;
  flex-shrink: 0;
  margin-bottom: 16px;
  object-fit: cover;
}
.mat-mdc-card-avatar ~ .mat-mdc-card-header-text .mat-mdc-card-subtitle,
.mat-mdc-card-avatar ~ .mat-mdc-card-header-text .mat-mdc-card-title {
  line-height: normal;
}

.mat-mdc-card-sm-image {
  width: 80px;
  height: 80px;
}

.mat-mdc-card-md-image {
  width: 112px;
  height: 112px;
}

.mat-mdc-card-lg-image {
  width: 152px;
  height: 152px;
}

.mat-mdc-card-xl-image {
  width: 240px;
  height: 240px;
}

.mat-mdc-card-subtitle ~ .mat-mdc-card-title,
.mat-mdc-card-title ~ .mat-mdc-card-subtitle,
.mat-mdc-card-header .mat-mdc-card-header-text .mat-mdc-card-title,
.mat-mdc-card-header .mat-mdc-card-header-text .mat-mdc-card-subtitle,
.mat-mdc-card-title-group .mat-mdc-card-title,
.mat-mdc-card-title-group .mat-mdc-card-subtitle {
  padding-top: 0;
}

.mat-mdc-card-content > :last-child:not(.mat-mdc-card-footer) {
  margin-bottom: 0;
}

.mat-mdc-card-actions-align-end {
  justify-content: flex-end;
}
`],encapsulation:2,changeDetection:0})}return n})(),fe=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275dir=V({type:n,selectors:[["mat-card-title"],["","mat-card-title",""],["","matCardTitle",""]],hostAttrs:[1,"mat-mdc-card-title"]})}return n})();var he=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275dir=V({type:n,selectors:[["mat-card-content"]],hostAttrs:[1,"mat-mdc-card-content"]})}return n})();var ve=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275cmp=f({type:n,selectors:[["mat-card-header"]],hostAttrs:[1,"mat-mdc-card-header"],ngContentSelectors:Se,decls:4,vars:0,consts:[[1,"mat-mdc-card-header-text"]],template:function(t,o){t&1&&(pt(De),j(0),Ot(1,"div",0),j(2,1),Bt(),j(3,2))},encapsulation:2,changeDetection:0})}return n})(),Ce=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275dir=V({type:n,selectors:[["mat-card-footer"]],hostAttrs:[1,"mat-mdc-card-footer"]})}return n})();var ye=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=wt({type:n});static \u0275inj=xt({imports:[zt]})}return n})();var we=n=>({invalid:n}),P=class n{validation=r(N);isDisabled=G(!1);initRating=G(0);ratingFormControl=jt(()=>{let e=new L({value:this.initRating(),disabled:!0},[_.required,_.pattern(/^\d+(\.\d+)?$/),_.max(5),_.min(0)]);return this.validation.setForm(new J({rating:e})),e});edit=new It;editRating(){if(this.ratingFormControl().disabled){this.ratingFormControl().enable();return}let e=Number(this.ratingFormControl().value);if(this.initRating()===e){this.ratingFormControl().disable();return}this.ratingFormControl().markAllAsTouched(),this.ratingFormControl().valid&&this.edit.emit(e)}static \u0275fac=function(i){return new(i||n)};static \u0275cmp=f({type:n,selectors:[["app-input-rating"]],inputs:{isDisabled:[1,"isDisabled"],initRating:[1,"initRating"]},outputs:{edit:"edit"},features:[F([{provide:N,useClass:K}])],decls:9,vars:10,consts:[[1,"rating","input-wrapper"],["type","text",1,"input-box",3,"formControl"],["matIconButton","",1,"btn-rating",3,"click","title","disabled"],[1,"invalid-message","error-rating",3,"hidden"]],template:function(i,t){if(i&1&&(m(0,"div",0)(1,"span"),c(2,"\u0420\u0435\u0439\u0442\u0438\u043D\u0433:"),s(),w(3,"input",1),m(4,"button",2),h("click",function(){return t.editRating()}),m(5,"mat-icon"),c(6),s()(),m(7,"span",3),c(8),s()()),i&2){let o=t.validation.isInvalid("rating");d(3),Ft(Pt(8,we,o)),u("formControl",t.ratingFormControl()),d(),u("title",t.ratingFormControl().disabled?"\u0418\u0437\u043C\u0435\u043D\u0438\u0442\u044C":"\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C")("disabled",t.isDisabled()),d(2),C(t.ratingFormControl().disabled?"edit":"save"),d(),u("hidden",!o),d(),B(" ",t.validation.getErrorMessage("rating","\u0440\u0435\u0439\u0442\u0438\u043D\u0433")," ")}},dependencies:[$,Zt,q,H,Q,Kt,X],styles:["[_nghost-%COMP%]{display:block}.rating[_ngcontent-%COMP%]{position:relative;display:flex;align-items:center}.rating[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{margin-inline:var(--p-m-1);border:0;font-size:var(--fs-6);width:40px;outline:none}.rating[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:not(:disabled){border-bottom:1px solid var(--bs-gray)}.rating[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:disabled{opacity:1}.rating[_ngcontent-%COMP%]   .btn-rating[_ngcontent-%COMP%]{color:#fff;background:var(--bs-success);--mat-icon-button-state-layer-size: 30px}.rating[_ngcontent-%COMP%]   .btn-rating[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%]{height:100%;width:100%;font-size:18px;display:flex;align-items:center;justify-content:center}.rating[_ngcontent-%COMP%]   .error-rating[_ngcontent-%COMP%]{position:absolute;top:-20px;right:0}"],changeDetection:0})};var it=class n{blogStore=r(M);blogRepository=r(W);destroyRef=r(R);isDisabled=this.blogStore.isDisabled;comment=G({id:1,name:"",text:"",date:new Date,rating:0,blogId:1});editRating(e){this.blogRepository.updateRatingComment(this.comment().id,e).pipe(p(this.destroyRef)).subscribe()}static \u0275fac=function(i){return new(i||n)};static \u0275cmp=f({type:n,selectors:[["app-card-comment"]],inputs:{comment:[1,"comment"]},decls:13,vars:12,consts:[["appearance","outlined",1,"card-comment"],[1,"mb-05"],[1,"text-hidden"],[1,"card-footer"],[3,"dateTime"],[3,"edit","initRating","isDisabled"]],template:function(i,t){i&1&&(m(0,"mat-card",0)(1,"mat-card-header",1)(2,"mat-card-title",2),c(3),s()(),m(4,"mat-card-content")(5,"p",2),c(6),s()(),m(7,"mat-card-footer",3)(8,"time",4),gt(9,"date"),c(10),gt(11,"date"),s(),m(12,"app-input-rating",5),h("edit",function(a){return t.editRating(a)}),s()()()),i&2&&(d(3),C(t.comment().name),d(3),C(t.comment().text),d(2),u("dateTime",bt(9,6,t.comment().date,"dd-MM-y")),d(2),B(" ",bt(11,9,t.comment().date,"d MMMM y \u0433.")," "),d(2),u("initRating",t.comment().rating)("isDisabled",t.isDisabled()))},dependencies:[ye,be,he,Ce,ve,fe,P,Gt],styles:[".card-footer[_ngcontent-%COMP%]{padding:16px;position:absolute;bottom:0;width:100%;display:flex;align-items:center;justify-content:space-between}.card-comment[_ngcontent-%COMP%]{height:250px;position:relative}.card-comment[_ngcontent-%COMP%]   .text-hidden[_ngcontent-%COMP%]{-webkit-line-clamp:5}"],changeDetection:0})};function Ee(n,e){if(n&1&&(m(0,"mat-error",6),c(1),s()),n&2){let i=ut();d(),C(i.validation.getErrorMessage("name","\u0438\u043C\u044F"))}}function Ae(n,e){if(n&1&&(m(0,"mat-error",6),c(1),s()),n&2){let i=ut();d(),C(i.validation.getErrorMessage("text","\u0442\u0435\u043A\u0441\u0442"))}}var nt=class n{dialogRef=r(Vt);data=r($t);validation=r(N);addCommentForm=new J({name:new L(null,[_.required]),text:new L(null,[_.required,_.minLength(25)])});constructor(){this.validation.setForm(this.addCommentForm)}closeDialog(){this.dialogRef.close()}addComment(e){e.preventDefault(),this.addCommentForm.markAllAsTouched(),this.addCommentForm.valid&&this.dialogRef.close(this.addCommentForm.value)}static \u0275fac=function(i){return new(i||n)};static \u0275cmp=f({type:n,selectors:[["app-add-comment-modal"]],features:[F([{provide:N,useClass:K}])],decls:21,vars:4,consts:[[1,"modal-header"],[1,"title"],["matIconButton","","title","\u0417\u0430\u043A\u0440\u044B\u0442\u044C",3,"click"],["novalidate","",3,"submit","formGroup"],[1,"mb-05"],["type","text","matInput","","formControlName","name"],[1,"invalid-message"],[1,"mb-1"],["type","text","matInput","","formControlName","text","rows","5"],[1,"content-center"],["matButton","filled","type","submit",3,"disabled"]],template:function(i,t){if(i&1&&(m(0,"div",0)(1,"p",1),c(2," \u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u043A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0439 "),s(),m(3,"button",2),h("click",function(){return t.closeDialog()}),m(4,"mat-icon"),c(5,"close"),s()()(),m(6,"mat-dialog-content")(7,"form",3),h("submit",function(a){return t.addComment(a)}),m(8,"mat-form-field",4)(9,"mat-label"),c(10,"\u0418\u043C\u044F"),s(),w(11,"input",5),ct(12,Ee,2,1,"mat-error",6),s(),m(13,"mat-form-field",7)(14,"mat-label"),c(15,"\u0422\u0435\u043A\u0441\u0442"),s(),w(16,"textarea",8),ct(17,Ae,2,1,"mat-error",6),s(),m(18,"div",9)(19,"button",10),c(20," \u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C "),s()()()()),i&2){d(7),u("formGroup",t.addCommentForm);let o=t.validation.isInvalid("name");d(5),lt(o?12:-1);let a=t.validation.isInvalid("text");d(5),lt(a?17:-1),d(2),u("disabled",t.data.isDisabled())}},dependencies:[Ht,Q,Qt,q,H,Jt,Yt,Xt,$,Y,re,X,ae,oe,ie,te,ee,ne],styles:["[_nghost-%COMP%]{display:block}"],changeDetection:0})};var ot=class n{blogStore=r(M);storageService=r(ce);getBlog(e){return new S(i=>{let t=this.storageService.loadInStorage("blogs"),o=this.getIndex(e,t),a=o!==-1?t[o]:null;a===null?i.error("\u0411\u043B\u043E\u0433 \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D"):(this.blogStore.updateBlog(a),this.blogStore.updateComments(this.getCommentsBlog(e)),i.next(""))})}addComment(e){return new S(i=>{this.blogStore.isDisabled.set(!0),setTimeout(()=>{let t=this.storageService.loadInStorage("comments");e.id=(t.length>0?t.reduce((o,a)=>Math.max(o,a.id),1):0)+1,t.unshift(e),localStorage.setItem("comments",JSON.stringify(t)),i.next(t),this.blogStore.isDisabled.set(!1)},1e3)})}updateRatingBlog(e,i){return new S(t=>{this.blogStore.isDisabled.set(!0),setTimeout(()=>{let o=this.storageService.loadInStorage("blogs"),a=this.getIndex(e,o);a===-1?t.error("\u0411\u043B\u043E\u0433 \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D"):(o[a].rating=i,localStorage.setItem("blogs",JSON.stringify(o)),t.next(o[a]),this.blogStore.isDisabled.set(!1))},1e3)})}updateRatingComment(e,i){return new S(t=>{this.blogStore.isDisabled.set(!0),setTimeout(()=>{let o=this.storageService.loadInStorage("comments"),a=this.getIndex(e,o);o[a].rating=i,localStorage.setItem("comments",JSON.stringify(o)),t.next(o),this.blogStore.isDisabled.set(!1)},1e3)})}getCommentsBlog(e,i=!1,t=[]){let o=t.length===0?this.storageService.loadInStorage("comments"):t;return o=o.filter(a=>a.blogId===e),this.blogStore.countComments.set(o.length),i?this.blogStore.limitActiveComments.update(a=>a+this.blogStore.limitComments):t.length===0&&this.blogStore.limitActiveComments.set(this.blogStore.limitComments),o.slice(0,this.blogStore.limitActiveComments())}getIndex(e,i){return i.findIndex(t=>t.id===e)}static \u0275fac=function(i){return new(i||n)};static \u0275prov=x({token:n,factory:n.\u0275fac})};var ht=new I("\u0421\u0435\u0440\u0432\u0438\u0441 \u0434\u043B\u044F \u0441\u043E\u0435\u0434\u0438\u043D\u0435\u043D\u0438\u044F \u043F\u043E websocket");var ke={url:"",deserializer:n=>JSON.parse(n.data),serializer:n=>JSON.stringify(n)},Oe="WebSocketSubject.error must be called with an object with an error code, and an optional reason: { code: number, reason: string }",at=class n extends Mt{constructor(e,i){if(super(),this._socket=null,e instanceof S)this.destination=i,this.source=e;else{let t=this._config=Object.assign({},ke);if(this._output=new dt,typeof e=="string")t.url=e;else for(let o in e)e.hasOwnProperty(o)&&(t[o]=e[o]);if(!t.WebSocketCtor&&WebSocket)t.WebSocketCtor=WebSocket;else if(!t.WebSocketCtor)throw new Error("no WebSocket constructor can be found");this.destination=new z}}lift(e){let i=new n(this._config,this.destination);return i.operator=e,i.source=this,i}_resetState(){this._socket=null,this.source||(this.destination=new z),this._output=new dt}multiplex(e,i,t){let o=this;return new S(a=>{try{o.next(e())}catch(v){a.error(v)}let l=o.subscribe({next:v=>{try{t(v)&&a.next(v)}catch(g){a.error(g)}},error:v=>a.error(v),complete:()=>a.complete()});return()=>{try{o.next(i())}catch(v){a.error(v)}l.unsubscribe()}})}_connectSocket(){let{WebSocketCtor:e,protocol:i,url:t,binaryType:o}=this._config,a=this._output,l=null;try{l=i?new e(t,i):new e(t),this._socket=l,o&&(this._socket.binaryType=o)}catch(g){a.error(g);return}let v=new yt(()=>{this._socket=null,l&&l.readyState===1&&l.close()});l.onopen=g=>{let{_socket:D}=this;if(!D){l.close(),this._resetState();return}let{openObserver:Ct}=this._config;Ct&&Ct.next(g);let mt=this.destination;this.destination=_t.create(y=>{if(l.readyState===1)try{let{serializer:T}=this._config;l.send(T(y))}catch(T){this.destination.error(T)}},y=>{let{closingObserver:T}=this._config;T&&T.next(void 0),y&&y.code?l.close(y.code,y.reason):a.error(new TypeError(Oe)),this._resetState()},()=>{let{closingObserver:y}=this._config;y&&y.next(void 0),l.close(),this._resetState()}),mt&&mt instanceof z&&v.add(mt.subscribe(this.destination))},l.onerror=g=>{this._resetState(),a.error(g)},l.onclose=g=>{l===this._socket&&this._resetState();let{closeObserver:D}=this._config;D&&D.next(g),g.wasClean?a.complete():a.error(g)},l.onmessage=g=>{try{let{deserializer:D}=this._config;a.next(D(g))}catch(D){a.error(D)}}}_subscribe(e){let{source:i}=this;return i?i.subscribe(e):(this._socket||this._connectSocket(),this._output.subscribe(e),e.add(()=>{let{_socket:t}=this;this._output.observers.length===0&&(t&&(t.readyState===1||t.readyState===0)&&t.close(),this._resetState())}),e)}unsubscribe(){let{_socket:e}=this;e&&(e.readyState===1||e.readyState===0)&&e.close(),this._resetState(),super.unsubscribe()}};function vt(n){return new at(n)}var rt=class n{enviroment=r(Z);destroyRef=r(R);isConnect=b(!1);socket;constructor(){if(this.enviroment.websocketUrl===null){this.socket=null;return}this.isConnect.set(!0),this.socket=vt(this.enviroment.websocketUrl),this.socket.pipe(U(e=>e),p(this.destroyRef)).subscribe({error:e=>console.error(e)})}subscribeArticle(e){if(this.socket===null){console.error("\u041E\u0442\u0441\u0443\u0442\u0441\u0442\u0432\u0443\u0435\u0442 URL \u0432\u0435\u0431\u0441\u043E\u043A\u0435\u0442\u0430");return}this.socket.next({event:"subscribe-article",data:e})}getChanged(){return this.socket?.asObservable()}static \u0275fac=function(i){return new(i||n)};static \u0275prov=x({token:n,factory:n.\u0275fac})};var Be=()=>({year:"numeric",month:"long",day:"numeric"});function Te(n,e){if(n&1&&(m(0,"div",9),w(1,"app-card-comment",13),s()),n&2){let i=e.$implicit;d(),u("comment",i)}}function Fe(n,e){n&1&&(m(0,"div",10),c(1," \u041D\u0435\u0442 \u043A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0435\u0432 "),s())}var _e=class n{blogStore=r(M);blogRepository=r(W);activatedRoute=r(Wt);destroyRef=r(R);dialog=r(qt);titlePage=r(Lt);enviroment=r(Z);websocket=r(ht);blogId=b(1);blog=this.blogStore.blog;comments=this.blogStore.comments;countComments=this.blogStore.countComments;limitActiveComments=this.blogStore.limitActiveComments;isEdit=b(!1);isDisabled=this.blogStore.isDisabled;websocketEvents=new Map([["ARTICLE_RATING_CHANGED",(e,i)=>{i.rating=e.rating,this.blogStore.updateBlog(i)}],["COMMENT_CREATED",(e,i)=>{i.comments.unshift({id:e.commentId,name:e.username,text:e.content,date:new Date(e.createdAt),rating:0,blogId:e.articleId}),this.blogStore.updateBlog(i);let t=this.blogRepository.getCommentsBlog(e.articleId,!1);this.blogStore.updateComments(t)}],["COMMENT_RATING_CHANGED",(e,i)=>{let t=i.comments.findIndex(l=>l.id===e.commentId),o=st({},i.comments[t]);o.rating=e.rating,i.comments[t]=o,this.blogStore.updateBlog(i);let a=this.blogRepository.getCommentsBlog(e.articleId,!1);this.blogStore.updateComments(a)}]]);constructor(){this.activatedRoute.params.pipe(k(e=>this.enviroment.useServiceLc?Number(e.id):e.id),U(e=>{this.blogId.set(e)}),St(e=>this.blogRepository.getBlog(e)),O(e=>Dt(()=>new Error(e))),p(this.destroyRef)).subscribe(()=>{this.titlePage.setTitle(this.blog().title),this.websocket.subscribeArticle(this.blog().id),this.websocket.getChanged()?.subscribe(e=>{let i=st({},this.blogStore.blog());i.comments=[...this.blogStore.blog().comments];let t=this.websocketEvents.get(e.type);t!==void 0&&t(e.payload,i)})})}editRating(e){this.blogRepository.updateRatingBlog(this.blogId(),e).pipe(p(this.destroyRef)).subscribe(i=>{this.websocket.isConnect()||this.blogStore.updateBlog(i)})}addComment(){this.dialog.open(nt,{data:{isDisabled:this.blogStore.isDisabled}}).afterClosed().pipe(p(this.destroyRef)).subscribe(i=>{if(i===void 0)return;this.blogRepository.addComment({id:1,date:new Date,name:i.name??"",text:i.text??"",rating:0,blogId:this.blogId()}).pipe(p(this.destroyRef)).subscribe(o=>{if(!this.websocket.isConnect()){let a=this.blogRepository.getCommentsBlog(this.blogId(),!1,o);this.blogStore.updateComments(a)}})})}getMore(){let e=this.blogRepository.getCommentsBlog(this.blogId(),!0);this.blogStore.updateComments(e)}static \u0275fac=function(i){return new(i||n)};static \u0275cmp=f({type:n,selectors:[["app-blog"]],features:[F([{provide:M,useClass:tt},{provide:W,useClass:de.useServiceLc?ot:et},{provide:ht,useClass:rt}])],decls:22,vars:11,consts:[[1,"subtitle","mb-3"],[3,"dateTime"],[3,"edit","initRating","isDisabled"],[1,"blog-img","mb-3"],[3,"src","alt"],[1,"mb-3"],[1,"comments-title"],[1,"btn",3,"click"],[1,"comments","m-wrap"],[1,"comments__layout"],[1,"for-empty"],[1,"content-center",3,"hidden"],[1,"btn","btn-outline",3,"click"],[3,"comment"]],template:function(i,t){i&1&&(m(0,"h1"),c(1),s(),m(2,"div",0)(3,"time",1),c(4),s(),m(5,"app-input-rating",2),h("edit",function(a){return t.editRating(a)}),s()(),m(6,"div",3),w(7,"img",4),s(),m(8,"p",5),c(9),s(),m(10,"div",6)(11,"h2"),c(12,"\u041A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0438"),s(),m(13,"button",7),h("click",function(){return t.addComment()}),c(14," \u041E\u0441\u0442\u0430\u0432\u0438\u0442\u044C \u043A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0439 "),s()(),m(15,"div",8),At(16,Te,2,1,"div",9,Et,!1,Fe,2,0,"div",10),s(),m(19,"div",11)(20,"button",12),h("click",function(){return t.getMore()}),c(21," \u041F\u043E\u043A\u0430\u0437\u0430\u0442\u044C \u0435\u0449\u0435 "),s()()),i&2&&(d(),C(t.blog().title),d(2),u("dateTime",t.blog().date.getFullYear()+"-"+t.blog().date.getMonth()+"-"+t.blog().date.getDate()),d(),B(" ",t.blog().date.toLocaleString("ru",Nt(10,Be))," "),d(),u("initRating",t.blog().rating)("isDisabled",t.isDisabled()),d(2),u("src",t.blog().image??"./assets/images/blogs/image_blog.png",Rt)("alt",t.blog().title),d(2),B(" ",t.blog().text,`
`),d(7),kt(t.comments()),d(3),u("hidden",t.countComments()<=t.limitActiveComments()))},dependencies:[Y,Ut,it,P],styles:["[_nghost-%COMP%]{display:block}h1[_ngcontent-%COMP%]{margin-bottom:var(--p-m-2)}time[_ngcontent-%COMP%]{color:var(--bs-gray)}.blog-img[_ngcontent-%COMP%]{height:400px;border-radius:var(--border-radius);overflow:hidden}.blog-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:100%;object-fit:cover}.subtitle[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between}.comments[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap}.comments__layout[_ngcontent-%COMP%]{width:33.333%;padding-inline:var(--p-m-2);padding-bottom:var(--p-m-3)}@media(max-width:1279px){.comments__layout[_ngcontent-%COMP%]{width:50%}}@media(max-width:800px){.comments__layout[_ngcontent-%COMP%]{width:100%;padding-inline:0}}.comments-title[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between}.comments-title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], .comments-title[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{margin-bottom:var(--p-m-3)}"],changeDetection:0})};export{_e as Blog};
