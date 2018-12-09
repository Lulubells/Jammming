(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,function(e,t,a){e.exports=a(28)},,,,,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){"use strict";a.r(t);var n,r=a(0),c=a.n(r),i=a(8),s=a.n(i),o=(a(14),a(2)),l=a(3),u=a(5),h=a(4),d=a(6),m=a(1),p=(a(16),a(18),function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(u.a)(this,Object(h.a)(t).call(this,e))).state={term:""},a.search=a.search.bind(Object(m.a)(Object(m.a)(a))),a.handleTermChange=a.handleTermChange.bind(Object(m.a)(Object(m.a)(a))),a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"search",value:function(){this.props.onSearch(this.state.term)}},{key:"handleTermChange",value:function(e){this.setState({term:e.target.value})}},{key:"render",value:function(){return c.a.createElement("div",{className:"SearchBar"},c.a.createElement("input",{placeholder:"Enter A Song, Album, or Artist",onChange:this.handleTermChange}),c.a.createElement("a",{onClick:this.search},"SEARCH"))}}]),t}(c.a.Component)),f=(a(20),a(22),a(24),function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(u.a)(this,Object(h.a)(t).call(this,e))).addTrack=a.addTrack.bind(Object(m.a)(Object(m.a)(a))),a.removeTrack=a.removeTrack.bind(Object(m.a)(Object(m.a)(a))),a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"addTrack",value:function(e){this.props.onAdd(this.props.track)}},{key:"removeTrack",value:function(e){this.props.onRemove(this.props.track)}},{key:"renderAction",value:function(){return this.props.isRemoval?c.a.createElement("a",{className:"Track-action",onClick:this.removeTrack},"-"):c.a.createElement("a",{className:"Track-action",onClick:this.addTrack}," + ")}},{key:"render",value:function(){return c.a.createElement("div",{className:"Track"},c.a.createElement("div",{className:"Track-information"},c.a.createElement("h3",null,this.props.track.name),c.a.createElement("p",null,this.props.track.artist," | ",this.props.track.album)),this.renderAction())}}]),t}(c.a.Component)),v=function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return c.a.createElement("div",{className:"TrackList"}," ",this.props.tracks.map(function(t){return c.a.createElement(f,{track:t,Key:t.id,onAdd:e.props.onAdd,isRemoval:e.props.isRemoval,onRemove:e.onRemove})}))}}]),t}(c.a.Component),b=function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"SearchResults"},c.a.createElement("h2",null,"Results"),c.a.createElement(v,{tracks:this.props.state.searchResults,onAdd:this.props.onAdd,isRemoval:!1}))}}]),t}(c.a.Component),k=(a(26),function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(u.a)(this,Object(h.a)(t).call(this,e))).handleNameChange=a.handleNameChange.bind(Object(m.a)(Object(m.a)(a))),a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"handleNameChange",value:function(e){this.props.onNameChange(e.target.value)}},{key:"render",value:function(){return c.a.createElement("div",{className:"Playlist"},c.a.createElement("input",{onChange:this.handleNameChange,defaultValue:"New Playlist"}),c.a.createElement(v,{tracks:this.props.playlistTracks,isRemoval:!0,onRemove:this.props.onRemove}),c.a.createElement("a",{className:"Playlist-save",onClick:this.props.onSave},"SAVE TO SPOTIFY"))}}]),t}(c.a.Component)),y={getAccessToken:function(){if(n)return n;var e=window.location.href.match(/access_token=([^&]*)/),t=window.location.href.match(/expires_in=([^&]*)/);if(e&&t){n=e[1];var a=Number(t[1]);return window.setTimeout(function(){return n=""},1e3*a),window.history.pushState("Access Token",null,"/"),n}var r="https://accounts.spotify.com/authorize?client_id=".concat("54e1ade936fd474b83a6cbe61253722b","&response_type=token&scope=playlist-modify-public&redirect_uri=").concat("http://deserted-liquid.surge.sh");window.location=r},search:function(e){var t=y.getAccessToken();return fetch("https://api.spotify.com/v1/search?type=track&q=".concat(e),{headers:{Authorization:"Bearer ".concat(t)}}).then(function(e){return e.json()}).then(function(e){return e.tracks?e.tracks.items.map(function(e){return{id:e.id,name:e.name,artist:e.artists[0].name,album:e.album.name,uri:e.uri}}):[]})},savePlaylist:function(e,t){if(e&&t.length){var a,n=y.getAccessToken(),r={Authorization:"Bearer ".concat(n)};return fetch("https://api.spotify.com/v1/me",{headers:r}).then(function(e){return e.json()}).then(function(n){return a=n.id,fetch("https://api.spotify.com/v1/users/".concat(a,"/playlists"),{headers:r,method:"POST",body:JSON.stringify({name:e})}).then(function(e){return e.json()}).then(function(e){var n=e.id;return fetch("https://api.spotify.com/v1/users/".concat(a,"/playlists/").concat(n,"/tracks"),{headers:r,method:"POST",body:JSON.stringify({uris:t})})})})}}},O=y,j=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(u.a)(this,Object(h.a)(t).call(this,e))).state={searchResults:[],playlistName:"New Playlist",playlistTracks:[]},a.addTrack=a.addTrack.bind(Object(m.a)(Object(m.a)(a))),a.removeTrack=a.removeTrack.bind(Object(m.a)(Object(m.a)(a))),a.updatePlaylistName=a.updatePlaylistName.bind(Object(m.a)(Object(m.a)(a))),a.savePlaylist=a.savePlaylist.bind(Object(m.a)(Object(m.a)(a))),a.search=a.search.bind(Object(m.a)(Object(m.a)(a))),a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"addTrack",value:function(e){var t=this.state.playlistTracks;t.push(e),this.setState({playlistTracks:t})}},{key:"removeTrack",value:function(e){var t=this.state.playlistTracks;t=t.filter(function(t){return t.id!==e.id}),this.setState({playlistTracks:t})}},{key:"updatePlaylistName",value:function(e){this.setState({playlistName:e})}},{key:"savePlaylist",value:function(){var e=this,t=this.state.playlistTracks.map(function(e){return e.uri});O.savePlaylist(this.state.playlistName,t).then(function(){e.setState({playlistName:"New Playlist",playlistTracks:[]})})}},{key:"search",value:function(e){var t=this;O.search(e).then(function(e){t.setState({searchResults:e})})}},{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement("h1",null,"Ja",c.a.createElement("span",{className:"highlight"},"mmm"),"ing"),c.a.createElement("div",{className:"App"},c.a.createElement(p,{onSearch:this.search}),c.a.createElement("div",{className:"App-playlist"},c.a.createElement(b,{searchResults:this.state.searchResults,onAdd:this.addTrack}),c.a.createElement(k,{playlistTracks:this.state.playlistTracks,onNameChange:this.updatePlaylistName,onRemove:this.removeTrack,onSave:this.savePlaylist}))))}}]),t}(c.a.Component),g=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function T(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See http://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}s.a.render(c.a.createElement(j,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("","/service-worker.js");g?(function(e,t){fetch(e).then(function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):T(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit http://bit.ly/CRA-PWA")})):T(t,e)})}}()}],[[9,2,1]]]);
//# sourceMappingURL=main.115f688f.chunk.js.map