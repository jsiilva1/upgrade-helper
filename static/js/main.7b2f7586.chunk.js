(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{129:function(e,n,t){e.exports=t.p+"static/media/loading.26ef1cbc.svg"},131:function(e){e.exports={a:"https://react-native-community.github.io/upgrade-helper"}},132:function(e,n,t){e.exports=t.p+"static/media/logo.74ebf3f4.svg"},139:function(e,n,t){e.exports=t(234)},144:function(e,n,t){},160:function(e,n,t){var r={"./":49,"./0.57":95,"./0.57.js":95,"./0.58":96,"./0.58.js":96,"./0.59":97,"./0.59.js":97,"./0.60":98,"./0.60.js":98,"./__mocks__":54,"./__mocks__/":54,"./__mocks__/index":54,"./__mocks__/index.js":54,"./index":49,"./index.js":49};function a(e){var n=o(e);return t(n)}function o(e){if(!t.o(r,e)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return r[e]}a.keys=function(){return Object.keys(r)},a.resolve=o,e.exports=a,a.id=160},234:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),o=t(9),i=t.n(o),c=(t(144),t(17)),s=t(18),l=t(7),u=t(8),f=t(235),d=t(117),p=t(94),m=t(45),b=t.n(m),v=t(65),g=t(237),h=t(238),j=t(13),O=t.n(j),x=t(118),E=t.n(x),y=t(49),V="react-native-community/rn-diff-purge",w="https://raw.githubusercontent.com/".concat(V,"/master/RELEASES"),C=function(e){var n=e.fromVersion,t=e.toVersion;return"https://raw.githubusercontent.com/".concat(V,"/diffs/diffs/").concat(n,"..").concat(t,".diff")},k=function(e){return e.replace(/RnDiffApp\//,"")},D=function(e){var n=e.fromVersion,t=e.toVersion,r=O.a.valid(O.a.coerce(t));return y.default.filter(function(e){var t=e.version,a=O.a.coerce(t);return-1!==O.a.compare(r,a)&&![0,-1].includes(O.a.compare(a,n))})},N=function(e){var n=e.version;return"https://github.com/react-native-community/releases/blob/master/CHANGELOG.md#".concat(n.replace(".",""))},R=t(236);function S(){var e=Object(l.a)(["\n  width: 100%;\n"]);return S=function(){return e},e}function T(){var e=Object(l.a)(["\n  width: 100%;\n"]);return T=function(){return e},e}var P=R.a.Option,A=u.b.div(T()),_=Object(u.b)(R.a)(S()),z=function(e){var n=e.title,t=e.options,r=Object(s.a)(e,["title","options"]);return a.a.createElement(A,null,a.a.createElement("h4",null,n),a.a.createElement(_,Object.assign({size:"large"},r),t.map(function(e){return a.a.createElement(P,{key:e,value:e},e)})))};function L(){var e=Object(l.a)(["\n  display: flex;\n  justify-content: center;\n  height: auto;\n  overflow: hidden;\n  margin-top: 25px;\n"]);return L=function(){return e},e}function F(){var e=Object(l.a)(["\n  padding-left: 5px;\n"]);return F=function(){return e},e}function I(){var e=Object(l.a)(["\n  padding-right: 5px;\n"]);return I=function(){return e},e}function M(){var e=Object(l.a)(["\n  display: flex;\n  justify-content: space-between;\n"]);return M=function(){return e},e}var K=u.b.div(M()),B=Object(u.b)(z)(I()),U=Object(u.b)(function(e){var n=e.popover,t=Object(s.a)(e,["popover"]);return n?a.a.cloneElement(n,{children:a.a.createElement(z,t)}):a.a.createElement(z,t)})(F()),H=u.b.div(L()),W=function(e){var n=e.version,t=e.versionToCompare;return 0===O.a.compare(O.a.valid(O.a.coerce(n)),O.a.valid(O.a.coerce(t)))},Y=function(e){var n=e.releasedVersions,t=e.toVersion,r=e.latestVersion,a=null!==O.a.prerelease(t),o=null!==O.a.prerelease(r);return n.filter(function(e){return null===O.a.prerelease(e)||a&&W({version:t,versionToCompare:e})||o&&W({version:r,versionToCompare:e})})},G=function(e){var n=e.releasedVersions,t=e.minVersion,r=e.maxVersion;return n.filter(function(e){return e.length>0&&(r&&O.a.lt(e,r)||t&&O.a.gt(e,t))})},J=function(e){var n=e.releasedVersions,t=e.versionToCompare;return n.find(function(e){return O.a.lt(e,t)&&"minor"===O.a.diff(O.a.valid(O.a.coerce(e)),O.a.valid(O.a.coerce(t)))})},X=function(e){var n=e.version,t=e.allVersions,r=e.minVersion;try{return n&&t.includes(n)&&(!r||r&&O.a.gt(n,r))}catch(a){return!1}},$=function(e){var n=e.showDiff,t=Object(r.useState)(!0),o=Object(c.a)(t,2),i=o[0],s=o[1],l=Object(r.useState)([]),u=Object(c.a)(l,2),f=u[0],d=u[1],p=Object(r.useState)([]),m=Object(c.a)(p,2),j=m[0],O=m[1],x=Object(r.useState)([]),y=Object(c.a)(x,2),V=y[0],C=y[1],k=Object(r.useState)(!1),D=Object(c.a)(k,2),N=D[0],R=D[1],S=Object(r.useState)(""),T=Object(c.a)(S,2),P=T[0],A=T[1],_=Object(r.useState)(""),z=Object(c.a)(_,2),L=z[0],F=z[1],I=Object(r.useRef)(null);Object(r.useEffect)(function(){var e=function(){var e=E.a.parse(window.location.search);return{fromVersion:e.from,toVersion:e.to}}();!function(){var n=Object(v.a)(b.a.mark(function n(){var t,r,a,o,i,c,l,u,f;return b.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch(w);case 2:return t=n.sent,n.next=5,t.text();case 5:r=n.sent.split("\n"),a=X({version:e.fromVersion,allVersions:r}),o=X({version:e.toVersion,allVersions:r,minVersion:e.fromVersion}),i=r[0],c=o?e.toVersion:i,l=Y({releasedVersions:r,toVersion:c,latestVersion:i}),d(l),u=a?e.fromVersion:J({releasedVersions:l,versionToCompare:c}),O(G({releasedVersions:l,maxVersion:c})),C(G({releasedVersions:l,minVersion:u})),A(u),F(c),s(!1),R(f=a&&o),f&&I.current.props.onClick();case 21:case"end":return n.stop()}},n)}));return function(){return n.apply(this,arguments)}}()()},[A,F]),Object(r.useEffect)(function(){i||(O(G({releasedVersions:f,maxVersion:L})),C(G({releasedVersions:f,minVersion:P})))},[i,f,P,L,N]);var M=function(e){var t=e.fromVersion,r=e.toVersion;n({fromVersion:t,toVersion:r}),function(e){var n=e.fromVersion,t=e.toVersion,r=window.location.href.replace(window.location.search,""),a="?from=".concat(n,"&to=").concat(t);window.history.replaceState(null,null,"".concat(r).concat(a))}({fromVersion:P,toVersion:L})};return a.a.createElement(r.Fragment,null,a.a.createElement(K,null,a.a.createElement(B,{title:"What's your current React Native version?",loading:i,value:P,options:j,onChange:function(e){return A(e)}}),a.a.createElement(U,{title:"To which version would you like to upgrade?",loading:i,value:L,options:V,popover:"0.60.1"===L&&a.a.createElement(g.a,{visible:!0,placement:"topLeft",content:"We recommend using the latest 0.60 patch release instead of 0.60.1."}),onChange:function(e){return F(e)}})),a.a.createElement(H,null,a.a.createElement(h.a,{ref:I,type:"primary",size:"large",onClick:function(){return M({fromVersion:P,toVersion:L})}},"Show me how to upgrade!")))},q=t(70),Q=t(32),Z=(t(216),t(19)),ee=t(239);function ne(){var e=Object(l.a)(["\n  font-family: SFMono-Regular, Consolas, Liberation Mono, Menlo, Courier,\n    monospace;\n  font-size: 12px;\n  color: #24292e;\n  line-height: 32px;\n  background-color: #fafbfc;\n  border-bottom: 1px solid #e1e4e8;\n  border-top-left-radius: 2px;\n  border-top-right-radius: 2px;\n  padding: 5px 10px;\n"]);return ne=function(){return e},e}function te(){var e=Object(l.a)(["\n  color: #24292e;\n  margin-right: 2px;\n  font-size: 10px;\n  transform: ",";\n  transition: transform 0.2s ease-in-out;\n  transform-origin: center;\n  line-height: 0;\n  height: auto;\n  &:hover,\n  &:focus {\n    color: #24292e;\n  }\n"]);return te=function(){return e},e}function re(){var e=Object(l.a)(["\n  font-size: 13px;\n  line-height: 0;\n  border-width: 0px;\n  width: 20px;\n  height: 20px;\n  margin: 5px 8px 0;\n  &,\n  &:hover,\n  &:focus {\n    color: ",";\n  }\n"]);return re=function(){return e},e}function ae(){var e=Object(l.a)(["\n  color: #24292e;\n  font-size: 12px;\n  border-width: 0;\n  &:hover,\n  &:focus {\n    color: #24292e;\n  }\n"]);return ae=function(){return e},e}function oe(){var e=Object(l.a)(["\n  float: right;\n"]);return oe=function(){return e},e}function ie(){var e=Object(l.a)(["\n  font-size: 10px;\n  margin: 0 5px;\n  color: #f78206;\n"]);return ie=function(){return e},e}var ce=Object(u.b)(function(e){return a.a.createElement(Z.a,Object.assign({},e,{type:"right"}))})(ie()),se=function(e){var n=e.oldPath,t=e.newPath,r=e.type,o=k(n),i=k(t);return"delete"===r?a.a.createElement("span",null,o):o!==i&&"add"!==r?a.a.createElement("span",null,o," ",a.a.createElement(ce,null)," ",i):a.a.createElement("span",null,i)},le=function(e){var n=e.type,t=Object(s.a)(e,["type"]);return a.a.createElement(ee.a,Object.assign({},t,{color:{add:"blue",modify:"green",delete:"red",rename:"orange"}[n]}),{add:"ADDED",modify:"MODIFIED",delete:"DELETED",rename:"RENAMED"}[n])},ue=function(e){var n=e.visible,t=Object(s.a)(e,["visible"]);return n?a.a.createElement(ee.a,Object.assign({},t,{color:"cyan"}),"BINARY"):null},fe=Object(u.b)(function(e){return a.a.createElement("div",e)})(oe()),de=Object(u.b)(function(e){var n=e.visible,t=e.toVersion,r=e.newPath,o=Object(s.a)(e,["visible","toVersion","newPath"]);return n?a.a.createElement(h.a,Object.assign({},o,{type:"ghost",shape:"circle",icon:"download",onClick:function(){return window.location=function(e){var n=e.version,t=e.path;return"https://github.com/".concat(V,"/raw/release/").concat(n,"/").concat(t)}({version:t,path:r})}})):null})(ae()),pe=Object(u.b)(function(e){var n=e.diffKey,t=(e.isDiffCompleted,e.onCompleteDiff),r=Object(s.a)(e,["diffKey","isDiffCompleted","onCompleteDiff"]);return a.a.createElement(h.a,Object.assign({},r,{type:"ghost",shape:"circle",icon:"check",onClick:function(){return t(n)}}))})(re(),function(e){return e.isDiffCompleted?"#52c41a":"#24292e"}),me=Object(u.b)(function(e){var n=e.visible,t=(e.isDiffCollapsed,Object(s.a)(e,["visible","isDiffCollapsed"]));return n?a.a.createElement(h.a,Object.assign({},t,{type:"link",icon:"down"})):null})(te(),function(e){return e.isDiffCollapsed?"rotate(-90deg)":"initial"}),be=Object(u.b)(function(e){var n=e.oldPath,t=e.newPath,o=e.toVersion,i=e.type,c=e.diffKey,l=e.hasDiff,u=e.isDiffCollapsed,f=e.setIsDiffCollapsed,d=e.isDiffCompleted,p=e.onCompleteDiff,m=Object(s.a)(e,["oldPath","newPath","toVersion","type","diffKey","hasDiff","isDiffCollapsed","setIsDiffCollapsed","isDiffCompleted","onCompleteDiff"]);return a.a.createElement("div",m,a.a.createElement(me,{visible:l,isDiffCollapsed:u,onClick:function(){return f(!u)}}),a.a.createElement(se,{oldPath:n,newPath:t,type:i})," ",a.a.createElement(le,{type:i}),a.a.createElement(ue,{visible:!l}),a.a.createElement(fe,null,a.a.createElement(r.Fragment,null,a.a.createElement(de,{visible:!l,toVersion:o,newPath:t}),a.a.createElement(pe,{diffKey:c,isDiffCompleted:d,onCompleteDiff:p}))))})(ne()),ve=t(61),ge=t(22),he=t(127);function je(){var e=Object(l.a)(["\n          margin-bottom: 0;\n        "]);return je=function(){return e},e}function Oe(){var e=Object(l.a)(["\n  font-style: normal;\n  background-color: rgba(27, 31, 35, 0.07);\n  border-radius: 3px;\n  font-size: 85%;\n  margin: 0;\n  padding: 0.2em 0.4em;\n"]);return Oe=function(){return e},e}function xe(){var e=Object(l.a)(["\n  text-decoration: none;\n  color: #045dc1;\n"]);return xe=function(){return e},e}var Ee=Object(u.b)(function(e){return a.a.createElement("a",Object.assign({target:"_blank"},e,{rel:"noopener"}))})(xe()),ye=u.b.em(Oe()),Ve=function(e){var n=e.forceBlock,t=e.options,r=void 0===t?{}:t,o=Object(s.a)(e,["forceBlock","options"]);return a.a.createElement(he.a,Object.assign({},o,{options:Object(ge.a)({},r,{forceBlock:n,overrides:Object(ge.a)({},r.overrides,{a:Ee,em:ye,code:ye,p:u.b.p(je())})})}))};function we(){var e=Object(l.a)(["\n  height: 16px;\n  width: 16px;\n  position: absolute;\n  top: 1px;\n  left: -10px;\n  font-size: 8px;\n  cursor: 'pointer';\n"]);return we=function(){return e},e}function Ce(){var e=Object(l.a)(["\n  margin: 10px;\n  border: 1px solid #ddd;\n  padding: 16px;\n  border-radius: 3px;\n  color: #000;\n"]);return Ce=function(){return e},e}function ke(){var e=Object(l.a)(["\n  position: relative;\n"]);return ke=function(){return e},e}var De=u.b.div(ke()),Ne=u.b.div(Ce()),Re=Object(u.b)(h.a)(we()),Se={ADD:"I",DELETE:"D",NEUTRAL:"N"},Te=function(e){var n=e.newPath,t=e.fromVersion,r=e.toVersion,o=k(n);return D({fromVersion:t,toVersion:r}).filter(function(e){var n=e.comments;return n&&n.length>0&&n.some(function(e){return e.fileName===o})}).reduce(function(e,n){var t=n.comments.reduce(function(e,n){var t=n.fileName,r=n.lineChangeType,i=n.lineNumber,c=n.content;return t!==o?e:Object(ge.a)({},e,Object(ve.a)({},function(e){var n=e.lineChangeType,t=e.lineNumber;return"".concat(Se[n.toUpperCase()]).concat(t)}({lineChangeType:r,lineNumber:i}),a.a.createElement(Pe,{content:c})))},{});return Object(ge.a)({},e,t)},{})},Pe=function(e){var n=e.content,t=Object(r.useState)(!0),o=Object(c.a)(t,2),i=o[0],s=o[1];return a.a.createElement(De,null,a.a.createElement(Re,{shape:"circle",type:"primary",onClick:function(){return s(!i)},icon:i?"close":"message"}),i&&a.a.createElement(Ne,null,a.a.createElement(Ve,null,n.props.children)))};function Ae(){var e=Object(l.a)(["\n  .diff-gutter-col {\n    width: 30px;\n  }\n\n  tr.diff-line {\n    font-family: SFMono-Regular, Consolas, Liberation Mono, Menlo, Courier,\n      monospace;\n  }\n\n  td.diff-gutter {\n    color: rgba(27, 31, 35, 0.3);\n    padding: 0;\n    text-align: center;\n    font-size: 12px;\n    cursor: auto;\n  }\n\n  td.diff-gutter .diff-line-normal {\n    background-color: #cdffd8;\n    border-color: #bef5cb;\n  }\n\n  td.diff-gutter:hover {\n    cursor: pointer;\n    color: rgba(27, 31, 35, 0.6);\n  }\n\n  td.diff-code {\n    font-size: 12px;\n    color: #24292e;\n  }\n\n  td.diff-code-insert .diff-code-edit {\n    background-color: #acf2bd;\n  }\n\n  td.diff-gutter-omit:before {\n    width: 0;\n    background-color: transparent;\n  }\n"]);return Ae=function(){return e},e}function _e(){var e=Object(l.a)(["\n  border: 1px solid #ddd;\n  border-radius: 3px;\n  margin-bottom: 16px;\n  margin-top: 16px;\n"]);return _e=function(){return e},e}var ze=u.b.div(_e()),Le=Object(u.b)(Q.a)(Ae()),Fe=a.a.memo(function(e){var n=e.oldPath,t=e.newPath,o=e.type,i=e.hunks,s=e.fromVersion,l=e.toVersion,u=e.diffKey,f=e.isDiffCompleted,d=e.onCompleteDiff,p=e.selectedChanges,m=e.onToggleChangeSelection,b=Object(r.useState)(function(e){var n=e.type,t=e.hunks;return"delete"===n||t.length>5||void 0}({type:o,hunks:i})),v=Object(c.a)(b,2),g=v[0],h=v[1];return f&&void 0===g&&h(!0),a.a.createElement(ze,null,a.a.createElement(be,{oldPath:n,newPath:t,toVersion:l,type:o,diffKey:u,hasDiff:i.length>0,isDiffCollapsed:g,setIsDiffCollapsed:h,isDiffCompleted:f,onCompleteDiff:d}),!g&&a.a.createElement(Le,{viewType:"split",diffType:o,hunks:i,widgets:Te({newPath:t,fromVersion:s,toVersion:l}),optimizeSelection:!0,selectedChanges:p},function(e){var n={enhancers:[Object(Q.c)(e)]},t=Object(Q.e)(e,n);return e.map(function(e){return a.a.createElement(Q.b,{key:e.content,hunk:e,tokens:t,gutterEvents:{onClick:m}})})}))},function(e,n){return e.isDiffCompleted===n.isDiffCompleted}),Ie=t(129),Me=t.n(Ie);function Ke(){var e=Object(l.a)(["\n  width: 60px;\n  margin: 15px 0;\n  animation: "," 3s linear infinite;\n"]);return Ke=function(){return e},e}function Be(){var e=Object(l.a)(["\n  from {\n    transform: rotate(0deg);\n  }\n\n  to {\n    transform: rotate(360deg);\n  }\n"]);return Be=function(){return e},e}var Ue=Object(u.c)(Be()),He=Object(u.b)(function(e){return a.a.createElement("img",Object.assign({alt:"Loading",title:"Loading"},e,{src:Me.a}))})(Ke(),Ue),We=t(62),Ye=t(63),Ge=t(71),Je=t(64),Xe=t(72);function $e(){var e=Object(l.a)(["\n  padding-inline-start: 18px;\n  margin: 10px 0 0;\n"]);return $e=function(){return e},e}function qe(){var e=Object(l.a)(["\n  margin: 15px 0;\n  background-color: #e1e4e8;\n  height: 0.25em;\n  border: 0;\n"]);return qe=function(){return e},e}function Qe(){var e=Object(l.a)(["\n  float: right;\n  position: absolute;\n  top: 10px;\n  right: 10px;\n  font-size: 12px;\n  border-width: 0px;\n  width: 20px;\n  height: 20px;\n  margin-right: 8px;\n  &,\n  &:hover,\n  &:focus {\n    color: #24292e;\n  }\n"]);return Qe=function(){return e},e}function Ze(){var e=Object(l.a)(["\n  margin: 0px 10px;\n"]);return Ze=function(){return e},e}function en(){var e=Object(l.a)(["\n  padding: 24px;\n  color: rgba(0, 0, 0, 0.65);\n  border: 1px solid #e8e8e8;\n  border-radius: 3px;\n"]);return en=function(){return e},e}function nn(){var e=Object(l.a)(["\n  position: relative;\n  margin-top: 16px;\n  color: rgba(0, 0, 0, 0.65);\n  max-height: ","\n  overflow: hidden;\n  transition: max-height 0.4s ease-out;\n"]);return nn=function(){return e},e}var tn=u.b.div(nn(),function(e){return e.isVisible?"800px":0}),rn=u.b.div(en()),an=Object(u.b)(function(e){return a.a.createElement("span",Object.assign({},e,{role:"img","aria-label":"Close useful content section"}),"\ud83d\udce3")})(Ze()),on=Object(u.b)(function(e){var n=e.toggleVisibility,t=Object(s.a)(e,["toggleVisibility"]);return a.a.createElement(h.a,Object.assign({},t,{type:"ghost",shape:"circle",icon:"close",onClick:n}))})(Qe()),cn=u.b.hr(qe()),sn=u.b.ol($e()),ln=function(e){function n(){var e,t;Object(We.a)(this,n);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(t=Object(Ge.a)(this,(e=Object(Je.a)(n)).call.apply(e,[this].concat(a)))).state={isVisible:!0},t.handleToggleVisibility=function(){return t.setState(function(e){return{isVisible:!e.isVisible}})},t}return Object(Xe.a)(n,e),Object(Ye.a)(n,[{key:"shouldComponentUpdate",value:function(e,n){var t=this.props.isLoading&&!e.isLoading,r=this.state.isVisible&&!n.isVisible;return t||r}},{key:"render",value:function(){var e=this.props,n=e.fromVersion,t=e.toVersion,o=this.state.isVisible,i=D({fromVersion:n,toVersion:t});if(!i.some(function(e){return!!e.usefulContent}))return null;var c=i.length>1;return a.a.createElement(tn,{isVisible:o},a.a.createElement(rn,null,a.a.createElement("h2",null,a.a.createElement(an,null)," Useful content for upgrading"),a.a.createElement(on,{toggleVisibility:this.handleToggleVisibility}),i.map(function(e,n){var t=e.usefulContent,o=e.version.slice(0,4),i=[].concat(Object(q.a)(t.links),[{title:"React Native ".concat(o," changelog"),url:N({version:o})}]);return a.a.createElement(r.Fragment,{key:n},n>0&&a.a.createElement(cn,null),c&&a.a.createElement("h3",null,"Release ",o),a.a.createElement("span",null,t.description),a.a.createElement(sn,null,i.map(function(e,n){var t=e.url,r=e.title;return a.a.createElement("li",{key:"".concat(t).concat(n)},a.a.createElement(Ee,{href:t},r))})))})))}}]),n}(r.Component),un=t(130),fn=t.n(un);function dn(){var e=Object(l.a)(["\n      transform: translateY(70px);\n      animation: ",";\n      animation-duration: 1.5s;\n    "]);return dn=function(){return e},e}function pn(){var e=Object(l.a)(["\n  position: fixed;\n  bottom: 20px;\n  right: 20px;\n  background: #d5eafd;\n  padding: 10px;\n  border: 1px solid #1890ff;\n  border-radius: 20px;\n  color: #7dadda;\n  transform: ",";\n  display: flex;\n  align-self: flex-end;\n  transition: transform 0.3s;\n  ","\n\n  .completedAmount {\n    color: #1890ff;\n  }\n"]);return pn=function(){return e},e}function mn(){var e=Object(l.a)(["\n  0% {\n    transform: translate(0, 0);\n  }\n\n  10%, 90% {\n    transform: translate(0, -2px);\n  }\n  \n  20%, 80% {\n    transform: translate(0, 3px);\n  }\n\n  30%, 50%, 70% {\n    transform: translate(0, -5px);\n  }\n\n  40%, 60% {\n    transform: translate(0, 5px);\n  }\n"]);return mn=function(){return e},e}var bn=Object(u.c)(mn()),vn=Object(u.b)(function(e){var n=e.completed,t=e.total,r=Object(s.a)(e,["completed","total"]);return a.a.createElement("div",r,a.a.createElement("span",{className:"completedAmount"},0===n?1:n)," /",t,a.a.createElement(fn.a,{active:n===t,config:{elementCount:200,angle:130,startVelocity:30}}))})(pn(),function(e){return e.completed?"translateY(0px)":"translateY(70px)"},function(e){return e.completed===e.total&&Object(u.a)(dn(),bn)});function gn(){var e=Object(l.a)(["\n  width: 90%;\n"]);return gn=function(){return e},e}var hn=u.b.div(gn()),jn=Object(Q.f)({multiple:!0})(function(e){var n=e.showDiff,t=e.fromVersion,o=e.toVersion,i=e.selectedChanges,s=e.onToggleChangeSelection,l=Object(r.useState)(!0),u=Object(c.a)(l,2),f=u[0],d=u[1],p=Object(r.useState)(null),m=Object(c.a)(p,2),g=m[0],h=m[1],j=Object(r.useState)([]),O=Object(c.a)(j,2),x=O[0],E=O[1],y=function(e){if(x.includes(e))return E(function(n){return n.filter(function(n){return n!==e})});E(function(n){return[].concat(Object(q.a)(n),[e])})};return Object(r.useEffect)(function(){n&&function(){var e=Object(v.a)(b.a.mark(function e(){var n;return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return d(!0),e.next=3,fetch(C({fromVersion:t,toVersion:o}));case 3:return e.next=5,e.sent.text();case 5:n=e.sent,h(Object(Q.d)(n).sort(function(e){return e.newPath.includes("package.json")?-1:1})),E([]),d(!1);case 9:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}()()},[t,n,o]),n?f?a.a.createElement(He,null):a.a.createElement(hn,null,a.a.createElement(ln,{isLoading:f,fromVersion:t,toVersion:o}),g.map(function(e){var n=function(e){var n=e.oldRevision,t=e.newRevision;return"".concat(n).concat(t)}(e);return a.a.createElement(Fe,Object.assign({key:"".concat(e.oldRevision).concat(e.newRevision)},e,{type:"new"===e.type?"add":e.type,diffKey:n,fromVersion:t,toVersion:o,isDiffCompleted:x.includes(n),onCompleteDiff:y,selectedChanges:i,onToggleChangeSelection:s}))}),a.a.createElement(vn,{completed:x.length,total:g.length})):null}),On=t(131),xn=t(132),En=t.n(xn);function yn(){var e=Object(l.a)(["\n  margin-top: 10px;\n  margin-left: 15px;\n"]);return yn=function(){return e},e}function Vn(){var e=Object(l.a)(["\n  margin: 0;\n  margin-left: 15px;\n"]);return Vn=function(){return e},e}function wn(){var e=Object(l.a)(["\n  width: 100px;\n  margin-bottom: 15px;\n"]);return wn=function(){return e},e}function Cn(){var e=Object(l.a)(["\n  display: flex;\n  align-items: center;\n"]);return Cn=function(){return e},e}function kn(){var e=Object(l.a)(["\n  width: 90%;\n  border-radius: 3px;\n"]);return kn=function(){return e},e}function Dn(){var e=Object(l.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  padding-top: 30px;\n"]);return Dn=function(){return e},e}var Nn=u.b.div(Dn()),Rn=Object(u.b)(f.a)(kn()),Sn=u.b.div(Cn()),Tn=u.b.img(wn()),Pn=u.b.h1(Vn()),An=Object(u.b)(function(e){var n=e.className,t=Object(s.a)(e,["className"]);return a.a.createElement("div",{className:n},a.a.createElement(d.a,t))})(yn()),_n=function(){var e=Object(r.useState)(""),n=Object(c.a)(e,2),t=n[0],o=n[1],i=Object(r.useState)(""),s=Object(c.a)(i,2),l=s[0],u=s[1],f=Object(r.useState)(!1),d=Object(c.a)(f,2),m=d[0],b=d[1];Object(r.useEffect)(function(){p.a.initialize("UA-136307971-1"),p.a.pageview("/")},[]);return a.a.createElement(Nn,null,a.a.createElement(Rn,null,a.a.createElement(Sn,null,a.a.createElement(Tn,{alt:"React Native upgrade helper logo",title:"React Native upgrade helper logo",src:En.a}),a.a.createElement("a",{href:On.a},a.a.createElement(Pn,null,"React Native upgrade guide")),a.a.createElement(An,{href:"https://github.com/react-native-community/upgrade-helper","data-icon":"octicon-star","data-show-count":"true","aria-label":"Star react-native-community/upgrade-helper on GitHub"},"Star")),a.a.createElement($,{showDiff:function(e){var n=e.fromVersion,t=e.toVersion;n!==t&&(o(n),u(t),b(!0))}})),a.a.createElement(jn,{showDiff:m,fromVersion:t,toVersion:l}))},zn=function(e){return a.a.createElement(_n,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(a.a.createElement(zn,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},49:function(e,n,t){"use strict";t.r(n);var r=t(22);n.default=["0.60","0.59","0.58","0.57"].map(function(e){return Object(r.a)({},t(160)("./".concat(e)).default,{version:e})})},54:function(e,n){jest.setMock("../index.js",["0.59","0.58","0.57","0.56"].map(function(e){return{version:e}}))},95:function(e,n,t){"use strict";t.r(n),n.default={usefulContent:{description:"React Native 0.57 includes 599 commits by 73 different contributors, it has improvements to Accessibility APIs, Babel 7 stable support and more.",links:[{title:"Tutorial on upgrading to React Native 0.57",url:"https://reactnative.thenativebits.com/courses/upgrading-react-native/upgrade-to-react-native-0.57/"}]}}},96:function(e,n,t){"use strict";t.r(n),n.default={usefulContent:{description:"React Native 0.58 is the first release of 2019, it includes work for modernizing and strengthening flow types for core components and  numerous crash fixes and resolutions for unexpected behaviors.",links:[{title:"Tutorial on upgrading to React Native 0.58",url:"https://reactnative.thenativebits.com/courses/upgrading-react-native/upgrade-to-react-native-0.58/"}]}}},97:function(e,n,t){"use strict";t.r(n),n.default={usefulContent:{description:"React Native 0.59 includes React Hooks, performance gains on Android and lots of cool stuff.",links:[{title:"Official blog post about the major changes on React Native 0.59",url:"https://facebook.github.io/react-native/blog/2019/03/12/releasing-react-native-059"},{title:"Tutorial on upgrading to React Native 0.59",url:"https://reactnative.thenativebits.com/courses/upgrading-react-native/upgrade-to-react-native-0.59/"}]}}},98:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r);n.default={usefulContent:{description:"React Native 0.60 includes Cocoapods integration by default, AndroidX support, auto-linking libraries, a brand new Start screen and more.",links:[{title:"Official blog post about the major changes on React Native 0.60",url:"https://facebook.github.io/react-native/blog/2019/07/03/version-60"}]},comments:[{fileName:"ios/Podfile",lineNumber:4,lineChangeType:"add",content:a.a.createElement(r.Fragment,null,"All these libraries below have been removed from the Xcode project file and now live in the Podfile. Cocoapods handles the linking now. Here you can add more libraries with native modules.")},{fileName:"ios/RnDiffApp.xcodeproj/project.pbxproj",lineNumber:9,lineChangeType:"neutral",content:a.a.createElement(r.Fragment,null,"Click [here](https://github.com/react-native-community/upgrade-helper/issues/47) for an explanation and some help with upgrading this file.")},{fileName:"ios/RnDiffApp/Info.plist",lineNumber:8,lineChangeType:"add",content:a.a.createElement(r.Fragment,null,"This name change was caused by an issue on `react-native init` command, please ignore it. For more information [click here](https://github.com/react-native-community/cli/issues/561).")},{fileName:"android/app/src/main/res/values/strings.xml",lineNumber:2,lineChangeType:"add",content:a.a.createElement(r.Fragment,null,"This name change was caused by an issue on `react-native init` command, please ignore it. For more information [click here](https://github.com/react-native-community/cli/issues/561).")}]}}},[[139,1,2]]]);
//# sourceMappingURL=main.7b2f7586.chunk.js.map