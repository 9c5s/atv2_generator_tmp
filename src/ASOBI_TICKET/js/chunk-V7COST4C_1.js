import{a as L,b as ht,c as ft,d as gt}from"./chunk-7SN4JMZG.js";import{a as tt}from"./chunk-LJUQJ5BL.js";import{A as pt,D as lt,E as mt,F as ut,I as dt,n as et,v as at,x as st,y as ct}from"./chunk-JIHS3ZDA.js";import{a as it,b as nt,c as rt}from"./chunk-TZWJ3GWP.js";import{a as K,b as Y}from"./chunk-6BQ47HOA.js";import{a as T}from"./chunk-Q3ZDF7N3.js";import{a as Q,b as X}from"./chunk-GQ2Y3PYG.js";import{i as ot}from"./chunk-FOLYN2CC.js";import{c as Z,i as v}from"./chunk-264EOGRT.js";import{$a as s,A as $,Aa as r,Cc as E,Eb as _,Fb as H,Hb as O,Ib as R,Qa as h,Rb as I,S as F,Sa as p,Sc as J,Vc as W,W as w,Wa as d,Xc as M,Ya as S,Za as x,_ as m,_a as a,ab as l,ba as g,bb as P,cb as D,eb as U,gb as q,ib as u,ka as j,la as z,lc as V,qc as G,ra as C,tb as f,ub as y,ya as N}from"./chunk-I424EGRW.js";function xt(t,e){if(t&1&&(a(0,"picture",1),l(1,"source",3)(2,"source",4)(3,"img",5),s()),t&2){let n=e,o=u();r(),p("srcset",n.readingUrls.medium),r(),p("srcset",n.readingUrls.large),r(),p("src",n.readingUrls.medium,N)("alt",o.booth().name)}}var k=(()=>{let e=class e{constructor(){this.booth=C.required()}};e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=g({type:e,selectors:[["tpl-booth-overview"]],inputs:{booth:[1,"booth"]},standalone:!0,features:[_],decls:4,vars:2,consts:[[1,"booth-cover"],[1,"booth-cover-image"],[1,"booth-title"],["media","(max-width: 599px)",3,"srcset"],["media","(min-width: 599px)",3,"srcset"],[3,"src","alt"]],template:function(i,c){if(i&1&&(a(0,"div",0),h(1,xt,4,4,"picture",1),s(),a(2,"h2",2),f(3),s()),i&2){let b;r(),d((b=c.booth().coverImage)?1:-1,b),r(2),y(c.booth().name)}},styles:["[_nghost-%COMP%]{display:block}.booth-cover-image[_ngcontent-%COMP%]{pointer-events:none;-webkit-user-select:none;user-select:none;width:100%}.booth-cover-image[_ngcontent-%COMP%] > img[_ngcontent-%COMP%]{display:block;width:100%}.booth-title[_ngcontent-%COMP%]{background-color:var(--tpl-color-form-background);font-size:1.8rem;font-weight:700;padding:16px 20px}"],changeDetection:0});let t=e;return t})();var _t=(()=>{let e=class e{constructor(){this.baseUrl="v1/public/booths",this.http=m(G)}fetchBooths({page:o,perPage:i}){return this.http.get(this.baseUrl,{params:new V().set("page",o.toString()).set("per_page",i.toString())})}fetchBoothBySlug(o){return this.http.get(`${this.baseUrl}/${o}`)}};e.\u0275fac=function(i){return new(i||e)},e.\u0275prov=w({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})();var A=(()=>{let e=class e{constructor(){this.boothPage=new Z(50),this.boothApi=m(_t),this.store=m(v)}fetchBooths({init:o}={init:!0}){let i=o?1:this.boothPage.page+1;return this.boothApi.fetchBooths({page:i,perPage:50}).pipe(F(c=>{this.store.dispatch(L.setBooths({init:o,booths:c})),this.boothPage.page=i,this.boothPage.setPage(c)}))}fetchBoothBySlug(o){return this.boothApi.fetchBoothBySlug(o).pipe(F(i=>{this.store.dispatch(L.setBooth({booth:i}))}))}};e.\u0275fac=function(i){return new(i||e)},e.\u0275prov=w({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})();var bt=(t,e)=>e.id;function wt(t,e){if(t&1&&l(0,"tbx-wysiwyg-body",4),t&2){let n=u();p("body",n.mainBody)}}function Pt(t,e){if(t&1&&(a(0,"tpl-breadcrumb")(1,"tpl-breadcrumb-item")(2,"a",2),f(3),O(4,"ticketLocale"),s()(),a(5,"tpl-breadcrumb-item")(6,"span"),f(7),s()()(),a(8,"div",1),l(9,"tpl-booth-overview",3),h(10,wt,1,1,"tbx-wysiwyg-body",4),O(11,"isBodyPresent"),s()),t&2){let n=e;r(3),y(R(4,4,"pages.boothList.title")),r(4),y(n.name),r(2),p("booth",n),r(),d(n.mainBody&&R(11,6,n.mainBody)?10:-1)}}function Dt(t,e){t&1&&(a(0,"div",1),l(1,"tpl-news-list-section",5),s()),t&2&&(r(),p("news",e))}function Et(t,e){if(t&1&&l(0,"tpl-reception-item",9),t&2){let n=e.$implicit,o=u(4);p("reception",n)("entryStatus",o.getReceptionStatus(n))}}function Mt(t,e){if(t&1&&(a(0,"div",1),l(1,"tpl-section-header",6),a(2,"div",7),f(3," \u4EE5\u4E0B\u306E\u30C1\u30B1\u30C3\u30C8\u53D7\u4ED8\u306F\u8A8D\u8A3C\u60C5\u5831\u3092\u5165\u529B\u6E08\u307F\u306E\u53D7\u4ED8\u3067\u3059\u3002\u3053\u306E\u30DA\u30FC\u30B8\u3092\u9589\u3058\u308B\u3068\u3001\u518D\u5EA6\u8A8D\u8A3C\u304C\u5FC5\u8981\u306B\u306A\u308A\u307E\u3059\u3002 "),s(),a(4,"div",8),S(5,Et,1,2,"tpl-reception-item",9,bt),s()()),t&2){let n=u();r(5),x(n)}}function Tt(t,e){t&1&&h(0,Mt,7,0,"div",1),t&2&&d(e.length>0?0:-1)}function kt(t,e){if(t&1&&l(0,"tpl-reception-item",9),t&2){let n=e.$implicit,o=u(3);p("reception",n)("entryStatus",o.getReceptionStatus(n))}}function At(t,e){t&1&&(a(0,"tpl-empty-state")(1,"div",11),f(2,"\u53D7\u4ED8\u304C\u3042\u308A\u307E\u305B\u3093"),s()())}function Ft(t,e){t&1&&(a(0,"div",1),l(1,"tpl-section-header",10),a(2,"div",8),S(3,kt,1,2,"tpl-reception-item",9,bt,!1,At,3,0,"tpl-empty-state"),s()()),t&2&&(r(3),x(e))}function Ot(t,e){if(t&1&&(P(0),h(1,Pt,12,8)(2,Dt,2,1,"div",1)(3,Tt,1,1)(4,Ft,6,1,"div",1),D()),t&2){let n,o,i,c,b=u();r(),d((n=b.booth())?1:-1,n),r(),d((o=b.latestNews())?2:-1,o),r(),d((i=b.authorizedReceptions())?3:-1,i),r(),d((c=b.receptions())?4:-1,c)}}var Ct=(()=>{let e=class e{constructor(){this.boothSlug=C.required({alias:"slug"}),this.store=m(v),this.boothService=m(A),this.receptionService=m(lt),this.receptionAccessControlService=m(ct),this.newsService=m(nt),this.receptions=this.store.selectSignal(at),this.newsItems=this.latestNews=I(()=>this.store.selectSignal(it)().slice(0,5))}ngOnInit(){let o=this.boothSlug();this.booth=this.store.selectSignal(ft(o)),this.authorizedReceptions=I(()=>this.store.selectSignal(st)().filter(c=>c.tour.booth.id===o)),this.fetchResources$=$([this.boothService.fetchBoothBySlug(o),this.receptionService.fetchReceptions({boothSlug:o}),this.newsService.fetchNews({boothSlug:o,init:!0})]),this.receptionAccessControlService.restoreAuthorizedReceptions()}getReceptionStatus(o){return ut(o)}};e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=g({type:e,selectors:[["page-booth-detail"]],inputs:{boothSlug:[1,"slug","boothSlug"]},standalone:!0,features:[_],decls:1,vars:1,consts:[[4,"tbxSuspense"],[1,"section"],["routerLink","/booths"],[3,"booth"],[1,"booth-body",3,"body"],[3,"news"],["title","\u9650\u5B9A\u53D7\u4ED8"],[1,"reception-info"],[1,"reception-list"],["routePrefix","/receptions/",3,"reception","entryStatus"],["title","\u53D7\u4ED8\u4E00\u89A7"],[1,"message"]],template:function(i,c){i&1&&h(0,Ot,5,4,"ng-container",0),i&2&&p("tbxSuspense",c.fetchResources$)},dependencies:[E,M,k,W,mt,T,Y,pt,X,Q,ot,et],styles:["tpl-breadcrumb[_ngcontent-%COMP%]{margin:-32px -24px 0}tpl-booth-overview[_ngcontent-%COMP%]{margin:0 -24px}.section[_ngcontent-%COMP%] + .section[_ngcontent-%COMP%]{margin-top:32px}.booth-body[_ngcontent-%COMP%]{margin-top:16px}.reception-list[_ngcontent-%COMP%]{margin-top:24px}.reception-info[_ngcontent-%COMP%]{background-color:var(--tpl-color-background-accent);border-radius:var(--tpl-radius);color:var(--tpl-color-text-light);font-size:1.4rem;font-weight:500;margin-top:16px;padding:20px}"]});let t=e;return t})();var Rt=(t,e)=>e.id,It=t=>["/booths",t];function Lt(t,e){if(t&1&&(a(0,"div",1),l(1,"tpl-booth-overview",2),s()),t&2){let n=e.$implicit;r(),p("booth",n)("routerLink",H(2,It,n.id))}}function $t(t,e){if(t&1&&(a(0,"div",0),S(1,Lt,2,4,"div",1,Rt),s()),t&2){let n=u();r(),x(n.booths())}}function jt(t,e){t&1&&(a(0,"tpl-empty-state")(1,"div",3),f(2,"\u30D6\u30FC\u30B9\u304C\u3042\u308A\u307E\u305B\u3093"),s()())}var vt=(()=>{let e=class e{constructor(){this.booths=C.required()}};e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=g({type:e,selectors:[["tpl-booth-collection"]],inputs:{booths:[1,"booths"]},standalone:!0,features:[_],decls:2,vars:1,consts:[[1,"booth-list"],["tpl-tappable","",1,"booth-item"],[3,"booth","routerLink"],[1,"message"]],template:function(i,c){i&1&&h(0,$t,3,0,"div",0)(1,jt,3,0,"tpl-empty-state"),i&2&&d(c.booths().length>0?0:1)},dependencies:[E,k,T,tt],styles:[".booth-list[_ngcontent-%COMP%]{display:grid;gap:60px 16px;grid-template-columns:repeat(2,1fr)}@media screen and (max-width: 768px){.booth-list[_ngcontent-%COMP%]{gap:48px;grid-template-columns:repeat(1,1fr)}}.booth-item[_ngcontent-%COMP%]{cursor:pointer;transition:opacity .1s}"],changeDetection:0});let t=e;return t})();function zt(t,e){if(t&1){let n=U();l(0,"tpl-booth-collection",1),a(1,"tbx-infinite-scroll",2),q("infiniteScroll",function(i){j(n);let c=u(2);return z(c.onScrolled(i))}),l(2,"tpl-loader-block"),s()}if(t&2){let n=e,o=u(2);p("booths",n),r(),p("disabled",n.length===0||o.loaded)}}function Nt(t,e){if(t&1&&(P(0),h(1,zt,3,2),D()),t&2){let n,o=u();r(),d((n=o.booths())?1:-1,n)}}var St=(()=>{let e=class e{constructor(){this.loaded=!1,this.boothService=m(A),this.store=m(v),this.loadingMore=!1,this.booths=this.store.selectSignal(ht),this.fetchBooths=this.boothService.fetchBooths()}onScrolled(o){if(this.boothService.boothPage.isComplete){o.complete(),this.loaded=!0;return}this.loadingMore||(this.loadingMore=!0,this.boothService.fetchBooths({init:!1}).subscribe({next:()=>{this.loadingMore=!1,o.complete()},error:()=>{this.loadingMore=!1,o.complete()}}))}};e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=g({type:e,selectors:[["page-booth-list"]],standalone:!0,features:[_],decls:1,vars:1,consts:[[4,"tbxSuspense"],[3,"booths"],[3,"infiniteScroll","disabled"]],template:function(i,c){i&1&&h(0,Nt,2,1,"ng-container",0),i&2&&p("tbxSuspense",c.fetchBooths)},dependencies:[J,M,vt,K],styles:["[_nghost-%COMP%]{display:block;margin:0 -24px}"]});let t=e;return t})();var Ut=[{path:"",providers:[gt(),rt(),dt()],children:[{path:"",component:St},{path:":slug",component:Ct}]}],We=Ut;export{Ut as a,We as b};
//# sourceMappingURL=chunk-V7COST4C.js.map
