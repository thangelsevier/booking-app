(this["webpackJsonpbooking-app"]=this["webpackJsonpbooking-app"]||[]).push([[0],{34:function(t,e,n){},35:function(t,e,n){},36:function(t,e,n){},43:function(t,e,n){},45:function(t,e,n){"use strict";n.r(e);var a=n(0),c=n.n(a),r=n(17),s=n.n(r),i=(n(34),n(9)),o=n(10),l=n(12),j=n(11),h=(n(35),n(55)),u=n(54),b=n(57),d=n(48),O=n(52),m=n(51),x=(n(36),n(1)),p=[{name:"Home",to:"/",exact:!0},{name:"About us",to:"/about",exact:!1},{name:"Contact",to:"/contact",exact:!1},{name:"Login",to:"/login",exact:!1}],g=function(t){var e=t.label,n=t.to,a=t.activeOnlyWhenExact;return Object(x.jsx)(h.a,{path:n,exact:a,children:function(t){var a=t.match?"active":"";return Object(x.jsx)(O.a.Link,{active:a,href:n,className:"my-link",children:e})}})},f=function(t){Object(l.a)(n,t);var e=Object(j.a)(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).showMenus=function(t){var e=null;return t.length>0&&(e=t.map((function(t,e){return Object(x.jsx)(g,{label:t.name,to:t.to,activeOnlyWhenExact:t.exact},e)}))),e},t}return Object(o.a)(n,[{key:"render",value:function(){return Object(x.jsx)("div",{className:"Menu",children:Object(x.jsx)(d.a,{fluid:!0,className:"bg-dark",children:Object(x.jsx)(m.a,{bg:"dark",variant:"dark",children:Object(x.jsx)(m.a.Collapse,{id:"basic-navbar-nav",children:Object(x.jsx)(O.a,{className:"mr-auto",children:this.showMenus(p)})})})})})}}]),n}(a.Component),v=n(49),k=(n(43),function(t){Object(l.a)(n,t);var e=Object(j.a)(n);function n(){return Object(i.a)(this,n),e.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(x.jsx)("div",{className:"Home",children:Object(x.jsxs)(d.a,{fluid:!0,className:"bg-transparent description-content",children:[Object(x.jsx)("h3",{children:"Welcome to"}),Object(x.jsx)("h1",{children:"Sushi Booking"}),Object(x.jsxs)("span",{children:["M\u1ed9t ng\xe0y b\u1eadn r\u1ed9n, c\xf4ng vi\u1ec7c ch\u1ea5t \u0111\u1ed1ng kh\xf4ng c\xf3 th\u1eddi gian \u0111\u1ec3 \u0111\u1ebfn nh\xe0 h\xe0ng th\u01b0\u1edfng th\u1ee9c sashimi? ",Object(x.jsx)("br",{})," \u0110\u1eebng lo v\xec \u0111\xe3 c\xf3 Sushi Booking v\u1edbi d\u1ecbch v\u1ee5 delivery ti\u1ec7n l\u1ee3i v\u1edbi c\xf4ng ngh\u1ec7 \u0111\xf3ng g\xf3i cao c\u1ea5p, gi\xfap l\u01b0u gi\u1eef \u0111\u1ed9 t\u01b0\u01a1i ngon c\u1ee7a sashimi trong su\u1ed1t qu\xe3ng \u0111\u01b0\u1eddng!"]}),Object(x.jsx)("br",{}),Object(x.jsx)(v.a,{variant:"danger",children:Object(x.jsx)("span",{children:Object(x.jsx)("b",{children:Object(x.jsx)("a",{href:"/contact",children:"Booking Now"})})})})]})})}}]),n}(a.Component)),y=n(50);var C=function(){return Object(x.jsx)("div",{className:"About",children:Object(x.jsxs)(d.a,{fluid:!0,className:"bg-dark",children:[Object(x.jsx)("h1",{children:"Sushi Booking"}),Object(x.jsxs)(v.a,{variant:"primary",children:["Phone ",Object(x.jsx)(y.a,{variant:"light",children:"0368639868"}),Object(x.jsx)("span",{className:"sr-only",children:"unread messages"})]})]})})},N=n(56),w=function(t){Object(l.a)(n,t);var e=Object(j.a)(n);function n(t){var a;return Object(i.a)(this,n),(a=e.call(this,t)).onCick=function(t){a.setState({isChecked:t})},a.state={isChecked:!1},a}return Object(o.a)(n,[{key:"render",value:function(){var t=this,e=this.state.isChecked;return Object(x.jsxs)("div",{children:["Day la trang lien he",Object(x.jsx)("br",{}),Object(x.jsx)("button",{type:"button",className:"btn btn-info",onClick:function(){return t.onCick(!1)},children:"Cho phep"}),"\xa0",Object(x.jsx)("button",{type:"button",className:"btn btn-default",onClick:function(){return t.onCick(!0)},children:"Khong Cho phep"}),Object(x.jsx)(N.a,{when:e,message:function(t){return"Ban chac chan muon di den ".concat(t.pathname)}})]})}}]),n}(a.Component),S=n(29),P=n(53),B=function(t){Object(l.a)(n,t);var e=Object(j.a)(n);function n(t){var a;return Object(i.a)(this,n),(a=e.call(this,t)).onChange=function(t){var e=t.target,n=e.name,c="checkbox"===e.type?e.checked:e.value;a.setState(Object(S.a)({},n,c))},a.onLogin=function(t){t.preventDefault();var e=a.state,n=e.txtUsername,c=e.txtPassword;"admin"===n&&"admin"===c&&localStorage.setItem("user",JSON.stringify({username:n,password:c}))},a.state={txtUsername:"",txtPassword:""},a}return Object(o.a)(n,[{key:"render",value:function(){var t=this.state,e=t.txtUsername,n=t.txtPassword,a=localStorage.getItem("user"),c=this.props.location;return console.log(a),null!==a?Object(x.jsx)(P.a,{to:{pathname:"/products",state:{from:c}}}):Object(x.jsx)("div",{className:"row",children:Object(x.jsx)("div",{className:"col-xs-6 col-sm-6 col-md-6 col-lg-6 col-xs-push-3",children:Object(x.jsxs)("form",{onSubmit:this.onLogin,children:[Object(x.jsx)("legend",{children:"Dang Nhap"}),Object(x.jsxs)("div",{className:"form-group",children:[Object(x.jsx)("label",{htmlFor:"",children:"Username"}),Object(x.jsx)("input",{type:"text",className:"form-control",name:"txtUsername",value:e,onChange:this.onChange})]}),Object(x.jsxs)("div",{className:"form-group",children:[Object(x.jsx)("label",{htmlFor:"",children:"Password"}),Object(x.jsx)("input",{type:"password",className:"form-control",name:"txtPassword",value:n,onChange:this.onChange})]}),Object(x.jsx)("button",{type:"submit",className:"btn btn-primary",children:"Dang Nhap"})]})})})}}]),n}(a.Component),M=function(t){Object(l.a)(n,t);var e=Object(j.a)(n);function n(){return Object(i.a)(this,n),e.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(x.jsx)("h1",{children:"404 - Khong tim thay trang"})}}]),n}(a.Component),F=[{path:"/",exact:!0,main:function(){return Object(x.jsx)(k,{})}},{path:"/about",exact:!1,main:function(){return Object(x.jsx)(C,{})}},{path:"/contact",exact:!1,main:function(){return Object(x.jsx)(w,{})}},{path:"/notfound",exact:!1,main:function(){return Object(x.jsx)(M,{})}},{path:"/login",exact:!1,main:function(t){var e=t.location;return Object(x.jsx)(B,{location:e})}}],L=function(t){Object(l.a)(n,t);var e=Object(j.a)(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).showContentMenu=function(t){var e=null;return t.length>0&&(e=t.map((function(t,e){return Object(x.jsx)(h.a,{path:t.path,exact:t.exact,component:t.main},e)}))),e},t}return Object(o.a)(n,[{key:"render",value:function(){return Object(x.jsx)(u.a,{children:Object(x.jsxs)("div",{className:"App",children:[Object(x.jsx)(f,{}),Object(x.jsx)(b.a,{children:this.showContentMenu(F)})]})})}}]),n}(a.Component),A=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,58)).then((function(e){var n=e.getCLS,a=e.getFID,c=e.getFCP,r=e.getLCP,s=e.getTTFB;n(t),a(t),c(t),r(t),s(t)}))};n(44);s.a.render(Object(x.jsx)(c.a.StrictMode,{children:Object(x.jsx)(L,{})}),document.getElementById("root")),A()}},[[45,1,2]]]);
//# sourceMappingURL=main.07b79129.chunk.js.map