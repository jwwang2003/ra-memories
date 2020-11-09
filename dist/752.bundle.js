/*! For license information please see 752.bundle.js.LICENSE.txt */
(self.webpackChunkra_memories=self.webpackChunkra_memories||[]).push([[752],{5363:(n,t,e)=>{"use strict";e.d(t,{Z:()=>a});var r=e(3645),i=e.n(r)()((function(n){return n[1]}));i.push([n.id,"",""]);const a=i},570:(n,t,e)=>{"use strict";e.d(t,{Z:()=>a});var r=e(3645),i=e.n(r)()((function(n){return n[1]}));i.push([n.id,".myself .post {\n  width: auto;\n  background-color: white;\n  color: black;\n  margin-bottom: 5px;\n  display: grid;\n  grid-template-rows: auto auto;\n}\n.myself .post .topBar {\n  font-size: 12px;\n  color: grey;\n  height: 100%;\n  border-bottom: 1px solid black;\n  text-align: end;\n  padding: 5px;\n  box-sizing: border-box;\n}\n.myself .post .content {\n  font-size: 15px;\n  padding: 7.5px;\n  box-sizing: border-box;\n}\n.myself .post:last-child {\n  margin-bottom: 0;\n}\n",""]);const a=i},7633:(n,t,e)=>{"use strict";e.d(t,{Z:()=>a});var r=e(3645),i=e.n(r)()((function(n){return n[1]}));i.push([n.id,":root {\n  --primary-color: #0be586;\n  --secondary-color: #09c372;\n}\n.navbar {\n  background-color: black;\n  display: flex;\n  flex-direction: column;\n  position: fixed;\n  will-change: transform;\n  transform: translateZ(0);\n  align-items: center;\n  height: 100%;\n  position: relative;\n}\n.navbar .item {\n  cursor: pointer;\n  user-select: none;\n  color: white;\n  font-size: 12px;\n  box-sizing: border-box;\n  width: 80px;\n  height: 80px;\n  padding: 10px;\n  justify-content: center;\n  align-items: center;\n  display: flex;\n  flex-direction: column;\n  transition: 0.1s ease;\n  text-decoration: none;\n  position: relative;\n}\n.navbar .item .indicator {\n  animation-name: animate-indicator;\n  animation-timing-function: ease;\n  animation-duration: 0.15s;\n  animation-iteration-count: 1;\n  height: 100%;\n  top: 0;\n  left: 0;\n  width: 3px;\n  background-color: var(--primary-color);\n  position: absolute;\n  filter: none;\n}\n@keyframes animate-indicator {\n  from {\n    height: 0%;\n    filter: opacity(0);\n  }\n  to {\n    height: 100%;\n    filter: opacity(1);\n  }\n}\n.navbar .item svg {\n  filter: grayscale(100%) opacity(0.7);\n  transition: 0.25s ease;\n}\n.navbar .item:hover svg {\n  filter: grayscale(0%) opacity(1);\n}\n.navbar .item > .indicator {\n  animation-name: anime;\n  animation-timing-function: linear;\n  animation-duration: 0.25s;\n  animation-iteration-count: 1;\n  height: 100%;\n  top: 0;\n  left: 0;\n  width: 3px;\n  background-color: var(--primary-color);\n  position: absolute;\n  filter: none;\n}\n@keyframes anime {\n  from {\n    height: 0%;\n    opacity: 0;\n  }\n  to {\n    height: 100%;\n    opacity: 1;\n  }\n}\n.navbar .primary {\n  color: var(--primary-color);\n}\n.navbar .secondary {\n  color: var(--secondary-color);\n}\n.navbar .item:hover {\n  background: #4b4b4b;\n}\n.navbar .exit:hover {\n  background: red;\n}\n.navbar .item:nth-last-child(2) {\n  margin-top: auto;\n}\n",""]);const a=i},9643:(n,t,e)=>{"use strict";e.d(t,{Z:()=>a});var r=e(3645),i=e.n(r)()((function(n){return n[1]}));i.push([n.id,".recents {\n  margin: 15px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.recents .user {\n  width: 50%;\n  display: grid;\n  grid-template-rows: 45px auto;\n  margin-bottom: 15px;\n}\n.recents .user .topBar {\n  background-color: white;\n  height: 100%;\n}\n.recents .user .topBar img {\n  height: 100%;\n  width: auto;\n}\n.recents .user .posts {\n  box-sizing: border-box;\n  padding: 10px;\n  background-color: rgba(255, 255, 255, 0.25);\n}\n.recents .user .posts .post {\n  width: auto;\n  background-color: white;\n  color: black;\n  margin-bottom: 5px;\n  display: grid;\n  grid-template-rows: auto auto;\n}\n.recents .user .posts .post .topBar {\n  font-size: 12px;\n  color: grey;\n  height: 100%;\n  border-bottom: 1px solid black;\n  text-align: end;\n  padding: 5px;\n  box-sizing: border-box;\n}\n.recents .user .posts .post .content {\n  font-size: 15px;\n  padding: 7.5px;\n  box-sizing: border-box;\n}\n.recents .user .posts .post:last-child {\n  margin-bottom: 0;\n}\n.recents .user:last-child {\n  margin-bottom: 0;\n}\n",""]);const a=i},1858:(n,t,e)=>{"use strict";e.d(t,{Z:()=>a});var r=e(3645),i=e.n(r)()((function(n){return n[1]}));i.push([n.id,".main {\n  display: grid;\n  grid-template-columns: 80px auto;\n  grid-template-rows: 100%;\n  height: 100%;\n  overflow: hidden;\n}\n.main .sec_content {\n  position: relative;\n  overflow: auto;\n  padding-top: 50px;\n  box-sizing: border-box;\n}\n.main .sec_content .top_navbar {\n  position: fixed;\n  top: 0;\n  height: 50px;\n  width: 100%;\n  background-color: white;\n}\n.main .sec_content::-webkit-scrollbar-track {\n  background-color: #ffffff;\n}\n.main .sec_content::-webkit-scrollbar {\n  width: 5px;\n  background-color: #ffffff;\n}\n.main .sec_content::-webkit-scrollbar-thumb {\n  background-color: var(--primary-color);\n}\n",""]);const a=i},8752:(n,t,e)=>{"use strict";e.r(t),e.d(t,{default:()=>N});var r=e(5776),i=e(3727),a=e(5977),o=e(3379),c=e.n(o),l=e(1858);c()(l.Z,{insert:"head",singleton:!1}),l.Z.locals;var s=e(5503),u=e(7633);c()(u.Z,{insert:"head",singleton:!1}),u.Z.locals;var d=0;function h(n){for(var t=0;t<5;++t)if(t===n){document.getElementById("indicator-"+d).className="",document.getElementById("indicator-"+n).className="indicator",d=n;break}}function p(n){var t=n.handleLogout;return r.az("div",{class:"navbar"},r.az(i.rU,{to:"/main",className:"item",onClick:function(){return h(0)}},r.az("div",{id:"indicator-0",class:"indicator"}),r.az(f,null),r.az("div",null,"Recents")),r.az(i.rU,{to:"/main/chat",className:"item",onClick:function(){return h(1)}},r.az("div",{id:"indicator-1"}),r.az(v,null),r.az("div",null,"Chat")),r.az(i.rU,{to:"/main/friends",className:"item",onClick:function(){return h(2)}},r.az("div",{id:"indicator-2"}),r.az(m,null),r.az("div",null,"Friends")),r.az(i.rU,{to:"/main/myself",className:"item",onClick:function(){return h(3)}},r.az("div",{id:"indicator-3"}),r.az(z,null),r.az("div",null,"Myself")),r.az(i.rU,{to:"/main/settings",className:"item",onClick:function(){return h(4)}},r.az("div",{id:"indicator-4"}),r.az(g,null),r.az("div",null,"Settings")),r.az("div",{className:"item exit",onClick:function(){return t()}},r.az(b,null),r.az("div",null,"Logout")))}function f(){return r.az("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"white",width:"48px",height:"48px"},r.az("path",{d:"M0 0h24v24H0z",fill:"none"}),r.az("path",{d:"M21 5v14h2V5h-2zm-4 14h2V5h-2v14zM14 5H2c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h12c.55 0 1-.45 1-1V6c0-.55-.45-1-1-1zM8 7.75c1.24 0 2.25 1.01 2.25 2.25S9.24 12.25 8 12.25 5.75 11.24 5.75 10 6.76 7.75 8 7.75zM12.5 17h-9v-.75c0-1.5 3-2.25 4.5-2.25s4.5.75 4.5 2.25V17z",fill:"currentColor",class:"primary"}))}function v(){return r.az("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"white",width:"48px",height:"48px"},r.az("path",{d:"M0 0h24v24H0V0z",fill:"none"}),r.az("path",{d:"M20 4H4v13.17L5.17 16H20V4zm-6 10H6v-2h8v2zm4-3H6V9h12v2zm0-3H6V6h12v2z",opacity:".3",fill:"currentColor",class:"secondary"}),r.az("path",{d:"M20 18c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14zm-16-.83V4h16v12H5.17L4 17.17zM6 12h8v2H6zm0-3h12v2H6zm0-3h12v2H6z",fill:"currentColor",class:"primary"}))}function m(){return r.az("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"white",width:"48px",height:"48px"},r.az("path",{d:"M0 0h24v24H0V0z",fill:"none"}),r.az("path",{d:"M20 6H4v12h16V6zm-8 1c1.38 0 2.5 1.12 2.5 2.5S13.38 12 12 12s-2.5-1.12-2.5-2.5S10.62 7 12 7zm5 10H7v-1.01C7 13.9 10.31 13 12 13s5 .9 5 2.99V17z",opacity:".3",fill:"currentColor",class:"secondary"}),r.az("path",{d:"M4 20h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2zM4 6h16v12H4V6zm0-6h16v2H4zm0 22h16v2H4zm8-10c1.38 0 2.5-1.12 2.5-2.5S13.38 7 12 7 9.5 8.12 9.5 9.5 10.62 12 12 12zm0-3.5c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm0 4.5c-1.69 0-5 .9-5 2.99V17h10v-1.01C17 13.9 13.69 13 12 13zm-3.19 2.5c.61-.52 2.03-1 3.19-1 1.17 0 2.59.48 3.2 1H8.81z",fill:"currentColor",class:"primary"}))}function z(){return r.az("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"white",width:"48px",height:"48px"},r.az("path",{d:"M0 0h24v24H0V0z",fill:"none"}),r.az("path",{d:"M5 19h14V5H5v14zm7-13c1.65 0 3 1.35 3 3s-1.35 3-3 3-3-1.35-3-3 1.35-3 3-3zM6 16.47c0-2.5 3.97-3.58 6-3.58s6 1.08 6 3.58V18H6v-1.53z",opacity:".3",fill:"currentColor",class:"secondary"}),r.az("path",{d:"M12 12c1.65 0 3-1.35 3-3s-1.35-3-3-3-3 1.35-3 3 1.35 3 3 3zm0-4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm7-5H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zm-1-2.53c0-2.5-3.97-3.58-6-3.58s-6 1.08-6 3.58V18h12v-1.53zM8.31 16c.69-.56 2.38-1.12 3.69-1.12s3.01.56 3.69 1.12H8.31z",fill:"currentColor",class:"primary"}))}function g(){return r.az("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"white",width:"48px",height:"48px"},r.az("path",{d:"M0 0h24v24H0V0z",fill:"none"}),r.az("path",{d:"M5 19h14V5H5v14zm2.5-7c0-.2.02-.39.04-.58l-1.27-.99c-.11-.09-.15-.26-.07-.39l1.2-2.07c.08-.13.23-.18.37-.13l1.49.6c.31-.25.66-.44 1.02-.6l.22-1.59c.03-.14.15-.25.3-.25h2.4c.15 0 .27.11.3.25l.22 1.59c.37.15.7.35 1.01.59l1.49-.6c.14-.05.29 0 .37.13l1.2 2.07c.08.13.04.29-.07.39l-1.27.99c.03.2.04.39.04.59 0 .2-.02.39-.04.58l1.27.99c.11.09.15.26.07.39l-1.2 2.07c-.08.13-.23.18-.37.13l-1.49-.6c-.31.24-.65.44-1.01.59l-.22 1.59c-.03.15-.15.26-.3.26h-2.4c-.15 0-.27-.11-.3-.25l-.22-1.59c-.37-.15-.7-.35-1.01-.59l-1.49.6c-.14.05-.29 0-.37-.13l-1.2-2.07c-.08-.13-.04-.29.07-.39l1.27-.99c-.03-.2-.05-.39-.05-.59z",opacity:".3",fill:"currentColor",class:"secondary"}),r.az("path",{d:"M6.21 13.97l1.2 2.07c.08.13.23.18.37.13l1.49-.6c.31.24.64.44 1.01.59l.22 1.59c.03.14.15.25.3.25h2.4c.15 0 .27-.11.3-.26l.22-1.59c.36-.15.7-.35 1.01-.59l1.49.6c.14.05.29 0 .37-.13l1.2-2.07c.08-.13.04-.29-.07-.39l-1.27-.99c.03-.19.04-.39.04-.58 0-.2-.02-.39-.04-.59l1.27-.99c.11-.09.15-.26.07-.39l-1.2-2.07c-.08-.13-.23-.18-.37-.13l-1.49.6c-.31-.24-.64-.44-1.01-.59l-.22-1.59c-.03-.14-.15-.25-.3-.25h-2.4c-.15 0-.27.11-.3.26l-.22 1.59c-.36.15-.71.34-1.01.58l-1.49-.6c-.14-.05-.29 0-.37.13l-1.2 2.07c-.08.13-.04.29.07.39l1.27.99c-.03.2-.05.39-.05.59 0 .2.02.39.04.59l-1.27.99c-.11.1-.14.26-.06.39zM12 10.29c.94 0 1.71.77 1.71 1.71s-.77 1.71-1.71 1.71-1.71-.77-1.71-1.71.77-1.71 1.71-1.71zM19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm0 16H5V5h14v14z",fill:"currentColor",class:"primary"}))}function b(){return r.az("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"white",width:"48px",height:"48px"},r.az("path",{d:"M0 0h24v24H0V0z",fill:"none"}),r.az("path",{d:"M10.09 15.59L11.5 17l5-5-5-5-1.41 1.41L12.67 11H3v2h9.67l-2.58 2.59zM19 3H5c-1.11 0-2 .9-2 2v4h2V5h14v14H5v-4H3v4c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}))}var w=e(9643);c()(w.Z,{insert:"head",singleton:!1}),w.Z.locals;var x=function(){return(x=Object.assign||function(n){for(var t,e=1,r=arguments.length;e<r;e++)for(var i in t=arguments[e])Object.prototype.hasOwnProperty.call(t,i)&&(n[i]=t[i]);return n}).apply(this,arguments)},y=function(n){return{loading:null==n,value:n}},k=function(n,t){var e=!n&&!t,r=!!n&&!!t&&n.isEqual(t);return e||r},H=function(n,t){var e=t?t.idField:void 0,i=function(n,t){var e=function(n){var t=n?n():void 0,e=(0,r._Y)((function(n,t){switch(t.type){case"error":return x({},n,{error:t.error,loading:!1,value:void 0});case"reset":return y(t.defaultValue);case"value":return x({},n,{error:void 0,loading:!1,value:t.value});default:return n}}),y(t)),i=e[0],a=e[1];return{error:i.error,loading:i.loading,reset:function(){var t=n?n():void 0;a({type:"reset",defaultValue:t})},setError:function(n){a({type:"error",error:n})},setValue:function(n){a({type:"value",value:n})},value:i.value}}(),i=e.error,a=e.loading,o=e.reset,c=e.setError,l=e.setValue,s=e.value,u=function(n,t){return function(n,t,e){var i=(0,r.sO)(n);return(0,r.d4)((function(){t(n,i.current)||(i.current=n,e&&e())})),i}(n,k,t)}(n,o);return(0,r.d4)((function(){if(u.current){var n=t&&t.snapshotListenOptions?u.current.onSnapshot(t.snapshotListenOptions,l,c):u.current.onSnapshot(l,c);return function(){n()}}l(void 0)}),[u.current]),[s,a,i]}(n,{snapshotListenOptions:t?t.snapshotListenOptions:void 0}),a=i[0],o=i[1],c=i[2];return[(0,r.Ye)((function(){return a?a.docs.map((function(n){return function(n,t){var e;if(n.exists)return x({},n.data(),t?((e={})[t]=n.id,e):null)}(n,e)})):void 0}),[a,e]),o,c]},V=s.Z.firestore();function Z(){var n=V.collection("users").where(s.Z.firestore.FieldPath.documentId(),"==",s.Z.auth().currentUser.uid).limit(10),t=H(n)[0];return r.az("div",{class:"recents"},t&&t[0].friends.map((function(n){return r.az(M,{uid:n})})))}function M(n){var t=n.uid,e=V.collection("users").where("userID","==",t),i=H(e)[0],a=V.collection("posts").doc(t).collection("posts").orderBy("createdAt").limit(5),o=H(a)[0];return r.az(r.HY,null,r.az("div",{class:"user"},r.az("div",{class:"topBar"},i&&r.az("img",{src:i[0].photoURL})),r.az("div",{class:"posts"},o&&o.map((function(n){return r.az(C,{createdAt:n.createdAt.toDate(),content:n.content})})))))}function C(n){var t=n.createdAt,e=n.content;return r.az(r.HY,null,r.az("div",{class:"post"},r.az("div",{class:"topBar"},t.toString()),r.az("div",{class:"content"},e)))}function B(){return r.az(r.HY,null,r.az("h1",null,"Not implemented yet!"))}var A=e(5363);function U(){var n=(0,r.eJ)(""),t=n[0],e=n[1],i=s.Z.firestore(),a=i.collection("users").where(s.Z.firestore.FieldPath.documentId(),"==",s.Z.auth().currentUser.uid),o=H(a,{idField:"id"})[0];return r.az(r.HY,null,r.az("input",{value:t,onChange:function(n){return e(n.target.value)}}),r.az("button",{onClick:function(){return i.collection("users").where("userID","==",t).get().then((function(n){n.empty||i.collection("users").doc(s.Z.auth().currentUser.uid).update({friends:s.Z.firestore.FieldValue.arrayUnion(t)})})),void e("")}},"Add"),r.az("div",{class:"friends"},o&&o.length>0&&o[0].friends.map((function(n){return r.az(L,{id:n.id,name:n})}))))}function L(n){n.id;var t=n.name;return r.az(r.HY,null,r.az("h4",{onClick:function(){s.Z.firestore().collection("users").doc(s.Z.auth().currentUser.uid).update({friends:s.Z.firestore.FieldValue.arrayRemove(t)})}},t))}c()(A.Z,{insert:"head",singleton:!1}),A.Z.locals;var S=e(570);c()(S.Z,{insert:"head",singleton:!1}),S.Z.locals;function _(){var n=(0,r.eJ)(""),t=n[0],e=n[1],i=s.Z.firestore().collection("posts").doc(s.Z.auth().currentUser.email).collection("posts"),a=i.orderBy("createdAt").limit(30),o=H(a,{idField:"id"})[0];return r.az("div",{class:"myself"},r.az("textarea",{value:t,onChange:function(n){return e(n.target.value)}}),r.az("button",{onClick:function(){return function(){return n=this,r=void 0,o=function(){return function(n,t){var e,r,i,a,o={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return a={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function c(a){return function(c){return function(a){if(e)throw new TypeError("Generator is already executing.");for(;o;)try{if(e=1,r&&(i=2&a[0]?r.return:a[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,a[1])).done)return i;switch(r=0,i&&(a=[2&a[0],i.value]),a[0]){case 0:case 1:i=a;break;case 4:return o.label++,{value:a[1],done:!1};case 5:o.label++,r=a[1],a=[0];continue;case 7:a=o.ops.pop(),o.trys.pop();continue;default:if(!((i=(i=o.trys).length>0&&i[i.length-1])||6!==a[0]&&2!==a[0])){o=0;continue}if(3===a[0]&&(!i||a[1]>i[0]&&a[1]<i[3])){o.label=a[1];break}if(6===a[0]&&o.label<i[1]){o.label=i[1],i=a;break}if(i&&o.label<i[2]){o.label=i[2],o.ops.push(a);break}i[2]&&o.ops.pop(),o.trys.pop();continue}a=t.call(n,o)}catch(n){a=[6,n],r=0}finally{e=i=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,c])}}}(this,(function(n){switch(n.label){case 0:return[4,i.add({createdAt:s.Z.firestore.FieldValue.serverTimestamp(),content:t})];case 1:return n.sent(),e(""),[2]}}))},new((a=void 0)||(a=Promise))((function(t,e){function i(n){try{l(o.next(n))}catch(n){e(n)}}function c(n){try{l(o.throw(n))}catch(n){e(n)}}function l(n){var e;n.done?t(n.value):(e=n.value,e instanceof a?e:new a((function(n){n(e)}))).then(i,c)}l((o=o.apply(n,r||[])).next())}));var n,r,a,o}()}},"POST"),o&&o.length>0&&o.map((function(n){return r.az(O,{id:n.id,createdAt:n.createdAt?n.createdAt.toDate():"",content:n.content})})))}function O(n){var t=n.createdAt,e=n.content,i=n.id;return r.az(r.HY,null,r.az("div",{class:"post",onClick:function(){s.Z.firestore().collection("posts").doc(s.Z.auth().currentUser.email).collection("posts").doc(i).delete()}},r.az("div",{class:"topBar"},t.toString()),r.az("div",{class:"content"},e)))}function F(){return r.az(r.HY,null)}function N(){return s.Z.auth().currentUser.uid,r.az(i.UT,null,r.az("div",{class:"main"},r.az("div",{class:"sec_navbar"},r.az(p,{handleLogout:function(){s.Z.auth().signOut()}})),r.az("div",{class:"sec_content"},r.az("div",{class:"top_navbar"}),r.az(a.rs,null,r.az(a.AW,{exact:!0,path:"/main"},r.az(Z,null)),r.az(a.AW,{path:"/main/chat"},r.az(B,null)),r.az(a.AW,{path:"/main/friends"},r.az(U,null)),r.az(a.AW,{path:"/main/myself"},r.az(_,null)),r.az(a.AW,{path:"/main/settings"},r.az(F,null))))))}}}]);