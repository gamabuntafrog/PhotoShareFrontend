"use strict";(self.webpackChunkphoto_share=self.webpackChunkphoto_share||[]).push([[243],{5592:function(t,e,n){n.d(e,{Z:function(){return s}});var i=n(6015),r=n(6580),a=(n(2791),n(5468)),o=n(3329);function s(t){var e=t.size,n=t.bgOff,s=t.withMeta;return(0,o.jsxs)(o.Fragment,{children:[s&&(0,o.jsx)(a.Z,{keyOfOther:"loading"}),(0,o.jsx)(i.Z,{sx:{bgcolor:n?"none":"background.default",borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center",mt:7,position:"relative",width:e||"20vw",height:e||"20vh",mx:"auto"},children:(0,o.jsx)(i.Z,{sx:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:"100%",height:"100%"},children:(0,o.jsx)(r.Z,{size:e||"20vw"})})})]})}},8243:function(t,e,n){n.r(e),n.d(e,{default:function(){return m}});var i=n(9439),r=n(1087),a=n(9281),o=n(4565),s=n(5592),l=n(7898),d=n(2791),c=n(2436),u=n(306),f=n(5212),h=n(9650),g=n(4701);var p=n(3329),x=d.lazy((function(){return Promise.all([n.e(695),n.e(224),n.e(67)]).then(n.bind(n,9067))}));function m(){var t=(0,r.lr)(),e=(0,i.Z)(t,1)[0].get("query")||"",n=(0,a.Nr)(e,500),d=(0,i.Z)(n,1)[0],m=function(t){var e=t.title,n=h.Z.useLazySearchPostsQuery(),r=(0,i.Z)(n,2),a=r[0],o=r[1],s=o.data,l=void 0===s?[]:s,d=o.isLoading,c=o.isError,u=(0,g.Z)({isLoading:d,data:l,isError:c,triggerCallback:function(t){var n=t.page;if(!(e.length<2)){var i=f.map((function(t){return t._id}));a({page:n,arrayOfId:i,title:e})}}}),f=u.paginatedData,p=u.isEnd,x=u.ref;return{data:f,isLoading:d,error:c,ref:x,isEnd:p}}({title:d}),Z=m.data,b=m.isLoading,v=m.ref,w=(m.isEnd,(0,l.Z)({initPosts:Z})),k=(0,i.Z)(w,2),y=k[0],j=k[1],E=(0,c.Z)({componentNameKey:"Search.Posts"}),L=(0,u.Z)(f.Z).posts;return b?(0,p.jsx)(s.Z,{}):!b&&0===y.length&&d.length>2?(0,p.jsx)(o.Z,{variant:"h3",sx:L.title,textAlign:"center",children:E("notFound")}):0===y.length&&d.length<2?(0,p.jsx)(o.Z,{variant:"h3",sx:L.title,textAlign:"center",children:E("enterTitle")}):(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(x,{posts:y,postsActions:j}),(0,p.jsx)("div",{ref:v})]})}},5212:function(t,e,n){var i=n(4942);e.Z=function(t){return{container:{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",minHeight:"100vh",overflowX:"none"},input:(0,i.Z)({mt:10,mb:2,width:t.breakpoints.values.mobile},t.breakpoints.down("mobile"),{width:"100%",mx:.5,"& *":{textAlign:"center",ml:0}}),caption:{mt:1,color:"text.secondary"},linksWrapper:(0,i.Z)({padding:3,display:"flex",justifyContent:"center",alignItems:"center",fontSize:"24px","& > a":{marginLeft:3}},t.breakpoints.down("tablet"),{flexDirection:"column","& > a":{marginTop:1,marginLeft:0}}),outletWrapper:{mt:2,padding:1,width:"100%",minHeight:"60vh"},users:{usersList:{display:"flex",width:"100%"},item:(0,i.Z)({display:"flex",flexDirection:"column",width:"20%",bgcolor:"background.paper",margin:1,borderRadius:4,cursor:"pointer",padding:2,"&:hover":{bgcolor:"primary.main",color:"#121212"}},t.breakpoints.down("tablet"),{width:"50%",padding:1}),avatar:(0,i.Z)({width:100,height:100,mx:"auto"},t.breakpoints.down("tablet"),{width:"95%",height:"auto"}),title:(0,i.Z)({},t.breakpoints.down("tablet"),{fontSize:"25px"})},posts:{list:{width:"20%",mx:"auto",mb:0,mt:2},title:(0,i.Z)({},t.breakpoints.down("tablet"),{fontSize:"25px"})},collections:{title:(0,i.Z)({},t.breakpoints.down("tablet"),{fontSize:"25px"})}}}},4701:function(t,e,n){n.d(e,{Z:function(){return s}});var i=n(3433),r=n(9439),a=n(2791),o=n(9348);function s(t){var e=t.isLoading,n=t.data,s=t.isError,l=t.triggerCallback,d=t.refetchDependencies,c=void 0===d?[]:d,u=(0,a.useState)(!1),f=(0,r.Z)(u,2),h=f[0],g=f[1],p=(0,a.useState)(n),x=(0,r.Z)(p,2),m=x[0],Z=x[1],b=(0,a.useState)(1),v=(0,r.Z)(b,2),w=v[0],k=v[1],y=(0,o.YD)({threshold:0,rootMargin:w>1?"500px":"100px"}),j=y.ref,E=y.inView;return(0,a.useEffect)((function(){console.log("refetch"),k(1),Z([]),g(!1),l({page:1})}),(0,i.Z)(c)),(0,a.useEffect)((function(){s||n.length<1||e||(n.length<1&&m.length>0?g(!0):(n.length<15&&g(!0),Z((function(t){return t.length<1?n:-1===n.findIndex((function(e){return e._id===t[t.length-1]._id}))?[].concat((0,i.Z)(t),(0,i.Z)(n)):t}))))}),[n,e,E]),(0,a.useEffect)((function(){s||E&&!e&&(h||k((function(t){return t+1})))}),[E]),(0,a.useEffect)((function(){l({page:w})}),[w]),{paginatedData:m,isEnd:h,ref:j,inView:E,page:w}}}}]);
//# sourceMappingURL=243.556e031a.chunk.js.map