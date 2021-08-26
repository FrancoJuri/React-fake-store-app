(this["webpackJsonpfake-store-app"]=this["webpackJsonpfake-store-app"]||[]).push([[0],{163:function(e,t,a){},164:function(e,t,a){"use strict";a.r(t);var c=a(2),s=a(35),r=a.n(s),n=a(10),i=a(11),l=a(66),o="[cart] add",d="[cart] incrementQuantity",j="[cart] decrementQuantity",b="[cart] delete",u="[cart] deleteAll",m="[auth] login",h="[auth] logout",p="[ui] setError",x="[ui] unSetError",f="[ui] startLoading",O="[ui] finishLoading",g=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case o:return[t.payload].concat(Object(l.a)(e));case d:return e.map((function(a){return a.id===t.payload?Object(i.a)(Object(i.a)({},a),{},{quantity:a.quantity+1}):e}));case j:return e.map((function(a){return a.id===t.payload?Object(i.a)(Object(i.a)({},a),{},{quantity:a.quantity-1}):e}));case b:return e.filter((function(e){return e.id!==t.payload}));case u:return[];default:return e}},y=Object(c.createContext)(),v=a(6),N=a(7),w=function(e){var t=Object(c.useRef)(!0),a=Object(c.useState)({data:null,loading:!0,error:null}),s=Object(n.a)(a,2),r=s[0],i=s[1];return Object(c.useEffect)((function(){return function(){t.current=!1}}),[]),Object(c.useEffect)((function(){i({data:null,error:null,loading:!0}),fetch(e).then((function(e){return e.json()})).then((function(e){t.current&&i({loading:!1,data:e,error:null})})).catch((function(){return i({data:null,loading:!1,error:"No se pudo cargar la info"})}))}),[e]),r},k=a(1),C=function(e){var t=e.title,a=e.link,c=e.desc;return Object(k.jsxs)("div",{className:"mx-auto mt-4 card text-white bg-dark mb-3",style:{maxWidth:"19rem"},children:[Object(k.jsx)("div",{className:"card-header",children:Object(k.jsx)("h5",{className:"card-title",children:t})}),Object(k.jsxs)("div",{className:"card-body",children:[Object(k.jsxs)("p",{className:"card-text",children:["If you are looking for ",c," products this is your place"]}),Object(k.jsx)(v.b,{to:"/category/".concat(a),className:"btn btn-primary",children:"Go There"})]})]})},E=function(){return Object(k.jsxs)("div",{className:"mt-5",children:[Object(k.jsx)("h2",{className:"text-center",children:"Categories"}),Object(k.jsxs)("div",{className:"category-cards mt-4 justify-content-center d-flex gap-4",children:[Object(k.jsxs)("div",{className:"card text-white bg-dark mb-3",style:{maxWidth:"19rem"},children:[Object(k.jsx)("div",{className:"card-header",children:Object(k.jsx)("h5",{className:"card-title",children:"Electronics"})}),Object(k.jsxs)("div",{className:"card-body",children:[Object(k.jsx)("p",{className:"card-text",children:"If you are looking for electronic products this is your place"}),Object(k.jsx)(v.b,{to:"/category/electronics",className:"btn btn-primary",children:"Go There"})]})]}),Object(k.jsxs)("div",{className:"card text-white bg-dark mb-3",style:{maxWidth:"19rem"},children:[Object(k.jsx)("div",{className:"card-header",children:Object(k.jsx)("h5",{className:"card-title",children:"Jewelery"})}),Object(k.jsxs)("div",{className:"card-body",children:[Object(k.jsx)("p",{className:"card-text",children:"If you are looking for jewelery products this is your place"}),Object(k.jsx)(v.b,{to:"/category/jewelery",className:"btn btn-primary",children:"Go There"})]})]})]})]})},S=function(e){var t=e.product;return Object(k.jsxs)("div",{className:"card h-100",style:{width:"18rem"},children:[Object(k.jsx)("img",{src:t.image,className:"card-img-top img-fluid",alt:t.title}),Object(k.jsx)("hr",{}),Object(k.jsxs)("div",{className:"card-body",children:[Object(k.jsx)("h5",{className:"card-title",children:t.title}),Object(k.jsx)("p",{className:"card-text",children:t.description.substring(0,100)+"..."}),Object(k.jsx)(v.b,{to:"/product/".concat(t.id),className:"btn btn-primary",children:"More info"})]}),Object(k.jsx)("div",{className:"card-footer",children:Object(k.jsxs)("small",{children:["Price: ",Object(k.jsx)("span",{children:t.price})]})})]})},A=function(){return Object(k.jsx)("div",{className:"spinner-container",children:Object(k.jsx)("div",{className:"spinner-grow text-primary text-center",role:"status",children:Object(k.jsx)("span",{className:"visually-hidden",children:"Loading..."})})})},I=function(){return Object(k.jsx)("footer",{className:"mt-4 pb-4",children:Object(k.jsx)("h3",{children:"Created by Franco Juri with \u2764"})})},D=function(e){var t=e.data,a=e.loading,c=e.error,s=e.screenTitle,r=e.normalScreen,n=e.allCards,i=e.title,l=e.link,o=e.desc,d=e.handleReturn,j=e.handleAdd,b=e.add;return Object(k.jsxs)(k.Fragment,{children:[a&&Object(k.jsx)(A,{}),null!==c&&window.location.reload(),null!==t&&!r&&Object(k.jsxs)("div",{className:"row mt-5 product-screen-container",children:[Object(k.jsx)("div",{className:"col-sm-12 col-md-4",children:Object(k.jsx)("img",{src:t.image,alt:t.title,className:"img-fluid img-thumbnail"})}),Object(k.jsxs)("div",{className:"col-sm-12 col-md-8 mb-5",children:[Object(k.jsx)("h3",{className:"mt-4",children:t.title}),Object(k.jsxs)("ul",{className:"list-group mb-4 mt-4",children:[Object(k.jsxs)("li",{className:"list-group-item",children:[Object(k.jsx)("strong",{children:"Description: "}),t.description]}),Object(k.jsxs)("li",{className:"list-group-item",children:[Object(k.jsx)("strong",{children:"Price: "}),t.price]}),Object(k.jsxs)("li",{className:"list-group-item",children:[Object(k.jsx)("strong",{children:"Category: "}),t.category]})]}),Object(k.jsx)("button",{className:"btn btn-outline-info",onClick:d,children:"Return"}),b?Object(k.jsx)(v.b,{className:"btn btn-primary ms-3",to:"/cart",children:"Go to cart"}):Object(k.jsx)("button",{className:"btn btn-primary ms-3",onClick:j,children:"Add cart"})]})]}),null!==t&&r&&Object(k.jsxs)("div",{children:[Object(k.jsx)("h1",{className:"mb-4 text-center",children:s}),Object(k.jsx)("div",{className:"cards-container",children:t.map((function(e){return Object(k.jsx)(S,{product:e},e.id)}))})]}),!a&&n&&r&&Object(k.jsx)(E,{}),!a&&!n&&r&&Object(k.jsxs)("div",{className:"mt-5",children:[Object(k.jsx)("h2",{className:"text-center mt-3",children:"Another Category"}),Object(k.jsx)(C,{title:i,desc:o,link:l})]}),!a&&Object(k.jsxs)("div",{children:[r&&Object(k.jsx)("hr",{}),Object(k.jsx)(I,{})]})]})},L=function(){var e=w("https://fakestoreapi.com/products"),t=e.data,a=e.loading,c=e.error;return Object(k.jsx)("div",{className:"mt-5",children:Object(k.jsx)(D,{data:t,loading:a,error:c,screenTitle:"All products",allCards:!0,normalScreen:!0})})},P=a(30),q=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object(c.useState)(e),a=Object(n.a)(t,2),s=a[0],r=a[1],l=function(){r(e)},o=function(e){var t=e.target;r(Object(i.a)(Object(i.a)({},s),{},Object(P.a)({},t.name,t.value)))};return[s,o,l]},B=a(21),M=a.n(B),Q=a(13),R=a.n(Q),T=a(25);a(165),a(82);T.a.initializeApp({apiKey:"AIzaSyBHAP36gtkWDDMKiysuA0oNVscmDfSA8uQ",authDomain:"fake-store-app.firebaseapp.com",projectId:"fake-store-app",storageBucket:"fake-store-app.appspot.com",messagingSenderId:"867917265581",appId:"1:867917265581:web:a8ff4f6fce4cc208a52424"});T.a.firestore();var W=new T.a.auth.GoogleAuthProvider,G=function(){var e=q({email:"",password:""}),t=Object(n.a)(e,2),a=t[0],s=t[1],r=a.email,i=a.password,l=Object(c.useContext)(y),o=l.dispatchAuth,d=l.dispatchUi,j=l.stateUi,b=j.loading,u=j.msgError;document.addEventListener("DOMContentLoaded",(function(){document.body.click()}));var h=function(){return M.a.isEmail(r)?""===i.trim()?(d({type:p,payload:"Password is not valid"}),!1):(d({type:x}),!0):(d({type:p,payload:"Email is not valid"}),!1)};return Object(c.useEffect)((function(){return u&&R.a.fire("Error",u,"error"),function(){d({type:x})}}),[u,d]),Object(k.jsx)("div",{className:"form-container",children:Object(k.jsxs)("form",{className:"p-4 p-md-5 bg-light border rounded",onSubmit:function(e){e.preventDefault(),h()&&(d({type:f}),T.a.auth().signInWithEmailAndPassword(r,i).then((function(e){var t=e.user;o({type:m,payload:{uid:t.uid,displayName:t.displayName}})})).catch((function(e){R.a.fire("Error",e.message,"error")})).finally((function(){d({type:O})})))},children:[Object(k.jsx)("h2",{className:"text-center",children:"Login"}),Object(k.jsxs)("div",{className:"mb-3 mt-4",children:[Object(k.jsx)("label",{className:"form-label",children:"Email address"}),Object(k.jsx)("input",{type:"email",className:"form-control",name:"email",value:r,onChange:s,autoComplete:"off"}),Object(k.jsx)("div",{id:"emailHelp",className:"form-text",children:"We'll never share your email with anyone else."})]}),Object(k.jsxs)("div",{children:[Object(k.jsx)("label",{className:"form-label",children:"Password"}),Object(k.jsx)("input",{type:"password",className:"form-control",name:"password",value:i,onChange:s})]}),Object(k.jsx)("div",{className:"social-networks mb-3",children:Object(k.jsxs)("div",{className:"google-btn",onClick:function(){d({type:f}),T.a.auth().signInWithPopup(W).then((function(e){var t=e.user;o({type:m,payload:{uid:t.uid,displayName:t.displayName}})})).finally((function(){d({type:O})}))},children:[Object(k.jsx)("div",{className:"google-icon-wrapper",children:Object(k.jsx)("img",{className:"google-icon",src:"https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg",alt:"google button"})}),Object(k.jsx)("p",{className:"btn-text",children:Object(k.jsx)("b",{children:"Sign in with google"})})]})}),Object(k.jsx)("button",{type:"submit",className:"btn btn-primary w-100",disabled:b,children:"Sign up"}),Object(k.jsx)(v.b,{to:"/auth/register",className:"link mt-3",children:"don't you have an account?"})]})})},U=a(39),J=a.n(U),Y=a(64),Z=function(){var e=q({name:"",email:"",password:"",password2:""}),t=Object(n.a)(e,2),a=t[0],s=t[1],r=a.name,i=a.email,l=a.password,o=a.password2,d=Object(c.useContext)(y),j=d.dispatchAuth,b=d.dispatchUi,u=d.stateUi.msgError,h=function(){return 0===r.trim().length?(b({type:p,payload:"Name is required"}),!1):M.a.isEmail(i)?M.a.equals(l,o)&&M.a.isStrongPassword(l,[{minLenght:5}])?(b({type:x}),!0):(b({type:p,payload:"Password should be at least 6 characters and match each other"}),!1):(b({type:p,payload:"Email is not valid"}),!1)};return Object(c.useEffect)((function(){return u&&R.a.fire("Error",u,"error"),function(){b({type:x})}}),[u,b]),Object(k.jsx)("div",{className:"form-container",children:Object(k.jsxs)("form",{className:"p-4 p-md-5 bg-light border rounded",onSubmit:function(e){e.preventDefault(),h()&&T.a.auth().createUserWithEmailAndPassword(i,l).then(function(){var e=Object(Y.a)(J.a.mark((function e(t){var a;return J.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.user,e.next=3,a.updateProfile({displayName:r});case 3:j({type:m,payload:{uid:a.uid,displayName:a.displayName}});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){R.a.fire("Error",e.message,"error")}))},children:[Object(k.jsx)("h2",{className:"text-center",children:"Register"}),Object(k.jsxs)("div",{className:"mb-3 mt-4",children:[Object(k.jsx)("label",{className:"form-label",children:"Name"}),Object(k.jsx)("input",{type:"text",className:"form-control",autoComplete:"off",name:"name",value:r,onChange:s})]}),Object(k.jsxs)("div",{className:"mb-3 mt-4",children:[Object(k.jsx)("label",{className:"form-label",children:"Email address"}),Object(k.jsx)("input",{type:"email",className:"form-control",name:"email",value:i,onChange:s,autoComplete:"off"}),Object(k.jsx)("div",{id:"emailHelp",className:"form-text",children:"We'll never share your email with anyone else."})]}),Object(k.jsxs)("div",{className:"mb-3",children:[Object(k.jsx)("label",{className:"form-label",children:"Password"}),Object(k.jsx)("input",{type:"password",className:"form-control",name:"password",value:l,onChange:s})]}),Object(k.jsxs)("div",{children:[Object(k.jsx)("label",{className:"form-label",children:"Confirm password"}),Object(k.jsx)("input",{type:"password",className:"form-control",name:"password2",value:o,onChange:s})]}),Object(k.jsx)("button",{type:"submit",className:"btn btn-primary w-100 mt-3",disabled:!1,children:"Register"}),Object(k.jsx)(v.b,{to:"/auth/login",className:"link mt-3",children:"Already register?"})]})})},H=function(e){var t=e.product,a=e.handleDelete,c=e.handleIncrementQuantity,s=e.handleDecrementQuantity;return Object(k.jsx)("div",{className:"card mb-3 mt-3 product-cart-card p-2",children:Object(k.jsxs)("div",{className:"row g-0",children:[Object(k.jsx)("div",{className:"col-md-4",children:Object(k.jsx)("img",{src:t.image,className:"img-fluid rounded-start",alt:t.title})}),Object(k.jsx)("div",{className:"col-md-8",children:Object(k.jsxs)("div",{className:"card-body",children:[Object(k.jsx)("h5",{className:"card-title mb-4",children:t.title}),Object(k.jsxs)("p",{className:"card-text",children:["Quantity: ",Object(k.jsx)("strong",{children:t.quantity})]}),Object(k.jsxs)("p",{className:"card-text",children:["Category: ",Object(k.jsx)("strong",{children:t.category})]}),Object(k.jsxs)("p",{className:"card-text",children:["Price: ",Object(k.jsx)("strong",{children:t.price})]}),Object(k.jsxs)("div",{className:"d-flex gap-3 mx-auto justify-content-center actions-product-div",children:[Object(k.jsx)("button",{className:"btn btn-danger",onClick:function(){return a(t.id)},children:"Delete"}),Object(k.jsx)("button",{className:"btn btn-primary",onClick:function(){return c(t.id)},children:"Increment quantity"}),t.quantity>1&&Object(k.jsx)("button",{className:"btn btn-primary",onClick:function(){return s(t.id)},children:"Decrement quantity"}),Object(k.jsx)(v.b,{className:"btn btn-primary",to:"/product/".concat(t.id),children:"See product"})]})]})})]})})},F=function(){return Object(k.jsxs)("div",{className:"no-products-div",children:[Object(k.jsx)("div",{className:"svg-container mt-3",children:Object(k.jsxs)("svg",{id:"ac1eb871-932a-433c-8a7b-566e1262461f","data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg",width:"600.91732",height:"210.20537",viewBox:"0 0 863.91732 364.20537",children:[Object(k.jsx)("polygon",{points:"311.959 119.745 0 119.745 0 222.156 11.817 222.156 11.817 248.941 38.601 222.156 311.959 222.156 311.959 119.745",fill:"#f0f0f0"}),Object(k.jsx)("rect",{x:"8.66553",y:"129.71814",width:"294.62811",height:"81.92868",fill:"#fff"}),Object(k.jsx)("rect",{x:"34.72148",y:"154.42552",width:"141.85589",height:"4.30497",fill:"#f0f0f0"}),Object(k.jsx)("rect",{x:"34.72148",y:"169.31777",width:"247.24292",height:"4.30497",fill:"#f0f0f0"}),Object(k.jsx)("rect",{x:"34.72148",y:"184.21003",width:"247.00081",height:"4.30497",fill:"#f0f0f0"}),Object(k.jsx)("path",{d:"M692.07274,618.96676s1.487-31.15875,31.97119-27.537",transform:"translate(-168.04134 -267.89732)",fill:"#f0f0f0"}),Object(k.jsx)("circle",{cx:"515.41796",cy:"306.16087",r:"15.2571",fill:"#f0f0f0"}),Object(k.jsx)("rect",{x:"512.9354",y:"331.85294",width:"4.30672",height:"30.14703",fill:"#f0f0f0"}),Object(k.jsx)("circle",{cx:"666.92952",cy:"180.07338",r:"123.29665",fill:"#3f3d56"}),Object(k.jsx)("path",{d:"M757.348,457.86815a32.62688,32.62688,0,0,1,50.081,0,36.26372,36.26372,0,1,0-51.27085-1.18987Q756.73918,457.28694,757.348,457.86815Z",transform:"translate(-168.04134 -267.89732)",fill:"#fff"}),Object(k.jsx)("path",{d:"M855.26,457.86815a32.627,32.627,0,0,1,50.08092,0,36.26371,36.26371,0,1,0-51.2708-1.18987Q854.65117,457.28694,855.26,457.86815Z",transform:"translate(-168.04134 -267.89732)",fill:"#fff"}),Object(k.jsx)("circle",{cx:"601.97649",cy:"151.39215",r:"12.47434",fill:"#3f3d56"}),Object(k.jsx)("circle",{cx:"699.88499",cy:"151.39215",r:"12.47434",fill:"#3f3d56"}),Object(k.jsx)("circle",{cx:"578.08341",cy:"210.89752",r:"14.50548",fill:"#6c63ff"}),Object(k.jsx)("circle",{cx:"744.8965",cy:"210.89752",r:"14.5055",fill:"#6c63ff"}),Object(k.jsx)("polygon",{points:"661.49 181.886 650.611 229.029 668.742 210.898 661.49 181.886",fill:"#6c63ff"}),Object(k.jsx)("polygon",{points:"717.39 363.205 705.038 352.839 705.326 363.205 701.49 363.205 701.183 352.244 684.507 363.205 677.526 363.205 701.059 347.737 700.147 315.258 699.466 290.728 703.293 290.623 703.984 315.258 704.894 347.708 723.354 363.205 717.39 363.205",fill:"#3f3d56"}),Object(k.jsx)("polygon",{points:"659.363 363.205 647.012 352.839 647.3 363.205 643.474 363.205 643.167 352.244 626.49 363.205 619.509 363.205 643.033 347.737 642.122 315.258 641.441 290.728 645.276 290.623 645.967 315.258 646.868 347.708 665.328 363.205 659.363 363.205",fill:"#3f3d56"}),Object(k.jsx)("path",{d:"M836.784,315.60813c-3.3831,0-6.36764,2.628-8.36294,6.66445-1.75872-6.06969-5.45374-10.29078-9.7689-10.29078a6.56326,6.56326,0,0,0-.87094.1463c-1.65871-6.4805-5.51368-11.02542-10.00816-11.02542-6.00841,0-10.8791,8.118-10.8791,18.13187s4.87073,18.13187,10.8791,18.13187a6.56119,6.56119,0,0,0,.87093-.14629c1.65871,6.4805,5.51369,11.02541,10.00817,11.02541,3.3831,0,6.36764-2.62795,8.36294-6.66444,1.75876,6.06971,5.45374,10.29077,9.7689,10.29077,6.00841,0,10.8791-8.118,10.8791-18.13187S842.79244,315.60813,836.784,315.60813Z",transform:"translate(-168.04134 -267.89732)",fill:"#3f3d56"}),Object(k.jsx)("path",{d:"M718.72328,451.807l-67.92039-11.01653c-3.42269-.55515-6.90789-1.11141-10.34147-.6282s-6.87069,2.1737-8.62107,5.16688a8.651,8.651,0,0,0,9.14985,12.853c-3.70741-.12023-7.60411-.19978-10.894,1.51369s-5.61946,5.87559-4.01553,9.22024a8.27667,8.27667,0,0,0,1.91922,2.4289,17.60582,17.60582,0,0,0,18.52289,3.14128c-2.50047,3.58582-7.46212,4.11838-11.7541,4.94866s-9.25362,3.258-9.41312,7.62664c-.17922,4.90869,5.66264,7.51763,10.47189,8.51687A137.41687,137.41687,0,0,0,712.648,489.3171a30.98,30.98,0,0,0,7.737-3.95049,17.43266,17.43266,0,0,0-7.05356-30.96345",transform:"translate(-168.04134 -267.89732)",fill:"#3f3d56"}),Object(k.jsx)("path",{d:"M1011.89005,507.47917a137.41884,137.41884,0,0,0-51.17256-57.63676,30.97519,30.97519,0,0,0-7.80737-3.80966,17.43272,17.43272,0,0,0-20.50879,24.24615l-5.31525-2.74921Q943.09323,497.98314,959.1,528.43656c1.61312,3.06929,3.26318,6.18918,5.71292,8.64309s5.86648,4.18514,9.31075,3.78525a8.6006,8.6006,0,0,0,6.77916-12.2999,16.64264,16.64264,0,0,0,5.752,5.05979c3.34648,1.59972,8.07321.9603,9.7823-2.33177a8.27455,8.27455,0,0,0,.78809-2.99368,17.60592,17.60592,0,0,0-8.62117-16.69248c4.36853-.1565,7.77622,3.48909,11.01912,6.42052,3.24327,2.93143,8.1652,5.43808,11.75289,2.94008C1015.40712,518.16062,1013.98161,511.92354,1011.89005,507.47917Z",transform:"translate(-168.04134 -267.89732)",fill:"#3f3d56"}),Object(k.jsx)("polygon",{points:"55.757 0 506 0 506 147.807 488.945 147.807 488.945 186.463 450.289 147.807 55.757 147.807 55.757 0",fill:"#cacaca"}),Object(k.jsx)("rect",{x:"68.26381",y:"14.39335",width:"425.22943",height:"118.24561",fill:"#fff"}),Object(k.jsx)("rect",{x:"102.45877",y:"48.91591",width:"204.73707",height:"6.21326",fill:"#6c63ff"}),Object(k.jsx)("rect",{x:"102.45877",y:"70.40954",width:"356.83952",height:"6.21326",fill:"#6c63ff"}),Object(k.jsx)("rect",{x:"102.45877",y:"91.90316",width:"356.49009",height:"6.21326",fill:"#6c63ff"}),Object(k.jsx)("path",{d:"M1030.95866,632.10268h-381a1,1,0,0,1,0-2h381a1,1,0,0,1,0,2Z",transform:"translate(-168.04134 -267.89732)",fill:"#cacaca"})]})}),Object(k.jsx)("h3",{className:"mt-4",children:"Your cart is empty"})]})},z=function(){var e=Object(c.useContext)(y),t=e.dispatch,a=e.state,s=function(e){R.a.fire({icon:"question",title:"Are you sure to remove this product?",showCancelButton:!0,confirmButtonText:"Yes, delete"}).then((function(a){a.isConfirmed&&(R.a.fire("Deleted!","","success"),t({type:b,payload:e}))}))},r=function(e){t({type:d,payload:e})},n=function(e){t({type:j,payload:e})};return Object(k.jsxs)("div",{className:"mt-5",children:[Object(k.jsxs)("div",{className:"cart-screen-container",children:[Object(k.jsx)("h1",{className:"text-center",children:"Your cart"}),Object(k.jsxs)("div",{className:"mt-5 cart-products-container mb-5",children:[!a.length&&Object(k.jsxs)("div",{children:[Object(k.jsx)(F,{}),Object(k.jsx)(v.b,{to:"/",className:"btn btn-primary rounded mt-4",children:"Search products"})]}),a.length>=1&&a.map((function(e){return Object(k.jsx)(H,{product:e,handleDelete:s,handleIncrementQuantity:r,handleDecrementQuantity:n},e.id)})),a.length>=2&&Object(k.jsx)("button",{className:"btn btn-danger",onClick:function(){R.a.fire({icon:"question",title:"Are you sure to remove all products?",showCancelButton:!0,confirmButtonText:"Yes, delete"}).then((function(e){e.isConfirmed&&(R.a.fire("Deleted!","","success"),t({type:u}))}))},children:"Delete All"})]})]}),Object(k.jsx)(I,{})]})},K=function(){var e=Object(N.g)().category,t="".concat(e[0].toUpperCase()+e.substring(1)," products"),a=w("https://fakestoreapi.com/products/category/".concat(e)),c=a.loading,s=a.data,r=a.error;return Object(k.jsx)("div",{className:"mt-5",children:Object(k.jsx)(D,{loading:c,data:s,error:r,allCards:!1,title:"".concat("electronics"===e?"Jewelery":"Electronics"),desc:"".concat("electronics"===e?"jewelery":"electronic"),link:"".concat("electronics"===e?"jewelery":"electronics"),normalScreen:!0,screenTitle:t})})},_=function(){var e=w("https://fakestoreapi.com/products?limit=4"),t=e.data,a=e.loading,c=e.error;return Object(k.jsx)("div",{className:"mt-5",children:Object(k.jsx)(D,{data:t,loading:a,error:c,screenTitle:"Featured products",allCards:!0,normalScreen:!0})})},V=a(65),X=a.n(V)()(R.a),$=function(e){var t=e.history,a=Object(c.useContext)(y).isLoggedIn,s=Object(N.g)().id,r=w("https://fakestoreapi.com/products/".concat(s)),i=r.data,l=r.error,d=r.loading,j=Object(c.useContext)(y),b=j.state,u=j.dispatch,m=Object(c.useState)(!1),h=Object(n.a)(m,2),p=h[0],x=h[1],f=b.find((function(e){return e.id===s}));return Object(c.useEffect)((function(){x(void 0!==f)}),[f]),Object(k.jsx)("div",{className:"mt-5",children:Object(k.jsx)(D,{data:i,loading:d,error:l,normalScreen:!1,handleReturn:function(){t.length<=2?"jewelery"===i.category?t.push("/category/jewelery"):"electronics"===i.category?t.push("/category/electronics"):t.push("/"):t.goBack()},handleAdd:function(){a?(u({type:o,payload:{id:s,image:i.image,title:i.title,price:i.price,category:i.category,quantity:1}}),X.fire({showCloseButton:!0,icon:"success",title:"Excellent!",text:"Product added successfully!",showConfirmButton:!1,footer:'<a href="/React-fake-store-app/#/cart" class="btn btn-primary">Go to cart</a>'})):R.a.fire({title:"Error",icon:"error",text:"You must be logged to add a product to cart",footer:'<a href="/React-fake-store-app/#/auth/login" class="btn btn-primary rounded">Sign in</a>'})},add:p})})},ee=(a(163),function(e){var t=e.isLoggedIn,a=e.setIsLoggedIn,s=Object(c.useContext)(y),r=s.stateAuth,n=s.dispatchAuth;return Object(k.jsx)("nav",{className:"navbar navbar-expand-lg navbar-dark bg-dark sticky-top",children:Object(k.jsxs)("div",{className:"container-fluid",children:[Object(k.jsx)(v.c,{to:"/",className:"navbar-brand",children:"Store"}),Object(k.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(k.jsx)("span",{className:"navbar-toggler-icon"})}),Object(k.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarNav",children:[Object(k.jsxs)("ul",{className:"navbar-nav",children:[Object(k.jsx)("li",{className:"nav-item",children:Object(k.jsx)(v.c,{exact:!0,to:"/",className:"nav-link",activeClassName:"active",children:"Home"})}),t&&Object(k.jsx)("li",{className:"nav-item",children:Object(k.jsx)(v.c,{exact:!0,to:"/cart",className:"nav-link",activeClassName:"active",children:"My cart"})}),Object(k.jsx)("li",{className:"nav-item",children:Object(k.jsx)(v.c,{exact:!0,to:"/all",className:"nav-link",activeClassName:"active",children:"All products"})}),Object(k.jsxs)("li",{className:"nav-item dropdown",children:[Object(k.jsx)("div",{className:"nav-link dropdown-toggle",id:"navbarDropdown",role:"button","data-bs-toggle":"dropdown","aria-expanded":"false",children:"Categories"}),Object(k.jsxs)("ul",{className:"dropdown-menu dropdown-menu-dark","aria-labelledby":"navbarDropdown",children:[Object(k.jsx)("li",{children:Object(k.jsx)(v.c,{to:"/category/electronics",className:"dropdown-item",children:"electronics"})}),Object(k.jsx)("li",{children:Object(k.jsx)(v.c,{to:"/category/jewelery",className:"dropdown-item",children:"jewelery"})})]})]})]}),t?Object(k.jsxs)("div",{className:"btn-group dropdown mt-lg-0 mt-3",children:[Object(k.jsx)("button",{type:"button",className:"btn btn-secondary dropdown-toggle","data-bs-toggle":"dropdown","aria-expanded":"false",children:r.name}),Object(k.jsx)("ul",{className:"dropdown-menu dropdown-menu-dark user-dropdown-menu",children:Object(k.jsx)("li",{className:"dropdown-item pointer",onClick:function(){n({type:h}),a(!1),T.a.auth().signOut()},children:"Logout"})})]}):Object(k.jsx)("span",{className:"navbar-text",children:Object(k.jsx)(v.b,{to:"/auth/login",className:"me-2 btn btn-primary mt-lg-0 mt-3",children:"Sign in"})})]})]})})});function te(){var e=Object(c.useContext)(y),t=e.dispatchAuth,a=e.isLoggedIn,s=e.setIsLoggedIn,r=Object(c.useState)(!0),i=Object(n.a)(r,2),l=i[0],o=i[1];return Object(c.useEffect)((function(){T.a.auth().onAuthStateChanged((function(e){(null===e||void 0===e?void 0:e.uid)?(t({type:m,payload:{uid:e.uid,displayName:e.displayName}}),s(!0)):s(!1),o(!1)}))}),[t,o,s]),l?Object(k.jsx)(A,{}):Object(k.jsxs)(v.a,{children:[Object(k.jsx)(ee,{isLoggedIn:a,setIsLoggedIn:s}),Object(k.jsx)("div",{className:"container",children:Object(k.jsxs)(N.d,{children:[Object(k.jsx)(N.b,{exact:!0,path:"/",component:_}),Object(k.jsx)(N.b,{path:"/category/:category",component:K}),Object(k.jsx)(N.b,{path:"/all",component:L}),Object(k.jsx)(N.b,{path:"/product/:id",component:$}),a&&Object(k.jsx)(N.b,{path:"/cart",component:z}),!a&&Object(k.jsxs)(N.d,{children:[Object(k.jsx)(N.b,{path:"/auth/login",component:G}),Object(k.jsx)(N.b,{path:"/auth/register",component:Z}),Object(k.jsx)(N.a,{to:"/auth/login"})]}),Object(k.jsx)(N.a,{to:"/"})]})})]})}var ae=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case m:return{uid:t.payload.uid,name:t.payload.displayName};case h:return{};default:return e}},ce={loading:!1,msgError:null},se=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ce,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case p:return Object(i.a)(Object(i.a)({},e),{},{msgError:t.payload});case x:return Object(i.a)(Object(i.a)({},e),{},{msgError:null});case f:return Object(i.a)(Object(i.a)({},e),{},{loading:!0});case O:return Object(i.a)(Object(i.a)({},e),{},{loading:!1});default:return e}},re=function(){return JSON.parse(localStorage.getItem("products"))||[]},ne=function(){var e=Object(c.useReducer)(g,[],re),t=Object(n.a)(e,2),a=t[0],s=t[1],r=Object(c.useReducer)(ae,{}),i=Object(n.a)(r,2),l=i[0],o=i[1],d=Object(c.useReducer)(se,{loading:!1,msgError:null}),j=Object(n.a)(d,2),b=j[0],u=j[1],m=Object(c.useState)(!1),h=Object(n.a)(m,2),p=h[0],x=h[1];return Object(c.useEffect)((function(){localStorage.setItem("products",JSON.stringify(a))}),[a]),Object(k.jsx)(y.Provider,{value:{state:a,dispatch:s,stateAuth:l,dispatchAuth:o,stateUi:b,dispatchUi:u,isLoggedIn:p,setIsLoggedIn:x},children:Object(k.jsx)(te,{})})};r.a.render(Object(k.jsx)(ne,{}),document.getElementById("root"))}},[[164,1,2]]]);
//# sourceMappingURL=main.12c0469d.chunk.js.map