"use strict";(self.webpackChunkphoto_share=self.webpackChunkphoto_share||[]).push([[191],{7898:function(t,e,n){var r=n(3433),o=n(4165),i=n(1413),c=n(5861),a=n(9439),s=n(2791),u=n(1452),l=n(9650);e.Z=function(t){var e=t.initPosts,n=l.Z.useUnlikeOneByIdMutation(),d=(0,a.Z)(n,1)[0],f=l.Z.useLikeOneByIdMutation(),v=(0,a.Z)(f,1)[0],p=u.Z.useDeletePostFromCollectionMutation(),y=(0,a.Z)(p,1)[0],h=u.Z.useSavePostInCollectionMutation(),m=(0,a.Z)(h,1)[0],g=(0,s.useState)([]),I=(0,a.Z)(g,2),C=I[0],q=I[1];(0,s.useEffect)((function(){e&&q(e)}),[null===e||void 0===e?void 0:e.length]);var w=function(){var t=(0,c.Z)((0,o.Z)().mark((function t(e,n){return(0,o.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,!n){t.next=6;break}return t.next=4,d({id:e}).unwrap();case 4:t.next=8;break;case 6:return t.next=8,v({id:e}).unwrap();case 8:q((function(t){return t.map((function(t){if(t._id===e){var n=t.likesCount,r=t.isLiked,o=r?--n:++n;return(0,i.Z)((0,i.Z)({},t),{},{isLiked:!r,likesCount:o})}return t}))})),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(0),console.log(t.t0);case 14:case"end":return t.stop()}}),t,null,[[0,11]])})));return function(e,n){return t.apply(this,arguments)}}(),E=function(){var t=(0,c.Z)((0,o.Z)().mark((function t(e,n,r){return(0,o.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,!r){t.next=6;break}return t.next=4,y({postId:e,collectionId:n}).unwrap();case 4:t.next=8;break;case 6:return t.next=8,m({postId:e,collectionId:n}).unwrap();case 8:q((function(t){return t.map((function(t){if(t._id===e){var o=t.savesCount,c=t.savesInfo.map((function(t){return t.collectionId===n?{isSaved:!r,collectionId:t.collectionId,title:t.title}:t})),a=c.some((function(t){return!!t.isSaved}));return(0,i.Z)((0,i.Z)({},t),{},{isSomewhereSaved:a,savesCount:o,savesInfo:c})}return t}))})),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(0),console.log(t.t0);case 14:case"end":return t.stop()}}),t,null,[[0,11]])})));return function(e,n,r){return t.apply(this,arguments)}}(),T=function(){var t=(0,c.Z)((0,o.Z)().mark((function t(e,n,c){return(0,o.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,m({postId:c,collectionId:n}).unwrap();case 3:q((function(t){return t.map((function(t){return t._id===c?(0,i.Z)((0,i.Z)({},t),{},{isSomewhereSaved:!0,savesInfo:[].concat((0,r.Z)(t.savesInfo),[{title:e,collectionId:n,isSaved:!0}])}):(0,i.Z)((0,i.Z)({},t),{},{savesInfo:[].concat((0,r.Z)(t.savesInfo),[{title:e,collectionId:n,isSaved:!1}])})}))})),t.next=9;break;case 6:t.prev=6,t.t0=t.catch(0),console.log(t.t0);case 9:case"end":return t.stop()}}),t,null,[[0,6]])})));return function(e,n,r){return t.apply(this,arguments)}}();return[C,{toggleLike:w,toggleSave:E,updateSavesInfo:T}]}},1452:function(t,e,n){var r=n(7469),o=n(7883).l.injectEndpoints({endpoints:function(t){return{getOneWithPostsAndAuthor:t.query({query:function(t){var e=t.id;return{url:"/collections/".concat(e)}},transformResponse:function(t){return t.data},providesTags:["Collection"]}),getCollectionsByUserId:t.query({query:function(t){var e=t.id;return{url:"/users/".concat(e,"/collections")}},transformResponse:function(t){return t.data.collections}}),searchCollections:t.query({query:function(t){return{url:"/collections/search",params:{title:t.title}}},transformResponse:function(t){return t.data.collections}}),getAllowedToViewCollections:t.query({query:function(t){var e=t.id;return{url:"/users/".concat(e,"/allowedToViewCollections")}},transformResponse:function(t){return t.data.allowedToViewCollections}}),getCurrentUserCollections:t.query({query:function(){return{url:"/collections/current"}},transformResponse:function(t){return t.data.collections},providesTags:["Collection"]}),createCollection:t.mutation({query:function(t){return{url:"/collections",method:"POST",body:t.body}},transformErrorResponse:r.Y}),deleteCollection:t.mutation({query:function(t){var e=t.id;return{url:"/collections/".concat(e),method:"DELETE"}},transformErrorResponse:r.Y}),savePostInCollection:t.mutation({query:function(t){var e=t.collectionId,n=t.postId;return{url:"/collections/".concat(e,"/saves/").concat(n),method:"POST"}},transformErrorResponse:r.Y}),deletePostFromCollection:t.mutation({query:function(t){var e=t.collectionId,n=t.postId;return{url:"/collections/".concat(e,"/saves/").concat(n),method:"DELETE"}},transformErrorResponse:r.Y}),addAuthorToCollection:t.mutation({query:function(t){var e=t.collectionId,n=t.authorId,r=t.role;return{url:"/collections/".concat(e,"/authors/").concat(n),method:"POST",params:{role:r}}},invalidatesTags:["Collection"]}),addViewerToCollection:t.mutation({query:function(t){var e=t.collectionId,n=t.viewerId;return{url:"/collections/".concat(e,"/viewers/").concat(n),method:"POST"}},invalidatesTags:["Collection"]}),sendRequestToJoinToCollection:t.mutation({query:function(t){var e=t.collectionId;return{url:"/collections/".concat(e,"/requests"),method:"POST"}},invalidatesTags:["Collection"]}),unsendRequestToJoinFromCollection:t.mutation({query:function(t){var e=t.collectionId;return{url:"/collections/".concat(e,"/requests"),method:"DELETE"}},invalidatesTags:["Collection"]}),changeAuthorRoleInCollection:t.mutation({query:function(t){var e=t.collectionId,n=t.authorId,r=t.role;return{url:"/collections/".concat(e,"/authors/").concat(n,"/roles"),method:"PATCH",params:{role:r}}},invalidatesTags:["Collection"]}),changeCollectionInfo:t.mutation({query:function(t){var e=t.collectionId,n=t.title,r=t.tags;return{url:"/collections/".concat(e),method:"PATCH",body:{title:n,tags:r}}},invalidatesTags:["Collection"]}),deleteAuthorFromCollection:t.mutation({query:function(t){var e=t.collectionId,n=t.authorId;return{url:"/collections/".concat(e,"/authors/").concat(n),method:"DELETE"}},invalidatesTags:["Collection"]}),deleteViewerFromCollection:t.mutation({query:function(t){var e=t.collectionId,n=t.viewerId;return{url:"/collections/".concat(e,"/viewers/").concat(n),method:"DELETE"}},invalidatesTags:["Collection"]}),deleteRequestedUserFromCollection:t.mutation({query:function(t){var e=t.collectionId,n=t.userId;return{url:"/collections/".concat(e,"/requests/").concat(n),method:"DELETE"}},invalidatesTags:["Collection"]}),deleteCurrentUserFromCollection:t.mutation({query:function(t){var e=t.collectionId;return{url:"/collections/".concat(e,"/current"),method:"DELETE"}},invalidatesTags:["Collection"]}),changeIsPrivate:t.mutation({query:function(t){var e=t.collectionId;return{url:"/collections/".concat(e,"/isPrivate"),method:"PATCH"}},invalidatesTags:["Collection"]})}}});e.Z=o},9650:function(t,e,n){var r=n(7469),o=n(7883).l.injectEndpoints({endpoints:function(t){return{getMany:t.query({query:function(t){var e=t.page,n=t.arrayOfId;return{url:"/posts",params:{page:e,arrayOfId:JSON.stringify(n)}}},transformResponse:function(t){return t.data.posts}}),getPostsByCollectionId:t.query({query:function(t){var e=t.arrayOfId,n=t.id;return{url:"/posts/collections/".concat(n),params:{arrayOfId:JSON.stringify(e)}}},transformResponse:function(t){return t.data.posts}}),searchPosts:t.query({query:function(t){var e=t.title,n=t.page,r=t.arrayOfId;return{url:"/posts/search",params:{title:e,page:n,arrayOfId:JSON.stringify(r)}}},transformResponse:function(t){return t.data.posts}}),getPostsByUserId:t.query({query:function(t){var e=t.id,n=t.arrayOfId;return{url:"/users/".concat(e,"/posts"),params:{arrayOfId:JSON.stringify(n)}}},transformResponse:function(t){return t.data.posts}}),getOneById:t.query({query:function(t){var e=t.id;return{url:"/posts/".concat(e)}},transformErrorResponse:r.Y,transformResponse:function(t){return t.data.post}}),createPost:t.mutation({query:function(t){return{url:"/posts",method:"POST",body:t.body}},transformErrorResponse:r.Y}),deletePost:t.mutation({query:function(t){var e=t.id;return{url:"/posts/".concat(e),method:"DELETE"}},transformErrorResponse:r.Y}),likeOneById:t.mutation({query:function(t){var e=t.id;return{url:"/posts/".concat(e,"/like"),method:"PATCH"}},transformErrorResponse:r.Y}),unlikeOneById:t.mutation({query:function(t){var e=t.id;return{url:"/posts/".concat(e,"/unlike"),method:"PATCH"}},transformErrorResponse:r.Y})}},overrideExisting:!1});e.Z=o},7469:function(t,e,n){n.d(e,{Y:function(){return r}});var r=function(t){return t.data}},9348:function(t,e,n){n.d(e,{YD:function(){return I}});var r=n(9439),o=n(5671),i=n(3144),c=n(136),a=n(9388),s=n(2791);function u(){return u=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},u.apply(this,arguments)}var l=new Map,d=new WeakMap,f=0,v=void 0;function p(t){return Object.keys(t).sort().filter((function(e){return void 0!==t[e]})).map((function(e){return"".concat(e,"_").concat("root"===e?(n=t.root)?(d.has(n)||(f+=1,d.set(n,f.toString())),d.get(n)):"0":t[e]);var n})).toString()}function y(t){var e=p(t),n=l.get(e);if(!n){var r,o=new Map,i=new IntersectionObserver((function(e){e.forEach((function(e){var n,i=e.isIntersecting&&r.some((function(t){return e.intersectionRatio>=t}));t.trackVisibility&&"undefined"===typeof e.isVisible&&(e.isVisible=i),null==(n=o.get(e.target))||n.forEach((function(t){t(i,e)}))}))}),t);r=i.thresholds||(Array.isArray(t.threshold)?t.threshold:[t.threshold||0]),n={id:e,observer:i,elements:o},l.set(e,n)}return n}function h(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:v;if("undefined"===typeof window.IntersectionObserver&&void 0!==r){var o=t.getBoundingClientRect();return e(r,{isIntersecting:r,target:t,intersectionRatio:"number"===typeof n.threshold?n.threshold:0,time:0,boundingClientRect:o,intersectionRect:o,rootBounds:o}),function(){}}var i=y(n),c=i.id,a=i.observer,s=i.elements,u=s.get(t)||[];return s.has(t)||s.set(t,u),u.push(e),a.observe(t),function(){u.splice(u.indexOf(e),1),0===u.length&&(s.delete(t),a.unobserve(t)),0===s.size&&(a.disconnect(),l.delete(c))}}var m=["children","as","triggerOnce","threshold","root","rootMargin","onChange","skip","trackVisibility","delay","initialInView","fallbackInView"];function g(t){return"function"!==typeof t.children}s.Component;function I(){var t,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.threshold,o=e.delay,i=e.trackVisibility,c=e.rootMargin,a=e.root,u=e.triggerOnce,l=e.skip,d=e.initialInView,f=e.fallbackInView,v=e.onChange,p=s.useState(null),y=(0,r.Z)(p,2),m=y[0],g=y[1],I=s.useRef(),C=s.useState({inView:!!d,entry:void 0}),q=(0,r.Z)(C,2),w=q[0],E=q[1];I.current=v,s.useEffect((function(){var t;if(!l&&m)return t=h(m,(function(e,n){E({inView:e,entry:n}),I.current&&I.current(e,n),n.isIntersecting&&u&&t&&(t(),t=void 0)}),{root:a,rootMargin:c,threshold:n,trackVisibility:i,delay:o},f),function(){t&&t()}}),[Array.isArray(n)?n.toString():n,m,a,c,u,l,i,f,o]);var T=null==(t=w.entry)?void 0:t.target,k=s.useRef();m||!T||u||l||k.current===T||(k.current=T,E({inView:!!d,entry:void 0}));var b=[g,w.inView,w.entry];return b.ref=b[0],b.inView=b[1],b.entry=b[2],b}}}]);
//# sourceMappingURL=191.d17ce7cc.chunk.js.map