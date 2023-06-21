/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	var parentJsonpFunction = window["webpackJsonp_name_"];
/******/ 	window["webpackJsonp_name_"] = function webpackJsonpCallback(chunkIds, moreModules) {
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, callbacks = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId])
/******/ 				callbacks.push.apply(callbacks, installedChunks[chunkId]);
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(chunkIds, moreModules);
/******/ 		while(callbacks.length)
/******/ 			callbacks.shift().call(null, __webpack_require__);
/******/ 		if(moreModules[0]) {
/******/ 			installedModules[0] = 0;
/******/ 			return __webpack_require__(0);
/******/ 		}
/******/ 	};

/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// object to store loaded and loading chunks
/******/ 	// "0" means "already loaded"
/******/ 	// Array means "loading", array contains callbacks
/******/ 	var installedChunks = {
/******/ 		5:0
/******/ 	};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}

/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId, callback) {
/******/ 		// "0" is the signal for "already loaded"
/******/ 		if(installedChunks[chunkId] === 0)
/******/ 			return callback.call(null, __webpack_require__);

/******/ 		// an array means "currently loading".
/******/ 		if(installedChunks[chunkId] !== undefined) {
/******/ 			installedChunks[chunkId].push(callback);
/******/ 		} else {
/******/ 			// start chunk loading
/******/ 			installedChunks[chunkId] = [callback];
/******/ 			var head = document.getElementsByTagName('head')[0];
/******/ 			var script = document.createElement('script');
/******/ 			script.type = 'text/javascript';
/******/ 			script.charset = 'utf-8';
/******/ 			script.async = true;

/******/ 			script.src = __webpack_require__.p + "" + chunkId + "." + ({"0":"admin","1":"juht","2":"kasutaja","3":"main","4":"raama"}[chunkId]||chunkId) + ".js";
/******/ 			head.appendChild(script);
/******/ 		}
/******/ 	};

/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {'use strict';var createEmptyFilterData=__webpack_require__(3);function DocContext(){var _this=this;this.filter={},this.libs={},this.menu=[],this.pictures=[],this.keel='EST',this.userData={},this.initFilter=function(docTypeId){/**
	         * метод создаст пустой фильтр по переданной конфигурации
	         */if(!docTypeId){docTypeId=_this.docTypeId;// проверим наличие конфигураций. если нет, то вернем пустой массив
	if(!DocContext.gridConfig||!DocContext.gridConfig[docTypeId].length){DocContext.filter[docTypeId]=[];}else{DocContext.filter[docTypeId]=createEmptyFilterData(DocContext.gridConfig[docTypeId],[],docTypeId);}}};};module.export=DocContext;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)(module)))

/***/ }),
/* 2 */
/***/ (function(module, exports) {

	"use strict";module.exports=function(module){if(!module.webpackPolyfill){module.deprecate=function(){};module.paths=[];// module.parent = undefined by default
	module.children=[];module.webpackPolyfill=1;}return module;};

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';var DocContext=__webpack_require__(1);/**
	 * создаст массив для создания фильтра
	 */function createEmptyFilterData(gridConfig,filterData,docTypeId){filterData=gridConfig.map(function(row){// props.data пустое, создаем
	var value=row.value?row.value:null;if(row.default){var defaultValue=getDefaultDates(row.default);value=defaultValue.start;if(row.interval){row.start=defaultValue.start;row[row.id+'_start']=defaultValue.start;row.end=defaultValue.end;row[row.id+'_end']=defaultValue.end;}}if(!row.type){row.type='text';}row.value=value;return row;});DocContext.filter[docTypeId]=filterData;return filterData;}module.exports=createEmptyFilterData;

/***/ }),
/* 4 */
/***/ (function(module, exports) {

	module.exports = ReactDOM;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {"use strict";if(process.env.NODE_ENV==="production"){module.exports=__webpack_require__(7);}else{module.exports=__webpack_require__(38);}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ }),
/* 6 */
/***/ (function(module, exports) {

	'use strict';// shim for using process in browser
	var process=module.exports={};// cached from whatever global is present so that test runners that stub it
	// don't break things.  But we need to wrap it in a try catch in case it is
	// wrapped in strict mode code which doesn't define any globals.  It's inside a
	// function because try/catches deoptimize in certain engines.
	var cachedSetTimeout;var cachedClearTimeout;function defaultSetTimout(){throw new Error('setTimeout has not been defined');}function defaultClearTimeout(){throw new Error('clearTimeout has not been defined');}(function(){try{if(typeof setTimeout==='function'){cachedSetTimeout=setTimeout;}else{cachedSetTimeout=defaultSetTimout;}}catch(e){cachedSetTimeout=defaultSetTimout;}try{if(typeof clearTimeout==='function'){cachedClearTimeout=clearTimeout;}else{cachedClearTimeout=defaultClearTimeout;}}catch(e){cachedClearTimeout=defaultClearTimeout;}})();function runTimeout(fun){if(cachedSetTimeout===setTimeout){//normal enviroments in sane situations
	return setTimeout(fun,0);}// if setTimeout wasn't available but was latter defined
	if((cachedSetTimeout===defaultSetTimout||!cachedSetTimeout)&&setTimeout){cachedSetTimeout=setTimeout;return setTimeout(fun,0);}try{// when when somebody has screwed with setTimeout but no I.E. maddness
	return cachedSetTimeout(fun,0);}catch(e){try{// When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
	return cachedSetTimeout.call(null,fun,0);}catch(e){// same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
	return cachedSetTimeout.call(this,fun,0);}}}function runClearTimeout(marker){if(cachedClearTimeout===clearTimeout){//normal enviroments in sane situations
	return clearTimeout(marker);}// if clearTimeout wasn't available but was latter defined
	if((cachedClearTimeout===defaultClearTimeout||!cachedClearTimeout)&&clearTimeout){cachedClearTimeout=clearTimeout;return clearTimeout(marker);}try{// when when somebody has screwed with setTimeout but no I.E. maddness
	return cachedClearTimeout(marker);}catch(e){try{// When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
	return cachedClearTimeout.call(null,marker);}catch(e){// same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
	// Some versions of I.E. have different rules for clearTimeout vs setTimeout
	return cachedClearTimeout.call(this,marker);}}}var queue=[];var draining=false;var currentQueue;var queueIndex=-1;function cleanUpNextTick(){if(!draining||!currentQueue){return;}draining=false;if(currentQueue.length){queue=currentQueue.concat(queue);}else{queueIndex=-1;}if(queue.length){drainQueue();}}function drainQueue(){if(draining){return;}var timeout=runTimeout(cleanUpNextTick);draining=true;var len=queue.length;while(len){currentQueue=queue;queue=[];while(++queueIndex<len){if(currentQueue){currentQueue[queueIndex].run();}}queueIndex=-1;len=queue.length;}currentQueue=null;draining=false;runClearTimeout(timeout);}process.nextTick=function(fun){var args=new Array(arguments.length-1);if(arguments.length>1){for(var i=1;i<arguments.length;i++){args[i-1]=arguments[i];}}queue.push(new Item(fun,args));if(queue.length===1&&!draining){runTimeout(drainQueue);}};// v8 likes predictible objects
	function Item(fun,array){this.fun=fun;this.array=array;}Item.prototype.run=function(){this.fun.apply(null,this.array);};process.title='browser';process.browser=true;process.env={};process.argv=[];process.version='';// empty string to avoid regexp issues
	process.versions={};function noop(){}process.on=noop;process.addListener=noop;process.once=noop;process.off=noop;process.removeListener=noop;process.removeAllListeners=noop;process.emit=noop;process.prependListener=noop;process.prependOnceListener=noop;process.listeners=function(name){return[];};process.binding=function(name){throw new Error('process.binding is not supported');};process.cwd=function(){return'/';};process.chdir=function(dir){throw new Error('process.chdir is not supported');};process.umask=function(){return 0;};

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";var _typeof=typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"?function(obj){return typeof obj;}:function(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;};function _interopDefault(e){return e&&"object"==(typeof e==="undefined"?"undefined":_typeof(e))&&"default"in e?e.default:e;}Object.defineProperty(exports,"__esModule",{value:!0});var reactRouter=__webpack_require__(8),React=_interopDefault(__webpack_require__(10)),history=__webpack_require__(20);__webpack_require__(11),__webpack_require__(28);var invariant=_interopDefault(__webpack_require__(29));function _extends(){return(_extends=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var o in r){Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o]);}}return e;}).apply(this,arguments);}function _inheritsLoose(e,t){e.prototype=Object.create(t.prototype),_setPrototypeOf(e.prototype.constructor=e,t);}function _setPrototypeOf(e,t){return(_setPrototypeOf=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e;})(e,t);}function _objectWithoutPropertiesLoose(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++){r=a[o],0<=t.indexOf(r)||(n[r]=e[r]);}return n;}var BrowserRouter=function(n){function e(){for(var e,t=arguments.length,r=new Array(t),o=0;o<t;o++){r[o]=arguments[o];}return(e=n.call.apply(n,[this].concat(r))||this).history=history.createBrowserHistory(e.props),e;}return _inheritsLoose(e,n),e.prototype.render=function(){return React.createElement(reactRouter.Router,{history:this.history,children:this.props.children});},e;}(React.Component),HashRouter=function(n){function e(){for(var e,t=arguments.length,r=new Array(t),o=0;o<t;o++){r[o]=arguments[o];}return(e=n.call.apply(n,[this].concat(r))||this).history=history.createHashHistory(e.props),e;}return _inheritsLoose(e,n),e.prototype.render=function(){return React.createElement(reactRouter.Router,{history:this.history,children:this.props.children});},e;}(React.Component),resolveToLocation=function resolveToLocation(e,t){return"function"==typeof e?e(t):e;},normalizeToLocation=function normalizeToLocation(e,t){return"string"==typeof e?history.createLocation(e,null,null,t):e;},forwardRefShim=function forwardRefShim(e){return e;},forwardRef=React.forwardRef;function isModifiedEvent(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey);}void 0===forwardRef&&(forwardRef=forwardRefShim);var LinkAnchor=forwardRef(function(e,t){var r=e.innerRef,o=e.navigate,n=e.onClick,a=_objectWithoutPropertiesLoose(e,["innerRef","navigate","onClick"]),i=a.target,c=_extends({},a,{onClick:function onClick(t){try{n&&n(t);}catch(e){throw t.preventDefault(),e;}t.defaultPrevented||0!==t.button||i&&"_self"!==i||isModifiedEvent(t)||(t.preventDefault(),o());}});return c.ref=forwardRefShim!==forwardRef&&t||r,React.createElement("a",c);}),Link=forwardRef(function(e,a){var t=e.component,i=void 0===t?LinkAnchor:t,c=e.replace,u=e.to,f=e.innerRef,s=_objectWithoutPropertiesLoose(e,["component","replace","to","innerRef"]);return React.createElement(reactRouter.__RouterContext.Consumer,null,function(r){r||invariant(!1);var o=r.history,e=normalizeToLocation(resolveToLocation(u,r.location),r.location),t=e?o.createHref(e):"",n=_extends({},s,{href:t,navigate:function navigate(){var e=resolveToLocation(u,r.location),t=history.createPath(r.location)===history.createPath(normalizeToLocation(e));(c||t?o.replace:o.push)(e);}});return forwardRefShim!==forwardRef?n.ref=a||f:n.innerRef=f,React.createElement(i,n);});}),forwardRefShim$1=function forwardRefShim$1(e){return e;},forwardRef$1=React.forwardRef;function joinClassnames(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++){t[r]=arguments[r];}return t.filter(function(e){return e;}).join(" ");}void 0===forwardRef$1&&(forwardRef$1=forwardRefShim$1);var NavLink=forwardRef$1(function(e,s){var t=e["aria-current"],l=void 0===t?"page":t,r=e.activeClassName,p=void 0===r?"active":r,R=e.activeStyle,h=e.className,y=e.exact,d=e.isActive,m=e.location,v=e.sensitive,b=e.strict,P=e.style,w=e.to,x=e.innerRef,g=_objectWithoutPropertiesLoose(e,["aria-current","activeClassName","activeStyle","className","exact","isActive","location","sensitive","strict","style","to","innerRef"]);return React.createElement(reactRouter.__RouterContext.Consumer,null,function(e){e||invariant(!1);var t=m||e.location,r=normalizeToLocation(resolveToLocation(w,t),t),o=r.pathname,n=o&&o.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1"),a=n?reactRouter.matchPath(t.pathname,{path:n,exact:y,sensitive:v,strict:b}):null,i=!!(d?d(a,t):a),c="function"==typeof h?h(i):h,u="function"==typeof P?P(i):P;i&&(c=joinClassnames(c,p),u=_extends({},u,R));var f=_extends({"aria-current":i&&l||null,className:c,style:u,to:r},g);return forwardRefShim$1!==forwardRef$1?f.ref=s||x:f.innerRef=x,React.createElement(Link,f);});});Object.defineProperty(exports,"MemoryRouter",{enumerable:!0,get:function get(){return reactRouter.MemoryRouter;}}),Object.defineProperty(exports,"Prompt",{enumerable:!0,get:function get(){return reactRouter.Prompt;}}),Object.defineProperty(exports,"Redirect",{enumerable:!0,get:function get(){return reactRouter.Redirect;}}),Object.defineProperty(exports,"Route",{enumerable:!0,get:function get(){return reactRouter.Route;}}),Object.defineProperty(exports,"Router",{enumerable:!0,get:function get(){return reactRouter.Router;}}),Object.defineProperty(exports,"StaticRouter",{enumerable:!0,get:function get(){return reactRouter.StaticRouter;}}),Object.defineProperty(exports,"Switch",{enumerable:!0,get:function get(){return reactRouter.Switch;}}),Object.defineProperty(exports,"generatePath",{enumerable:!0,get:function get(){return reactRouter.generatePath;}}),Object.defineProperty(exports,"matchPath",{enumerable:!0,get:function get(){return reactRouter.matchPath;}}),Object.defineProperty(exports,"useHistory",{enumerable:!0,get:function get(){return reactRouter.useHistory;}}),Object.defineProperty(exports,"useLocation",{enumerable:!0,get:function get(){return reactRouter.useLocation;}}),Object.defineProperty(exports,"useParams",{enumerable:!0,get:function get(){return reactRouter.useParams;}}),Object.defineProperty(exports,"useRouteMatch",{enumerable:!0,get:function get(){return reactRouter.useRouteMatch;}}),Object.defineProperty(exports,"withRouter",{enumerable:!0,get:function get(){return reactRouter.withRouter;}}),exports.BrowserRouter=BrowserRouter,exports.HashRouter=HashRouter,exports.Link=Link,exports.NavLink=NavLink;//# sourceMappingURL=react-router-dom.min.js.map

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {"use strict";if(process.env.NODE_ENV==="production"){module.exports=__webpack_require__(9);}else{module.exports=__webpack_require__(37);}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";var _typeof=typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"?function(obj){return typeof obj;}:function(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;};function _interopDefault(t){return t&&"object"==(typeof t==="undefined"?"undefined":_typeof(t))&&"default"in t?t.default:t;}Object.defineProperty(exports,"__esModule",{value:!0});var React=_interopDefault(__webpack_require__(10));__webpack_require__(11);var history=__webpack_require__(20);__webpack_require__(28);var createContext=_interopDefault(__webpack_require__(31)),invariant=_interopDefault(__webpack_require__(29)),pathToRegexp=_interopDefault(__webpack_require__(34));__webpack_require__(12);var hoistStatics=_interopDefault(__webpack_require__(36));function _extends(){return(_extends=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n){Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o]);}}return t;}).apply(this,arguments);}function _inheritsLoose(t,e){t.prototype=Object.create(e.prototype),_setPrototypeOf(t.prototype.constructor=t,e);}function _setPrototypeOf(t,e){return(_setPrototypeOf=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t;})(t,e);}function _objectWithoutPropertiesLoose(t,e){if(null==t)return{};var n,o,r={},a=Object.keys(t);for(o=0;o<a.length;o++){n=a[o],0<=e.indexOf(n)||(r[n]=t[n]);}return r;}var createNamedContext=function createNamedContext(t){var e=createContext();return e.displayName=t,e;},historyContext=createNamedContext("Router-History"),context=createNamedContext("Router"),Router=function(n){function t(t){var e;return(e=n.call(this,t)||this).state={location:t.history.location},e._isMounted=!1,e._pendingLocation=null,t.staticContext||(e.unlisten=t.history.listen(function(t){e._isMounted?e.setState({location:t}):e._pendingLocation=t;})),e;}_inheritsLoose(t,n),t.computeRootMatch=function(t){return{path:"/",url:"/",params:{},isExact:"/"===t};};var e=t.prototype;return e.componentDidMount=function(){this._isMounted=!0,this._pendingLocation&&this.setState({location:this._pendingLocation});},e.componentWillUnmount=function(){this.unlisten&&(this.unlisten(),this._isMounted=!1,this._pendingLocation=null);},e.render=function(){return React.createElement(context.Provider,{value:{history:this.props.history,location:this.state.location,match:t.computeRootMatch(this.state.location.pathname),staticContext:this.props.staticContext}},React.createElement(historyContext.Provider,{children:this.props.children||null,value:this.props.history}));},t;}(React.Component),MemoryRouter=function(r){function t(){for(var t,e=arguments.length,n=new Array(e),o=0;o<e;o++){n[o]=arguments[o];}return(t=r.call.apply(r,[this].concat(n))||this).history=history.createMemoryHistory(t.props),t;}return _inheritsLoose(t,r),t.prototype.render=function(){return React.createElement(Router,{history:this.history,children:this.props.children});},t;}(React.Component),Lifecycle=function(t){function e(){return t.apply(this,arguments)||this;}_inheritsLoose(e,t);var n=e.prototype;return n.componentDidMount=function(){this.props.onMount&&this.props.onMount.call(this,this);},n.componentDidUpdate=function(t){this.props.onUpdate&&this.props.onUpdate.call(this,this,t);},n.componentWillUnmount=function(){this.props.onUnmount&&this.props.onUnmount.call(this,this);},n.render=function(){return null;},e;}(React.Component);function Prompt(t){var o=t.message,e=t.when,r=void 0===e||e;return React.createElement(context.Consumer,null,function(t){if(t||invariant(!1),!r||t.staticContext)return null;var n=t.history.block;return React.createElement(Lifecycle,{onMount:function onMount(t){t.release=n(o);},onUpdate:function onUpdate(t,e){e.message!==o&&(t.release(),t.release=n(o));},onUnmount:function onUnmount(t){t.release();},message:o});});}var cache={},cacheLimit=1e4,cacheCount=0;function compilePath(t){if(cache[t])return cache[t];var e=pathToRegexp.compile(t);return cacheCount<cacheLimit&&(cache[t]=e,cacheCount++),e;}function generatePath(t,e){return void 0===t&&(t="/"),void 0===e&&(e={}),"/"===t?t:compilePath(t)(e,{pretty:!0});}function Redirect(t){var a=t.computedMatch,i=t.to,e=t.push,c=void 0!==e&&e;return React.createElement(context.Consumer,null,function(t){t||invariant(!1);var e=t.history,n=t.staticContext,o=c?e.push:e.replace,r=history.createLocation(a?"string"==typeof i?generatePath(i,a.params):_extends({},i,{pathname:generatePath(i.pathname,a.params)}):i);return n?(o(r),null):React.createElement(Lifecycle,{onMount:function onMount(){o(r);},onUpdate:function onUpdate(t,e){var n=history.createLocation(e.to);history.locationsAreEqual(n,_extends({},r,{key:n.key}))||o(r);},to:i});});}var cache$1={},cacheLimit$1=1e4,cacheCount$1=0;function compilePath$1(t,e){var n=""+e.end+e.strict+e.sensitive,o=cache$1[n]||(cache$1[n]={});if(o[t])return o[t];var r=[],a={regexp:pathToRegexp(t,r,e),keys:r};return cacheCount$1<cacheLimit$1&&(o[t]=a,cacheCount$1++),a;}function matchPath(u,t){void 0===t&&(t={}),"string"!=typeof t&&!Array.isArray(t)||(t={path:t});var e=t,n=e.path,o=e.exact,p=void 0!==o&&o,r=e.strict,h=void 0!==r&&r,a=e.sensitive,l=void 0!==a&&a;return[].concat(n).reduce(function(t,e){if(!e&&""!==e)return null;if(t)return t;var n=compilePath$1(e,{end:p,strict:h,sensitive:l}),o=n.regexp,r=n.keys,a=o.exec(u);if(!a)return null;var i=a[0],c=a.slice(1),s=u===i;return p&&!s?null:{path:e,url:"/"===e&&""===i?"/":i,isExact:s,params:r.reduce(function(t,e,n){return t[e.name]=c[n],t;},{})};},null);}function isEmptyChildren(t){return 0===React.Children.count(t);}var Route=function(t){function e(){return t.apply(this,arguments)||this;}return _inheritsLoose(e,t),e.prototype.render=function(){var c=this;return React.createElement(context.Consumer,null,function(t){t||invariant(!1);var e=c.props.location||t.location,n=_extends({},t,{location:e,match:c.props.computedMatch?c.props.computedMatch:c.props.path?matchPath(e.pathname,c.props):t.match}),o=c.props,r=o.children,a=o.component,i=o.render;return Array.isArray(r)&&isEmptyChildren(r)&&(r=null),React.createElement(context.Provider,{value:n},n.match?r?"function"==typeof r?r(n):r:a?React.createElement(a,n):i?i(n):null:"function"==typeof r?r(n):null);});},e;}(React.Component);function addLeadingSlash(t){return"/"===t.charAt(0)?t:"/"+t;}function addBasename(t,e){return t?_extends({},e,{pathname:addLeadingSlash(t)+e.pathname}):e;}function stripBasename(t,e){if(!t)return e;var n=addLeadingSlash(t);return 0!==e.pathname.indexOf(n)?e:_extends({},e,{pathname:e.pathname.substr(n.length)});}function createURL(t){return"string"==typeof t?t:history.createPath(t);}function staticHandler(t){return function(){invariant(!1);};}function noop(){}var StaticRouter=function(r){function t(){for(var e,t=arguments.length,n=new Array(t),o=0;o<t;o++){n[o]=arguments[o];}return(e=r.call.apply(r,[this].concat(n))||this).handlePush=function(t){return e.navigateTo(t,"PUSH");},e.handleReplace=function(t){return e.navigateTo(t,"REPLACE");},e.handleListen=function(){return noop;},e.handleBlock=function(){return noop;},e;}_inheritsLoose(t,r);var e=t.prototype;return e.navigateTo=function(t,e){var n=this.props,o=n.basename,r=void 0===o?"":o,a=n.context,i=void 0===a?{}:a;i.action=e,i.location=addBasename(r,history.createLocation(t)),i.url=createURL(i.location);},e.render=function(){var t=this.props,e=t.basename,n=void 0===e?"":e,o=t.context,r=void 0===o?{}:o,a=t.location,i=void 0===a?"/":a,c=_objectWithoutPropertiesLoose(t,["basename","context","location"]),s={createHref:function createHref(t){return addLeadingSlash(n+createURL(t));},action:"POP",location:stripBasename(n,history.createLocation(i)),push:this.handlePush,replace:this.handleReplace,go:staticHandler(),goBack:staticHandler(),goForward:staticHandler(),listen:this.handleListen,block:this.handleBlock};return React.createElement(Router,_extends({},c,{history:s,staticContext:r}));},t;}(React.Component),Switch=function(t){function e(){return t.apply(this,arguments)||this;}return _inheritsLoose(e,t),e.prototype.render=function(){var t=this;return React.createElement(context.Consumer,null,function(n){n||invariant(!1);var o,r,a=t.props.location||n.location;return React.Children.forEach(t.props.children,function(t){if(null==r&&React.isValidElement(t)){var e=(o=t).props.path||t.props.from;r=e?matchPath(a.pathname,_extends({},t.props,{path:e})):n.match;}}),r?React.cloneElement(o,{location:a,computedMatch:r}):null;});},e;}(React.Component);function withRouter(o){function t(t){var e=t.wrappedComponentRef,n=_objectWithoutPropertiesLoose(t,["wrappedComponentRef"]);return React.createElement(context.Consumer,null,function(t){return t||invariant(!1),React.createElement(o,_extends({},n,t,{ref:e}));});}var e="withRouter("+(o.displayName||o.name)+")";return t.displayName=e,t.WrappedComponent=o,hoistStatics(t,o);}var useContext=React.useContext;function useHistory(){return useContext(historyContext);}function useLocation(){return useContext(context).location;}function useParams(){var t=useContext(context).match;return t?t.params:{};}function useRouteMatch(t){var e=useLocation(),n=useContext(context).match;return t?matchPath(e.pathname,t):n;}exports.MemoryRouter=MemoryRouter,exports.Prompt=Prompt,exports.Redirect=Redirect,exports.Route=Route,exports.Router=Router,exports.StaticRouter=StaticRouter,exports.Switch=Switch,exports.__HistoryContext=historyContext,exports.__RouterContext=context,exports.generatePath=generatePath,exports.matchPath=matchPath,exports.useHistory=useHistory,exports.useLocation=useLocation,exports.useParams=useParams,exports.useRouteMatch=useRouteMatch,exports.withRouter=withRouter;//# sourceMappingURL=react-router.min.js.map

/***/ }),
/* 10 */
/***/ (function(module, exports) {

	module.exports = React;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */if(process.env.NODE_ENV!=='production'){var ReactIs=__webpack_require__(12);// By explicitly using `prop-types` you are opting into new development behavior.
	// http://fb.me/prop-types-in-prod
	var throwOnDirectAccess=true;module.exports=__webpack_require__(15)(ReactIs.isElement,throwOnDirectAccess);}else{// By explicitly using `prop-types` you are opting into new production behavior.
	// http://fb.me/prop-types-in-prod
	module.exports=__webpack_require__(19)();}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';if(process.env.NODE_ENV==='production'){module.exports=__webpack_require__(13);}else{module.exports=__webpack_require__(14);}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ }),
/* 13 */
/***/ (function(module, exports) {

	/** @license React v16.13.1
	 * react-is.production.min.js
	 *
	 * Copyright (c) Facebook, Inc. and its affiliates.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */'use strict';var _typeof=typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"?function(obj){return typeof obj;}:function(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;};var b="function"===typeof Symbol&&Symbol.for,c=b?Symbol.for("react.element"):60103,d=b?Symbol.for("react.portal"):60106,e=b?Symbol.for("react.fragment"):60107,f=b?Symbol.for("react.strict_mode"):60108,g=b?Symbol.for("react.profiler"):60114,h=b?Symbol.for("react.provider"):60109,k=b?Symbol.for("react.context"):60110,l=b?Symbol.for("react.async_mode"):60111,m=b?Symbol.for("react.concurrent_mode"):60111,n=b?Symbol.for("react.forward_ref"):60112,p=b?Symbol.for("react.suspense"):60113,q=b?Symbol.for("react.suspense_list"):60120,r=b?Symbol.for("react.memo"):60115,t=b?Symbol.for("react.lazy"):60116,v=b?Symbol.for("react.block"):60121,w=b?Symbol.for("react.fundamental"):60117,x=b?Symbol.for("react.responder"):60118,y=b?Symbol.for("react.scope"):60119;function z(a){if("object"===(typeof a==="undefined"?"undefined":_typeof(a))&&null!==a){var u=a.$$typeof;switch(u){case c:switch(a=a.type,a){case l:case m:case e:case g:case f:case p:return a;default:switch(a=a&&a.$$typeof,a){case k:case n:case t:case r:case h:return a;default:return u;}}case d:return u;}}}function A(a){return z(a)===m;}exports.AsyncMode=l;exports.ConcurrentMode=m;exports.ContextConsumer=k;exports.ContextProvider=h;exports.Element=c;exports.ForwardRef=n;exports.Fragment=e;exports.Lazy=t;exports.Memo=r;exports.Portal=d;exports.Profiler=g;exports.StrictMode=f;exports.Suspense=p;exports.isAsyncMode=function(a){return A(a)||z(a)===l;};exports.isConcurrentMode=A;exports.isContextConsumer=function(a){return z(a)===k;};exports.isContextProvider=function(a){return z(a)===h;};exports.isElement=function(a){return"object"===(typeof a==="undefined"?"undefined":_typeof(a))&&null!==a&&a.$$typeof===c;};exports.isForwardRef=function(a){return z(a)===n;};exports.isFragment=function(a){return z(a)===e;};exports.isLazy=function(a){return z(a)===t;};exports.isMemo=function(a){return z(a)===r;};exports.isPortal=function(a){return z(a)===d;};exports.isProfiler=function(a){return z(a)===g;};exports.isStrictMode=function(a){return z(a)===f;};exports.isSuspense=function(a){return z(a)===p;};exports.isValidElementType=function(a){return"string"===typeof a||"function"===typeof a||a===e||a===m||a===g||a===f||a===p||a===q||"object"===(typeof a==="undefined"?"undefined":_typeof(a))&&null!==a&&(a.$$typeof===t||a.$$typeof===r||a.$$typeof===h||a.$$typeof===k||a.$$typeof===n||a.$$typeof===w||a.$$typeof===x||a.$$typeof===y||a.$$typeof===v);};exports.typeOf=z;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/** @license React v16.13.1
	 * react-is.development.js
	 *
	 * Copyright (c) Facebook, Inc. and its affiliates.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */'use strict';var _typeof=typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"?function(obj){return typeof obj;}:function(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;};if(process.env.NODE_ENV!=="production"){(function(){'use strict';// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
	// nor polyfill, then a plain number is used for performance.
	var hasSymbol=typeof Symbol==='function'&&Symbol.for;var REACT_ELEMENT_TYPE=hasSymbol?Symbol.for('react.element'):0xeac7;var REACT_PORTAL_TYPE=hasSymbol?Symbol.for('react.portal'):0xeaca;var REACT_FRAGMENT_TYPE=hasSymbol?Symbol.for('react.fragment'):0xeacb;var REACT_STRICT_MODE_TYPE=hasSymbol?Symbol.for('react.strict_mode'):0xeacc;var REACT_PROFILER_TYPE=hasSymbol?Symbol.for('react.profiler'):0xead2;var REACT_PROVIDER_TYPE=hasSymbol?Symbol.for('react.provider'):0xeacd;var REACT_CONTEXT_TYPE=hasSymbol?Symbol.for('react.context'):0xeace;// TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
	// (unstable) APIs that have been removed. Can we remove the symbols?
	var REACT_ASYNC_MODE_TYPE=hasSymbol?Symbol.for('react.async_mode'):0xeacf;var REACT_CONCURRENT_MODE_TYPE=hasSymbol?Symbol.for('react.concurrent_mode'):0xeacf;var REACT_FORWARD_REF_TYPE=hasSymbol?Symbol.for('react.forward_ref'):0xead0;var REACT_SUSPENSE_TYPE=hasSymbol?Symbol.for('react.suspense'):0xead1;var REACT_SUSPENSE_LIST_TYPE=hasSymbol?Symbol.for('react.suspense_list'):0xead8;var REACT_MEMO_TYPE=hasSymbol?Symbol.for('react.memo'):0xead3;var REACT_LAZY_TYPE=hasSymbol?Symbol.for('react.lazy'):0xead4;var REACT_BLOCK_TYPE=hasSymbol?Symbol.for('react.block'):0xead9;var REACT_FUNDAMENTAL_TYPE=hasSymbol?Symbol.for('react.fundamental'):0xead5;var REACT_RESPONDER_TYPE=hasSymbol?Symbol.for('react.responder'):0xead6;var REACT_SCOPE_TYPE=hasSymbol?Symbol.for('react.scope'):0xead7;function isValidElementType(type){return typeof type==='string'||typeof type==='function'||// Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
	type===REACT_FRAGMENT_TYPE||type===REACT_CONCURRENT_MODE_TYPE||type===REACT_PROFILER_TYPE||type===REACT_STRICT_MODE_TYPE||type===REACT_SUSPENSE_TYPE||type===REACT_SUSPENSE_LIST_TYPE||(typeof type==='undefined'?'undefined':_typeof(type))==='object'&&type!==null&&(type.$$typeof===REACT_LAZY_TYPE||type.$$typeof===REACT_MEMO_TYPE||type.$$typeof===REACT_PROVIDER_TYPE||type.$$typeof===REACT_CONTEXT_TYPE||type.$$typeof===REACT_FORWARD_REF_TYPE||type.$$typeof===REACT_FUNDAMENTAL_TYPE||type.$$typeof===REACT_RESPONDER_TYPE||type.$$typeof===REACT_SCOPE_TYPE||type.$$typeof===REACT_BLOCK_TYPE);}function typeOf(object){if((typeof object==='undefined'?'undefined':_typeof(object))==='object'&&object!==null){var $$typeof=object.$$typeof;switch($$typeof){case REACT_ELEMENT_TYPE:var type=object.type;switch(type){case REACT_ASYNC_MODE_TYPE:case REACT_CONCURRENT_MODE_TYPE:case REACT_FRAGMENT_TYPE:case REACT_PROFILER_TYPE:case REACT_STRICT_MODE_TYPE:case REACT_SUSPENSE_TYPE:return type;default:var $$typeofType=type&&type.$$typeof;switch($$typeofType){case REACT_CONTEXT_TYPE:case REACT_FORWARD_REF_TYPE:case REACT_LAZY_TYPE:case REACT_MEMO_TYPE:case REACT_PROVIDER_TYPE:return $$typeofType;default:return $$typeof;}}case REACT_PORTAL_TYPE:return $$typeof;}}return undefined;}// AsyncMode is deprecated along with isAsyncMode
	var AsyncMode=REACT_ASYNC_MODE_TYPE;var ConcurrentMode=REACT_CONCURRENT_MODE_TYPE;var ContextConsumer=REACT_CONTEXT_TYPE;var ContextProvider=REACT_PROVIDER_TYPE;var Element=REACT_ELEMENT_TYPE;var ForwardRef=REACT_FORWARD_REF_TYPE;var Fragment=REACT_FRAGMENT_TYPE;var Lazy=REACT_LAZY_TYPE;var Memo=REACT_MEMO_TYPE;var Portal=REACT_PORTAL_TYPE;var Profiler=REACT_PROFILER_TYPE;var StrictMode=REACT_STRICT_MODE_TYPE;var Suspense=REACT_SUSPENSE_TYPE;var hasWarnedAboutDeprecatedIsAsyncMode=false;// AsyncMode should be deprecated
	function isAsyncMode(object){{if(!hasWarnedAboutDeprecatedIsAsyncMode){hasWarnedAboutDeprecatedIsAsyncMode=true;// Using console['warn'] to evade Babel and ESLint
	console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, '+'and will be removed in React 17+. Update your code to use '+'ReactIs.isConcurrentMode() instead. It has the exact same API.');}}return isConcurrentMode(object)||typeOf(object)===REACT_ASYNC_MODE_TYPE;}function isConcurrentMode(object){return typeOf(object)===REACT_CONCURRENT_MODE_TYPE;}function isContextConsumer(object){return typeOf(object)===REACT_CONTEXT_TYPE;}function isContextProvider(object){return typeOf(object)===REACT_PROVIDER_TYPE;}function isElement(object){return(typeof object==='undefined'?'undefined':_typeof(object))==='object'&&object!==null&&object.$$typeof===REACT_ELEMENT_TYPE;}function isForwardRef(object){return typeOf(object)===REACT_FORWARD_REF_TYPE;}function isFragment(object){return typeOf(object)===REACT_FRAGMENT_TYPE;}function isLazy(object){return typeOf(object)===REACT_LAZY_TYPE;}function isMemo(object){return typeOf(object)===REACT_MEMO_TYPE;}function isPortal(object){return typeOf(object)===REACT_PORTAL_TYPE;}function isProfiler(object){return typeOf(object)===REACT_PROFILER_TYPE;}function isStrictMode(object){return typeOf(object)===REACT_STRICT_MODE_TYPE;}function isSuspense(object){return typeOf(object)===REACT_SUSPENSE_TYPE;}exports.AsyncMode=AsyncMode;exports.ConcurrentMode=ConcurrentMode;exports.ContextConsumer=ContextConsumer;exports.ContextProvider=ContextProvider;exports.Element=Element;exports.ForwardRef=ForwardRef;exports.Fragment=Fragment;exports.Lazy=Lazy;exports.Memo=Memo;exports.Portal=Portal;exports.Profiler=Profiler;exports.StrictMode=StrictMode;exports.Suspense=Suspense;exports.isAsyncMode=isAsyncMode;exports.isConcurrentMode=isConcurrentMode;exports.isContextConsumer=isContextConsumer;exports.isContextProvider=isContextProvider;exports.isElement=isElement;exports.isForwardRef=isForwardRef;exports.isFragment=isFragment;exports.isLazy=isLazy;exports.isMemo=isMemo;exports.isPortal=isPortal;exports.isProfiler=isProfiler;exports.isStrictMode=isStrictMode;exports.isSuspense=isSuspense;exports.isValidElementType=isValidElementType;exports.typeOf=typeOf;})();}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */'use strict';var _typeof=typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"?function(obj){return typeof obj;}:function(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;};var ReactIs=__webpack_require__(12);var assign=__webpack_require__(16);var ReactPropTypesSecret=__webpack_require__(17);var checkPropTypes=__webpack_require__(18);var has=Function.call.bind(Object.prototype.hasOwnProperty);var printWarning=function printWarning(){};if(process.env.NODE_ENV!=='production'){printWarning=function printWarning(text){var message='Warning: '+text;if(typeof console!=='undefined'){console.error(message);}try{// --- Welcome to debugging React ---
	// This error was thrown as a convenience so that you can use this stack
	// to find the callsite that caused this warning to fire.
	throw new Error(message);}catch(x){}};}function emptyFunctionThatReturnsNull(){return null;}module.exports=function(isValidElement,throwOnDirectAccess){/* global Symbol */var ITERATOR_SYMBOL=typeof Symbol==='function'&&Symbol.iterator;var FAUX_ITERATOR_SYMBOL='@@iterator';// Before Symbol spec.
	/**
	   * Returns the iterator method function contained on the iterable object.
	   *
	   * Be sure to invoke the function with the iterable as context:
	   *
	   *     var iteratorFn = getIteratorFn(myIterable);
	   *     if (iteratorFn) {
	   *       var iterator = iteratorFn.call(myIterable);
	   *       ...
	   *     }
	   *
	   * @param {?object} maybeIterable
	   * @return {?function}
	   */function getIteratorFn(maybeIterable){var iteratorFn=maybeIterable&&(ITERATOR_SYMBOL&&maybeIterable[ITERATOR_SYMBOL]||maybeIterable[FAUX_ITERATOR_SYMBOL]);if(typeof iteratorFn==='function'){return iteratorFn;}}/**
	   * Collection of methods that allow declaration and validation of props that are
	   * supplied to React components. Example usage:
	   *
	   *   var Props = require('ReactPropTypes');
	   *   var MyArticle = React.createClass({
	   *     propTypes: {
	   *       // An optional string prop named "description".
	   *       description: Props.string,
	   *
	   *       // A required enum prop named "category".
	   *       category: Props.oneOf(['News','Photos']).isRequired,
	   *
	   *       // A prop named "dialog" that requires an instance of Dialog.
	   *       dialog: Props.instanceOf(Dialog).isRequired
	   *     },
	   *     render: function() { ... }
	   *   });
	   *
	   * A more formal specification of how these methods are used:
	   *
	   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
	   *   decl := ReactPropTypes.{type}(.isRequired)?
	   *
	   * Each and every declaration produces a function with the same signature. This
	   * allows the creation of custom validation functions. For example:
	   *
	   *  var MyLink = React.createClass({
	   *    propTypes: {
	   *      // An optional string or URI prop named "href".
	   *      href: function(props, propName, componentName) {
	   *        var propValue = props[propName];
	   *        if (propValue != null && typeof propValue !== 'string' &&
	   *            !(propValue instanceof URI)) {
	   *          return new Error(
	   *            'Expected a string or an URI for ' + propName + ' in ' +
	   *            componentName
	   *          );
	   *        }
	   *      }
	   *    },
	   *    render: function() {...}
	   *  });
	   *
	   * @internal
	   */var ANONYMOUS='<<anonymous>>';// Important!
	// Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
	var ReactPropTypes={array:createPrimitiveTypeChecker('array'),bool:createPrimitiveTypeChecker('boolean'),func:createPrimitiveTypeChecker('function'),number:createPrimitiveTypeChecker('number'),object:createPrimitiveTypeChecker('object'),string:createPrimitiveTypeChecker('string'),symbol:createPrimitiveTypeChecker('symbol'),any:createAnyTypeChecker(),arrayOf:createArrayOfTypeChecker,element:createElementTypeChecker(),elementType:createElementTypeTypeChecker(),instanceOf:createInstanceTypeChecker,node:createNodeChecker(),objectOf:createObjectOfTypeChecker,oneOf:createEnumTypeChecker,oneOfType:createUnionTypeChecker,shape:createShapeTypeChecker,exact:createStrictShapeTypeChecker};/**
	   * inlined Object.is polyfill to avoid requiring consumers ship their own
	   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
	   *//*eslint-disable no-self-compare*/function is(x,y){// SameValue algorithm
	if(x===y){// Steps 1-5, 7-10
	// Steps 6.b-6.e: +0 != -0
	return x!==0||1/x===1/y;}else{// Step 6.a: NaN == NaN
	return x!==x&&y!==y;}}/*eslint-enable no-self-compare*//**
	   * We use an Error-like object for backward compatibility as people may call
	   * PropTypes directly and inspect their output. However, we don't use real
	   * Errors anymore. We don't inspect their stack anyway, and creating them
	   * is prohibitively expensive if they are created too often, such as what
	   * happens in oneOfType() for any type before the one that matched.
	   */function PropTypeError(message){this.message=message;this.stack='';}// Make `instanceof Error` still work for returned errors.
	PropTypeError.prototype=Error.prototype;function createChainableTypeChecker(validate){if(process.env.NODE_ENV!=='production'){var manualPropTypeCallCache={};var manualPropTypeWarningCount=0;}function checkType(isRequired,props,propName,componentName,location,propFullName,secret){componentName=componentName||ANONYMOUS;propFullName=propFullName||propName;if(secret!==ReactPropTypesSecret){if(throwOnDirectAccess){// New behavior only for users of `prop-types` package
	var err=new Error('Calling PropTypes validators directly is not supported by the `prop-types` package. '+'Use `PropTypes.checkPropTypes()` to call them. '+'Read more at http://fb.me/use-check-prop-types');err.name='Invariant Violation';throw err;}else if(process.env.NODE_ENV!=='production'&&typeof console!=='undefined'){// Old behavior for people using React.PropTypes
	var cacheKey=componentName+':'+propName;if(!manualPropTypeCallCache[cacheKey]&&// Avoid spamming the console because they are often not actionable except for lib authors
	manualPropTypeWarningCount<3){printWarning('You are manually calling a React.PropTypes validation '+'function for the `'+propFullName+'` prop on `'+componentName+'`. This is deprecated '+'and will throw in the standalone `prop-types` package. '+'You may be seeing this warning due to a third-party PropTypes '+'library. See https://fb.me/react-warning-dont-call-proptypes '+'for details.');manualPropTypeCallCache[cacheKey]=true;manualPropTypeWarningCount++;}}}if(props[propName]==null){if(isRequired){if(props[propName]===null){return new PropTypeError('The '+location+' `'+propFullName+'` is marked as required '+('in `'+componentName+'`, but its value is `null`.'));}return new PropTypeError('The '+location+' `'+propFullName+'` is marked as required in '+('`'+componentName+'`, but its value is `undefined`.'));}return null;}else{return validate(props,propName,componentName,location,propFullName);}}var chainedCheckType=checkType.bind(null,false);chainedCheckType.isRequired=checkType.bind(null,true);return chainedCheckType;}function createPrimitiveTypeChecker(expectedType){function validate(props,propName,componentName,location,propFullName,secret){var propValue=props[propName];var propType=getPropType(propValue);if(propType!==expectedType){// `propValue` being instance of, say, date/regexp, pass the 'object'
	// check, but we can offer a more precise error message here rather than
	// 'of type `object`'.
	var preciseType=getPreciseType(propValue);return new PropTypeError('Invalid '+location+' `'+propFullName+'` of type '+('`'+preciseType+'` supplied to `'+componentName+'`, expected ')+('`'+expectedType+'`.'));}return null;}return createChainableTypeChecker(validate);}function createAnyTypeChecker(){return createChainableTypeChecker(emptyFunctionThatReturnsNull);}function createArrayOfTypeChecker(typeChecker){function validate(props,propName,componentName,location,propFullName){if(typeof typeChecker!=='function'){return new PropTypeError('Property `'+propFullName+'` of component `'+componentName+'` has invalid PropType notation inside arrayOf.');}var propValue=props[propName];if(!Array.isArray(propValue)){var propType=getPropType(propValue);return new PropTypeError('Invalid '+location+' `'+propFullName+'` of type '+('`'+propType+'` supplied to `'+componentName+'`, expected an array.'));}for(var i=0;i<propValue.length;i++){var error=typeChecker(propValue,i,componentName,location,propFullName+'['+i+']',ReactPropTypesSecret);if(error instanceof Error){return error;}}return null;}return createChainableTypeChecker(validate);}function createElementTypeChecker(){function validate(props,propName,componentName,location,propFullName){var propValue=props[propName];if(!isValidElement(propValue)){var propType=getPropType(propValue);return new PropTypeError('Invalid '+location+' `'+propFullName+'` of type '+('`'+propType+'` supplied to `'+componentName+'`, expected a single ReactElement.'));}return null;}return createChainableTypeChecker(validate);}function createElementTypeTypeChecker(){function validate(props,propName,componentName,location,propFullName){var propValue=props[propName];if(!ReactIs.isValidElementType(propValue)){var propType=getPropType(propValue);return new PropTypeError('Invalid '+location+' `'+propFullName+'` of type '+('`'+propType+'` supplied to `'+componentName+'`, expected a single ReactElement type.'));}return null;}return createChainableTypeChecker(validate);}function createInstanceTypeChecker(expectedClass){function validate(props,propName,componentName,location,propFullName){if(!(props[propName]instanceof expectedClass)){var expectedClassName=expectedClass.name||ANONYMOUS;var actualClassName=getClassName(props[propName]);return new PropTypeError('Invalid '+location+' `'+propFullName+'` of type '+('`'+actualClassName+'` supplied to `'+componentName+'`, expected ')+('instance of `'+expectedClassName+'`.'));}return null;}return createChainableTypeChecker(validate);}function createEnumTypeChecker(expectedValues){if(!Array.isArray(expectedValues)){if(process.env.NODE_ENV!=='production'){if(arguments.length>1){printWarning('Invalid arguments supplied to oneOf, expected an array, got '+arguments.length+' arguments. '+'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).');}else{printWarning('Invalid argument supplied to oneOf, expected an array.');}}return emptyFunctionThatReturnsNull;}function validate(props,propName,componentName,location,propFullName){var propValue=props[propName];for(var i=0;i<expectedValues.length;i++){if(is(propValue,expectedValues[i])){return null;}}var valuesString=JSON.stringify(expectedValues,function replacer(key,value){var type=getPreciseType(value);if(type==='symbol'){return String(value);}return value;});return new PropTypeError('Invalid '+location+' `'+propFullName+'` of value `'+String(propValue)+'` '+('supplied to `'+componentName+'`, expected one of '+valuesString+'.'));}return createChainableTypeChecker(validate);}function createObjectOfTypeChecker(typeChecker){function validate(props,propName,componentName,location,propFullName){if(typeof typeChecker!=='function'){return new PropTypeError('Property `'+propFullName+'` of component `'+componentName+'` has invalid PropType notation inside objectOf.');}var propValue=props[propName];var propType=getPropType(propValue);if(propType!=='object'){return new PropTypeError('Invalid '+location+' `'+propFullName+'` of type '+('`'+propType+'` supplied to `'+componentName+'`, expected an object.'));}for(var key in propValue){if(has(propValue,key)){var error=typeChecker(propValue,key,componentName,location,propFullName+'.'+key,ReactPropTypesSecret);if(error instanceof Error){return error;}}}return null;}return createChainableTypeChecker(validate);}function createUnionTypeChecker(arrayOfTypeCheckers){if(!Array.isArray(arrayOfTypeCheckers)){process.env.NODE_ENV!=='production'?printWarning('Invalid argument supplied to oneOfType, expected an instance of array.'):void 0;return emptyFunctionThatReturnsNull;}for(var i=0;i<arrayOfTypeCheckers.length;i++){var checker=arrayOfTypeCheckers[i];if(typeof checker!=='function'){printWarning('Invalid argument supplied to oneOfType. Expected an array of check functions, but '+'received '+getPostfixForTypeWarning(checker)+' at index '+i+'.');return emptyFunctionThatReturnsNull;}}function validate(props,propName,componentName,location,propFullName){for(var i=0;i<arrayOfTypeCheckers.length;i++){var checker=arrayOfTypeCheckers[i];if(checker(props,propName,componentName,location,propFullName,ReactPropTypesSecret)==null){return null;}}return new PropTypeError('Invalid '+location+' `'+propFullName+'` supplied to '+('`'+componentName+'`.'));}return createChainableTypeChecker(validate);}function createNodeChecker(){function validate(props,propName,componentName,location,propFullName){if(!isNode(props[propName])){return new PropTypeError('Invalid '+location+' `'+propFullName+'` supplied to '+('`'+componentName+'`, expected a ReactNode.'));}return null;}return createChainableTypeChecker(validate);}function createShapeTypeChecker(shapeTypes){function validate(props,propName,componentName,location,propFullName){var propValue=props[propName];var propType=getPropType(propValue);if(propType!=='object'){return new PropTypeError('Invalid '+location+' `'+propFullName+'` of type `'+propType+'` '+('supplied to `'+componentName+'`, expected `object`.'));}for(var key in shapeTypes){var checker=shapeTypes[key];if(!checker){continue;}var error=checker(propValue,key,componentName,location,propFullName+'.'+key,ReactPropTypesSecret);if(error){return error;}}return null;}return createChainableTypeChecker(validate);}function createStrictShapeTypeChecker(shapeTypes){function validate(props,propName,componentName,location,propFullName){var propValue=props[propName];var propType=getPropType(propValue);if(propType!=='object'){return new PropTypeError('Invalid '+location+' `'+propFullName+'` of type `'+propType+'` '+('supplied to `'+componentName+'`, expected `object`.'));}// We need to check all keys in case some are required but missing from
	// props.
	var allKeys=assign({},props[propName],shapeTypes);for(var key in allKeys){var checker=shapeTypes[key];if(!checker){return new PropTypeError('Invalid '+location+' `'+propFullName+'` key `'+key+'` supplied to `'+componentName+'`.'+'\nBad object: '+JSON.stringify(props[propName],null,'  ')+'\nValid keys: '+JSON.stringify(Object.keys(shapeTypes),null,'  '));}var error=checker(propValue,key,componentName,location,propFullName+'.'+key,ReactPropTypesSecret);if(error){return error;}}return null;}return createChainableTypeChecker(validate);}function isNode(propValue){switch(typeof propValue==='undefined'?'undefined':_typeof(propValue)){case'number':case'string':case'undefined':return true;case'boolean':return!propValue;case'object':if(Array.isArray(propValue)){return propValue.every(isNode);}if(propValue===null||isValidElement(propValue)){return true;}var iteratorFn=getIteratorFn(propValue);if(iteratorFn){var iterator=iteratorFn.call(propValue);var step;if(iteratorFn!==propValue.entries){while(!(step=iterator.next()).done){if(!isNode(step.value)){return false;}}}else{// Iterator will provide entry [k,v] tuples rather than values.
	while(!(step=iterator.next()).done){var entry=step.value;if(entry){if(!isNode(entry[1])){return false;}}}}}else{return false;}return true;default:return false;}}function isSymbol(propType,propValue){// Native Symbol.
	if(propType==='symbol'){return true;}// falsy value can't be a Symbol
	if(!propValue){return false;}// 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
	if(propValue['@@toStringTag']==='Symbol'){return true;}// Fallback for non-spec compliant Symbols which are polyfilled.
	if(typeof Symbol==='function'&&propValue instanceof Symbol){return true;}return false;}// Equivalent of `typeof` but with special handling for array and regexp.
	function getPropType(propValue){var propType=typeof propValue==='undefined'?'undefined':_typeof(propValue);if(Array.isArray(propValue)){return'array';}if(propValue instanceof RegExp){// Old webkits (at least until Android 4.0) return 'function' rather than
	// 'object' for typeof a RegExp. We'll normalize this here so that /bla/
	// passes PropTypes.object.
	return'object';}if(isSymbol(propType,propValue)){return'symbol';}return propType;}// This handles more types than `getPropType`. Only used for error messages.
	// See `createPrimitiveTypeChecker`.
	function getPreciseType(propValue){if(typeof propValue==='undefined'||propValue===null){return''+propValue;}var propType=getPropType(propValue);if(propType==='object'){if(propValue instanceof Date){return'date';}else if(propValue instanceof RegExp){return'regexp';}}return propType;}// Returns a string that is postfixed to a warning about an invalid type.
	// For example, "undefined" or "of type array"
	function getPostfixForTypeWarning(value){var type=getPreciseType(value);switch(type){case'array':case'object':return'an '+type;case'boolean':case'date':case'regexp':return'a '+type;default:return type;}}// Returns class name of the object, if any.
	function getClassName(propValue){if(!propValue.constructor||!propValue.constructor.name){return ANONYMOUS;}return propValue.constructor.name;}ReactPropTypes.checkPropTypes=checkPropTypes;ReactPropTypes.resetWarningCache=checkPropTypes.resetWarningCache;ReactPropTypes.PropTypes=ReactPropTypes;return ReactPropTypes;};
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ }),
/* 16 */
/***/ (function(module, exports) {

	/*
	object-assign
	(c) Sindre Sorhus
	@license MIT
	*/'use strict';/* eslint-disable no-unused-vars */var getOwnPropertySymbols=Object.getOwnPropertySymbols;var hasOwnProperty=Object.prototype.hasOwnProperty;var propIsEnumerable=Object.prototype.propertyIsEnumerable;function toObject(val){if(val===null||val===undefined){throw new TypeError('Object.assign cannot be called with null or undefined');}return Object(val);}function shouldUseNative(){try{if(!Object.assign){return false;}// Detect buggy property enumeration order in older V8 versions.
	// https://bugs.chromium.org/p/v8/issues/detail?id=4118
	var test1=new String('abc');// eslint-disable-line no-new-wrappers
	test1[5]='de';if(Object.getOwnPropertyNames(test1)[0]==='5'){return false;}// https://bugs.chromium.org/p/v8/issues/detail?id=3056
	var test2={};for(var i=0;i<10;i++){test2['_'+String.fromCharCode(i)]=i;}var order2=Object.getOwnPropertyNames(test2).map(function(n){return test2[n];});if(order2.join('')!=='0123456789'){return false;}// https://bugs.chromium.org/p/v8/issues/detail?id=3056
	var test3={};'abcdefghijklmnopqrst'.split('').forEach(function(letter){test3[letter]=letter;});if(Object.keys(Object.assign({},test3)).join('')!=='abcdefghijklmnopqrst'){return false;}return true;}catch(err){// We don't expect any of the above to throw, but better to be safe.
	return false;}}module.exports=shouldUseNative()?Object.assign:function(target,source){var from;var to=toObject(target);var symbols;for(var s=1;s<arguments.length;s++){from=Object(arguments[s]);for(var key in from){if(hasOwnProperty.call(from,key)){to[key]=from[key];}}if(getOwnPropertySymbols){symbols=getOwnPropertySymbols(from);for(var i=0;i<symbols.length;i++){if(propIsEnumerable.call(from,symbols[i])){to[symbols[i]]=from[symbols[i]];}}}}return to;};

/***/ }),
/* 17 */
/***/ (function(module, exports) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */'use strict';var ReactPropTypesSecret='SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';module.exports=ReactPropTypesSecret;

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */'use strict';var _typeof=typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"?function(obj){return typeof obj;}:function(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;};var printWarning=function printWarning(){};if(process.env.NODE_ENV!=='production'){var ReactPropTypesSecret=__webpack_require__(17);var loggedTypeFailures={};var has=Function.call.bind(Object.prototype.hasOwnProperty);printWarning=function printWarning(text){var message='Warning: '+text;if(typeof console!=='undefined'){console.error(message);}try{// --- Welcome to debugging React ---
	// This error was thrown as a convenience so that you can use this stack
	// to find the callsite that caused this warning to fire.
	throw new Error(message);}catch(x){}};}/**
	 * Assert that the values match with the type specs.
	 * Error messages are memorized and will only be shown once.
	 *
	 * @param {object} typeSpecs Map of name to a ReactPropType
	 * @param {object} values Runtime values that need to be type-checked
	 * @param {string} location e.g. "prop", "context", "child context"
	 * @param {string} componentName Name of the component for error messages.
	 * @param {?Function} getStack Returns the component stack.
	 * @private
	 */function checkPropTypes(typeSpecs,values,location,componentName,getStack){if(process.env.NODE_ENV!=='production'){for(var typeSpecName in typeSpecs){if(has(typeSpecs,typeSpecName)){var error;// Prop type validation may throw. In case they do, we don't want to
	// fail the render phase where it didn't fail before. So we log it.
	// After these have been cleaned up, we'll let them throw.
	try{// This is intentionally an invariant that gets caught. It's the same
	// behavior as without this statement except with a better message.
	if(typeof typeSpecs[typeSpecName]!=='function'){var err=Error((componentName||'React class')+': '+location+' type `'+typeSpecName+'` is invalid; '+'it must be a function, usually from the `prop-types` package, but received `'+_typeof(typeSpecs[typeSpecName])+'`.');err.name='Invariant Violation';throw err;}error=typeSpecs[typeSpecName](values,typeSpecName,componentName,location,null,ReactPropTypesSecret);}catch(ex){error=ex;}if(error&&!(error instanceof Error)){printWarning((componentName||'React class')+': type specification of '+location+' `'+typeSpecName+'` is invalid; the type checker '+'function must return `null` or an `Error` but returned a '+(typeof error==='undefined'?'undefined':_typeof(error))+'. '+'You may have forgotten to pass an argument to the type checker '+'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and '+'shape all require an argument).');}if(error instanceof Error&&!(error.message in loggedTypeFailures)){// Only monitor this failure once because there tends to be a lot of the
	// same error.
	loggedTypeFailures[error.message]=true;var stack=getStack?getStack():'';printWarning('Failed '+location+' type: '+error.message+(stack!=null?stack:''));}}}}}/**
	 * Resets warning cache when testing.
	 *
	 * @private
	 */checkPropTypes.resetWarningCache=function(){if(process.env.NODE_ENV!=='production'){loggedTypeFailures={};}};module.exports=checkPropTypes;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */'use strict';var ReactPropTypesSecret=__webpack_require__(17);function emptyFunction(){}function emptyFunctionWithReset(){}emptyFunctionWithReset.resetWarningCache=emptyFunction;module.exports=function(){function shim(props,propName,componentName,location,propFullName,secret){if(secret===ReactPropTypesSecret){// It is still safe when called from React.
	return;}var err=new Error('Calling PropTypes validators directly is not supported by the `prop-types` package. '+'Use PropTypes.checkPropTypes() to call them. '+'Read more at http://fb.me/use-check-prop-types');err.name='Invariant Violation';throw err;};shim.isRequired=shim;function getShim(){return shim;};// Important!
	// Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
	var ReactPropTypes={array:shim,bool:shim,func:shim,number:shim,object:shim,string:shim,symbol:shim,any:shim,arrayOf:getShim,element:shim,elementType:shim,instanceOf:getShim,node:shim,objectOf:getShim,oneOf:getShim,oneOfType:getShim,shape:getShim,exact:getShim,checkPropTypes:emptyFunctionWithReset,resetWarningCache:emptyFunction};ReactPropTypes.PropTypes=ReactPropTypes;return ReactPropTypes;};

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';if(process.env.NODE_ENV==='production'){module.exports=__webpack_require__(21);}else{module.exports=__webpack_require__(30);}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";var _typeof=typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"?function(obj){return typeof obj;}:function(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;};function _interopDefault(t){return t&&"object"==(typeof t==="undefined"?"undefined":_typeof(t))&&"default"in t?t.default:t;}Object.defineProperty(exports,"__esModule",{value:!0});var resolvePathname=_interopDefault(__webpack_require__(22)),valueEqual=_interopDefault(__webpack_require__(25));__webpack_require__(28);var invariant=_interopDefault(__webpack_require__(29));function _extends(){return(_extends=Object.assign||function(t){for(var n=1;n<arguments.length;n++){var e=arguments[n];for(var a in e){Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a]);}}return t;}).apply(this,arguments);}function addLeadingSlash(t){return"/"===t.charAt(0)?t:"/"+t;}function stripLeadingSlash(t){return"/"===t.charAt(0)?t.substr(1):t;}function hasBasename(t,n){return 0===t.toLowerCase().indexOf(n.toLowerCase())&&-1!=="/?#".indexOf(t.charAt(n.length));}function stripBasename(t,n){return hasBasename(t,n)?t.substr(n.length):t;}function stripTrailingSlash(t){return"/"===t.charAt(t.length-1)?t.slice(0,-1):t;}function parsePath(t){var n=t||"/",e="",a="",r=n.indexOf("#");-1!==r&&(a=n.substr(r),n=n.substr(0,r));var o=n.indexOf("?");return-1!==o&&(e=n.substr(o),n=n.substr(0,o)),{pathname:n,search:"?"===e?"":e,hash:"#"===a?"":a};}function createPath(t){var n=t.pathname,e=t.search,a=t.hash,r=n||"/";return e&&"?"!==e&&(r+="?"===e.charAt(0)?e:"?"+e),a&&"#"!==a&&(r+="#"===a.charAt(0)?a:"#"+a),r;}function createLocation(t,n,e,a){var r;"string"==typeof t?(r=parsePath(t)).state=n:(void 0===(r=_extends({},t)).pathname&&(r.pathname=""),r.search?"?"!==r.search.charAt(0)&&(r.search="?"+r.search):r.search="",r.hash?"#"!==r.hash.charAt(0)&&(r.hash="#"+r.hash):r.hash="",void 0!==n&&void 0===r.state&&(r.state=n));try{r.pathname=decodeURI(r.pathname);}catch(t){throw t instanceof URIError?new URIError('Pathname "'+r.pathname+'" could not be decoded. This is likely caused by an invalid percent-encoding.'):t;}return e&&(r.key=e),a?r.pathname?"/"!==r.pathname.charAt(0)&&(r.pathname=resolvePathname(r.pathname,a.pathname)):r.pathname=a.pathname:r.pathname||(r.pathname="/"),r;}function locationsAreEqual(t,n){return t.pathname===n.pathname&&t.search===n.search&&t.hash===n.hash&&t.key===n.key&&valueEqual(t.state,n.state);}function createTransitionManager(){var o=null;var a=[];return{setPrompt:function setPrompt(t){return o=t,function(){o===t&&(o=null);};},confirmTransitionTo:function confirmTransitionTo(t,n,e,a){if(null!=o){var r="function"==typeof o?o(t,n):o;"string"==typeof r?"function"==typeof e?e(r,a):a(!0):a(!1!==r);}else a(!0);},appendListener:function appendListener(t){var n=!0;function e(){n&&t.apply(void 0,arguments);}return a.push(e),function(){n=!1,a=a.filter(function(t){return t!==e;});};},notifyListeners:function notifyListeners(){for(var t=arguments.length,n=new Array(t),e=0;e<t;e++){n[e]=arguments[e];}a.forEach(function(t){return t.apply(void 0,n);});}};}var canUseDOM=!("undefined"==typeof window||!window.document||!window.document.createElement);function getConfirmation(t,n){n(window.confirm(t));}function supportsHistory(){var t=window.navigator.userAgent;return(-1===t.indexOf("Android 2.")&&-1===t.indexOf("Android 4.0")||-1===t.indexOf("Mobile Safari")||-1!==t.indexOf("Chrome")||-1!==t.indexOf("Windows Phone"))&&window.history&&"pushState"in window.history;}function supportsPopStateOnHashChange(){return-1===window.navigator.userAgent.indexOf("Trident");}function supportsGoWithoutReloadUsingHash(){return-1===window.navigator.userAgent.indexOf("Firefox");}function isExtraneousPopstateEvent(t){return void 0===t.state&&-1===navigator.userAgent.indexOf("CriOS");}var PopStateEvent="popstate",HashChangeEvent="hashchange";function getHistoryState(){try{return window.history.state||{};}catch(t){return{};}}function createBrowserHistory(t){void 0===t&&(t={}),canUseDOM||invariant(!1);var s=window.history,c=supportsHistory(),n=!supportsPopStateOnHashChange(),e=t,a=e.forceRefresh,h=void 0!==a&&a,r=e.getUserConfirmation,u=void 0===r?getConfirmation:r,o=e.keyLength,i=void 0===o?6:o,f=t.basename?stripTrailingSlash(addLeadingSlash(t.basename)):"";function l(t){var n=t||{},e=n.key,a=n.state,r=window.location,o=r.pathname+r.search+r.hash;return f&&(o=stripBasename(o,f)),createLocation(o,a,e);}function d(){return Math.random().toString(36).substr(2,i);}var v=createTransitionManager();function p(t){_extends(T,t),T.length=s.length,v.notifyListeners(T.location,T.action);}function g(t){isExtraneousPopstateEvent(t)||w(l(t.state));}function P(){w(l(getHistoryState()));}var m=!1;function w(n){if(m)m=!1,p();else{v.confirmTransitionTo(n,"POP",u,function(t){t?p({action:"POP",location:n}):function(t){var n=T.location,e=H.indexOf(n.key);-1===e&&(e=0);var a=H.indexOf(t.key);-1===a&&(a=0);var r=e-a;r&&(m=!0,L(r));}(n);});}}var y=l(getHistoryState()),H=[y.key];function x(t){return f+createPath(t);}function L(t){s.go(t);}var O=0;function E(t){1===(O+=t)&&1===t?(window.addEventListener(PopStateEvent,g),n&&window.addEventListener(HashChangeEvent,P)):0===O&&(window.removeEventListener(PopStateEvent,g),n&&window.removeEventListener(HashChangeEvent,P));}var S=!1;var T={length:s.length,action:"POP",location:y,createHref:x,push:function push(t,n){var i=createLocation(t,n,d(),T.location);v.confirmTransitionTo(i,"PUSH",u,function(t){if(t){var n=x(i),e=i.key,a=i.state;if(c){if(s.pushState({key:e,state:a},null,n),h)window.location.href=n;else{var r=H.indexOf(T.location.key),o=H.slice(0,r+1);o.push(i.key),H=o,p({action:"PUSH",location:i});}}else window.location.href=n;}});},replace:function replace(t,n){var o="REPLACE",i=createLocation(t,n,d(),T.location);v.confirmTransitionTo(i,o,u,function(t){if(t){var n=x(i),e=i.key,a=i.state;if(c){if(s.replaceState({key:e,state:a},null,n),h)window.location.replace(n);else{var r=H.indexOf(T.location.key);-1!==r&&(H[r]=i.key),p({action:o,location:i});}}else window.location.replace(n);}});},go:L,goBack:function goBack(){L(-1);},goForward:function goForward(){L(1);},block:function block(t){void 0===t&&(t=!1);var n=v.setPrompt(t);return S||(E(1),S=!0),function(){return S&&(S=!1,E(-1)),n();};},listen:function listen(t){var n=v.appendListener(t);return E(1),function(){E(-1),n();};}};return T;}var HashChangeEvent$1="hashchange",HashPathCoders={hashbang:{encodePath:function encodePath(t){return"!"===t.charAt(0)?t:"!/"+stripLeadingSlash(t);},decodePath:function decodePath(t){return"!"===t.charAt(0)?t.substr(1):t;}},noslash:{encodePath:stripLeadingSlash,decodePath:addLeadingSlash},slash:{encodePath:addLeadingSlash,decodePath:addLeadingSlash}};function stripHash(t){var n=t.indexOf("#");return-1===n?t:t.slice(0,n);}function getHashPath(){var t=window.location.href,n=t.indexOf("#");return-1===n?"":t.substring(n+1);}function pushHashPath(t){window.location.hash=t;}function replaceHashPath(t){window.location.replace(stripHash(window.location.href)+"#"+t);}function createHashHistory(t){void 0===t&&(t={}),canUseDOM||invariant(!1);var n=window.history,e=(supportsGoWithoutReloadUsingHash(),t),a=e.getUserConfirmation,i=void 0===a?getConfirmation:a,r=e.hashType,o=void 0===r?"slash":r,s=t.basename?stripTrailingSlash(addLeadingSlash(t.basename)):"",c=HashPathCoders[o],h=c.encodePath,u=c.decodePath;function f(){var t=u(getHashPath());return s&&(t=stripBasename(t,s)),createLocation(t);}var l=createTransitionManager();function d(t){_extends(E,t),E.length=n.length,l.notifyListeners(E.location,E.action);}var v=!1,p=null;function g(){var t=getHashPath(),n=h(t);if(t!==n)replaceHashPath(n);else{var e=f(),a=E.location;if(!v&&function(t,n){return t.pathname===n.pathname&&t.search===n.search&&t.hash===n.hash;}(a,e))return;if(p===createPath(e))return;p=null,function(n){if(v)v=!1,d();else{l.confirmTransitionTo(n,"POP",i,function(t){t?d({action:"POP",location:n}):function(t){var n=E.location,e=y.lastIndexOf(createPath(n));-1===e&&(e=0);var a=y.lastIndexOf(createPath(t));-1===a&&(a=0);var r=e-a;r&&(v=!0,H(r));}(n);});}}(e);}}var P=getHashPath(),m=h(P);P!==m&&replaceHashPath(m);var w=f(),y=[createPath(w)];function H(t){n.go(t);}var x=0;function L(t){1===(x+=t)&&1===t?window.addEventListener(HashChangeEvent$1,g):0===x&&window.removeEventListener(HashChangeEvent$1,g);}var O=!1;var E={length:n.length,action:"POP",location:w,createHref:function createHref(t){var n=document.querySelector("base"),e="";return n&&n.getAttribute("href")&&(e=stripHash(window.location.href)),e+"#"+h(s+createPath(t));},push:function push(t,n){var o=createLocation(t,void 0,void 0,E.location);l.confirmTransitionTo(o,"PUSH",i,function(t){if(t){var n=createPath(o),e=h(s+n);if(getHashPath()!==e){p=n,pushHashPath(e);var a=y.lastIndexOf(createPath(E.location)),r=y.slice(0,a+1);r.push(n),y=r,d({action:"PUSH",location:o});}else d();}});},replace:function replace(t,n){var r="REPLACE",o=createLocation(t,void 0,void 0,E.location);l.confirmTransitionTo(o,r,i,function(t){if(t){var n=createPath(o),e=h(s+n);getHashPath()!==e&&(p=n,replaceHashPath(e));var a=y.indexOf(createPath(E.location));-1!==a&&(y[a]=n),d({action:r,location:o});}});},go:H,goBack:function goBack(){H(-1);},goForward:function goForward(){H(1);},block:function block(t){void 0===t&&(t=!1);var n=l.setPrompt(t);return O||(L(1),O=!0),function(){return O&&(O=!1,L(-1)),n();};},listen:function listen(t){var n=l.appendListener(t);return L(1),function(){L(-1),n();};}};return E;}function clamp(t,n,e){return Math.min(Math.max(t,n),e);}function createMemoryHistory(t){void 0===t&&(t={});var n=t,r=n.getUserConfirmation,e=n.initialEntries,a=void 0===e?["/"]:e,o=n.initialIndex,i=void 0===o?0:o,s=n.keyLength,c=void 0===s?6:s,h=createTransitionManager();function u(t){_extends(g,t),g.length=g.entries.length,h.notifyListeners(g.location,g.action);}function f(){return Math.random().toString(36).substr(2,c);}var l=clamp(i,0,a.length-1),d=a.map(function(t){return createLocation(t,void 0,"string"==typeof t?f():t.key||f());}),v=createPath;function p(t){var n=clamp(g.index+t,0,g.entries.length-1),e=g.entries[n];h.confirmTransitionTo(e,"POP",r,function(t){t?u({action:"POP",location:e,index:n}):u();});}var g={length:d.length,action:"POP",location:d[l],index:l,entries:d,createHref:v,push:function push(t,n){var a=createLocation(t,n,f(),g.location);h.confirmTransitionTo(a,"PUSH",r,function(t){if(t){var n=g.index+1,e=g.entries.slice(0);e.length>n?e.splice(n,e.length-n,a):e.push(a),u({action:"PUSH",location:a,index:n,entries:e});}});},replace:function replace(t,n){var e="REPLACE",a=createLocation(t,n,f(),g.location);h.confirmTransitionTo(a,e,r,function(t){t&&(g.entries[g.index]=a,u({action:e,location:a}));});},go:p,goBack:function goBack(){p(-1);},goForward:function goForward(){p(1);},canGo:function canGo(t){var n=g.index+t;return 0<=n&&n<g.entries.length;},block:function block(t){return void 0===t&&(t=!1),h.setPrompt(t);},listen:function listen(t){return h.appendListener(t);}};return g;}exports.createBrowserHistory=createBrowserHistory,exports.createHashHistory=createHashHistory,exports.createMemoryHistory=createMemoryHistory,exports.createLocation=createLocation,exports.locationsAreEqual=locationsAreEqual,exports.parsePath=parsePath,exports.createPath=createPath;

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';if(process.env.NODE_ENV==='production'){module.exports=__webpack_require__(23);}else{module.exports=__webpack_require__(24);}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ }),
/* 23 */
/***/ (function(module, exports) {

	"use strict";function isAbsolute(e){return"/"===e.charAt(0);}function spliceOne(e,t){for(var s=t,n=s+1,i=e.length;n<i;s+=1,n+=1){e[s]=e[n];}e.pop();}function resolvePathname(e,t){void 0===t&&(t="");var s,n=e&&e.split("/")||[],i=t&&t.split("/")||[],l=e&&isAbsolute(e),r=t&&isAbsolute(t),o=l||r;if(e&&isAbsolute(e)?i=n:n.length&&(i.pop(),i=i.concat(n)),!i.length)return"/";if(i.length){var u=i[i.length-1];s="."===u||".."===u||""===u;}else s=!1;for(var a=0,c=i.length;0<=c;c--){var f=i[c];"."===f?spliceOne(i,c):".."===f?(spliceOne(i,c),a++):a&&(spliceOne(i,c),a--);}if(!o)for(;a--;a){i.unshift("..");}!o||""===i[0]||i[0]&&isAbsolute(i[0])||i.unshift("");var h=i.join("/");return s&&"/"!==h.substr(-1)&&(h+="/"),h;}module.exports=resolvePathname;

/***/ }),
/* 24 */
/***/ (function(module, exports) {

	'use strict';function isAbsolute(pathname){return pathname.charAt(0)==='/';}// About 1.5x faster than the two-arg version of Array#splice()
	function spliceOne(list,index){for(var i=index,k=i+1,n=list.length;k<n;i+=1,k+=1){list[i]=list[k];}list.pop();}// This implementation is based heavily on node's url.parse
	function resolvePathname(to,from){if(from===undefined)from='';var toParts=to&&to.split('/')||[];var fromParts=from&&from.split('/')||[];var isToAbs=to&&isAbsolute(to);var isFromAbs=from&&isAbsolute(from);var mustEndAbs=isToAbs||isFromAbs;if(to&&isAbsolute(to)){// to is absolute
	fromParts=toParts;}else if(toParts.length){// to is relative, drop the filename
	fromParts.pop();fromParts=fromParts.concat(toParts);}if(!fromParts.length)return'/';var hasTrailingSlash;if(fromParts.length){var last=fromParts[fromParts.length-1];hasTrailingSlash=last==='.'||last==='..'||last==='';}else{hasTrailingSlash=false;}var up=0;for(var i=fromParts.length;i>=0;i--){var part=fromParts[i];if(part==='.'){spliceOne(fromParts,i);}else if(part==='..'){spliceOne(fromParts,i);up++;}else if(up){spliceOne(fromParts,i);up--;}}if(!mustEndAbs)for(;up--;up){fromParts.unshift('..');}if(mustEndAbs&&fromParts[0]!==''&&(!fromParts[0]||!isAbsolute(fromParts[0])))fromParts.unshift('');var result=fromParts.join('/');if(hasTrailingSlash&&result.substr(-1)!=='/')result+='/';return result;}module.exports=resolvePathname;

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';if(process.env.NODE_ENV==='production'){module.exports=__webpack_require__(26);}else{module.exports=__webpack_require__(27);}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ }),
/* 26 */
/***/ (function(module, exports) {

	"use strict";var _typeof=typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"?function(obj){return typeof obj;}:function(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;};function valueOf(e){return e.valueOf?e.valueOf():Object.prototype.valueOf.call(e);}function valueEqual(u,r){if(u===r)return!0;if(null==u||null==r)return!1;if(Array.isArray(u))return Array.isArray(r)&&u.length===r.length&&u.every(function(e,u){return valueEqual(e,r[u]);});if("object"!=(typeof u==="undefined"?"undefined":_typeof(u))&&"object"!=(typeof r==="undefined"?"undefined":_typeof(r)))return!1;var e=valueOf(u),t=valueOf(r);return e!==u||t!==r?valueEqual(e,t):Object.keys(Object.assign({},u,r)).every(function(e){return valueEqual(u[e],r[e]);});}module.exports=valueEqual;

/***/ }),
/* 27 */
/***/ (function(module, exports) {

	'use strict';var _typeof=typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"?function(obj){return typeof obj;}:function(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;};function valueOf(obj){return obj.valueOf?obj.valueOf():Object.prototype.valueOf.call(obj);}function valueEqual(a,b){// Test for strict equality first.
	if(a===b)return true;// Otherwise, if either of them == null they are not equal.
	if(a==null||b==null)return false;if(Array.isArray(a)){return Array.isArray(b)&&a.length===b.length&&a.every(function(item,index){return valueEqual(item,b[index]);});}if((typeof a==='undefined'?'undefined':_typeof(a))==='object'||(typeof b==='undefined'?'undefined':_typeof(b))==='object'){var aValue=valueOf(a);var bValue=valueOf(b);if(aValue!==a||bValue!==b)return valueEqual(aValue,bValue);return Object.keys(Object.assign({},a,b)).every(function(key){return valueEqual(a[key],b[key]);});}return false;}module.exports=valueEqual;

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';var isProduction=process.env.NODE_ENV==='production';function warning(condition,message){if(!isProduction){if(condition){return;}var text="Warning: "+message;if(typeof console!=='undefined'){console.warn(text);}try{throw Error(text);}catch(x){}}}module.exports=warning;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';Object.defineProperty(exports,"__esModule",{value:true});var isProduction=process.env.NODE_ENV==='production';var prefix='Invariant failed';function invariant(condition,message){if(condition){return;}if(isProduction){throw new Error(prefix);}throw new Error(prefix+": "+(message||''));}exports.default=invariant;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';var _typeof=typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"?function(obj){return typeof obj;}:function(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;};Object.defineProperty(exports,'__esModule',{value:true});function _interopDefault(ex){return ex&&(typeof ex==='undefined'?'undefined':_typeof(ex))==='object'&&'default'in ex?ex['default']:ex;}var resolvePathname=_interopDefault(__webpack_require__(22));var valueEqual=_interopDefault(__webpack_require__(25));var warning=_interopDefault(__webpack_require__(28));var invariant=_interopDefault(__webpack_require__(29));function _extends(){_extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};return _extends.apply(this,arguments);}function addLeadingSlash(path){return path.charAt(0)==='/'?path:'/'+path;}function stripLeadingSlash(path){return path.charAt(0)==='/'?path.substr(1):path;}function hasBasename(path,prefix){return path.toLowerCase().indexOf(prefix.toLowerCase())===0&&'/?#'.indexOf(path.charAt(prefix.length))!==-1;}function stripBasename(path,prefix){return hasBasename(path,prefix)?path.substr(prefix.length):path;}function stripTrailingSlash(path){return path.charAt(path.length-1)==='/'?path.slice(0,-1):path;}function parsePath(path){var pathname=path||'/';var search='';var hash='';var hashIndex=pathname.indexOf('#');if(hashIndex!==-1){hash=pathname.substr(hashIndex);pathname=pathname.substr(0,hashIndex);}var searchIndex=pathname.indexOf('?');if(searchIndex!==-1){search=pathname.substr(searchIndex);pathname=pathname.substr(0,searchIndex);}return{pathname:pathname,search:search==='?'?'':search,hash:hash==='#'?'':hash};}function createPath(location){var pathname=location.pathname,search=location.search,hash=location.hash;var path=pathname||'/';if(search&&search!=='?')path+=search.charAt(0)==='?'?search:"?"+search;if(hash&&hash!=='#')path+=hash.charAt(0)==='#'?hash:"#"+hash;return path;}function createLocation(path,state,key,currentLocation){var location;if(typeof path==='string'){// Two-arg form: push(path, state)
	location=parsePath(path);location.state=state;}else{// One-arg form: push(location)
	location=_extends({},path);if(location.pathname===undefined)location.pathname='';if(location.search){if(location.search.charAt(0)!=='?')location.search='?'+location.search;}else{location.search='';}if(location.hash){if(location.hash.charAt(0)!=='#')location.hash='#'+location.hash;}else{location.hash='';}if(state!==undefined&&location.state===undefined)location.state=state;}try{location.pathname=decodeURI(location.pathname);}catch(e){if(e instanceof URIError){throw new URIError('Pathname "'+location.pathname+'" could not be decoded. '+'This is likely caused by an invalid percent-encoding.');}else{throw e;}}if(key)location.key=key;if(currentLocation){// Resolve incomplete/relative pathname relative to current location.
	if(!location.pathname){location.pathname=currentLocation.pathname;}else if(location.pathname.charAt(0)!=='/'){location.pathname=resolvePathname(location.pathname,currentLocation.pathname);}}else{// When there is no prior location and pathname is empty, set it to /
	if(!location.pathname){location.pathname='/';}}return location;}function locationsAreEqual(a,b){return a.pathname===b.pathname&&a.search===b.search&&a.hash===b.hash&&a.key===b.key&&valueEqual(a.state,b.state);}function createTransitionManager(){var prompt=null;function setPrompt(nextPrompt){warning(prompt==null,'A history supports only one prompt at a time');prompt=nextPrompt;return function(){if(prompt===nextPrompt)prompt=null;};}function confirmTransitionTo(location,action,getUserConfirmation,callback){// TODO: If another transition starts while we're still confirming
	// the previous one, we may end up in a weird state. Figure out the
	// best way to handle this.
	if(prompt!=null){var result=typeof prompt==='function'?prompt(location,action):prompt;if(typeof result==='string'){if(typeof getUserConfirmation==='function'){getUserConfirmation(result,callback);}else{warning(false,'A history needs a getUserConfirmation function in order to use a prompt message');callback(true);}}else{// Return false from a transition hook to cancel the transition.
	callback(result!==false);}}else{callback(true);}}var listeners=[];function appendListener(fn){var isActive=true;function listener(){if(isActive)fn.apply(void 0,arguments);}listeners.push(listener);return function(){isActive=false;listeners=listeners.filter(function(item){return item!==listener;});};}function notifyListeners(){for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}listeners.forEach(function(listener){return listener.apply(void 0,args);});}return{setPrompt:setPrompt,confirmTransitionTo:confirmTransitionTo,appendListener:appendListener,notifyListeners:notifyListeners};}var canUseDOM=!!(typeof window!=='undefined'&&window.document&&window.document.createElement);function getConfirmation(message,callback){callback(window.confirm(message));// eslint-disable-line no-alert
	}/**
	 * Returns true if the HTML5 history API is supported. Taken from Modernizr.
	 *
	 * https://github.com/Modernizr/Modernizr/blob/master/LICENSE
	 * https://github.com/Modernizr/Modernizr/blob/master/feature-detects/history.js
	 * changed to avoid false negatives for Windows Phones: https://github.com/reactjs/react-router/issues/586
	 */function supportsHistory(){var ua=window.navigator.userAgent;if((ua.indexOf('Android 2.')!==-1||ua.indexOf('Android 4.0')!==-1)&&ua.indexOf('Mobile Safari')!==-1&&ua.indexOf('Chrome')===-1&&ua.indexOf('Windows Phone')===-1)return false;return window.history&&'pushState'in window.history;}/**
	 * Returns true if browser fires popstate on hash change.
	 * IE10 and IE11 do not.
	 */function supportsPopStateOnHashChange(){return window.navigator.userAgent.indexOf('Trident')===-1;}/**
	 * Returns false if using go(n) with hash history causes a full page reload.
	 */function supportsGoWithoutReloadUsingHash(){return window.navigator.userAgent.indexOf('Firefox')===-1;}/**
	 * Returns true if a given popstate event is an extraneous WebKit event.
	 * Accounts for the fact that Chrome on iOS fires real popstate events
	 * containing undefined state when pressing the back button.
	 */function isExtraneousPopstateEvent(event){return event.state===undefined&&navigator.userAgent.indexOf('CriOS')===-1;}var PopStateEvent='popstate';var HashChangeEvent='hashchange';function getHistoryState(){try{return window.history.state||{};}catch(e){// IE 11 sometimes throws when accessing window.history.state
	// See https://github.com/ReactTraining/history/pull/289
	return{};}}/**
	 * Creates a history object that uses the HTML5 history API including
	 * pushState, replaceState, and the popstate event.
	 */function createBrowserHistory(props){if(props===void 0){props={};}!canUseDOM?invariant(false,'Browser history needs a DOM'):void 0;var globalHistory=window.history;var canUseHistory=supportsHistory();var needsHashChangeListener=!supportsPopStateOnHashChange();var _props=props,_props$forceRefresh=_props.forceRefresh,forceRefresh=_props$forceRefresh===void 0?false:_props$forceRefresh,_props$getUserConfirm=_props.getUserConfirmation,getUserConfirmation=_props$getUserConfirm===void 0?getConfirmation:_props$getUserConfirm,_props$keyLength=_props.keyLength,keyLength=_props$keyLength===void 0?6:_props$keyLength;var basename=props.basename?stripTrailingSlash(addLeadingSlash(props.basename)):'';function getDOMLocation(historyState){var _ref=historyState||{},key=_ref.key,state=_ref.state;var _window$location=window.location,pathname=_window$location.pathname,search=_window$location.search,hash=_window$location.hash;var path=pathname+search+hash;warning(!basename||hasBasename(path,basename),'You are attempting to use a basename on a page whose URL path does not begin '+'with the basename. Expected path "'+path+'" to begin with "'+basename+'".');if(basename)path=stripBasename(path,basename);return createLocation(path,state,key);}function createKey(){return Math.random().toString(36).substr(2,keyLength);}var transitionManager=createTransitionManager();function setState(nextState){_extends(history,nextState);history.length=globalHistory.length;transitionManager.notifyListeners(history.location,history.action);}function handlePopState(event){// Ignore extraneous popstate events in WebKit.
	if(isExtraneousPopstateEvent(event))return;handlePop(getDOMLocation(event.state));}function handleHashChange(){handlePop(getDOMLocation(getHistoryState()));}var forceNextPop=false;function handlePop(location){if(forceNextPop){forceNextPop=false;setState();}else{var action='POP';transitionManager.confirmTransitionTo(location,action,getUserConfirmation,function(ok){if(ok){setState({action:action,location:location});}else{revertPop(location);}});}}function revertPop(fromLocation){var toLocation=history.location;// TODO: We could probably make this more reliable by
	// keeping a list of keys we've seen in sessionStorage.
	// Instead, we just default to 0 for keys we don't know.
	var toIndex=allKeys.indexOf(toLocation.key);if(toIndex===-1)toIndex=0;var fromIndex=allKeys.indexOf(fromLocation.key);if(fromIndex===-1)fromIndex=0;var delta=toIndex-fromIndex;if(delta){forceNextPop=true;go(delta);}}var initialLocation=getDOMLocation(getHistoryState());var allKeys=[initialLocation.key];// Public interface
	function createHref(location){return basename+createPath(location);}function push(path,state){warning(!((typeof path==='undefined'?'undefined':_typeof(path))==='object'&&path.state!==undefined&&state!==undefined),'You should avoid providing a 2nd state argument to push when the 1st '+'argument is a location-like object that already has state; it is ignored');var action='PUSH';var location=createLocation(path,state,createKey(),history.location);transitionManager.confirmTransitionTo(location,action,getUserConfirmation,function(ok){if(!ok)return;var href=createHref(location);var key=location.key,state=location.state;if(canUseHistory){globalHistory.pushState({key:key,state:state},null,href);if(forceRefresh){window.location.href=href;}else{var prevIndex=allKeys.indexOf(history.location.key);var nextKeys=allKeys.slice(0,prevIndex+1);nextKeys.push(location.key);allKeys=nextKeys;setState({action:action,location:location});}}else{warning(state===undefined,'Browser history cannot push state in browsers that do not support HTML5 history');window.location.href=href;}});}function replace(path,state){warning(!((typeof path==='undefined'?'undefined':_typeof(path))==='object'&&path.state!==undefined&&state!==undefined),'You should avoid providing a 2nd state argument to replace when the 1st '+'argument is a location-like object that already has state; it is ignored');var action='REPLACE';var location=createLocation(path,state,createKey(),history.location);transitionManager.confirmTransitionTo(location,action,getUserConfirmation,function(ok){if(!ok)return;var href=createHref(location);var key=location.key,state=location.state;if(canUseHistory){globalHistory.replaceState({key:key,state:state},null,href);if(forceRefresh){window.location.replace(href);}else{var prevIndex=allKeys.indexOf(history.location.key);if(prevIndex!==-1)allKeys[prevIndex]=location.key;setState({action:action,location:location});}}else{warning(state===undefined,'Browser history cannot replace state in browsers that do not support HTML5 history');window.location.replace(href);}});}function go(n){globalHistory.go(n);}function goBack(){go(-1);}function goForward(){go(1);}var listenerCount=0;function checkDOMListeners(delta){listenerCount+=delta;if(listenerCount===1&&delta===1){window.addEventListener(PopStateEvent,handlePopState);if(needsHashChangeListener)window.addEventListener(HashChangeEvent,handleHashChange);}else if(listenerCount===0){window.removeEventListener(PopStateEvent,handlePopState);if(needsHashChangeListener)window.removeEventListener(HashChangeEvent,handleHashChange);}}var isBlocked=false;function block(prompt){if(prompt===void 0){prompt=false;}var unblock=transitionManager.setPrompt(prompt);if(!isBlocked){checkDOMListeners(1);isBlocked=true;}return function(){if(isBlocked){isBlocked=false;checkDOMListeners(-1);}return unblock();};}function listen(listener){var unlisten=transitionManager.appendListener(listener);checkDOMListeners(1);return function(){checkDOMListeners(-1);unlisten();};}var history={length:globalHistory.length,action:'POP',location:initialLocation,createHref:createHref,push:push,replace:replace,go:go,goBack:goBack,goForward:goForward,block:block,listen:listen};return history;}var HashChangeEvent$1='hashchange';var HashPathCoders={hashbang:{encodePath:function encodePath(path){return path.charAt(0)==='!'?path:'!/'+stripLeadingSlash(path);},decodePath:function decodePath(path){return path.charAt(0)==='!'?path.substr(1):path;}},noslash:{encodePath:stripLeadingSlash,decodePath:addLeadingSlash},slash:{encodePath:addLeadingSlash,decodePath:addLeadingSlash}};function stripHash(url){var hashIndex=url.indexOf('#');return hashIndex===-1?url:url.slice(0,hashIndex);}function getHashPath(){// We can't use window.location.hash here because it's not
	// consistent across browsers - Firefox will pre-decode it!
	var href=window.location.href;var hashIndex=href.indexOf('#');return hashIndex===-1?'':href.substring(hashIndex+1);}function pushHashPath(path){window.location.hash=path;}function replaceHashPath(path){window.location.replace(stripHash(window.location.href)+'#'+path);}function createHashHistory(props){if(props===void 0){props={};}!canUseDOM?invariant(false,'Hash history needs a DOM'):void 0;var globalHistory=window.history;var canGoWithoutReload=supportsGoWithoutReloadUsingHash();var _props=props,_props$getUserConfirm=_props.getUserConfirmation,getUserConfirmation=_props$getUserConfirm===void 0?getConfirmation:_props$getUserConfirm,_props$hashType=_props.hashType,hashType=_props$hashType===void 0?'slash':_props$hashType;var basename=props.basename?stripTrailingSlash(addLeadingSlash(props.basename)):'';var _HashPathCoders$hashT=HashPathCoders[hashType],encodePath=_HashPathCoders$hashT.encodePath,decodePath=_HashPathCoders$hashT.decodePath;function getDOMLocation(){var path=decodePath(getHashPath());warning(!basename||hasBasename(path,basename),'You are attempting to use a basename on a page whose URL path does not begin '+'with the basename. Expected path "'+path+'" to begin with "'+basename+'".');if(basename)path=stripBasename(path,basename);return createLocation(path);}var transitionManager=createTransitionManager();function setState(nextState){_extends(history,nextState);history.length=globalHistory.length;transitionManager.notifyListeners(history.location,history.action);}var forceNextPop=false;var ignorePath=null;function locationsAreEqual$$1(a,b){return a.pathname===b.pathname&&a.search===b.search&&a.hash===b.hash;}function handleHashChange(){var path=getHashPath();var encodedPath=encodePath(path);if(path!==encodedPath){// Ensure we always have a properly-encoded hash.
	replaceHashPath(encodedPath);}else{var location=getDOMLocation();var prevLocation=history.location;if(!forceNextPop&&locationsAreEqual$$1(prevLocation,location))return;// A hashchange doesn't always == location change.
	if(ignorePath===createPath(location))return;// Ignore this change; we already setState in push/replace.
	ignorePath=null;handlePop(location);}}function handlePop(location){if(forceNextPop){forceNextPop=false;setState();}else{var action='POP';transitionManager.confirmTransitionTo(location,action,getUserConfirmation,function(ok){if(ok){setState({action:action,location:location});}else{revertPop(location);}});}}function revertPop(fromLocation){var toLocation=history.location;// TODO: We could probably make this more reliable by
	// keeping a list of paths we've seen in sessionStorage.
	// Instead, we just default to 0 for paths we don't know.
	var toIndex=allPaths.lastIndexOf(createPath(toLocation));if(toIndex===-1)toIndex=0;var fromIndex=allPaths.lastIndexOf(createPath(fromLocation));if(fromIndex===-1)fromIndex=0;var delta=toIndex-fromIndex;if(delta){forceNextPop=true;go(delta);}}// Ensure the hash is encoded properly before doing anything else.
	var path=getHashPath();var encodedPath=encodePath(path);if(path!==encodedPath)replaceHashPath(encodedPath);var initialLocation=getDOMLocation();var allPaths=[createPath(initialLocation)];// Public interface
	function createHref(location){var baseTag=document.querySelector('base');var href='';if(baseTag&&baseTag.getAttribute('href')){href=stripHash(window.location.href);}return href+'#'+encodePath(basename+createPath(location));}function push(path,state){warning(state===undefined,'Hash history cannot push state; it is ignored');var action='PUSH';var location=createLocation(path,undefined,undefined,history.location);transitionManager.confirmTransitionTo(location,action,getUserConfirmation,function(ok){if(!ok)return;var path=createPath(location);var encodedPath=encodePath(basename+path);var hashChanged=getHashPath()!==encodedPath;if(hashChanged){// We cannot tell if a hashchange was caused by a PUSH, so we'd
	// rather setState here and ignore the hashchange. The caveat here
	// is that other hash histories in the page will consider it a POP.
	ignorePath=path;pushHashPath(encodedPath);var prevIndex=allPaths.lastIndexOf(createPath(history.location));var nextPaths=allPaths.slice(0,prevIndex+1);nextPaths.push(path);allPaths=nextPaths;setState({action:action,location:location});}else{warning(false,'Hash history cannot PUSH the same path; a new entry will not be added to the history stack');setState();}});}function replace(path,state){warning(state===undefined,'Hash history cannot replace state; it is ignored');var action='REPLACE';var location=createLocation(path,undefined,undefined,history.location);transitionManager.confirmTransitionTo(location,action,getUserConfirmation,function(ok){if(!ok)return;var path=createPath(location);var encodedPath=encodePath(basename+path);var hashChanged=getHashPath()!==encodedPath;if(hashChanged){// We cannot tell if a hashchange was caused by a REPLACE, so we'd
	// rather setState here and ignore the hashchange. The caveat here
	// is that other hash histories in the page will consider it a POP.
	ignorePath=path;replaceHashPath(encodedPath);}var prevIndex=allPaths.indexOf(createPath(history.location));if(prevIndex!==-1)allPaths[prevIndex]=path;setState({action:action,location:location});});}function go(n){warning(canGoWithoutReload,'Hash history go(n) causes a full page reload in this browser');globalHistory.go(n);}function goBack(){go(-1);}function goForward(){go(1);}var listenerCount=0;function checkDOMListeners(delta){listenerCount+=delta;if(listenerCount===1&&delta===1){window.addEventListener(HashChangeEvent$1,handleHashChange);}else if(listenerCount===0){window.removeEventListener(HashChangeEvent$1,handleHashChange);}}var isBlocked=false;function block(prompt){if(prompt===void 0){prompt=false;}var unblock=transitionManager.setPrompt(prompt);if(!isBlocked){checkDOMListeners(1);isBlocked=true;}return function(){if(isBlocked){isBlocked=false;checkDOMListeners(-1);}return unblock();};}function listen(listener){var unlisten=transitionManager.appendListener(listener);checkDOMListeners(1);return function(){checkDOMListeners(-1);unlisten();};}var history={length:globalHistory.length,action:'POP',location:initialLocation,createHref:createHref,push:push,replace:replace,go:go,goBack:goBack,goForward:goForward,block:block,listen:listen};return history;}function clamp(n,lowerBound,upperBound){return Math.min(Math.max(n,lowerBound),upperBound);}/**
	 * Creates a history object that stores locations in memory.
	 */function createMemoryHistory(props){if(props===void 0){props={};}var _props=props,getUserConfirmation=_props.getUserConfirmation,_props$initialEntries=_props.initialEntries,initialEntries=_props$initialEntries===void 0?['/']:_props$initialEntries,_props$initialIndex=_props.initialIndex,initialIndex=_props$initialIndex===void 0?0:_props$initialIndex,_props$keyLength=_props.keyLength,keyLength=_props$keyLength===void 0?6:_props$keyLength;var transitionManager=createTransitionManager();function setState(nextState){_extends(history,nextState);history.length=history.entries.length;transitionManager.notifyListeners(history.location,history.action);}function createKey(){return Math.random().toString(36).substr(2,keyLength);}var index=clamp(initialIndex,0,initialEntries.length-1);var entries=initialEntries.map(function(entry){return typeof entry==='string'?createLocation(entry,undefined,createKey()):createLocation(entry,undefined,entry.key||createKey());});// Public interface
	var createHref=createPath;function push(path,state){warning(!((typeof path==='undefined'?'undefined':_typeof(path))==='object'&&path.state!==undefined&&state!==undefined),'You should avoid providing a 2nd state argument to push when the 1st '+'argument is a location-like object that already has state; it is ignored');var action='PUSH';var location=createLocation(path,state,createKey(),history.location);transitionManager.confirmTransitionTo(location,action,getUserConfirmation,function(ok){if(!ok)return;var prevIndex=history.index;var nextIndex=prevIndex+1;var nextEntries=history.entries.slice(0);if(nextEntries.length>nextIndex){nextEntries.splice(nextIndex,nextEntries.length-nextIndex,location);}else{nextEntries.push(location);}setState({action:action,location:location,index:nextIndex,entries:nextEntries});});}function replace(path,state){warning(!((typeof path==='undefined'?'undefined':_typeof(path))==='object'&&path.state!==undefined&&state!==undefined),'You should avoid providing a 2nd state argument to replace when the 1st '+'argument is a location-like object that already has state; it is ignored');var action='REPLACE';var location=createLocation(path,state,createKey(),history.location);transitionManager.confirmTransitionTo(location,action,getUserConfirmation,function(ok){if(!ok)return;history.entries[history.index]=location;setState({action:action,location:location});});}function go(n){var nextIndex=clamp(history.index+n,0,history.entries.length-1);var action='POP';var location=history.entries[nextIndex];transitionManager.confirmTransitionTo(location,action,getUserConfirmation,function(ok){if(ok){setState({action:action,location:location,index:nextIndex});}else{// Mimic the behavior of DOM histories by
	// causing a render after a cancelled POP.
	setState();}});}function goBack(){go(-1);}function goForward(){go(1);}function canGo(n){var nextIndex=history.index+n;return nextIndex>=0&&nextIndex<history.entries.length;}function block(prompt){if(prompt===void 0){prompt=false;}return transitionManager.setPrompt(prompt);}function listen(listener){return transitionManager.appendListener(listener);}var history={length:entries.length,action:'POP',location:entries[index],index:index,entries:entries,createHref:createHref,push:push,replace:replace,go:go,goBack:goBack,goForward:goForward,canGo:canGo,block:block,listen:listen};return history;}exports.createBrowserHistory=createBrowserHistory;exports.createHashHistory=createHashHistory;exports.createMemoryHistory=createMemoryHistory;exports.createLocation=createLocation;exports.locationsAreEqual=locationsAreEqual;exports.parsePath=parsePath;exports.createPath=createPath;

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global, process) {'use strict';var _typeof=typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"?function(obj){return typeof obj;}:function(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;};var React=__webpack_require__(10),_inheritsLoose=__webpack_require__(32),PropTypes=__webpack_require__(11),warning=__webpack_require__(28);function _interopDefaultLegacy(e){return e&&(typeof e==='undefined'?'undefined':_typeof(e))==='object'&&'default'in e?e:{'default':e};}var React__default=/*#__PURE__*/_interopDefaultLegacy(React);var _inheritsLoose__default=/*#__PURE__*/_interopDefaultLegacy(_inheritsLoose);var PropTypes__default=/*#__PURE__*/_interopDefaultLegacy(PropTypes);var warning__default=/*#__PURE__*/_interopDefaultLegacy(warning);var MAX_SIGNED_31_BIT_INT=1073741823;var commonjsGlobal=typeof globalThis!=='undefined'?globalThis:typeof window!=='undefined'?window:typeof global!=='undefined'?global:{};function getUniqueId(){var key='__global_unique_id__';return commonjsGlobal[key]=(commonjsGlobal[key]||0)+1;}function objectIs(x,y){if(x===y){return x!==0||1/x===1/y;}else{return x!==x&&y!==y;}}function createEventEmitter(value){var handlers=[];return{on:function on(handler){handlers.push(handler);},off:function off(handler){handlers=handlers.filter(function(h){return h!==handler;});},get:function get(){return value;},set:function set(newValue,changedBits){value=newValue;handlers.forEach(function(handler){return handler(value,changedBits);});}};}function onlyChild(children){return Array.isArray(children)?children[0]:children;}function createReactContext(defaultValue,calculateChangedBits){var _Provider$childContex,_Consumer$contextType;var contextProp='__create-react-context-'+getUniqueId()+'__';var Provider=/*#__PURE__*/function(_Component){_inheritsLoose__default['default'](Provider,_Component);function Provider(){var _this;_this=_Component.apply(this,arguments)||this;_this.emitter=createEventEmitter(_this.props.value);return _this;}var _proto=Provider.prototype;_proto.getChildContext=function getChildContext(){var _ref;return _ref={},_ref[contextProp]=this.emitter,_ref;};_proto.componentWillReceiveProps=function componentWillReceiveProps(nextProps){if(this.props.value!==nextProps.value){var oldValue=this.props.value;var newValue=nextProps.value;var changedBits;if(objectIs(oldValue,newValue)){changedBits=0;}else{changedBits=typeof calculateChangedBits==='function'?calculateChangedBits(oldValue,newValue):MAX_SIGNED_31_BIT_INT;if(process.env.NODE_ENV!=='production'){warning__default['default']((changedBits&MAX_SIGNED_31_BIT_INT)===changedBits,'calculateChangedBits: Expected the return value to be a '+'31-bit integer. Instead received: '+changedBits);}changedBits|=0;if(changedBits!==0){this.emitter.set(nextProps.value,changedBits);}}}};_proto.render=function render(){return this.props.children;};return Provider;}(React.Component);Provider.childContextTypes=(_Provider$childContex={},_Provider$childContex[contextProp]=PropTypes__default['default'].object.isRequired,_Provider$childContex);var Consumer=/*#__PURE__*/function(_Component2){_inheritsLoose__default['default'](Consumer,_Component2);function Consumer(){var _this2;_this2=_Component2.apply(this,arguments)||this;_this2.state={value:_this2.getValue()};_this2.onUpdate=function(newValue,changedBits){var observedBits=_this2.observedBits|0;if((observedBits&changedBits)!==0){_this2.setState({value:_this2.getValue()});}};return _this2;}var _proto2=Consumer.prototype;_proto2.componentWillReceiveProps=function componentWillReceiveProps(nextProps){var observedBits=nextProps.observedBits;this.observedBits=observedBits===undefined||observedBits===null?MAX_SIGNED_31_BIT_INT:observedBits;};_proto2.componentDidMount=function componentDidMount(){if(this.context[contextProp]){this.context[contextProp].on(this.onUpdate);}var observedBits=this.props.observedBits;this.observedBits=observedBits===undefined||observedBits===null?MAX_SIGNED_31_BIT_INT:observedBits;};_proto2.componentWillUnmount=function componentWillUnmount(){if(this.context[contextProp]){this.context[contextProp].off(this.onUpdate);}};_proto2.getValue=function getValue(){if(this.context[contextProp]){return this.context[contextProp].get();}else{return defaultValue;}};_proto2.render=function render(){return onlyChild(this.props.children)(this.state.value);};return Consumer;}(React.Component);Consumer.contextTypes=(_Consumer$contextType={},_Consumer$contextType[contextProp]=PropTypes__default['default'].object,_Consumer$contextType);return{Provider:Provider,Consumer:Consumer};}var index=React__default['default'].createContext||createReactContext;module.exports=index;
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }()), __webpack_require__(6)))

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";var setPrototypeOf=__webpack_require__(33);function _inheritsLoose(subClass,superClass){subClass.prototype=Object.create(superClass.prototype);subClass.prototype.constructor=subClass;setPrototypeOf(subClass,superClass);}module.exports=_inheritsLoose;module.exports["default"]=module.exports,module.exports.__esModule=true;

/***/ }),
/* 33 */
/***/ (function(module, exports) {

	"use strict";function _setPrototypeOf(o,p){module.exports=_setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(o,p){o.__proto__=p;return o;};module.exports["default"]=module.exports,module.exports.__esModule=true;return _setPrototypeOf(o,p);}module.exports=_setPrototypeOf;module.exports["default"]=module.exports,module.exports.__esModule=true;

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';var _typeof=typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"?function(obj){return typeof obj;}:function(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;};var isarray=__webpack_require__(35);/**
	 * Expose `pathToRegexp`.
	 */module.exports=pathToRegexp;module.exports.parse=parse;module.exports.compile=compile;module.exports.tokensToFunction=tokensToFunction;module.exports.tokensToRegExp=tokensToRegExp;/**
	 * The main path matching regexp utility.
	 *
	 * @type {RegExp}
	 */var PATH_REGEXP=new RegExp([// Match escaped characters that would otherwise appear in future matches.
	// This allows the user to escape special characters that won't transform.
	'(\\\\.)',// Match Express-style parameters and un-named parameters with a prefix
	// and optional suffixes. Matches appear as:
	//
	// "/:test(\\d+)?" => ["/", "test", "\d+", undefined, "?", undefined]
	// "/route(\\d+)"  => [undefined, undefined, undefined, "\d+", undefined, undefined]
	// "/*"            => ["/", undefined, undefined, undefined, undefined, "*"]
	'([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))'].join('|'),'g');/**
	 * Parse a string for the raw tokens.
	 *
	 * @param  {string}  str
	 * @param  {Object=} options
	 * @return {!Array}
	 */function parse(str,options){var tokens=[];var key=0;var index=0;var path='';var defaultDelimiter=options&&options.delimiter||'/';var res;while((res=PATH_REGEXP.exec(str))!=null){var m=res[0];var escaped=res[1];var offset=res.index;path+=str.slice(index,offset);index=offset+m.length;// Ignore already escaped sequences.
	if(escaped){path+=escaped[1];continue;}var next=str[index];var prefix=res[2];var name=res[3];var capture=res[4];var group=res[5];var modifier=res[6];var asterisk=res[7];// Push the current path onto the tokens.
	if(path){tokens.push(path);path='';}var partial=prefix!=null&&next!=null&&next!==prefix;var repeat=modifier==='+'||modifier==='*';var optional=modifier==='?'||modifier==='*';var delimiter=res[2]||defaultDelimiter;var pattern=capture||group;tokens.push({name:name||key++,prefix:prefix||'',delimiter:delimiter,optional:optional,repeat:repeat,partial:partial,asterisk:!!asterisk,pattern:pattern?escapeGroup(pattern):asterisk?'.*':'[^'+escapeString(delimiter)+']+?'});}// Match any characters still remaining.
	if(index<str.length){path+=str.substr(index);}// If the path exists, push it onto the end.
	if(path){tokens.push(path);}return tokens;}/**
	 * Compile a string to a template function for the path.
	 *
	 * @param  {string}             str
	 * @param  {Object=}            options
	 * @return {!function(Object=, Object=)}
	 */function compile(str,options){return tokensToFunction(parse(str,options),options);}/**
	 * Prettier encoding of URI path segments.
	 *
	 * @param  {string}
	 * @return {string}
	 */function encodeURIComponentPretty(str){return encodeURI(str).replace(/[\/?#]/g,function(c){return'%'+c.charCodeAt(0).toString(16).toUpperCase();});}/**
	 * Encode the asterisk parameter. Similar to `pretty`, but allows slashes.
	 *
	 * @param  {string}
	 * @return {string}
	 */function encodeAsterisk(str){return encodeURI(str).replace(/[?#]/g,function(c){return'%'+c.charCodeAt(0).toString(16).toUpperCase();});}/**
	 * Expose a method for transforming tokens into the path function.
	 */function tokensToFunction(tokens,options){// Compile all the tokens into regexps.
	var matches=new Array(tokens.length);// Compile all the patterns before compilation.
	for(var i=0;i<tokens.length;i++){if(_typeof(tokens[i])==='object'){matches[i]=new RegExp('^(?:'+tokens[i].pattern+')$',flags(options));}}return function(obj,opts){var path='';var data=obj||{};var options=opts||{};var encode=options.pretty?encodeURIComponentPretty:encodeURIComponent;for(var i=0;i<tokens.length;i++){var token=tokens[i];if(typeof token==='string'){path+=token;continue;}var value=data[token.name];var segment;if(value==null){if(token.optional){// Prepend partial segment prefixes.
	if(token.partial){path+=token.prefix;}continue;}else{throw new TypeError('Expected "'+token.name+'" to be defined');}}if(isarray(value)){if(!token.repeat){throw new TypeError('Expected "'+token.name+'" to not repeat, but received `'+JSON.stringify(value)+'`');}if(value.length===0){if(token.optional){continue;}else{throw new TypeError('Expected "'+token.name+'" to not be empty');}}for(var j=0;j<value.length;j++){segment=encode(value[j]);if(!matches[i].test(segment)){throw new TypeError('Expected all "'+token.name+'" to match "'+token.pattern+'", but received `'+JSON.stringify(segment)+'`');}path+=(j===0?token.prefix:token.delimiter)+segment;}continue;}segment=token.asterisk?encodeAsterisk(value):encode(value);if(!matches[i].test(segment)){throw new TypeError('Expected "'+token.name+'" to match "'+token.pattern+'", but received "'+segment+'"');}path+=token.prefix+segment;}return path;};}/**
	 * Escape a regular expression string.
	 *
	 * @param  {string} str
	 * @return {string}
	 */function escapeString(str){return str.replace(/([.+*?=^!:${}()[\]|\/\\])/g,'\\$1');}/**
	 * Escape the capturing group by escaping special characters and meaning.
	 *
	 * @param  {string} group
	 * @return {string}
	 */function escapeGroup(group){return group.replace(/([=!:$\/()])/g,'\\$1');}/**
	 * Attach the keys as a property of the regexp.
	 *
	 * @param  {!RegExp} re
	 * @param  {Array}   keys
	 * @return {!RegExp}
	 */function attachKeys(re,keys){re.keys=keys;return re;}/**
	 * Get the flags for a regexp from the options.
	 *
	 * @param  {Object} options
	 * @return {string}
	 */function flags(options){return options&&options.sensitive?'':'i';}/**
	 * Pull out keys from a regexp.
	 *
	 * @param  {!RegExp} path
	 * @param  {!Array}  keys
	 * @return {!RegExp}
	 */function regexpToRegexp(path,keys){// Use a negative lookahead to match only capturing groups.
	var groups=path.source.match(/\((?!\?)/g);if(groups){for(var i=0;i<groups.length;i++){keys.push({name:i,prefix:null,delimiter:null,optional:false,repeat:false,partial:false,asterisk:false,pattern:null});}}return attachKeys(path,keys);}/**
	 * Transform an array into a regexp.
	 *
	 * @param  {!Array}  path
	 * @param  {Array}   keys
	 * @param  {!Object} options
	 * @return {!RegExp}
	 */function arrayToRegexp(path,keys,options){var parts=[];for(var i=0;i<path.length;i++){parts.push(pathToRegexp(path[i],keys,options).source);}var regexp=new RegExp('(?:'+parts.join('|')+')',flags(options));return attachKeys(regexp,keys);}/**
	 * Create a path regexp from string input.
	 *
	 * @param  {string}  path
	 * @param  {!Array}  keys
	 * @param  {!Object} options
	 * @return {!RegExp}
	 */function stringToRegexp(path,keys,options){return tokensToRegExp(parse(path,options),keys,options);}/**
	 * Expose a function for taking tokens and returning a RegExp.
	 *
	 * @param  {!Array}          tokens
	 * @param  {(Array|Object)=} keys
	 * @param  {Object=}         options
	 * @return {!RegExp}
	 */function tokensToRegExp(tokens,keys,options){if(!isarray(keys)){options=/** @type {!Object} */keys||options;keys=[];}options=options||{};var strict=options.strict;var end=options.end!==false;var route='';// Iterate over the tokens and create our regexp string.
	for(var i=0;i<tokens.length;i++){var token=tokens[i];if(typeof token==='string'){route+=escapeString(token);}else{var prefix=escapeString(token.prefix);var capture='(?:'+token.pattern+')';keys.push(token);if(token.repeat){capture+='(?:'+prefix+capture+')*';}if(token.optional){if(!token.partial){capture='(?:'+prefix+'('+capture+'))?';}else{capture=prefix+'('+capture+')?';}}else{capture=prefix+'('+capture+')';}route+=capture;}}var delimiter=escapeString(options.delimiter||'/');var endsWithDelimiter=route.slice(-delimiter.length)===delimiter;// In non-strict mode we allow a slash at the end of match. If the path to
	// match already ends with a slash, we remove it for consistency. The slash
	// is valid at the end of a path match, not in the middle. This is important
	// in non-ending mode, where "/test/" shouldn't match "/test//route".
	if(!strict){route=(endsWithDelimiter?route.slice(0,-delimiter.length):route)+'(?:'+delimiter+'(?=$))?';}if(end){route+='$';}else{// In non-ending mode, we need the capturing groups to match as much as
	// possible by using a positive lookahead to the end or next path segment.
	route+=strict&&endsWithDelimiter?'':'(?='+delimiter+'|$)';}return attachKeys(new RegExp('^'+route,flags(options)),keys);}/**
	 * Normalize the given path string, returning a regular expression.
	 *
	 * An empty array can be passed in for the keys, which will hold the
	 * placeholder key descriptions. For example, using `/user/:id`, `keys` will
	 * contain `[{ name: 'id', delimiter: '/', optional: false, repeat: false }]`.
	 *
	 * @param  {(string|RegExp|Array)} path
	 * @param  {(Array|Object)=}       keys
	 * @param  {Object=}               options
	 * @return {!RegExp}
	 */function pathToRegexp(path,keys,options){if(!isarray(keys)){options=/** @type {!Object} */keys||options;keys=[];}options=options||{};if(path instanceof RegExp){return regexpToRegexp(path,/** @type {!Array} */keys);}if(isarray(path)){return arrayToRegexp(/** @type {!Array} */path,/** @type {!Array} */keys,options);}return stringToRegexp(/** @type {string} */path,/** @type {!Array} */keys,options);}

/***/ }),
/* 35 */
/***/ (function(module, exports) {

	'use strict';module.exports=Array.isArray||function(arr){return Object.prototype.toString.call(arr)=='[object Array]';};

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';/**
	 * Copyright 2015, Yahoo! Inc.
	 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
	 */var ReactIs=__webpack_require__(12);var REACT_STATICS={childContextTypes:true,contextType:true,contextTypes:true,defaultProps:true,displayName:true,getDefaultProps:true,getDerivedStateFromError:true,getDerivedStateFromProps:true,mixins:true,propTypes:true,type:true};var KNOWN_STATICS={name:true,length:true,prototype:true,caller:true,callee:true,arguments:true,arity:true};var FORWARD_REF_STATICS={'$$typeof':true,render:true,defaultProps:true,displayName:true,propTypes:true};var MEMO_STATICS={'$$typeof':true,compare:true,defaultProps:true,displayName:true,propTypes:true,type:true};var TYPE_STATICS={};TYPE_STATICS[ReactIs.ForwardRef]=FORWARD_REF_STATICS;function getStatics(component){if(ReactIs.isMemo(component)){return MEMO_STATICS;}return TYPE_STATICS[component['$$typeof']]||REACT_STATICS;}var defineProperty=Object.defineProperty;var getOwnPropertyNames=Object.getOwnPropertyNames;var getOwnPropertySymbols=Object.getOwnPropertySymbols;var getOwnPropertyDescriptor=Object.getOwnPropertyDescriptor;var getPrototypeOf=Object.getPrototypeOf;var objectPrototype=Object.prototype;function hoistNonReactStatics(targetComponent,sourceComponent,blacklist){if(typeof sourceComponent!=='string'){// don't hoist over string (html) components
	if(objectPrototype){var inheritedComponent=getPrototypeOf(sourceComponent);if(inheritedComponent&&inheritedComponent!==objectPrototype){hoistNonReactStatics(targetComponent,inheritedComponent,blacklist);}}var keys=getOwnPropertyNames(sourceComponent);if(getOwnPropertySymbols){keys=keys.concat(getOwnPropertySymbols(sourceComponent));}var targetStatics=getStatics(targetComponent);var sourceStatics=getStatics(sourceComponent);for(var i=0;i<keys.length;++i){var key=keys[i];if(!KNOWN_STATICS[key]&&!(blacklist&&blacklist[key])&&!(sourceStatics&&sourceStatics[key])&&!(targetStatics&&targetStatics[key])){var descriptor=getOwnPropertyDescriptor(sourceComponent,key);try{// Avoid failures from read-only properties
	defineProperty(targetComponent,key,descriptor);}catch(e){}}}return targetComponent;}return targetComponent;}module.exports=hoistNonReactStatics;

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';var _typeof=typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"?function(obj){return typeof obj;}:function(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;};function _interopDefault(ex){return ex&&(typeof ex==='undefined'?'undefined':_typeof(ex))==='object'&&'default'in ex?ex['default']:ex;}var React=_interopDefault(__webpack_require__(10));var PropTypes=_interopDefault(__webpack_require__(11));var history=__webpack_require__(20);var warning=_interopDefault(__webpack_require__(28));var createContext=_interopDefault(__webpack_require__(31));var invariant=_interopDefault(__webpack_require__(29));var pathToRegexp=_interopDefault(__webpack_require__(34));var reactIs=__webpack_require__(12);var hoistStatics=_interopDefault(__webpack_require__(36));function _extends(){_extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};return _extends.apply(this,arguments);}function _inheritsLoose(subClass,superClass){subClass.prototype=Object.create(superClass.prototype);subClass.prototype.constructor=subClass;_setPrototypeOf(subClass,superClass);}function _setPrototypeOf(o,p){_setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(o,p){o.__proto__=p;return o;};return _setPrototypeOf(o,p);}function _objectWithoutPropertiesLoose(source,excluded){if(source==null)return{};var target={};var sourceKeys=Object.keys(source);var key,i;for(i=0;i<sourceKeys.length;i++){key=sourceKeys[i];if(excluded.indexOf(key)>=0)continue;target[key]=source[key];}return target;}// TODO: Replace with React.createContext once we can assume React 16+
	var createNamedContext=function createNamedContext(name){var context=createContext();context.displayName=name;return context;};var historyContext=/*#__PURE__*/createNamedContext("Router-History");var context=/*#__PURE__*/createNamedContext("Router");/**
	 * The public API for putting history on context.
	 */var Router=/*#__PURE__*/function(_React$Component){_inheritsLoose(Router,_React$Component);Router.computeRootMatch=function computeRootMatch(pathname){return{path:"/",url:"/",params:{},isExact:pathname==="/"};};function Router(props){var _this;_this=_React$Component.call(this,props)||this;_this.state={location:props.history.location};// This is a bit of a hack. We have to start listening for location
	// changes here in the constructor in case there are any <Redirect>s
	// on the initial render. If there are, they will replace/push when
	// they mount and since cDM fires in children before parents, we may
	// get a new location before the <Router> is mounted.
	_this._isMounted=false;_this._pendingLocation=null;if(!props.staticContext){_this.unlisten=props.history.listen(function(location){if(_this._isMounted){_this.setState({location:location});}else{_this._pendingLocation=location;}});}return _this;}var _proto=Router.prototype;_proto.componentDidMount=function componentDidMount(){this._isMounted=true;if(this._pendingLocation){this.setState({location:this._pendingLocation});}};_proto.componentWillUnmount=function componentWillUnmount(){if(this.unlisten){this.unlisten();this._isMounted=false;this._pendingLocation=null;}};_proto.render=function render(){return(/*#__PURE__*/React.createElement(context.Provider,{value:{history:this.props.history,location:this.state.location,match:Router.computeRootMatch(this.state.location.pathname),staticContext:this.props.staticContext}},/*#__PURE__*/React.createElement(historyContext.Provider,{children:this.props.children||null,value:this.props.history})));};return Router;}(React.Component);{Router.propTypes={children:PropTypes.node,history:PropTypes.object.isRequired,staticContext:PropTypes.object};Router.prototype.componentDidUpdate=function(prevProps){warning(prevProps.history===this.props.history,"You cannot change <Router history>");};}/**
	 * The public API for a <Router> that stores location in memory.
	 */var MemoryRouter=/*#__PURE__*/function(_React$Component){_inheritsLoose(MemoryRouter,_React$Component);function MemoryRouter(){var _this;for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}_this=_React$Component.call.apply(_React$Component,[this].concat(args))||this;_this.history=history.createMemoryHistory(_this.props);return _this;}var _proto=MemoryRouter.prototype;_proto.render=function render(){return(/*#__PURE__*/React.createElement(Router,{history:this.history,children:this.props.children}));};return MemoryRouter;}(React.Component);{MemoryRouter.propTypes={initialEntries:PropTypes.array,initialIndex:PropTypes.number,getUserConfirmation:PropTypes.func,keyLength:PropTypes.number,children:PropTypes.node};MemoryRouter.prototype.componentDidMount=function(){warning(!this.props.history,"<MemoryRouter> ignores the history prop. To use a custom history, "+"use `import { Router }` instead of `import { MemoryRouter as Router }`.");};}var Lifecycle=/*#__PURE__*/function(_React$Component){_inheritsLoose(Lifecycle,_React$Component);function Lifecycle(){return _React$Component.apply(this,arguments)||this;}var _proto=Lifecycle.prototype;_proto.componentDidMount=function componentDidMount(){if(this.props.onMount)this.props.onMount.call(this,this);};_proto.componentDidUpdate=function componentDidUpdate(prevProps){if(this.props.onUpdate)this.props.onUpdate.call(this,this,prevProps);};_proto.componentWillUnmount=function componentWillUnmount(){if(this.props.onUnmount)this.props.onUnmount.call(this,this);};_proto.render=function render(){return null;};return Lifecycle;}(React.Component);/**
	 * The public API for prompting the user before navigating away from a screen.
	 */function Prompt(_ref){var message=_ref.message,_ref$when=_ref.when,when=_ref$when===void 0?true:_ref$when;return(/*#__PURE__*/React.createElement(context.Consumer,null,function(context){!context?invariant(false,"You should not use <Prompt> outside a <Router>"):void 0;if(!when||context.staticContext)return null;var method=context.history.block;return(/*#__PURE__*/React.createElement(Lifecycle,{onMount:function onMount(self){self.release=method(message);},onUpdate:function onUpdate(self,prevProps){if(prevProps.message!==message){self.release();self.release=method(message);}},onUnmount:function onUnmount(self){self.release();},message:message}));}));}{var messageType=PropTypes.oneOfType([PropTypes.func,PropTypes.string]);Prompt.propTypes={when:PropTypes.bool,message:messageType.isRequired};}var cache={};var cacheLimit=10000;var cacheCount=0;function compilePath(path){if(cache[path])return cache[path];var generator=pathToRegexp.compile(path);if(cacheCount<cacheLimit){cache[path]=generator;cacheCount++;}return generator;}/**
	 * Public API for generating a URL pathname from a path and parameters.
	 */function generatePath(path,params){if(path===void 0){path="/";}if(params===void 0){params={};}return path==="/"?path:compilePath(path)(params,{pretty:true});}/**
	 * The public API for navigating programmatically with a component.
	 */function Redirect(_ref){var computedMatch=_ref.computedMatch,to=_ref.to,_ref$push=_ref.push,push=_ref$push===void 0?false:_ref$push;return(/*#__PURE__*/React.createElement(context.Consumer,null,function(context){!context?invariant(false,"You should not use <Redirect> outside a <Router>"):void 0;var history$1=context.history,staticContext=context.staticContext;var method=push?history$1.push:history$1.replace;var location=history.createLocation(computedMatch?typeof to==="string"?generatePath(to,computedMatch.params):_extends({},to,{pathname:generatePath(to.pathname,computedMatch.params)}):to);// When rendering in a static context,
	// set the new location immediately.
	if(staticContext){method(location);return null;}return(/*#__PURE__*/React.createElement(Lifecycle,{onMount:function onMount(){method(location);},onUpdate:function onUpdate(self,prevProps){var prevLocation=history.createLocation(prevProps.to);if(!history.locationsAreEqual(prevLocation,_extends({},location,{key:prevLocation.key}))){method(location);}},to:to}));}));}{Redirect.propTypes={push:PropTypes.bool,from:PropTypes.string,to:PropTypes.oneOfType([PropTypes.string,PropTypes.object]).isRequired};}var cache$1={};var cacheLimit$1=10000;var cacheCount$1=0;function compilePath$1(path,options){var cacheKey=""+options.end+options.strict+options.sensitive;var pathCache=cache$1[cacheKey]||(cache$1[cacheKey]={});if(pathCache[path])return pathCache[path];var keys=[];var regexp=pathToRegexp(path,keys,options);var result={regexp:regexp,keys:keys};if(cacheCount$1<cacheLimit$1){pathCache[path]=result;cacheCount$1++;}return result;}/**
	 * Public API for matching a URL pathname to a path.
	 */function matchPath(pathname,options){if(options===void 0){options={};}if(typeof options==="string"||Array.isArray(options)){options={path:options};}var _options=options,path=_options.path,_options$exact=_options.exact,exact=_options$exact===void 0?false:_options$exact,_options$strict=_options.strict,strict=_options$strict===void 0?false:_options$strict,_options$sensitive=_options.sensitive,sensitive=_options$sensitive===void 0?false:_options$sensitive;var paths=[].concat(path);return paths.reduce(function(matched,path){if(!path&&path!=="")return null;if(matched)return matched;var _compilePath=compilePath$1(path,{end:exact,strict:strict,sensitive:sensitive}),regexp=_compilePath.regexp,keys=_compilePath.keys;var match=regexp.exec(pathname);if(!match)return null;var url=match[0],values=match.slice(1);var isExact=pathname===url;if(exact&&!isExact)return null;return{path:path,// the path used to match
	url:path==="/"&&url===""?"/":url,// the matched portion of the URL
	isExact:isExact,// whether or not we matched exactly
	params:keys.reduce(function(memo,key,index){memo[key.name]=values[index];return memo;},{})};},null);}function isEmptyChildren(children){return React.Children.count(children)===0;}function evalChildrenDev(children,props,path){var value=children(props);warning(value!==undefined,"You returned `undefined` from the `children` function of "+("<Route"+(path?" path=\""+path+"\"":"")+">, but you ")+"should have returned a React element or `null`");return value||null;}/**
	 * The public API for matching a single path and rendering.
	 */var Route=/*#__PURE__*/function(_React$Component){_inheritsLoose(Route,_React$Component);function Route(){return _React$Component.apply(this,arguments)||this;}var _proto=Route.prototype;_proto.render=function render(){var _this=this;return(/*#__PURE__*/React.createElement(context.Consumer,null,function(context$1){!context$1?invariant(false,"You should not use <Route> outside a <Router>"):void 0;var location=_this.props.location||context$1.location;var match=_this.props.computedMatch?_this.props.computedMatch// <Switch> already computed the match for us
	:_this.props.path?matchPath(location.pathname,_this.props):context$1.match;var props=_extends({},context$1,{location:location,match:match});var _this$props=_this.props,children=_this$props.children,component=_this$props.component,render=_this$props.render;// Preact uses an empty array as children by
	// default, so use null if that's the case.
	if(Array.isArray(children)&&isEmptyChildren(children)){children=null;}return(/*#__PURE__*/React.createElement(context.Provider,{value:props},props.match?children?typeof children==="function"?evalChildrenDev(children,props,_this.props.path):children:component?/*#__PURE__*/React.createElement(component,props):render?render(props):null:typeof children==="function"?evalChildrenDev(children,props,_this.props.path):null));}));};return Route;}(React.Component);{Route.propTypes={children:PropTypes.oneOfType([PropTypes.func,PropTypes.node]),component:function component(props,propName){if(props[propName]&&!reactIs.isValidElementType(props[propName])){return new Error("Invalid prop 'component' supplied to 'Route': the prop is not a valid React component");}},exact:PropTypes.bool,location:PropTypes.object,path:PropTypes.oneOfType([PropTypes.string,PropTypes.arrayOf(PropTypes.string)]),render:PropTypes.func,sensitive:PropTypes.bool,strict:PropTypes.bool};Route.prototype.componentDidMount=function(){warning(!(this.props.children&&!isEmptyChildren(this.props.children)&&this.props.component),"You should not use <Route component> and <Route children> in the same route; <Route component> will be ignored");warning(!(this.props.children&&!isEmptyChildren(this.props.children)&&this.props.render),"You should not use <Route render> and <Route children> in the same route; <Route render> will be ignored");warning(!(this.props.component&&this.props.render),"You should not use <Route component> and <Route render> in the same route; <Route render> will be ignored");};Route.prototype.componentDidUpdate=function(prevProps){warning(!(this.props.location&&!prevProps.location),'<Route> elements should not change from uncontrolled to controlled (or vice versa). You initially used no "location" prop and then provided one on a subsequent render.');warning(!(!this.props.location&&prevProps.location),'<Route> elements should not change from controlled to uncontrolled (or vice versa). You provided a "location" prop initially but omitted it on a subsequent render.');};}function addLeadingSlash(path){return path.charAt(0)==="/"?path:"/"+path;}function addBasename(basename,location){if(!basename)return location;return _extends({},location,{pathname:addLeadingSlash(basename)+location.pathname});}function stripBasename(basename,location){if(!basename)return location;var base=addLeadingSlash(basename);if(location.pathname.indexOf(base)!==0)return location;return _extends({},location,{pathname:location.pathname.substr(base.length)});}function createURL(location){return typeof location==="string"?location:history.createPath(location);}function staticHandler(methodName){return function(){invariant(false,"You cannot %s with <StaticRouter>",methodName);};}function noop(){}/**
	 * The public top-level API for a "static" <Router>, so-called because it
	 * can't actually change the current location. Instead, it just records
	 * location changes in a context object. Useful mainly in testing and
	 * server-rendering scenarios.
	 */var StaticRouter=/*#__PURE__*/function(_React$Component){_inheritsLoose(StaticRouter,_React$Component);function StaticRouter(){var _this;for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}_this=_React$Component.call.apply(_React$Component,[this].concat(args))||this;_this.handlePush=function(location){return _this.navigateTo(location,"PUSH");};_this.handleReplace=function(location){return _this.navigateTo(location,"REPLACE");};_this.handleListen=function(){return noop;};_this.handleBlock=function(){return noop;};return _this;}var _proto=StaticRouter.prototype;_proto.navigateTo=function navigateTo(location,action){var _this$props=this.props,_this$props$basename=_this$props.basename,basename=_this$props$basename===void 0?"":_this$props$basename,_this$props$context=_this$props.context,context=_this$props$context===void 0?{}:_this$props$context;context.action=action;context.location=addBasename(basename,history.createLocation(location));context.url=createURL(context.location);};_proto.render=function render(){var _this$props2=this.props,_this$props2$basename=_this$props2.basename,basename=_this$props2$basename===void 0?"":_this$props2$basename,_this$props2$context=_this$props2.context,context=_this$props2$context===void 0?{}:_this$props2$context,_this$props2$location=_this$props2.location,location=_this$props2$location===void 0?"/":_this$props2$location,rest=_objectWithoutPropertiesLoose(_this$props2,["basename","context","location"]);var history$1={createHref:function createHref(path){return addLeadingSlash(basename+createURL(path));},action:"POP",location:stripBasename(basename,history.createLocation(location)),push:this.handlePush,replace:this.handleReplace,go:staticHandler("go"),goBack:staticHandler("goBack"),goForward:staticHandler("goForward"),listen:this.handleListen,block:this.handleBlock};return(/*#__PURE__*/React.createElement(Router,_extends({},rest,{history:history$1,staticContext:context})));};return StaticRouter;}(React.Component);{StaticRouter.propTypes={basename:PropTypes.string,context:PropTypes.object,location:PropTypes.oneOfType([PropTypes.string,PropTypes.object])};StaticRouter.prototype.componentDidMount=function(){warning(!this.props.history,"<StaticRouter> ignores the history prop. To use a custom history, "+"use `import { Router }` instead of `import { StaticRouter as Router }`.");};}/**
	 * The public API for rendering the first <Route> that matches.
	 */var Switch=/*#__PURE__*/function(_React$Component){_inheritsLoose(Switch,_React$Component);function Switch(){return _React$Component.apply(this,arguments)||this;}var _proto=Switch.prototype;_proto.render=function render(){var _this=this;return(/*#__PURE__*/React.createElement(context.Consumer,null,function(context){!context?invariant(false,"You should not use <Switch> outside a <Router>"):void 0;var location=_this.props.location||context.location;var element,match;// We use React.Children.forEach instead of React.Children.toArray().find()
	// here because toArray adds keys to all child elements and we do not want
	// to trigger an unmount/remount for two <Route>s that render the same
	// component at different URLs.
	React.Children.forEach(_this.props.children,function(child){if(match==null&&/*#__PURE__*/React.isValidElement(child)){element=child;var path=child.props.path||child.props.from;match=path?matchPath(location.pathname,_extends({},child.props,{path:path})):context.match;}});return match?/*#__PURE__*/React.cloneElement(element,{location:location,computedMatch:match}):null;}));};return Switch;}(React.Component);{Switch.propTypes={children:PropTypes.node,location:PropTypes.object};Switch.prototype.componentDidUpdate=function(prevProps){warning(!(this.props.location&&!prevProps.location),'<Switch> elements should not change from uncontrolled to controlled (or vice versa). You initially used no "location" prop and then provided one on a subsequent render.');warning(!(!this.props.location&&prevProps.location),'<Switch> elements should not change from controlled to uncontrolled (or vice versa). You provided a "location" prop initially but omitted it on a subsequent render.');};}/**
	 * A public higher-order component to access the imperative API
	 */function withRouter(Component){var displayName="withRouter("+(Component.displayName||Component.name)+")";var C=function C(props){var wrappedComponentRef=props.wrappedComponentRef,remainingProps=_objectWithoutPropertiesLoose(props,["wrappedComponentRef"]);return(/*#__PURE__*/React.createElement(context.Consumer,null,function(context){!context?invariant(false,"You should not use <"+displayName+" /> outside a <Router>"):void 0;return(/*#__PURE__*/React.createElement(Component,_extends({},remainingProps,context,{ref:wrappedComponentRef})));}));};C.displayName=displayName;C.WrappedComponent=Component;{C.propTypes={wrappedComponentRef:PropTypes.oneOfType([PropTypes.string,PropTypes.func,PropTypes.object])};}return hoistStatics(C,Component);}var useContext=React.useContext;function useHistory(){{!(typeof useContext==="function")?invariant(false,"You must use React >= 16.8 in order to use useHistory()"):void 0;}return useContext(historyContext);}function useLocation(){{!(typeof useContext==="function")?invariant(false,"You must use React >= 16.8 in order to use useLocation()"):void 0;}return useContext(context).location;}function useParams(){{!(typeof useContext==="function")?invariant(false,"You must use React >= 16.8 in order to use useParams()"):void 0;}var match=useContext(context).match;return match?match.params:{};}function useRouteMatch(path){{!(typeof useContext==="function")?invariant(false,"You must use React >= 16.8 in order to use useRouteMatch()"):void 0;}var location=useLocation();var match=useContext(context).match;return path?matchPath(location.pathname,path):match;}{if(typeof window!=="undefined"){var global=window;var key="__react_router_build__";var buildNames={cjs:"CommonJS",esm:"ES modules",umd:"UMD"};if(global[key]&&global[key]!=="cjs"){var initialBuildName=buildNames[global[key]];var secondaryBuildName=buildNames["cjs"];// TODO: Add link to article that explains in detail how to avoid
	// loading 2 different builds.
	throw new Error("You are loading the "+secondaryBuildName+" build of React Router "+("on a page that is already running the "+initialBuildName+" ")+"build, so things won't work right.");}global[key]="cjs";}}exports.MemoryRouter=MemoryRouter;exports.Prompt=Prompt;exports.Redirect=Redirect;exports.Route=Route;exports.Router=Router;exports.StaticRouter=StaticRouter;exports.Switch=Switch;exports.__HistoryContext=historyContext;exports.__RouterContext=context;exports.generatePath=generatePath;exports.matchPath=matchPath;exports.useHistory=useHistory;exports.useLocation=useLocation;exports.useParams=useParams;exports.useRouteMatch=useRouteMatch;exports.withRouter=withRouter;//# sourceMappingURL=react-router.js.map

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';var _typeof=typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"?function(obj){return typeof obj;}:function(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;};function _interopDefault(ex){return ex&&(typeof ex==='undefined'?'undefined':_typeof(ex))==='object'&&'default'in ex?ex['default']:ex;}var reactRouter=__webpack_require__(8);var React=_interopDefault(__webpack_require__(10));var history=__webpack_require__(20);var PropTypes=_interopDefault(__webpack_require__(11));var warning=_interopDefault(__webpack_require__(28));var invariant=_interopDefault(__webpack_require__(29));function _extends(){_extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};return _extends.apply(this,arguments);}function _inheritsLoose(subClass,superClass){subClass.prototype=Object.create(superClass.prototype);subClass.prototype.constructor=subClass;_setPrototypeOf(subClass,superClass);}function _setPrototypeOf(o,p){_setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(o,p){o.__proto__=p;return o;};return _setPrototypeOf(o,p);}function _objectWithoutPropertiesLoose(source,excluded){if(source==null)return{};var target={};var sourceKeys=Object.keys(source);var key,i;for(i=0;i<sourceKeys.length;i++){key=sourceKeys[i];if(excluded.indexOf(key)>=0)continue;target[key]=source[key];}return target;}/**
	 * The public API for a <Router> that uses HTML5 history.
	 */var BrowserRouter=/*#__PURE__*/function(_React$Component){_inheritsLoose(BrowserRouter,_React$Component);function BrowserRouter(){var _this;for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}_this=_React$Component.call.apply(_React$Component,[this].concat(args))||this;_this.history=history.createBrowserHistory(_this.props);return _this;}var _proto=BrowserRouter.prototype;_proto.render=function render(){return(/*#__PURE__*/React.createElement(reactRouter.Router,{history:this.history,children:this.props.children}));};return BrowserRouter;}(React.Component);{BrowserRouter.propTypes={basename:PropTypes.string,children:PropTypes.node,forceRefresh:PropTypes.bool,getUserConfirmation:PropTypes.func,keyLength:PropTypes.number};BrowserRouter.prototype.componentDidMount=function(){warning(!this.props.history,"<BrowserRouter> ignores the history prop. To use a custom history, "+"use `import { Router }` instead of `import { BrowserRouter as Router }`.");};}/**
	 * The public API for a <Router> that uses window.location.hash.
	 */var HashRouter=/*#__PURE__*/function(_React$Component){_inheritsLoose(HashRouter,_React$Component);function HashRouter(){var _this;for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}_this=_React$Component.call.apply(_React$Component,[this].concat(args))||this;_this.history=history.createHashHistory(_this.props);return _this;}var _proto=HashRouter.prototype;_proto.render=function render(){return(/*#__PURE__*/React.createElement(reactRouter.Router,{history:this.history,children:this.props.children}));};return HashRouter;}(React.Component);{HashRouter.propTypes={basename:PropTypes.string,children:PropTypes.node,getUserConfirmation:PropTypes.func,hashType:PropTypes.oneOf(["hashbang","noslash","slash"])};HashRouter.prototype.componentDidMount=function(){warning(!this.props.history,"<HashRouter> ignores the history prop. To use a custom history, "+"use `import { Router }` instead of `import { HashRouter as Router }`.");};}var resolveToLocation=function resolveToLocation(to,currentLocation){return typeof to==="function"?to(currentLocation):to;};var normalizeToLocation=function normalizeToLocation(to,currentLocation){return typeof to==="string"?history.createLocation(to,null,null,currentLocation):to;};var forwardRefShim=function forwardRefShim(C){return C;};var forwardRef=React.forwardRef;if(typeof forwardRef==="undefined"){forwardRef=forwardRefShim;}function isModifiedEvent(event){return!!(event.metaKey||event.altKey||event.ctrlKey||event.shiftKey);}var LinkAnchor=forwardRef(function(_ref,forwardedRef){var innerRef=_ref.innerRef,navigate=_ref.navigate,_onClick=_ref.onClick,rest=_objectWithoutPropertiesLoose(_ref,["innerRef","navigate","onClick"]);var target=rest.target;var props=_extends({},rest,{onClick:function onClick(event){try{if(_onClick)_onClick(event);}catch(ex){event.preventDefault();throw ex;}if(!event.defaultPrevented&&// onClick prevented default
	event.button===0&&(// ignore everything but left clicks
	!target||target==="_self")&&// let browser handle "target=_blank" etc.
	!isModifiedEvent(event)// ignore clicks with modifier keys
	){event.preventDefault();navigate();}}});// React 15 compat
	if(forwardRefShim!==forwardRef){props.ref=forwardedRef||innerRef;}else{props.ref=innerRef;}/* eslint-disable-next-line jsx-a11y/anchor-has-content */return(/*#__PURE__*/React.createElement("a",props));});{LinkAnchor.displayName="LinkAnchor";}/**
	 * The public API for rendering a history-aware <a>.
	 */var Link=forwardRef(function(_ref2,forwardedRef){var _ref2$component=_ref2.component,component=_ref2$component===void 0?LinkAnchor:_ref2$component,replace=_ref2.replace,to=_ref2.to,innerRef=_ref2.innerRef,rest=_objectWithoutPropertiesLoose(_ref2,["component","replace","to","innerRef"]);return(/*#__PURE__*/React.createElement(reactRouter.__RouterContext.Consumer,null,function(context){!context?invariant(false,"You should not use <Link> outside a <Router>"):void 0;var history$1=context.history;var location=normalizeToLocation(resolveToLocation(to,context.location),context.location);var href=location?history$1.createHref(location):"";var props=_extends({},rest,{href:href,navigate:function navigate(){var location=resolveToLocation(to,context.location);var isDuplicateNavigation=history.createPath(context.location)===history.createPath(normalizeToLocation(location));var method=replace||isDuplicateNavigation?history$1.replace:history$1.push;method(location);}});// React 15 compat
	if(forwardRefShim!==forwardRef){props.ref=forwardedRef||innerRef;}else{props.innerRef=innerRef;}return(/*#__PURE__*/React.createElement(component,props));}));});{var toType=PropTypes.oneOfType([PropTypes.string,PropTypes.object,PropTypes.func]);var refType=PropTypes.oneOfType([PropTypes.string,PropTypes.func,PropTypes.shape({current:PropTypes.any})]);Link.displayName="Link";Link.propTypes={innerRef:refType,onClick:PropTypes.func,replace:PropTypes.bool,target:PropTypes.string,to:toType.isRequired};}var forwardRefShim$1=function forwardRefShim(C){return C;};var forwardRef$1=React.forwardRef;if(typeof forwardRef$1==="undefined"){forwardRef$1=forwardRefShim$1;}function joinClassnames(){for(var _len=arguments.length,classnames=new Array(_len),_key=0;_key<_len;_key++){classnames[_key]=arguments[_key];}return classnames.filter(function(i){return i;}).join(" ");}/**
	 * A <Link> wrapper that knows if it's "active" or not.
	 */var NavLink=forwardRef$1(function(_ref,forwardedRef){var _ref$ariaCurrent=_ref["aria-current"],ariaCurrent=_ref$ariaCurrent===void 0?"page":_ref$ariaCurrent,_ref$activeClassName=_ref.activeClassName,activeClassName=_ref$activeClassName===void 0?"active":_ref$activeClassName,activeStyle=_ref.activeStyle,classNameProp=_ref.className,exact=_ref.exact,isActiveProp=_ref.isActive,locationProp=_ref.location,sensitive=_ref.sensitive,strict=_ref.strict,styleProp=_ref.style,to=_ref.to,innerRef=_ref.innerRef,rest=_objectWithoutPropertiesLoose(_ref,["aria-current","activeClassName","activeStyle","className","exact","isActive","location","sensitive","strict","style","to","innerRef"]);return(/*#__PURE__*/React.createElement(reactRouter.__RouterContext.Consumer,null,function(context){!context?invariant(false,"You should not use <NavLink> outside a <Router>"):void 0;var currentLocation=locationProp||context.location;var toLocation=normalizeToLocation(resolveToLocation(to,currentLocation),currentLocation);var path=toLocation.pathname;// Regex taken from: https://github.com/pillarjs/path-to-regexp/blob/master/index.js#L202
	var escapedPath=path&&path.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1");var match=escapedPath?reactRouter.matchPath(currentLocation.pathname,{path:escapedPath,exact:exact,sensitive:sensitive,strict:strict}):null;var isActive=!!(isActiveProp?isActiveProp(match,currentLocation):match);var className=typeof classNameProp==="function"?classNameProp(isActive):classNameProp;var style=typeof styleProp==="function"?styleProp(isActive):styleProp;if(isActive){className=joinClassnames(className,activeClassName);style=_extends({},style,activeStyle);}var props=_extends({"aria-current":isActive&&ariaCurrent||null,className:className,style:style,to:toLocation},rest);// React 15 compat
	if(forwardRefShim$1!==forwardRef$1){props.ref=forwardedRef||innerRef;}else{props.innerRef=innerRef;}return(/*#__PURE__*/React.createElement(Link,props));}));});{NavLink.displayName="NavLink";var ariaCurrentType=PropTypes.oneOf(["page","step","location","date","time","true","false"]);NavLink.propTypes=_extends({},Link.propTypes,{"aria-current":ariaCurrentType,activeClassName:PropTypes.string,activeStyle:PropTypes.object,className:PropTypes.oneOfType([PropTypes.string,PropTypes.func]),exact:PropTypes.bool,isActive:PropTypes.func,location:PropTypes.object,sensitive:PropTypes.bool,strict:PropTypes.bool,style:PropTypes.oneOfType([PropTypes.object,PropTypes.func])});}Object.defineProperty(exports,'MemoryRouter',{enumerable:true,get:function get(){return reactRouter.MemoryRouter;}});Object.defineProperty(exports,'Prompt',{enumerable:true,get:function get(){return reactRouter.Prompt;}});Object.defineProperty(exports,'Redirect',{enumerable:true,get:function get(){return reactRouter.Redirect;}});Object.defineProperty(exports,'Route',{enumerable:true,get:function get(){return reactRouter.Route;}});Object.defineProperty(exports,'Router',{enumerable:true,get:function get(){return reactRouter.Router;}});Object.defineProperty(exports,'StaticRouter',{enumerable:true,get:function get(){return reactRouter.StaticRouter;}});Object.defineProperty(exports,'Switch',{enumerable:true,get:function get(){return reactRouter.Switch;}});Object.defineProperty(exports,'generatePath',{enumerable:true,get:function get(){return reactRouter.generatePath;}});Object.defineProperty(exports,'matchPath',{enumerable:true,get:function get(){return reactRouter.matchPath;}});Object.defineProperty(exports,'useHistory',{enumerable:true,get:function get(){return reactRouter.useHistory;}});Object.defineProperty(exports,'useLocation',{enumerable:true,get:function get(){return reactRouter.useLocation;}});Object.defineProperty(exports,'useParams',{enumerable:true,get:function get(){return reactRouter.useParams;}});Object.defineProperty(exports,'useRouteMatch',{enumerable:true,get:function get(){return reactRouter.useRouteMatch;}});Object.defineProperty(exports,'withRouter',{enumerable:true,get:function get(){return reactRouter.withRouter;}});exports.BrowserRouter=BrowserRouter;exports.HashRouter=HashRouter;exports.Link=Link;exports.NavLink=NavLink;//# sourceMappingURL=react-router-dom.js.map

/***/ }),
/* 39 */,
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var PropTypes = __webpack_require__(11);

	var _require = __webpack_require__(5),
	    withRouter = _require.withRouter;

	var fetchData = __webpack_require__(41);

	var React = __webpack_require__(10),
	    ToolbarContainer = __webpack_require__(71),
	    BtnStart = __webpack_require__(73),
	    BtnAdd = __webpack_require__(78),
	    BtnLogin = __webpack_require__(79),
	    BtnEdit = __webpack_require__(80),
	    BtnInfo = __webpack_require__(81),
	    StartMenu = __webpack_require__(82),
	    SelectRekv = __webpack_require__(87),
	    Select = __webpack_require__(164),
	    BtnAccount = __webpack_require__(166);
	var Login = __webpack_require__(167);
	var SearchText = __webpack_require__(173);

	var style = __webpack_require__(175);
	var DocRights = __webpack_require__(176);
	var checkRights = __webpack_require__(177);

	var MenuToolBar = function (_React$Component) {
	    _inherits(MenuToolBar, _React$Component);

	    function MenuToolBar(props) {
	        _classCallCheck(this, MenuToolBar);

	        var _this = _possibleConstructorReturn(this, (MenuToolBar.__proto__ || Object.getPrototypeOf(MenuToolBar)).call(this, props));

	        _this.state = {
	            logedIn: false,
	            showLogin: false,
	            startMenuValue: 'parentid',
	            showStartMenu: false,
	            isOpenRekvPage: false,
	            rekvId: props.rekvId ? props.rekvId : 1,
	            keel: 'EST',
	            user: {
	                id: 0,
	                kasutaja: null,
	                ametnik: null
	            }
	        };

	        _this.btnStartClick = _this.btnStartClick.bind(_this);
	        _this.btnAddClick = _this.btnAddClick.bind(_this);
	        _this.btnLoginClick = _this.btnLoginClick.bind(_this);
	        _this.renderStartMenu = _this.renderStartMenu.bind(_this);
	        _this.startMenuClickHandler = _this.startMenuClickHandler.bind(_this);
	        _this.handleChangeSelect = _this.handleChangeSelect.bind(_this);
	        _this.btnAccountClick = _this.btnAccountClick.bind(_this);
	        _this.btnEditRekvClick = _this.btnEditRekvClick.bind(_this);
	        _this.renderLoginComponent = _this.renderLoginComponent.bind(_this);
	        //        this.handleLoginClickEvent = this.handleLoginClickEvent.bind(this);

	        //подписываемся на изменения в сторе
	        var store = _this.props.store;
	        if (store) {
	            store.subscribe(function () {
	                // When state will be updated(in our case, when items will be fetched),
	                // we will update local component state and force component to rerender
	                // with new data.

	                var user = store.getState().statuses.user;
	                _this.setState({
	                    user: user,
	                    logedIn: user.id ? !!user.id : false
	                });
	            });
	        }
	        return _this;
	    }

	    _createClass(MenuToolBar, [{
	        key: 'render',
	        value: function render() {
	            var isEditMode = this.props.edited,
	                toolbarParams = {
	                btnStart: {
	                    show: this.props.params['btnStart'].show || false,
	                    disabled: isEditMode
	                },
	                btnAdd: {
	                    show: true,
	                    disabled: isEditMode
	                },
	                btnLogin: {
	                    show: true,
	                    disabled: false
	                },
	                btnAccount: {
	                    show: this.state.logedIn || false,
	                    disabled: false
	                },
	                btnInfo: {
	                    show: true,
	                    disabled: false
	                }
	            };

	            return React.createElement(
	                'div',
	                { style: style['container'] },
	                React.createElement(
	                    ToolbarContainer,
	                    {
	                        ref: 'menuToolbarContainer',
	                        position: 'left' },
	                    React.createElement(BtnStart, { ref: 'btnStart',
	                        store: this.props.store,
	                        onClick: this.btnStartClick,
	                        show: toolbarParams['btnStart'].show,
	                        disabled: toolbarParams['btnStart'].disabled
	                    }),
	                    this.state.logedIn ? React.createElement(BtnAdd, { onClick: this.btnAddClick,
	                        show: toolbarParams['btnAdd'].show,
	                        disable: toolbarParams['btnAdd'].disabled }) : null,
	                    this.state.logedIn ? React.createElement(BtnAccount, { ref: 'btnAccount',
	                        value: this.state.user.ametnik ? this.state.user.ametnik : '',
	                        onClick: this.btnAccountClick,
	                        show: toolbarParams['btnAccount'].show,
	                        disabled: toolbarParams['btnAccount'].disabled }) : null,
	                    React.createElement(BtnLogin, { ref: 'btnLogin',
	                        value: this.state.logedIn ? 'Välju' : 'Sisse',
	                        onClick: this.btnLoginClick,
	                        show: toolbarParams['btnLogin'].show,
	                        disabled: toolbarParams['btnLogin'].disabled }),
	                    React.createElement(SearchText, {
	                        store: this.props.store
	                    }),
	                    React.createElement(
	                        'select',
	                        { ref: 'select',
	                            style: style['selectKeel'],
	                            value: this.state.keel || 'Est',
	                            id: 'keel',
	                            onChange: this.handleChangeSelect },
	                        React.createElement(
	                            'option',
	                            { value: 'Est', key: 'est',
	                                ref: 'Est' },
	                            ' ',
	                            'EST',
	                            ' '
	                        ),
	                        React.createElement(
	                            'option',
	                            { value: 'RU', key: 'RU',
	                                ref: 'RU' },
	                            ' ',
	                            'RU',
	                            ' '
	                        ),
	                        React.createElement(
	                            'option',
	                            { value: 'ING', key: 'ING',
	                                ref: 'ING' },
	                            ' ',
	                            'ING',
	                            ' '
	                        )
	                    )
	                ),
	                this.renderStartMenu(),
	                this.state.showLogin ? this.renderLoginComponent() : null
	            );
	        }

	        /**
	         * отрисует конмпонент редактирования картины
	         * @returns {*}
	         */

	    }, {
	        key: 'renderLoginComponent',
	        value: function renderLoginComponent() {
	            return React.createElement(
	                Login,
	                { show: true,
	                    id: 0,
	                    store: this.props.store,
	                    loginClickEvent: this.handleLoginClickEvent },
	                'Login'
	            );
	        }
	    }, {
	        key: 'handleChangeSelect',
	        value: function handleChangeSelect(e) {
	            var _this2 = this;

	            var fieldValue = e.target.value;

	            this.setState({ keel: fieldValue });
	            var current = window.location.pathname;
	            this.props.history.replace('/reload');
	            setTimeout(function () {
	                _this2.props.history.replace(current);
	            });
	        }
	    }, {
	        key: 'renderStartMenu',
	        value: function renderStartMenu() {
	            var component = null;
	            var data = [];
	            var user = {};
	            if (this.props.store) {
	                user = this.props.store.getState().statuses.user;
	                data = this.props.store.getState().menu.menu;

	                if (!user || !user.is_admin) {
	                    data = data.filter(function (row) {
	                        // если нет пользователя, или он не адми, грузим только доступные
	                        if (!row.props || !row.props.is_admin) {
	                            return row;
	                        } else {
	                            return null;
	                        }
	                    });
	                }
	            }

	            if (this.state.showStartMenu) {
	                component = React.createElement(StartMenu, { ref: 'startMenu',
	                    store: this.props.store,
	                    value: this.state.startMenuValue,
	                    data: data,
	                    clickHandler: this.startMenuClickHandler });
	            }
	            return component;
	        }
	    }, {
	        key: 'btnStartClick',
	        value: function btnStartClick() {
	            // обработчик для кнопки Start

	            this.setState({ showStartMenu: !this.state.showStartMenu });
	        }
	    }, {
	        key: 'btnAddClick',
	        value: function btnAddClick() {
	            // обработчик для кнопки Start

	            //this.setState({showPicture: !this.state.showPicture});
	            // сигнал не перегрузку основного окна
	            if (this.props.btnClickEventHandler) {
	                this.props.btnClickEventHandler('btnAdd');
	            }
	        }

	        /**
	         * получит от стартого меню данные, спрячет меню
	         */

	    }, {
	        key: 'startMenuClickHandler',
	        value: function startMenuClickHandler(value) {
	            this.setState({ showStartMenu: false });

	            if (this.props.store) {
	                // new action
	                var store = this.props.store;
	                if (value == 'RAAMA') {
	                    window.open('/RAAMA/login');
	                } else {
	                    store.dispatch({ type: 'activePageComponent', activePageComponent: value });
	                }
	            } else {
	                var docType = DocContext['menu'].find(function (row) {
	                    return row.kood === value;
	                });
	                if (docType) {
	                    DocContext.pageName = docType.name;
	                }

	                if (this.props.history) {
	                    return this.props.history.push({
	                        pathname: '/' + DocContext.module + '/' + value,
	                        state: { module: DocContext.module }

	                    });
	                } else {
	                    document.location.href = '/' + DocContext.module + '/' + value;
	                }
	            }
	        }
	    }, {
	        key: 'btnLoginClick',
	        value: function btnLoginClick() {
	            if (!this.state.logedIn) {
	                this.setState({ showLogin: !this.state.showLogin });
	            } else {
	                // удалим из стора пользователя
	                var store = this.props.store;
	                store.dispatch({ type: 'user', user: {} });
	                this.setState({ logedIn: false });
	            }
	        }
	    }, {
	        key: 'btnAccountClick',
	        value: function btnAccountClick() {
	            /*
	                    return this.props.history.push({
	                        pathname: `/${DocContext.module}/userid/${DocContext.userData.userId}`,
	                        state: {module: DocContext.module}
	                    });
	            */
	        }
	    }, {
	        key: 'btnEditRekvClick',
	        value: function btnEditRekvClick() {
	            /*
	                    return this.props.history.push({
	                        pathname: `/${DocContext.module}/rekv/${DocContext.userData.asutusId}`,
	                        state: {module: DocContext.module}
	                    });
	            */

	        }
	    }]);

	    return MenuToolBar;
	}(React.Component);

	/*
	MenuToolBar
	    .propTypes = {
	    edited: PropTypes.bool,
	    params: PropTypes.object.isRequired,
	    logedIn: PropTypes.bool
	};


	MenuToolBar
	    .defaultProps = {
	    edited: false,
	    logedIn: false,
	    params: {
	        btnStart: {
	            show: true
	        }
	    }
	};
	*/

	module.exports = withRouter(MenuToolBar);

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';var axios=__webpack_require__(42);var isOk=false;axios.defaults.baseURL='/';module.exports={fetchDataGet:function fetchDataGet(url){return axios.get(url).then(function(res){return res;}).catch(function(error){console.error('fetchData status, error',error.response.status,error);return{result:'error',status:error.response.status};});},fetchDataPost:function fetchDataPost(url,params,fileType){var headers={'Content-Type':'multipart/form-data'};console.log('fetch',url,params);return axios.post(url,params,headers).then(function(res,err){console.log('fetch lib res',res,err);return res;}).catch(function(error){console.error('fetchData error',error.response.status,error);return{result:'error',status:error.response.status};});},fetchDataPut:function fetchDataPut(url,params){return axios.put(url,params,headers).catch(function(error){console.error('fetchData error',error.response.status,error);return{result:'error',status:error.response.status};});}};

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';module.exports=__webpack_require__(43);

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';var utils=__webpack_require__(44);var bind=__webpack_require__(45);var Axios=__webpack_require__(46);var mergeConfig=__webpack_require__(65);var defaults=__webpack_require__(51);/**
	 * Create an instance of Axios
	 *
	 * @param {Object} defaultConfig The default config for the instance
	 * @return {Axios} A new instance of Axios
	 */function createInstance(defaultConfig){var context=new Axios(defaultConfig);var instance=bind(Axios.prototype.request,context);// Copy axios.prototype to instance
	utils.extend(instance,Axios.prototype,context);// Copy context to instance
	utils.extend(instance,context);// Factory for creating new instances
	instance.create=function create(instanceConfig){return createInstance(mergeConfig(defaultConfig,instanceConfig));};return instance;}// Create the default instance to be exported
	var axios=createInstance(defaults);// Expose Axios class to allow class inheritance
	axios.Axios=Axios;// Expose Cancel & CancelToken
	axios.Cancel=__webpack_require__(63);axios.CancelToken=__webpack_require__(68);axios.isCancel=__webpack_require__(64);axios.VERSION=__webpack_require__(67).version;// Expose all/spread
	axios.all=function all(promises){return Promise.all(promises);};axios.spread=__webpack_require__(69);// Expose isAxiosError
	axios.isAxiosError=__webpack_require__(70);module.exports=axios;// Allow use of default import syntax in TypeScript
	module.exports.default=axios;

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';var _typeof=typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"?function(obj){return typeof obj;}:function(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;};var bind=__webpack_require__(45);// utils is a library of generic helper functions non-specific to axios
	var toString=Object.prototype.toString;/**
	 * Determine if a value is an Array
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is an Array, otherwise false
	 */function isArray(val){return toString.call(val)==='[object Array]';}/**
	 * Determine if a value is undefined
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if the value is undefined, otherwise false
	 */function isUndefined(val){return typeof val==='undefined';}/**
	 * Determine if a value is a Buffer
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is a Buffer, otherwise false
	 */function isBuffer(val){return val!==null&&!isUndefined(val)&&val.constructor!==null&&!isUndefined(val.constructor)&&typeof val.constructor.isBuffer==='function'&&val.constructor.isBuffer(val);}/**
	 * Determine if a value is an ArrayBuffer
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
	 */function isArrayBuffer(val){return toString.call(val)==='[object ArrayBuffer]';}/**
	 * Determine if a value is a FormData
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is an FormData, otherwise false
	 */function isFormData(val){return typeof FormData!=='undefined'&&val instanceof FormData;}/**
	 * Determine if a value is a view on an ArrayBuffer
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
	 */function isArrayBufferView(val){var result;if(typeof ArrayBuffer!=='undefined'&&ArrayBuffer.isView){result=ArrayBuffer.isView(val);}else{result=val&&val.buffer&&val.buffer instanceof ArrayBuffer;}return result;}/**
	 * Determine if a value is a String
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is a String, otherwise false
	 */function isString(val){return typeof val==='string';}/**
	 * Determine if a value is a Number
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is a Number, otherwise false
	 */function isNumber(val){return typeof val==='number';}/**
	 * Determine if a value is an Object
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is an Object, otherwise false
	 */function isObject(val){return val!==null&&(typeof val==='undefined'?'undefined':_typeof(val))==='object';}/**
	 * Determine if a value is a plain Object
	 *
	 * @param {Object} val The value to test
	 * @return {boolean} True if value is a plain Object, otherwise false
	 */function isPlainObject(val){if(toString.call(val)!=='[object Object]'){return false;}var prototype=Object.getPrototypeOf(val);return prototype===null||prototype===Object.prototype;}/**
	 * Determine if a value is a Date
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is a Date, otherwise false
	 */function isDate(val){return toString.call(val)==='[object Date]';}/**
	 * Determine if a value is a File
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is a File, otherwise false
	 */function isFile(val){return toString.call(val)==='[object File]';}/**
	 * Determine if a value is a Blob
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is a Blob, otherwise false
	 */function isBlob(val){return toString.call(val)==='[object Blob]';}/**
	 * Determine if a value is a Function
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is a Function, otherwise false
	 */function isFunction(val){return toString.call(val)==='[object Function]';}/**
	 * Determine if a value is a Stream
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is a Stream, otherwise false
	 */function isStream(val){return isObject(val)&&isFunction(val.pipe);}/**
	 * Determine if a value is a URLSearchParams object
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
	 */function isURLSearchParams(val){return typeof URLSearchParams!=='undefined'&&val instanceof URLSearchParams;}/**
	 * Trim excess whitespace off the beginning and end of a string
	 *
	 * @param {String} str The String to trim
	 * @returns {String} The String freed of excess whitespace
	 */function trim(str){return str.trim?str.trim():str.replace(/^\s+|\s+$/g,'');}/**
	 * Determine if we're running in a standard browser environment
	 *
	 * This allows axios to run in a web worker, and react-native.
	 * Both environments support XMLHttpRequest, but not fully standard globals.
	 *
	 * web workers:
	 *  typeof window -> undefined
	 *  typeof document -> undefined
	 *
	 * react-native:
	 *  navigator.product -> 'ReactNative'
	 * nativescript
	 *  navigator.product -> 'NativeScript' or 'NS'
	 */function isStandardBrowserEnv(){if(typeof navigator!=='undefined'&&(navigator.product==='ReactNative'||navigator.product==='NativeScript'||navigator.product==='NS')){return false;}return typeof window!=='undefined'&&typeof document!=='undefined';}/**
	 * Iterate over an Array or an Object invoking a function for each item.
	 *
	 * If `obj` is an Array callback will be called passing
	 * the value, index, and complete array for each item.
	 *
	 * If 'obj' is an Object callback will be called passing
	 * the value, key, and complete object for each property.
	 *
	 * @param {Object|Array} obj The object to iterate
	 * @param {Function} fn The callback to invoke for each item
	 */function forEach(obj,fn){// Don't bother if no value provided
	if(obj===null||typeof obj==='undefined'){return;}// Force an array if not already something iterable
	if((typeof obj==='undefined'?'undefined':_typeof(obj))!=='object'){/*eslint no-param-reassign:0*/obj=[obj];}if(isArray(obj)){// Iterate over array values
	for(var i=0,l=obj.length;i<l;i++){fn.call(null,obj[i],i,obj);}}else{// Iterate over object keys
	for(var key in obj){if(Object.prototype.hasOwnProperty.call(obj,key)){fn.call(null,obj[key],key,obj);}}}}/**
	 * Accepts varargs expecting each argument to be an object, then
	 * immutably merges the properties of each object and returns result.
	 *
	 * When multiple objects contain the same key the later object in
	 * the arguments list will take precedence.
	 *
	 * Example:
	 *
	 * ```js
	 * var result = merge({foo: 123}, {foo: 456});
	 * console.log(result.foo); // outputs 456
	 * ```
	 *
	 * @param {Object} obj1 Object to merge
	 * @returns {Object} Result of all merge properties
	 */function merge()/* obj1, obj2, obj3, ... */{var result={};function assignValue(val,key){if(isPlainObject(result[key])&&isPlainObject(val)){result[key]=merge(result[key],val);}else if(isPlainObject(val)){result[key]=merge({},val);}else if(isArray(val)){result[key]=val.slice();}else{result[key]=val;}}for(var i=0,l=arguments.length;i<l;i++){forEach(arguments[i],assignValue);}return result;}/**
	 * Extends object a by mutably adding to it the properties of object b.
	 *
	 * @param {Object} a The object to be extended
	 * @param {Object} b The object to copy properties from
	 * @param {Object} thisArg The object to bind function to
	 * @return {Object} The resulting value of object a
	 */function extend(a,b,thisArg){forEach(b,function assignValue(val,key){if(thisArg&&typeof val==='function'){a[key]=bind(val,thisArg);}else{a[key]=val;}});return a;}/**
	 * Remove byte order marker. This catches EF BB BF (the UTF-8 BOM)
	 *
	 * @param {string} content with BOM
	 * @return {string} content value without BOM
	 */function stripBOM(content){if(content.charCodeAt(0)===0xFEFF){content=content.slice(1);}return content;}module.exports={isArray:isArray,isArrayBuffer:isArrayBuffer,isBuffer:isBuffer,isFormData:isFormData,isArrayBufferView:isArrayBufferView,isString:isString,isNumber:isNumber,isObject:isObject,isPlainObject:isPlainObject,isUndefined:isUndefined,isDate:isDate,isFile:isFile,isBlob:isBlob,isFunction:isFunction,isStream:isStream,isURLSearchParams:isURLSearchParams,isStandardBrowserEnv:isStandardBrowserEnv,forEach:forEach,merge:merge,extend:extend,trim:trim,stripBOM:stripBOM};

/***/ }),
/* 45 */
/***/ (function(module, exports) {

	'use strict';module.exports=function bind(fn,thisArg){return function wrap(){var args=new Array(arguments.length);for(var i=0;i<args.length;i++){args[i]=arguments[i];}return fn.apply(thisArg,args);};};

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';var utils=__webpack_require__(44);var buildURL=__webpack_require__(47);var InterceptorManager=__webpack_require__(48);var dispatchRequest=__webpack_require__(49);var mergeConfig=__webpack_require__(65);var validator=__webpack_require__(66);var validators=validator.validators;/**
	 * Create a new instance of Axios
	 *
	 * @param {Object} instanceConfig The default config for the instance
	 */function Axios(instanceConfig){this.defaults=instanceConfig;this.interceptors={request:new InterceptorManager(),response:new InterceptorManager()};}/**
	 * Dispatch a request
	 *
	 * @param {Object} config The config specific for this request (merged with this.defaults)
	 */Axios.prototype.request=function request(config){/*eslint no-param-reassign:0*/// Allow for axios('example/url'[, config]) a la fetch API
	if(typeof config==='string'){config=arguments[1]||{};config.url=arguments[0];}else{config=config||{};}config=mergeConfig(this.defaults,config);// Set config.method
	if(config.method){config.method=config.method.toLowerCase();}else if(this.defaults.method){config.method=this.defaults.method.toLowerCase();}else{config.method='get';}var transitional=config.transitional;if(transitional!==undefined){validator.assertOptions(transitional,{silentJSONParsing:validators.transitional(validators.boolean),forcedJSONParsing:validators.transitional(validators.boolean),clarifyTimeoutError:validators.transitional(validators.boolean)},false);}// filter out skipped interceptors
	var requestInterceptorChain=[];var synchronousRequestInterceptors=true;this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor){if(typeof interceptor.runWhen==='function'&&interceptor.runWhen(config)===false){return;}synchronousRequestInterceptors=synchronousRequestInterceptors&&interceptor.synchronous;requestInterceptorChain.unshift(interceptor.fulfilled,interceptor.rejected);});var responseInterceptorChain=[];this.interceptors.response.forEach(function pushResponseInterceptors(interceptor){responseInterceptorChain.push(interceptor.fulfilled,interceptor.rejected);});var promise;if(!synchronousRequestInterceptors){var chain=[dispatchRequest,undefined];Array.prototype.unshift.apply(chain,requestInterceptorChain);chain=chain.concat(responseInterceptorChain);promise=Promise.resolve(config);while(chain.length){promise=promise.then(chain.shift(),chain.shift());}return promise;}var newConfig=config;while(requestInterceptorChain.length){var onFulfilled=requestInterceptorChain.shift();var onRejected=requestInterceptorChain.shift();try{newConfig=onFulfilled(newConfig);}catch(error){onRejected(error);break;}}try{promise=dispatchRequest(newConfig);}catch(error){return Promise.reject(error);}while(responseInterceptorChain.length){promise=promise.then(responseInterceptorChain.shift(),responseInterceptorChain.shift());}return promise;};Axios.prototype.getUri=function getUri(config){config=mergeConfig(this.defaults,config);return buildURL(config.url,config.params,config.paramsSerializer).replace(/^\?/,'');};// Provide aliases for supported request methods
	utils.forEach(['delete','get','head','options'],function forEachMethodNoData(method){/*eslint func-names:0*/Axios.prototype[method]=function(url,config){return this.request(mergeConfig(config||{},{method:method,url:url,data:(config||{}).data}));};});utils.forEach(['post','put','patch'],function forEachMethodWithData(method){/*eslint func-names:0*/Axios.prototype[method]=function(url,data,config){return this.request(mergeConfig(config||{},{method:method,url:url,data:data}));};});module.exports=Axios;

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';var utils=__webpack_require__(44);function encode(val){return encodeURIComponent(val).replace(/%3A/gi,':').replace(/%24/g,'$').replace(/%2C/gi,',').replace(/%20/g,'+').replace(/%5B/gi,'[').replace(/%5D/gi,']');}/**
	 * Build a URL by appending params to the end
	 *
	 * @param {string} url The base of the url (e.g., http://www.google.com)
	 * @param {object} [params] The params to be appended
	 * @returns {string} The formatted url
	 */module.exports=function buildURL(url,params,paramsSerializer){/*eslint no-param-reassign:0*/if(!params){return url;}var serializedParams;if(paramsSerializer){serializedParams=paramsSerializer(params);}else if(utils.isURLSearchParams(params)){serializedParams=params.toString();}else{var parts=[];utils.forEach(params,function serialize(val,key){if(val===null||typeof val==='undefined'){return;}if(utils.isArray(val)){key=key+'[]';}else{val=[val];}utils.forEach(val,function parseValue(v){if(utils.isDate(v)){v=v.toISOString();}else if(utils.isObject(v)){v=JSON.stringify(v);}parts.push(encode(key)+'='+encode(v));});});serializedParams=parts.join('&');}if(serializedParams){var hashmarkIndex=url.indexOf('#');if(hashmarkIndex!==-1){url=url.slice(0,hashmarkIndex);}url+=(url.indexOf('?')===-1?'?':'&')+serializedParams;}return url;};

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';var utils=__webpack_require__(44);function InterceptorManager(){this.handlers=[];}/**
	 * Add a new interceptor to the stack
	 *
	 * @param {Function} fulfilled The function to handle `then` for a `Promise`
	 * @param {Function} rejected The function to handle `reject` for a `Promise`
	 *
	 * @return {Number} An ID used to remove interceptor later
	 */InterceptorManager.prototype.use=function use(fulfilled,rejected,options){this.handlers.push({fulfilled:fulfilled,rejected:rejected,synchronous:options?options.synchronous:false,runWhen:options?options.runWhen:null});return this.handlers.length-1;};/**
	 * Remove an interceptor from the stack
	 *
	 * @param {Number} id The ID that was returned by `use`
	 */InterceptorManager.prototype.eject=function eject(id){if(this.handlers[id]){this.handlers[id]=null;}};/**
	 * Iterate over all the registered interceptors
	 *
	 * This method is particularly useful for skipping over any
	 * interceptors that may have become `null` calling `eject`.
	 *
	 * @param {Function} fn The function to call for each interceptor
	 */InterceptorManager.prototype.forEach=function forEach(fn){utils.forEach(this.handlers,function forEachHandler(h){if(h!==null){fn(h);}});};module.exports=InterceptorManager;

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';var utils=__webpack_require__(44);var transformData=__webpack_require__(50);var isCancel=__webpack_require__(64);var defaults=__webpack_require__(51);var Cancel=__webpack_require__(63);/**
	 * Throws a `Cancel` if cancellation has been requested.
	 */function throwIfCancellationRequested(config){if(config.cancelToken){config.cancelToken.throwIfRequested();}if(config.signal&&config.signal.aborted){throw new Cancel('canceled');}}/**
	 * Dispatch a request to the server using the configured adapter.
	 *
	 * @param {object} config The config that is to be used for the request
	 * @returns {Promise} The Promise to be fulfilled
	 */module.exports=function dispatchRequest(config){throwIfCancellationRequested(config);// Ensure headers exist
	config.headers=config.headers||{};// Transform request data
	config.data=transformData.call(config,config.data,config.headers,config.transformRequest);// Flatten headers
	config.headers=utils.merge(config.headers.common||{},config.headers[config.method]||{},config.headers);utils.forEach(['delete','get','head','post','put','patch','common'],function cleanHeaderConfig(method){delete config.headers[method];});var adapter=config.adapter||defaults.adapter;return adapter(config).then(function onAdapterResolution(response){throwIfCancellationRequested(config);// Transform response data
	response.data=transformData.call(config,response.data,response.headers,config.transformResponse);return response;},function onAdapterRejection(reason){if(!isCancel(reason)){throwIfCancellationRequested(config);// Transform response data
	if(reason&&reason.response){reason.response.data=transformData.call(config,reason.response.data,reason.response.headers,config.transformResponse);}}return Promise.reject(reason);});};

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';var utils=__webpack_require__(44);var defaults=__webpack_require__(51);/**
	 * Transform the data for a request or a response
	 *
	 * @param {Object|String} data The data to be transformed
	 * @param {Array} headers The headers for the request or response
	 * @param {Array|Function} fns A single function or Array of functions
	 * @returns {*} The resulting transformed data
	 */module.exports=function transformData(data,headers,fns){var context=this||defaults;/*eslint no-param-reassign:0*/utils.forEach(fns,function transform(fn){data=fn.call(context,data,headers);});return data;};

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';var utils=__webpack_require__(44);var normalizeHeaderName=__webpack_require__(52);var enhanceError=__webpack_require__(53);var DEFAULT_CONTENT_TYPE={'Content-Type':'application/x-www-form-urlencoded'};function setContentTypeIfUnset(headers,value){if(!utils.isUndefined(headers)&&utils.isUndefined(headers['Content-Type'])){headers['Content-Type']=value;}}function getDefaultAdapter(){var adapter;if(typeof XMLHttpRequest!=='undefined'){// For browsers use XHR adapter
	adapter=__webpack_require__(54);}else if(typeof process!=='undefined'&&Object.prototype.toString.call(process)==='[object process]'){// For node use HTTP adapter
	adapter=__webpack_require__(54);}return adapter;}function stringifySafely(rawValue,parser,encoder){if(utils.isString(rawValue)){try{(parser||JSON.parse)(rawValue);return utils.trim(rawValue);}catch(e){if(e.name!=='SyntaxError'){throw e;}}}return(encoder||JSON.stringify)(rawValue);}var defaults={transitional:{silentJSONParsing:true,forcedJSONParsing:true,clarifyTimeoutError:false},adapter:getDefaultAdapter(),transformRequest:[function transformRequest(data,headers){normalizeHeaderName(headers,'Accept');normalizeHeaderName(headers,'Content-Type');if(utils.isFormData(data)||utils.isArrayBuffer(data)||utils.isBuffer(data)||utils.isStream(data)||utils.isFile(data)||utils.isBlob(data)){return data;}if(utils.isArrayBufferView(data)){return data.buffer;}if(utils.isURLSearchParams(data)){setContentTypeIfUnset(headers,'application/x-www-form-urlencoded;charset=utf-8');return data.toString();}if(utils.isObject(data)||headers&&headers['Content-Type']==='application/json'){setContentTypeIfUnset(headers,'application/json');return stringifySafely(data);}return data;}],transformResponse:[function transformResponse(data){var transitional=this.transitional||defaults.transitional;var silentJSONParsing=transitional&&transitional.silentJSONParsing;var forcedJSONParsing=transitional&&transitional.forcedJSONParsing;var strictJSONParsing=!silentJSONParsing&&this.responseType==='json';if(strictJSONParsing||forcedJSONParsing&&utils.isString(data)&&data.length){try{return JSON.parse(data);}catch(e){if(strictJSONParsing){if(e.name==='SyntaxError'){throw enhanceError(e,this,'E_JSON_PARSE');}throw e;}}}return data;}],/**
	   * A timeout in milliseconds to abort a request. If set to 0 (default) a
	   * timeout is not created.
	   */timeout:0,xsrfCookieName:'XSRF-TOKEN',xsrfHeaderName:'X-XSRF-TOKEN',maxContentLength:-1,maxBodyLength:-1,validateStatus:function validateStatus(status){return status>=200&&status<300;},headers:{common:{'Accept':'application/json, text/plain, */*'}}};utils.forEach(['delete','get','head'],function forEachMethodNoData(method){defaults.headers[method]={};});utils.forEach(['post','put','patch'],function forEachMethodWithData(method){defaults.headers[method]=utils.merge(DEFAULT_CONTENT_TYPE);});module.exports=defaults;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';var utils=__webpack_require__(44);module.exports=function normalizeHeaderName(headers,normalizedName){utils.forEach(headers,function processHeader(value,name){if(name!==normalizedName&&name.toUpperCase()===normalizedName.toUpperCase()){headers[normalizedName]=value;delete headers[name];}});};

/***/ }),
/* 53 */
/***/ (function(module, exports) {

	'use strict';/**
	 * Update an Error with the specified config, error code, and response.
	 *
	 * @param {Error} error The error to update.
	 * @param {Object} config The config.
	 * @param {string} [code] The error code (for example, 'ECONNABORTED').
	 * @param {Object} [request] The request.
	 * @param {Object} [response] The response.
	 * @returns {Error} The error.
	 */module.exports=function enhanceError(error,config,code,request,response){error.config=config;if(code){error.code=code;}error.request=request;error.response=response;error.isAxiosError=true;error.toJSON=function toJSON(){return{// Standard
	message:this.message,name:this.name,// Microsoft
	description:this.description,number:this.number,// Mozilla
	fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,// Axios
	config:this.config,code:this.code,status:this.response&&this.response.status?this.response.status:null};};return error;};

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';var utils=__webpack_require__(44);var settle=__webpack_require__(55);var cookies=__webpack_require__(57);var buildURL=__webpack_require__(47);var buildFullPath=__webpack_require__(58);var parseHeaders=__webpack_require__(61);var isURLSameOrigin=__webpack_require__(62);var createError=__webpack_require__(56);var defaults=__webpack_require__(51);var Cancel=__webpack_require__(63);module.exports=function xhrAdapter(config){return new Promise(function dispatchXhrRequest(resolve,reject){var requestData=config.data;var requestHeaders=config.headers;var responseType=config.responseType;var onCanceled;function done(){if(config.cancelToken){config.cancelToken.unsubscribe(onCanceled);}if(config.signal){config.signal.removeEventListener('abort',onCanceled);}}if(utils.isFormData(requestData)){delete requestHeaders['Content-Type'];// Let the browser set it
	}var request=new XMLHttpRequest();// HTTP basic authentication
	if(config.auth){var username=config.auth.username||'';var password=config.auth.password?unescape(encodeURIComponent(config.auth.password)):'';requestHeaders.Authorization='Basic '+btoa(username+':'+password);}var fullPath=buildFullPath(config.baseURL,config.url);request.open(config.method.toUpperCase(),buildURL(fullPath,config.params,config.paramsSerializer),true);// Set the request timeout in MS
	request.timeout=config.timeout;function onloadend(){if(!request){return;}// Prepare the response
	var responseHeaders='getAllResponseHeaders'in request?parseHeaders(request.getAllResponseHeaders()):null;var responseData=!responseType||responseType==='text'||responseType==='json'?request.responseText:request.response;var response={data:responseData,status:request.status,statusText:request.statusText,headers:responseHeaders,config:config,request:request};settle(function _resolve(value){resolve(value);done();},function _reject(err){reject(err);done();},response);// Clean up request
	request=null;}if('onloadend'in request){// Use onloadend if available
	request.onloadend=onloadend;}else{// Listen for ready state to emulate onloadend
	request.onreadystatechange=function handleLoad(){if(!request||request.readyState!==4){return;}// The request errored out and we didn't get a response, this will be
	// handled by onerror instead
	// With one exception: request that using file: protocol, most browsers
	// will return status as 0 even though it's a successful request
	if(request.status===0&&!(request.responseURL&&request.responseURL.indexOf('file:')===0)){return;}// readystate handler is calling before onerror or ontimeout handlers,
	// so we should call onloadend on the next 'tick'
	setTimeout(onloadend);};}// Handle browser request cancellation (as opposed to a manual cancellation)
	request.onabort=function handleAbort(){if(!request){return;}reject(createError('Request aborted',config,'ECONNABORTED',request));// Clean up request
	request=null;};// Handle low level network errors
	request.onerror=function handleError(){// Real errors are hidden from us by the browser
	// onerror should only fire if it's a network error
	reject(createError('Network Error',config,null,request));// Clean up request
	request=null;};// Handle timeout
	request.ontimeout=function handleTimeout(){var timeoutErrorMessage=config.timeout?'timeout of '+config.timeout+'ms exceeded':'timeout exceeded';var transitional=config.transitional||defaults.transitional;if(config.timeoutErrorMessage){timeoutErrorMessage=config.timeoutErrorMessage;}reject(createError(timeoutErrorMessage,config,transitional.clarifyTimeoutError?'ETIMEDOUT':'ECONNABORTED',request));// Clean up request
	request=null;};// Add xsrf header
	// This is only done if running in a standard browser environment.
	// Specifically not if we're in a web worker, or react-native.
	if(utils.isStandardBrowserEnv()){// Add xsrf header
	var xsrfValue=(config.withCredentials||isURLSameOrigin(fullPath))&&config.xsrfCookieName?cookies.read(config.xsrfCookieName):undefined;if(xsrfValue){requestHeaders[config.xsrfHeaderName]=xsrfValue;}}// Add headers to the request
	if('setRequestHeader'in request){utils.forEach(requestHeaders,function setRequestHeader(val,key){if(typeof requestData==='undefined'&&key.toLowerCase()==='content-type'){// Remove Content-Type if data is undefined
	delete requestHeaders[key];}else{// Otherwise add header to the request
	request.setRequestHeader(key,val);}});}// Add withCredentials to request if needed
	if(!utils.isUndefined(config.withCredentials)){request.withCredentials=!!config.withCredentials;}// Add responseType to request if needed
	if(responseType&&responseType!=='json'){request.responseType=config.responseType;}// Handle progress if needed
	if(typeof config.onDownloadProgress==='function'){request.addEventListener('progress',config.onDownloadProgress);}// Not all browsers support upload events
	if(typeof config.onUploadProgress==='function'&&request.upload){request.upload.addEventListener('progress',config.onUploadProgress);}if(config.cancelToken||config.signal){// Handle cancellation
	// eslint-disable-next-line func-names
	onCanceled=function onCanceled(cancel){if(!request){return;}reject(!cancel||cancel&&cancel.type?new Cancel('canceled'):cancel);request.abort();request=null;};config.cancelToken&&config.cancelToken.subscribe(onCanceled);if(config.signal){config.signal.aborted?onCanceled():config.signal.addEventListener('abort',onCanceled);}}if(!requestData){requestData=null;}// Send the request
	request.send(requestData);});};

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';var createError=__webpack_require__(56);/**
	 * Resolve or reject a Promise based on response status.
	 *
	 * @param {Function} resolve A function that resolves the promise.
	 * @param {Function} reject A function that rejects the promise.
	 * @param {object} response The response.
	 */module.exports=function settle(resolve,reject,response){var validateStatus=response.config.validateStatus;if(!response.status||!validateStatus||validateStatus(response.status)){resolve(response);}else{reject(createError('Request failed with status code '+response.status,response.config,null,response.request,response));}};

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';var enhanceError=__webpack_require__(53);/**
	 * Create an Error with the specified message, config, error code, request and response.
	 *
	 * @param {string} message The error message.
	 * @param {Object} config The config.
	 * @param {string} [code] The error code (for example, 'ECONNABORTED').
	 * @param {Object} [request] The request.
	 * @param {Object} [response] The response.
	 * @returns {Error} The created error.
	 */module.exports=function createError(message,config,code,request,response){var error=new Error(message);return enhanceError(error,config,code,request,response);};

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';var utils=__webpack_require__(44);module.exports=utils.isStandardBrowserEnv()?// Standard browser envs support document.cookie
	function standardBrowserEnv(){return{write:function write(name,value,expires,path,domain,secure){var cookie=[];cookie.push(name+'='+encodeURIComponent(value));if(utils.isNumber(expires)){cookie.push('expires='+new Date(expires).toGMTString());}if(utils.isString(path)){cookie.push('path='+path);}if(utils.isString(domain)){cookie.push('domain='+domain);}if(secure===true){cookie.push('secure');}document.cookie=cookie.join('; ');},read:function read(name){var match=document.cookie.match(new RegExp('(^|;\\s*)('+name+')=([^;]*)'));return match?decodeURIComponent(match[3]):null;},remove:function remove(name){this.write(name,'',Date.now()-86400000);}};}():// Non standard browser env (web workers, react-native) lack needed support.
	function nonStandardBrowserEnv(){return{write:function write(){},read:function read(){return null;},remove:function remove(){}};}();

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';var isAbsoluteURL=__webpack_require__(59);var combineURLs=__webpack_require__(60);/**
	 * Creates a new URL by combining the baseURL with the requestedURL,
	 * only when the requestedURL is not already an absolute URL.
	 * If the requestURL is absolute, this function returns the requestedURL untouched.
	 *
	 * @param {string} baseURL The base URL
	 * @param {string} requestedURL Absolute or relative URL to combine
	 * @returns {string} The combined full path
	 */module.exports=function buildFullPath(baseURL,requestedURL){if(baseURL&&!isAbsoluteURL(requestedURL)){return combineURLs(baseURL,requestedURL);}return requestedURL;};

/***/ }),
/* 59 */
/***/ (function(module, exports) {

	'use strict';/**
	 * Determines whether the specified URL is absolute
	 *
	 * @param {string} url The URL to test
	 * @returns {boolean} True if the specified URL is absolute, otherwise false
	 */module.exports=function isAbsoluteURL(url){// A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
	// RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
	// by any combination of letters, digits, plus, period, or hyphen.
	return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url);};

/***/ }),
/* 60 */
/***/ (function(module, exports) {

	'use strict';/**
	 * Creates a new URL by combining the specified URLs
	 *
	 * @param {string} baseURL The base URL
	 * @param {string} relativeURL The relative URL
	 * @returns {string} The combined URL
	 */module.exports=function combineURLs(baseURL,relativeURL){return relativeURL?baseURL.replace(/\/+$/,'')+'/'+relativeURL.replace(/^\/+/,''):baseURL;};

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';var utils=__webpack_require__(44);// Headers whose duplicates are ignored by node
	// c.f. https://nodejs.org/api/http.html#http_message_headers
	var ignoreDuplicateOf=['age','authorization','content-length','content-type','etag','expires','from','host','if-modified-since','if-unmodified-since','last-modified','location','max-forwards','proxy-authorization','referer','retry-after','user-agent'];/**
	 * Parse headers into an object
	 *
	 * ```
	 * Date: Wed, 27 Aug 2014 08:58:49 GMT
	 * Content-Type: application/json
	 * Connection: keep-alive
	 * Transfer-Encoding: chunked
	 * ```
	 *
	 * @param {String} headers Headers needing to be parsed
	 * @returns {Object} Headers parsed into an object
	 */module.exports=function parseHeaders(headers){var parsed={};var key;var val;var i;if(!headers){return parsed;}utils.forEach(headers.split('\n'),function parser(line){i=line.indexOf(':');key=utils.trim(line.substr(0,i)).toLowerCase();val=utils.trim(line.substr(i+1));if(key){if(parsed[key]&&ignoreDuplicateOf.indexOf(key)>=0){return;}if(key==='set-cookie'){parsed[key]=(parsed[key]?parsed[key]:[]).concat([val]);}else{parsed[key]=parsed[key]?parsed[key]+', '+val:val;}}});return parsed;};

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';var utils=__webpack_require__(44);module.exports=utils.isStandardBrowserEnv()?// Standard browser envs have full support of the APIs needed to test
	// whether the request URL is of the same origin as current location.
	function standardBrowserEnv(){var msie=/(msie|trident)/i.test(navigator.userAgent);var urlParsingNode=document.createElement('a');var originURL;/**
	    * Parse a URL to discover it's components
	    *
	    * @param {String} url The URL to be parsed
	    * @returns {Object}
	    */function resolveURL(url){var href=url;if(msie){// IE needs attribute set twice to normalize properties
	urlParsingNode.setAttribute('href',href);href=urlParsingNode.href;}urlParsingNode.setAttribute('href',href);// urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
	return{href:urlParsingNode.href,protocol:urlParsingNode.protocol?urlParsingNode.protocol.replace(/:$/,''):'',host:urlParsingNode.host,search:urlParsingNode.search?urlParsingNode.search.replace(/^\?/,''):'',hash:urlParsingNode.hash?urlParsingNode.hash.replace(/^#/,''):'',hostname:urlParsingNode.hostname,port:urlParsingNode.port,pathname:urlParsingNode.pathname.charAt(0)==='/'?urlParsingNode.pathname:'/'+urlParsingNode.pathname};}originURL=resolveURL(window.location.href);/**
	    * Determine if a URL shares the same origin as the current location
	    *
	    * @param {String} requestURL The URL to test
	    * @returns {boolean} True if URL shares the same origin, otherwise false
	    */return function isURLSameOrigin(requestURL){var parsed=utils.isString(requestURL)?resolveURL(requestURL):requestURL;return parsed.protocol===originURL.protocol&&parsed.host===originURL.host;};}():// Non standard browser envs (web workers, react-native) lack needed support.
	function nonStandardBrowserEnv(){return function isURLSameOrigin(){return true;};}();

/***/ }),
/* 63 */
/***/ (function(module, exports) {

	'use strict';/**
	 * A `Cancel` is an object that is thrown when an operation is canceled.
	 *
	 * @class
	 * @param {string=} message The message.
	 */function Cancel(message){this.message=message;}Cancel.prototype.toString=function toString(){return'Cancel'+(this.message?': '+this.message:'');};Cancel.prototype.__CANCEL__=true;module.exports=Cancel;

/***/ }),
/* 64 */
/***/ (function(module, exports) {

	'use strict';module.exports=function isCancel(value){return!!(value&&value.__CANCEL__);};

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';var utils=__webpack_require__(44);/**
	 * Config-specific merge-function which creates a new config-object
	 * by merging two configuration objects together.
	 *
	 * @param {Object} config1
	 * @param {Object} config2
	 * @returns {Object} New object resulting from merging config2 to config1
	 */module.exports=function mergeConfig(config1,config2){// eslint-disable-next-line no-param-reassign
	config2=config2||{};var config={};function getMergedValue(target,source){if(utils.isPlainObject(target)&&utils.isPlainObject(source)){return utils.merge(target,source);}else if(utils.isPlainObject(source)){return utils.merge({},source);}else if(utils.isArray(source)){return source.slice();}return source;}// eslint-disable-next-line consistent-return
	function mergeDeepProperties(prop){if(!utils.isUndefined(config2[prop])){return getMergedValue(config1[prop],config2[prop]);}else if(!utils.isUndefined(config1[prop])){return getMergedValue(undefined,config1[prop]);}}// eslint-disable-next-line consistent-return
	function valueFromConfig2(prop){if(!utils.isUndefined(config2[prop])){return getMergedValue(undefined,config2[prop]);}}// eslint-disable-next-line consistent-return
	function defaultToConfig2(prop){if(!utils.isUndefined(config2[prop])){return getMergedValue(undefined,config2[prop]);}else if(!utils.isUndefined(config1[prop])){return getMergedValue(undefined,config1[prop]);}}// eslint-disable-next-line consistent-return
	function mergeDirectKeys(prop){if(prop in config2){return getMergedValue(config1[prop],config2[prop]);}else if(prop in config1){return getMergedValue(undefined,config1[prop]);}}var mergeMap={'url':valueFromConfig2,'method':valueFromConfig2,'data':valueFromConfig2,'baseURL':defaultToConfig2,'transformRequest':defaultToConfig2,'transformResponse':defaultToConfig2,'paramsSerializer':defaultToConfig2,'timeout':defaultToConfig2,'timeoutMessage':defaultToConfig2,'withCredentials':defaultToConfig2,'adapter':defaultToConfig2,'responseType':defaultToConfig2,'xsrfCookieName':defaultToConfig2,'xsrfHeaderName':defaultToConfig2,'onUploadProgress':defaultToConfig2,'onDownloadProgress':defaultToConfig2,'decompress':defaultToConfig2,'maxContentLength':defaultToConfig2,'maxBodyLength':defaultToConfig2,'transport':defaultToConfig2,'httpAgent':defaultToConfig2,'httpsAgent':defaultToConfig2,'cancelToken':defaultToConfig2,'socketPath':defaultToConfig2,'responseEncoding':defaultToConfig2,'validateStatus':mergeDirectKeys};utils.forEach(Object.keys(config1).concat(Object.keys(config2)),function computeConfigValue(prop){var merge=mergeMap[prop]||mergeDeepProperties;var configValue=merge(prop);utils.isUndefined(configValue)&&merge!==mergeDirectKeys||(config[prop]=configValue);});return config;};

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';var _typeof=typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"?function(obj){return typeof obj;}:function(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;};var VERSION=__webpack_require__(67).version;var validators={};// eslint-disable-next-line func-names
	['object','boolean','number','function','string','symbol'].forEach(function(type,i){validators[type]=function validator(thing){return(typeof thing==='undefined'?'undefined':_typeof(thing))===type||'a'+(i<1?'n ':' ')+type;};});var deprecatedWarnings={};/**
	 * Transitional option validator
	 * @param {function|boolean?} validator - set to false if the transitional option has been removed
	 * @param {string?} version - deprecated version / removed since version
	 * @param {string?} message - some message with additional info
	 * @returns {function}
	 */validators.transitional=function transitional(validator,version,message){function formatMessage(opt,desc){return'[Axios v'+VERSION+'] Transitional option \''+opt+'\''+desc+(message?'. '+message:'');}// eslint-disable-next-line func-names
	return function(value,opt,opts){if(validator===false){throw new Error(formatMessage(opt,' has been removed'+(version?' in '+version:'')));}if(version&&!deprecatedWarnings[opt]){deprecatedWarnings[opt]=true;// eslint-disable-next-line no-console
	console.warn(formatMessage(opt,' has been deprecated since v'+version+' and will be removed in the near future'));}return validator?validator(value,opt,opts):true;};};/**
	 * Assert object's properties type
	 * @param {object} options
	 * @param {object} schema
	 * @param {boolean?} allowUnknown
	 */function assertOptions(options,schema,allowUnknown){if((typeof options==='undefined'?'undefined':_typeof(options))!=='object'){throw new TypeError('options must be an object');}var keys=Object.keys(options);var i=keys.length;while(i-->0){var opt=keys[i];var validator=schema[opt];if(validator){var value=options[opt];var result=value===undefined||validator(value,opt,options);if(result!==true){throw new TypeError('option '+opt+' must be '+result);}continue;}if(allowUnknown!==true){throw Error('Unknown option '+opt);}}}module.exports={assertOptions:assertOptions,validators:validators};

/***/ }),
/* 67 */
/***/ (function(module, exports) {

	"use strict";module.exports={"version":"0.23.0"};

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';var Cancel=__webpack_require__(63);/**
	 * A `CancelToken` is an object that can be used to request cancellation of an operation.
	 *
	 * @class
	 * @param {Function} executor The executor function.
	 */function CancelToken(executor){if(typeof executor!=='function'){throw new TypeError('executor must be a function.');}var resolvePromise;this.promise=new Promise(function promiseExecutor(resolve){resolvePromise=resolve;});var token=this;// eslint-disable-next-line func-names
	this.promise.then(function(cancel){if(!token._listeners)return;var i;var l=token._listeners.length;for(i=0;i<l;i++){token._listeners[i](cancel);}token._listeners=null;});// eslint-disable-next-line func-names
	this.promise.then=function(onfulfilled){var _resolve;// eslint-disable-next-line func-names
	var promise=new Promise(function(resolve){token.subscribe(resolve);_resolve=resolve;}).then(onfulfilled);promise.cancel=function reject(){token.unsubscribe(_resolve);};return promise;};executor(function cancel(message){if(token.reason){// Cancellation has already been requested
	return;}token.reason=new Cancel(message);resolvePromise(token.reason);});}/**
	 * Throws a `Cancel` if cancellation has been requested.
	 */CancelToken.prototype.throwIfRequested=function throwIfRequested(){if(this.reason){throw this.reason;}};/**
	 * Subscribe to the cancel signal
	 */CancelToken.prototype.subscribe=function subscribe(listener){if(this.reason){listener(this.reason);return;}if(this._listeners){this._listeners.push(listener);}else{this._listeners=[listener];}};/**
	 * Unsubscribe from the cancel signal
	 */CancelToken.prototype.unsubscribe=function unsubscribe(listener){if(!this._listeners){return;}var index=this._listeners.indexOf(listener);if(index!==-1){this._listeners.splice(index,1);}};/**
	 * Returns an object that contains a new `CancelToken` and a function that, when called,
	 * cancels the `CancelToken`.
	 */CancelToken.source=function source(){var cancel;var token=new CancelToken(function executor(c){cancel=c;});return{token:token,cancel:cancel};};module.exports=CancelToken;

/***/ }),
/* 69 */
/***/ (function(module, exports) {

	'use strict';/**
	 * Syntactic sugar for invoking a function and expanding an array for arguments.
	 *
	 * Common use case would be to use `Function.prototype.apply`.
	 *
	 *  ```js
	 *  function f(x, y, z) {}
	 *  var args = [1, 2, 3];
	 *  f.apply(null, args);
	 *  ```
	 *
	 * With `spread` this example can be re-written.
	 *
	 *  ```js
	 *  spread(function(x, y, z) {})([1, 2, 3]);
	 *  ```
	 *
	 * @param {Function} callback
	 * @returns {Function}
	 */module.exports=function spread(callback){return function wrap(arr){return callback.apply(null,arr);};};

/***/ }),
/* 70 */
/***/ (function(module, exports) {

	'use strict';/**
	 * Determines whether the payload is an error thrown by Axios
	 *
	 * @param {*} payload The value to test
	 * @returns {boolean} True if the payload is an error thrown by Axios, otherwise false
	 */var _typeof=typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"?function(obj){return typeof obj;}:function(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;};module.exports=function isAxiosError(payload){return(typeof payload==='undefined'?'undefined':_typeof(payload))==='object'&&payload.isAxiosError===true;};

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var PropTypes = __webpack_require__(11);

	var styles = __webpack_require__(72),
	    React = __webpack_require__(10);

	var ToolBarContainer = function (_React$Component) {
	    _inherits(ToolBarContainer, _React$Component);

	    function ToolBarContainer(props) {
	        _classCallCheck(this, ToolBarContainer);

	        return _possibleConstructorReturn(this, (ToolBarContainer.__proto__ || Object.getPrototypeOf(ToolBarContainer)).call(this, props));
	    }

	    _createClass(ToolBarContainer, [{
	        key: 'render',
	        value: function render() {
	            var style = Object.assign({}, styles.toolBarContainerStyle, styles[this.props.position], styles[this.props.container]);
	            return React.createElement(
	                'div',
	                { id: 'toolBarContainer',
	                    ref: 'toolBarContainer',
	                    style: style },
	                this.props.children
	            );
	        }
	    }]);

	    return ToolBarContainer;
	}(React.Component);

	ToolBarContainer.propTypes = {
	    position: PropTypes.string
	};

	ToolBarContainer.defaultProps = {
	    position: 'right',
	    container: {}
	};

	module.exports = ToolBarContainer;

/***/ }),
/* 72 */
/***/ (function(module, exports) {

	'use strict';module.exports={toolBarContainerStyle:{display:'flex',width:'100%',height:'Auto',marginBottom:'5px',marginHeight:'5px',borderRadius:'5px'},right:{justifyContent:'flex-end'},left:{justifyContent:'flex-start'}};

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var PropTypes = __webpack_require__(11);

	var React = __webpack_require__(10),
	    styles = __webpack_require__(74),
	    Button = __webpack_require__(75),
	    ICON = 'start';

	var ButtonRegisterStart = function (_React$PureComponent) {
	    _inherits(ButtonRegisterStart, _React$PureComponent);

	    // кнопка создания документа в регистрах
	    function ButtonRegisterStart(props) {
	        _classCallCheck(this, ButtonRegisterStart);

	        return _possibleConstructorReturn(this, (ButtonRegisterStart.__proto__ || Object.getPrototypeOf(ButtonRegisterStart)).call(this, props));
	    }

	    _createClass(ButtonRegisterStart, [{
	        key: 'handleClick',
	        value: function handleClick(e) {
	            return this.props.onClick('start');
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var _this2 = this;

	            return React.createElement(
	                Button,
	                {
	                    value: '',
	                    ref: 'btnStart',
	                    style: styles.button,
	                    show: this.props.show,
	                    disabled: this.props.disabled,
	                    onClick: function onClick(e) {
	                        return _this2.handleClick(e);
	                    } },
	                React.createElement('img', { ref: 'image', src: styles.icons[ICON] })
	            );
	        }
	    }]);

	    return ButtonRegisterStart;
	}(React.PureComponent);

	ButtonRegisterStart.defaultProps = {
	    disabled: false,
	    show: true
	};

	module.exports = ButtonRegisterStart;

/***/ }),
/* 74 */
/***/ (function(module, exports) {

	'use strict';module.exports={button:{background:'white',margin:'5px 2px',borderRadius:'5px',height:'30px',display:'flex',border:'1px solid gray'},buttonAccount:{width:'50%'},buttonLogin:{width:'100px'},buttonEdit:{display:'flex'},icons:{add:'/images/icons/add.png',edit:'/images/icons/edit.png',delete:'/images/icons/delete.png',filter:'/images/icons/filter.png',print:'/images/icons/print.png',ok:'/images/icons/ok.png',cancel:'/images/icons/cancel.png',save:'/images/icons/save.png',execute:'/images/icons/execute.png',start:'/images/icons/start.png',login:'/images/icons/login.png',account:'/images/icons/account.png',rekv:'/images/icons/rekv.png',info:'/images/icons/info.png',settings:'/images/icons/settings.png',mail:'/images/icons/mail.png',select:'/images/icons/select.png',refresh:'/images/icons/refresh.png',attachment:'/images/icons/attachment.png'}};

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var React = __webpack_require__(10);
	var PropTypes = __webpack_require__(11);

	var styles = __webpack_require__(74);
	var getTextValue = __webpack_require__(76);

	var Button = function (_React$PureComponent) {
	    _inherits(Button, _React$PureComponent);

	    // кнопка создания документа в регистрах
	    function Button(props) {
	        _classCallCheck(this, Button);

	        var _this = _possibleConstructorReturn(this, (Button.__proto__ || Object.getPrototypeOf(Button)).call(this, props));

	        _this.handleClick = _this.handleClick.bind(_this);
	        _this.state = {
	            disabled: _this.props.disabled
	        };
	        return _this;
	    }

	    // will update state if props changed


	    _createClass(Button, [{
	        key: 'handleClick',
	        value: function handleClick(event) {
	            switch (event.type) {
	                case 'click':
	                    this.props.onClick(this.props.value);
	                    break;
	                case 'dblclick':
	                    this.props.onClick(this.props.value);
	                    break;
	                default:
	                    console.log('unhandled', event.type);
	            }
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            // visibility
	            var visibility = this.props.show ? 'initial' : 'hidden';

	            var propStyle = 'style' in this.props ? this.props.style : {},
	                style = Object.assign({}, styles.button, propStyle, { visibility: visibility });

	            return React.createElement(
	                'button',
	                {
	                    disabled: this.state.disabled,
	                    ref: 'button',
	                    style: style,
	                    onDoubleClick: this.handleClick,
	                    onClick: this.handleClick },
	                this.props.children,
	                getTextValue(this.props.value)
	            );
	        }
	    }], [{
	        key: 'getDerivedStateFromProps',
	        value: function getDerivedStateFromProps(nextProps, prevState) {
	            if (nextProps.disabled !== prevState.disabled) {
	                return { disabled: nextProps.disabled };
	            } else return null;
	        }
	    }]);

	    return Button;
	}(React.PureComponent);

	Button.propTypes = {
	    onClick: PropTypes.func.isRequired,
	    value: PropTypes.string.isRequired,
	    style: PropTypes.object
	};

	Button.defaultProps = {
	    disabled: false,
	    show: true
	};

	module.exports = Button;

/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';// will calculate sum of some field
	var langFile=__webpack_require__(77);var DocContext=__webpack_require__(1);var getTextValue=function getTextValue(value,lang){if(!DocContext.keel){DocContext.keel='EST';}var keel=DocContext.keel.toUpperCase()==='EST'?1:DocContext.keel.toUpperCase()==='RU'?2:0;lang=lang?lang:keel;return langFile[value]?langFile[value][lang]:value;};module.exports=getTextValue;

/***/ }),
/* 77 */
/***/ (function(module, exports) {

	'use strict';var _module$exports;function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true});}else{obj[key]=value;}return obj;}module.exports=(_module$exports={"Lisa andmed":['Add data','Lisa andmed','Добавить показания'],"Lisa":["Add","Lisa","Добавить"],"Muuda":["Edit","Muuda","Редактировать"],"Kustuta":["Delete","Kustuta","Удалить"],"Trükk":["Print","Trükk","Печать"],"Filter":["Filter","Filter","Фильтр"],"Uuenda":["Refresh","Uuenda","Обновить"],"Save":["Save","Salvesta","Сохранить"],"Cancel":["Cancel","Katkesta","Отмена"],"Limiit:":["Limit:","Limiit:","Лимит:"],"Välju":["Exit","Välju","Выход"],"Sisse":["Login","Sisse","Вход"],"Juhend":["Help","Juhend","Помощь"],"Dokument":["Document","Dokument","Документ"],"Kuupäev":["Date","Kuupäev","Дата"],"Korr.konto":["Correspondent account","Korr.konto","Кор.счет"],"Tunnus":["Indentificator","Tunnus","Признак"],"Tunnus:":["Indentificator:","Tunnus:","Признак:"],"Üksus:":["Indentificator:","Tunnus:","Признак:"],"Projekt":["Project","Projekt","Проект"],"Projekt:":["Project:","Projekt:","Проект:"],"Objekt":["Object","Objekt","Обьект"],"Korteriomanik":["Owner","Korteriomanik","Владелец"],"raama":["Accounting","raama","Бух.учет"],"Aruanned":["Reports","Aruanned","Отчеты"],"Käibearuanne":["Turnover report","Käibearuanne","Оборотная ведомость"],"Arved koodi järgi":["Bills","Arved koodi järgi","Счета в разрезе услуг"],"Dokumendid":["Documents","Dokumendid","Документы"],"Lepingud":["Contracts","Lepingud","Договора"],"Mõõdukiri andmed":["Data","Andmed","Показания"],"Mõõdu andmed":["Data","Andmed","Показания"],"Sissemakse korraldused":["Income orders","Sissemakse korraldused","Входящие платежные поручения"],"Väljamakse korraldused":["Outcome orders","Väljamakse korraldused","Исходящие платежные поручения"],"Sissemakse kassaorder":["Income cash orders","Sissemakse kassaorder","Приходные кассовые ордера"],"Väljamakse kassaorder":["Outcome cash orders","Väljamakse kassaorder","Расходные кассовые ордера"],"Arved":["Bills register","Arved","Реестр счетов"],"Püsiandmed":["Library","Püsiandmed","Справочники"],"Kliendid":["Clients",'Kliendid',"Клиенты"],"Teenused":["Services","Teenused","Справочник услуг"],"Objektid":["Objects","Objektid","Обьекты"],"Häälestamine":["Properties","Häälestamine","Настройки"],"Oma asutuse andmed":["Base data","Oma asutuse andmed","Данные учреждения"],"Konfiguratsioon":["Config","Konfiguratsioon","Конфигурация"],"Saatja":["Sender","Saatja","Отправитель"],"Staatus":["Status","Staatus","Статус"],"Number":["Number","Number","Номер"],"Asutus":["Client","Asutus","Клиент"],"Selgitus":["Description","Selgitus","Описание"],"Tähtaeg":["Deadline","Tähtaeg","Срок"],"Hind":["Price","Hind","Цена"],"Hind:":["Price:","Hind:","Цена:"],"Raha saaja":["Beneficiary","Raha saaja","Получатель"],"Kassa":["Cash account","Kassa","Касса"],"Arve nr":["Bill nr.","Arve nr.","Счет ном."],"Valitud":["Selected","Valitud","Выбрано"],"Valida":["Select","Valitud","Выбрать"],"Koosta arved":["Create bill","Koosta arved","Создать счет"],"Täitmine":["Execute","Täitmine","Выполнить"],"Leping Nr.":["Contract Nr.","Leping Nr.","Договор номер"],"Andmed":["Data","Andmed","Показания"],"Märkused":["Description","Märkused","Примечания"],"Märkused:":["Description:","Märkused:","Примечания:"],"Korteeriomanik":["Owner","Korteeriomanik","Владелец"],"kogus":["Quantity","Kogus","Количество"],"Kogus:":["Quantity:","Kogus:","Количество:"],"Arveldusarve":["Banc account","Arveldusarve","Расч. счет"]},_defineProperty(_module$exports,'M\xF5\xF5du andmed',["Data","Mõõdu andmed","Показания"]),_defineProperty(_module$exports,"Kasutaja objektid",["User objects","Kasutaja objektid","Обьекты пользователя"]),_defineProperty(_module$exports,"Kasutaja andmed",["User data","Kasutaja andmed","Данные пользователя"]),_defineProperty(_module$exports,"Eelmise kogus",["Previous quantity","Eelmise kogus","Предыдущее кол-во"]),_defineProperty(_module$exports,"Loggid",["Logs","Loggid","Логи"]),_defineProperty(_module$exports,"Maksja",["Payer","Maksja","Плательщик"]),_defineProperty(_module$exports,"Arveldus arve",["Account nr.","Arveldus arve","Расчетный счет"]),_defineProperty(_module$exports,"Viite number",["Referance","Viite number","Ссылка"]),_defineProperty(_module$exports,"Maksepäev",["Payment day","Maksepäev","Дата платежа"]),_defineProperty(_module$exports,"Käibemaks",["Tax","Käibemaks","Налог с оборота"]),_defineProperty(_module$exports,"Summa",["Summa","Summa","Сумма"]),_defineProperty(_module$exports,"Summa:",["Summa:","Summa:","Сумма:"]),_defineProperty(_module$exports,"Koosta tagasimakse",["Create return payment","Koosta tagasimakse","Сделать возврат"]),_defineProperty(_module$exports,"Panga VV logid",["Bank statement","Panga VV logid","Выписка из банка"]),_defineProperty(_module$exports,"Saama XML (SEPA) kõik valitud maksed",["Get XML (SEPA) all selected docs","Saama XML (SEPA) kõik valitud maksed","Получить XML (SEPA) всех выделенных платежей"]),_defineProperty(_module$exports,"Nimi",["Name","Nimi","Имя"]),_defineProperty(_module$exports,"Kontakt",["Сontaсt","Kontakt","Контакт"]),_defineProperty(_module$exports,"Isikukood",["Reg.code","Isikukood","Личный код"]),_defineProperty(_module$exports,"Nimetus",["Name","Nimetus","Наименование"]),_defineProperty(_module$exports,"Aadress",["Address","Aadress","Адрес"]),_defineProperty(_module$exports,"Alus",["Base","Alus","Основание"]),_defineProperty(_module$exports,"Kood",["Code","Kood","Код"]),_defineProperty(_module$exports,"Laadimine...",["Loading...","Laadimine...","Загружаю..."]),_defineProperty(_module$exports,"Omanik",["Owner","Omanik","Собственник"]),_defineProperty(_module$exports,"Om.vorm",["Ownership","Om.vorm","Форма собственности"]),_defineProperty(_module$exports,"Telefon",["Phone","Telefon","Телефон"]),_defineProperty(_module$exports,"Tasud",["Payed","Tasud","Оплачен"]),_defineProperty(_module$exports,"Jääk",["Saldo","Jääk","Сальдо"]),_defineProperty(_module$exports,"Trükk kõik valitud arved",["Print all selected bills","Trükk kõik valitud arved","Печать всех выбранных счетов"]),_defineProperty(_module$exports,"Email kõik valitud arved",["Email all selected bills","Email kõik valitud arved","Отправить эл. почтой выбранные счета"]),_defineProperty(_module$exports,"Saada E-Arved (Omniva) kõik valitud arved",["Send to Omniva all selected bills","Saada E-Arved (Omniva) kõik valitud arved","Отправить в Омнива все выбранные счета"]),_defineProperty(_module$exports,"Saama XML e-arved kõik valitud arved",["get XMl e-arve file","Saama XML e-arved kõik valitud arved","Получить XML файл e-arve"]),_defineProperty(_module$exports,"Saama XML e-arved (SEB) kõik valitud arved",["get XML file for SEB","Saama XML e-arved (SEB) kõik valitud arved","Получить XML для банка SEB"]),_defineProperty(_module$exports,"Saama XML e-arved (SWED) kõik valitud arved",["get XML file for SWED","Saama XML e-arved (SWED) kõik valitud arved","Получить XML для банка SEB"]),_defineProperty(_module$exports,"Read kokku:",["Rows total:","Read kokku:","Всего строк:"]),_defineProperty(_module$exports,"Summa kokku:",["Summa total:","Summa kokku:","Сумма всего:"]),_defineProperty(_module$exports,"Jääk kokku:",["Saldo total:","Jääk kokku:","Долг всего:"]),_defineProperty(_module$exports,"Kokku:",["Total:","Kokku:","Всего:"]),_defineProperty(_module$exports,"Määramata summa:",["Undefined summa:","Määramata summa:","Нераспределенная оплата:"]),_defineProperty(_module$exports,'Arved',["Bills","Arved","Счета"]),_defineProperty(_module$exports,"Viitenumber",["Reference","Viitenumber","Ссылка"]),_defineProperty(_module$exports,"Töötan",["Working","Töötan","Работаю"]),_defineProperty(_module$exports,"Tekkis viga",["Got error","Tekkis viga","Ошибка"]),_defineProperty(_module$exports,"Kas koosta SMK",["Create payment order?","Kas koosta SMK?","Создать платежное поручение?"]),_defineProperty(_module$exports,"Edukalt",["Ok","Edukalt","Ок"]),_defineProperty(_module$exports,"Tekkis viga: kustutamine ebaõnnestus",["Error, delete not success","Tekkis viga: kustutamine ebaõnnestus","Ошибка, удаление не прошло"]),_defineProperty(_module$exports,"SISALDAB",["CONTAINS","SISALDAB","СОДЕРЖИТ"]),_defineProperty(_module$exports,"EI SISALDA",["DO NOT CONTAIN","EI SISALDA","НЕ СОДЕРЖИТ"]),_defineProperty(_module$exports,"Reg.kood/ Isikukood",["Reg.code/ Private code","Reg.kood/Isikukood","Рег.код/Личн.код "]),_defineProperty(_module$exports,"Klient",["Client","Klient","Клиент"]),_defineProperty(_module$exports,"Kasutaja tunnus",["Login","Kasutaja tunnus","Признак пользователя"]),_defineProperty(_module$exports,"Kasutaja nimi",["User name","Kasutaja nimi","Имя пользователя"]),_defineProperty(_module$exports,"Nimi:",["Name:","Nimi:","Имя:"]),_defineProperty(_module$exports,"Muud",["Additional","Muud","Прочее"]),_defineProperty(_module$exports,"Email:",["Email:","Email:","Эл. почта:"]),_defineProperty(_module$exports,"Email",["Email","Email","Эл. почта"]),_defineProperty(_module$exports,"Arvelduste arved",["Banc account","Arvelduste arved","Расч. счета"]),_defineProperty(_module$exports,"Smtp:",["Smtp:","Smtp:","данные почтового сервера"]),_defineProperty(_module$exports,"Port:",["Port:","Port:","Порт почтового сервера"]),_defineProperty(_module$exports,"Email kasutaja:",["Email login:","Email kasutaja:","Имя пользователя почтового сервера"]),_defineProperty(_module$exports,"Email parool:",["Email password:","Email parool:","Пароль  почтового сервера"]),_defineProperty(_module$exports,"Kas kasutaja",["Is user?","Kas kasutaja?","Пользователь"]),_defineProperty(_module$exports,"Kas juhataja",["Is manager?","Kas juhataja?","Руководитель?"]),_defineProperty(_module$exports,"Kas administraator",["Is administrator?","Kas administraator?","Администратор?"]),_defineProperty(_module$exports,"Kas raamatupidaja",["Is accounter?","Kas raamatupidaja?","Бухгалтер?"]),_defineProperty(_module$exports,"Teenus:",["Item:","Teenus:","Услуга:"]),_defineProperty(_module$exports,"Soodustus:",["Bonus:","Soodustus:","Льгота:"]),_defineProperty(_module$exports,"Kbm-ta:",["Without tax:","Kbm-ta:","Без налога:"]),_defineProperty(_module$exports,"Kbm:",["Tax:","Kbm:","Налог:"]),_defineProperty(_module$exports,"Rea lisamine / parandamine",["Row append / update","Rea lisamine / parandamine","Добавить / редактировать строку"]),_module$exports);

/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var React = __webpack_require__(10);
	var PropTypes = __webpack_require__(11);

	var styles = __webpack_require__(74),
	    Button = __webpack_require__(75),
	    ICON = 'add';

	var ButtonRegisterAdd = function (_React$PureComponent) {
	    _inherits(ButtonRegisterAdd, _React$PureComponent);

	    // кнопка создания документа в регистрах
	    function ButtonRegisterAdd(props) {
	        _classCallCheck(this, ButtonRegisterAdd);

	        return _possibleConstructorReturn(this, (ButtonRegisterAdd.__proto__ || Object.getPrototypeOf(ButtonRegisterAdd)).call(this, props));
	    }

	    _createClass(ButtonRegisterAdd, [{
	        key: 'handleClick',
	        value: function handleClick(e) {
	            return this.props.onClick('add');
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var _this2 = this;

	            return React.createElement(
	                Button,
	                {
	                    value: 'Lisa',
	                    ref: 'btnAdd',
	                    style: styles.button,
	                    show: this.props.show,
	                    disabled: this.props.disabled,
	                    onClick: function onClick(e) {
	                        return _this2.handleClick(e);
	                    } },
	                React.createElement('img', { ref: 'image', src: styles.icons[ICON] })
	            );
	        }
	    }]);

	    return ButtonRegisterAdd;
	}(React.PureComponent);

	/*
	ButtonRegisterAdd.propTypes = {
	    onClick: PropTypes.func.isRequired
	}
	*/

	ButtonRegisterAdd.defaultProps = {
	    disabled: false,
	    show: true
	};

	module.exports = ButtonRegisterAdd;

/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var React = __webpack_require__(10);
	var PropTypes = __webpack_require__(11);
	var getTextValue = __webpack_require__(76);

	var styles = __webpack_require__(74),
	    Button = __webpack_require__(75),
	    ICON = 'login';

	var ButtonLogin = function (_React$PureComponent) {
	    _inherits(ButtonLogin, _React$PureComponent);

	    // кнопка создания документа в регистрах
	    function ButtonLogin(props) {
	        _classCallCheck(this, ButtonLogin);

	        var _this = _possibleConstructorReturn(this, (ButtonLogin.__proto__ || Object.getPrototypeOf(ButtonLogin)).call(this, props));

	        _this.state = {
	            value: props.value || 'Sisse'
	        };

	        return _this;
	    }

	    // will update state if props changed


	    _createClass(ButtonLogin, [{
	        key: 'handleClick',
	        value: function handleClick(e) {
	            return this.props.onClick('login');
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var _this2 = this;

	            var value = getTextValue(this.state.value);
	            var buttonStyle = Object.assign({}, styles.button, styles.buttonLogin);

	            return React.createElement(
	                Button,
	                {
	                    value: value,
	                    ref: 'btnLogin',
	                    style: buttonStyle,
	                    show: this.props.show,
	                    disabled: this.props.disabled,
	                    onClick: function onClick(e) {
	                        return _this2.handleClick(e);
	                    } },
	                React.createElement('img', { ref: 'image', src: styles.icons[ICON] })
	            );
	        }
	    }], [{
	        key: 'getDerivedStateFromProps',
	        value: function getDerivedStateFromProps(nextProps, prevState) {
	            if (nextProps.value !== prevState.value) {
	                return { value: nextProps.value };
	            } else return null;
	        }
	    }]);

	    return ButtonLogin;
	}(React.PureComponent);

	ButtonLogin.propTypes = {
	    onClick: PropTypes.func.isRequired,
	    value: PropTypes.string
	};

	ButtonLogin.defaultProps = {
	    disabled: false,
	    show: true,
	    value: 'Välju'
	};

	module.exports = ButtonLogin;

/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var PropTypes = __webpack_require__(11);

	var React = __webpack_require__(10),
	    styles = __webpack_require__(74),
	    Button = __webpack_require__(75),
	    ICON = 'edit';

	var ButtonRegisterEdit = function (_React$PureComponent) {
	    _inherits(ButtonRegisterEdit, _React$PureComponent);

	    // кнопка создания документа в регистрах
	    function ButtonRegisterEdit(props) {
	        _classCallCheck(this, ButtonRegisterEdit);

	        var _this = _possibleConstructorReturn(this, (ButtonRegisterEdit.__proto__ || Object.getPrototypeOf(ButtonRegisterEdit)).call(this, props));

	        _this.state = {
	            disabled: _this.props.disabled
	        };
	        _this.handleClick = _this.handleClick.bind(_this);
	        return _this;
	    }

	    _createClass(ButtonRegisterEdit, [{
	        key: 'handleClick',
	        value: function handleClick(e) {
	            return this.props.onClick(this.props.value);
	        }

	        // will update state if props changed

	    }, {
	        key: 'render',
	        value: function render() {
	            var _this2 = this;

	            var btnStyle = Object.assign({}, styles.buttonEdit, this.props.style ? this.props.style : {});

	            return React.createElement(
	                Button,
	                {
	                    value: this.props.value,
	                    ref: 'btnEdit',
	                    style: btnStyle,
	                    show: this.props.show,
	                    disabled: this.state.disabled,
	                    onClick: function onClick(e) {
	                        return _this2.handleClick(e);
	                    } },
	                React.createElement('img', { ref: 'image', src: styles.icons[ICON] })
	            );
	        }
	    }], [{
	        key: 'getDerivedStateFromProps',
	        value: function getDerivedStateFromProps(nextProps, prevState) {
	            if (nextProps.disabled !== prevState.disabled) {
	                return { disabled: nextProps.disabled };
	            } else return null;
	        }
	    }]);

	    return ButtonRegisterEdit;
	}(React.PureComponent);

	/*
	ButtonRegisterEdit.propTypes = {
	    onClick: PropTypes.func.isRequired,
	    disabled: PropTypes.bool
	}
	*/

	ButtonRegisterEdit.defaultProps = {
	    disabled: false,
	    show: true,
	    value: 'Edit'
	};

	module.exports = ButtonRegisterEdit;

/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var PropTypes = __webpack_require__(11);

	var React = __webpack_require__(10),
	    styles = __webpack_require__(74),
	    Button = __webpack_require__(75),
	    ICON = 'info';
	var getTextValue = __webpack_require__(76);

	var DocContext = __webpack_require__(1);

	var ButtonInfo = function (_React$Component) {
	    _inherits(ButtonInfo, _React$Component);

	    // кнопка создания документа в регистрах
	    function ButtonInfo(props) {
	        _classCallCheck(this, ButtonInfo);

	        var _this = _possibleConstructorReturn(this, (ButtonInfo.__proto__ || Object.getPrototypeOf(ButtonInfo)).call(this, props));

	        _this.handleClick = _this.handleClick.bind(_this);
	        return _this;
	    }

	    /**
	     * обработчик события клик, откроет модальное окно
	     * @param e
	     */


	    _createClass(ButtonInfo, [{
	        key: 'handleClick',
	        value: function handleClick() {
	            var docTypeId = this.props.docTypeId ? this.props.docTypeId : DocContext.docTypeId;
	            var url = '/help/' + docTypeId;
	            window.open('' + url);
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            return React.createElement(
	                'div',
	                null,
	                React.createElement(
	                    Button,
	                    {
	                        ref: 'btnInfo',
	                        value: getTextValue(this.props.value),
	                        show: this.props.show,
	                        disabled: this.props.disabled,
	                        onClick: this.handleClick },
	                    React.createElement('img', { ref: 'image', src: styles.icons[ICON] })
	                )
	            );
	        }
	    }]);

	    return ButtonInfo;
	}(React.Component);

	/*
	ButtonRegisterPrint.propTypes = {
	    onClick: PropTypes.func.isRequired
	}
	*/

	ButtonInfo.defaultProps = {
	    disabled: false,
	    show: true,
	    value: ''
	};

	module.exports = ButtonInfo;

/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var PropTypes = __webpack_require__(11);

	var React = __webpack_require__(10);

	var styles = __webpack_require__(83),
	    _fetchData = __webpack_require__(41),
	    TreeList = __webpack_require__(84);

	var DocContext = __webpack_require__(1);

	var URL = __webpack_require__(86).START_MENU.URL;

	var StartMenu = function (_React$PureComponent) {
	    _inherits(StartMenu, _React$PureComponent);

	    function StartMenu(props) {
	        _classCallCheck(this, StartMenu);

	        var _this = _possibleConstructorReturn(this, (StartMenu.__proto__ || Object.getPrototypeOf(StartMenu)).call(this, props));

	        _this.state = {
	            value: props.value,
	            data: props.data
	        };

	        _this.treeData = props.data;
	        _this.clickHandler = _this.clickHandler.bind(_this);
	        _this.fetchData = _this.fetchData.bind(_this);
	        return _this;
	    }

	    /**
	     * пишем делаем запрос по итогу загрузки
	     */


	    _createClass(StartMenu, [{
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            if (this.props.store) {
	                var data = this.props.store.getState().menu.menu;
	                var user = this.props.store.getState().statuses.user;
	                if (!user || !user.is_admin) {
	                    data = data.filter(function (row) {
	                        // если нет пользователя, или он не адми, грузим только доступные
	                        if (!row.props || !row.props.is_admin) {
	                            return row;
	                        } else {
	                            return null;
	                        }
	                    });
	                }

	                this.treeData = data;
	                this.setState({ data: data });
	                DocContext['menu'] = data;
	            } else {
	                if (!this.treeData.length) {
	                    //делаем запрос на получение данных
	                    this.fetchData(this.props);
	                }
	            }
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            return React.createElement(
	                'div',
	                { style: styles.container },
	                React.createElement(TreeList, { ref: 'treeList',
	                    style: styles.ul,
	                    data: this.treeData,
	                    bindDataField: 'kood',
	                    value: this.state.value,
	                    onClickAction: this.clickHandler
	                })
	            );
	        }
	    }, {
	        key: 'clickHandler',
	        value: function clickHandler(action, value) {
	            if (this.props.clickHandler) {
	                return this.props.clickHandler(value);
	            }
	        }

	        /**
	         * Выполнит запросы
	         */

	    }, {
	        key: 'fetchData',
	        value: function fetchData(props) {
	            var _this2 = this;

	            console.log('statr fetch');
	            var module = DocContext.module ? DocContext.module : 'main';
	            var url = URL + ('/' + module);
	            var params = {};

	            if (this.props.store) {
	                // берем данные из стора
	                var user = this.props.store.getState().statuses.user;
	                params = { userId: user.id, uuid: '' };
	            } else {
	                params = { userId: DocContext.userData.userId, uuid: DocContext.userData.uuid };
	            }
	            console.log('menu', url, params);

	            try {
	                // will check in cache
	                if (!DocContext['menu'] || DocContext['menu'].length === 0) {
	                    _fetchData.fetchDataPost(url, params).then(function (response) {
	                        if (response.status && response.status == 401) {
	                            console.error('Error 401, redirect');
	                            document.location = '/login';
	                        }
	                        if (response) {

	                            _this2.treeData = response.data.data;
	                            // запомним содержимое
	                            DocContext.menu = _this2.treeData;
	                            _this2.forceUpdate();
	                        }
	                    }).catch(function (error) {
	                        console.error('received error-> ', error);
	                        if (error) {
	                            document.location = '/login';
	                        }
	                    });
	                } else {
	                    this.treeData = DocContext['menu'];
	                    this.forceUpdate();
	                }
	            } catch (e) {
	                console.error(e);
	            }
	        }
	    }]);

	    return StartMenu;
	}(React.PureComponent);

	StartMenu.propTypes = {
	    data: PropTypes.array
	};

	StartMenu.defaultProps = {
	    data: []
	};

	module.exports = StartMenu;

/***/ }),
/* 83 */
/***/ (function(module, exports) {

	'use strict';module.exports={container:{width:'auto',minHeight:'350px',position:'absolute',left:'20px',top:'50px',overflow:'auto',zIndex:'999999'},ul:{overflow:'auto'}};

/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var PropTypes = __webpack_require__(11);

	var React = __webpack_require__(10),
	    styles = __webpack_require__(85);
	var DocContext = __webpack_require__(1);
	var getTextValue = __webpack_require__(76);

	var Tree = function (_React$PureComponent) {
	    _inherits(Tree, _React$PureComponent);

	    function Tree(props) {
	        _classCallCheck(this, Tree);

	        var _this = _possibleConstructorReturn(this, (Tree.__proto__ || Object.getPrototypeOf(Tree)).call(this, props));

	        _this.state = {
	            index: _this.getIndex(props.value),
	            value: props.value,
	            hover: false,
	            parentId: 'main'
	        };
	        _this.handleLiClick = _this.handleLiClick.bind(_this);
	        _this.toggleHover = _this.toggleHover.bind(_this);
	        _this.getTree = _this.getTree.bind(_this);
	        return _this;
	    }

	    _createClass(Tree, [{
	        key: 'componentDidUpdate',
	        value: function componentDidUpdate(nextProps) {
	            this.getIndex(nextProps.value);
	            this.setState({ index: this.getIndex(nextProps.value), value: nextProps.value });
	        }
	    }, {
	        key: 'render',
	        value: function render() {

	            if (!this.props.data.length) {
	                return null;
	            }
	            return React.createElement(
	                'div',
	                { ref: 'tree' },
	                this.getTree('0')
	            );
	        }

	        /**
	         * Обработчик для клика
	         * @param selectedIndex
	         * @param selectedId
	         * @param isNode
	         */

	    }, {
	        key: 'handleLiClick',
	        value: function handleLiClick(selectedIndex, selectedId, isNode) {
	            if (!isNode) {
	                if (!isNaN(selectedId)) {
	                    // не нода, а документ
	                    var data = this.props.data && this.props.data.filter ? this.props.data.filter(function (row) {
	                        if (row.id === selectedId) {
	                            return row;
	                        }
	                    }) : [],
	                        value = data[0][this.props.bindDataField];

	                    this.setState({
	                        index: selectedIndex,
	                        value: value
	                    });

	                    if (this.props.onClickAction) {
	                        this.props.onClickAction(this.props.name + 'Change', value);
	                    }
	                } else {
	                    // проект bors
	                    this.setState({ activeComponent: selectedId });
	                    if (this.props.onClickAction) {
	                        this.props.onClickAction(this.props.name + 'Change', selectedId);
	                    }
	                }
	            } else {
	                //isNode
	                if (selectedId !== '0' && selectedId !== DocContext.module) {
	                    this.setState({ parentId: selectedId });
	                }
	            }
	        }

	        /**
	         * вернет данные для ноды = parentId
	         * @param parentId
	         */

	    }, {
	        key: 'getChildren',
	        value: function getChildren(parentId) {
	            return this.props.data.filter(function (row) {
	                if (row.parentid == parentId) {
	                    return row;
	                }
	            });
	        }

	        /**
	         * Построет дерево для ноды = parentId
	         * @param parentId
	         * @returns {XML}
	         */

	    }, {
	        key: 'getTree',
	        value: function getTree(parentId) {
	            var _this2 = this;

	            var data = this.getChildren(parentId),
	                value = this.state.value;

	            var linkStyle = void 0;
	            if (this.state.hover) {
	                linkStyle = { backgroundColor: 'red' };
	            } else {
	                linkStyle = { backgroundColor: 'blue' };
	            }

	            var style = Object.assign({}, styles.ul, this.props.style ? this.props.style : {});
	            return React.createElement(
	                'ul',
	                {
	                    style: style,
	                    ref: 'tree-ul' },
	                data.map(function (subRow, index) {
	                    var style = Object.assign({}, styles.li, value === subRow[_this2.props.bindDataField] && !subRow.is_node ? styles.focused : {}),
	                        refId = 'li-' + index + Math.random();

	                    var is_hidden = false;

	                    if (!subRow.is_node && _this2.state.parentId !== subRow.parentid) {
	                        is_hidden = true;
	                    }

	                    var name = getTextValue(subRow.name);
	                    return React.createElement(
	                        'li',
	                        {
	                            className: subRow.is_node ? 'node' : 'menu',
	                            style: style,
	                            onClick: _this2.handleLiClick.bind(_this2, index, subRow.id, subRow.is_node),
	                            key: refId,
	                            value: subRow.id,
	                            hidden: is_hidden,
	                            ref: refId },
	                        subRow.is_node ? _this2.state.parentId == subRow.id ? '-' : '+' : null,
	                        React.createElement('img', { ref: 'image', src: styles.icons[subRow.kood.toLowerCase()] }),
	                        name,
	                        _this2.getTree(subRow.id)
	                    );
	                })
	            );
	        }
	    }, {
	        key: 'toggleHover',
	        value: function toggleHover() {
	            this.setState({ hover: !this.state.hover });
	        }

	        /**
	         * Вернет индекс строки где заданное поле имеет значение value
	         * @param value
	         * @returns {number}
	         */

	    }, {
	        key: 'getIndex',
	        value: function getIndex(value) {
	            var treeIndex = 0;
	            // we got value, we should find index and initilize idx field
	            for (var i = 0; i++; i < this.props.data[0].length) {
	                if (this.props.data[0].data[i][this.props.bindDataField] === value) {
	                    // found
	                    return i;
	                }
	            }
	            return treeIndex;
	        }
	    }]);

	    return Tree;
	}(React.PureComponent);

	Tree.propTypes = {
	    value: PropTypes.string,
	    data: PropTypes.array,
	    bindDataField: PropTypes.string.isRequired
	};

	Tree.defaultProps = {
	    data: [{
	        id: 0,
	        parentId: 0,
	        name: '',
	        kood: '',
	        selected: false
	    }],
	    value: null,
	    bindDataField: 'id'
	};

	module.exports = Tree;

/***/ }),
/* 85 */
/***/ (function(module, exports) {

	'use strict';module.exports={ul:{backgroundColor:'white',//        marginRight: '20px',
	paddingLeft:'15px',display:'table-row-group',width:'auto'},li:{//        backgroundColor: 'white',
	marginRight:'20px',margin:'10px 10px'},icons:{_laps:'/images/icons/laps.png',_vanem:'/images/icons/vanem.png',settings:'/images/icons/settings.png',_rekv:'/images/icons/rekv.png',aruanne:'/images/icons/reports.png',_lapse_kaart:'/images/icons/services.png',library:'/images/icons/libraries.png',_asutused:'/images/icons/contacts.png',_nomenclature:'/images/icons/nomenclature.png',_lapse_grupp:'/images/icons/groups.png',_lapse_taabel:'/images/icons/journal.png',_tunnus:'/images/icons/atribute.png',document:'/images/icons/documents.png',_arv:'/images/icons/bill.png',_sorder:'/images/icons/sorder.png',_smk:'/images/icons/smk.png'}};

/***/ }),
/* 86 */
/***/ (function(module, exports) {

	"use strict";module.exports={RECORDS_LIMIT:1000,// таски
	// логи
	logs:{gridConfig:[{id:"kasutaja",name:"Kasutaja",width:"20%",show:true},{id:"koostatud",name:"Koostatud",width:"15%"},{id:"muudatud",name:"Muudatud",width:"15%"},{id:"prinditud",name:"Prinditud",width:"15%"},{id:"email",name:"Meilitud",width:"15%"},{id:"earve",name:"e-Arve",width:"15%"},{id:"kustutatud",name:"Kustutatud",width:"15%"}]},// отчет об исполнении
	tulemused:{gridConfig:[{id:"id",name:"id",width:"5%",show:false},{id:'kas_vigane',name:'Staatus',width:'5%',show:true,yesBackgroundColor:'red',noBackgroundColor:'green'},{id:"result",name:"Tulemused",width:"10%",show:false},{id:"error_message",name:"Teatis",width:"70%",show:true},{id:"viitenr",name:"Viitenumber",width:"15%",show:true}]},START_MENU:{URL:'/newApi/startMenu'},REKL:{LIB_OBJS:[{id:'asutused',filter:""}],URL:'/newApi/startMenu'},TEATIS:{toolbarProps:{btnAdd:{show:false,disabled:false}}},VORDER:{LIB_OBJS:[{id:'kassa',filter:''},{id:'asutused',filter:"where id in (select asutusid from lapsed.vanemad)"},{id:'nomenclature',filter:"where dok in ('VORDER')"}]},// счета
	LEPING:{LIB_OBJS:[{id:'nomenclature',filter:"where dok = 'ARV'"},{id:'asutused',filter:""},{id:'objekt',filter:""}]},ANDMED:{LIB_OBJS:[{id:'nomenclature',filter:"where dok = 'ARV'"},{id:'leping',filter:""}]},// sorder
	SORDER:{LIB_OBJS:[{id:'nomenclature',filter:"where dok = 'SORDER'"},{id:'asutused',filter:""},{id:'kassa',filter:""},{id:'arv',filter:""}]},// счета
	ARV:{LIB_OBJS:[{id:'nomenclature',filter:"where dok = 'ARV'"},{id:'asutused',filter:""}],EVENTS:[{name:'Häälestamine',method:null,docTypeId:null},{name:'Trükk kõik valitud arved',method:null,docTypeId:null},{name:'Email kõik valitud arved',method:null,docTypeId:null},{name:'Saada E-Arved (Omniva) kõik valitud arved',method:null,docTypeId:null},{name:'Saama XML e-arved kõik valitud arved',method:null,docTypeId:null},{name:'Saama XML e-arved (SEB) kõik valitud arved',method:null,docTypeId:null},{name:'Saama XML e-arved (SWED) kõik valitud arved',method:null,docTypeId:null}]},NOMENCLATURE:{LIBRARIES:[],TAXIES:[{id:2,kood:'0',name:'0%'},{id:3,kood:'5',name:'5%'},{id:4,kood:'10',name:'10%'},{id:6,kood:'20',name:'20%'}],UHIK:[{id:1,kood:'muud',name:'Muud'},{id:2,kood:'tk',name:'Tükk'},{id:3,kood:'päev',name:'Päev'},{id:4,kood:'kuu',name:'Kuu'},{id:5,kood:'aasta',name:'Aasta'},{id:6,kood:'m3',name:'M3'}],ALGORITMID:[{id:1,kood:'päev',name:'Päev'},{id:2,kood:'konstantne',name:'Konstantne'},{id:3,kood:'külastamine',name:'Külastamine'}],TYYP:[{id:2,kood:'SOODUSTUS',name:' '}]},REKV:{LIB_OBJS:[{id:'kontod',filter:""},{id:'asutuse_liik',filter:''}]},// нода для справочников
	LIBS:{POST_LOAD_LIBS_URL:'/newApi/loadLibs'},// нода для документов
	DOCS:{POST_LOAD_DOCS_URL:'/newApi/document'}};

/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var PropTypes = __webpack_require__(11);
	var radium = __webpack_require__(88);

	var React = __webpack_require__(10),
	    styles = __webpack_require__(163);

	var Index = function (_React$PureComponent) {
	    _inherits(Index, _React$PureComponent);

	    function Index(props) {
	        _classCallCheck(this, Index);

	        var _this = _possibleConstructorReturn(this, (Index.__proto__ || Object.getPrototypeOf(Index)).call(this, props));

	        _this.state = {
	            value: props.value ? props.value : 0 /* здесь по значению ИД */
	            , readOnly: props.readOnly,
	            disabled: props.disabled,
	            fieldValue: props.defaultValue ? props.defaultValue : '' /*здесь по значени поля collId */
	            , btnDelete: props.btnDelete /* если истину, то рисуем рядом кнопку для очистки значения*/
	        };

	        _this.onChange = _this.onChange.bind(_this);

	        return _this;
	    }

	    /**
	     * привяжет к значеню поля
	     * @param data - коллекция
	     * @param collId - поле
	     * @param value - значение
	     */


	    _createClass(Index, [{
	        key: 'findFieldValue',
	        value: function findFieldValue(data, collId, value) {
	            var _this2 = this;

	            // надо привязать данные
	            data.forEach(function (row) {
	                if (row[collId] == value) {
	                    _this2.setState({ value: row[collId], fieldValue: row[collId] });
	                }
	            }, this);
	        }

	        /**
	         *
	         * @param collId
	         * @param rowId
	         * @returns {*}
	         */

	    }, {
	        key: 'getValueById',
	        value: function getValueById(collId, rowId) {
	            var _this3 = this;

	            // вернет значения поля по выбранному ИД

	            var fieldValue = void 0,
	                data = this.props.data;

	            data.forEach(function (row) {
	                if (row[collId] == rowId) {
	                    fieldValue = row[collId];
	                    _this3.setState({ fieldValue: fieldValue });
	                }
	            }, this);

	            return fieldValue;
	        }

	        // will update state if props changed

	    }, {
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            if (this.props.collId && this.props.collId !== 'id') {
	                // ищем ИД по значению поля
	                this.findFieldValue(this.props.data, this.props.collId, this.props.value);
	            }
	        }
	    }, {
	        key: 'onChange',
	        value: function onChange(e) {
	            var fieldValue = e.target.value;

	            if (fieldValue == '') {
	                fieldValue = null;
	            }

	            if (this.props.collId) {
	                // найдем по ид значение поля в collId
	                fieldValue = this.getValueById(this.props.collId, fieldValue);
	            }
	            // сохраним ид как value
	            this.setState({ value: e.target.value, fieldValue: fieldValue });

	            if (this.props.onChange) {
	                // смотрим к чему привязан селект и отдаим его наверх
	                this.props.onChange(this.props.name, fieldValue); // в случае если задан обработчик на верхнем уровне, отдадим обработку туда
	            }
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var inputReadOnly = this.state.readOnly || false,
	                inputDefaultValue = this.props.defaultValue ? this.props.defaultValue : this.props.value || ''; // Дадим дефолтное значение для виджета, чтоб покать его сразу, до подгрузки библиотеки

	            if (!this.state.value) {
	                // добавим пустую строку в массив

	                // проверим наличие пустой строки в массиве
	                var emptyObj = this.props.data.filter(function (obj) {
	                    if (obj.id === 0) {
	                        return obj;
	                    }
	                });
	            }

	            var selectStyle = Object.assign({}, styles.select, inputReadOnly ? styles.hide : {}, inputReadOnly ? styles.readOnly : {});

	            return React.createElement(
	                'select',
	                { ref: 'select',
	                    style: selectStyle,
	                    value: this.state.value || 0,
	                    id: this.props.name,
	                    onChange: this.onChange },
	                this.prepaireDataOptions()
	            );
	        }

	        /**
	         * Подготовит датасет для селекта
	         * @returns {*}
	         */

	    }, {
	        key: 'prepaireDataOptions',
	        value: function prepaireDataOptions() {
	            var _this4 = this;

	            var options = void 0;
	            var data = this.props.data.length ? this.props.data : [];

	            //        data.unshift({id:0, kood:'', name:''});
	            if (data.length) {

	                options = data.map(function (item, index) {
	                    var key = 'option-' + index;
	                    var separator = ' ';
	                    var rowValue = (item.kood ? item.kood : '') + ' ' + separator + ' ' + item.name;
	                    return React.createElement(
	                        'option',
	                        {
	                            value: _this4.props.data.length ? item[_this4.props.collId] : 0,
	                            key: key,
	                            ref: key },
	                        ' ',
	                        rowValue
	                    );
	                }, this);
	            } else {
	                options = React.createElement('option', { value: 0, key: Math.random() });
	            }
	            return options;
	        }

	        /**
	         * установит фокус на элементы
	         */

	    }, {
	        key: 'focus',
	        value: function focus() {
	            this.refs['select'].focus();
	        }
	    }], [{
	        key: 'getDerivedStateFromProps',
	        value: function getDerivedStateFromProps(nextProps, prevState) {

	            if (nextProps.value !== prevState.value) {
	                return { value: nextProps.value };
	            } else return null;
	        }
	    }]);

	    return Index;
	}(React.PureComponent);

	Index.propTypes = {
	    data: PropTypes.arrayOf(PropTypes.shape({
	        id: PropTypes.number,
	        kood: PropTypes.string,
	        nimetus: PropTypes.string
	    })),
	    readOnly: PropTypes.bool,
	    disabled: PropTypes.bool,
	    btnDelete: PropTypes.bool,
	    libs: PropTypes.string,
	    collId: PropTypes.string.isRequired,
	    title: PropTypes.string,
	    placeholder: PropTypes.string,
	    defaultValue: PropTypes.string
	};

	Index.defaultProps = {
	    readOnly: false,
	    disabled: false,
	    valid: true,
	    btnDelete: false,
	    collId: 'id',
	    title: '',
	    defaultValue: '',
	    data: [{ id: 0, kood: '', nimetus: '' }]
	};

	module.exports = radium(Index);

/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';module.exports=__webpack_require__(89).default;module.exports.default=module.exports;

/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {"use strict";Object.defineProperty(exports,"__esModule",{value:true});Object.defineProperty(exports,"Plugins",{enumerable:true,get:function get(){return _plugins["default"];}});Object.defineProperty(exports,"Style",{enumerable:true,get:function get(){return _style["default"];}});Object.defineProperty(exports,"StyleRoot",{enumerable:true,get:function get(){return _styleRoot["default"];}});Object.defineProperty(exports,"getState",{enumerable:true,get:function get(){return _getState["default"];}});Object.defineProperty(exports,"keyframes",{enumerable:true,get:function get(){return _keyframes["default"];}});exports["default"]=void 0;var _enhancer=_interopRequireDefault(__webpack_require__(90));var _plugins=_interopRequireDefault(__webpack_require__(147));var _style=_interopRequireDefault(__webpack_require__(159));var _styleRoot=_interopRequireDefault(__webpack_require__(160));var _getState=_interopRequireDefault(__webpack_require__(141));var _keyframes=_interopRequireDefault(__webpack_require__(162));var _resolveStyles=_interopRequireDefault(__webpack_require__(91));function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj};}function Radium(ComposedComponent){return(0,_enhancer["default"])(ComposedComponent);}// Legacy object support.
	//
	// Normally it would be disfavored to attach these to the `Radium` object
	// because it defeats tree-shaking, using instead the ESM exports. But,
	// the `Radium` `Enhancer` uses **all** of these, so there's no extra "cost"
	// to them being explicitly on the `Radium` object.
	Radium.Plugins=_plugins["default"];Radium.Style=_style["default"];Radium.StyleRoot=_styleRoot["default"];Radium.getState=_getState["default"];Radium.keyframes=_keyframes["default"];if(process.env.NODE_ENV!=='production'){Radium.TestMode={clearState:_resolveStyles["default"].__clearStateForTests,disable:_resolveStyles["default"].__setTestMode.bind(null,false),enable:_resolveStyles["default"].__setTestMode.bind(null,true)};}var _default=Radium;// ESM re-exports
	exports["default"]=_default;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {"use strict";var _typeof2=typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"?function(obj){return typeof obj;}:function(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;};Object.defineProperty(exports,"__esModule",{value:true});exports["default"]=enhanceWithRadium;var _react=_interopRequireWildcard(__webpack_require__(10));var _propTypes=_interopRequireDefault(__webpack_require__(11));var _hoistNonReactStatics=_interopRequireDefault(__webpack_require__(36));var _resolveStyles2=_interopRequireDefault(__webpack_require__(91));var _getRadiumStyleState=_interopRequireDefault(__webpack_require__(144));var _context=__webpack_require__(158);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj};}function _interopRequireWildcard(obj){if(obj&&obj.__esModule){return obj;}else{var newObj={};if(obj!=null){for(var key in obj){if(Object.prototype.hasOwnProperty.call(obj,key)){var desc=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):{};if(desc.get||desc.set){Object.defineProperty(newObj,key,desc);}else{newObj[key]=obj[key];}}}}newObj["default"]=obj;return newObj;}}function _typeof(obj){if(typeof Symbol==="function"&&_typeof2(Symbol.iterator)==="symbol"){_typeof=function _typeof(obj){return typeof obj==="undefined"?"undefined":_typeof2(obj);};}else{_typeof=function _typeof(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj==="undefined"?"undefined":_typeof2(obj);};}return _typeof(obj);}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}function _createClass(Constructor,protoProps,staticProps){if(protoProps)_defineProperties(Constructor.prototype,protoProps);if(staticProps)_defineProperties(Constructor,staticProps);return Constructor;}function _possibleConstructorReturn(self,call){if(call&&(_typeof(call)==="object"||typeof call==="function")){return call;}return _assertThisInitialized(self);}function _assertThisInitialized(self){if(self===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return self;}function _get(target,property,receiver){if(typeof Reflect!=="undefined"&&Reflect.get){_get=Reflect.get;}else{_get=function _get(target,property,receiver){var base=_superPropBase(target,property);if(!base)return;var desc=Object.getOwnPropertyDescriptor(base,property);if(desc.get){return desc.get.call(receiver);}return desc.value;};}return _get(target,property,receiver||target);}function _superPropBase(object,property){while(!Object.prototype.hasOwnProperty.call(object,property)){object=_getPrototypeOf(object);if(object===null)break;}return object;}function _getPrototypeOf(o){_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(o){return o.__proto__||Object.getPrototypeOf(o);};return _getPrototypeOf(o);}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function");}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:true,configurable:true}});if(superClass)_setPrototypeOf(subClass,superClass);}function _setPrototypeOf(o,p){_setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(o,p){o.__proto__=p;return o;};return _setPrototypeOf(o,p);}function _slicedToArray(arr,i){return _arrayWithHoles(arr)||_iterableToArrayLimit(arr,i)||_nonIterableRest();}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance");}function _iterableToArrayLimit(arr,i){var _arr=[];var _n=true;var _d=false;var _e=undefined;try{for(var _i=arr[Symbol.iterator](),_s;!(_n=(_s=_i.next()).done);_n=true){_arr.push(_s.value);if(i&&_arr.length===i)break;}}catch(err){_d=true;_e=err;}finally{try{if(!_n&&_i["return"]!=null)_i["return"]();}finally{if(_d)throw _e;}}return _arr;}function _arrayWithHoles(arr){if(Array.isArray(arr))return arr;}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=arguments[i]!=null?arguments[i]:{};var ownKeys=Object.keys(source);if(typeof Object.getOwnPropertySymbols==='function'){ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable;}));}ownKeys.forEach(function(key){_defineProperty(target,key,source[key]);});}return target;}function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true});}else{obj[key]=value;}return obj;}function _objectWithoutProperties(source,excluded){if(source==null)return{};var target=_objectWithoutPropertiesLoose(source,excluded);var key,i;if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++){key=sourceSymbolKeys[i];if(excluded.indexOf(key)>=0)continue;if(!Object.prototype.propertyIsEnumerable.call(source,key))continue;target[key]=source[key];}}return target;}function _objectWithoutPropertiesLoose(source,excluded){if(source==null)return{};var target={};var sourceKeys=Object.keys(source);var key,i;for(i=0;i<sourceKeys.length;i++){key=sourceKeys[i];if(excluded.indexOf(key)>=0)continue;target[key]=source[key];}return target;}function _toPropertyKey(arg){var key=_toPrimitive(arg,"string");return _typeof(key)==="symbol"?key:String(key);}function _toPrimitive(input,hint){if(_typeof(input)!=="object"||input===null)return input;var prim=input[Symbol.toPrimitive];if(prim!==undefined){var res=prim.call(input,hint||"default");if(_typeof(res)!=="object")return res;throw new TypeError("@@toPrimitive must return a primitive value.");}return(hint==="string"?String:Number)(input);}var KEYS_TO_IGNORE_WHEN_COPYING_PROPERTIES=['arguments','callee','caller','length','name','prototype','type'];var RADIUM_PROTO;var RADIUM_METHODS;function copyProperties(source,target){Object.getOwnPropertyNames(source).forEach(function(key){if(KEYS_TO_IGNORE_WHEN_COPYING_PROPERTIES.indexOf(key)<0&&!target.hasOwnProperty(key)){var descriptor=Object.getOwnPropertyDescriptor(source,key);descriptor&&Object.defineProperty(target,key,descriptor);}});}// Handle scenarios of:
	// - Inherit from `React.Component` in any fashion
	//   See: https://github.com/FormidableLabs/radium/issues/738
	// - There's an explicit `render` field defined
	function isStateless(component){var proto=component.prototype||{};return!component.isReactComponent&&!proto.isReactComponent&&!component.render&&!proto.render;}// Check if value is a real ES class in Native / Node code.
	// See: https://stackoverflow.com/a/30760236
	function isNativeClass(component){return typeof component==='function'&&/^\s*class\s+/.test(component.toString());}// Handle es7 arrow functions on React class method names by detecting
	// and transfering the instance method to original class prototype.
	// (Using a copy of the class).
	// See: https://github.com/FormidableLabs/radium/issues/738
	function copyArrowFuncs(enhancedSelf,ComposedComponent){RADIUM_METHODS.forEach(function(name){var thisDesc=Object.getOwnPropertyDescriptor(enhancedSelf,name);var thisMethod=(thisDesc||{}).value;// Only care if have instance method.
	if(!thisMethod){return;}var radiumDesc=Object.getOwnPropertyDescriptor(RADIUM_PROTO,name);var radiumProtoMethod=(radiumDesc||{}).value;var superProtoMethod=ComposedComponent.prototype[name];// Allow transfer when:
	// 1. have an instance method
	// 2. the super class prototype doesn't have any method
	// 3. it is not already the radium prototype's
	if(!superProtoMethod&&thisMethod!==radiumProtoMethod){// Transfer dynamic render component to Component prototype (copy).
	thisDesc&&Object.defineProperty(ComposedComponent.prototype,name,thisDesc);// Remove instance property, leaving us to have a contrived
	// inheritance chain of (1) radium, (2) superclass.
	delete enhancedSelf[name];}});}function trimRadiumState(enhancer){if(enhancer._extraRadiumStateKeys&&enhancer._extraRadiumStateKeys.length>0){var trimmedRadiumState=enhancer._extraRadiumStateKeys.reduce(function(state,key){// eslint-disable-next-line no-unused-vars
	var extraStateKey=state[key],remainingState=_objectWithoutProperties(state,[key].map(_toPropertyKey));return remainingState;},(0,_getRadiumStyleState["default"])(enhancer));enhancer._lastRadiumState=trimmedRadiumState;enhancer.setState({_radiumStyleState:trimmedRadiumState});}}function cleanUpEnhancer(enhancer){var _radiumMouseUpListener=enhancer._radiumMouseUpListener,_radiumMediaQueryListenersByQuery=enhancer._radiumMediaQueryListenersByQuery;enhancer._radiumIsMounted=false;if(_radiumMouseUpListener){_radiumMouseUpListener.remove();}if(_radiumMediaQueryListenersByQuery){Object.keys(_radiumMediaQueryListenersByQuery).forEach(function(query){_radiumMediaQueryListenersByQuery[query].remove();},enhancer);}}function resolveConfig(propConfig,contextConfig,hocConfig){var config=propConfig||contextConfig||hocConfig;if(hocConfig&&config!==hocConfig){config=_objectSpread({},hocConfig,config);}return config;}function renderRadiumComponent(enhancer,renderedElement,resolvedConfig,propConfig){var _resolveStyles=(0,_resolveStyles2["default"])(enhancer,renderedElement,resolvedConfig),extraStateKeyMap=_resolveStyles.extraStateKeyMap,element=_resolveStyles.element;enhancer._extraRadiumStateKeys=Object.keys(extraStateKeyMap);if(propConfig){return _react["default"].createElement(_context.RadiumConfigContext.Provider,{value:propConfig},element);}return element;}function createEnhancedFunctionComponent(origComponent,config){var RadiumEnhancer=_react["default"].forwardRef(function(props,ref){var radiumConfig=props.radiumConfig,otherProps=_objectWithoutProperties(props,["radiumConfig"]);var radiumConfigContext=(0,_react.useContext)(_context.RadiumConfigContext);var styleKeeperContext=(0,_react.useContext)(_context.StyleKeeperContext);var _useState=(0,_react.useState)({_radiumStyleState:{}}),_useState2=_slicedToArray(_useState,2),state=_useState2[0],setState=_useState2[1];var enhancerApi=(0,_react.useRef)({state:state,setState:setState,_radiumMediaQueryListenersByQuery:undefined,_radiumMouseUpListener:undefined,_radiumIsMounted:true,_lastRadiumState:undefined,_extraRadiumStateKeys:undefined,_radiumStyleKeeper:styleKeeperContext}).current;// result of useRef is never recreated and is designed to be mutable
	// we need to make sure the latest state is attached to it
	enhancerApi.state=state;(0,_react.useEffect)(function(){return function(){cleanUpEnhancer(enhancerApi);};},[enhancerApi]);var hasExtraStateKeys=enhancerApi._extraRadiumStateKeys&&enhancerApi._extraRadiumStateKeys.length>0;(0,_react.useEffect)(function(){trimRadiumState(enhancerApi);},[hasExtraStateKeys,enhancerApi]);var renderedElement=origComponent(otherProps,ref);var currentConfig=resolveConfig(radiumConfig,radiumConfigContext,config);return renderRadiumComponent(enhancerApi,renderedElement,currentConfig,radiumConfig);});RadiumEnhancer._isRadiumEnhanced=true;RadiumEnhancer.defaultProps=origComponent.defaultProps;return(0,_hoistNonReactStatics["default"])(RadiumEnhancer,origComponent);}function createEnhancedClassComponent(origComponent,ComposedComponent,config){var RadiumEnhancer=/*#__PURE__*/function(_ComposedComponent){_inherits(RadiumEnhancer,_ComposedComponent);// need to attempt to assign to this.state in case
	// super component is setting state on construction,
	// otherwise class properties reinitialize to undefined
	// need to assign the following methods to this.xxx as
	// tests attempt to set this on the original component
	function RadiumEnhancer(){var _this;_classCallCheck(this,RadiumEnhancer);_this=_possibleConstructorReturn(this,_getPrototypeOf(RadiumEnhancer).apply(this,arguments));_this.state=_this.state||{};_this._radiumStyleKeeper=_this.props.styleKeeperContext;_this._radiumMediaQueryListenersByQuery=_this._radiumMediaQueryListenersByQuery;_this._radiumMouseUpListener=_this._radiumMouseUpListener;_this._radiumIsMounted=true;_this._lastRadiumState=void 0;_this._extraRadiumStateKeys=void 0;_this.state._radiumStyleState={};var self=_assertThisInitialized(_this);// Handle es7 arrow functions on React class method
	copyArrowFuncs(self,ComposedComponent);return _this;}_createClass(RadiumEnhancer,[{key:"componentDidUpdate",value:function componentDidUpdate(prevProps,prevState,snapshot){if(_get(_getPrototypeOf(RadiumEnhancer.prototype),"componentDidUpdate",this)){_get(_getPrototypeOf(RadiumEnhancer.prototype),"componentDidUpdate",this).call(this,prevProps,prevState,snapshot);}trimRadiumState(this);}},{key:"componentWillUnmount",value:function componentWillUnmount(){if(_get(_getPrototypeOf(RadiumEnhancer.prototype),"componentWillUnmount",this)){_get(_getPrototypeOf(RadiumEnhancer.prototype),"componentWillUnmount",this).call(this);}cleanUpEnhancer(this);}},{key:"render",value:function render(){var renderedElement=_get(_getPrototypeOf(RadiumEnhancer.prototype),"render",this).call(this);var currentConfig=resolveConfig(this.props.radiumConfig,this.props.radiumConfigContext,config);return renderRadiumComponent(this,renderedElement,currentConfig,this.props.radiumConfig);}}]);return RadiumEnhancer;}(ComposedComponent);// Lazy infer the method names of the Enhancer.
	RadiumEnhancer._isRadiumEnhanced=true;RADIUM_PROTO=RadiumEnhancer.prototype;RADIUM_METHODS=Object.getOwnPropertyNames(RADIUM_PROTO).filter(function(n){return n!=='constructor'&&typeof RADIUM_PROTO[n]==='function';});// Class inheritance uses Object.create and because of __proto__ issues
	// with IE <10 any static properties of the superclass aren't inherited and
	// so need to be manually populated.
	// See http://babeljs.io/docs/advanced/caveats/#classes-10-and-below-
	copyProperties(origComponent,RadiumEnhancer);if(process.env.NODE_ENV!=='production'){// This also fixes React Hot Loader by exposing the original components top
	// level prototype methods on the Radium enhanced prototype as discussed in
	// https://github.com/FormidableLabs/radium/issues/219.
	copyProperties(ComposedComponent.prototype,RadiumEnhancer.prototype);}// add Radium propTypes to enhanced component's propTypes
	if(RadiumEnhancer.propTypes&&RadiumEnhancer.propTypes.style){RadiumEnhancer.propTypes=_objectSpread({},RadiumEnhancer.propTypes,{style:_propTypes["default"].oneOfType([_propTypes["default"].array,_propTypes["default"].object])});}// copy display name to enhanced component
	RadiumEnhancer.displayName=origComponent.displayName||origComponent.name||'Component';return(0,_context.withRadiumContexts)(RadiumEnhancer);}function createComposedFromNativeClass(ComposedComponent){ComposedComponent=function(OrigComponent){function NewComponent(){// Use Reflect.construct to simulate 'new'
	var obj=Reflect.construct(OrigComponent,arguments,this.constructor);return obj;}// $FlowFixMe
	Reflect.setPrototypeOf(NewComponent.prototype,OrigComponent.prototype);// $FlowFixMe
	Reflect.setPrototypeOf(NewComponent,OrigComponent);return NewComponent;}(ComposedComponent);return ComposedComponent;}var ReactForwardRefSymbol=(0,_react.forwardRef)(function(){return null;}).$$typeof;function enhanceWithRadium(configOrComposedComponent){var config=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};if(ReactForwardRefSymbol&&configOrComposedComponent.$$typeof===ReactForwardRefSymbol){return createEnhancedFunctionComponent(configOrComposedComponent.render,config);}if(typeof configOrComposedComponent!=='function'){return createFactoryFromConfig(config,configOrComposedComponent);}var origComponent=configOrComposedComponent;// Handle stateless components
	if(isStateless(origComponent)){return createEnhancedFunctionComponent(origComponent,config);}var _ComposedComponent2=origComponent;// Radium is transpiled in npm, so it isn't really using es6 classes at
	// runtime.  However, the user of Radium might be.  In this case we have
	// to maintain forward compatibility with native es classes.
	if(isNativeClass(_ComposedComponent2)){_ComposedComponent2=createComposedFromNativeClass(_ComposedComponent2);}// Shallow copy composed if still original (we may mutate later).
	if(_ComposedComponent2===origComponent){_ComposedComponent2=/*#__PURE__*/function(_ComposedComponent3){_inherits(ComposedComponent,_ComposedComponent3);function ComposedComponent(){_classCallCheck(this,ComposedComponent);return _possibleConstructorReturn(this,_getPrototypeOf(ComposedComponent).apply(this,arguments));}return ComposedComponent;}(_ComposedComponent2);}return createEnhancedClassComponent(origComponent,_ComposedComponent2,config);}function createFactoryFromConfig(config,configOrComposedComponent){var newConfig=_objectSpread({},config,configOrComposedComponent);return function(configOrComponent){return enhanceWithRadium(configOrComponent,newConfig);};}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {"use strict";var _typeof2=typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"?function(obj){return typeof obj;}:function(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;};Object.defineProperty(exports,"__esModule",{value:true});exports["default"]=void 0;var _appendImportantToEachValue=_interopRequireDefault(__webpack_require__(92));var _cssRuleSetToString=_interopRequireDefault(__webpack_require__(95));var _getState=_interopRequireDefault(__webpack_require__(141));var _getStateKey=_interopRequireDefault(__webpack_require__(143));var _cleanStateKey=_interopRequireDefault(__webpack_require__(142));var _getRadiumStyleState=_interopRequireDefault(__webpack_require__(144));var _hash=_interopRequireDefault(__webpack_require__(145));var _mergeStyles=__webpack_require__(146);var _plugins=_interopRequireDefault(__webpack_require__(147));var _exenv=_interopRequireDefault(__webpack_require__(109));var _react=_interopRequireDefault(__webpack_require__(10));var _styleKeeper=_interopRequireDefault(__webpack_require__(157));function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj};}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=arguments[i]!=null?arguments[i]:{};var ownKeys=Object.keys(source);if(typeof Object.getOwnPropertySymbols==='function'){ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable;}));}ownKeys.forEach(function(key){_defineProperty(target,key,source[key]);});}return target;}function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true});}else{obj[key]=value;}return obj;}function _typeof(obj){if(typeof Symbol==="function"&&_typeof2(Symbol.iterator)==="symbol"){_typeof=function _typeof(obj){return typeof obj==="undefined"?"undefined":_typeof2(obj);};}else{_typeof=function _typeof(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj==="undefined"?"undefined":_typeof2(obj);};}return _typeof(obj);}var DEFAULT_CONFIG={plugins:[_plugins["default"].mergeStyleArray,_plugins["default"].checkProps,_plugins["default"].resolveMediaQueries,_plugins["default"].resolveInteractionStyles,_plugins["default"].keyframes,_plugins["default"].visited,_plugins["default"].removeNestedStyles,_plugins["default"].prefix,_plugins["default"].checkProps]};// Gross
	var globalState={};// Only for use by tests
	var __isTestModeEnabled=false;// Declare early for recursive helpers.
	var _resolveStyles5=null;var _shouldResolveStyles=function _shouldResolveStyles(component){return component.type&&!component.type._isRadiumEnhanced;};var _resolveChildren=function _resolveChildren(_ref){var children=_ref.children,component=_ref.component,config=_ref.config,existingKeyMap=_ref.existingKeyMap,extraStateKeyMap=_ref.extraStateKeyMap;if(!children){return children;}var childrenType=_typeof(children);if(childrenType==='string'||childrenType==='number'){// Don't do anything with a single primitive child
	return children;}if(childrenType==='function'){// Wrap the function, resolving styles on the result
	return function(){var result=children.apply(this,arguments);if(_react["default"].isValidElement(result)){var _key=(0,_getStateKey["default"])(result);delete extraStateKeyMap[_key];var _resolveStyles=_resolveStyles5(component,result,config,existingKeyMap,true,extraStateKeyMap),element=_resolveStyles.element;return element;}return result;};}if(_react["default"].Children.count(children)===1&&children.type){// If a React Element is an only child, don't wrap it in an array for
	// React.Children.map() for React.Children.only() compatibility.
	var onlyChild=_react["default"].Children.only(children);var _key2=(0,_getStateKey["default"])(onlyChild);delete extraStateKeyMap[_key2];var _resolveStyles2=_resolveStyles5(component,onlyChild,config,existingKeyMap,true,extraStateKeyMap),element=_resolveStyles2.element;return element;}return _react["default"].Children.map(children,function(child){if(_react["default"].isValidElement(child)){var _key3=(0,_getStateKey["default"])(child);delete extraStateKeyMap[_key3];var _resolveStyles3=_resolveStyles5(component,child,config,existingKeyMap,true,extraStateKeyMap),_element=_resolveStyles3.element;return _element;}return child;});};// Recurse over props, just like children
	var _resolveProps=function _resolveProps(_ref2){var component=_ref2.component,config=_ref2.config,existingKeyMap=_ref2.existingKeyMap,props=_ref2.props,extraStateKeyMap=_ref2.extraStateKeyMap;var newProps=props;Object.keys(props).forEach(function(prop){// We already recurse over children above
	if(prop==='children'){return;}var propValue=props[prop];if(_react["default"].isValidElement(propValue)){var _key4=(0,_getStateKey["default"])(propValue);delete extraStateKeyMap[_key4];newProps=_objectSpread({},newProps);var _resolveStyles4=_resolveStyles5(component,propValue,config,existingKeyMap,true,extraStateKeyMap),element=_resolveStyles4.element;newProps[prop]=element;}});return newProps;};var _buildGetKey=function _buildGetKey(_ref3){var componentName=_ref3.componentName,existingKeyMap=_ref3.existingKeyMap,renderedElement=_ref3.renderedElement;// We need a unique key to correlate state changes due to user interaction
	// with the rendered element, so we know to apply the proper interactive
	// styles.
	var originalKey=(0,_getStateKey["default"])(renderedElement);var key=(0,_cleanStateKey["default"])(originalKey);var alreadyGotKey=false;var getKey=function getKey(){if(alreadyGotKey){return key;}alreadyGotKey=true;if(existingKeyMap[key]){var elementName;if(typeof renderedElement.type==='string'){elementName=renderedElement.type;}else if(renderedElement.type.constructor){elementName=renderedElement.type.constructor.displayName||renderedElement.type.constructor.name;}throw new Error('Radium requires each element with interactive styles to have a unique '+'key, set using either the ref or key prop. '+(originalKey?'Key "'+originalKey+'" is a duplicate.':'Multiple elements have no key specified.')+' '+'Component: "'+componentName+'". '+(elementName?'Element: "'+elementName+'".':''));}existingKeyMap[key]=true;return key;};return getKey;};var _setStyleState=function _setStyleState(component,key,stateKey,value){if(!component._radiumIsMounted){return;}var existing=(0,_getRadiumStyleState["default"])(component);var state={_radiumStyleState:_objectSpread({},existing)};state._radiumStyleState[key]=_objectSpread({},state._radiumStyleState[key]);state._radiumStyleState[key][stateKey]=value;component._lastRadiumState=state._radiumStyleState;component.setState(state);};var _runPlugins=function _runPlugins(_ref4){var component=_ref4.component,config=_ref4.config,existingKeyMap=_ref4.existingKeyMap,props=_ref4.props,renderedElement=_ref4.renderedElement;// Don't run plugins if renderedElement is not a simple ReactDOMElement or has
	// no style.
	if(!_react["default"].isValidElement(renderedElement)||typeof renderedElement.type!=='string'||!props.style){return props;}var newProps=props;var plugins=config.plugins||DEFAULT_CONFIG.plugins;var componentName=component.constructor.displayName||component.constructor.name;var getKey=_buildGetKey({renderedElement:renderedElement,existingKeyMap:existingKeyMap,componentName:componentName});var getComponentField=function getComponentField(key){return component[key];};var getGlobalState=function getGlobalState(key){return globalState[key];};var componentGetState=function componentGetState(stateKey,elementKey){return(0,_getState["default"])(component.state,elementKey||getKey(),stateKey);};var setState=function setState(stateKey,value,elementKey){return _setStyleState(component,elementKey||getKey(),stateKey,value);};var addCSS=function addCSS(css){var styleKeeper=component._radiumStyleKeeper;if(!styleKeeper){if(__isTestModeEnabled){return{remove:function remove(){}};}throw new Error('To use plugins requiring `addCSS` (e.g. keyframes, media queries), '+'please wrap your application in the StyleRoot component. Component '+'name: `'+componentName+'`.');}return styleKeeper.addCSS(css);};var newStyle=props.style;plugins.forEach(function(plugin){var result=plugin({ExecutionEnvironment:_exenv["default"],addCSS:addCSS,appendImportantToEachValue:_appendImportantToEachValue["default"],componentName:componentName,config:config,cssRuleSetToString:_cssRuleSetToString["default"],getComponentField:getComponentField,getGlobalState:getGlobalState,getState:componentGetState,hash:_hash["default"],mergeStyles:_mergeStyles.mergeStyles,props:newProps,setState:setState,isNestedStyle:_mergeStyles.isNestedStyle,style:newStyle})||{};newStyle=result.style||newStyle;newProps=result.props&&Object.keys(result.props).length?_objectSpread({},newProps,result.props):newProps;var newComponentFields=result.componentFields||{};Object.keys(newComponentFields).forEach(function(fieldName){component[fieldName]=newComponentFields[fieldName];});var newGlobalState=result.globalState||{};Object.keys(newGlobalState).forEach(function(key){globalState[key]=newGlobalState[key];});});if(newStyle!==props.style){newProps=_objectSpread({},newProps,{style:newStyle});}return newProps;};// Wrapper around React.cloneElement. To avoid processing the same element
	// twice, whenever we clone an element add a special prop to make sure we don't
	// process this element again.
	var _cloneElement=function _cloneElement(renderedElement,newProps,newChildren){// Only add flag if this is a normal DOM element
	if(typeof renderedElement.type==='string'){newProps=_objectSpread({},newProps,{'data-radium':true});}return _react["default"].cloneElement(renderedElement,newProps,newChildren);};//
	// The nucleus of Radium. resolveStyles is called on the rendered elements
	// before they are returned in render. It iterates over the elements and
	// children, rewriting props to add event handlers required to capture user
	// interactions (e.g. mouse over). It also replaces the style prop because it
	// adds in the various interaction styles (e.g. :hover).
	//
	/* eslint-disable max-params */_resolveStyles5=function resolveStyles(component,renderedElement){var config=arguments.length>2&&arguments[2]!==undefined?arguments[2]:DEFAULT_CONFIG;var existingKeyMap=arguments.length>3&&arguments[3]!==undefined?arguments[3]:{};var shouldCheckBeforeResolve=arguments.length>4&&arguments[4]!==undefined?arguments[4]:false;var extraStateKeyMap=arguments.length>5?arguments[5]:undefined;// The extraStateKeyMap is for determining which keys should be erased from
	// the state (i.e. which child components are unmounted and should no longer
	// have a style state).
	if(!extraStateKeyMap){var state=(0,_getRadiumStyleState["default"])(component);extraStateKeyMap=Object.keys(state).reduce(function(acc,key){// 'main' is the auto-generated key when there is only one element with
	// interactive styles and if a custom key is not assigned. Because of
	// this, it is impossible to know which child is 'main', so we won't
	// count this key when generating our extraStateKeyMap.
	if(key!=='main'){acc[key]=true;}return acc;},{});}if(Array.isArray(renderedElement)&&!renderedElement.props){var elements=renderedElement.map(function(element){// element is in-use, so remove from the extraStateKeyMap
	if(extraStateKeyMap){var _key5=(0,_getStateKey["default"])(element);delete extraStateKeyMap[_key5];}// this element is an array of elements,
	// so return an array of elements with resolved styles
	return _resolveStyles5(component,element,config,existingKeyMap,shouldCheckBeforeResolve,extraStateKeyMap).element;});return{extraStateKeyMap:extraStateKeyMap,element:elements};}// ReactElement
	if(!renderedElement||// Bail if we've already processed this element. This ensures that only the
	// owner of an element processes that element, since the owner's render
	// function will be called first (which will always be the case, since you
	// can't know what else to render until you render the parent component).
	renderedElement.props&&renderedElement.props['data-radium']||// Bail if this element is a radium enhanced element, because if it is,
	// then it will take care of resolving its own styles.
	shouldCheckBeforeResolve&&!_shouldResolveStyles(renderedElement)){return{extraStateKeyMap:extraStateKeyMap,element:renderedElement};}var children=renderedElement.props.children;var newChildren=_resolveChildren({children:children,component:component,config:config,existingKeyMap:existingKeyMap,extraStateKeyMap:extraStateKeyMap});var newProps=_resolveProps({component:component,config:config,existingKeyMap:existingKeyMap,extraStateKeyMap:extraStateKeyMap,props:renderedElement.props});newProps=_runPlugins({component:component,config:config,existingKeyMap:existingKeyMap,props:newProps,renderedElement:renderedElement});// If nothing changed, don't bother cloning the element. Might be a bit
	// wasteful, as we add the sentinel to stop double-processing when we clone.
	// Assume benign double-processing is better than unneeded cloning.
	if(newChildren===children&&newProps===renderedElement.props){return{extraStateKeyMap:extraStateKeyMap,element:renderedElement};}var element=_cloneElement(renderedElement,newProps!==renderedElement.props?newProps:{},newChildren);return{extraStateKeyMap:extraStateKeyMap,element:element};};/* eslint-enable max-params */// Only for use by tests
	if(process.env.NODE_ENV!=='production'){_resolveStyles5.__clearStateForTests=function(){globalState={};};_resolveStyles5.__setTestMode=function(isEnabled){__isTestModeEnabled=isEnabled;};}var _default=_resolveStyles5;exports["default"]=_default;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports["default"]=appendImportantToEachValue;var _appendPxIfNeeded=_interopRequireDefault(__webpack_require__(93));var _mapObject=_interopRequireDefault(__webpack_require__(94));function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj};}function appendImportantToEachValue(style){return(0,_mapObject["default"])(style,function(result,key){return(0,_appendPxIfNeeded["default"])(key,style[key])+' !important';});}

/***/ }),
/* 93 */
/***/ (function(module, exports) {

	"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports["default"]=appendPxIfNeeded;// Copied from https://github.com/facebook/react/blob/
	// b87aabdfe1b7461e7331abb3601d9e6bb27544bc/
	// packages/react-dom/src/shared/CSSProperty.js
	var isUnitlessNumber={animationIterationCount:true,borderImageOutset:true,borderImageSlice:true,borderImageWidth:true,boxFlex:true,boxFlexGroup:true,boxOrdinalGroup:true,columnCount:true,columns:true,flex:true,flexGrow:true,flexPositive:true,flexShrink:true,flexNegative:true,flexOrder:true,gridArea:true,gridRow:true,gridRowEnd:true,gridRowSpan:true,gridRowStart:true,gridColumn:true,gridColumnEnd:true,gridColumnSpan:true,gridColumnStart:true,fontWeight:true,lineClamp:true,lineHeight:true,opacity:true,order:true,orphans:true,tabSize:true,widows:true,zIndex:true,zoom:true,// SVG-related properties
	fillOpacity:true,floodOpacity:true,stopOpacity:true,strokeDasharray:true,strokeDashoffset:true,strokeMiterlimit:true,strokeOpacity:true,strokeWidth:true};function appendPxIfNeeded(propertyName,value){var needsPxSuffix=!isUnitlessNumber[propertyName]&&typeof value==='number'&&value!==0;return needsPxSuffix?value+'px':value;}

/***/ }),
/* 94 */
/***/ (function(module, exports) {

	"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports["default"]=mapObject;function mapObject(object,mapper){return Object.keys(object).reduce(function(result,key){result[key]=mapper(object[key],key);return result;},{});}

/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports["default"]=cssRuleSetToString;var _appendPxIfNeeded=_interopRequireDefault(__webpack_require__(93));var _camelCasePropsToDashCase=_interopRequireDefault(__webpack_require__(96));var _mapObject=_interopRequireDefault(__webpack_require__(94));var _prefixer=__webpack_require__(97);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj};}function createMarkupForStyles(style){return Object.keys(style).map(function(property){return property+': '+style[property]+';';}).join('\n');}function cssRuleSetToString(selector,rules,userAgent){if(!rules){return'';}var rulesWithPx=(0,_mapObject["default"])(rules,function(value,key){return(0,_appendPxIfNeeded["default"])(key,value);});var prefixedRules=(0,_prefixer.getPrefixedStyle)(rulesWithPx,userAgent);var cssPrefixedRules=(0,_camelCasePropsToDashCase["default"])(prefixedRules);var serializedRules=createMarkupForStyles(cssPrefixedRules);return selector+'{'+serializedRules+'}';}

/***/ }),
/* 96 */
/***/ (function(module, exports) {

	"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports["default"]=exports.camelCaseToDashCase=void 0;var _camelCaseRegex=/([a-z])?([A-Z])/g;var _camelCaseReplacer=function _camelCaseReplacer(match,p1,p2){return(p1||'')+'-'+p2.toLowerCase();};var camelCaseToDashCase=function camelCaseToDashCase(s){return s.replace(_camelCaseRegex,_camelCaseReplacer);};exports.camelCaseToDashCase=camelCaseToDashCase;var camelCasePropsToDashCase=function camelCasePropsToDashCase(prefixedStyle){// Since prefix is expected to work on inline style objects, we must
	// translate the keys to dash case for rendering to CSS.
	return Object.keys(prefixedStyle).reduce(function(result,key){var dashCaseKey=camelCaseToDashCase(key);// Fix IE vendor prefix
	if(/^ms-/.test(dashCaseKey)){dashCaseKey="-".concat(dashCaseKey);}result[dashCaseKey]=prefixedStyle[key];return result;},{});};var _default=camelCasePropsToDashCase;exports["default"]=_default;

/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global, process) {"use strict";var _typeof2=typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"?function(obj){return typeof obj;}:function(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;};Object.defineProperty(exports,"__esModule",{value:true});exports.getPrefixedKeyframes=getPrefixedKeyframes;exports.getPrefixedStyle=getPrefixedStyle;var _createPrefixer=_interopRequireDefault(__webpack_require__(98));var _createPrefixer2=_interopRequireDefault(__webpack_require__(104));var _exenv=_interopRequireDefault(__webpack_require__(109));var _static=_interopRequireDefault(__webpack_require__(111));var _dynamic=_interopRequireDefault(__webpack_require__(127));var _camelCasePropsToDashCase=__webpack_require__(96);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj};}function _typeof(obj){if(typeof Symbol==="function"&&_typeof2(Symbol.iterator)==="symbol"){_typeof=function _typeof(obj){return typeof obj==="undefined"?"undefined":_typeof2(obj);};}else{_typeof=function _typeof(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj==="undefined"?"undefined":_typeof2(obj);};}return _typeof(obj);}var prefixAll=(0,_createPrefixer["default"])(_static["default"]);var InlineStylePrefixer=(0,_createPrefixer2["default"])(_dynamic["default"],prefixAll);function transformValues(style){return Object.keys(style).reduce(function(newStyle,key){var value=style[key];if(Array.isArray(value)){value=value.join(';'+key+':');}else if(value&&_typeof(value)==='object'&&typeof value.toString==='function'){value=value.toString();}newStyle[key]=value;return newStyle;},{});}// Flatten prefixed values that are arrays to strings.
	//
	// We get prefixed styles back in the form of:
	// - `display: "flex"` OR
	// - `display: "-webkit-flex"` OR
	// - `display: [/* ... */, "-webkit-flex", "flex"]
	//
	// The last form is problematic for eventual use in the browser and server
	// render. More confusingly, we have to do **different** things on the
	// browser and server (noted inline below).
	//
	// https://github.com/FormidableLabs/radium/issues/958
	function flattenStyleValues(style){return Object.keys(style).reduce(function(newStyle,key){var val=style[key];if(Array.isArray(val)){if(_exenv["default"].canUseDOM){// For the **browser**, when faced with multiple values, we just take
	// the **last** one, which is the original passed in value before
	// prefixing. This _should_ work, because `inline-style-prefixer`
	// we're just passing through what would happen without ISP.
	val=val[val.length-1].toString();}else{// For the **server**, we just concatenate things together and convert
	// the style object values into a hacked-up string of like `display:
	// "-webkit-flex;display:flex"` that will SSR render correctly to like
	// `"display:-webkit-flex;display:flex"` but would otherwise be
	// totally invalid values.
	// We convert keys to dash-case only for the serialize values and
	// leave the real key camel-cased so it's as expected to React and
	// other parts of the processing chain.
	val=val.join(";".concat((0,_camelCasePropsToDashCase.camelCaseToDashCase)(key),":"));}}newStyle[key]=val;return newStyle;},{});}var _hasWarnedAboutUserAgent=false;var _lastUserAgent;var _cachedPrefixer;function getPrefixer(userAgent){var actualUserAgent=userAgent||global&&global.navigator&&global.navigator.userAgent;if(process.env.NODE_ENV!=='production'){if(!actualUserAgent&&!_hasWarnedAboutUserAgent){/* eslint-disable no-console */console.warn('Radium: userAgent should be supplied for server-side rendering. See '+'https://github.com/FormidableLabs/radium/tree/master/docs/api#radium '+'for more information.');/* eslint-enable no-console */_hasWarnedAboutUserAgent=true;}}if(process.env.NODE_ENV==='test'||!_cachedPrefixer||actualUserAgent!==_lastUserAgent){if(actualUserAgent==='all'){_cachedPrefixer={prefix:prefixAll,prefixedKeyframes:'keyframes'};}else{_cachedPrefixer=new InlineStylePrefixer({userAgent:actualUserAgent});}_lastUserAgent=actualUserAgent;}return _cachedPrefixer;}function getPrefixedKeyframes(userAgent){return getPrefixer(userAgent).prefixedKeyframes||'keyframes';}// Returns a new style object with vendor prefixes added to property names and
	// values.
	function getPrefixedStyle(style,userAgent){var styleWithFallbacks=transformValues(style);var prefixer=getPrefixer(userAgent);var prefixedStyle=prefixer.prefix(styleWithFallbacks);var flattenedStyle=flattenStyleValues(prefixedStyle);return flattenedStyle;}
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }()), __webpack_require__(6)))

/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';Object.defineProperty(exports,"__esModule",{value:true});exports.default=createPrefixer;var _prefixProperty=__webpack_require__(99);var _prefixProperty2=_interopRequireDefault(_prefixProperty);var _prefixValue=__webpack_require__(101);var _prefixValue2=_interopRequireDefault(_prefixValue);var _addNewValuesOnly=__webpack_require__(102);var _addNewValuesOnly2=_interopRequireDefault(_addNewValuesOnly);var _isObject=__webpack_require__(103);var _isObject2=_interopRequireDefault(_isObject);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function createPrefixer(_ref){var prefixMap=_ref.prefixMap,plugins=_ref.plugins;function prefixAll(style){for(var property in style){var value=style[property];// handle nested objects
	if((0,_isObject2.default)(value)){style[property]=prefixAll(value);// handle array values
	}else if(Array.isArray(value)){var combinedValue=[];for(var i=0,len=value.length;i<len;++i){var processedValue=(0,_prefixValue2.default)(plugins,property,value[i],style,prefixMap);(0,_addNewValuesOnly2.default)(combinedValue,processedValue||value[i]);}// only modify the value if it was touched
	// by any plugin to prevent unnecessary mutations
	if(combinedValue.length>0){style[property]=combinedValue;}}else{var _processedValue=(0,_prefixValue2.default)(plugins,property,value,style,prefixMap);// only modify the value if it was touched
	// by any plugin to prevent unnecessary mutations
	if(_processedValue){style[property]=_processedValue;}style=(0,_prefixProperty2.default)(prefixMap,property,style);}}return style;}return prefixAll;}module.exports=exports['default'];

/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';Object.defineProperty(exports,"__esModule",{value:true});exports.default=prefixProperty;var _capitalizeString=__webpack_require__(100);var _capitalizeString2=_interopRequireDefault(_capitalizeString);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function prefixProperty(prefixProperties,property,style){if(prefixProperties.hasOwnProperty(property)){var newStyle={};var requiredPrefixes=prefixProperties[property];var capitalizedProperty=(0,_capitalizeString2.default)(property);var keys=Object.keys(style);for(var i=0;i<keys.length;i++){var styleProperty=keys[i];if(styleProperty===property){for(var j=0;j<requiredPrefixes.length;j++){newStyle[requiredPrefixes[j]+capitalizedProperty]=style[property];}}newStyle[styleProperty]=style[styleProperty];}return newStyle;}return style;}module.exports=exports['default'];

/***/ }),
/* 100 */
/***/ (function(module, exports) {

	"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports.default=capitalizeString;function capitalizeString(str){return str.charAt(0).toUpperCase()+str.slice(1);}module.exports=exports["default"];

/***/ }),
/* 101 */
/***/ (function(module, exports) {

	"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports.default=prefixValue;function prefixValue(plugins,property,value,style,metaData){for(var i=0,len=plugins.length;i<len;++i){var processedValue=plugins[i](property,value,style,metaData);// we can stop processing if a value is returned
	// as all plugin criteria are unique
	if(processedValue){return processedValue;}}}module.exports=exports["default"];

/***/ }),
/* 102 */
/***/ (function(module, exports) {

	"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports.default=addNewValuesOnly;function addIfNew(list,value){if(list.indexOf(value)===-1){list.push(value);}}function addNewValuesOnly(list,values){if(Array.isArray(values)){for(var i=0,len=values.length;i<len;++i){addIfNew(list,values[i]);}}else{addIfNew(list,values);}}module.exports=exports["default"];

/***/ }),
/* 103 */
/***/ (function(module, exports) {

	"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports.default=isObject;function isObject(value){return value instanceof Object&&!Array.isArray(value);}module.exports=exports["default"];

/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();exports.default=createPrefixer;var _getBrowserInformation=__webpack_require__(105);var _getBrowserInformation2=_interopRequireDefault(_getBrowserInformation);var _getPrefixedKeyframes=__webpack_require__(108);var _getPrefixedKeyframes2=_interopRequireDefault(_getPrefixedKeyframes);var _capitalizeString=__webpack_require__(100);var _capitalizeString2=_interopRequireDefault(_capitalizeString);var _addNewValuesOnly=__webpack_require__(102);var _addNewValuesOnly2=_interopRequireDefault(_addNewValuesOnly);var _isObject=__webpack_require__(103);var _isObject2=_interopRequireDefault(_isObject);var _prefixValue=__webpack_require__(101);var _prefixValue2=_interopRequireDefault(_prefixValue);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function createPrefixer(_ref){var prefixMap=_ref.prefixMap,plugins=_ref.plugins;var fallback=arguments.length>1&&arguments[1]!==undefined?arguments[1]:function(style){return style;};return function(){/**
	     * Instantiante a new prefixer
	     * @param {string} userAgent - userAgent to gather prefix information according to caniuse.com
	     * @param {string} keepUnprefixed - keeps unprefixed properties and values
	     */function Prefixer(){var options=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};_classCallCheck(this,Prefixer);var defaultUserAgent=typeof navigator!=='undefined'?navigator.userAgent:undefined;this._userAgent=options.userAgent||defaultUserAgent;this._keepUnprefixed=options.keepUnprefixed||false;if(this._userAgent){this._browserInfo=(0,_getBrowserInformation2.default)(this._userAgent);}// Checks if the userAgent was resolved correctly
	if(this._browserInfo&&this._browserInfo.cssPrefix){this.prefixedKeyframes=(0,_getPrefixedKeyframes2.default)(this._browserInfo.browserName,this._browserInfo.browserVersion,this._browserInfo.cssPrefix);}else{this._useFallback=true;return false;}var prefixData=this._browserInfo.browserName&&prefixMap[this._browserInfo.browserName];if(prefixData){this._requiresPrefix={};for(var property in prefixData){if(prefixData[property]>=this._browserInfo.browserVersion){this._requiresPrefix[property]=true;}}this._hasPropsRequiringPrefix=Object.keys(this._requiresPrefix).length>0;}else{this._useFallback=true;}this._metaData={browserVersion:this._browserInfo.browserVersion,browserName:this._browserInfo.browserName,cssPrefix:this._browserInfo.cssPrefix,jsPrefix:this._browserInfo.jsPrefix,keepUnprefixed:this._keepUnprefixed,requiresPrefix:this._requiresPrefix};}_createClass(Prefixer,[{key:'prefix',value:function prefix(style){// use static prefixer as fallback if userAgent can not be resolved
	if(this._useFallback){return fallback(style);}// only add prefixes if needed
	if(!this._hasPropsRequiringPrefix){return style;}return this._prefixStyle(style);}},{key:'_prefixStyle',value:function _prefixStyle(style){for(var property in style){var value=style[property];// handle nested objects
	if((0,_isObject2.default)(value)){style[property]=this.prefix(value);// handle array values
	}else if(Array.isArray(value)){var combinedValue=[];for(var i=0,len=value.length;i<len;++i){var processedValue=(0,_prefixValue2.default)(plugins,property,value[i],style,this._metaData);(0,_addNewValuesOnly2.default)(combinedValue,processedValue||value[i]);}// only modify the value if it was touched
	// by any plugin to prevent unnecessary mutations
	if(combinedValue.length>0){style[property]=combinedValue;}}else{var _processedValue=(0,_prefixValue2.default)(plugins,property,value,style,this._metaData);// only modify the value if it was touched
	// by any plugin to prevent unnecessary mutations
	if(_processedValue){style[property]=_processedValue;}// add prefixes to properties
	if(this._requiresPrefix.hasOwnProperty(property)){style[this._browserInfo.jsPrefix+(0,_capitalizeString2.default)(property)]=value;if(!this._keepUnprefixed){delete style[property];}}}}return style;}/**
	       * Returns a prefixed version of the style object using all vendor prefixes
	       * @param {Object} styles - Style object that gets prefixed properties added
	       * @returns {Object} - Style object with prefixed properties and values
	       */}],[{key:'prefixAll',value:function prefixAll(styles){return fallback(styles);}}]);return Prefixer;}();}module.exports=exports['default'];

/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';Object.defineProperty(exports,"__esModule",{value:true});exports.default=getBrowserInformation;var _bowser=__webpack_require__(106);var _bowser2=_interopRequireDefault(_bowser);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var prefixByBrowser={chrome:'Webkit',safari:'Webkit',ios:'Webkit',android:'Webkit',phantom:'Webkit',opera:'Webkit',webos:'Webkit',blackberry:'Webkit',bada:'Webkit',tizen:'Webkit',chromium:'Webkit',vivaldi:'Webkit',firefox:'Moz',seamoney:'Moz',sailfish:'Moz',msie:'ms',msedge:'ms'};var browserByCanIuseAlias={chrome:'chrome',chromium:'chrome',safari:'safari',firfox:'firefox',msedge:'edge',opera:'opera',vivaldi:'opera',msie:'ie'};function getBrowserName(browserInfo){if(browserInfo.firefox){return'firefox';}if(browserInfo.mobile||browserInfo.tablet){if(browserInfo.ios){return'ios_saf';}else if(browserInfo.android){return'android';}else if(browserInfo.opera){return'op_mini';}}for(var browser in browserByCanIuseAlias){if(browserInfo.hasOwnProperty(browser)){return browserByCanIuseAlias[browser];}}}/**
	 * Uses bowser to get default browser browserInformation such as version and name
	 * Evaluates bowser browserInfo and adds vendorPrefix browserInformation
	 * @param {string} userAgent - userAgent that gets evaluated
	 */function getBrowserInformation(userAgent){var browserInfo=_bowser2.default._detect(userAgent);if(browserInfo.yandexbrowser){browserInfo=_bowser2.default._detect(userAgent.replace(/YaBrowser\/[0-9.]*/,''));}for(var browser in prefixByBrowser){if(browserInfo.hasOwnProperty(browser)){var prefix=prefixByBrowser[browser];browserInfo.jsPrefix=prefix;browserInfo.cssPrefix='-'+prefix.toLowerCase()+'-';break;}}browserInfo.browserName=getBrowserName(browserInfo);// For cordova IOS 8 the version is missing, set truncated osversion to prevent NaN
	if(browserInfo.version){browserInfo.browserVersion=parseFloat(browserInfo.version);}else{browserInfo.browserVersion=parseInt(parseFloat(browserInfo.osversion),10);}browserInfo.osVersion=parseFloat(browserInfo.osversion);// iOS forces all browsers to use Safari under the hood
	// as the Safari version seems to match the iOS version
	// we just explicitely use the osversion instead
	// https://github.com/rofrischmann/inline-style-prefixer/issues/72
	if(browserInfo.browserName==='ios_saf'&&browserInfo.browserVersion>browserInfo.osVersion){browserInfo.browserVersion=browserInfo.osVersion;}// seperate native android chrome
	// https://github.com/rofrischmann/inline-style-prefixer/issues/45
	if(browserInfo.browserName==='android'&&browserInfo.chrome&&browserInfo.browserVersion>37){browserInfo.browserName='and_chr';}// For android < 4.4 we want to check the osversion
	// not the chrome version, see issue #26
	// https://github.com/rofrischmann/inline-style-prefixer/issues/26
	if(browserInfo.browserName==='android'&&browserInfo.osVersion<5){browserInfo.browserVersion=browserInfo.osVersion;}// Samsung browser are basically build on Chrome > 44
	// https://github.com/rofrischmann/inline-style-prefixer/issues/102
	if(browserInfo.browserName==='android'&&browserInfo.samsungBrowser){browserInfo.browserName='and_chr';browserInfo.browserVersion=44;}return browserInfo;}module.exports=exports['default'];

/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';/*!
	 * Bowser - a browser detector
	 * https://github.com/ded/bowser
	 * MIT License | (c) Dustin Diaz 2015
	 */!function(root,name,definition){if(typeof module!='undefined'&&module.exports)module.exports=definition();else if(true)__webpack_require__(107)(name,definition);else root[name]=definition();}(undefined,'bowser',function(){/**
	    * See useragents.js for examples of navigator.userAgent
	    */var t=true;function detect(ua){function getFirstMatch(regex){var match=ua.match(regex);return match&&match.length>1&&match[1]||'';}function getSecondMatch(regex){var match=ua.match(regex);return match&&match.length>1&&match[2]||'';}var iosdevice=getFirstMatch(/(ipod|iphone|ipad)/i).toLowerCase(),likeAndroid=/like android/i.test(ua),android=!likeAndroid&&/android/i.test(ua),nexusMobile=/nexus\s*[0-6]\s*/i.test(ua),nexusTablet=!nexusMobile&&/nexus\s*[0-9]+/i.test(ua),chromeos=/CrOS/.test(ua),silk=/silk/i.test(ua),sailfish=/sailfish/i.test(ua),tizen=/tizen/i.test(ua),webos=/(web|hpw)(o|0)s/i.test(ua),windowsphone=/windows phone/i.test(ua),samsungBrowser=/SamsungBrowser/i.test(ua),windows=!windowsphone&&/windows/i.test(ua),mac=!iosdevice&&!silk&&/macintosh/i.test(ua),linux=!android&&!sailfish&&!tizen&&!webos&&/linux/i.test(ua),edgeVersion=getSecondMatch(/edg([ea]|ios)\/(\d+(\.\d+)?)/i),versionIdentifier=getFirstMatch(/version\/(\d+(\.\d+)?)/i),tablet=/tablet/i.test(ua)&&!/tablet pc/i.test(ua),mobile=!tablet&&/[^-]mobi/i.test(ua),xbox=/xbox/i.test(ua),result;if(/opera/i.test(ua)){//  an old Opera
	result={name:'Opera',opera:t,version:versionIdentifier||getFirstMatch(/(?:opera|opr|opios)[\s\/](\d+(\.\d+)?)/i)};}else if(/opr\/|opios/i.test(ua)){// a new Opera
	result={name:'Opera',opera:t,version:getFirstMatch(/(?:opr|opios)[\s\/](\d+(\.\d+)?)/i)||versionIdentifier};}else if(/SamsungBrowser/i.test(ua)){result={name:'Samsung Internet for Android',samsungBrowser:t,version:versionIdentifier||getFirstMatch(/(?:SamsungBrowser)[\s\/](\d+(\.\d+)?)/i)};}else if(/Whale/i.test(ua)){result={name:'NAVER Whale browser',whale:t,version:getFirstMatch(/(?:whale)[\s\/](\d+(?:\.\d+)+)/i)};}else if(/MZBrowser/i.test(ua)){result={name:'MZ Browser',mzbrowser:t,version:getFirstMatch(/(?:MZBrowser)[\s\/](\d+(?:\.\d+)+)/i)};}else if(/coast/i.test(ua)){result={name:'Opera Coast',coast:t,version:versionIdentifier||getFirstMatch(/(?:coast)[\s\/](\d+(\.\d+)?)/i)};}else if(/focus/i.test(ua)){result={name:'Focus',focus:t,version:getFirstMatch(/(?:focus)[\s\/](\d+(?:\.\d+)+)/i)};}else if(/yabrowser/i.test(ua)){result={name:'Yandex Browser',yandexbrowser:t,version:versionIdentifier||getFirstMatch(/(?:yabrowser)[\s\/](\d+(\.\d+)?)/i)};}else if(/ucbrowser/i.test(ua)){result={name:'UC Browser',ucbrowser:t,version:getFirstMatch(/(?:ucbrowser)[\s\/](\d+(?:\.\d+)+)/i)};}else if(/mxios/i.test(ua)){result={name:'Maxthon',maxthon:t,version:getFirstMatch(/(?:mxios)[\s\/](\d+(?:\.\d+)+)/i)};}else if(/epiphany/i.test(ua)){result={name:'Epiphany',epiphany:t,version:getFirstMatch(/(?:epiphany)[\s\/](\d+(?:\.\d+)+)/i)};}else if(/puffin/i.test(ua)){result={name:'Puffin',puffin:t,version:getFirstMatch(/(?:puffin)[\s\/](\d+(?:\.\d+)?)/i)};}else if(/sleipnir/i.test(ua)){result={name:'Sleipnir',sleipnir:t,version:getFirstMatch(/(?:sleipnir)[\s\/](\d+(?:\.\d+)+)/i)};}else if(/k-meleon/i.test(ua)){result={name:'K-Meleon',kMeleon:t,version:getFirstMatch(/(?:k-meleon)[\s\/](\d+(?:\.\d+)+)/i)};}else if(windowsphone){result={name:'Windows Phone',osname:'Windows Phone',windowsphone:t};if(edgeVersion){result.msedge=t;result.version=edgeVersion;}else{result.msie=t;result.version=getFirstMatch(/iemobile\/(\d+(\.\d+)?)/i);}}else if(/msie|trident/i.test(ua)){result={name:'Internet Explorer',msie:t,version:getFirstMatch(/(?:msie |rv:)(\d+(\.\d+)?)/i)};}else if(chromeos){result={name:'Chrome',osname:'Chrome OS',chromeos:t,chromeBook:t,chrome:t,version:getFirstMatch(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)};}else if(/edg([ea]|ios)/i.test(ua)){result={name:'Microsoft Edge',msedge:t,version:edgeVersion};}else if(/vivaldi/i.test(ua)){result={name:'Vivaldi',vivaldi:t,version:getFirstMatch(/vivaldi\/(\d+(\.\d+)?)/i)||versionIdentifier};}else if(sailfish){result={name:'Sailfish',osname:'Sailfish OS',sailfish:t,version:getFirstMatch(/sailfish\s?browser\/(\d+(\.\d+)?)/i)};}else if(/seamonkey\//i.test(ua)){result={name:'SeaMonkey',seamonkey:t,version:getFirstMatch(/seamonkey\/(\d+(\.\d+)?)/i)};}else if(/firefox|iceweasel|fxios/i.test(ua)){result={name:'Firefox',firefox:t,version:getFirstMatch(/(?:firefox|iceweasel|fxios)[ \/](\d+(\.\d+)?)/i)};if(/\((mobile|tablet);[^\)]*rv:[\d\.]+\)/i.test(ua)){result.firefoxos=t;result.osname='Firefox OS';}}else if(silk){result={name:'Amazon Silk',silk:t,version:getFirstMatch(/silk\/(\d+(\.\d+)?)/i)};}else if(/phantom/i.test(ua)){result={name:'PhantomJS',phantom:t,version:getFirstMatch(/phantomjs\/(\d+(\.\d+)?)/i)};}else if(/slimerjs/i.test(ua)){result={name:'SlimerJS',slimer:t,version:getFirstMatch(/slimerjs\/(\d+(\.\d+)?)/i)};}else if(/blackberry|\bbb\d+/i.test(ua)||/rim\stablet/i.test(ua)){result={name:'BlackBerry',osname:'BlackBerry OS',blackberry:t,version:versionIdentifier||getFirstMatch(/blackberry[\d]+\/(\d+(\.\d+)?)/i)};}else if(webos){result={name:'WebOS',osname:'WebOS',webos:t,version:versionIdentifier||getFirstMatch(/w(?:eb)?osbrowser\/(\d+(\.\d+)?)/i)};/touchpad\//i.test(ua)&&(result.touchpad=t);}else if(/bada/i.test(ua)){result={name:'Bada',osname:'Bada',bada:t,version:getFirstMatch(/dolfin\/(\d+(\.\d+)?)/i)};}else if(tizen){result={name:'Tizen',osname:'Tizen',tizen:t,version:getFirstMatch(/(?:tizen\s?)?browser\/(\d+(\.\d+)?)/i)||versionIdentifier};}else if(/qupzilla/i.test(ua)){result={name:'QupZilla',qupzilla:t,version:getFirstMatch(/(?:qupzilla)[\s\/](\d+(?:\.\d+)+)/i)||versionIdentifier};}else if(/chromium/i.test(ua)){result={name:'Chromium',chromium:t,version:getFirstMatch(/(?:chromium)[\s\/](\d+(?:\.\d+)?)/i)||versionIdentifier};}else if(/chrome|crios|crmo/i.test(ua)){result={name:'Chrome',chrome:t,version:getFirstMatch(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)};}else if(android){result={name:'Android',version:versionIdentifier};}else if(/safari|applewebkit/i.test(ua)){result={name:'Safari',safari:t};if(versionIdentifier){result.version=versionIdentifier;}}else if(iosdevice){result={name:iosdevice=='iphone'?'iPhone':iosdevice=='ipad'?'iPad':'iPod'// WTF: version is not part of user agent in web apps
	};if(versionIdentifier){result.version=versionIdentifier;}}else if(/googlebot/i.test(ua)){result={name:'Googlebot',googlebot:t,version:getFirstMatch(/googlebot\/(\d+(\.\d+))/i)||versionIdentifier};}else{result={name:getFirstMatch(/^(.*)\/(.*) /),version:getSecondMatch(/^(.*)\/(.*) /)};}// set webkit or gecko flag for browsers based on these engines
	if(!result.msedge&&/(apple)?webkit/i.test(ua)){if(/(apple)?webkit\/537\.36/i.test(ua)){result.name=result.name||"Blink";result.blink=t;}else{result.name=result.name||"Webkit";result.webkit=t;}if(!result.version&&versionIdentifier){result.version=versionIdentifier;}}else if(!result.opera&&/gecko\//i.test(ua)){result.name=result.name||"Gecko";result.gecko=t;result.version=result.version||getFirstMatch(/gecko\/(\d+(\.\d+)?)/i);}// set OS flags for platforms that have multiple browsers
	if(!result.windowsphone&&(android||result.silk)){result.android=t;result.osname='Android';}else if(!result.windowsphone&&iosdevice){result[iosdevice]=t;result.ios=t;result.osname='iOS';}else if(mac){result.mac=t;result.osname='macOS';}else if(xbox){result.xbox=t;result.osname='Xbox';}else if(windows){result.windows=t;result.osname='Windows';}else if(linux){result.linux=t;result.osname='Linux';}function getWindowsVersion(s){switch(s){case'NT':return'NT';case'XP':return'XP';case'NT 5.0':return'2000';case'NT 5.1':return'XP';case'NT 5.2':return'2003';case'NT 6.0':return'Vista';case'NT 6.1':return'7';case'NT 6.2':return'8';case'NT 6.3':return'8.1';case'NT 10.0':return'10';default:return undefined;}}// OS version extraction
	var osVersion='';if(result.windows){osVersion=getWindowsVersion(getFirstMatch(/Windows ((NT|XP)( \d\d?.\d)?)/i));}else if(result.windowsphone){osVersion=getFirstMatch(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i);}else if(result.mac){osVersion=getFirstMatch(/Mac OS X (\d+([_\.\s]\d+)*)/i);osVersion=osVersion.replace(/[_\s]/g,'.');}else if(iosdevice){osVersion=getFirstMatch(/os (\d+([_\s]\d+)*) like mac os x/i);osVersion=osVersion.replace(/[_\s]/g,'.');}else if(android){osVersion=getFirstMatch(/android[ \/-](\d+(\.\d+)*)/i);}else if(result.webos){osVersion=getFirstMatch(/(?:web|hpw)os\/(\d+(\.\d+)*)/i);}else if(result.blackberry){osVersion=getFirstMatch(/rim\stablet\sos\s(\d+(\.\d+)*)/i);}else if(result.bada){osVersion=getFirstMatch(/bada\/(\d+(\.\d+)*)/i);}else if(result.tizen){osVersion=getFirstMatch(/tizen[\/\s](\d+(\.\d+)*)/i);}if(osVersion){result.osversion=osVersion;}// device type extraction
	var osMajorVersion=!result.windows&&osVersion.split('.')[0];if(tablet||nexusTablet||iosdevice=='ipad'||android&&(osMajorVersion==3||osMajorVersion>=4&&!mobile)||result.silk){result.tablet=t;}else if(mobile||iosdevice=='iphone'||iosdevice=='ipod'||android||nexusMobile||result.blackberry||result.webos||result.bada){result.mobile=t;}// Graded Browser Support
	// http://developer.yahoo.com/yui/articles/gbs
	if(result.msedge||result.msie&&result.version>=10||result.yandexbrowser&&result.version>=15||result.vivaldi&&result.version>=1.0||result.chrome&&result.version>=20||result.samsungBrowser&&result.version>=4||result.whale&&compareVersions([result.version,'1.0'])===1||result.mzbrowser&&compareVersions([result.version,'6.0'])===1||result.focus&&compareVersions([result.version,'1.0'])===1||result.firefox&&result.version>=20.0||result.safari&&result.version>=6||result.opera&&result.version>=10.0||result.ios&&result.osversion&&result.osversion.split(".")[0]>=6||result.blackberry&&result.version>=10.1||result.chromium&&result.version>=20){result.a=t;}else if(result.msie&&result.version<10||result.chrome&&result.version<20||result.firefox&&result.version<20.0||result.safari&&result.version<6||result.opera&&result.version<10.0||result.ios&&result.osversion&&result.osversion.split(".")[0]<6||result.chromium&&result.version<20){result.c=t;}else result.x=t;return result;}var bowser=detect(typeof navigator!=='undefined'?navigator.userAgent||'':'');bowser.test=function(browserList){for(var i=0;i<browserList.length;++i){var browserItem=browserList[i];if(typeof browserItem==='string'){if(browserItem in bowser){return true;}}}return false;};/**
	   * Get version precisions count
	   *
	   * @example
	   *   getVersionPrecision("1.10.3") // 3
	   *
	   * @param  {string} version
	   * @return {number}
	   */function getVersionPrecision(version){return version.split(".").length;}/**
	   * Array::map polyfill
	   *
	   * @param  {Array} arr
	   * @param  {Function} iterator
	   * @return {Array}
	   */function map(arr,iterator){var result=[],i;if(Array.prototype.map){return Array.prototype.map.call(arr,iterator);}for(i=0;i<arr.length;i++){result.push(iterator(arr[i]));}return result;}/**
	   * Calculate browser version weight
	   *
	   * @example
	   *   compareVersions(['1.10.2.1',  '1.8.2.1.90'])    // 1
	   *   compareVersions(['1.010.2.1', '1.09.2.1.90']);  // 1
	   *   compareVersions(['1.10.2.1',  '1.10.2.1']);     // 0
	   *   compareVersions(['1.10.2.1',  '1.0800.2']);     // -1
	   *
	   * @param  {Array<String>} versions versions to compare
	   * @return {Number} comparison result
	   */function compareVersions(versions){// 1) get common precision for both versions, for example for "10.0" and "9" it should be 2
	var precision=Math.max(getVersionPrecision(versions[0]),getVersionPrecision(versions[1]));var chunks=map(versions,function(version){var delta=precision-getVersionPrecision(version);// 2) "9" -> "9.0" (for precision = 2)
	version=version+new Array(delta+1).join(".0");// 3) "9.0" -> ["000000000"", "000000009"]
	return map(version.split("."),function(chunk){return new Array(20-chunk.length).join("0")+chunk;}).reverse();});// iterate in reverse order by reversed chunks array
	while(--precision>=0){// 4) compare: "000000009" > "000000010" = false (but "9" > "10" = true)
	if(chunks[0][precision]>chunks[1][precision]){return 1;}else if(chunks[0][precision]===chunks[1][precision]){if(precision===0){// all version chunks are same
	return 0;}}else{return-1;}}}/**
	   * Check if browser is unsupported
	   *
	   * @example
	   *   bowser.isUnsupportedBrowser({
	   *     msie: "10",
	   *     firefox: "23",
	   *     chrome: "29",
	   *     safari: "5.1",
	   *     opera: "16",
	   *     phantom: "534"
	   *   });
	   *
	   * @param  {Object}  minVersions map of minimal version to browser
	   * @param  {Boolean} [strictMode = false] flag to return false if browser wasn't found in map
	   * @param  {String}  [ua] user agent string
	   * @return {Boolean}
	   */function isUnsupportedBrowser(minVersions,strictMode,ua){var _bowser=bowser;// make strictMode param optional with ua param usage
	if(typeof strictMode==='string'){ua=strictMode;strictMode=void 0;}if(strictMode===void 0){strictMode=false;}if(ua){_bowser=detect(ua);}var version=""+_bowser.version;for(var browser in minVersions){if(minVersions.hasOwnProperty(browser)){if(_bowser[browser]){if(typeof minVersions[browser]!=='string'){throw new Error('Browser version in the minVersion map should be a string: '+browser+': '+String(minVersions));}// browser version and min supported version.
	return compareVersions([version,minVersions[browser]])<0;}}}return strictMode;// not found
	}/**
	   * Check if browser is supported
	   *
	   * @param  {Object} minVersions map of minimal version to browser
	   * @param  {Boolean} [strictMode = false] flag to return false if browser wasn't found in map
	   * @param  {String}  [ua] user agent string
	   * @return {Boolean}
	   */function check(minVersions,strictMode,ua){return!isUnsupportedBrowser(minVersions,strictMode,ua);}bowser.isUnsupportedBrowser=isUnsupportedBrowser;bowser.compareVersions=compareVersions;bowser.check=check;/*
	   * Set our detect method to the main bowser object so we can
	   * reuse it to test other user agents.
	   * This is needed to implement future tests.
	   */bowser._detect=detect;/*
	   * Set our detect public method to the main bowser object
	   * This is needed to implement bowser in server side
	   */bowser.detect=detect;return bowser;});

/***/ }),
/* 107 */
/***/ (function(module, exports) {

	module.exports = function() { throw new Error("define cannot be used indirect"); };


/***/ }),
/* 108 */
/***/ (function(module, exports) {

	'use strict';Object.defineProperty(exports,"__esModule",{value:true});exports.default=getPrefixedKeyframes;function getPrefixedKeyframes(browserName,browserVersion,cssPrefix){var prefixedKeyframes='keyframes';if(browserName==='chrome'&&browserVersion<43||(browserName==='safari'||browserName==='ios_saf')&&browserVersion<9||browserName==='opera'&&browserVersion<30||browserName==='android'&&browserVersion<=4.4||browserName==='and_uc'){return cssPrefix+prefixedKeyframes;}return prefixedKeyframes;}module.exports=exports['default'];

/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;'use strict';var _typeof=typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"?function(obj){return typeof obj;}:function(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;};/*!
	  Copyright (c) 2015 Jed Watson.
	  Based on code that is Copyright 2013-2015, Facebook, Inc.
	  All rights reserved.
	*//* global define */(function(){'use strict';var canUseDOM=!!(typeof window!=='undefined'&&window.document&&window.document.createElement);var ExecutionEnvironment={canUseDOM:canUseDOM,canUseWorkers:typeof Worker!=='undefined',canUseEventListeners:canUseDOM&&!!(window.addEventListener||window.attachEvent),canUseViewport:canUseDOM&&!!window.screen};if("function"==='function'&&_typeof(__webpack_require__(110))==='object'&&__webpack_require__(110)){!(__WEBPACK_AMD_DEFINE_RESULT__ = function(){return ExecutionEnvironment;}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));}else if(typeof module!=='undefined'&&module.exports){module.exports=ExecutionEnvironment;}else{window.ExecutionEnvironment=ExecutionEnvironment;}})();

/***/ }),
/* 110 */
/***/ (function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(__webpack_amd_options__) {module.exports = __webpack_amd_options__;

	/* WEBPACK VAR INJECTION */}.call(exports, {}))

/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports["default"]=void 0;var _calc=_interopRequireDefault(__webpack_require__(112));var _crossFade=_interopRequireDefault(__webpack_require__(114));var _cursor=_interopRequireDefault(__webpack_require__(115));var _filter=_interopRequireDefault(__webpack_require__(116));var _flex=_interopRequireDefault(__webpack_require__(117));var _flexboxIE=_interopRequireDefault(__webpack_require__(118));var _flexboxOld=_interopRequireDefault(__webpack_require__(119));var _gradient=_interopRequireDefault(__webpack_require__(120));var _imageSet=_interopRequireDefault(__webpack_require__(121));var _position=_interopRequireDefault(__webpack_require__(122));var _sizing=_interopRequireDefault(__webpack_require__(123));var _transition=_interopRequireDefault(__webpack_require__(124));function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj};}var w=['Webkit'];var m=['Moz'];var ms=['ms'];var wm=['Webkit','Moz'];var wms=['Webkit','ms'];var wmms=['Webkit','Moz','ms'];var _default={plugins:[_calc["default"],_crossFade["default"],_cursor["default"],_filter["default"],_flex["default"],_flexboxIE["default"],_flexboxOld["default"],_gradient["default"],_imageSet["default"],_position["default"],_sizing["default"],_transition["default"]],prefixMap:{transform:wms,transformOrigin:wms,transformOriginX:wms,transformOriginY:wms,backfaceVisibility:w,perspective:w,perspectiveOrigin:w,transformStyle:w,transformOriginZ:w,animation:w,animationDelay:w,animationDirection:w,animationFillMode:w,animationDuration:w,animationIterationCount:w,animationName:w,animationPlayState:w,animationTimingFunction:w,appearance:wm,userSelect:wmms,fontKerning:w,textEmphasisPosition:w,textEmphasis:w,textEmphasisStyle:w,textEmphasisColor:w,boxDecorationBreak:w,clipPath:w,maskImage:w,maskMode:w,maskRepeat:w,maskPosition:w,maskClip:w,maskOrigin:w,maskSize:w,maskComposite:w,mask:w,maskBorderSource:w,maskBorderMode:w,maskBorderSlice:w,maskBorderWidth:w,maskBorderOutset:w,maskBorderRepeat:w,maskBorder:w,maskType:w,textDecorationStyle:wm,textDecorationSkip:wm,textDecorationLine:wm,textDecorationColor:wm,filter:w,fontFeatureSettings:wm,breakAfter:wmms,breakBefore:wmms,breakInside:wmms,columnCount:wm,columnFill:wm,columnGap:wm,columnRule:wm,columnRuleColor:wm,columnRuleStyle:wm,columnRuleWidth:wm,columns:wm,columnSpan:wm,columnWidth:wm,writingMode:wms,flex:wms,flexBasis:w,flexDirection:wms,flexGrow:w,flexFlow:wms,flexShrink:w,flexWrap:wms,alignContent:w,alignItems:w,alignSelf:w,justifyContent:w,order:w,transitionDelay:w,transitionDuration:w,transitionProperty:w,transitionTimingFunction:w,backdropFilter:w,scrollSnapType:wms,scrollSnapPointsX:wms,scrollSnapPointsY:wms,scrollSnapDestination:wms,scrollSnapCoordinate:wms,shapeImageThreshold:w,shapeImageMargin:w,shapeImageOutside:w,hyphens:wmms,flowInto:wms,flowFrom:wms,regionFragment:wms,boxSizing:m,textAlignLast:m,tabSize:m,wrapFlow:ms,wrapThrough:ms,wrapMargin:ms,touchAction:ms,gridTemplateColumns:ms,gridTemplateRows:ms,gridTemplateAreas:ms,gridTemplate:ms,gridAutoColumns:ms,gridAutoRows:ms,gridAutoFlow:ms,grid:ms,gridRowStart:ms,gridColumnStart:ms,gridRowEnd:ms,gridRow:ms,gridColumn:ms,gridColumnEnd:ms,gridColumnGap:ms,gridRowGap:ms,gridArea:ms,gridGap:ms,textSizeAdjust:wms,borderImage:w,borderImageOutset:w,borderImageRepeat:w,borderImageSlice:w,borderImageSource:w,borderImageWidth:w}};exports["default"]=_default;

/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';Object.defineProperty(exports,"__esModule",{value:true});exports.default=calc;var _isPrefixedValue=__webpack_require__(113);var _isPrefixedValue2=_interopRequireDefault(_isPrefixedValue);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var prefixes=['-webkit-','-moz-',''];function calc(property,value){if(typeof value==='string'&&!(0,_isPrefixedValue2.default)(value)&&value.indexOf('calc(')>-1){return prefixes.map(function(prefix){return value.replace(/calc\(/g,prefix+'calc(');});}}module.exports=exports['default'];

/***/ }),
/* 113 */
/***/ (function(module, exports) {

	'use strict';Object.defineProperty(exports,"__esModule",{value:true});exports.default=isPrefixedValue;var regex=/-webkit-|-moz-|-ms-/;function isPrefixedValue(value){return typeof value==='string'&&regex.test(value);}module.exports=exports['default'];

/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';Object.defineProperty(exports,"__esModule",{value:true});exports.default=crossFade;var _isPrefixedValue=__webpack_require__(113);var _isPrefixedValue2=_interopRequireDefault(_isPrefixedValue);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}// http://caniuse.com/#search=cross-fade
	var prefixes=['-webkit-',''];function crossFade(property,value){if(typeof value==='string'&&!(0,_isPrefixedValue2.default)(value)&&value.indexOf('cross-fade(')>-1){return prefixes.map(function(prefix){return value.replace(/cross-fade\(/g,prefix+'cross-fade(');});}}module.exports=exports['default'];

/***/ }),
/* 115 */
/***/ (function(module, exports) {

	'use strict';Object.defineProperty(exports,"__esModule",{value:true});exports.default=cursor;var prefixes=['-webkit-','-moz-',''];var values={'zoom-in':true,'zoom-out':true,grab:true,grabbing:true};function cursor(property,value){if(property==='cursor'&&values.hasOwnProperty(value)){return prefixes.map(function(prefix){return prefix+value;});}}module.exports=exports['default'];

/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';Object.defineProperty(exports,"__esModule",{value:true});exports.default=filter;var _isPrefixedValue=__webpack_require__(113);var _isPrefixedValue2=_interopRequireDefault(_isPrefixedValue);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}// http://caniuse.com/#feat=css-filter-function
	var prefixes=['-webkit-',''];function filter(property,value){if(typeof value==='string'&&!(0,_isPrefixedValue2.default)(value)&&value.indexOf('filter(')>-1){return prefixes.map(function(prefix){return value.replace(/filter\(/g,prefix+'filter(');});}}module.exports=exports['default'];

/***/ }),
/* 117 */
/***/ (function(module, exports) {

	'use strict';Object.defineProperty(exports,"__esModule",{value:true});exports.default=flex;var values={flex:['-webkit-box','-moz-box','-ms-flexbox','-webkit-flex','flex'],'inline-flex':['-webkit-inline-box','-moz-inline-box','-ms-inline-flexbox','-webkit-inline-flex','inline-flex']};function flex(property,value){if(property==='display'&&values.hasOwnProperty(value)){return values[value];}}module.exports=exports['default'];

/***/ }),
/* 118 */
/***/ (function(module, exports) {

	'use strict';Object.defineProperty(exports,"__esModule",{value:true});exports.default=flexboxIE;var alternativeValues={'space-around':'distribute','space-between':'justify','flex-start':'start','flex-end':'end'};var alternativeProps={alignContent:'msFlexLinePack',alignSelf:'msFlexItemAlign',alignItems:'msFlexAlign',justifyContent:'msFlexPack',order:'msFlexOrder',flexGrow:'msFlexPositive',flexShrink:'msFlexNegative',flexBasis:'msFlexPreferredSize'};function flexboxIE(property,value,style){if(alternativeProps.hasOwnProperty(property)){style[alternativeProps[property]]=alternativeValues[value]||value;}}module.exports=exports['default'];

/***/ }),
/* 119 */
/***/ (function(module, exports) {

	'use strict';Object.defineProperty(exports,"__esModule",{value:true});exports.default=flexboxOld;var alternativeValues={'space-around':'justify','space-between':'justify','flex-start':'start','flex-end':'end','wrap-reverse':'multiple',wrap:'multiple',flex:'box','inline-flex':'inline-box'};var alternativeProps={alignItems:'WebkitBoxAlign',justifyContent:'WebkitBoxPack',flexWrap:'WebkitBoxLines',flexGrow:'WebkitBoxFlex'};function flexboxOld(property,value,style){if(property==='flexDirection'&&typeof value==='string'){if(value.indexOf('column')>-1){style.WebkitBoxOrient='vertical';}else{style.WebkitBoxOrient='horizontal';}if(value.indexOf('reverse')>-1){style.WebkitBoxDirection='reverse';}else{style.WebkitBoxDirection='normal';}}if(alternativeProps.hasOwnProperty(property)){style[alternativeProps[property]]=alternativeValues[value]||value;}}module.exports=exports['default'];

/***/ }),
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';Object.defineProperty(exports,"__esModule",{value:true});exports.default=gradient;var _isPrefixedValue=__webpack_require__(113);var _isPrefixedValue2=_interopRequireDefault(_isPrefixedValue);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var prefixes=['-webkit-','-moz-',''];var values=/linear-gradient|radial-gradient|repeating-linear-gradient|repeating-radial-gradient/gi;function gradient(property,value){if(typeof value==='string'&&!(0,_isPrefixedValue2.default)(value)&&values.test(value)){return prefixes.map(function(prefix){return value.replace(values,function(grad){return prefix+grad;});});}}module.exports=exports['default'];

/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';Object.defineProperty(exports,"__esModule",{value:true});exports.default=imageSet;var _isPrefixedValue=__webpack_require__(113);var _isPrefixedValue2=_interopRequireDefault(_isPrefixedValue);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}// http://caniuse.com/#feat=css-image-set
	var prefixes=['-webkit-',''];function imageSet(property,value){if(typeof value==='string'&&!(0,_isPrefixedValue2.default)(value)&&value.indexOf('image-set(')>-1){return prefixes.map(function(prefix){return value.replace(/image-set\(/g,prefix+'image-set(');});}}module.exports=exports['default'];

/***/ }),
/* 122 */
/***/ (function(module, exports) {

	'use strict';Object.defineProperty(exports,"__esModule",{value:true});exports.default=position;function position(property,value){if(property==='position'&&value==='sticky'){return['-webkit-sticky','sticky'];}}module.exports=exports['default'];

/***/ }),
/* 123 */
/***/ (function(module, exports) {

	'use strict';Object.defineProperty(exports,"__esModule",{value:true});exports.default=sizing;var prefixes=['-webkit-','-moz-',''];var properties={maxHeight:true,maxWidth:true,width:true,height:true,columnWidth:true,minWidth:true,minHeight:true};var values={'min-content':true,'max-content':true,'fill-available':true,'fit-content':true,'contain-floats':true};function sizing(property,value){if(properties.hasOwnProperty(property)&&values.hasOwnProperty(value)){return prefixes.map(function(prefix){return prefix+value;});}}module.exports=exports['default'];

/***/ }),
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';Object.defineProperty(exports,"__esModule",{value:true});exports.default=transition;var _hyphenateProperty=__webpack_require__(125);var _hyphenateProperty2=_interopRequireDefault(_hyphenateProperty);var _isPrefixedValue=__webpack_require__(113);var _isPrefixedValue2=_interopRequireDefault(_isPrefixedValue);var _capitalizeString=__webpack_require__(100);var _capitalizeString2=_interopRequireDefault(_capitalizeString);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var properties={transition:true,transitionProperty:true,WebkitTransition:true,WebkitTransitionProperty:true,MozTransition:true,MozTransitionProperty:true};var prefixMapping={Webkit:'-webkit-',Moz:'-moz-',ms:'-ms-'};function prefixValue(value,propertyPrefixMap){if((0,_isPrefixedValue2.default)(value)){return value;}// only split multi values, not cubic beziers
	var multipleValues=value.split(/,(?![^()]*(?:\([^()]*\))?\))/g);for(var i=0,len=multipleValues.length;i<len;++i){var singleValue=multipleValues[i];var values=[singleValue];for(var property in propertyPrefixMap){var dashCaseProperty=(0,_hyphenateProperty2.default)(property);if(singleValue.indexOf(dashCaseProperty)>-1&&dashCaseProperty!=='order'){var prefixes=propertyPrefixMap[property];for(var j=0,pLen=prefixes.length;j<pLen;++j){// join all prefixes and create a new value
	values.unshift(singleValue.replace(dashCaseProperty,prefixMapping[prefixes[j]]+dashCaseProperty));}}}multipleValues[i]=values.join(',');}return multipleValues.join(',');}function transition(property,value,style,propertyPrefixMap){// also check for already prefixed transitions
	if(typeof value==='string'&&properties.hasOwnProperty(property)){var outputValue=prefixValue(value,propertyPrefixMap);// if the property is already prefixed
	var webkitOutput=outputValue.split(/,(?![^()]*(?:\([^()]*\))?\))/g).filter(function(val){return!/-moz-|-ms-/.test(val);}).join(',');if(property.indexOf('Webkit')>-1){return webkitOutput;}var mozOutput=outputValue.split(/,(?![^()]*(?:\([^()]*\))?\))/g).filter(function(val){return!/-webkit-|-ms-/.test(val);}).join(',');if(property.indexOf('Moz')>-1){return mozOutput;}style['Webkit'+(0,_capitalizeString2.default)(property)]=webkitOutput;style['Moz'+(0,_capitalizeString2.default)(property)]=mozOutput;return outputValue;}}module.exports=exports['default'];

/***/ }),
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';Object.defineProperty(exports,"__esModule",{value:true});exports.default=hyphenateProperty;var _hyphenateStyleName=__webpack_require__(126);var _hyphenateStyleName2=_interopRequireDefault(_hyphenateStyleName);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function hyphenateProperty(property){return(0,_hyphenateStyleName2.default)(property);}module.exports=exports['default'];

/***/ }),
/* 126 */
/***/ (function(module, exports) {

	'use strict';/* eslint-disable no-var, prefer-template */var uppercasePattern=/[A-Z]/g;var msPattern=/^ms-/;var cache={};function toHyphenLower(match){return'-'+match.toLowerCase();}function hyphenateStyleName(name){if(cache.hasOwnProperty(name)){return cache[name];}var hName=name.replace(uppercasePattern,toHyphenLower);return cache[name]=msPattern.test(hName)?'-'+hName:hName;}module.exports=hyphenateStyleName;

/***/ }),
/* 127 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports["default"]=void 0;var _calc=_interopRequireDefault(__webpack_require__(128));var _crossFade=_interopRequireDefault(__webpack_require__(130));var _cursor=_interopRequireDefault(__webpack_require__(131));var _filter=_interopRequireDefault(__webpack_require__(132));var _flex=_interopRequireDefault(__webpack_require__(133));var _flexboxIE=_interopRequireDefault(__webpack_require__(134));var _flexboxOld=_interopRequireDefault(__webpack_require__(135));var _gradient=_interopRequireDefault(__webpack_require__(136));var _imageSet=_interopRequireDefault(__webpack_require__(137));var _position=_interopRequireDefault(__webpack_require__(138));var _sizing=_interopRequireDefault(__webpack_require__(139));var _transition=_interopRequireDefault(__webpack_require__(140));function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj};}var _default={plugins:[_calc["default"],_crossFade["default"],_cursor["default"],_filter["default"],_flex["default"],_flexboxIE["default"],_flexboxOld["default"],_gradient["default"],_imageSet["default"],_position["default"],_sizing["default"],_transition["default"]],prefixMap:{chrome:{transform:35,transformOrigin:35,transformOriginX:35,transformOriginY:35,backfaceVisibility:35,perspective:35,perspectiveOrigin:35,transformStyle:35,transformOriginZ:35,animation:42,animationDelay:42,animationDirection:42,animationFillMode:42,animationDuration:42,animationIterationCount:42,animationName:42,animationPlayState:42,animationTimingFunction:42,appearance:66,userSelect:53,fontKerning:32,textEmphasisPosition:66,textEmphasis:66,textEmphasisStyle:66,textEmphasisColor:66,boxDecorationBreak:66,clipPath:54,maskImage:66,maskMode:66,maskRepeat:66,maskPosition:66,maskClip:66,maskOrigin:66,maskSize:66,maskComposite:66,mask:66,maskBorderSource:66,maskBorderMode:66,maskBorderSlice:66,maskBorderWidth:66,maskBorderOutset:66,maskBorderRepeat:66,maskBorder:66,maskType:66,textDecorationStyle:56,textDecorationSkip:56,textDecorationLine:56,textDecorationColor:56,filter:52,fontFeatureSettings:47,breakAfter:49,breakBefore:49,breakInside:49,columnCount:49,columnFill:49,columnGap:49,columnRule:49,columnRuleColor:49,columnRuleStyle:49,columnRuleWidth:49,columns:49,columnSpan:49,columnWidth:49,writingMode:47},safari:{flex:8,flexBasis:8,flexDirection:8,flexGrow:8,flexFlow:8,flexShrink:8,flexWrap:8,alignContent:8,alignItems:8,alignSelf:8,justifyContent:8,order:8,transition:6,transitionDelay:6,transitionDuration:6,transitionProperty:6,transitionTimingFunction:6,transform:8,transformOrigin:8,transformOriginX:8,transformOriginY:8,backfaceVisibility:8,perspective:8,perspectiveOrigin:8,transformStyle:8,transformOriginZ:8,animation:8,animationDelay:8,animationDirection:8,animationFillMode:8,animationDuration:8,animationIterationCount:8,animationName:8,animationPlayState:8,animationTimingFunction:8,appearance:11,userSelect:11,backdropFilter:11,fontKerning:9,scrollSnapType:10.1,scrollSnapPointsX:10.1,scrollSnapPointsY:10.1,scrollSnapDestination:10.1,scrollSnapCoordinate:10.1,textEmphasisPosition:7,textEmphasis:7,textEmphasisStyle:7,textEmphasisColor:7,boxDecorationBreak:11,clipPath:11,maskImage:11,maskMode:11,maskRepeat:11,maskPosition:11,maskClip:11,maskOrigin:11,maskSize:11,maskComposite:11,mask:11,maskBorderSource:11,maskBorderMode:11,maskBorderSlice:11,maskBorderWidth:11,maskBorderOutset:11,maskBorderRepeat:11,maskBorder:11,maskType:11,textDecorationStyle:11,textDecorationSkip:11,textDecorationLine:11,textDecorationColor:11,shapeImageThreshold:10,shapeImageMargin:10,shapeImageOutside:10,filter:9,hyphens:11,flowInto:11,flowFrom:11,breakBefore:8,breakAfter:8,breakInside:8,regionFragment:11,columnCount:8,columnFill:8,columnGap:8,columnRule:8,columnRuleColor:8,columnRuleStyle:8,columnRuleWidth:8,columns:8,columnSpan:8,columnWidth:8,writingMode:10.1},firefox:{appearance:60,userSelect:60,boxSizing:28,textAlignLast:48,textDecorationStyle:35,textDecorationSkip:35,textDecorationLine:35,textDecorationColor:35,tabSize:60,hyphens:42,fontFeatureSettings:33,breakAfter:51,breakBefore:51,breakInside:51,columnCount:51,columnFill:51,columnGap:51,columnRule:51,columnRuleColor:51,columnRuleStyle:51,columnRuleWidth:51,columns:51,columnSpan:51,columnWidth:51},opera:{flex:16,flexBasis:16,flexDirection:16,flexGrow:16,flexFlow:16,flexShrink:16,flexWrap:16,alignContent:16,alignItems:16,alignSelf:16,justifyContent:16,order:16,transform:22,transformOrigin:22,transformOriginX:22,transformOriginY:22,backfaceVisibility:22,perspective:22,perspectiveOrigin:22,transformStyle:22,transformOriginZ:22,animation:29,animationDelay:29,animationDirection:29,animationFillMode:29,animationDuration:29,animationIterationCount:29,animationName:29,animationPlayState:29,animationTimingFunction:29,appearance:50,userSelect:40,fontKerning:19,textEmphasisPosition:50,textEmphasis:50,textEmphasisStyle:50,textEmphasisColor:50,boxDecorationBreak:50,clipPath:41,maskImage:50,maskMode:50,maskRepeat:50,maskPosition:50,maskClip:50,maskOrigin:50,maskSize:50,maskComposite:50,mask:50,maskBorderSource:50,maskBorderMode:50,maskBorderSlice:50,maskBorderWidth:50,maskBorderOutset:50,maskBorderRepeat:50,maskBorder:50,maskType:50,textDecorationStyle:43,textDecorationSkip:43,textDecorationLine:43,textDecorationColor:43,filter:39,fontFeatureSettings:34,breakAfter:36,breakBefore:36,breakInside:36,columnCount:36,columnFill:36,columnGap:36,columnRule:36,columnRuleColor:36,columnRuleStyle:36,columnRuleWidth:36,columns:36,columnSpan:36,columnWidth:36,writingMode:34},ie:{flex:10,flexDirection:10,flexFlow:10,flexWrap:10,transform:9,transformOrigin:9,transformOriginX:9,transformOriginY:9,userSelect:11,wrapFlow:11,wrapThrough:11,wrapMargin:11,scrollSnapType:11,scrollSnapPointsX:11,scrollSnapPointsY:11,scrollSnapDestination:11,scrollSnapCoordinate:11,touchAction:10,hyphens:11,flowInto:11,flowFrom:11,breakBefore:11,breakAfter:11,breakInside:11,regionFragment:11,gridTemplateColumns:11,gridTemplateRows:11,gridTemplateAreas:11,gridTemplate:11,gridAutoColumns:11,gridAutoRows:11,gridAutoFlow:11,grid:11,gridRowStart:11,gridColumnStart:11,gridRowEnd:11,gridRow:11,gridColumn:11,gridColumnEnd:11,gridColumnGap:11,gridRowGap:11,gridArea:11,gridGap:11,textSizeAdjust:11,writingMode:11},edge:{userSelect:17,wrapFlow:17,wrapThrough:17,wrapMargin:17,scrollSnapType:17,scrollSnapPointsX:17,scrollSnapPointsY:17,scrollSnapDestination:17,scrollSnapCoordinate:17,hyphens:17,flowInto:17,flowFrom:17,breakBefore:17,breakAfter:17,breakInside:17,regionFragment:17,gridTemplateColumns:15,gridTemplateRows:15,gridTemplateAreas:15,gridTemplate:15,gridAutoColumns:15,gridAutoRows:15,gridAutoFlow:15,grid:15,gridRowStart:15,gridColumnStart:15,gridRowEnd:15,gridRow:15,gridColumn:15,gridColumnEnd:15,gridColumnGap:15,gridRowGap:15,gridArea:15,gridGap:15},ios_saf:{flex:8.1,flexBasis:8.1,flexDirection:8.1,flexGrow:8.1,flexFlow:8.1,flexShrink:8.1,flexWrap:8.1,alignContent:8.1,alignItems:8.1,alignSelf:8.1,justifyContent:8.1,order:8.1,transition:6,transitionDelay:6,transitionDuration:6,transitionProperty:6,transitionTimingFunction:6,transform:8.1,transformOrigin:8.1,transformOriginX:8.1,transformOriginY:8.1,backfaceVisibility:8.1,perspective:8.1,perspectiveOrigin:8.1,transformStyle:8.1,transformOriginZ:8.1,animation:8.1,animationDelay:8.1,animationDirection:8.1,animationFillMode:8.1,animationDuration:8.1,animationIterationCount:8.1,animationName:8.1,animationPlayState:8.1,animationTimingFunction:8.1,appearance:11,userSelect:11,backdropFilter:11,fontKerning:11,scrollSnapType:10.3,scrollSnapPointsX:10.3,scrollSnapPointsY:10.3,scrollSnapDestination:10.3,scrollSnapCoordinate:10.3,boxDecorationBreak:11,clipPath:11,maskImage:11,maskMode:11,maskRepeat:11,maskPosition:11,maskClip:11,maskOrigin:11,maskSize:11,maskComposite:11,mask:11,maskBorderSource:11,maskBorderMode:11,maskBorderSlice:11,maskBorderWidth:11,maskBorderOutset:11,maskBorderRepeat:11,maskBorder:11,maskType:11,textSizeAdjust:11,textDecorationStyle:11,textDecorationSkip:11,textDecorationLine:11,textDecorationColor:11,shapeImageThreshold:10,shapeImageMargin:10,shapeImageOutside:10,filter:9,hyphens:11,flowInto:11,flowFrom:11,breakBefore:8.1,breakAfter:8.1,breakInside:8.1,regionFragment:11,columnCount:8.1,columnFill:8.1,columnGap:8.1,columnRule:8.1,columnRuleColor:8.1,columnRuleStyle:8.1,columnRuleWidth:8.1,columns:8.1,columnSpan:8.1,columnWidth:8.1,writingMode:10.3},android:{borderImage:4.2,borderImageOutset:4.2,borderImageRepeat:4.2,borderImageSlice:4.2,borderImageSource:4.2,borderImageWidth:4.2,flex:4.2,flexBasis:4.2,flexDirection:4.2,flexGrow:4.2,flexFlow:4.2,flexShrink:4.2,flexWrap:4.2,alignContent:4.2,alignItems:4.2,alignSelf:4.2,justifyContent:4.2,order:4.2,transition:4.2,transitionDelay:4.2,transitionDuration:4.2,transitionProperty:4.2,transitionTimingFunction:4.2,transform:4.4,transformOrigin:4.4,transformOriginX:4.4,transformOriginY:4.4,backfaceVisibility:4.4,perspective:4.4,perspectiveOrigin:4.4,transformStyle:4.4,transformOriginZ:4.4,animation:4.4,animationDelay:4.4,animationDirection:4.4,animationFillMode:4.4,animationDuration:4.4,animationIterationCount:4.4,animationName:4.4,animationPlayState:4.4,animationTimingFunction:4.4,appearance:62,userSelect:4.4,fontKerning:4.4,textEmphasisPosition:62,textEmphasis:62,textEmphasisStyle:62,textEmphasisColor:62,boxDecorationBreak:62,clipPath:4.4,maskImage:62,maskMode:62,maskRepeat:62,maskPosition:62,maskClip:62,maskOrigin:62,maskSize:62,maskComposite:62,mask:62,maskBorderSource:62,maskBorderMode:62,maskBorderSlice:62,maskBorderWidth:62,maskBorderOutset:62,maskBorderRepeat:62,maskBorder:62,maskType:62,filter:4.4,fontFeatureSettings:4.4,breakAfter:4.4,breakBefore:4.4,breakInside:4.4,columnCount:4.4,columnFill:4.4,columnGap:4.4,columnRule:4.4,columnRuleColor:4.4,columnRuleStyle:4.4,columnRuleWidth:4.4,columns:4.4,columnSpan:4.4,columnWidth:4.4,writingMode:4.4},and_chr:{appearance:62,textEmphasisPosition:62,textEmphasis:62,textEmphasisStyle:62,textEmphasisColor:62,boxDecorationBreak:62,maskImage:62,maskMode:62,maskRepeat:62,maskPosition:62,maskClip:62,maskOrigin:62,maskSize:62,maskComposite:62,mask:62,maskBorderSource:62,maskBorderMode:62,maskBorderSlice:62,maskBorderWidth:62,maskBorderOutset:62,maskBorderRepeat:62,maskBorder:62,maskType:62},and_uc:{flex:11.4,flexBasis:11.4,flexDirection:11.4,flexGrow:11.4,flexFlow:11.4,flexShrink:11.4,flexWrap:11.4,alignContent:11.4,alignItems:11.4,alignSelf:11.4,justifyContent:11.4,order:11.4,transform:11.4,transformOrigin:11.4,transformOriginX:11.4,transformOriginY:11.4,backfaceVisibility:11.4,perspective:11.4,perspectiveOrigin:11.4,transformStyle:11.4,transformOriginZ:11.4,animation:11.4,animationDelay:11.4,animationDirection:11.4,animationFillMode:11.4,animationDuration:11.4,animationIterationCount:11.4,animationName:11.4,animationPlayState:11.4,animationTimingFunction:11.4,appearance:11.4,userSelect:11.4,textEmphasisPosition:11.4,textEmphasis:11.4,textEmphasisStyle:11.4,textEmphasisColor:11.4,clipPath:11.4,maskImage:11.4,maskMode:11.4,maskRepeat:11.4,maskPosition:11.4,maskClip:11.4,maskOrigin:11.4,maskSize:11.4,maskComposite:11.4,mask:11.4,maskBorderSource:11.4,maskBorderMode:11.4,maskBorderSlice:11.4,maskBorderWidth:11.4,maskBorderOutset:11.4,maskBorderRepeat:11.4,maskBorder:11.4,maskType:11.4,textSizeAdjust:11.4,filter:11.4,hyphens:11.4,fontFeatureSettings:11.4,breakAfter:11.4,breakBefore:11.4,breakInside:11.4,columnCount:11.4,columnFill:11.4,columnGap:11.4,columnRule:11.4,columnRuleColor:11.4,columnRuleStyle:11.4,columnRuleWidth:11.4,columns:11.4,columnSpan:11.4,columnWidth:11.4,writingMode:11.4},op_mini:{}}};exports["default"]=_default;

/***/ }),
/* 128 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';Object.defineProperty(exports,"__esModule",{value:true});exports.default=calc;var _getPrefixedValue=__webpack_require__(129);var _getPrefixedValue2=_interopRequireDefault(_getPrefixedValue);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function calc(property,value,style,_ref){var browserName=_ref.browserName,browserVersion=_ref.browserVersion,cssPrefix=_ref.cssPrefix,keepUnprefixed=_ref.keepUnprefixed;if(typeof value==='string'&&value.indexOf('calc(')>-1&&(browserName==='firefox'&&browserVersion<15||browserName==='chrome'&&browserVersion<25||browserName==='safari'&&browserVersion<6.1||browserName==='ios_saf'&&browserVersion<7)){return(0,_getPrefixedValue2.default)(value.replace(/calc\(/g,cssPrefix+'calc('),value,keepUnprefixed);}}module.exports=exports['default'];

/***/ }),
/* 129 */
/***/ (function(module, exports) {

	"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports.default=getPrefixedValue;function getPrefixedValue(prefixedValue,value,keepUnprefixed){if(keepUnprefixed){return[prefixedValue,value];}return prefixedValue;}module.exports=exports["default"];

/***/ }),
/* 130 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';Object.defineProperty(exports,"__esModule",{value:true});exports.default=crossFade;var _getPrefixedValue=__webpack_require__(129);var _getPrefixedValue2=_interopRequireDefault(_getPrefixedValue);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function crossFade(property,value,style,_ref){var browserName=_ref.browserName,browserVersion=_ref.browserVersion,cssPrefix=_ref.cssPrefix,keepUnprefixed=_ref.keepUnprefixed;if(typeof value==='string'&&value.indexOf('cross-fade(')>-1&&(browserName==='chrome'||browserName==='opera'||browserName==='and_chr'||(browserName==='ios_saf'||browserName==='safari')&&browserVersion<10)){return(0,_getPrefixedValue2.default)(value.replace(/cross-fade\(/g,cssPrefix+'cross-fade('),value,keepUnprefixed);}}module.exports=exports['default'];

/***/ }),
/* 131 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';Object.defineProperty(exports,"__esModule",{value:true});exports.default=cursor;var _getPrefixedValue=__webpack_require__(129);var _getPrefixedValue2=_interopRequireDefault(_getPrefixedValue);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var grabValues={grab:true,grabbing:true};var zoomValues={'zoom-in':true,'zoom-out':true};function cursor(property,value,style,_ref){var browserName=_ref.browserName,browserVersion=_ref.browserVersion,cssPrefix=_ref.cssPrefix,keepUnprefixed=_ref.keepUnprefixed;// adds prefixes for firefox, chrome, safari, and opera regardless of
	// version until a reliable browser support info can be found
	// see: https://github.com/rofrischmann/inline-style-prefixer/issues/79
	if(property==='cursor'&&grabValues[value]&&(browserName==='firefox'||browserName==='chrome'||browserName==='safari'||browserName==='opera')){return(0,_getPrefixedValue2.default)(cssPrefix+value,value,keepUnprefixed);}if(property==='cursor'&&zoomValues[value]&&(browserName==='firefox'&&browserVersion<24||browserName==='chrome'&&browserVersion<37||browserName==='safari'&&browserVersion<9||browserName==='opera'&&browserVersion<24)){return(0,_getPrefixedValue2.default)(cssPrefix+value,value,keepUnprefixed);}}module.exports=exports['default'];

/***/ }),
/* 132 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';Object.defineProperty(exports,"__esModule",{value:true});exports.default=filter;var _getPrefixedValue=__webpack_require__(129);var _getPrefixedValue2=_interopRequireDefault(_getPrefixedValue);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function filter(property,value,style,_ref){var browserName=_ref.browserName,browserVersion=_ref.browserVersion,cssPrefix=_ref.cssPrefix,keepUnprefixed=_ref.keepUnprefixed;if(typeof value==='string'&&value.indexOf('filter(')>-1&&(browserName==='ios_saf'||browserName==='safari'&&browserVersion<9.1)){return(0,_getPrefixedValue2.default)(value.replace(/filter\(/g,cssPrefix+'filter('),value,keepUnprefixed);}}module.exports=exports['default'];

/***/ }),
/* 133 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';Object.defineProperty(exports,"__esModule",{value:true});exports.default=flex;var _getPrefixedValue=__webpack_require__(129);var _getPrefixedValue2=_interopRequireDefault(_getPrefixedValue);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var values={flex:true,'inline-flex':true};function flex(property,value,style,_ref){var browserName=_ref.browserName,browserVersion=_ref.browserVersion,cssPrefix=_ref.cssPrefix,keepUnprefixed=_ref.keepUnprefixed;if(property==='display'&&values[value]&&(browserName==='chrome'&&browserVersion<29&&browserVersion>20||(browserName==='safari'||browserName==='ios_saf')&&browserVersion<9&&browserVersion>6||browserName==='opera'&&(browserVersion===15||browserVersion===16))){return(0,_getPrefixedValue2.default)(cssPrefix+value,value,keepUnprefixed);}}module.exports=exports['default'];

/***/ }),
/* 134 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';Object.defineProperty(exports,"__esModule",{value:true});exports.default=flexboxIE;var _getPrefixedValue=__webpack_require__(129);var _getPrefixedValue2=_interopRequireDefault(_getPrefixedValue);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var alternativeValues={'space-around':'distribute','space-between':'justify','flex-start':'start','flex-end':'end',flex:'flexbox','inline-flex':'inline-flexbox'};var alternativeProps={alignContent:'msFlexLinePack',alignSelf:'msFlexItemAlign',alignItems:'msFlexAlign',justifyContent:'msFlexPack',order:'msFlexOrder',flexGrow:'msFlexPositive',flexShrink:'msFlexNegative',flexBasis:'msFlexPreferredSize'};function flexboxIE(property,value,style,_ref){var browserName=_ref.browserName,browserVersion=_ref.browserVersion,cssPrefix=_ref.cssPrefix,keepUnprefixed=_ref.keepUnprefixed,requiresPrefix=_ref.requiresPrefix;if((alternativeProps.hasOwnProperty(property)||property==='display'&&typeof value==='string'&&value.indexOf('flex')>-1)&&(browserName==='ie_mob'||browserName==='ie')&&browserVersion===10){delete requiresPrefix[property];if(!keepUnprefixed&&!Array.isArray(style[property])){delete style[property];}if(property==='display'&&alternativeValues.hasOwnProperty(value)){return(0,_getPrefixedValue2.default)(cssPrefix+alternativeValues[value],value,keepUnprefixed);}if(alternativeProps.hasOwnProperty(property)){style[alternativeProps[property]]=alternativeValues[value]||value;}}}module.exports=exports['default'];

/***/ }),
/* 135 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';Object.defineProperty(exports,"__esModule",{value:true});exports.default=flexboxOld;var _getPrefixedValue=__webpack_require__(129);var _getPrefixedValue2=_interopRequireDefault(_getPrefixedValue);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var alternativeValues={'space-around':'justify','space-between':'justify','flex-start':'start','flex-end':'end','wrap-reverse':'multiple',wrap:'multiple',flex:'box','inline-flex':'inline-box'};var alternativeProps={alignItems:'WebkitBoxAlign',justifyContent:'WebkitBoxPack',flexWrap:'WebkitBoxLines',flexGrow:'WebkitBoxFlex'};var otherProps=['alignContent','alignSelf','order','flexGrow','flexShrink','flexBasis','flexDirection'];var properties=Object.keys(alternativeProps).concat(otherProps);function flexboxOld(property,value,style,_ref){var browserName=_ref.browserName,browserVersion=_ref.browserVersion,cssPrefix=_ref.cssPrefix,keepUnprefixed=_ref.keepUnprefixed,requiresPrefix=_ref.requiresPrefix;if((properties.indexOf(property)>-1||property==='display'&&typeof value==='string'&&value.indexOf('flex')>-1)&&(browserName==='firefox'&&browserVersion<22||browserName==='chrome'&&browserVersion<21||(browserName==='safari'||browserName==='ios_saf')&&browserVersion<=6.1||browserName==='android'&&browserVersion<4.4||browserName==='and_uc')){delete requiresPrefix[property];if(!keepUnprefixed&&!Array.isArray(style[property])){delete style[property];}if(property==='flexDirection'&&typeof value==='string'){if(value.indexOf('column')>-1){style.WebkitBoxOrient='vertical';}else{style.WebkitBoxOrient='horizontal';}if(value.indexOf('reverse')>-1){style.WebkitBoxDirection='reverse';}else{style.WebkitBoxDirection='normal';}}if(property==='display'&&alternativeValues.hasOwnProperty(value)){return(0,_getPrefixedValue2.default)(cssPrefix+alternativeValues[value],value,keepUnprefixed);}if(alternativeProps.hasOwnProperty(property)){style[alternativeProps[property]]=alternativeValues[value]||value;}}}module.exports=exports['default'];

/***/ }),
/* 136 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';Object.defineProperty(exports,"__esModule",{value:true});exports.default=gradient;var _getPrefixedValue=__webpack_require__(129);var _getPrefixedValue2=_interopRequireDefault(_getPrefixedValue);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var values=/linear-gradient|radial-gradient|repeating-linear-gradient|repeating-radial-gradient/gi;function gradient(property,value,style,_ref){var browserName=_ref.browserName,browserVersion=_ref.browserVersion,cssPrefix=_ref.cssPrefix,keepUnprefixed=_ref.keepUnprefixed;if(typeof value==='string'&&values.test(value)&&(browserName==='firefox'&&browserVersion<16||browserName==='chrome'&&browserVersion<26||(browserName==='safari'||browserName==='ios_saf')&&browserVersion<7||(browserName==='opera'||browserName==='op_mini')&&browserVersion<12.1||browserName==='android'&&browserVersion<4.4||browserName==='and_uc')){return(0,_getPrefixedValue2.default)(value.replace(values,function(grad){return cssPrefix+grad;}),value,keepUnprefixed);}}module.exports=exports['default'];

/***/ }),
/* 137 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';Object.defineProperty(exports,"__esModule",{value:true});exports.default=imageSet;var _getPrefixedValue=__webpack_require__(129);var _getPrefixedValue2=_interopRequireDefault(_getPrefixedValue);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function imageSet(property,value,style,_ref){var browserName=_ref.browserName,cssPrefix=_ref.cssPrefix,keepUnprefixed=_ref.keepUnprefixed;if(typeof value==='string'&&value.indexOf('image-set(')>-1&&(browserName==='chrome'||browserName==='opera'||browserName==='and_chr'||browserName==='and_uc'||browserName==='ios_saf'||browserName==='safari')){return(0,_getPrefixedValue2.default)(value.replace(/image-set\(/g,cssPrefix+'image-set('),value,keepUnprefixed);}}module.exports=exports['default'];

/***/ }),
/* 138 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';Object.defineProperty(exports,"__esModule",{value:true});exports.default=position;var _getPrefixedValue=__webpack_require__(129);var _getPrefixedValue2=_interopRequireDefault(_getPrefixedValue);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function position(property,value,style,_ref){var browserName=_ref.browserName,cssPrefix=_ref.cssPrefix,keepUnprefixed=_ref.keepUnprefixed;if(property==='position'&&value==='sticky'&&(browserName==='safari'||browserName==='ios_saf')){return(0,_getPrefixedValue2.default)(cssPrefix+value,value,keepUnprefixed);}}module.exports=exports['default'];

/***/ }),
/* 139 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';Object.defineProperty(exports,"__esModule",{value:true});exports.default=sizing;var _getPrefixedValue=__webpack_require__(129);var _getPrefixedValue2=_interopRequireDefault(_getPrefixedValue);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var properties={maxHeight:true,maxWidth:true,width:true,height:true,columnWidth:true,minWidth:true,minHeight:true};var values={'min-content':true,'max-content':true,'fill-available':true,'fit-content':true,'contain-floats':true// TODO: chrome & opera support it
	};function sizing(property,value,style,_ref){var cssPrefix=_ref.cssPrefix,keepUnprefixed=_ref.keepUnprefixed;// This might change in the future
	// Keep an eye on it
	if(properties.hasOwnProperty(property)&&values.hasOwnProperty(value)){return(0,_getPrefixedValue2.default)(cssPrefix+value,value,keepUnprefixed);}}module.exports=exports['default'];

/***/ }),
/* 140 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';Object.defineProperty(exports,"__esModule",{value:true});exports.default=transition;var _hyphenateProperty=__webpack_require__(125);var _hyphenateProperty2=_interopRequireDefault(_hyphenateProperty);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var properties={transition:true,transitionProperty:true,WebkitTransition:true,WebkitTransitionProperty:true,MozTransition:true,MozTransitionProperty:true};var requiresPrefixDashCased=void 0;function transition(property,value,style,_ref){var cssPrefix=_ref.cssPrefix,keepUnprefixed=_ref.keepUnprefixed,requiresPrefix=_ref.requiresPrefix;if(typeof value==='string'&&properties.hasOwnProperty(property)){// memoize the prefix array for later use
	if(!requiresPrefixDashCased){requiresPrefixDashCased=Object.keys(requiresPrefix).map(function(prop){return(0,_hyphenateProperty2.default)(prop);});}// only split multi values, not cubic beziers
	var multipleValues=value.split(/,(?![^()]*(?:\([^()]*\))?\))/g);requiresPrefixDashCased.forEach(function(prop){multipleValues.forEach(function(val,index){if(val.indexOf(prop)>-1&&prop!=='order'){multipleValues[index]=val.replace(prop,cssPrefix+prop)+(keepUnprefixed?','+val:'');}});});return multipleValues.join(',');}}module.exports=exports['default'];

/***/ }),
/* 141 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports["default"]=void 0;var _cleanStateKey=_interopRequireDefault(__webpack_require__(142));function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj};}var getState=function getState(state,elementKey,value){var key=(0,_cleanStateKey["default"])(elementKey);return!!state&&!!state._radiumStyleState&&!!state._radiumStyleState[key]&&state._radiumStyleState[key][value];};var _default=getState;exports["default"]=_default;

/***/ }),
/* 142 */
/***/ (function(module, exports) {

	"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports["default"]=void 0;/* flow */var cleanStateKey=function cleanStateKey(key){return key===null||typeof key==='undefined'?'main':key.toString();};var _default=cleanStateKey;exports["default"]=_default;

/***/ }),
/* 143 */
/***/ (function(module, exports) {

	"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports["default"]=void 0;var getStateKey=function getStateKey(renderedElement){return typeof renderedElement.ref==='string'?renderedElement.ref:renderedElement.key;};var _default=getStateKey;exports["default"]=_default;

/***/ }),
/* 144 */
/***/ (function(module, exports) {

	"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports["default"]=void 0;var getRadiumStyleState=function getRadiumStyleState(component){return component._lastRadiumState||component.state&&component.state._radiumStyleState||{};};var _default=getRadiumStyleState;exports["default"]=_default;

/***/ }),
/* 145 */
/***/ (function(module, exports) {

	"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports["default"]=hash;// a simple djb2 hash based on hash-string:
	// https://github.com/MatthewBarker/hash-string/blob/master/source/hash-string.js
	// returns a hex-encoded hash
	function hash(text){if(!text){return'';}var hashValue=5381;var index=text.length-1;while(index){hashValue=hashValue*33^text.charCodeAt(index);index-=1;}return(hashValue>>>0).toString(16);}

/***/ }),
/* 146 */
/***/ (function(module, exports) {

	"use strict";var _typeof2=typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"?function(obj){return typeof obj;}:function(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;};Object.defineProperty(exports,"__esModule",{value:true});exports.isNestedStyle=isNestedStyle;exports.mergeStyles=mergeStyles;function _typeof(obj){if(typeof Symbol==="function"&&_typeof2(Symbol.iterator)==="symbol"){_typeof=function _typeof(obj){return typeof obj==="undefined"?"undefined":_typeof2(obj);};}else{_typeof=function _typeof(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj==="undefined"?"undefined":_typeof2(obj);};}return _typeof(obj);}function isNestedStyle(value){// Don't merge objects overriding toString, since they should be converted
	// to string values.
	return value&&value.constructor===Object&&value.toString===Object.prototype.toString;}// Merge style objects. Deep merge plain object values.
	function mergeStyles(styles){var result={};styles.forEach(function(style){if(!style||_typeof(style)!=='object'){return;}if(Array.isArray(style)){style=mergeStyles(style);}Object.keys(style).forEach(function(key){// Simple case, nothing nested
	if(!isNestedStyle(style[key])||!isNestedStyle(result[key])){result[key]=style[key];return;}// If nested media, don't merge the nested styles, append a space to the
	// end (benign when converted to CSS). This way we don't end up merging
	// media queries that appear later in the chain with those that appear
	// earlier.
	if(key.indexOf('@media')===0){var newKey=key;// eslint-disable-next-line no-constant-condition
	while(true){newKey+=' ';if(!result[newKey]){result[newKey]=style[key];return;}}}// Merge all other nested styles recursively
	result[key]=mergeStyles([result[key],style[key]]);});});return result;}

/***/ }),
/* 147 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports["default"]=void 0;var _checkPropsPlugin=_interopRequireDefault(__webpack_require__(148));var _keyframesPlugin=_interopRequireDefault(__webpack_require__(149));var _mergeStyleArrayPlugin=_interopRequireDefault(__webpack_require__(150));var _prefixPlugin=_interopRequireDefault(__webpack_require__(151));var _removeNestedStylesPlugin=_interopRequireDefault(__webpack_require__(152));var _resolveInteractionStylesPlugin=_interopRequireDefault(__webpack_require__(153));var _resolveMediaQueriesPlugin=_interopRequireDefault(__webpack_require__(155));var _visitedPlugin=_interopRequireDefault(__webpack_require__(156));function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj};}/* eslint-disable block-scoped-const */var _default={checkProps:_checkPropsPlugin["default"],keyframes:_keyframesPlugin["default"],mergeStyleArray:_mergeStyleArrayPlugin["default"],prefix:_prefixPlugin["default"],removeNestedStyles:_removeNestedStylesPlugin["default"],resolveInteractionStyles:_resolveInteractionStylesPlugin["default"],resolveMediaQueries:_resolveMediaQueriesPlugin["default"],visited:_visitedPlugin["default"]};exports["default"]=_default;

/***/ }),
/* 148 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {"use strict";var _typeof2=typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"?function(obj){return typeof obj;}:function(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;};Object.defineProperty(exports,"__esModule",{value:true});exports["default"]=void 0;function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=arguments[i]!=null?arguments[i]:{};var ownKeys=Object.keys(source);if(typeof Object.getOwnPropertySymbols==='function'){ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable;}));}ownKeys.forEach(function(key){_defineProperty(target,key,source[key]);});}return target;}function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true});}else{obj[key]=value;}return obj;}function _typeof(obj){if(typeof Symbol==="function"&&_typeof2(Symbol.iterator)==="symbol"){_typeof=function _typeof(obj){return typeof obj==="undefined"?"undefined":_typeof2(obj);};}else{_typeof=function _typeof(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj==="undefined"?"undefined":_typeof2(obj);};}return _typeof(obj);}var _checkProps=function checkProps(){};if(process.env.NODE_ENV!=='production'){// Warn if you use longhand and shorthand properties in the same style
	// object.
	// https://developer.mozilla.org/en-US/docs/Web/CSS/Shorthand_properties
	var shorthandPropertyExpansions={background:['backgroundAttachment','backgroundBlendMode','backgroundClip','backgroundColor','backgroundImage','backgroundOrigin','backgroundPosition','backgroundPositionX','backgroundPositionY','backgroundRepeat','backgroundRepeatX','backgroundRepeatY','backgroundSize'],border:['borderBottom','borderBottomColor','borderBottomStyle','borderBottomWidth','borderColor','borderLeft','borderLeftColor','borderLeftStyle','borderLeftWidth','borderRight','borderRightColor','borderRightStyle','borderRightWidth','borderStyle','borderTop','borderTopColor','borderTopStyle','borderTopWidth','borderWidth'],borderImage:['borderImageOutset','borderImageRepeat','borderImageSlice','borderImageSource','borderImageWidth'],borderRadius:['borderBottomLeftRadius','borderBottomRightRadius','borderTopLeftRadius','borderTopRightRadius'],font:['fontFamily','fontKerning','fontSize','fontStretch','fontStyle','fontVariant','fontVariantLigatures','fontWeight','lineHeight'],listStyle:['listStyleImage','listStylePosition','listStyleType'],margin:['marginBottom','marginLeft','marginRight','marginTop'],padding:['paddingBottom','paddingLeft','paddingRight','paddingTop'],transition:['transitionDelay','transitionDuration','transitionProperty','transitionTimingFunction']};_checkProps=function checkProps(config){var componentName=config.componentName,style=config.style;if(_typeof(style)!=='object'||!style){return;}var styleKeys=Object.keys(style);styleKeys.forEach(function(styleKey){if(Array.isArray(shorthandPropertyExpansions[styleKey])&&shorthandPropertyExpansions[styleKey].some(function(sp){return styleKeys.indexOf(sp)!==-1;})){if(process.env.NODE_ENV!=='production'){/* eslint-disable no-console */console.warn('Radium: property "'+styleKey+'" in style object',style,': do not mix longhand and '+'shorthand properties in the same style object. Check the render '+'method of '+componentName+'.','See https://github.com/FormidableLabs/radium/issues/95 for more '+'information.');/* eslint-enable no-console */}}});styleKeys.forEach(function(k){return _checkProps(_objectSpread({},config,{style:style[k]}));});return;};}var _default=_checkProps;exports["default"]=_default;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ }),
/* 149 */
/***/ (function(module, exports) {

	"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports["default"]=keyframesPlugin;function keyframesPlugin(_ref){var addCSS=_ref.addCSS,config=_ref.config,style=_ref.style;var processKeyframeStyle=function processKeyframeStyle(value){var keyframesValue=value;var _keyframesValue$__pro=keyframesValue.__process(config.userAgent),animationName=_keyframesValue$__pro.animationName,css=_keyframesValue$__pro.css;addCSS(css);return animationName;};var newStyle=Object.keys(style).reduce(function(newStyleInProgress,key){var value=style[key];var isKeyframeArray=Array.isArray(value);if(key==='animationName'&&value&&(value.__radiumKeyframes||isKeyframeArray)){if(isKeyframeArray){value=value.map(processKeyframeStyle).join(', ');}else{value=processKeyframeStyle(value);}}newStyleInProgress[key]=value;return newStyleInProgress;},{});return{style:newStyle};}

/***/ }),
/* 150 */
/***/ (function(module, exports) {

	"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports["default"]=void 0;// Convenient syntax for multiple styles: `style={[style1, style2, etc]}`
	// Ignores non-objects, so you can do `this.state.isCool && styles.cool`.
	var mergeStyleArrayPlugin=function mergeStyleArrayPlugin(_ref){var style=_ref.style,mergeStyles=_ref.mergeStyles;// eslint-disable-line no-shadow
	var newStyle=Array.isArray(style)?mergeStyles(style):style;return{style:newStyle};};var _default=mergeStyleArrayPlugin;exports["default"]=_default;

/***/ }),
/* 151 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports["default"]=prefixPlugin;var _prefixer=__webpack_require__(97);function prefixPlugin(_ref){var config=_ref.config,style=_ref.style;var newStyle=(0,_prefixer.getPrefixedStyle)(style,config.userAgent);return{style:newStyle};}

/***/ }),
/* 152 */
/***/ (function(module, exports) {

	"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports["default"]=removeNestedStyles;function removeNestedStyles(_ref){var isNestedStyle=_ref.isNestedStyle,style=_ref.style;// eslint-disable-line no-shadow
	var newStyle=Object.keys(style).reduce(function(newStyleInProgress,key){var value=style[key];if(!isNestedStyle(value)){newStyleInProgress[key]=value;}return newStyleInProgress;},{});return{style:newStyle};}

/***/ }),
/* 153 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports["default"]=void 0;var _mouseUpListener=_interopRequireDefault(__webpack_require__(154));function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj};}var _isInteractiveStyleField=function _isInteractiveStyleField(styleFieldName){return styleFieldName===':hover'||styleFieldName===':active'||styleFieldName===':focus';};var resolveInteractionStyles=function resolveInteractionStyles(config){var ExecutionEnvironment=config.ExecutionEnvironment,getComponentField=config.getComponentField,getState=config.getState,mergeStyles=config.mergeStyles,props=config.props,setState=config.setState,style=config.style;var newComponentFields={};var newProps={};// Only add handlers if necessary
	if(style[':hover']){// Always call the existing handler if one is already defined.
	// This code, and the very similar ones below, could be abstracted a bit
	// more, but it hurts readability IMO.
	var existingOnMouseEnter=props.onMouseEnter;newProps.onMouseEnter=function(e){existingOnMouseEnter&&existingOnMouseEnter(e);setState(':hover',true);};var existingOnMouseLeave=props.onMouseLeave;newProps.onMouseLeave=function(e){existingOnMouseLeave&&existingOnMouseLeave(e);setState(':hover',false);};}if(style[':active']){var existingOnMouseDown=props.onMouseDown;newProps.onMouseDown=function(e){existingOnMouseDown&&existingOnMouseDown(e);newComponentFields._lastMouseDown=Date.now();setState(':active','viamousedown');};var existingOnKeyDown=props.onKeyDown;newProps.onKeyDown=function(e){existingOnKeyDown&&existingOnKeyDown(e);if(e.key===' '||e.key==='Enter'){setState(':active','viakeydown');}};var existingOnKeyUp=props.onKeyUp;newProps.onKeyUp=function(e){existingOnKeyUp&&existingOnKeyUp(e);if(e.key===' '||e.key==='Enter'){setState(':active',false);}};}if(style[':focus']){var existingOnFocus=props.onFocus;newProps.onFocus=function(e){existingOnFocus&&existingOnFocus(e);setState(':focus',true);};var existingOnBlur=props.onBlur;newProps.onBlur=function(e){existingOnBlur&&existingOnBlur(e);setState(':focus',false);};}if(style[':active']&&!getComponentField('_radiumMouseUpListener')&&ExecutionEnvironment.canUseEventListeners){newComponentFields._radiumMouseUpListener=_mouseUpListener["default"].subscribe(function(){Object.keys(getComponentField('state')._radiumStyleState).forEach(function(key){if(getState(':active',key)==='viamousedown'){setState(':active',false,key);}});});}// Merge the styles in the order they were defined
	var interactionStyles=props.disabled?[style[':disabled']]:Object.keys(style).filter(function(name){return _isInteractiveStyleField(name)&&getState(name);}).map(function(name){return style[name];});var newStyle=mergeStyles([style].concat(interactionStyles));// Remove interactive styles
	newStyle=Object.keys(newStyle).reduce(function(styleWithoutInteractions,name){if(!_isInteractiveStyleField(name)&&name!==':disabled'){styleWithoutInteractions[name]=newStyle[name];}return styleWithoutInteractions;},{});return{componentFields:newComponentFields,props:newProps,style:newStyle};};var _default=resolveInteractionStyles;exports["default"]=_default;

/***/ }),
/* 154 */
/***/ (function(module, exports) {

	"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports["default"]=void 0;var _callbacks=[];var _mouseUpListenerIsActive=false;function _handleMouseUp(){_callbacks.forEach(function(callback){callback();});}var subscribe=function subscribe(callback){if(_callbacks.indexOf(callback)===-1){_callbacks.push(callback);}if(!_mouseUpListenerIsActive){window.addEventListener('mouseup',_handleMouseUp);_mouseUpListenerIsActive=true;}return{remove:function remove(){var index=_callbacks.indexOf(callback);_callbacks.splice(index,1);if(_callbacks.length===0&&_mouseUpListenerIsActive){window.removeEventListener('mouseup',_handleMouseUp);_mouseUpListenerIsActive=false;}}};};var _default={subscribe:subscribe,__triggerForTests:_handleMouseUp};exports["default"]=_default;

/***/ }),
/* 155 */
/***/ (function(module, exports) {

	"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports["default"]=resolveMediaQueries;function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=arguments[i]!=null?arguments[i]:{};var ownKeys=Object.keys(source);if(typeof Object.getOwnPropertySymbols==='function'){ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable;}));}ownKeys.forEach(function(key){_defineProperty(target,key,source[key]);});}return target;}function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true});}else{obj[key]=value;}return obj;}var _windowMatchMedia;function _getWindowMatchMedia(ExecutionEnvironment){if(_windowMatchMedia===undefined){_windowMatchMedia=!!ExecutionEnvironment.canUseDOM&&!!window&&!!window.matchMedia&&function(mediaQueryString){return window.matchMedia(mediaQueryString);}||null;}return _windowMatchMedia;}function _filterObject(obj,predicate){return Object.keys(obj).filter(function(key){return predicate(obj[key],key);}).reduce(function(result,key){result[key]=obj[key];return result;},{});}function _removeMediaQueries(style){return Object.keys(style).reduce(function(styleWithoutMedia,key){if(key.indexOf('@media')!==0){styleWithoutMedia[key]=style[key];}return styleWithoutMedia;},{});}function _topLevelRulesToCSS(_ref){var addCSS=_ref.addCSS,appendImportantToEachValue=_ref.appendImportantToEachValue,cssRuleSetToString=_ref.cssRuleSetToString,hash=_ref.hash,isNestedStyle=_ref.isNestedStyle,style=_ref.style,userAgent=_ref.userAgent;var className='';Object.keys(style).filter(function(name){return name.indexOf('@media')===0;}).map(function(query){var topLevelRules=appendImportantToEachValue(_filterObject(style[query],function(value){return!isNestedStyle(value);}));if(!Object.keys(topLevelRules).length){return;}var ruleCSS=cssRuleSetToString('',topLevelRules,userAgent);// CSS classes cannot start with a number
	var mediaQueryClassName='rmq-'+hash(query+ruleCSS);var css=query+'{ .'+mediaQueryClassName+ruleCSS+'}';addCSS(css);className+=(className?' ':'')+mediaQueryClassName;});return className;}function _subscribeToMediaQuery(_ref2){var listener=_ref2.listener,listenersByQuery=_ref2.listenersByQuery,matchMedia=_ref2.matchMedia,mediaQueryListsByQuery=_ref2.mediaQueryListsByQuery,query=_ref2.query;query=query.replace('@media ','');var mql=mediaQueryListsByQuery[query];if(!mql&&matchMedia){mediaQueryListsByQuery[query]=mql=matchMedia(query);}if(!listenersByQuery||!listenersByQuery[query]){mql.addListener(listener);listenersByQuery[query]={remove:function remove(){mql.removeListener(listener);}};}return mql;}function resolveMediaQueries(_ref3){var ExecutionEnvironment=_ref3.ExecutionEnvironment,addCSS=_ref3.addCSS,appendImportantToEachValue=_ref3.appendImportantToEachValue,config=_ref3.config,cssRuleSetToString=_ref3.cssRuleSetToString,getComponentField=_ref3.getComponentField,getGlobalState=_ref3.getGlobalState,hash=_ref3.hash,isNestedStyle=_ref3.isNestedStyle,mergeStyles=_ref3.mergeStyles,props=_ref3.props,setState=_ref3.setState,style=_ref3.style;// eslint-disable-line no-shadow
	var newStyle=_removeMediaQueries(style);var mediaQueryClassNames=_topLevelRulesToCSS({addCSS:addCSS,appendImportantToEachValue:appendImportantToEachValue,cssRuleSetToString:cssRuleSetToString,hash:hash,isNestedStyle:isNestedStyle,style:style,userAgent:config.userAgent});var newProps=mediaQueryClassNames?{className:mediaQueryClassNames+(props.className?' '+props.className:'')}:null;var matchMedia=config.matchMedia||_getWindowMatchMedia(ExecutionEnvironment);if(!matchMedia){return{props:newProps,style:newStyle};}var listenersByQuery=_objectSpread({},getComponentField('_radiumMediaQueryListenersByQuery'));var mediaQueryListsByQuery=getGlobalState('mediaQueryListsByQuery')||{};Object.keys(style).filter(function(name){return name.indexOf('@media')===0;}).map(function(query){var nestedRules=_filterObject(style[query],isNestedStyle);if(!Object.keys(nestedRules).length){return;}var mql=_subscribeToMediaQuery({listener:function listener(){return setState(query,mql.matches,'_all');},listenersByQuery:listenersByQuery,matchMedia:matchMedia,mediaQueryListsByQuery:mediaQueryListsByQuery,query:query});// Apply media query states
	if(mql.matches){newStyle=mergeStyles([newStyle,nestedRules]);}});return{componentFields:{_radiumMediaQueryListenersByQuery:listenersByQuery},globalState:{mediaQueryListsByQuery:mediaQueryListsByQuery},props:newProps,style:newStyle};}

/***/ }),
/* 156 */
/***/ (function(module, exports) {

	"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports["default"]=visited;function visited(_ref){var addCSS=_ref.addCSS,appendImportantToEachValue=_ref.appendImportantToEachValue,config=_ref.config,cssRuleSetToString=_ref.cssRuleSetToString,hash=_ref.hash,props=_ref.props,style=_ref.style;// eslint-disable-line no-shadow
	var className=props.className;var newStyle=Object.keys(style).reduce(function(newStyleInProgress,key){var value=style[key];if(key===':visited'){value=appendImportantToEachValue(value);var ruleCSS=cssRuleSetToString('',value,config.userAgent);var visitedClassName='rad-'+hash(ruleCSS);var css='.'+visitedClassName+':visited'+ruleCSS;addCSS(css);className=(className?className+' ':'')+visitedClassName;}else{newStyleInProgress[key]=value;}return newStyleInProgress;},{});return{props:className===props.className?null:{className:className},style:newStyle};}

/***/ }),
/* 157 */
/***/ (function(module, exports) {

	"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports["default"]=void 0;function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}function _createClass(Constructor,protoProps,staticProps){if(protoProps)_defineProperties(Constructor.prototype,protoProps);if(staticProps)_defineProperties(Constructor,staticProps);return Constructor;}var StyleKeeper=/*#__PURE__*/function(){function StyleKeeper(userAgent){_classCallCheck(this,StyleKeeper);this._userAgent=void 0;this._listeners=void 0;this._cssSet=void 0;this._userAgent=userAgent;this._listeners=[];this._cssSet={};}_createClass(StyleKeeper,[{key:"subscribe",value:function subscribe(listener){var _this=this;if(this._listeners.indexOf(listener)===-1){this._listeners.push(listener);}return{// Must be fat arrow to capture `this`
	remove:function remove(){var listenerIndex=_this._listeners.indexOf(listener);if(listenerIndex>-1){_this._listeners.splice(listenerIndex,1);}}};}},{key:"addCSS",value:function addCSS(css){var _this2=this;if(!this._cssSet[css]){this._cssSet[css]=true;this._emitChange();}return{// Must be fat arrow to capture `this`
	remove:function remove(){delete _this2._cssSet[css];_this2._emitChange();}};}},{key:"getCSS",value:function getCSS(){return Object.keys(this._cssSet).join('\n');}},{key:"_emitChange",value:function _emitChange(){this._listeners.forEach(function(listener){return listener();});}}]);return StyleKeeper;}();exports["default"]=StyleKeeper;

/***/ }),
/* 158 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports.withRadiumContexts=withRadiumContexts;exports.RadiumConfigContext=exports.StyleKeeperContext=void 0;var _react=_interopRequireWildcard(__webpack_require__(10));var _hoistNonReactStatics=_interopRequireDefault(__webpack_require__(36));var _styleKeeper=_interopRequireDefault(__webpack_require__(157));function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj};}function _interopRequireWildcard(obj){if(obj&&obj.__esModule){return obj;}else{var newObj={};if(obj!=null){for(var key in obj){if(Object.prototype.hasOwnProperty.call(obj,key)){var desc=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):{};if(desc.get||desc.set){Object.defineProperty(newObj,key,desc);}else{newObj[key]=obj[key];}}}}newObj["default"]=obj;return newObj;}}function _extends(){_extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};return _extends.apply(this,arguments);}var StyleKeeperContext=_react["default"].createContext(undefined);exports.StyleKeeperContext=StyleKeeperContext;var RadiumConfigContext=_react["default"].createContext(undefined);exports.RadiumConfigContext=RadiumConfigContext;function withRadiumContexts(WrappedComponent){var WithRadiumContexts=_react["default"].forwardRef(function(props,ref){var radiumConfigContext=(0,_react.useContext)(RadiumConfigContext);var styleKeeperContext=(0,_react.useContext)(StyleKeeperContext);return _react["default"].createElement(WrappedComponent,_extends({ref:ref},props,{radiumConfigContext:radiumConfigContext,styleKeeperContext:styleKeeperContext}));});WithRadiumContexts.displayName="withRadiumContexts(".concat(WrappedComponent.displayName||WrappedComponent.name||'Component',")");return(0,_hoistNonReactStatics["default"])(WithRadiumContexts,WrappedComponent);}

/***/ }),
/* 159 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";var _typeof2=typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"?function(obj){return typeof obj;}:function(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;};Object.defineProperty(exports,"__esModule",{value:true});exports["default"]=void 0;var _cssRuleSetToString=_interopRequireDefault(__webpack_require__(95));var _react=_interopRequireWildcard(__webpack_require__(10));var _propTypes=_interopRequireDefault(__webpack_require__(11));var _context=__webpack_require__(158);function _interopRequireWildcard(obj){if(obj&&obj.__esModule){return obj;}else{var newObj={};if(obj!=null){for(var key in obj){if(Object.prototype.hasOwnProperty.call(obj,key)){var desc=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):{};if(desc.get||desc.set){Object.defineProperty(newObj,key,desc);}else{newObj[key]=obj[key];}}}}newObj["default"]=obj;return newObj;}}function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj};}function _typeof(obj){if(typeof Symbol==="function"&&_typeof2(Symbol.iterator)==="symbol"){_typeof=function _typeof(obj){return typeof obj==="undefined"?"undefined":_typeof2(obj);};}else{_typeof=function _typeof(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj==="undefined"?"undefined":_typeof2(obj);};}return _typeof(obj);}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}function _createClass(Constructor,protoProps,staticProps){if(protoProps)_defineProperties(Constructor.prototype,protoProps);if(staticProps)_defineProperties(Constructor,staticProps);return Constructor;}function _possibleConstructorReturn(self,call){if(call&&(_typeof(call)==="object"||typeof call==="function")){return call;}return _assertThisInitialized(self);}function _assertThisInitialized(self){if(self===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return self;}function _getPrototypeOf(o){_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(o){return o.__proto__||Object.getPrototypeOf(o);};return _getPrototypeOf(o);}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function");}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:true,configurable:true}});if(superClass)_setPrototypeOf(subClass,superClass);}function _setPrototypeOf(o,p){_setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(o,p){o.__proto__=p;return o;};return _setPrototypeOf(o,p);}var Style=/*#__PURE__*/function(_PureComponent){_inherits(Style,_PureComponent);function Style(){_classCallCheck(this,Style);return _possibleConstructorReturn(this,_getPrototypeOf(Style).apply(this,arguments));}_createClass(Style,[{key:"_buildStyles",value:function _buildStyles(styles){var _this=this;var userAgent=this.props.radiumConfig&&this.props.radiumConfig.userAgent||this.props.radiumConfigContext&&this.props.radiumConfigContext.userAgent;var scopeSelector=this.props.scopeSelector;var rootRules=Object.keys(styles).reduce(function(accumulator,selector){if(_typeof(styles[selector])!=='object'){accumulator[selector]=styles[selector];}return accumulator;},{});var rootStyles=Object.keys(rootRules).length?(0,_cssRuleSetToString["default"])(scopeSelector||'',rootRules,userAgent):'';return rootStyles+Object.keys(styles).reduce(function(accumulator,selector){var rules=styles[selector];if(selector==='mediaQueries'){accumulator+=_this._buildMediaQueryString(rules);}else if(_typeof(styles[selector])==='object'){var completeSelector=scopeSelector?selector.split(',').map(function(part){return scopeSelector+' '+part.trim();}).join(','):selector;accumulator+=(0,_cssRuleSetToString["default"])(completeSelector,rules,userAgent);}return accumulator;},'');}},{key:"_buildMediaQueryString",value:function _buildMediaQueryString(stylesByMediaQuery){var _this2=this;var mediaQueryString='';Object.keys(stylesByMediaQuery).forEach(function(query){mediaQueryString+='@media '+query+'{'+_this2._buildStyles(stylesByMediaQuery[query])+'}';});return mediaQueryString;}},{key:"render",value:function render(){if(!this.props.rules){return null;}var styles=this._buildStyles(this.props.rules);return _react["default"].createElement("style",{dangerouslySetInnerHTML:{__html:styles}});}}]);return Style;}(_react.PureComponent);Style.propTypes={radiumConfig:_propTypes["default"].object,rules:_propTypes["default"].object,scopeSelector:_propTypes["default"].string};Style.defaultProps={scopeSelector:''};var _default=(0,_context.withRadiumContexts)(Style);exports["default"]=_default;

/***/ }),
/* 160 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports["default"]=void 0;var _react=_interopRequireWildcard(__webpack_require__(10));var _enhancer=_interopRequireDefault(__webpack_require__(90));var _styleKeeper=_interopRequireDefault(__webpack_require__(157));var _styleSheet=_interopRequireDefault(__webpack_require__(161));var _context=__webpack_require__(158);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj};}function _interopRequireWildcard(obj){if(obj&&obj.__esModule){return obj;}else{var newObj={};if(obj!=null){for(var key in obj){if(Object.prototype.hasOwnProperty.call(obj,key)){var desc=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):{};if(desc.get||desc.set){Object.defineProperty(newObj,key,desc);}else{newObj[key]=obj[key];}}}}newObj["default"]=obj;return newObj;}}function _objectWithoutProperties(source,excluded){if(source==null)return{};var target=_objectWithoutPropertiesLoose(source,excluded);var key,i;if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++){key=sourceSymbolKeys[i];if(excluded.indexOf(key)>=0)continue;if(!Object.prototype.propertyIsEnumerable.call(source,key))continue;target[key]=source[key];}}return target;}function _objectWithoutPropertiesLoose(source,excluded){if(source==null)return{};var target={};var sourceKeys=Object.keys(source);var key,i;for(i=0;i<sourceKeys.length;i++){key=sourceKeys[i];if(excluded.indexOf(key)>=0)continue;target[key]=source[key];}return target;}function getStyleKeeper(configProp,configContext){var userAgent=configProp&&configProp.userAgent||configContext&&configContext.userAgent;return new _styleKeeper["default"](userAgent);}var StyleRootInner=(0,_enhancer["default"])(function(_ref){var children=_ref.children,otherProps=_objectWithoutProperties(_ref,["children"]);return _react["default"].createElement("div",otherProps,children,_react["default"].createElement(_styleSheet["default"],null));});var StyleRoot=function StyleRoot(props){/* eslint-disable no-unused-vars */// Pass down all props except config to the rendered div.
	/* eslint-enable no-unused-vars */var radiumConfig=props.radiumConfig;var configContext=(0,_react.useContext)(_context.RadiumConfigContext);var styleKeeper=(0,_react.useRef)(getStyleKeeper(radiumConfig,configContext));return _react["default"].createElement(_context.StyleKeeperContext.Provider,{value:styleKeeper.current},_react["default"].createElement(StyleRootInner,props));};var _default=StyleRoot;exports["default"]=_default;

/***/ }),
/* 161 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";var _typeof2=typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"?function(obj){return typeof obj;}:function(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;};Object.defineProperty(exports,"__esModule",{value:true});exports["default"]=void 0;var _react=_interopRequireWildcard(__webpack_require__(10));var _styleKeeper=_interopRequireDefault(__webpack_require__(157));var _context=__webpack_require__(158);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj};}function _interopRequireWildcard(obj){if(obj&&obj.__esModule){return obj;}else{var newObj={};if(obj!=null){for(var key in obj){if(Object.prototype.hasOwnProperty.call(obj,key)){var desc=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):{};if(desc.get||desc.set){Object.defineProperty(newObj,key,desc);}else{newObj[key]=obj[key];}}}}newObj["default"]=obj;return newObj;}}function _typeof(obj){if(typeof Symbol==="function"&&_typeof2(Symbol.iterator)==="symbol"){_typeof=function _typeof(obj){return typeof obj==="undefined"?"undefined":_typeof2(obj);};}else{_typeof=function _typeof(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj==="undefined"?"undefined":_typeof2(obj);};}return _typeof(obj);}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}function _createClass(Constructor,protoProps,staticProps){if(protoProps)_defineProperties(Constructor.prototype,protoProps);if(staticProps)_defineProperties(Constructor,staticProps);return Constructor;}function _possibleConstructorReturn(self,call){if(call&&(_typeof(call)==="object"||typeof call==="function")){return call;}return _assertThisInitialized(self);}function _assertThisInitialized(self){if(self===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return self;}function _getPrototypeOf(o){_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(o){return o.__proto__||Object.getPrototypeOf(o);};return _getPrototypeOf(o);}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function");}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:true,configurable:true}});if(superClass)_setPrototypeOf(subClass,superClass);}function _setPrototypeOf(o,p){_setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(o,p){o.__proto__=p;return o;};return _setPrototypeOf(o,p);}var StyleSheet=/*#__PURE__*/function(_Component){_inherits(StyleSheet,_Component);// eslint-disable-next-line react/sort-comp
	function StyleSheet(){var _this;_classCallCheck(this,StyleSheet);_this=_possibleConstructorReturn(this,_getPrototypeOf(StyleSheet).apply(this,arguments));_this.styleKeeper=void 0;_this._subscription=void 0;_this._root=void 0;_this._css=void 0;_this._onChange=function(){var nextCSS=_this.styleKeeper.getCSS();if(nextCSS!==_this._css){if(_this._root){_this._root.innerHTML=nextCSS;}else{throw new Error('No root style object found, even after StyleSheet mount.');}_this._css=nextCSS;}};if(!_this.props.styleKeeperContext){throw new Error('StyleRoot is required to use StyleSheet');}_this.styleKeeper=_this.props.styleKeeperContext;_this._css=_this.styleKeeper.getCSS();return _this;}_createClass(StyleSheet,[{key:"componentDidMount",value:function componentDidMount(){this._subscription=this.styleKeeper.subscribe(this._onChange);this._onChange();}},{key:"shouldComponentUpdate",value:function shouldComponentUpdate(){return false;}},{key:"componentWillUnmount",value:function componentWillUnmount(){if(this._subscription){this._subscription.remove();}}},{key:"render",value:function render(){var _this2=this;return _react["default"].createElement("style",{dangerouslySetInnerHTML:{__html:this._css},ref:function ref(c){_this2._root=c;}});}}]);return StyleSheet;}(_react.Component);var _default=(0,_context.withRadiumContexts)(StyleSheet);exports["default"]=_default;

/***/ }),
/* 162 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports["default"]=keyframes;var _cssRuleSetToString=_interopRequireDefault(__webpack_require__(95));var _hash=_interopRequireDefault(__webpack_require__(145));var _prefixer=__webpack_require__(97);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj};}function keyframes(keyframeRules,name){return{__radiumKeyframes:true,__process:function __process(userAgent){var keyframesPrefixed=(0,_prefixer.getPrefixedKeyframes)(userAgent);var rules=Object.keys(keyframeRules).map(function(percentage){return(0,_cssRuleSetToString["default"])(percentage,keyframeRules[percentage],userAgent);}).join('\n');var animationName=(name?name+'-':'')+'radium-animation-'+(0,_hash["default"])(rules);var css='@'+keyframesPrefixed+' '+animationName+' {\n'+rules+'\n}\n';return{css:css,animationName:animationName};}};}

/***/ }),
/* 163 */
/***/ (function(module, exports) {

	'use strict';module.exports={wrapper:{margin:'5px',display:'flex',width:'95%'},hide:{display:'none'},select:{width:'70%',margin:'5px',borderRadius:'5px',':focus':{backgroundColor:'lightpink'}},readOnly:{backgroundColor:'#F3EFEF'},label:{width:'30%',margin:'5px'},button:{width:'5%'}};

/***/ }),
/* 164 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var PropTypes = __webpack_require__(11);
	var radium = __webpack_require__(88);

	var React = __webpack_require__(10),
	    styles = __webpack_require__(165);
	var getTextValue = __webpack_require__(76);

	var Select = function (_React$PureComponent) {
	    _inherits(Select, _React$PureComponent);

	    function Select(props) {
	        _classCallCheck(this, Select);

	        var _this = _possibleConstructorReturn(this, (Select.__proto__ || Object.getPrototypeOf(Select)).call(this, props));

	        _this.state = {
	            data: props.data,
	            value: 0 /* здесь по значению ИД */
	            , readOnly: props.readOnly,
	            disabled: props.disabled,
	            fieldValue: props.value /*здесь по значени поля collId */
	            , btnDelete: props.btnDelete /* если истину, то рисуем рядом кнопку для очистки значения*/
	        };

	        _this.onChange = _this.onChange.bind(_this);
	        _this.btnDelClick = _this.btnDelClick.bind(_this);
	        _this.getValueById = _this.getValueById.bind(_this);

	        return _this;
	    }

	    // will update state if props changed


	    _createClass(Select, [{
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            if (this.props.collId && this.props.collId !== 'id') {
	                // ищем ИД по значению поля
	                this.getValueById(this.state.data, this.props.collId, this.state.value);
	            }
	        }
	    }, {
	        key: 'onChange',
	        value: function onChange(e) {
	            var fieldValue = e.target.value;

	            if (fieldValue === '') {
	                fieldValue = null;
	            }

	            if (this.props.collId && this.props.collId !== 'id') {
	                // найдем по ид значение поля в collId
	                fieldValue = this.getValueById(this.state.data, this.props.collId, fieldValue);
	            }
	            // сохраним ид как value
	            this.setState({ fieldValue: fieldValue, value: e.target.value });

	            if (this.props.onChange) {
	                // смотрим к чему привязан селект и отдаим его наверх
	                this.props.onChange(this.props.name, fieldValue); // в случае если задан обработчик на верхнем уровне, отдадим обработку туда
	            }
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var selectStyle = Object.assign({}, styles.select, this.props.style ? this.props.style : {});

	            return React.createElement(
	                'div',
	                { style: styles.wrapper, ref: 'wrapper' },
	                this.props.title ? React.createElement(
	                    'label',
	                    { ref: 'label', style: styles.label,
	                        htmlFor: this.props.name },
	                    getTextValue(this.props.title)
	                ) : null,
	                React.createElement(
	                    'select',
	                    { ref: 'select',
	                        style: selectStyle,
	                        value: this.state.value || 0,
	                        id: this.props.name,
	                        disabled: this.state.readOnly,
	                        size: this.props.size ? this.props.size : 0,
	                        onChange: this.onChange },
	                    this.prepaireDataOptions()
	                )
	            );
	        }

	        /**
	         *
	         * @param collId
	         * @param rowId
	         * @returns {*}
	         */

	    }, {
	        key: 'getValueById',
	        value: function getValueById(data, collId, rowId) {
	            // вернет значения поля по выбранному ИД
	            var fieldValue = 0;
	            var foundRow = data.find(function (row) {
	                return row[collId] === rowId;
	            });
	            if (foundRow) {
	                fieldValue = foundRow[collId];
	            }

	            return fieldValue;
	        }
	    }, {
	        key: 'btnDelClick',
	        value: function btnDelClick(event) {
	            // по вызову кнопку удалить, обнуляет значение
	            this.setState({ value: '' });
	            this.onChange(event);
	        }

	        /**
	         * Подготовит датасет для селекта
	         * @returns {*}
	         */

	    }, {
	        key: 'prepaireDataOptions',
	        value: function prepaireDataOptions() {
	            var _this2 = this;

	            var options = void 0;
	            var data = this.state.data.length ? this.state.data : [];

	            if (data.length) {
	                if (!this.state.value && !data.find(function (row) {
	                    return row.id === 0;
	                })) {
	                    // will add empty row
	                    data.unshift({ id: 0, kood: '', nimetus: '' });
	                }

	                options = data.map(function (item, index) {
	                    var key = 'option-' + index;
	                    var separator = ' ';
	                    var rowValue = (item.kood ? item.kood : '') + ' ' + separator + ' ' + (item.name ? item.name : item.nimetus);
	                    return React.createElement(
	                        'option',
	                        { value: item[_this2.props.collId], key: key,
	                            ref: key },
	                        ' ',
	                        rowValue,
	                        ' '
	                    );
	                }, this);
	            } else {
	                options = React.createElement('option', { value: 0, key: Math.random() });
	            }
	            return options;
	        }

	        /**
	         * установит фокус на элементы
	         */

	    }, {
	        key: 'focus',
	        value: function focus() {
	            this.refs['select'].focus();
	        }
	    }], [{
	        key: 'getDerivedStateFromProps',
	        value: function getDerivedStateFromProps(nextProps, prevState) {
	            if (nextProps.value !== prevState.value || nextProps.readOnly !== prevState.readOnly || JSON.stringify(nextProps.data) !== JSON.stringify(prevState.data)) {
	                return { value: nextProps.value, readOnly: nextProps.readOnly, data: nextProps.data };
	            } else return null;
	        }
	    }]);

	    return Select;
	}(React.PureComponent);

	Select.propTypes = {
	    data: PropTypes.arrayOf(PropTypes.shape({
	        id: PropTypes.number,
	        kood: PropTypes.string,
	        nimetus: PropTypes.string
	    })),
	    readOnly: PropTypes.bool,
	    disabled: PropTypes.bool,
	    btnDelete: PropTypes.bool,
	    collId: PropTypes.string.isRequired,
	    title: PropTypes.string,
	    placeholder: PropTypes.string,
	    defaultValue: PropTypes.string
	};

	Select.defaultProps = {
	    readOnly: false,
	    disabled: false,
	    valid: true,
	    btnDelete: false,
	    collId: 'id',
	    title: '',
	    defaultValue: '',
	    data: [{ id: 0, kood: '', nimetus: '' }]
	};

	module.exports = radium(Select);

/***/ }),
/* 165 */
/***/ (function(module, exports) {

	'use strict';module.exports={wrapper:{margin:'5px',display:'flex',width:'95%'},input:{width:'70%',margin:'5px 2px',borderRadius:'5px'},a:{width:'70%',marginLeft:'5px',borderRadius:'5px'},hide:{display:'none'},select:{width:'70%',height:'30px',margin:'5px 2px',borderRadius:'5px',':focus':{backgroundColor:'lightpink'},opacity:1},readOnly:{backgroundColor:'#F3EFEF'},label:{width:'30%',margin:'5px'},button:{width:'5%'}};

/***/ }),
/* 166 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var React = __webpack_require__(10);
	var PropTypes = __webpack_require__(11);

	var styles = __webpack_require__(74),
	    Button = __webpack_require__(75),
	    ICON = 'account';

	var ButtonAccount = function (_React$PureComponent) {
	    _inherits(ButtonAccount, _React$PureComponent);

	    // кнопка создания документа в регистрах
	    function ButtonAccount(props) {
	        _classCallCheck(this, ButtonAccount);

	        var _this = _possibleConstructorReturn(this, (ButtonAccount.__proto__ || Object.getPrototypeOf(ButtonAccount)).call(this, props));

	        _this.state = {
	            value: props.value
	        };

	        return _this;
	    }

	    // will update state if props changed


	    _createClass(ButtonAccount, [{
	        key: 'handleClick',
	        value: function handleClick() {
	            return this.props.onClick('account');
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var _this2 = this;

	            var value = this.state.value;
	            var buttonStyle = Object.assign({}, styles.button, styles.buttonAccount);
	            return React.createElement(
	                Button,
	                {
	                    value: value,
	                    ref: 'btnAccount',
	                    style: buttonStyle,
	                    show: this.props.show,
	                    disabled: this.props.disabled,
	                    onClick: function onClick(e) {
	                        return _this2.handleClick(e);
	                    } },
	                React.createElement('img', { ref: 'image', src: styles.icons[ICON] })
	            );
	        }
	    }], [{
	        key: 'getDerivedStateFromProps',
	        value: function getDerivedStateFromProps(nextProps, prevState) {
	            if (nextProps.value !== prevState.value) {
	                return { value: nextProps.value };
	            } else return null;
	        }
	    }]);

	    return ButtonAccount;
	}(React.PureComponent);

	ButtonAccount.propTypes = {
	    onClick: PropTypes.func.isRequired,
	    value: PropTypes.string
	};

	ButtonAccount.defaultProps = {
	    disabled: false,
	    show: true,
	    value: ''
	};

	module.exports = ButtonAccount;

/***/ }),
/* 167 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var PropTypes = __webpack_require__(11);

	var React = __webpack_require__(10),
	    styles = __webpack_require__(168);
	var DocContext = __webpack_require__(1);
	var fetchData = __webpack_require__(41);
	var LogUp = __webpack_require__(169);

	var ModalPage = __webpack_require__(171);

	var Login = function (_React$PureComponent) {
	    _inherits(Login, _React$PureComponent);

	    function Login(props) {
	        _classCallCheck(this, Login);

	        var _this = _possibleConstructorReturn(this, (Login.__proto__ || Object.getPrototypeOf(Login)).call(this, props));

	        _this.state = {
	            show: _this.props.show,
	            lastId: 0,
	            login: _this.props.login,
	            password: _this.props.password,
	            isShowLogUp: false
	        };
	        _this.onClickHandled = _this.onClickHandled.bind(_this);
	        _this.fecthData = _this.fecthData.bind(_this);
	        _this.onChangeInput = _this.onChangeInput.bind(_this);
	        _this.logUp = _this.logUp.bind(_this);
	        return _this;
	    }

	    _createClass(Login, [{
	        key: 'render',
	        value: function render() {
	            return React.createElement(
	                ModalPage,
	                _defineProperty({ show: this.state.show,
	                    modalPageBtnClick: this.onClickHandled
	                }, 'modalPageBtnClick', this.onClickHandled),
	                this.state.isShowLogUp ? React.createElement(LogUp, {
	                    show: true,
	                    modalPageBtnClick: this.logUp
	                }) : null,
	                React.createElement(
	                    'div',
	                    { style: styles.docRow },
	                    React.createElement(
	                        'button',
	                        {
	                            style: styles.logUpButton,
	                            onClick: this.logUp
	                        },
	                        'New user'
	                    )
	                ),
	                React.createElement(
	                    'div',
	                    { style: styles.docRow },
	                    React.createElement(
	                        'div',
	                        { style: styles.docColumn },
	                        React.createElement(
	                            'label',
	                            null,
	                            'Login: '
	                        ),
	                        React.createElement('input', { type: 'text',
	                            id: 'login',
	                            name: 'login',
	                            onChange: this.onChangeInput,
	                            value: this.state.login || ''
	                        }),
	                        React.createElement(
	                            'label',
	                            null,
	                            'Password: '
	                        ),
	                        React.createElement('input', { type: 'text',
	                            id: 'password',
	                            name: 'password',
	                            onChange: this.onChangeInput,
	                            value: this.state.password || ''
	                        })
	                    )
	                )
	            );
	        }

	        /**
	         * вернет компонет для регистрации пользователем
	         */

	    }, {
	        key: 'logUp',
	        value: function logUp(event) {
	            console.log('logUp', event);
	            this.setState({ isShowLogUp: !this.state.isShowLogUp });
	        }
	    }, {
	        key: 'onChangeInput',
	        value: function onChangeInput(e) {
	            var fieldValue = e.target.value;
	            var fieldName = e.target.name;

	            switch (fieldName) {
	                case 'login':
	                    this.setState({ login: fieldValue });
	                    break;
	                case 'password':
	                    this.setState({ password: fieldValue });
	                    break;
	            }
	        }
	    }, {
	        key: 'onClickHandled',
	        value: function onClickHandled(event) {
	            if (event == 'Ok') {
	                // отправляем на сервер на контроль
	                this.fecthData();
	            }
	            this.setState({ show: !this.state.show });
	        }
	    }, {
	        key: 'fecthData',
	        value: function fecthData() {
	            var _this2 = this;

	            var data = new FormData();
	            data.append('login', this.state.login);
	            data.append('password', this.state.password);
	            return new Promise(function (resolved, rejected) {
	                fetchData.fetchDataPost('/main/login', data).then(function (response) {
	                    // error handling
	                    if (response.status === 200) {
	                        // load store with data

	                        // сохраним пользователя в сторе
	                        var store = _this2.props.store;
	                        store.dispatch({ type: 'user', user: response.data.data[0] });

	                        if (_this2.props.loginClickEvent) {
	                            _this2.props.loginClickEvent(response.data.data.length && response.data.data[0].id ? true : false);
	                        }
	                        resolved(response.data);
	                    } else {
	                        console.error('status !== 200');
	                        return rejected();
	                    }
	                }).catch(function (error) {
	                    console.error('fetch error', error);
	                    // Something happened in setting up the request that triggered an Error
	                    return rejected(error);
	                });
	            });
	        }
	    }]);

	    return Login;
	}(React.PureComponent);

	Login.propTypes = {
	    disabled: PropTypes.bool,
	    show: PropTypes.bool
	};

	Login.defaultProps = {
	    disabled: false.valueOf(),
	    pages: []
	};

	module.exports = Login;

/***/ }),
/* 168 */
/***/ (function(module, exports) {

	'use strict';module.exports={page:{/*
	                border:'1px solid black',
	        */borderRadius:'3px'},icons:{add:'images/icons/add.png',edit:'images/icons/edit.png',delete:'images/icons/delete.png',filter:'images/icons/filter.png',print:'images/icons/print.png',ok:'images/icons/ok.png',cancel:'images/icons/cancel.png'},pictureFrame:{width:'50%'},picture:{objectFit:'contain',width:'50%'},docRow:{display:'flex',flexDirection:'row'/*
	                border: '1px solid blue'
	        */},docColumn:{display:'flex',flexDirection:'column'},logUpButton:{wiodth:'auto'}};

/***/ }),
/* 169 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var PropTypes = __webpack_require__(11);

	var React = __webpack_require__(10),
	    styles = __webpack_require__(170);
	var DocContext = __webpack_require__(1);
	var fetchData = __webpack_require__(41);

	var ModalPage = __webpack_require__(171);

	var Logup = function (_React$PureComponent) {
	    _inherits(Logup, _React$PureComponent);

	    function Logup(props) {
	        _classCallCheck(this, Logup);

	        var _this = _possibleConstructorReturn(this, (Logup.__proto__ || Object.getPrototypeOf(Logup)).call(this, props));

	        _this.state = {
	            show: _this.props.show,
	            lastId: 0,
	            login: _this.props.login,
	            email: _this.props.email,
	            name: _this.props.name,
	            address: _this.props.address,
	            info: null
	        };
	        _this.onClickHandled = _this.onClickHandled.bind(_this);
	        _this.fecthData = _this.fecthData.bind(_this);
	        _this.onChangeInput = _this.onChangeInput.bind(_this);
	        return _this;
	    }

	    _createClass(Logup, [{
	        key: 'render',
	        value: function render() {
	            return React.createElement(
	                ModalPage,
	                _defineProperty({ show: this.state.show,
	                    modalPageBtnClick: this.onClickHandled
	                }, 'modalPageBtnClick', this.onClickHandled),
	                this.state.info ? React.createElement(
	                    'div',
	                    { style: styles.info },
	                    this.state.info
	                ) : null,
	                React.createElement(
	                    'div',
	                    { style: styles.docRow },
	                    React.createElement(
	                        'div',
	                        { style: styles.docColumn },
	                        React.createElement(
	                            'label',
	                            null,
	                            'Login: '
	                        ),
	                        React.createElement('input', { type: 'text',
	                            id: 'login',
	                            name: 'login',
	                            onChange: this.onChangeInput,
	                            value: this.state.login || ''
	                        }),
	                        React.createElement(
	                            'label',
	                            null,
	                            'email: '
	                        ),
	                        React.createElement('input', { type: 'text',
	                            id: 'email',
	                            name: 'email',
	                            onChange: this.onChangeInput,
	                            value: this.state.email || ''
	                        }),
	                        React.createElement(
	                            'label',
	                            null,
	                            'Name: '
	                        ),
	                        React.createElement('input', { type: 'text',
	                            id: 'name',
	                            name: 'name',
	                            onChange: this.onChangeInput,
	                            value: this.state.name || ''
	                        }),
	                        React.createElement(
	                            'label',
	                            null,
	                            'Address: '
	                        ),
	                        React.createElement('input', { type: 'text',
	                            id: 'address',
	                            name: 'address',
	                            onChange: this.onChangeInput,
	                            value: this.state.address || ''
	                        })
	                    )
	                )
	            );
	        }
	    }, {
	        key: 'onChangeInput',
	        value: function onChangeInput(e) {
	            var fieldValue = e.target.value;
	            var fieldName = e.target.name;

	            switch (fieldName) {
	                case 'login':
	                    this.setState({ login: fieldValue });
	                    break;
	                case 'email':
	                    this.setState({ email: fieldValue });
	                    break;
	                case 'name':
	                    this.setState({ name: fieldValue });
	                    break;
	                case 'address':
	                    this.setState({ address: fieldValue });
	                    break;
	            }
	        }
	    }, {
	        key: 'onClickHandled',
	        value: function onClickHandled(event) {
	            console.log('logup btn click');
	            if (event == 'Ok') {
	                // отправляем на сервер на контроль
	                this.fecthData();
	            } else {
	                this.setState({ wshow: !this.state.sho });
	            }
	        }
	    }, {
	        key: 'fecthData',
	        value: function fecthData() {
	            var _this2 = this;

	            var params = {
	                login: this.state.login,
	                email: this.state.email,
	                name: this.state.name,
	                address: this.state.address
	            };
	            var data = new FormData();
	            data.append('login', this.state.login);
	            data.append('email', this.state.email);
	            data.append('name', this.state.name);
	            data.append('address', this.state.address);
	            return new Promise(function (resolved, rejected) {
	                fetchData.fetchDataPost('/main/logup', params).then(function (response) {
	                    console.log('response', response);
	                    // error handling
	                    if (response.status === 200) {
	                        resolved(true);
	                    } else {
	                        console.error('status !== 200');
	                        rejected(false);
	                    }
	                }).then(function () {
	                    _this2.setState({ info: 'Successfully saved' }, function () {
	                        setTimeout(function () {
	                            _this2.setState({ show: false });
	                        }, 5000);
	                        console.log('wait ends, show ...');
	                    });
	                }).catch(function (error) {
	                    console.error('fetch error', error ? error : '');
	                    // Something happened in setting up the request that triggered an Error
	                    _this2.setStatus({ info: 'Error in saving data' });
	                });
	            });
	        }
	    }]);

	    return Logup;
	}(React.PureComponent);

	Logup.propTypes = {
	    disabled: PropTypes.bool,
	    show: PropTypes.bool
	};

	Logup.defaultProps = {
	    disabled: false.valueOf()
	};

	module.exports = Logup;

/***/ }),
/* 170 */
/***/ (function(module, exports) {

	'use strict';module.exports={page:{/*
	        border:'1px solid black',
	*/borderRadius:'3px'},icons:{add:'images/icons/add.png',edit:'images/icons/edit.png',delete:'images/icons/delete.png',filter:'images/icons/filter.png',print:'images/icons/print.png',ok:'images/icons/ok.png',cancel:'images/icons/cancel.png'},pictureFrame:{width:'50%'},picture:{objectFit:'contain',width:'50%'},docRow:{display:'flex',flexDirection:'row'/*
	                border: '1px solid blue'
	        */},docColumn:{display:'flex',flexDirection:'column'},info:{backgroundColor:'yellow'}};

/***/ }),
/* 171 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var PropTypes = __webpack_require__(11);

	var React = __webpack_require__(10),
	    Button = __webpack_require__(75),
	    buttonStyles = __webpack_require__(74),
	    styles = __webpack_require__(172);
	var getTextValue = __webpack_require__(76);

	var ModalPage = function (_React$PureComponent) {
	    _inherits(ModalPage, _React$PureComponent);

	    function ModalPage(props) {
	        _classCallCheck(this, ModalPage);

	        var _this = _possibleConstructorReturn(this, (ModalPage.__proto__ || Object.getPrototypeOf(ModalPage)).call(this, props));

	        _this.handleBtnClick.bind(_this);
	        _this.changeVisibilityModalPage.bind(_this);
	        _this.state = {
	            show: _this.props.show
	        };
	        _this.onKeyUp = _this.onKeyUp.bind(_this);
	        return _this;
	    }

	    _createClass(ModalPage, [{
	        key: 'changeVisibilityModalPage',
	        value: function changeVisibilityModalPage() {
	            this.setState({ show: !this.state.show });
	        }

	        // will update state if props changed

	    }, {
	        key: 'handleBtnClick',
	        value: function handleBtnClick(btnEvent) {
	            // закрываем окно и если передан обработчик, отдаем туда данные
	            console.log('Modal btn clicked', btnEvent);
	            this.changeVisibilityModalPage();
	            if (this.props.modalPageBtnClick) {
	                var show = this.props.modalPageBtnClick(btnEvent);
	            }
	        }

	        /**
	         * перехватит сыбтия нажатия кнопки и вызовет дефолтные методы
	         * @param e
	         */

	    }, {
	        key: 'onKeyUp',
	        value: function onKeyUp(e) {
	            switch (e.key) {
	                case 'Enter':
	                    if (this.refs['btnOk']) {
	                        this.handleBtnClick('Ok');
	                    }
	                    break;
	                case 'Escape':
	                    if (this.refs['btnCancel']) {
	                        this.handleBtnClick('Cancel');
	                    }
	                    break;
	            }
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            // если передан атрибу modalObjects = ['btnOk','btnCancel']
	            var hideBtnOk = this.props.modalObjects.indexOf('btnOk') == -1 ? false : true,
	                // управление кнопкой Ок
	            hideBtnCancel = this.props.modalObjects.indexOf('btnCancel') == -1 ? false : true,
	                // управление кнопкой Cancel
	            displayModal = this.state.show ? 'flex' : 'none',
	                pagePosition = this.props.position,
	                containerStyle = Object.assign({}, styles.container, { display: displayModal }, { justifyContent: pagePosition }),
	                buttonOkStyle = Object.assign({}, styles.modalPageButtons, styles.defaultButton);

	            var Style = Object.assign({}, styles.modalPage, this.props.styles ? this.props.styles : {});
	            return React.createElement(
	                'div',
	                {
	                    ref: 'container',
	                    style: containerStyle,
	                    onKeyUp: this.onKeyUp
	                },
	                React.createElement(
	                    'div',
	                    { style: Style, ref: 'modalPageContainer' },
	                    React.createElement(
	                        'div',
	                        { style: styles.header, ref: 'modalPageHeader' },
	                        React.createElement(
	                            'span',
	                            { ref: 'headerName', style: styles.headerName },
	                            ' ',
	                            getTextValue(this.props.modalPageName),
	                            ' '
	                        ),
	                        React.createElement(Button, { style: styles.buttonClose, ref: 'btnClose',
	                            onClick: this.changeVisibilityModalPage.bind(this), value: 'x' })
	                    ),
	                    React.createElement(
	                        'div',
	                        { style: styles.modalPageContent, ref: 'modalPageContent' },
	                        this.props.children
	                    ),
	                    React.createElement(
	                        'div',
	                        { style: styles.modalFooter, ref: 'modalPageButtons' },
	                        hideBtnOk ? React.createElement(
	                            Button,
	                            {
	                                ref: 'btnOk',
	                                value: 'Ok',
	                                style: buttonOkStyle,
	                                width: 'width' in styles.modalPageButtons ? styles.modalPageButtons.width : null,
	                                height: 'height' in styles.modalPageButtons ? styles.modalPageButtons.height : null,
	                                onClick: this.handleBtnClick.bind(this, 'Ok'),
	                                id: 'btnOk' },
	                            React.createElement('img', { ref: 'image', src: buttonStyles.icons['ok'] })
	                        ) : null,
	                        React.createElement('div', { style: styles.buttonsSeparator }),
	                        hideBtnCancel ? React.createElement(
	                            Button,
	                            {
	                                ref: 'btnCancel',
	                                value: 'Cancel',
	                                style: styles.modalPageButtons,
	                                width: 'width' in styles.modalPageButtons ? styles.modalPageButtons.width : null,
	                                height: 'height' in styles.modalPageButtons ? styles.modalPageButtons.height : null,
	                                onClick: this.handleBtnClick.bind(this, 'Cancel'),
	                                className: 'modalPageButtons',
	                                id: 'btnCancel' },
	                            React.createElement('img', { ref: 'image', src: buttonStyles.icons['cancel'] })
	                        ) : null
	                    )
	                )
	            );
	        }
	    }], [{
	        key: 'getDerivedStateFromProps',
	        value: function getDerivedStateFromProps(nextProps, prevState) {
	            if (nextProps.show !== prevState.show) {
	                return { show: nextProps.show };
	            } else return null;
	        }
	    }]);

	    return ModalPage;
	}(React.PureComponent);

	/*
	ModalPage.propTypes = {
	    modalPageName: PropTypes.string.isRequired,
	    modalPageBtnClick: PropTypes.func.isRequired,
	    show: PropTypes.bool,
	    position: PropTypes.oneOf(['center', 'flex-start', 'flex-end']),
	}
	*/

	ModalPage.defaultProps = {
	    modalPageName: 'defaulName',
	    modalObjects: ['btnOk', 'btnCancel'],
	    position: 'center',
	    show: false
	};

	module.exports = ModalPage;

/***/ }),
/* 172 */
/***/ (function(module, exports) {

	'use strict';module.exports={container:{position:'fixed',top:'0',left:0,right:0,bottom:0,backgroundColor:'rgba(255, 255, 255, 0.25)',display:'flex',justifyContent:'center'},modalPage:{position:'relative',border:'1px solid black',background:'white',margin:'8px',borderRadius:'4px',outline:'none',display:'flex',flexDirection:'column',alignSelf:'center',height:'auto',maxHeight:'95%',overflow:'auto',zIndex:1},modalPageContent:{padding:'10px',margin:'10px',width:'auto'},header:{height:'30px',width:'100%',border:'1px solid darkgray',background:'lightgray',display:'flex',justifyContent:'space-between'},headerName:{color:'white',alignSelf:'center',marginLeft:'10px'},modalFooter:{alignSelf:'center',display:'flex',marginBotton:'10px'},modalPageButtons:{height:'30px',width:'100px',marginBottom:'10px'},buttonsSeparator:{width:'10px'},buttonClose:{borderRadius:'50%',backgroundColor:'lightgray',border:'none',fontWeight:'900',margin:'0px 0px'},left:{right:'auto',left:'0'},right:{left:'auto',right:'0'},defaultButton:{backgroundColor:'lightBlue'}};

/***/ }),
/* 173 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var PropTypes = __webpack_require__(11);
	var radium = __webpack_require__(88);

	var React = __webpack_require__(10),
	    styles = __webpack_require__(174);
	var getTextValue = __webpack_require__(76);

	var Input = function (_React$PureComponent) {
	    _inherits(Input, _React$PureComponent);

	    function Input(props) {
	        _classCallCheck(this, Input);

	        var _this = _possibleConstructorReturn(this, (Input.__proto__ || Object.getPrototypeOf(Input)).call(this, props));

	        _this.state = {
	            value: ''
	        };
	        _this.onChange = _this.onChange.bind(_this);
	        _this.btnClickHandler = _this.btnClickHandler.bind(_this);
	        return _this;
	    }

	    _createClass(Input, [{
	        key: 'onChange',
	        value: function onChange(e) {
	            this.setState({ value: e.target.value });
	        }
	    }, {
	        key: 'render',
	        value: function render() {

	            return React.createElement(
	                'div',
	                { style: styles.searchText.wrapper },
	                React.createElement('input', { type: 'text',
	                    style: styles.searchText.text,
	                    onChange: this.onChange,
	                    value: this.state.value || ''
	                }),
	                React.createElement(
	                    'button',
	                    {
	                        style: styles.searchText.button,
	                        onClick: this.btnClickHandler,
	                        onDoubleClick: this.btnClickHandler
	                    },
	                    React.createElement('img', { ref: 'image', src: styles.icons['filter'] })
	                )
	            );
	        }
	    }, {
	        key: 'btnClickHandler',
	        value: function btnClickHandler() {
	            console.log('fliter btn clicked', this.state.value);
	            var store = this.props.store;
	            store.dispatch({ type: 'filter', filter: this.state.value });
	        }
	    }, {
	        key: 'onChange',
	        value: function onChange(e) {
	            this.setState({ value: e.target.value });
	        }

	        /**
	         * установит фокус на элементы
	         */

	    }, {
	        key: 'focus',
	        value: function focus() {
	            this.refs['input'].focus();
	        }
	    }]);

	    return Input;
	}(React.PureComponent);

	Input.propTypes = {
	    name: PropTypes.string.isRequired,
	    value: PropTypes.string,
	    readOnly: PropTypes.bool,
	    disabled: PropTypes.bool,
	    valid: PropTypes.bool,
	    placeholder: PropTypes.string,
	    pattern: PropTypes.string,
	    title: PropTypes.string
	};

	Input.defaultProps = {
	    readOnly: false,
	    disabled: false,
	    valid: true,
	    value: '',
	    title: ''
	};

	module.exports = radium(Input);

/***/ }),
/* 174 */
/***/ (function(module, exports) {

	'use strict';module.exports={grid:{mainTable:{width:'100%',td:{border:'1px solid lightGrey',display:'table-cell',paddingLeft:'5px'},th:{border:'1px solid black',display:'table-cell',paddingLeft:'5px'},tdButtons:{display:'inline-flex'}},headerTable:{width:'100%'},gridContainer:{width:'100%'}},img:{objectFit:'contain',width:'50%'},picture:{objectFit:'contain',width:'500px',height:'500px'},frame:{width:'50%'},docRow:{display:'flex',flexDirection:'row',margin:'5px'},label:{width:'30%'},pageFrame:{display:'inline-flex',border:'1px solid black'},filterFrame:{width:'30%',//        border: '1px solid grey',
	margin:'5px'},componentFrame:{width:'70%',//        border: '1px solid red',
	margin:'5px'},docColumn:{display:'flex',flexDirection:'column',width:'50%'},button:{background:'white',margin:'5px 2px',borderRadius:'5px',height:'30px',display:'flex',border:'1px solid gray'},toolbarBtnImage:{width:'auto',height:'auto'},button_edit:{icon:'images/icons/edit.png'},button_accept:{icon:'images/icons/ok.png'},button_delete:{icon:'images/icons/delete.png'},icons:{add:'/images/icons/add.png',edit:'/images/icons/edit.png',delete:'/images/icons/delete.png',filter:'/images/icons/filter.png',print:'/images/icons/print.png',ok:'/images/icons/ok.png',cancel:'/images/icons/cancel.png',save:'/images/icons/save.png',execute:'/images/icons/execute.png',start:'/images/icons/start.png',login:'/images/icons/login.png',account:'/images/icons/account.png',rekv:'/images/icons/rekv.png',info:'/images/icons/info.png',settings:'/images/icons/settings.png',mail:'/images/icons/mail.png',select:'/images/icons/select.png',refresh:'/images/icons/refresh.png',attachment:'/images/icons/attachment.png',sale:'/images/icons/sale.png'},searchText:{wrapper:{height:'30px',borderRadius:'5px',border:'1px solid grey',margin:'5px 2px'},text:{border:0,padding:0,outline:0},button:{height:'30px',border:0,padding:0,outline:0}},btnEdit:{width:'30px',marginLeft:'2px'},btnSale:{width:'30px',marginLeft:'2px'},select:{height:'30px',width:'100px',borderRadius:'5px'},filterBlock:{marginTop:'5px'//        display: 'inline-block',
	},filterLabel:{display:'inline-block',width:'30%'}};

/***/ }),
/* 175 */
/***/ (function(module, exports) {

	'use strict';module.exports={container:{margin:'10px 0'},selectStyle:{margin:'5px',display:'flex',width:'95%',borderRadius:'5px'},pageName:{fontWeight:'bold',fontSize:'x-large'},selectKeel:{margin:'5px',display:'flex',width:'100px',height:'30px',borderRadius:'5px'}};

/***/ }),
/* 176 */
/***/ (function(module, exports) {

	'use strict';module.exports={LEPING:{select:['kasutaja','vaatleja','peakasutaja','raama','juht','kasutaja'],add:['kasutaja','raama','juht'],edit:['kasutaja','raama','juht'],delete:['kasutaja','raama','juht'],arved:['raama']},USERID:{select:['admin','juht'],add:['admin'],edit:['admin'],delete:['admin']},REKL:{select:['juht'],add:['juht'],edit:['juht'],delete:['juht']},REKV:{select:['admin','juht','raama'],add:['admin'],edit:['admin','juht','raama'],delete:['admin']},ARV:{select:['kasutaja','arvestaja','vaatleja','peakasutaja','raama'],add:['kasutaja','peakasutaja','raama'],edit:['kasutaja','peakasutaja','raama'],delete:['kasutaja','peakasutaja','raama']},SMK:{select:['kasutaja','arvestaja','vaatleja','peakasutaja','raama'],add:['kasutaja','peakasutaja','raama'],edit:['kasutaja','peakasutaja','raama'],delete:['kasutaja','peakasutaja','raama'],import:['admin','raama']},PANK_VV:{edit:['kasutaja','peakasutaja'],delete:['kasutaja','peakasutaja']},VMK:{select:['kasutaja','arvestaja','vaatleja','peakasutaja','raama'],add:['kasutaja','peakasutaja','raama'],edit:['kasutaja','peakasutaja','raama'],delete:['kasutaja','peakasutaja','raama']},VORDER:{select:['kasutaja','arvestaja','vaatleja','peakasutaja'],add:['kasutaja','peakasutaja'],edit:['kasutaja','peakasutaja'],delete:['kasutaja','peakasutaja']},SORDER:{select:['kasutaja','arvestaja','vaatleja','peakasutaja'],add:['kasutaja','peakasutaja'],edit:['kasutaja','peakasutaja'],delete:['kasutaja','peakasutaja']},TUNNUS:{select:['raama'],add:['raama'],edit:['raama'],delete:['raama']},PROJECT:{select:['raama'],add:['raama'],edit:['raama'],delete:['raama']},KONTOD:{select:['raama'],add:['raama'],edit:['raama'],delete:['raama']},//nomenclature
	NOMENCLATURE:{select:['kasutaja','vaatleja','peakasutaja','raama','juht'],add:['raama','juht'],edit:['raama','juht'],delete:['raama','juht'],import:['admin']},ASUTUSED:{select:['kasutaja','vaatleja','peakasutaja','raama','juht'],add:['kasutaja','arvestaja','raama','juht'],edit:['kasutaja','arvestaja','raama','juht'],delete:['kasutaja','raama','juht']},OBJEKT:{select:['kasutaja','vaatleja','peakasutaja','raama','juht','kasutaja'],add:['kasutaja','raama','juht','kasutaja'],edit:['kasutaja','raama','juht','kasutaja'],delete:['kasutaja','raama','juht','kasutaja']},ARTIKKEL:{select:['kasutaja','vaatleja','peakasutaja'],add:['kasutaja'],edit:['kasutaja'],delete:['kasutaja']},ALLIKAS:{select:['kasutaja','vaatleja','peakasutaja'],add:['kasutaja'],edit:['kasutaja'],delete:['kasutaja']},TEGEV:{select:['kasutaja','vaatleja','peakasutaja'],add:['kasutaja'],edit:['kasutaja'],delete:['kasutaja']},//asutuse_liik
	TAOTLUS_LOGIN:{select:['admin'],edit:['admin'],delete:['admin']},TEATIS:{select:['arvestaja'],add:['arvestaja'],edit:['arvestaja'],delete:['arvestaja']},KAIBEANDMIK:{select:['raama']},KONTONDMIK:{select:['raama']}};

/***/ }),
/* 177 */
/***/ (function(module, exports) {

	'use strict';// will check rights for action
	var checkRights=function checkRights(userRoles,docRights,action){var is_accepted=false;if(docRights&&docRights[action]){docRights[action].forEach(function(role){// raamatupidajad
	is_accepted=userRoles&&userRoles.is_raama&&role=='raama'?true:is_accepted;if(!is_accepted){is_accepted=userRoles&&userRoles.is_juht&&role=='juht'?true:is_accepted;}// adminid
	if(!is_accepted){is_accepted=userRoles&&userRoles.is_admin&&role=='admin'?true:is_accepted;}});}else{// если нет ограничений
	is_accepted=true;}return is_accepted;};module.exports=checkRights;

/***/ }),
/* 178 */,
/* 179 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var PropTypes = __webpack_require__(11);
	var React = __webpack_require__(10);
	var _fetchData = __webpack_require__(41);
	var DocContext = __webpack_require__(1);
	var Menu = __webpack_require__(40);
	var DocRights = __webpack_require__(176);
	var checkRights = __webpack_require__(177);
	var createEmptyFilterData = __webpack_require__(3);
	var prepareSqlWhereFromFilter = __webpack_require__(180);
	var Const = __webpack_require__(86);
	var Liimit = Const.RECORDS_LIMIT;
	var prepareData = __webpack_require__(181);
	var getTextValue = __webpack_require__(76);

	var DataGrid = __webpack_require__(183),
	    StartMenu = __webpack_require__(82),
	    BtnAdd = __webpack_require__(78),
	    BtnEdit = __webpack_require__(80),
	    BtnDelete = __webpack_require__(184),
	    BtnPrint = __webpack_require__(204),
	    BtnPdf = __webpack_require__(205),
	    BtnFilter = __webpack_require__(206),
	    BtnSelect = __webpack_require__(207),
	    BtnEmail = __webpack_require__(208),
	    BtnRefresh = __webpack_require__(209),
	    ToolbarContainer = __webpack_require__(71),
	    GridFilter = __webpack_require__(210),
	    ModalPage = __webpack_require__(171),
	    InputText = __webpack_require__(212),
	    ModalPageDelete = __webpack_require__(185),
	    ModalReport = __webpack_require__(214),
	    styles = __webpack_require__(218);

	/**
	 * Класс реализует документ справочника признаков.
	 */

	var Documents = function (_React$Component) {
	    _inherits(Documents, _React$Component);

	    function Documents(props) {
	        _classCallCheck(this, Documents);

	        var _this = _possibleConstructorReturn(this, (Documents.__proto__ || Object.getPrototypeOf(Documents)).call(this, props));

	        _this.gridData = [];
	        _this.gridConfig = DocContext.gridConfig ? DocContext.gridConfig[props.docTypeId] : [];
	        _this.filterData = DocContext.filter && DocContext.filter[props.docTypeId] ? DocContext.filter[props.docTypeId] : [];

	        if (props.initData && props.initData.result) {
	            _this.gridData = props.initData.result.data || [];
	            _this.gridConfig = !_this.gridConfig.length ? props.initData.gridConfig : _this.gridConfig;
	            _this.subtotals = props.initData.subtotals || [];
	        } else if (props.initData && props.initData.gridData) {

	            _this.gridData = props.initData.gridData || [];
	            _this.gridConfig = !_this.gridConfig.length ? props.initData.gridConfig : _this.gridConfig;
	            _this.subtotals = [];
	        }

	        _this.docTypeId = props.docTypeId;

	        _this.state = {
	            value: _this.gridData.length ? _this.gridData[0].id : 0,
	            sortBy: {},
	            sqlWhere: '',
	            getFilter: false,
	            isDelete: false,
	            hasStartMenuVisible: false, // will show start menu
	            startMenuValue: 'parentid',
	            warning: '', // строка извещений
	            warningType: '',
	            limit: Liimit, // default limit for query,
	            isEmptyFilter: false, // если true то обнулит данные фильтра при перегрузке данных
	            showSelectFields: false, //will open or close column in grid to select rows
	            isReport: false, // показ модального окна при проверке использования
	            txtReport: [] // данные использования
	        };

	        _this._bind('btnAddClick', 'clickHandler', 'btnEditClick', 'dblClickHandler', 'headerClickHandler', 'headerClickHandler', 'btnFilterClick', 'btnSelectClick', 'btnRefreshClick', 'modalPageBtnClick', 'modalDeletePageBtnClick', 'filterDataHandler', 'renderFilterToolbar', 'btnStartClickHanler', 'renderStartMenu', 'startMenuClickHandler', 'fetchData', 'handleInputChange', 'btnEmailClick', 'setRegisterName', 'modalReportePageBtnClick');

	        return _this;
	    }

	    /**
	     * пишем делаем запрос по итогу загрузки
	     */


	    _createClass(Documents, [{
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            var _this2 = this;

	            if (!DocContext.filter) {
	                DocContext.filter = {};
	            }

	            // will save current docTypeid
	            DocContext['docTypeId'] = this.docTypeId;

	            var reload = false; // if reload === true then it will call to reload

	            if (this.props.initData && this.props.initData.docTypeId && this.props.initData.docTypeId.toUpperCase() !== this.docTypeId.toUpperCase()) {
	                reload = true;
	            }

	            // дефолтные значения
	            if (!DocContext.filter[this.docTypeId] && DocContext.gridConfig[this.docTypeId]) {
	                var config = DocContext.gridConfig[this.docTypeId];
	                var filter = prepareData(config, this.docTypeId);

	                // ищем дефолтные значения
	                config.forEach(function (row) {
	                    if (row.default) {
	                        var value = void 0;
	                        try {
	                            value = eval(row.default);
	                        } catch (e) {
	                            console.error('No default value');
	                        }

	                        if (value) {
	                            // ищем и присваеваем значение
	                            var idx = filter.findIndex(function (data) {
	                                return data.id == row.id;
	                            });
	                            if (idx) {
	                                filter[idx].value = value;
	                            }
	                        }
	                    }
	                });

	                if (filter && filter.length) {
	                    DocContext.filter[this.docTypeId] = filter;
	                }
	            }

	            // проверим сохраненный фильтр для этого типа
	            if (DocContext.filter[this.docTypeId] && DocContext.filter[this.docTypeId].length > 0) {
	                this.filterData = DocContext.filter[this.docTypeId];
	                reload = true;
	            }

	            if (reload || !this.props.initData || !this.gridData || !this.gridData.length || !this.props.initData.docTypeId) {

	                // проверим на фильтр
	                var sqlWhere = prepareSqlWhereFromFilter(this.filterData, this.docTypeId);

	                //делаем запрос на получение данных
	                this.setState({ sqlWhere: sqlWhere }, function () {
	                    _this2.fetchData('selectDocs');
	                });
	            }

	            // if lastDocId available, will point it as selected
	            if (DocContext[this.docTypeId.toLowerCase()]) {
	                var docId = DocContext[this.docTypeId.toLowerCase()];
	                this.setState({ value: docId });
	            }

	            // задать имя реристра на страницу
	            this.setRegisterName();
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var _style = Object.assign({}, styles, this.props.style ? this.props.style : {});
	            var warningStyle = this.state.warningType && styles[this.state.warningType] ? styles[this.state.warningType] : null;
	            var btnParams = {
	                btnStart: {
	                    show: true
	                },
	                btnLogin: {
	                    show: true,
	                    disabled: false
	                },
	                btnAccount: {
	                    show: true,
	                    disabled: false
	                }

	            };
	            return React.createElement(
	                'div',
	                { style: _style.doc },
	                React.createElement(Menu, { params: btnParams,
	                    ref: 'menu',
	                    history: this.props.history,
	                    rekvId: DocContext.userData ? DocContext.userData.asutusId : 0,
	                    module: this.props.module }),
	                React.createElement(
	                    'div',
	                    { style: _style.docRow },
	                    this.props.render(this)
	                ),
	                this.renderFilterToolbar(),
	                this.renderDocToolBar(),
	                this.state.warning ? React.createElement(
	                    ToolbarContainer,
	                    { ref: 'toolbar-container' },
	                    React.createElement(
	                        'div',
	                        { style: warningStyle },
	                        React.createElement(
	                            'span',
	                            null,
	                            this.state.warning
	                        )
	                    )
	                ) : null,
	                React.createElement(
	                    'div',
	                    { style: _style.gridContainer },
	                    React.createElement(DataGrid, { ref: 'dataGrid',
	                        style: _style.grid.mainTable,
	                        gridData: this.gridData,
	                        gridColumns: this.gridConfig,
	                        subtotals: this.subtotals,
	                        onClick: this.clickHandler,
	                        onDblClick: this.dblClickHandler,
	                        onHeaderClick: this.headerClickHandler,
	                        custom_styling: this.props.custom_styling ? this.props.custom_styling : null,
	                        isSelect: this.state.showSelectFields,
	                        value: this.state.value }),
	                    this.state.getFilter ? React.createElement(
	                        ModalPage,
	                        { ref: 'modalpageFilter',
	                            modalPageBtnClick: this.modalPageBtnClick,
	                            modalPageName: 'Filter',
	                            show: true },
	                        React.createElement(GridFilter, { ref: 'gridFilter',
	                            focusElement: this.gridConfig[1].id,
	                            docTypeId: this.docTypeId,
	                            handler: this.filterDataHandler,
	                            gridConfig: this.gridConfig,
	                            data: this.filterData })
	                    ) : null,
	                    React.createElement(ModalPageDelete, {
	                        show: this.state.isDelete,
	                        modalPageBtnClick: this.modalDeletePageBtnClick.bind(this) }),
	                    React.createElement(ModalReport, {
	                        show: this.state.isReport,
	                        report: this.state.txtReport,
	                        modalPageBtnClick: this.modalReportePageBtnClick })
	                )
	            );
	        }

	        //поиск названия регистра

	    }, {
	        key: 'setRegisterName',
	        value: function setRegisterName() {
	            var _this3 = this;

	            var docType = DocContext['menu'].find(function (row) {
	                return row.kood === _this3.props.docTypeId;
	            });
	            if (docType) {
	                DocContext.pageName = docType.name;
	            }
	        }

	        // обработчик изменений в инпут (лимит)

	    }, {
	        key: 'handleInputChange',
	        value: function handleInputChange(name, value) {
	            this.setState({ limit: !value || value > Liimit ? Liimit : value });
	        }

	        /**
	         * вызовер подгрузку данных с параметром сортировки
	         * @param sortBy
	         */

	    }, {
	        key: 'headerClickHandler',
	        value: function headerClickHandler(sortBy) {
	            var _this4 = this;

	            if (sortBy[0].column == 'select') {
	                return;
	            }
	            // ихем тип поля, если указан
	            var row = this.gridConfig.find(function (row) {
	                return row.id == sortBy[0].column;
	            });
	            if (row && row.type) {
	                Object.assign(sortBy[0], { type: row.type });
	            }
	            this.setState({ sortBy: sortBy }, function () {
	                return _this4.fetchData('selectDocs');
	            });
	        }

	        /**
	         * Обработчик двойного клика
	         */

	    }, {
	        key: 'dblClickHandler',
	        value: function dblClickHandler() {
	            this.btnEditClick();
	        }

	        /**
	         * обработчик для грида
	         * @param action
	         * @param docId
	         * @param idx
	         */

	    }, {
	        key: 'clickHandler',
	        value: function clickHandler(action, docId, idx) {
	            if (docId && typeof docId === 'number') {
	                this.setState({ value: docId });
	            }
	        }

	        /**
	         * откроет модальное окно с полями для фильтрации
	         */

	    }, {
	        key: 'btnFilterClick',
	        value: function btnFilterClick() {
	            if (!this.filterData.length) {
	                this.filterData = createEmptyFilterData(this.gridConfig, this.filterData, this.docTypeId);
	            }
	            this.setState({ getFilter: true });
	        }

	        /**
	         * выполнит запрос и обновит данные грида
	         */

	    }, {
	        key: 'btnRefreshClick',
	        value: function btnRefreshClick() {
	            var _this5 = this;

	            this.fetchData('selectDocs').then(function () {
	                _this5.setState({ warning: '' + getTextValue('Edukalt'), warningType: 'ok' });
	            });
	        }

	        /**
	         * Обработчик для кнопки Add
	         */

	    }, {
	        key: 'btnAddClick',
	        value: function btnAddClick() {
	            if (this.props.btnAddClick) {
	                // кастомный обработчик события
	                this.props.btnAddClick(this.state.value);
	            } else {
	                return this.props.history.push({
	                    pathname: '/' + this.props.module + '/' + this.docTypeId + '/0',
	                    state: { module: this.props.module }
	                });
	            }
	        }

	        /**
	         * Обработчик для кнопки Edit
	         */

	    }, {
	        key: 'btnEditClick',
	        value: function btnEditClick() {
	            if (this.props.btnEditClick) {
	                // кастомный обработчик события
	                this.props.btnEditClick(this.state.value);
	            } else {
	                return this.props.history.push({
	                    pathname: '/' + this.props.module + '/' + this.docTypeId + '/' + this.state.value,
	                    state: { module: this.props.module }
	                });
	            }
	        }

	        /**
	         * Обработчик для кнопки Delete
	         */

	    }, {
	        key: 'btnDeleteClick',
	        value: function btnDeleteClick() {
	            this.setState({ isDelete: true });
	        }

	        /**
	         * Обработчик для кнопки Print
	         */

	    }, {
	        key: 'btnPrintClick',
	        value: function btnPrintClick() {
	            var sqlWhere = this.state.sqlWhere;
	            var url = void 0;
	            var params = encodeURIComponent('' + sqlWhere);
	            var filterData = this.filterData.filter(function (row) {
	                return !!row.value;
	            });
	            var filter = encodeURIComponent('' + JSON.stringify(filterData));
	            if (this.filterData.length) {
	                url = '/print/' + this.docTypeId + '/' + DocContext.userData.uuid + '/' + filter;
	            } else {
	                url = '/print/' + this.docTypeId + '/' + DocContext.userData.uuid + '/0';
	            }
	            window.open(url + '/' + params);
	        }

	        /**
	         * Обработчик для кнопки Pdf
	         */

	    }, {
	        key: 'btnPdfClick',
	        value: function btnPdfClick() {
	            var sqlWhere = this.state.sqlWhere;
	            var url = void 0;
	            var params = encodeURIComponent('' + sqlWhere);
	            var filter = encodeURIComponent('' + JSON.stringify(this.filterData));

	            if (this.filterData.length) {
	                url = '/pdf/' + this.docTypeId + '/' + DocContext.userData.uuid + '/' + filter;
	            } else {
	                url = '/pdf/' + this.docTypeId + '/' + DocContext.userData.uuid + '/0';
	            }
	            window.open(url + '/' + params);
	        }

	        /**
	         * обработчик для кнопки фильтрации
	         * @param btnEvent
	         */

	    }, {
	        key: 'modalPageBtnClick',
	        value: function modalPageBtnClick(btnEvent) {
	            var _this6 = this;

	            var filterString = ''; // строка фильтра

	            if (btnEvent === 'Ok') {
	                // собираем данные

	                filterString = prepareSqlWhereFromFilter(this.filterData, this.docTypeId);
	            } else {
	                // чистим строку фильтрации и массив фильтров
	                filterString = '';
	                this.filterData.forEach(function (row) {
	                    row.value = null;
	                    if (row.start) {
	                        row.start = null;
	                    }
	                    if (row.end) {
	                        row.end = null;
	                    }
	                });
	            }

	            this.setState({
	                getFilter: false,
	                sqlWhere: filterString,
	                isEmptyFilter: !filterString
	            }, function () {
	                return _this6.fetchData('selectDocs');
	            });
	        }

	        /**
	         * обработчик для кнопки фильтрации
	         * @param btnEvent
	         */

	    }, {
	        key: 'modalDeletePageBtnClick',
	        value: function modalDeletePageBtnClick(btnEvent) {
	            var _this7 = this;

	            this.setState({ isDelete: false });
	            if (btnEvent === 'Ok') {
	                // delete document
	                this.setState({ warning: getTextValue('Töötan') + '...', warningType: 'notValid' });
	                this.fetchData('delete').catch(function (err) {
	                    console.error('error in fetch-> ', err);
	                }).then(function (data) {
	                    if (data.error_message) {
	                        console.error('data.error_message', data);
	                        _this7.setState({ warning: getTextValue('Tekkis viga') + ': ' + data.error_message, warningType: 'error' });
	                        if (data.status && data.status == 401) {
	                            setTimeout(function () {
	                                document.location = '/login';
	                            }, 1000);
	                        }
	                    } else {
	                        _this7.fetchData('selectDocs');
	                        // если есть в кеше , то чиcтим
	                        var lib = _this7.docTypeId.toLowerCase();
	                        if (DocContext.libs[lib] && DocContext.libs[lib].length > 0) {
	                            DocContext.libs[lib] = [];
	                        }
	                    }
	                });
	            }
	        }

	        /**
	         * обработчик для фильтра грида
	         * @param data
	         */

	    }, {
	        key: 'filterDataHandler',
	        value: function filterDataHandler(data) {
	            this.filterData = data;

	            // создади обьект = держатель состояния фильтра
	            if (!DocContext.filter) {
	                DocContext.filter = {};
	            }

	            if (!DocContext.filter[this.docTypeId]) {
	                DocContext.filter[this.docTypeId] = [];
	            }

	            if (data && data.length > 0 && this.props.history.location) {
	                DocContext.filter[this.docTypeId] = this.filterData;
	            }
	        }

	        /**
	         * Обработчик для кнопки старт меню
	         */

	    }, {
	        key: 'btnStartClickHanler',
	        value: function btnStartClickHanler() {
	            this.setState({ hasStartMenuVisible: true });
	        }

	        /**
	         * получит от стартого меню данные, спрячет меню
	         */

	    }, {
	        key: 'startMenuClickHandler',
	        value: function startMenuClickHandler(value) {
	            this.setState({ hasStartMenuVisible: false });
	            return this.props.history.push({
	                pathname: '/' + this.props.module + '/' + value,
	                state: { module: this.props.module }
	            });
	        }
	    }, {
	        key: 'btnSelectClick',
	        value: function btnSelectClick() {
	            this.setState({ showSelectFields: !this.state.showSelectFields });
	        }

	        /**
	         * Вернет компонет с данными строки фильтрации
	         * @returns {XML}
	         */

	    }, {
	        key: 'renderFilterToolbar',
	        value: function renderFilterToolbar() {
	            var filter = this.getFilterString();
	            var component = void 0;

	            if (filter) {
	                component = React.createElement(
	                    ToolbarContainer,
	                    { ref: 'filterToolbarContainer', position: 'left' },
	                    React.createElement(
	                        'span',
	                        null,
	                        ' Filter: ',
	                        this.getFilterString()
	                    )
	                );
	            }

	            return component;
	        }

	        /**
	         * преобразует данные фильтра в строку чтоб показать ее
	         * @returns {string}
	         */

	    }, {
	        key: 'getFilterString',
	        value: function getFilterString() {
	            var string = '';

	            this.filterData.map(function (row) {
	                var kas_sisaldab = row.sqlNo && row.sqlNo == 0 ? '<>' : '=';
	                if (row.start) {
	                    string = string + ' ' + row.name + '>=' + row.start + ',' + row.name + '<=' + row.end + ';';
	                } else {
	                    if (row.value) {
	                        string = string + row.name + ':' + kas_sisaldab + ' ' + row.value + '; ';
	                    }
	                }
	            });
	            return string;
	        }

	        /**
	         * Вернет компонет - панель инструментов документа
	         * @returns {XML}
	         */

	    }, {
	        key: 'renderDocToolBar',
	        value: function renderDocToolBar() {
	            var filter = this.getFilterString();

	            var toolbarParams = this.prepareParamsForToolbar(); //параметры для кнопок управления, взависимости от активной строки
	            return React.createElement(
	                'div',
	                null,
	                React.createElement(
	                    'div',
	                    { style: styles.docRow },
	                    React.createElement(InputText, { ref: 'input-limit',
	                        title: 'Limiit:',
	                        name: 'limit',
	                        style: styles.limit,
	                        value: getTextValue(String(this.state.limit) || Liimit, 2),
	                        readOnly: false,
	                        onChange: this.handleInputChange }),
	                    React.createElement(
	                        ToolbarContainer,
	                        { ref: 'toolbarContainer' },
	                        React.createElement(BtnAdd, { onClick: this.btnAddClick,
	                            show: toolbarParams['btnAdd'].show,
	                            disable: toolbarParams['btnAdd'].disabled }),
	                        React.createElement(BtnEdit, { onClick: this.btnEditClick,
	                            value: 'Muuda',
	                            show: toolbarParams['btnEdit'].show,
	                            disable: toolbarParams['btnEdit'].disabled }),
	                        React.createElement(BtnDelete, { onClick: this.btnDeleteClick.bind(this),
	                            show: toolbarParams['btnDelete'].show,
	                            disable: toolbarParams['btnDelete'].disabled }),
	                        React.createElement(BtnPrint, { onClick: this.btnPrintClick.bind(this),
	                            show: toolbarParams['btnPrint'].show,
	                            value: 'Trükk',
	                            disable: toolbarParams['btnPrint'].disabled }),
	                        React.createElement(BtnPdf, { onClick: this.btnPdfClick.bind(this),
	                            show: toolbarParams['btnPdf'].show,
	                            value: 'PDF',
	                            disable: toolbarParams['btnPdf'].disabled }),
	                        React.createElement(BtnEmail, { onClick: this.btnEmailClick.bind(this),
	                            show: toolbarParams['btnEmail'].show,
	                            value: 'Email',
	                            docTypeId: this.docTypeId,
	                            disable: toolbarParams['btnEmail'].disabled }),
	                        React.createElement(BtnFilter, { onClick: this.btnFilterClick }),
	                        React.createElement(BtnRefresh, { onClick: this.btnRefreshClick }),
	                        React.createElement(BtnSelect, {
	                            show: toolbarParams['btnSelect'].show,
	                            value: 'Valida',
	                            onClick: this.btnSelectClick,
	                            ref: 'grid-button-select' })
	                    )
	                )
	            );
	        }

	        /**
	         * Откроет стартовое меню
	         * @returns {*}
	         */

	    }, {
	        key: 'renderStartMenu',
	        value: function renderStartMenu() {
	            var component = void 0;
	            if (this.state.hasStartMenuVisible) {
	                component = React.createElement(StartMenu, { ref: 'startMenu',
	                    value: this.state.startMenuValue,
	                    clickHandler: this.startMenuClickHandler });
	            }
	            return component;
	        }

	        /**
	         *  читаем данные со стора, формируем параметры для кнопок управления, и туда их отдаем
	         * @returns {{btnAdd: {show: boolean, disabled: boolean}, btnEdit: {show: boolean, disabled: boolean}, btnDelete: {show: boolean, disabled: boolean}, btnPrint: {show: boolean, disabled: boolean}}}
	         */

	    }, {
	        key: 'prepareParamsForToolbar',
	        value: function prepareParamsForToolbar() {
	            var docRights = DocRights[this.docTypeId] ? DocRights[this.docTypeId] : {};
	            var userRoles = DocContext.userData ? DocContext.userData.roles : [];
	            var toolbarProps = {
	                add: this.props.toolbarProps ? !!this.props.toolbarProps.add : true,
	                edit: this.props.toolbarProps ? !!this.props.toolbarProps.edit : true,
	                delete: this.props.toolbarProps ? !!this.props.toolbarProps.delete : true,
	                print: this.props.toolbarProps ? !!this.props.toolbarProps.print : true,
	                pdf: this.props.toolbarProps ? !!this.props.toolbarProps.pdf : true,
	                email: this.props.toolbarProps ? !!this.props.toolbarProps.email : true,
	                start: this.props.toolbarProps ? !!this.props.toolbarProps.start : true
	            };

	            return Object.assign({
	                btnAdd: {
	                    show: toolbarProps['add'],
	                    disabled: false
	                },
	                btnEdit: {
	                    show: toolbarProps['edit'],
	                    disabled: !this.state.value
	                },
	                btnDelete: {
	                    show: toolbarProps['delete'],
	                    disabled: !this.state.value
	                },
	                btnPrint: {
	                    show: toolbarProps['print'],
	                    disabled: false
	                },
	                btnPdf: {
	                    show: toolbarProps['pdf'],
	                    disabled: false
	                },
	                btnEmail: {
	                    show: toolbarProps['email'],
	                    disabled: false
	                },
	                btnStart: {
	                    show: toolbarProps['start']
	                },
	                btnLogin: {
	                    show: true,
	                    disabled: false
	                },
	                btnAccount: {
	                    show: true,
	                    disabled: false
	                },
	                btnSelect: {
	                    show: this.gridConfig && this.gridConfig.length ? !!this.gridConfig.find(function (row) {
	                        return row.id === 'select';
	                    }) : false,
	                    disabled: false
	                }
	            }, this.props.toolbarParams ? this.props.toolbarParams : {});
	        }

	        /**
	         * Выполнит запросы
	         */

	    }, {
	        key: 'fetchData',
	        value: function fetchData(method, additionalData) {
	            var _this8 = this;

	            var URL = '/newApi';
	            var sqlWhere = this.state.sqlWhere;
	            switch (method) {
	                case 'delete':
	                    URL = '/newApi/delete';
	                    break;
	                case 'print':
	                    URL = '/print/' + this.docTypeId;
	                    break;
	                case 'selectDocs':
	                    URL = '/newApi';
	                    break;
	                default:
	                    URL = '/' + method;
	            }
	            // ставим статус
	            this.setState({ warning: 'Töötan...', warningType: 'notValid' });

	            var params = {
	                parameter: this.docTypeId, // параметры
	                docTypeId: this.docTypeId, // для согласования с документом
	                sortBy: this.state.sortBy, // сортировка
	                limit: this.state.limit, // row limit in query
	                docId: this.state.value,
	                method: method,
	                sqlWhere: sqlWhere, // динамический фильтр грида
	                filterData: this.filterData,
	                lastDocId: null,
	                module: this.props.module,
	                userId: DocContext.userData.userId,
	                uuid: DocContext.userData.uuid,
	                data: additionalData
	            };

	            return new Promise(function (resolved, rejected) {

	                _fetchData['fetchDataPost'](URL, params).then(function (response) {
	                    if (response.status && response.status === 401) {
	                        document.location = '/login';
	                    }

	                    // error handling
	                    if (response.status !== 200) {
	                        _this8.setState({ warning: '' + response.error_message, warningType: 'error' });

	                        return {
	                            result: null,
	                            status: response.status,
	                            error_message: 'error ' + (response.data && response.data.error_message ? 'response.data.error_message' : response.error_message)
	                        };
	                    }

	                    if (method === 'selectDocs') {
	                        _this8.gridData = response.data.result.data;

	                        if (response.data) {

	                            // если задан триггер, вызовем его
	                            if (_this8.props.trigger_select) {
	                                _this8.props.trigger_select(_this8);
	                            }
	                        }
	                        _this8.setState({ warning: '' + getTextValue('Edukalt'), warningType: 'ok' });
	                    } else if (method == 'delete' && response.data && response.data.result && response.data.result.error_code) {
	                        // проверка перед удалением
	                        var error = getTextValue('Tekkis viga: kustutamine eba\xF5nnestus');
	                        _this8.setState({
	                            warning: error,
	                            warningType: 'error',
	                            txtReport: response.data,
	                            isReport: !!(response.data.data && response.data.data.length)
	                        });
	                        return rejected(error);
	                    }
	                    resolved(response.data);
	                }).catch(function (error) {
	                    console.error('fetch error', error);
	                    // Something happened in setting up the request that triggered an Error
	                    _this8.setState({
	                        warning: getTextValue('Tekkis viga') + ' ' + error,
	                        warningType: 'error'
	                    });
	                    return rejected(error);
	                });
	            });
	        }

	        /**
	         * обработчик для кнопки отправки почты
	         */

	    }, {
	        key: 'btnEmailClick',
	        value: function btnEmailClick() {
	            // сохраним параметры для формирования вложения в контексте
	            DocContext['email-params'] = {
	                docId: this.state.docId,
	                docTypeId: this.docTypeId,
	                queryType: 'sqlWhere', // ид - документ
	                sqlWhere: this.state.sqlWhere,
	                filterData: this.filterData
	            };

	            this.props.history.push('/' + this.props.module + '/e-mail/0');
	        }

	        /**
	         * уберет окно с отчетом
	         */

	    }, {
	        key: 'modalReportePageBtnClick',
	        value: function modalReportePageBtnClick(event) {
	            var isReport = event && event == 'Ok' ? false : true;
	            this.setState({ isReport: isReport });
	        }
	    }, {
	        key: '_bind',
	        value: function _bind() {
	            var _this9 = this;

	            for (var _len = arguments.length, methods = Array(_len), _key = 0; _key < _len; _key++) {
	                methods[_key] = arguments[_key];
	            }

	            methods.forEach(function (method) {
	                return _this9[method] = _this9[method].bind(_this9);
	            });
	        }
	    }]);

	    return Documents;
	}(React.Component);

	Documents.propTypes = {
	    initData: PropTypes.shape({
	        result: PropTypes.object,
	        gridConfig: PropTypes.array
	    }),
	    docTypeId: PropTypes.string.isRequired
	};

	Documents.defaultProps = {
	    module: 'raama'
	};

	module.exports = Documents;

/***/ }),
/* 180 */
/***/ (function(module, exports) {

	'use strict';/**
	 * создаст строку - фильтр из параметров
	 * @param filterData
	 * @param docTypeId
	 * @returns {string}
	 */var prepareSqlWhereFromFilter=function prepareSqlWhereFromFilter(filterData,docTypeId){var filterString='';// строка фильтра
	var kas_sisaldab='';filterData.forEach(function(row){if(row.value){console.log('filterString',filterString);filterString=filterString+(filterString.length>0?" and ":" where ");kas_sisaldab=row.sqlNo&&Number(row.sqlNo)==0?'NOT':'';switch(row.type){case'text':var prepairedParameter=row.value.split(',').map(function(str){return'\''+str.trim()+'\'';}).join(',');// если параметры раздедены, то множественный параметр
	if(row.value.match(/,/)){filterString=filterString+' '+row.id+' '+kas_sisaldab+'  in ('+prepairedParameter+')';}else{if(docTypeId=='KUU_TAABEL'){filterString=filterString+'  upper('+row.id+') '+kas_sisaldab+' like upper(\'%'+row.value.trim()+'%\')';}else{// обработка некорректной кодировки
	filterString=filterString+'  upper('+row.id+') '+kas_sisaldab+' like upper(\'%'+row.value.trim()+'%\')';}}break;case'string':filterString=filterString+'  upper('+row.id+') '+kas_sisaldab+' like upper(\'%'+row.value.trim()+'%\')';break;case'date':if('start'in row&&row.start){filterString=filterString+' format_date('+row.id+'::text)  >=  format_date(\''+row.start+'\'::text) and (format_date('+row.id+'::text)  <=  format_date(\''+row.end+'\'::text) or '+row.end+' is null)';}else if(row.id=='valid'){// для этого поля ставим фильтр на контект действует до
	filterString=filterString+' (format_date('+row.id+'::text)  >=  format_date(\''+row.value+'\'::text) or '+row.id+' is null)';}else{filterString=filterString+row.id+(kas_sisaldab&&kas_sisaldab=='NOT'?"<>":"=")+"'"+row.value+"'";}break;case'number':if('start'in row&&row.start){filterString=filterString+' '+row.id+'::numeric  >=  '+row.start+' and ('+row.id+'::numeric  <=  '+row.end+' or '+row.end+' is null)';}else{filterString=filterString+row.id+"::numeric  "+(kas_sisaldab&&kas_sisaldab=='NOT'?"<>":"=")+row.value;}break;case'integer':if('start'in row&&row.start){filterString=filterString+' '+row.id+'  >=  '+row.start+' and ('+row.id+'  <=  '+row.end+' or '+row.end+' is null)';}else{filterString=filterString+row.id+"::integer  "+(kas_sisaldab&&kas_sisaldab=='NOT'?"<>":"=")+row.value;}break;}}});return filterString;};module.exports=prepareSqlWhereFromFilter;

/***/ }),
/* 181 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';var DocContext=__webpack_require__(1);var getDefaulDate=__webpack_require__(182);/**
	 * вернет дефолтные значения взависимости от типа
	 * @param row
	 */var getDefaultValues=function getDefaultValues(row){var returnValue={start:null,end:null,value:null};if(!!row.interval&&!row.start&&!row.end){switch(row.type){case'date':returnValue.start=getDefaulDate().start;returnValue.end=getDefaulDate().end;break;default:returnValue.start=null;returnValue.end;}}return returnValue;};function prepareFilterData(gridConfig,docTypeId){var data=[];if(!DocContext.filter){DocContext.filter={};}if(!DocContext.filter[docTypeId]){DocContext.filter[docTypeId]=[];}// проверим, если фильтр уже сохранен, то вернем уже ранее сохжанный массив
	if(docTypeId&&DocContext.filter[docTypeId].length>0){data=DocContext.filter[docTypeId];}else{gridConfig.map(function(row){var field={id:row.id,value:row.value?row.value:row.default?row.default:null,name:row.id,sqlNo:1,type:row.type?row.type:'text',interval:!!row.interval,start:row.value?row.value:null,end:row.value?row.value:null};if(row.interval){field[row.id+'_start']=row.value?row.value:null;field[row.id+'_end']=row.value?row.value:null;}data.push(field);});}return data;}module.exports=prepareFilterData;

/***/ }),
/* 182 */
/***/ (function(module, exports) {

	'use strict';/**
	 * добавит ноль в месяц или день по необходимости
	 * @param value
	 * @returns {string}
	 */var getTwoDigits=function getTwoDigits(value){return value<10?'0'+value:value;};/**
	 * вернет дефолтные значения взависимости от типа
	 * @param row
	 */var getDefaultDate=function getDefaultDate(period){var returnValue={start:null,end:null,value:null};Date.prototype.daysInMonth=function(){return 33-new Date(this.getFullYear(),this.getMonth(),33).getDate();};var today=new Date();var currentMonth=getTwoDigits(today.getMonth()+1);var currentYear=getTwoDigits(today.getFullYear());var startMonth=currentYear+'-'+currentMonth+'-01';var daysInMonth=getTwoDigits(today.daysInMonth());var finishMonth=currentYear+'-'+currentMonth+'-'+daysInMonth;switch(period){case'KUU':returnValue.start=startMonth;returnValue.end=finishMonth;break;case'AASTA':returnValue.start=currentYear+'-01-01';returnValue.end=currentYear+'-12-31';default:returnValue.start=null;returnValue.end=null;}return returnValue;};module.exports=getDefaultDate;

/***/ }),
/* 183 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var PropTypes = __webpack_require__(11);

	var React = __webpack_require__(10),
	    ToolbarContainer = __webpack_require__(71),
	    GridButtonAdd = __webpack_require__(78),
	    GridButtonEdit = __webpack_require__(80),
	    GridButtonDelete = __webpack_require__(184),
	    ModalPageDelete = __webpack_require__(185),
	    InputCheckBox = __webpack_require__(187),
	    keydown = __webpack_require__(189);

	//const    KEYS = [38, 40]; // мониторим только стрелки вверх и внизх
	var styles = __webpack_require__(203);
	var getTextValue = __webpack_require__(76);

	var isExists = function isExists(object, prop) {
	    var result = false;
	    if (object && prop in object) {
	        result = true;
	    }
	    return result;
	};

	//@keydown @todo

	var DataGrid = function (_React$Component) {
	    _inherits(DataGrid, _React$Component);

	    function DataGrid(props) {
	        _classCallCheck(this, DataGrid);

	        var _this = _possibleConstructorReturn(this, (DataGrid.__proto__ || Object.getPrototypeOf(DataGrid)).call(this, props));

	        _this.state = {
	            activeRow: 0,
	            activeColumn: '',
	            isDelete: false,
	            sort: {
	                name: null,
	                direction: null
	            },
	            value: _this.props.value ? _this.props.value : 0,
	            gridData: props.gridData,
	            subtotals: props.subtotals ? props.subtotals : [],
	            isSelect: _this.props.isSelect
	        };

	        _this.handleGridHeaderClick = _this.handleGridHeaderClick.bind(_this);
	        _this.handleCellDblClick = _this.handleCellDblClick.bind(_this);
	        _this.handleKeyDown = _this.handleKeyDown.bind(_this);
	        _this.prepareTableRow = _this.prepareTableRow.bind(_this);
	        _this.handleGridBtnClick = _this.handleGridBtnClick.bind(_this);
	        _this.getGridRowIndexById = _this.getGridRowIndexById.bind(_this);
	        _this.prepareTableFooter = _this.prepareTableFooter.bind(_this);
	        _this.getSum = _this.getSum.bind(_this);
	        _this.grid = [];

	        return _this;
	    }

	    // will update state if props changed


	    _createClass(DataGrid, [{
	        key: 'render',
	        value: function render() {
	            var tableHeaderStyle = Object.assign({}, styles.headerTable ? styles.headerTable : {}, this.props.style);
	            var tableMainStyle = Object.assign({}, styles.mainTable ? styles.mainTable : {}, this.props.style);

	            var toolbarParams = Object.assign({

	                btnAdd: {
	                    show: true,
	                    disabled: false
	                },
	                btnEdit: {
	                    show: true,
	                    disabled: false
	                },
	                btnDelete: {
	                    show: true,
	                    disabled: false
	                },
	                btnPrint: {
	                    show: true,
	                    disabled: false
	                }
	            }, this.props.toolbarParams ? this.props.toolbarParams : {});

	            // примем в зачет переданные стили
	            styles = _extends({}, styles, this.props.style);
	            return React.createElement(
	                'div',
	                { style: styles.main },
	                this.props.showToolBar ? React.createElement(
	                    ToolbarContainer,
	                    {
	                        ref: 'grid-toolbar-container',
	                        position: 'left' },
	                    React.createElement(GridButtonAdd, {
	                        show: toolbarParams.btnAdd.show,
	                        onClick: this.handleGridBtnClick,
	                        value: 'Lisa',
	                        ref: 'grid-button-add' }),
	                    React.createElement(GridButtonEdit, {
	                        show: toolbarParams.btnEdit.show,
	                        onClick: this.handleGridBtnClick,
	                        value: 'Muuda',
	                        ref: 'grid-button-edit' }),
	                    React.createElement(GridButtonDelete, {
	                        show: toolbarParams.btnDelete.show,
	                        onClick: this.handleGridBtnClick,
	                        value: 'Kustuta',
	                        ref: 'grid-button-delete' })
	                ) : null,
	                React.createElement(
	                    'div',
	                    { style: styles.header },
	                    React.createElement(
	                        'table',
	                        { ref: 'dataGridTable', style: tableHeaderStyle, onKeyPress: this.handleKeyDown },
	                        React.createElement(
	                            'tbody',
	                            null,
	                            React.createElement(
	                                'tr',
	                                null,
	                                this.prepareTableHeader()
	                            )
	                        )
	                    )
	                ),
	                React.createElement(
	                    'div',
	                    { style: styles.wrapper },
	                    React.createElement(
	                        'table',
	                        { style: tableMainStyle, tabIndex: '1', onKeyDown: this.handleKeyDown,
	                            onKeyPress: this.handleKeyDown },
	                        React.createElement(
	                            'tbody',
	                            null,
	                            React.createElement(
	                                'tr',
	                                { style: { visibility: 'collapse' } },
	                                this.prepareTableHeader(true)
	                            ),
	                            this.prepareTableRow(),
	                            this.props.subtotals && this.props.subtotals.length ? React.createElement(
	                                'tr',
	                                null,
	                                this.prepareTableFooter()
	                            ) : null
	                        )
	                    )
	                ),
	                React.createElement(ModalPageDelete, {
	                    show: this.state.isDelete,
	                    modalPageBtnClick: this.modalDeletePageBtnClick.bind(this) })
	            );
	        } // render


	    }, {
	        key: 'modalDeletePageBtnClick',
	        value: function modalDeletePageBtnClick(btnEvent) {
	            //close modalpage
	            this.setState({ isDelete: false });

	            if (btnEvent === 'Ok' && this.props.handleGridBtnClick) {
	                this.props.handleGridBtnClick('delete', this.state.activeRow, this.state.gridData.length ? this.state.gridData[this.state.activeRow].id : 0, this.props.docTypeId ? this.props.docTypeId : '');
	            }
	        }

	        /**
	         * обработчика сабытия клика по кнопки панели грида
	         * @param btnName
	         * @returns {*}
	         */

	    }, {
	        key: 'handleGridBtnClick',
	        value: function handleGridBtnClick(btnName) {

	            var activeRow = this.state.activeRow;

	            var id = this.state.gridData.length ? this.state.gridData[activeRow].id : 0;

	            var docTypeId = this.props.docTypeId ? this.props.docTypeId : '';

	            if ((btnName === 'delete' || btnName === 'Kustuta') && !this.state.isDelete) {
	                // should open modal page and ask confirmation
	                return this.setState({ isDelete: true });
	            }

	            if (this.props.handleGridBtnClick) {
	                this.props.handleGridBtnClick(btnName, activeRow, id, docTypeId);
	            }
	        }

	        /**
	         * ищем индех в массиве данных
	         */

	    }, {
	        key: 'getGridRowIndexById',
	        value: function getGridRowIndexById() {
	            var _this2 = this;

	            var index = 0;

	            if (this.state.value) {
	                index = this.state.gridData.findIndex(function (row) {
	                    return row.id === _this2.state.value;
	                });
	                index = index > -1 ? index : 0;
	            }
	            return index;
	        }

	        /**
	         * отрабатывает событи клика по ячейке
	         * @param idx
	         */

	    }, {
	        key: 'handleCellClick',
	        value: function handleCellClick(idx, columnId) {
	            var _this3 = this;

	            if (this.state.gridData.length > 0) {
	                var action = this.props.onChangeAction || null;

	                var docId = this.state.gridData[idx].id;
	                var gridData = _extends({}, this.state.gridData);

	                // Отработает клик по колонки селект для выбора массива записей
	                if (this.state.isSelect && columnId == 'select') {
	                    // уже выбран, надо исключить
	                    gridData[idx].select = !gridData[idx].select;
	                }

	                // если поле не отмечено как readOnly то сл. действие не должно происходить
	                if (columnId) {
	                    var column = this.props.gridColumns.filter(function (row) {
	                        return row.id == columnId;
	                    });
	                    if (column && column.length && !column[0].readOnly && this.props.isForUpdate && gridData[idx][columnId] !== null && gridData[idx][columnId] !== undefined) {

	                        // value changed
	                        gridData[idx][columnId] = !gridData[idx][columnId];
	                    }
	                }

	                this.setState({
	                    gridData: gridData,
	                    activeRow: idx,
	                    value: docId
	                }, function () {
	                    var value = _this3.state.gridData[idx][columnId];
	                    if (_this3.props.onClick) {
	                        _this3.props.onClick(action, docId, idx, columnId, value);
	                    }
	                });
	            }
	        }

	        /**
	         * обработчик для двойного клика по ячейке
	         * @param idx
	         */

	    }, {
	        key: 'handleCellDblClick',
	        value: function handleCellDblClick(idx) {
	            // отметим активную строку и вызовен обработчик события dblClick
	            this.handleCellClick(idx, null);
	            if (this.props.onDblClick) {
	                this.props.onDblClick();
	            }
	        }

	        /**
	         * Отработает клик по заголовку грида (сортировка)
	         * @param name - наименование колонки
	         */

	    }, {
	        key: 'handleGridHeaderClick',
	        value: function handleGridHeaderClick(name) {
	            if (name === 'select' || name === 'row_id') {
	                // виртуальная колонка
	                // меняем значение выбрано на наоборот

	                if (this.state.gridData.length > 0 && name === 'select') {
	                    var data = this.state.gridData;
	                    data.forEach(function (row) {
	                        row.select = !row.select;
	                    });
	                    this.setState({ gridData: data });
	                }
	                return;
	            }

	            var sort = this.state.sort;
	            if (sort.name === name) {
	                sort.direction = sort.direction === 'asc' ? 'desc' : 'asc';
	            } else {
	                sort = {
	                    name: name,
	                    direction: 'asc'
	                };
	            }

	            var sortBy = [{ column: sort.name, direction: sort.direction }];

	            this.setState({
	                activeColumn: name,
	                sort: sort
	            });

	            if (this.props.onHeaderClick) {
	                this.props.onHeaderClick(sortBy);
	            }
	        }

	        /**
	         * Обработчик на событие - нажитие стрелки вниз
	         * @param e
	         */

	    }, {
	        key: 'handleKeyDown',
	        value: function handleKeyDown(e) {
	            // реакция на клавиатуру
	            var rowIndex = this.state.activeRow;
	            switch (e.which) {
	                case 40:
	                    // вниз, увеличим активную строку на + 1
	                    rowIndex++;

	                    if (this.state.gridData.length < rowIndex) {
	                        // вернем прежнее значение
	                        rowIndex = this.state.activeRow;
	                    }
	                    break;
	                case 38:
	                    // вниз, увеличим активную строку на - 1
	                    rowIndex--;
	                    rowIndex = rowIndex < 0 ? 0 : rowIndex;
	                    break;
	            }
	            this.setState({
	                activeRow: rowIndex
	            });
	        }

	        /**
	         * Готовит строку для грида
	         */

	    }, {
	        key: 'prepareTableRow',
	        value: function prepareTableRow() {
	            var _this4 = this;

	            var activeRow = this.getGridRowIndexById();

	            return this.state.gridData.map(function (row, rowIndex) {
	                var objectIndex = 'tr-' + rowIndex;

	                var gridColumns = _this4.props.gridColumns.map(function (row) {
	                    if (row.id === 'select' && _this4.props.isSelect) {
	                        row.show = true;
	                    }

	                    return row;
	                });

	                return React.createElement(
	                    'tr',
	                    {
	                        ref: objectIndex,
	                        onClick: _this4.handleCellClick.bind(_this4, rowIndex, null),
	                        onDoubleClick: _this4.handleCellDblClick.bind(_this4, rowIndex),
	                        onKeyDown: _this4.handleKeyDown.bind(_this4),
	                        style: Object.assign({}, styles.tr, activeRow === rowIndex ? styles.focused : {}),
	                        key: objectIndex },
	                    gridColumns.map(function (column, columnIndex) {
	                        // назначим символы для отображения логических данных
	                        var boolValueYes = column.boolSumbolYes ? column.boolSumbolYes : styles.boolSumbol['yes'].value || null;
	                        var boolValueNo = column.boolSumbolNo ? column.boolSumbolNo : styles.boolSumbol['no'].value || null;
	                        var boolValueNull = column.boolSumbolNull ? column.boolSumbolNull : styles.boolSumbol['null'] ? styles.boolSumbol['null'].value : null;

	                        // приведем значение value к заданому типу для параметра hideEmptyValue
	                        var fixedValue = column.type && column.type == "integer" ? Number(row[column.id]) : row[column.id];

	                        var cellIndex = 'td-' + rowIndex + '-' + columnIndex;

	                        var display = isExists(column, 'show') ? column.show : true,
	                            width = isExists(column, 'width') ? column.width : '100%',
	                            style = Object.assign({}, styles.td, !display ? { display: 'none' } : {}, { width: width });

	                        // проверим на заданный цвет
	                        if (styles.boolColour && column.type && column.type === 'boolean') {

	                            style = Object.assign(style, { backgroundColor: !!row[column.id] ? styles.boolColour.yes : styles.boolColour.no }, { color: !!row[column.id] ? styles.boolSumbol['yes'].color : styles.boolSumbol['no'].color });
	                        }

	                        // если задан фон в конфиге грида
	                        if (column.yesBackgroundColor && (!!row[column.id] || row[column.id] == 'Viga')) {
	                            style = _extends({}, style, { backgroundColor: column.yesBackgroundColor });
	                        }

	                        // Ок, Viga для  рапорта об исполнениее
	                        if (column.noBackgroundColor && (!row[column.id] || row[column.id] == 'Ok')) {
	                            style = _extends({}, style, { backgroundColor: column.noBackgroundColor });
	                        }

	                        if (column.nullBackgroundColor && row[column.id] == null) {
	                            style = _extends({}, style, { backgroundColor: column.nullBackgroundColor });
	                        }
	                        // цвет, при значении NULL
	                        if (styles.td && styles.td.nullColour && row[column.id] == null) {
	                            style = Object.assign(style, { backgroundColor: styles.td.nullColour });
	                        }

	                        // кастомное обработка стилей на клетку
	                        if (_this4.props.custom_styling) {
	                            var customeStyle = _this4.props.custom_styling(column, row);
	                            style = _extends({}, style, customeStyle);
	                        }

	                        // оберем для конкретного поля параметр hideEmptyValue

	                        var isHideEmptyValue = column.hideEmptyValue ? column.hideEmptyValue : false;

	                        if (column.hideEmptyValue && row['nom_id'] && row['nom_id'] == 999999999) {
	                            isHideEmptyValue = false;
	                        }

	                        return React.createElement(
	                            'td',
	                            { style: style,
	                                ref: cellIndex,
	                                key: cellIndex,
	                                align: column.type && column.type === 'boolean' ? 'center' : 'left',
	                                onClick: _this4.handleCellClick.bind(_this4, rowIndex, column.id)
	                            },
	                            column.type && column.type === 'boolean' ? React.createElement(
	                                'span',
	                                null,
	                                !!row[column.id] ? boolValueYes : row[column.id] == null ? boolValueNull : boolValueNo
	                            ) : isHideEmptyValue && !fixedValue ? null : row[column.id]
	                        );
	                    })
	                );
	            }, this);
	        }

	        /**
	         * Готовит компонент итоговая строка грида
	         * @param isHidden - колонка будет скрыта
	         */

	    }, {
	        key: 'prepareTableFooter',
	        value: function prepareTableFooter(isHidden) {
	            var _this5 = this;

	            return this.props.gridColumns.map(function (column, index) {
	                var headerIndex = 'td-' + index;

	                var headerStyle = 'td';

	                var display = isExists(column, 'show') ? column.show : true,
	                    width = isExists(column, 'width') ? column.width : '100%',
	                    style = Object.assign({}, styles[headerStyle], !display ? { display: 'none' } : {}, { width: width });

	                var subIndex = _this5.props.subtotals.indexOf(column.id);
	                var total = void 0;
	                if (subIndex > -1) {
	                    total = _this5.getSum(column.id, column.type && column.type == 'integer' ? 0 : 2);
	                }

	                // установить видимость
	                return React.createElement(
	                    'td',
	                    {
	                        style: style,
	                        ref: headerIndex,
	                        key: headerIndex
	                    },
	                    React.createElement(
	                        'span',
	                        null,
	                        total
	                    )
	                );
	            }, this);
	        }

	        /**
	         * Готовит компонент заголовок грида
	         * @param isHidden - колонка будет скрыта
	         */

	    }, {
	        key: 'prepareTableHeader',
	        value: function prepareTableHeader(isHidden) {
	            var _this6 = this;

	            // если есть опция выбор, то добавим в массив колонку с полем ticked
	            var gridColumns = this.props.gridColumns.map(function (row) {
	                if (row.id === 'select') {
	                    row.show = _this6.props.isSelect;
	                }
	                return row;
	            });

	            return gridColumns.map(function (column, index) {
	                var headerIndex = 'th-' + index + column.id;

	                var headerStyle = isHidden ? 'thHidden' : 'th';

	                // проверка на стиль заголовка, на фонт
	                var fontColor = {
	                    color: column.showBold && styles[headerStyle].boldColor ? styles[headerStyle].boldColor : styles[headerStyle].color
	                };

	                var display = isExists(column, 'show') ? column.show : true,
	                    width = isExists(column, 'width') ? column.width : '100%',
	                    style = Object.assign({}, styles[headerStyle], !display ? { display: 'none' } : {}, { width: width }, fontColor),
	                    activeColumn = _this6.state.activeColumn,
	                    iconType = _this6.state.sort.direction,
	                    imageStyleAsc = Object.assign({}, styles.image, activeColumn === column.id && iconType === 'asc' ? {} : { display: 'none' }),
	                    imageStyleDesc = Object.assign({}, styles.image, activeColumn === column.id && iconType === 'desc' ? {} : { display: 'none' });

	                // установить видимость
	                return React.createElement(
	                    'th',
	                    {
	                        style: style,
	                        ref: headerIndex,
	                        key: headerIndex,
	                        onClick: _this6.handleGridHeaderClick.bind(_this6, column.id) },
	                    React.createElement(
	                        'span',
	                        null,
	                        getTextValue(column.name)
	                    ),
	                    isHidden ? React.createElement('img', { ref: 'imageAsc', style: imageStyleAsc, src: styles.icons['asc'], alt: 'asc' }) : null,
	                    isHidden ? React.createElement('img', { ref: 'imageDesc', style: imageStyleDesc, src: styles.icons['desc'], alt: 'desc' }) : null
	                );
	            }, this);
	        }

	        /**
	         * расчет итогов
	         * @param columnField
	         * @param dec
	         * @returns {string}
	         */

	    }, {
	        key: 'getSum',
	        value: function getSum(columnField, dec) {
	            var total = 0;
	            var summa = 0;
	            if (this.state.gridData.length) {
	                this.state.gridData.forEach(function (row) {
	                    summa = row[columnField] && !isNaN(row[columnField]) ? Number(row[columnField]) : row[columnField] ? 1 : 0;
	                    total = total + Number(summa);
	                });
	            }

	            return total.toFixed(dec ? dec : 0);
	        }
	    }], [{
	        key: 'getDerivedStateFromProps',
	        value: function getDerivedStateFromProps(nextProps, prevState) {
	            return nextProps;
	            if (JSON.stringify(nextProps.gridData) !== JSON.stringify(prevState.gridData) || JSON.stringify(nextProps.gridColumns) !== JSON.stringify(prevState.gridColumns) || nextProps.gridData.length !== prevState.gridData.length || nextProps.isSelect !== prevState.isSelect) {
	                return { gridData: nextProps.gridData };
	            } else return null;
	        }
	    }]);

	    return DataGrid;
	}(React.Component);

	DataGrid.propTypes = {
	    gridColumns: PropTypes.arrayOf(PropTypes.shape({
	        id: PropTypes.string.isRequired,
	        name: PropTypes.string.isRequired,
	        width: PropTypes.string,
	        show: PropTypes.bool,
	        type: PropTypes.oneOf(['text', 'number', 'integer', 'date', 'string', 'select', 'boolean'])
	    })).isRequired,
	    gridData: PropTypes.array.isRequired,
	    onChangeAction: PropTypes.string,
	    onClick: PropTypes.func,
	    onDblClick: PropTypes.func,
	    onHeaderClick: PropTypes.func,
	    custom_styling: PropTypes.func,
	    activeRow: PropTypes.number,
	    handleGridCellClick: PropTypes.func,
	    showToolBar: PropTypes.bool,
	    subtotals: PropTypes.array
	};

	DataGrid.defaultProps = {
	    gridColumns: [],
	    gridData: [],
	    style: {},
	    showToolBar: false,
	    isForUpdate: false,
	    custom_styling: null,
	    subtotals: []
	};

	module.exports = DataGrid;

/***/ }),
/* 184 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var PropTypes = __webpack_require__(11);

	var React = __webpack_require__(10),
	    styles = __webpack_require__(74),
	    Button = __webpack_require__(75),
	    ICON = 'delete';

	var ButtonRegisterDelete = function (_React$PureComponent) {
	    _inherits(ButtonRegisterDelete, _React$PureComponent);

	    // кнопка создания документа в регистрах
	    function ButtonRegisterDelete(props) {
	        _classCallCheck(this, ButtonRegisterDelete);

	        return _possibleConstructorReturn(this, (ButtonRegisterDelete.__proto__ || Object.getPrototypeOf(ButtonRegisterDelete)).call(this, props));
	    }

	    _createClass(ButtonRegisterDelete, [{
	        key: 'handleClick',
	        value: function handleClick(e) {
	            return this.props.onClick('delete');
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var _this2 = this;

	            return React.createElement(
	                Button,
	                {
	                    value: 'Kustuta',
	                    ref: 'btnDelete',
	                    show: this.props.show,
	                    disabled: this.props.disabled,
	                    onClick: function onClick(e) {
	                        return _this2.handleClick(e);
	                    } },
	                React.createElement('img', { ref: 'image', src: styles.icons[ICON] })
	            );
	        }
	    }]);

	    return ButtonRegisterDelete;
	}(React.PureComponent);

	/*
	ButtonRegisterDelete.propTypes = {
	    onClick: PropTypes.func.isRequired
	}
	*/

	ButtonRegisterDelete.defaultProps = {
	    disabled: false,
	    show: true
	};

	module.exports = ButtonRegisterDelete;

/***/ }),
/* 185 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var PropTypes = __webpack_require__(11);

	var React = __webpack_require__(10),
	    ModalPage = __webpack_require__(171),
	    styles = __webpack_require__(186);

	var ModalPageDelete = function (_React$PureComponent) {
	    _inherits(ModalPageDelete, _React$PureComponent);

	    function ModalPageDelete(props) {
	        _classCallCheck(this, ModalPageDelete);

	        var _this = _possibleConstructorReturn(this, (ModalPageDelete.__proto__ || Object.getPrototypeOf(ModalPageDelete)).call(this, props));

	        _this.state = {
	            show: _this.props.show
	        };
	        return _this;
	    }

	    // will update state if props changed


	    _createClass(ModalPageDelete, [{
	        key: 'render',
	        value: function render() {
	            var modalObjects = ['btnOk', 'btnCancel'];

	            return React.createElement(
	                ModalPage,
	                { ref: 'modalPage',
	                    modalPageBtnClick: this.props.modalPageBtnClick,
	                    show: this.state.show,
	                    modalPageName: 'Delete document' },
	                React.createElement(
	                    'div',
	                    { ref: 'container' },
	                    React.createElement('img', { ref: 'image', src: styles.icon }),
	                    React.createElement(
	                        'span',
	                        { ref: 'message' },
	                        ' Kas kustuta dokument ? '
	                    )
	                )
	            );
	        }
	    }], [{
	        key: 'getDerivedStateFromProps',
	        value: function getDerivedStateFromProps(nextProps, prevState) {
	            if (nextProps.show !== prevState.show) {
	                return { show: nextProps.show };
	            } else return null;
	        }
	    }]);

	    return ModalPageDelete;
	}(React.PureComponent);
	/*
	ModalPageDelete.propTypes = {
	    modalPageBtnClick: PropTypes.func.isRequired
	}
	*/


	module.exports = ModalPageDelete;

/***/ }),
/* 186 */
/***/ (function(module, exports) {

	'use strict';module.exports={icon:'/images/icons/delete.png'};

/***/ }),
/* 187 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var PropTypes = __webpack_require__(11);
	var radium = __webpack_require__(88);

	var React = __webpack_require__(10),
	    styles = __webpack_require__(188);

	var Input = function (_React$PureComponent) {
	    _inherits(Input, _React$PureComponent);

	    function Input(props) {
	        _classCallCheck(this, Input);

	        var _this = _possibleConstructorReturn(this, (Input.__proto__ || Object.getPrototypeOf(Input)).call(this, props));

	        _this.state = {
	            value: Boolean(props.value),
	            readOnly: props.readOnly,
	            disabled: props.disabled
	        };
	        _this.onChange = _this.onChange.bind(_this);
	        return _this;
	    }

	    // will update state if props changed


	    _createClass(Input, [{
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            this.refs['checkbox'].checked = this.state.value;
	        }
	    }, {
	        key: 'onChange',
	        value: function onChange(e) {
	            var value = e.target.checked;

	            this.setState({ value: value });

	            if (!this.state.readOnly && this.props.onChange) {
	                this.props.onChange(this.props.name, value);
	            }
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var inputStyle = Object.assign({}, styles.input, this.props.width ? { width: this.props.width } : {}, this.state.readOnly ? styles.readOnly : {});

	            return React.createElement(
	                'div',
	                { style: styles.wrapper },
	                React.createElement(
	                    'label',
	                    { style: styles.label, htmlFor: this.props.name, ref: 'label' },
	                    this.props.title
	                ),
	                React.createElement('input', { type: 'checkbox',
	                    id: this.props.name,
	                    ref: 'checkbox',
	                    style: inputStyle,
	                    name: this.props.name,
	                    value: this.state.value,
	                    checked: this.state.value,
	                    readOnly: this.state.readOnly,
	                    onChange: this.onChange,
	                    disabled: this.state.readOnly
	                })
	            );
	        }

	        /**
	         * установит фокус на элементы
	         */

	    }, {
	        key: 'focus',
	        value: function focus() {
	            this.refs['checkbox'].focus();
	        }
	    }], [{
	        key: 'getDerivedStateFromProps',
	        value: function getDerivedStateFromProps(nextProps, prevState) {
	            if (nextProps.value !== prevState.value || nextProps.readOnly !== prevState.readOnly) {
	                return { value: nextProps.value, readOnly: nextProps.readOnly };
	            } else return null;
	        }
	    }]);

	    return Input;
	}(React.PureComponent);

	Input.propTypes = {
	    name: PropTypes.string.isRequired,
	    value: PropTypes.bool,
	    readOnly: PropTypes.bool,
	    disabled: PropTypes.bool,
	    title: PropTypes.string
	};

	Input.defaultProps = {
	    readOnly: false,
	    disabled: false,
	    value: false,
	    title: ''
	};

	module.exports = radium(Input);

/***/ }),
/* 188 */
/***/ (function(module, exports) {

	'use strict';module.exports={input:{':focus':{backgroundColor:'lightpink'}},readOnly:{backgroundColor:'#F3EFEF'},wrapper:{margin:'5px',display:'flex',width:'95%'},label:{width:'30%',margin:'5px'}};

/***/ }),
/* 189 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';Object.defineProperty(exports,"__esModule",{value:true});exports.ALL_PRINTABLE_KEYS=exports.ALL_KEYS=exports.Keys=exports.setBinding=exports.keydownScoped=exports.default=undefined;var _decorators=__webpack_require__(190);Object.defineProperty(exports,'default',{enumerable:true,get:function get(){return _interopRequireDefault(_decorators).default;}});Object.defineProperty(exports,'keydownScoped',{enumerable:true,get:function get(){return _decorators.keydownScoped;}});var _store=__webpack_require__(192);Object.defineProperty(exports,'setBinding',{enumerable:true,get:function get(){return _store.setBinding;}});var _keys=__webpack_require__(194);Object.defineProperty(exports,'Keys',{enumerable:true,get:function get(){return _interopRequireDefault(_keys).default;}});Object.defineProperty(exports,'ALL_KEYS',{enumerable:true,get:function get(){return _keys.ALL_KEYS;}});Object.defineProperty(exports,'ALL_PRINTABLE_KEYS',{enumerable:true,get:function get(){return _keys.ALL_PRINTABLE_KEYS;}});__webpack_require__(202);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}

/***/ }),
/* 190 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';var _typeof2=typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"?function(obj){return typeof obj;}:function(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;};Object.defineProperty(exports,"__esModule",{value:true});exports.keydownScoped=undefined;var _typeof=typeof Symbol==="function"&&_typeof2(Symbol.iterator)==="symbol"?function(obj){return typeof obj==="undefined"?"undefined":_typeof2(obj);}:function(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj==="undefined"?"undefined":_typeof2(obj);};/**
	                                                                                                                                                                                                                                                                               * @module decorators
	                                                                                                                                                                                                                                                                               *
	                                                                                                                                                                                                                                                                               */var _class_decorator=__webpack_require__(191);var _class_decorator2=_interopRequireDefault(_class_decorator);var _method_decorator=__webpack_require__(200);var _method_decorator2=_interopRequireDefault(_method_decorator);var _method_decorator_scoped=__webpack_require__(201);var _method_decorator_scoped2=_interopRequireDefault(_method_decorator_scoped);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}/**
	 * noopDecorator
	 *
	 * @access private
	 * @return {undefined} Returns `undefined` so that the original undecorated instance/method is used
	 */function noopDecorator(){return undefined;}/**
	 * _decorator
	 *
	 * @access private
	 * @param {Function} methodFn The method wrapper to delegate to, based on whether user has specified a scoped decorator or not
	 * @param {Array} ...args Remainder of arguments passed in
	 * @return {Function} The decorated class or method
	 */function _decorator(methodFn){for(var _len=arguments.length,args=Array(_len>1?_len-1:0),_key=1;_key<_len;_key++){args[_key-1]=arguments[_key];}// check the first argument to see if it's a user-supplied keycode or array
	// of keycodes, or if it's the wrapped class or method
	var testArg=args[0];var isArray=Array.isArray(testArg);// if the test argument is not an object or function, it is user-supplied
	// keycodes. else there are no arguments and it's just the wrapped class
	if(isArray||~['string','number','symbol'].indexOf(typeof testArg==='undefined'?'undefined':_typeof(testArg))){var keys=isArray?testArg:args;// return the decorator function, which on the next call will look for
	// the presence of a method name to determine if this is a wrapped method
	// or component
	return function(target,methodName,descriptor){return methodName?methodFn({target:target,descriptor:descriptor,keys:keys}):(0,_class_decorator2.default)(target,keys);};}else{var WrappedComponent=args[0];var methodName=args[1];// method decorators without keycode (which) arguments are not allowed.
	if(WrappedComponent&&!methodName){return _class_decorator2.default.apply(undefined,args);}else{console.warn(methodName+': Method decorators must have keycode arguments, so the decorator for this method will not do anything');return noopDecorator;}}}/**
	 * keydownScoped
	 *
	 * Method decorator that will look for changes to its targeted component's
	 * `keydown` props to decide when to trigger, rather than responding directly
	 * to keydown events. This lets you specify a @keydown decorated class higher
	 * up in the view hierarchy for larger scoping of keydown events, or for
	 * programmatically sending keydown events as props into the components in order
	 * to trigger decorated methods with matching keys.
	 *
	 * @access public
	 * @param {Array} ...args  All (or no) arguments passed in from decoration
	 * @return {Function} The decorated class or method
	 */function keydownScoped(){for(var _len2=arguments.length,args=Array(_len2),_key2=0;_key2<_len2;_key2++){args[_key2]=arguments[_key2];}return _decorator.apply(undefined,[_method_decorator_scoped2.default].concat(args));}/**
	 * keydown
	 *
	 * The main decorator and default export, handles both classes and methods.
	 *
	 * @access public
	 * @param {Array} ...args  All (or no) arguments passed in from decoration
	 * @return {Function} The decorated class or method
	 */function keydown(){for(var _len3=arguments.length,args=Array(_len3),_key3=0;_key3<_len3;_key3++){args[_key3]=arguments[_key3];}return _decorator.apply(undefined,[_method_decorator2.default].concat(args));}exports.default=keydown;exports.keydownScoped=keydownScoped;

/***/ }),
/* 191 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';var _typeof=typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"?function(obj){return typeof obj;}:function(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;};Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _react=__webpack_require__(10);var _react2=_interopRequireDefault(_react);var _store=__webpack_require__(192);var store=_interopRequireWildcard(_store);var _event_handlers=__webpack_require__(197);var _keys=__webpack_require__(194);function _interopRequireWildcard(obj){if(obj&&obj.__esModule){return obj;}else{var newObj={};if(obj!=null){for(var key in obj){if(Object.prototype.hasOwnProperty.call(obj,key))newObj[key]=obj[key];}}newObj.default=obj;return newObj;}}function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&((typeof call==="undefined"?"undefined":_typeof(call))==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+(typeof superClass==="undefined"?"undefined":_typeof(superClass)));}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}/**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @module componentWrapper
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *//**
	 * componentWrapper
	 *
	 * @access public
	 * @param {object} WrappedComponent React component class to be wrapped
	 * @param {array} [keys] The key(s) bound to the class
	 * @return {object} The higher-order function that wraps the decorated class
	 */function componentWrapper(WrappedComponent){var keys=arguments.length>1&&arguments[1]!==undefined?arguments[1]:_keys.ALL_KEYS;var KeyBoardHelper=function(_React$Component){_inherits(KeyBoardHelper,_React$Component);function KeyBoardHelper(props){_classCallCheck(this,KeyBoardHelper);var _this=_possibleConstructorReturn(this,(KeyBoardHelper.__proto__||Object.getPrototypeOf(KeyBoardHelper)).call(this,props));_this.state={event:null};return _this;}_createClass(KeyBoardHelper,[{key:'componentDidMount',value:function componentDidMount(){(0,_event_handlers.onMount)(this);}},{key:'componentWillUnmount',value:function componentWillUnmount(){(0,_event_handlers.onUnmount)(this);}},{key:'handleKeyDown',value:function handleKeyDown(event){var _this2=this;// to simulate a keypress, set the event and then clear it in the callback
	this.setState({event:event},function(){return _this2.setState({event:null});});}},{key:'render',value:function render(){return _react2.default.createElement(WrappedComponent,_extends({},this.props,{keydown:this.state}));}}]);return KeyBoardHelper;}(_react2.default.Component);store.setBinding({keys:[].concat(keys),fn:KeyBoardHelper.prototype.handleKeyDown,target:KeyBoardHelper.prototype});return KeyBoardHelper;}exports.default=componentWrapper;

/***/ }),
/* 192 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _slicedToArray=function(){function sliceIterator(arr,i){var _arr=[];var _n=true;var _d=false;var _e=undefined;try{for(var _i=arr[Symbol.iterator](),_s;!(_n=(_s=_i.next()).done);_n=true){_arr.push(_s.value);if(i&&_arr.length===i)break;}}catch(err){_d=true;_e=err;}finally{try{if(!_n&&_i["return"])_i["return"]();}finally{if(_d)throw _e;}}return _arr;}return function(arr,i){if(Array.isArray(arr)){return arr;}else if(Symbol.iterator in Object(arr)){return sliceIterator(arr,i);}else{throw new TypeError("Invalid attempt to destructure non-iterable instance");}};}();exports._resetStore=_resetStore;exports.activate=activate;exports.deleteInstance=deleteInstance;exports.findBindingForEvent=findBindingForEvent;exports.getBinding=getBinding;exports.getInstances=getInstances;exports.isEmpty=isEmpty;exports.setBinding=setBinding;var _match_keys=__webpack_require__(193);var _match_keys2=_interopRequireDefault(_match_keys);var _parse_keys=__webpack_require__(195);var _parse_keys2=_interopRequireDefault(_parse_keys);var _uuid=__webpack_require__(196);var _uuid2=_interopRequireDefault(_uuid);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _toConsumableArray(arr){if(Array.isArray(arr)){for(var i=0,arr2=Array(arr.length);i<arr.length;i++){arr2[i]=arr[i];}return arr2;}else{return Array.from(arr);}}/**
	                                                                                                                                                                                                     * @module store
	                                                                                                                                                                                                     *
	                                                                                                                                                                                                     *//**
	 * private
	 *
	 */// dict for class prototypes => bindings
	var _handlers=new Map();// all mounted instances that have keybindings
	var _instances=new Set();// for testing
	function _resetStore(){_handlers.clear();_instances.clear();}/**
	 * activate
	 *
	 * @access public
	 * @param {object} instance Instantiated class that extended React.Component, to be focused to receive keydown events
	 */function activate(instances){var instancesArray=[].concat(instances);// if no components were found as ancestors of the event target,
	// effectively deactivate keydown handling by capping the set of instances
	// with `null`.
	if(!instancesArray.length){_instances.add(null);}else{_instances.delete(null);// deleting and then adding the instance(s) has the effect of sorting the set
	// according to instance activation (ascending)
	instancesArray.forEach(function(instance){_instances.delete(instance);_instances.add(instance);});}};/**
	 * deleteInstance
	 *
	 * @access public
	 * @param {object} target Instantiated class that extended React.Component
	 * @return {boolean} The value set.has( target ) would have returned prior to deletion
	 */function deleteInstance(target){_instances.delete(target);};function findBindingForEvent(event){if(!_instances.has(null)){var keyMatchesEvent=function keyMatchesEvent(keySet){return(0,_match_keys2.default)({keySet:keySet,event:event});};// loop through instances in reverse activation order so that most
	// recently activated instance gets first dibs on event
	var _iteratorNormalCompletion=true;var _didIteratorError=false;var _iteratorError=undefined;try{for(var _iterator=[].concat(_toConsumableArray(_instances)).reverse()[Symbol.iterator](),_step;!(_iteratorNormalCompletion=(_step=_iterator.next()).done);_iteratorNormalCompletion=true){var instance=_step.value;var bindings=getBinding(instance.constructor.prototype);var _iteratorNormalCompletion2=true;var _didIteratorError2=false;var _iteratorError2=undefined;try{for(var _iterator2=bindings[Symbol.iterator](),_step2;!(_iteratorNormalCompletion2=(_step2=_iterator2.next()).done);_iteratorNormalCompletion2=true){var _step2$value=_slicedToArray(_step2.value,2),keySets=_step2$value[0],fn=_step2$value[1];if(keySets.some(keyMatchesEvent)){// return when matching keybinding is found - i.e. only one
	// keybound component can respond to a given key code. to get around this,
	// scope a common ancestor component class with @keydown and use
	// @keydownScoped to bind the duplicate keys in your child components
	// (or just inspect nextProps.keydown.event).
	return{fn:fn,instance:instance};}}}catch(err){_didIteratorError2=true;_iteratorError2=err;}finally{try{if(!_iteratorNormalCompletion2&&_iterator2.return){_iterator2.return();}}finally{if(_didIteratorError2){throw _iteratorError2;}}}}}catch(err){_didIteratorError=true;_iteratorError=err;}finally{try{if(!_iteratorNormalCompletion&&_iterator.return){_iterator.return();}}finally{if(_didIteratorError){throw _iteratorError;}}}}return null;};/**
	 * getBinding
	 *
	 * @access public
	 * @param {object} target Class used as key in dict of key bindings
	 * @return {object} The object containing bindings for the given class
	 */function getBinding(_ref){var __reactKeydownUUID=_ref.__reactKeydownUUID;return _handlers.get(__reactKeydownUUID);};/**
	 * getInstances
	 *
	 * @access public
	 * @return {set} All stored instances (all mounted component instances with keybindings)
	 */function getInstances(){return _instances;};/**
	 * isEmpty
	 *
	 * @access public
	 * @return {number} Size of the set of all stored instances
	 */function isEmpty(){return!_instances.size;};/**
	 * setBinding
	 *
	 * @access public
	 * @param {object} args All arguments necessary to set the binding
	 * @param {array} args.keys Key codes that should trigger the fn
	 * @param {function} args.fn The callback to be triggered when given keys are pressed
	 * @param {object} args.target The decorated class
	 */function setBinding(_ref2){var keys=_ref2.keys,fn=_ref2.fn,target=_ref2.target;var keySets=(0,_parse_keys2.default)(keys);var __reactKeydownUUID=target.__reactKeydownUUID;if(!__reactKeydownUUID){target.__reactKeydownUUID=(0,_uuid2.default)();_handlers.set(target.__reactKeydownUUID,new Map([[keySets,fn]]));}else{_handlers.get(__reactKeydownUUID).set(keySets,fn);}};

/***/ }),
/* 193 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _keys=__webpack_require__(194);var PRINTABLE_CHARACTERS='0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ~!@#$%^&*()-_+=[]\\{}|;\':",./<>?£';var modKeys=Object.keys(_keys.modifiers);function matchKeys(_ref){var keySet=_ref.keySet,event=_ref.event;var key=keySet.key,_keySet$modifiers=keySet.modifiers,modifiers=_keySet$modifiers===undefined?[]:_keySet$modifiers;var keysMatch=void 0;keysMatch=key===_keys.ALL_KEYS;if(key===_keys.ALL_PRINTABLE_KEYS){if(event.key){// Modern browsers implement `key`, so if `key` is length 1, we have a match. e.g. 'a' for the
	// a key, or '2' for the 2 key. All other non-printable characters have names, e.g. 'Enter' or 'Backspace'.
	keysMatch=event.key.length===1;}else{// For browsers that do no support `event.key`, we test against a list of characters
	var pressedChar=String.fromCharCode(event.charCode);keysMatch=PRINTABLE_CHARACTERS.indexOf(pressedChar)>=0;}}if(key===event.which){var evtModKeys=modKeys.filter(function(modKey){return event[modKey+'Key'];}).sort();keysMatch=modifiers.length===evtModKeys.length&&modifiers.every(function(modKey,index){return evtModKeys[index]===modKey;});}return keysMatch;}exports.default=matchKeys;

/***/ }),
/* 194 */
/***/ (function(module, exports) {

	'use strict';Object.defineProperty(exports,"__esModule",{value:true});// TODO: Need better, more complete, and more methodical key definitions
	var Keys={backspace:8,del:46,delete:46,tab:9,enter:13,'return':13,esc:27,space:32,pageUp:33,pageDown:34,end:35,home:36,left:37,up:38,right:39,down:40,';':186,'=':187,',':188,'-':189,'.':190,'/':191,'`':192,'[':219,'\\':220,']':221};// Add uppercase versions of keys above for backwards compatibility
	Object.keys(Keys).forEach(function(key){return Keys[key.toUpperCase()]=Keys[key];});'0123456789'.split('').forEach(function(num,index){return Keys[num]=index+48;});'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').forEach(function(letter,index){Keys[letter]=index+65;Keys[letter.toLowerCase()]=index+65;});// fn keys
	[1,2,3,4,5,6,7,8,9,10,11,12].forEach(function(item,index){return Keys['f'+index]=111+index;});var modifiers=exports.modifiers={control:'ctrl',ctrl:'ctrl',shift:'shift',meta:'meta',cmd:'meta',command:'meta',option:'alt',alt:'alt'};var ALL_KEYS=exports.ALL_KEYS=Symbol('ALL_KEYS');var ALL_PRINTABLE_KEYS=exports.ALL_PRINTABLE_KEYS=Symbol('ALL_PRINTABLE_KEYS');exports.default=Keys;

/***/ }),
/* 195 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _keys=__webpack_require__(194);var _keys2=_interopRequireDefault(_keys);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function parseKeys(keysArray){return keysArray.map(function(key){var keySet={key:key};if(typeof key==='string'){var keyString=key.toLowerCase().trim();var matches=keyString.split(/\s?\+\s?/);keySet=matches.length===1?{key:_keys2.default[keyString]}:{key:_keys2.default[matches.pop()],modifiers:matches.map(function(modKey){return _keys.modifiers[modKey];}).sort()};}return keySet;});}exports.default=parseKeys;

/***/ }),
/* 196 */
/***/ (function(module, exports) {

	"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports.default=uuid;// Counter being incremented. JS is single-threaded, so it'll Just Work™.
	var __counter=1;/**
	 * Returns a process-wide unique identifier.
	 */function uuid(){return"uid-"+__counter++;}

/***/ }),
/* 197 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';Object.defineProperty(exports,"__esModule",{value:true});exports.onUnmount=exports.onMount=undefined;exports._onClick=_onClick;exports._onKeyDown=_onKeyDown;exports._shouldConsider=_shouldConsider;var _dom_helpers=__webpack_require__(198);var _dom_helpers2=_interopRequireDefault(_dom_helpers);var _listeners=__webpack_require__(199);var _listeners2=_interopRequireDefault(_listeners);var _store=__webpack_require__(192);var store=_interopRequireWildcard(_store);function _interopRequireWildcard(obj){if(obj&&obj.__esModule){return obj;}else{var newObj={};if(obj!=null){for(var key in obj){if(Object.prototype.hasOwnProperty.call(obj,key))newObj[key]=obj[key];}}newObj.default=obj;return newObj;}}function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _toConsumableArray(arr){if(Array.isArray(arr)){for(var i=0,arr2=Array(arr.length);i<arr.length;i++){arr2[i]=arr[i];}return arr2;}else{return Array.from(arr);}}/* eslint-disable no-use-before-define *//**
	 * @module eventHandlers
	 *
	 *//**
	 * private
	 *
	 *//**
	 * _onClick
	 *
	 * @access private
	 * @param {object} event The click event object
	 * @param {object} event.target The DOM node from the click event
	 */function _onClick(_ref){var target=_ref.target;store.activate([].concat(_toConsumableArray(store.getInstances())).reduce(_dom_helpers2.default.findContainerNodes(target),[]).sort(_dom_helpers2.default.sortByDOMPosition).map(function(item){return item.instance;}));}/**
	 * _onKeyDown: The keydown event callback
	 *
	 * @access private
	 * @param {object} event The keydown event object
	 * @param {number} event.which The key code (which) received from the keydown event
	 */function _onKeyDown(event){var forceConsider=arguments.length>1&&arguments[1]!==undefined?arguments[1]:false;if(forceConsider||_shouldConsider(event)){var _ref2=store.findBindingForEvent(event)||{},fn=_ref2.fn,instance=_ref2.instance;if(fn){fn.call(instance,event);return true;}}return false;}/**
	 * _shouldConsider: Conditions for proceeding with key event handling
	 *
	 * @access private
	 * @param {object} event The keydown event object
	 * @param {object} event.target The node origin of the event
	 * @return {boolean} Whether to continue procesing the keydown event
	 */function _shouldConsider(_ref3){var ctrlKey=_ref3.ctrlKey,target=_ref3.target;return ctrlKey||!~['INPUT','SELECT','TEXTAREA'].indexOf(target.tagName)&&(!target.getAttribute||target.getAttribute('role')!=='textbox');}/**
	 * public
	 *
	 *//**
	 * onMount
	 *
	 * @access public
	 */function onMount(instance){store.activate(instance);_listeners2.default.bindKeys(_onKeyDown);_listeners2.default.bindClicks(_onClick);_dom_helpers2.default.bindFocusables(instance,store.activate);}/**
	 * onUnmount
	 *
	 * @access public
	 */function onUnmount(instance){store.deleteInstance(instance);if(store.isEmpty()){_listeners2.default.unbindClicks(_onClick);_listeners2.default.unbindKeys(_onKeyDown);}}exports.onMount=onMount;exports.onUnmount=onUnmount;

/***/ }),
/* 198 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _reactDom=__webpack_require__(4);var _reactDom2=_interopRequireDefault(_reactDom);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var focusableSelector='a[href], button, input, object, select, textarea, [tabindex]';/**
	 * bindFocusables: Find any focusable child elements of the component instance and
	 * add an onFocus handler to focus our keydown handlers on the parent component
	 * when user keys applies focus to the element.
	 *
	 * NOTE: One limitation of this right now is that if you tab out of the
	 * component, _focusedInstance will still be set until next click or mount or
	 * controlled focus.
	 *
	 * @access public
	 * @param {object} instance The key-bound component instance
	 * @param {callback} activateOnFocus The fn to fire when element is focused
	 *//**
	 * @module domHelpers
	 *
	 */function bindFocusables(instance,activateOnFocus){if(document.querySelectorAll){try{var node=_reactDom2.default.findDOMNode(instance);if(node){var focusables=node.querySelectorAll(focusableSelector);if(focusables.length){var onFocus=function onFocus(element){var onFocusPrev=element.onfocus;return function(event){activateOnFocus(instance);if(onFocusPrev)onFocusPrev.call(element,event);};};Array.prototype.slice.call(focusables).forEach(function(element){return element.onfocus=onFocus(element);});}}}catch(error){// noop, mostly suppressing error here https://github.com/glortho/react-keydown/issues/76
	}}}/**
	 * findContainerNodes: Called by our click handler to find instances with nodes
	 * that are equal to or that contain the click target. Any that pass this test
	 * will be recipients of the next keydown event.
	 *
	 * @access public
	 * @param {object} target The click event.target DOM element
	 * @return {function} Reducer function
	 */function findContainerNodes(target){return function(memo,instance){try{var node=_reactDom2.default.findDOMNode(instance);if(node&&(node===target||node.contains(target))){memo.push({instance:instance,node:node});}}finally{return memo;}};}/**
	 * sortByDOMPosition: Called by our click handler to sort a list of instances
	 * according to least -> most nested. This is so that if multiple keybound
	 * instances have nodes that are ancestors of the click target, they will be
	 * sorted to let the instance closest to the click target get first dibs on the
	 * next key down event.
	 */function sortByDOMPosition(a,b){return a.node.compareDocumentPosition(b.node)===10?1:-1;}exports.default={bindFocusables:bindFocusables,findContainerNodes:findContainerNodes,sortByDOMPosition:sortByDOMPosition};

/***/ }),
/* 199 */
/***/ (function(module, exports) {

	'use strict';Object.defineProperty(exports,"__esModule",{value:true});/**
	 * @module Listeners
	 *
	 */// flag for whether click listener has been bound to document
	var _clicksBound=false;// flag for whether keydown listener has been bound to document
	var _keysBound=false;var Listeners={/**
	   * _bindKeys
	   *
	   * @access public
	   */bindKeys:function bindKeys(callback){if(!_keysBound){document.addEventListener('keydown',callback);_keysBound=true;}},/**
	   * unbindKeys
	   *
	   * @access public
	   */unbindKeys:function unbindKeys(callback){if(_keysBound){document.removeEventListener('keydown',callback);_keysBound=false;}},/**
	   * bindClicks
	   *
	   * @access public
	   */bindClicks:function bindClicks(callback){if(!_clicksBound){document.addEventListener('click',callback,true);_clicksBound=true;}},/**
	   * unbindClicks
	   *
	   * @access public
	   */unbindClicks:function unbindClicks(callback){if(_clicksBound){document.removeEventListener('click',callback,true);_clicksBound=false;}}};exports.default=Listeners;

/***/ }),
/* 200 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';var _typeof2=typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"?function(obj){return typeof obj;}:function(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;};Object.defineProperty(exports,"__esModule",{value:true});var _typeof=typeof Symbol==="function"&&_typeof2(Symbol.iterator)==="symbol"?function(obj){return typeof obj==="undefined"?"undefined":_typeof2(obj);}:function(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj==="undefined"?"undefined":_typeof2(obj);};/**
	                                                                                                                                                                                                                                                                               * @module methodWrapper
	                                                                                                                                                                                                                                                                               *
	                                                                                                                                                                                                                                                                               */var _store=__webpack_require__(192);var store=_interopRequireWildcard(_store);var _event_handlers=__webpack_require__(197);function _interopRequireWildcard(obj){if(obj&&obj.__esModule){return obj;}else{var newObj={};if(obj!=null){for(var key in obj){if(Object.prototype.hasOwnProperty.call(obj,key))newObj[key]=obj[key];}}newObj.default=obj;return newObj;}}/**
	 * _isReactKeyDown
	 *
	 * @access private
	 * @param {object} event The possibly synthetic event passed as an argument with
	 * the method invocation.
	 * @return {boolean}
	 */function _isReactKeyDown(event){return event&&(typeof event==='undefined'?'undefined':_typeof(event))==='object'&&event.nativeEvent instanceof window.KeyboardEvent&&event.type==='keydown';}/**
	 * methodWrapper
	 *
	 * @access public
	 * @param {object} args All arguments necessary for wrapping method
	 * @param {object} args.target The decorated class
	 * @param {object} args.descriptor Method descriptor
	 * @param {array} args.keys The array of keys bound to the given method
	 * @return {object} The method descriptor
	 */function methodWrapper(_ref){var target=_ref.target,descriptor=_ref.descriptor,keys=_ref.keys;var fn=descriptor.value;// if we haven't already created a binding for this class (via another
	// decorated method), wrap these lifecycle methods.
	if(!store.getBinding(target)){var componentDidMount=target.componentDidMount,componentWillUnmount=target.componentWillUnmount;target.componentDidMount=function(){(0,_event_handlers.onMount)(this);if(componentDidMount)return componentDidMount.call(this);};target.componentWillUnmount=function(){(0,_event_handlers.onUnmount)(this);if(componentWillUnmount)return componentWillUnmount.call(this);};}// add this binding of keys and method to the target's bindings
	store.setBinding({keys:keys,target:target,fn:fn});descriptor.value=function(){for(var _len=arguments.length,args=Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}var maybeEvent=args[0];if(_isReactKeyDown(maybeEvent)){// proxy method in order to use @keydown as filter for keydown events coming
	// from an actual onKeyDown binding (as identified by react's addition of
	// 'nativeEvent' + type === 'keydown')
	if(!maybeEvent.ctrlKey){// we already whitelist shortcuts with ctrl modifiers so if we were to
	// fire it again here the method would trigger twice. see https://github.com/glortho/react-keydown/issues/38
	return(0,_event_handlers._onKeyDown)(maybeEvent,true);}}else if(!maybeEvent||!(maybeEvent instanceof window.KeyboardEvent)||maybeEvent.type!=='keydown'){// if our first argument is a keydown event it is being handled by our
	// binding system. if it's anything else, just pass through.
	return fn.call.apply(fn,[this].concat(args));}};return descriptor;}exports.default=methodWrapper;

/***/ }),
/* 201 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _match_keys=__webpack_require__(193);var _match_keys2=_interopRequireDefault(_match_keys);var _parse_keys=__webpack_require__(195);var _parse_keys2=_interopRequireDefault(_parse_keys);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}/**
	 * methodWrapperScoped
	 *
	 * @access public
	 * @param {object} args All args necessary for decorating the method
	 * @param {object} args.target The decorated method's class object
	 * @param {object} args.descriptor The method's descriptor object
	 * @param {array} args.keys The key codes bound to the decorated method
	 * @return {object} The method's descriptor object
	 *//**
	 * @module methodWrapperScoped
	 *
	 */function methodWrapperScoped(_ref){var target=_ref.target,descriptor=_ref.descriptor,keys=_ref.keys;var componentWillReceiveProps=target.componentWillReceiveProps;var fn=descriptor.value;if(!keys){console.warn(fn+': keydownScoped requires one or more keys');}else{/**
	     * _shouldTrigger
	     *
	     * @access private
	     * @param {object} thisProps Exsting props from the wrapped component
	     * @param {object} thisProps.keydown The namespaced state from the higher-order
	     * component (class_decorator)
	     * @param {object} nextProps The incoming props from the wrapped component
	     * @param {object} nextProps.keydown The namescaped state from the higher-order
	     * component (class_decorator)
	     * @param {array} keys The keys bound to the decorated method
	     * @return {boolean} Whether all tests have passed
	     */var _shouldTrigger=function _shouldTrigger(keydownThis,keydownNext){if(!(keydownNext&&keydownNext.event&&!keydownThis.event))return false;return keySets.some(function(keySet){return(0,_match_keys2.default)({keySet:keySet,event:keydownNext.event});});};// wrap the component's lifecycle method to intercept key codes coming down
	// from the wrapped/scoped component up the view hierarchy. if new keydown
	// event has arrived and the key codes match what was specified in the
	// decorator, call the wrapped method.
	var keySets=(0,_parse_keys2.default)(keys);target.componentWillReceiveProps=function(nextProps){var keydownNext=nextProps.keydown;var keydownThis=this.props.keydown;if(_shouldTrigger(keydownThis,keydownNext)){return fn.call(this,keydownNext.event);}for(var _len=arguments.length,args=Array(_len>1?_len-1:0),_key=1;_key<_len;_key++){args[_key-1]=arguments[_key];}if(componentWillReceiveProps)return componentWillReceiveProps.call.apply(componentWillReceiveProps,[this,nextProps].concat(args));};}return descriptor;}exports.default=methodWrapperScoped;

/***/ }),
/* 202 */
/***/ (function(module, exports) {

	'use strict';// Production steps of ECMA-262, Edition 6, 22.1.2.1
	// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from
	if(!Array.from){Array.from=function(){var toStr=Object.prototype.toString;var isCallable=function isCallable(fn){return typeof fn==='function'||toStr.call(fn)==='[object Function]';};var toInteger=function toInteger(value){var number=Number(value);if(isNaN(number)){return 0;}if(number===0||!isFinite(number)){return number;}return(number>0?1:-1)*Math.floor(Math.abs(number));};var maxSafeInteger=Math.pow(2,53)-1;var toLength=function toLength(value){var len=toInteger(value);return Math.min(Math.max(len,0),maxSafeInteger);};// The length property of the from method is 1.
	return function from(arrayLike/*, mapFn, thisArg */){// 1. Let C be the this value.
	var C=this;// 2. Let items be ToObject(arrayLike).
	var items=Object(arrayLike);// 3. ReturnIfAbrupt(items).
	if(arrayLike==null){throw new TypeError("Array.from requires an array-like object - not null or undefined");}// 4. If mapfn is undefined, then let mapping be false.
	var mapFn=arguments.length>1?arguments[1]:void undefined;var T;if(typeof mapFn!=='undefined'){// 5. else
	// 5. a If IsCallable(mapfn) is false, throw a TypeError exception.
	if(!isCallable(mapFn)){throw new TypeError('Array.from: when provided, the second argument must be a function');}// 5. b. If thisArg was supplied, let T be thisArg; else let T be undefined.
	if(arguments.length>2){T=arguments[2];}}// 10. Let lenValue be Get(items, "length").
	// 11. Let len be ToLength(lenValue).
	var len=toLength(items.length);// 13. If IsConstructor(C) is true, then
	// 13. a. Let A be the result of calling the [[Construct]] internal method 
	// of C with an argument list containing the single item len.
	// 14. a. Else, Let A be ArrayCreate(len).
	var A=isCallable(C)?Object(new C(len)):new Array(len);// 16. Let k be 0.
	var k=0;// 17. Repeat, while k < len… (also steps a - h)
	var kValue;while(k<len){kValue=items[k];if(mapFn){A[k]=typeof T==='undefined'?mapFn(kValue,k):mapFn.call(T,kValue,k);}else{A[k]=kValue;}k+=1;}// 18. Let putStatus be Put(A, "length", len, true).
	A.length=len;// 20. Return A.
	return A;};}();}

/***/ }),
/* 203 */
/***/ (function(module, exports) {

	'use strict';module.exports={mainTable:{tableLayout:'fixed',width:'-webkit-calc(100% + 16px)',borderCollapse:'collapse',marginBottom:'20px'},headerTable:{tableLayout:'fixed',width:'100%',borderCollapse:'collapse'},footerTable:{tableLayout:'fixed',width:'100%',borderCollapse:'collapse'},th:{borderBottom:'1px solid black',backgroundColor:'grey',height:'30px',border:'1px solid lightgray',display:'table-cell',color:'black',boldColor:'red'},thHidden:{borderBottom:'1px solid black',backgroundColor:'grey',height:'1px',border:'1px solid lightgray',display:'table-cell'},tr:{backgroundColor:'white'},focused:{backgroundColor:'lightblue'},td:{border:'1px solid lightgray',display:'table-cell',paddingLeft:'5px'},icons:{asc:'/images/icons/sort-alpha-asc.png',desc:'/images/icons/sort-alpha-desc.png'},image:{margin:'1px'},wrapper:{height:'inherit',overflow:'auto',minHeight:'100px'},main:{height:'inherit'},header:{overflow:'hidden'},boolSumbol:{yes:{value:'\u2714',color:'green'},no:{//value: '\u2716',
	color:null},null:{value:'-',color:null}},boolColour:{yes:null,no:null}};

/***/ }),
/* 204 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var PropTypes = __webpack_require__(11);

	var React = __webpack_require__(10),
	    styles = __webpack_require__(74),
	    Button = __webpack_require__(75),
	    ICON = 'print';

	var ButtonRegisterPrint = function (_React$PureComponent) {
	    _inherits(ButtonRegisterPrint, _React$PureComponent);

	    // кнопка создания документа в регистрах
	    function ButtonRegisterPrint(props) {
	        _classCallCheck(this, ButtonRegisterPrint);

	        return _possibleConstructorReturn(this, (ButtonRegisterPrint.__proto__ || Object.getPrototypeOf(ButtonRegisterPrint)).call(this, props));
	    }

	    _createClass(ButtonRegisterPrint, [{
	        key: 'handleClick',
	        value: function handleClick(e) {
	            return this.props.onClick(this.props.value);
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var _this2 = this;

	            return React.createElement(
	                Button,
	                {
	                    ref: 'btnPrint',
	                    value: this.props.value,
	                    show: this.props.show,
	                    disabled: this.props.disabled,
	                    onClick: function onClick(e) {
	                        return _this2.handleClick(e);
	                    } },
	                React.createElement('img', { ref: 'image', src: styles.icons[ICON] })
	            );
	        }
	    }]);

	    return ButtonRegisterPrint;
	}(React.PureComponent);

	/*
	ButtonRegisterPrint.propTypes = {
	    onClick: PropTypes.func.isRequired
	}
	*/

	ButtonRegisterPrint.defaultProps = {
	    disabled: false,
	    show: true,
	    value: 'Print'
	};

	module.exports = ButtonRegisterPrint;

/***/ }),
/* 205 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var PropTypes = __webpack_require__(11);

	var React = __webpack_require__(10),
	    styles = __webpack_require__(74),
	    Button = __webpack_require__(75),
	    ICON = 'attachment';

	var ButtonPdf = function (_React$PureComponent) {
	    _inherits(ButtonPdf, _React$PureComponent);

	    // кнопка вызова файла влодения в формате PDF
	    function ButtonPdf(props) {
	        _classCallCheck(this, ButtonPdf);

	        return _possibleConstructorReturn(this, (ButtonPdf.__proto__ || Object.getPrototypeOf(ButtonPdf)).call(this, props));
	    }

	    _createClass(ButtonPdf, [{
	        key: 'handleClick',
	        value: function handleClick(e) {
	            if (this.props.onClick()) {
	                return this.props.onClick();
	            }
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var _this2 = this;

	            return React.createElement(
	                Button,
	                {
	                    ref: 'btnGetPdf',
	                    value: this.props.value ? this.props.value : 'PDF',
	                    onClick: function onClick(e) {
	                        return _this2.handleClick(e);
	                    } },
	                React.createElement('img', { ref: 'image', src: styles.icons[ICON] })
	            );
	        }
	    }]);

	    return ButtonPdf;
	}(React.PureComponent);

	ButtonPdf.defaultProps = {
	    disabled: false,
	    show: true
	};
	module.exports = ButtonPdf;

/***/ }),
/* 206 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var PropTypes = __webpack_require__(11);

	var React = __webpack_require__(10),
	    styles = __webpack_require__(74),
	    Button = __webpack_require__(75),
	    ICON = 'filter';

	var ButtonRegisterFilter = function (_React$PureComponent) {
	    _inherits(ButtonRegisterFilter, _React$PureComponent);

	    // кнопка создания документа в регистрах
	    function ButtonRegisterFilter(props) {
	        _classCallCheck(this, ButtonRegisterFilter);

	        return _possibleConstructorReturn(this, (ButtonRegisterFilter.__proto__ || Object.getPrototypeOf(ButtonRegisterFilter)).call(this, props));
	    }

	    _createClass(ButtonRegisterFilter, [{
	        key: 'handleClick',
	        value: function handleClick(e) {
	            return this.props.onClick();
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var _this2 = this;

	            return React.createElement(
	                Button,
	                {
	                    ref: 'btnFilter',
	                    value: 'Filter',
	                    show: this.props.show,
	                    disabled: this.props.disabled,
	                    onClick: function onClick(e) {
	                        return _this2.handleClick(e);
	                    } },
	                React.createElement('img', { ref: 'image', src: styles.icons[ICON] })
	            );
	        }
	    }]);

	    return ButtonRegisterFilter;
	}(React.PureComponent);

	/*
	ButtonRegisterFilter.propTypes = {
	    onClick: PropTypes.func.isRequired
	}
	*/

	ButtonRegisterFilter.defaultProps = {
	    disabled: false,
	    show: true
	};
	module.exports = ButtonRegisterFilter;

/***/ }),
/* 207 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var PropTypes = __webpack_require__(11);

	var React = __webpack_require__(10),
	    styles = __webpack_require__(74),
	    Button = __webpack_require__(75),
	    ICON = 'select';

	var ButtonSelect = function (_React$PureComponent) {
	    _inherits(ButtonSelect, _React$PureComponent);

	    // кнопка создания документа в регистрах
	    function ButtonSelect(props) {
	        _classCallCheck(this, ButtonSelect);

	        return _possibleConstructorReturn(this, (ButtonSelect.__proto__ || Object.getPrototypeOf(ButtonSelect)).call(this, props));
	    }

	    _createClass(ButtonSelect, [{
	        key: 'handleClick',
	        value: function handleClick(e) {
	            return this.props.onClick('select');
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var _this2 = this;

	            var value = this.props.value ? this.props.value : 'Valida';
	            return React.createElement(
	                Button,
	                {
	                    ref: 'btnSelect',
	                    value: value,
	                    show: this.props.show,
	                    disabled: this.props.disabled,
	                    onClick: function onClick(e) {
	                        return _this2.handleClick(e);
	                    } },
	                React.createElement('img', { ref: 'image', src: styles.icons[ICON] })
	            );
	        }
	    }]);

	    return ButtonSelect;
	}(React.PureComponent);

	/*
	ButtonRegisterPrint.propTypes = {
	    onClick: PropTypes.func.isRequired
	}
	*/

	ButtonSelect.defaultProps = {
	    disabled: false,
	    show: true
	};

	module.exports = ButtonSelect;

/***/ }),
/* 208 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var PropTypes = __webpack_require__(11);

	var React = __webpack_require__(10),
	    styles = __webpack_require__(74),
	    Button = __webpack_require__(75),
	    ModalPage = __webpack_require__(171),
	    ICON = 'mail';

	var ButtonRegisterEmail = function (_React$Component) {
	    _inherits(ButtonRegisterEmail, _React$Component);

	    // кнопка создания документа в регистрах
	    function ButtonRegisterEmail(props) {
	        _classCallCheck(this, ButtonRegisterEmail);

	        var _this = _possibleConstructorReturn(this, (ButtonRegisterEmail.__proto__ || Object.getPrototypeOf(ButtonRegisterEmail)).call(this, props));

	        _this.state = {
	            showModal: false
	        };
	        _this.modalPageClick = _this.modalPageClick.bind(_this);
	        return _this;
	    }

	    /**
	     * обработчик события клик, откроет модальное окно
	     * @param e
	     */


	    _createClass(ButtonRegisterEmail, [{
	        key: 'handleClick',
	        value: function handleClick(e) {
	            // если требуется предварительно ихвещение, то открываем модальное окно, иначе вызываем метод из пропсов
	            if (this.props.docTypeId.toLowerCase() === 'arv' || this.props.docTypeId.toLowerCase() === 'teatis') {
	                this.setState({ showModal: true });
	            } else {
	                this.modalPageClick('Ok');
	            }
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var _this2 = this;

	            return React.createElement(
	                'div',
	                null,
	                React.createElement(
	                    Button,
	                    {
	                        ref: 'btnEmail',
	                        value: this.props.value,
	                        show: this.props.show,
	                        disabled: this.props.disabled,
	                        onClick: function onClick(e) {
	                            return _this2.handleClick(e);
	                        } },
	                    React.createElement('img', { ref: 'image', src: styles.icons[ICON] })
	                ),
	                React.createElement(
	                    ModalPage,
	                    {
	                        modalPageBtnClick: this.modalPageClick,
	                        modalPageName: '' + this.props.value,
	                        show: this.state.showModal,
	                        modalObjects: ['btnOk', 'btnCancel']
	                    },
	                    'Kas saada email ?'
	                )
	            );
	        }

	        /**
	         * обработчик на событие клика на кнопки можального окна
	         * @param btnEvent
	         */

	    }, {
	        key: 'modalPageClick',
	        value: function modalPageClick(btnEvent) {
	            if (btnEvent === 'Ok') {
	                this.props.onClick(this.props.value);
	            }
	            this.setState({ showModal: false });
	        }
	    }]);

	    return ButtonRegisterEmail;
	}(React.Component);

	/*
	ButtonRegisterPrint.propTypes = {
	    onClick: PropTypes.func.isRequired
	}
	*/

	ButtonRegisterEmail.defaultProps = {
	    disabled: false,
	    show: true,
	    value: 'Email',
	    docTypeId: ''
	};

	module.exports = ButtonRegisterEmail;

/***/ }),
/* 209 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var PropTypes = __webpack_require__(11);

	var React = __webpack_require__(10),
	    styles = __webpack_require__(74),
	    Button = __webpack_require__(75),
	    ICON = 'refresh';

	var ButtonRefresh = function (_React$PureComponent) {
	    _inherits(ButtonRefresh, _React$PureComponent);

	    // кнопка создания документа в регистрах
	    function ButtonRefresh(props) {
	        _classCallCheck(this, ButtonRefresh);

	        return _possibleConstructorReturn(this, (ButtonRefresh.__proto__ || Object.getPrototypeOf(ButtonRefresh)).call(this, props));
	    }

	    _createClass(ButtonRefresh, [{
	        key: 'handleClick',
	        value: function handleClick(e) {
	            return this.props.onClick();
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var _this2 = this;

	            return React.createElement(
	                Button,
	                {
	                    ref: 'btnRefresh',
	                    value: 'Uuenda',
	                    show: this.props.show,
	                    disabled: this.props.disabled,
	                    onClick: function onClick(e) {
	                        return _this2.handleClick(e);
	                    } },
	                React.createElement('img', { ref: 'image', src: styles.icons[ICON] })
	            );
	        }
	    }]);

	    return ButtonRefresh;
	}(React.PureComponent);

	ButtonRefresh.defaultProps = {
	    disabled: false,
	    show: true
	};
	module.exports = ButtonRefresh;

/***/ }),
/* 210 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var PropTypes = __webpack_require__(11);
	var DocContext = __webpack_require__(1);
	var prepareData = __webpack_require__(181);
	var getTextValue = __webpack_require__(76);

	var React = __webpack_require__(10),
	    styles = __webpack_require__(211);

	var GridFilter = function (_React$PureComponent) {
	    _inherits(GridFilter, _React$PureComponent);

	    function GridFilter(props) {
	        _classCallCheck(this, GridFilter);

	        var _this = _possibleConstructorReturn(this, (GridFilter.__proto__ || Object.getPrototypeOf(GridFilter)).call(this, props));

	        _this.state = {
	            gridConfig: props.gridConfig, // grid config
	            data: props.data
	        };

	        _this.handleChange = _this.handleChange.bind(_this);
	        _this.prepareFilterFields = _this.prepareFilterFields.bind(_this);
	        _this.returnInterval = _this.returnInterval.bind(_this);
	        _this.returnTextComponent = _this.returnTextComponent.bind(_this);
	        _this.handleSelectChange = _this.handleSelectChange.bind(_this);
	        return _this;
	    }

	    /**
	     * Обработчик на изменения инпутов
	     */


	    _createClass(GridFilter, [{
	        key: 'handleChange',
	        value: function handleChange(e) {
	            this.saveFilterContent(e.target.name, e.target.value, null);
	            this.forceUpdate();
	        }

	        /**
	         * Обработчик на изменения выбора селекта
	         */

	    }, {
	        key: 'handleSelectChange',
	        value: function handleSelectChange(e) {
	            this.saveFilterContent(e.target.name, null, e.target.value);
	            this.forceUpdate();
	        }

	        /**
	         * сохранит значение фильтра
	         * @param name
	         * @param value
	         * @param sqlNo - исключение на фильтр
	         */

	    }, {
	        key: 'saveFilterContent',
	        value: function saveFilterContent(name, value, sqlNo) {
	            var data = this.props.data;

	            // проверим на наличие полей для фильтрации
	            if (!data.length) {
	                data = prepareData(this.props.gridConfig, this.props.docTypeId);
	            } else {
	                data = this.props.data;
	            }

	            var kas_sisaldab = 1;
	            // ищем значение sqlNo
	            if (DocContext.filter[this.props.docTypeId]) {
	                var idx = DocContext.filter[this.props.docTypeId].findIndex(function (row) {
	                    return row.id === name;
	                });
	                if (idx >= 0) {
	                    kas_sisaldab = DocContext.filter[this.props.docTypeId][idx].sqlNo;
	                }
	            }

	            // сохраним значение фильтра

	            data = data.map(function (row) {
	                if (row.id === name) {

	                    row.value = !sqlNo ? value : row.value;
	                    row.sqlNo = value ? kas_sisaldab : sqlNo;
	                }
	                return row;
	            });

	            var index = void 0,
	                isIntervalStart = !!name.match(/_start/),
	                isIntervalEnd = !!name.match(/_end/);
	            var fieldName = name;

	            // надо найти элемент массива с данными для этого компонента
	            for (var i = 0; i < data.length; i++) {

	                isIntervalStart = !!name.match(/_start/);
	                isIntervalEnd = !!name.match(/_end/);

	                if (isIntervalStart) {
	                    // will replace start from firldName
	                    fieldName = name.replace(/_start/i, '');
	                }

	                if (isIntervalEnd) {
	                    // will replace end from firldName
	                    fieldName = name.replace(/_end/i, '');
	                }

	                if (data[i].id === fieldName) {
	                    index = i;
	                    break;
	                }
	            }

	            if (index > -1) {
	                if (isIntervalStart) {
	                    data[index].start = value;
	                    data[index][fieldName + '_start'] = value;
	                    data[index].value = value;
	                }
	                if (isIntervalEnd) {
	                    data[index].end = value;
	                    data[index][fieldName + '_end'] = value;
	                    data[index].value = value;
	                }
	                data[index].sqlNo = sqlNo ? sqlNo : 1;
	            }

	            // сохраним фильтр
	            DocContext.filter[this.props.docTypeId] = data;

	            if (this.props.handler) {
	                this.props.handler(data);
	            }
	        }
	    }, {
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            var data = prepareData(this.props.gridConfig, this.props.docTypeId);
	            if (this.props.handler) {
	                this.props.handler(data);
	            }

	            // если указан элемент , то установим на него фокус
	            if (this.props.focusElement) {
	                var focusElement = this.refs[this.props.focusElement];
	                if (focusElement) {
	                    focusElement.focus();
	                }
	            }
	        }

	        // will update state if props changed

	    }, {
	        key: 'render',
	        value: function render() {
	            // создаст из полей грида компоненты для формирования условий фильтрации
	            return React.createElement(
	                'div',
	                { style: styles.fieldset },
	                this.prepareFilterFields()
	            );
	        }
	    }, {
	        key: 'prepareFilterFields',
	        value: function prepareFilterFields() {
	            var _this2 = this;

	            // только поля, которые отмечаны как show:true или явно ка указаны и те, у котоых нету hideFilter
	            var filterFields = this.props.gridConfig.filter(function (field) {
	                if (field.id !== 'id' && !field.hideFilter && (!field.filter || field.filter == 'show')) {
	                    return field;
	                }
	            });

	            return filterFields.map(function (row, index) {

	                return React.createElement(
	                    'div',
	                    { style: styles.formWidget, key: 'fieldSet-' + row.id },
	                    React.createElement(
	                        'div',
	                        { style: styles.formWidgetLabel },
	                        React.createElement(
	                            'span',
	                            null,
	                            getTextValue(row.name)
	                        )
	                    ),
	                    React.createElement(
	                        'div',
	                        { style: styles.formWidgetInput },
	                        row.interval ? _this2.returnInterval(row) : _this2.returnTextComponent(row)
	                    )
	                );
	            });
	        }
	    }, {
	        key: 'returnTextComponent',
	        value: function returnTextComponent(row) {
	            var data = this.props.data;

	            // проверим на наличие полей для фильтрации
	            if (!data.length) {
	                data = prepareData(this.props.gridConfig, this.props.docTypeId);
	            }

	            var componentType = row.type ? row.type : 'text';

	            // ишем дефолтное значение
	            var value = row.value ? row.value : '';
	            var kas_sisaldab = 1;

	            // ищем инициализированное значение
	            var obj = data.find(function (dataRow) {
	                return dataRow.id == row.id;
	            });

	            if (obj && 'value' in obj) {
	                if (!obj.value && value) {
	                    // есть дефолтное значение
	                    value = data[index][row.id].value;
	                }
	                value = obj.value ? obj.value : value;
	                kas_sisaldab = obj.sqlNo ? obj.sqlNo : 1;
	            }

	            return React.createElement(
	                'div',
	                { style: styles.wrapper },
	                React.createElement(
	                    'select',
	                    { style: styles.select,
	                        value: kas_sisaldab || 1,
	                        name: row.id,
	                        disabled: !value,
	                        id: 'sqlNo',
	                        onChange: this.handleSelectChange },
	                    React.createElement(
	                        'option',
	                        { value: 1 },
	                        getTextValue('SISALDAB')
	                    ),
	                    React.createElement(
	                        'option',
	                        { value: 0 },
	                        getTextValue('EI SISALDA')
	                    )
	                ),
	                React.createElement('input', { style: styles.input,
	                    type: componentType,
	                    title: getTextValue(row.name),
	                    name: row.id,
	                    placeholder: row.toolTip ? getTextValue(row.toolTip) : getTextValue(row.name),
	                    ref: row.id,
	                    value: value || '',
	                    onChange: this.handleChange,
	                    defaultValue: this.props.data[row.id] })
	            );
	        }

	        /**
	         * вернет два инпута, где будут хранится значения для сначала и конца диапазона
	         * @param row
	         */

	    }, {
	        key: 'returnInterval',
	        value: function returnInterval(row) {
	            if (row && row.interval && !('start' in row)) {
	                var value = row.value ? row.value : null;
	                row = _extends({}, row, { start: value }, { end: value });
	            }

	            var data = this.props.data;
	            var obj = data.find(function (dataRow) {
	                return dataRow.id == row.id;
	            });

	            if (!obj) {
	                return null;
	            }

	            var valueStart = row.interval ? obj['start'] : obj.value;
	            var valueEnd = row.interval ? obj['end'] : obj.value;

	            var componentType = row.type ? row.type : 'text';
	            if (valueStart && valueEnd) {
	                // сохраним значение
	                this.saveFilterContent(row.name, valueStart);
	                this.saveFilterContent(row.name, valueEnd);
	            }

	            return React.createElement(
	                'div',
	                { style: styles.interval },
	                React.createElement('input', { style: styles.input,
	                    type: componentType,
	                    title: row.name,
	                    name: row.id + '_start',
	                    placeholder: row.name,
	                    ref: row.id + '_start',
	                    value: valueStart || '',
	                    onChange: this.handleChange,
	                    defaultValue: this.props.data[row.id]
	                }),
	                React.createElement(
	                    'span',
	                    null,
	                    '-'
	                ),
	                React.createElement('input', { style: styles.input,
	                    type: componentType,
	                    title: row.name,
	                    name: row.id + '_end',
	                    placeholder: row.name,
	                    ref: row.id + '_end',
	                    value: valueEnd || '',
	                    onChange: this.handleChange,
	                    defaultValue: this.props.data[row.id]
	                })
	            );
	        }
	    }], [{
	        key: 'getDerivedStateFromProps',
	        value: function getDerivedStateFromProps(nextProps, prevState) {

	            if (JSON.stringify(nextProps.gridConfig) !== JSON.stringify(prevState.gridConfig) || JSON.stringify(nextProps.data) !== JSON.stringify(prevState.data) || prevState.data.length === 0 || prevState.data.length !== nextProps.data.length) {
	                return { gridConfig: nextProps.gridConfig, data: nextProps.data };
	            } else return null;
	        }
	    }]);

	    return GridFilter;
	}(React.PureComponent);

	GridFilter.propTypes = {
	    gridConfig: PropTypes.array.isRequired,
	    data: PropTypes.array.isRequired
	};

	module.exports = GridFilter;

/***/ }),
/* 211 */
/***/ (function(module, exports) {

	'use strict';var _select;function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true});}else{obj[key]=value;}return obj;}module.exports={formWidget:{marginBottom:'5px',display:'flex',flexDirection:'row'},formWidgetLabel:{display:'flex',justifyContent:'flex-end',width:'40%',marginRight:'10px'},formWidgetInput:{width:'100%',borderRadius:'2px',padding:'3px',border:'0px'},input:{borderRadius:'2px',padding:'5px',display:'inline-block'},select:(_select={borderRadius:'2px',padding:'5px',display:'inline-block',width:'auto'},_defineProperty(_select,'display','flex'),_defineProperty(_select,'marginRight','5px'),_select),wrapper:{margin:'5px',display:'flex',width:'95%'},fieldSet:{borderRadius:'2px',margin:'10px'},ui:{borderRadius:'2px',padding:'5px',display:'inline-block'},interval:{display:'inline-flex'}};

/***/ }),
/* 212 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var PropTypes = __webpack_require__(11);
	var radium = __webpack_require__(88);

	var React = __webpack_require__(10),
	    styles = __webpack_require__(213);
	var getTextValue = __webpack_require__(76);

	var Input = function (_React$PureComponent) {
	    _inherits(Input, _React$PureComponent);

	    function Input(props) {
	        _classCallCheck(this, Input);

	        var _this = _possibleConstructorReturn(this, (Input.__proto__ || Object.getPrototypeOf(Input)).call(this, props));

	        _this.state = {
	            value: props.value || '',
	            readOnly: props.readOnly,
	            disabled: props.disabled,
	            valid: props.valid
	        };
	        _this.onChange = _this.onChange.bind(_this);
	        return _this;
	    }

	    // will update state if props changed


	    _createClass(Input, [{
	        key: 'onChange',
	        value: function onChange(e) {
	            var fieldValue = e.target.value;
	            this.setState({ value: fieldValue });

	            if (this.props.onChange) {
	                this.props.onChange(this.props.name, fieldValue);
	            }
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var inputPlaceHolder = this.props.placeholder || this.props.title,
	                inputStyle = Object.assign({}, styles.input, this.props.width ? { width: this.props.width } : {}, this.props.style ? this.props.style : {}, this.state.readOnly ? styles.readOnly : {});

	            return React.createElement(
	                'div',
	                { style: styles.wrapper },
	                React.createElement(
	                    'label',
	                    { style: styles.label, htmlFor: this.props.name, ref: 'label' },
	                    getTextValue(this.props.title)
	                ),
	                React.createElement('input', { type: 'text',
	                    id: this.props.name,
	                    ref: 'input',
	                    style: inputStyle,
	                    name: this.props.name,
	                    value: this.state.value,
	                    readOnly: this.state.readOnly,
	                    title: this.props.title,
	                    pattern: this.props.pattern,
	                    placeholder: inputPlaceHolder,
	                    onChange: this.onChange,
	                    maxLength: this.props.maxLength,
	                    disabled: this.props.disabled
	                })
	            );
	        }

	        /**
	         * установит фокус на элементы
	         */

	    }, {
	        key: 'focus',
	        value: function focus() {
	            this.refs['input'].focus();
	        }
	    }], [{
	        key: 'getDerivedStateFromProps',
	        value: function getDerivedStateFromProps(nextProps, prevState) {
	            if (nextProps.value !== prevState.value || nextProps.readOnly !== prevState.readOnly) {
	                return { value: nextProps.value, readOnly: nextProps.readOnly };
	            } else return null;
	        }
	    }]);

	    return Input;
	}(React.PureComponent);

	Input.propTypes = {
	    name: PropTypes.string.isRequired,
	    value: PropTypes.string,
	    readOnly: PropTypes.bool,
	    disabled: PropTypes.bool,
	    valid: PropTypes.bool,
	    placeholder: PropTypes.string,
	    pattern: PropTypes.string,
	    title: PropTypes.string
	};

	Input.defaultProps = {
	    readOnly: false,
	    disabled: false,
	    valid: true,
	    value: '',
	    title: ''
	};

	module.exports = radium(Input);

/***/ }),
/* 213 */
/***/ (function(module, exports) {

	'use strict';module.exports={input:{width:'70%',margin:'5px 2px',borderRadius:'3px',':focus':{backgroundColor:'lightpink'},border:'1px solid gray',height:'30px'},readOnly:{backgroundColor:'#F3EFEF'},wrapper:{margin:'5px',display:'flex',width:'95%'},label:{width:'30%',margin:'5px'}};

/***/ }),
/* 214 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var PropTypes = __webpack_require__(11);

	var React = __webpack_require__(10),
	    ModalPage = __webpack_require__(171),
	    styles = __webpack_require__(215);

	var TextArea = __webpack_require__(216);
	var DataGrid = __webpack_require__(183);

	var ModalPageInfo = function (_React$PureComponent) {
	    _inherits(ModalPageInfo, _React$PureComponent);

	    function ModalPageInfo(props) {
	        _classCallCheck(this, ModalPageInfo);

	        var _this = _possibleConstructorReturn(this, (ModalPageInfo.__proto__ || Object.getPrototypeOf(ModalPageInfo)).call(this, props));

	        _this.state = {
	            show: _this.props.show
	        };

	        return _this;
	    }

	    // will update state if props changed


	    _createClass(ModalPageInfo, [{
	        key: 'render',
	        value: function render() {
	            var GRID_CONFIG = __webpack_require__(86).tulemused.gridConfig;

	            var systemMessage = this.props.systemMessage ? this.props.systemMessage : '',
	                data = this.props.report ? this.props.report : '',
	                modalObjects = ['btnOk'];

	            var report = this.loeTulemused(data);

	            return React.createElement(
	                ModalPage,
	                { ref: 'modalPage',
	                    style: styles.modalPage,
	                    show: this.props.show,
	                    modalPageBtnClick: this.props.modalPageBtnClick,
	                    modalPageName: 'T\xF6\xF6\xFClesanne report',
	                    modalObjects: modalObjects
	                },
	                React.createElement(
	                    'div',
	                    { ref: 'container' },
	                    React.createElement('img', { ref: 'image', src: styles.icon }),
	                    React.createElement(
	                        'span',
	                        null,
	                        ' ',
	                        systemMessage,
	                        ' '
	                    ),
	                    React.createElement(
	                        'div',
	                        { style: styles.docRow },
	                        React.createElement(TextArea, { title: 'Report',
	                            style: styles.tulemus,
	                            name: 'report',
	                            ref: 'textarea-report',
	                            value: report.kokkuVotte,
	                            readOnly: true })
	                    ),
	                    React.createElement(
	                        'div',
	                        { ref: 'grid-row-container' },
	                        React.createElement(DataGrid, {
	                            gridData: report.data,
	                            gridColumns: GRID_CONFIG,
	                            showToolBar: false,
	                            ref: 'data-grid' })
	                    )
	                )
	            );
	        }
	    }, {
	        key: 'loeTulemused',
	        value: function loeTulemused(data) {
	            var report = {
	                kokkuVotte: '',
	                data: []
	            };

	            var errors = 0;
	            // если один обьект
	            if (data && data.data && _typeof(data.data) == 'object' && !data.data.length) {
	                report.data.push({
	                    id: 1,
	                    result: data.result && !data.error_code ? 'Ok' : 'Viga',
	                    kas_vigane: data.kas_vigane ? 'Viga' : 'Ok',
	                    error_code: data.error_code,
	                    error_message: data.error_message,
	                    viitenr: data.viitenr ? data.viitenr : null
	                });
	                if (!data.result) {
	                    errors++;
	                }
	            }

	            if (data && data.data && (typeof data === 'undefined' ? 'undefined' : _typeof(data)) == 'object' && data.data.length) {
	                data.data.map(function (row, index) {
	                    report.data.push({
	                        id: row.id ? row.id : index,
	                        kas_vigane: row.kas_vigane ? 'Viga' : 'Ok',
	                        result: row.result && !row.error_code ? 'Ok' : 'Viga',
	                        error_code: row.error_code,
	                        error_message: row.error_message,
	                        viitenr: row.viitenr ? row.viitenr : null
	                    });
	                    if (!row.result) {
	                        errors++;
	                    }
	                });
	            }

	            report.kokkuVotte = 'Vead kokku ' + errors + ', Read kokku: ' + report.data.length + ', \xD5nnestus: ' + (report.data.length - errors);
	            return report;
	        }
	    }], [{
	        key: 'getDerivedStateFromProps',
	        value: function getDerivedStateFromProps(nextProps, prevState) {
	            if (nextProps.show !== prevState.show) {
	                return { show: nextProps.show };
	            } else return null;
	        }
	    }]);

	    return ModalPageInfo;
	}(React.PureComponent);

	ModalPageInfo.propTypes = {
	    systemMessage: PropTypes.string,
	    modalPageBtnClick: PropTypes.func
	};

	module.exports = ModalPageInfo;

/***/ }),
/* 215 */
/***/ (function(module, exports) {

	'use strict';module.exports={icon:'/images/icons/info.png',modalPage:{height:'75%'},tulemus:{height:'2em'}};

/***/ }),
/* 216 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var React = __webpack_require__(10),
	    styles = __webpack_require__(217);
	var radium = __webpack_require__(88);
	var getTextValue = __webpack_require__(76);

	var PropTypes = __webpack_require__(11);

	var Input = function (_React$PureComponent) {
	    _inherits(Input, _React$PureComponent);

	    function Input(props) {
	        _classCallCheck(this, Input);

	        var _this = _possibleConstructorReturn(this, (Input.__proto__ || Object.getPrototypeOf(Input)).call(this, props));

	        _this.state = {
	            value: props.value || '',
	            readOnly: true,
	            disabled: props.disabled || true
	        };

	        _this.onChange = _this.onChange.bind(_this);

	        return _this;
	    }

	    _createClass(Input, [{
	        key: 'onChange',
	        value: function onChange(e) {
	            var fieldValue = e.target.value;

	            this.setState({ value: fieldValue });
	            if (this.props.onChange) {
	                this.props.onChange(this.props.name, fieldValue);
	            }
	        }

	        // will update state if props changed

	    }, {
	        key: 'render',
	        value: function render() {
	            var inputPlaceHolder = this.props.placeholder || this.props.title,
	                inputStyle = Object.assign({}, styles.input, this.props.width ? { width: this.props.width } : {}, this.state.readOnly ? styles.readOnly : {}, this.props.style ? this.props.style : {});

	            return React.createElement(
	                'div',
	                { style: styles.wrapper },
	                React.createElement(
	                    'label',
	                    { htmlFor: this.props.name, ref: 'label',
	                        style: styles.label },
	                    React.createElement(
	                        'span',
	                        null,
	                        getTextValue(this.props.title)
	                    )
	                ),
	                React.createElement('textarea', {
	                    style: inputStyle,
	                    ref: 'input',
	                    id: this.props.name,
	                    name: this.props.name,
	                    value: this.state.value || '',
	                    readOnly: this.props.readOnly,
	                    title: this.props.title,
	                    placeholder: inputPlaceHolder,
	                    onChange: this.onChange,
	                    disabled: this.props.disabled
	                })
	            );
	        }
	    }], [{
	        key: 'getDerivedStateFromProps',
	        value: function getDerivedStateFromProps(nextProps, prevState) {
	            if (nextProps.value !== prevState.value || nextProps.readOnly !== prevState.readOnly) {
	                return { value: nextProps.value, readOnly: nextProps.readOnly };
	            } else return null;
	        }
	    }]);

	    return Input;
	}(React.PureComponent);

	Input.propTypes = {
	    name: PropTypes.string.isRequired,
	    value: PropTypes.string,
	    readOnly: PropTypes.bool,
	    disabled: PropTypes.bool,
	    valid: PropTypes.bool,
	    placeholder: PropTypes.string,
	    title: PropTypes.string
	};

	Input.defaultProps = {
	    readOnly: false,
	    disabled: false,
	    valid: true,
	    title: '',
	    value: ''
	};

	module.exports = radium(Input);

/***/ }),
/* 217 */
/***/ (function(module, exports) {

	'use strict';module.exports={input:{width:'100%',borderRadius:'3px',overflow:'scroll',height:'fit-content',':focus':{backgroundColor:'lightpink'},border:'1px solid gray'},focused:{backgroundColor:'lightblue'},readOnly:{backgroundColor:'#F3EFEF'},wrapper:{margin:'5px',display:'flex',width:'98%',flexDirection:'column'},label:{margin:'5px'}};

/***/ }),
/* 218 */
/***/ (function(module, exports) {

	'use strict';module.exports={docRow:{display:'flex',flexDirection:'row wrap'/*
	                border: '1px solid blue'
	        */},docColumn:{display:'flex',flexDirection:'column',/*
	                border: '1px solid yellow',
	        */width:'50%'},doc:{position:'relative',height:'100%',display:'flex',flexDirection:'column'/*
	                border: '1px solid brown'
	        */},gridContainer:{display:'flex',flexFlow:'row wrap',height:'95%'},grid:{mainTable:{tableLayout:'fixed',position:'relative',td:{border:'1px solid lightGrey',display:'table-cell',paddingLeft:'5px'},minHeight:'200px',marginBottom:'20px'},headerTable:{tableLayout:'fixed'}},limit:{width:'20%',margin:'5px 2px'},ok:{backgroundColor:'lightgreen',width:'100%',textAlign:'right'},error:{backgroundColor:'lightcoral',width:'100%',textAlign:'right'},notValid:{backgroundColor:'yellow',width:'100%',textAlign:'right'},total:{width:'auto'}};

/***/ }),
/* 219 */,
/* 220 */,
/* 221 */,
/* 222 */,
/* 223 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var PropTypes = __webpack_require__(11);
	var React = __webpack_require__(10);
	var _fetchData = __webpack_require__(41);
	var DocContext = __webpack_require__(1);
	var Menu = __webpack_require__(40);
	var DocRights = __webpack_require__(176);
	var checkRights = __webpack_require__(177);
	var LIBS_URL = __webpack_require__(86).LIBS.POST_LOAD_LIBS_URL;
	var URL = __webpack_require__(86).DOCS.POST_LOAD_DOCS_URL;

	var Form = __webpack_require__(224),
	    ToolbarContainer = __webpack_require__(71),
	    DocToolBar = __webpack_require__(228),
	    ModalPage = __webpack_require__(171),
	    ModalReport = __webpack_require__(214),
	    styles = __webpack_require__(241);

	/**
	 * Класс реализует базовый документ .
	 */

	var DocumentTemplate = function (_React$Component) {
	    _inherits(DocumentTemplate, _React$Component);

	    function DocumentTemplate(props) {
	        _classCallCheck(this, DocumentTemplate);

	        var _this = _possibleConstructorReturn(this, (DocumentTemplate.__proto__ || Object.getPrototypeOf(DocumentTemplate)).call(this, props));

	        _this.libs = {};
	        _this.state = {
	            docId: _this.props.docId, //если Id документа не передан, то создаем новый док
	            edited: _this.props.docId === 0,
	            reloadData: !Object.keys(props.initData).length,
	            gridRowEdit: false,
	            gridRowEvent: null,
	            warning: '',
	            warningStyle: '',
	            gridWarning: '',
	            checked: true,
	            loadedLibs: false,
	            libParams: {},
	            logs: [],
	            isDisableSave: props.isDisableSave,
	            docData: {},
	            isReport: false,
	            txtReport: []
	        };

	        _this.docData = Object.keys(props.initData).length ? props.initData : { id: props.docId };
	        _this.backup = {};
	        _this.requiredFields = [];
	        _this.serverValidation = [];
	        _this.bpm = [];
	        _this.pages = props.pages;
	        _this.loadingLibs = {};

	        _this._bind('btnAddClick', 'btnEditClick', 'btnLogoutClick', 'validation', 'handleInputChange', 'prepareParamsForToolbar', 'btnDeleteClick', 'btnPrintClick', 'btnEmailClick', 'btnPdfClick', 'btnSaveClick', 'btnCancelClick', 'btnTaskClick', 'fetchData', 'createLibs', 'loadLibs', 'hasLibInCache', 'addRow', 'editRow', 'handleGridBtnClick', 'handleGridRowInput', 'handleGridRow', 'validateGridRow', 'modalPageClick', 'handleGridRowChange', 'handlePageClick', 'modalPageBtnClick', 'btnLogsClick', 'handleGridCellClick', 'setDocumentName', 'modalReportePageBtnClick');

	        _this.gridRowData = {}; //будем хранить строку грида

	        return _this;
	    }

	    _createClass(DocumentTemplate, [{
	        key: 'componentDidUpdate',
	        value: function componentDidUpdate() {
	            // сохраним последнее значение дока этого типа
	            if (this.state.docId) {
	                DocContext[this.props.docTypeId.toLowerCase()] = this.state.docId;
	            }
	        }

	        /**
	         * пишем исходные данные в хранилище, регистрируем обработчики событий
	         */

	    }, {
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            // сохраним в контексте тип документа, с которым мы работает
	            DocContext.docTypeId = this.props.docTypeId;

	            if (this.state.reloadData) {
	                //делаем запрос на получение данных
	                this.fetchData();
	            }

	            this.libs = this.createLibs(); //создаст объект для хранения справочников
	            if (this.props.focusElement) {
	                var focusElement = this.refs[this.props.focusElement];
	                if (focusElement) {
	                    focusElement.focus();
	                }
	            }

	            // задать имя реристра на страницу
	            this.setDocumentName();
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var isInEditMode = this.state.edited;

	            if (this.props.libs.length && !this.state.loadedLibs) {
	                var kpv = new Date().toISOString().slice(0, 10);
	                if (this.docData && this.docData.kpv) {
	                    kpv = this.docData.kpv;
	                }
	                // грузим справочники
	                this.loadLibs(null, kpv);
	            }

	            var warningStyle = styles[this.state.warningType] ? styles[this.state.warningType] : null;

	            var dialogString = this.serverValidation.length > 0 ? 'Dokument ' + this.serverValidation[0].name + ' = ' + this.serverValidation[0].value + ' juba olemas. Kas j\xE4tka?' : '';
	            var btnParams = {
	                btnStart: {
	                    show: true
	                },
	                btnLogin: {
	                    show: true,
	                    disabled: false
	                },
	                btnAccount: {
	                    show: true,
	                    disabled: false
	                }

	            };

	            return React.createElement(
	                'div',
	                null,
	                React.createElement(Menu, { params: btnParams,
	                    ref: 'menu',
	                    history: this.props.history,
	                    rekvId: DocContext.userData ? DocContext.userData.asutusId : 0,
	                    module: this.props.module ? this.props.module : DocContext.module }),
	                this.renderDocToolBar(),
	                React.createElement(
	                    Form,
	                    { pages: this.pages,
	                        ref: 'form',
	                        handlePageClick: this.handlePageClick,
	                        disabled: isInEditMode },
	                    React.createElement(
	                        ToolbarContainer,
	                        { ref: 'toolbar-container' },
	                        React.createElement(
	                            'div',
	                            { className: 'doc-toolbar-warning', style: warningStyle },
	                            this.state.warning ? React.createElement(
	                                'span',
	                                null,
	                                this.state.warning
	                            ) : null
	                        )
	                    ),
	                    React.createElement(
	                        'div',
	                        { style: styles.doc },
	                        this.props.renderer ? this.props.renderer(this) : null
	                    )
	                ),
	                React.createElement(
	                    ModalPage,
	                    {
	                        show: this.serverValidation.length > 0,
	                        modalPageName: 'Kontrol',
	                        modalObjects: ['btnOk', 'btnCancel'],
	                        modalPageBtnClick: this.modalPageBtnClick.bind(this) },
	                    React.createElement(
	                        'div',
	                        { ref: 'container' },
	                        React.createElement('img', { ref: 'image', src: styles.modalValidate.iconImage }),
	                        React.createElement(
	                            'span',
	                            null,
	                            ' ',
	                            dialogString,
	                            ' '
	                        )
	                    )
	                ),
	                React.createElement(ModalReport, {
	                    show: this.state.isReport,
	                    report: this.state.txtReport,
	                    modalPageBtnClick: this.modalReportePageBtnClick })
	            );
	        }

	        /**
	         * Обработчик для кнопки Добавить
	         */

	    }, {
	        key: 'btnAddClick',
	        value: function btnAddClick() {
	            var _this2 = this;

	            //бекап данных
	            this.makeBackup();

	            if (this.props.history) {
	                this.props.history.push('/' + (this.props.module ? this.props.module : DocContext.module) + '/' + this.props.docTypeId + '/0');
	            }

	            this.setState({ docId: 0, edited: true }, function () {
	                _this2.fetchData().then(function () {
	                    _this2.forceUpdate();
	                });
	            });

	            if (this.props.focusElement && this.refs[this.props.focusElement]) {
	                this.refs[this.props.focusElement].focus();
	            }
	        }

	        /**
	         * Обработчик для кнопки редактировать
	         */

	    }, {
	        key: 'btnEditClick',
	        value: function btnEditClick() {
	            //в режим редактирования
	            this.setState({ edited: true, reloadData: true });
	            //бекап данных
	            this.makeBackup();

	            if (this.props.focusElement && this.refs[this.props.focusElement]) {
	                this.refs[this.props.focusElement].focus();
	            }
	        }
	    }, {
	        key: 'btnDeleteClick',
	        value: function btnDeleteClick() {
	            console.log('btnDeleteClick');
	        }
	    }, {
	        key: 'btnPrintClick',
	        value: function btnPrintClick() {
	            var url = '/print/' + this.props.docTypeId + '/' + DocContext.userData.uuid + '/' + this.state.docId;
	            window.open('' + url);
	        }
	    }, {
	        key: 'btnPdfClick',
	        value: function btnPdfClick() {
	            var url = '/pdf/' + this.props.docTypeId + '/' + DocContext.userData.uuid + '/' + this.state.docId;
	            window.open('' + url);
	        }

	        /**
	         * обработчик для кнопки отправки почты
	         */

	    }, {
	        key: 'btnEmailClick',
	        value: function btnEmailClick() {
	            var _this3 = this;

	            // если документ тип счет или извещение, то отправим напрямую, иначе переадрисуем на письмо
	            if (this.props.docTypeId.toLowerCase() == 'arv' || this.props.docTypeId.toLowerCase() == 'teatis') {
	                this.fetchData('Post', '/email').then(function (response) {
	                    if (response.status === 200) {
	                        _this3.setState({
	                            reloadData: false,
	                            warning: 'Email saadetud edukalt',
	                            warningType: 'ok'
	                        });
	                    } else {
	                        var errorMessage = response.error_message ? response.error_message : '';
	                        _this3.setState({
	                            reloadData: false,
	                            warning: 'Tekkis viga ' + errorMessage,
	                            warningType: 'error'
	                        });
	                    }
	                });
	            } else {
	                // сохраним параметры для формирования вложения в контексте
	                DocContext['email-params'] = {
	                    docId: this.state.docId,
	                    docTypeId: this.props.docTypeId,
	                    queryType: 'id' // ид - документ, where -
	                };

	                this.props.history.push('/' + (this.props.module ? this.props.module : DocContext.module) + '/e-mail/0');
	            }
	        }

	        /**
	         * Обработчик для кнопки сохранить
	         */

	    }, {
	        key: 'btnSaveClick',
	        value: function btnSaveClick() {
	            var _this4 = this;

	            this.setState({
	                edited: false,
	                warning: 'Salvestan...',
	                warningType: 'notValid'
	            });

	            this.fetchData('Put').then(function (response) {
	                if (!response) return false;
	                //call to save
	                _this4.docData = response.data[0];

	                _this4.setState({
	                    reloadData: false,
	                    warning: 'Salvestatud edukalt',
	                    warningType: 'ok',
	                    edited: false,
	                    docId: _this4.docData.id ? _this4.docData.id : 0
	                }, function () {
	                    // сохраним в контексте последние изменения
	                    DocContext[_this4.props.docTypeId] = _this4.docData.id;

	                    // обновим справочник
	                    if (DocContext.libs && DocContext.libs[_this4.props.docTypeId.toLowerCase()]) {
	                        _this4.loadLibs(_this4.props.docTypeId.toLowerCase());
	                    }

	                    // если есть в кеше , то читим
	                    var lib = _this4.props.docTypeId.toLowerCase();

	                    if (DocContext.libs && DocContext.libs[lib] && DocContext.libs[lib].length > 0) {
	                        DocContext.libs[lib] = [];
	                    }

	                    if (_this4.props.reload) {
	                        // reload / redirect
	                        setTimeout(function () {

	                            var current = '/' + (_this4.props.module ? _this4.props.module : DocContext.module) + '/' + _this4.props.docTypeId + '/' + _this4.docData.id;
	                            _this4.props.history.replace('/reload');
	                            setTimeout(function () {
	                                _this4.props.history.replace(current);
	                            });
	                        }, 2000);
	                    }
	                });
	            });
	        }

	        /**
	         * Обработчик события клика дял кнопки Отказ от сохранения
	         */

	    }, {
	        key: 'btnCancelClick',
	        value: function btnCancelClick() {
	            //востановим прежнее состояние
	            if (this.state.docId) {
	                this.restoreFromBackup();
	            } else {
	                this.props.history.goBack();
	            }
	            //режим редактирования
	            this.setState({ edited: false, warning: '', warningType: null });
	        }

	        /**
	         *
	         */

	    }, {
	        key: 'btnTaskClick',
	        value: function btnTaskClick(taskName, kpv, gruppId, tekst, kogus) {
	            var _this5 = this;

	            var task = this.bpm.find(function (task) {
	                return task.name === taskName;
	            });
	            if (!task) {
	                this.setState({
	                    warning: 'Viga, task ' + taskName + ' ei leidnud',
	                    warningType: 'error'

	                });
	                return;
	            }

	            var api = '/newApi/task/' + task.task;

	            this.setState({ warning: 'Töötan...', warningType: 'notValid' });

	            this.fetchData('Post', api, kpv || gruppId || tekst || kogus ? {
	                seisuga: kpv,
	                gruppId: gruppId,
	                viitenumber: tekst,
	                kogus: kogus
	            } : null).then(function (response) {
	                var dataRow = response.result;
	                var dataMessage = response.data.error_message ? response.data.error_message : '';

	                var docId = dataRow.docId;

	                if (docId) {

	                    _this5.setState({
	                        warning: 'Edukalt ' + dataMessage,
	                        warningType: 'ok'
	                    }, function () {

	                        setTimeout(function () {
	                            // koostatud uus dok, teeme reload
	                            var current = '/' + (_this5.props.module ? _this5.props.module : DocContext.module) + '/' + _this5.props.docTypeId + '/' + _this5.state.docId;
	                            _this5.props.history.replace('/reload');
	                            setTimeout(function () {
	                                _this5.props.history.replace(current);
	                            });
	                        }, 2000);
	                    });
	                } else if (dataMessage) {
	                    _this5.setState({
	                        warning: 'Viga, ' + dataMessage,
	                        warningType: 'error'
	                    }, function () {

	                        setTimeout(function () {
	                            // koostatud uus dok, teeme reload
	                            var current = '/' + (_this5.props.module ? _this5.props.module : DocContext.module) + '/' + _this5.props.docTypeId + '/' + _this5.state.docId;
	                            _this5.props.history.replace('/reload');
	                            setTimeout(function () {
	                                _this5.props.history.replace(current);
	                            });
	                        }, 2000);
	                    });
	                }
	            });
	        }

	        /**
	         * Выполнит запрос и покажет логи
	         */

	    }, {
	        key: 'btnLogsClick',
	        value: function btnLogsClick() {
	            var _this6 = this;

	            var api = '/newApi/logs/';

	            this.fetchData('Post', api).then(function (response) {
	                var dataRows = response.data;
	                _this6.setState({ showLogs: true, logs: dataRows });
	            });
	        }

	        /**
	         * Сделает копию текущего состояния данных
	         */

	    }, {
	        key: 'makeBackup',
	        value: function makeBackup() {
	            this.backup = JSON.stringify(this.docData);
	        }

	        /**
	         * востановить текущее состояние из копии
	         */

	    }, {
	        key: 'restoreFromBackup',
	        value: function restoreFromBackup() {
	            this.docData = JSON.parse(this.backup);
	        }

	        /**
	         * Обработчик для инпутов.
	         * @param inputName
	         * @param inputValue
	         * @returns {boolean}
	         */

	    }, {
	        key: 'handleInputChange',
	        value: function handleInputChange(inputName, inputValue) {
	            // обработчик изменений
	            // изменения допустимы только в режиме редактирования
	            if (!this.state.edited) {
	                console.error('not in edite mode');
	                return false;
	            }

	            this.docData[inputName] = inputValue;
	            if (this.props.handleInputChange) {
	                this.props.handleInputChange(inputName, inputValue);
	            }
	            this.validation();
	            this.forceUpdate();
	        }

	        /**
	         * обработчика грида
	         * @param gridData
	         */

	    }, {
	        key: 'handleGridCellClick',
	        value: function handleGridCellClick(action, docId, idx, columnId, value) {
	            if (this.docData && this.docData.gridData) {
	                this.docData.gridData[idx][columnId] = value;
	                this.setState({ docData: this.docData });

	                // если есть триггер, вызовем его
	                if (this.props.trigger) {
	                    this.props.trigger(this, idx, columnId, value);
	                }
	            }
	            this.validation();
	        }

	        /**
	         * вызовет метод валидации данных справочника (кода) и вернет результат проверки
	         * @returns {string}
	         */

	    }, {
	        key: 'validation',
	        value: function validation() {
	            var _this7 = this;

	            if (!this.state.edited) return '';

	            var warning = '',
	                notRequiredFields = [],
	                // пишем в массив поля с отсутствующими данными
	            expressionFields = [],
	                // пишем выражение
	            notMinMaxRule = [];

	            if (this.requiredFields) {

	                this.requiredFields.forEach(function (field) {
	                    if (field.name && field.name in _this7.docData) {
	                        var value = _this7.docData[field.name];

	                        if (!value && field.type !== 'B') {
	                            notRequiredFields.push(field.name);
	                        } else {
	                            if (field.serverValidation) {
	                                // send paring to server to validate

	                                _this7.fetchData('Post', '/newApi/validate/' + field.serverValidation + '/' + value).then(function (response) {
	                                    if (response.data.data.length) {

	                                        var docId = response.data.data[0].id;
	                                        var _warning = _this7.state.warning;

	                                        if (docId && docId !== _this7.state.docId) {
	                                            //переадресовка
	                                            _this7.serverValidation.push({
	                                                name: field.name,
	                                                value: value,
	                                                result: docId
	                                            });

	                                            _warning = _warning + (value + ' (' + field.name + ') juba olemas');

	                                            //svae in state
	                                            _this7.setState({
	                                                warning: _warning,
	                                                warningType: 'notValid'
	                                            });
	                                            _this7.forceUpdate();
	                                        }
	                                    }
	                                });
	                            }
	                        }
	                        // проверка на мин . макс значения

	                        // || value && value > props.max
	                        var checkValue = false;

	                        switch (field.type) {
	                            case 'D':
	                                var controlledValueD = Date.parse(value);
	                                if (field.min && controlledValueD < field.min && field.max && controlledValueD > field.max) {
	                                    checkValue = true;
	                                }
	                                break;
	                            case 'N':
	                                var controlledValueN = Number(value);

	                                if (field.min && controlledValueN === 0 || field.min && controlledValueN < field.min && field.max && controlledValueN > field.max) {
	                                    checkValue = true;
	                                }
	                                break;
	                        }
	                        if (checkValue) {
	                            notMinMaxRule.push(field.name);
	                        }

	                        // проверка на выражение
	                        if (field.expression) {
	                            var data = _this7.docData;
	                            var expression = field.expression;
	                            var result = eval(field.expression);
	                            if (!result) {
	                                expressionFields.push(field.name);
	                            }
	                        }
	                    }

	                    if (field.trigger) {
	                        field.trigger();
	                    }
	                });

	                if (notRequiredFields.length > 0) {
	                    warning = warning + ' puudub vajalikud andmed (' + notRequiredFields.join(', ') + ') ';
	                }

	                if (notMinMaxRule.length > 0) {
	                    warning = warning ? warning : '' + ' min/max on vale(' + notMinMaxRule.join(', ') + ') ';
	                }

	                if (expressionFields.length > 0) {
	                    warning = warning ? warning : '' + ' vale andmed (' + expressionFields.join(', ') + ') ';
	                }

	                this.setState({
	                    warning: warning,
	                    warningType: warning.length ? 'notValid' : null
	                });
	            }

	            return warning; // вернем извещение об итогах валидации
	        }

	        /**
	         * Вернет компонет - панель инструментов документа
	         * @returns {XML}
	         */

	    }, {
	        key: 'renderDocToolBar',
	        value: function renderDocToolBar() {
	            var toolbar = this.prepareParamsForToolbar();
	            console.log('toolbar', toolbar);
	            return React.createElement(
	                ToolbarContainer,
	                { ref: 'toolbarContainer' },
	                React.createElement(DocToolBar, { ref: 'doc-toolbar',
	                    docTypeId: this.props.docTypeId,
	                    bpm: this.bpm ? this.bpm : [],
	                    logs: this.state.logs,
	                    docId: this.state.docId,
	                    edited: this.state.edited,
	                    docStatus: this.docData.doc_status,
	                    validator: this.validation,
	                    btnAddClick: this.btnAddClick,
	                    btnEditClick: this.btnEditClick,
	                    btnCancelClick: this.btnCancelClick,
	                    btnPrintClick: this.btnPrintClick,
	                    btnEmailClick: this.btnEmailClick,
	                    btnSaveClick: this.btnSaveClick,
	                    btnLogsClick: this.btnLogsClick,
	                    btnTaskClick: this.btnTaskClick,
	                    toolbarParams: toolbar
	                })
	            );
	        }

	        /**
	         *  читаем данные со стора, формируем параметры для кнопок управления, и туда их отдаем
	         * @returns {{btnAdd: {show: boolean, disabled: boolean}, btnEdit: {show: boolean, disabled: boolean}, btnDelete: {show: boolean, disabled: boolean}, btnPrint: {show: boolean, disabled: boolean}}}
	         */

	    }, {
	        key: 'prepareParamsForToolbar',
	        value: function prepareParamsForToolbar() {
	            console.log('this.props.docTypeId', this.props.docTypeId);
	            var docRights = DocRights[this.props.docTypeId] ? DocRights[this.props.docTypeId] : [];
	            var userRoles = DocContext.userData ? DocContext.userData.roles : [];

	            return {
	                btnAdd: {
	                    show: checkRights(userRoles, docRights, 'add'),
	                    disabled: false
	                },
	                btnEdit: {
	                    show: checkRights(userRoles, docRights, 'edit'),
	                    disabled: false
	                },
	                btnSave: {
	                    show: this.state.edited,
	                    disabled: this.state.isDisableSave
	                },
	                btnDelete: {
	                    show: checkRights(userRoles, docRights, 'delete'),
	                    disabled: false
	                },
	                btnPrint: {
	                    show: checkRights(userRoles, docRights, 'print'),
	                    disabled: false
	                },
	                btnStart: {
	                    show: true
	                },
	                btnLogin: {
	                    show: true,
	                    disabled: false
	                },
	                btnAccount: {
	                    show: true,
	                    disabled: false
	                },
	                btnRekv: {
	                    show: true,
	                    disabled: false
	                }

	            };
	        }

	        /**
	         * Выполнит запросы
	         */

	    }, {
	        key: 'fetchData',
	        value: function fetchData(protocol, api, api_params) {
	            var _this8 = this;

	            var url = api ? api : URL + '/' + this.props.docTypeId + '/' + this.state.docId;
	            var method = 'fetchDataPost';
	            var params = {
	                docTypeId: this.props.docTypeId ? this.props.docTypeId : DocContext.docTypeId,
	                module: this.props.module ? this.props.module : DocContext.module,
	                userId: DocContext.userData.userId,
	                uuid: DocContext.userData.uuid,
	                docId: this.state.docId,
	                context: DocContext[api] ? DocContext[api] : null
	            };

	            if (protocol) {
	                //request call not default
	                method = 'fetchData' + protocol;
	                params = Object.assign({}, params, this.docData, api_params ? api_params : {});
	            }

	            return new Promise(function (resolved, rejected) {
	                _fetchData[method](url, params).then(function (response) {
	                    if (response.status && response.status === 401) {
	                        document.location = '/login';
	                    }

	                    if (response.data) {
	                        //execute select calls
	                        if (response.data.action && response.data.action === 'select') {
	                            _this8.docData = response.data.data[0];

	                            // will store required fields info
	                            if (response.data.data[0].requiredFields) {
	                                _this8.requiredFields = response.data.data[0].requiredFields;
	                            }

	                            // will store bpm info
	                            if (response.data.data[0].bpm) {
	                                var docRights = DocRights[_this8.props.docTypeId] ? DocRights[_this8.props.docTypeId] : [];
	                                var userRoles = DocContext.userData ? DocContext.userData.roles : [];

	                                // только доступные таски должны попасть в список
	                                _this8.bpm = response.data.data[0].bpm.filter(function (task) {
	                                    return checkRights(userRoles, docRights, task.task);
	                                });
	                            }

	                            //should return data and called for reload
	                            _this8.setState({ reloadData: false, warning: '', warningType: null });
	                            resolved(response.data.data[0]);
	                        }

	                        if (response.data.action && response.data.action === 'save' && response.data.result.error_code) {

	                            var error_teatis = response.data.result && response.data.result.error_message ? response.data.result.error_message : '';
	                            // error in save
	                            _this8.setState({
	                                warning: 'Tekkis viga: salvestamine eba\xF5nnestus ' + error_teatis,
	                                warningType: 'error',
	                                txtReport: response.data,
	                                isReport: !!(response.data.data && response.data.data.length)
	                            });

	                            return rejected();
	                        }

	                        return resolved(response.data);
	                    } else {
	                        console.error('Fetch viga ', response, params);
	                        _this8.setState({
	                            warning: 'Tekkis viga ' + (response.data.error_message ? response.data.error_message : ''),
	                            warningType: 'error'
	                        });
	                        return rejected();
	                    }
	                }).catch(function (e) {
	                    console.error('catched fetch error ' + e);
	                    _this8.setState({
	                        warning: 'Tekkis viga ' + e,
	                        warningType: 'error'
	                    });

	                    return rejected();
	                });
	            });
	        }

	        /**
	         * Обеспечит загрузку данных для библиотек
	         * libName - код справочника
	         * kpv - дата, по умолчанию сегодня
	         */

	    }, {
	        key: 'loadLibs',
	        value: function loadLibs(libName, kpv) {
	            var _this9 = this;

	            var libsCount = libName ? 1 : this.props.libs.length;

	            var libsToLoad = libName ? [libName] : Object.keys(this.libs);
	            // start loading
	            if (!this.loadingLibs[libName]) {
	                this.loadingLibs[libName] = true;
	            } else {
	                // уже идет загрузка
	                return;
	            }

	            libsToLoad.forEach(function (lib) {

	                var hasSqlWhere = lib in _this9.state.libParams;

	                new Date().toISOString().slice(0, 10); //ajutiselt

	                var params = Object.assign({
	                    module: _this9.props.module ? _this9.props.module : DocContext.module,
	                    userId: DocContext.userData.id,
	                    uuid: DocContext.userData.uuid
	                }, hasSqlWhere ? {
	                    sql: _this9.state.libParams[lib],
	                    kpv: kpv ? kpv : new Date().toISOString().slice(0, 10)
	                } : {});

	                // проверим наличие данных в кеше, если нет, то грузим
	                if (!!_this9.state.libParams[lib] || !_this9.hasLibInCache(lib)) {
	                    _fetchData.fetchDataPost(LIBS_URL + '/' + lib, params).then(function (response) {
	                        if (response && 'data' in response) {
	                            _this9.libs[lib] = response.data.result.result.data;

	                            // save lib in cache
	                            DocContext.libs[lib] = _this9.libs[lib];

	                            libsCount--;
	                            // отметка что справочник загружен
	                            _this9.loadingLibs[lib] = false;

	                            if (!libsCount && !_this9.state.loadedLibs) {
	                                //all libs loaded;
	                                _this9.setState({
	                                    loadedLibs: true,
	                                    warning: 'Kõik püsiandmed laaditud õnnestus',
	                                    warningType: 'ok'
	                                });
	                            }
	                        }
	                    }).catch(function (error) {
	                        console.error('loadLibs error', error);
	                    });
	                } else {
	                    // берем данные из кеша
	                    _this9.libs[lib] = DocContext.libs[lib].filter(function (row) {
	                        var kpv = _this9.docData.valid ? _this9.docData.valid : new Date().toISOString().slice(0, 10);
	                        kpv = _this9.docData.kpv ? _this9.docData.kpv : kpv;
	                        // есди в справочнике есть дата и она не пустая
	                        if (!row.valid || new Date(kpv) <= new Date(row.valid)) {
	                            return row;
	                        }
	                    });
	                    _this9.loadingLibs[lib] = false;

	                    libsCount--;

	                    if (!libsCount && !_this9.state.loadedLibs) {
	                        //all libs loaded;
	                        _this9.setState({
	                            loadedLibs: true,
	                            warning: 'Kõik püsiandmed laaditud õnnestus',
	                            warningType: 'ok'
	                        });
	                    }
	                }

	                if (libsCount <= 1 && !_this9.state.loadedLibs) {
	                    //all libs loaded;
	                    _this9.setState({
	                        loadedLibs: true,
	                        warning: 'Kõik püsiandmed laaditud õnnestus',
	                        warningType: 'ok'
	                    });
	                }
	            });
	        }

	        /**
	         * проверит наличии в кеше данных и если нет, то вернет false
	         * @param lib
	         * @returns {boolean}
	         */

	    }, {
	        key: 'hasLibInCache',
	        value: function hasLibInCache(lib) {
	            if (!DocContext.libs) {
	                DocContext.libs = {};
	            }
	            return !DocContext.libs[lib] || DocContext.libs[lib].length === 0 ? false : true;
	        }

	        /**
	         * вернет объект библиотек документа
	         * @returns {{}}
	         */

	    }, {
	        key: 'createLibs',
	        value: function createLibs() {
	            var _this10 = this;

	            var libs = {};
	            var libParams = {};
	            this.props.libs.forEach(function (lib) {
	                if ((typeof lib === 'undefined' ? 'undefined' : _typeof(lib)) == 'object') {
	                    //object
	                    libs[lib.id] = [];
	                    libParams[lib.id] = lib.filter;
	                } else {
	                    libs[lib] = [];
	                }
	            });
	            this.setState({ libParams: libParams }, function () {
	                return _this10.loadLibs();
	            });
	            return libs;
	        }

	        /**
	         * Если есть в пропсах метод создания строки грида, вызовет его
	         */

	    }, {
	        key: 'createGridRow',
	        value: function createGridRow() {
	            var gridRow = void 0;
	            if (this.props.createGridRow) {
	                gridRow = this.props.createGridRow(this);
	            }
	            return gridRow;
	        }

	        /**
	         * Обработчик события клика на вкладку страницы
	         * @param page
	         */

	    }, {
	        key: 'handlePageClick',
	        value: function handlePageClick(page) {
	            var _this11 = this;

	            if (page.handlePageClick) {
	                page.handlePageClick(page.docTypeId);
	            } else if (page.docId) {
	                var current = '/' + DocContext.module + '/' + page.docTypeId + '/' + page.docId;
	                this.props.history.replace('/reload');
	                setTimeout(function () {
	                    _this11.props.history.replace(current);
	                });
	            }
	        }

	        /**
	         * обработчик событий для панели инструментов грида
	         */

	    }, {
	        key: 'handleGridBtnClick',
	        value: function handleGridBtnClick(btnName, activeRow, id, docTypeId) {

	            if (this.props.handleGridBtnClick) {
	                // если есть обработчик, то отдаем туда, иначе вызываем метод на редактирование строки
	                this.props.handleGridBtnClick(btnName, activeRow, id, docTypeId);
	            } else {
	                switch (btnName.toLowerCase()) {
	                    case 'add':
	                        this.addRow();
	                        break;
	                    case 'lisa':
	                        this.addRow();
	                        break;
	                    case 'edit':
	                        this.editRow();
	                        break;
	                    case 'muuda':
	                        this.editRow();
	                        break;
	                    case 'delete':
	                        this.deleteRow();
	                        break;
	                    case 'kustuta':
	                        this.deleteRow();
	                        break;
	                    default:
	                        console.log('Vigane click . ', btnName.toLowerCase());

	                }
	            }
	        }

	        /**
	         *  управление модальным окном
	         * @param gridEvent
	         */

	    }, {
	        key: 'handleGridRow',
	        value: function handleGridRow(gridEvent) {
	            this.setState({ gridRowEdit: true, gridRowEvent: gridEvent });
	        }

	        /**
	         * добавит в состояние новую строку
	         */

	    }, {
	        key: 'addRow',
	        value: function addRow() {
	            //если не задан конфиг грида, то вернет фальш
	            if (!this.docData.gridConfig.length) {
	                return;
	            }

	            var gridColumns = this.docData.gridConfig,
	                newRow = {};

	            //создадим объект - строку грида
	            for (var i = 0; i < gridColumns.length; i++) {
	                var field = gridColumns[i].id;
	                newRow[field] = '';
	            }

	            newRow.id = 'NEW' + Math.random(); // генерим новое ид

	            this.gridRowData = newRow;

	            // откроем модальное окно для редактирования
	            this.setState({ gridRowEdit: true, gridRowEvent: 'add' });
	        }

	        /**
	         * откроет активную строку для редактирования
	         */

	    }, {
	        key: 'editRow',
	        value: function editRow() {
	            this.gridRowData = this.docData.gridData[this.refs['data-grid'].state.activeRow];

	            // откроем модальное окно для редактирования
	            this.setState({ gridRowEdit: true, gridRowEvent: 'edit' });
	        }

	        /**
	         * удалит активную строку
	         */

	    }, {
	        key: 'deleteRow',
	        value: function deleteRow() {
	            this.docData.gridData.splice(this.refs['data-grid'].state.activeRow, 1);

	            // перерасчет итогов
	            if (this.props.recalcDoc) {
	                this.props.recalcDoc();
	            }

	            this.validation();

	            // изменим состояние
	            this.forceUpdate();
	        }

	        /**
	         * Обработчик для строк грида
	         * @param name
	         * @param value
	         */

	    }, {
	        key: 'handleGridRowInput',
	        value: function handleGridRowInput(name, value) {
	            var rea = this.docData.gridConfig.filter(function (row) {
	                if (row.id === name) {
	                    return row;
	                }
	            });

	            var columnType = rea.length && rea[0].type ? rea[0].type : 'text';

	            switch (columnType) {
	                case 'text':
	                    this.gridRowData[name] = String(value);
	                    break;
	                case 'number':
	                    this.gridRowData[name] = Number(value);
	                    break;
	                default:
	                    this.gridRowData[name] = value;
	            }
	            this.forceUpdate();
	            this.validateGridRow();
	        }

	        /**
	         * отслеживаем изменения данных на форме
	         * @param name
	         * @param value
	         */

	    }, {
	        key: 'handleGridRowChange',
	        value: function handleGridRowChange(name, value) {
	            this.gridRowData[name] = value;
	            this.forceUpdate();
	            this.validateGridRow();
	        }

	        /**
	         * will check values on the form and return string with warning
	         */

	    }, {
	        key: 'validateGridRow',
	        value: function validateGridRow() {
	            var warning = '';

	            if (this.props.gridValidator) {
	                warning = this.props.gridValidator(this.gridRowData);
	            }

	            if (warning.length > 2) {
	                // есть проблемы
	                warning = 'Отсутсвуют данные:' + warning;
	            }

	            this.setState({ checked: true, gridWarning: warning });
	        }

	        /**
	         * отработаем Ok из модального окна
	         * @param btnEvent
	         * @param data
	         */

	    }, {
	        key: 'modalPageClick',
	        value: function modalPageClick(btnEvent, data) {
	            var _this12 = this;

	            var showModal = false;

	            if (btnEvent === 'Ok' || btnEvent === 'OK') {
	                // ищем по ид строку в данных грида, если нет, то добавим строку
	                if (!this.docData.gridData.length || !this.docData.gridData.some(function (row) {
	                    return row.id === _this12.gridRowData.id;
	                })) {
	                    // вставка новой строки
	                    this.docData.gridData.splice(0, 0, this.gridRowData);
	                } else {
	                    this.docData.gridData = this.docData.gridData.map(function (row) {
	                        if (row.id === _this12.gridRowData.id) {
	                            // нашли, замещаем
	                            return _this12.gridRowData;
	                        } else {
	                            return row;
	                        }
	                    });
	                }

	                showModal = !!this.state.warning;
	            }

	            if (this.props.recalcDoc) {
	                this.props.recalcDoc();
	            }
	            this.setState({ gridRowEdit: showModal });
	            return showModal;
	        }
	    }, {
	        key: '_bind',
	        value: function _bind() {
	            var _this13 = this;

	            for (var _len = arguments.length, methods = Array(_len), _key = 0; _key < _len; _key++) {
	                methods[_key] = arguments[_key];
	            }

	            methods.forEach(function (method) {
	                if (_this13[method]) {
	                    _this13[method] = _this13[method].bind(_this13);
	                }
	            });
	        }

	        /**
	         * обработчик для кнопки модального окна
	         * @param btnEvent
	         */

	    }, {
	        key: 'modalPageBtnClick',
	        value: function modalPageBtnClick(btnEvent) {
	            var _this14 = this;

	            //получим значение
	            var docId = this.serverValidation[0].result;

	            // обнулим итог валидации
	            this.serverValidation = [];

	            if (btnEvent === 'Ok') {
	                // редайрект
	                // koostatud uus dok,
	                this.props.history.push('/' + (this.props.module ? this.props.module : DocContext.module) + '/' + this.props.docTypeId + '/' + docId);

	                var current = '/' + (this.props.module ? this.props.module : DocContext.module) + '/' + this.props.docTypeId + '/' + docId;
	                this.props.history.replace('/reload');
	                setTimeout(function () {
	                    _this14.props.history.replace(current);
	                });
	            } else {
	                this.forceUpdate();
	            }
	        }

	        //поиск названия регистра

	    }, {
	        key: 'setDocumentName',
	        value: function setDocumentName() {
	            var _this15 = this;

	            var docType = DocContext['menu'].find(function (row) {
	                return row.kood === _this15.props.docTypeId;
	            });
	            if (docType) {
	                DocContext.pageName = docType.name;
	            }
	        }

	        /**
	         * уберет окно с отчетом
	         */

	    }, {
	        key: 'modalReportePageBtnClick',
	        value: function modalReportePageBtnClick(event) {
	            var isReport = event && event == 'Ok' ? false : true;
	            this.setState({ isReport: isReport });
	        }
	    }]);

	    return DocumentTemplate;
	}(React.Component);

	DocumentTemplate.propTypes = {
	    initData: PropTypes.object, //Содержание документа
	    requiredFields: PropTypes.array, // обязательные поля
	    edited: PropTypes.bool, //режим редактирования
	    docTypeId: PropTypes.string.isRequired, //тип документа
	    docId: PropTypes.number.isRequired, //id документа
	    libs: PropTypes.array, //список библиотек
	    renderer: PropTypes.func, //частные компонеты документа
	    recalcDoc: PropTypes.func, //перерасчет сумм документа
	    focusElement: PropTypes.string //елемент на который будет отдан фокус при редактировании
	};

	DocumentTemplate.defaultProps = {
	    initData: [],
	    docId: 0,
	    edited: false,
	    requiredFields: [],
	    pages: [],
	    libs: [],
	    isDisableSave: false,
	    isGridDataSave: false
	};

	module.exports = DocumentTemplate;

/***/ }),
/* 224 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var PropTypes = __webpack_require__(11);

	var React = __webpack_require__(10),
	    PageLabel = __webpack_require__(225),
	    styles = __webpack_require__(227);

	var Form = function (_React$PureComponent) {
	    _inherits(Form, _React$PureComponent);

	    function Form(props) {
	        _classCallCheck(this, Form);

	        var _this = _possibleConstructorReturn(this, (Form.__proto__ || Object.getPrototypeOf(Form)).call(this, props));

	        _this.handlePageClick = _this.handlePageClick.bind(_this);

	        return _this;
	    }

	    /**
	     * Обработчик клика вкладки
	     * @param page
	     */


	    _createClass(Form, [{
	        key: 'handlePageClick',
	        value: function handlePageClick(page) {

	            if (this.props.handlePageClick) {
	                this.props.handlePageClick(page);
	            }
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var _this2 = this;

	            var pages = this.props.pages;
	            return React.createElement(
	                'div',
	                null,
	                pages.length ? pages.map(function (page, idx) {
	                    return React.createElement(PageLabel, {
	                        key: idx,
	                        active: idx == 0 ? true : false,
	                        handlePageClick: _this2.handlePageClick,
	                        page: page,
	                        disabled: _this2.props.disabled,
	                        ref: 'page-' + idx });
	                }) : null,
	                React.createElement(
	                    'div',
	                    { style: styles.page },
	                    this.props.children
	                )
	            );
	        }
	    }]);

	    return Form;
	}(React.PureComponent);

	Form.propTypes = {
	    pages: PropTypes.array.isRequired,
	    handlePageClick: PropTypes.func,
	    disabled: PropTypes.bool
	};

	Form.defaultProps = {
	    disabled: false.valueOf(),
	    pages: []
	};

	module.exports = Form;

/***/ }),
/* 225 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var PropTypes = __webpack_require__(11);

	var React = __webpack_require__(10),
	    styles = __webpack_require__(226);

	var PageLabel = function (_React$PureComponent) {
	    _inherits(PageLabel, _React$PureComponent);

	    function PageLabel(props) {
	        _classCallCheck(this, PageLabel);

	        var _this = _possibleConstructorReturn(this, (PageLabel.__proto__ || Object.getPrototypeOf(PageLabel)).call(this, props));

	        _this.state = {
	            disabled: props.disabled
	        };

	        _this.handleClick = _this.handleClick.bind(_this);

	        return _this;
	    }

	    // will update state if props changed


	    _createClass(PageLabel, [{
	        key: 'handleClick',
	        value: function handleClick() {
	            // обработчик на событие клик, подгружаем связанный документ

	            if (this.state.disabled) {
	                return;
	            }

	            var page = this.props.page;

	            if (this.props.handlePageClick) {
	                this.props.handlePageClick(page);
	            }
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var page = this.props.page,
	                style = Object.assign({}, styles.pageLabel, this.props.active ? { backgroundColor: 'white' } : {});

	            return React.createElement(
	                'label',
	                { style: style,
	                    disabled: this.state.disabled,
	                    ref: 'pageLabel',
	                    onClick: this.handleClick },
	                page.pageName
	            );
	        }
	    }], [{
	        key: 'getDerivedStateFromProps',
	        value: function getDerivedStateFromProps(nextProps, prevState) {
	            if (nextProps.disabled !== prevState.disabled) {
	                return { disabled: nextProps.disabled };
	            } else return null;
	        }
	    }]);

	    return PageLabel;
	}(React.PureComponent);

	PageLabel.propTypes = {
	    handlePageClick: PropTypes.func,
	    page: PropTypes.object.isRequired,
	    disabled: PropTypes.bool,
	    active: PropTypes.bool
	};

	PageLabel.defaultProps = {
	    disabled: false,
	    active: true
	};

	module.exports = PageLabel;

/***/ }),
/* 226 */
/***/ (function(module, exports) {

	'use strict';module.exports={pageLabel:{border:'1px solid lightGrey',borderRadius:'3px',borderBottom:'1px solid white',margin:'5px',marginLeft:'-7px',padding:'2px 10px 2px 10px'}};

/***/ }),
/* 227 */
/***/ (function(module, exports) {

	'use strict';module.exports={page:{/*
	        border:'1px solid black',
	*/borderRadius:'3px'},icons:{add:'images/icons/add.png',edit:'images/icons/edit.png',delete:'images/icons/delete.png',filter:'images/icons/filter.png',print:'images/icons/print.png',ok:'images/icons/ok.png',cancel:'images/icons/cancel.png'}};

/***/ }),
/* 228 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var PropTypes = __webpack_require__(11);
	//const {withRouter} = require('react-router-dom');

	var React = __webpack_require__(10),
	    ToolbarContainer = __webpack_require__(71),
	    BtnAdd = __webpack_require__(78),
	    BtnEdit = __webpack_require__(80),
	    BtnSave = __webpack_require__(229),
	    BtnCancel = __webpack_require__(230),
	    BtnPrint = __webpack_require__(204),
	    BtnEmail = __webpack_require__(208),
	    BtnPdf = __webpack_require__(205),
	    BtnLogs = __webpack_require__(231),
	    TaskWidget = __webpack_require__(233);

	var DocToolBar = function (_React$PureComponent) {
	    _inherits(DocToolBar, _React$PureComponent);

	    function DocToolBar(props) {
	        _classCallCheck(this, DocToolBar);

	        var _this = _possibleConstructorReturn(this, (DocToolBar.__proto__ || Object.getPrototypeOf(DocToolBar)).call(this, props));

	        _this.btnEditClick = _this.btnEditClick.bind(_this);
	        _this.btnAddClick = _this.btnAddClick.bind(_this);
	        _this.btnSaveClick = _this.btnSaveClick.bind(_this);
	        _this.btnCancelClick = _this.btnCancelClick.bind(_this);
	        _this.btnPrintClick = _this.btnPrintClick.bind(_this);
	        _this.btnPdfClick = _this.btnPdfClick.bind(_this);
	        _this.btnEmailClick = _this.btnEmailClick.bind(_this);
	        _this.btnLogsClick = _this.btnLogsClick.bind(_this);
	        _this.handleButtonTask = _this.handleButtonTask.bind(_this);
	        _this.handleSelectTask = _this.handleSelectTask.bind(_this);

	        _this.docId = null;

	        if (props.docId) {
	            _this.docId = props.docId;
	        }
	        _this.state = {
	            docStatus: props.docStatus
	        };
	        return _this;
	    }

	    _createClass(DocToolBar, [{
	        key: 'render',
	        value: function render() {
	            var isEditMode = this.props.edited,
	                isDocDisabled = this.props.docStatus === 2,
	                docId = this.docId;

	            // кнопки режима редактирования должны пропасть если редактирование и показывать если разрешено
	            var kas_add = this.props.toolbarParams ? this.props.toolbarParams['btnAdd'].show : true;
	            if (kas_add && isEditMode) {
	                kas_add = false;
	            }
	            var kas_edit = this.props.toolbarParams ? this.props.toolbarParams['btnEdit'].show : true;
	            if (kas_edit && isEditMode) {
	                kas_edit = false;
	            }

	            var toolbarParams = {
	                btnAdd: {
	                    show: kas_add,
	                    disabled: isEditMode
	                },
	                btnEdit: {
	                    show: kas_edit,
	                    disabled: isDocDisabled
	                },
	                btnPrint: {
	                    show: true,
	                    disabled: false
	                },
	                btnEmail: {
	                    show: true,
	                    disabled: false
	                },
	                btnSave: {
	                    show: isEditMode && !isDocDisabled,
	                    disabled: this.props.toolbarParams && this.props.toolbarParams['btnSave'] ? this.props.toolbarParams['btnSave'].disabled : false
	                },
	                btnCancel: {
	                    show: isEditMode && docId !== 0,
	                    disabled: false
	                }
	            };

	            return React.createElement(
	                ToolbarContainer,
	                { ref: 'toolbarContainer' },
	                React.createElement(BtnAdd, { ref: 'btnAdd',
	                    onClick: this.btnAddClick,
	                    show: toolbarParams['btnAdd'].show,
	                    disabled: toolbarParams['btnAdd'].disabled }),
	                React.createElement(BtnEdit, { ref: 'btnEdit',
	                    value: 'Muuda',
	                    onClick: this.btnEditClick,
	                    show: toolbarParams['btnEdit'].show,
	                    disabled: toolbarParams['btnEdit'].disabled }),
	                React.createElement(BtnSave, { ref: 'btnSave',
	                    value: 'Salvesta',
	                    onClick: this.btnSaveClick,
	                    show: toolbarParams['btnSave'].show,
	                    disabled: toolbarParams['btnSave'].disabled }),
	                React.createElement(BtnCancel, { ref: 'btnCancel',
	                    value: 'Tühista',
	                    onClick: this.btnCancelClick,
	                    show: toolbarParams['btnCancel'].show,
	                    disabled: toolbarParams['btnCancel'].disabled }),
	                React.createElement(BtnPrint, { ref: 'btnPrint',
	                    value: 'Trükk',
	                    onClick: this.btnPrintClick,
	                    show: toolbarParams['btnPrint'].show,
	                    disabled: toolbarParams['btnPrint'].disabled }),
	                React.createElement(BtnEmail, { ref: 'btnEmail',
	                    docTypeId: this.props.docTypeId,
	                    onClick: this.btnEmailClick,
	                    show: toolbarParams['btnEmail'].show,
	                    disabled: toolbarParams['btnEmail'].disabled }),
	                React.createElement(BtnLogs, { ref: 'btnLogs',
	                    data: this.props.logs,
	                    onClick: this.btnLogsClick,
	                    show: !isEditMode }),
	                this.props.bpm.length && !isDocDisabled && !isEditMode ? React.createElement(TaskWidget, { ref: 'taskWidget',
	                    taskList: this.props.bpm,
	                    handleSelectTask: this.handleSelectTask,
	                    handleButtonTask: this.handleButtonTask
	                }) : null
	            );
	        }

	        /**
	         * Вызовет метод перехода на новый документ
	         */

	    }, {
	        key: 'btnAddClick',
	        value: function btnAddClick() {
	            if (this.props.btnAddClick) {
	                this.props.btnAddClick();
	            } else {
	                console.error('method add not exists in props');
	            }
	        }

	        /**
	         * обработчик для кнопки Edit
	         */

	    }, {
	        key: 'btnEditClick',
	        value: function btnEditClick() {
	            // переводим документ в режим редактирования, сохранен = false
	            if (!this.props.docStatus || this.props.docStatus < 2) {
	                //this.docId
	                if (this.props.history) {
	                    return this.props.history.push('/raama/' + value);
	                }

	                if (this.props.btnEditClick) {
	                    this.props.btnEditClick();
	                } else {
	                    console.error('method edit not exists in props');
	                }
	            }
	        }
	    }, {
	        key: 'btnPrintClick',
	        value: function btnPrintClick() {
	            if (this.props.btnPrintClick) {
	                this.props.btnPrintClick();
	            }
	        }
	    }, {
	        key: 'btnPdfClick',
	        value: function btnPdfClick() {
	            if (this.props.btnPdfClick) {
	                this.props.btnPdfClick();
	            }
	        }

	        /**
	         * обработчик для кнопки email
	         */

	    }, {
	        key: 'btnEmailClick',
	        value: function btnEmailClick() {
	            if (this.props.btnEmailClick) {
	                this.props.btnEmailClick();
	            }
	        }

	        /**
	         * обработчик для кнопки Save
	         */

	    }, {
	        key: 'btnSaveClick',
	        value: function btnSaveClick() {
	            // валидатор
	            var validationMessage = this.props.validator ? this.props.validator() : '',
	                isValid = this.props.validator ? !validationMessage : true;

	            if (isValid) {
	                // если прошли валидацию, то сохранеям
	                if (this.props.btnSaveClick) {
	                    this.props.btnSaveClick();
	                } else {
	                    console.error('method save not exists in props');
	                }
	            } else {
	                console.log('Document is not valid', isValid);
	            }
	        }

	        /**
	         * Обработчик для события клика для кнопки Отказ
	         */

	    }, {
	        key: 'btnCancelClick',
	        value: function btnCancelClick() {
	            if (this.props.btnCancelClick) {
	                this.props.btnCancelClick();
	            } else {
	                console.error('method cancel not exists in props');
	            }
	        }
	    }, {
	        key: 'btnLogsClick',
	        value: function btnLogsClick() {
	            if (this.props.btnLogsClick) {
	                this.props.btnLogsClick();
	            }
	        }
	    }, {
	        key: 'handleButtonTask',
	        value: function handleButtonTask(taskName, kpv, gruppId, tekst, kogus) {
	            // ишем таску
	            var task = this.props.bpm.find(function (row) {
	                return row.name === taskName;
	            });

	            if (task) {
	                // метод вызывается при выборе задачи
	                return this.props.btnTaskClick(task.name, kpv, gruppId, tekst, kogus);
	            }
	        }
	    }, {
	        key: 'handleSelectTask',
	        value: function handleSelectTask(e) {
	            // метод вызывается при выборе задачи
	            var taskValue = e.target.value;
	            if (this.props.btnTaskClick) {
	                return this.props.btnTaskClick(taskValue);
	            }
	        }
	    }]);

	    return DocToolBar;
	}(React.PureComponent);

	DocToolBar.propTypes = {
	    bpm: PropTypes.array,
	    edited: PropTypes.bool,
	    docStatus: PropTypes.number,
	    validator: PropTypes.func
	};

	DocToolBar.defaultProps = {
	    bpm: [],
	    edited: false,
	    docStatus: 0
	};

	//module.exports = withRouter(DocToolBar);
	module.exports = DocToolBar;

/***/ }),
/* 229 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var PropTypes = __webpack_require__(11);

	var React = __webpack_require__(10),
	    styles = __webpack_require__(74),
	    Button = __webpack_require__(75),
	    ICON = 'save';

	var ButtonRegisterSave = function (_React$PureComponent) {
	    _inherits(ButtonRegisterSave, _React$PureComponent);

	    // кнопка создания документа в регистрах
	    function ButtonRegisterSave(props) {
	        _classCallCheck(this, ButtonRegisterSave);

	        var _this = _possibleConstructorReturn(this, (ButtonRegisterSave.__proto__ || Object.getPrototypeOf(ButtonRegisterSave)).call(this, props));

	        _this.state = {
	            disabled: props.disabled
	        };
	        return _this;
	    }

	    _createClass(ButtonRegisterSave, [{
	        key: 'handleClick',
	        value: function handleClick(e) {
	            // дисейблим кнопку
	            if (!this.state.disabled) {
	                this.setState({ disabled: true });
	                return this.props.onClick();
	            }
	        }
	    }, {
	        key: 'componentDidUpdate',
	        value: function componentDidUpdate(nextProps) {
	            this.setState({ disabled: nextProps.disabled });
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var _this2 = this;

	            return React.createElement(
	                Button,
	                {
	                    ref: 'btnSave',
	                    value: 'Save',
	                    show: this.props.show,
	                    disabled: this.state.disabled,
	                    onClick: function onClick(e) {
	                        return _this2.handleClick(e);
	                    } },
	                React.createElement('img', { ref: 'image', src: styles.icons[ICON] })
	            );
	        }
	    }]);

	    return ButtonRegisterSave;
	}(React.PureComponent);

	ButtonRegisterSave.propTypes = {
	    onClick: PropTypes.func.isRequired,
	    disabled: PropTypes.bool
	};

	ButtonRegisterSave.defaultProps = {
	    disabled: false,
	    show: true
	};

	module.exports = ButtonRegisterSave;

/***/ }),
/* 230 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var PropTypes = __webpack_require__(11);

	var React = __webpack_require__(10),
	    styles = __webpack_require__(74),
	    Button = __webpack_require__(75),
	    ICON = 'cancel';

	var ButtonRegisterCancel = function (_React$PureComponent) {
	    _inherits(ButtonRegisterCancel, _React$PureComponent);

	    // кнопка создания документа в регистрах
	    function ButtonRegisterCancel(props) {
	        _classCallCheck(this, ButtonRegisterCancel);

	        var _this = _possibleConstructorReturn(this, (ButtonRegisterCancel.__proto__ || Object.getPrototypeOf(ButtonRegisterCancel)).call(this, props));

	        _this.state = {
	            disabled: props.disabled
	        };
	        return _this;
	    }

	    _createClass(ButtonRegisterCancel, [{
	        key: 'handleClick',
	        value: function handleClick(e) {
	            return this.props.onClick();
	        }
	    }, {
	        key: 'componentDidUpdate',
	        value: function componentDidUpdate(nextProps) {
	            this.setState({ disabled: nextProps.disabled });
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var _this2 = this;

	            return React.createElement(
	                Button,
	                {
	                    ref: 'btnCancel',
	                    value: 'Cancel',
	                    show: this.props.show,
	                    disabled: this.state.disabled,
	                    onClick: function onClick(e) {
	                        return _this2.handleClick(e);
	                    } },
	                React.createElement('img', { ref: 'image', src: styles.icons[ICON] })
	            );
	        }
	    }]);

	    return ButtonRegisterCancel;
	}(React.PureComponent);

	ButtonRegisterCancel.propTypes = {
	    onClick: PropTypes.func.isRequired,
	    disabled: PropTypes.bool
	};

	ButtonRegisterCancel.defaultProps = {
	    disabled: false,
	    show: true
	};

	module.exports = ButtonRegisterCancel;

/***/ }),
/* 231 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var PropTypes = __webpack_require__(11);

	var React = __webpack_require__(10),
	    styles = __webpack_require__(232),
	    DataGrid = __webpack_require__(183),
	    Button = __webpack_require__(75),
	    BtnInfo = __webpack_require__(81),
	    ModalPage = __webpack_require__(171);

	var GRID_CONFIG = __webpack_require__(86).logs.gridConfig;

	var ShowLogs = function (_React$PureComponent) {
	    _inherits(ShowLogs, _React$PureComponent);

	    function ShowLogs(props) {
	        _classCallCheck(this, ShowLogs);

	        var _this = _possibleConstructorReturn(this, (ShowLogs.__proto__ || Object.getPrototypeOf(ShowLogs)).call(this, props));

	        _this.state = {
	            show: !!_this.props.data.length
	        };

	        _this.modalPageClick = _this.modalPageClick.bind(_this);
	        return _this;
	    }

	    _createClass(ShowLogs, [{
	        key: 'render',
	        value: function render() {
	            var _this2 = this;

	            return this.state.show ? this.modalPage() : React.createElement(
	                Button,
	                {
	                    ref: 'btnLogs',
	                    value: 'Loggid',
	                    show: this.props.show,
	                    onClick: function onClick(e) {
	                        return _this2.handleClick(e);
	                    } },
	                React.createElement('img', { ref: 'image', src: styles.button.icon })
	            );
	        }
	    }, {
	        key: 'handleClick',
	        value: function handleClick() {
	            this.props.onClick();
	            this.setState({
	                show: true
	            });
	        }
	    }, {
	        key: 'modalPage',
	        value: function modalPage() {
	            var modalObjects = ['btnOk'];

	            return React.createElement(
	                ModalPage,
	                {
	                    modalObjects: modalObjects,
	                    ref: 'modalpage-grid',
	                    show: true,
	                    modalPageBtnClick: this.modalPageClick,
	                    modalPageName: 'Loggid' },
	                React.createElement(
	                    'div',
	                    { style: styles.btnInfo },
	                    React.createElement(BtnInfo, { ref: 'btnInfo',
	                        value: '',
	                        docTypeId: 'logid',
	                        show: true })
	                ),
	                React.createElement(
	                    'div',
	                    { ref: 'grid-row-container' },
	                    React.createElement(DataGrid, { gridData: this.props.data.data,
	                        gridColumns: GRID_CONFIG,
	                        showToolBar: false,
	                        ref: 'data-grid' })
	                )
	            );
	        }
	    }, {
	        key: 'modalPageClick',
	        value: function modalPageClick(event) {
	            if (event === 'Ok') {

	                // показать новое значение
	                this.setState({ show: false });
	            }
	        }
	    }]);

	    return ShowLogs;
	}(React.PureComponent);

	ShowLogs.propTypes = {
	    show: PropTypes.bool
	};

	ShowLogs.defaultProps = {
	    show: true
	};

	module.exports = ShowLogs;

/***/ }),
/* 232 */
/***/ (function(module, exports) {

	'use strict';module.exports={wrapper:{margin:'5px',display:'flex',width:'95%'},button:{icon:'/images/icons/info.png',width:'10%'},btnInfo:{display:'flex',flexDirection:'row-reverse'}};

/***/ }),
/* 233 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var PropTypes = __webpack_require__(11);
	var getNow = __webpack_require__(234);
	var React = __webpack_require__(10),
	    Button = __webpack_require__(235),
	    ButtonOpen = __webpack_require__(75),
	    Select = __webpack_require__(164),
	    InputDate = __webpack_require__(236),
	    InputText = __webpack_require__(212),
	    InputNumber = __webpack_require__(238),
	    ModalPage = __webpack_require__(171),
	    styles = __webpack_require__(240);
	var DocContext = __webpack_require__(1);

	var TaskWidget = function (_React$PureComponent) {
	    _inherits(TaskWidget, _React$PureComponent);

	    function TaskWidget(props) {
	        _classCallCheck(this, TaskWidget);

	        var _this = _possibleConstructorReturn(this, (TaskWidget.__proto__ || Object.getPrototypeOf(TaskWidget)).call(this, props));

	        _this.state = {
	            taskList: props.taskList || [],
	            actualTask: props.taskList[0].name,
	            showList: false,
	            showModal: false,
	            showDate: true,
	            titleDate: null,
	            showViitenumber: false,
	            titleViitenumber: null,
	            showYksus: props.kasShowYksus,
	            titleYksus: null,
	            showKogus: props.kasShowKogus,
	            titleKogus: null,
	            viitenumber: null,
	            yksus: 0,
	            kogus: DocContext.mkJaak ? DocContext.mkJaak : 0,
	            seisuga: getNow()
	        };
	        _this.handleSelectTask = _this.handleSelectTask.bind(_this);
	        _this.handleButtonTask = _this.handleButtonTask.bind(_this);
	        _this.handleButtonOpenClick = _this.handleButtonOpenClick.bind(_this);
	        _this.modalPageClick = _this.modalPageClick.bind(_this);
	        _this.handleInputChange = _this.handleInputChange.bind(_this);
	        return _this;
	    }

	    _createClass(TaskWidget, [{
	        key: 'render',
	        value: function render() {
	            var _this2 = this;

	            if (!this.state.taskList) return React.createElement('div', null);

	            var tasks = this.state.taskList.map(function (task, index) {
	                return { id: index++, name: ' ', kood: task.name };
	            });

	            var taskId = tasks.findIndex(function (task) {
	                return task.name == _this2.state.actualTask;
	            });

	            return React.createElement(
	                'div',
	                { style: styles.wrapper },
	                React.createElement(
	                    'div',
	                    null,
	                    React.createElement(
	                        'div',
	                        { style: styles.wrapper },
	                        React.createElement(Button, {
	                            ref: 'buttonTask',
	                            onClick: this.handleButtonTask,
	                            value: this.state.actualTask
	                        }),
	                        React.createElement(ButtonOpen, {
	                            ref: 'buttonOpenList',
	                            onClick: this.handleButtonOpenClick,
	                            value: 'v' })
	                    ),
	                    this.state.showList ? React.createElement(Select, { name: 'name',
	                        style: styles.select,
	                        data: tasks,
	                        collId: 'kood',
	                        value: this.state.actualTask || '',
	                        defaultValue: this.state.actualTask,
	                        ref: 'select-name',
	                        onChange: this.handleSelectTask,
	                        readOnly: false }) : null,
	                    this.state.showModal ? React.createElement(
	                        ModalPage,
	                        {
	                            modalPageBtnClick: this.modalPageClick,
	                            modalPageName: 'Tegevus',
	                            show: true,
	                            modalObjects: ['btnOk', 'btnCancel']
	                        },
	                        'Kas k\xE4ivata ' + this.state.actualTask + ' ?',
	                        this.state.showDate ? React.createElement(InputDate, { title: this.state.titleDate ? this.state.titleDate : 'Seisuga ',
	                            name: 'seisuga',
	                            value: this.state.seisuga,
	                            ref: 'input-kpv',
	                            readOnly: false,
	                            onChange: this.handleInputChange }) : null,
	                        this.state.showYksus ? React.createElement(Select, { title: this.state.titleYksus ? this.state.titleYksus : "Üksus:",
	                            name: 'yksus',
	                            libs: 'lapse_grupp',
	                            data: DocContext.libs.lapse_grupp ? DocContext.libs.lapse_grupp : [],
	                            ref: 'select-lapse_grupp',
	                            collId: 'id',
	                            onChange: this.handleInputChange,
	                            value: this.state.yksus || 0,
	                            disabled: false,
	                            readOnly: false
	                        }) : null,
	                        this.state.showViitenumber ? React.createElement(InputText, {
	                            title: this.state.titleViitenumber ? this.state.titleViitenumber : "Viitenumber:",
	                            name: 'viitenumber',
	                            ref: 'input-viitenumber',
	                            onChange: this.handleInputChange,
	                            value: this.state.viitenumber,
	                            readOnly: false
	                        }) : null,
	                        this.state.showKogus ? React.createElement(InputNumber, { title: this.state.titleKogus ? this.state.titleKogus : 'Väärtus',
	                            name: 'kogus',
	                            value: Number(this.state.kogus),
	                            ref: 'input-kogus',
	                            readOnly: false,
	                            max: DocContext.mkJaak ? DocContext.mkJaak : 999999999,
	                            onChange: this.handleInputChange }) : null
	                    ) : null
	                )
	            );
	        }
	    }, {
	        key: 'modalPageClick',
	        value: function modalPageClick(btnEvent) {
	            this.setState({ showModal: false });
	            if (btnEvent === 'Ok') {
	                this.props.handleButtonTask(this.state.actualTask, this.state.seisuga, this.state.yksus, this.state.viitenumber, this.state.kogus);
	            }
	        }
	    }, {
	        key: 'handleButtonOpenClick',
	        value: function handleButtonOpenClick() {
	            var isShow = !this.state.showList;
	            this.setState({ showList: isShow });
	        }
	    }, {
	        key: 'handleSelectTask',
	        value: function handleSelectTask(name, value) {
	            var isShow = !this.state.showList;
	            var task = this.state.taskList.find(function (task) {
	                return task.name == value;
	            });
	            var isShowDate = task && task.hasOwnProperty('hideDate') ? !task.hideDate : true;
	            var showYksus = task && task.hasOwnProperty('showYksus') ? task.showYksus : false;
	            var showViitenumber = task && task.hasOwnProperty('showViitenumber') ? task.showViitenumber : false;
	            var showKogus = task && task.hasOwnProperty('showKogus') ? task.showKogus : false;

	            this.setState({
	                showList: isShow,
	                actualTask: value,
	                showDate: isShowDate,
	                titleDate: task.titleDate ? task.titleDate : null,
	                showYksus: showYksus,
	                showViitenumber: showViitenumber,
	                titleViitenumber: task.titleViitenumber ? task.titleViitenumber : null,
	                showKogus: showKogus,
	                titleKogus: task.titleKogus ? task.titleKogus : null
	            });
	        }
	    }, {
	        key: 'handleButtonTask',
	        value: function handleButtonTask() {
	            var _this3 = this;

	            var showYksus = this.state.showYksus;
	            var showViitenumber = this.state.showViitenumber;
	            var showKogus = this.state.showKogus;
	            var task = this.state.taskList.find(function (task) {
	                return task.name == _this3.state.actualTask;
	            });
	            var isShowDate = task && task.hasOwnProperty('hideDate') ? !task.hideDate : true;
	            var isShowViitenumber = task && task.hasOwnProperty('showViitenumber') ? task.showViitenumber : false;
	            var isShowKogus = task && task.hasOwnProperty('showKogus') ? task.showKogus : false;

	            showYksus = task && task.hasOwnProperty('showYksus') ? task.showYksus : false;

	            this.setState({
	                showModal: true,
	                showYksus: showYksus,
	                showDate: isShowDate,
	                showKogus: isShowKogus,
	                showViitenumber: isShowViitenumber
	            });
	        }

	        //will save value

	    }, {
	        key: 'handleInputChange',
	        value: function handleInputChange(name, value) {
	            var stateValue = {
	                seisuga: this.state.seisuga,
	                yksus: this.state.yksus,
	                viitenumber: this.state.viitenumber,
	                kogus: this.state.kogus
	            };
	            stateValue[name] = value;
	            this.setState(stateValue);
	        }
	    }]);

	    return TaskWidget;
	}(React.PureComponent);

	TaskWidget.propTypes = {
	    taskList: PropTypes.array,
	    handleButtonTask: PropTypes.func.isRequired,
	    handleSelectTask: PropTypes.func.isRequired,
	    kasShowYksus: PropTypes.bool,
	    kasShowKogus: PropTypes.bool,
	    kasShowViitenumber: PropTypes.bool
	};

	TaskWidget.defaultProps = {
	    taskList: [],
	    kasShowYksus: false,
	    kasShowKogus: false,
	    kasShowViitenumber: false
	};
	module.exports = TaskWidget;

/***/ }),
/* 234 */
/***/ (function(module, exports) {

	"use strict";// will return date in format 'YYYY-MM-DD'
	module.exports=function(){var now=arguments.length>0&&arguments[0]!==undefined?arguments[0]:new Date();return now.toISOString().substring(0,10);};

/***/ }),
/* 235 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var PropTypes = __webpack_require__(11);

	var React = __webpack_require__(10),
	    styles = __webpack_require__(74),
	    Button = __webpack_require__(75),
	    ICON = 'execute';

	var ButtonRegisterExecute = function (_React$PureComponent) {
	    _inherits(ButtonRegisterExecute, _React$PureComponent);

	    // кнопка создания документа в регистрах
	    function ButtonRegisterExecute(props) {
	        _classCallCheck(this, ButtonRegisterExecute);

	        var _this = _possibleConstructorReturn(this, (ButtonRegisterExecute.__proto__ || Object.getPrototypeOf(ButtonRegisterExecute)).call(this, props));

	        _this.handleClick = _this.handleClick.bind(_this);
	        return _this;
	    }

	    _createClass(ButtonRegisterExecute, [{
	        key: 'handleClick',
	        value: function handleClick() {
	            if (this.props.onClick) {
	                this.props.onClick();
	            }
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            return React.createElement(
	                Button,
	                {
	                    ref: 'btnExecute',
	                    value: this.props.value,
	                    show: this.props.show,
	                    disabled: this.props.disabled,
	                    onClick: this.handleClick },
	                React.createElement('img', { ref: 'image', src: styles.icons[ICON] })
	            );
	        }
	    }]);

	    return ButtonRegisterExecute;
	}(React.PureComponent);

	ButtonRegisterExecute.propTypes = {
	    onClick: PropTypes.func.isRequired,
	    value: PropTypes.string.isRequired
	};

	ButtonRegisterExecute.defaultProps = {
	    disabled: false,
	    show: true
	};

	module.exports = ButtonRegisterExecute;

/***/ }),
/* 236 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var PropTypes = __webpack_require__(11);
	var radium = __webpack_require__(88);

	var React = __webpack_require__(10),
	    styles = __webpack_require__(237);

	var getTextValue = __webpack_require__(76);
	var currentDate = new Date().toLocaleDateString();

	var InputDate = function (_React$PureComponent) {
	    _inherits(InputDate, _React$PureComponent);

	    function InputDate(props) {
	        _classCallCheck(this, InputDate);

	        var _this = _possibleConstructorReturn(this, (InputDate.__proto__ || Object.getPrototypeOf(InputDate)).call(this, props));

	        _this.state = {
	            value: props.value || '',
	            readOnly: props.readOnly
	        };
	        _this.onChange = _this.onChange.bind(_this);
	        return _this;
	    }

	    /**
	     * установит фокус на элементы
	     */


	    _createClass(InputDate, [{
	        key: 'focus',
	        value: function focus() {
	            this.refs['input'].focus();
	        }

	        // will update state if props changed

	    }, {
	        key: 'onChange',
	        value: function onChange(e) {
	            var fieldValue = e.target.value,
	                validation = this.validate(fieldValue);

	            if (fieldValue == null) {
	                // если значение нул, то пусть будет nul
	                validation = true;
	            }

	            if (validation) {
	                this.setState({ value: fieldValue });

	                if (this.props.onChange) {
	                    // если задан обработчик, вернем его
	                    this.props.onChange(this.props.name, fieldValue);
	                }
	            }
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var inputPlaceHolder = this.props.placeholder || this.props.title,
	                inputStyle = Object.assign({}, styles.input, this.props.width ? { width: this.props.width } : {}, this.state.readOnly ? styles.readOnly : {}, this.props.styles ? this.props.styles : {});

	            return React.createElement(
	                'div',
	                { style: styles.wrapper },
	                React.createElement(
	                    'label',
	                    { style: styles.label, htmlFor: this.props.name, ref: 'label' },
	                    getTextValue(this.props.title)
	                ),
	                React.createElement('input', { type: 'date',
	                    style: inputStyle,
	                    name: this.props.name,
	                    ref: 'input',
	                    value: this.state.value || '',
	                    readOnly: this.state.readOnly,
	                    title: this.props.title,
	                    placeholder: inputPlaceHolder,
	                    min: this.props.min,
	                    max: this.props.max,
	                    onChange: this.onChange,
	                    disabled: this.props.disabled
	                })
	            );
	        }
	    }, {
	        key: 'validate',
	        value: function validate(value) {
	            var result = true;

	            // проверка на мин , мах
	            if (this.props.min && this.props.max && value) {
	                var dateValue = new Date(value);
	                result = dateValue > this.props.min && dateValue < this.props.max;
	            }

	            return result;
	        }
	    }], [{
	        key: 'getDerivedStateFromProps',
	        value: function getDerivedStateFromProps(nextProps, prevState) {
	            if (nextProps.value !== prevState.value || nextProps.readOnly !== prevState.readOnly) {
	                return { value: nextProps.value, readOnly: nextProps.readOnly };
	            } else return null;
	        }
	    }]);

	    return InputDate;
	}(React.PureComponent);

	InputDate.propTypes = {
	    name: PropTypes.string.isRequired,
	    value: PropTypes.string,
	    min: PropTypes.string,
	    max: PropTypes.string,
	    readOnly: PropTypes.bool,
	    disabled: PropTypes.bool,
	    valid: PropTypes.bool,
	    pattern: PropTypes.string,
	    width: PropTypes.string,
	    title: PropTypes.string,
	    placeholder: PropTypes.string
	};

	InputDate.defaultProps = {
	    readOnly: false,
	    disabled: false,
	    valid: true,
	    value: String(currentDate),
	    title: ''
	};

	module.exports = radium(InputDate);

/***/ }),
/* 237 */
/***/ (function(module, exports) {

	'use strict';module.exports={input:{width:'70%',borderRadius:'3px',margin:'5px 2px',':focus':{backgroundColor:'lightpink'},border:'1px solid gray',height:'30px'},focused:{backgroundColor:'lightblue'},readOnly:{backgroundColor:'#F3EFEF'},wrapper:{margin:'5px',display:'flex',width:'95%'},label:{width:'30%',margin:'5px'}};

/***/ }),
/* 238 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var React = __webpack_require__(10),
	    styles = __webpack_require__(239);
	var radium = __webpack_require__(88);
	var getTextValue = __webpack_require__(76);

	var PropTypes = __webpack_require__(11);

	var Input = function (_React$PureComponent) {
	    _inherits(Input, _React$PureComponent);

	    function Input(props) {
	        _classCallCheck(this, Input);

	        var _this = _possibleConstructorReturn(this, (Input.__proto__ || Object.getPrototypeOf(Input)).call(this, props));

	        _this.state = {
	            value: props.value,
	            readOnly: props.readOnly,
	            disabled: props.disabled,
	            valid: props.valid
	        };
	        _this.onChange = _this.onChange.bind(_this);
	        return _this;
	    }

	    // will update state if props changed


	    _createClass(Input, [{
	        key: 'onChange',
	        value: function onChange(e) {
	            var fieldValue = e.target.value;
	            this.setState({ value: fieldValue });

	            if (this.props.onChange) {
	                this.props.onChange(this.props.name, fieldValue);
	            }
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var inputPlaceHolder = this.props.placeholder || this.props.name,
	                inputStyle = Object.assign({}, styles.input, this.props.style ? this.props.style : {}, this.props.width ? { width: this.props.width } : {}, this.state.readOnly ? styles.readOnly : {}),
	                inputMinValue = this.props.min,
	                inputMaxValue = this.props.max;

	            return React.createElement(
	                'div',
	                { style: styles.wrapper },
	                React.createElement(
	                    'label',
	                    { style: styles.label, htmlFor: this.props.name, ref: 'label' },
	                    getTextValue(this.props.title)
	                ),
	                React.createElement('input', { type: this.props.type ? this.props.type : 'number',
	                    id: this.props.name,
	                    ref: 'input',
	                    style: inputStyle,
	                    name: this.props.name,
	                    value: this.state.value,
	                    readOnly: this.state.readOnly,
	                    title: this.props.title,
	                    placeholder: inputPlaceHolder,
	                    onChange: this.onChange,
	                    min: inputMinValue,
	                    max: inputMaxValue,
	                    pattern: '\\d+(\\.\\d{2})?',
	                    step: '0.01',

	                    disabled: this.props.disabled
	                })
	            );
	        }

	        /**
	         * установит фокус на элементы
	         */

	    }, {
	        key: 'focus',
	        value: function focus() {
	            this.refs['input'].focus();
	        }
	    }], [{
	        key: 'getDerivedStateFromProps',
	        value: function getDerivedStateFromProps(nextProps, prevState) {
	            if (nextProps.value !== prevState.value || nextProps.readOnly !== prevState.readOnly) {
	                return { value: nextProps.value, readOnly: nextProps.readOnly };
	            } else return null;
	        }
	    }]);

	    return Input;
	}(React.PureComponent);

	Input.propTypes = {
	    name: PropTypes.string.isRequired,
	    value: PropTypes.number,
	    readOnly: PropTypes.bool,
	    disabled: PropTypes.bool,
	    valid: PropTypes.bool,
	    placeholder: PropTypes.string,
	    pattern: PropTypes.string,
	    title: PropTypes.string,
	    min: PropTypes.number,
	    max: PropTypes.number
	};

	Input.defaultProps = {
	    readOnly: false,
	    disabled: false,
	    valid: true,
	    min: -999999999,
	    max: 999999999
	};

	module.exports = radium(Input);

/***/ }),
/* 239 */
/***/ (function(module, exports) {

	'use strict';module.exports={input:{width:'70%',margin:'5px 2px',borderRadius:'3px',':focus':{backgroundColor:'lightpink'},border:'1px solid gray',height:'30px'},focused:{backgroundColor:'lightblue'},readOnly:{backgroundColor:'#F3EFEF'},wrapper:{margin:'5px',display:'flex',width:'95%'},label:{width:'30%',margin:'5px'}};

/***/ }),
/* 240 */
/***/ (function(module, exports) {

	'use strict';module.exports={wrapper:{display:'inline-flex'},buttomOpen:{display:'flex'},select:{width:'auto',position:'absolute',height:'30px'}};

/***/ }),
/* 241 */
/***/ (function(module, exports) {

	'use strict';module.exports={docRow:{display:'flex',flexDirection:'row'/*
	                border: '1px solid blue'
	        */},docColumn:{display:'flex',flexDirection:'column',/*
	                border: '1px solid yellow',
	        */width:'50%'},doc:{display:'flex',flexDirection:'column'/*
	                border: '1px solid brown'
	        */},ok:{backgroundColor:'lightgreen',width:'100%',textAlign:'right'},error:{backgroundColor:'lightcoral',width:'100%',textAlign:'right'},notValid:{backgroundColor:'yellow',width:'100%',textAlign:'right'},modalValidate:{iconImage:'/images/icons/info.png'}};

/***/ }),
/* 242 */,
/* 243 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var styles = __webpack_require__(244);
	var Loading = function Loading(props) {
	    return React.createElement(
	        'div',
	        { style: styles.window },
	        React.createElement(
	            'label',
	            { style: styles.label },
	            props.label
	        )
	    );
	};

	module.exports = Loading;

/***/ }),
/* 244 */
/***/ (function(module, exports) {

	'use strict';module.exports={label:{width:'auto'},window:{display:'flex',justifyContent:'center',alignItems:'center'}};

/***/ }),
/* 245 */,
/* 246 */,
/* 247 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var React = __webpack_require__(10);
	var PropTypes = __webpack_require__(11);

	var DocumentTemplate = __webpack_require__(223),
	    InputText = __webpack_require__(212),
	    DataGrid = __webpack_require__(183),
	    TextArea = __webpack_require__(216),
	    ModalPage = __webpack_require__(171),
	    Select = __webpack_require__(164),
	    CheckBox = __webpack_require__(187),
	    styles = __webpack_require__(248);

	var LIB_OBJS = __webpack_require__(86).REKV.LIB_OBJS;

	/**
	 * Класс реализует документ справочника признаков.
	 */

	var Rekv = function (_React$PureComponent) {
	    _inherits(Rekv, _React$PureComponent);

	    function Rekv(props) {
	        _classCallCheck(this, Rekv);

	        var _this = _possibleConstructorReturn(this, (Rekv.__proto__ || Object.getPrototypeOf(Rekv)).call(this, props));

	        _this.state = {
	            docId: props.docId ? props.docId : Number(props.match.params.docId),
	            loadedData: false
	        };
	        _this.renderer = _this.renderer.bind(_this);
	        _this.createGridRow = _this.createGridRow.bind(_this);
	        return _this;
	    }

	    _createClass(Rekv, [{
	        key: 'render',
	        value: function render() {
	            return React.createElement(DocumentTemplate, { docId: this.state.docId,
	                ref: 'document',
	                docTypeId: 'REKV',
	                history: this.props.history,
	                module: this.props.module,
	                libs: LIB_OBJS,
	                initData: this.props.initData,
	                renderer: this.renderer,
	                createGridRow: this.createGridRow

	            });
	        }

	        /**
	         * Метод вернет кастомный компонент
	         * @param self
	         * @returns {*}
	         */

	    }, {
	        key: 'renderer',
	        value: function renderer(self) {
	            if (!self.docData) {
	                return null;
	            }
	            var gridData = self.docData.gridData,
	                gridColumns = self.docData.gridConfig;

	            return React.createElement(
	                'div',
	                { style: styles.doc },
	                React.createElement(
	                    'div',
	                    { style: styles.docRow },
	                    React.createElement(InputText, { title: 'Regkood: ',
	                        name: 'regkood',
	                        ref: 'input-regkood',
	                        readOnly: !self.state.edited,
	                        value: self.docData.regkood || '',
	                        onChange: self.handleInputChange })
	                ),
	                React.createElement(
	                    'div',
	                    { style: styles.docRow },
	                    React.createElement(InputText, { title: 'KBM kood: ',
	                        name: 'kbmkood',
	                        ref: 'input-kbmkood',
	                        readOnly: !self.state.edited,
	                        value: self.docData.kbmkood || '',
	                        onChange: self.handleInputChange })
	                ),
	                React.createElement(
	                    'div',
	                    { style: styles.docRow },
	                    React.createElement(InputText, {
	                        title: 'Nimetus: ',
	                        name: 'nimetus',
	                        ref: 'input-nimetus',
	                        readOnly: !self.state.edited,
	                        value: self.docData.nimetus || '',
	                        onChange: self.handleInputChange })
	                ),
	                React.createElement(
	                    'div',
	                    { style: styles.docRow },
	                    React.createElement(InputText, { title: 'T\xE4is. nimetus: ',
	                        name: 'muud',
	                        ref: 'input-muud',
	                        readOnly: !self.state.edited,
	                        value: self.docData.muud || '',
	                        onChange: self.handleInputChange })
	                ),
	                React.createElement(
	                    'div',
	                    { style: styles.docRow },
	                    React.createElement(Select, { title: 'Asutuse liik:',
	                        name: 'liik',
	                        data: self.libs['asutuse_liik'],
	                        value: self.docData.liik || '',
	                        defaultValue: self.docData.liik || '',
	                        ref: 'liik',
	                        collId: 'kood',
	                        readOnly: !self.state.edited,
	                        onChange: self.handleInputChange })
	                ),
	                React.createElement(
	                    'div',
	                    { style: styles.docRow },
	                    React.createElement(TextArea, { title: 'Aadress: ',
	                        name: 'aadress',
	                        ref: 'textarea-aadress',
	                        onChange: self.handleInputChange,
	                        value: self.docData.aadress || '',
	                        readOnly: !self.state.edited })
	                ),
	                React.createElement(
	                    'div',
	                    { style: styles.docRow },
	                    React.createElement(InputText, { title: 'Juhataja: ',
	                        name: 'juht',
	                        ref: 'input-juht',
	                        readOnly: !self.state.edited,
	                        value: self.docData.juht || '',
	                        onChange: self.handleInputChange })
	                ),
	                React.createElement(
	                    'div',
	                    { style: styles.docRow },
	                    React.createElement(InputText, { title: 'Raamatupidaja: ',
	                        name: 'raama',
	                        ref: 'input-raama',
	                        readOnly: !self.state.edited,
	                        value: self.docData.raama || '',
	                        onChange: self.handleInputChange })
	                ),
	                React.createElement(
	                    'div',
	                    { style: styles.docRow },
	                    React.createElement(InputText, { title: 'Email: ',
	                        name: 'email',
	                        ref: 'input-email',
	                        readOnly: !self.state.edited,
	                        value: self.docData.email || '',
	                        onChange: self.handleInputChange })
	                ),
	                React.createElement(
	                    'div',
	                    { style: styles.docRow },
	                    React.createElement(InputText, { title: 'Omniva salas\xF5na: ',
	                        name: 'earved',
	                        ref: 'input-earved',
	                        readOnly: !self.state.edited,
	                        value: self.docData.earved || '',
	                        onChange: self.handleInputChange })
	                ),
	                React.createElement(
	                    'div',
	                    { style: styles.docRow },
	                    React.createElement(InputText, { title: 'E-arve asutuse reg.kood: ',
	                        name: 'earve_regkood',
	                        ref: 'input-earve_regkood',
	                        readOnly: !self.state.edited,
	                        value: self.docData.earve_regkood || '',
	                        onChange: self.handleInputChange })
	                ),
	                React.createElement(
	                    'div',
	                    { style: styles.docRow },
	                    React.createElement(
	                        'div',
	                        { style: styles.docColumn },
	                        React.createElement(InputText, { title: 'SEB e-arve aa: ',
	                            name: 'seb_earve',
	                            ref: 'input-seb_earve',
	                            readOnly: !self.state.edited,
	                            value: self.docData.seb_earve || '',
	                            onChange: self.handleInputChange })
	                    ),
	                    React.createElement(
	                        'div',
	                        { style: styles.docColumn },
	                        React.createElement(InputText, { title: 'SEB kasutaja tunnus: ',
	                            name: 'seb',
	                            ref: 'input-seb_parool',
	                            readOnly: !self.state.edited,
	                            value: self.docData.seb || '',
	                            onChange: self.handleInputChange })
	                    )
	                ),
	                React.createElement(
	                    'div',
	                    { style: styles.docRow },
	                    React.createElement(
	                        'div',
	                        { style: styles.docColumn },
	                        React.createElement(InputText, { title: 'SWED e-arve aa: ',
	                            name: 'swed_earve',
	                            ref: 'input-swed-earve',
	                            readOnly: !self.state.edited,
	                            value: self.docData.swed_earve || '',
	                            onChange: self.handleInputChange })
	                    ),
	                    React.createElement(
	                        'div',
	                        { style: styles.docColumn },
	                        React.createElement(InputText, { title: 'SWED kasutaja tunnus: ',
	                            name: 'swed',
	                            ref: 'input-swed_parool',
	                            readOnly: !self.state.edited,
	                            value: self.docData.swed || '',
	                            onChange: self.handleInputChange })
	                    )
	                ),
	                React.createElement(
	                    'div',
	                    { style: styles.docRow },
	                    React.createElement(DataGrid, { source: 'details',
	                        gridData: gridData,
	                        gridColumns: gridColumns,
	                        showToolBar: self.state.edited,
	                        handleGridRow: this.handleGridRow,
	                        handleGridBtnClick: self.handleGridBtnClick,
	                        readOnly: !self.state.edited,
	                        style: styles.grid.headerTable,
	                        ref: 'data-grid' })
	                ),
	                self.state.gridRowEdit ? this.createGridRow(self) : null
	            );
	        }

	        /**
	         * Создаст компонет строки грида
	         * @returns {XML}
	         */

	    }, {
	        key: 'createGridRow',
	        value: function createGridRow(self) {

	            var row = self.gridRowData ? self.gridRowData : {},
	                validateMessage = '',
	                // self.state.warning
	            buttonOkReadOnly = validateMessage.length > 0 || !self.state.checked,
	                modalObjects = ['btnOk', 'btnCancel'];

	            if (buttonOkReadOnly) {
	                // уберем кнопку Ок
	                modalObjects.splice(0, 1);
	            }

	            if (!row) return React.createElement('div', null);

	            return React.createElement(
	                'div',
	                { className: '.modalPage' },
	                React.createElement(
	                    ModalPage,
	                    {
	                        modalObjects: modalObjects,
	                        ref: 'modalpage-grid-row',
	                        show: true,
	                        modalPageBtnClick: self.modalPageClick,
	                        modalPageName: 'Rea lisamine / parandamine' },
	                    React.createElement(
	                        'div',
	                        { ref: 'grid-row-container' },
	                        self.state.gridWarning.length ? React.createElement(
	                            'div',
	                            { style: styles.docRow },
	                            React.createElement(
	                                'span',
	                                null,
	                                self.state.gridWarning
	                            )
	                        ) : null,
	                        React.createElement(
	                            'div',
	                            { style: styles.docRow },
	                            React.createElement(InputText, { title: 'Number: ',
	                                name: 'arve',
	                                value: row.arve || '',
	                                readOnly: false,
	                                disabled: false,
	                                bindData: false,
	                                ref: 'number',
	                                onChange: self.handleGridRowInput })
	                        ),
	                        React.createElement(
	                            'div',
	                            { style: styles.docRow },
	                            React.createElement(InputText, { title: 'Nimetus: ',
	                                name: 'nimetus',
	                                value: row.nimetus || '',
	                                readOnly: false,
	                                disabled: false,
	                                bindData: false,
	                                ref: 'number',
	                                onChange: self.handleGridRowInput })
	                        ),
	                        React.createElement(
	                            'div',
	                            { style: styles.docRow },
	                            React.createElement(Select, { title: 'T\xFC\xFCp: ',
	                                name: 'kassapank',
	                                data: [{ id: 0, nimetus: 'Kassa' }, { id: 1, nimetus: 'Pank' }, { id: 2, nimetus: 'TP' }],
	                                value: row.kassapank || '',
	                                ref: 'kassapank',
	                                collId: 'id',
	                                onChange: self.handleGridRowChange })
	                        ),
	                        React.createElement(
	                            'div',
	                            { style: styles.docRow },
	                            React.createElement(Select, { title: 'Konto: ',
	                                name: 'konto',
	                                data: self.libs['kontod'],
	                                value: row.konto || '',
	                                ref: 'konto',
	                                collId: 'kood',
	                                onChange: self.handleGridRowChange })
	                        ),
	                        React.createElement(
	                            'div',
	                            { style: styles.docRow },
	                            React.createElement(CheckBox, { title: 'Kas p\xF5hiline?',
	                                name: 'default_',
	                                value: Boolean(self.docData.default_),
	                                ref: 'checkbox_default_',
	                                onChange: self.handleInputChange,
	                                readOnly: false
	                            })
	                        )
	                    ),
	                    React.createElement(
	                        'div',
	                        null,
	                        React.createElement(
	                            'span',
	                            null,
	                            validateMessage
	                        )
	                    )
	                )
	            );
	        }
	    }]);

	    return Rekv;
	}(React.PureComponent);

	Rekv.propTypes = {
	    docId: PropTypes.number,
	    initData: PropTypes.object
	};

	Rekv.defaultProps = {
	    initData: {}
	};

	module.exports = Rekv;

/***/ }),
/* 248 */
/***/ (function(module, exports) {

	'use strict';module.exports={docRow:{display:'flex',flexDirection:'row'/*
	                border: '1px solid blue'
	        */},docColumn:{display:'flex',flexDirection:'column',/*
	                border: '1px solid yellow',
	        */width:'50%'},doc:{display:'flex',flexDirection:'column'/*
	                border: '1px solid brown'
	        */},grid:{mainTable:{width:'100%'},headerTable:{width:'100%'},gridContainer:{width:'100%'}},gridRow:{/*
	                border: '1px solid black',
	        */backgroundColor:'white',position:'relative',margin:'10% 30% 10% 30%',width:'auto',opacity:'1',top:'100px'},btnEdit:{width:'min-content'}};

/***/ }),
/* 249 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var React = __webpack_require__(10);
	var Documents = __webpack_require__(179);
	var styles = __webpack_require__(250);
	var DOC_TYPE_ID = 'TAOTLUS_LOGIN';
	var TOOLBAR_PROPS = __webpack_require__(86).TEATIS.toolbarProps;

	/**
	 * Класс реализует документ справочника признаков.
	 */

	var Register = function (_React$PureComponent) {
	    _inherits(Register, _React$PureComponent);

	    function Register(props) {
	        _classCallCheck(this, Register);

	        return _possibleConstructorReturn(this, (Register.__proto__ || Object.getPrototypeOf(Register)).call(this, props));
	    }

	    _createClass(Register, [{
	        key: 'render',
	        value: function render() {
	            return React.createElement(Documents, { initData: this.props.initData,
	                history: this.props.history ? this.props.history : null,
	                module: this.props.module,
	                ref: 'register',
	                docTypeId: DOC_TYPE_ID,
	                style: styles,
	                toolbarProps: TOOLBAR_PROPS,
	                render: this.renderer });
	        }
	    }, {
	        key: 'renderer',
	        value: function renderer() {
	            return null;
	        }
	    }]);

	    return Register;
	}(React.PureComponent);

	module.exports = Register;

/***/ }),
/* 250 */
/***/ (function(module, exports) {

	'use strict';module.exports={grid:{mainTable:{width:'100%',td:{border:'1px solid lightGrey',display:'table-cell',paddingLeft:'5px'}},headerTable:{width:'100%'},gridContainer:{width:'100%'}}};

/***/ }),
/* 251 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var React = __webpack_require__(10);
	var PropTypes = __webpack_require__(11);

	var DocumentTemplate = __webpack_require__(223),
	    InputText = __webpack_require__(212),
	    InputDate = __webpack_require__(236),
	    TextArea = __webpack_require__(216),
	    Loading = __webpack_require__(243);

	var styles = __webpack_require__(252);

	/**
	 * Класс реализует документ справочника признаков.
	 */

	var TaotlusLogin = function (_React$PureComponent) {
	    _inherits(TaotlusLogin, _React$PureComponent);

	    function TaotlusLogin(props) {
	        _classCallCheck(this, TaotlusLogin);

	        var _this = _possibleConstructorReturn(this, (TaotlusLogin.__proto__ || Object.getPrototypeOf(TaotlusLogin)).call(this, props));

	        _this.state = {
	            docId: props.docId ? props.docId : Number(props.match.params.docId),
	            loadedData: false
	        };
	        _this.renderer = _this.renderer.bind(_this);
	        return _this;
	    }

	    _createClass(TaotlusLogin, [{
	        key: 'render',
	        value: function render() {
	            return React.createElement(DocumentTemplate, { docId: this.state.docId,
	                ref: 'document',
	                docTypeId: 'TAOTLUS_LOGIN',
	                module: this.props.module,
	                initData: this.props.initData,
	                userData: this.props.userData,
	                renderer: this.renderer,
	                focusElement: 'input-kasutaja',
	                history: this.props.history

	            });
	        }

	        /**
	         * Метод вернет кастомный компонент
	         * @param self
	         * @returns {*}
	         */

	    }, {
	        key: 'renderer',
	        value: function renderer(self) {
	            if (!self.docData) {
	                // не загружены данные
	                return React.createElement(
	                    'div',
	                    { style: styles.doc },
	                    React.createElement(Loading, { label: 'Laadimine...' })
	                );
	            }

	            return React.createElement(
	                'div',
	                { style: styles.doc },
	                React.createElement(
	                    'div',
	                    { style: styles.docColumn },
	                    React.createElement(
	                        'div',
	                        { style: styles.docRow },
	                        React.createElement(InputDate, { title: 'Kuup\xE4ev:',
	                            name: 'kpv',
	                            value: self.docData.kpv,
	                            ref: 'input-kpv',
	                            readOnly: true,
	                            onChange: self.handleInputChange })
	                    ),
	                    React.createElement(
	                        'div',
	                        { style: styles.docRow },
	                        React.createElement(InputText, { title: 'Kasutaja nimi ',
	                            name: 'kasutaja',
	                            ref: 'input-kasutaja',
	                            readOnly: true,
	                            value: self.docData.kasutaja || '',
	                            onChange: self.handleInputChange })
	                    ),
	                    React.createElement(
	                        'div',
	                        { style: styles.docRow },
	                        React.createElement(InputText, { title: 'Nimi',
	                            name: 'nimi',
	                            ref: 'input-nimi',
	                            readOnly: !self.state.edited,
	                            value: self.docData.nimi || '',
	                            onChange: self.handleInputChange })
	                    ),
	                    React.createElement(
	                        'div',
	                        { style: styles.docRow },
	                        React.createElement(InputText, { title: 'Aadress',
	                            name: 'aadress',
	                            ref: 'input-aadress',
	                            readOnly: true,
	                            value: self.docData.aadress || '',
	                            onChange: self.handleInputChange })
	                    ),
	                    React.createElement(
	                        'div',
	                        { style: styles.docRow },
	                        React.createElement(InputText, { title: 'E-mail',
	                            name: 'email',
	                            ref: 'input-email',
	                            readOnly: true,
	                            value: self.docData.email || '',
	                            onChange: self.handleInputChange })
	                    ),
	                    React.createElement(
	                        'div',
	                        { style: styles.docRow },
	                        React.createElement(InputText, { title: 'Telefon',
	                            name: 'tel',
	                            ref: 'input-tel',
	                            readOnly: !self.state.edited,
	                            value: self.docData.tel || '',
	                            onChange: self.handleInputChange })
	                    )
	                ),
	                React.createElement(
	                    'div',
	                    { style: styles.docRow },
	                    React.createElement(TextArea, { title: 'Muud',
	                        name: 'muud',
	                        ref: 'textarea-muud',
	                        onChange: self.handleInputChange,
	                        value: self.docData.muud || '',
	                        readOnly: !self.state.edited })
	                )
	            );
	        }
	    }]);

	    return TaotlusLogin;
	}(React.PureComponent);

	TaotlusLogin.propTypes = {
	    docId: PropTypes.number,
	    initData: PropTypes.object
	};

	TaotlusLogin.defaultProps = {
	    initData: {}
	};

	module.exports = TaotlusLogin;

/***/ }),
/* 252 */
/***/ (function(module, exports) {

	'use strict';module.exports={docRow:{display:'flex',flexDirection:'row'},docColumn:{display:'flex',flexDirection:'column',width:'50%'},doc:{display:'flex',flexDirection:'column'}};

/***/ }),
/* 253 */,
/* 254 */,
/* 255 */,
/* 256 */,
/* 257 */,
/* 258 */,
/* 259 */,
/* 260 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var React = __webpack_require__(10);
	var PropTypes = __webpack_require__(11);

	var DocumentTemplate = __webpack_require__(223),
	    TextArea = __webpack_require__(216),
	    Loading = __webpack_require__(243);
	var DataGrid = __webpack_require__(183);

	var styles = __webpack_require__(261);

	/**
	 * Класс реализует документ справочника признаков.
	 */

	var Objekt = function (_React$PureComponent) {
	    _inherits(Objekt, _React$PureComponent);

	    function Objekt(props) {
	        _classCallCheck(this, Objekt);

	        var _this = _possibleConstructorReturn(this, (Objekt.__proto__ || Object.getPrototypeOf(Objekt)).call(this, props));

	        _this.state = {
	            docId: props.docId ? props.docId : Number(props.match.params.docId),
	            loadedData: false
	        };
	        _this.renderer = _this.renderer.bind(_this);
	        return _this;
	    }

	    _createClass(Objekt, [{
	        key: 'render',
	        value: function render() {
	            return React.createElement(DocumentTemplate, { docId: this.state.docId,
	                ref: 'document',
	                docTypeId: 'OBJEKT',
	                module: this.props.module,
	                initData: this.props.initData,
	                userData: this.props.userData,
	                renderer: this.renderer,
	                focusElement: 'input-aadress',
	                history: this.props.history

	            });
	        }

	        /**
	         * Метод вернет кастомный компонент
	         * @param self
	         * @returns {*}
	         */

	    }, {
	        key: 'renderer',
	        value: function renderer(self) {
	            if (!self.docData) {
	                // не загружены данные
	                return React.createElement(
	                    'div',
	                    { style: styles.doc },
	                    React.createElement(Loading, { label: 'Laadimine...' })
	                );
	            }

	            var gridUserData = self.docData.gridData,
	                gridUserColumns = self.docData.gridConfig;

	            return React.createElement(
	                'div',
	                { style: styles.doc },
	                React.createElement(
	                    'div',
	                    { style: styles.docRow },
	                    React.createElement(TextArea, { title: 'Aadress',
	                        name: 'aadress',
	                        ref: 'textarea-aadress',
	                        onChange: self.handleInputChange,
	                        value: self.docData.aadress || '',
	                        readOnly: !self.state.edited })
	                ),
	                React.createElement(
	                    'div',
	                    { style: styles.docRow },
	                    React.createElement(TextArea, { title: 'Muud',
	                        name: 'muud',
	                        ref: 'textarea-muud',
	                        onChange: self.handleInputChange,
	                        value: self.docData.muud || '',
	                        readOnly: !self.state.edited })
	                ),
	                React.createElement('br', null),
	                React.createElement(
	                    'div',
	                    { style: styles.docRow },
	                    React.createElement(
	                        'label',
	                        { ref: 'label' },
	                        'Objekti kasutajad'
	                    )
	                ),
	                React.createElement(
	                    'div',
	                    { style: styles.docRow },
	                    React.createElement(DataGrid, { source: 'userid',
	                        gridData: gridUserData,
	                        gridColumns: gridUserColumns,
	                        showToolBar: false,
	                        readOnly: true,
	                        style: styles.grid.headerTable,
	                        docTypeId: 'userid',
	                        ref: 'userid-data-grid' })
	                )
	            );
	        }
	    }]);

	    return Objekt;
	}(React.PureComponent);

	Objekt.propTypes = {
	    docId: PropTypes.number,
	    initData: PropTypes.object
	};

	Objekt.defaultProps = {
	    initData: {}
	};

	module.exports = Objekt;

/***/ }),
/* 261 */
/***/ (function(module, exports) {

	'use strict';module.exports={docRow:{display:'flex',flexDirection:'row'},docColumn:{display:'flex',flexDirection:'column',width:'50%'},doc:{display:'flex',flexDirection:'column'},grid:{mainTable:{width:'100%',td:{border:'1px solid lightGrey',display:'table-cell',paddingLeft:'5px'}},headerTable:{width:'100%'},gridContainer:{width:'100%'}}};

/***/ }),
/* 262 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var React = __webpack_require__(10);
	var Documents = __webpack_require__(179);
	var styles = __webpack_require__(263);

	/**
	 * Класс реализует документ справочника признаков.
	 */

	var Objects = function (_React$PureComponent) {
	    _inherits(Objects, _React$PureComponent);

	    function Objects(props) {
	        _classCallCheck(this, Objects);

	        return _possibleConstructorReturn(this, (Objects.__proto__ || Object.getPrototypeOf(Objects)).call(this, props));
	    }

	    _createClass(Objects, [{
	        key: 'render',
	        value: function render() {
	            var DOC_TYPE_ID = this.props.module == 'kasutaja' ? 'ISIKU_OBJEKT' : 'OBJEKT';
	            return React.createElement(Documents, {
	                history: this.props.history ? this.props.history : null,
	                module: this.props.module,
	                ref: 'register',
	                docTypeId: DOC_TYPE_ID,
	                style: styles,
	                render: this.renderer });
	        }
	    }, {
	        key: 'renderer',
	        value: function renderer() {
	            return null;
	        }
	    }]);

	    return Objects;
	}(React.PureComponent);

	module.exports = Objects;

/***/ }),
/* 263 */
/***/ (function(module, exports) {

	'use strict';module.exports={grid:{mainTable:{width:'100%',td:{border:'1px solid lightGrey',display:'table-cell',paddingLeft:'5px'}},headerTable:{width:'100%'},gridContainer:{width:'100%'}}};

/***/ }),
/* 264 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var PropTypes = __webpack_require__(11);
	var React = __webpack_require__(10);

	var DocumentTemplate = __webpack_require__(223),
	    InputText = __webpack_require__(212),
	    InputDate = __webpack_require__(236),
	    InputNumber = __webpack_require__(238),
	    Select = __webpack_require__(164),
	    SelectData = __webpack_require__(265),
	    TextArea = __webpack_require__(216),
	    DataGrid = __webpack_require__(183),
	    relatedDocuments = __webpack_require__(267),
	    ModalPage = __webpack_require__(171),
	    ButtonEdit = __webpack_require__(80),
	    styles = __webpack_require__(268);
	var getTextValue = __webpack_require__(76);

	var Round = __webpack_require__(269);
	var Loading = __webpack_require__(243);

	var DocContext = __webpack_require__(1);
	var LIB_OBJS = __webpack_require__(86).LEPING.LIB_OBJS;

	var Leping = function (_React$PureComponent) {
	    _inherits(Leping, _React$PureComponent);

	    function Leping(props) {
	        _classCallCheck(this, Leping);

	        var _this = _possibleConstructorReturn(this, (Leping.__proto__ || Object.getPrototypeOf(Leping)).call(this, props));

	        _this.state = {
	            loadedData: false,
	            module: props.module ? props.module : DocContext.module,
	            docId: props.docId ? props.docId : Number(props.match.params.docId)
	        };

	        _this.createGridRow = _this.createGridRow.bind(_this);

	        _this.renderer = _this.renderer.bind(_this);
	        _this.gridValidateFields = _this.gridValidateFields.bind(_this);
	        _this.btnEditAsutusClick = _this.btnEditAsutusClick.bind(_this);

	        return _this;
	    }

	    _createClass(Leping, [{
	        key: 'render',
	        value: function render() {
	            return React.createElement(DocumentTemplate, { docId: this.state.docId,
	                ref: 'document',
	                history: this.props.history,
	                docTypeId: 'LEPING',
	                module: this.props.module,
	                initData: this.props.initData ? this.props.initData : {},
	                reload: true,
	                libs: LIB_OBJS,
	                renderer: this.renderer,
	                createGridRow: this.createGridRow,
	                gridValidator: this.gridValidateFields,
	                focusElement: 'input-number'
	            });
	        }

	        /**
	         *Вернет кастомные компоненты документа
	         */

	    }, {
	        key: 'renderer',
	        value: function renderer(self) {
	            if (!self || !self.docData || !self.docData.kpv || !self.libs['objekt']) {
	                return React.createElement(
	                    'div',
	                    { style: styles.doc },
	                    React.createElement(Loading, { label: 'Laadimine...' })
	                );
	            }

	            var isEditMode = self.state.edited,
	                gridData = self.docData.gridData,
	                gridColumns = self.docData.gridConfig,
	                mooduData = self.docData.moodu,
	                mooduColumns = self.docData.mooduConfig;

	            // фильтруем обьекты, только владелец
	            var objects = self.libs['objekt'].filter(function (obj) {
	                return obj.asutus_id == self.docData.asutusid;
	            });

	            // если нет услуг, добавим их
	            if (!gridData.length && self.libs['nomenclature'].length) {
	                self.libs['nomenclature'].forEach(function (nom) {
	                    gridData.push({ id: 0, nomid: nom.id, kogus: 0, hind: nom.hind, kood: nom.kood, nimetus: nom.nimetus });
	                });
	            }

	            return React.createElement(
	                'div',
	                null,
	                React.createElement(
	                    'div',
	                    { style: styles.doc },
	                    React.createElement(
	                        'div',
	                        { style: styles.docRow },
	                        React.createElement(
	                            'div',
	                            { style: styles.docColumn },
	                            React.createElement(InputText, { ref: 'input-number',
	                                title: 'Number',
	                                name: 'number',
	                                value: self.docData.number || '',
	                                readOnly: !isEditMode,
	                                onChange: self.handleInputChange }),
	                            React.createElement(InputDate, { title: 'Kuup\xE4ev',
	                                name: 'kpv',
	                                value: self.docData.kpv,
	                                ref: 'input-kpv',
	                                readOnly: !isEditMode,
	                                onChange: self.handleInputChange }),
	                            React.createElement(InputDate, { title: 'T\xE4htaeg',
	                                name: 'tahtaeg',
	                                value: self.docData.tahtaeg,
	                                ref: 'input-tahtaeg',
	                                readOnly: !isEditMode,
	                                onChange: self.handleInputChange })
	                        )
	                    ),
	                    React.createElement(
	                        'div',
	                        { style: styles.docRow },
	                        React.createElement(
	                            'div',
	                            { style: styles.docColumn },
	                            React.createElement(Select, { title: 'Korteeriomanik',
	                                name: 'asutusid',
	                                libs: 'asutused',
	                                value: self.docData.asutusid,
	                                data: self.libs['asutused'],
	                                defaultValue: String(self.docData.asutus) || '',
	                                onChange: self.handleInputChange,
	                                collId: 'id',
	                                ref: 'select-asutus',
	                                readOnly: !isEditMode })
	                        ),
	                        React.createElement(
	                            'div',
	                            { style: styles.docColumn },
	                            DocContext.module !== 'kasutaja' ? React.createElement(ButtonEdit, {
	                                ref: 'btnEdit',
	                                value: 'Muuda',
	                                onClick: this.btnEditAsutusClick,
	                                show: !isEditMode,
	                                style: styles.btnEdit,
	                                disabled: false
	                            }) : null
	                        )
	                    ),
	                    React.createElement(
	                        'div',
	                        { style: styles.docRow },
	                        React.createElement(
	                            'div',
	                            { style: styles.docColumn },
	                            React.createElement(Select, { title: 'Objekt',
	                                name: 'objektid',
	                                libs: 'objekt',
	                                value: self.docData.objektid,
	                                data: objects,
	                                defaultValue: String(self.docData.objekt) || '',
	                                onChange: self.handleInputChange,
	                                collId: 'id',
	                                ref: 'select-objek',
	                                readOnly: !isEditMode })
	                        )
	                    ),
	                    React.createElement(
	                        'div',
	                        { style: styles.docRow },
	                        React.createElement(TextArea, { title: 'M\xE4rkused',
	                            name: 'muud',
	                            ref: 'textarea-muud',
	                            onChange: self.handleInputChange,
	                            value: self.docData.muud || '',
	                            readOnly: !isEditMode })
	                    ),
	                    React.createElement(
	                        'div',
	                        { style: styles.docRow },
	                        React.createElement(DataGrid, { source: 'details',
	                            gridData: gridData,
	                            gridColumns: gridColumns,
	                            showToolBar: isEditMode,
	                            handleGridRow: this.handleGridRow,
	                            handleGridBtnClick: self.handleGridBtnClick,
	                            readOnly: !isEditMode,
	                            style: styles.grid.headerTable,
	                            ref: 'data-grid' })
	                    ),
	                    self.state.gridRowEdit ? this.createGridRow(self) : null,
	                    React.createElement('br', null),
	                    React.createElement(
	                        'div',
	                        { style: styles.docRow },
	                        React.createElement(
	                            'label',
	                            { ref: 'label' },
	                            getTextValue('Mõõdu andmed')
	                        )
	                    ),
	                    React.createElement(
	                        'div',
	                        { style: styles.docRow },
	                        React.createElement(DataGrid, { source: 'moodu',
	                            gridData: mooduData,
	                            gridColumns: mooduColumns,
	                            showToolBar: false,
	                            readOnly: true,
	                            style: styles.grid.headerTable,
	                            docTypeId: 'andmed',
	                            ref: 'moodu-grid' })
	                    )
	                )
	            );
	        }

	        /**
	         * Создаст компонет строки грида
	         * @returns {XML}
	         */

	    }, {
	        key: 'createGridRow',
	        value: function createGridRow(self) {

	            var row = self.gridRowData ? self.gridRowData : {},
	                validateMessage = '',
	                // self.state.warning
	            buttonOkReadOnly = validateMessage.length > 0 || !self.state.checked,
	                modalObjects = ['btnOk', 'btnCancel'];

	            if (buttonOkReadOnly) {
	                // уберем кнопку Ок
	                modalObjects.splice(0, 1);
	            }

	            if (!row) return React.createElement('div', null);

	            return React.createElement(
	                'div',
	                { className: '.modalPage' },
	                React.createElement(
	                    ModalPage,
	                    {
	                        modalObjects: modalObjects,
	                        ref: 'modalpage-grid-row',
	                        show: true,
	                        modalPageBtnClick: self.modalPageClick,
	                        modalPageName: 'Rea lisamine / parandamine' },
	                    React.createElement(
	                        'div',
	                        { ref: 'grid-row-container' },
	                        self.state.gridWarning.length ? React.createElement(
	                            'div',
	                            { style: styles.docRow },
	                            React.createElement(
	                                'span',
	                                null,
	                                self.state.gridWarning
	                            )
	                        ) : null,
	                        React.createElement(
	                            'div',
	                            { style: styles.docRow },
	                            React.createElement(
	                                'div',
	                                { style: styles.contant },
	                                React.createElement(Select, { title: 'Teenus',
	                                    name: 'nomid',
	                                    libs: 'nomenclature',
	                                    data: self.libs['nomenclature'],
	                                    readOnly: false,
	                                    value: row.nomid,
	                                    collId: 'id',
	                                    ref: 'nomid',
	                                    style: styles.select,
	                                    placeholder: 'Teenuse kood',
	                                    onChange: self.handleGridRowChange })
	                            )
	                        ),
	                        React.createElement(
	                            'div',
	                            { style: styles.docRow },
	                            React.createElement(
	                                'div',
	                                { style: styles.contant },
	                                React.createElement(InputNumber, { title: 'Kogus ',
	                                    name: 'kogus',
	                                    value: Number(row.kogus ? row.kogus : 0),
	                                    readOnly: false,
	                                    disabled: false,
	                                    bindData: false,
	                                    ref: 'kogus',
	                                    pattern: '[0-9]{10}',
	                                    onChange: self.handleGridRowInput })
	                            )
	                        ),
	                        React.createElement(
	                            'div',
	                            { style: styles.docRow },
	                            React.createElement(
	                                'div',
	                                { style: styles.contant },
	                                React.createElement(InputNumber, { title: 'Hind ',
	                                    name: 'hind',
	                                    value: Number(row.hind ? row.hind : 0),
	                                    readOnly: false,
	                                    disabled: false,
	                                    bindData: false,
	                                    ref: 'hind',
	                                    pattern: '[0-9]{10}',
	                                    onChange: self.handleGridRowInput })
	                            )
	                        )
	                    ),
	                    React.createElement(
	                        'div',
	                        null,
	                        React.createElement(
	                            'span',
	                            null,
	                            validateMessage
	                        )
	                    )
	                )
	            );
	        }

	        /**
	         * валидатор для строки грида
	         * @returns {string}
	         */

	    }, {
	        key: 'gridValidateFields',
	        value: function gridValidateFields() {
	            var warning = '';
	            var doc = this.refs['document'];
	            if (doc && doc.gridRowData) {

	                // только после проверки формы на валидность
	                if (doc.gridRowData && !doc.gridRowData['nomid']) warning = warning + ' Код операции';
	                if (!doc.gridRowData['kogus']) warning = warning + ' Количество';
	                if (!doc.gridRowData['hind']) warning = warning + ' Сумма';

	                // наименование услуги и код
	                if (doc.gridRowData && doc.gridRowData['nomid']) {
	                    var teenus = DocContext.libs['nomenclature'].filter(function (row) {
	                        return row.id == doc.gridRowData['nomid'];
	                    });
	                    if (teenus) {
	                        doc.gridRowData['kood'] = teenus[0].kood ? teenus[0].kood : null;
	                        doc.gridRowData['nimetus'] = teenus[0].nimetus ? teenus[0].nimetus : null;
	                    }
	                }
	            }
	            return warning;
	        }

	        // обработчик события клиска на кнопке редактирования контр-агента

	    }, {
	        key: 'btnEditAsutusClick',
	        value: function btnEditAsutusClick() {
	            var docAsutusId = this.refs['document'].docData.asutusid;

	            // осуществит переход на карточку контр-агента
	            this.props.history.push('/' + this.props.module + '/asutused/' + docAsutusId);
	        }
	    }]);

	    return Leping;
	}(React.PureComponent);

	Leping.propTypes = {
	    docId: PropTypes.number,
	    initData: PropTypes.object,
	    userData: PropTypes.object
	};

	Leping.defaultProps = {
	    params: { docId: 0 },
	    initData: {},
	    userData: {}
	};

	module.exports = Leping;

/***/ }),
/* 265 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var DocContext = __webpack_require__(1);

	var PropTypes = __webpack_require__(11);
	var fetchData = __webpack_require__(41);
	var POST_LOAD_LIBS_URL = __webpack_require__(86).LIBS.POST_LOAD_LIBS_URL;

	var React = __webpack_require__(10),
	    styles = __webpack_require__(266),
	    DataGrid = __webpack_require__(183),
	    Button = __webpack_require__(75),
	    InputText = __webpack_require__(212),
	    ModalPage = __webpack_require__(171);

	var SelectData = function (_React$PureComponent) {
	    _inherits(SelectData, _React$PureComponent);

	    function SelectData(props) {
	        _classCallCheck(this, SelectData);

	        var _this = _possibleConstructorReturn(this, (SelectData.__proto__ || Object.getPrototypeOf(SelectData)).call(this, props));

	        _this.state = {
	            value: props.value, /* возвращаемое значение, например id*/
	            fieldValue: props.defaultValue, /*видимое значение, например kood или name по указанному в collId */
	            readOnly: props.readOnly,
	            disabled: props.disabled,
	            edited: props.edited,
	            gridData: [],
	            gridConfig: props.config,
	            gridActiveRow: 0,
	            show: _this.props.show,
	            limit: '10'
	        };
	        _this.handleInputChange = _this.handleInputChange.bind(_this);
	        _this.handleGridClick = _this.handleGridClick.bind(_this);
	        _this.modalPageClick = _this.modalPageClick.bind(_this);
	        _this.loadLibs = _this.loadLibs.bind(_this);
	        _this.handleClick = _this.handleClick.bind(_this);
	        _this.handleGridBtnClick = _this.handleGridBtnClick.bind(_this);
	        return _this;
	    }

	    _createClass(SelectData, [{
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            if (this.state.value) {
	                this.loadLibs('');
	            }
	        }
	    }, {
	        key: 'componentDidUpdate',
	        value: function componentDidUpdate(prevProps, prevState) {
	            if (this.state.value && prevState.value !== this.state.value && !this.state.fieldValue) {
	                this.loadLibs();
	            }
	        }

	        // will update state if props changed

	    }, {
	        key: 'render',
	        value: function render() {
	            var isEditeMode = !this.state.readOnly,
	                btnStyle = Object.assign({}, styles.button, { display: isEditeMode ? 'inline' : 'none' });

	            var isReadOnly = this.props.readOnly;
	            if (this.state.show) {
	                isReadOnly = false;
	            }

	            return React.createElement(
	                'div',
	                { style: styles.wrapper },
	                React.createElement(InputText, { ref: 'inputName',
	                    title: this.props.title,
	                    name: this.props.name,
	                    value: this.state.fieldValue || '',
	                    readOnly: isReadOnly,
	                    onChange: this.handleInputChange }),
	                React.createElement(Button, { value: 'v',
	                    ref: 'btnShow',
	                    style: btnStyle,
	                    onClick: this.handleClick }),
	                this.state.show ? this.modalPage() : null
	            );
	        }
	    }, {
	        key: 'handleClick',
	        value: function handleClick() {
	            this.setState({
	                show: true
	            });
	        }
	    }, {
	        key: 'modalPage',
	        value: function modalPage() {
	            var modalObjects = ['btnOk', 'btnCancel'];
	            var limitInputStyle = styles.limitInput;

	            var toolbarParams = {
	                btnAdd: {
	                    show: true,
	                    disabled: false
	                },
	                btnEdit: {
	                    show: true,
	                    disabled: false
	                },
	                btnDelete: {
	                    show: false,
	                    disabled: false
	                },
	                btnPrint: {
	                    show: false,
	                    disabled: false
	                }
	            };
	            return React.createElement(
	                ModalPage,
	                {
	                    modalObjects: modalObjects,
	                    ref: 'modalpage-grid',
	                    show: true,
	                    modalPageBtnClick: this.modalPageClick,
	                    modalPageName: 'Vali rea' },
	                React.createElement(
	                    'div',
	                    { ref: 'grid-row-container' },
	                    React.createElement(InputText, { ref: 'input-filter',
	                        title: 'Otsingu parametrid:',
	                        name: 'gridFilter',
	                        value: this.state.fieldValue || '',
	                        readOnly: this.props.readOnly || !this.state.show,
	                        onChange: this.handleInputChange }),
	                    React.createElement(DataGrid, { gridData: this.state.gridData,
	                        gridColumns: this.state.gridConfig,
	                        onClick: this.handleGridClick,
	                        handleGridBtnClick: this.handleGridBtnClick,
	                        showToolBar: true,
	                        toolbarParams: toolbarParams,
	                        ref: 'data-grid' }),
	                    React.createElement(InputText, { ref: 'input-limit',
	                        title: 'Limiit:',
	                        width: limitInputStyle,
	                        name: 'limit',
	                        value: this.state.limit || '10',
	                        readOnly: false,
	                        onChange: this.handleInputChange })
	                )
	            );
	        }

	        // обработчик события измения значения в текстовом (поисковом) поле

	    }, {
	        key: 'handleInputChange',
	        value: function handleInputChange(name, value) {
	            var _this2 = this;

	            if (this.props.readOnly) {
	                console.error('readonly ');
	                return;
	            }

	            if (name === 'gridFilter') {
	                // обновим стейт
	                this.setState({ value: 0, fieldValue: value, show: true }, function () {
	                    if (value.length) {
	                        //выполним запрос
	                        setTimeout(function () {
	                            _this2.loadLibs(value);
	                        }, 100);
	                    }
	                });
	            } else {

	                this.setState({ value: 0, fieldValue: value, show: false }, function () {
	                    if (value.length) {
	                        //выполним запрос
	                        setTimeout(function () {
	                            _this2.loadLibs(value);
	                        }, 500);
	                    }
	                });
	            }

	            if (name === 'limit') {
	                this.setState({ limit: value });
	            }
	        }
	    }, {
	        key: 'modalPageClick',
	        value: function modalPageClick(event) {
	            if (event === 'Ok') {
	                // надо найти активную строку

	                var boundField = this.props.boundToGrid ? this.props.boundToGrid : 'name',
	                    //grid filed name
	                boundToData = this.props.boundToData ? this.props.boundToData : false,
	                    //InputDefaultValue
	                boundFieldData = this.props.name; //inputName = fieldname

	                var activeRow = this.state.gridActiveRow,
	                    value = this.state.gridData[activeRow]['id'],
	                    fieldValue = this.state.gridData[activeRow][boundField];
	                // получить данные полей и установить состояние для виджета

	                // показать новое значение
	                this.setState({ value: value, fieldValue: fieldValue, show: false });

	                // вернуть значение наверх

	                if (this.props.onChange) {
	                    this.props.onChange(boundFieldData, value);

	                    // text value of input
	                    if (boundToData) {
	                        this.props.onChange(boundToData, fieldValue);
	                    }

	                    //если привязано другое поле
	                    if (this.props.collName) {
	                        this.props.onChange(this.props.collName, fieldValue);
	                    }
	                }
	            } else {
	                // востанавливаем старые значения из пропсов, заврывыаем окно
	                this.setState({
	                    value: this.props.value,
	                    fieldValue: this.props.defaultValue, show: false
	                });
	            }
	        }
	    }, {
	        key: 'handleGridClick',
	        value: function handleGridClick(event, value, activeRow) {
	            this.setState({ gridActiveRow: activeRow, value: value });
	        }
	    }, {
	        key: 'loadLibs',
	        value: function loadLibs(fieldValue, kpv) {
	            var _this3 = this;

	            var lib = this.props.libName;
	            var sqlWhere = '';
	            var limit = this.state.limit ? this.state.limit : 100;
	            var isSeachById = this.state.value && !fieldValue;

	            if (this.props.sqlFields && this.props.sqlFields.length && fieldValue && fieldValue.length > 0) {
	                this.props.sqlFields.forEach(function (field) {
	                    var isOr = sqlWhere.length > 0 ? ' or ' : '';
	                    sqlWhere = sqlWhere.concat(' ' + isOr + ' encode(' + field + '::bytea, \'escape\') ilike \'%' + fieldValue.trim() + '%\'');
	                });
	            }

	            if (isSeachById) {
	                // will seach by id
	                sqlWhere = 'id = ' + this.state.value;
	            }

	            sqlWhere = 'where ' + sqlWhere;

	            var libParams = Object.assign({ uuid: DocContext.userData.uuid }, sqlWhere.length ? {
	                sql: sqlWhere,
	                limit: limit,
	                kpv: kpv ? kpv : new Date().toISOString().slice(0, 10)
	            } : {});

	            if (sqlWhere.length > 0) {
	                fetchData.fetchDataPost(POST_LOAD_LIBS_URL + '/' + lib, libParams).then(function (response) {
	                    var gridData = [],
	                        gridConfig = [];

	                    if (response && 'data' in response) {
	                        gridData = response.data.result.result.data;
	                        gridConfig = response.data.result.result.gridConfig;
	                    }

	                    if (gridData && gridData.length > 0) {
	                        if (isSeachById && !_this3.state.show) {
	                            // только одна запись. Грид не нужен
	                            _this3.setState({
	                                fieldValue: gridData[0][_this3.props.boundToGrid],
	                                value: gridData[0]['id'],
	                                gridData: gridData,
	                                gridConfig: gridConfig
	                            });
	                        } else {
	                            _this3.setState({ gridData: gridData, gridConfig: gridConfig, show: true });
	                        }
	                    }
	                }).catch(function (error) {
	                    console.error('loadLibs error', error);
	                });
	            }
	        }
	    }, {
	        key: 'handleGridBtnClick',
	        value: function handleGridBtnClick(btnName, activeRow, id, docTypeId) {
	            // закрываем модальное окно поиска и переходим на новую запись справочника
	            this.setState({ show: false });
	            var docId = this.state.gridData[activeRow]['id'];
	            switch (btnName) {
	                case "Muuda":
	                    this.props.history.push('/' + DocContext.module + '/' + this.props.libName + '/' + docId);
	                    break;
	                case "edit":
	                    this.props.history.push('/' + DocContext.module + '/' + this.props.libName + '/' + docId);
	                    break;
	                case "add":
	                    this.props.history.push('/' + DocContext.module + '/' + this.props.libName + '/0');
	                    break;
	                default:
	                    console.log('Vigane click');
	            }
	        }
	    }], [{
	        key: 'getDerivedStateFromProps',
	        value: function getDerivedStateFromProps(nextProps, prevState) {
	            if (nextProps.value !== prevState.value) {
	                return { value: nextProps.value };
	            } else return null;
	        }
	    }]);

	    return SelectData;
	}(React.PureComponent);

	SelectData.propTypes = {
	    readOnly: PropTypes.bool,
	    disabled: PropTypes.bool,
	    collId: PropTypes.string,
	    title: PropTypes.string,
	    placeholder: PropTypes.string,
	    name: PropTypes.string.isRequired,
	    show: PropTypes.bool
	};

	SelectData.defaultProps = {
	    readOnly: false,
	    disabled: false,
	    btnDelete: false,
	    value: 0,
	    collId: 'id',
	    title: '',
	    show: false
	};

	module.exports = SelectData;

/***/ }),
/* 266 */
/***/ (function(module, exports) {

	'use strict';module.exports={wrapper:{margin:'5px',marginLeft:'20px',display:'flex',width:'95%'},input:{width:'75%',marginLeft:'15px',borderRadius:'3px',height:'30px'},hide:{display:'none'},select:{width:'60%',marginLeft:'15px'},readOnly:{backgroundColor:'#F3EFEF'},label:{width:'40%',margin:'5px'},button:{width:'10%'},limitInput:{width:'10%'}};

/***/ }),
/* 267 */
/***/ (function(module, exports) {

	'use strict';

	var relatedDocuments = function relatedDocuments(self) {
	    // формируем зависимости
	    var pages = self.pages;
	    var relatedDocuments = self.docData.relations ? self.docData.relations : [];
	    if (self.pages && self.pages.length && (!self.docData.id || self.docData.id === 0)) {
	        // создаем новый док
	        pages = [self.pages[0]];
	        relatedDocuments = [];
	    }

	    if (relatedDocuments.length > 0) {
	        relatedDocuments.forEach(function (doc) {
	            if (doc.id) {
	                // проверим на уникальность списка документов
	                var isExists = pages.find(function (page) {
	                    if (!page.docId) {
	                        return false;
	                    } else {
	                        return page.docId == doc.id && page.docTypeId == doc.doc_type;
	                    }
	                });

	                if (!isExists) {
	                    // в массиве нет, добавим ссылку на документ
	                    pages.push({ docTypeId: doc.doc_type, docId: doc.id,
	                        pageName: doc.name + (doc.number ? ' nr:' + doc.number : ' id:' + doc.id) });
	                }
	            }
	        });
	    }
	    self.pages = pages;
	};

	module.exports = relatedDocuments;

/***/ }),
/* 268 */
/***/ (function(module, exports) {

	'use strict';module.exports={docRow:{display:'flex',flexDirection:'row'/*
	        border: '1px solid blue'
	*/},docColumn:{display:'flex',flexDirection:'column',/*
	        border: '1px solid yellow',
	*/width:'50%'},doc:{display:'flex',flexDirection:'column'/*
	        border: '1px solid brown'
	*/},summa:{width:'auto'},grid:{mainTable:{width:'100%'},headerTable:{width:'100%'},gridContainer:{width:'100%'}},gridRow:{/*
	        border: '1px solid black',
	*/backgroundColor:'white',position:'relative',margin:'10% 30% 10% 30%',width:'auto',opacity:'1',top:'100px'},btnEdit:{width:'min-content'},contant:{width:'auto'}};

/***/ }),
/* 269 */
/***/ (function(module, exports) {

	"use strict";var roundToTwo=function roundToTwo(num){return+(Math.round(num+"e+2")+"e-2");};module.exports=roundToTwo;

/***/ }),
/* 270 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var React = __webpack_require__(10);
	var DocumentRegister = __webpack_require__(179);
	var styles = __webpack_require__(271);
	var ToolbarContainer = __webpack_require__(71);
	var BtnArvesta = __webpack_require__(272);
	var DOC_TYPE_ID = 'LEPING';

	var checkRights = __webpack_require__(177);
	var DocContext = __webpack_require__(1);

	var DocRights = __webpack_require__(176);

	/**
	 * Класс реализует документ справочника признаков.
	 */

	var Documents = function (_React$PureComponent) {
	    _inherits(Documents, _React$PureComponent);

	    function Documents(props) {
	        _classCallCheck(this, Documents);

	        var _this = _possibleConstructorReturn(this, (Documents.__proto__ || Object.getPrototypeOf(Documents)).call(this, props));

	        _this.renderer = _this.renderer.bind(_this);
	        _this.onClickHandler = _this.onClickHandler.bind(_this);

	        return _this;
	    }

	    _createClass(Documents, [{
	        key: 'render',
	        value: function render() {
	            var DOC_TYPE_ID = this.props.module == 'kasutaja' ? 'ISIKU_LEPING' : 'LEPING';
	            return React.createElement(
	                'div',
	                null,
	                React.createElement(DocumentRegister, { initData: this.props.initData,
	                    history: this.props.history ? this.props.history : null,
	                    module: this.props.module,
	                    ref: 'register',
	                    docTypeId: DOC_TYPE_ID,
	                    style: styles,
	                    render: this.renderer })
	            );
	        }
	    }, {
	        key: 'renderer',
	        value: function renderer(self) {
	            if (!self) {
	                return null;
	            }

	            var docRights = DocRights[DOC_TYPE_ID] ? DocRights[DOC_TYPE_ID] : [];
	            var userRoles = DocContext.userData ? DocContext.userData.roles : [];

	            return React.createElement(
	                ToolbarContainer,
	                null,
	                checkRights(userRoles, docRights, 'arved') ? React.createElement(BtnArvesta, {
	                    value: 'Koosta arved',
	                    onClick: this.onClickHandler,
	                    ref: 'btn-koostaArved',
	                    key: 'key-koostaArved'
	                }) : null
	            );
	        }

	        //handler для события клик на кнопках панели

	    }, {
	        key: 'onClickHandler',
	        value: function onClickHandler(event, seisuga) {
	            var _this2 = this;

	            var ids = new Set(); // сюда пишем ид счетом, которые под обработку
	            var Doc = this.refs['register'];

	            var message = '';
	            // будет сформирован файл для отправки в банк SWED
	            Doc.gridData.forEach(function (row) {
	                if (row.select) {
	                    ids.add(row.id);
	                }
	            });
	            // конвертация в массив
	            ids = Array.from(ids);

	            if (!ids.length) {
	                Doc.setState({
	                    warning: 'Mitte ühtegi leping valitud', // строка извещений
	                    warningType: 'notValid'
	                });
	            } else {
	                Doc.fetchData('calc/koostaArved', { docs: ids, seisuga: seisuga }).then(function (data) {
	                    if (data.result) {
	                        message = 'task saadetud t\xE4itmisele';
	                        Doc.setState({ warning: '' + message, warningType: 'ok' });

	                        var tulemused = data.data.result.tulemused;
	                        // открываем отчет
	                        _this2.setState({ isReport: true, txtReport: tulemused });
	                    } else {
	                        if (data.error_message) {
	                            Doc.setState({ warning: 'Tekkis viga: ' + data.error_message, warningType: 'error' });
	                        } else {
	                            Doc.setState({
	                                warning: 'Kokku arvestatud : ' + data.result + ', ' + message,
	                                warningType: 'notValid'
	                            });
	                        }
	                    }
	                });
	            }
	        }
	    }]);

	    return Documents;
	}(React.PureComponent);

	module.exports = Documents;

/***/ }),
/* 271 */
/***/ (function(module, exports) {

	'use strict';module.exports={grid:{mainTable:{width:'100%',td:{border:'1px solid lightGrey',display:'table-cell',paddingLeft:'5px'}},headerTable:{width:'100%'},gridContainer:{width:'100%'}},doc:{height:'100%'},total:{width:'auto'}};

/***/ }),
/* 272 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var React = __webpack_require__(10);
	var PropTypes = __webpack_require__(11);
	var getNow = __webpack_require__(234);

	var ModalPage = __webpack_require__(171);

	var styles = __webpack_require__(74),
	    Button = __webpack_require__(75),
	    InputDate = __webpack_require__(236),
	    InputNumber = __webpack_require__(238),
	    ICON = 'execute';
	var getTextValue = __webpack_require__(76);

	var ButtonTask = function (_React$PureComponent) {
	    _inherits(ButtonTask, _React$PureComponent);

	    // кнопка создания документа в регистрах
	    function ButtonTask(props) {
	        _classCallCheck(this, ButtonTask);

	        var _this = _possibleConstructorReturn(this, (ButtonTask.__proto__ || Object.getPrototypeOf(ButtonTask)).call(this, props));

	        _this.state = {
	            showModal: false,
	            seisuga: getNow(),
	            kogus: 0,
	            kas_kond: false
	        };
	        _this.handleClick = _this.handleClick.bind(_this);
	        _this.modalPageClick = _this.modalPageClick.bind(_this);
	        _this.handleInputChange = _this.handleInputChange.bind(_this);
	        return _this;
	    }

	    _createClass(ButtonTask, [{
	        key: 'handleClick',
	        value: function handleClick(e) {
	            this.setState({ showModal: true });
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var value = getTextValue(this.props.value ? this.props.value : 'Täitmine');
	            return React.createElement(
	                'div',
	                null,
	                React.createElement(
	                    Button,
	                    {
	                        show: true,
	                        value: value,
	                        ref: 'btnTask' || this.props.ref,
	                        style: styles.button,
	                        disabled: false,
	                        onClick: this.handleClick },
	                    React.createElement('img', { ref: 'image', src: styles.icons[ICON] })
	                ),
	                this.state.showModal ? React.createElement(
	                    ModalPage,
	                    {
	                        modalPageBtnClick: this.modalPageClick,
	                        modalPageName: value,
	                        show: true,
	                        modalObjects: ['btnOk', 'btnCancel']
	                    },
	                    'Kas k\xE4ivata "' + value + '" ?',
	                    this.props.showDate ? React.createElement(InputDate, { title: 'Seisuga ',
	                        name: 'kpv',
	                        value: this.state.seisuga,
	                        ref: 'input-kpv',
	                        readOnly: false,
	                        onChange: this.handleInputChange }) : null,
	                    this.props.showKogus ? React.createElement(InputNumber, { title: this.props.title ? this.props.title : 'Väärtus',
	                        name: 'kogus',
	                        value: Number(this.state.kogus),
	                        ref: 'input-kogus',
	                        readOnly: false,
	                        onChange: this.handleInputChange }) : null
	                ) : null
	            );
	        }
	    }, {
	        key: 'modalPageClick',
	        value: function modalPageClick(btnEvent) {
	            this.setState({ showModal: false });
	            if (btnEvent === 'Ok') {
	                this.props.onClick(this.props.value, this.props.showKogus ? this.state.kogus : this.state.seisuga, this.state.kas_kond);
	            }
	        }

	        //will save value

	    }, {
	        key: 'handleInputChange',
	        value: function handleInputChange(name, value) {
	            switch (name) {
	                case 'kpv':
	                    this.setState({ seisuga: value });
	                    break;
	                case 'kogus':
	                    this.setState({ kogus: value });
	                    break;
	                case 'kas_kond':
	                    this.setState({ kas_kond: value });
	                    break;

	            }
	        }
	    }]);

	    return ButtonTask;
	}(React.PureComponent);

	ButtonTask.defaultProps = {
	    disabled: false,
	    show: true,
	    showDate: true,
	    showKogus: false,
	    showKond: false
	};

	module.exports = ButtonTask;

/***/ }),
/* 273 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var PropTypes = __webpack_require__(11);
	var React = __webpack_require__(10);

	var DocumentTemplate = __webpack_require__(223),
	    InputText = __webpack_require__(212),
	    InputDate = __webpack_require__(236),
	    InputNumber = __webpack_require__(238),
	    Select = __webpack_require__(164),
	    TextArea = __webpack_require__(216),
	    DataGrid = __webpack_require__(183),
	    relatedDocuments = __webpack_require__(267),
	    ModalPage = __webpack_require__(171),
	    ButtonEdit = __webpack_require__(80),
	    styles = __webpack_require__(274);
	var Round = __webpack_require__(269);
	var Loading = __webpack_require__(243);
	var getTextValue = __webpack_require__(76);

	var DocContext = __webpack_require__(1);
	var LIB_OBJS = __webpack_require__(86).ARV.LIB_OBJS;
	var DocRights = __webpack_require__(176);
	var checkRights = __webpack_require__(177);

	var Arve = function (_React$PureComponent) {
	    _inherits(Arve, _React$PureComponent);

	    function Arve(props) {
	        _classCallCheck(this, Arve);

	        var _this = _possibleConstructorReturn(this, (Arve.__proto__ || Object.getPrototypeOf(Arve)).call(this, props));

	        _this.state = {
	            loadedData: false,
	            module: props.module ? props.module : DocContext.module,
	            lapsId: null,
	            docId: props.docId ? props.docId : Number(props.match.params.docId)
	        };

	        _this.createGridRow = _this.createGridRow.bind(_this);
	        _this.recalcDocSumma = _this.recalcDocSumma.bind(_this);

	        _this.renderer = _this.renderer.bind(_this);
	        _this.gridValidateFields = _this.gridValidateFields.bind(_this);
	        _this.btnEditAsutusClick = _this.btnEditAsutusClick.bind(_this);
	        _this.pages = [{ pageName: 'Arve', docTypeId: 'ARV' }];

	        return _this;
	    }

	    _createClass(Arve, [{
	        key: 'render',
	        value: function render() {
	            return React.createElement(DocumentTemplate, { docId: this.state.docId,
	                ref: 'document',
	                history: this.props.history,
	                docTypeId: 'ARV',
	                module: this.state.module,
	                initData: this.props.initData ? this.props.initData : {},
	                reload: true,
	                libs: LIB_OBJS,
	                pages: this.pages,
	                renderer: this.renderer,
	                createGridRow: this.createGridRow,
	                gridValidator: this.gridValidateFields,
	                recalcDoc: this.recalcDocSumma,
	                focusElement: 'input-number'
	            });
	        }

	        /**
	         *Вернет кастомные компоненты документа
	         */

	    }, {
	        key: 'renderer',
	        value: function renderer(self) {
	            if (!self || !self.docData || !self.docData.kpv) {
	                return React.createElement(
	                    'div',
	                    { style: styles.doc },
	                    React.createElement(Loading, { label: 'Laadimine...' })
	                );
	            }

	            var isEditMode = self.state.edited,
	                gridData = self.docData.gridData,
	                gridColumns = self.docData.gridConfig,
	                gridArvTasuData = self.docData.queryArvTasu,
	                gridTasudColumns = self.docData.gridTasudConfig;

	            // формируем зависимости
	            if (self.docData.relations) {
	                relatedDocuments(self);
	            }

	            // права на редактирование карточки контрагента
	            var docRights = DocRights['ASUTUSED'] ? DocRights['ASUTUSED'] : [];
	            var userRoles = DocContext.userData ? DocContext.userData.roles : [];

	            return React.createElement(
	                'div',
	                null,
	                React.createElement(
	                    'div',
	                    { style: styles.doc },
	                    React.createElement(
	                        'div',
	                        { style: styles.docRow },
	                        React.createElement(
	                            'div',
	                            { style: styles.docColumn },
	                            React.createElement(InputText, { ref: 'input-number',
	                                title: 'Number',
	                                name: 'number',
	                                value: self.docData.number || '',
	                                readOnly: !isEditMode,
	                                onChange: self.handleInputChange }),
	                            React.createElement(InputDate, { title: 'Kuup\xE4ev',
	                                name: 'kpv',
	                                value: self.docData.kpv,
	                                ref: 'input-kpv',
	                                readOnly: !isEditMode,
	                                onChange: self.handleInputChange }),
	                            React.createElement(InputDate, { title: 'T\xE4htaeg',
	                                name: 'tahtaeg',
	                                value: self.docData.tahtaeg,
	                                ref: 'input-tahtaeg',
	                                readOnly: !isEditMode,
	                                onChange: self.handleInputChange })
	                        )
	                    ),
	                    React.createElement(
	                        'div',
	                        { style: styles.docRow },
	                        React.createElement(
	                            'div',
	                            { style: styles.docColumn },
	                            React.createElement(Select, { title: 'Maksja',
	                                libs: 'asutused',
	                                name: 'asutusid',
	                                data: self.libs['asutused'],
	                                value: self.docData.asutusid || 0,
	                                defaultValue: self.docData.asutus,
	                                onChange: self.handleInputChange,
	                                collId: 'id',
	                                readOnly: !isEditMode })
	                        ),
	                        checkRights(userRoles, docRights, 'edit') ? React.createElement(
	                            'div',
	                            { style: styles.docColumn },
	                            React.createElement(ButtonEdit, {
	                                ref: 'btnEdit',
	                                value: 'Muuda',
	                                onClick: this.btnEditAsutusClick,
	                                show: !isEditMode,
	                                style: styles.btnEdit,
	                                disabled: false
	                            })
	                        ) : null
	                    ),
	                    React.createElement(
	                        'div',
	                        { style: styles.docRow },
	                        React.createElement(
	                            'div',
	                            { style: styles.docColumn },
	                            React.createElement(InputText, { title: 'Lisa',
	                                name: 'lisa',
	                                value: self.docData.lisa || '',
	                                ref: 'input-lisa',
	                                readOnly: !isEditMode,
	                                onChange: self.handleInputChange }),
	                            React.createElement(InputText, { title: 'Viitenumber',
	                                name: 'viitenr',
	                                value: self.docData.viitenr || '',
	                                ref: 'input-viitenumber',
	                                readOnly: true,
	                                disable: true,
	                                onChange: self.handleInputChange })
	                        ),
	                        React.createElement(
	                            'div',
	                            { style: styles.docColumn },
	                            React.createElement(Select, { title: 'Arveldus arve',
	                                name: 'aa_id',
	                                libs: 'aa',
	                                value: self.docData.aa,
	                                data: self.libs['aa'],
	                                defaultValue: String(self.docData.aa) || '',
	                                onChange: self.handleInputChange,
	                                collId: 'kood',
	                                ref: 'select-aa',
	                                readOnly: !isEditMode })
	                        )
	                    ),
	                    React.createElement(
	                        'div',
	                        { style: styles.docRow },
	                        React.createElement(TextArea, { title: 'M\xE4rkused',
	                            name: 'muud',
	                            ref: 'textarea-muud',
	                            onChange: self.handleInputChange,
	                            value: self.docData.muud || '',
	                            readOnly: !isEditMode })
	                    ),
	                    React.createElement(
	                        'div',
	                        { style: styles.docRow },
	                        React.createElement(DataGrid, { source: 'details',
	                            gridData: gridData,
	                            gridColumns: gridColumns,
	                            showToolBar: isEditMode,
	                            handleGridRow: this.handleGridRow,
	                            handleGridBtnClick: self.handleGridBtnClick,
	                            readOnly: !isEditMode,
	                            style: styles.grid.headerTable,
	                            ref: 'data-grid' })
	                    ),
	                    React.createElement(
	                        'div',
	                        { style: styles.docRow },
	                        React.createElement(InputNumber, { title: 'Summa',
	                            name: 'summa',
	                            ref: 'input-summa',
	                            value: Number(self.docData.summa) || 0,
	                            disabled: true,
	                            style: styles.summa
	                        }),
	                        React.createElement(InputNumber, { title: 'K\xE4ibemaks',
	                            name: 'kbm',
	                            ref: 'input-kbm',
	                            disabled: true,
	                            style: styles.summa,
	                            value: Number(self.docData.kbm) || 0
	                        }),
	                        React.createElement(InputNumber, { title: 'J\xE4\xE4k',
	                            type: 'currency',
	                            name: 'jaak',
	                            ref: 'input-jaak',
	                            disabled: true,
	                            style: styles.summa,
	                            value: Number(self.docData.jaak) || 0
	                        })
	                    ),
	                    self.state.gridRowEdit ? this.createGridRow(self) : null,
	                    React.createElement('br', null),
	                    React.createElement(
	                        'div',
	                        { style: styles.docRow },
	                        React.createElement(
	                            'label',
	                            { ref: 'label' },
	                            getTextValue('Tasud')
	                        )
	                    ),
	                    React.createElement(
	                        'div',
	                        { style: styles.docRow },
	                        React.createElement(DataGrid, { source: 'tasud',
	                            gridData: gridArvTasuData,
	                            gridColumns: gridTasudColumns,
	                            showToolBar: false,
	                            handleGridBtnClick: self.handleGridBtnClick,
	                            docTypeId: 'smk',
	                            readOnly: true,
	                            style: styles.grid.headerTable,
	                            ref: 'tasud-data-grid' })
	                    )
	                )
	            );
	        }

	        /**
	         * Создаст компонет строки грида
	         * @returns {XML}
	         */

	    }, {
	        key: 'createGridRow',
	        value: function createGridRow(self) {

	            var row = self.gridRowData ? self.gridRowData : {},
	                validateMessage = '',
	                // self.state.warning
	            buttonOkReadOnly = validateMessage.length > 0 || !self.state.checked,
	                modalObjects = ['btnOk', 'btnCancel'];

	            if (buttonOkReadOnly) {
	                // уберем кнопку Ок
	                modalObjects.splice(0, 1);
	            }

	            if (!row) return React.createElement('div', null);

	            return React.createElement(
	                'div',
	                { className: '.modalPage' },
	                React.createElement(
	                    ModalPage,
	                    {
	                        modalObjects: modalObjects,
	                        ref: 'modalpage-grid-row',
	                        show: true,
	                        modalPageBtnClick: self.modalPageClick,
	                        styles: styles.gridRow,
	                        modalPageName: 'Rea lisamine / parandamine' },
	                    React.createElement(
	                        'div',
	                        { ref: 'grid-row-container' },
	                        self.state.gridWarning.length ? React.createElement(
	                            'div',
	                            { style: styles.docRow },
	                            React.createElement(
	                                'span',
	                                null,
	                                self.state.gridWarning
	                            )
	                        ) : null,
	                        React.createElement(
	                            'div',
	                            { style: styles.docRow },
	                            React.createElement(Select, { title: 'Teenus:',
	                                name: 'nomid',
	                                libs: 'nomenclature',
	                                data: self.libs['nomenclature'],
	                                readOnly: false,
	                                value: row.nomid,
	                                collId: 'id',
	                                ref: 'nomid',
	                                placeholder: 'Teenuse kood',
	                                onChange: self.handleGridRowChange })
	                        ),
	                        React.createElement(
	                            'div',
	                            { style: styles.docRow },
	                            React.createElement(InputNumber, { title: 'Kogus:',
	                                name: 'kogus',
	                                value: Number(row.kogus ? row.kogus : 0),
	                                readOnly: false,
	                                disabled: false,
	                                bindData: false,
	                                ref: 'kogus',
	                                pattern: '[0-9]{10}',
	                                onChange: self.handleGridRowInput })
	                        ),
	                        React.createElement(
	                            'div',
	                            { style: styles.docRow },
	                            React.createElement(InputNumber, { title: 'Hind:',
	                                name: 'hind',
	                                value: Number(row.hind ? row.hind : 0),
	                                readOnly: false,
	                                disabled: false,
	                                bindData: false,
	                                ref: 'hind',
	                                pattern: '[0-9]{10}',
	                                onChange: self.handleGridRowInput })
	                        ),
	                        React.createElement(
	                            'div',
	                            { style: styles.docRow },
	                            React.createElement(InputNumber, { title: 'Kbm-ta:',
	                                name: 'kbmta',
	                                value: Number(row.summa ? row.summa - row.kbm : 0),
	                                disabled: true,
	                                bindData: false,
	                                ref: 'kbmta',
	                                pattern: '[0-9]{10}',
	                                onChange: self.handleGridRowChange })
	                        ),
	                        React.createElement(
	                            'div',
	                            { style: styles.docRow },
	                            React.createElement(InputNumber, { title: 'Kbm:',
	                                name: 'kbm',
	                                value: Number(row.kbm ? row.kbm : 0),
	                                disabled: true,
	                                bindData: false,
	                                ref: 'kbm',
	                                pattern: '[0-9]{10}',
	                                onBlur: self.handleGridRowInput })
	                        ),
	                        React.createElement(
	                            'div',
	                            { style: styles.docRow },
	                            React.createElement(InputNumber, { title: 'Summa:',
	                                name: 'Summa',
	                                value: Number(row.summa ? row.summa : 0),
	                                disabled: true,
	                                bindData: false,
	                                ref: 'summa',
	                                pattern: '[0-9]{10}',
	                                onChange: self.handleGridRowInput })
	                        ),
	                        React.createElement(
	                            'div',
	                            { style: styles.docRow },
	                            React.createElement(Select, { title: 'Tunnus:',
	                                name: 'tunnus',
	                                data: self.libs['tunnus'],
	                                value: row.tunnus || '',
	                                ref: 'tunnus',
	                                collId: 'kood',
	                                onChange: self.handleGridRowChange })
	                        ),
	                        React.createElement(
	                            'div',
	                            { style: styles.docRow },
	                            React.createElement(Select, { title: 'Projekt:',
	                                name: 'proj',
	                                data: self.libs['project'],
	                                value: row.proj || '',
	                                ref: 'project',
	                                collId: 'kood',
	                                onChange: self.handleGridRowChange })
	                        ),
	                        React.createElement(
	                            'div',
	                            { style: styles.docRow },
	                            React.createElement(TextArea, { title: 'M\xE4rkused:',
	                                name: 'muud',
	                                ref: 'gridrow-textarea-muud',
	                                onChange: self.handleGridRowChange,
	                                value: row.muud || '' })
	                        )
	                    ),
	                    React.createElement(
	                        'div',
	                        null,
	                        React.createElement(
	                            'span',
	                            null,
	                            validateMessage
	                        )
	                    )
	                )
	            );
	        }

	        /**
	         * валидатор для строки грида
	         * @returns {string}
	         */

	    }, {
	        key: 'gridValidateFields',
	        value: function gridValidateFields() {
	            var warning = '';
	            var doc = this.refs['document'];
	            if (doc && doc.gridRowData) {

	                // только после проверки формы на валидность
	                if (doc.gridRowData && !doc.gridRowData['nomid']) warning = warning + ' Код операции';
	                if (!doc.gridRowData['kogus']) warning = warning + ' Количество';
	                if (!doc.gridRowData['summa']) warning = warning + ' Сумма';

	                this.recalcRowSumm();
	                this.recalcDocSumma('summa');
	            }
	            return warning;
	        }

	        /**
	         * перерасчет суммы строки и расчет налога
	         */

	    }, {
	        key: 'recalcRowSumm',
	        value: function recalcRowSumm() {
	            var doc = this.refs['document'];

	            if (!Object.keys(doc.gridRowData).length) {
	                return;
	            }
	            //подставим наименование услогу

	            var vat = 0;
	            var nomHind = 0;
	            if (doc.gridRowData['nomid']) {
	                var nomDataName = doc.libs['nomenclature'].find(function (lib) {
	                    return Number(lib.id) === Number(doc.gridRowData['nomid']);
	                });

	                if (nomDataName) {
	                    doc.gridRowData['hind'] = nomDataName.hind && !doc.gridRowData['hind'] ? nomDataName.hind : doc.gridRowData['hind'];
	                    vat = nomDataName.vat ? Number(nomDataName.vat) / 100 : 0;
	                    nomHind = nomDataName.hind;
	                    doc.gridRowData['kood'] = nomDataName.kood ? nomDataName.kood : null;
	                    doc.gridRowData['nimetus'] = nomDataName.nimetus ? nomDataName.nimetus : null;
	                    doc.gridRowData['uhik'] = nomDataName.uhik ? nomDataName.uhik : null;
	                    doc.gridRowData['konto'] = nomDataName.konto ? nomDataName.konto : null;
	                    doc.gridRowData['tunnus'] = nomDataName.tunnus ? nomDataName.tunnus : null;
	                    doc.gridRowData['proj'] = nomDataName.proj ? nomDataName.proj : null;
	                    doc.gridRowData['kood1'] = nomDataName.tegev ? nomDataName.tegev : null;
	                    doc.gridRowData['kood2'] = nomDataName.allikas ? nomDataName.allikas : null;
	                    doc.gridRowData['kood5'] = nomDataName.artikkel ? nomDataName.artikkel : null;
	                }
	            }

	            doc.gridRowData['kogus'] = Number(doc.gridRowData.kogus);
	            doc.gridRowData['soodustus'] = doc.gridRowData['soodustus'] ? Number(doc.gridRowData.soodustus) : 0;
	            doc.gridRowData['hind'] = nomHind && doc.gridRowData['soodustus'] ? Number(nomHind) - doc.gridRowData['soodustus'] : Number(doc.gridRowData.hind);
	            doc.gridRowData['kbmta'] = Round(Number(doc.gridRowData['kogus']) * Number(doc.gridRowData['hind']));
	            doc.gridRowData['kbm'] = Round(Number(doc.gridRowData['kbmta']) * vat);
	            doc.gridRowData['summa'] = Round(Number(doc.gridRowData['kbmta']) + Number(doc.gridRowData['kbm']));
	        }

	        /**
	         * Перерасчет итоговых сумм документа
	         */

	    }, {
	        key: 'recalcDocSumma',
	        value: function recalcDocSumma() {
	            var doc = this.refs['document'];

	            doc.docData['summa'] = 0;
	            doc.docData['kbm'] = 0;
	            doc.docData.gridData.forEach(function (row) {
	                doc.docData['summa'] = Number(doc.docData['summa']) + Number(row['summa']);
	                doc.docData['kbm'] = Number(doc.docData['kbm']) + Number(row['kbm']);
	            });
	            doc.docData['summa'] = Round(doc.docData['summa']);
	            doc.docData['kbm'] = Round(doc.docData['kbm']);
	        }

	        // обработчик события клиска на кнопке редактирования контр-агента

	    }, {
	        key: 'btnEditAsutusClick',
	        value: function btnEditAsutusClick() {
	            var docAsutusId = this.refs['document'].docData.asutusid;

	            // осуществит переход на карточку контр-агента
	            this.props.history.push('/' + DocContext.module + '/asutused/' + docAsutusId);
	        }
	    }]);

	    return Arve;
	}(React.PureComponent);

	Arve.propTypes = {
	    docId: PropTypes.number,
	    initData: PropTypes.object,
	    userData: PropTypes.object
	};

	Arve.defaultProps = {
	    params: { docId: 0 },
	    initData: {},
	    userData: {}
	};

	module.exports = Arve;

/***/ }),
/* 274 */
/***/ (function(module, exports) {

	'use strict';module.exports={docRow:{display:'flex',flexDirection:'row'/*
	        border: '1px solid blue'
	*/},docColumn:{display:'flex',flexDirection:'column',/*
	        border: '1px solid yellow',
	*/width:'50%'},doc:{display:'flex',flexDirection:'column'/*
	        border: '1px solid brown'
	*/},summa:{width:'auto'},grid:{mainTable:{width:'100%'},headerTable:{width:'100%'},gridContainer:{width:'100%'}},gridRow:{backgroundColor:'white',position:'relative',margin:'10% 30% 10% 30%',width:'750px',opacity:'1',alignSelf:'center'},btnEdit:{width:'min-content'}};

/***/ }),
/* 275 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var React = __webpack_require__(10);
	var DocumentRegister = __webpack_require__(179);
	var ToolbarContainer = __webpack_require__(71);
	var BtnSettings = __webpack_require__(276);
	var BtnPrint = __webpack_require__(204);
	var BtnEmail = __webpack_require__(208);
	var BtnEarve = __webpack_require__(277);
	var InputNumber = __webpack_require__(238);
	var BtnArvesta = __webpack_require__(272);

	var getSum = __webpack_require__(278);

	var styles = __webpack_require__(279);

	var DocContext = __webpack_require__(1);
	var EVENTS = __webpack_require__(86).ARV.EVENTS;

	/**
	 * Класс реализует документ справочника признаков.
	 */

	var Documents = function (_React$PureComponent) {
	    _inherits(Documents, _React$PureComponent);

	    function Documents(props) {
	        _classCallCheck(this, Documents);

	        var _this = _possibleConstructorReturn(this, (Documents.__proto__ || Object.getPrototypeOf(Documents)).call(this, props));

	        _this.onClickHandler = _this.onClickHandler.bind(_this);
	        _this.renderer = _this.renderer.bind(_this);
	        _this.state = {
	            summa: 0,
	            jaak: 0,
	            read: 0
	        };

	        return _this;
	    }

	    _createClass(Documents, [{
	        key: 'render',
	        value: function render() {
	            var DOC_TYPE_ID = this.props.module == 'kasutaja' ? 'ISIKU_ARV' : 'ARV';

	            return React.createElement(
	                'div',
	                null,
	                React.createElement(DocumentRegister, { initData: this.props.initData,
	                    history: this.props.history ? this.props.history : null,
	                    module: this.props.module,
	                    ref: 'register',
	                    docTypeId: DOC_TYPE_ID,
	                    style: styles,
	                    render: this.renderer }),
	                React.createElement(InputNumber, { title: 'Read kokku:',
	                    name: 'read_kokku',
	                    style: styles.total,
	                    ref: 'input-read',
	                    value: Number(this.state.read) || 0,
	                    disabled: true }),
	                React.createElement(InputNumber, { title: 'Summa kokku:',
	                    name: 'summa_kokku',
	                    style: styles.total,
	                    ref: 'input-summa',
	                    value: Number(this.state.summa).toFixed(2) || 0,
	                    disabled: true }),
	                React.createElement(InputNumber, { title: 'J\xE4\xE4k kokku:',
	                    name: 'jaak_kokku',
	                    style: styles.total,
	                    ref: 'input-jaak',
	                    value: Number(this.state.jaak).toFixed(2) || 0,
	                    disabled: true })
	            );
	        }
	    }, {
	        key: 'renderer',
	        value: function renderer(self) {
	            var DOC_TYPE_ID = this.props.module == 'kasutaja' ? 'ISIKU_ARV' : 'ARV';

	            var summa = self.gridData ? getSum(self.gridData, 'summa') : 0;
	            var jaak = self.gridData ? getSum(self.gridData, 'jaak') : 0;
	            if (summa) {
	                this.setState({ summa: summa, read: self.gridData.length, jaak: jaak });
	            }

	            return React.createElement(
	                ToolbarContainer,
	                null,
	                React.createElement(BtnEarve, {
	                    onClick: this.onClickHandler,
	                    docTypeId: DOC_TYPE_ID,
	                    phrase: 'Kas laadida XML (SWED) fail?',
	                    ref: 'btnEarveSwedXML',
	                    value: EVENTS[6].name
	                }),
	                React.createElement(BtnEarve, {
	                    onClick: this.onClickHandler,
	                    docTypeId: DOC_TYPE_ID,
	                    phrase: 'Kas laadida XML (SEB) fail?',
	                    ref: 'btnEarveSebXML',
	                    value: EVENTS[5].name
	                }),
	                React.createElement(BtnEarve, {
	                    onClick: this.onClickHandler,
	                    docTypeId: DOC_TYPE_ID,
	                    phrase: 'Kas laadida XML fail?',
	                    ref: 'btnEarveXML',
	                    value: EVENTS[4].name
	                }),
	                React.createElement(BtnEarve, {
	                    onClick: this.onClickHandler,
	                    docTypeId: DOC_TYPE_ID,
	                    ref: 'btnEarveOmniva',
	                    value: EVENTS[3].name
	                }),
	                React.createElement(BtnEmail, {
	                    onClick: this.onClickHandler,
	                    docTypeId: DOC_TYPE_ID,
	                    ref: 'btnEmail',
	                    value: EVENTS[2].name
	                }),
	                React.createElement(BtnPrint, {
	                    onClick: this.onClickHandler,
	                    docTypeId: DOC_TYPE_ID,
	                    ref: 'btnPrint',
	                    value: EVENTS[1].name
	                }),
	                React.createElement(BtnSettings, {
	                    history: self.props.history ? self.props.history : null,
	                    docTypeId: DOC_TYPE_ID,
	                    onClick: this.onClickHandler,
	                    ref: 'btnSettings',
	                    value: EVENTS[0].name
	                })
	            );
	        }

	        //handler для события клик на кнопках панели

	    }, {
	        key: 'onClickHandler',
	        value: function onClickHandler(event, seisuga) {
	            var _this2 = this;

	            var ids = new Set(); // сюда пишем ид счетом, которые под обработку

	            var Doc = this.refs['register'];

	            switch (event) {
	                case EVENTS[0].name:
	                    //делаем редайрект на конфигурацию
	                    this.props.history.push('/' + this.props.module + '/config/' + DocContext.userData.asutusId);
	                    break;
	                case EVENTS[1].name:
	                    // Print

	                    // будет выведено на печать выбранные и только для печати счета
	                    Doc.gridData.forEach(function (row) {
	                        if (row.select && row.kas_paberil) {
	                            // выбрано для печати
	                            ids.add(row.id);
	                        }
	                    });
	                    // конвертация в массив
	                    ids = Array.from(ids);

	                    if (ids.length > 0) {
	                        Doc.setState({
	                            warning: 'Leidsin ' + ids.length + ' arveid printimiseks', // строка извещений
	                            warningType: 'ok'
	                        });

	                        var url = '/multiple_print/' + DOC_TYPE_ID + '/' + DocContext.userData.uuid + '/' + ids;
	                        window.open('' + url);
	                    } else {
	                        Doc.setState({
	                            warning: 'Mitte ühtegi arve leidnum', // строка извещений
	                            warningType: 'notValid'
	                        });
	                    }

	                    break;
	                case EVENTS[2].name:
	                    //emails

	                    // будет отправлено на почту  выбранные и только для эл.почты счета
	                    Doc.gridData.forEach(function (row) {
	                        if (row.select && row.kas_email) {
	                            // выбрано для печати
	                            ids.add(row.id);
	                        }
	                    });

	                    // конвертация в массив
	                    ids = Array.from(ids);

	                    if (!ids.length) {
	                        Doc.setState({
	                            warning: 'Mitte ühtegi arve leidnum', // строка извещений
	                            warningType: 'notValid'
	                        });
	                    } else {
	                        // отправляем запрос на выполнение

	                        Doc.fetchData('email', ids).then(function (data) {
	                            if (data.result) {
	                                Doc.setState({ warning: 'Kokku saadetud arveid emailga: ' + data.result, warningType: 'ok' });
	                            } else {
	                                console.error('email error', data);
	                                Doc.setState({ warning: 'Tekkis viga: ' + data.error_message, warningType: 'error' });
	                            }
	                        }).catch(function (error) {
	                            console.error('email error', error);
	                            Doc.setState({ warning: 'Tekkis viga: ' + error, warningType: 'error' });
	                        });
	                    }

	                    break;

	                case EVENTS[3].name:
	                    //e-arved

	                    // будет отправлено на почту  выбранные и только для эл.почты счета
	                    Doc.gridData.forEach(function (row) {
	                        if (row.select && row.kas_earved) {
	                            // выбрано для печати
	                            ids.add(row.id);
	                        }
	                    });
	                    // конвертация в массив
	                    ids = Array.from(ids);

	                    if (!ids.length) {
	                        Doc.setState({
	                            warning: 'Mitte ühtegi arve leidnum', // строка извещений
	                            warningType: 'notValid'
	                        });
	                    } else {
	                        // отправляем запрос на выполнение

	                        Doc.fetchData('e-arved', ids).then(function (data) {
	                            if (data && 'result' in data) {
	                                Doc.setState({ warning: 'Kokku saadetud arveid  : ' + data.result, warningType: 'ok' });
	                            } else {
	                                var error_message =  true ? data.error_message : '';
	                                Doc.setState({ warning: '' + error_message, warningType: 'error' });
	                            }
	                        }).catch(function (err) {
	                            var error_message =  true ? err.TypeError : '';
	                            Doc.setState({ warning: '' + error_message, warningType: 'error' });
	                        });
	                    }

	                    break;
	                case EVENTS[4].name:
	                    //e-arved (XML)

	                    // будет отправлено на почту  выбранные и только для эл.почты счета
	                    Doc.gridData.forEach(function (row) {
	                        if (row.select && row.kas_earved && Number(row.summa) > 0) {
	                            // выбрано для печати
	                            ids.add(row.id);
	                        }
	                    });
	                    // конвертация в массив
	                    ids = Array.from(ids);

	                    if (!ids.length) {
	                        Doc.setState({
	                            warning: 'Mitte ühtegi arve leidnum', // строка извещений
	                            warningType: 'notValid'
	                        });
	                    } else {
	                        // отправляем запрос на выполнение
	                        Doc.setState({
	                            warning: 'Leidsin ' + ids.length + ' arveid', // строка извещений
	                            warningType: 'ok'
	                        });

	                        var _url = '/e-arved/' + DocContext.userData.uuid + '/' + ids;
	                        window.open('' + _url);
	                    }

	                    break;
	                case EVENTS[5].name:
	                    //e-arved SEB (XML)

	                    // будет сформирован файл для отправки в банк СЕБ
	                    Doc.gridData.forEach(function (row) {
	                        if (row.kas_earved && row.pank && row.pank == 'SEB' && row.select && Number(row.summa) > 0) {
	                            // выбрано для печати
	                            ids.add(row.id);
	                        }
	                    });
	                    // конвертация в массив
	                    ids = Array.from(ids);

	                    if (!ids.length) {
	                        Doc.setState({
	                            warning: 'Mitte ühtegi arve leidnum', // строка извещений
	                            warningType: 'notValid'
	                        });
	                    } else {
	                        // отправляем запрос на выполнение
	                        Doc.setState({
	                            warning: 'Leidsin ' + ids.length + ' arveid', // строка извещений
	                            warningType: 'ok'
	                        });

	                        var _url2 = '/e-arved/seb/' + DocContext.userData.uuid + '/' + ids;
	                        window.open('' + _url2);
	                    }
	                    break;
	                case EVENTS[6].name:
	                    //e-arved Swed (XML)

	                    // будет сформирован файл для отправки в банк SWED
	                    Doc.gridData.forEach(function (row) {
	                        if (row.kas_earved && row.select && row.pank && row.pank == 'SWED' && Number(row.summa) > 0) {
	                            // && row.kas_swed
	                            // выбрано для печати
	                            ids.add(row.id);
	                        }
	                    });
	                    // конвертация в массив
	                    ids = Array.from(ids);

	                    if (!ids.length) {
	                        Doc.setState({
	                            warning: 'Mitte ühtegi arve leidnum', // строка извещений
	                            warningType: 'notValid'
	                        });
	                    } else {
	                        // отправляем запрос на выполнение
	                        Doc.setState({
	                            warning: 'Leidsin ' + ids.length + ' arveid', // строка извещений
	                            warningType: 'ok'
	                        });

	                        var _url3 = '/e-arved/swed/' + DocContext.userData.uuid + '/' + ids;
	                        window.open('' + _url3);
	                    }
	                    break;
	                case EVENTS[7].name:
	                    //списание маловероятных
	                    var message = '';
	                    // будет сформирован файл для отправки в банк SWED
	                    Doc.gridData.forEach(function (row) {
	                        if (row.ebatoenaolised == 'Jah' && Number(row.jaak) > 0) {
	                            // && row.kas_swed
	                            // выбрано для печати
	                            ids.add(row.id);
	                        }
	                    });
	                    // конвертация в массив
	                    ids = Array.from(ids);

	                    if (!ids.length) {
	                        Doc.setState({
	                            warning: 'Mitte ühtegi arve leidnum', // строка извещений
	                            warningType: 'notValid'
	                        });
	                    } else {
	                        Doc.fetchData('calc/ebatoenaolised', { docs: ids, seisuga: seisuga }).then(function (data) {
	                            if (data.result) {
	                                message = 'task saadetud t\xE4itmisele';
	                                Doc.setState({ warning: '' + message, warningType: 'ok' });

	                                var tulemused = data.data.result.tulemused;
	                                // открываем отчет
	                                _this2.setState({ isReport: true, txtReport: tulemused });
	                            } else {
	                                if (data.error_message) {
	                                    Doc.setState({ warning: 'Tekkis viga: ' + data.error_message, warningType: 'error' });
	                                } else {
	                                    Doc.setState({
	                                        warning: 'Kokku arvestatud : ' + data.result + ', ' + message,
	                                        warningType: 'notValid'
	                                    });
	                                }
	                            }
	                        });
	                    }
	                    break;

	            }
	        }
	    }]);

	    return Documents;
	}(React.PureComponent);

	module.exports = Documents;

/***/ }),
/* 276 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var React = __webpack_require__(10);
	var PropTypes = __webpack_require__(11);

	var styles = __webpack_require__(74),
	    Button = __webpack_require__(75),
	    ICON = 'settings';

	var ButtonSettings = function (_React$PureComponent) {
	    _inherits(ButtonSettings, _React$PureComponent);

	    // кнопка создания документа в регистрах
	    function ButtonSettings(props) {
	        _classCallCheck(this, ButtonSettings);

	        var _this = _possibleConstructorReturn(this, (ButtonSettings.__proto__ || Object.getPrototypeOf(ButtonSettings)).call(this, props));

	        _this.handleClick = _this.handleClick.bind(_this);
	        return _this;
	    }

	    _createClass(ButtonSettings, [{
	        key: 'handleClick',
	        value: function handleClick(e) {
	            return this.props.onClick(this.props.value);
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            return React.createElement(
	                Button,
	                {
	                    value: this.props.value,
	                    ref: 'btnSettings',
	                    style: styles.button,
	                    disabled: false,
	                    onClick: this.handleClick },
	                React.createElement('img', { ref: 'image', src: styles.icons[ICON] })
	            );
	        }
	    }]);

	    return ButtonSettings;
	}(React.PureComponent);

	ButtonSettings.defaultProps = {
	    disabled: false,
	    show: true,
	    value: 'Settings'
	};

	module.exports = ButtonSettings;

/***/ }),
/* 277 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var PropTypes = __webpack_require__(11);

	var React = __webpack_require__(10),
	    styles = __webpack_require__(74),
	    Button = __webpack_require__(75),
	    ModalPage = __webpack_require__(171),
	    ICON = 'mail';

	var ButtonRegisterEmail = function (_React$PureComponent) {
	    _inherits(ButtonRegisterEmail, _React$PureComponent);

	    // кнопка создания документа в регистрах
	    function ButtonRegisterEmail(props) {
	        _classCallCheck(this, ButtonRegisterEmail);

	        var _this = _possibleConstructorReturn(this, (ButtonRegisterEmail.__proto__ || Object.getPrototypeOf(ButtonRegisterEmail)).call(this, props));

	        _this.state = {
	            showModal: false
	        };
	        _this.modalPageClick = _this.modalPageClick.bind(_this);
	        return _this;
	    }

	    /**
	     * обработчик события клик, откроет модальное окно
	     * @param e
	     */


	    _createClass(ButtonRegisterEmail, [{
	        key: 'handleClick',
	        value: function handleClick(e) {
	            this.setState({ showModal: true });
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var _this2 = this;

	            var phrase = this.props.phrase ? this.props.phrase : 'Kas saada E-Arve ?';

	            return React.createElement(
	                'div',
	                null,
	                React.createElement(
	                    Button,
	                    {
	                        ref: 'btnEmail',
	                        value: this.props.value,
	                        show: this.props.show,
	                        disabled: this.props.disabled,
	                        onClick: function onClick(e) {
	                            return _this2.handleClick(e);
	                        } },
	                    React.createElement('img', { ref: 'image', src: styles.icons[ICON] })
	                ),
	                React.createElement(
	                    ModalPage,
	                    {
	                        modalPageBtnClick: this.modalPageClick,
	                        modalPageName: '' + this.props.value,
	                        show: this.state.showModal,
	                        modalObjects: ['btnOk', 'btnCancel']
	                    },
	                    phrase
	                )
	            );
	        }

	        /**
	         * обработчик на событие клика на кнопки можального окна
	         * @param btnEvent
	         */

	    }, {
	        key: 'modalPageClick',
	        value: function modalPageClick(btnEvent) {
	            if (btnEvent === 'Ok') {
	                this.props.onClick(this.props.value);
	            }
	            this.setState({ showModal: false });
	        }
	    }]);

	    return ButtonRegisterEmail;
	}(React.PureComponent);

	/*
	ButtonRegisterPrint.propTypes = {
	    onClick: PropTypes.func.isRequired
	}
	*/

	ButtonRegisterEmail.defaultProps = {
	    disabled: false,
	    show: true,
	    value: 'Email'
	};

	module.exports = ButtonRegisterEmail;

/***/ }),
/* 278 */
/***/ (function(module, exports) {

	"use strict";// will calculate sum of some field
	var getSum=function getSum(data,columnField){var total=0;if(data&&data.length&&data[0][columnField]){data.forEach(function(row){return total=total+Number(row[columnField]);});}return total.toFixed(2);};module.exports=getSum;

/***/ }),
/* 279 */
/***/ (function(module, exports) {

	'use strict';module.exports={grid:{mainTable:{width:'100%',td:{border:'1px solid lightGrey',display:'table-cell',paddingLeft:'5px'}},headerTable:{width:'100%'},gridContainer:{width:'100%'}},doc:{height:'100%'},total:{width:'auto'}};

/***/ }),
/* 280 */,
/* 281 */,
/* 282 */,
/* 283 */,
/* 284 */,
/* 285 */,
/* 286 */,
/* 287 */,
/* 288 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var PropTypes = __webpack_require__(11);
	var React = __webpack_require__(10);

	var DocumentTemplate = __webpack_require__(223),
	    InputText = __webpack_require__(212),
	    InputDate = __webpack_require__(236),
	    InputNumber = __webpack_require__(238),
	    Select = __webpack_require__(164),
	    SelectData = __webpack_require__(265),
	    TextArea = __webpack_require__(216),
	    DataGrid = __webpack_require__(183),
	    relatedDocuments = __webpack_require__(267),
	    ModalPage = __webpack_require__(171),
	    ButtonEdit = __webpack_require__(80),
	    styles = __webpack_require__(289);
	var Round = __webpack_require__(269);
	var Loading = __webpack_require__(243);

	var DocContext = __webpack_require__(1);
	var LIB_OBJS = __webpack_require__(86).ANDMED.LIB_OBJS;

	var Leping = function (_React$PureComponent) {
	    _inherits(Leping, _React$PureComponent);

	    function Leping(props) {
	        _classCallCheck(this, Leping);

	        var _this = _possibleConstructorReturn(this, (Leping.__proto__ || Object.getPrototypeOf(Leping)).call(this, props));

	        _this.state = {
	            loadedData: false,
	            module: props.module ? props.module : DocContext.module,
	            docId: props.docId ? props.docId : Number(props.match.params.docId)
	        };

	        _this.createGridRow = _this.createGridRow.bind(_this);

	        _this.renderer = _this.renderer.bind(_this);
	        _this.gridValidateFields = _this.gridValidateFields.bind(_this);
	        _this.btnEditAsutusClick = _this.btnEditAsutusClick.bind(_this);
	        _this.pages = [{ pageName: 'Andmed', docTypeId: 'ANDMED' }];

	        return _this;
	    }

	    _createClass(Leping, [{
	        key: 'render',
	        value: function render() {
	            return React.createElement(DocumentTemplate, { docId: this.state.docId,
	                ref: 'document',
	                history: this.props.history,
	                docTypeId: 'ANDMED',
	                module: this.props.module,
	                initData: this.props.initData ? this.props.initData : {},
	                reload: true,
	                pages: this.pages,
	                libs: LIB_OBJS,
	                renderer: this.renderer,
	                createGridRow: this.createGridRow,
	                gridValidator: this.gridValidateFields,
	                focusElement: 'input-kpv'
	            });
	        }

	        /**
	         *Вернет кастомные компоненты документа
	         */

	    }, {
	        key: 'renderer',
	        value: function renderer(self) {
	            if (!self || !self.docData || !self.docData.kpv || self.libs['leping'].length == 0) {
	                return React.createElement(
	                    'div',
	                    { style: styles.doc },
	                    React.createElement(Loading, { label: 'Laadimine...' })
	                );
	            }

	            // формируем зависимости
	            if (self.docData.relations) {
	                relatedDocuments(self);
	            }

	            var isEditMode = self.state.edited,
	                gridData = self.docData.gridData,
	                gridColumns = self.docData.gridConfig;

	            // фильтруем договоры, только владелец
	            var lepingud = self.libs['leping'].filter(function (leping) {
	                return leping.user_id == DocContext.userData.userId;
	            });

	            // если договор только один, то ставим его сразу
	            if (lepingud.length == 1 && !self.docData.lepingid) {
	                self.docData.lepingid = lepingud[0].id;
	            }

	            // если указан договор
	            if (self.docData.lepingid) {
	                lepingud.forEach(function (row) {
	                    if (row.id == self.docData.lepingid) {
	                        self.docData.asutus = row.asutus;
	                        self.docData.objekt = row.nimetus;

	                        if (gridData.length == 0) {
	                            // пишем услуги
	                            // если нет услуг, добавим их
	                            row.noms.forEach(function (nom) {
	                                gridData.push({
	                                    id: 0,
	                                    nomid: nom.nom_id,
	                                    kogus: 0,
	                                    eel_kogus: nom.eel_kogus,
	                                    hind: nom.hind,
	                                    kood: nom.kood,
	                                    nimetus: nom.nimetus
	                                });
	                            });
	                        }
	                    }
	                });
	            }

	            return React.createElement(
	                'div',
	                null,
	                React.createElement(
	                    'div',
	                    { style: styles.doc },
	                    React.createElement(
	                        'div',
	                        { style: styles.docRow },
	                        React.createElement(
	                            'div',
	                            { style: styles.docColumn },
	                            React.createElement(InputDate, { title: 'Kuup\xE4ev',
	                                name: 'kpv',
	                                value: self.docData.kpv,
	                                ref: 'input-kpv',
	                                readOnly: !isEditMode,
	                                onChange: self.handleInputChange })
	                        )
	                    ),
	                    !self.docData.id ? React.createElement(
	                        'div',
	                        { style: styles.docRow },
	                        React.createElement(
	                            'div',
	                            { style: styles.docColumn },
	                            React.createElement(Select, { title: 'Leping',
	                                name: 'lepingid',
	                                libs: 'leping',
	                                value: self.docData.lepingid,
	                                data: lepingud,
	                                defaultValue: String(self.docData.objekt) || '',
	                                onChange: self.handleInputChange,
	                                collId: 'id',
	                                ref: 'select-leping',
	                                readOnly: !isEditMode })
	                        )
	                    ) : null,
	                    React.createElement(
	                        'div',
	                        { style: styles.docRow },
	                        React.createElement(
	                            'div',
	                            { style: styles.docColumn },
	                            React.createElement(InputText, { ref: 'input-asutus',
	                                title: 'Korteriomanik',
	                                name: 'asutus',
	                                value: self.docData.asutus || '',
	                                readOnly: true })
	                        )
	                    ),
	                    React.createElement(
	                        'div',
	                        { style: styles.docRow },
	                        React.createElement(
	                            'div',
	                            { style: styles.docColumn },
	                            React.createElement(InputText, { ref: 'input-objekt',
	                                title: 'Objekt',
	                                name: 'objekt',
	                                value: self.docData.objekt || '',
	                                readOnly: true })
	                        )
	                    ),
	                    React.createElement(
	                        'div',
	                        { style: styles.docRow },
	                        React.createElement(TextArea, { title: 'M\xE4rkused',
	                            name: 'muud',
	                            ref: 'textarea-muud',
	                            onChange: self.handleInputChange,
	                            value: self.docData.muud || '',
	                            readOnly: !isEditMode })
	                    ),
	                    React.createElement(
	                        'div',
	                        { style: styles.docRow },
	                        React.createElement(DataGrid, { source: 'details',
	                            gridData: gridData,
	                            gridColumns: gridColumns,
	                            showToolBar: isEditMode,
	                            handleGridRow: this.handleGridRow,
	                            handleGridBtnClick: self.handleGridBtnClick,
	                            readOnly: !isEditMode,
	                            style: styles.grid.headerTable,
	                            ref: 'data-grid' })
	                    ),
	                    self.state.gridRowEdit ? this.createGridRow(self) : null
	                )
	            );
	        }

	        /**
	         * Создаст компонет строки грида
	         * @returns {XML}
	         */

	    }, {
	        key: 'createGridRow',
	        value: function createGridRow(self) {

	            var row = self.gridRowData ? self.gridRowData : {},
	                validateMessage = '',
	                // self.state.warning
	            buttonOkReadOnly = validateMessage.length > 0 || !self.state.checked,
	                modalObjects = ['btnOk', 'btnCancel'];

	            if (buttonOkReadOnly) {
	                // уберем кнопку Ок
	                modalObjects.splice(0, 1);
	            }

	            if (!row) return React.createElement('div', null);

	            var gridRowInputStyle = styles.gridRowInput;

	            return React.createElement(
	                'div',
	                { className: '.modalPage' },
	                React.createElement(
	                    ModalPage,
	                    {
	                        modalObjects: modalObjects,
	                        ref: 'modalpage-grid-row',
	                        show: true,
	                        modalPageBtnClick: self.modalPageClick,
	                        modalPageName: 'Rea lisamine / parandamine' },
	                    React.createElement(
	                        'div',
	                        { ref: 'grid-row-container' },
	                        self.state.gridWarning.length ? React.createElement(
	                            'div',
	                            { style: styles.docRow },
	                            React.createElement(
	                                'span',
	                                null,
	                                self.state.gridWarning
	                            )
	                        ) : null,
	                        React.createElement(
	                            'div',
	                            { style: styles.docRow },
	                            React.createElement(
	                                'div',
	                                { style: styles.docColumn },
	                                React.createElement(InputText, { title: 'Teenus',
	                                    name: 'nomid',
	                                    readOnly: true,
	                                    value: row.nimetus,
	                                    style: gridRowInputStyle,
	                                    ref: 'nomid' })
	                            )
	                        ),
	                        React.createElement(
	                            'div',
	                            { style: styles.docRow },
	                            React.createElement(
	                                'div',
	                                { style: styles.docColumn },
	                                React.createElement(InputNumber, { title: 'Kogus ',
	                                    name: 'kogus',
	                                    value: Number(row.kogus ? row.kogus : 0),
	                                    readOnly: false,
	                                    disabled: false,
	                                    bindData: false,
	                                    ref: 'kogus',
	                                    pattern: '[0-9]{10}',
	                                    style: gridRowInputStyle,
	                                    onChange: self.handleGridRowInput })
	                            )
	                        ),
	                        React.createElement(
	                            'div',
	                            { style: styles.docRow },
	                            React.createElement(
	                                'div',
	                                { style: styles.docColumn },
	                                React.createElement(InputNumber, { title: 'Eelmise kogus ',
	                                    name: 'eel_kogus',
	                                    value: Number(row.eel_kogus ? row.eel_kogus : 0),
	                                    readOnly: true,
	                                    style: gridRowInputStyle,
	                                    ref: 'eel_kogus' })
	                            )
	                        ),
	                        React.createElement(
	                            'div',
	                            { style: styles.docRow },
	                            React.createElement(
	                                'div',
	                                { style: styles.docColumn },
	                                React.createElement(InputNumber, { title: 'Vahe',
	                                    name: 'vahe',
	                                    value: row.kogus ? Number(row.kogus) - Number(row.eel_kogus ? row.eel_kogus : 0) : 0,
	                                    readOnly: true,
	                                    style: gridRowInputStyle,
	                                    ref: 'vahe' })
	                            )
	                        )
	                    ),
	                    React.createElement(
	                        'div',
	                        null,
	                        React.createElement(
	                            'span',
	                            null,
	                            validateMessage
	                        )
	                    )
	                )
	            );
	        }

	        /**
	         * валидатор для строки грида
	         * @returns {string}
	         */

	    }, {
	        key: 'gridValidateFields',
	        value: function gridValidateFields() {
	            var warning = '';
	            var doc = this.refs['document'];
	            if (doc && doc.gridRowData) {

	                // только после проверки формы на валидность

	                //            if (doc.gridRowData && !doc.gridRowData['nomid']) warning = warning + ' Код операции';
	                if (!doc.gridRowData['kogus']) warning = warning + ' Kogus';
	                if (!doc.gridRowData['nomid']) warning = warning + ' Teenus';
	            }
	            return warning;
	        }

	        // обработчик события клиска на кнопке редактирования контр-агента

	    }, {
	        key: 'btnEditAsutusClick',
	        value: function btnEditAsutusClick() {
	            var docAsutusId = this.refs['document'].docData.asutusid;

	            // осуществит переход на карточку контр-агента
	            this.props.history.push('/' + this.props.module + '/asutused/' + docAsutusId);
	        }
	    }]);

	    return Leping;
	}(React.PureComponent);

	Leping.propTypes = {
	    docId: PropTypes.number,
	    initData: PropTypes.object,
	    userData: PropTypes.object
	};

	Leping.defaultProps = {
	    params: { docId: 0 },
	    initData: {},
	    userData: {}
	};

	module.exports = Leping;

/***/ }),
/* 289 */
/***/ (function(module, exports) {

	'use strict';module.exports={docRow:{display:'flex',flexDirection:'row'/*
	        border: '1px solid blue'
	*/},docColumn:{display:'flex',flexDirection:'column',/*
	        border: '1px solid yellow',
	*/width:'50%'},doc:{display:'flex',flexDirection:'column'/*
	        border: '1px solid brown'
	*/},summa:{width:'auto'},grid:{mainTable:{width:'100%'},headerTable:{width:'100%'},gridContainer:{width:'100%'}},gridRow:{/*
	        border: '1px solid black',
	*/backgroundColor:'white',position:'relative',margin:'10% 30% 10% 30%',width:'auto',opacity:'1',top:'100px'},gridRowInput:{width:'auto',margin:'5px 10px'},btnEdit:{width:'min-content'}};

/***/ }),
/* 290 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var React = __webpack_require__(10);
	var DocumentRegister = __webpack_require__(179);
	var styles = __webpack_require__(291);

	/**
	 * Класс реализует документ справочника признаков.
	 */

	var Documents = function (_React$PureComponent) {
	    _inherits(Documents, _React$PureComponent);

	    function Documents(props) {
	        _classCallCheck(this, Documents);

	        var _this = _possibleConstructorReturn(this, (Documents.__proto__ || Object.getPrototypeOf(Documents)).call(this, props));

	        _this.renderer = _this.renderer.bind(_this);

	        return _this;
	    }

	    _createClass(Documents, [{
	        key: 'render',
	        value: function render() {
	            var DOC_TYPE_ID = this.props.module == 'kasutaja' ? 'ISIKU_ANDMED' : 'ANDMED';

	            return React.createElement(
	                'div',
	                null,
	                React.createElement(DocumentRegister, { initData: this.props.initData,
	                    history: this.props.history ? this.props.history : null,
	                    module: this.props.module,
	                    ref: 'register',
	                    docTypeId: DOC_TYPE_ID,
	                    style: styles,
	                    render: this.renderer })
	            );
	        }
	    }, {
	        key: 'renderer',
	        value: function renderer(self) {
	            return null;
	        }
	    }]);

	    return Documents;
	}(React.PureComponent);

	module.exports = Documents;

/***/ }),
/* 291 */
/***/ (function(module, exports) {

	'use strict';module.exports={grid:{mainTable:{width:'100%',td:{border:'1px solid lightGrey',display:'table-cell',paddingLeft:'5px'}},headerTable:{width:'100%'},gridContainer:{width:'100%'}},doc:{height:'100%'},total:{width:'auto'}};

/***/ })
/******/ ]);