(this["webpackJsonpspeech-to-order"]=this["webpackJsonpspeech-to-order"]||[]).push([[0],{112:function(e,t){},114:function(e,t){},128:function(e,t){},130:function(e,t){},135:function(e,t){},137:function(e,t){},144:function(e,t,a){},145:function(e,t,a){},146:function(e,t,a){},147:function(e,t,a){},148:function(e,t,a){},149:function(e,t,a){},150:function(e,t,a){},151:function(e,t,a){},152:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(71),i=a.n(o),c=(a(79),a(23)),s=a(24),l=a(26),u=a(25),m=a(38),d=a.n(m),p=a(72),h=a(73),f=a.n(h);a(144);function g(){return(g=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function v(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var b=r.a.createElement("g",null,r.a.createElement("path",{d:"m241 420.323v61.677h-90v30h210v-30h-90v-61.677c67.33-6.042 122.865-52.795 142.411-114.813l-28.612-9.018c-17.817 56.528-69.577 94.508-128.799 94.508s-110.982-37.98-128.799-94.509l-28.612 9.018c19.525 61.95 75.011 108.765 142.411 114.814z"}),r.a.createElement("path",{d:"m256 361c57.897 0 105-47.103 105-105v-150c0-58.449-47.103-106-105-106s-105 47.551-105 106v150c0 57.897 47.103 105 105 105zm-75-180h45v-30h-45v-30h45v-30h-43.526c6.892-34.746 37.238-61 73.526-61s66.634 26.254 73.526 61h-43.526v30h45v30h-45v30h45v30h-150zm0 60h150v15c0 41.355-33.645 75-75 75s-75-33.645-75-75z"})),E=function(e){var t=e.svgRef,a=e.title,n=v(e,["svgRef","title"]);return r.a.createElement("svg",g({id:"Capa_1",enableBackground:"new 0 0 512 512",height:512,viewBox:"0 0 512 512",width:512,ref:t},n),a?r.a.createElement("title",null,a):null,b)},A=r.a.forwardRef((function(e,t){return r.a.createElement(E,g({svgRef:t},e))})),S=(a.p,a(145),function(e){var t=e.clickAction,a=e.recordingAudioStatus,n=!1,o={};return o=(n="ready"===a||"running"===a)?{opacity:"1"}:{opacity:"0.6"},r.a.createElement("div",{className:"container direction-column"},r.a.createElement("div",{id:"microphone-logo-container",style:o},r.a.createElement(A,{id:"microphone-logo",onClick:t,style:o})),n&&r.a.createElement("div",{className:"container direction-row recording-state"},r.a.createElement("svg",{height:"50",width:"50",className:"blinking"},r.a.createElement("circle",{cx:"25",cy:"25",r:"10",fill:"#e16162"})),r.a.createElement("p",null,"microfono attivo")))}),y=function(e){var t=e.streamStatusText,a=e.streamAudioStatus,n=e.streamAudioData;return r.a.createElement("div",{className:"container-streaming"},r.a.createElement("p",{className:"streamAudioTextDetection"},r.a.createElement("span",{style:{backgroundColor:"#f9bc60"}},t)),r.a.createElement("p",{className:"streamAudioText"},"running"===a&&n))},z=(a(146),["origano","aglio","basilico","tonno","cipolla","gamberetti","funghi","prosciutto","capperi"]),k=a(18),O=(a(147),function(e){var t=e.name,a=e.ingridients,n=e.price,o=a.join(", ");return r.a.createElement("div",{className:"item-pizza"},r.a.createElement("h3",{id:"pizzaName"},t.toUpperCase()),r.a.createElement("p",{id:"pizzaIngridients"},o),r.a.createElement("p",{id:"pizzaPrice"},"Prezzo: ",n,"\u20ac"))}),w=function(e){var t=e.streamAudioData.split(" "),a=[];t.forEach((function(e){var t=z.filter((function(t){return t===e}));return void 0!==t[0]&&a.push(t[0]),a}));var n=[];return a.forEach((function(e){for(var t in k)k[t].ingridients.includes(e)&&(n.includes(k[t])||n.push(k[t]))})),r.a.createElement("div",{className:"container-pizzas"},n.map((function(e,t){return r.a.createElement(O,{name:e.name,ingridients:e.ingridients,price:e.price})})))},j=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).handleSpeechToMicrophone=Object(p.a)(d.a.mark((function e(){var t,a,r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://speech-to-order-backend.eu-gb.mybluemix.net/api/speech-to-text/token");case 3:return t=e.sent,e.next=6,t.json();case 6:a=e.sent,r=f.a.SpeechToText.recognizeMicrophone({accessToken:a.accessToken,url:"https://api.eu-de.speech-to-text.watson.cloud.ibm.com/instances/d86be21b-c272-4038-955f-68908b2ee32d",keepMicrophone:!0,objectMode:!0,extractResults:!0,format:!1,model:"it-IT_BroadbandModel"}),n.setState({streamAudioStatus:"ready",streamAudioObject:r}),n.handleStartStreamAudio(),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),console.log("speechToTextEngine - handleSpeechToMicrophone: ",e.t0);case 15:case"end":return e.stop()}}),e,null,[[0,12]])}))),n.handleStartStreamAudio=function(){n.state.streamAudioObject.on("data",(function(e){console.log(e.alternatives[0].transcript),console.log(e.final),n.setState({streamAudioStatus:"running",streamAudioData:e.alternatives[0].transcript,streamSentenceDetectionComplete:e.final})}))},n.handleStopStreamAudio=function(){n.state.streamAudioObject.stop(),n.setState({streamAudioStatus:"stopped"})},n.state={streamAudioStatus:"idle",streamAudioObject:{},streamAudioData:"",streamSentenceDetectionComplete:!1},n}return Object(s.a)(a,[{key:"render",value:function(){var e=this.state,t=e.streamAudioStatus,a=e.streamAudioData,o=this.props.sitePage,i="";switch(t){case"idle":i="";break;case"ready":i="prova a parlare...";break;case"running":i="ti sto ascoltando...";break;default:i="stream audio completo"}var c=2===o;return r.a.createElement(n.Fragment,null,c&&r.a.createElement(S,{clickAction:this.handleSpeechToMicrophone,recordingAudioStatus:t}),("ready"===t||"running"===t)&&r.a.createElement(y,{streamStatusText:i,streamAudioStatus:t,streamAudioData:a}),r.a.createElement(w,{streamAudioData:a}))}}]),a}(n.Component),x=(a(148),function(e){var t=e.event,a=e.disabled,o=e.label;return console.log(a),r.a.createElement(n.Fragment,null,r.a.createElement("button",{id:"buttonPrimary",onClick:t,disabled:a},o))}),N=(a(149),a(150),function(e){return r.a.createElement("h2",{className:"TextH2"},e.children)}),T=(a(151),function(e){var t=e.page,a="",n=r.a.createElement("p",{className:"BodyContent"},"Attraverso la tua voce questa applicazione ti ","\n",r.a.createElement("span",{style:{color:"#f9bc60"}},"suggerir\xe0 delle pizze")," ","\n","in base al condimento che preferisci."),o=r.a.createElement("p",{className:"BodyContent"},"Facciamo un test del microfono.",r.a.createElement("br",null),"Premi il pulsante qui sotto..."),i=r.a.createElement("p",{className:"BodyContent"},"Prova a dire","\n",r.a.createElement("span",{style:{color:"#f9bc60"}},"funghi")," o ","\n",r.a.createElement("span",{style:{color:"#f9bc60"}},"basilico")," o ","\n",r.a.createElement("span",{style:{color:"#f9bc60"}},"cipolla")," o ","\n",r.a.createElement("span",{style:{color:"#f9bc60"}},"gamberetti"),"...","\n","O qualsiasi altro gusto che interessa...");switch(t){case 1:a=n;break;case 2:a=o;break;case 3:a=i}return a}),P=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(c.a)(this,a),(e=t.call(this)).handlePageTitle=function(e){switch(e){case 1:return"Benvenuto!";case 2:return"";case 3:return"Proviamo...";default:return""}},e.handleButtonAction=function(t){"goForward"===t.action&&e.setState({page:e.state.page+1}),"goBack"===t.action&&e.setState({page:e.state.page-1})},e.state={page:1},e}return Object(s.a)(a,[{key:"render",value:function(){var e=this,t=this.state,a=t.streamAudioStatus,n=t.page;return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"Header"},"header section"),r.a.createElement("section",{className:"Section"},r.a.createElement(N,null,this.handlePageTitle(n)),r.a.createElement(T,{page:n}),r.a.createElement(j,{streamAudioStatus:a,sitePage:n}),r.a.createElement("div",{className:"container-buttons"},r.a.createElement(x,{event:function(){return e.handleButtonAction({action:"goBack"})},label:"Indietro",disabled:1===n}),r.a.createElement(x,{event:function(){return e.handleButtonAction({action:"goForward"})},label:"Avanti",disabled:3===n}))))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(P,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},18:function(e){e.exports=JSON.parse('{"marinara":{"name":"Marinara","ingridients":["pomodoro","aglio","olio","origano","funghi","cipolla"],"price":3},"margherita":{"name":"Margherita","ingridients":["pomodoro","mozzarella"],"price":3},"napoletana":{"name":"Napoletana","ingridients":["pomodoro","mozzarella","aglio","basilico"],"price":4},"romana":{"name":"Romana","ingridients":["pomodoro","mozzarella","capperi","olive"],"price":6},"prosciutto_e_funghi":{"name":"Prosciutto e funghi","ingridients":["pomodoro","mozzarella","prosciutto","funghi"],"price":4},"tonno_e_cipolla":{"name":"Tonno e Cipolla","ingridients":["pomodoro","mozzarella","tonno","cipolla"],"price":6},"porcini":{"name":"Porcini","ingridients":["pomodoro","mozzarella","basilico","funghi porcini"],"price":7},"gamberetti_mascarpone":{"name":"Gamberetti e Mascarpone","ingridients":["pomodoro","mozzarella","gamberetti","mascarpone"],"price":7}}')},74:function(e,t,a){e.exports=a(152)},79:function(e,t,a){},85:function(e,t){},87:function(e,t){}},[[74,1,2]]]);
//# sourceMappingURL=main.b320107b.chunk.js.map