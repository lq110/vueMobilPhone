(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-dcb37aec"],{"1af6":function(t,r,n){var e=n("63b6");e(e.S,"Array",{isArray:n("9003")})},"20fd":function(t,r,n){"use strict";var e=n("d9f6"),i=n("aebd");t.exports=function(t,r,n){r in t?e.f(t,r,i(0,n)):t[r]=n}},"549b":function(t,r,n){"use strict";var e=n("d864"),i=n("63b6"),a=n("241e"),o=n("b0dc"),c=n("3702"),s=n("b447"),u=n("20fd"),f=n("7cd6");i(i.S+i.F*!n("4ee1")(function(t){Array.from(t)}),"Array",{from:function(t){var r,n,i,d,l=a(t),h="function"==typeof this?this:Array,p=arguments.length,v=p>1?arguments[1]:void 0,b=void 0!==v,g=0,m=f(l);if(b&&(v=e(v,p>2?arguments[2]:void 0,2)),void 0==m||h==Array&&c(m))for(r=s(l.length),n=new h(r);r>g;g++)u(n,g,b?v(l[g],g):l[g]);else for(d=m.call(l),n=new h;!(i=d.next()).done;g++)u(n,g,b?o(d,v,[i.value,g],!0):i.value);return n.length=g,n}})},"54a1":function(t,r,n){n("6c1c"),n("1654"),t.exports=n("95d5")},"642b":function(t,r,n){"use strict";n.r(r);var e=function(){var t=this,r=t.$createElement,n=t._self._c||r;return n("div",{staticClass:"container"},[n("van-list",{attrs:{finished:t.finished,"finished-text":"没有更多了",error:t.error,"error-text":"请求失败，点击重新加载","immediate-check":!1},on:{"update:error":function(r){t.error=r},load:t.onLoad},model:{value:t.loading,callback:function(r){t.loading=r},expression:"loading"}},t._l(t.list,function(r){return n("div",{key:r.id},[n("router-link",{attrs:{to:{path:"/detail/"+r.id}}},[t._v("点我发送数据")]),n("router-link",{attrs:{to:{path:"/detail",params:{id:20,name:"lq"}},tag:"div"}},[n("van-card",{attrs:{price:r.price,desc:r.info,title:r.name,thumb:r.img}})],1)],1)}),0)],1)},i=[],a=n("75fc"),o=(n("96cf"),n("3b8d")),c=n("365c"),s={data:function(){return{list:[],loading:!1,finished:!1,page:1,hasMore:!0,error:!1}},created:function(){this.getL()},methods:{getL:function(){var t=Object(o["a"])(regeneratorRuntime.mark(function t(){var r,n,e;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(c["c"])(this.page);case 3:r=t.sent,n=r.list,e=r.hasMore,this.list=[].concat(Object(a["a"])(this.list),Object(a["a"])(n)),this.hasMore=e,0==this.hasMore&&(this.finished=!0,this.loading=!1),t.next=14;break;case 11:t.prev=11,t.t0=t["catch"](0),this.error=!0;case 14:case"end":return t.stop()}},t,this,[[0,11]])}));function r(){return t.apply(this,arguments)}return r}(),loadmore:function(){this.page=this.page+1,this.getL()},onLoad:function(){this.loadmore()}}},u=s,f=(n("93ca"),n("2877")),d=Object(f["a"])(u,e,i,!1,null,null,null);r["default"]=d.exports},"75fc":function(t,r,n){"use strict";var e=n("a745"),i=n.n(e);function a(t){if(i()(t)){for(var r=0,n=new Array(t.length);r<t.length;r++)n[r]=t[r];return n}}var o=n("774e"),c=n.n(o),s=n("c8bb"),u=n.n(s);function f(t){if(u()(Object(t))||"[object Arguments]"===Object.prototype.toString.call(t))return c()(t)}function d(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function l(t){return a(t)||f(t)||d()}n.d(r,"a",function(){return l})},"774e":function(t,r,n){t.exports=n("d2d5")},9003:function(t,r,n){var e=n("6b4c");t.exports=Array.isArray||function(t){return"Array"==e(t)}},"93ca":function(t,r,n){"use strict";var e=n("a2a1"),i=n.n(e);i.a},"95d5":function(t,r,n){var e=n("40c3"),i=n("5168")("iterator"),a=n("481b");t.exports=n("584a").isIterable=function(t){var r=Object(t);return void 0!==r[i]||"@@iterator"in r||a.hasOwnProperty(e(r))}},a2a1:function(t,r,n){},a745:function(t,r,n){t.exports=n("f410")},c8bb:function(t,r,n){t.exports=n("54a1")},d2d5:function(t,r,n){n("1654"),n("549b"),t.exports=n("584a").Array.from},f410:function(t,r,n){n("1af6"),t.exports=n("584a").Array.isArray}}]);
//# sourceMappingURL=chunk-dcb37aec.8f63d994.js.map