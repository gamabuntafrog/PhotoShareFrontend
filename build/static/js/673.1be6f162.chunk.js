"use strict";(self.webpackChunkphoto_share=self.webpackChunkphoto_share||[]).push([[673],{9991:function(t,e,o){o.d(e,{Z:function(){return p}});var n=o(306),r=o(619),i=o(2436),a=o(6015),l=o(4565),c=o(7964),s=o(7083),u=o(4942),d=function(t){var e;return{container:{width:"90%",mx:"auto",pb:2},wrapper:(e={display:"grid",gap:3,color:t.palette.text.light},(0,u.Z)(e,t.breakpoints.up("laptop"),{gridTemplateColumns:"repeat(".concat(5,", 1fr)")}),(0,u.Z)(e,t.breakpoints.up("tablet"),{gridTemplateColumns:"repeat(".concat(3,", 1fr)")}),(0,u.Z)(e,t.breakpoints.down("tablet"),{gridTemplateColumns:"repeat(".concat(2,", 1fr)")}),e),itemWrapper:{position:"absolute",width:"100%",height:"100%",background:"rgba(0, 0, 0, 0.2)",zIndex:"99"},title:{position:"absolute",top:"0px",left:"0px",textAlign:"center",zIndex:"100",padding:1},postsList:{overflow:"hidden",margin:0,background:"rgba(0, 0, 0, 1)"},postItem:{bgcolor:"primary.main",overflow:"hidden",height:"auto"}}},m=o(3329);function p(t){var e=t.collections,o=(0,n.Z)(d),u=(0,i.Z)({componentNameKey:"Collections"});return 0===e.length?(0,m.jsx)(a.Z,{sx:o.container,children:(0,m.jsx)(l.Z,{variant:"h5",sx:{mt:8},textAlign:"center",children:u("noCollectionsMessage")})}):(0,m.jsx)(a.Z,{sx:o.container,children:(0,m.jsx)(a.Z,{sx:o.wrapper,children:e.map((function(t){var e=t._id,n=t.title,i=t.posts;return(0,m.jsxs)(r.C,{to:"/collections/".concat(e),children:[(0,m.jsx)(a.Z,{sx:o.itemWrapper}),(0,m.jsx)(l.Z,{sx:o.title,variant:"h4",children:n}),(0,m.jsx)(c.Z,{cols:2,sx:o.postsList,children:i.map((function(t,e){var n=i.length<2,r=0===e?2:1,a=0===e&&n?2:1;return(0,m.jsx)(s.Z,{sx:o.postItem,rows:r,cols:a,children:(0,m.jsx)("img",{src:t.image})},e)}))})]},e)}))})})}},5592:function(t,e,o){o.d(e,{Z:function(){return l}});var n=o(6015),r=o(6580),i=(o(2791),o(5468)),a=o(3329);function l(t){var e=t.size,o=t.bgOff,l=t.withMeta;return(0,a.jsxs)(a.Fragment,{children:[l&&(0,a.jsx)(i.Z,{keyOfOther:"loading"}),(0,a.jsx)(n.Z,{sx:{bgcolor:o?"none":"background.default",borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center",mt:7,position:"relative",width:e||"20vw",height:e||"20vh",mx:"auto"},children:(0,a.jsx)(n.Z,{sx:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:"100%",height:"100%"},children:(0,a.jsx)(r.Z,{size:e||"20vw"})})})]})}},619:function(t,e,o){o.d(e,{C:function(){return a}});var n=o(4942),r=o(277),i=o(1087);e.Z=function(t){return{loaderOrErrorWrapper:{minHeight:"100vh",display:"flex",alignItems:"center",justifyContent:"center"},wrapper:(0,n.Z)({display:"flex",alignItems:"center",justifyContent:"center",my:3},t.breakpoints.down("tablet"),{flexDirection:"column"}),avatar:{width:"200px",height:"200px"},userInfoWrapper:(0,n.Z)({display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column",ml:2},t.breakpoints.down("tablet"),{ml:0}),userInfoSecondWrapper:{display:"flex",margin:1},infoItem:{mx:1,textAlign:"center"},allowedToViewCollectionsWrapper:{mt:3,mb:6,pt:3,borderTop:"8px solid ".concat(t.palette.primary.main)},navLinksWrapper:(0,n.Z)({padding:3,display:"flex",justifyContent:"center",alignItems:"center",fontSize:"24px","& > a":{marginLeft:3}},t.breakpoints.down("tablet"),{flexDirection:"column","& > a":{marginTop:1,marginLeft:0,textAlign:"center"}}),changeUserProfile:{formWrapper:(0,n.Z)({ml:1},t.breakpoints.down("tablet"),{ml:0,"& *":{textAlign:"center"}}),inputLabel:{cursor:"pointer",color:"inherit",width:"100%"}}}};var a=(0,r.ZP)(i.OL)((function(t){var e=t.theme;return(0,n.Z)({position:"relative",backgroundColor:e.palette.primary.main,borderRadius:"8px",overflow:"hidden",minHeight:"150px",maxHeight:"300px"},e.breakpoints.down("tablet"),{height:"150px"})}))},1452:function(t,e,o){var n=o(7469),r=o(7883).l.injectEndpoints({endpoints:function(t){return{getOneWithPostsAndAuthor:t.query({query:function(t){var e=t.id;return{url:"/collections/".concat(e)}},transformResponse:function(t){return t.data},providesTags:["Collection"]}),getCollectionsByUserId:t.query({query:function(t){var e=t.id;return{url:"/users/".concat(e,"/collections")}},transformResponse:function(t){return t.data.collections}}),searchCollections:t.query({query:function(t){return{url:"/collections/search",params:{title:t.title}}},transformResponse:function(t){return t.data.collections}}),getAllowedToViewCollections:t.query({query:function(t){var e=t.id;return{url:"/users/".concat(e,"/allowedToViewCollections")}},transformResponse:function(t){return t.data.allowedToViewCollections}}),getCurrentUserCollections:t.query({query:function(){return{url:"/collections/current"}},transformResponse:function(t){return t.data.collections},providesTags:["Collection"]}),createCollection:t.mutation({query:function(t){return{url:"/collections",method:"POST",body:t.body}},transformErrorResponse:n.Y}),deleteCollection:t.mutation({query:function(t){var e=t.id;return{url:"/collections/".concat(e),method:"DELETE"}},transformErrorResponse:n.Y}),savePostInCollection:t.mutation({query:function(t){var e=t.collectionId,o=t.postId;return{url:"/collections/".concat(e,"/saves/").concat(o),method:"POST"}},transformErrorResponse:n.Y}),deletePostFromCollection:t.mutation({query:function(t){var e=t.collectionId,o=t.postId;return{url:"/collections/".concat(e,"/saves/").concat(o),method:"DELETE"}},transformErrorResponse:n.Y}),addAuthorToCollection:t.mutation({query:function(t){var e=t.collectionId,o=t.authorId,n=t.role;return{url:"/collections/".concat(e,"/authors/").concat(o),method:"POST",params:{role:n}}},invalidatesTags:["Collection"]}),addViewerToCollection:t.mutation({query:function(t){var e=t.collectionId,o=t.viewerId;return{url:"/collections/".concat(e,"/viewers/").concat(o),method:"POST"}},invalidatesTags:["Collection"]}),sendRequestToJoinToCollection:t.mutation({query:function(t){var e=t.collectionId;return{url:"/collections/".concat(e,"/requests"),method:"POST"}},invalidatesTags:["Collection"]}),unsendRequestToJoinFromCollection:t.mutation({query:function(t){var e=t.collectionId;return{url:"/collections/".concat(e,"/requests"),method:"DELETE"}},invalidatesTags:["Collection"]}),changeAuthorRoleInCollection:t.mutation({query:function(t){var e=t.collectionId,o=t.authorId,n=t.role;return{url:"/collections/".concat(e,"/authors/").concat(o,"/roles"),method:"PATCH",params:{role:n}}},invalidatesTags:["Collection"]}),changeCollectionInfo:t.mutation({query:function(t){var e=t.collectionId,o=t.title,n=t.tags;return{url:"/collections/".concat(e),method:"PATCH",body:{title:o,tags:n}}},invalidatesTags:["Collection"]}),deleteAuthorFromCollection:t.mutation({query:function(t){var e=t.collectionId,o=t.authorId;return{url:"/collections/".concat(e,"/authors/").concat(o),method:"DELETE"}},invalidatesTags:["Collection"]}),deleteViewerFromCollection:t.mutation({query:function(t){var e=t.collectionId,o=t.viewerId;return{url:"/collections/".concat(e,"/viewers/").concat(o),method:"DELETE"}},invalidatesTags:["Collection"]}),deleteRequestedUserFromCollection:t.mutation({query:function(t){var e=t.collectionId,o=t.userId;return{url:"/collections/".concat(e,"/requests/").concat(o),method:"DELETE"}},invalidatesTags:["Collection"]}),deleteCurrentUserFromCollection:t.mutation({query:function(t){var e=t.collectionId;return{url:"/collections/".concat(e,"/current"),method:"DELETE"}},invalidatesTags:["Collection"]}),changeIsPrivate:t.mutation({query:function(t){var e=t.collectionId;return{url:"/collections/".concat(e,"/isPrivate"),method:"PATCH"}},invalidatesTags:["Collection"]})}}});e.Z=r},7469:function(t,e,o){o.d(e,{Y:function(){return n}});var n=function(t){return t.data}},7083:function(t,e,o){o.d(e,{Z:function(){return x}});var n=o(4942),r=o(3366),i=o(7462),a=o(4419),l=o(8182),c=o(2791),s=(o(8457),o(1517)),u=o(277),d=o(5513),m=o(6258),p=o(5878),f=o(1217);function v(t){return(0,f.Z)("MuiImageListItem",t)}var g=(0,p.Z)("MuiImageListItem",["root","img","standard","woven","masonry","quilted"]),h=o(3329),y=["children","className","cols","component","rows","style"],w=(0,u.ZP)("li",{name:"MuiImageListItem",slot:"Root",overridesResolver:function(t,e){var o=t.ownerState;return[(0,n.Z)({},"& .".concat(g.img),e.img),e.root,e[o.variant]]}})((function(t){var e=t.ownerState;return(0,i.Z)({display:"block",position:"relative"},"standard"===e.variant&&{display:"flex",flexDirection:"column"},"woven"===e.variant&&{height:"100%",alignSelf:"center","&:nth-of-type(even)":{height:"70%"}},(0,n.Z)({},"& .".concat(g.img),(0,i.Z)({objectFit:"cover",width:"100%",height:"100%",display:"block"},"standard"===e.variant&&{height:"auto",flexGrow:1})))})),x=c.forwardRef((function(t,e){var o=(0,d.Z)({props:t,name:"MuiImageListItem"}),n=o.children,u=o.className,p=o.cols,f=void 0===p?1:p,g=o.component,x=void 0===g?"li":g,C=o.rows,Z=void 0===C?1:C,I=o.style,b=(0,r.Z)(o,y),T=c.useContext(s.Z),q=T.rowHeight,E=void 0===q?"auto":q,j=T.gap,k=T.variant,L="auto";"woven"===k?L=void 0:"auto"!==E&&(L=E*Z+j*(Z-1));var R=(0,i.Z)({},o,{cols:f,component:x,gap:j,rowHeight:E,rows:Z,variant:k}),P=function(t){var e=t.classes,o={root:["root",t.variant],img:["img"]};return(0,a.Z)(o,v,e)}(R);return(0,h.jsx)(w,(0,i.Z)({as:x,className:(0,l.Z)(P.root,P[k],u),ref:e,style:(0,i.Z)({height:L,gridColumnEnd:"masonry"!==k?"span ".concat(f):void 0,gridRowEnd:"masonry"!==k?"span ".concat(Z):void 0,marginBottom:"masonry"===k?j:void 0},I),ownerState:R},b,{children:c.Children.map(n,(function(t){return c.isValidElement(t)?"img"===t.type||(0,m.Z)(t,["Image"])?c.cloneElement(t,{className:(0,l.Z)(P.img,t.props.className)}):t:null}))}))}))},7964:function(t,e,o){o.d(e,{Z:function(){return h}});var n=o(3366),r=o(7462),i=o(4419),a=o(8182),l=o(2791),c=o(277),s=o(5513),u=o(5878),d=o(1217);function m(t){return(0,d.Z)("MuiImageList",t)}(0,u.Z)("MuiImageList",["root","masonry","quilted","standard","woven"]);var p=o(1517),f=o(3329),v=["children","className","cols","component","rowHeight","gap","style","variant"],g=(0,c.ZP)("ul",{name:"MuiImageList",slot:"Root",overridesResolver:function(t,e){var o=t.ownerState;return[e.root,e[o.variant]]}})((function(t){var e=t.ownerState;return(0,r.Z)({display:"grid",overflowY:"auto",listStyle:"none",padding:0,WebkitOverflowScrolling:"touch"},"masonry"===e.variant&&{display:"block"})})),h=l.forwardRef((function(t,e){var o=(0,s.Z)({props:t,name:"MuiImageList"}),c=o.children,u=o.className,d=o.cols,h=void 0===d?2:d,y=o.component,w=void 0===y?"ul":y,x=o.rowHeight,C=void 0===x?"auto":x,Z=o.gap,I=void 0===Z?4:Z,b=o.style,T=o.variant,q=void 0===T?"standard":T,E=(0,n.Z)(o,v),j=l.useMemo((function(){return{rowHeight:C,gap:I,variant:q}}),[C,I,q]);l.useEffect((function(){0}),[]);var k="masonry"===q?(0,r.Z)({columnCount:h,columnGap:I},b):(0,r.Z)({gridTemplateColumns:"repeat(".concat(h,", 1fr)"),gap:I},b),L=(0,r.Z)({},o,{component:w,gap:I,rowHeight:C,variant:q}),R=function(t){var e=t.classes,o={root:["root",t.variant]};return(0,i.Z)(o,m,e)}(L);return(0,f.jsx)(g,(0,r.Z)({as:w,className:(0,a.Z)(R.root,R[q],u),ref:e,style:k,ownerState:L},E,{children:(0,f.jsx)(p.Z.Provider,{value:j,children:c})}))}))},1517:function(t,e,o){var n=o(2791).createContext({});e.Z=n}}]);
//# sourceMappingURL=673.1be6f162.chunk.js.map