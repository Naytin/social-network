(this["webpackJsonpsocial-network-ts"]=this["webpackJsonpsocial-network-ts"]||[]).push([[3],{286:function(e,t,s){e.exports={profile:"Profile_profile__1hWgy"}},287:function(e,t,s){e.exports={profileInfo__wrapper:"ProfileInfo_profileInfo__wrapper__jcKgs",profileInfo__avatar:"ProfileInfo_profileInfo__avatar__21g6G",profileInfo__des:"ProfileInfo_profileInfo__des__36exJ",profileInfo__title:"ProfileInfo_profileInfo__title__2n4Cs",profileInfo__info:"ProfileInfo_profileInfo__info__NrYoI",profileInfo__menu:"ProfileInfo_profileInfo__menu__1EWKT",profileInfo__menu_item:"ProfileInfo_profileInfo__menu_item__3lAYB"}},288:function(e,t,s){e.exports={post__item:"Post_post__item__1Eyxw",post__header:"Post_post__header__1Rq59",post__name:"Post_post__name__2Gzmj",post__avatar:"Post_post__avatar__2i_HP",post__comments:"Post_post__comments__sSWSn"}},289:function(e,t,s){e.exports={posts__wrapper:"Posts_posts__wrapper__3Cgg3",modal__open:"Posts_modal__open__2zXWC",modal:"Posts_modal__2bgUx"}},291:function(e,t,s){"use strict";s.r(t);var o=s(0),n=s(1),a=s.n(n),i=s(286),r=s.n(i),l=s(13),c=s(287),_=s.n(c),f=s(97),p=function(e){var t=a.a.useState(e.status),s=Object(f.a)(t,2),i=s[0],r=s[1],l=a.a.useState(!1),c=Object(f.a)(l,2),_=c[0],p=c[1];Object(n.useEffect)((function(){r(e.status)}),[e.status]);return Object(o.jsxs)(o.Fragment,{children:[!_&&Object(o.jsx)("div",{onDoubleClick:function(){var t;13139===(null===(t=e.profileStatus)||void 0===t?void 0:t.userId)&&p(!0)},children:Object(o.jsx)("span",{children:i||"No status"})}),_&&Object(o.jsx)("div",{children:Object(o.jsx)("input",{autoFocus:!0,onBlur:function(){p(!1),e.updateStatusProfile(i)},onKeyPress:function(t){"Enter"===t.key&&(p(!1),r(t.currentTarget.value),e.updateStatusProfile(i))},onChange:function(e){r(e.currentTarget.value)},type:"text",value:i})})]})},u=function(e){var t,s,n;return Object(o.jsxs)("div",{className:_.a.profileInfo,children:[Object(o.jsx)("div",{className:_.a.profileInfo__wrapper,children:Object(o.jsx)("div",{children:Object(o.jsx)("img",{className:_.a.profileInfo__avatar,src:(null===(t=e.profile)||void 0===t?void 0:t.photos.small)?null===(s=e.profile)||void 0===s?void 0:s.photos.small:"https://image.flaticon.com/icons/png/512/147/147144.png",alt:""})})}),Object(o.jsxs)("div",{className:_.a.profileInfo__des,children:[Object(o.jsxs)("ul",{className:_.a.profileInfo__menu,children:[Object(o.jsx)(l.b,{to:"Test/About",className:_.a.profileInfo__menu_item,children:"About"}),Object(o.jsx)(l.b,{to:"Test/Friends",className:_.a.profileInfo__menu_item,children:"Friends"}),Object(o.jsx)("h6",{className:_.a.profileInfo__title,children:null===(n=e.profile)||void 0===n?void 0:n.fullName}),Object(o.jsx)(l.b,{to:"/Settings",className:_.a.profileInfo__menu_item,children:"Settings"}),Object(o.jsx)(l.b,{to:"Test/Photos",className:_.a.profileInfo__menu_item,children:"Photos"})]}),Object(o.jsx)("div",{className:_.a.profileInfo__info,children:"San Francisco, CA"}),Object(o.jsx)(p,{updateStatusProfile:e.updateStatusProfile,status:e.status,profileStatus:e.profile})]})]})},d=s(288),j=s.n(d),m=function(e){var t=e.message,s=e.likesCount,n=(new Date).toJSON().slice(0,10);(new Date).toTimeString().slice(0,8);return Object(o.jsxs)("div",{className:j.a.post__item,children:[Object(o.jsxs)("div",{className:j.a.post__header,children:[Object(o.jsx)("img",{className:j.a.post__avatar,src:"https://image.flaticon.com/icons/png/512/147/147144.png",alt:""}),Object(o.jsxs)("div",{children:[Object(o.jsx)("span",{className:j.a.post__name,children:"James Luis"}),Object(o.jsx)("time",{children:n})]})]}),Object(o.jsx)("article",{children:t}),Object(o.jsx)("div",{className:j.a.post__comments,children:Object(o.jsxs)("span",{children:["Likes",Object(o.jsx)("b",{children:s})]})})]})},b=s(289),x=s.n(b),O=s(127),h=s(128),v=s(50),P=s(42),I=Object(h.a)({form:"addNewPost"})((function(e){return Object(o.jsxs)("form",{onSubmit:e.handleSubmit,children:[Object(o.jsx)(O.a,{component:P.b,name:"newPostMessage",validate:[v.a]}),Object(o.jsx)("button",{children:"Add Post"})]})})),g=s(56),N=s(12),S=Object(N.b)((function(e){return{posts:e.profilePage.posts,status:e.profilePage.status}}),{addPost:g.a,setUserProfile:g.d})((function(e){var t=e.posts,s=e.addPost,n=a.a.useState(!1),i=Object(f.a)(n,2),r=i[0],l=i[1],c=t.map((function(e,t){return Object(o.jsx)(m,{message:e.message,likesCount:e.likesCount,id:e.id},t)}));return Object(o.jsxs)("div",{className:x.a.posts__wrapper,children:[Object(o.jsx)("span",{className:x.a.modal__open,onClick:function(){return l(!r)}}),r&&Object(o.jsx)("div",{className:x.a.modal,children:Object(o.jsx)(I,{onSubmit:function(e){s(e.newPostMessage),l(!r)}})}),Object(o.jsx)("div",{className:"post",children:c})]})}));t.default=function(e){return Object(o.jsxs)("div",{className:r.a.profile,children:[Object(o.jsx)(u,{profile:e.profile,updateStatusProfile:e.updateStatusProfile,status:e.status}),Object(o.jsx)(S,{})]})}}}]);
//# sourceMappingURL=3.dac1472e.chunk.js.map