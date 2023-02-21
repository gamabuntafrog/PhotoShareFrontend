"use strict";(self.webpackChunkphoto_share=self.webpackChunkphoto_share||[]).push([[635],{7033:function(e,t,r){var n=r(4942);t.Z=function(e){var t,r,o;return{backdrop:{display:"flex",alignItems:"center",justifyContent:"center"},modalWrapper:(t={bgcolor:"background.paper",flexShrink:0,width:"50vw",maxHeight:"100vh",overflow:"auto",px:0,color:"text.primary",borderRadius:2,position:"relative",display:"flex",flexDirection:"column",justifyContent:"flex-start"},(0,n.Z)(t,e.breakpoints.down("laptop"),{width:"70vw"}),(0,n.Z)(t,e.breakpoints.down("tablet"),{width:"100vw",borderRadius:0,minHeight:"100vh"}),t),modalContainer:{px:2,mb:3},closeIconWrapper:{display:"flex",justifyContent:"space-between",alignItems:"center",mb:3,pl:2,pr:1,pb:1,borderBottom:"1px solid rgba(255, 255, 255, 0.2)"},closeIcon:{ml:"auto"},errorContainer:{margin:"0 auto",display:"flex",alignItems:"center",justifyContent:"center",height:"90vh",maxHeight:"90vh"},title:{color:e.palette.text.secondary},collectionWrapper:{py:2,position:"relative"},collectionPostsList:{width:"95%",py:2,mx:"auto"},addAuthorModal:{backdrop:{display:"flex",alignItems:"center",justifyContent:"center"},modalWrapper:(0,n.Z)({bgcolor:"background.paper",width:"50vw",maxHeight:"100vh",overflow:"auto",padding:2,pt:8,color:"text.primary",borderRadius:2,position:"relative"},e.breakpoints.down("tablet"),{width:"80vw"}),loaderWrapper:(0,n.Z)({bgcolor:"background.paper",width:"50vw",overflow:"hidden",padding:2,color:"text.primary",borderRadius:2,position:"relative"},e.breakpoints.down("tablet"),{width:"80vw"}),title:{padding:1,textAlign:"center",color:"primary.main",wordBreak:"break-word"},closeIcon:{position:"absolute",right:20,top:20},notFound:{textAlign:"center",padding:2},userItem:(0,n.Z)({},e.breakpoints.down("tablet"),{padding:1}),avatarWrapper:{cursor:"pointer",minWidth:"auto"},avatar:(0,n.Z)({width:60,height:60},e.breakpoints.down("tablet"),{width:40,height:40}),usernameWrapper:(r={ml:2,mr:1},(0,n.Z)(r,e.breakpoints.down("tablet"),{mx:1}),(0,n.Z)(r,"cursor","pointer"),r)},deleteAuthorModal:{backdrop:{display:"flex",alignItems:"center",justifyContent:"center"},modalWrapper:(0,n.Z)({bgcolor:"background.paper",width:"50vw",maxHeight:"100vh",overflow:"auto",padding:2,pt:8,color:"text.primary",borderRadius:2,position:"relative"},e.breakpoints.down("tablet"),{width:"80vw"}),closeIcon:{position:"absolute",right:20,top:20},title:{padding:1,textAlign:"center",wordBreak:"break-word"},avatar:{width:60,height:60},authorUsernameWrapper:{ml:2,mr:1},errorTitle:{padding:1,textAlign:"center",wordBreak:"break-word"}},authorUsernameWrapper:{ml:2,mr:1},avatar:{width:60,height:60},authorInfo:{closeIcon:{position:"absolute",right:20,top:20},title:{padding:1,textAlign:"center",wordBreak:"break-word"},listItem:(0,n.Z)({},e.breakpoints.down("tablet"),{px:0}),avatar:{width:60,height:60},authorUsernameWrapper:{ml:2,mr:1,cursor:"pointer"},errorTitle:{padding:1,textAlign:"center",wordBreak:"break-word"}},buttonsWrapper:{display:"flex",justifyContent:"center"},collectionInfo:{wrapper:{mb:2,mt:6},title:(o={textAlign:"center",wordBreak:"break-word"},(0,n.Z)(o,e.breakpoints.down("tablet"),{fontSize:50}),(0,n.Z)(o,"padding",2),o),tags:{textAlign:"center"},secondWrapper:{display:"flex",flexDirection:"column",alignItems:"center"},authorLinkWrapper:{display:"flex",alignItems:"center",cursor:"pointer"},authorContainerWrapper:{display:"flex",alignItems:"start",flexDirection:"column"},userRole:{ml:1,color:"primary.main"},avatar:{width:"80px",height:"80px"},addNewPostButton:{mt:3}},accordionWrapper:{borderRadius:"16px !important",mb:1,"&:before":{display:"none"}},accordionTitle:{width:"90%",flexShrink:0},togglePrivateContainer:{mt:3,mb:3,px:1,display:"flex",justifyContent:"space-between",alignItems:"center"},dangerButtonsWrapper:{display:"flex",px:1,mt:3},collectionSettingsInfo:{changeInfoForm:{wrapper:{mb:2,px:1},inputLabel:{mb:1},input:{mb:1},buttonsWrapper:(0,n.Z)({display:"flex",mt:1},e.breakpoints.down("tablet"),{flexDirection:"column"}),saveChangesButton:(0,n.Z)({mr:2},e.breakpoints.down("tablet"),{mx:0}),cancelChangesButton:(0,n.Z)({width:"25%"},e.breakpoints.down("tablet"),{width:"75%",mx:"auto",mt:1})},wrapper:(0,n.Z)({mb:2,px:1,display:"flex",justifyContent:"space-between"},e.breakpoints.down("tablet"),{flexDirection:"column"}),secondWrapper:(0,n.Z)({mr:2},e.breakpoints.down("tablet"),{mr:0,mb:1})}}}},1635:function(e,t,r){r.r(t),r.d(t,{default:function(){return C}});var n=r(9439),o=r(803),i=r(4565),a=r(6015),s=r(7205),l=r(7689),d=r(2791),p=r(7898),c=r(5444),u=r(306),h=r(7033),x=r(2436),m=r(5468),b=r(1452),g=r(9650),f=r(8338);var w=r(9067),v=r(3978),Z=r(1087),k=r(3329);function y(e){var t=e.title,r=e.formattedTags,n=e.authors,o=e.isCurrentUserAuthorOfCollection,d=e.collectionId,p=(0,u.Z)(h.Z).collectionInfo,c=(0,l.s0)(),m=(0,x.Z)({componentNameKey:"Collection.CollectionInfo"});return(0,k.jsxs)(k.Fragment,{children:[(0,k.jsxs)(a.Z,{sx:p.wrapper,children:[(0,k.jsx)(i.Z,{variant:"h1",sx:p.title,children:t}),(0,k.jsx)(i.Z,{variant:"body2",sx:p.tags,children:r})]}),(0,k.jsxs)(a.Z,{sx:p.secondWrapper,children:[(0,k.jsx)(i.Z,{variant:"body2",children:m("by")}),n.map((function(e){var t=e._id,r=e.username,n=e.avatar,o=e.isAdmin;return(0,k.jsxs)(a.Z,{sx:p.authorLinkWrapper,onClick:function(){return c("/users/".concat(t))},children:[(0,k.jsx)(v.Z,{sx:p.avatar,src:n||"",alt:r}),(0,k.jsxs)(a.Z,{sx:p.authorContainerWrapper,children:[o?(0,k.jsx)(i.Z,{sx:p.userRole,variant:"caption",children:m("admin")}):(0,k.jsx)(i.Z,{sx:p.userRole,variant:"caption",children:m("author")}),(0,k.jsx)(i.Z,{sx:{ml:1},variant:"h5",children:r})]})]},t)})),o&&(0,k.jsx)(s.Z,{variant:"contained",sx:p.addNewPostButton,children:(0,k.jsx)(Z.OL,{to:"/post/create/".concat(d),children:m("addNewPostButton")})})]})]})}var j=d.lazy((function(){return Promise.all([r.e(319),r.e(152)]).then(r.bind(r,3152))}));var C=function(){var e=(0,l.UO)().id,t=void 0===e?"":e,r=b.Z.useGetOneWithPostsAndAuthorQuery({id:t}),v=r.data,Z=r.isLoading,C=r.error,I=function(e){var t=e.id,r=g.Z.useLazyGetPostsByCollectionIdQuery(),o=(0,n.Z)(r,2),i=o[0],a=o[1],s=a.data,l=void 0===s?[]:s,d=a.isLoading,p=a.isError,c=(0,f.Z)({trigger:i,isLoading:d,isError:p,id:t,data:l});return{data:c.paginatedData,isLoading:d,isError:p,ref:c.ref,isEnd:c.isEnd}}({id:t}),W=I.data,A=I.isLoading,B=I.isError,R=I.ref,L=(0,p.Z)({initPosts:W}),S=(0,n.Z)(L,2),P=S[0],O=S[1],T=(0,d.useState)(!1),M=(0,n.Z)(T,2),U=M[0],D=M[1],E=(0,u.Z)(h.Z),F=(0,x.Z)({componentNameKey:"Collection"}),H=b.Z.useSendRequestToJoinToCollectionMutation(),N=(0,n.Z)(H,1)[0],q=b.Z.useUnsendRequestToJoinFromCollectionMutation(),_=(0,n.Z)(q,1)[0];if(Z||A)return(0,k.jsx)(c.Z,{withMeta:!0});if(C||!v||B)return(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)(m.Z,{keyOfOther:"error"}),(0,k.jsx)(o.Z,{sx:E.errorContainer,children:(0,k.jsx)(i.Z,{variant:"h1",sx:{textAlign:"center"},children:F("errorMessage")})})]});var z=v.collection,Q=v.currentUserStatus,G=z._id,J=z.title,K=z.tags,V=z.authors,X=z.isPrivate,Y=Q.isAuthor,$=Q.isAdmin,ee=Q.isViewer,te=Q.isInQueue,re=K.join(" "),ne=X?"privateCollection":"publicCollection";return(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)(m.Z,{keyOfTitle:ne}),(0,k.jsxs)(a.Z,{children:[(Y||$)&&(0,k.jsx)(d.Suspense,{fallback:(0,k.jsx)(c.Z,{fixed:!0,withMeta:!0}),children:(0,k.jsx)(j,{data:v,closeSettingsModal:function(){return D(!1)},isSettingsOpen:U})}),(0,k.jsxs)(a.Z,{sx:E.collectionWrapper,children:[(0,k.jsxs)(a.Z,{sx:E.buttonsWrapper,children:[(Y||$)&&(0,k.jsx)(s.Z,{sx:{mx:1},variant:"contained",onClick:function(){return D(!0)},children:F("openSettingsButton")}),!Y&&!$&&!ee&&!te&&(0,k.jsx)(s.Z,{sx:{mx:1},variant:"contained",onClick:function(){return N({collectionId:t})},children:F("sendRequest")}),te&&(0,k.jsx)(s.Z,{sx:{mx:1},variant:"contained",onClick:function(){return _({collectionId:t})},children:F("unsendRequest")})]}),(0,k.jsx)(y,{title:J,formattedTags:re,authors:V,isCurrentUserAuthorOfCollection:Y,collectionId:G})]}),(0,k.jsx)(w.default,{posts:P,postsActions:O}),(0,k.jsx)("div",{ref:R})]})]})}}}]);
//# sourceMappingURL=635.445a5b7a.chunk.js.map