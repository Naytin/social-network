(this["webpackJsonpsocial-network-ts"]=this["webpackJsonpsocial-network-ts"]||[]).push([[0],{133:function(e,t,n){e.exports={box__message:"MessageInform_box__message__yVfpa"}},136:function(e,t,n){e.exports={loading:"Preloader_loading__2PkkU"}},137:function(e,t,n){e.exports={default:"Button_default__3ajGj"}},138:function(e,t,n){e.exports={loginContainer:"Login_loginContainer__2rMYg"}},170:function(e,t,n){},19:function(e,t,n){"use strict";n.d(t,"c",(function(){return i})),n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return c}));var a=n(4),s=n(135),r=n.n(s).a.create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"a409a2ec-60ad-4ff6-9051-8f6025edc2fd"}}),i={getUsers:function(e,t){return r.get("users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))},userFollow:function(e){return r.post("follow/".concat(e)).then((function(e){return e.data}))},userUnfollow:function(e){return r.delete("follow/".concat(e)).then((function(e){return e.data}))}},o={getProfile:function(e){return r.get("profile/".concat(e)).then((function(e){return e.data}))},getStatus:function(e){return r.get("profile/status/".concat(e)).then((function(e){return e.data}))},updateStatus:function(e){return r.put("profile/status",{status:e}).then((function(e){return e.data}))}},c={auth:function(){return r.get("auth/me").then((function(e){return e.data}))},login:function(e){return r.post("auth/login",Object(a.a)({},e)).then((function(e){return e.data}))},logout:function(){return r.delete("auth/login").then((function(e){return e.data}))}}},21:function(e,t,n){e.exports={dialogs:"Dialogs_dialogs__3jGV2",dialogsItem:"Dialogs_dialogsItem__2dRwl",title:"Dialogs_title__3jMxE",messages:"Dialogs_messages__2ztdh",message__wrapper:"Dialogs_message__wrapper__1bjAC",dialog__wrapper:"Dialogs_dialog__wrapper__2C_wh",shadow__bottom:"Dialogs_shadow__bottom__2RkJz",shadow__top:"Dialogs_shadow__top__2-5FM",input_btn__block:"Dialogs_input_btn__block__1jth-",icon:"Dialogs_icon__2bMe4",alarm:"Dialogs_alarm__2hSzR"}},23:function(e,t,n){e.exports={pagination:"Users_pagination__1md1f",pagination_wrap__btn:"Users_pagination_wrap__btn__3eQSK",selected:"Users_selected__Kjcvr",input__wrapper:"Users_input__wrapper__1_EmY",input__item:"Users_input__item__2OSVe",view__profile:"Users_view__profile__2__7P",wrapper:"Users_wrapper__1r298",card__item:"Users_card__item__2s5Y3",name:"Users_name__1Eiii",search__wrapper:"Users_search__wrapper__1W-d4",search__item:"Users_search__item__23HnV"}},26:function(e,t,n){"use strict";var a=n(4),s=n(40),r=n(0),i=n(1),o=n.n(i),c=n(137),u=n.n(c),l=o.a.memo((function(e){e.red;var t=e.className,n=Object(s.a)(e,["red","className"]),i="".concat(t||""," ").concat(u.a.default);return Object(r.jsx)("button",Object(a.a)({className:i},n))}));t.a=l},27:function(e,t,n){e.exports={nav:"Navbar_nav__eIQoS",nav__list:"Navbar_nav__list__N0cbb",active:"Navbar_active__Jdi2C",nav__item:"Navbar_nav__item__1vKtK"}},290:function(e,t,n){"use strict";n.r(t);var a=n(0),s=n(1),r=n.n(s),i=n(72),o=n.n(i),c=(n(170),n(30)),u=n(31),l=n(33),d=n(32),m=n(27),p=n.n(m),g=n(11),j=n(14),f=function(){var e=Object(g.f)();return console.log(e),Object(a.jsx)("nav",{className:p.a.nav,children:Object(a.jsxs)("ul",{className:p.a.nav__list,children:[Object(a.jsx)(j.b,{className:"".concat(p.a.nav__item," icon-profile ").concat("/profile"===e.pathname?p.a.active:null),to:"/profile"}),Object(a.jsx)(j.b,{className:"".concat(p.a.nav__item," icon-commenting-o ").concat("/dialogs"===e.pathname?p.a.active:null),to:"/dialogs"}),Object(a.jsx)(j.b,{className:"".concat(p.a.nav__item," icon-group ").concat("/users"===e.pathname?p.a.active:null),to:"/users"})]})})},b=n(12),_=n(99),h=n(21),O=n.n(h),v=n(41),x=n.n(v),w=r.a.memo((function(e){var t=e.data,n=e.status,s=e.userId,r=e.getUserId,i="/dialogs/user/".concat(t.name);return Object(a.jsx)(j.b,{to:i,children:Object(a.jsxs)("div",{className:x.a.dialog,onClick:function(){r(s)},children:[Object(a.jsxs)("div",{className:x.a.avatar__wrapper,children:[Object(a.jsx)("img",{src:t.avatar,alt:""}),Object(a.jsx)("span",{className:n.isOnline?x.a.online:x.a.offline})]}),Object(a.jsxs)("div",{className:x.a.status__block,children:[Object(a.jsx)("div",{children:t.name}),Object(a.jsx)("span",{className:x.a.status,children:n.title})]})]})})})),S=n(63),N=n.n(S),y=r.a.memo((function(e){var t=e.name,n=e.message;return Object(a.jsxs)("div",{className:N.a.messagesMy,children:[Object(a.jsx)("span",{className:N.a.message,children:n}),Object(a.jsxs)("div",{children:[Object(a.jsx)("img",{src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0OpLU7rYWiPzdGX7LHNfSyDSNQRD8FMoNVA&usqp=CAU",alt:""}),Object(a.jsx)("div",{children:t})]})]})})),A=r.a.memo((function(e){var t=e.name,n=e.message,s=e.avatar;return Object(a.jsxs)("div",{className:N.a.messagesSubscriber,children:[Object(a.jsxs)("div",{children:[Object(a.jsx)("img",{src:s,alt:""}),Object(a.jsx)("div",{children:t})]}),Object(a.jsx)("span",{className:N.a.message,children:n})]})})),C=r.a.memo((function(e){var t=e.message,n=e.name,s=e.id,r=e.avatar;return"Naytin"===n?Object(a.jsx)(y,{name:n,message:t,id:s}):Object(a.jsx)(A,{avatar:r,name:n,message:t,id:s})})),U=n(129),P=n(130),I=n(53),E=n(54),k=r.a.memo((function(e){var t=e.dialogs,n=(e.messages,e.addMessage),i=Object(s.useState)(""),o=Object(_.a)(i,2),c=o[0],u=o[1],l=r.a.useCallback((function(e){n(e.dialogsMessage)}),[]),d=r.a.useCallback((function(e){u(e)}),[]),m=t.filter((function(e){return e.id===c})).map((function(e){var t;return e.messages?null===(t=e.messages)||void 0===t?void 0:t.map((function(t){return Object(a.jsx)(C,{avatar:e.avatar,message:t.message,name:t.name,id:t.id},t.id)})):Object(a.jsx)("div",{className:O.a.alarm,children:"you have no correspondence with this user yet"})}));return Object(a.jsxs)("div",{className:O.a.dialogs,children:[Object(a.jsxs)("div",{className:O.a.dialogsItem,children:[Object(a.jsx)("h4",{className:O.a.title,children:"Friends messages"}),Object(a.jsx)("div",{className:O.a.dialog__wrapper,children:t&&t.map((function(e,n){return Object(a.jsx)(w,{id:n,userId:e.id,data:t[n],status:t[n].status,getUserId:d},n)}))}),Object(a.jsx)("div",{className:O.a.shadow__bottom})]}),Object(a.jsxs)("div",{className:O.a.messages,children:[Object(a.jsx)("div",{className:O.a.shadow__top}),Object(a.jsx)("div",{className:O.a.message__wrapper,children:m}),Object(a.jsx)(F,{onSubmit:l})]})]})})),D=r.a.memo((function(e){return Object(a.jsxs)("form",{onSubmit:e.handleSubmit,className:O.a.input_btn__block,children:[Object(a.jsx)(U.a,{component:E.a,name:"dialogsMessage",validate:[I.a],type:"text"}),Object(a.jsx)("div",{className:O.a.icon,children:Object(a.jsx)("button",{children:"Send"})})]})})),F=Object(P.a)({form:"dialogAddMessageForm"})(D),L=k,M=n(7),R=n(10),T=Object(R.d)(Object(b.b)((function(e){return{dialogs:e.dialogsPage.dialogs,messages:e.dialogsPage.messages}}),(function(e){return{addMessage:function(t){e(function(e){return{type:M.a,value:e}}(t))}}})))(L),q=n(62),G=n.p+"static/media/Spinner-1s-200px.6f589e28.gif",z=n(136),V=n.n(z),H=function(){return Object(a.jsx)("div",{className:V.a.loading,children:Object(a.jsx)("img",{src:G,alt:"preloader"})})},W=r.a.lazy((function(){return n.e(3).then(n.bind(null,296))})),J=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var e=+this.props.match.params.userId;e||null!==this.props.userId&&(e=this.props.userId),e&&(this.props.getUserProfile(e),this.props.getUserStatus(e))}},{key:"componentDidUpdate",value:function(e,t,n){this.props.match.params.userId!==e.match.params.userId&&this.props.userId&&(this.props.getUserProfile(this.props.userId),this.props.getUserStatus(this.props.userId))}},{key:"render",value:function(){return Object(a.jsx)(s.Suspense,{fallback:Object(a.jsx)(H,{}),children:Object(a.jsx)(W,{profile:this.props.profile,updateStatusProfile:this.props.updateStatusProfile,status:this.props.status})})}}]),n}(r.a.Component),Y=Object(g.g)(J),Q=Object(R.d)(Object(b.b)((function(e){return{posts:e.profilePage.posts,profile:e.profilePage.profile,status:e.profilePage.status,userId:e.auth.id}}),{addPost:q.a,getUserProfile:q.b,getUserStatus:q.c,updateStatusProfile:q.e}))(Y),K=n(23),X=n.n(K),Z=n(26),B="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSq_I0JFO2DxoAV3J-sI7ajtx0qW0Q5neaY_A&usqp=CAU",$=r.a.memo((function(e){return Object(a.jsx)("div",{children:Object(a.jsx)("div",{className:X.a.wrapper,children:e.users.map((function(t){return Object(a.jsxs)("div",{className:X.a.card__item,children:[Object(a.jsx)("div",{children:Object(a.jsx)("img",{src:t.photos.small?t.photos.small:B,alt:t.photos.small?t.photos.small:B})}),Object(a.jsx)(j.c,{to:"/profile/".concat(t.id),children:Object(a.jsx)("span",{className:X.a.view__profile,children:"view profile"})}),Object(a.jsx)("span",{className:X.a.name,children:t.name}),t.followed?Object(a.jsx)(Z.a,{disabled:e.followingInProgress.some((function(e){return e===t.id})),onClick:function(){e.unfollow(t.id)},children:"DELETE FRIEND"}):Object(a.jsx)(Z.a,{disabled:e.followingInProgress.some((function(e){return e===t.id})),onClick:function(){e.follow(t.id)},children:"ADD FRIEND"})]},t.id)}))})})})),ee=n(19),te=function(e){return{type:M.e,currentPage:e}},ne=function(e){return{type:M.g,totalCount:e}},ae=function(e){return{type:M.k,isFetching:e}},se=function(e,t){return{type:M.l,isFetching:e,userId:t}},re=function(e){return e.usersPage.users.filter((function(t){return t.name.toLowerCase().indexOf(e.usersPage.filter.toLowerCase())>-1}))},ie=function(e){return e.usersPage.pageSize},oe=function(e){return e.usersPage.totalUsersCount},ce=function(e){return e.usersPage.currentPage},ue=function(e){return e.usersPage.isFetching},le=function(e){return e.usersPage.followingInProgress},de=n(59),me=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,s=new Array(a),r=0;r<a;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).state={currentValue:"",timeoutId:0,pagesCount:0,pages:[]},e.onPageChanged=function(t){e.props.setCurrentPage&&e.props.setCurrentPage(t),e.props.usersRequest(t,e.props.pageSize)},e.userFollow=function(t){e.props.follow(t)},e.userUnfollow=function(t){e.props.unfollow(t)},e.onSearchChange=function(t){e.setState({currentValue:t.currentTarget.value}),clearTimeout(e.state.timeoutId),e.setState({timeoutId:setTimeout((function(){e.props.setFilter(e.state.currentValue)}),500)})},e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){this.props.usersRequest(this.props.currentPage,this.props.pageSize),this.setState({pagesCount:Math.ceil(this.props.totalUsersCount/this.props.pageSize)})}},{key:"componentDidUpdate",value:function(e,t,n){if(e!==this.props){for(var a=[],s=1;s<=this.state.pagesCount;s++)a.push(s);a.length&&this.setState({pages:a})}}},{key:"render",value:function(){var e=this;return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsxs)("div",{className:X.a.pagination,children:[Object(a.jsxs)("div",{className:X.a.input__wrapper,children:[Object(a.jsx)("input",{placeholder:"Search here",className:X.a.input__item,type:"search",value:this.state.currentValue,onChange:this.onSearchChange}),!this.props.users.length&&Object(a.jsx)(de.a,{children:"user not found"})]}),Object(a.jsx)("div",{className:X.a.pagination_wrap__btn,children:this.state.pages.map((function(t){return Object(a.jsx)(Z.a,{onClick:function(){return e.onPageChanged(t)},className:e.props.currentPage===t?X.a.selected:"",children:t},t)}))})]}),this.props.isFetching?Object(a.jsx)(H,{}):Object(a.jsx)($,{users:this.props.users,follow:this.userFollow,unfollow:this.userUnfollow,followingInProgress:this.props.followingInProgress})]})}}]),n}(r.a.PureComponent),pe=Object(R.d)(Object(b.b)((function(e){return{filter:e.usersPage.filter,users:re(e),pageSize:ie(e),totalUsersCount:oe(e),currentPage:ce(e),isFetching:ue(e),followingInProgress:le(e)}}),{setCurrentPage:te,setTotalUsersCount:ne,toggleFollowingInProgress:se,usersRequest:function(e,t){return function(n){n(ae(!0)),n(te(e)),ee.c.getUsers(e,t).then((function(e){var t;n(ae(!1)),n((t=e.items,{type:M.h,users:t})),n(ne(e.totalCount))})).catch((function(e){alert(e)}))}},follow:function(e){return function(t){t(se(!0,e)),ee.c.userFollow(e).then((function(n){var a;0===n.resultCode&&(t((a=e,{type:M.c,uId:a})),t(se(!1,e)))})).catch((function(e){alert("you are not authorized")}))}},unfollow:function(e){return function(t){t(se(!0,e)),ee.c.userUnfollow(e).then((function(n){var a;0===n.resultCode&&(t((a=e,{type:M.m,uId:a})),t(se(!1,e)))})).catch((function(e){alert(e)}))}},setFilter:function(e){return{type:"SET_FILTER",filter:e}}}))(me),ge=n(43),je=n.n(ge),fe=function(e){var t=e.login,n=e.isAuth,s=e.logout;return Object(a.jsxs)("header",{className:je.a.header,children:[Object(a.jsx)("div",{children:Object(a.jsx)("img",{className:je.a.logo,src:"https://www.designlime.co.uk/wp-content/uploads/2020/07/social-network-icon-png.png",alt:"logo"})}),Object(a.jsx)("div",{className:je.a.loginContainer,children:n?Object(a.jsxs)(a.Fragment,{children:[Object(a.jsxs)("div",{className:je.a.avatar_container,children:[Object(a.jsx)("img",{className:je.a.header__avatar,src:"https://image.flaticon.com/icons/png/512/147/147144.png",alt:"Avatar"}),Object(a.jsx)("span",{children:t})]}),Object(a.jsx)(Z.a,{onClick:s,children:"Logout"})]}):Object(a.jsx)(j.c,{to:"/login",className:je.a.login,children:"Login"})})]})},be=n(51),_e=function(e){var t=e.email,n=e.id,a=e.login,s=e.isAuth;return{type:M.i,payload:{email:t,id:n,login:a,isAuth:s}}},he=function(){return function(e){return ee.a.auth().then((function(t){if(0===t.resultCode){var n=t.data,a=n.email,s=n.id,r=n.login;e(_e({email:a,id:s,login:r,isAuth:!0}))}})).catch((function(e){alert(e)}))}},Oe=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(c.a)(this,n);for(var s=arguments.length,r=new Array(s),i=0;i<s;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).logout=function(){return e.props.logout(),Object(a.jsx)(g.a,{to:"/profile"})},e}return Object(u.a)(n,[{key:"render",value:function(){return Object(a.jsx)(fe,{logout:this.logout,login:this.props.login,isAuth:this.props.isAuth})}}]),n}(r.a.Component),ve=Object(b.b)((function(e){return{isAuth:e.auth.isAuth,login:e.auth.login}}),{logout:function(){return function(e){ee.a.logout().then((function(t){if(0===t.resultCode){e(_e({email:null,id:null,login:null,isAuth:!1}))}})).catch((function(e){alert(e)}))}}})(Oe),xe=n(138),we=n.n(xe),Se=Object(P.a)({form:"login"})((function(e){return Object(a.jsxs)("form",{onSubmit:e.handleSubmit,children:[Object(a.jsx)("div",{children:Object(a.jsx)("span",{children:e.error})}),Object(a.jsxs)("div",{style:{position:"relative"},children:[Object(a.jsx)("div",{children:"Email or username"}),Object(a.jsx)(U.a,{component:E.a,name:"email",type:"text",placeholder:"Login",validate:[I.a]})]}),Object(a.jsx)("div",{style:{position:"relative"},children:Object(a.jsx)(U.a,{component:E.a,name:"password",type:"password",placeholder:"Password",validate:[I.a]})}),Object(a.jsxs)("div",{children:[Object(a.jsx)(U.a,{component:"input",name:"rememberMe",type:"checkbox"}),Object(a.jsx)("span",{children:"Remember Me"})]}),Object(a.jsx)("div",{style:{textAlign:"center"},children:Object(a.jsx)(Z.a,{style:{width:"120px"},children:"Login"})})]})})),Ne=Object(b.b)((function(e){return{isAuth:e.auth.isAuth}}),{login:function(e){return function(t){ee.a.login(e).then((function(e){if(0===e.resultCode)t(he());else{var n=e.messages.length>0?e.messages[0]:"Email or password is wrong",a=Object(be.a)("login",{_error:n});t(a)}})).catch((function(e){alert(e)}))}}})((function(e){return e.isAuth?Object(a.jsx)(g.a,{to:"/profile"}):Object(a.jsxs)("div",{className:we.a.loginContainer,children:[Object(a.jsx)("h1",{children:"Log in"}),Object(a.jsx)(Se,{onSubmit:function(t){e.login(t)}})]})})),ye=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"componentDidMount",value:function(){this.props.initializeApp()}},{key:"render",value:function(){return this.props.initialized?Object(a.jsx)(j.a,{children:Object(a.jsxs)("div",{className:"app-wrapper",children:[Object(a.jsx)(ve,{}),Object(a.jsxs)("div",{className:"wrapper",children:[Object(a.jsx)(f,{}),Object(a.jsxs)("main",{className:"content",children:[Object(a.jsx)(g.b,{path:"/dialogs",render:function(){return Object(a.jsx)(T,{})}}),Object(a.jsx)(g.b,{exact:!0,path:["/","/social-network"],render:function(){return Object(a.jsx)(g.a,{to:"/profile"})}}),Object(a.jsx)(g.b,{exact:!0,path:"/profile/:userId?",render:function(){return Object(a.jsx)(Q,{})}}),Object(a.jsx)(g.b,{path:"/users",render:function(){return Object(a.jsx)(pe,{})}}),Object(a.jsx)(g.b,{path:"/login",render:function(){return Object(a.jsx)(Ne,{})}})]})]})]})}):Object(a.jsx)(H,{})}}]),n}(r.a.Component),Ae=Object(b.b)((function(e){return{initialized:e.app.initialized}}),{initializeApp:function(){return function(e){var t=e(he());Promise.all([t]).then((function(){e({type:M.d})}))}}})(ye),Ce=function(e){e&&e instanceof Function&&n.e(4).then(n.bind(null,295)).then((function(t){var n=t.getCLS,a=t.getFID,s=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),a(e),s(e),r(e),i(e)}))},Ue=n(36),Pe=n(4),Ie={posts:[{id:1,message:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet aspernatur at commodi consequuntur corporis dolore ex nemo nisi quod suscipit!",likesCount:11},{id:2,message:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet aspernatur at commodi consequuntur corporis dolore ex nemo nisi quod suscipit!",likesCount:2},{id:3,message:"I'm Vova",likesCount:111},{id:4,message:"Goodbye",likesCount:1}],profile:null,status:"No status"},Ee=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ie,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case M.b:var n=t.value;return Object(Pe.a)(Object(Pe.a)({},e),{},{posts:[].concat(Object(Ue.a)(e.posts),[{id:4,message:n,likesCount:0}])});case M.j:return Object(Pe.a)(Object(Pe.a)({},e),{},{profile:Object(Pe.a)({},t.profile)});case M.f:return Object(Pe.a)(Object(Pe.a)({},e),{},{status:t.status});default:return e}},ke={dialogs:[{id:"1",avatar:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSV83gjFPxbUtDH5iJuUHJHG45z--_hYg6GUA&usqp=CAU",name:"Sveta",status:{title:"Online",isOnline:!1},messages:null},{id:"2",avatar:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5g67tZkLuNcbMvMPfjAO08mstu5QTUr_y5g&usqp=CAU",name:"Angelina",status:{title:"Angelina left 7 minute ago",isOnline:!1},messages:null},{id:"3",avatar:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3AVHYXRxxtX6-fzIMlSWLwqMDKCMVudzdiA&usqp=CAU",name:"Artem",status:{title:"Angelina left 1 day ago",isOnline:!1},messages:null},{id:"4",avatar:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0OpLU7rYWiPzdGX7LHNfSyDSNQRD8FMoNVA&usqp=CAU",name:"Vova",status:{title:"Online",isOnline:!0},messages:null},{id:"5",avatar:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0OpLU7rYWiPzdGX7LHNfSyDSNQRD8FMoNVA&usqp=CAU",name:"Naytin",status:{title:"Online",isOnline:!0},messages:null},{id:"6",avatar:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5g67tZkLuNcbMvMPfjAO08mstu5QTUr_y5g&usqp=CAU",name:"Svet_v",status:{title:"Online",isOnline:!0},messages:[{id:1,message:"Hello, I'm Sveta",name:"Svet_v"},{id:2,message:"Hi!, how are you?",name:"Naytin"},{id:3,message:"I,m fine, thx!",name:"Svet_v"}]},{id:"7",avatar:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5g67tZkLuNcbMvMPfjAO08mstu5QTUr_y5g&usqp=CAU",name:"@Lera",status:{title:"Online",isOnline:!0},messages:[{id:1,message:"Hello, I'm Lera",name:"Lera"},{id:2,message:"Hi!, how are you?",name:"Naytin"},{id:3,message:"I,m fine, thx!",name:"Lera"}]},{id:"8",avatar:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0OpLU7rYWiPzdGX7LHNfSyDSNQRD8FMoNVA&usqp=CAU",name:"Valera",status:{title:"Online",isOnline:!0},messages:[{id:1,message:"Hello, I'm Valera",name:"Valera"},{id:2,message:"I,m fine, thx!",name:"Valera"}]}],messages:[{id:1,message:"Hello, how are you?",name:"Sveta"},{id:2,message:"I,m fine, thx!",name:"Naytin"},{id:3,message:"you, how are you",name:"Alina"},{id:4,message:"goodbye my friend",name:"Naytin"},{id:5,message:"goodbye my friend",name:"Artem"},{id:6,message:"goodbye my friend",name:"Naytin"},{id:7,message:"goodbye my friend",name:"Artem"},{id:8,message:"goodbye my friend",name:"Artem"},{id:9,message:"goodbye my friend",name:"Artem"},{id:10,message:"goodbye my friend",name:"Artem"}]},De=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ke,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case M.a:var n=t.value;return Object(Pe.a)(Object(Pe.a)({},e),{},{messages:[].concat(Object(Ue.a)(e.messages),[{id:11,message:n||"",name:"Naytin"}])});default:return e}},Fe={filter:"",users:[],pageSize:10,totalUsersCount:0,currentPage:1,isFetching:!1,followingInProgress:[]},Le=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Fe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case M.c:return Object(Pe.a)(Object(Pe.a)({},e),{},{users:e.users.map((function(e){return e.id===t.uId?Object(Pe.a)(Object(Pe.a)({},e),{},{followed:!0}):e}))});case M.m:return Object(Pe.a)(Object(Pe.a)({},e),{},{users:e.users.map((function(e){return e.id===t.uId?Object(Pe.a)(Object(Pe.a)({},e),{},{followed:!1}):e}))});case M.h:return Object(Pe.a)(Object(Pe.a)({},e),{},{users:Object(Ue.a)(t.users)});case M.e:return Object(Pe.a)(Object(Pe.a)({},e),{},{currentPage:t.currentPage});case M.g:return Object(Pe.a)(Object(Pe.a)({},e),{},{totalUsersCount:t.totalCount>100?100:t.totalCount});case M.k:return Object(Pe.a)(Object(Pe.a)({},e),{},{isFetching:t.isFetching});case M.l:return Object(Pe.a)(Object(Pe.a)({},e),{},{followingInProgress:t.isFetching?[].concat(Object(Ue.a)(e.followingInProgress),[t.userId]):Object(Ue.a)(e.followingInProgress.filter((function(e){return e!==t.userId})))});case"SET_FILTER":return Object(Pe.a)(Object(Pe.a)({},e),{},{filter:t.filter});default:return e}},Me={id:null,email:null,login:null,isAuth:!1},Re=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Me,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case M.i:return Object(Pe.a)(Object(Pe.a)({},e),t.payload);default:return e}},Te=n(131),qe=n(139),Ge={initialized:!1,fake:10},ze=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ge,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case M.d:return Object(Pe.a)(Object(Pe.a)({},e),{},{initialized:!0});case"FAKE":return Object(Pe.a)(Object(Pe.a)({},e),{},{fake:e.fake+1});default:return e}},Ve=Object(R.c)({profilePage:Ee,dialogsPage:De,usersPage:Le,auth:Re,form:Te.a,app:ze}),He="undefined"!==typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||compose,We=Object(R.e)(Ve,He(Object(R.a)(qe.a)));window.__store__=We;var Je=We;o.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(b.a,{store:Je,children:Object(a.jsx)(Ae,{})})}),document.getElementById("root")),Ce()},41:function(e,t,n){e.exports={dialog:"Dialog_dialog__2K2Wj",avatar__wrapper:"Dialog_avatar__wrapper__LlKbk",online:"Dialog_online__1vF4A",offline:"Dialog_offline__3Lbjh",status__block:"Dialog_status__block__3jN2j",status:"Dialog_status__1SOyD"}},42:function(e,t,n){e.exports={formControl:"FormsControls_formControl__3I3br",error:"FormsControls_error__k7wEJ",errorMessage:"FormsControls_errorMessage__zv9jX",formSummaryError:"FormsControls_formSummaryError__LJwKW"}},43:function(e,t,n){e.exports={header:"Header_header__77AOv",loginContainer:"Header_loginContainer__2-JaW",login:"Header_login__VEQmZ",avatar_container:"Header_avatar_container__24YeV",header__avatar:"Header_header__avatar__NJs12",logo:"Header_logo__1zMXW"}},53:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var a=function(e){if(!e)return"field is required"}},54:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return l}));var a=n(4),s=n(40),r=n(0),i=(n(1),n(42)),o=n.n(i),c=n(59),u=function(e){var t=e.input,n=e.meta,i=Object(s.a)(e,["input","meta"]),u=n.touched&&n.error;return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("input",Object(a.a)(Object(a.a)({className:"".concat(o.a.formControl," ").concat(u?o.a.error:"")},t),i)),u&&Object(r.jsx)(c.a,{className:o.a.errorMessage,children:n.error})]})},l=function(e){var t=e.input,n=e.meta,i=Object(s.a)(e,["input","meta"]),u=n.touched&&n.error;return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("textarea",Object(a.a)(Object(a.a)({className:"".concat(o.a.formControl," ").concat(u?o.a.error:"")},t),i)),u&&Object(r.jsx)(c.a,{className:o.a.errorMessage,children:n.error})]})}},59:function(e,t,n){"use strict";var a=n(4),s=n(40),r=n(0),i=n(1),o=n.n(i),c=n(133),u=n.n(c),l=o.a.memo((function(e){var t=e.className,n=Object(s.a)(e,["className"]),i="".concat(t||""," ").concat(u.a.box__message);return Object(r.jsx)("div",Object(a.a)({className:i},n))}));t.a=l},62:function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"d",(function(){return i})),n.d(t,"b",(function(){return c})),n.d(t,"c",(function(){return u})),n.d(t,"e",(function(){return l}));var a=n(7),s=n(19),r=function(e){return{type:a.b,value:e}},i=function(e){return{type:a.j,profile:e}},o=function(e){return{type:a.f,status:e}},c=function(e){return function(t){s.b.getProfile(e).then((function(e){return t(i(e))})).catch((function(e){alert(e)}))}},u=function(e){return function(t){s.b.getStatus(e).then((function(e){return t(o(e))})).catch((function(e){alert(e)}))}},l=function(e){return function(t){s.b.updateStatus(e).then((function(n){0===n.resultCode&&t(o(e))})).catch((function(e){alert(e)}))}}},63:function(e,t,n){e.exports={messagesSubscriber:"Messages_messagesSubscriber__2Dd67",messagesMy:"Messages_messagesMy__2C2Br",message:"Messages_message__2uG39"}},7:function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return s})),n.d(t,"f",(function(){return r})),n.d(t,"j",(function(){return i})),n.d(t,"c",(function(){return o})),n.d(t,"m",(function(){return c})),n.d(t,"h",(function(){return u})),n.d(t,"e",(function(){return l})),n.d(t,"g",(function(){return d})),n.d(t,"k",(function(){return m})),n.d(t,"l",(function(){return p})),n.d(t,"i",(function(){return g})),n.d(t,"d",(function(){return j}));var a="DIALOG/ADD_MESSAGE",s="PROFILE/ADD_POST",r="SET_STATUS",i="USER/SET_USER_PROFILE",o="USERS/FOLLOW",c="USERS/UNFOLLOW",u="USERS/SET_USERS",l="USERS/SET_CURRENT_PAGE",d="USERS/SET_TOTAL_USERS",m="USERS/TOGGLE_IS_FETCHING",p="USERS/TOGGLE_IS_FOLLOWING_PROGRESS",g="USERS/SET_USER_DATA",j="AUTH/INITIALIZED"}},[[290,1,2]]]);
//# sourceMappingURL=main.7b364195.chunk.js.map