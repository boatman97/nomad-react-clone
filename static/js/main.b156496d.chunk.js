(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],[,,,,,,,,,,function(e,t,n){e.exports=n(22)},,,,,function(e,t,n){},,function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"},function(e,t,n){},,,function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(3),i=n.n(o),s=(n(15),n(1)),c=n.n(s),l=n(4),m=n(5),u=n(6),v=n(8),p=n(9),_=(n(17),n(18),n(7)),d=n.n(_);n(21);function f(e){var t=e.poster,n=e.alt;return r.a.createElement("img",{className:"Movie__Poster",src:t,alt:n,title:n})}function h(e){var t=e.genre;return r.a.createElement("span",{className:"MovieGenere"},t," ")}var g=function(e){var t=e.title_english,n=e.medium_cover_image,a=e.genres,o=e.synopsis;return r.a.createElement("div",{className:"Movie"},r.a.createElement("div",{className:"Movie__Column"},r.a.createElement(f,{poster:n,alt:t})),r.a.createElement("div",{className:"Movie__Column"},r.a.createElement("h1",null,t),r.a.createElement("div",{className:"Movie__Genres"},a.map((function(e,t){return r.a.createElement(h,{genre:e,key:t})}))),r.a.createElement("p",{className:"Movie__Synopsis"},r.a.createElement(d.a,{text:o,maxLine:"3",ellipsis:"....",trimRight:!0,basedOn:"letters"}))))},y=function(e){Object(p.a)(n,e);var t=Object(v.a)(n);function n(){var e;Object(m.a)(this,n);for(var a=arguments.length,o=new Array(a),i=0;i<a;i++)o[i]=arguments[i];return(e=t.call.apply(t,[this].concat(o))).state={},e.__getMoives=Object(l.a)(c.a.mark((function t(){var n;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.__callApi();case 2:n=t.sent,e.setState({movies:n});case 4:case"end":return t.stop()}}),t)}))),e.__callApi=function(){return fetch("https://yts.mx/api/v2/list_movies.json?quality=3D&sort_by=download_count%22").then((function(e){return e.json()})).then((function(e){return e.data.movies})).catch((function(e){return console.log(e)}))},e._renderMoives=function(){return e.state.movies.map((function(e,t){return r.a.createElement(g,{key:t,title_english:e.title_english,medium_cover_image:e.medium_cover_image,genres:e.genres,synopsis:e.synopsis})}))},e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){this.__getMoives()}},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},this.state.movies?this._renderMoives():"Now ..Loading!")}}]),n}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(y,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[10,1,2]]]);
//# sourceMappingURL=main.b156496d.chunk.js.map