(this["webpackJsonpsocial-network-ts"]=this["webpackJsonpsocial-network-ts"]||[]).push([[3],{291:function(e,t,s){e.exports={profile:"Profile_profile__1hWgy"}},292:function(e,t,s){e.exports={profileInfo__wrapper:"ProfileInfo_profileInfo__wrapper__jcKgs",profileInfo__avatar:"ProfileInfo_profileInfo__avatar__21g6G",profileInfo__des:"ProfileInfo_profileInfo__des__36exJ",profileInfo__title:"ProfileInfo_profileInfo__title__2n4Cs",profileInfo__info:"ProfileInfo_profileInfo__info__NrYoI",profileInfo__menu:"ProfileInfo_profileInfo__menu__1EWKT",profileInfo__menu_item:"ProfileInfo_profileInfo__menu_item__3lAYB"}},293:function(e,t,s){e.exports={post__item:"Post_post__item__1Eyxw",post__header:"Post_post__header__1Rq59",post__name:"Post_post__name__2Gzmj",post__avatar:"Post_post__avatar__2i_HP",post__comments:"Post_post__comments__sSWSn"}},294:function(e,t,s){e.exports={posts__wrapper:"Posts_posts__wrapper__3Cgg3",modal__open:"Posts_modal__open__2zXWC",modal:"Posts_modal__2bgUx"}},296:function(e,t,s){"use strict";s.r(t);var o=s(0),a=s(1),n=s.n(a),i=s(291),r=s.n(i),c=s(14),l=s(292),_=s.n(l),f=s(99),p=n.a.memo((function(e){var t=n.a.useState(e.status),s=Object(f.a)(t,2),i=s[0],r=s[1],c=n.a.useState(!1),l=Object(f.a)(c,2),_=l[0],p=l[1];Object(a.useEffect)((function(){r(e.status)}),[e.status]);return Object(o.jsxs)(o.Fragment,{children:[!_&&Object(o.jsx)("div",{onDoubleClick:function(){var t;13139===(null===(t=e.profileStatus)||void 0===t?void 0:t.userId)&&p(!0)},children:Object(o.jsx)("span",{children:i||"No status"})}),_&&Object(o.jsx)("div",{children:Object(o.jsx)("input",{autoFocus:!0,onBlur:function(){p(!1),e.updateStatusProfile(i)},onKeyPress:function(t){"Enter"===t.key&&(p(!1),r(t.currentTarget.value),e.updateStatusProfile(i))},onChange:function(e){r(e.currentTarget.value)},type:"text",value:i})})]})})),u=n.a.memo((function(e){var t,s,a;return Object(o.jsxs)("div",{className:_.a.profileInfo,children:[Object(o.jsx)("div",{className:_.a.profileInfo__wrapper,children:Object(o.jsx)("div",{children:Object(o.jsx)("img",{className:_.a.profileInfo__avatar,src:(null===(t=e.profile)||void 0===t?void 0:t.photos.small)?null===(s=e.profile)||void 0===s?void 0:s.photos.small:"https://image.flaticon.com/icons/png/512/147/147144.png",alt:"Avatar"})})}),Object(o.jsxs)("div",{className:_.a.profileInfo__des,children:[Object(o.jsxs)("ul",{className:_.a.profileInfo__menu,children:[Object(o.jsx)(c.b,{to:"Test/About",className:_.a.profileInfo__menu_item,children:"About"}),Object(o.jsx)(c.b,{to:"Test/Friends",className:_.a.profileInfo__menu_item,children:"Friends"}),Object(o.jsx)("h6",{className:_.a.profileInfo__title,children:null===(a=e.profile)||void 0===a?void 0:a.fullName}),Object(o.jsx)(c.b,{to:"/Settings",className:_.a.profileInfo__menu_item,children:"Settings"}),Object(o.jsx)(c.b,{to:"Test/Photos",className:_.a.profileInfo__menu_item,children:"Photos"})]}),Object(o.jsx)("div",{className:_.a.profileInfo__info,children:"San Francisco, CA"}),Object(o.jsx)(p,{updateStatusProfile:e.updateStatusProfile,status:e.status,profileStatus:e.profile})]})]})})),d=s(29),j=s(30),m=s(32),b=s(31),h=s(293),O=s.n(h),x=n.a.memo((function(e){var t=e.message,s=e.likesCount,a=(new Date).toJSON().slice(0,10);(new Date).toTimeString().slice(0,8);return Object(o.jsxs)("div",{className:O.a.post__item,children:[Object(o.jsxs)("div",{className:O.a.post__header,children:[Object(o.jsx)("img",{className:O.a.post__avatar,src:"https://image.flaticon.com/icons/png/512/147/147144.png",alt:""}),Object(o.jsxs)("div",{children:[Object(o.jsx)("span",{className:O.a.post__name,children:"James Luis"}),Object(o.jsx)("time",{children:a})]})]}),Object(o.jsx)("article",{children:t}),Object(o.jsx)("div",{className:O.a.post__comments,children:Object(o.jsxs)("span",{children:["Likes",Object(o.jsx)("b",{children:s})]})})]})})),v=s(294),P=s.n(v),I=s(129),g=s(130),N=s(53),S=s(54),w=s(26),k=s(12),C=n.a.memo((function(e){return Object(o.jsxs)("form",{onSubmit:e.handleSubmit,children:[Object(o.jsx)(I.a,{component:S.b,name:"newPostMessage",validate:[N.a]}),Object(o.jsx)(w.a,{children:"Send post"})]})})),y=Object(g.a)({form:"addNewPost"})(C),T=n.a.memo((function(e){var t=e.posts,s=e.addPost,a=Object(k.c)((function(e){return e.auth.isAuth})),i=n.a.useState(!1),r=Object(f.a)(i,2),c=r[0],l=r[1],_=t.map((function(e,t){return Object(o.jsx)(x,{message:e.message,likesCount:e.likesCount,id:e.id},t)}));return Object(o.jsxs)("div",{className:P.a.posts__wrapper,children:[c&&Object(o.jsx)("div",{className:P.a.modal,children:Object(o.jsx)(y,{onSubmit:function(e){s(e.newPostMessage),l(!c)}})}),Object(o.jsx)("div",{className:"post",children:a?_:"posts not found"})]})})),A=s(62),F=function(e){Object(m.a)(s,e);var t=Object(b.a)(s);function s(){return Object(d.a)(this,s),t.apply(this,arguments)}return Object(j.a)(s,[{key:"shouldComponentUpdate",value:function(e,t,s){return e!=this.props||t!=this.state}},{key:"render",value:function(){return Object(o.jsx)(T,{posts:this.props.posts,status:this.props.status,addPost:this.props.addPost})}}]),s}(n.a.Component),J=Object(k.b)((function(e){return{posts:e.profilePage.posts,status:e.profilePage.status}}),{addPost:A.a,setUserProfile:A.d})(F),E=n.a.memo((function(e){return Object(o.jsxs)("div",{className:r.a.profile,children:[Object(o.jsx)(u,{profile:e.profile,updateStatusProfile:e.updateStatusProfile,status:e.status}),Object(o.jsx)(J,{})]})}));t.default=E}}]);
//# sourceMappingURL=3.bc356cb6.chunk.js.map