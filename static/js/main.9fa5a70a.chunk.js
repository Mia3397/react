(window.webpackJsonpreact=window.webpackJsonpreact||[]).push([[0],{175:function(e,t,a){e.exports=a(286)},193:function(e,t,a){},194:function(e,t,a){},239:function(e,t,a){},240:function(e,t,a){},241:function(e,t,a){},261:function(e,t,a){},262:function(e,t,a){},269:function(e,t,a){},270:function(e,t,a){},271:function(e,t,a){},272:function(e,t,a){},281:function(e,t,a){},284:function(e,t,a){},285:function(e,t,a){},286:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(5),c=a.n(o),i=a(33),l=a(153),s=a(17),u=a(4),p=function(e){return String(e).length>1?e:"0".concat(e)},m=function(e){var t=new Date(e);return"".concat(p(t.getMinutes()),":").concat(p(t.getSeconds()))},d=function(e){return new Date(e).toDateString().slice(4)},g=p,f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return e.length>15?"".concat(e.slice(0,15),"..."):e},y=function(e,t){return function(){var a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:t,n=arguments.length>1?arguments[1]:void 0,r=e[n.type];return r?r(a,n):a}};function h(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}var O,b=y(Object(u.a)({},"TOGGLE_STATE",function(e){return function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?h(a,!0).forEach(function(t){Object(u.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):h(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}({},e,{isOpen:!e.isOpen})}),{isOpen:!1}),v=a(62);function E(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}function j(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?E(a,!0).forEach(function(t){Object(u.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):E(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}var S,w=localStorage.getItem("notes"),N={notes:w?JSON.parse(w):[]},P=y((O={},Object(u.a)(O,"ADD_NOTE",function(e,t){var a=t.payload;return j({},e,{notes:[].concat(Object(v.a)(e.notes),[a])})}),Object(u.a)(O,"UPDATE_NOTE",function(e,t){return j({},e,{notes:t.payload})}),O),N);function C(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}function A(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?C(a,!0).forEach(function(t){Object(u.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):C(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}var D,T={songs:[],favoriteSongs:localStorage.getItem("favoriteSongs")||{}},k=y((S={},Object(u.a)(S,"GET_MUSIC",function(e,t){var a=t.payload;return A({},e,{songs:Object(v.a)(a)})}),Object(u.a)(S,"ADD_SONG_TO_FAVORITE",function(e,t){var a=t.payload;return A({},e,{favoriteSongs:A({},e.favoriteSongs,{payload:a})})}),Object(u.a)(S,"UPDATE_FAVORITE_SONGS",function(e,t){return A({},e,{favoriteSongs:t.payload})}),S),T);function F(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}function I(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?F(a,!0).forEach(function(t){Object(u.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):F(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}var U,_=y((D={},Object(u.a)(D,"UPDATE_SEARCH_COUNTER",function(e,t){var a=t.payload;return I({},e,{artists:I({},e.artists,Object(u.a)({},a.artistName,a))})}),Object(u.a)(D,"UPDATE_PLAY_COUNTER",function(e,t){var a=t.payload;return I({},e,{artists:I({},e.artists,Object(u.a)({},a.artistName,a))})}),D),{artists:{}});function x(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}function R(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?x(a,!0).forEach(function(t){Object(u.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):x(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}var M=JSON.parse(localStorage.getItem("user"))||null,G={userName:M?M.name:""},J=y((U={},Object(u.a)(U,"SIGN IN",function(e,t){return R({},e,{userName:t.payload})}),Object(u.a)(U,"LOGOUT",function(e){return R({},e)}),U),G),B=Object(i.c)({sidebarReducer:b,notesReducer:P,musicReducer:k,analyticsReducer:_,loginReducer:J});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var L=a(61),H=a(49),Y=a(295),V=a(290),W=a(287),q=a(297),K=a(173),z=a(72),$={appName:"My iTunes",musicHeadline:"iTunes Music",favoritesHeadline:"Favorites",modalApply:"Apply",modalCancel:"Cancel",modalAdd:"Add",modalSave:"Save",buttonDelete:"Delete",buttonChange:"Change",buttonSearch:"Search",buttonSignIn:"Sign In",buttonCancel:"Cancel",buttonPlaySong:"Play preview of song",placeholderForGenderSelect:"Select a gender",placeholderForSearchMusic:"Enter artist",placeholderForUserInput:"Enter your name",placeholderForEmailInput:"Enter your email",placeholderForPasswordInput:"Enter your password",genderMale:"male",genderFemale:"female",imgAlt:"Artist",xTitle:"Artist",queriesTitle:"Count of search queries",playingTitle:"Count of playing",closeFavorites:"Go to my Favorites",openFavorites:"My Favorites",searchAnalytics:"Search Analytics",playAnalytics:"Play Analytics"},Q=function(e){var t=e.data,a=e.yTitle,n=e.headline;return r.a.createElement("div",{className:"search_analytics"},r.a.createElement("h3",null,n),r.a.createElement(z.c,{height:300,width:400,xType:"ordinal"},r.a.createElement(z.a,{data:t}),r.a.createElement(z.b,{title:$.xTitle}),r.a.createElement(z.d,{title:a})))},X=Object(s.b)(function(e){return{artists:e.analyticsReducer.artists}},null),Z=(a(193),X(function(e){var t=e.artists,a=function(e){return Y.a(W.a,q.a(function(t){return{x:t.artistName,y:t[e]||0}}),K.a(function(e){return e.y}))(t)},n=a("searchCounter"),o=a("playCounter"),c=Boolean(n.length),i=Boolean(o.length);return r.a.createElement("div",{className:"wrapper"},r.a.createElement("h1",null,"Analytics"),r.a.createElement("div",{className:"analytics"},c&&r.a.createElement(Q,{data:n,yTitle:$.queriesTitle,headline:$.searchAnalytics}),i&&r.a.createElement(Q,{data:o,yTitle:$.playingTitle,headline:$.playAnalytics})))})),ee=a(37),te=a(10),ae={sidebarItems:[{title:"Musicians",path:"/home/musicians",iconType:"crown"},{title:"Analytics",path:"/home/analytics",iconType:"line-chart"},{title:"Notes",path:"/home/notes",iconType:"form"},{title:"Music",path:"/home/music",iconType:"customer-service"}],userTableColumns:["Name","Age","Gender","Region"],types:{title:"title",date:"date",text:"text"},musicians:[{name:"Beyonce",age:38,gender:"female",region:"USA"},{name:"Katy Perry",age:34,gender:"female",region:"USA"},{name:"Rihanna",age:31,gender:"female",region:"USA"},{name:"Madonna",age:61,gender:"female",region:"USA"},{name:"Sia",age:43,gender:"female",region:"Australia"},{name:"Lady GaGa",age:33,gender:"female",region:"USA"},{name:"Lana Del Ray",age:34,gender:"female",region:"USA"},{name:"Justin Timberlake",age:38,gender:"male",region:"USA"},{name:"Chris Brown",age:30,gender:"male",region:"USA"},{name:"Justin Bieber",age:25,gender:"male",region:"Canada"},{name:"Ed Sheeran",age:28,gender:"male",region:"Great Britain"},{name:"Hozier",age:29,gender:"male",region:"Ireland"},{name:"Whitney Houston",age:48,gender:"female",region:"USA"},{name:"Cardi B",age:26,gender:"female",region:"USA"},{name:"Billie Eilish",age:17,gender:"female",region:"USA"},{name:"Martin Garrix",age:23,gender:"male",region:"Netherlands"},{name:"6lack",age:27,gender:"male",region:"USA"},{name:"Drake",age:32,gender:"male",region:"Canada"},{name:"Kanye West",age:42,gender:"male",region:"USA"},{name:"Bones",age:25,gender:"male",region:"USA"},{name:"Post Malone",age:24,gender:"male",region:"USA"}]},ne=(a(194),function(e){var t=e.history,a=function(e,t){return r.a.createElement("td",{key:"".concat(t).concat(e)},e)};return r.a.createElement("div",{className:"wrapper"},r.a.createElement("h1",null,"Musicians"),r.a.createElement("table",null,r.a.createElement("thead",null,r.a.createElement("tr",null,q.a(a,ae.userTableColumns))),q.a(function(e,n){return r.a.createElement("tr",{key:"".concat(e.name).concat(n)},q.a(a,W.a(e)),r.a.createElement("td",null,r.a.createElement(ee.a,{onClick:(o=e.name,function(){t.push("/home/music",{term:o})})},$.buttonSearch,r.a.createElement(te.a,{type:"apple"}))));var o},ae.musicians)))}),re=a(11),oe=a(12),ce=a(14),ie=a(13),le=a(15),se=a(294),ue=a(293),pe=a(288),me=a(160),de=a.n(me),ge=function(e){return{type:"UPDATE_NOTE",payload:e}};function fe(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}function ye(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?fe(a,!0).forEach(function(t){Object(u.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):fe(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}var he={addNote:function(e){return function(t){var a=ye({},e,{id:de()()}),n=Y.a(function(e){return localStorage.getItem(e)},pe.a("[]"),JSON.parse)("notes"),r=[].concat(Object(v.a)(n),[a]);localStorage.setItem("notes",JSON.stringify(r)),t({type:"ADD_NOTE",payload:a})}},deleteNote:function(e){return function(t,a){var n=a().notesReducer.notes,r=K.a(function(t){return t.id!==e},n);localStorage.setItem("notes",JSON.stringify(r)),t(ge(r))}},updateNoteById:function(e,t,a){return function(n,r){var o=r().notesReducer.notes,c=q.a(function(n){return n.id!==e?n:ye({},n,Object(u.a)({},a,t))},o);localStorage.setItem("notes",JSON.stringify(c)),n(ge(c))}}},Oe=Object(s.b)(function(e){return{notes:e.notesReducer.notes}},he),be=(a(239),Oe(function(e){function t(){var e,a;Object(re.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(ce.a)(this,(e=Object(ie.a)(t)).call.apply(e,[this].concat(r)))).state={type:null,value:""},a.onEdit=function(e,t){return function(){a.setState({type:e,value:t})}},a.onChange=function(e){var t=e.target.value;a.setState({value:t})},a.onUpdate=function(){var e=a.state,t=e.type,n=e.value,r=a.props,o=r.id;(0,r.updateNoteById)(o,n,t),a.setState({value:"",type:null})},a.deleteNote=function(){var e=a.props,t=e.id;(0,e.deleteNote)(t)},a}return Object(le.a)(t,e),Object(oe.a)(t,[{key:"render",value:function(){var e=this.state,t=e.type,a=e.value,n=this.props,o=n.title,c=n.date,i=n.text;return r.a.createElement("div",{className:"note"},r.a.createElement("header",null,r.a.createElement("div",{className:"note-info"},r.a.createElement(ve,{type:t,containerType:ae.types.title,value:a,onChange:this.onChange,onUpdate:this.onUpdate,text:o,onEdit:this.onEdit}),r.a.createElement(ve,{type:t,containerType:ae.types.date,value:a,onChange:this.onChange,onUpdate:this.onUpdate,text:c,onEdit:this.onEdit})),r.a.createElement(ee.a,{type:"primary",onClick:this.deleteNote},$.buttonDelete)),r.a.createElement(ve,{type:t,containerType:ae.types.text,value:a,onChange:this.onChange,onUpdate:this.onUpdate,text:i,onEdit:this.onEdit}))}}]),t}(r.a.Component))),ve=(a(240),function(e){var t=e.type,a=e.containerType,n=e.value,o=e.onChange,c=e.onUpdate,i=e.onEdit,l=e.text,s=t===a;return r.a.createElement("div",{className:"edit-container"},s?r.a.createElement(ue.a,{type:"text",name:a,value:n,onChange:o}):r.a.createElement("p",null,l),r.a.createElement(te.a,{type:s?"check-circle":"edit",onClick:s?c:i(a,l),className:s?"save":"edit"}))});a(241);function Ee(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}function je(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?Ee(a,!0).forEach(function(t){Object(u.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):Ee(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}var Se=Oe(function(e){function t(){var e,a;Object(re.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(ce.a)(this,(e=Object(ie.a)(t)).call.apply(e,[this].concat(r)))).state={visible:!1,currentNote:{}},a.showModal=function(){a.setState({visible:!0})},a.handleCancel=function(){a.setState({visible:!1})},a.handleAdd=function(){var e=a.state.currentNote;(0,a.props.addNote)(e),a.setState({visible:!1,currentNote:{}})},a.onChange=function(e){var t=e.target,n=t.name,r=t.value,o=a.state.currentNote;a.setState({currentNote:je({},o,Object(u.a)({},n,r))})},a}return Object(le.a)(t,e),Object(oe.a)(t,[{key:"render",value:function(){var e=this.state,t=e.visible,a=e.currentNote,n=this.props.notes;return r.a.createElement("div",{className:"wrapper"},r.a.createElement("h1",null,"Notes"),r.a.createElement(ee.a,{onClick:this.showModal,type:"primary"},"Add note"),r.a.createElement(se.a,{title:"Add Note",visible:t,onCancel:this.handleCancel,footer:[r.a.createElement(ee.a,{type:"back",onClick:this.handleCancel},$.modalCancel),r.a.createElement(ee.a,{type:"primary",onClick:this.handleAdd},$.modalAdd)]},r.a.createElement(ue.a,{placeholder:"Title",name:"title",onChange:this.onChange,value:a.title}),r.a.createElement(ue.a,{placeholder:"Date in format MM.DD.YYYY",name:"date",onChange:this.onChange,value:a.date}),r.a.createElement(ue.a.TextArea,{placeholder:"Your note...",name:"text",onChange:this.onChange,value:a.text})),r.a.createElement("div",{className:"notes"},q.a(function(e){return r.a.createElement(be,{key:e.id,id:e.id,title:e.title,date:e.date,text:e.text})},n)))}}]),t}(n.Component)),we=a(66),Ne=a.n(we),Pe=a(84),Ce=a(291),Ae=a(296),De=a(289),Te=a(298),ke=a(292),Fe=function(e){return{type:"UPDATE_SEARCH_COUNTER",payload:e}},Ie=a(170),Ue={axiosForMusic:a.n(Ie).a.create({baseURL:"https://itunes.apple.com/search?",headers:{"Content-Type":"application/json",Accept:"application/json"},responseType:"json"})},_e={getMusic:function(e){return Ue.axiosForMusic.get("",{params:e})}};function xe(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}function Re(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?xe(a,!0).forEach(function(t){Object(u.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):xe(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}var Me={getMusic:function(e){return function(){var t=Object(Pe.a)(Ne.a.mark(function t(a,n){var r,o,c,i,l;return Ne.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,_e.getMusic(e);case 2:r=t.sent,(o=r.data.results).length&&(c=Y.a(K.a(function(e){return-1===De.a("&",e.artistName)}),Te.a)(o),i=c.artistName,l=n().analyticsReducer.artists[i]||{},a(Fe(Re({},l,{artistName:i,searchCounter:l.searchCounter?l.searchCounter+1:1})))),a({type:"GET_MUSIC",payload:o});case 6:case"end":return t.stop()}},t)}));return function(e,a){return t.apply(this,arguments)}}()},countPlaying:function(e){return function(t,a){var n=-1===De.a("&",e)?e:ke.a(" & ",e)[0],r=a().analyticsReducer.artists[n]||{};t(function(e){return{type:"UPDATE_PLAY_COUNTER",payload:e}}(Re({},r,{artistName:n,playCounter:r.playCounter?r.playCounter+1:1})))}},addSongToFav:function(e){return function(t){var a=Y.a(function(e){return localStorage.getItem(e)},pe.a("{}"),JSON.parse)("favoriteSongs");Ae.a(e.trackId,a)||(a[e.trackId]=e),localStorage.setItem("favoriteSongs",JSON.stringify(a)),t(function(e){return{type:"ADD_SONG_TO_FAVORITE",payload:e}}(e))}},deleteFromFav:function(e){return function(t){var a=Y.a(function(e){return localStorage.getItem(e)},pe.a("{}"),JSON.parse)("favoriteSongs");delete a[e],localStorage.setItem("favoriteSongs",JSON.stringify(a)),t({type:"UPDATE_FAVORITE_SONGS",payload:a})}}},Ge=Object(s.b)(function(e){return{songs:e.musicReducer.songs}},Me),Je=(a(261),function(e){var t=e.userName,a=e.logout;return r.a.createElement("header",null,r.a.createElement("h1",{className:"headline"},$.appName,r.a.createElement(te.a,{type:"apple",theme:"filled"})),r.a.createElement("p",null,t,r.a.createElement(te.a,{type:"logout",onClick:a})))}),Be=Object(s.b)(function(e){return{isOpen:e.sidebarReducer.isOpen}},function(e){return{toggleState:function(){return e({type:"TOGGLE_STATE"})}}}),Le=(a(262),Be(function(e){function t(){var e,a;Object(re.a)(this,t);for(var n=arguments.length,o=new Array(n),c=0;c<n;c++)o[c]=arguments[c];return(a=Object(ce.a)(this,(e=Object(ie.a)(t)).call.apply(e,[this].concat(o)))).renderList=function(e){return q.a(function(t){return r.a.createElement(L.b,{to:t.path,key:t.title,activeClassName:"active-link",className:"link"},r.a.createElement(te.a,{type:t.iconType}),e&&t.title)},ae.sidebarItems)},a}return Object(le.a)(t,e),Object(oe.a)(t,[{key:"render",value:function(){var e=this.props,t=e.isOpen,a=e.toggleState;return r.a.createElement("aside",{className:"nav_bar ".concat(t?"open":"close")},r.a.createElement("ul",null,this.renderList(t)),r.a.createElement("button",{type:"submit",onClick:a},r.a.createElement(te.a,{type:t?"double-left":"double-right"}),t&&"Collapse Sidebar"))}}]),t}(n.Component))),He=a(171),Ye=a.n(He),Ve=(a(269),function(e){function t(){var e,a;Object(re.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(ce.a)(this,(e=Object(ie.a)(t)).call.apply(e,[this].concat(r)))).state={progress:0,playedSeconds:0},a.changeProgress=function(e){var t=e.played,n=e.playedSeconds;a.setState({progress:t,playedSeconds:n})},a}return Object(le.a)(t,e),Object(oe.a)(t,[{key:"render",value:function(){var e=this.props,t=e.url,a=e.track,n=e.play,o=e.onPlay,c=e.onStop,i=this.state,l=i.playedSeconds,s=i.progress;return r.a.createElement("div",{className:"player_wrapper"},r.a.createElement(Ye.a,{url:t,playing:n,fileConfig:{forceAudio:!0},onProgress:this.changeProgress}),r.a.createElement("div",{className:"player"},r.a.createElement(ee.a,{type:"primary",onClick:n?c:o,id:a},r.a.createElement(te.a,{type:n?"pause":"caret-right"})),r.a.createElement("span",null,"0:".concat(g(Math.round(l))," / 0:30")),r.a.createElement("div",{className:"progress_bar"},r.a.createElement("span",{style:{width:"".concat(100*s,"%")}}))))}}]),t}(r.a.Component)),We=(a(270),function(e){function t(){var e,a;Object(re.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(ce.a)(this,(e=Object(ie.a)(t)).call.apply(e,[this].concat(r)))).state={isFav:V.a(["item","isFavorite"],a.props)},a.addToFavorite=function(e){return function(){var t=a.props.addSongToFav;a.setState({isFav:!0}),t(e)}},a.deleteFromFavorite=function(e){return function(){var t=a.props.deleteFromFav;a.setState({isFav:!1}),t(e)}},a}return Object(le.a)(t,e),Object(oe.a)(t,[{key:"render",value:function(){var e=this.props,t=e.item,a=e.play,n=e.onPlay,o=e.onStop,c=t.artworkUrl100,i=t.artistName,l=t.trackName,s=t.collectionName,u=t.country,p=t.releaseDate,g=t.trackTimeMillis,y=t.previewUrl,h=t.trackId,O=this.state.isFav;return r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"info"},r.a.createElement(qe,{url:c}),r.a.createElement("div",{className:"text"},r.a.createElement("h2",null,"".concat(f(i)," - ").concat(f(l))),r.a.createElement("p",null,"Album: ".concat(f(s))),r.a.createElement("p",null,"Country: ".concat(u)),r.a.createElement("p",null,"Date: ".concat(d(p))),r.a.createElement("p",null,"Duration: ".concat(m(g)))),r.a.createElement(te.a,{type:"heart",onClick:O?this.deleteFromFavorite(h):this.addToFavorite(t),theme:O?"filled":""})),r.a.createElement(Ve,{url:y,track:h,play:a,onPlay:n,onStop:o}))}}]),t}(r.a.Component)),qe=(a(271),function(e){var t=e.url;return r.a.createElement("img",{src:t,alt:$.imgAlt})});a(272);function Ke(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}function ze(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?Ke(a,!0).forEach(function(t){Object(u.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):Ke(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}var $e=Ge(function(e){function t(){var e,a;Object(re.a)(this,t);for(var n=arguments.length,o=new Array(n),c=0;c<n;c++)o[c]=arguments[c];return(a=Object(ce.a)(this,(e=Object(ie.a)(t)).call.apply(e,[this].concat(o)))).state={params:{term:null,entity:"song"},loading:!1,playing:!1,trackId:"",isOpenFavorites:!1,isError:!1},a.onPlay=function(e,t){return function(){var n=a.props.countPlaying;a.setState({playing:!0,trackId:e}),n(t)}},a.onStop=function(){a.setState({playing:!1})},a.onSearch=function(e){var t=a.state.params;a.setState({params:ze({},t,{term:e}),isOpenFavorites:!1,isError:!1},function(){a.getSongs().catch(a.setError)})},a.setError=function(){a.setState({isError:!0})},a.getSongs=Object(Pe.a)(Ne.a.mark(function e(){var t,n;return Ne.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.state.params,n=a.props.getMusic,a.setState({loading:!0}),e.next=5,n(t);case 5:a.setState({loading:!1});case 6:case"end":return e.stop()}},e)})),a.onChange=function(e){var t=e.target.value,n=a.state.params;a.setState({params:ze({},n,{term:t})})},a.showFavorites=function(){a.setState({isOpenFavorites:!0})},a.renderSongs=function(){var e=a.props,t=e.songs,n=e.addSongToFav,o=e.deleteFromFav,c=JSON.parse(localStorage.getItem("favoriteSongs"))||{},i=a.state,l=i.playing,s=i.trackId,u=i.isOpenFavorites;return q.a(function(e){return r.a.createElement(We,{item:ze({},e,{isFavorite:Ae.a(e.trackId,c)}),play:l&&e.trackId===s,key:e.trackId,onPlay:a.onPlay(e.trackId,e.artistName),onStop:a.onStop,addSongToFav:n,deleteFromFav:o})},u?W.a(c):t)},a}return Object(le.a)(t,e),Object(oe.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.location.state;e&&this.onSearch(e.term)}},{key:"render",value:function(){var e=this.state,t=e.loading,a=e.params.term,n=e.isOpenFavorites,o=e.isError;return r.a.createElement("div",{className:"wrapper"},r.a.createElement(Ce.a,{spinning:t&&!o},r.a.createElement("h1",null,n?$.favoritesHeadline:$.musicHeadline),r.a.createElement("div",{className:"filters"},r.a.createElement(ue.a.Search,{placeholder:$.placeholderForSearchMusic,enterButton:$.buttonSearch,onSearch:this.onSearch,value:a,onChange:this.onChange}),r.a.createElement(ee.a,{type:n?"default":"primary",onClick:this.showFavorites},n?$.openFavorites:$.closeFavorites)),o?r.a.createElement("p",{className:"error_feedback"},"Sorry, network error. Please try again."):r.a.createElement("div",{className:"cards"},this.renderSongs())))}}]),t}(n.Component)),Qe=function(e,t,a){return function(n){localStorage.setItem("user",JSON.stringify({name:e,email:t,password:a})),n(function(e){return{type:"SIGN IN",payload:e}}(e))}},Xe={signIn:Qe},Ze=Object(s.b)(function(e){return{userName:e.loginReducer.userName}},Xe),et=(a(281),Ze(function(e){function t(){var e,a;Object(re.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(ce.a)(this,(e=Object(ie.a)(t)).call.apply(e,[this].concat(r)))).state={userName:null,email:null,password:null},a.onChange=function(e){var t=e.target,n=t.name,r=t.value;a.setState(Object(u.a)({},n,r))},a.handleCancel=function(){a.setState({userName:null,email:null,password:null})},a.signIn=function(){var e=a.state,t=e.userName,n=e.email,r=e.password,o=a.props,c=o.signIn,i=o.history;c(t,n,r),i.push("/home/musicians")},a}return Object(le.a)(t,e),Object(oe.a)(t,[{key:"render",value:function(){var e=this.state,t=e.userName,a=e.email,n=e.password;return r.a.createElement("div",{className:"wrapper login"},r.a.createElement("h1",null,"Sign in"),r.a.createElement("div",{className:"sign_in"},r.a.createElement(ue.a,{placeholder:$.placeholderForUserInput,value:t,name:"userName",onChange:this.onChange}),r.a.createElement(ue.a,{placeholder:$.placeholderForEmailInput,value:a,name:"email",onChange:this.onChange}),r.a.createElement(ue.a.Password,{placeholder:$.placeholderForPasswordInput,value:n,name:"password",onChange:this.onChange}),r.a.createElement("div",{className:"sign_in_actions"},r.a.createElement(ee.a,{onClick:this.handleCancel},$.buttonCancel),r.a.createElement(ee.a,{type:"primary",onClick:this.signIn},$.buttonSignIn))))}}]),t}(r.a.Component))),tt=function(e){return function(t){function a(){var e,t;Object(re.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(t=Object(ce.a)(this,(e=Object(ie.a)(a)).call.apply(e,[this].concat(r)))).state={userName:localStorage.user?JSON.parse(localStorage.user).name:null},t.logout=function(){var e=t.props.logout;t.setState({userName:null},function(){localStorage.removeItem("user"),e()})},t}return Object(le.a)(a,t),Object(oe.a)(a,[{key:"render",value:function(){var t=this.state.userName;return t?r.a.createElement(e,Object.assign({},this.props,{userName:t,logout:this.logout})):r.a.createElement(H.a,{to:"/login"})}}]),a}(r.a.Component)},at={signIn:Qe,logout:function(){return function(e){e({type:"LOGOUT"})}}},nt=Object(i.d)(Object(s.b)(function(e){return{userName:e.loginReducer.userName}},at),tt)(function(e){var t=e.userName,a=e.logout;return r.a.createElement(r.a.Fragment,null,r.a.createElement(Je,{userName:t,logout:a}),r.a.createElement("main",null,r.a.createElement(Le,null),r.a.createElement(H.b,{path:"/home/musicians",exact:!0,component:ne}),r.a.createElement(H.b,{path:"/home/analytics",exact:!0,component:Z}),r.a.createElement(H.b,{path:"/home/notes",exact:!0,component:Se}),r.a.createElement(H.b,{path:"/home/music",exact:!0,component:$e})))}),rt=(a(282),a(283),a(284),function(){var e=Y.a(function(e){return localStorage.getItem(e)},JSON.parse,V.a(["name"]))("user");return r.a.createElement(L.a,null,r.a.createElement(H.a,{exact:!0,from:"/",to:"/login"}),e&&r.a.createElement(H.a,{exact:!0,from:"/login",to:"/home"}),r.a.createElement(H.d,null,r.a.createElement(H.b,{path:"/home",component:nt}),r.a.createElement(H.b,{path:"/login",component:et})))}),ot=(a(285),Object(i.e)(B,Object(i.a)(l.a)));c.a.render(r.a.createElement(s.a,{store:ot},r.a.createElement(rt,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[175,1,2]]]);
//# sourceMappingURL=main.9fa5a70a.chunk.js.map