var main =
webpackJsonp_name_([3],[
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';var _redux=__webpack_require__(304);var _reducers=__webpack_require__(323);var _reducers2=_interopRequireDefault(_reducers);var _reduxDevtoolsExtension=__webpack_require__(331);var _reactRedux=__webpack_require__(332);var _reduxThunk=__webpack_require__(375);var _reduxThunk2=_interopRequireDefault(_reduxThunk);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var ReactDOM=__webpack_require__(4);var _require=__webpack_require__(5),BrowserRouter=_require.BrowserRouter;var store=(0,_redux.createStore)(_reducers2.default,(0,_reduxDevtoolsExtension.composeWithDevTools)((0,_redux.applyMiddleware)(_reduxThunk2.default)));var Doc=__webpack_require__(376);//import store from './store';
	// сохраним базовые данные в памети
	ReactDOM.hydrate(React.createElement(_reactRedux.Provider,{store:store},React.createElement(BrowserRouter,null,React.createElement(Doc,{store:store}))),document.getElementById('doc'));

/***/ }),
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */,
/* 54 */,
/* 55 */,
/* 56 */,
/* 57 */,
/* 58 */,
/* 59 */,
/* 60 */,
/* 61 */,
/* 62 */,
/* 63 */,
/* 64 */,
/* 65 */,
/* 66 */,
/* 67 */,
/* 68 */,
/* 69 */,
/* 70 */,
/* 71 */,
/* 72 */,
/* 73 */,
/* 74 */,
/* 75 */,
/* 76 */,
/* 77 */,
/* 78 */,
/* 79 */,
/* 80 */,
/* 81 */,
/* 82 */,
/* 83 */,
/* 84 */,
/* 85 */,
/* 86 */,
/* 87 */,
/* 88 */,
/* 89 */,
/* 90 */,
/* 91 */,
/* 92 */,
/* 93 */,
/* 94 */,
/* 95 */,
/* 96 */,
/* 97 */,
/* 98 */,
/* 99 */,
/* 100 */,
/* 101 */,
/* 102 */,
/* 103 */,
/* 104 */,
/* 105 */,
/* 106 */,
/* 107 */,
/* 108 */,
/* 109 */,
/* 110 */,
/* 111 */,
/* 112 */,
/* 113 */,
/* 114 */,
/* 115 */,
/* 116 */,
/* 117 */,
/* 118 */,
/* 119 */,
/* 120 */,
/* 121 */,
/* 122 */,
/* 123 */,
/* 124 */,
/* 125 */,
/* 126 */,
/* 127 */,
/* 128 */,
/* 129 */,
/* 130 */,
/* 131 */,
/* 132 */,
/* 133 */,
/* 134 */,
/* 135 */,
/* 136 */,
/* 137 */,
/* 138 */,
/* 139 */,
/* 140 */,
/* 141 */,
/* 142 */,
/* 143 */,
/* 144 */,
/* 145 */,
/* 146 */,
/* 147 */,
/* 148 */,
/* 149 */,
/* 150 */,
/* 151 */,
/* 152 */,
/* 153 */,
/* 154 */,
/* 155 */,
/* 156 */,
/* 157 */,
/* 158 */,
/* 159 */,
/* 160 */,
/* 161 */,
/* 162 */,
/* 163 */,
/* 164 */,
/* 165 */,
/* 166 */,
/* 167 */,
/* 168 */,
/* 169 */,
/* 170 */,
/* 171 */,
/* 172 */,
/* 173 */,
/* 174 */,
/* 175 */,
/* 176 */,
/* 177 */,
/* 178 */,
/* 179 */,
/* 180 */,
/* 181 */,
/* 182 */,
/* 183 */,
/* 184 */,
/* 185 */,
/* 186 */,
/* 187 */,
/* 188 */,
/* 189 */,
/* 190 */,
/* 191 */,
/* 192 */,
/* 193 */,
/* 194 */,
/* 195 */,
/* 196 */,
/* 197 */,
/* 198 */,
/* 199 */,
/* 200 */,
/* 201 */,
/* 202 */,
/* 203 */,
/* 204 */,
/* 205 */,
/* 206 */,
/* 207 */,
/* 208 */,
/* 209 */,
/* 210 */,
/* 211 */,
/* 212 */,
/* 213 */,
/* 214 */,
/* 215 */,
/* 216 */,
/* 217 */,
/* 218 */,
/* 219 */,
/* 220 */,
/* 221 */,
/* 222 */,
/* 223 */,
/* 224 */,
/* 225 */,
/* 226 */,
/* 227 */,
/* 228 */,
/* 229 */,
/* 230 */,
/* 231 */,
/* 232 */,
/* 233 */,
/* 234 */,
/* 235 */,
/* 236 */,
/* 237 */,
/* 238 */,
/* 239 */,
/* 240 */,
/* 241 */,
/* 242 */,
/* 243 */,
/* 244 */,
/* 245 */,
/* 246 */,
/* 247 */,
/* 248 */,
/* 249 */,
/* 250 */,
/* 251 */,
/* 252 */,
/* 253 */,
/* 254 */,
/* 255 */,
/* 256 */,
/* 257 */,
/* 258 */,
/* 259 */,
/* 260 */,
/* 261 */,
/* 262 */,
/* 263 */,
/* 264 */,
/* 265 */,
/* 266 */,
/* 267 */,
/* 268 */,
/* 269 */,
/* 270 */,
/* 271 */,
/* 272 */,
/* 273 */,
/* 274 */,
/* 275 */,
/* 276 */,
/* 277 */,
/* 278 */,
/* 279 */,
/* 280 */,
/* 281 */,
/* 282 */,
/* 283 */,
/* 284 */,
/* 285 */,
/* 286 */,
/* 287 */,
/* 288 */,
/* 289 */,
/* 290 */,
/* 291 */,
/* 292 */,
/* 293 */,
/* 294 */,
/* 295 */,
/* 296 */,
/* 297 */,
/* 298 */,
/* 299 */,
/* 300 */,
/* 301 */,
/* 302 */,
/* 303 */,
/* 304 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';exports.__esModule=true;exports.compose=exports.applyMiddleware=exports.bindActionCreators=exports.combineReducers=exports.createStore=undefined;var _createStore=__webpack_require__(305);var _createStore2=_interopRequireDefault(_createStore);var _combineReducers=__webpack_require__(318);var _combineReducers2=_interopRequireDefault(_combineReducers);var _bindActionCreators=__webpack_require__(320);var _bindActionCreators2=_interopRequireDefault(_bindActionCreators);var _applyMiddleware=__webpack_require__(321);var _applyMiddleware2=_interopRequireDefault(_applyMiddleware);var _compose=__webpack_require__(322);var _compose2=_interopRequireDefault(_compose);var _warning=__webpack_require__(319);var _warning2=_interopRequireDefault(_warning);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{'default':obj};}/*
	* This is a dummy function to check if the function name has been altered by minification.
	* If the function has been minified and NODE_ENV !== 'production', warn the user.
	*/function isCrushed(){}if(process.env.NODE_ENV!=='production'&&typeof isCrushed.name==='string'&&isCrushed.name!=='isCrushed'){(0,_warning2['default'])('You are currently using minified code outside of NODE_ENV === \'production\'. '+'This means that you are running a slower development build of Redux. '+'You can use loose-envify (https://github.com/zertosh/loose-envify) for browserify '+'or DefinePlugin for webpack (http://stackoverflow.com/questions/30030031) '+'to ensure you have the correct code for your production build.');}exports.createStore=_createStore2['default'];exports.combineReducers=_combineReducers2['default'];exports.bindActionCreators=_bindActionCreators2['default'];exports.applyMiddleware=_applyMiddleware2['default'];exports.compose=_compose2['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ }),
/* 305 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';var _typeof=typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"?function(obj){return typeof obj;}:function(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;};exports.__esModule=true;exports.ActionTypes=undefined;exports['default']=createStore;var _isPlainObject=__webpack_require__(306);var _isPlainObject2=_interopRequireDefault(_isPlainObject);var _symbolObservable=__webpack_require__(316);var _symbolObservable2=_interopRequireDefault(_symbolObservable);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{'default':obj};}/**
	 * These are private action types reserved by Redux.
	 * For any unknown actions, you must return the current state.
	 * If the current state is undefined, you must return the initial state.
	 * Do not reference these action types directly in your code.
	 */var ActionTypes=exports.ActionTypes={INIT:'@@redux/INIT'/**
	   * Creates a Redux store that holds the state tree.
	   * The only way to change the data in the store is to call `dispatch()` on it.
	   *
	   * There should only be a single store in your app. To specify how different
	   * parts of the state tree respond to actions, you may combine several reducers
	   * into a single reducer function by using `combineReducers`.
	   *
	   * @param {Function} reducer A function that returns the next state tree, given
	   * the current state tree and the action to handle.
	   *
	   * @param {any} [preloadedState] The initial state. You may optionally specify it
	   * to hydrate the state from the server in universal apps, or to restore a
	   * previously serialized user session.
	   * If you use `combineReducers` to produce the root reducer function, this must be
	   * an object with the same shape as `combineReducers` keys.
	   *
	   * @param {Function} [enhancer] The store enhancer. You may optionally specify it
	   * to enhance the store with third-party capabilities such as middleware,
	   * time travel, persistence, etc. The only store enhancer that ships with Redux
	   * is `applyMiddleware()`.
	   *
	   * @returns {Store} A Redux store that lets you read the state, dispatch actions
	   * and subscribe to changes.
	   */};function createStore(reducer,preloadedState,enhancer){var _ref2;if(typeof preloadedState==='function'&&typeof enhancer==='undefined'){enhancer=preloadedState;preloadedState=undefined;}if(typeof enhancer!=='undefined'){if(typeof enhancer!=='function'){throw new Error('Expected the enhancer to be a function.');}return enhancer(createStore)(reducer,preloadedState);}if(typeof reducer!=='function'){throw new Error('Expected the reducer to be a function.');}var currentReducer=reducer;var currentState=preloadedState;var currentListeners=[];var nextListeners=currentListeners;var isDispatching=false;function ensureCanMutateNextListeners(){if(nextListeners===currentListeners){nextListeners=currentListeners.slice();}}/**
	   * Reads the state tree managed by the store.
	   *
	   * @returns {any} The current state tree of your application.
	   */function getState(){return currentState;}/**
	   * Adds a change listener. It will be called any time an action is dispatched,
	   * and some part of the state tree may potentially have changed. You may then
	   * call `getState()` to read the current state tree inside the callback.
	   *
	   * You may call `dispatch()` from a change listener, with the following
	   * caveats:
	   *
	   * 1. The subscriptions are snapshotted just before every `dispatch()` call.
	   * If you subscribe or unsubscribe while the listeners are being invoked, this
	   * will not have any effect on the `dispatch()` that is currently in progress.
	   * However, the next `dispatch()` call, whether nested or not, will use a more
	   * recent snapshot of the subscription list.
	   *
	   * 2. The listener should not expect to see all state changes, as the state
	   * might have been updated multiple times during a nested `dispatch()` before
	   * the listener is called. It is, however, guaranteed that all subscribers
	   * registered before the `dispatch()` started will be called with the latest
	   * state by the time it exits.
	   *
	   * @param {Function} listener A callback to be invoked on every dispatch.
	   * @returns {Function} A function to remove this change listener.
	   */function subscribe(listener){if(typeof listener!=='function'){throw new Error('Expected listener to be a function.');}var isSubscribed=true;ensureCanMutateNextListeners();nextListeners.push(listener);return function unsubscribe(){if(!isSubscribed){return;}isSubscribed=false;ensureCanMutateNextListeners();var index=nextListeners.indexOf(listener);nextListeners.splice(index,1);};}/**
	   * Dispatches an action. It is the only way to trigger a state change.
	   *
	   * The `reducer` function, used to create the store, will be called with the
	   * current state tree and the given `action`. Its return value will
	   * be considered the **next** state of the tree, and the change listeners
	   * will be notified.
	   *
	   * The base implementation only supports plain object actions. If you want to
	   * dispatch a Promise, an Observable, a thunk, or something else, you need to
	   * wrap your store creating function into the corresponding middleware. For
	   * example, see the documentation for the `redux-thunk` package. Even the
	   * middleware will eventually dispatch plain object actions using this method.
	   *
	   * @param {Object} action A plain object representing “what changed”. It is
	   * a good idea to keep actions serializable so you can record and replay user
	   * sessions, or use the time travelling `redux-devtools`. An action must have
	   * a `type` property which may not be `undefined`. It is a good idea to use
	   * string constants for action types.
	   *
	   * @returns {Object} For convenience, the same action object you dispatched.
	   *
	   * Note that, if you use a custom middleware, it may wrap `dispatch()` to
	   * return something else (for example, a Promise you can await).
	   */function dispatch(action){if(!(0,_isPlainObject2['default'])(action)){throw new Error('Actions must be plain objects. '+'Use custom middleware for async actions.');}if(typeof action.type==='undefined'){throw new Error('Actions may not have an undefined "type" property. '+'Have you misspelled a constant?');}if(isDispatching){throw new Error('Reducers may not dispatch actions.');}try{isDispatching=true;currentState=currentReducer(currentState,action);}finally{isDispatching=false;}var listeners=currentListeners=nextListeners;for(var i=0;i<listeners.length;i++){var listener=listeners[i];listener();}return action;}/**
	   * Replaces the reducer currently used by the store to calculate the state.
	   *
	   * You might need this if your app implements code splitting and you want to
	   * load some of the reducers dynamically. You might also need this if you
	   * implement a hot reloading mechanism for Redux.
	   *
	   * @param {Function} nextReducer The reducer for the store to use instead.
	   * @returns {void}
	   */function replaceReducer(nextReducer){if(typeof nextReducer!=='function'){throw new Error('Expected the nextReducer to be a function.');}currentReducer=nextReducer;dispatch({type:ActionTypes.INIT});}/**
	   * Interoperability point for observable/reactive libraries.
	   * @returns {observable} A minimal observable of state changes.
	   * For more information, see the observable proposal:
	   * https://github.com/tc39/proposal-observable
	   */function observable(){var _ref;var outerSubscribe=subscribe;return _ref={/**
	       * The minimal observable subscription method.
	       * @param {Object} observer Any object that can be used as an observer.
	       * The observer object should have a `next` method.
	       * @returns {subscription} An object with an `unsubscribe` method that can
	       * be used to unsubscribe the observable from the store, and prevent further
	       * emission of values from the observable.
	       */subscribe:function subscribe(observer){if((typeof observer==='undefined'?'undefined':_typeof(observer))!=='object'){throw new TypeError('Expected the observer to be an object.');}function observeState(){if(observer.next){observer.next(getState());}}observeState();var unsubscribe=outerSubscribe(observeState);return{unsubscribe:unsubscribe};}},_ref[_symbolObservable2['default']]=function(){return this;},_ref;}// When a store is created, an "INIT" action is dispatched so that every
	// reducer returns their initial state. This effectively populates
	// the initial state tree.
	dispatch({type:ActionTypes.INIT});return _ref2={dispatch:dispatch,subscribe:subscribe,getState:getState,replaceReducer:replaceReducer},_ref2[_symbolObservable2['default']]=observable,_ref2;}

/***/ }),
/* 306 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';var baseGetTag=__webpack_require__(307),getPrototype=__webpack_require__(313),isObjectLike=__webpack_require__(315);/** `Object#toString` result references. */var objectTag='[object Object]';/** Used for built-in method references. */var funcProto=Function.prototype,objectProto=Object.prototype;/** Used to resolve the decompiled source of functions. */var funcToString=funcProto.toString;/** Used to check objects for own properties. */var hasOwnProperty=objectProto.hasOwnProperty;/** Used to infer the `Object` constructor. */var objectCtorString=funcToString.call(Object);/**
	 * Checks if `value` is a plain object, that is, an object created by the
	 * `Object` constructor or one with a `[[Prototype]]` of `null`.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.8.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 * }
	 *
	 * _.isPlainObject(new Foo);
	 * // => false
	 *
	 * _.isPlainObject([1, 2, 3]);
	 * // => false
	 *
	 * _.isPlainObject({ 'x': 0, 'y': 0 });
	 * // => true
	 *
	 * _.isPlainObject(Object.create(null));
	 * // => true
	 */function isPlainObject(value){if(!isObjectLike(value)||baseGetTag(value)!=objectTag){return false;}var proto=getPrototype(value);if(proto===null){return true;}var Ctor=hasOwnProperty.call(proto,'constructor')&&proto.constructor;return typeof Ctor=='function'&&Ctor instanceof Ctor&&funcToString.call(Ctor)==objectCtorString;}module.exports=isPlainObject;

/***/ }),
/* 307 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';var _Symbol=__webpack_require__(308),getRawTag=__webpack_require__(311),objectToString=__webpack_require__(312);/** `Object#toString` result references. */var nullTag='[object Null]',undefinedTag='[object Undefined]';/** Built-in value references. */var symToStringTag=_Symbol?_Symbol.toStringTag:undefined;/**
	 * The base implementation of `getTag` without fallbacks for buggy environments.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {string} Returns the `toStringTag`.
	 */function baseGetTag(value){if(value==null){return value===undefined?undefinedTag:nullTag;}return symToStringTag&&symToStringTag in Object(value)?getRawTag(value):objectToString(value);}module.exports=baseGetTag;

/***/ }),
/* 308 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';var root=__webpack_require__(309);/** Built-in value references. */var _Symbol=root.Symbol;module.exports=_Symbol;

/***/ }),
/* 309 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';var _typeof=typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"?function(obj){return typeof obj;}:function(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;};var freeGlobal=__webpack_require__(310);/** Detect free variable `self`. */var freeSelf=(typeof self==='undefined'?'undefined':_typeof(self))=='object'&&self&&self.Object===Object&&self;/** Used as a reference to the global object. */var root=freeGlobal||freeSelf||Function('return this')();module.exports=root;

/***/ }),
/* 310 */
/***/ (function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';var _typeof=typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"?function(obj){return typeof obj;}:function(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;};/** Detect free variable `global` from Node.js. */var freeGlobal=(typeof global==='undefined'?'undefined':_typeof(global))=='object'&&global&&global.Object===Object&&global;module.exports=freeGlobal;
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ }),
/* 311 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';var _Symbol=__webpack_require__(308);/** Used for built-in method references. */var objectProto=Object.prototype;/** Used to check objects for own properties. */var hasOwnProperty=objectProto.hasOwnProperty;/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */var nativeObjectToString=objectProto.toString;/** Built-in value references. */var symToStringTag=_Symbol?_Symbol.toStringTag:undefined;/**
	 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {string} Returns the raw `toStringTag`.
	 */function getRawTag(value){var isOwn=hasOwnProperty.call(value,symToStringTag),tag=value[symToStringTag];try{value[symToStringTag]=undefined;var unmasked=true;}catch(e){}var result=nativeObjectToString.call(value);if(unmasked){if(isOwn){value[symToStringTag]=tag;}else{delete value[symToStringTag];}}return result;}module.exports=getRawTag;

/***/ }),
/* 312 */
/***/ (function(module, exports) {

	"use strict";/** Used for built-in method references. */var objectProto=Object.prototype;/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */var nativeObjectToString=objectProto.toString;/**
	 * Converts `value` to a string using `Object.prototype.toString`.
	 *
	 * @private
	 * @param {*} value The value to convert.
	 * @returns {string} Returns the converted string.
	 */function objectToString(value){return nativeObjectToString.call(value);}module.exports=objectToString;

/***/ }),
/* 313 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';var overArg=__webpack_require__(314);/** Built-in value references. */var getPrototype=overArg(Object.getPrototypeOf,Object);module.exports=getPrototype;

/***/ }),
/* 314 */
/***/ (function(module, exports) {

	"use strict";/**
	 * Creates a unary function that invokes `func` with its argument transformed.
	 *
	 * @private
	 * @param {Function} func The function to wrap.
	 * @param {Function} transform The argument transform.
	 * @returns {Function} Returns the new function.
	 */function overArg(func,transform){return function(arg){return func(transform(arg));};}module.exports=overArg;

/***/ }),
/* 315 */
/***/ (function(module, exports) {

	'use strict';var _typeof=typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"?function(obj){return typeof obj;}:function(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;};/**
	 * Checks if `value` is object-like. A value is object-like if it's not `null`
	 * and has a `typeof` result of "object".
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	 * @example
	 *
	 * _.isObjectLike({});
	 * // => true
	 *
	 * _.isObjectLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isObjectLike(_.noop);
	 * // => false
	 *
	 * _.isObjectLike(null);
	 * // => false
	 */function isObjectLike(value){return value!=null&&(typeof value==='undefined'?'undefined':_typeof(value))=='object';}module.exports=isObjectLike;

/***/ }),
/* 316 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global, module) {'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _ponyfill=__webpack_require__(317);var _ponyfill2=_interopRequireDefault(_ponyfill);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{'default':obj};}var root;/* global window */if(typeof self!=='undefined'){root=self;}else if(typeof window!=='undefined'){root=window;}else if(typeof global!=='undefined'){root=global;}else if(true){root=module;}else{root=Function('return this')();}var result=(0,_ponyfill2['default'])(root);exports['default']=result;
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }()), __webpack_require__(2)(module)))

/***/ }),
/* 317 */
/***/ (function(module, exports) {

	'use strict';Object.defineProperty(exports,"__esModule",{value:true});exports['default']=symbolObservablePonyfill;function symbolObservablePonyfill(root){var result;var _Symbol=root.Symbol;if(typeof _Symbol==='function'){if(_Symbol.observable){result=_Symbol.observable;}else{result=_Symbol('observable');_Symbol.observable=result;}}else{result='@@observable';}return result;};

/***/ }),
/* 318 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';exports.__esModule=true;exports['default']=combineReducers;var _createStore=__webpack_require__(305);var _isPlainObject=__webpack_require__(306);var _isPlainObject2=_interopRequireDefault(_isPlainObject);var _warning=__webpack_require__(319);var _warning2=_interopRequireDefault(_warning);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{'default':obj};}function getUndefinedStateErrorMessage(key,action){var actionType=action&&action.type;var actionName=actionType&&'"'+actionType.toString()+'"'||'an action';return'Given action '+actionName+', reducer "'+key+'" returned undefined. '+'To ignore an action, you must explicitly return the previous state. '+'If you want this reducer to hold no value, you can return null instead of undefined.';}function getUnexpectedStateShapeWarningMessage(inputState,reducers,action,unexpectedKeyCache){var reducerKeys=Object.keys(reducers);var argumentName=action&&action.type===_createStore.ActionTypes.INIT?'preloadedState argument passed to createStore':'previous state received by the reducer';if(reducerKeys.length===0){return'Store does not have a valid reducer. Make sure the argument passed '+'to combineReducers is an object whose values are reducers.';}if(!(0,_isPlainObject2['default'])(inputState)){return'The '+argumentName+' has unexpected type of "'+{}.toString.call(inputState).match(/\s([a-z|A-Z]+)/)[1]+'". Expected argument to be an object with the following '+('keys: "'+reducerKeys.join('", "')+'"');}var unexpectedKeys=Object.keys(inputState).filter(function(key){return!reducers.hasOwnProperty(key)&&!unexpectedKeyCache[key];});unexpectedKeys.forEach(function(key){unexpectedKeyCache[key]=true;});if(unexpectedKeys.length>0){return'Unexpected '+(unexpectedKeys.length>1?'keys':'key')+' '+('"'+unexpectedKeys.join('", "')+'" found in '+argumentName+'. ')+'Expected to find one of the known reducer keys instead: '+('"'+reducerKeys.join('", "')+'". Unexpected keys will be ignored.');}}function assertReducerShape(reducers){Object.keys(reducers).forEach(function(key){var reducer=reducers[key];var initialState=reducer(undefined,{type:_createStore.ActionTypes.INIT});if(typeof initialState==='undefined'){throw new Error('Reducer "'+key+'" returned undefined during initialization. '+'If the state passed to the reducer is undefined, you must '+'explicitly return the initial state. The initial state may '+'not be undefined. If you don\'t want to set a value for this reducer, '+'you can use null instead of undefined.');}var type='@@redux/PROBE_UNKNOWN_ACTION_'+Math.random().toString(36).substring(7).split('').join('.');if(typeof reducer(undefined,{type:type})==='undefined'){throw new Error('Reducer "'+key+'" returned undefined when probed with a random type. '+('Don\'t try to handle '+_createStore.ActionTypes.INIT+' or other actions in "redux/*" ')+'namespace. They are considered private. Instead, you must return the '+'current state for any unknown actions, unless it is undefined, '+'in which case you must return the initial state, regardless of the '+'action type. The initial state may not be undefined, but can be null.');}});}/**
	 * Turns an object whose values are different reducer functions, into a single
	 * reducer function. It will call every child reducer, and gather their results
	 * into a single state object, whose keys correspond to the keys of the passed
	 * reducer functions.
	 *
	 * @param {Object} reducers An object whose values correspond to different
	 * reducer functions that need to be combined into one. One handy way to obtain
	 * it is to use ES6 `import * as reducers` syntax. The reducers may never return
	 * undefined for any action. Instead, they should return their initial state
	 * if the state passed to them was undefined, and the current state for any
	 * unrecognized action.
	 *
	 * @returns {Function} A reducer function that invokes every reducer inside the
	 * passed object, and builds a state object with the same shape.
	 */function combineReducers(reducers){var reducerKeys=Object.keys(reducers);var finalReducers={};for(var i=0;i<reducerKeys.length;i++){var key=reducerKeys[i];if(process.env.NODE_ENV!=='production'){if(typeof reducers[key]==='undefined'){(0,_warning2['default'])('No reducer provided for key "'+key+'"');}}if(typeof reducers[key]==='function'){finalReducers[key]=reducers[key];}}var finalReducerKeys=Object.keys(finalReducers);var unexpectedKeyCache=void 0;if(process.env.NODE_ENV!=='production'){unexpectedKeyCache={};}var shapeAssertionError=void 0;try{assertReducerShape(finalReducers);}catch(e){shapeAssertionError=e;}return function combination(){var state=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};var action=arguments[1];if(shapeAssertionError){throw shapeAssertionError;}if(process.env.NODE_ENV!=='production'){var warningMessage=getUnexpectedStateShapeWarningMessage(state,finalReducers,action,unexpectedKeyCache);if(warningMessage){(0,_warning2['default'])(warningMessage);}}var hasChanged=false;var nextState={};for(var _i=0;_i<finalReducerKeys.length;_i++){var _key=finalReducerKeys[_i];var reducer=finalReducers[_key];var previousStateForKey=state[_key];var nextStateForKey=reducer(previousStateForKey,action);if(typeof nextStateForKey==='undefined'){var errorMessage=getUndefinedStateErrorMessage(_key,action);throw new Error(errorMessage);}nextState[_key]=nextStateForKey;hasChanged=hasChanged||nextStateForKey!==previousStateForKey;}return hasChanged?nextState:state;};}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ }),
/* 319 */
/***/ (function(module, exports) {

	'use strict';exports.__esModule=true;exports['default']=warning;/**
	 * Prints a warning in the console if it exists.
	 *
	 * @param {String} message The warning message.
	 * @returns {void}
	 */function warning(message){/* eslint-disable no-console */if(typeof console!=='undefined'&&typeof console.error==='function'){console.error(message);}/* eslint-enable no-console */try{// This error was thrown as a convenience so that if you enable
	// "break on all exceptions" in your console,
	// it would pause the execution at this line.
	throw new Error(message);/* eslint-disable no-empty */}catch(e){}/* eslint-enable no-empty */}

/***/ }),
/* 320 */
/***/ (function(module, exports) {

	'use strict';var _typeof=typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"?function(obj){return typeof obj;}:function(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;};exports.__esModule=true;exports['default']=bindActionCreators;function bindActionCreator(actionCreator,dispatch){return function(){return dispatch(actionCreator.apply(undefined,arguments));};}/**
	 * Turns an object whose values are action creators, into an object with the
	 * same keys, but with every function wrapped into a `dispatch` call so they
	 * may be invoked directly. This is just a convenience method, as you can call
	 * `store.dispatch(MyActionCreators.doSomething())` yourself just fine.
	 *
	 * For convenience, you can also pass a single function as the first argument,
	 * and get a function in return.
	 *
	 * @param {Function|Object} actionCreators An object whose values are action
	 * creator functions. One handy way to obtain it is to use ES6 `import * as`
	 * syntax. You may also pass a single function.
	 *
	 * @param {Function} dispatch The `dispatch` function available on your Redux
	 * store.
	 *
	 * @returns {Function|Object} The object mimicking the original object, but with
	 * every action creator wrapped into the `dispatch` call. If you passed a
	 * function as `actionCreators`, the return value will also be a single
	 * function.
	 */function bindActionCreators(actionCreators,dispatch){if(typeof actionCreators==='function'){return bindActionCreator(actionCreators,dispatch);}if((typeof actionCreators==='undefined'?'undefined':_typeof(actionCreators))!=='object'||actionCreators===null){throw new Error('bindActionCreators expected an object or a function, instead received '+(actionCreators===null?'null':typeof actionCreators==='undefined'?'undefined':_typeof(actionCreators))+'. '+'Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');}var keys=Object.keys(actionCreators);var boundActionCreators={};for(var i=0;i<keys.length;i++){var key=keys[i];var actionCreator=actionCreators[key];if(typeof actionCreator==='function'){boundActionCreators[key]=bindActionCreator(actionCreator,dispatch);}}return boundActionCreators;}

/***/ }),
/* 321 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';exports.__esModule=true;var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};exports['default']=applyMiddleware;var _compose=__webpack_require__(322);var _compose2=_interopRequireDefault(_compose);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{'default':obj};}/**
	 * Creates a store enhancer that applies middleware to the dispatch method
	 * of the Redux store. This is handy for a variety of tasks, such as expressing
	 * asynchronous actions in a concise manner, or logging every action payload.
	 *
	 * See `redux-thunk` package as an example of the Redux middleware.
	 *
	 * Because middleware is potentially asynchronous, this should be the first
	 * store enhancer in the composition chain.
	 *
	 * Note that each middleware will be given the `dispatch` and `getState` functions
	 * as named arguments.
	 *
	 * @param {...Function} middlewares The middleware chain to be applied.
	 * @returns {Function} A store enhancer applying the middleware.
	 */function applyMiddleware(){for(var _len=arguments.length,middlewares=Array(_len),_key=0;_key<_len;_key++){middlewares[_key]=arguments[_key];}return function(createStore){return function(reducer,preloadedState,enhancer){var store=createStore(reducer,preloadedState,enhancer);var _dispatch=store.dispatch;var chain=[];var middlewareAPI={getState:store.getState,dispatch:function dispatch(action){return _dispatch(action);}};chain=middlewares.map(function(middleware){return middleware(middlewareAPI);});_dispatch=_compose2['default'].apply(undefined,chain)(store.dispatch);return _extends({},store,{dispatch:_dispatch});};};}

/***/ }),
/* 322 */
/***/ (function(module, exports) {

	"use strict";exports.__esModule=true;exports["default"]=compose;/**
	 * Composes single-argument functions from right to left. The rightmost
	 * function can take multiple arguments as it provides the signature for
	 * the resulting composite function.
	 *
	 * @param {...Function} funcs The functions to compose.
	 * @returns {Function} A function obtained by composing the argument functions
	 * from right to left. For example, compose(f, g, h) is identical to doing
	 * (...args) => f(g(h(...args))).
	 */function compose(){for(var _len=arguments.length,funcs=Array(_len),_key=0;_key<_len;_key++){funcs[_key]=arguments[_key];}if(funcs.length===0){return function(arg){return arg;};}if(funcs.length===1){return funcs[0];}return funcs.reduce(function(a,b){return function(){return a(b.apply(undefined,arguments));};});}

/***/ }),
/* 323 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _redux=__webpack_require__(304);var _pictures=__webpack_require__(324);var _pictures2=_interopRequireDefault(_pictures);var _filters=__webpack_require__(325);var _filters2=_interopRequireDefault(_filters);var _deals=__webpack_require__(326);var _deals2=_interopRequireDefault(_deals);var _statuses=__webpack_require__(327);var _statuses2=_interopRequireDefault(_statuses);var _menu=__webpack_require__(328);var _menu2=_interopRequireDefault(_menu);var _authors=__webpack_require__(329);var _authors2=_interopRequireDefault(_authors);var _userApplications=__webpack_require__(330);var _userApplications2=_interopRequireDefault(_userApplications);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}exports.default=(0,_redux.combineReducers)({pictures:_pictures2.default,filters:_filters2.default,deals:_deals2.default,statuses:_statuses2.default,menu:_menu2.default,authors:_authors2.default,userApplications:_userApplications2.default});

/***/ }),
/* 324 */
/***/ (function(module, exports) {

	'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};exports.default=pictureReducer;var initialState={pictures:[]};// Use the initialState as a default value
	function pictureReducer(){var state=arguments.length>0&&arguments[0]!==undefined?arguments[0]:initialState;var action=arguments[1];console.log('pictureReducer',action);// The reducer normally looks at the action type field to decide what happens
	switch(action.type){// Do something here based on the different types of actions
	case'pictures':{// We need to return a new state object
	return _extends({},state,{pictures:action.pictures,reloadActivePageComponent:false});}case'addPicture':{return _extends({},state,{pictures:state.pictures.map(function(picture){return picture.id===action.picture.id?_extends({},picture,action.picture,{file:picture.file}):picture;})});}default:// If this reducer doesn't recognize the action type, or doesn't
	// care about this specific action, return the existing state unchanged
	return state;}}

/***/ }),
/* 325 */
/***/ (function(module, exports) {

	'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};exports.default=filterReducer;var initialState={filter:{searchText:'',additionalFilter:{continent:'',region:'',city:''}}};// Use the initialState as a default value
	function filterReducer(){var state=arguments.length>0&&arguments[0]!==undefined?arguments[0]:initialState;var action=arguments[1];console.log('filterReducer',action);// The reducer normally looks at the action type field to decide what happens
	switch(action.type){// Do something here based on the different types of actions
	case'filter':{return _extends({},state,{filter:{searchText:action.filter}});}case'additionalFilter':{return _extends({},state,{filter:{additionalFilter:action.additionalFilter}});}default:// If this reducer doesn't recognize the action type, or doesn't
	// care about this specific action, return the existing state unchanged
	return state;}}

/***/ }),
/* 326 */
/***/ (function(module, exports) {

	'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};exports.default=dealsReducer;var initialState={deals:[]};// Use the initialState as a default value
	function dealsReducer(){var state=arguments.length>0&&arguments[0]!==undefined?arguments[0]:initialState;var action=arguments[1];console.log('dealsReducer',action);// The reducer normally looks at the action type field to decide what happens
	switch(action.type){// Do something here based on the different types of actions
	case'deals':{return _extends({},state,{deals:action.deals});}default:// If this reducer doesn't recognize the action type, or doesn't
	// care about this specific action, return the existing state unchanged
	return state;}}

/***/ }),
/* 327 */
/***/ (function(module, exports) {

	'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};exports.default=appReducer;var initialState={user:{id:0,kasutaja:null,Ametnik:null,is_kasutaja:false,is_admin:false,is_raama:false,logedIn:false},activePageComponent:'pictures',reloadActivePageComponent:false,isPictureShow:false,pictureId:null,menu:[{id:'kasutaja',parentid:0,kood:'kasutaja',name:'kasutaja',props:null},{id:'main',parentid:0,kood:'main',name:'main',props:null},{id:'document',parentid:0,kood:'document',name:'Documents',props:null,is_node:true},{id:'pictures',parentid:'document',kood:'Pictures',name:'Pictures',props:{type:"document",module:["main"]},is_node:false},{id:'TAOTLUS_LOGIN',parentid:'document',kood:'TAOTLUS_LOGIN',name:'New user applications',props:{type:"document",module:["main"],is_admin:true},is_node:false},{id:'DEALS',parentid:'document',kood:'DEALS',name:'Deals with pictures',props:{type:"document",module:["main"],is_admin:true},is_node:false}],continents:['','Europe','America','Asia','Australia','Russia'],cities:['','Tallinna','Tartu','Narva','Võru','Valga','Sillamäe','Viljandi'],regions:['','Ida Virumaa','Lääne Virumaa','Harjumaa','Lääne','Pärnu','Saare','Hiiumaa','Viljandi','Valga','Võru','Tartu','Põlva','Järva']};// Use the initialState as a default value
	function appReducer(){var state=arguments.length>0&&arguments[0]!==undefined?arguments[0]:initialState;var action=arguments[1];console.log('reducer',action);// The reducer normally looks at the action type field to decide what happens
	switch(action.type){case'user':{return _extends({},state,{user:action.user});}case'activePageComponent':{return _extends({},state,{activePageComponent:action.activePageComponent});}case'reloadActivePageComponent':{return _extends({},state,{reloadActivePageComponent:action.reloadActivePageComponent});}case'isPictureShow':{return _extends({},state,{isPictureShow:action.isPictureShow});}case'pictureId':{return _extends({},state,{pictureId:action.pictureId});}default:// If this reducer doesn't recognize the action type, or doesn't
	// care about this specific action, return the existing state unchanged
	return state;}}/*
	export default function getAuthors () {
	    console.log('getAuthors')
	    return dispatch => {
	        // диспатчим лоадер
	        /!*
	                    dispatch({
	                        type: authors,
	                        payload: true
	                    })

	        *!/
	        fetchData.fetchDataPost(`/main/authors/`).then((response) => {
	            // успешно получили данные
	            dispatch({
	                type: 'authors',
	                authors: response.data.data
	            });

	        });
	        /!*

	                    axios.get('/main/authors/')
	                        .then(res => {
	                            // успешно получили данные
	                            dispatch({
	                                type: 'authors',
	                                payload: result.data.data
	                            })
	                        })
	        *!/
	        /!*
	                        .cath(err => {
	                            // Ошибка...
	                            dispatch({
	                                type: GET_PROFILE_ERROR
	                                payload: true
	                            })
	                        })
	        *!/
	    }
	}
	*/

/***/ }),
/* 328 */
/***/ (function(module, exports) {

	'use strict';Object.defineProperty(exports,"__esModule",{value:true});exports.default=appReducer;var initialState={menu:[{id:'kasutaja',parentid:0,kood:'kasutaja',name:'kasutaja',props:null},{id:'main',parentid:0,kood:'main',name:'main',props:null},{id:'document',parentid:0,kood:'document',name:'Documents',props:null,is_node:true},{id:'module',parentid:0,kood:'module',name:'Modules',props:null,is_node:true},{id:'pictures',parentid:'document',kood:'Pictures',name:'Pictures',props:{type:"document",module:["main"]},is_node:false},{id:'TAOTLUS_LOGIN',parentid:'document',kood:'TAOTLUS_LOGIN',name:'New user applications',props:{type:"document",module:["main"],is_admin:true},is_node:false},{id:'DEALS',parentid:'document',kood:'DEALS',name:'Deals with pictures',props:{type:"document",module:["main"],is_admin:true},is_node:false},{id:'AUTHORS',parentid:'document',kood:'AUTHORS',name:'Authors',props:{type:"document",module:["main"],is_admin:true},is_node:false},{id:'RAAMA',parentid:'module',kood:'RAAMA',name:'Accounting',props:{type:"module",module:["raama"],is_admin:true},is_node:false}]};// Use the initialState as a default value
	function appReducer(){var state=arguments.length>0&&arguments[0]!==undefined?arguments[0]:initialState;var action=arguments[1];console.log('reducer',action);return state;}

/***/ }),
/* 329 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';Object.defineProperty(exports,"__esModule",{value:true});exports.default=authorsReducer;var fetchData=__webpack_require__(41);var initialState=[];// Use the initialState as a default value
	function authorsReducer(){var state=arguments.length>0&&arguments[0]!==undefined?arguments[0]:initialState;var action=arguments[1];console.log('authorsReducer',action);// The reducer normally looks at the action type field to decide what happens
	switch(action.type){// Do something here based on the different types of actions
	case'authors':{return action.library;}case'getAuthors':{var authors=getAuthors();console.log('getAuthors got authors',authors);return authors;}default:// If this reducer doesn't recognize the action type, or doesn't
	// care about this specific action, return the existing state unchanged
	return state;}function getAuthors(){console.log('getAuthors');/*
	        let user = this.props.store.getState().user;

	        let data = await fetchData.fetchDataPost(`/main/authors/`, user);
	        console.log('data', data)
	*/return[{id:0,code:'code1',name:'Name 1'}];}}

/***/ }),
/* 330 */
/***/ (function(module, exports) {

	'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};exports.default=menuReducer;var initialState={userApplications:[]};// Use the initialState as a default value
	function menuReducer(){var state=arguments.length>0&&arguments[0]!==undefined?arguments[0]:initialState;var action=arguments[1];console.log('menuReducer',action);// The reducer normally looks at the action type field to decide what happens
	switch(action.type){// Do something here based on the different types of actions
	case'userApplications':{return _extends({},state,{userApplications:action.userApplications,reloadActivePageComponent:false});}default:// If this reducer doesn't recognize the action type, or doesn't
	// care about this specific action, return the existing state unchanged
	return state;}}

/***/ }),
/* 331 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';var _typeof=typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"?function(obj){return typeof obj;}:function(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;};var compose=__webpack_require__(304).compose;exports.__esModule=true;exports.composeWithDevTools=typeof window!=='undefined'&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function(){if(arguments.length===0)return undefined;if(_typeof(arguments[0])==='object')return compose;return compose.apply(null,arguments);};exports.devToolsEnhancer=typeof window!=='undefined'&&window.__REDUX_DEVTOOLS_EXTENSION__?window.__REDUX_DEVTOOLS_EXTENSION__:function(){return function(noop){return noop;};};

/***/ }),
/* 332 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";exports.__esModule=true;var _exportNames={batch:true};Object.defineProperty(exports,"batch",{enumerable:true,get:function get(){return _reactBatchedUpdates.unstable_batchedUpdates;}});var _shim=__webpack_require__(333);var _withSelector=__webpack_require__(336);var _reactBatchedUpdates=__webpack_require__(339);var _batch=__webpack_require__(340);var _useSelector=__webpack_require__(341);var _connect=__webpack_require__(345);var _exports=__webpack_require__(370);Object.keys(_exports).forEach(function(key){if(key==="default"||key==="__esModule")return;if(Object.prototype.hasOwnProperty.call(_exportNames,key))return;if(key in exports&&exports[key]===_exports[key])return;Object.defineProperty(exports,key,{enumerable:true,get:function get(){return _exports[key];}});});// The primary entry point assumes we're working with standard ReactDOM/RN, but
	// older versions that do not include `useSyncExternalStore` (React 16.9 - 17.x).
	// Because of that, the useSyncExternalStore compat shim is needed.
	(0,_useSelector.initializeUseSelector)(_withSelector.useSyncExternalStoreWithSelector);(0,_connect.initializeConnect)(_shim.useSyncExternalStore);// Enable batched updates in our subscriptions for use
	// with standard React renderers (ReactDOM, React Native)
	(0,_batch.setBatch)(_reactBatchedUpdates.unstable_batchedUpdates);

/***/ }),
/* 333 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';if(process.env.NODE_ENV==='production'){module.exports=__webpack_require__(334);}else{module.exports=__webpack_require__(335);}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ }),
/* 334 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * @license React
	 * use-sync-external-store-shim.production.min.js
	 *
	 * Copyright (c) Facebook, Inc. and its affiliates.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */'use strict';var e=__webpack_require__(10);function h(a,b){return a===b&&(0!==a||1/a===1/b)||a!==a&&b!==b;}var k="function"===typeof Object.is?Object.is:h,l=e.useState,m=e.useEffect,n=e.useLayoutEffect,p=e.useDebugValue;function q(a,b){var d=b(),f=l({inst:{value:d,getSnapshot:b}}),c=f[0].inst,g=f[1];n(function(){c.value=d;c.getSnapshot=b;r(c)&&g({inst:c});},[a,d,b]);m(function(){r(c)&&g({inst:c});return a(function(){r(c)&&g({inst:c});});},[a]);p(d);return d;}function r(a){var b=a.getSnapshot;a=a.value;try{var d=b();return!k(a,d);}catch(f){return!0;}}function t(a,b){return b();}var u="undefined"===typeof window||"undefined"===typeof window.document||"undefined"===typeof window.document.createElement?t:q;exports.useSyncExternalStore=void 0!==e.useSyncExternalStore?e.useSyncExternalStore:u;

/***/ }),
/* 335 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * @license React
	 * use-sync-external-store-shim.development.js
	 *
	 * Copyright (c) Facebook, Inc. and its affiliates.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */'use strict';if(process.env.NODE_ENV!=="production"){(function(){'use strict';/* global __REACT_DEVTOOLS_GLOBAL_HOOK__ */if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__!=='undefined'&&typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart==='function'){__REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());}var React=__webpack_require__(10);var ReactSharedInternals=React.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;function error(format){{{for(var _len2=arguments.length,args=new Array(_len2>1?_len2-1:0),_key2=1;_key2<_len2;_key2++){args[_key2-1]=arguments[_key2];}printWarning('error',format,args);}}}function printWarning(level,format,args){// When changing this logic, you might want to also
	// update consoleWithStackDev.www.js as well.
	{var ReactDebugCurrentFrame=ReactSharedInternals.ReactDebugCurrentFrame;var stack=ReactDebugCurrentFrame.getStackAddendum();if(stack!==''){format+='%s';args=args.concat([stack]);}// eslint-disable-next-line react-internal/safe-string-coercion
	var argsWithFormat=args.map(function(item){return String(item);});// Careful: RN currently depends on this prefix
	argsWithFormat.unshift('Warning: '+format);// We intentionally don't use spread (or .apply) directly because it
	// breaks IE9: https://github.com/facebook/react/issues/13610
	// eslint-disable-next-line react-internal/no-production-logging
	Function.prototype.apply.call(console[level],console,argsWithFormat);}}/**
	 * inlined Object.is polyfill to avoid requiring consumers ship their own
	 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
	 */function is(x,y){return x===y&&(x!==0||1/x===1/y)||x!==x&&y!==y// eslint-disable-line no-self-compare
	;}var objectIs=typeof Object.is==='function'?Object.is:is;// dispatch for CommonJS interop named imports.
	var useState=React.useState,useEffect=React.useEffect,useLayoutEffect=React.useLayoutEffect,useDebugValue=React.useDebugValue;var didWarnOld18Alpha=false;var didWarnUncachedGetSnapshot=false;// Disclaimer: This shim breaks many of the rules of React, and only works
	// because of a very particular set of implementation details and assumptions
	// -- change any one of them and it will break. The most important assumption
	// is that updates are always synchronous, because concurrent rendering is
	// only available in versions of React that also have a built-in
	// useSyncExternalStore API. And we only use this shim when the built-in API
	// does not exist.
	//
	// Do not assume that the clever hacks used by this hook also work in general.
	// The point of this shim is to replace the need for hacks by other libraries.
	function useSyncExternalStore(subscribe,getSnapshot,// Note: The shim does not use getServerSnapshot, because pre-18 versions of
	// React do not expose a way to check if we're hydrating. So users of the shim
	// will need to track that themselves and return the correct value
	getServerSnapshot){{if(!didWarnOld18Alpha){if(React.startTransition!==undefined){didWarnOld18Alpha=true;error('You are using an outdated, pre-release alpha of React 18 that '+'does not support useSyncExternalStore. The '+'use-sync-external-store shim will not work correctly. Upgrade '+'to a newer pre-release.');}}}// Read the current snapshot from the store on every render. Again, this
	// breaks the rules of React, and only works here because of specific
	// implementation details, most importantly that updates are
	// always synchronous.
	var value=getSnapshot();{if(!didWarnUncachedGetSnapshot){var cachedValue=getSnapshot();if(!objectIs(value,cachedValue)){error('The result of getSnapshot should be cached to avoid an infinite loop');didWarnUncachedGetSnapshot=true;}}}// Because updates are synchronous, we don't queue them. Instead we force a
	// re-render whenever the subscribed state changes by updating an some
	// arbitrary useState hook. Then, during render, we call getSnapshot to read
	// the current value.
	//
	// Because we don't actually use the state returned by the useState hook, we
	// can save a bit of memory by storing other stuff in that slot.
	//
	// To implement the early bailout, we need to track some things on a mutable
	// object. Usually, we would put that in a useRef hook, but we can stash it in
	// our useState hook instead.
	//
	// To force a re-render, we call forceUpdate({inst}). That works because the
	// new object always fails an equality check.
	var _useState=useState({inst:{value:value,getSnapshot:getSnapshot}}),inst=_useState[0].inst,forceUpdate=_useState[1];// Track the latest getSnapshot function with a ref. This needs to be updated
	// in the layout phase so we can access it during the tearing check that
	// happens on subscribe.
	useLayoutEffect(function(){inst.value=value;inst.getSnapshot=getSnapshot;// Whenever getSnapshot or subscribe changes, we need to check in the
	// commit phase if there was an interleaved mutation. In concurrent mode
	// this can happen all the time, but even in synchronous mode, an earlier
	// effect may have mutated the store.
	if(checkIfSnapshotChanged(inst)){// Force a re-render.
	forceUpdate({inst:inst});}},[subscribe,value,getSnapshot]);useEffect(function(){// Check for changes right before subscribing. Subsequent changes will be
	// detected in the subscription handler.
	if(checkIfSnapshotChanged(inst)){// Force a re-render.
	forceUpdate({inst:inst});}var handleStoreChange=function handleStoreChange(){// TODO: Because there is no cross-renderer API for batching updates, it's
	// up to the consumer of this library to wrap their subscription event
	// with unstable_batchedUpdates. Should we try to detect when this isn't
	// the case and print a warning in development?
	// The store changed. Check if the snapshot changed since the last time we
	// read from the store.
	if(checkIfSnapshotChanged(inst)){// Force a re-render.
	forceUpdate({inst:inst});}};// Subscribe to the store and return a clean-up function.
	return subscribe(handleStoreChange);},[subscribe]);useDebugValue(value);return value;}function checkIfSnapshotChanged(inst){var latestGetSnapshot=inst.getSnapshot;var prevValue=inst.value;try{var nextValue=latestGetSnapshot();return!objectIs(prevValue,nextValue);}catch(error){return true;}}function useSyncExternalStore$1(subscribe,getSnapshot,getServerSnapshot){// Note: The shim does not use getServerSnapshot, because pre-18 versions of
	// React do not expose a way to check if we're hydrating. So users of the shim
	// will need to track that themselves and return the correct value
	// from `getSnapshot`.
	return getSnapshot();}var canUseDOM=!!(typeof window!=='undefined'&&typeof window.document!=='undefined'&&typeof window.document.createElement!=='undefined');var isServerEnvironment=!canUseDOM;var shim=isServerEnvironment?useSyncExternalStore$1:useSyncExternalStore;var useSyncExternalStore$2=React.useSyncExternalStore!==undefined?React.useSyncExternalStore:shim;exports.useSyncExternalStore=useSyncExternalStore$2;/* global __REACT_DEVTOOLS_GLOBAL_HOOK__ */if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__!=='undefined'&&typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop==='function'){__REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());}})();}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ }),
/* 336 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';if(process.env.NODE_ENV==='production'){module.exports=__webpack_require__(337);}else{module.exports=__webpack_require__(338);}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ }),
/* 337 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * @license React
	 * use-sync-external-store-shim/with-selector.production.min.js
	 *
	 * Copyright (c) Facebook, Inc. and its affiliates.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */'use strict';var h=__webpack_require__(10),n=__webpack_require__(333);function p(a,b){return a===b&&(0!==a||1/a===1/b)||a!==a&&b!==b;}var q="function"===typeof Object.is?Object.is:p,r=n.useSyncExternalStore,t=h.useRef,u=h.useEffect,v=h.useMemo,w=h.useDebugValue;exports.useSyncExternalStoreWithSelector=function(a,b,e,l,g){var c=t(null);if(null===c.current){var f={hasValue:!1,value:null};c.current=f;}else f=c.current;c=v(function(){function a(a){if(!c){c=!0;d=a;a=l(a);if(void 0!==g&&f.hasValue){var b=f.value;if(g(b,a))return k=b;}return k=a;}b=k;if(q(d,a))return b;var e=l(a);if(void 0!==g&&g(b,e))return b;d=a;return k=e;}var c=!1,d,k,m=void 0===e?null:e;return[function(){return a(b());},null===m?void 0:function(){return a(m());}];},[b,e,l,g]);var d=r(a,c[0],c[1]);u(function(){f.hasValue=!0;f.value=d;},[d]);w(d);return d;};

/***/ }),
/* 338 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * @license React
	 * use-sync-external-store-shim/with-selector.development.js
	 *
	 * Copyright (c) Facebook, Inc. and its affiliates.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */'use strict';if(process.env.NODE_ENV!=="production"){(function(){'use strict';/* global __REACT_DEVTOOLS_GLOBAL_HOOK__ */if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__!=='undefined'&&typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart==='function'){__REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());}var React=__webpack_require__(10);var shim=__webpack_require__(333);/**
	 * inlined Object.is polyfill to avoid requiring consumers ship their own
	 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
	 */function is(x,y){return x===y&&(x!==0||1/x===1/y)||x!==x&&y!==y// eslint-disable-line no-self-compare
	;}var objectIs=typeof Object.is==='function'?Object.is:is;var useSyncExternalStore=shim.useSyncExternalStore;// for CommonJS interop.
	var useRef=React.useRef,useEffect=React.useEffect,useMemo=React.useMemo,useDebugValue=React.useDebugValue;// Same as useSyncExternalStore, but supports selector and isEqual arguments.
	function useSyncExternalStoreWithSelector(subscribe,getSnapshot,getServerSnapshot,selector,isEqual){// Use this to track the rendered snapshot.
	var instRef=useRef(null);var inst;if(instRef.current===null){inst={hasValue:false,value:null};instRef.current=inst;}else{inst=instRef.current;}var _useMemo=useMemo(function(){// Track the memoized state using closure variables that are local to this
	// memoized instance of a getSnapshot function. Intentionally not using a
	// useRef hook, because that state would be shared across all concurrent
	// copies of the hook/component.
	var hasMemo=false;var memoizedSnapshot;var memoizedSelection;var memoizedSelector=function memoizedSelector(nextSnapshot){if(!hasMemo){// The first time the hook is called, there is no memoized result.
	hasMemo=true;memoizedSnapshot=nextSnapshot;var _nextSelection=selector(nextSnapshot);if(isEqual!==undefined){// Even if the selector has changed, the currently rendered selection
	// may be equal to the new selection. We should attempt to reuse the
	// current value if possible, to preserve downstream memoizations.
	if(inst.hasValue){var currentSelection=inst.value;if(isEqual(currentSelection,_nextSelection)){memoizedSelection=currentSelection;return currentSelection;}}}memoizedSelection=_nextSelection;return _nextSelection;}// We may be able to reuse the previous invocation's result.
	// We may be able to reuse the previous invocation's result.
	var prevSnapshot=memoizedSnapshot;var prevSelection=memoizedSelection;if(objectIs(prevSnapshot,nextSnapshot)){// The snapshot is the same as last time. Reuse the previous selection.
	return prevSelection;}// The snapshot has changed, so we need to compute a new selection.
	// The snapshot has changed, so we need to compute a new selection.
	var nextSelection=selector(nextSnapshot);// If a custom isEqual function is provided, use that to check if the data
	// has changed. If it hasn't, return the previous selection. That signals
	// to React that the selections are conceptually equal, and we can bail
	// out of rendering.
	// If a custom isEqual function is provided, use that to check if the data
	// has changed. If it hasn't, return the previous selection. That signals
	// to React that the selections are conceptually equal, and we can bail
	// out of rendering.
	if(isEqual!==undefined&&isEqual(prevSelection,nextSelection)){return prevSelection;}memoizedSnapshot=nextSnapshot;memoizedSelection=nextSelection;return nextSelection;};// Assigning this to a constant so that Flow knows it can't change.
	// Assigning this to a constant so that Flow knows it can't change.
	var maybeGetServerSnapshot=getServerSnapshot===undefined?null:getServerSnapshot;var getSnapshotWithSelector=function getSnapshotWithSelector(){return memoizedSelector(getSnapshot());};var getServerSnapshotWithSelector=maybeGetServerSnapshot===null?undefined:function(){return memoizedSelector(maybeGetServerSnapshot());};return[getSnapshotWithSelector,getServerSnapshotWithSelector];},[getSnapshot,getServerSnapshot,selector,isEqual]),getSelection=_useMemo[0],getServerSelection=_useMemo[1];var value=useSyncExternalStore(subscribe,getSelection,getServerSelection);useEffect(function(){inst.hasValue=true;inst.value=value;},[value]);useDebugValue(value);return value;}exports.useSyncExternalStoreWithSelector=useSyncExternalStoreWithSelector;/* global __REACT_DEVTOOLS_GLOBAL_HOOK__ */if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__!=='undefined'&&typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop==='function'){__REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());}})();}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ }),
/* 339 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";exports.__esModule=true;Object.defineProperty(exports,"unstable_batchedUpdates",{enumerable:true,get:function get(){return _reactDom.unstable_batchedUpdates;}});var _reactDom=__webpack_require__(4);

/***/ }),
/* 340 */
/***/ (function(module, exports) {

	"use strict";exports.__esModule=true;exports.getBatch=exports.setBatch=void 0;// Default to a dummy "batch" implementation that just runs the callback
	function defaultNoopBatch(callback){callback();}var batch=defaultNoopBatch;// Allow injecting another batching function later
	var setBatch=function setBatch(newBatch){return batch=newBatch;};// Supply a getter just to skip dealing with ESM bindings
	exports.setBatch=setBatch;var getBatch=function getBatch(){return batch;};exports.getBatch=getBatch;

/***/ }),
/* 341 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {"use strict";exports.__esModule=true;exports.createSelectorHook=createSelectorHook;exports.useSelector=exports.initializeUseSelector=void 0;var _react=__webpack_require__(10);var _useReduxContext=__webpack_require__(342);var _Context=__webpack_require__(343);var _useSyncExternalStore=__webpack_require__(344);var useSyncExternalStoreWithSelector=_useSyncExternalStore.notInitialized;var initializeUseSelector=function initializeUseSelector(fn){useSyncExternalStoreWithSelector=fn;};exports.initializeUseSelector=initializeUseSelector;var refEquality=function refEquality(a,b){return a===b;};/**
	 * Hook factory, which creates a `useSelector` hook bound to a given context.
	 *
	 * @param {React.Context} [context=ReactReduxContext] Context passed to your `<Provider>`.
	 * @returns {Function} A `useSelector` hook bound to the specified context.
	 */function createSelectorHook(){var context=arguments.length>0&&arguments[0]!==undefined?arguments[0]:_Context.ReactReduxContext;var useReduxContext=context===_Context.ReactReduxContext?_useReduxContext.useReduxContext:function(){return(0,_react.useContext)(context);};return function useSelector(selector){var equalityFn=arguments.length>1&&arguments[1]!==undefined?arguments[1]:refEquality;if(process.env.NODE_ENV!=='production'){if(!selector){throw new Error("You must pass a selector to useSelector");}if(typeof selector!=='function'){throw new Error("You must pass a function as a selector to useSelector");}if(typeof equalityFn!=='function'){throw new Error("You must pass a function as an equality function to useSelector");}}var _useReduxContext2=useReduxContext(),store=_useReduxContext2.store,subscription=_useReduxContext2.subscription,getServerState=_useReduxContext2.getServerState;var selectedState=useSyncExternalStoreWithSelector(subscription.addNestedSub,store.getState,getServerState||store.getState,selector,equalityFn);(0,_react.useDebugValue)(selectedState);return selectedState;};}/**
	 * A hook to access the redux store's state. This hook takes a selector function
	 * as an argument. The selector is called with the store state.
	 *
	 * This hook takes an optional equality comparison function as the second parameter
	 * that allows you to customize the way the selected state is compared to determine
	 * whether the component needs to be re-rendered.
	 *
	 * @param {Function} selector the selector function
	 * @param {Function=} equalityFn the function that will be used to determine equality
	 *
	 * @returns {any} the selected state
	 *
	 * @example
	 *
	 * import React from 'react'
	 * import { useSelector } from 'react-redux'
	 *
	 * export const CounterComponent = () => {
	 *   const counter = useSelector(state => state.counter)
	 *   return <div>{counter}</div>
	 * }
	 */var useSelector=/*#__PURE__*/createSelectorHook();exports.useSelector=useSelector;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ }),
/* 342 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {"use strict";exports.__esModule=true;exports.useReduxContext=useReduxContext;var _react=__webpack_require__(10);var _Context=__webpack_require__(343);/**
	 * A hook to access the value of the `ReactReduxContext`. This is a low-level
	 * hook that you should usually not need to call directly.
	 *
	 * @returns {any} the value of the `ReactReduxContext`
	 *
	 * @example
	 *
	 * import React from 'react'
	 * import { useReduxContext } from 'react-redux'
	 *
	 * export const CounterComponent = () => {
	 *   const { store } = useReduxContext()
	 *   return <div>{store.getState()}</div>
	 * }
	 */function useReduxContext(){var contextValue=(0,_react.useContext)(_Context.ReactReduxContext);if(process.env.NODE_ENV!=='production'&&!contextValue){throw new Error('could not find react-redux context value; please ensure the component is wrapped in a <Provider>');}return contextValue;}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ }),
/* 343 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {"use strict";exports.__esModule=true;exports.default=exports.ReactReduxContext=void 0;var _react=__webpack_require__(10);var ReactReduxContext=/*#__PURE__*/(0,_react.createContext)(null);exports.ReactReduxContext=ReactReduxContext;if(process.env.NODE_ENV!=='production'){ReactReduxContext.displayName='ReactRedux';}var _default=ReactReduxContext;exports.default=_default;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ }),
/* 344 */
/***/ (function(module, exports) {

	"use strict";exports.__esModule=true;exports.notInitialized=void 0;var notInitialized=function notInitialized(){throw new Error('uSES not initialized!');};exports.notInitialized=notInitialized;

/***/ }),
/* 345 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {"use strict";var _slicedToArray=function(){function sliceIterator(arr,i){var _arr=[];var _n=true;var _d=false;var _e=undefined;try{for(var _i=arr[Symbol.iterator](),_s;!(_n=(_s=_i.next()).done);_n=true){_arr.push(_s.value);if(i&&_arr.length===i)break;}}catch(err){_d=true;_e=err;}finally{try{if(!_n&&_i["return"])_i["return"]();}finally{if(_d)throw _e;}}return _arr;}return function(arr,i){if(Array.isArray(arr)){return arr;}else if(Symbol.iterator in Object(arr)){return sliceIterator(arr,i);}else{throw new TypeError("Invalid attempt to destructure non-iterable instance");}};}();var _typeof=typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"?function(obj){return typeof obj;}:function(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;};function _toConsumableArray(arr){if(Array.isArray(arr)){for(var i=0,arr2=Array(arr.length);i<arr.length;i++){arr2[i]=arr[i];}return arr2;}else{return Array.from(arr);}}var _interopRequireDefault=__webpack_require__(346);exports.__esModule=true;exports.default=exports.initializeConnect=void 0;var _extends2=_interopRequireDefault(__webpack_require__(347));var _objectWithoutPropertiesLoose2=_interopRequireDefault(__webpack_require__(348));var _hoistNonReactStatics=_interopRequireDefault(__webpack_require__(349));var _react=_interopRequireWildcard(__webpack_require__(10));var _reactIs=__webpack_require__(353);var _selectorFactory=_interopRequireDefault(__webpack_require__(356));var _mapDispatchToProps=__webpack_require__(359);var _mapStateToProps=__webpack_require__(365);var _mergeProps=__webpack_require__(366);var _Subscription=__webpack_require__(367);var _useIsomorphicLayoutEffect=__webpack_require__(368);var _shallowEqual=_interopRequireDefault(__webpack_require__(369));var _warning=_interopRequireDefault(__webpack_require__(358));var _Context=__webpack_require__(343);var _useSyncExternalStore=__webpack_require__(344);var _excluded=["reactReduxForwardedRef"];function _getRequireWildcardCache(nodeInterop){if(typeof WeakMap!=="function")return null;var cacheBabelInterop=new WeakMap();var cacheNodeInterop=new WeakMap();return(_getRequireWildcardCache=function _getRequireWildcardCache(nodeInterop){return nodeInterop?cacheNodeInterop:cacheBabelInterop;})(nodeInterop);}function _interopRequireWildcard(obj,nodeInterop){if(!nodeInterop&&obj&&obj.__esModule){return obj;}if(obj===null||(typeof obj==="undefined"?"undefined":_typeof(obj))!=="object"&&typeof obj!=="function"){return{default:obj};}var cache=_getRequireWildcardCache(nodeInterop);if(cache&&cache.has(obj)){return cache.get(obj);}var newObj={};var hasPropertyDescriptor=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var key in obj){if(key!=="default"&&Object.prototype.hasOwnProperty.call(obj,key)){var desc=hasPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):null;if(desc&&(desc.get||desc.set)){Object.defineProperty(newObj,key,desc);}else{newObj[key]=obj[key];}}}newObj.default=obj;if(cache){cache.set(obj,newObj);}return newObj;}var useSyncExternalStore=_useSyncExternalStore.notInitialized;var initializeConnect=function initializeConnect(fn){useSyncExternalStore=fn;};// Define some constant arrays just to avoid re-creating these
	exports.initializeConnect=initializeConnect;var EMPTY_ARRAY=[null,0];var NO_SUBSCRIPTION_ARRAY=[null,null];// Attempts to stringify whatever not-really-a-component value we were given
	// for logging in an error message
	var stringifyComponent=function stringifyComponent(Comp){try{return JSON.stringify(Comp);}catch(err){return String(Comp);}};// This is "just" a `useLayoutEffect`, but with two modifications:
	// - we need to fall back to `useEffect` in SSR to avoid annoying warnings
	// - we extract this to a separate function to avoid closing over values
	//   and causing memory leaks
	function useIsomorphicLayoutEffectWithArgs(effectFunc,effectArgs,dependencies){(0,_useIsomorphicLayoutEffect.useIsomorphicLayoutEffect)(function(){return effectFunc.apply(undefined,_toConsumableArray(effectArgs));},dependencies);}// Effect callback, extracted: assign the latest props values to refs for later usage
	function captureWrapperProps(lastWrapperProps,lastChildProps,renderIsScheduled,wrapperProps,// actualChildProps: unknown,
	childPropsFromStoreUpdate,notifyNestedSubs){// We want to capture the wrapper props and child props we used for later comparisons
	lastWrapperProps.current=wrapperProps;renderIsScheduled.current=false;// If the render was from a store update, clear out that reference and cascade the subscriber update
	if(childPropsFromStoreUpdate.current){childPropsFromStoreUpdate.current=null;notifyNestedSubs();}}// Effect callback, extracted: subscribe to the Redux store or nearest connected ancestor,
	// check for updates after dispatched actions, and trigger re-renders.
	function subscribeUpdates(shouldHandleStateChanges,store,subscription,childPropsSelector,lastWrapperProps,lastChildProps,renderIsScheduled,isMounted,childPropsFromStoreUpdate,notifyNestedSubs,// forceComponentUpdateDispatch: React.Dispatch<any>,
	additionalSubscribeListener){// If we're not subscribed to the store, nothing to do here
	if(!shouldHandleStateChanges)return function(){};// Capture values for checking if and when this component unmounts
	var didUnsubscribe=false;var lastThrownError=null;// We'll run this callback every time a store subscription update propagates to this component
	var checkForUpdates=function checkForUpdates(){if(didUnsubscribe||!isMounted.current){// Don't run stale listeners.
	// Redux doesn't guarantee unsubscriptions happen until next dispatch.
	return;}// TODO We're currently calling getState ourselves here, rather than letting `uSES` do it
	var latestStoreState=store.getState();var newChildProps=void 0,error=void 0;try{// Actually run the selector with the most recent store state and wrapper props
	// to determine what the child props should be
	newChildProps=childPropsSelector(latestStoreState,lastWrapperProps.current);}catch(e){error=e;lastThrownError=e;}if(!error){lastThrownError=null;}// If the child props haven't changed, nothing to do here - cascade the subscription update
	if(newChildProps===lastChildProps.current){if(!renderIsScheduled.current){notifyNestedSubs();}}else{// Save references to the new child props.  Note that we track the "child props from store update"
	// as a ref instead of a useState/useReducer because we need a way to determine if that value has
	// been processed.  If this went into useState/useReducer, we couldn't clear out the value without
	// forcing another re-render, which we don't want.
	lastChildProps.current=newChildProps;childPropsFromStoreUpdate.current=newChildProps;renderIsScheduled.current=true;// TODO This is hacky and not how `uSES` is meant to be used
	// Trigger the React `useSyncExternalStore` subscriber
	additionalSubscribeListener();}};// Actually subscribe to the nearest connected ancestor (or store)
	subscription.onStateChange=checkForUpdates;subscription.trySubscribe();// Pull data from the store after first render in case the store has
	// changed since we began.
	checkForUpdates();var unsubscribeWrapper=function unsubscribeWrapper(){didUnsubscribe=true;subscription.tryUnsubscribe();subscription.onStateChange=null;if(lastThrownError){// It's possible that we caught an error due to a bad mapState function, but the
	// parent re-rendered without this component and we're about to unmount.
	// This shouldn't happen as long as we do top-down subscriptions correctly, but
	// if we ever do those wrong, this throw will surface the error in our tests.
	// In that case, throw the error from here so it doesn't get lost.
	throw lastThrownError;}};return unsubscribeWrapper;}// Reducer initial state creation for our update reducer
	var initStateUpdates=function initStateUpdates(){return EMPTY_ARRAY;};function strictEqual(a,b){return a===b;}/**
	 * Infers the type of props that a connector will inject into a component.
	 */var hasWarnedAboutDeprecatedPureOption=false;/**
	 * Connects a React component to a Redux store.
	 *
	 * - Without arguments, just wraps the component, without changing the behavior / props
	 *
	 * - If 2 params are passed (3rd param, mergeProps, is skipped), default behavior
	 * is to override ownProps (as stated in the docs), so what remains is everything that's
	 * not a state or dispatch prop
	 *
	 * - When 3rd param is passed, we don't know if ownProps propagate and whether they
	 * should be valid component props, because it depends on mergeProps implementation.
	 * As such, it is the user's responsibility to extend ownProps interface from state or
	 * dispatch props or both when applicable
	 *
	 * @param mapStateToProps A function that extracts values from state
	 * @param mapDispatchToProps Setup for dispatching actions
	 * @param mergeProps Optional callback to merge state and dispatch props together
	 * @param options Options for configuring the connection
	 *
	 */function connect(mapStateToProps,mapDispatchToProps,mergeProps){var _ref=arguments.length>3&&arguments[3]!==undefined?arguments[3]:{},pure=_ref.pure,_ref$areStatesEqual=_ref.areStatesEqual,areStatesEqual=_ref$areStatesEqual===undefined?strictEqual:_ref$areStatesEqual,_ref$areOwnPropsEqual=_ref.areOwnPropsEqual,areOwnPropsEqual=_ref$areOwnPropsEqual===undefined?_shallowEqual.default:_ref$areOwnPropsEqual,_ref$areStatePropsEqu=_ref.areStatePropsEqual,areStatePropsEqual=_ref$areStatePropsEqu===undefined?_shallowEqual.default:_ref$areStatePropsEqu,_ref$areMergedPropsEq=_ref.areMergedPropsEqual,areMergedPropsEqual=_ref$areMergedPropsEq===undefined?_shallowEqual.default:_ref$areMergedPropsEq,_ref$forwardRef=_ref.forwardRef,forwardRef=_ref$forwardRef===undefined?false:_ref$forwardRef,_ref$context=_ref.context,context=_ref$context===undefined?_Context.ReactReduxContext:_ref$context;if(process.env.NODE_ENV!=='production'){if(pure!==undefined&&!hasWarnedAboutDeprecatedPureOption){hasWarnedAboutDeprecatedPureOption=true;(0,_warning.default)('The `pure` option has been removed. `connect` is now always a "pure/memoized" component');}}var Context=context;var initMapStateToProps=(0,_mapStateToProps.mapStateToPropsFactory)(mapStateToProps);var initMapDispatchToProps=(0,_mapDispatchToProps.mapDispatchToPropsFactory)(mapDispatchToProps);var initMergeProps=(0,_mergeProps.mergePropsFactory)(mergeProps);var shouldHandleStateChanges=Boolean(mapStateToProps);var wrapWithConnect=function wrapWithConnect(WrappedComponent){if(process.env.NODE_ENV!=='production'&&!(0,_reactIs.isValidElementType)(WrappedComponent)){throw new Error("You must pass a component to the function returned by connect. Instead received "+stringifyComponent(WrappedComponent));}var wrappedComponentName=WrappedComponent.displayName||WrappedComponent.name||'Component';var displayName="Connect("+wrappedComponentName+")";var selectorFactoryOptions={shouldHandleStateChanges:shouldHandleStateChanges,displayName:displayName,wrappedComponentName:wrappedComponentName,WrappedComponent:WrappedComponent,// @ts-ignore
	initMapStateToProps:initMapStateToProps,// @ts-ignore
	initMapDispatchToProps:initMapDispatchToProps,initMergeProps:initMergeProps,areStatesEqual:areStatesEqual,areStatePropsEqual:areStatePropsEqual,areOwnPropsEqual:areOwnPropsEqual,areMergedPropsEqual:areMergedPropsEqual};function ConnectFunction(props){var _ref2=(0,_react.useMemo)(function(){// Distinguish between actual "data" props that were passed to the wrapper component,
	// and values needed to control behavior (forwarded refs, alternate context instances).
	// To maintain the wrapperProps object reference, memoize this destructuring.
	var reactReduxForwardedRef=props.reactReduxForwardedRef,wrapperProps=(0,_objectWithoutPropertiesLoose2.default)(props,_excluded);return[props.context,reactReduxForwardedRef,wrapperProps];},[props]),_ref3=_slicedToArray(_ref2,3),propsContext=_ref3[0],reactReduxForwardedRef=_ref3[1],wrapperProps=_ref3[2];var ContextToUse=(0,_react.useMemo)(function(){// Users may optionally pass in a custom context instance to use instead of our ReactReduxContext.
	// Memoize the check that determines which context instance we should use.
	return propsContext&&propsContext.Consumer&&// @ts-ignore
	(0,_reactIs.isContextConsumer)(/*#__PURE__*/_react.default.createElement(propsContext.Consumer,null))?propsContext:Context;},[propsContext,Context]);// Retrieve the store and ancestor subscription via context, if available
	var contextValue=(0,_react.useContext)(ContextToUse);// The store _must_ exist as either a prop or in context.
	// We'll check to see if it _looks_ like a Redux store first.
	// This allows us to pass through a `store` prop that is just a plain value.
	var didStoreComeFromProps=Boolean(props.store)&&Boolean(props.store.getState)&&Boolean(props.store.dispatch);var didStoreComeFromContext=Boolean(contextValue)&&Boolean(contextValue.store);if(process.env.NODE_ENV!=='production'&&!didStoreComeFromProps&&!didStoreComeFromContext){throw new Error("Could not find \"store\" in the context of "+("\""+displayName+"\". Either wrap the root component in a <Provider>, ")+"or pass a custom React context provider to <Provider> and the corresponding "+("React context consumer to "+displayName+" in connect options."));}// Based on the previous check, one of these must be true
	var store=didStoreComeFromProps?props.store:contextValue.store;var getServerState=didStoreComeFromContext?contextValue.getServerState:store.getState;var childPropsSelector=(0,_react.useMemo)(function(){// The child props selector needs the store reference as an input.
	// Re-create this selector whenever the store changes.
	return(0,_selectorFactory.default)(store.dispatch,selectorFactoryOptions);},[store]);var _ref4=(0,_react.useMemo)(function(){if(!shouldHandleStateChanges)return NO_SUBSCRIPTION_ARRAY;// This Subscription's source should match where store came from: props vs. context. A component
	// connected to the store via props shouldn't use subscription from context, or vice versa.
	var subscription=(0,_Subscription.createSubscription)(store,didStoreComeFromProps?undefined:contextValue.subscription);// `notifyNestedSubs` is duplicated to handle the case where the component is unmounted in
	// the middle of the notification loop, where `subscription` will then be null. This can
	// probably be avoided if Subscription's listeners logic is changed to not call listeners
	// that have been unsubscribed in the  middle of the notification loop.
	var notifyNestedSubs=subscription.notifyNestedSubs.bind(subscription);return[subscription,notifyNestedSubs];},[store,didStoreComeFromProps,contextValue]),_ref5=_slicedToArray(_ref4,2),subscription=_ref5[0],notifyNestedSubs=_ref5[1];// Determine what {store, subscription} value should be put into nested context, if necessary,
	// and memoize that value to avoid unnecessary context updates.
	var overriddenContextValue=(0,_react.useMemo)(function(){if(didStoreComeFromProps){// This component is directly subscribed to a store from props.
	// We don't want descendants reading from this store - pass down whatever
	// the existing context value is from the nearest connected ancestor.
	return contextValue;}// Otherwise, put this component's subscription instance into context, so that
	// connected descendants won't update until after this component is done
	return(0,_extends2.default)({},contextValue,{subscription:subscription});},[didStoreComeFromProps,contextValue,subscription]);// Set up refs to coordinate values between the subscription effect and the render logic
	var lastChildProps=(0,_react.useRef)();var lastWrapperProps=(0,_react.useRef)(wrapperProps);var childPropsFromStoreUpdate=(0,_react.useRef)();var renderIsScheduled=(0,_react.useRef)(false);var isProcessingDispatch=(0,_react.useRef)(false);var isMounted=(0,_react.useRef)(false);var latestSubscriptionCallbackError=(0,_react.useRef)();(0,_useIsomorphicLayoutEffect.useIsomorphicLayoutEffect)(function(){isMounted.current=true;return function(){isMounted.current=false;};},[]);var actualChildPropsSelector=(0,_react.useMemo)(function(){var selector=function selector(){// Tricky logic here:
	// - This render may have been triggered by a Redux store update that produced new child props
	// - However, we may have gotten new wrapper props after that
	// If we have new child props, and the same wrapper props, we know we should use the new child props as-is.
	// But, if we have new wrapper props, those might change the child props, so we have to recalculate things.
	// So, we'll use the child props from store update only if the wrapper props are the same as last time.
	if(childPropsFromStoreUpdate.current&&wrapperProps===lastWrapperProps.current){return childPropsFromStoreUpdate.current;}// TODO We're reading the store directly in render() here. Bad idea?
	// This will likely cause Bad Things (TM) to happen in Concurrent Mode.
	// Note that we do this because on renders _not_ caused by store updates, we need the latest store state
	// to determine what the child props should be.
	return childPropsSelector(store.getState(),wrapperProps);};return selector;},[store,wrapperProps]);// We need this to execute synchronously every time we re-render. However, React warns
	// about useLayoutEffect in SSR, so we try to detect environment and fall back to
	// just useEffect instead to avoid the warning, since neither will run anyway.
	var subscribeForReact=(0,_react.useMemo)(function(){var subscribe=function subscribe(reactListener){if(!subscription){return function(){};}return subscribeUpdates(shouldHandleStateChanges,store,subscription,// @ts-ignore
	childPropsSelector,lastWrapperProps,lastChildProps,renderIsScheduled,isMounted,childPropsFromStoreUpdate,notifyNestedSubs,reactListener);};return subscribe;},[subscription]);useIsomorphicLayoutEffectWithArgs(captureWrapperProps,[lastWrapperProps,lastChildProps,renderIsScheduled,wrapperProps,childPropsFromStoreUpdate,notifyNestedSubs]);var actualChildProps=void 0;try{actualChildProps=useSyncExternalStore(// TODO We're passing through a big wrapper that does a bunch of extra side effects besides subscribing
	subscribeForReact,// TODO This is incredibly hacky. We've already processed the store update and calculated new child props,
	// TODO and we're just passing that through so it triggers a re-render for us rather than relying on `uSES`.
	actualChildPropsSelector,getServerState?function(){return childPropsSelector(getServerState(),wrapperProps);}:actualChildPropsSelector);}catch(err){if(latestSubscriptionCallbackError.current){;err.message+="\nThe error may be correlated with this previous error:\n"+latestSubscriptionCallbackError.current.stack+"\n\n";}throw err;}(0,_useIsomorphicLayoutEffect.useIsomorphicLayoutEffect)(function(){latestSubscriptionCallbackError.current=undefined;childPropsFromStoreUpdate.current=undefined;lastChildProps.current=actualChildProps;});// Now that all that's done, we can finally try to actually render the child component.
	// We memoize the elements for the rendered child component as an optimization.
	var renderedWrappedComponent=(0,_react.useMemo)(function(){return(/*#__PURE__*/// @ts-ignore
	_react.default.createElement(WrappedComponent,(0,_extends2.default)({},actualChildProps,{ref:reactReduxForwardedRef})));},[reactReduxForwardedRef,WrappedComponent,actualChildProps]);// If React sees the exact same element reference as last time, it bails out of re-rendering
	// that child, same as if it was wrapped in React.memo() or returned false from shouldComponentUpdate.
	var renderedChild=(0,_react.useMemo)(function(){if(shouldHandleStateChanges){// If this component is subscribed to store updates, we need to pass its own
	// subscription instance down to our descendants. That means rendering the same
	// Context instance, and putting a different value into the context.
	return(/*#__PURE__*/_react.default.createElement(ContextToUse.Provider,{value:overriddenContextValue},renderedWrappedComponent));}return renderedWrappedComponent;},[ContextToUse,renderedWrappedComponent,overriddenContextValue]);return renderedChild;}var _Connect=_react.default.memo(ConnectFunction);// Add a hacky cast to get the right output type
	var Connect=_Connect;Connect.WrappedComponent=WrappedComponent;Connect.displayName=ConnectFunction.displayName=displayName;if(forwardRef){var _forwarded=_react.default.forwardRef(function forwardConnectRef(props,ref){// @ts-ignore
	return(/*#__PURE__*/_react.default.createElement(Connect,(0,_extends2.default)({},props,{reactReduxForwardedRef:ref})));});var forwarded=_forwarded;forwarded.displayName=displayName;forwarded.WrappedComponent=WrappedComponent;return(0,_hoistNonReactStatics.default)(forwarded,WrappedComponent);}return(0,_hoistNonReactStatics.default)(Connect,WrappedComponent);};return wrapWithConnect;}var _default=connect;exports.default=_default;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ }),
/* 346 */
/***/ (function(module, exports) {

	"use strict";function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj};}module.exports=_interopRequireDefault;module.exports["default"]=module.exports,module.exports.__esModule=true;

/***/ }),
/* 347 */
/***/ (function(module, exports) {

	"use strict";function _extends(){module.exports=_extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};module.exports["default"]=module.exports,module.exports.__esModule=true;return _extends.apply(this,arguments);}module.exports=_extends;module.exports["default"]=module.exports,module.exports.__esModule=true;

/***/ }),
/* 348 */
/***/ (function(module, exports) {

	"use strict";function _objectWithoutPropertiesLoose(source,excluded){if(source==null)return{};var target={};var sourceKeys=Object.keys(source);var key,i;for(i=0;i<sourceKeys.length;i++){key=sourceKeys[i];if(excluded.indexOf(key)>=0)continue;target[key]=source[key];}return target;}module.exports=_objectWithoutPropertiesLoose;module.exports["default"]=module.exports,module.exports.__esModule=true;

/***/ }),
/* 349 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';var reactIs=__webpack_require__(350);/**
	 * Copyright 2015, Yahoo! Inc.
	 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
	 */var REACT_STATICS={childContextTypes:true,contextType:true,contextTypes:true,defaultProps:true,displayName:true,getDefaultProps:true,getDerivedStateFromError:true,getDerivedStateFromProps:true,mixins:true,propTypes:true,type:true};var KNOWN_STATICS={name:true,length:true,prototype:true,caller:true,callee:true,arguments:true,arity:true};var FORWARD_REF_STATICS={'$$typeof':true,render:true,defaultProps:true,displayName:true,propTypes:true};var MEMO_STATICS={'$$typeof':true,compare:true,defaultProps:true,displayName:true,propTypes:true,type:true};var TYPE_STATICS={};TYPE_STATICS[reactIs.ForwardRef]=FORWARD_REF_STATICS;TYPE_STATICS[reactIs.Memo]=MEMO_STATICS;function getStatics(component){// React v16.11 and below
	if(reactIs.isMemo(component)){return MEMO_STATICS;}// React v16.12 and above
	return TYPE_STATICS[component['$$typeof']]||REACT_STATICS;}var defineProperty=Object.defineProperty;var getOwnPropertyNames=Object.getOwnPropertyNames;var getOwnPropertySymbols=Object.getOwnPropertySymbols;var getOwnPropertyDescriptor=Object.getOwnPropertyDescriptor;var getPrototypeOf=Object.getPrototypeOf;var objectPrototype=Object.prototype;function hoistNonReactStatics(targetComponent,sourceComponent,blacklist){if(typeof sourceComponent!=='string'){// don't hoist over string (html) components
	if(objectPrototype){var inheritedComponent=getPrototypeOf(sourceComponent);if(inheritedComponent&&inheritedComponent!==objectPrototype){hoistNonReactStatics(targetComponent,inheritedComponent,blacklist);}}var keys=getOwnPropertyNames(sourceComponent);if(getOwnPropertySymbols){keys=keys.concat(getOwnPropertySymbols(sourceComponent));}var targetStatics=getStatics(targetComponent);var sourceStatics=getStatics(sourceComponent);for(var i=0;i<keys.length;++i){var key=keys[i];if(!KNOWN_STATICS[key]&&!(blacklist&&blacklist[key])&&!(sourceStatics&&sourceStatics[key])&&!(targetStatics&&targetStatics[key])){var descriptor=getOwnPropertyDescriptor(sourceComponent,key);try{// Avoid failures from read-only properties
	defineProperty(targetComponent,key,descriptor);}catch(e){}}}}return targetComponent;}module.exports=hoistNonReactStatics;

/***/ }),
/* 350 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';if(process.env.NODE_ENV==='production'){module.exports=__webpack_require__(351);}else{module.exports=__webpack_require__(352);}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ }),
/* 351 */
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
/* 352 */
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
/* 353 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';if(process.env.NODE_ENV==='production'){module.exports=__webpack_require__(354);}else{module.exports=__webpack_require__(355);}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ }),
/* 354 */
/***/ (function(module, exports) {

	/**
	 * @license React
	 * react-is.production.min.js
	 *
	 * Copyright (c) Facebook, Inc. and its affiliates.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */'use strict';var _typeof=typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"?function(obj){return typeof obj;}:function(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;};var b=Symbol.for("react.element"),c=Symbol.for("react.portal"),d=Symbol.for("react.fragment"),e=Symbol.for("react.strict_mode"),f=Symbol.for("react.profiler"),g=Symbol.for("react.provider"),h=Symbol.for("react.context"),k=Symbol.for("react.server_context"),l=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),n=Symbol.for("react.suspense_list"),p=Symbol.for("react.memo"),q=Symbol.for("react.lazy"),t=Symbol.for("react.offscreen"),u;u=Symbol.for("react.module.reference");function v(a){if("object"===(typeof a==="undefined"?"undefined":_typeof(a))&&null!==a){var r=a.$$typeof;switch(r){case b:switch(a=a.type,a){case d:case f:case e:case m:case n:return a;default:switch(a=a&&a.$$typeof,a){case k:case h:case l:case q:case p:case g:return a;default:return r;}}case c:return r;}}}exports.ContextConsumer=h;exports.ContextProvider=g;exports.Element=b;exports.ForwardRef=l;exports.Fragment=d;exports.Lazy=q;exports.Memo=p;exports.Portal=c;exports.Profiler=f;exports.StrictMode=e;exports.Suspense=m;exports.SuspenseList=n;exports.isAsyncMode=function(){return!1;};exports.isConcurrentMode=function(){return!1;};exports.isContextConsumer=function(a){return v(a)===h;};exports.isContextProvider=function(a){return v(a)===g;};exports.isElement=function(a){return"object"===(typeof a==="undefined"?"undefined":_typeof(a))&&null!==a&&a.$$typeof===b;};exports.isForwardRef=function(a){return v(a)===l;};exports.isFragment=function(a){return v(a)===d;};exports.isLazy=function(a){return v(a)===q;};exports.isMemo=function(a){return v(a)===p;};exports.isPortal=function(a){return v(a)===c;};exports.isProfiler=function(a){return v(a)===f;};exports.isStrictMode=function(a){return v(a)===e;};exports.isSuspense=function(a){return v(a)===m;};exports.isSuspenseList=function(a){return v(a)===n;};exports.isValidElementType=function(a){return"string"===typeof a||"function"===typeof a||a===d||a===f||a===e||a===m||a===n||a===t||"object"===(typeof a==="undefined"?"undefined":_typeof(a))&&null!==a&&(a.$$typeof===q||a.$$typeof===p||a.$$typeof===g||a.$$typeof===h||a.$$typeof===l||a.$$typeof===u||void 0!==a.getModuleId)?!0:!1;};exports.typeOf=v;

/***/ }),
/* 355 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * @license React
	 * react-is.development.js
	 *
	 * Copyright (c) Facebook, Inc. and its affiliates.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */'use strict';var _typeof=typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"?function(obj){return typeof obj;}:function(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;};if(process.env.NODE_ENV!=="production"){(function(){'use strict';// ATTENTION
	// When adding new symbols to this file,
	// Please consider also adding to 'react-devtools-shared/src/backend/ReactSymbols'
	// The Symbol used to tag the ReactElement-like types.
	var REACT_ELEMENT_TYPE=Symbol.for('react.element');var REACT_PORTAL_TYPE=Symbol.for('react.portal');var REACT_FRAGMENT_TYPE=Symbol.for('react.fragment');var REACT_STRICT_MODE_TYPE=Symbol.for('react.strict_mode');var REACT_PROFILER_TYPE=Symbol.for('react.profiler');var REACT_PROVIDER_TYPE=Symbol.for('react.provider');var REACT_CONTEXT_TYPE=Symbol.for('react.context');var REACT_SERVER_CONTEXT_TYPE=Symbol.for('react.server_context');var REACT_FORWARD_REF_TYPE=Symbol.for('react.forward_ref');var REACT_SUSPENSE_TYPE=Symbol.for('react.suspense');var REACT_SUSPENSE_LIST_TYPE=Symbol.for('react.suspense_list');var REACT_MEMO_TYPE=Symbol.for('react.memo');var REACT_LAZY_TYPE=Symbol.for('react.lazy');var REACT_OFFSCREEN_TYPE=Symbol.for('react.offscreen');// -----------------------------------------------------------------------------
	var enableScopeAPI=false;// Experimental Create Event Handle API.
	var enableCacheElement=false;var enableTransitionTracing=false;// No known bugs, but needs performance testing
	var enableLegacyHidden=false;// Enables unstable_avoidThisFallback feature in Fiber
	// stuff. Intended to enable React core members to more easily debug scheduling
	// issues in DEV builds.
	var enableDebugTracing=false;// Track which Fiber(s) schedule render work.
	var REACT_MODULE_REFERENCE;{REACT_MODULE_REFERENCE=Symbol.for('react.module.reference');}function isValidElementType(type){if(typeof type==='string'||typeof type==='function'){return true;}// Note: typeof might be other than 'symbol' or 'number' (e.g. if it's a polyfill).
	if(type===REACT_FRAGMENT_TYPE||type===REACT_PROFILER_TYPE||enableDebugTracing||type===REACT_STRICT_MODE_TYPE||type===REACT_SUSPENSE_TYPE||type===REACT_SUSPENSE_LIST_TYPE||enableLegacyHidden||type===REACT_OFFSCREEN_TYPE||enableScopeAPI||enableCacheElement||enableTransitionTracing){return true;}if((typeof type==='undefined'?'undefined':_typeof(type))==='object'&&type!==null){if(type.$$typeof===REACT_LAZY_TYPE||type.$$typeof===REACT_MEMO_TYPE||type.$$typeof===REACT_PROVIDER_TYPE||type.$$typeof===REACT_CONTEXT_TYPE||type.$$typeof===REACT_FORWARD_REF_TYPE||// This needs to include all possible module reference object
	// types supported by any Flight configuration anywhere since
	// we don't know which Flight build this will end up being used
	// with.
	type.$$typeof===REACT_MODULE_REFERENCE||type.getModuleId!==undefined){return true;}}return false;}function typeOf(object){if((typeof object==='undefined'?'undefined':_typeof(object))==='object'&&object!==null){var $$typeof=object.$$typeof;switch($$typeof){case REACT_ELEMENT_TYPE:var type=object.type;switch(type){case REACT_FRAGMENT_TYPE:case REACT_PROFILER_TYPE:case REACT_STRICT_MODE_TYPE:case REACT_SUSPENSE_TYPE:case REACT_SUSPENSE_LIST_TYPE:return type;default:var $$typeofType=type&&type.$$typeof;switch($$typeofType){case REACT_SERVER_CONTEXT_TYPE:case REACT_CONTEXT_TYPE:case REACT_FORWARD_REF_TYPE:case REACT_LAZY_TYPE:case REACT_MEMO_TYPE:case REACT_PROVIDER_TYPE:return $$typeofType;default:return $$typeof;}}case REACT_PORTAL_TYPE:return $$typeof;}}return undefined;}var ContextConsumer=REACT_CONTEXT_TYPE;var ContextProvider=REACT_PROVIDER_TYPE;var Element=REACT_ELEMENT_TYPE;var ForwardRef=REACT_FORWARD_REF_TYPE;var Fragment=REACT_FRAGMENT_TYPE;var Lazy=REACT_LAZY_TYPE;var Memo=REACT_MEMO_TYPE;var Portal=REACT_PORTAL_TYPE;var Profiler=REACT_PROFILER_TYPE;var StrictMode=REACT_STRICT_MODE_TYPE;var Suspense=REACT_SUSPENSE_TYPE;var SuspenseList=REACT_SUSPENSE_LIST_TYPE;var hasWarnedAboutDeprecatedIsAsyncMode=false;var hasWarnedAboutDeprecatedIsConcurrentMode=false;// AsyncMode should be deprecated
	function isAsyncMode(object){{if(!hasWarnedAboutDeprecatedIsAsyncMode){hasWarnedAboutDeprecatedIsAsyncMode=true;// Using console['warn'] to evade Babel and ESLint
	console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, '+'and will be removed in React 18+.');}}return false;}function isConcurrentMode(object){{if(!hasWarnedAboutDeprecatedIsConcurrentMode){hasWarnedAboutDeprecatedIsConcurrentMode=true;// Using console['warn'] to evade Babel and ESLint
	console['warn']('The ReactIs.isConcurrentMode() alias has been deprecated, '+'and will be removed in React 18+.');}}return false;}function isContextConsumer(object){return typeOf(object)===REACT_CONTEXT_TYPE;}function isContextProvider(object){return typeOf(object)===REACT_PROVIDER_TYPE;}function isElement(object){return(typeof object==='undefined'?'undefined':_typeof(object))==='object'&&object!==null&&object.$$typeof===REACT_ELEMENT_TYPE;}function isForwardRef(object){return typeOf(object)===REACT_FORWARD_REF_TYPE;}function isFragment(object){return typeOf(object)===REACT_FRAGMENT_TYPE;}function isLazy(object){return typeOf(object)===REACT_LAZY_TYPE;}function isMemo(object){return typeOf(object)===REACT_MEMO_TYPE;}function isPortal(object){return typeOf(object)===REACT_PORTAL_TYPE;}function isProfiler(object){return typeOf(object)===REACT_PROFILER_TYPE;}function isStrictMode(object){return typeOf(object)===REACT_STRICT_MODE_TYPE;}function isSuspense(object){return typeOf(object)===REACT_SUSPENSE_TYPE;}function isSuspenseList(object){return typeOf(object)===REACT_SUSPENSE_LIST_TYPE;}exports.ContextConsumer=ContextConsumer;exports.ContextProvider=ContextProvider;exports.Element=Element;exports.ForwardRef=ForwardRef;exports.Fragment=Fragment;exports.Lazy=Lazy;exports.Memo=Memo;exports.Portal=Portal;exports.Profiler=Profiler;exports.StrictMode=StrictMode;exports.Suspense=Suspense;exports.SuspenseList=SuspenseList;exports.isAsyncMode=isAsyncMode;exports.isConcurrentMode=isConcurrentMode;exports.isContextConsumer=isContextConsumer;exports.isContextProvider=isContextProvider;exports.isElement=isElement;exports.isForwardRef=isForwardRef;exports.isFragment=isFragment;exports.isLazy=isLazy;exports.isMemo=isMemo;exports.isPortal=isPortal;exports.isProfiler=isProfiler;exports.isStrictMode=isStrictMode;exports.isSuspense=isSuspense;exports.isSuspenseList=isSuspenseList;exports.isValidElementType=isValidElementType;exports.typeOf=typeOf;})();}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ }),
/* 356 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {"use strict";var _interopRequireDefault=__webpack_require__(346);exports.__esModule=true;exports.pureFinalPropsSelectorFactory=pureFinalPropsSelectorFactory;exports.default=finalPropsSelectorFactory;var _objectWithoutPropertiesLoose2=_interopRequireDefault(__webpack_require__(348));var _verifySubselectors=_interopRequireDefault(__webpack_require__(357));var _excluded=["initMapStateToProps","initMapDispatchToProps","initMergeProps"];function pureFinalPropsSelectorFactory(mapStateToProps,mapDispatchToProps,mergeProps,dispatch,_ref2){var areStatesEqual=_ref2.areStatesEqual,areOwnPropsEqual=_ref2.areOwnPropsEqual,areStatePropsEqual=_ref2.areStatePropsEqual;var hasRunAtLeastOnce=false;var state=void 0;var ownProps=void 0;var stateProps=void 0;var dispatchProps=void 0;var mergedProps=void 0;function handleFirstCall(firstState,firstOwnProps){state=firstState;ownProps=firstOwnProps;stateProps=mapStateToProps(state,ownProps);dispatchProps=mapDispatchToProps(dispatch,ownProps);mergedProps=mergeProps(stateProps,dispatchProps,ownProps);hasRunAtLeastOnce=true;return mergedProps;}function handleNewPropsAndNewState(){stateProps=mapStateToProps(state,ownProps);if(mapDispatchToProps.dependsOnOwnProps)dispatchProps=mapDispatchToProps(dispatch,ownProps);mergedProps=mergeProps(stateProps,dispatchProps,ownProps);return mergedProps;}function handleNewProps(){if(mapStateToProps.dependsOnOwnProps)stateProps=mapStateToProps(state,ownProps);if(mapDispatchToProps.dependsOnOwnProps)dispatchProps=mapDispatchToProps(dispatch,ownProps);mergedProps=mergeProps(stateProps,dispatchProps,ownProps);return mergedProps;}function handleNewState(){var nextStateProps=mapStateToProps(state,ownProps);var statePropsChanged=!areStatePropsEqual(nextStateProps,stateProps);stateProps=nextStateProps;if(statePropsChanged)mergedProps=mergeProps(stateProps,dispatchProps,ownProps);return mergedProps;}function handleSubsequentCalls(nextState,nextOwnProps){var propsChanged=!areOwnPropsEqual(nextOwnProps,ownProps);var stateChanged=!areStatesEqual(nextState,state,nextOwnProps,ownProps);state=nextState;ownProps=nextOwnProps;if(propsChanged&&stateChanged)return handleNewPropsAndNewState();if(propsChanged)return handleNewProps();if(stateChanged)return handleNewState();return mergedProps;}return function pureFinalPropsSelector(nextState,nextOwnProps){return hasRunAtLeastOnce?handleSubsequentCalls(nextState,nextOwnProps):handleFirstCall(nextState,nextOwnProps);};}// TODO: Add more comments
	// The selector returned by selectorFactory will memoize its results,
	// allowing connect's shouldComponentUpdate to return false if final
	// props have not changed.
	function finalPropsSelectorFactory(dispatch,_ref){var initMapStateToProps=_ref.initMapStateToProps,initMapDispatchToProps=_ref.initMapDispatchToProps,initMergeProps=_ref.initMergeProps,options=(0,_objectWithoutPropertiesLoose2.default)(_ref,_excluded);var mapStateToProps=initMapStateToProps(dispatch,options);var mapDispatchToProps=initMapDispatchToProps(dispatch,options);var mergeProps=initMergeProps(dispatch,options);if(process.env.NODE_ENV!=='production'){(0,_verifySubselectors.default)(mapStateToProps,mapDispatchToProps,mergeProps);}return pureFinalPropsSelectorFactory(mapStateToProps,mapDispatchToProps,mergeProps,dispatch,options);}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ }),
/* 357 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";var _interopRequireDefault=__webpack_require__(346);exports.__esModule=true;exports.default=verifySubselectors;var _warning=_interopRequireDefault(__webpack_require__(358));function verify(selector,methodName){if(!selector){throw new Error("Unexpected value for "+methodName+" in connect.");}else if(methodName==='mapStateToProps'||methodName==='mapDispatchToProps'){if(!Object.prototype.hasOwnProperty.call(selector,'dependsOnOwnProps')){(0,_warning.default)("The selector for "+methodName+" of connect did not specify a value for dependsOnOwnProps.");}}}function verifySubselectors(mapStateToProps,mapDispatchToProps,mergeProps){verify(mapStateToProps,'mapStateToProps');verify(mapDispatchToProps,'mapDispatchToProps');verify(mergeProps,'mergeProps');}

/***/ }),
/* 358 */
/***/ (function(module, exports) {

	"use strict";exports.__esModule=true;exports.default=warning;/**
	 * Prints a warning in the console if it exists.
	 *
	 * @param {String} message The warning message.
	 * @returns {void}
	 */function warning(message){/* eslint-disable no-console */if(typeof console!=='undefined'&&typeof console.error==='function'){console.error(message);}/* eslint-enable no-console */try{// This error was thrown as a convenience so that if you enable
	// "break on all exceptions" in your console,
	// it would pause the execution at this line.
	throw new Error(message);/* eslint-disable no-empty */}catch(e){}/* eslint-enable no-empty */}

/***/ }),
/* 359 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";var _typeof=typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"?function(obj){return typeof obj;}:function(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;};var _interopRequireDefault=__webpack_require__(346);exports.__esModule=true;exports.mapDispatchToPropsFactory=mapDispatchToPropsFactory;var _bindActionCreators=_interopRequireDefault(__webpack_require__(360));var _wrapMapToProps=__webpack_require__(361);var _invalidArgFactory=__webpack_require__(364);function mapDispatchToPropsFactory(mapDispatchToProps){return mapDispatchToProps&&(typeof mapDispatchToProps==="undefined"?"undefined":_typeof(mapDispatchToProps))==='object'?(0,_wrapMapToProps.wrapMapToPropsConstant)(function(dispatch){return(// @ts-ignore
	(0,_bindActionCreators.default)(mapDispatchToProps,dispatch));}):!mapDispatchToProps?(0,_wrapMapToProps.wrapMapToPropsConstant)(function(dispatch){return{dispatch:dispatch};}):typeof mapDispatchToProps==='function'?// @ts-ignore
	(0,_wrapMapToProps.wrapMapToPropsFunc)(mapDispatchToProps,'mapDispatchToProps'):(0,_invalidArgFactory.createInvalidArgFactory)(mapDispatchToProps,'mapDispatchToProps');}

/***/ }),
/* 360 */
/***/ (function(module, exports) {

	"use strict";exports.__esModule=true;exports.default=bindActionCreators;function bindActionCreators(actionCreators,dispatch){var boundActionCreators={};var _loop=function _loop(key){var actionCreator=actionCreators[key];if(typeof actionCreator==='function'){boundActionCreators[key]=function(){return dispatch(actionCreator.apply(undefined,arguments));};}};for(var key in actionCreators){_loop(key);}return boundActionCreators;}

/***/ }),
/* 361 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {"use strict";var _interopRequireDefault=__webpack_require__(346);exports.__esModule=true;exports.wrapMapToPropsConstant=wrapMapToPropsConstant;exports.getDependsOnOwnProps=getDependsOnOwnProps;exports.wrapMapToPropsFunc=wrapMapToPropsFunc;var _verifyPlainObject=_interopRequireDefault(__webpack_require__(362));function wrapMapToPropsConstant(// * Note:
	//  It seems that the dispatch argument
	//  could be a dispatch function in some cases (ex: whenMapDispatchToPropsIsMissing)
	//  and a state object in some others (ex: whenMapStateToPropsIsMissing)
	getConstant){return function initConstantSelector(dispatch){var constant=getConstant(dispatch);function constantSelector(){return constant;}constantSelector.dependsOnOwnProps=false;return constantSelector;};}// dependsOnOwnProps is used by createMapToPropsProxy to determine whether to pass props as args
	// to the mapToProps function being wrapped. It is also used by makePurePropsSelector to determine
	// whether mapToProps needs to be invoked when props have changed.
	//
	// A length of one signals that mapToProps does not depend on props from the parent component.
	// A length of zero is assumed to mean mapToProps is getting args via arguments or ...args and
	// therefore not reporting its length accurately..
	// TODO Can this get pulled out so that we can subscribe directly to the store if we don't need ownProps?
	function getDependsOnOwnProps(mapToProps){return mapToProps.dependsOnOwnProps?Boolean(mapToProps.dependsOnOwnProps):mapToProps.length!==1;}// Used by whenMapStateToPropsIsFunction and whenMapDispatchToPropsIsFunction,
	// this function wraps mapToProps in a proxy function which does several things:
	//
	//  * Detects whether the mapToProps function being called depends on props, which
	//    is used by selectorFactory to decide if it should reinvoke on props changes.
	//
	//  * On first call, handles mapToProps if returns another function, and treats that
	//    new function as the true mapToProps for subsequent calls.
	//
	//  * On first call, verifies the first result is a plain object, in order to warn
	//    the developer that their mapToProps function is not returning a valid result.
	//
	function wrapMapToPropsFunc(mapToProps,methodName){return function initProxySelector(dispatch,_ref){var displayName=_ref.displayName;var proxy=function mapToPropsProxy(stateOrDispatch,ownProps){return proxy.dependsOnOwnProps?proxy.mapToProps(stateOrDispatch,ownProps):proxy.mapToProps(stateOrDispatch,undefined);};// allow detectFactoryAndVerify to get ownProps
	proxy.dependsOnOwnProps=true;proxy.mapToProps=function detectFactoryAndVerify(stateOrDispatch,ownProps){proxy.mapToProps=mapToProps;proxy.dependsOnOwnProps=getDependsOnOwnProps(mapToProps);var props=proxy(stateOrDispatch,ownProps);if(typeof props==='function'){proxy.mapToProps=props;proxy.dependsOnOwnProps=getDependsOnOwnProps(props);props=proxy(stateOrDispatch,ownProps);}if(process.env.NODE_ENV!=='production')(0,_verifyPlainObject.default)(props,displayName,methodName);return props;};return proxy;};}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ }),
/* 362 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";var _interopRequireDefault=__webpack_require__(346);exports.__esModule=true;exports.default=verifyPlainObject;var _isPlainObject=_interopRequireDefault(__webpack_require__(363));var _warning=_interopRequireDefault(__webpack_require__(358));function verifyPlainObject(value,displayName,methodName){if(!(0,_isPlainObject.default)(value)){(0,_warning.default)(methodName+"() in "+displayName+" must return a plain object. Instead received "+value+".");}}

/***/ }),
/* 363 */
/***/ (function(module, exports) {

	"use strict";var _typeof=typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"?function(obj){return typeof obj;}:function(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;};exports.__esModule=true;exports.default=isPlainObject;/**
	 * @param {any} obj The object to inspect.
	 * @returns {boolean} True if the argument appears to be a plain object.
	 */function isPlainObject(obj){if((typeof obj==="undefined"?"undefined":_typeof(obj))!=='object'||obj===null)return false;var proto=Object.getPrototypeOf(obj);if(proto===null)return true;var baseProto=proto;while(Object.getPrototypeOf(baseProto)!==null){baseProto=Object.getPrototypeOf(baseProto);}return proto===baseProto;}

/***/ }),
/* 364 */
/***/ (function(module, exports) {

	"use strict";var _typeof=typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"?function(obj){return typeof obj;}:function(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;};exports.__esModule=true;exports.createInvalidArgFactory=createInvalidArgFactory;function createInvalidArgFactory(arg,name){return function(dispatch,options){throw new Error("Invalid value of type "+(typeof arg==="undefined"?"undefined":_typeof(arg))+" for "+name+" argument when connecting component "+options.wrappedComponentName+".");};}

/***/ }),
/* 365 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";exports.__esModule=true;exports.mapStateToPropsFactory=mapStateToPropsFactory;var _wrapMapToProps=__webpack_require__(361);var _invalidArgFactory=__webpack_require__(364);function mapStateToPropsFactory(mapStateToProps){return!mapStateToProps?(0,_wrapMapToProps.wrapMapToPropsConstant)(function(){return{};}):typeof mapStateToProps==='function'?// @ts-ignore
	(0,_wrapMapToProps.wrapMapToPropsFunc)(mapStateToProps,'mapStateToProps'):(0,_invalidArgFactory.createInvalidArgFactory)(mapStateToProps,'mapStateToProps');}

/***/ }),
/* 366 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {"use strict";var _interopRequireDefault=__webpack_require__(346);exports.__esModule=true;exports.defaultMergeProps=defaultMergeProps;exports.wrapMergePropsFunc=wrapMergePropsFunc;exports.mergePropsFactory=mergePropsFactory;var _extends2=_interopRequireDefault(__webpack_require__(347));var _verifyPlainObject=_interopRequireDefault(__webpack_require__(362));var _invalidArgFactory=__webpack_require__(364);function defaultMergeProps(stateProps,dispatchProps,ownProps){// @ts-ignore
	return(0,_extends2.default)({},ownProps,stateProps,dispatchProps);}function wrapMergePropsFunc(mergeProps){return function initMergePropsProxy(dispatch,_ref){var displayName=_ref.displayName,areMergedPropsEqual=_ref.areMergedPropsEqual;var hasRunOnce=false;var mergedProps=void 0;return function mergePropsProxy(stateProps,dispatchProps,ownProps){var nextMergedProps=mergeProps(stateProps,dispatchProps,ownProps);if(hasRunOnce){if(!areMergedPropsEqual(nextMergedProps,mergedProps))mergedProps=nextMergedProps;}else{hasRunOnce=true;mergedProps=nextMergedProps;if(process.env.NODE_ENV!=='production')(0,_verifyPlainObject.default)(mergedProps,displayName,'mergeProps');}return mergedProps;};};}function mergePropsFactory(mergeProps){return!mergeProps?function(){return defaultMergeProps;}:typeof mergeProps==='function'?wrapMergePropsFunc(mergeProps):(0,_invalidArgFactory.createInvalidArgFactory)(mergeProps,'mergeProps');}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ }),
/* 367 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";exports.__esModule=true;exports.createSubscription=createSubscription;var _batch=__webpack_require__(340);function createListenerCollection(){var batch=(0,_batch.getBatch)();var first=null;var last=null;return{clear:function clear(){first=null;last=null;},notify:function notify(){batch(function(){var listener=first;while(listener){listener.callback();listener=listener.next;}});},get:function get(){var listeners=[];var listener=first;while(listener){listeners.push(listener);listener=listener.next;}return listeners;},subscribe:function subscribe(callback){var isSubscribed=true;var listener=last={callback:callback,next:null,prev:last};if(listener.prev){listener.prev.next=listener;}else{first=listener;}return function unsubscribe(){if(!isSubscribed||first===null)return;isSubscribed=false;if(listener.next){listener.next.prev=listener.prev;}else{last=listener.prev;}if(listener.prev){listener.prev.next=listener.next;}else{first=listener.next;}};}};}var nullListeners={notify:function notify(){},get:function get(){return[];}};function createSubscription(store,parentSub){var unsubscribe=void 0;var listeners=nullListeners;function addNestedSub(listener){trySubscribe();return listeners.subscribe(listener);}function notifyNestedSubs(){listeners.notify();}function handleChangeWrapper(){if(subscription.onStateChange){subscription.onStateChange();}}function isSubscribed(){return Boolean(unsubscribe);}function trySubscribe(){if(!unsubscribe){unsubscribe=parentSub?parentSub.addNestedSub(handleChangeWrapper):store.subscribe(handleChangeWrapper);listeners=createListenerCollection();}}function tryUnsubscribe(){if(unsubscribe){unsubscribe();unsubscribe=undefined;listeners.clear();listeners=nullListeners;}}var subscription={addNestedSub:addNestedSub,notifyNestedSubs:notifyNestedSubs,handleChangeWrapper:handleChangeWrapper,isSubscribed:isSubscribed,trySubscribe:trySubscribe,tryUnsubscribe:tryUnsubscribe,getListeners:function getListeners(){return listeners;}};return subscription;}

/***/ }),
/* 368 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";exports.__esModule=true;exports.useIsomorphicLayoutEffect=exports.canUseDOM=void 0;var _react=__webpack_require__(10);// React currently throws a warning when using useLayoutEffect on the server.
	// To get around it, we can conditionally useEffect on the server (no-op) and
	// useLayoutEffect in the browser. We need useLayoutEffect to ensure the store
	// subscription callback always has the selector from the latest render commit
	// available, otherwise a store update may happen between render and the effect,
	// which may cause missed updates; we also must ensure the store subscription
	// is created synchronously, otherwise a store update may occur before the
	// subscription is created and an inconsistent state may be observed
	// Matches logic in React's `shared/ExecutionEnvironment` file
	var canUseDOM=!!(typeof window!=='undefined'&&typeof window.document!=='undefined'&&typeof window.document.createElement!=='undefined');exports.canUseDOM=canUseDOM;var useIsomorphicLayoutEffect=canUseDOM?_react.useLayoutEffect:_react.useEffect;exports.useIsomorphicLayoutEffect=useIsomorphicLayoutEffect;

/***/ }),
/* 369 */
/***/ (function(module, exports) {

	"use strict";var _typeof=typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"?function(obj){return typeof obj;}:function(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;};exports.__esModule=true;exports.default=shallowEqual;function is(x,y){if(x===y){return x!==0||y!==0||1/x===1/y;}else{return x!==x&&y!==y;}}function shallowEqual(objA,objB){if(is(objA,objB))return true;if((typeof objA==='undefined'?'undefined':_typeof(objA))!=='object'||objA===null||(typeof objB==='undefined'?'undefined':_typeof(objB))!=='object'||objB===null){return false;}var keysA=Object.keys(objA);var keysB=Object.keys(objB);if(keysA.length!==keysB.length)return false;for(var i=0;i<keysA.length;i++){if(!Object.prototype.hasOwnProperty.call(objB,keysA[i])||!is(objA[keysA[i]],objB[keysA[i]])){return false;}}return true;}

/***/ }),
/* 370 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";var _interopRequireDefault=__webpack_require__(346);exports.__esModule=true;var _exportNames={Provider:true,connect:true,ReactReduxContext:true,useDispatch:true,createDispatchHook:true,useSelector:true,createSelectorHook:true,useStore:true,createStoreHook:true,shallowEqual:true};Object.defineProperty(exports,"Provider",{enumerable:true,get:function get(){return _Provider.default;}});Object.defineProperty(exports,"connect",{enumerable:true,get:function get(){return _connect.default;}});Object.defineProperty(exports,"ReactReduxContext",{enumerable:true,get:function get(){return _Context.ReactReduxContext;}});Object.defineProperty(exports,"useDispatch",{enumerable:true,get:function get(){return _useDispatch.useDispatch;}});Object.defineProperty(exports,"createDispatchHook",{enumerable:true,get:function get(){return _useDispatch.createDispatchHook;}});Object.defineProperty(exports,"useSelector",{enumerable:true,get:function get(){return _useSelector.useSelector;}});Object.defineProperty(exports,"createSelectorHook",{enumerable:true,get:function get(){return _useSelector.createSelectorHook;}});Object.defineProperty(exports,"useStore",{enumerable:true,get:function get(){return _useStore.useStore;}});Object.defineProperty(exports,"createStoreHook",{enumerable:true,get:function get(){return _useStore.createStoreHook;}});Object.defineProperty(exports,"shallowEqual",{enumerable:true,get:function get(){return _shallowEqual.default;}});var _Provider=_interopRequireDefault(__webpack_require__(371));var _connect=_interopRequireDefault(__webpack_require__(345));var _Context=__webpack_require__(343);var _useDispatch=__webpack_require__(372);var _useSelector=__webpack_require__(341);var _useStore=__webpack_require__(373);var _shallowEqual=_interopRequireDefault(__webpack_require__(369));var _types=__webpack_require__(374);Object.keys(_types).forEach(function(key){if(key==="default"||key==="__esModule")return;if(Object.prototype.hasOwnProperty.call(_exportNames,key))return;if(key in exports&&exports[key]===_types[key])return;Object.defineProperty(exports,key,{enumerable:true,get:function get(){return _types[key];}});});

/***/ }),
/* 371 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";var _typeof=typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"?function(obj){return typeof obj;}:function(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;};exports.__esModule=true;exports.default=void 0;var _react=_interopRequireWildcard(__webpack_require__(10));var _Context=__webpack_require__(343);var _Subscription=__webpack_require__(367);var _useIsomorphicLayoutEffect=__webpack_require__(368);function _getRequireWildcardCache(nodeInterop){if(typeof WeakMap!=="function")return null;var cacheBabelInterop=new WeakMap();var cacheNodeInterop=new WeakMap();return(_getRequireWildcardCache=function _getRequireWildcardCache(nodeInterop){return nodeInterop?cacheNodeInterop:cacheBabelInterop;})(nodeInterop);}function _interopRequireWildcard(obj,nodeInterop){if(!nodeInterop&&obj&&obj.__esModule){return obj;}if(obj===null||(typeof obj==="undefined"?"undefined":_typeof(obj))!=="object"&&typeof obj!=="function"){return{default:obj};}var cache=_getRequireWildcardCache(nodeInterop);if(cache&&cache.has(obj)){return cache.get(obj);}var newObj={};var hasPropertyDescriptor=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var key in obj){if(key!=="default"&&Object.prototype.hasOwnProperty.call(obj,key)){var desc=hasPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):null;if(desc&&(desc.get||desc.set)){Object.defineProperty(newObj,key,desc);}else{newObj[key]=obj[key];}}}newObj.default=obj;if(cache){cache.set(obj,newObj);}return newObj;}function Provider(_ref){var store=_ref.store,context=_ref.context,children=_ref.children,serverState=_ref.serverState;var contextValue=(0,_react.useMemo)(function(){var subscription=(0,_Subscription.createSubscription)(store);return{store:store,subscription:subscription,getServerState:serverState?function(){return serverState;}:undefined};},[store,serverState]);var previousState=(0,_react.useMemo)(function(){return store.getState();},[store]);(0,_useIsomorphicLayoutEffect.useIsomorphicLayoutEffect)(function(){var subscription=contextValue.subscription;subscription.onStateChange=subscription.notifyNestedSubs;subscription.trySubscribe();if(previousState!==store.getState()){subscription.notifyNestedSubs();}return function(){subscription.tryUnsubscribe();subscription.onStateChange=undefined;};},[contextValue,previousState]);var Context=context||_Context.ReactReduxContext;// @ts-ignore 'AnyAction' is assignable to the constraint of type 'A', but 'A' could be instantiated with a different subtype
	return(/*#__PURE__*/_react.default.createElement(Context.Provider,{value:contextValue},children));}var _default=Provider;exports.default=_default;

/***/ }),
/* 372 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";exports.__esModule=true;exports.createDispatchHook=createDispatchHook;exports.useDispatch=void 0;var _Context=__webpack_require__(343);var _useStore=__webpack_require__(373);/**
	 * Hook factory, which creates a `useDispatch` hook bound to a given context.
	 *
	 * @param {React.Context} [context=ReactReduxContext] Context passed to your `<Provider>`.
	 * @returns {Function} A `useDispatch` hook bound to the specified context.
	 */function createDispatchHook(){var context=arguments.length>0&&arguments[0]!==undefined?arguments[0]:_Context.ReactReduxContext;var useStore=// @ts-ignore
	context===_Context.ReactReduxContext?_useStore.useStore:(0,_useStore.createStoreHook)(context);return function useDispatch(){var store=useStore();// @ts-ignore
	return store.dispatch;};}/**
	 * A hook to access the redux `dispatch` function.
	 *
	 * @returns {any|function} redux store's `dispatch` function
	 *
	 * @example
	 *
	 * import React, { useCallback } from 'react'
	 * import { useDispatch } from 'react-redux'
	 *
	 * export const CounterComponent = ({ value }) => {
	 *   const dispatch = useDispatch()
	 *   const increaseCounter = useCallback(() => dispatch({ type: 'increase-counter' }), [])
	 *   return (
	 *     <div>
	 *       <span>{value}</span>
	 *       <button onClick={increaseCounter}>Increase counter</button>
	 *     </div>
	 *   )
	 * }
	 */var useDispatch=/*#__PURE__*/createDispatchHook();exports.useDispatch=useDispatch;

/***/ }),
/* 373 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";exports.__esModule=true;exports.createStoreHook=createStoreHook;exports.useStore=void 0;var _react=__webpack_require__(10);var _Context=__webpack_require__(343);var _useReduxContext=__webpack_require__(342);/**
	 * Hook factory, which creates a `useStore` hook bound to a given context.
	 *
	 * @param {React.Context} [context=ReactReduxContext] Context passed to your `<Provider>`.
	 * @returns {Function} A `useStore` hook bound to the specified context.
	 */function createStoreHook(){var context=arguments.length>0&&arguments[0]!==undefined?arguments[0]:_Context.ReactReduxContext;var useReduxContext=// @ts-ignore
	context===_Context.ReactReduxContext?_useReduxContext.useReduxContext:function(){return(0,_react.useContext)(context);};return function useStore(){var _useReduxContext2=useReduxContext(),store=_useReduxContext2.store;// @ts-ignore
	return store;};}/**
	 * A hook to access the redux store.
	 *
	 * @returns {any} the redux store
	 *
	 * @example
	 *
	 * import React from 'react'
	 * import { useStore } from 'react-redux'
	 *
	 * export const ExampleComponent = () => {
	 *   const store = useStore()
	 *   return <div>{store.getState()}</div>
	 * }
	 */var useStore=/*#__PURE__*/createStoreHook();exports.useStore=useStore;

/***/ }),
/* 374 */
/***/ (function(module, exports) {

	"use strict";

/***/ }),
/* 375 */
/***/ (function(module, exports) {

	"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;/** A function that accepts a potential "extra argument" value to be injected later,
	 * and returns an instance of the thunk middleware that uses that value
	 */function createThunkMiddleware(extraArgument){// Standard Redux middleware definition pattern:
	// See: https://redux.js.org/tutorials/fundamentals/part-4-store#writing-custom-middleware
	var middleware=function middleware(_ref){var dispatch=_ref.dispatch,getState=_ref.getState;return function(next){return function(action){// The thunk middleware looks for any functions that were passed to `store.dispatch`.
	// If this "action" is really a function, call it and return the result.
	if(typeof action==='function'){// Inject the store's `dispatch` and `getState` methods, as well as any "extra arg"
	return action(dispatch,getState,extraArgument);}// Otherwise, pass the action down the middleware chain as usual
	return next(action);};};};return middleware;}var thunk=createThunkMiddleware();// Attach the factory function so users can create a customized version
	// with whatever "extra arg" they want to inject into their thunks
	thunk.withExtraArgument=createThunkMiddleware;var _default=thunk;exports.default=_default;

/***/ }),
/* 376 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var React = __webpack_require__(10);
	var PropTypes = __webpack_require__(11);

	var MainRegister = __webpack_require__(377);
	var MainDoc = __webpack_require__(386);

	var _require = __webpack_require__(5),
	    Route = _require.Route;
	//const createHashHistory = requery('history/lib/createHashHistory')


	var _require2 = __webpack_require__(88),
	    StyleRoot = _require2.StyleRoot;

	var MODULE = 'main';

	//const store = require ('./../store');

	var App = function (_React$Component) {
	    _inherits(App, _React$Component);

	    function App(props) {
	        _classCallCheck(this, App);

	        var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

	        _this.state = {
	            updated: false
	        };
	        return _this;
	    }

	    _createClass(App, [{
	        key: 'render',
	        value: function render() {
	            var store = this.props.store;
	            console.log('props', this.props);
	            return React.createElement(
	                StyleRoot,
	                null,
	                React.createElement(Route, { exact: true, path: '/main',
	                    render: function render(props) {
	                        return React.createElement(MainRegister, {
	                            store: store,
	                            history: props.history,
	                            module: MODULE });
	                    }
	                }),
	                React.createElement(Route, { exact: true, path: '/main/:docId',
	                    render: function render(props) {
	                        return React.createElement(MainDoc, _extends({}, props, {
	                            history: props.history,
	                            store: store
	                        }));
	                    }
	                }),
	                React.createElement(Route, { exact: true, path: '/',
	                    render: function render(props) {
	                        return React.createElement(MainRegister, {
	                            store: store,
	                            history: props.history,
	                            module: MODULE });
	                    } })
	            );
	        }
	    }]);

	    return App;
	}(React.Component);

	module.exports = App;

/***/ }),
/* 377 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	//import authors from "../../reducers/authors";

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var React = __webpack_require__(10);
	var Documents = __webpack_require__(179);
	var styles = __webpack_require__(174);

	var _fetchData = __webpack_require__(41);
	var Menu = __webpack_require__(40);
	var Const = __webpack_require__(86);

	var RegisterComponent = __webpack_require__(378);
	var PictureComponent = __webpack_require__(379);
	var UserApplicationsComponent = __webpack_require__(381);
	var DealsComponent = __webpack_require__(383);
	var AuthorsComponent = __webpack_require__(384);

	var FilterComponent = __webpack_require__(385);

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

	/**
	 * Класс реализует документ справочника признаков.
	 */

	var Register = function (_React$PureComponent) {
	    _inherits(Register, _React$PureComponent);

	    function Register(props) {
	        _classCallCheck(this, Register);

	        var _this = _possibleConstructorReturn(this, (Register.__proto__ || Object.getPrototypeOf(Register)).call(this, props));

	        _this.btnClickEventHandler = _this.btnClickEventHandler.bind(_this);
	        _this.fetchData = _this.fetchData.bind(_this);
	        _this.btnAddClick = _this.btnAddClick.bind(_this);
	        _this.loadLibs = _this.loadLibs.bind(_this);
	        _this.data = [];
	        _this.state = {
	            warning: null,
	            initLoad: false,
	            editDocument: false,
	            pictureId: null,
	            activeComponent: 'pictures',
	            filter: ''

	            //подписываемся на изменения в сторе
	        };var store = _this.props.store;
	        if (store) {
	            store.subscribe(function () {
	                var filter = store.getState().filters.filter;
	                var activeComponent = store.getState().statuses.activePageComponent;
	                if (filter.searchText !== _this.state.filter || JSON.stringify(filter.additionalFilter) !== JSON.stringify(_this.state.additionalFilter)) {
	                    _this.setState({
	                        filter: filter.searchText,
	                        additionalFilter: filter.additionalFilter
	                    }, function () {
	                        // обновим запрос
	                        _this.fetchData();
	                    });
	                }

	                // новой компонет в меню
	                if (activeComponent !== _this.state.activeComponent) {
	                    _this.setState({ activeComponent: activeComponent }, function () {
	                        return _this.fetchData();
	                    });
	                }

	                var reload = store.getState().statuses.reloadActivePageComponent;
	                if (reload) {

	                    store.dispatch({ type: 'reloadActivePageComponent', reloadActivePageComponent: false });
	                    // обновим запрос
	                    _this.fetchData();
	                }
	            });
	        }

	        return _this;
	    }

	    /**
	     * пишем делаем запрос по итогу загрузки
	     */


	    _createClass(Register, [{
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            // делаем запрос
	            this.fetchData();
	            // грузим библиотеки
	            this.loadLibs('reload', 'authors');
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var _style = Object.assign({}, styles, this.props.style ? this.props.style : {});
	            var warningStyle = null; //this.state.warningType && styles[this.state.warningType] ? styles[this.state.warningType] : null;

	            return React.createElement(
	                'div',
	                { style: _style.doc },
	                React.createElement(Menu, { params: btnParams,
	                    ref: 'menu',
	                    store: this.props.store,
	                    btnClickEventHandler: this.btnClickEventHandler,
	                    history: this.props.history,
	                    module: this.props.module }),
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
	                    { style: styles.pageFrame },
	                    React.createElement(
	                        'div',
	                        { style: styles.filterFrame },
	                        React.createElement(
	                            'span',
	                            null,
	                            'Addition filters'
	                        ),
	                        React.createElement(FilterComponent, { store: this.props.store })
	                    ),
	                    React.createElement(
	                        'div',
	                        { style: styles.componentFrame },
	                        this.state.activeComponent == 'pictures' ? React.createElement(RegisterComponent, {
	                            store: this.props.store,
	                            btnClickEventHandler: this.btnClickEventHandler
	                        }) : null,
	                        this.state.activeComponent == 'DEALS' ? React.createElement(DealsComponent, {
	                            store: this.props.store,
	                            btnClickEventHandler: this.btnClickEventHandler
	                        }) : null,
	                        this.state.activeComponent == 'TAOTLUS_LOGIN' ? React.createElement(UserApplicationsComponent, {
	                            store: this.props.store,
	                            btnClickEventHandler: this.btnClickEventHandler
	                        }) : null,
	                        this.state.activeComponent == 'AUTHORS' ? React.createElement(AuthorsComponent, {
	                            store: this.props.store,
	                            btnClickEventHandler: this.btnClickEventHandler
	                        }) : null
	                    )
	                ),
	                this.state.activeComponent == 'pictures' && this.state.editDocument ? React.createElement(PictureComponent, {
	                    store: this.props.store,
	                    id: this.state.pictureId,
	                    show: true,
	                    btnClickEventHandler: this.btnClickEventHandler
	                }) : null
	            );
	        }

	        /**
	         * обработчик событий кнопки
	         * @param event
	         * @param docId
	         */

	    }, {
	        key: 'btnClickEventHandler',
	        value: function btnClickEventHandler(event, docId) {
	            switch (event) {
	                case 'btnAdd':
	                    // новая картинка
	                    this.setState({ editDocument: true, pictureId: null });
	                    break;
	                case 'reload':
	                    // reload
	                    this.fetchData();
	                    this.setState({ editDocument: false, pictureId: docId });
	                    break;
	                case 'Cancel':
	                    this.setState({ editDocument: false, pictureId: null });
	                    break;
	                case 'saved':
	                    this.setState({ editDocument: false, pictureId: docId });
	                    break;
	            }
	        }

	        /**
	         * Вернет компонет - панель инструментов документа
	         * @returns {XML}
	         */

	    }, {
	        key: 'renderDocToolBar',
	        value: function renderDocToolBar() {
	            var toolbarParams = {
	                btnStart: {
	                    show: true
	                },
	                btnAdd: {
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
	                React.createElement(
	                    'div',
	                    { style: styles.docRow },
	                    React.createElement(
	                        ToolbarContainer,
	                        { ref: 'toolbarContainer' },
	                        React.createElement(BtnAdd, { onClick: this.btnAddClick,
	                            show: toolbarParams['btnAdd'].show,
	                            disable: toolbarParams['btnAdd'].disabled })
	                    )
	                )
	            );
	        }
	    }, {
	        key: 'btnAddClick',
	        value: function btnAddClick() {
	            console.log('main btnAddClick');
	            this.fetchData();
	            this.forceUpdate();
	        }

	        /**
	         * при необходимости подгрухзит нужную библиотеку
	         * @param library
	         */

	    }, {
	        key: 'loadLibs',
	        value: function loadLibs(event, library) {
	            var _this2 = this;

	            // 1. если библиотека не загружена, грузим
	            var lib = [];
	            if (library === 'authors') {
	                lib = this.props.store.getState().authors.authors;
	            }
	            if (!lib || !lib.length || event === 'reload') {
	                // справочник не подгружен

	                var url = '/main/' + library;
	                return new Promise(function (resolved, rejected) {
	                    _fetchData['fetchDataPost'](url).then(function (response) {
	                        console.log('lib load response', response.data);
	                        // error handling
	                        if (response.status === 200) {
	                            var store = _this2.props.store;
	                            // сохраним данные в сторе
	                            store.dispatch({ type: library, library: response.data.data });
	                            _this2.forceUpdate();
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

	            // 2/ если надо обновить, обновляем
	        }

	        /**
	         * загрузка данных
	         * @returns {*|Promise<AxiosResponse<unknown> | never>}
	         */

	    }, {
	        key: 'fetchData',
	        value: function fetchData(url) {
	            var _this3 = this;

	            var URL = '/main/data/';
	            if (this.state.activeComponent !== 'pictures') {
	                URL = '/main/' + this.state.activeComponent.toLowerCase() + '/';
	            }
	            // если задан адрес, используем его
	            if (url) {
	                URL = url;
	            }

	            console.log('this.state.activeComponent', this.state.activeComponent, URL);
	            var user = this.props.store.getState().statuses.user;
	            var additionalFilters = this.props.store.getState().filters.filter.additionalFilter;
	            var filter = this.props.store.getState().filters.filter.searchText;
	            var params = { filter: filter, additionalFilters: additionalFilters, user: user };

	            return new Promise(function (resolved, rejected) {

	                _fetchData['fetchDataPost'](URL, params).then(function (response) {
	                    console.log('response', response);
	                    // error handling
	                    if (response.status === 200) {
	                        var store = _this3.props.store;
	                        // сохраним данные в сторе
	                        switch (_this3.state.activeComponent) {
	                            case 'pictures':
	                                {
	                                    console.log('pictures dispatch called');
	                                    store.dispatch({ type: 'pictures', pictures: response.data.data });
	                                    break;
	                                }
	                            case 'TAOTLUS_LOGIN':
	                                {
	                                    console.log('TAOTLUS_LOGIN dispatch called');
	                                    store.dispatch({ type: 'userApplications', userApplications: response.data.data });
	                                    break;
	                                }
	                            case 'DEALS':
	                                {
	                                    console.log('DEALS dispatch called');
	                                    store.dispatch({ type: 'deals', deals: response.data.data });
	                                    break;
	                                }
	                            case 'AUTHORS':
	                                {
	                                    console.log('AUTHORS');
	                                    store.dispatch({ type: 'authors', library: response.data.data });
	                                    break;
	                                }
	                            default:
	                            // наверное picture
	                        }
	                        _this3.forceUpdate();
	                        resolved(response.data);
	                    } else {
	                        console.error('status !== 200');
	                        return rejected();
	                    }
	                }).catch(function (error) {
	                    //                let state = this.props.store.getState()
	                    console.error('got fetch error', error, URL, params);
	                    // Something happened in setting up the request that triggered an Error
	                    return rejected(error);
	                });
	            });
	        }
	    }]);

	    return Register;
	}(React.PureComponent);

	module.exports = Register;

/***/ }),
/* 378 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var React = __webpack_require__(10);
	var styles = __webpack_require__(174);
	var PictureComponent = __webpack_require__(379);
	var DealComponent = __webpack_require__(380);

	/**
	 * Класс реализует документ справочника признаков.
	 */

	var RegisterComponent = function (_React$PureComponent) {
	    _inherits(RegisterComponent, _React$PureComponent);

	    function RegisterComponent(props) {
	        _classCallCheck(this, RegisterComponent);

	        var _this = _possibleConstructorReturn(this, (RegisterComponent.__proto__ || Object.getPrototypeOf(RegisterComponent)).call(this, props));

	        _this.state = {
	            warning: null,
	            initLoad: false,
	            pictures: [],
	            user: {},
	            editDocument: false,
	            saleDocument: false,
	            pictureId: null

	        };
	        _this.btnClickHandler = _this.btnClickHandler.bind(_this);

	        //подписываемся на изменения в сторе
	        var store = _this.props.store;
	        if (store) {
	            store.subscribe(function () {
	                var pictures = store.getState().pictures.pictures;
	                var user = store.getState().statuses.user;

	                if (JSON.stringify(pictures) !== JSON.stringify(_this.state.pictures) || JSON.stringify(user) !== JSON.stringify(_this.state.user)) {
	                    _this.setState({
	                        pictures: pictures,
	                        user: user
	                    }, function () {
	                        _this.forceUpdate();
	                    });
	                }
	            });
	        }
	        return _this;
	    }

	    _createClass(RegisterComponent, [{
	        key: 'render',
	        value: function render() {
	            var _this2 = this;

	            var Component = void 0;
	            var pictures = this.state.pictures;
	            if (!pictures.length && this.props.store) {
	                // подгрузим из стора
	                pictures = this.props.store.getState().pictures.pictures;
	            }

	            var logedIn = false;
	            if (this.props.store) {
	                var user = this.props.store.getState().statuses.user;
	                logedIn = user && user.id ? true : false;
	            }

	            console.log('render ', pictures);
	            if (pictures && pictures.length) {
	                Component = pictures.map(function (picture, idx) {
	                    return React.createElement(
	                        'div',
	                        { style: styles.docRow, key: picture.id },
	                        React.createElement(
	                            'div',
	                            { style: styles.docColumn },
	                            React.createElement(
	                                'div',
	                                { style: styles.frame },
	                                React.createElement('img', {
	                                    src: 'data:image/jpeg;base64,/' + picture.file,
	                                    alt: 'Image',
	                                    key: picture.id,
	                                    style: styles.img,
	                                    href: '/main/' + picture.id
	                                })
	                            )
	                        ),
	                        React.createElement(
	                            'div',
	                            { style: styles.docColumn },
	                            React.createElement(
	                                'div',
	                                { style: styles.docRow, key: picture.id },
	                                logedIn ? React.createElement(
	                                    'button',
	                                    {
	                                        style: styles.btnEdit,
	                                        onClick: function onClick() {
	                                            return _this2.btnClickHandler('edit', idx);
	                                        },
	                                        onDoubleClick: function onDoubleClick() {
	                                            return _this2.btnClickHandler('edit', idx);
	                                        }
	                                    },
	                                    React.createElement('img', { ref: 'image', src: styles.icons['edit'] })
	                                ) : null,
	                                logedIn && picture.status === 1 ? React.createElement(
	                                    'button',
	                                    {
	                                        style: styles.btnSale,
	                                        onClick: function onClick() {
	                                            return _this2.btnClickHandler('sale', idx);
	                                        },
	                                        onDoubleClick: function onDoubleClick() {
	                                            return _this2.btnClickHandler('sale', idx);
	                                        }
	                                    },
	                                    React.createElement('img', { ref: 'image',
	                                        src: styles.icons['sale']

	                                    })
	                                ) : null
	                            ),
	                            React.createElement(
	                                'span',
	                                null,
	                                'Code: '
	                            ),
	                            React.createElement('input', { value: picture.kood || '',
	                                disabled: true,
	                                name: 'kood'
	                            }),
	                            React.createElement(
	                                'span',
	                                null,
	                                'Description:'
	                            ),
	                            React.createElement('input', { value: picture.description || '',
	                                disabled: true,
	                                name: 'description'
	                            }),
	                            React.createElement(
	                                'span',
	                                null,
	                                'Author:'
	                            ),
	                            React.createElement('input', { value: picture.author || '',
	                                disabled: true,
	                                name: 'Author'
	                            }),
	                            React.createElement(
	                                'span',
	                                null,
	                                'Price:'
	                            ),
	                            React.createElement('input', { value: picture.price || '',
	                                disabled: true,
	                                name: 'Price'
	                            }),
	                            React.createElement(
	                                'span',
	                                null,
	                                'Status:'
	                            ),
	                            React.createElement('input', { value: picture.status_name || '',
	                                disabled: true,
	                                name: 'Status'
	                            })
	                        )
	                    );
	                });
	            } else {
	                Component = React.createElement(
	                    'div',
	                    null,
	                    'Pictures are loading'
	                );
	            }
	            var pictureId = void 0;
	            if (this.props.store) {
	                pictureId = this.props.store.getState().statuses.pictureId;
	            }
	            return React.createElement(
	                'div',
	                null,
	                Component,
	                this.state.editDocument ? React.createElement(PictureComponent, {
	                    store: this.props.store,
	                    id: pictureId,
	                    show: true,
	                    btnClickEventHandler: this.props.btnClickEventHandler
	                }) : null,
	                this.state.saleDocument ? React.createElement(DealComponent, {
	                    store: this.props.store,
	                    id: pictureId,
	                    show: true,
	                    btnClickEventHandler: this.props.btnClickEventHandler
	                }) : null
	            );
	        }
	    }, {
	        key: 'btnClickHandler',
	        value: function btnClickHandler(event, idx) {
	            var pictures = this.props.store.getState().pictures.pictures;
	            var pictureId = pictures[idx].id;

	            this.props.store.dispatch({ type: 'pictureId', pictureId: pictureId });
	            switch (event) {
	                case 'btnAdd':
	                    // новая картинка
	                    this.setState({ editDocument: true, pictureId: null });
	                    break;
	                case 'edit':
	                    // меняем статус окна
	                    this.props.store.dispatch({ type: 'isPictureShow', isPictureShow: true });
	                    this.setState({ editDocument: true, saleDocument: false, pictureId: pictureId });
	                    break;
	                case 'sale':
	                    // меняем статус окна
	                    this.props.store.dispatch({ type: 'isPictureShow', isPictureShow: true });
	                    this.setState({ saleDocument: true, editDocument: false, pictureId: pictureId });

	                    break;
	            }
	        }
	    }]);

	    return RegisterComponent;
	}(React.PureComponent);

	module.exports = RegisterComponent;

/***/ }),
/* 379 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var PropTypes = __webpack_require__(11);

	var React = __webpack_require__(10),
	    styles = __webpack_require__(174);
	var fetchData = __webpack_require__(41);

	//const store = require('./../../store');

	var ModalPage = __webpack_require__(171);

	var Picture = function (_React$PureComponent) {
	    _inherits(Picture, _React$PureComponent);

	    function Picture(props) {
	        _classCallCheck(this, Picture);

	        var _this = _possibleConstructorReturn(this, (Picture.__proto__ || Object.getPrototypeOf(Picture)).call(this, props));

	        _this.state = {
	            selectedFile: '',
	            selectedFiles: null,
	            selectedFileType: '',
	            uploadedImage: null,
	            fileName: '',
	            show: true,
	            id: _this.props.id,
	            lastId: 0,
	            kood: _this.props.kood,
	            description: _this.props.description,
	            author_id: 0,
	            author: ''
	        };
	        _this.onClickHandled = _this.onClickHandled.bind(_this);
	        _this.onChangeHandler = _this.onChangeHandler.bind(_this);
	        _this.fecthData = _this.fecthData.bind(_this);
	        _this.onChangeInput = _this.onChangeInput.bind(_this);
	        _this.getPictureFromStore = _this.getPictureFromStore.bind(_this);

	        //подписываемся на изменения в сторе
	        var store = _this.props.store;
	        if (store) {
	            store.subscribe(function () {
	                var isPictureShow = store.getState().statuses.isPictureShow;
	                var authors = store.getState().authors.authors;

	                _this.setState({
	                    show: isPictureShow,
	                    authors: authors
	                }, function () {
	                    _this.forceUpdate();
	                });
	            });
	        }

	        return _this;
	    }

	    _createClass(Picture, [{
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            if (this.props.id) {
	                // редактирование
	                var picture = this.getPictureFromStore();
	                if (!picture || !picture.length) {
	                    return;
	                }

	                var store = this.props.store;
	                // проверим справочник авторов
	                var authors = store.getState().authors;

	                if (authors && !authors.length) {
	                    // справочник пуст, загружаем
	                    store.dispatch({ type: 'getAuthors', payload: [] });
	                }

	                this.setState({
	                    kood: picture[0].kood,
	                    description: picture[0].description,
	                    selectedFile: 'data:image/jpeg;base64,/' + picture[0].file,
	                    id: picture[0].id,
	                    fileName: picture[0].name,
	                    author_id: picture[0].author_id
	                });
	            }
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var mimeTypes = ".jpg, .png";
	            var authors = [{ id: 0, code: '', name: '' }].concat(this.props.store.getState().authors);
	            var picture = this.getPictureFromStore();
	            var pictureId = picture && picture.length ? picture[0] : 0;
	            var selectedFile = picture && picture.length ? 'data:image/jpeg;base64,/' + picture[0].file : null;

	            if (!pictureId) {
	                return React.createElement(
	                    'div',
	                    null,
	                    'Data is loading'
	                );
	            }

	            return React.createElement(
	                ModalPage,
	                { show: this.state.show,
	                    modalPageBtnClick: this.onClickHandled
	                },
	                !pictureId ? React.createElement('input', { type: 'file',
	                    name: 'file',
	                    onChange: this.onChangeHandler,
	                    accept: mimeTypes }) : null,
	                React.createElement(
	                    'div',
	                    { style: styles.docRow },
	                    React.createElement(
	                        'div',
	                        { style: styles.pictureFrame },
	                        pictureId ? React.createElement('img', {
	                            src: selectedFile,
	                            alt: 'Image',
	                            key: 'img_1',
	                            style: styles.picture
	                        }) : null
	                    ),
	                    React.createElement(
	                        'div',
	                        { style: styles.docColumn },
	                        React.createElement(
	                            'label',
	                            null,
	                            'Kood: '
	                        ),
	                        React.createElement('input', { type: 'text',
	                            id: 'kood',
	                            name: 'kood',
	                            onChange: this.onChangeInput,
	                            value: picture[0].kood || ''
	                        }),
	                        React.createElement(
	                            'label',
	                            null,
	                            'Description: '
	                        ),
	                        React.createElement('input', { type: 'text',
	                            id: 'description',
	                            name: 'description',
	                            onChange: this.onChangeInput,
	                            value: picture[0].description || ''
	                        }),
	                        React.createElement(
	                            'label',
	                            null,
	                            'Athor: '
	                        ),
	                        React.createElement(
	                            'select',
	                            { ref: 'select',
	                                style: styles.select,
	                                value: picture[0].author_id || 0,
	                                id: 'author',
	                                name: 'author',
	                                onChange: this.onChangeInput },
	                            authors.map(function (item, index) {
	                                return React.createElement(
	                                    'option',
	                                    { value: item.id },
	                                    ' ',
	                                    item.code + '  ' + item.name,
	                                    ' '
	                                );
	                            })
	                        )
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
	                case 'kood':
	                    this.setState({ kood: fieldValue });
	                    break;
	                case 'description':
	                    this.setState({ description: fieldValue });
	                    break;
	                case 'author':
	                    // найти и сохранить имя автора
	                    var authorName = '';
	                    if (fieldValue) {
	                        var author = this.props.store.getState().authors.filter(function (row) {
	                            return row.id == fieldValue;
	                        });
	                        if (author) {
	                            authorName = author[0].name;
	                        }
	                    }
	                    this.setState({ author_id: fieldValue, author: authorName });
	                    break;
	            }
	        }
	    }, {
	        key: 'onChangeHandler',
	        value: function onChangeHandler(event) {
	            var _this2 = this;

	            var img = event.target.files[0];
	            var imgName = img.name;
	            var type = img.type;

	            var reader = new FileReader();
	            reader.readAsDataURL(event.target.files[0]);

	            reader.onload = function (e) {
	                _this2.setState({
	                    uploadedImage: e.target.result,
	                    selectedFile: URL.createObjectURL(img),
	                    selectedFileType: type,
	                    fileName: imgName
	                });
	            };
	        }
	    }, {
	        key: 'onClickHandled',
	        value: function onClickHandled(event) {
	            if (event == 'Ok') {

	                // сохраняем
	                if (this.state.selectedFile) {
	                    this.fecthData();
	                }
	            }

	            this.setState({ show: !this.state.show });
	        }
	    }, {
	        key: 'fecthData',
	        value: function fecthData() {
	            var _this3 = this;

	            var user = this.props.store.getState().user;
	            var data = new FormData();
	            var image = new File([this.state.uploadedImage], this.state.fileName);
	            data.append('file', image, this.state.fileName);
	            data.append('kood', this.state.kood);
	            data.append('id', this.state.id);
	            data.append('description', this.state.description);
	            data.append('author_id', this.state.author_id ? this.state.author_id : user.id);

	            fetchData.fetchDataPost('/upload', data, this.state.selectedFileType).then(function (result) {
	                _this3.setState({ id: result.data.result });
	                var store = _this3.props.store;
	                store.dispatch({ type: 'addPicture', picture: result.data.docdata });
	                // вызвать перегрузку картин
	                _this3.props.btnClickEventHandler('saved', result.data.result);
	            });
	        }

	        /**
	         * вернет обьект с картиной
	         * @returns {T[]|Array}
	         */

	    }, {
	        key: 'getPictureFromStore',
	        value: function getPictureFromStore() {
	            var store = this.props.store;
	            if (!store) {
	                return [];
	            }
	            var pictures = store.getState().pictures.pictures;
	            var pictureId = store.getState().statuses.pictureId;
	            return pictures.filter(function (row) {
	                return row.id === pictureId;
	            });
	        }
	    }]);

	    return Picture;
	}(React.PureComponent);

	Picture.propTypes = {
	    disabled: PropTypes.bool,
	    show: PropTypes.bool
	};

	Picture.defaultProps = {
	    disabled: false.valueOf(),
	    pages: []
	};

	module.exports = Picture;

/***/ }),
/* 380 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var PropTypes = __webpack_require__(11);

	var React = __webpack_require__(10),
	    styles = __webpack_require__(174);
	var fetchData = __webpack_require__(41);

	//const store = require('./../../store');

	var ModalPage = __webpack_require__(171);

	var Deal = function (_React$PureComponent) {
	    _inherits(Deal, _React$PureComponent);

	    function Deal(props) {
	        _classCallCheck(this, Deal);

	        var _this = _possibleConstructorReturn(this, (Deal.__proto__ || Object.getPrototypeOf(Deal)).call(this, props));

	        _this.state = {
	            selectedFile: '',
	            selectedFiles: null,
	            selectedFileType: '',
	            uploadedImage: null,
	            fileName: '',
	            show: _this.props.show,
	            id: _this.props.id,
	            lastId: 0,
	            kood: _this.props.kood,
	            description: _this.props.description,
	            author_id: 0,
	            author: '',
	            price: _this.props.price
	        };
	        _this.onClickHandled = _this.onClickHandled.bind(_this);
	        //        this.onChangeHandler = this.onChangeHandler.bind(this);
	        _this.fecthData = _this.fecthData.bind(_this);
	        _this.onChangeInput = _this.onChangeInput.bind(_this);
	        _this.getPictureFromStore = _this.getPictureFromStore.bind(_this);

	        //подписываемся на изменения в сторе
	        var store = _this.props.store;
	        if (store) {
	            store.subscribe(function () {
	                var isPictureShow = store.getState().statuses.isPictureShow;
	                var pictureId = store.getState().statuses.pictureId;
	                var picture = _this.getPictureFromStore();

	                _this.setState({
	                    show: isPictureShow,
	                    id: pictureId,
	                    kood: picture[0].kood,
	                    description: picture[0].description,
	                    selectedFile: 'data:image/jpeg;base64,/' + picture[0].file,
	                    fileName: picture[0].name,
	                    author_id: picture[0].author_id,
	                    price: Number(picture[0].price) * 2
	                }, function () {
	                    _this.forceUpdate();
	                });
	            });
	        }
	        return _this;
	    }

	    _createClass(Deal, [{
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            // редактирование
	            var picture = this.getPictureFromStore();

	            if (!picture || !picture.length) {
	                return;
	            }

	            console.log('deal comp did mount', picture);
	            this.setState({
	                kood: picture[0].kood,
	                description: picture[0].description,
	                selectedFile: 'data:image/jpeg;base64,/' + picture[0].file,
	                id: picture[0].id,
	                fileName: picture[0].name,
	                author_id: picture[0].author_id,
	                price: Number(picture[0].price) * 2
	            });
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            return React.createElement(
	                ModalPage,
	                { show: this.state.show,
	                    modalPageBtnClick: this.onClickHandled },
	                React.createElement(
	                    'div',
	                    { style: styles.docRow },
	                    React.createElement(
	                        'div',
	                        { style: styles.pictureFrame },
	                        this.state.selectedFile ? React.createElement('img', {
	                            src: this.state.selectedFile,
	                            alt: 'Image',
	                            key: 'img_1',
	                            style: styles.picture
	                        }) : null
	                    ),
	                    React.createElement(
	                        'div',
	                        { style: styles.docColumn },
	                        React.createElement(
	                            'label',
	                            null,
	                            'Kood: '
	                        ),
	                        React.createElement('input', { type: 'text',
	                            id: 'kood',
	                            name: 'kood',
	                            value: this.state.kood || '',
	                            disabled: true
	                        }),
	                        React.createElement(
	                            'label',
	                            null,
	                            'Description: '
	                        ),
	                        React.createElement('input', { type: 'text',
	                            id: 'description',
	                            name: 'description',
	                            value: this.state.description || '',
	                            disabled: true
	                        }),
	                        React.createElement(
	                            'label',
	                            null,
	                            'New price: '
	                        ),
	                        React.createElement('input', { type: 'number',
	                            ref: 'price',
	                            value: this.state.price || 0,
	                            id: 'price',
	                            name: 'price',
	                            onChange: this.onChangeInput })
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
	                case 'price':
	                    this.setState({ price: fieldValue });
	                    break;
	            }
	        }
	    }, {
	        key: 'onClickHandled',
	        value: function onClickHandled(event) {
	            if (event == 'Ok') {
	                // сохраняем
	                this.fecthData();
	            }

	            var store = this.props.store;
	            // меняем статус окна
	            store.dispatch({ type: 'isPictureShow', isPictureShow: false });
	        }
	    }, {
	        key: 'fecthData',
	        value: function fecthData() {
	            var _this2 = this;

	            var data = {
	                picture_id: this.state.id,
	                price: this.state.price,
	                user: this.props.store.getState().statuses.user
	            };
	            fetchData.fetchDataPost('/main/newDeal', data).then(function (result) {
	                _this2.setState({ id: result.data.result });
	                var store = _this2.props.store;
	                // вызовем перегрузку
	                store.dispatch({ type: 'reloadActivePageComponent', reloadActivePageComponent: true });
	            });
	        }

	        /**
	         * вернет обьект с картиной
	         * @returns {T[]|Array}
	         */

	    }, {
	        key: 'getPictureFromStore',
	        value: function getPictureFromStore() {
	            console.log('getPictureFromStore');
	            var store = this.props.store;
	            if (!store) {
	                return [];
	            }
	            var pictures = store.getState().pictures.pictures;
	            var pictureId = store.getState().statuses.pictureId;
	            if (!pictureId || !pictures || !pictures.length) {
	                return null;
	            }
	            return pictures.filter(function (row) {
	                return row.id == pictureId;
	            });
	        }
	    }, {
	        key: 'loadPicture',
	        value: function loadPicture() {
	            //        let source = require('./../../../public/images/art_1.jpg').default
	            return source;
	        }
	    }]);

	    return Deal;
	}(React.PureComponent);

	Deal.propTypes = {
	    disabled: PropTypes.bool,
	    show: PropTypes.bool
	};

	Deal.defaultProps = {
	    disabled: false.valueOf(),
	    pages: []
	};

	module.exports = Deal;

/***/ }),
/* 381 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var React = __webpack_require__(10);
	var styles = __webpack_require__(174);
	var _fetchData = __webpack_require__(41);
	var AuthorComponent = __webpack_require__(382);

	/**
	 * Класс реализует документ справочника признаков.
	 */

	var UserApplicationsComponent = function (_React$PureComponent) {
	    _inherits(UserApplicationsComponent, _React$PureComponent);

	    function UserApplicationsComponent(props) {
	        _classCallCheck(this, UserApplicationsComponent);

	        var _this = _possibleConstructorReturn(this, (UserApplicationsComponent.__proto__ || Object.getPrototypeOf(UserApplicationsComponent)).call(this, props));

	        _this.state = {
	            warning: null,
	            initLoad: false,
	            userApplications: [],
	            user: {},
	            info: null,
	            editDocument: false

	        };
	        _this.btnClickHandler = _this.btnClickHandler.bind(_this);
	        _this.renderGridComponent = _this.renderGridComponent.bind(_this);
	        _this.fetchData = _this.fetchData.bind(_this);

	        //подписываемся на изменения в сторе
	        var store = _this.props.store;
	        if (store) {
	            store.subscribe(function () {
	                var userApplications = store.getState().userApplications.userApplications;
	                var user = store.getState().statuses.user;

	                if (JSON.stringify(userApplications) !== JSON.stringify(_this.state.userApplications) || JSON.stringify(user) !== JSON.stringify(_this.state.user)) {
	                    _this.setState({
	                        userApplications: userApplications,
	                        user: user
	                    }, function () {
	                        _this.forceUpdate();
	                    });
	                }
	            });
	        }
	        return _this;
	    }

	    _createClass(UserApplicationsComponent, [{
	        key: 'render',
	        value: function render() {
	            var Component = void 0;
	            var userApplications = this.state.userApplications;
	            if (!userApplications.length && this.props.store) {
	                // подгрузим из стора
	                userApplications = this.props.store.getState().userApplications.userApplications;
	            }
	            if (userApplications && userApplications.length) {
	                Component = this.renderGridComponent(userApplications);
	            } else {
	                Component = React.createElement(
	                    'div',
	                    null,
	                    'Data are loading'
	                );
	            }
	            return Component;
	        }
	    }, {
	        key: 'renderGridComponent',
	        value: function renderGridComponent(data) {
	            var _this2 = this;

	            console.log('renderGridComponent');

	            var user = this.state.user;

	            if (!user) {
	                // подгрузим из стора
	                user = this.props.store.getState().statuses.user;
	            }

	            var logedIn = user && user.id ? true : false;
	            var isAdmin = user && user.is_admin ? true : false;

	            return React.createElement(
	                'div',
	                { style: styles.grid.gridContainer },
	                this.state.info ? React.createElement(
	                    'div',
	                    null,
	                    React.createElement(
	                        'span',
	                        null,
	                        this.state.info
	                    )
	                ) : null,
	                React.createElement(
	                    'table',
	                    { ref: 'dataGridTable', style: styles.grid.mainTable, onKeyPress: this.handleKeyDown },
	                    React.createElement(
	                        'tbody',
	                        null,
	                        React.createElement(
	                            'tr',
	                            null,
	                            React.createElement(
	                                'th',
	                                { style: styles.grid.mainTable.th },
	                                'Login'
	                            ),
	                            React.createElement(
	                                'th',
	                                { style: styles.grid.mainTable.th },
	                                'User name'
	                            ),
	                            React.createElement(
	                                'th',
	                                { style: styles.grid.mainTable.th },
	                                'Email'
	                            ),
	                            React.createElement(
	                                'th',
	                                { style: styles.grid.mainTable.th },
	                                'Status'
	                            )
	                        )
	                    ),
	                    data.map(function (row) {
	                        return React.createElement(
	                            'tr',
	                            null,
	                            React.createElement(
	                                'td',
	                                { style: styles.grid.mainTable.td },
	                                row.kasutaja
	                            ),
	                            React.createElement(
	                                'td',
	                                { style: styles.grid.mainTable.td },
	                                row.nimi
	                            ),
	                            React.createElement(
	                                'td',
	                                { style: styles.grid.mainTable.td },
	                                row.email
	                            ),
	                            React.createElement(
	                                'td',
	                                { style: styles.grid.mainTable.td },
	                                row.status_name
	                            ),
	                            React.createElement(
	                                'td',
	                                { style: styles.grid.mainTable.tdButtons },
	                                logedIn ? React.createElement(
	                                    'button',
	                                    {
	                                        style: styles.btnEdit,
	                                        onClick: function onClick() {
	                                            return _this2.btnClickHandler('edit', row.id);
	                                        },
	                                        onDoubleClick: function onDoubleClick() {
	                                            return _this2.btnClickHandler('edit', row.id);
	                                        }
	                                    },
	                                    React.createElement('img', { ref: 'image', src: styles.icons['edit'] })
	                                ) : null,
	                                isAdmin && row.status === 0 ? React.createElement(
	                                    'button',
	                                    {
	                                        style: styles.button_accept,
	                                        onClick: function onClick() {
	                                            return _this2.btnClickHandler('accept', row.id);
	                                        },
	                                        onDoubleClick: function onDoubleClick() {
	                                            return _this2.btnClickHandler('accept', row.id);
	                                        }
	                                    },
	                                    React.createElement('img', { ref: 'image', src: styles.icons['ok'] })
	                                ) : null,
	                                isAdmin ? React.createElement(
	                                    'button',
	                                    {
	                                        style: styles.button_delete,
	                                        onClick: function onClick() {
	                                            return _this2.btnClickHandler('delete', row.id);
	                                        },
	                                        onDoubleClick: function onDoubleClick() {
	                                            return _this2.btnClickHandler('delete', row.id);
	                                        }
	                                    },
	                                    React.createElement('img', { ref: 'image', src: styles.icons['delete'] })
	                                ) : null
	                            )
	                        );
	                    })
	                ),
	                this.state.editDocument ? React.createElement(AuthorComponent, {
	                    store: this.props.store,
	                    show: true,
	                    btnClickEventHandler: this.props.btnClickEventHandler
	                }) : null
	            );
	        }

	        /**
	         * Обработка события клика по кнопкам
	         * @param event
	         * @param applicationId
	         */

	    }, {
	        key: 'btnClickHandler',
	        value: function btnClickHandler(event, applicationId) {
	            if (event == 'delete' || event == 'accept') {
	                this.fetchData(event, applicationId);
	            }
	            if (event == 'edit') {
	                // сохраняем ид автора и пишем его в стор. Открываем на редактирование
	                this.props.store.dispatch({ type: 'pictureId', pictureId: applicationId });
	                this.props.store.dispatch({ type: 'isPictureShow', isPictureShow: true });
	                // isPictureShow
	                this.setState({ editDocument: true, applicationId: applicationId });
	            }
	        }

	        /**
	         * загрузка данных
	         * @returns {*|Promise<AxiosResponse<unknown> | never>}
	         */

	    }, {
	        key: 'fetchData',
	        value: function fetchData(event, applicationId) {
	            var _this3 = this;

	            if (event !== 'accept') {
	                return;
	            }
	            var URL = '/main/taotlus_accept/';

	            var params = { id: applicationId, event: event };
	            return new Promise(function (resolved, rejected) {
	                _fetchData['fetchDataPost'](URL, params).then(function (response) {
	                    // error handling
	                    if (response.status === 200) {
	                        _this3.setState({ info: 'Update succefull' });
	                        if (_this3.props.btnClickEventHandler) {
	                            // дадим на верх команду на релоад
	                            _this3.props.btnClickEventHandler('reload');
	                        }
	                        resolved(response.data);
	                    } else {
	                        console.error('status !== 200');
	                        _this3.setState({ info: 'Update with error' });
	                        return rejected();
	                    }
	                }).catch(function (error) {
	                    console.error('fetch error', error);
	                    _this3.setState({ info: 'Update with error ' + error });
	                    return rejected(error);
	                });
	            });
	        }
	    }]);

	    return UserApplicationsComponent;
	}(React.PureComponent);

	module.exports = UserApplicationsComponent;

/***/ }),
/* 382 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var PropTypes = __webpack_require__(11);

	var React = __webpack_require__(10),
	    styles = __webpack_require__(174);
	var fetchData = __webpack_require__(41);

	//const store = require('./../../store');

	var ModalPage = __webpack_require__(171);

	var Artist = function (_React$PureComponent) {
	    _inherits(Artist, _React$PureComponent);

	    function Artist(props) {
	        _classCallCheck(this, Artist);

	        var _this = _possibleConstructorReturn(this, (Artist.__proto__ || Object.getPrototypeOf(Artist)).call(this, props));

	        _this.state = {
	            kasutaja: '',
	            login: '',
	            code: '',
	            name: '',
	            id: 0,
	            email: '',
	            aadress: '',
	            continent: '',
	            region: '',
	            city: '',
	            show: true,
	            isEditeMode: false
	        };
	        _this.onClickHandled = _this.onClickHandled.bind(_this);
	        _this.fecthData = _this.fecthData.bind(_this);
	        _this.onChangeInput = _this.onChangeInput.bind(_this);
	        _this.getAuthorFromStore = _this.getAuthorFromStore.bind(_this);

	        //подписываемся на изменения в сторе
	        var store = _this.props.store;
	        if (store) {
	            store.subscribe(function () {
	                var isPictureShow = store.getState().statuses.isPictureShow;
	                var author = _this.getAuthorFromStore();

	                _this.setState({
	                    show: isPictureShow,
	                    login: author[0].login,
	                    nimi: author[0].nimi,
	                    id: author[0].id,
	                    email: author[0].email,
	                    aadress: author[0].aadress,
	                    continent: author[0].continent,
	                    region: author[0].region,
	                    city: author[0].city
	                }, function () {
	                    _this.forceUpdate();
	                });
	            });
	        }
	        return _this;
	    }

	    _createClass(Artist, [{
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            // редактирование
	            var author = this.getAuthorFromStore();

	            if (!author || !author.length) {
	                return;
	            }

	            console.log('props.id', this.props.id);
	            this.setState({
	                login: author[0].login,
	                code: author[0].code,
	                name: author[0].name,
	                id: author[0].id,
	                email: author[0].email,
	                aadress: author[0].aadress,
	                continent: author[0].continent,
	                region: author[0].region,
	                city: author[0].city,
	                show: true
	            });
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var show = this.props.store.getState().statuses.isPictureShow;
	            var author = this.getAuthorFromStore()[0];
	            if (this.state.isEditeMode) {
	                author = this.state;
	            }
	            return React.createElement(
	                ModalPage,
	                { show: show,
	                    modalPageBtnClick: this.onClickHandled },
	                React.createElement(
	                    'div',
	                    { style: styles.docRow },
	                    React.createElement(
	                        'label',
	                        { style: styles.label },
	                        'Login: '
	                    ),
	                    React.createElement('input', { type: 'text',
	                        id: 'login',
	                        name: 'login',
	                        disabled: true,
	                        value: author.login || ''
	                    })
	                ),
	                React.createElement(
	                    'div',
	                    { style: styles.docRow },
	                    React.createElement(
	                        'label',
	                        { style: styles.label },
	                        'Code: '
	                    ),
	                    React.createElement('input', { type: 'text',
	                        id: 'code',
	                        name: 'code',
	                        onChange: this.onChangeInput,
	                        value: author.code || ''
	                    })
	                ),
	                React.createElement(
	                    'div',
	                    { style: styles.docRow },
	                    React.createElement(
	                        'label',
	                        { style: styles.label },
	                        'Name: '
	                    ),
	                    React.createElement('input', { type: 'text',
	                        id: 'name',
	                        name: 'name',
	                        onChange: this.onChangeInput,
	                        value: author.name || ''
	                    })
	                ),
	                React.createElement(
	                    'div',
	                    { style: styles.docRow },
	                    React.createElement(
	                        'label',
	                        { style: styles.label },
	                        'Email: '
	                    ),
	                    React.createElement('input', { type: 'text',
	                        ref: 'email',
	                        value: author.email || '',
	                        id: 'email',
	                        name: 'email',
	                        onChange: this.onChangeInput })
	                ),
	                React.createElement(
	                    'div',
	                    { style: styles.docRow },
	                    React.createElement(
	                        'label',
	                        { style: styles.label },
	                        'Address: '
	                    ),
	                    React.createElement('input', { type: 'text',
	                        ref: 'aadress',
	                        value: author.aadress || '',
	                        id: 'aadress',
	                        name: 'aadress',
	                        onChange: this.onChangeInput })
	                ),
	                React.createElement(
	                    'div',
	                    { style: styles.docRow },
	                    React.createElement(
	                        'label',
	                        { style: styles.label },
	                        'Continent: '
	                    ),
	                    React.createElement(
	                        'select',
	                        { ref: 'select',
	                            style: styles.select,
	                            value: author.continent || '',
	                            id: 'continent',
	                            name: 'continent',
	                            onChange: this.onChangeInput },
	                        this.props.store.getState().statuses.continents.map(function (item, index) {
	                            return React.createElement(
	                                'option',
	                                { value: item },
	                                item
	                            );
	                        })
	                    )
	                ),
	                React.createElement(
	                    'div',
	                    { style: styles.docRow },
	                    React.createElement(
	                        'label',
	                        { style: styles.label },
	                        'Region: '
	                    ),
	                    React.createElement(
	                        'select',
	                        { ref: 'select',
	                            style: styles.select,
	                            value: author.region || '',
	                            id: 'region',
	                            name: 'region',
	                            onChange: this.onChangeInput },
	                        this.props.store.getState().statuses.regions.map(function (item, index) {
	                            return React.createElement(
	                                'option',
	                                { value: item },
	                                item
	                            );
	                        })
	                    )
	                ),
	                React.createElement(
	                    'div',
	                    { style: styles.docRow },
	                    React.createElement(
	                        'label',
	                        { style: styles.label },
	                        'City: '
	                    ),
	                    React.createElement(
	                        'select',
	                        { ref: 'city',
	                            style: styles.select,
	                            value: author.city || '',
	                            id: 'city',
	                            name: 'city',
	                            onChange: this.onChangeInput },
	                        this.props.store.getState().statuses.cities.map(function (item, index) {
	                            return React.createElement(
	                                'option',
	                                { value: item },
	                                item
	                            );
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
	            var state = {};
	            state[fieldName] = fieldValue;
	            state = _extends({}, this.state, { state: state });
	            console.log('fieldName', fieldValue, state);
	            switch (fieldName) {
	                case 'code':
	                    this.setState({ code: fieldValue, isEditeMode: true });
	                    break;
	                case 'name':
	                    this.setState({ name: fieldValue, isEditeMode: true });
	                    break;
	                case 'aadress':
	                    this.setState({ aadress: fieldValue, isEditeMode: true });
	                    break;
	                case 'tel':
	                    this.setState({ tel: fieldValue, isEditeMode: true });
	                    break;
	                case 'email':
	                    this.setState({ email: fieldValue, isEditeMode: true });
	                    break;
	                case 'continent':
	                    this.setState({ continent: fieldValue, isEditeMode: true });
	                    break;
	                case 'region':
	                    this.setState({ region: fieldValue, isEditeMode: true });
	                case 'city':
	                    this.setState({ city: fieldValue, isEditeMode: true });
	                    break;
	                default:
	                    break;
	            }
	        }
	    }, {
	        key: 'onClickHandled',
	        value: function onClickHandled(event) {
	            if (event == 'Ok') {
	                // сохраняем
	                this.fecthData();
	            }

	            this.setState({ show: false });
	            var store = this.props.store;
	            // меняем статус окна
	            store.dispatch({ type: 'isPictureShow', isPictureShow: false });
	        }
	    }, {
	        key: 'fecthData',
	        value: function fecthData() {
	            var _this2 = this;

	            var data = {
	                id: this.state.id,
	                code: this.state.code,
	                name: this.state.name,
	                email: this.state.email,
	                aadress: this.state.aadress,
	                continent: this.state.continent,
	                region: this.state.region,
	                city: this.state.city,
	                user: this.props.store.getState().statuses.user
	            };
	            console.log('fetch state', data);
	            fetchData.fetchDataPost('/main/save_author', data).then(function (result) {
	                _this2.setState({ id: result.data.result });
	                var store = _this2.props.store;
	                // вызовем перегрузку
	                store.dispatch({ type: 'reloadActivePageComponent', reloadActivePageComponent: true });
	            });
	        }

	        /**
	         * вернет обьект с картиной
	         * @returns {T[]|Array}
	         */

	    }, {
	        key: 'getAuthorFromStore',
	        value: function getAuthorFromStore() {
	            var store = this.props.store;
	            if (!store) {
	                return [];
	            }
	            var authorId = store.getState().statuses.pictureId; // получим ид документа

	            var authors = store.getState().authors;
	            console.log('authorId', authorId, authors);

	            return authors.filter(function (row) {
	                return row.id == authorId;
	            });
	        }
	    }]);

	    return Artist;
	}(React.PureComponent);

	Artist.propTypes = {
	    disabled: PropTypes.bool,
	    show: PropTypes.bool
	};

	Artist.defaultProps = {
	    disabled: false.valueOf(),
	    pages: []
	};

	module.exports = Artist;

/***/ }),
/* 383 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var React = __webpack_require__(10);
	var styles = __webpack_require__(174);
	var _fetchData = __webpack_require__(41);

	/**
	 * Класс реализует документ справочника признаков.
	 */

	var DealsRegisterComponent = function (_React$PureComponent) {
	    _inherits(DealsRegisterComponent, _React$PureComponent);

	    function DealsRegisterComponent(props) {
	        _classCallCheck(this, DealsRegisterComponent);

	        var _this = _possibleConstructorReturn(this, (DealsRegisterComponent.__proto__ || Object.getPrototypeOf(DealsRegisterComponent)).call(this, props));

	        _this.state = {
	            warning: null,
	            initLoad: false,
	            deals: [],
	            user: {},
	            info: null

	        };
	        _this.btnClickHandler = _this.btnClickHandler.bind(_this);
	        _this.renderGridComponent = _this.renderGridComponent.bind(_this);
	        _this.fetchData = _this.fetchData.bind(_this);

	        //подписываемся на изменения в сторе
	        var store = _this.props.store;
	        if (store) {
	            store.subscribe(function () {
	                var deals = store.getState().deals.deals;
	                var user = store.getState().statuses.user;

	                if (JSON.stringify(deals) !== JSON.stringify(_this.state.deals) || JSON.stringify(user) !== JSON.stringify(_this.state.user)) {
	                    _this.setState({
	                        deals: deals,
	                        user: user
	                    }, function () {
	                        _this.forceUpdate();
	                    });
	                }
	            });
	        }
	        return _this;
	    }

	    /*
	        // will update state if props changed
	        static getDerivedStateFromProps(nextProps, prevState) {
	            if (nextProps.deals !== prevState.deals ||
	                JSON.stringify(nextProps.user) !== JSON.stringify(prevState.user)) {
	                return {value: nextProps.deals, user: nextProps.user};
	            } else return null;
	        }
	    */

	    _createClass(DealsRegisterComponent, [{
	        key: 'render',
	        value: function render() {
	            var Component = void 0;
	            var deals = this.state.deals;
	            if (!deals.length && this.props.store) {
	                // подгрузим из стора
	                deals = this.props.store.getState().deals.deals;
	            }
	            if (deals && deals.length) {
	                Component = this.renderGridComponent(deals);
	            } else {
	                Component = React.createElement(
	                    'div',
	                    null,
	                    'Data are loading'
	                );
	            }
	            return Component;
	        }
	    }, {
	        key: 'renderGridComponent',
	        value: function renderGridComponent(data) {
	            var _this2 = this;

	            var user = this.state.user;

	            if (!user) {
	                // подгрузим из стора
	                user = this.props.store.getState().statuses.user;
	            }

	            var logedIn = user && user.id ? true : false;
	            var isAdmin = user && user.is_admin ? true : false;

	            return React.createElement(
	                'div',
	                { style: styles.grid.gridContainer },
	                this.state.info ? React.createElement(
	                    'div',
	                    null,
	                    React.createElement(
	                        'span',
	                        null,
	                        this.state.info
	                    )
	                ) : null,
	                React.createElement(
	                    'table',
	                    { ref: 'dataGridTable', style: styles.grid.mainTable, onKeyPress: this.handleKeyDown },
	                    React.createElement(
	                        'tbody',
	                        null,
	                        React.createElement(
	                            'tr',
	                            null,
	                            React.createElement(
	                                'th',
	                                { style: styles.grid.mainTable.th },
	                                'kood'
	                            ),
	                            React.createElement(
	                                'th',
	                                { style: styles.grid.mainTable.th },
	                                'Description'
	                            ),
	                            React.createElement(
	                                'th',
	                                { style: styles.grid.mainTable.th },
	                                'Deal date'
	                            ),
	                            React.createElement(
	                                'th',
	                                { style: styles.grid.mainTable.th },
	                                'Client'
	                            ),
	                            React.createElement(
	                                'th',
	                                { style: styles.grid.mainTable.th },
	                                'Price'
	                            ),
	                            React.createElement(
	                                'th',
	                                { style: styles.grid.mainTable.th },
	                                'Status'
	                            )
	                        )
	                    ),
	                    data.map(function (row, rowIndex) {
	                        return React.createElement(
	                            'tr',
	                            { onClick: _this2.handleCellClick.bind(_this2, rowIndex)
	                            },
	                            React.createElement(
	                                'td',
	                                { style: styles.grid.mainTable.td },
	                                row.kood
	                            ),
	                            React.createElement(
	                                'td',
	                                { style: styles.grid.mainTable.td },
	                                row.description
	                            ),
	                            React.createElement(
	                                'td',
	                                { style: styles.grid.mainTable.td },
	                                row.deal_date
	                            ),
	                            React.createElement(
	                                'td',
	                                { style: styles.grid.mainTable.td },
	                                row.client
	                            ),
	                            React.createElement(
	                                'td',
	                                { style: styles.grid.mainTable.td },
	                                row.price
	                            ),
	                            React.createElement(
	                                'td',
	                                { style: styles.grid.mainTable.td },
	                                row.status_name
	                            ),
	                            React.createElement(
	                                'td',
	                                { style: styles.grid.mainTable.tdButtons },
	                                isAdmin && row.status === 0 ? React.createElement(
	                                    'button',
	                                    {
	                                        style: styles.button_accept,
	                                        onClick: function onClick() {
	                                            _this2.btnClickHandler('accept', rowIndex);
	                                        },
	                                        onDoubleClick: function onDoubleClick() {
	                                            return _this2.btnClickHandler('accept', rowIndex);
	                                        }
	                                    },
	                                    React.createElement('img', { ref: 'image', src: styles.icons['ok'] })
	                                ) : null,
	                                isAdmin && (row.status === 1 || row.status === 0) ? React.createElement(
	                                    'button',
	                                    {
	                                        style: styles.button_delete,
	                                        onClick: function onClick() {
	                                            return _this2.btnClickHandler('delete', rowIndex);
	                                        },
	                                        onDoubleClick: function onDoubleClick() {
	                                            return _this2.btnClickHandler('delete', rowIndex);
	                                        }
	                                    },
	                                    React.createElement('img', { ref: 'image', src: styles.icons['delete'] })
	                                ) : null
	                            )
	                        );
	                    })
	                )
	            );
	        }
	    }, {
	        key: 'handleCellClick',
	        value: function handleCellClick(idx) {
	            console.log('handleCellClick', idx);
	        }
	    }, {
	        key: 'btnClickHandler',
	        value: function btnClickHandler(event, rowIndex) {
	            var data = this.props.store.getState().deals.deals;
	            var row = data[rowIndex];

	            console.log('btnClick', event, row);
	            this.fetchData(event, row.id);
	        }

	        /**
	         * загрузка данных
	         * @returns {*|Promise<AxiosResponse<unknown> | never>}
	         */

	    }, {
	        key: 'fetchData',
	        value: function fetchData(event, dealId) {
	            var _this3 = this;

	            var URL = '/main/deal_accept/';
	            var user = this.props.store.getState().statuses.user;
	            var params = { id: dealId, event: event, user: user };

	            return new Promise(function (resolved, rejected) {
	                _fetchData['fetchDataPost'](URL, params).then(function (response) {
	                    // error handling
	                    if (response.status === 200) {
	                        _this3.setState({ info: 'Update succefull' });
	                        if (_this3.props.btnClickEventHandler) {
	                            // дадим на верх команду на релоад
	                            _this3.props.btnClickEventHandler('reload');
	                        }
	                        resolved(response.data);
	                    } else {
	                        console.error('status !== 200');
	                        _this3.setState({ info: 'Update with error' });
	                        return rejected();
	                    }
	                }).catch(function (error) {
	                    console.error('fetch error', error);
	                    _this3.setState({ info: 'Update with error ' + error });
	                    return rejected(error);
	                });
	            });
	        }
	    }]);

	    return DealsRegisterComponent;
	}(React.PureComponent);

	module.exports = DealsRegisterComponent;

/***/ }),
/* 384 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var React = __webpack_require__(10);
	var styles = __webpack_require__(174);
	var fetchData = __webpack_require__(41);
	var AuthorComponent = __webpack_require__(382);

	/**
	 * Класс реализует документ справочника признаков.
	 */

	var AuthorsRegisterComponent = function (_React$PureComponent) {
	    _inherits(AuthorsRegisterComponent, _React$PureComponent);

	    function AuthorsRegisterComponent(props) {
	        _classCallCheck(this, AuthorsRegisterComponent);

	        var _this = _possibleConstructorReturn(this, (AuthorsRegisterComponent.__proto__ || Object.getPrototypeOf(AuthorsRegisterComponent)).call(this, props));

	        _this.state = {
	            warning: null,
	            initLoad: false,
	            authors: [],
	            authorId: null,
	            user: {},
	            info: null

	        };
	        _this.btnClickHandler = _this.btnClickHandler.bind(_this);
	        _this.renderGridComponent = _this.renderGridComponent.bind(_this);
	        //        this.fetchData = this.fetchData.bind(this);

	        //подписываемся на изменения в сторе
	        var store = _this.props.store;
	        if (store) {
	            store.subscribe(function () {
	                var authors = store.getState().authors;
	                var user = store.getState().statuses.user;

	                if (JSON.stringify(authors) !== JSON.stringify(_this.state.authors) || JSON.stringify(user) !== JSON.stringify(_this.state.user)) {
	                    _this.setState({
	                        authors: authors,
	                        user: user
	                    }, function () {
	                        _this.forceUpdate();
	                    });
	                }
	            });
	        }
	        return _this;
	    }

	    // will update state if props changed


	    _createClass(AuthorsRegisterComponent, [{
	        key: 'render',
	        value: function render() {
	            var Component = void 0;
	            var authors = [];
	            var authorId = null;
	            if (!authors.length && this.props.store) {
	                // подгрузим из стора
	                var store = this.props.store;
	                authors = store.getState().authors;
	                authorId = store.getState().statuses.pictureId;
	            }
	            if (authors && authors.length) {
	                Component = this.renderGridComponent(authors);
	            } else {
	                Component = React.createElement(
	                    'div',
	                    null,
	                    'Data are loading'
	                );
	            }
	            return React.createElement(
	                'div',
	                null,
	                Component,
	                this.state.editDocument ? React.createElement(AuthorComponent, {
	                    store: this.props.store,
	                    id: authorId,
	                    show: true,
	                    btnClickEventHandler: this.props.btnClickEventHandler
	                }) : null
	            );
	        }
	    }, {
	        key: 'renderGridComponent',
	        value: function renderGridComponent(data) {
	            var _this2 = this;

	            var user = this.state.user;

	            if (!user) {
	                // подгрузим из стора
	                user = this.props.store.getState().statuses.user;
	            }

	            var logedIn = user && user.id ? true : false;
	            var isAdmin = user && user.is_admin ? true : false;

	            return React.createElement(
	                'div',
	                { style: styles.grid.gridContainer },
	                this.state.info ? React.createElement(
	                    'div',
	                    null,
	                    React.createElement(
	                        'span',
	                        null,
	                        this.state.info
	                    )
	                ) : null,
	                React.createElement(
	                    'table',
	                    { ref: 'dataGridTable', style: styles.grid.mainTable, onKeyPress: this.handleKeyDown },
	                    React.createElement(
	                        'tbody',
	                        null,
	                        React.createElement(
	                            'tr',
	                            null,
	                            React.createElement(
	                                'th',
	                                { style: styles.grid.mainTable.th },
	                                'Login'
	                            ),
	                            React.createElement(
	                                'th',
	                                { style: styles.grid.mainTable.th },
	                                'Code'
	                            ),
	                            React.createElement(
	                                'th',
	                                { style: styles.grid.mainTable.th },
	                                'Name'
	                            ),
	                            React.createElement(
	                                'th',
	                                { style: styles.grid.mainTable.th },
	                                'Phone'
	                            ),
	                            React.createElement(
	                                'th',
	                                { style: styles.grid.mainTable.th },
	                                'Email'
	                            )
	                        )
	                    ),
	                    data.map(function (row) {
	                        console.log('row', row);
	                        return React.createElement(
	                            'tr',
	                            null,
	                            React.createElement(
	                                'td',
	                                { style: styles.grid.mainTable.td },
	                                row.login
	                            ),
	                            React.createElement(
	                                'td',
	                                { style: styles.grid.mainTable.td },
	                                row.code
	                            ),
	                            React.createElement(
	                                'td',
	                                { style: styles.grid.mainTable.td },
	                                row.name
	                            ),
	                            React.createElement(
	                                'td',
	                                { style: styles.grid.mainTable.td },
	                                row.phone
	                            ),
	                            React.createElement(
	                                'td',
	                                { style: styles.grid.mainTable.td },
	                                row.email
	                            ),
	                            React.createElement(
	                                'td',
	                                { style: styles.grid.mainTable.td },
	                                logedIn ? React.createElement(
	                                    'button',
	                                    {
	                                        style: styles.btnEdit,
	                                        onClick: function onClick() {
	                                            return _this2.btnClickHandler('edit', row.id);
	                                        },
	                                        onDoubleClick: function onDoubleClick() {
	                                            return _this2.btnClickHandler('edit', row.id);
	                                        }
	                                    },
	                                    React.createElement('img', { ref: 'image', src: styles.icons['edit'] })
	                                ) : null
	                            )
	                        );
	                    })
	                )
	            );
	        }
	    }, {
	        key: 'btnClickHandler',
	        value: function btnClickHandler(event, authorId) {
	            console.log('btnClickHandler', event, authorId);
	            this.props.store.dispatch({ type: 'pictureId', pictureId: authorId });
	            switch (event) {
	                case 'btnAdd':
	                    // новая картинка
	                    break;
	                case 'edit':
	                    // меняем статус окна
	                    this.props.store.dispatch({ type: 'isPictureShow', isPictureShow: true });
	                    this.setState({ editDocument: true, authorId: authorId });
	                    break;
	                case 'Cancel':
	                    this.setState({ editDocument: false, authorId: null });
	                    break;
	                case 'saved':
	                    this.setState({ editDocument: false, authorId: authorId });
	                    break;

	            }
	        }

	        /*
	            /!**
	             * загрузка данных
	             * @returns {*|Promise<AxiosResponse<unknown> | never>}
	             *!/
	            fetchData(event, dealId) {
	                let URL = `/main/deal_accept/`;
	                let user = this.props.store.getState().statuses.user;
	                let params = {id: dealId, event: event, user: user};
	                return new Promise((resolved, rejected) => {
	                        fetchData['fetchDataPost'](URL, params).then(response => {
	                            // error handling
	                            if (response.status === 200) {
	                                this.setState({info: 'Update succefull'})
	                                if (this.props.btnClickEventHandler) {
	                                    // дадим на верх команду на релоад
	                                    this.props.btnClickEventHandler('reload')
	                                }
	                                resolved(response.data);
	                            } else {
	                                console.error('status !== 200')
	                                this.setState({info: 'Update with error'})
	                                return rejected();
	                            }
	        
	                        }).catch((error) => {
	                            console.error('fetch error', error);
	                            this.setState({info: `Update with error ${error}`})
	                            return rejected(error);
	                        });
	                    }
	                )
	                    ;
	            }
	        */

	    }], [{
	        key: 'getDerivedStateFromProps',
	        value: function getDerivedStateFromProps(nextProps, prevState) {
	            if (nextProps.deals !== prevState.deals || JSON.stringify(nextProps.user) !== JSON.stringify(prevState.user)) {
	                return { value: nextProps.deals, user: nextProps.user };
	            } else return null;
	        }
	    }]);

	    return AuthorsRegisterComponent;
	}(React.PureComponent);

	module.exports = AuthorsRegisterComponent;

/***/ }),
/* 385 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var radium = __webpack_require__(88);

	var React = __webpack_require__(10),
	    styles = __webpack_require__(174);

	var Filters = function (_React$PureComponent) {
	    _inherits(Filters, _React$PureComponent);

	    function Filters(props) {
	        _classCallCheck(this, Filters);

	        var _this = _possibleConstructorReturn(this, (Filters.__proto__ || Object.getPrototypeOf(Filters)).call(this, props));

	        _this.state = {
	            value: '',
	            region: '',
	            continent: '',
	            city: ''
	        };
	        _this.onChange = _this.onChange.bind(_this);
	        _this.updateStore = _this.updateStore.bind(_this);
	        return _this;
	    }

	    _createClass(Filters, [{
	        key: 'onChange',
	        value: function onChange(e) {
	            this.setState({ value: e.target.value });
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var store = this.props.store;
	            var regions = [];
	            var continents = [];
	            var cities = [];
	            if (store) {

	                regions = store.getState().statuses.regions;
	                continents = store.getState().statuses.continents;
	                cities = store.getState().statuses.cities;
	            }

	            return React.createElement(
	                'div',
	                null,
	                React.createElement(
	                    'div',
	                    { style: styles.filterBlock },
	                    React.createElement(
	                        'label',
	                        { style: styles.filterLabel },
	                        'Continents: '
	                    ),
	                    React.createElement(
	                        'select',
	                        { ref: 'select-continents',
	                            style: styles.select,
	                            value: this.state.continent || '',
	                            id: 'continent',
	                            name: 'continent',
	                            onChange: this.onChange },
	                        continents.map(function (item, index) {
	                            return React.createElement(
	                                'option',
	                                { value: item },
	                                ' ',
	                                '' + item,
	                                ' '
	                            );
	                        })
	                    )
	                ),
	                React.createElement(
	                    'div',
	                    { style: styles.filterBlock },
	                    React.createElement(
	                        'label',
	                        { style: styles.filterLabel },
	                        'Regions: '
	                    ),
	                    React.createElement(
	                        'select',
	                        { ref: 'select-region',
	                            style: styles.select,
	                            value: this.state.region || '',
	                            id: 'region',
	                            name: 'region',
	                            onChange: this.onChange },
	                        regions.map(function (item, index) {
	                            return React.createElement(
	                                'option',
	                                { value: item },
	                                ' ',
	                                '' + item,
	                                ' '
	                            );
	                        })
	                    )
	                ),
	                React.createElement(
	                    'div',
	                    { style: styles.filterBlock },
	                    React.createElement(
	                        'label',
	                        { style: styles.filterLabel },
	                        'Cities: '
	                    ),
	                    React.createElement(
	                        'select',
	                        { ref: 'select-cities',
	                            style: styles.select,
	                            value: this.state.city || '',
	                            id: 'city',
	                            name: 'city',
	                            onChange: this.onChange },
	                        cities.map(function (item, index) {
	                            return React.createElement(
	                                'option',
	                                { value: item },
	                                ' ',
	                                '' + item,
	                                ' '
	                            );
	                        })
	                    )
	                )
	            );
	        }

	        /**
	         * Отследит изменения значений полей фильтрации
	         * @param e
	         */

	    }, {
	        key: 'onChange',
	        value: function onChange(e) {
	            var _this2 = this;

	            var name = e.target.name;
	            switch (name) {
	                case 'continent':
	                    {
	                        this.setState({ continent: e.target.value }, function () {
	                            return _this2.updateStore();
	                        });
	                        break;
	                    }
	                case 'region':
	                    {
	                        this.setState({ region: e.target.value }, function () {
	                            return _this2.updateStore();
	                        });
	                        break;
	                    }
	                case 'city':
	                    {
	                        this.setState({ city: e.target.value }, function () {
	                            return _this2.updateStore();
	                        });
	                        break;
	                    }
	                default:
	                    break;
	            }
	        }

	        /**
	         * Обновить  доп. фильтр в сторе
	         */

	    }, {
	        key: 'updateStore',
	        value: function updateStore() {
	            var addtionalFilter = {
	                continent: this.state.continent,
	                region: this.state.region,
	                city: this.state.city
	            };
	            this.props.store.dispatch({ type: 'additionalFilter', additionalFilter: addtionalFilter });
	        }
	    }]);

	    return Filters;
	}(React.PureComponent);

	module.exports = radium(Filters);

/***/ }),
/* 386 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	//const store = require("../../../store");

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var PropTypes = __webpack_require__(11);
	var React = __webpack_require__(10);
	var _fetchData = __webpack_require__(41);
	var DocContext = __webpack_require__(1);
	var styles = __webpack_require__(387);

	/**
	 * Класс реализует базовый документ .
	 */

	var MainDoc = function (_React$Component) {
	    _inherits(MainDoc, _React$Component);

	    function MainDoc(props) {
	        _classCallCheck(this, MainDoc);

	        var _this = _possibleConstructorReturn(this, (MainDoc.__proto__ || Object.getPrototypeOf(MainDoc)).call(this, props));

	        _this.state = {
	            docId: 0, //если Id документа не передан, то создаем новый док
	            reloadData: true,
	            data: [],
	            id: 0,
	            selectedFile: null,
	            selectedFileType: '',
	            uploadedImage: null,
	            fileName: ''

	        };
	        _this.fetchData = _this.fetchData.bind(_this);
	        _this.btnClick = _this.btnClick.bind(_this);
	        _this.renderToolBar = _this.renderToolBar.bind(_this);
	        _this.onChangeInput = _this.onChangeInput.bind(_this);
	        _this.onChangeHandler = _this.onChangeHandler.bind(_this);

	        return _this;
	    }

	    _createClass(MainDoc, [{
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            if (this.state.reloadData && this.props.match && this.props.match.params.docId) {
	                //делаем запрос на получение данных
	                this.fetchData(this.props.match.params.docId);
	            }
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            return React.createElement(
	                'div',
	                { style: styles.doc },
	                this.renderToolBar(),
	                !this.state.data.id ? React.createElement('input', { type: 'file',
	                    name: 'file',
	                    onChange: this.onChangeHandler,
	                    accept: ".jpg" }) : null,
	                React.createElement(
	                    'div',
	                    { style: styles.docRow },
	                    React.createElement(
	                        'div',
	                        { style: styles.docColumn },
	                        React.createElement(
	                            'label',
	                            null,
	                            'Code: '
	                        ),
	                        React.createElement('input', { type: 'text',
	                            id: 'code',
	                            name: 'kood',
	                            onChange: this.onChangeInput,
	                            value: this.state.data.kood || ''
	                        }),
	                        React.createElement(
	                            'label',
	                            null,
	                            'Description: '
	                        ),
	                        React.createElement('input', { type: 'text',
	                            id: 'description',
	                            name: 'description',
	                            onChange: this.onChangeInput,
	                            value: this.state.data.description || ''
	                        })
	                    ),
	                    React.createElement(
	                        'div',
	                        { style: styles.docColumn },
	                        React.createElement(
	                            'div',
	                            { style: styles.pictureFrame },
	                            this.state.data.file ? React.createElement('img', {
	                                src: this.state.data.id ? 'data:image/jpeg;base64,/' + this.state.data.file : this.state.uploadedImage,
	                                alt: 'Image',
	                                key: 'img_1',
	                                style: styles.picture
	                            }) : null
	                        )
	                    )
	                )
	            );
	        }
	    }, {
	        key: 'onChangeInput',
	        value: function onChangeInput(e) {
	            var fieldValue = e.target.value;
	            var fieldName = e.target.name;
	            var data = this.state.data;

	            switch (fieldName) {
	                case 'kood':
	                    data['kood'] = fieldValue;
	                    break;
	                case 'description':
	                    data['description'] = fieldValue;
	                    break;
	            }

	            this.setState({ data: data });
	        }
	    }, {
	        key: 'onChangeHandler',
	        value: function onChangeHandler(event) {
	            var _this2 = this;

	            var img = event.target.files[0];
	            var imgName = img.name;
	            var type = img.type;

	            var reader = new FileReader();
	            reader.readAsDataURL(event.target.files[0]);
	            var data = this.state.data;
	            data['file'] = 'file';

	            reader.onload = function (e) {
	                _this2.setState({
	                    uploadedImage: e.target.result,
	                    selectedFile: URL.createObjectURL(img),
	                    selectedFileType: type,
	                    fileName: imgName,
	                    data: data
	                });
	            };
	        }

	        /**
	         * Вернет компонет - панель инструментов документа
	         * @returns {XML}
	         */

	    }, {
	        key: 'renderToolBar',
	        value: function renderToolBar() {
	            var toolbarStyle = Object.assign({}, styles.toolBarContainerStyle, styles.right);
	            return React.createElement(
	                'div',
	                null,
	                React.createElement(
	                    'div',
	                    { style: styles.docRow },
	                    React.createElement(
	                        'div',
	                        { ref: 'toolbarContainer',
	                            style: toolbarStyle
	                        },
	                        React.createElement(
	                            'button',
	                            { onClick: this.btnClick },
	                            'Save'
	                        )
	                    )
	                )
	            );
	        }
	    }, {
	        key: 'btnClick',
	        value: function btnClick(event) {
	            var _this3 = this;

	            var data = new FormData();
	            // если фотография уже добавлена, то повторно ее уже не добаляем
	            if (!this.state.data.id) {

	                var image = new File([this.state.uploadedImage], this.state.fileName);
	                data.append('file', image, this.state.fileName);
	            }

	            data.append('id', this.state.data.id);
	            data.append('kood', this.state.data.kood);
	            data.append('description', this.state.data.description);

	            return new Promise(function (resolve, reject) {
	                _fetchData.fetchDataPost('/upload', data, _this3.state.selectedFileType).then(function (response) {
	                    // error handling
	                    if (response.status === 200 && response.data.result) {
	                        resolve(response.data);

	                        return _this3.props.history.push({
	                            pathname: '/'
	                        });
	                    } else {
	                        console.error('viga', response);
	                        return reject();
	                    }
	                });
	            });
	        }

	        /**
	         * загрузка данных
	         * @returns {*|Promise<AxiosResponse<unknown> | never>}
	         */

	    }, {
	        key: 'fetchData',
	        value: function fetchData(docId) {
	            var _this4 = this;

	            var URL = '/main/data/' + docId;
	            var params = {};
	            return new Promise(function (resolved, rejected) {

	                _fetchData['fetchDataPost'](URL, params).then(function (response) {
	                    // error handling
	                    if (response.status === 200) {

	                        // load store with data
	                        _this4.setState({ reload: false, data: response.data.data[0] });
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

	    return MainDoc;
	}(React.Component);

	module.exports = MainDoc;

/***/ }),
/* 387 */
/***/ (function(module, exports) {

	'use strict';module.exports={docRow:{display:'flex',flexDirection:'row'/*
	                border: '1px solid blue'
	        */},docColumn:{display:'flex',flexDirection:'column',margin:'auto'},doc:{display:'flex',flexDirection:'column'/*
	                border: '1px solid brown'
	        */},ok:{backgroundColor:'lightgreen',width:'100%',textAlign:'right'},error:{backgroundColor:'lightcoral',width:'100%',textAlign:'right'},notValid:{backgroundColor:'yellow',width:'100%',textAlign:'right'},modalValidate:{iconImage:'/images/icons/info.png'},pictureFrame:{width:'50%'},picture:{objectFit:'contain',width:'100%'},toolBarContainerStyle:{display:'flex',width:'100%',height:'Auto',marginBottom:'5px',marginHeight:'5px',borderRadius:'5px'},right:{justifyContent:'flex-end'},left:{justifyContent:'flex-start'}};

/***/ })
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2Zyb250ZW5kL21haW4uanMiLCJ3ZWJwYWNrOi8vLy4vfi9yZWR1eC9saWIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi9yZWR1eC9saWIvY3JlYXRlU3RvcmUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvaXNQbGFpbk9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fYmFzZUdldFRhZy5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fU3ltYm9sLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19yb290LmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19mcmVlR2xvYmFsLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19nZXRSYXdUYWcuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX29iamVjdFRvU3RyaW5nLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19nZXRQcm90b3R5cGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX292ZXJBcmcuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvaXNPYmplY3RMaWtlLmpzIiwid2VicGFjazovLy8uL34vc3ltYm9sLW9ic2VydmFibGUvbGliL2luZGV4LmpzIiwid2VicGFjazovLy8uL34vc3ltYm9sLW9ic2VydmFibGUvbGliL3BvbnlmaWxsLmpzIiwid2VicGFjazovLy8uL34vcmVkdXgvbGliL2NvbWJpbmVSZWR1Y2Vycy5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlZHV4L2xpYi91dGlscy93YXJuaW5nLmpzIiwid2VicGFjazovLy8uL34vcmVkdXgvbGliL2JpbmRBY3Rpb25DcmVhdG9ycy5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlZHV4L2xpYi9hcHBseU1pZGRsZXdhcmUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9yZWR1eC9saWIvY29tcG9zZS5qcyIsIndlYnBhY2s6Ly8vLi9mcm9udGVuZC9yZWR1Y2Vycy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9mcm9udGVuZC9yZWR1Y2Vycy9waWN0dXJlcy5qcyIsIndlYnBhY2s6Ly8vLi9mcm9udGVuZC9yZWR1Y2Vycy9maWx0ZXJzLmpzIiwid2VicGFjazovLy8uL2Zyb250ZW5kL3JlZHVjZXJzL2RlYWxzLmpzIiwid2VicGFjazovLy8uL2Zyb250ZW5kL3JlZHVjZXJzL3N0YXR1c2VzLmpzIiwid2VicGFjazovLy8uL2Zyb250ZW5kL3JlZHVjZXJzL21lbnUuanMiLCJ3ZWJwYWNrOi8vLy4vZnJvbnRlbmQvcmVkdWNlcnMvYXV0aG9ycy5qcyIsIndlYnBhY2s6Ly8vLi9mcm9udGVuZC9yZWR1Y2Vycy91c2VyQXBwbGljYXRpb25zLmpzIiwid2VicGFjazovLy8uL34vcmVkdXgtZGV2dG9vbHMtZXh0ZW5zaW9uL2luZGV4LmpzIiwid2VicGFjazovLy8uL34vcmVhY3QtcmVkdXgvbGliL2luZGV4LmpzIiwid2VicGFjazovLy8uL34vdXNlLXN5bmMtZXh0ZXJuYWwtc3RvcmUvc2hpbS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+L3VzZS1zeW5jLWV4dGVybmFsLXN0b3JlL2Nqcy91c2Utc3luYy1leHRlcm5hbC1zdG9yZS1zaGltLnByb2R1Y3Rpb24ubWluLmpzIiwid2VicGFjazovLy8uL34vdXNlLXN5bmMtZXh0ZXJuYWwtc3RvcmUvY2pzL3VzZS1zeW5jLWV4dGVybmFsLXN0b3JlLXNoaW0uZGV2ZWxvcG1lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vfi91c2Utc3luYy1leHRlcm5hbC1zdG9yZS9zaGltL3dpdGgtc2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vfi91c2Utc3luYy1leHRlcm5hbC1zdG9yZS9janMvdXNlLXN5bmMtZXh0ZXJuYWwtc3RvcmUtc2hpbS93aXRoLXNlbGVjdG9yLnByb2R1Y3Rpb24ubWluLmpzIiwid2VicGFjazovLy8uL34vdXNlLXN5bmMtZXh0ZXJuYWwtc3RvcmUvY2pzL3VzZS1zeW5jLWV4dGVybmFsLXN0b3JlLXNoaW0vd2l0aC1zZWxlY3Rvci5kZXZlbG9wbWVudC5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlYWN0LXJlZHV4L2xpYi91dGlscy9yZWFjdEJhdGNoZWRVcGRhdGVzLmpzIiwid2VicGFjazovLy8uL34vcmVhY3QtcmVkdXgvbGliL3V0aWxzL2JhdGNoLmpzIiwid2VicGFjazovLy8uL34vcmVhY3QtcmVkdXgvbGliL2hvb2tzL3VzZVNlbGVjdG9yLmpzIiwid2VicGFjazovLy8uL34vcmVhY3QtcmVkdXgvbGliL2hvb2tzL3VzZVJlZHV4Q29udGV4dC5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlYWN0LXJlZHV4L2xpYi9jb21wb25lbnRzL0NvbnRleHQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9yZWFjdC1yZWR1eC9saWIvdXRpbHMvdXNlU3luY0V4dGVybmFsU3RvcmUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9yZWFjdC1yZWR1eC9saWIvY29tcG9uZW50cy9jb25uZWN0LmpzIiwid2VicGFjazovLy8uL34vQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2V4dGVuZHMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9AYmFiZWwvcnVudGltZS9oZWxwZXJzL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UuanMiLCJ3ZWJwYWNrOi8vLy4vfi9yZWFjdC1yZWR1eC9+L2hvaXN0LW5vbi1yZWFjdC1zdGF0aWNzL2Rpc3QvaG9pc3Qtbm9uLXJlYWN0LXN0YXRpY3MuY2pzLmpzIiwid2VicGFjazovLy8uL34vcmVhY3QtcmVkdXgvfi9ob2lzdC1ub24tcmVhY3Qtc3RhdGljcy9+L3JlYWN0LWlzL2luZGV4LmpzIiwid2VicGFjazovLy8uL34vcmVhY3QtcmVkdXgvfi9ob2lzdC1ub24tcmVhY3Qtc3RhdGljcy9+L3JlYWN0LWlzL2Nqcy9yZWFjdC1pcy5wcm9kdWN0aW9uLm1pbi5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlYWN0LXJlZHV4L34vaG9pc3Qtbm9uLXJlYWN0LXN0YXRpY3Mvfi9yZWFjdC1pcy9janMvcmVhY3QtaXMuZGV2ZWxvcG1lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9yZWFjdC1yZWR1eC9+L3JlYWN0LWlzL2luZGV4LmpzIiwid2VicGFjazovLy8uL34vcmVhY3QtcmVkdXgvfi9yZWFjdC1pcy9janMvcmVhY3QtaXMucHJvZHVjdGlvbi5taW4uanMiLCJ3ZWJwYWNrOi8vLy4vfi9yZWFjdC1yZWR1eC9+L3JlYWN0LWlzL2Nqcy9yZWFjdC1pcy5kZXZlbG9wbWVudC5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlYWN0LXJlZHV4L2xpYi9jb25uZWN0L3NlbGVjdG9yRmFjdG9yeS5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlYWN0LXJlZHV4L2xpYi9jb25uZWN0L3ZlcmlmeVN1YnNlbGVjdG9ycy5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlYWN0LXJlZHV4L2xpYi91dGlscy93YXJuaW5nLmpzIiwid2VicGFjazovLy8uL34vcmVhY3QtcmVkdXgvbGliL2Nvbm5lY3QvbWFwRGlzcGF0Y2hUb1Byb3BzLmpzIiwid2VicGFjazovLy8uL34vcmVhY3QtcmVkdXgvbGliL3V0aWxzL2JpbmRBY3Rpb25DcmVhdG9ycy5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlYWN0LXJlZHV4L2xpYi9jb25uZWN0L3dyYXBNYXBUb1Byb3BzLmpzIiwid2VicGFjazovLy8uL34vcmVhY3QtcmVkdXgvbGliL3V0aWxzL3ZlcmlmeVBsYWluT2JqZWN0LmpzIiwid2VicGFjazovLy8uL34vcmVhY3QtcmVkdXgvbGliL3V0aWxzL2lzUGxhaW5PYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vfi9yZWFjdC1yZWR1eC9saWIvY29ubmVjdC9pbnZhbGlkQXJnRmFjdG9yeS5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlYWN0LXJlZHV4L2xpYi9jb25uZWN0L21hcFN0YXRlVG9Qcm9wcy5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlYWN0LXJlZHV4L2xpYi9jb25uZWN0L21lcmdlUHJvcHMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9yZWFjdC1yZWR1eC9saWIvdXRpbHMvU3Vic2NyaXB0aW9uLmpzIiwid2VicGFjazovLy8uL34vcmVhY3QtcmVkdXgvbGliL3V0aWxzL3VzZUlzb21vcnBoaWNMYXlvdXRFZmZlY3QuanMiLCJ3ZWJwYWNrOi8vLy4vfi9yZWFjdC1yZWR1eC9saWIvdXRpbHMvc2hhbGxvd0VxdWFsLmpzIiwid2VicGFjazovLy8uL34vcmVhY3QtcmVkdXgvbGliL2V4cG9ydHMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9yZWFjdC1yZWR1eC9saWIvY29tcG9uZW50cy9Qcm92aWRlci5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlYWN0LXJlZHV4L2xpYi9ob29rcy91c2VEaXNwYXRjaC5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlYWN0LXJlZHV4L2xpYi9ob29rcy91c2VTdG9yZS5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlYWN0LXJlZHV4L2xpYi90eXBlcy5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlZHV4LXRodW5rL2xpYi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9mcm9udGVuZC9tb2R1bGVzL21haW4uanN4Iiwid2VicGFjazovLy8uL2Zyb250ZW5kL2RvY3MvbWFpbi9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vLy4vZnJvbnRlbmQvZG9jcy9tYWluL3JlZ2lzdGVyLWNvbXBvbmVudC5qc3giLCJ3ZWJwYWNrOi8vLy4vZnJvbnRlbmQvZG9jcy9tYWluL3BpY3R1cmUtY29tcG9uZW50LmpzeCIsIndlYnBhY2s6Ly8vLi9mcm9udGVuZC9kb2NzL21haW4vZGVhbC1jb21wb25lbnQuanN4Iiwid2VicGFjazovLy8uL2Zyb250ZW5kL2RvY3MvbWFpbi91c2VyQXBwbGljYXRpb25zLWNvbXBvbmVudC5qc3giLCJ3ZWJwYWNrOi8vLy4vZnJvbnRlbmQvZG9jcy9tYWluL2F1dGhvci1jb21wb25lbnQuanN4Iiwid2VicGFjazovLy8uL2Zyb250ZW5kL2RvY3MvbWFpbi9kZWFsc1JlZ2lzdGVyLWNvbXBvbmVudC5qc3giLCJ3ZWJwYWNrOi8vLy4vZnJvbnRlbmQvZG9jcy9tYWluL2F1dGhvcnNSZWdpc3Rlci1jb21wb25lbnQuanN4Iiwid2VicGFjazovLy8uL2Zyb250ZW5kL2RvY3MvbWFpbi9maWx0ZXItY29tcG9uZW50LmpzeCIsIndlYnBhY2s6Ly8vLi9mcm9udGVuZC9kb2NzL21haW4vZG9jdW1lbnQvaW5kZXguanN4Iiwid2VicGFjazovLy8uL2Zyb250ZW5kL2RvY3MvbWFpbi9kb2N1bWVudC9zdHlsZXMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO3ZhciBfcmVkdXg9cmVxdWlyZSgncmVkdXgnKTt2YXIgX3JlZHVjZXJzPXJlcXVpcmUoJy4vcmVkdWNlcnMnKTt2YXIgX3JlZHVjZXJzMj1faW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWR1Y2Vycyk7dmFyIF9yZWR1eERldnRvb2xzRXh0ZW5zaW9uPXJlcXVpcmUoJ3JlZHV4LWRldnRvb2xzLWV4dGVuc2lvbicpO3ZhciBfcmVhY3RSZWR1eD1yZXF1aXJlKCdyZWFjdC1yZWR1eCcpO3ZhciBfcmVkdXhUaHVuaz1yZXF1aXJlKCdyZWR1eC10aHVuaycpO3ZhciBfcmVkdXhUaHVuazI9X2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVkdXhUaHVuayk7ZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmope3JldHVybiBvYmomJm9iai5fX2VzTW9kdWxlP29iajp7ZGVmYXVsdDpvYmp9O312YXIgUmVhY3RET009cmVxdWlyZSgncmVhY3QtZG9tJyk7dmFyIF9yZXF1aXJlPXJlcXVpcmUoJ3JlYWN0LXJvdXRlci1kb20nKSxCcm93c2VyUm91dGVyPV9yZXF1aXJlLkJyb3dzZXJSb3V0ZXI7dmFyIHN0b3JlPSgwLF9yZWR1eC5jcmVhdGVTdG9yZSkoX3JlZHVjZXJzMi5kZWZhdWx0LCgwLF9yZWR1eERldnRvb2xzRXh0ZW5zaW9uLmNvbXBvc2VXaXRoRGV2VG9vbHMpKCgwLF9yZWR1eC5hcHBseU1pZGRsZXdhcmUpKF9yZWR1eFRodW5rMi5kZWZhdWx0KSkpO3ZhciBEb2M9cmVxdWlyZSgnLi4vZnJvbnRlbmQvbW9kdWxlcy9tYWluLmpzeCcpOy8vaW1wb3J0IHN0b3JlIGZyb20gJy4vc3RvcmUnO1xuLy8g0YHQvtGF0YDQsNC90LjQvCDQsdCw0LfQvtCy0YvQtSDQtNCw0L3QvdGL0LUg0LIg0L/QsNC80LXRgtC4XG5SZWFjdERPTS5oeWRyYXRlKFJlYWN0LmNyZWF0ZUVsZW1lbnQoX3JlYWN0UmVkdXguUHJvdmlkZXIse3N0b3JlOnN0b3JlfSxSZWFjdC5jcmVhdGVFbGVtZW50KEJyb3dzZXJSb3V0ZXIsbnVsbCxSZWFjdC5jcmVhdGVFbGVtZW50KERvYyx7c3RvcmU6c3RvcmV9KSkpLGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkb2MnKSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9mcm9udGVuZC9tYWluLmpzXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMyIsIid1c2Ugc3RyaWN0JztleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLmNvbXBvc2U9ZXhwb3J0cy5hcHBseU1pZGRsZXdhcmU9ZXhwb3J0cy5iaW5kQWN0aW9uQ3JlYXRvcnM9ZXhwb3J0cy5jb21iaW5lUmVkdWNlcnM9ZXhwb3J0cy5jcmVhdGVTdG9yZT11bmRlZmluZWQ7dmFyIF9jcmVhdGVTdG9yZT1yZXF1aXJlKCcuL2NyZWF0ZVN0b3JlJyk7dmFyIF9jcmVhdGVTdG9yZTI9X2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY3JlYXRlU3RvcmUpO3ZhciBfY29tYmluZVJlZHVjZXJzPXJlcXVpcmUoJy4vY29tYmluZVJlZHVjZXJzJyk7dmFyIF9jb21iaW5lUmVkdWNlcnMyPV9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NvbWJpbmVSZWR1Y2Vycyk7dmFyIF9iaW5kQWN0aW9uQ3JlYXRvcnM9cmVxdWlyZSgnLi9iaW5kQWN0aW9uQ3JlYXRvcnMnKTt2YXIgX2JpbmRBY3Rpb25DcmVhdG9yczI9X2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYmluZEFjdGlvbkNyZWF0b3JzKTt2YXIgX2FwcGx5TWlkZGxld2FyZT1yZXF1aXJlKCcuL2FwcGx5TWlkZGxld2FyZScpO3ZhciBfYXBwbHlNaWRkbGV3YXJlMj1faW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9hcHBseU1pZGRsZXdhcmUpO3ZhciBfY29tcG9zZT1yZXF1aXJlKCcuL2NvbXBvc2UnKTt2YXIgX2NvbXBvc2UyPV9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NvbXBvc2UpO3ZhciBfd2FybmluZz1yZXF1aXJlKCcuL3V0aWxzL3dhcm5pbmcnKTt2YXIgX3dhcm5pbmcyPV9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3dhcm5pbmcpO2Z1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKXtyZXR1cm4gb2JqJiZvYmouX19lc01vZHVsZT9vYmo6eydkZWZhdWx0JzpvYmp9O30vKlxuKiBUaGlzIGlzIGEgZHVtbXkgZnVuY3Rpb24gdG8gY2hlY2sgaWYgdGhlIGZ1bmN0aW9uIG5hbWUgaGFzIGJlZW4gYWx0ZXJlZCBieSBtaW5pZmljYXRpb24uXG4qIElmIHRoZSBmdW5jdGlvbiBoYXMgYmVlbiBtaW5pZmllZCBhbmQgTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJywgd2FybiB0aGUgdXNlci5cbiovZnVuY3Rpb24gaXNDcnVzaGVkKCl7fWlmKHByb2Nlc3MuZW52Lk5PREVfRU5WIT09J3Byb2R1Y3Rpb24nJiZ0eXBlb2YgaXNDcnVzaGVkLm5hbWU9PT0nc3RyaW5nJyYmaXNDcnVzaGVkLm5hbWUhPT0naXNDcnVzaGVkJyl7KDAsX3dhcm5pbmcyWydkZWZhdWx0J10pKCdZb3UgYXJlIGN1cnJlbnRseSB1c2luZyBtaW5pZmllZCBjb2RlIG91dHNpZGUgb2YgTk9ERV9FTlYgPT09IFxcJ3Byb2R1Y3Rpb25cXCcuICcrJ1RoaXMgbWVhbnMgdGhhdCB5b3UgYXJlIHJ1bm5pbmcgYSBzbG93ZXIgZGV2ZWxvcG1lbnQgYnVpbGQgb2YgUmVkdXguICcrJ1lvdSBjYW4gdXNlIGxvb3NlLWVudmlmeSAoaHR0cHM6Ly9naXRodWIuY29tL3plcnRvc2gvbG9vc2UtZW52aWZ5KSBmb3IgYnJvd3NlcmlmeSAnKydvciBEZWZpbmVQbHVnaW4gZm9yIHdlYnBhY2sgKGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvMzAwMzAwMzEpICcrJ3RvIGVuc3VyZSB5b3UgaGF2ZSB0aGUgY29ycmVjdCBjb2RlIGZvciB5b3VyIHByb2R1Y3Rpb24gYnVpbGQuJyk7fWV4cG9ydHMuY3JlYXRlU3RvcmU9X2NyZWF0ZVN0b3JlMlsnZGVmYXVsdCddO2V4cG9ydHMuY29tYmluZVJlZHVjZXJzPV9jb21iaW5lUmVkdWNlcnMyWydkZWZhdWx0J107ZXhwb3J0cy5iaW5kQWN0aW9uQ3JlYXRvcnM9X2JpbmRBY3Rpb25DcmVhdG9yczJbJ2RlZmF1bHQnXTtleHBvcnRzLmFwcGx5TWlkZGxld2FyZT1fYXBwbHlNaWRkbGV3YXJlMlsnZGVmYXVsdCddO2V4cG9ydHMuY29tcG9zZT1fY29tcG9zZTJbJ2RlZmF1bHQnXTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vcmVkdXgvbGliL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAzMDRcbi8vIG1vZHVsZSBjaHVua3MgPSAzIiwiJ3VzZSBzdHJpY3QnO3ZhciBfdHlwZW9mPXR5cGVvZiBTeW1ib2w9PT1cImZ1bmN0aW9uXCImJnR5cGVvZiBTeW1ib2wuaXRlcmF0b3I9PT1cInN5bWJvbFwiP2Z1bmN0aW9uKG9iail7cmV0dXJuIHR5cGVvZiBvYmo7fTpmdW5jdGlvbihvYmope3JldHVybiBvYmomJnR5cGVvZiBTeW1ib2w9PT1cImZ1bmN0aW9uXCImJm9iai5jb25zdHJ1Y3Rvcj09PVN5bWJvbCYmb2JqIT09U3ltYm9sLnByb3RvdHlwZT9cInN5bWJvbFwiOnR5cGVvZiBvYmo7fTtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLkFjdGlvblR5cGVzPXVuZGVmaW5lZDtleHBvcnRzWydkZWZhdWx0J109Y3JlYXRlU3RvcmU7dmFyIF9pc1BsYWluT2JqZWN0PXJlcXVpcmUoJ2xvZGFzaC9pc1BsYWluT2JqZWN0Jyk7dmFyIF9pc1BsYWluT2JqZWN0Mj1faW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9pc1BsYWluT2JqZWN0KTt2YXIgX3N5bWJvbE9ic2VydmFibGU9cmVxdWlyZSgnc3ltYm9sLW9ic2VydmFibGUnKTt2YXIgX3N5bWJvbE9ic2VydmFibGUyPV9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3N5bWJvbE9ic2VydmFibGUpO2Z1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKXtyZXR1cm4gb2JqJiZvYmouX19lc01vZHVsZT9vYmo6eydkZWZhdWx0JzpvYmp9O30vKipcbiAqIFRoZXNlIGFyZSBwcml2YXRlIGFjdGlvbiB0eXBlcyByZXNlcnZlZCBieSBSZWR1eC5cbiAqIEZvciBhbnkgdW5rbm93biBhY3Rpb25zLCB5b3UgbXVzdCByZXR1cm4gdGhlIGN1cnJlbnQgc3RhdGUuXG4gKiBJZiB0aGUgY3VycmVudCBzdGF0ZSBpcyB1bmRlZmluZWQsIHlvdSBtdXN0IHJldHVybiB0aGUgaW5pdGlhbCBzdGF0ZS5cbiAqIERvIG5vdCByZWZlcmVuY2UgdGhlc2UgYWN0aW9uIHR5cGVzIGRpcmVjdGx5IGluIHlvdXIgY29kZS5cbiAqL3ZhciBBY3Rpb25UeXBlcz1leHBvcnRzLkFjdGlvblR5cGVzPXtJTklUOidAQHJlZHV4L0lOSVQnLyoqXG4gICAqIENyZWF0ZXMgYSBSZWR1eCBzdG9yZSB0aGF0IGhvbGRzIHRoZSBzdGF0ZSB0cmVlLlxuICAgKiBUaGUgb25seSB3YXkgdG8gY2hhbmdlIHRoZSBkYXRhIGluIHRoZSBzdG9yZSBpcyB0byBjYWxsIGBkaXNwYXRjaCgpYCBvbiBpdC5cbiAgICpcbiAgICogVGhlcmUgc2hvdWxkIG9ubHkgYmUgYSBzaW5nbGUgc3RvcmUgaW4geW91ciBhcHAuIFRvIHNwZWNpZnkgaG93IGRpZmZlcmVudFxuICAgKiBwYXJ0cyBvZiB0aGUgc3RhdGUgdHJlZSByZXNwb25kIHRvIGFjdGlvbnMsIHlvdSBtYXkgY29tYmluZSBzZXZlcmFsIHJlZHVjZXJzXG4gICAqIGludG8gYSBzaW5nbGUgcmVkdWNlciBmdW5jdGlvbiBieSB1c2luZyBgY29tYmluZVJlZHVjZXJzYC5cbiAgICpcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gcmVkdWNlciBBIGZ1bmN0aW9uIHRoYXQgcmV0dXJucyB0aGUgbmV4dCBzdGF0ZSB0cmVlLCBnaXZlblxuICAgKiB0aGUgY3VycmVudCBzdGF0ZSB0cmVlIGFuZCB0aGUgYWN0aW9uIHRvIGhhbmRsZS5cbiAgICpcbiAgICogQHBhcmFtIHthbnl9IFtwcmVsb2FkZWRTdGF0ZV0gVGhlIGluaXRpYWwgc3RhdGUuIFlvdSBtYXkgb3B0aW9uYWxseSBzcGVjaWZ5IGl0XG4gICAqIHRvIGh5ZHJhdGUgdGhlIHN0YXRlIGZyb20gdGhlIHNlcnZlciBpbiB1bml2ZXJzYWwgYXBwcywgb3IgdG8gcmVzdG9yZSBhXG4gICAqIHByZXZpb3VzbHkgc2VyaWFsaXplZCB1c2VyIHNlc3Npb24uXG4gICAqIElmIHlvdSB1c2UgYGNvbWJpbmVSZWR1Y2Vyc2AgdG8gcHJvZHVjZSB0aGUgcm9vdCByZWR1Y2VyIGZ1bmN0aW9uLCB0aGlzIG11c3QgYmVcbiAgICogYW4gb2JqZWN0IHdpdGggdGhlIHNhbWUgc2hhcGUgYXMgYGNvbWJpbmVSZWR1Y2Vyc2Aga2V5cy5cbiAgICpcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gW2VuaGFuY2VyXSBUaGUgc3RvcmUgZW5oYW5jZXIuIFlvdSBtYXkgb3B0aW9uYWxseSBzcGVjaWZ5IGl0XG4gICAqIHRvIGVuaGFuY2UgdGhlIHN0b3JlIHdpdGggdGhpcmQtcGFydHkgY2FwYWJpbGl0aWVzIHN1Y2ggYXMgbWlkZGxld2FyZSxcbiAgICogdGltZSB0cmF2ZWwsIHBlcnNpc3RlbmNlLCBldGMuIFRoZSBvbmx5IHN0b3JlIGVuaGFuY2VyIHRoYXQgc2hpcHMgd2l0aCBSZWR1eFxuICAgKiBpcyBgYXBwbHlNaWRkbGV3YXJlKClgLlxuICAgKlxuICAgKiBAcmV0dXJucyB7U3RvcmV9IEEgUmVkdXggc3RvcmUgdGhhdCBsZXRzIHlvdSByZWFkIHRoZSBzdGF0ZSwgZGlzcGF0Y2ggYWN0aW9uc1xuICAgKiBhbmQgc3Vic2NyaWJlIHRvIGNoYW5nZXMuXG4gICAqL307ZnVuY3Rpb24gY3JlYXRlU3RvcmUocmVkdWNlcixwcmVsb2FkZWRTdGF0ZSxlbmhhbmNlcil7dmFyIF9yZWYyO2lmKHR5cGVvZiBwcmVsb2FkZWRTdGF0ZT09PSdmdW5jdGlvbicmJnR5cGVvZiBlbmhhbmNlcj09PSd1bmRlZmluZWQnKXtlbmhhbmNlcj1wcmVsb2FkZWRTdGF0ZTtwcmVsb2FkZWRTdGF0ZT11bmRlZmluZWQ7fWlmKHR5cGVvZiBlbmhhbmNlciE9PSd1bmRlZmluZWQnKXtpZih0eXBlb2YgZW5oYW5jZXIhPT0nZnVuY3Rpb24nKXt0aHJvdyBuZXcgRXJyb3IoJ0V4cGVjdGVkIHRoZSBlbmhhbmNlciB0byBiZSBhIGZ1bmN0aW9uLicpO31yZXR1cm4gZW5oYW5jZXIoY3JlYXRlU3RvcmUpKHJlZHVjZXIscHJlbG9hZGVkU3RhdGUpO31pZih0eXBlb2YgcmVkdWNlciE9PSdmdW5jdGlvbicpe3Rocm93IG5ldyBFcnJvcignRXhwZWN0ZWQgdGhlIHJlZHVjZXIgdG8gYmUgYSBmdW5jdGlvbi4nKTt9dmFyIGN1cnJlbnRSZWR1Y2VyPXJlZHVjZXI7dmFyIGN1cnJlbnRTdGF0ZT1wcmVsb2FkZWRTdGF0ZTt2YXIgY3VycmVudExpc3RlbmVycz1bXTt2YXIgbmV4dExpc3RlbmVycz1jdXJyZW50TGlzdGVuZXJzO3ZhciBpc0Rpc3BhdGNoaW5nPWZhbHNlO2Z1bmN0aW9uIGVuc3VyZUNhbk11dGF0ZU5leHRMaXN0ZW5lcnMoKXtpZihuZXh0TGlzdGVuZXJzPT09Y3VycmVudExpc3RlbmVycyl7bmV4dExpc3RlbmVycz1jdXJyZW50TGlzdGVuZXJzLnNsaWNlKCk7fX0vKipcbiAgICogUmVhZHMgdGhlIHN0YXRlIHRyZWUgbWFuYWdlZCBieSB0aGUgc3RvcmUuXG4gICAqXG4gICAqIEByZXR1cm5zIHthbnl9IFRoZSBjdXJyZW50IHN0YXRlIHRyZWUgb2YgeW91ciBhcHBsaWNhdGlvbi5cbiAgICovZnVuY3Rpb24gZ2V0U3RhdGUoKXtyZXR1cm4gY3VycmVudFN0YXRlO30vKipcbiAgICogQWRkcyBhIGNoYW5nZSBsaXN0ZW5lci4gSXQgd2lsbCBiZSBjYWxsZWQgYW55IHRpbWUgYW4gYWN0aW9uIGlzIGRpc3BhdGNoZWQsXG4gICAqIGFuZCBzb21lIHBhcnQgb2YgdGhlIHN0YXRlIHRyZWUgbWF5IHBvdGVudGlhbGx5IGhhdmUgY2hhbmdlZC4gWW91IG1heSB0aGVuXG4gICAqIGNhbGwgYGdldFN0YXRlKClgIHRvIHJlYWQgdGhlIGN1cnJlbnQgc3RhdGUgdHJlZSBpbnNpZGUgdGhlIGNhbGxiYWNrLlxuICAgKlxuICAgKiBZb3UgbWF5IGNhbGwgYGRpc3BhdGNoKClgIGZyb20gYSBjaGFuZ2UgbGlzdGVuZXIsIHdpdGggdGhlIGZvbGxvd2luZ1xuICAgKiBjYXZlYXRzOlxuICAgKlxuICAgKiAxLiBUaGUgc3Vic2NyaXB0aW9ucyBhcmUgc25hcHNob3R0ZWQganVzdCBiZWZvcmUgZXZlcnkgYGRpc3BhdGNoKClgIGNhbGwuXG4gICAqIElmIHlvdSBzdWJzY3JpYmUgb3IgdW5zdWJzY3JpYmUgd2hpbGUgdGhlIGxpc3RlbmVycyBhcmUgYmVpbmcgaW52b2tlZCwgdGhpc1xuICAgKiB3aWxsIG5vdCBoYXZlIGFueSBlZmZlY3Qgb24gdGhlIGBkaXNwYXRjaCgpYCB0aGF0IGlzIGN1cnJlbnRseSBpbiBwcm9ncmVzcy5cbiAgICogSG93ZXZlciwgdGhlIG5leHQgYGRpc3BhdGNoKClgIGNhbGwsIHdoZXRoZXIgbmVzdGVkIG9yIG5vdCwgd2lsbCB1c2UgYSBtb3JlXG4gICAqIHJlY2VudCBzbmFwc2hvdCBvZiB0aGUgc3Vic2NyaXB0aW9uIGxpc3QuXG4gICAqXG4gICAqIDIuIFRoZSBsaXN0ZW5lciBzaG91bGQgbm90IGV4cGVjdCB0byBzZWUgYWxsIHN0YXRlIGNoYW5nZXMsIGFzIHRoZSBzdGF0ZVxuICAgKiBtaWdodCBoYXZlIGJlZW4gdXBkYXRlZCBtdWx0aXBsZSB0aW1lcyBkdXJpbmcgYSBuZXN0ZWQgYGRpc3BhdGNoKClgIGJlZm9yZVxuICAgKiB0aGUgbGlzdGVuZXIgaXMgY2FsbGVkLiBJdCBpcywgaG93ZXZlciwgZ3VhcmFudGVlZCB0aGF0IGFsbCBzdWJzY3JpYmVyc1xuICAgKiByZWdpc3RlcmVkIGJlZm9yZSB0aGUgYGRpc3BhdGNoKClgIHN0YXJ0ZWQgd2lsbCBiZSBjYWxsZWQgd2l0aCB0aGUgbGF0ZXN0XG4gICAqIHN0YXRlIGJ5IHRoZSB0aW1lIGl0IGV4aXRzLlxuICAgKlxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBsaXN0ZW5lciBBIGNhbGxiYWNrIHRvIGJlIGludm9rZWQgb24gZXZlcnkgZGlzcGF0Y2guXG4gICAqIEByZXR1cm5zIHtGdW5jdGlvbn0gQSBmdW5jdGlvbiB0byByZW1vdmUgdGhpcyBjaGFuZ2UgbGlzdGVuZXIuXG4gICAqL2Z1bmN0aW9uIHN1YnNjcmliZShsaXN0ZW5lcil7aWYodHlwZW9mIGxpc3RlbmVyIT09J2Z1bmN0aW9uJyl7dGhyb3cgbmV3IEVycm9yKCdFeHBlY3RlZCBsaXN0ZW5lciB0byBiZSBhIGZ1bmN0aW9uLicpO312YXIgaXNTdWJzY3JpYmVkPXRydWU7ZW5zdXJlQ2FuTXV0YXRlTmV4dExpc3RlbmVycygpO25leHRMaXN0ZW5lcnMucHVzaChsaXN0ZW5lcik7cmV0dXJuIGZ1bmN0aW9uIHVuc3Vic2NyaWJlKCl7aWYoIWlzU3Vic2NyaWJlZCl7cmV0dXJuO31pc1N1YnNjcmliZWQ9ZmFsc2U7ZW5zdXJlQ2FuTXV0YXRlTmV4dExpc3RlbmVycygpO3ZhciBpbmRleD1uZXh0TGlzdGVuZXJzLmluZGV4T2YobGlzdGVuZXIpO25leHRMaXN0ZW5lcnMuc3BsaWNlKGluZGV4LDEpO307fS8qKlxuICAgKiBEaXNwYXRjaGVzIGFuIGFjdGlvbi4gSXQgaXMgdGhlIG9ubHkgd2F5IHRvIHRyaWdnZXIgYSBzdGF0ZSBjaGFuZ2UuXG4gICAqXG4gICAqIFRoZSBgcmVkdWNlcmAgZnVuY3Rpb24sIHVzZWQgdG8gY3JlYXRlIHRoZSBzdG9yZSwgd2lsbCBiZSBjYWxsZWQgd2l0aCB0aGVcbiAgICogY3VycmVudCBzdGF0ZSB0cmVlIGFuZCB0aGUgZ2l2ZW4gYGFjdGlvbmAuIEl0cyByZXR1cm4gdmFsdWUgd2lsbFxuICAgKiBiZSBjb25zaWRlcmVkIHRoZSAqKm5leHQqKiBzdGF0ZSBvZiB0aGUgdHJlZSwgYW5kIHRoZSBjaGFuZ2UgbGlzdGVuZXJzXG4gICAqIHdpbGwgYmUgbm90aWZpZWQuXG4gICAqXG4gICAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9ubHkgc3VwcG9ydHMgcGxhaW4gb2JqZWN0IGFjdGlvbnMuIElmIHlvdSB3YW50IHRvXG4gICAqIGRpc3BhdGNoIGEgUHJvbWlzZSwgYW4gT2JzZXJ2YWJsZSwgYSB0aHVuaywgb3Igc29tZXRoaW5nIGVsc2UsIHlvdSBuZWVkIHRvXG4gICAqIHdyYXAgeW91ciBzdG9yZSBjcmVhdGluZyBmdW5jdGlvbiBpbnRvIHRoZSBjb3JyZXNwb25kaW5nIG1pZGRsZXdhcmUuIEZvclxuICAgKiBleGFtcGxlLCBzZWUgdGhlIGRvY3VtZW50YXRpb24gZm9yIHRoZSBgcmVkdXgtdGh1bmtgIHBhY2thZ2UuIEV2ZW4gdGhlXG4gICAqIG1pZGRsZXdhcmUgd2lsbCBldmVudHVhbGx5IGRpc3BhdGNoIHBsYWluIG9iamVjdCBhY3Rpb25zIHVzaW5nIHRoaXMgbWV0aG9kLlxuICAgKlxuICAgKiBAcGFyYW0ge09iamVjdH0gYWN0aW9uIEEgcGxhaW4gb2JqZWN0IHJlcHJlc2VudGluZyDigJx3aGF0IGNoYW5nZWTigJ0uIEl0IGlzXG4gICAqIGEgZ29vZCBpZGVhIHRvIGtlZXAgYWN0aW9ucyBzZXJpYWxpemFibGUgc28geW91IGNhbiByZWNvcmQgYW5kIHJlcGxheSB1c2VyXG4gICAqIHNlc3Npb25zLCBvciB1c2UgdGhlIHRpbWUgdHJhdmVsbGluZyBgcmVkdXgtZGV2dG9vbHNgLiBBbiBhY3Rpb24gbXVzdCBoYXZlXG4gICAqIGEgYHR5cGVgIHByb3BlcnR5IHdoaWNoIG1heSBub3QgYmUgYHVuZGVmaW5lZGAuIEl0IGlzIGEgZ29vZCBpZGVhIHRvIHVzZVxuICAgKiBzdHJpbmcgY29uc3RhbnRzIGZvciBhY3Rpb24gdHlwZXMuXG4gICAqXG4gICAqIEByZXR1cm5zIHtPYmplY3R9IEZvciBjb252ZW5pZW5jZSwgdGhlIHNhbWUgYWN0aW9uIG9iamVjdCB5b3UgZGlzcGF0Y2hlZC5cbiAgICpcbiAgICogTm90ZSB0aGF0LCBpZiB5b3UgdXNlIGEgY3VzdG9tIG1pZGRsZXdhcmUsIGl0IG1heSB3cmFwIGBkaXNwYXRjaCgpYCB0b1xuICAgKiByZXR1cm4gc29tZXRoaW5nIGVsc2UgKGZvciBleGFtcGxlLCBhIFByb21pc2UgeW91IGNhbiBhd2FpdCkuXG4gICAqL2Z1bmN0aW9uIGRpc3BhdGNoKGFjdGlvbil7aWYoISgwLF9pc1BsYWluT2JqZWN0MlsnZGVmYXVsdCddKShhY3Rpb24pKXt0aHJvdyBuZXcgRXJyb3IoJ0FjdGlvbnMgbXVzdCBiZSBwbGFpbiBvYmplY3RzLiAnKydVc2UgY3VzdG9tIG1pZGRsZXdhcmUgZm9yIGFzeW5jIGFjdGlvbnMuJyk7fWlmKHR5cGVvZiBhY3Rpb24udHlwZT09PSd1bmRlZmluZWQnKXt0aHJvdyBuZXcgRXJyb3IoJ0FjdGlvbnMgbWF5IG5vdCBoYXZlIGFuIHVuZGVmaW5lZCBcInR5cGVcIiBwcm9wZXJ0eS4gJysnSGF2ZSB5b3UgbWlzc3BlbGxlZCBhIGNvbnN0YW50PycpO31pZihpc0Rpc3BhdGNoaW5nKXt0aHJvdyBuZXcgRXJyb3IoJ1JlZHVjZXJzIG1heSBub3QgZGlzcGF0Y2ggYWN0aW9ucy4nKTt9dHJ5e2lzRGlzcGF0Y2hpbmc9dHJ1ZTtjdXJyZW50U3RhdGU9Y3VycmVudFJlZHVjZXIoY3VycmVudFN0YXRlLGFjdGlvbik7fWZpbmFsbHl7aXNEaXNwYXRjaGluZz1mYWxzZTt9dmFyIGxpc3RlbmVycz1jdXJyZW50TGlzdGVuZXJzPW5leHRMaXN0ZW5lcnM7Zm9yKHZhciBpPTA7aTxsaXN0ZW5lcnMubGVuZ3RoO2krKyl7dmFyIGxpc3RlbmVyPWxpc3RlbmVyc1tpXTtsaXN0ZW5lcigpO31yZXR1cm4gYWN0aW9uO30vKipcbiAgICogUmVwbGFjZXMgdGhlIHJlZHVjZXIgY3VycmVudGx5IHVzZWQgYnkgdGhlIHN0b3JlIHRvIGNhbGN1bGF0ZSB0aGUgc3RhdGUuXG4gICAqXG4gICAqIFlvdSBtaWdodCBuZWVkIHRoaXMgaWYgeW91ciBhcHAgaW1wbGVtZW50cyBjb2RlIHNwbGl0dGluZyBhbmQgeW91IHdhbnQgdG9cbiAgICogbG9hZCBzb21lIG9mIHRoZSByZWR1Y2VycyBkeW5hbWljYWxseS4gWW91IG1pZ2h0IGFsc28gbmVlZCB0aGlzIGlmIHlvdVxuICAgKiBpbXBsZW1lbnQgYSBob3QgcmVsb2FkaW5nIG1lY2hhbmlzbSBmb3IgUmVkdXguXG4gICAqXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IG5leHRSZWR1Y2VyIFRoZSByZWR1Y2VyIGZvciB0aGUgc3RvcmUgdG8gdXNlIGluc3RlYWQuXG4gICAqIEByZXR1cm5zIHt2b2lkfVxuICAgKi9mdW5jdGlvbiByZXBsYWNlUmVkdWNlcihuZXh0UmVkdWNlcil7aWYodHlwZW9mIG5leHRSZWR1Y2VyIT09J2Z1bmN0aW9uJyl7dGhyb3cgbmV3IEVycm9yKCdFeHBlY3RlZCB0aGUgbmV4dFJlZHVjZXIgdG8gYmUgYSBmdW5jdGlvbi4nKTt9Y3VycmVudFJlZHVjZXI9bmV4dFJlZHVjZXI7ZGlzcGF0Y2goe3R5cGU6QWN0aW9uVHlwZXMuSU5JVH0pO30vKipcbiAgICogSW50ZXJvcGVyYWJpbGl0eSBwb2ludCBmb3Igb2JzZXJ2YWJsZS9yZWFjdGl2ZSBsaWJyYXJpZXMuXG4gICAqIEByZXR1cm5zIHtvYnNlcnZhYmxlfSBBIG1pbmltYWwgb2JzZXJ2YWJsZSBvZiBzdGF0ZSBjaGFuZ2VzLlxuICAgKiBGb3IgbW9yZSBpbmZvcm1hdGlvbiwgc2VlIHRoZSBvYnNlcnZhYmxlIHByb3Bvc2FsOlxuICAgKiBodHRwczovL2dpdGh1Yi5jb20vdGMzOS9wcm9wb3NhbC1vYnNlcnZhYmxlXG4gICAqL2Z1bmN0aW9uIG9ic2VydmFibGUoKXt2YXIgX3JlZjt2YXIgb3V0ZXJTdWJzY3JpYmU9c3Vic2NyaWJlO3JldHVybiBfcmVmPXsvKipcbiAgICAgICAqIFRoZSBtaW5pbWFsIG9ic2VydmFibGUgc3Vic2NyaXB0aW9uIG1ldGhvZC5cbiAgICAgICAqIEBwYXJhbSB7T2JqZWN0fSBvYnNlcnZlciBBbnkgb2JqZWN0IHRoYXQgY2FuIGJlIHVzZWQgYXMgYW4gb2JzZXJ2ZXIuXG4gICAgICAgKiBUaGUgb2JzZXJ2ZXIgb2JqZWN0IHNob3VsZCBoYXZlIGEgYG5leHRgIG1ldGhvZC5cbiAgICAgICAqIEByZXR1cm5zIHtzdWJzY3JpcHRpb259IEFuIG9iamVjdCB3aXRoIGFuIGB1bnN1YnNjcmliZWAgbWV0aG9kIHRoYXQgY2FuXG4gICAgICAgKiBiZSB1c2VkIHRvIHVuc3Vic2NyaWJlIHRoZSBvYnNlcnZhYmxlIGZyb20gdGhlIHN0b3JlLCBhbmQgcHJldmVudCBmdXJ0aGVyXG4gICAgICAgKiBlbWlzc2lvbiBvZiB2YWx1ZXMgZnJvbSB0aGUgb2JzZXJ2YWJsZS5cbiAgICAgICAqL3N1YnNjcmliZTpmdW5jdGlvbiBzdWJzY3JpYmUob2JzZXJ2ZXIpe2lmKCh0eXBlb2Ygb2JzZXJ2ZXI9PT0ndW5kZWZpbmVkJz8ndW5kZWZpbmVkJzpfdHlwZW9mKG9ic2VydmVyKSkhPT0nb2JqZWN0Jyl7dGhyb3cgbmV3IFR5cGVFcnJvcignRXhwZWN0ZWQgdGhlIG9ic2VydmVyIHRvIGJlIGFuIG9iamVjdC4nKTt9ZnVuY3Rpb24gb2JzZXJ2ZVN0YXRlKCl7aWYob2JzZXJ2ZXIubmV4dCl7b2JzZXJ2ZXIubmV4dChnZXRTdGF0ZSgpKTt9fW9ic2VydmVTdGF0ZSgpO3ZhciB1bnN1YnNjcmliZT1vdXRlclN1YnNjcmliZShvYnNlcnZlU3RhdGUpO3JldHVybnt1bnN1YnNjcmliZTp1bnN1YnNjcmliZX07fX0sX3JlZltfc3ltYm9sT2JzZXJ2YWJsZTJbJ2RlZmF1bHQnXV09ZnVuY3Rpb24oKXtyZXR1cm4gdGhpczt9LF9yZWY7fS8vIFdoZW4gYSBzdG9yZSBpcyBjcmVhdGVkLCBhbiBcIklOSVRcIiBhY3Rpb24gaXMgZGlzcGF0Y2hlZCBzbyB0aGF0IGV2ZXJ5XG4vLyByZWR1Y2VyIHJldHVybnMgdGhlaXIgaW5pdGlhbCBzdGF0ZS4gVGhpcyBlZmZlY3RpdmVseSBwb3B1bGF0ZXNcbi8vIHRoZSBpbml0aWFsIHN0YXRlIHRyZWUuXG5kaXNwYXRjaCh7dHlwZTpBY3Rpb25UeXBlcy5JTklUfSk7cmV0dXJuIF9yZWYyPXtkaXNwYXRjaDpkaXNwYXRjaCxzdWJzY3JpYmU6c3Vic2NyaWJlLGdldFN0YXRlOmdldFN0YXRlLHJlcGxhY2VSZWR1Y2VyOnJlcGxhY2VSZWR1Y2VyfSxfcmVmMltfc3ltYm9sT2JzZXJ2YWJsZTJbJ2RlZmF1bHQnXV09b2JzZXJ2YWJsZSxfcmVmMjt9XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3JlZHV4L2xpYi9jcmVhdGVTdG9yZS5qc1xuLy8gbW9kdWxlIGlkID0gMzA1XG4vLyBtb2R1bGUgY2h1bmtzID0gMyIsIid1c2Ugc3RyaWN0Jzt2YXIgYmFzZUdldFRhZz1yZXF1aXJlKCcuL19iYXNlR2V0VGFnJyksZ2V0UHJvdG90eXBlPXJlcXVpcmUoJy4vX2dldFByb3RvdHlwZScpLGlzT2JqZWN0TGlrZT1yZXF1aXJlKCcuL2lzT2JqZWN0TGlrZScpOy8qKiBgT2JqZWN0I3RvU3RyaW5nYCByZXN1bHQgcmVmZXJlbmNlcy4gKi92YXIgb2JqZWN0VGFnPSdbb2JqZWN0IE9iamVjdF0nOy8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi92YXIgZnVuY1Byb3RvPUZ1bmN0aW9uLnByb3RvdHlwZSxvYmplY3RQcm90bz1PYmplY3QucHJvdG90eXBlOy8qKiBVc2VkIHRvIHJlc29sdmUgdGhlIGRlY29tcGlsZWQgc291cmNlIG9mIGZ1bmN0aW9ucy4gKi92YXIgZnVuY1RvU3RyaW5nPWZ1bmNQcm90by50b1N0cmluZzsvKiogVXNlZCB0byBjaGVjayBvYmplY3RzIGZvciBvd24gcHJvcGVydGllcy4gKi92YXIgaGFzT3duUHJvcGVydHk9b2JqZWN0UHJvdG8uaGFzT3duUHJvcGVydHk7LyoqIFVzZWQgdG8gaW5mZXIgdGhlIGBPYmplY3RgIGNvbnN0cnVjdG9yLiAqL3ZhciBvYmplY3RDdG9yU3RyaW5nPWZ1bmNUb1N0cmluZy5jYWxsKE9iamVjdCk7LyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBhIHBsYWluIG9iamVjdCwgdGhhdCBpcywgYW4gb2JqZWN0IGNyZWF0ZWQgYnkgdGhlXG4gKiBgT2JqZWN0YCBjb25zdHJ1Y3RvciBvciBvbmUgd2l0aCBhIGBbW1Byb3RvdHlwZV1dYCBvZiBgbnVsbGAuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjguMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSBwbGFpbiBvYmplY3QsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogZnVuY3Rpb24gRm9vKCkge1xuICogICB0aGlzLmEgPSAxO1xuICogfVxuICpcbiAqIF8uaXNQbGFpbk9iamVjdChuZXcgRm9vKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5pc1BsYWluT2JqZWN0KFsxLCAyLCAzXSk7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uaXNQbGFpbk9iamVjdCh7ICd4JzogMCwgJ3knOiAwIH0pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNQbGFpbk9iamVjdChPYmplY3QuY3JlYXRlKG51bGwpKTtcbiAqIC8vID0+IHRydWVcbiAqL2Z1bmN0aW9uIGlzUGxhaW5PYmplY3QodmFsdWUpe2lmKCFpc09iamVjdExpa2UodmFsdWUpfHxiYXNlR2V0VGFnKHZhbHVlKSE9b2JqZWN0VGFnKXtyZXR1cm4gZmFsc2U7fXZhciBwcm90bz1nZXRQcm90b3R5cGUodmFsdWUpO2lmKHByb3RvPT09bnVsbCl7cmV0dXJuIHRydWU7fXZhciBDdG9yPWhhc093blByb3BlcnR5LmNhbGwocHJvdG8sJ2NvbnN0cnVjdG9yJykmJnByb3RvLmNvbnN0cnVjdG9yO3JldHVybiB0eXBlb2YgQ3Rvcj09J2Z1bmN0aW9uJyYmQ3RvciBpbnN0YW5jZW9mIEN0b3ImJmZ1bmNUb1N0cmluZy5jYWxsKEN0b3IpPT1vYmplY3RDdG9yU3RyaW5nO31tb2R1bGUuZXhwb3J0cz1pc1BsYWluT2JqZWN0O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvaXNQbGFpbk9iamVjdC5qc1xuLy8gbW9kdWxlIGlkID0gMzA2XG4vLyBtb2R1bGUgY2h1bmtzID0gMyIsIid1c2Ugc3RyaWN0Jzt2YXIgX1N5bWJvbD1yZXF1aXJlKCcuL19TeW1ib2wnKSxnZXRSYXdUYWc9cmVxdWlyZSgnLi9fZ2V0UmF3VGFnJyksb2JqZWN0VG9TdHJpbmc9cmVxdWlyZSgnLi9fb2JqZWN0VG9TdHJpbmcnKTsvKiogYE9iamVjdCN0b1N0cmluZ2AgcmVzdWx0IHJlZmVyZW5jZXMuICovdmFyIG51bGxUYWc9J1tvYmplY3QgTnVsbF0nLHVuZGVmaW5lZFRhZz0nW29iamVjdCBVbmRlZmluZWRdJzsvKiogQnVpbHQtaW4gdmFsdWUgcmVmZXJlbmNlcy4gKi92YXIgc3ltVG9TdHJpbmdUYWc9X1N5bWJvbD9fU3ltYm9sLnRvU3RyaW5nVGFnOnVuZGVmaW5lZDsvKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBnZXRUYWdgIHdpdGhvdXQgZmFsbGJhY2tzIGZvciBidWdneSBlbnZpcm9ubWVudHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHF1ZXJ5LlxuICogQHJldHVybnMge3N0cmluZ30gUmV0dXJucyB0aGUgYHRvU3RyaW5nVGFnYC5cbiAqL2Z1bmN0aW9uIGJhc2VHZXRUYWcodmFsdWUpe2lmKHZhbHVlPT1udWxsKXtyZXR1cm4gdmFsdWU9PT11bmRlZmluZWQ/dW5kZWZpbmVkVGFnOm51bGxUYWc7fXJldHVybiBzeW1Ub1N0cmluZ1RhZyYmc3ltVG9TdHJpbmdUYWcgaW4gT2JqZWN0KHZhbHVlKT9nZXRSYXdUYWcodmFsdWUpOm9iamVjdFRvU3RyaW5nKHZhbHVlKTt9bW9kdWxlLmV4cG9ydHM9YmFzZUdldFRhZztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19iYXNlR2V0VGFnLmpzXG4vLyBtb2R1bGUgaWQgPSAzMDdcbi8vIG1vZHVsZSBjaHVua3MgPSAzIiwiJ3VzZSBzdHJpY3QnO3ZhciByb290PXJlcXVpcmUoJy4vX3Jvb3QnKTsvKiogQnVpbHQtaW4gdmFsdWUgcmVmZXJlbmNlcy4gKi92YXIgX1N5bWJvbD1yb290LlN5bWJvbDttb2R1bGUuZXhwb3J0cz1fU3ltYm9sO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX1N5bWJvbC5qc1xuLy8gbW9kdWxlIGlkID0gMzA4XG4vLyBtb2R1bGUgY2h1bmtzID0gMyIsIid1c2Ugc3RyaWN0Jzt2YXIgX3R5cGVvZj10eXBlb2YgU3ltYm9sPT09XCJmdW5jdGlvblwiJiZ0eXBlb2YgU3ltYm9sLml0ZXJhdG9yPT09XCJzeW1ib2xcIj9mdW5jdGlvbihvYmope3JldHVybiB0eXBlb2Ygb2JqO306ZnVuY3Rpb24ob2JqKXtyZXR1cm4gb2JqJiZ0eXBlb2YgU3ltYm9sPT09XCJmdW5jdGlvblwiJiZvYmouY29uc3RydWN0b3I9PT1TeW1ib2wmJm9iaiE9PVN5bWJvbC5wcm90b3R5cGU/XCJzeW1ib2xcIjp0eXBlb2Ygb2JqO307dmFyIGZyZWVHbG9iYWw9cmVxdWlyZSgnLi9fZnJlZUdsb2JhbCcpOy8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgc2VsZmAuICovdmFyIGZyZWVTZWxmPSh0eXBlb2Ygc2VsZj09PSd1bmRlZmluZWQnPyd1bmRlZmluZWQnOl90eXBlb2Yoc2VsZikpPT0nb2JqZWN0JyYmc2VsZiYmc2VsZi5PYmplY3Q9PT1PYmplY3QmJnNlbGY7LyoqIFVzZWQgYXMgYSByZWZlcmVuY2UgdG8gdGhlIGdsb2JhbCBvYmplY3QuICovdmFyIHJvb3Q9ZnJlZUdsb2JhbHx8ZnJlZVNlbGZ8fEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7bW9kdWxlLmV4cG9ydHM9cm9vdDtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19yb290LmpzXG4vLyBtb2R1bGUgaWQgPSAzMDlcbi8vIG1vZHVsZSBjaHVua3MgPSAzIiwiJ3VzZSBzdHJpY3QnO3ZhciBfdHlwZW9mPXR5cGVvZiBTeW1ib2w9PT1cImZ1bmN0aW9uXCImJnR5cGVvZiBTeW1ib2wuaXRlcmF0b3I9PT1cInN5bWJvbFwiP2Z1bmN0aW9uKG9iail7cmV0dXJuIHR5cGVvZiBvYmo7fTpmdW5jdGlvbihvYmope3JldHVybiBvYmomJnR5cGVvZiBTeW1ib2w9PT1cImZ1bmN0aW9uXCImJm9iai5jb25zdHJ1Y3Rvcj09PVN5bWJvbCYmb2JqIT09U3ltYm9sLnByb3RvdHlwZT9cInN5bWJvbFwiOnR5cGVvZiBvYmo7fTsvKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYGdsb2JhbGAgZnJvbSBOb2RlLmpzLiAqL3ZhciBmcmVlR2xvYmFsPSh0eXBlb2YgZ2xvYmFsPT09J3VuZGVmaW5lZCc/J3VuZGVmaW5lZCc6X3R5cGVvZihnbG9iYWwpKT09J29iamVjdCcmJmdsb2JhbCYmZ2xvYmFsLk9iamVjdD09PU9iamVjdCYmZ2xvYmFsO21vZHVsZS5leHBvcnRzPWZyZWVHbG9iYWw7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fZnJlZUdsb2JhbC5qc1xuLy8gbW9kdWxlIGlkID0gMzEwXG4vLyBtb2R1bGUgY2h1bmtzID0gMyIsIid1c2Ugc3RyaWN0Jzt2YXIgX1N5bWJvbD1yZXF1aXJlKCcuL19TeW1ib2wnKTsvKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovdmFyIG9iamVjdFByb3RvPU9iamVjdC5wcm90b3R5cGU7LyoqIFVzZWQgdG8gY2hlY2sgb2JqZWN0cyBmb3Igb3duIHByb3BlcnRpZXMuICovdmFyIGhhc093blByb3BlcnR5PW9iamVjdFByb3RvLmhhc093blByb3BlcnR5Oy8qKlxuICogVXNlZCB0byByZXNvbHZlIHRoZVxuICogW2B0b1N0cmluZ1RhZ2BdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLW9iamVjdC5wcm90b3R5cGUudG9zdHJpbmcpXG4gKiBvZiB2YWx1ZXMuXG4gKi92YXIgbmF0aXZlT2JqZWN0VG9TdHJpbmc9b2JqZWN0UHJvdG8udG9TdHJpbmc7LyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovdmFyIHN5bVRvU3RyaW5nVGFnPV9TeW1ib2w/X1N5bWJvbC50b1N0cmluZ1RhZzp1bmRlZmluZWQ7LyoqXG4gKiBBIHNwZWNpYWxpemVkIHZlcnNpb24gb2YgYGJhc2VHZXRUYWdgIHdoaWNoIGlnbm9yZXMgYFN5bWJvbC50b1N0cmluZ1RhZ2AgdmFsdWVzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIHJhdyBgdG9TdHJpbmdUYWdgLlxuICovZnVuY3Rpb24gZ2V0UmF3VGFnKHZhbHVlKXt2YXIgaXNPd249aGFzT3duUHJvcGVydHkuY2FsbCh2YWx1ZSxzeW1Ub1N0cmluZ1RhZyksdGFnPXZhbHVlW3N5bVRvU3RyaW5nVGFnXTt0cnl7dmFsdWVbc3ltVG9TdHJpbmdUYWddPXVuZGVmaW5lZDt2YXIgdW5tYXNrZWQ9dHJ1ZTt9Y2F0Y2goZSl7fXZhciByZXN1bHQ9bmF0aXZlT2JqZWN0VG9TdHJpbmcuY2FsbCh2YWx1ZSk7aWYodW5tYXNrZWQpe2lmKGlzT3duKXt2YWx1ZVtzeW1Ub1N0cmluZ1RhZ109dGFnO31lbHNle2RlbGV0ZSB2YWx1ZVtzeW1Ub1N0cmluZ1RhZ107fX1yZXR1cm4gcmVzdWx0O31tb2R1bGUuZXhwb3J0cz1nZXRSYXdUYWc7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fZ2V0UmF3VGFnLmpzXG4vLyBtb2R1bGUgaWQgPSAzMTFcbi8vIG1vZHVsZSBjaHVua3MgPSAzIiwiXCJ1c2Ugc3RyaWN0XCI7LyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL3ZhciBvYmplY3RQcm90bz1PYmplY3QucHJvdG90eXBlOy8qKlxuICogVXNlZCB0byByZXNvbHZlIHRoZVxuICogW2B0b1N0cmluZ1RhZ2BdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLW9iamVjdC5wcm90b3R5cGUudG9zdHJpbmcpXG4gKiBvZiB2YWx1ZXMuXG4gKi92YXIgbmF0aXZlT2JqZWN0VG9TdHJpbmc9b2JqZWN0UHJvdG8udG9TdHJpbmc7LyoqXG4gKiBDb252ZXJ0cyBgdmFsdWVgIHRvIGEgc3RyaW5nIHVzaW5nIGBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY29udmVydC5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIGNvbnZlcnRlZCBzdHJpbmcuXG4gKi9mdW5jdGlvbiBvYmplY3RUb1N0cmluZyh2YWx1ZSl7cmV0dXJuIG5hdGl2ZU9iamVjdFRvU3RyaW5nLmNhbGwodmFsdWUpO31tb2R1bGUuZXhwb3J0cz1vYmplY3RUb1N0cmluZztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19vYmplY3RUb1N0cmluZy5qc1xuLy8gbW9kdWxlIGlkID0gMzEyXG4vLyBtb2R1bGUgY2h1bmtzID0gMyIsIid1c2Ugc3RyaWN0Jzt2YXIgb3ZlckFyZz1yZXF1aXJlKCcuL19vdmVyQXJnJyk7LyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovdmFyIGdldFByb3RvdHlwZT1vdmVyQXJnKE9iamVjdC5nZXRQcm90b3R5cGVPZixPYmplY3QpO21vZHVsZS5leHBvcnRzPWdldFByb3RvdHlwZTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19nZXRQcm90b3R5cGUuanNcbi8vIG1vZHVsZSBpZCA9IDMxM1xuLy8gbW9kdWxlIGNodW5rcyA9IDMiLCJcInVzZSBzdHJpY3RcIjsvKipcbiAqIENyZWF0ZXMgYSB1bmFyeSBmdW5jdGlvbiB0aGF0IGludm9rZXMgYGZ1bmNgIHdpdGggaXRzIGFyZ3VtZW50IHRyYW5zZm9ybWVkLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byB3cmFwLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gdHJhbnNmb3JtIFRoZSBhcmd1bWVudCB0cmFuc2Zvcm0uXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBmdW5jdGlvbi5cbiAqL2Z1bmN0aW9uIG92ZXJBcmcoZnVuYyx0cmFuc2Zvcm0pe3JldHVybiBmdW5jdGlvbihhcmcpe3JldHVybiBmdW5jKHRyYW5zZm9ybShhcmcpKTt9O31tb2R1bGUuZXhwb3J0cz1vdmVyQXJnO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX292ZXJBcmcuanNcbi8vIG1vZHVsZSBpZCA9IDMxNFxuLy8gbW9kdWxlIGNodW5rcyA9IDMiLCIndXNlIHN0cmljdCc7dmFyIF90eXBlb2Y9dHlwZW9mIFN5bWJvbD09PVwiZnVuY3Rpb25cIiYmdHlwZW9mIFN5bWJvbC5pdGVyYXRvcj09PVwic3ltYm9sXCI/ZnVuY3Rpb24ob2JqKXtyZXR1cm4gdHlwZW9mIG9iajt9OmZ1bmN0aW9uKG9iail7cmV0dXJuIG9iaiYmdHlwZW9mIFN5bWJvbD09PVwiZnVuY3Rpb25cIiYmb2JqLmNvbnN0cnVjdG9yPT09U3ltYm9sJiZvYmohPT1TeW1ib2wucHJvdG90eXBlP1wic3ltYm9sXCI6dHlwZW9mIG9iajt9Oy8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgb2JqZWN0LWxpa2UuIEEgdmFsdWUgaXMgb2JqZWN0LWxpa2UgaWYgaXQncyBub3QgYG51bGxgXG4gKiBhbmQgaGFzIGEgYHR5cGVvZmAgcmVzdWx0IG9mIFwib2JqZWN0XCIuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgb2JqZWN0LWxpa2UsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc09iamVjdExpa2Uoe30pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3RMaWtlKFsxLCAyLCAzXSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdExpa2UoXy5ub29wKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5pc09iamVjdExpa2UobnVsbCk7XG4gKiAvLyA9PiBmYWxzZVxuICovZnVuY3Rpb24gaXNPYmplY3RMaWtlKHZhbHVlKXtyZXR1cm4gdmFsdWUhPW51bGwmJih0eXBlb2YgdmFsdWU9PT0ndW5kZWZpbmVkJz8ndW5kZWZpbmVkJzpfdHlwZW9mKHZhbHVlKSk9PSdvYmplY3QnO31tb2R1bGUuZXhwb3J0cz1pc09iamVjdExpa2U7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9pc09iamVjdExpa2UuanNcbi8vIG1vZHVsZSBpZCA9IDMxNVxuLy8gbW9kdWxlIGNodW5rcyA9IDMiLCIndXNlIHN0cmljdCc7T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOnRydWV9KTt2YXIgX3BvbnlmaWxsPXJlcXVpcmUoJy4vcG9ueWZpbGwuanMnKTt2YXIgX3BvbnlmaWxsMj1faW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wb255ZmlsbCk7ZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmope3JldHVybiBvYmomJm9iai5fX2VzTW9kdWxlP29iajp7J2RlZmF1bHQnOm9ian07fXZhciByb290Oy8qIGdsb2JhbCB3aW5kb3cgKi9pZih0eXBlb2Ygc2VsZiE9PSd1bmRlZmluZWQnKXtyb290PXNlbGY7fWVsc2UgaWYodHlwZW9mIHdpbmRvdyE9PSd1bmRlZmluZWQnKXtyb290PXdpbmRvdzt9ZWxzZSBpZih0eXBlb2YgZ2xvYmFsIT09J3VuZGVmaW5lZCcpe3Jvb3Q9Z2xvYmFsO31lbHNlIGlmKHR5cGVvZiBtb2R1bGUhPT0ndW5kZWZpbmVkJyl7cm9vdD1tb2R1bGU7fWVsc2V7cm9vdD1GdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO312YXIgcmVzdWx0PSgwLF9wb255ZmlsbDJbJ2RlZmF1bHQnXSkocm9vdCk7ZXhwb3J0c1snZGVmYXVsdCddPXJlc3VsdDtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vc3ltYm9sLW9ic2VydmFibGUvbGliL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAzMTZcbi8vIG1vZHVsZSBjaHVua3MgPSAzIiwiJ3VzZSBzdHJpY3QnO09iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLFwiX19lc01vZHVsZVwiLHt2YWx1ZTp0cnVlfSk7ZXhwb3J0c1snZGVmYXVsdCddPXN5bWJvbE9ic2VydmFibGVQb255ZmlsbDtmdW5jdGlvbiBzeW1ib2xPYnNlcnZhYmxlUG9ueWZpbGwocm9vdCl7dmFyIHJlc3VsdDt2YXIgX1N5bWJvbD1yb290LlN5bWJvbDtpZih0eXBlb2YgX1N5bWJvbD09PSdmdW5jdGlvbicpe2lmKF9TeW1ib2wub2JzZXJ2YWJsZSl7cmVzdWx0PV9TeW1ib2wub2JzZXJ2YWJsZTt9ZWxzZXtyZXN1bHQ9X1N5bWJvbCgnb2JzZXJ2YWJsZScpO19TeW1ib2wub2JzZXJ2YWJsZT1yZXN1bHQ7fX1lbHNle3Jlc3VsdD0nQEBvYnNlcnZhYmxlJzt9cmV0dXJuIHJlc3VsdDt9O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9zeW1ib2wtb2JzZXJ2YWJsZS9saWIvcG9ueWZpbGwuanNcbi8vIG1vZHVsZSBpZCA9IDMxN1xuLy8gbW9kdWxlIGNodW5rcyA9IDMiLCIndXNlIHN0cmljdCc7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0c1snZGVmYXVsdCddPWNvbWJpbmVSZWR1Y2Vyczt2YXIgX2NyZWF0ZVN0b3JlPXJlcXVpcmUoJy4vY3JlYXRlU3RvcmUnKTt2YXIgX2lzUGxhaW5PYmplY3Q9cmVxdWlyZSgnbG9kYXNoL2lzUGxhaW5PYmplY3QnKTt2YXIgX2lzUGxhaW5PYmplY3QyPV9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2lzUGxhaW5PYmplY3QpO3ZhciBfd2FybmluZz1yZXF1aXJlKCcuL3V0aWxzL3dhcm5pbmcnKTt2YXIgX3dhcm5pbmcyPV9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3dhcm5pbmcpO2Z1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKXtyZXR1cm4gb2JqJiZvYmouX19lc01vZHVsZT9vYmo6eydkZWZhdWx0JzpvYmp9O31mdW5jdGlvbiBnZXRVbmRlZmluZWRTdGF0ZUVycm9yTWVzc2FnZShrZXksYWN0aW9uKXt2YXIgYWN0aW9uVHlwZT1hY3Rpb24mJmFjdGlvbi50eXBlO3ZhciBhY3Rpb25OYW1lPWFjdGlvblR5cGUmJidcIicrYWN0aW9uVHlwZS50b1N0cmluZygpKydcIid8fCdhbiBhY3Rpb24nO3JldHVybidHaXZlbiBhY3Rpb24gJythY3Rpb25OYW1lKycsIHJlZHVjZXIgXCInK2tleSsnXCIgcmV0dXJuZWQgdW5kZWZpbmVkLiAnKydUbyBpZ25vcmUgYW4gYWN0aW9uLCB5b3UgbXVzdCBleHBsaWNpdGx5IHJldHVybiB0aGUgcHJldmlvdXMgc3RhdGUuICcrJ0lmIHlvdSB3YW50IHRoaXMgcmVkdWNlciB0byBob2xkIG5vIHZhbHVlLCB5b3UgY2FuIHJldHVybiBudWxsIGluc3RlYWQgb2YgdW5kZWZpbmVkLic7fWZ1bmN0aW9uIGdldFVuZXhwZWN0ZWRTdGF0ZVNoYXBlV2FybmluZ01lc3NhZ2UoaW5wdXRTdGF0ZSxyZWR1Y2VycyxhY3Rpb24sdW5leHBlY3RlZEtleUNhY2hlKXt2YXIgcmVkdWNlcktleXM9T2JqZWN0LmtleXMocmVkdWNlcnMpO3ZhciBhcmd1bWVudE5hbWU9YWN0aW9uJiZhY3Rpb24udHlwZT09PV9jcmVhdGVTdG9yZS5BY3Rpb25UeXBlcy5JTklUPydwcmVsb2FkZWRTdGF0ZSBhcmd1bWVudCBwYXNzZWQgdG8gY3JlYXRlU3RvcmUnOidwcmV2aW91cyBzdGF0ZSByZWNlaXZlZCBieSB0aGUgcmVkdWNlcic7aWYocmVkdWNlcktleXMubGVuZ3RoPT09MCl7cmV0dXJuJ1N0b3JlIGRvZXMgbm90IGhhdmUgYSB2YWxpZCByZWR1Y2VyLiBNYWtlIHN1cmUgdGhlIGFyZ3VtZW50IHBhc3NlZCAnKyd0byBjb21iaW5lUmVkdWNlcnMgaXMgYW4gb2JqZWN0IHdob3NlIHZhbHVlcyBhcmUgcmVkdWNlcnMuJzt9aWYoISgwLF9pc1BsYWluT2JqZWN0MlsnZGVmYXVsdCddKShpbnB1dFN0YXRlKSl7cmV0dXJuJ1RoZSAnK2FyZ3VtZW50TmFtZSsnIGhhcyB1bmV4cGVjdGVkIHR5cGUgb2YgXCInK3t9LnRvU3RyaW5nLmNhbGwoaW5wdXRTdGF0ZSkubWF0Y2goL1xccyhbYS16fEEtWl0rKS8pWzFdKydcIi4gRXhwZWN0ZWQgYXJndW1lbnQgdG8gYmUgYW4gb2JqZWN0IHdpdGggdGhlIGZvbGxvd2luZyAnKygna2V5czogXCInK3JlZHVjZXJLZXlzLmpvaW4oJ1wiLCBcIicpKydcIicpO312YXIgdW5leHBlY3RlZEtleXM9T2JqZWN0LmtleXMoaW5wdXRTdGF0ZSkuZmlsdGVyKGZ1bmN0aW9uKGtleSl7cmV0dXJuIXJlZHVjZXJzLmhhc093blByb3BlcnR5KGtleSkmJiF1bmV4cGVjdGVkS2V5Q2FjaGVba2V5XTt9KTt1bmV4cGVjdGVkS2V5cy5mb3JFYWNoKGZ1bmN0aW9uKGtleSl7dW5leHBlY3RlZEtleUNhY2hlW2tleV09dHJ1ZTt9KTtpZih1bmV4cGVjdGVkS2V5cy5sZW5ndGg+MCl7cmV0dXJuJ1VuZXhwZWN0ZWQgJysodW5leHBlY3RlZEtleXMubGVuZ3RoPjE/J2tleXMnOidrZXknKSsnICcrKCdcIicrdW5leHBlY3RlZEtleXMuam9pbignXCIsIFwiJykrJ1wiIGZvdW5kIGluICcrYXJndW1lbnROYW1lKycuICcpKydFeHBlY3RlZCB0byBmaW5kIG9uZSBvZiB0aGUga25vd24gcmVkdWNlciBrZXlzIGluc3RlYWQ6ICcrKCdcIicrcmVkdWNlcktleXMuam9pbignXCIsIFwiJykrJ1wiLiBVbmV4cGVjdGVkIGtleXMgd2lsbCBiZSBpZ25vcmVkLicpO319ZnVuY3Rpb24gYXNzZXJ0UmVkdWNlclNoYXBlKHJlZHVjZXJzKXtPYmplY3Qua2V5cyhyZWR1Y2VycykuZm9yRWFjaChmdW5jdGlvbihrZXkpe3ZhciByZWR1Y2VyPXJlZHVjZXJzW2tleV07dmFyIGluaXRpYWxTdGF0ZT1yZWR1Y2VyKHVuZGVmaW5lZCx7dHlwZTpfY3JlYXRlU3RvcmUuQWN0aW9uVHlwZXMuSU5JVH0pO2lmKHR5cGVvZiBpbml0aWFsU3RhdGU9PT0ndW5kZWZpbmVkJyl7dGhyb3cgbmV3IEVycm9yKCdSZWR1Y2VyIFwiJytrZXkrJ1wiIHJldHVybmVkIHVuZGVmaW5lZCBkdXJpbmcgaW5pdGlhbGl6YXRpb24uICcrJ0lmIHRoZSBzdGF0ZSBwYXNzZWQgdG8gdGhlIHJlZHVjZXIgaXMgdW5kZWZpbmVkLCB5b3UgbXVzdCAnKydleHBsaWNpdGx5IHJldHVybiB0aGUgaW5pdGlhbCBzdGF0ZS4gVGhlIGluaXRpYWwgc3RhdGUgbWF5ICcrJ25vdCBiZSB1bmRlZmluZWQuIElmIHlvdSBkb25cXCd0IHdhbnQgdG8gc2V0IGEgdmFsdWUgZm9yIHRoaXMgcmVkdWNlciwgJysneW91IGNhbiB1c2UgbnVsbCBpbnN0ZWFkIG9mIHVuZGVmaW5lZC4nKTt9dmFyIHR5cGU9J0BAcmVkdXgvUFJPQkVfVU5LTk9XTl9BQ1RJT05fJytNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDM2KS5zdWJzdHJpbmcoNykuc3BsaXQoJycpLmpvaW4oJy4nKTtpZih0eXBlb2YgcmVkdWNlcih1bmRlZmluZWQse3R5cGU6dHlwZX0pPT09J3VuZGVmaW5lZCcpe3Rocm93IG5ldyBFcnJvcignUmVkdWNlciBcIicra2V5KydcIiByZXR1cm5lZCB1bmRlZmluZWQgd2hlbiBwcm9iZWQgd2l0aCBhIHJhbmRvbSB0eXBlLiAnKygnRG9uXFwndCB0cnkgdG8gaGFuZGxlICcrX2NyZWF0ZVN0b3JlLkFjdGlvblR5cGVzLklOSVQrJyBvciBvdGhlciBhY3Rpb25zIGluIFwicmVkdXgvKlwiICcpKyduYW1lc3BhY2UuIFRoZXkgYXJlIGNvbnNpZGVyZWQgcHJpdmF0ZS4gSW5zdGVhZCwgeW91IG11c3QgcmV0dXJuIHRoZSAnKydjdXJyZW50IHN0YXRlIGZvciBhbnkgdW5rbm93biBhY3Rpb25zLCB1bmxlc3MgaXQgaXMgdW5kZWZpbmVkLCAnKydpbiB3aGljaCBjYXNlIHlvdSBtdXN0IHJldHVybiB0aGUgaW5pdGlhbCBzdGF0ZSwgcmVnYXJkbGVzcyBvZiB0aGUgJysnYWN0aW9uIHR5cGUuIFRoZSBpbml0aWFsIHN0YXRlIG1heSBub3QgYmUgdW5kZWZpbmVkLCBidXQgY2FuIGJlIG51bGwuJyk7fX0pO30vKipcbiAqIFR1cm5zIGFuIG9iamVjdCB3aG9zZSB2YWx1ZXMgYXJlIGRpZmZlcmVudCByZWR1Y2VyIGZ1bmN0aW9ucywgaW50byBhIHNpbmdsZVxuICogcmVkdWNlciBmdW5jdGlvbi4gSXQgd2lsbCBjYWxsIGV2ZXJ5IGNoaWxkIHJlZHVjZXIsIGFuZCBnYXRoZXIgdGhlaXIgcmVzdWx0c1xuICogaW50byBhIHNpbmdsZSBzdGF0ZSBvYmplY3QsIHdob3NlIGtleXMgY29ycmVzcG9uZCB0byB0aGUga2V5cyBvZiB0aGUgcGFzc2VkXG4gKiByZWR1Y2VyIGZ1bmN0aW9ucy5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gcmVkdWNlcnMgQW4gb2JqZWN0IHdob3NlIHZhbHVlcyBjb3JyZXNwb25kIHRvIGRpZmZlcmVudFxuICogcmVkdWNlciBmdW5jdGlvbnMgdGhhdCBuZWVkIHRvIGJlIGNvbWJpbmVkIGludG8gb25lLiBPbmUgaGFuZHkgd2F5IHRvIG9idGFpblxuICogaXQgaXMgdG8gdXNlIEVTNiBgaW1wb3J0ICogYXMgcmVkdWNlcnNgIHN5bnRheC4gVGhlIHJlZHVjZXJzIG1heSBuZXZlciByZXR1cm5cbiAqIHVuZGVmaW5lZCBmb3IgYW55IGFjdGlvbi4gSW5zdGVhZCwgdGhleSBzaG91bGQgcmV0dXJuIHRoZWlyIGluaXRpYWwgc3RhdGVcbiAqIGlmIHRoZSBzdGF0ZSBwYXNzZWQgdG8gdGhlbSB3YXMgdW5kZWZpbmVkLCBhbmQgdGhlIGN1cnJlbnQgc3RhdGUgZm9yIGFueVxuICogdW5yZWNvZ25pemVkIGFjdGlvbi5cbiAqXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IEEgcmVkdWNlciBmdW5jdGlvbiB0aGF0IGludm9rZXMgZXZlcnkgcmVkdWNlciBpbnNpZGUgdGhlXG4gKiBwYXNzZWQgb2JqZWN0LCBhbmQgYnVpbGRzIGEgc3RhdGUgb2JqZWN0IHdpdGggdGhlIHNhbWUgc2hhcGUuXG4gKi9mdW5jdGlvbiBjb21iaW5lUmVkdWNlcnMocmVkdWNlcnMpe3ZhciByZWR1Y2VyS2V5cz1PYmplY3Qua2V5cyhyZWR1Y2Vycyk7dmFyIGZpbmFsUmVkdWNlcnM9e307Zm9yKHZhciBpPTA7aTxyZWR1Y2VyS2V5cy5sZW5ndGg7aSsrKXt2YXIga2V5PXJlZHVjZXJLZXlzW2ldO2lmKHByb2Nlc3MuZW52Lk5PREVfRU5WIT09J3Byb2R1Y3Rpb24nKXtpZih0eXBlb2YgcmVkdWNlcnNba2V5XT09PSd1bmRlZmluZWQnKXsoMCxfd2FybmluZzJbJ2RlZmF1bHQnXSkoJ05vIHJlZHVjZXIgcHJvdmlkZWQgZm9yIGtleSBcIicra2V5KydcIicpO319aWYodHlwZW9mIHJlZHVjZXJzW2tleV09PT0nZnVuY3Rpb24nKXtmaW5hbFJlZHVjZXJzW2tleV09cmVkdWNlcnNba2V5XTt9fXZhciBmaW5hbFJlZHVjZXJLZXlzPU9iamVjdC5rZXlzKGZpbmFsUmVkdWNlcnMpO3ZhciB1bmV4cGVjdGVkS2V5Q2FjaGU9dm9pZCAwO2lmKHByb2Nlc3MuZW52Lk5PREVfRU5WIT09J3Byb2R1Y3Rpb24nKXt1bmV4cGVjdGVkS2V5Q2FjaGU9e307fXZhciBzaGFwZUFzc2VydGlvbkVycm9yPXZvaWQgMDt0cnl7YXNzZXJ0UmVkdWNlclNoYXBlKGZpbmFsUmVkdWNlcnMpO31jYXRjaChlKXtzaGFwZUFzc2VydGlvbkVycm9yPWU7fXJldHVybiBmdW5jdGlvbiBjb21iaW5hdGlvbigpe3ZhciBzdGF0ZT1hcmd1bWVudHMubGVuZ3RoPjAmJmFyZ3VtZW50c1swXSE9PXVuZGVmaW5lZD9hcmd1bWVudHNbMF06e307dmFyIGFjdGlvbj1hcmd1bWVudHNbMV07aWYoc2hhcGVBc3NlcnRpb25FcnJvcil7dGhyb3cgc2hhcGVBc3NlcnRpb25FcnJvcjt9aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYhPT0ncHJvZHVjdGlvbicpe3ZhciB3YXJuaW5nTWVzc2FnZT1nZXRVbmV4cGVjdGVkU3RhdGVTaGFwZVdhcm5pbmdNZXNzYWdlKHN0YXRlLGZpbmFsUmVkdWNlcnMsYWN0aW9uLHVuZXhwZWN0ZWRLZXlDYWNoZSk7aWYod2FybmluZ01lc3NhZ2UpeygwLF93YXJuaW5nMlsnZGVmYXVsdCddKSh3YXJuaW5nTWVzc2FnZSk7fX12YXIgaGFzQ2hhbmdlZD1mYWxzZTt2YXIgbmV4dFN0YXRlPXt9O2Zvcih2YXIgX2k9MDtfaTxmaW5hbFJlZHVjZXJLZXlzLmxlbmd0aDtfaSsrKXt2YXIgX2tleT1maW5hbFJlZHVjZXJLZXlzW19pXTt2YXIgcmVkdWNlcj1maW5hbFJlZHVjZXJzW19rZXldO3ZhciBwcmV2aW91c1N0YXRlRm9yS2V5PXN0YXRlW19rZXldO3ZhciBuZXh0U3RhdGVGb3JLZXk9cmVkdWNlcihwcmV2aW91c1N0YXRlRm9yS2V5LGFjdGlvbik7aWYodHlwZW9mIG5leHRTdGF0ZUZvcktleT09PSd1bmRlZmluZWQnKXt2YXIgZXJyb3JNZXNzYWdlPWdldFVuZGVmaW5lZFN0YXRlRXJyb3JNZXNzYWdlKF9rZXksYWN0aW9uKTt0aHJvdyBuZXcgRXJyb3IoZXJyb3JNZXNzYWdlKTt9bmV4dFN0YXRlW19rZXldPW5leHRTdGF0ZUZvcktleTtoYXNDaGFuZ2VkPWhhc0NoYW5nZWR8fG5leHRTdGF0ZUZvcktleSE9PXByZXZpb3VzU3RhdGVGb3JLZXk7fXJldHVybiBoYXNDaGFuZ2VkP25leHRTdGF0ZTpzdGF0ZTt9O31cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vcmVkdXgvbGliL2NvbWJpbmVSZWR1Y2Vycy5qc1xuLy8gbW9kdWxlIGlkID0gMzE4XG4vLyBtb2R1bGUgY2h1bmtzID0gMyIsIid1c2Ugc3RyaWN0JztleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzWydkZWZhdWx0J109d2FybmluZzsvKipcbiAqIFByaW50cyBhIHdhcm5pbmcgaW4gdGhlIGNvbnNvbGUgaWYgaXQgZXhpc3RzLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBtZXNzYWdlIFRoZSB3YXJuaW5nIG1lc3NhZ2UuXG4gKiBAcmV0dXJucyB7dm9pZH1cbiAqL2Z1bmN0aW9uIHdhcm5pbmcobWVzc2FnZSl7LyogZXNsaW50LWRpc2FibGUgbm8tY29uc29sZSAqL2lmKHR5cGVvZiBjb25zb2xlIT09J3VuZGVmaW5lZCcmJnR5cGVvZiBjb25zb2xlLmVycm9yPT09J2Z1bmN0aW9uJyl7Y29uc29sZS5lcnJvcihtZXNzYWdlKTt9LyogZXNsaW50LWVuYWJsZSBuby1jb25zb2xlICovdHJ5ey8vIFRoaXMgZXJyb3Igd2FzIHRocm93biBhcyBhIGNvbnZlbmllbmNlIHNvIHRoYXQgaWYgeW91IGVuYWJsZVxuLy8gXCJicmVhayBvbiBhbGwgZXhjZXB0aW9uc1wiIGluIHlvdXIgY29uc29sZSxcbi8vIGl0IHdvdWxkIHBhdXNlIHRoZSBleGVjdXRpb24gYXQgdGhpcyBsaW5lLlxudGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpOy8qIGVzbGludC1kaXNhYmxlIG5vLWVtcHR5ICovfWNhdGNoKGUpe30vKiBlc2xpbnQtZW5hYmxlIG5vLWVtcHR5ICovfVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9yZWR1eC9saWIvdXRpbHMvd2FybmluZy5qc1xuLy8gbW9kdWxlIGlkID0gMzE5XG4vLyBtb2R1bGUgY2h1bmtzID0gMyIsIid1c2Ugc3RyaWN0Jzt2YXIgX3R5cGVvZj10eXBlb2YgU3ltYm9sPT09XCJmdW5jdGlvblwiJiZ0eXBlb2YgU3ltYm9sLml0ZXJhdG9yPT09XCJzeW1ib2xcIj9mdW5jdGlvbihvYmope3JldHVybiB0eXBlb2Ygb2JqO306ZnVuY3Rpb24ob2JqKXtyZXR1cm4gb2JqJiZ0eXBlb2YgU3ltYm9sPT09XCJmdW5jdGlvblwiJiZvYmouY29uc3RydWN0b3I9PT1TeW1ib2wmJm9iaiE9PVN5bWJvbC5wcm90b3R5cGU/XCJzeW1ib2xcIjp0eXBlb2Ygb2JqO307ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0c1snZGVmYXVsdCddPWJpbmRBY3Rpb25DcmVhdG9ycztmdW5jdGlvbiBiaW5kQWN0aW9uQ3JlYXRvcihhY3Rpb25DcmVhdG9yLGRpc3BhdGNoKXtyZXR1cm4gZnVuY3Rpb24oKXtyZXR1cm4gZGlzcGF0Y2goYWN0aW9uQ3JlYXRvci5hcHBseSh1bmRlZmluZWQsYXJndW1lbnRzKSk7fTt9LyoqXG4gKiBUdXJucyBhbiBvYmplY3Qgd2hvc2UgdmFsdWVzIGFyZSBhY3Rpb24gY3JlYXRvcnMsIGludG8gYW4gb2JqZWN0IHdpdGggdGhlXG4gKiBzYW1lIGtleXMsIGJ1dCB3aXRoIGV2ZXJ5IGZ1bmN0aW9uIHdyYXBwZWQgaW50byBhIGBkaXNwYXRjaGAgY2FsbCBzbyB0aGV5XG4gKiBtYXkgYmUgaW52b2tlZCBkaXJlY3RseS4gVGhpcyBpcyBqdXN0IGEgY29udmVuaWVuY2UgbWV0aG9kLCBhcyB5b3UgY2FuIGNhbGxcbiAqIGBzdG9yZS5kaXNwYXRjaChNeUFjdGlvbkNyZWF0b3JzLmRvU29tZXRoaW5nKCkpYCB5b3Vyc2VsZiBqdXN0IGZpbmUuXG4gKlxuICogRm9yIGNvbnZlbmllbmNlLCB5b3UgY2FuIGFsc28gcGFzcyBhIHNpbmdsZSBmdW5jdGlvbiBhcyB0aGUgZmlyc3QgYXJndW1lbnQsXG4gKiBhbmQgZ2V0IGEgZnVuY3Rpb24gaW4gcmV0dXJuLlxuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb258T2JqZWN0fSBhY3Rpb25DcmVhdG9ycyBBbiBvYmplY3Qgd2hvc2UgdmFsdWVzIGFyZSBhY3Rpb25cbiAqIGNyZWF0b3IgZnVuY3Rpb25zLiBPbmUgaGFuZHkgd2F5IHRvIG9idGFpbiBpdCBpcyB0byB1c2UgRVM2IGBpbXBvcnQgKiBhc2BcbiAqIHN5bnRheC4gWW91IG1heSBhbHNvIHBhc3MgYSBzaW5nbGUgZnVuY3Rpb24uXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gZGlzcGF0Y2ggVGhlIGBkaXNwYXRjaGAgZnVuY3Rpb24gYXZhaWxhYmxlIG9uIHlvdXIgUmVkdXhcbiAqIHN0b3JlLlxuICpcbiAqIEByZXR1cm5zIHtGdW5jdGlvbnxPYmplY3R9IFRoZSBvYmplY3QgbWltaWNraW5nIHRoZSBvcmlnaW5hbCBvYmplY3QsIGJ1dCB3aXRoXG4gKiBldmVyeSBhY3Rpb24gY3JlYXRvciB3cmFwcGVkIGludG8gdGhlIGBkaXNwYXRjaGAgY2FsbC4gSWYgeW91IHBhc3NlZCBhXG4gKiBmdW5jdGlvbiBhcyBgYWN0aW9uQ3JlYXRvcnNgLCB0aGUgcmV0dXJuIHZhbHVlIHdpbGwgYWxzbyBiZSBhIHNpbmdsZVxuICogZnVuY3Rpb24uXG4gKi9mdW5jdGlvbiBiaW5kQWN0aW9uQ3JlYXRvcnMoYWN0aW9uQ3JlYXRvcnMsZGlzcGF0Y2gpe2lmKHR5cGVvZiBhY3Rpb25DcmVhdG9ycz09PSdmdW5jdGlvbicpe3JldHVybiBiaW5kQWN0aW9uQ3JlYXRvcihhY3Rpb25DcmVhdG9ycyxkaXNwYXRjaCk7fWlmKCh0eXBlb2YgYWN0aW9uQ3JlYXRvcnM9PT0ndW5kZWZpbmVkJz8ndW5kZWZpbmVkJzpfdHlwZW9mKGFjdGlvbkNyZWF0b3JzKSkhPT0nb2JqZWN0J3x8YWN0aW9uQ3JlYXRvcnM9PT1udWxsKXt0aHJvdyBuZXcgRXJyb3IoJ2JpbmRBY3Rpb25DcmVhdG9ycyBleHBlY3RlZCBhbiBvYmplY3Qgb3IgYSBmdW5jdGlvbiwgaW5zdGVhZCByZWNlaXZlZCAnKyhhY3Rpb25DcmVhdG9ycz09PW51bGw/J251bGwnOnR5cGVvZiBhY3Rpb25DcmVhdG9ycz09PSd1bmRlZmluZWQnPyd1bmRlZmluZWQnOl90eXBlb2YoYWN0aW9uQ3JlYXRvcnMpKSsnLiAnKydEaWQgeW91IHdyaXRlIFwiaW1wb3J0IEFjdGlvbkNyZWF0b3JzIGZyb21cIiBpbnN0ZWFkIG9mIFwiaW1wb3J0ICogYXMgQWN0aW9uQ3JlYXRvcnMgZnJvbVwiPycpO312YXIga2V5cz1PYmplY3Qua2V5cyhhY3Rpb25DcmVhdG9ycyk7dmFyIGJvdW5kQWN0aW9uQ3JlYXRvcnM9e307Zm9yKHZhciBpPTA7aTxrZXlzLmxlbmd0aDtpKyspe3ZhciBrZXk9a2V5c1tpXTt2YXIgYWN0aW9uQ3JlYXRvcj1hY3Rpb25DcmVhdG9yc1trZXldO2lmKHR5cGVvZiBhY3Rpb25DcmVhdG9yPT09J2Z1bmN0aW9uJyl7Ym91bmRBY3Rpb25DcmVhdG9yc1trZXldPWJpbmRBY3Rpb25DcmVhdG9yKGFjdGlvbkNyZWF0b3IsZGlzcGF0Y2gpO319cmV0dXJuIGJvdW5kQWN0aW9uQ3JlYXRvcnM7fVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9yZWR1eC9saWIvYmluZEFjdGlvbkNyZWF0b3JzLmpzXG4vLyBtb2R1bGUgaWQgPSAzMjBcbi8vIG1vZHVsZSBjaHVua3MgPSAzIiwiJ3VzZSBzdHJpY3QnO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO3ZhciBfZXh0ZW5kcz1PYmplY3QuYXNzaWdufHxmdW5jdGlvbih0YXJnZXQpe2Zvcih2YXIgaT0xO2k8YXJndW1lbnRzLmxlbmd0aDtpKyspe3ZhciBzb3VyY2U9YXJndW1lbnRzW2ldO2Zvcih2YXIga2V5IGluIHNvdXJjZSl7aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSxrZXkpKXt0YXJnZXRba2V5XT1zb3VyY2Vba2V5XTt9fX1yZXR1cm4gdGFyZ2V0O307ZXhwb3J0c1snZGVmYXVsdCddPWFwcGx5TWlkZGxld2FyZTt2YXIgX2NvbXBvc2U9cmVxdWlyZSgnLi9jb21wb3NlJyk7dmFyIF9jb21wb3NlMj1faW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jb21wb3NlKTtmdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iail7cmV0dXJuIG9iaiYmb2JqLl9fZXNNb2R1bGU/b2JqOnsnZGVmYXVsdCc6b2JqfTt9LyoqXG4gKiBDcmVhdGVzIGEgc3RvcmUgZW5oYW5jZXIgdGhhdCBhcHBsaWVzIG1pZGRsZXdhcmUgdG8gdGhlIGRpc3BhdGNoIG1ldGhvZFxuICogb2YgdGhlIFJlZHV4IHN0b3JlLiBUaGlzIGlzIGhhbmR5IGZvciBhIHZhcmlldHkgb2YgdGFza3MsIHN1Y2ggYXMgZXhwcmVzc2luZ1xuICogYXN5bmNocm9ub3VzIGFjdGlvbnMgaW4gYSBjb25jaXNlIG1hbm5lciwgb3IgbG9nZ2luZyBldmVyeSBhY3Rpb24gcGF5bG9hZC5cbiAqXG4gKiBTZWUgYHJlZHV4LXRodW5rYCBwYWNrYWdlIGFzIGFuIGV4YW1wbGUgb2YgdGhlIFJlZHV4IG1pZGRsZXdhcmUuXG4gKlxuICogQmVjYXVzZSBtaWRkbGV3YXJlIGlzIHBvdGVudGlhbGx5IGFzeW5jaHJvbm91cywgdGhpcyBzaG91bGQgYmUgdGhlIGZpcnN0XG4gKiBzdG9yZSBlbmhhbmNlciBpbiB0aGUgY29tcG9zaXRpb24gY2hhaW4uXG4gKlxuICogTm90ZSB0aGF0IGVhY2ggbWlkZGxld2FyZSB3aWxsIGJlIGdpdmVuIHRoZSBgZGlzcGF0Y2hgIGFuZCBgZ2V0U3RhdGVgIGZ1bmN0aW9uc1xuICogYXMgbmFtZWQgYXJndW1lbnRzLlxuICpcbiAqIEBwYXJhbSB7Li4uRnVuY3Rpb259IG1pZGRsZXdhcmVzIFRoZSBtaWRkbGV3YXJlIGNoYWluIHRvIGJlIGFwcGxpZWQuXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IEEgc3RvcmUgZW5oYW5jZXIgYXBwbHlpbmcgdGhlIG1pZGRsZXdhcmUuXG4gKi9mdW5jdGlvbiBhcHBseU1pZGRsZXdhcmUoKXtmb3IodmFyIF9sZW49YXJndW1lbnRzLmxlbmd0aCxtaWRkbGV3YXJlcz1BcnJheShfbGVuKSxfa2V5PTA7X2tleTxfbGVuO19rZXkrKyl7bWlkZGxld2FyZXNbX2tleV09YXJndW1lbnRzW19rZXldO31yZXR1cm4gZnVuY3Rpb24oY3JlYXRlU3RvcmUpe3JldHVybiBmdW5jdGlvbihyZWR1Y2VyLHByZWxvYWRlZFN0YXRlLGVuaGFuY2VyKXt2YXIgc3RvcmU9Y3JlYXRlU3RvcmUocmVkdWNlcixwcmVsb2FkZWRTdGF0ZSxlbmhhbmNlcik7dmFyIF9kaXNwYXRjaD1zdG9yZS5kaXNwYXRjaDt2YXIgY2hhaW49W107dmFyIG1pZGRsZXdhcmVBUEk9e2dldFN0YXRlOnN0b3JlLmdldFN0YXRlLGRpc3BhdGNoOmZ1bmN0aW9uIGRpc3BhdGNoKGFjdGlvbil7cmV0dXJuIF9kaXNwYXRjaChhY3Rpb24pO319O2NoYWluPW1pZGRsZXdhcmVzLm1hcChmdW5jdGlvbihtaWRkbGV3YXJlKXtyZXR1cm4gbWlkZGxld2FyZShtaWRkbGV3YXJlQVBJKTt9KTtfZGlzcGF0Y2g9X2NvbXBvc2UyWydkZWZhdWx0J10uYXBwbHkodW5kZWZpbmVkLGNoYWluKShzdG9yZS5kaXNwYXRjaCk7cmV0dXJuIF9leHRlbmRzKHt9LHN0b3JlLHtkaXNwYXRjaDpfZGlzcGF0Y2h9KTt9O307fVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9yZWR1eC9saWIvYXBwbHlNaWRkbGV3YXJlLmpzXG4vLyBtb2R1bGUgaWQgPSAzMjFcbi8vIG1vZHVsZSBjaHVua3MgPSAzIiwiXCJ1c2Ugc3RyaWN0XCI7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0c1tcImRlZmF1bHRcIl09Y29tcG9zZTsvKipcbiAqIENvbXBvc2VzIHNpbmdsZS1hcmd1bWVudCBmdW5jdGlvbnMgZnJvbSByaWdodCB0byBsZWZ0LiBUaGUgcmlnaHRtb3N0XG4gKiBmdW5jdGlvbiBjYW4gdGFrZSBtdWx0aXBsZSBhcmd1bWVudHMgYXMgaXQgcHJvdmlkZXMgdGhlIHNpZ25hdHVyZSBmb3JcbiAqIHRoZSByZXN1bHRpbmcgY29tcG9zaXRlIGZ1bmN0aW9uLlxuICpcbiAqIEBwYXJhbSB7Li4uRnVuY3Rpb259IGZ1bmNzIFRoZSBmdW5jdGlvbnMgdG8gY29tcG9zZS5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gQSBmdW5jdGlvbiBvYnRhaW5lZCBieSBjb21wb3NpbmcgdGhlIGFyZ3VtZW50IGZ1bmN0aW9uc1xuICogZnJvbSByaWdodCB0byBsZWZ0LiBGb3IgZXhhbXBsZSwgY29tcG9zZShmLCBnLCBoKSBpcyBpZGVudGljYWwgdG8gZG9pbmdcbiAqICguLi5hcmdzKSA9PiBmKGcoaCguLi5hcmdzKSkpLlxuICovZnVuY3Rpb24gY29tcG9zZSgpe2Zvcih2YXIgX2xlbj1hcmd1bWVudHMubGVuZ3RoLGZ1bmNzPUFycmF5KF9sZW4pLF9rZXk9MDtfa2V5PF9sZW47X2tleSsrKXtmdW5jc1tfa2V5XT1hcmd1bWVudHNbX2tleV07fWlmKGZ1bmNzLmxlbmd0aD09PTApe3JldHVybiBmdW5jdGlvbihhcmcpe3JldHVybiBhcmc7fTt9aWYoZnVuY3MubGVuZ3RoPT09MSl7cmV0dXJuIGZ1bmNzWzBdO31yZXR1cm4gZnVuY3MucmVkdWNlKGZ1bmN0aW9uKGEsYil7cmV0dXJuIGZ1bmN0aW9uKCl7cmV0dXJuIGEoYi5hcHBseSh1bmRlZmluZWQsYXJndW1lbnRzKSk7fTt9KTt9XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3JlZHV4L2xpYi9jb21wb3NlLmpzXG4vLyBtb2R1bGUgaWQgPSAzMjJcbi8vIG1vZHVsZSBjaHVua3MgPSAzIiwiJ3VzZSBzdHJpY3QnO09iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLFwiX19lc01vZHVsZVwiLHt2YWx1ZTp0cnVlfSk7dmFyIF9yZWR1eD1yZXF1aXJlKCdyZWR1eCcpO3ZhciBfcGljdHVyZXM9cmVxdWlyZSgnLi9waWN0dXJlcycpO3ZhciBfcGljdHVyZXMyPV9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3BpY3R1cmVzKTt2YXIgX2ZpbHRlcnM9cmVxdWlyZSgnLi9maWx0ZXJzJyk7dmFyIF9maWx0ZXJzMj1faW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9maWx0ZXJzKTt2YXIgX2RlYWxzPXJlcXVpcmUoJy4vZGVhbHMnKTt2YXIgX2RlYWxzMj1faW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9kZWFscyk7dmFyIF9zdGF0dXNlcz1yZXF1aXJlKCcuL3N0YXR1c2VzJyk7dmFyIF9zdGF0dXNlczI9X2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc3RhdHVzZXMpO3ZhciBfbWVudT1yZXF1aXJlKCcuL21lbnUnKTt2YXIgX21lbnUyPV9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX21lbnUpO3ZhciBfYXV0aG9ycz1yZXF1aXJlKCcuL2F1dGhvcnMnKTt2YXIgX2F1dGhvcnMyPV9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2F1dGhvcnMpO3ZhciBfdXNlckFwcGxpY2F0aW9ucz1yZXF1aXJlKCcuL3VzZXJBcHBsaWNhdGlvbnMnKTt2YXIgX3VzZXJBcHBsaWNhdGlvbnMyPV9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3VzZXJBcHBsaWNhdGlvbnMpO2Z1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKXtyZXR1cm4gb2JqJiZvYmouX19lc01vZHVsZT9vYmo6e2RlZmF1bHQ6b2JqfTt9ZXhwb3J0cy5kZWZhdWx0PSgwLF9yZWR1eC5jb21iaW5lUmVkdWNlcnMpKHtwaWN0dXJlczpfcGljdHVyZXMyLmRlZmF1bHQsZmlsdGVyczpfZmlsdGVyczIuZGVmYXVsdCxkZWFsczpfZGVhbHMyLmRlZmF1bHQsc3RhdHVzZXM6X3N0YXR1c2VzMi5kZWZhdWx0LG1lbnU6X21lbnUyLmRlZmF1bHQsYXV0aG9yczpfYXV0aG9yczIuZGVmYXVsdCx1c2VyQXBwbGljYXRpb25zOl91c2VyQXBwbGljYXRpb25zMi5kZWZhdWx0fSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9mcm9udGVuZC9yZWR1Y2Vycy9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMzIzXG4vLyBtb2R1bGUgY2h1bmtzID0gMyIsIid1c2Ugc3RyaWN0JztPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cyxcIl9fZXNNb2R1bGVcIix7dmFsdWU6dHJ1ZX0pO3ZhciBfZXh0ZW5kcz1PYmplY3QuYXNzaWdufHxmdW5jdGlvbih0YXJnZXQpe2Zvcih2YXIgaT0xO2k8YXJndW1lbnRzLmxlbmd0aDtpKyspe3ZhciBzb3VyY2U9YXJndW1lbnRzW2ldO2Zvcih2YXIga2V5IGluIHNvdXJjZSl7aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSxrZXkpKXt0YXJnZXRba2V5XT1zb3VyY2Vba2V5XTt9fX1yZXR1cm4gdGFyZ2V0O307ZXhwb3J0cy5kZWZhdWx0PXBpY3R1cmVSZWR1Y2VyO3ZhciBpbml0aWFsU3RhdGU9e3BpY3R1cmVzOltdfTsvLyBVc2UgdGhlIGluaXRpYWxTdGF0ZSBhcyBhIGRlZmF1bHQgdmFsdWVcbmZ1bmN0aW9uIHBpY3R1cmVSZWR1Y2VyKCl7dmFyIHN0YXRlPWFyZ3VtZW50cy5sZW5ndGg+MCYmYXJndW1lbnRzWzBdIT09dW5kZWZpbmVkP2FyZ3VtZW50c1swXTppbml0aWFsU3RhdGU7dmFyIGFjdGlvbj1hcmd1bWVudHNbMV07Y29uc29sZS5sb2coJ3BpY3R1cmVSZWR1Y2VyJyxhY3Rpb24pOy8vIFRoZSByZWR1Y2VyIG5vcm1hbGx5IGxvb2tzIGF0IHRoZSBhY3Rpb24gdHlwZSBmaWVsZCB0byBkZWNpZGUgd2hhdCBoYXBwZW5zXG5zd2l0Y2goYWN0aW9uLnR5cGUpey8vIERvIHNvbWV0aGluZyBoZXJlIGJhc2VkIG9uIHRoZSBkaWZmZXJlbnQgdHlwZXMgb2YgYWN0aW9uc1xuY2FzZSdwaWN0dXJlcyc6ey8vIFdlIG5lZWQgdG8gcmV0dXJuIGEgbmV3IHN0YXRlIG9iamVjdFxucmV0dXJuIF9leHRlbmRzKHt9LHN0YXRlLHtwaWN0dXJlczphY3Rpb24ucGljdHVyZXMscmVsb2FkQWN0aXZlUGFnZUNvbXBvbmVudDpmYWxzZX0pO31jYXNlJ2FkZFBpY3R1cmUnOntyZXR1cm4gX2V4dGVuZHMoe30sc3RhdGUse3BpY3R1cmVzOnN0YXRlLnBpY3R1cmVzLm1hcChmdW5jdGlvbihwaWN0dXJlKXtyZXR1cm4gcGljdHVyZS5pZD09PWFjdGlvbi5waWN0dXJlLmlkP19leHRlbmRzKHt9LHBpY3R1cmUsYWN0aW9uLnBpY3R1cmUse2ZpbGU6cGljdHVyZS5maWxlfSk6cGljdHVyZTt9KX0pO31kZWZhdWx0Oi8vIElmIHRoaXMgcmVkdWNlciBkb2Vzbid0IHJlY29nbml6ZSB0aGUgYWN0aW9uIHR5cGUsIG9yIGRvZXNuJ3Rcbi8vIGNhcmUgYWJvdXQgdGhpcyBzcGVjaWZpYyBhY3Rpb24sIHJldHVybiB0aGUgZXhpc3Rpbmcgc3RhdGUgdW5jaGFuZ2VkXG5yZXR1cm4gc3RhdGU7fX1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2Zyb250ZW5kL3JlZHVjZXJzL3BpY3R1cmVzLmpzXG4vLyBtb2R1bGUgaWQgPSAzMjRcbi8vIG1vZHVsZSBjaHVua3MgPSAzIiwiJ3VzZSBzdHJpY3QnO09iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLFwiX19lc01vZHVsZVwiLHt2YWx1ZTp0cnVlfSk7dmFyIF9leHRlbmRzPU9iamVjdC5hc3NpZ258fGZ1bmN0aW9uKHRhcmdldCl7Zm9yKHZhciBpPTE7aTxhcmd1bWVudHMubGVuZ3RoO2krKyl7dmFyIHNvdXJjZT1hcmd1bWVudHNbaV07Zm9yKHZhciBrZXkgaW4gc291cmNlKXtpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLGtleSkpe3RhcmdldFtrZXldPXNvdXJjZVtrZXldO319fXJldHVybiB0YXJnZXQ7fTtleHBvcnRzLmRlZmF1bHQ9ZmlsdGVyUmVkdWNlcjt2YXIgaW5pdGlhbFN0YXRlPXtmaWx0ZXI6e3NlYXJjaFRleHQ6JycsYWRkaXRpb25hbEZpbHRlcjp7Y29udGluZW50OicnLHJlZ2lvbjonJyxjaXR5OicnfX19Oy8vIFVzZSB0aGUgaW5pdGlhbFN0YXRlIGFzIGEgZGVmYXVsdCB2YWx1ZVxuZnVuY3Rpb24gZmlsdGVyUmVkdWNlcigpe3ZhciBzdGF0ZT1hcmd1bWVudHMubGVuZ3RoPjAmJmFyZ3VtZW50c1swXSE9PXVuZGVmaW5lZD9hcmd1bWVudHNbMF06aW5pdGlhbFN0YXRlO3ZhciBhY3Rpb249YXJndW1lbnRzWzFdO2NvbnNvbGUubG9nKCdmaWx0ZXJSZWR1Y2VyJyxhY3Rpb24pOy8vIFRoZSByZWR1Y2VyIG5vcm1hbGx5IGxvb2tzIGF0IHRoZSBhY3Rpb24gdHlwZSBmaWVsZCB0byBkZWNpZGUgd2hhdCBoYXBwZW5zXG5zd2l0Y2goYWN0aW9uLnR5cGUpey8vIERvIHNvbWV0aGluZyBoZXJlIGJhc2VkIG9uIHRoZSBkaWZmZXJlbnQgdHlwZXMgb2YgYWN0aW9uc1xuY2FzZSdmaWx0ZXInOntyZXR1cm4gX2V4dGVuZHMoe30sc3RhdGUse2ZpbHRlcjp7c2VhcmNoVGV4dDphY3Rpb24uZmlsdGVyfX0pO31jYXNlJ2FkZGl0aW9uYWxGaWx0ZXInOntyZXR1cm4gX2V4dGVuZHMoe30sc3RhdGUse2ZpbHRlcjp7YWRkaXRpb25hbEZpbHRlcjphY3Rpb24uYWRkaXRpb25hbEZpbHRlcn19KTt9ZGVmYXVsdDovLyBJZiB0aGlzIHJlZHVjZXIgZG9lc24ndCByZWNvZ25pemUgdGhlIGFjdGlvbiB0eXBlLCBvciBkb2Vzbid0XG4vLyBjYXJlIGFib3V0IHRoaXMgc3BlY2lmaWMgYWN0aW9uLCByZXR1cm4gdGhlIGV4aXN0aW5nIHN0YXRlIHVuY2hhbmdlZFxucmV0dXJuIHN0YXRlO319XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9mcm9udGVuZC9yZWR1Y2Vycy9maWx0ZXJzLmpzXG4vLyBtb2R1bGUgaWQgPSAzMjVcbi8vIG1vZHVsZSBjaHVua3MgPSAzIiwiJ3VzZSBzdHJpY3QnO09iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLFwiX19lc01vZHVsZVwiLHt2YWx1ZTp0cnVlfSk7dmFyIF9leHRlbmRzPU9iamVjdC5hc3NpZ258fGZ1bmN0aW9uKHRhcmdldCl7Zm9yKHZhciBpPTE7aTxhcmd1bWVudHMubGVuZ3RoO2krKyl7dmFyIHNvdXJjZT1hcmd1bWVudHNbaV07Zm9yKHZhciBrZXkgaW4gc291cmNlKXtpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLGtleSkpe3RhcmdldFtrZXldPXNvdXJjZVtrZXldO319fXJldHVybiB0YXJnZXQ7fTtleHBvcnRzLmRlZmF1bHQ9ZGVhbHNSZWR1Y2VyO3ZhciBpbml0aWFsU3RhdGU9e2RlYWxzOltdfTsvLyBVc2UgdGhlIGluaXRpYWxTdGF0ZSBhcyBhIGRlZmF1bHQgdmFsdWVcbmZ1bmN0aW9uIGRlYWxzUmVkdWNlcigpe3ZhciBzdGF0ZT1hcmd1bWVudHMubGVuZ3RoPjAmJmFyZ3VtZW50c1swXSE9PXVuZGVmaW5lZD9hcmd1bWVudHNbMF06aW5pdGlhbFN0YXRlO3ZhciBhY3Rpb249YXJndW1lbnRzWzFdO2NvbnNvbGUubG9nKCdkZWFsc1JlZHVjZXInLGFjdGlvbik7Ly8gVGhlIHJlZHVjZXIgbm9ybWFsbHkgbG9va3MgYXQgdGhlIGFjdGlvbiB0eXBlIGZpZWxkIHRvIGRlY2lkZSB3aGF0IGhhcHBlbnNcbnN3aXRjaChhY3Rpb24udHlwZSl7Ly8gRG8gc29tZXRoaW5nIGhlcmUgYmFzZWQgb24gdGhlIGRpZmZlcmVudCB0eXBlcyBvZiBhY3Rpb25zXG5jYXNlJ2RlYWxzJzp7cmV0dXJuIF9leHRlbmRzKHt9LHN0YXRlLHtkZWFsczphY3Rpb24uZGVhbHN9KTt9ZGVmYXVsdDovLyBJZiB0aGlzIHJlZHVjZXIgZG9lc24ndCByZWNvZ25pemUgdGhlIGFjdGlvbiB0eXBlLCBvciBkb2Vzbid0XG4vLyBjYXJlIGFib3V0IHRoaXMgc3BlY2lmaWMgYWN0aW9uLCByZXR1cm4gdGhlIGV4aXN0aW5nIHN0YXRlIHVuY2hhbmdlZFxucmV0dXJuIHN0YXRlO319XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9mcm9udGVuZC9yZWR1Y2Vycy9kZWFscy5qc1xuLy8gbW9kdWxlIGlkID0gMzI2XG4vLyBtb2R1bGUgY2h1bmtzID0gMyIsIid1c2Ugc3RyaWN0JztPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cyxcIl9fZXNNb2R1bGVcIix7dmFsdWU6dHJ1ZX0pO3ZhciBfZXh0ZW5kcz1PYmplY3QuYXNzaWdufHxmdW5jdGlvbih0YXJnZXQpe2Zvcih2YXIgaT0xO2k8YXJndW1lbnRzLmxlbmd0aDtpKyspe3ZhciBzb3VyY2U9YXJndW1lbnRzW2ldO2Zvcih2YXIga2V5IGluIHNvdXJjZSl7aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSxrZXkpKXt0YXJnZXRba2V5XT1zb3VyY2Vba2V5XTt9fX1yZXR1cm4gdGFyZ2V0O307ZXhwb3J0cy5kZWZhdWx0PWFwcFJlZHVjZXI7dmFyIGluaXRpYWxTdGF0ZT17dXNlcjp7aWQ6MCxrYXN1dGFqYTpudWxsLEFtZXRuaWs6bnVsbCxpc19rYXN1dGFqYTpmYWxzZSxpc19hZG1pbjpmYWxzZSxpc19yYWFtYTpmYWxzZSxsb2dlZEluOmZhbHNlfSxhY3RpdmVQYWdlQ29tcG9uZW50OidwaWN0dXJlcycscmVsb2FkQWN0aXZlUGFnZUNvbXBvbmVudDpmYWxzZSxpc1BpY3R1cmVTaG93OmZhbHNlLHBpY3R1cmVJZDpudWxsLG1lbnU6W3tpZDona2FzdXRhamEnLHBhcmVudGlkOjAsa29vZDona2FzdXRhamEnLG5hbWU6J2thc3V0YWphJyxwcm9wczpudWxsfSx7aWQ6J21haW4nLHBhcmVudGlkOjAsa29vZDonbWFpbicsbmFtZTonbWFpbicscHJvcHM6bnVsbH0se2lkOidkb2N1bWVudCcscGFyZW50aWQ6MCxrb29kOidkb2N1bWVudCcsbmFtZTonRG9jdW1lbnRzJyxwcm9wczpudWxsLGlzX25vZGU6dHJ1ZX0se2lkOidwaWN0dXJlcycscGFyZW50aWQ6J2RvY3VtZW50Jyxrb29kOidQaWN0dXJlcycsbmFtZTonUGljdHVyZXMnLHByb3BzOnt0eXBlOlwiZG9jdW1lbnRcIixtb2R1bGU6W1wibWFpblwiXX0saXNfbm9kZTpmYWxzZX0se2lkOidUQU9UTFVTX0xPR0lOJyxwYXJlbnRpZDonZG9jdW1lbnQnLGtvb2Q6J1RBT1RMVVNfTE9HSU4nLG5hbWU6J05ldyB1c2VyIGFwcGxpY2F0aW9ucycscHJvcHM6e3R5cGU6XCJkb2N1bWVudFwiLG1vZHVsZTpbXCJtYWluXCJdLGlzX2FkbWluOnRydWV9LGlzX25vZGU6ZmFsc2V9LHtpZDonREVBTFMnLHBhcmVudGlkOidkb2N1bWVudCcsa29vZDonREVBTFMnLG5hbWU6J0RlYWxzIHdpdGggcGljdHVyZXMnLHByb3BzOnt0eXBlOlwiZG9jdW1lbnRcIixtb2R1bGU6W1wibWFpblwiXSxpc19hZG1pbjp0cnVlfSxpc19ub2RlOmZhbHNlfV0sY29udGluZW50czpbJycsJ0V1cm9wZScsJ0FtZXJpY2EnLCdBc2lhJywnQXVzdHJhbGlhJywnUnVzc2lhJ10sY2l0aWVzOlsnJywnVGFsbGlubmEnLCdUYXJ0dScsJ05hcnZhJywnVsO1cnUnLCdWYWxnYScsJ1NpbGxhbcOkZScsJ1ZpbGphbmRpJ10scmVnaW9uczpbJycsJ0lkYSBWaXJ1bWFhJywnTMOkw6RuZSBWaXJ1bWFhJywnSGFyanVtYWEnLCdMw6TDpG5lJywnUMOkcm51JywnU2FhcmUnLCdIaWl1bWFhJywnVmlsamFuZGknLCdWYWxnYScsJ1bDtXJ1JywnVGFydHUnLCdQw7VsdmEnLCdKw6RydmEnXX07Ly8gVXNlIHRoZSBpbml0aWFsU3RhdGUgYXMgYSBkZWZhdWx0IHZhbHVlXG5mdW5jdGlvbiBhcHBSZWR1Y2VyKCl7dmFyIHN0YXRlPWFyZ3VtZW50cy5sZW5ndGg+MCYmYXJndW1lbnRzWzBdIT09dW5kZWZpbmVkP2FyZ3VtZW50c1swXTppbml0aWFsU3RhdGU7dmFyIGFjdGlvbj1hcmd1bWVudHNbMV07Y29uc29sZS5sb2coJ3JlZHVjZXInLGFjdGlvbik7Ly8gVGhlIHJlZHVjZXIgbm9ybWFsbHkgbG9va3MgYXQgdGhlIGFjdGlvbiB0eXBlIGZpZWxkIHRvIGRlY2lkZSB3aGF0IGhhcHBlbnNcbnN3aXRjaChhY3Rpb24udHlwZSl7Y2FzZSd1c2VyJzp7cmV0dXJuIF9leHRlbmRzKHt9LHN0YXRlLHt1c2VyOmFjdGlvbi51c2VyfSk7fWNhc2UnYWN0aXZlUGFnZUNvbXBvbmVudCc6e3JldHVybiBfZXh0ZW5kcyh7fSxzdGF0ZSx7YWN0aXZlUGFnZUNvbXBvbmVudDphY3Rpb24uYWN0aXZlUGFnZUNvbXBvbmVudH0pO31jYXNlJ3JlbG9hZEFjdGl2ZVBhZ2VDb21wb25lbnQnOntyZXR1cm4gX2V4dGVuZHMoe30sc3RhdGUse3JlbG9hZEFjdGl2ZVBhZ2VDb21wb25lbnQ6YWN0aW9uLnJlbG9hZEFjdGl2ZVBhZ2VDb21wb25lbnR9KTt9Y2FzZSdpc1BpY3R1cmVTaG93Jzp7cmV0dXJuIF9leHRlbmRzKHt9LHN0YXRlLHtpc1BpY3R1cmVTaG93OmFjdGlvbi5pc1BpY3R1cmVTaG93fSk7fWNhc2UncGljdHVyZUlkJzp7cmV0dXJuIF9leHRlbmRzKHt9LHN0YXRlLHtwaWN0dXJlSWQ6YWN0aW9uLnBpY3R1cmVJZH0pO31kZWZhdWx0Oi8vIElmIHRoaXMgcmVkdWNlciBkb2Vzbid0IHJlY29nbml6ZSB0aGUgYWN0aW9uIHR5cGUsIG9yIGRvZXNuJ3Rcbi8vIGNhcmUgYWJvdXQgdGhpcyBzcGVjaWZpYyBhY3Rpb24sIHJldHVybiB0aGUgZXhpc3Rpbmcgc3RhdGUgdW5jaGFuZ2VkXG5yZXR1cm4gc3RhdGU7fX0vKlxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRBdXRob3JzICgpIHtcclxuICAgIGNvbnNvbGUubG9nKCdnZXRBdXRob3JzJylcclxuICAgIHJldHVybiBkaXNwYXRjaCA9PiB7XHJcbiAgICAgICAgLy8g0LTQuNGB0L/QsNGC0YfQuNC8INC70L7QsNC00LXRgFxyXG4gICAgICAgIC8hKlxyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogYXV0aG9ycyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGF5bG9hZDogdHJ1ZVxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgICohL1xyXG4gICAgICAgIGZldGNoRGF0YS5mZXRjaERhdGFQb3N0KGAvbWFpbi9hdXRob3JzL2ApLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgIC8vINGD0YHQv9C10YjQvdC+INC/0L7Qu9GD0YfQuNC70Lgg0LTQsNC90L3Ri9C1XHJcbiAgICAgICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgICAgIHR5cGU6ICdhdXRob3JzJyxcclxuICAgICAgICAgICAgICAgIGF1dGhvcnM6IHJlc3BvbnNlLmRhdGEuZGF0YVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgLyEqXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGF4aW9zLmdldCgnL21haW4vYXV0aG9ycy8nKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAudGhlbihyZXMgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8g0YPRgdC/0LXRiNC90L4g0L/QvtC70YPRh9C40LvQuCDQtNCw0L3QvdGL0LVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnYXV0aG9ycycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGF5bG9hZDogcmVzdWx0LmRhdGEuZGF0YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAqIS9cclxuICAgICAgICAvISpcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmNhdGgoZXJyID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vINCe0YjQuNCx0LrQsC4uLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IEdFVF9QUk9GSUxFX0VSUk9SXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGF5bG9hZDogdHJ1ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAqIS9cclxuICAgIH1cclxufVxyXG4qL1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vZnJvbnRlbmQvcmVkdWNlcnMvc3RhdHVzZXMuanNcbi8vIG1vZHVsZSBpZCA9IDMyN1xuLy8gbW9kdWxlIGNodW5rcyA9IDMiLCIndXNlIHN0cmljdCc7T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOnRydWV9KTtleHBvcnRzLmRlZmF1bHQ9YXBwUmVkdWNlcjt2YXIgaW5pdGlhbFN0YXRlPXttZW51Olt7aWQ6J2thc3V0YWphJyxwYXJlbnRpZDowLGtvb2Q6J2thc3V0YWphJyxuYW1lOidrYXN1dGFqYScscHJvcHM6bnVsbH0se2lkOidtYWluJyxwYXJlbnRpZDowLGtvb2Q6J21haW4nLG5hbWU6J21haW4nLHByb3BzOm51bGx9LHtpZDonZG9jdW1lbnQnLHBhcmVudGlkOjAsa29vZDonZG9jdW1lbnQnLG5hbWU6J0RvY3VtZW50cycscHJvcHM6bnVsbCxpc19ub2RlOnRydWV9LHtpZDonbW9kdWxlJyxwYXJlbnRpZDowLGtvb2Q6J21vZHVsZScsbmFtZTonTW9kdWxlcycscHJvcHM6bnVsbCxpc19ub2RlOnRydWV9LHtpZDoncGljdHVyZXMnLHBhcmVudGlkOidkb2N1bWVudCcsa29vZDonUGljdHVyZXMnLG5hbWU6J1BpY3R1cmVzJyxwcm9wczp7dHlwZTpcImRvY3VtZW50XCIsbW9kdWxlOltcIm1haW5cIl19LGlzX25vZGU6ZmFsc2V9LHtpZDonVEFPVExVU19MT0dJTicscGFyZW50aWQ6J2RvY3VtZW50Jyxrb29kOidUQU9UTFVTX0xPR0lOJyxuYW1lOidOZXcgdXNlciBhcHBsaWNhdGlvbnMnLHByb3BzOnt0eXBlOlwiZG9jdW1lbnRcIixtb2R1bGU6W1wibWFpblwiXSxpc19hZG1pbjp0cnVlfSxpc19ub2RlOmZhbHNlfSx7aWQ6J0RFQUxTJyxwYXJlbnRpZDonZG9jdW1lbnQnLGtvb2Q6J0RFQUxTJyxuYW1lOidEZWFscyB3aXRoIHBpY3R1cmVzJyxwcm9wczp7dHlwZTpcImRvY3VtZW50XCIsbW9kdWxlOltcIm1haW5cIl0saXNfYWRtaW46dHJ1ZX0saXNfbm9kZTpmYWxzZX0se2lkOidBVVRIT1JTJyxwYXJlbnRpZDonZG9jdW1lbnQnLGtvb2Q6J0FVVEhPUlMnLG5hbWU6J0F1dGhvcnMnLHByb3BzOnt0eXBlOlwiZG9jdW1lbnRcIixtb2R1bGU6W1wibWFpblwiXSxpc19hZG1pbjp0cnVlfSxpc19ub2RlOmZhbHNlfSx7aWQ6J1JBQU1BJyxwYXJlbnRpZDonbW9kdWxlJyxrb29kOidSQUFNQScsbmFtZTonQWNjb3VudGluZycscHJvcHM6e3R5cGU6XCJtb2R1bGVcIixtb2R1bGU6W1wicmFhbWFcIl0saXNfYWRtaW46dHJ1ZX0saXNfbm9kZTpmYWxzZX1dfTsvLyBVc2UgdGhlIGluaXRpYWxTdGF0ZSBhcyBhIGRlZmF1bHQgdmFsdWVcbmZ1bmN0aW9uIGFwcFJlZHVjZXIoKXt2YXIgc3RhdGU9YXJndW1lbnRzLmxlbmd0aD4wJiZhcmd1bWVudHNbMF0hPT11bmRlZmluZWQ/YXJndW1lbnRzWzBdOmluaXRpYWxTdGF0ZTt2YXIgYWN0aW9uPWFyZ3VtZW50c1sxXTtjb25zb2xlLmxvZygncmVkdWNlcicsYWN0aW9uKTtyZXR1cm4gc3RhdGU7fVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vZnJvbnRlbmQvcmVkdWNlcnMvbWVudS5qc1xuLy8gbW9kdWxlIGlkID0gMzI4XG4vLyBtb2R1bGUgY2h1bmtzID0gMyIsIid1c2Ugc3RyaWN0JztPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cyxcIl9fZXNNb2R1bGVcIix7dmFsdWU6dHJ1ZX0pO2V4cG9ydHMuZGVmYXVsdD1hdXRob3JzUmVkdWNlcjt2YXIgZmV0Y2hEYXRhPXJlcXVpcmUoJy4vLi4vLi4vbGlicy9mZXRjaERhdGEnKTt2YXIgaW5pdGlhbFN0YXRlPVtdOy8vIFVzZSB0aGUgaW5pdGlhbFN0YXRlIGFzIGEgZGVmYXVsdCB2YWx1ZVxuZnVuY3Rpb24gYXV0aG9yc1JlZHVjZXIoKXt2YXIgc3RhdGU9YXJndW1lbnRzLmxlbmd0aD4wJiZhcmd1bWVudHNbMF0hPT11bmRlZmluZWQ/YXJndW1lbnRzWzBdOmluaXRpYWxTdGF0ZTt2YXIgYWN0aW9uPWFyZ3VtZW50c1sxXTtjb25zb2xlLmxvZygnYXV0aG9yc1JlZHVjZXInLGFjdGlvbik7Ly8gVGhlIHJlZHVjZXIgbm9ybWFsbHkgbG9va3MgYXQgdGhlIGFjdGlvbiB0eXBlIGZpZWxkIHRvIGRlY2lkZSB3aGF0IGhhcHBlbnNcbnN3aXRjaChhY3Rpb24udHlwZSl7Ly8gRG8gc29tZXRoaW5nIGhlcmUgYmFzZWQgb24gdGhlIGRpZmZlcmVudCB0eXBlcyBvZiBhY3Rpb25zXG5jYXNlJ2F1dGhvcnMnOntyZXR1cm4gYWN0aW9uLmxpYnJhcnk7fWNhc2UnZ2V0QXV0aG9ycyc6e3ZhciBhdXRob3JzPWdldEF1dGhvcnMoKTtjb25zb2xlLmxvZygnZ2V0QXV0aG9ycyBnb3QgYXV0aG9ycycsYXV0aG9ycyk7cmV0dXJuIGF1dGhvcnM7fWRlZmF1bHQ6Ly8gSWYgdGhpcyByZWR1Y2VyIGRvZXNuJ3QgcmVjb2duaXplIHRoZSBhY3Rpb24gdHlwZSwgb3IgZG9lc24ndFxuLy8gY2FyZSBhYm91dCB0aGlzIHNwZWNpZmljIGFjdGlvbiwgcmV0dXJuIHRoZSBleGlzdGluZyBzdGF0ZSB1bmNoYW5nZWRcbnJldHVybiBzdGF0ZTt9ZnVuY3Rpb24gZ2V0QXV0aG9ycygpe2NvbnNvbGUubG9nKCdnZXRBdXRob3JzJyk7LypcclxuICAgICAgICBsZXQgdXNlciA9IHRoaXMucHJvcHMuc3RvcmUuZ2V0U3RhdGUoKS51c2VyO1xyXG5cclxuICAgICAgICBsZXQgZGF0YSA9IGF3YWl0IGZldGNoRGF0YS5mZXRjaERhdGFQb3N0KGAvbWFpbi9hdXRob3JzL2AsIHVzZXIpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdkYXRhJywgZGF0YSlcclxuKi9yZXR1cm5be2lkOjAsY29kZTonY29kZTEnLG5hbWU6J05hbWUgMSd9XTt9fVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vZnJvbnRlbmQvcmVkdWNlcnMvYXV0aG9ycy5qc1xuLy8gbW9kdWxlIGlkID0gMzI5XG4vLyBtb2R1bGUgY2h1bmtzID0gMyIsIid1c2Ugc3RyaWN0JztPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cyxcIl9fZXNNb2R1bGVcIix7dmFsdWU6dHJ1ZX0pO3ZhciBfZXh0ZW5kcz1PYmplY3QuYXNzaWdufHxmdW5jdGlvbih0YXJnZXQpe2Zvcih2YXIgaT0xO2k8YXJndW1lbnRzLmxlbmd0aDtpKyspe3ZhciBzb3VyY2U9YXJndW1lbnRzW2ldO2Zvcih2YXIga2V5IGluIHNvdXJjZSl7aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSxrZXkpKXt0YXJnZXRba2V5XT1zb3VyY2Vba2V5XTt9fX1yZXR1cm4gdGFyZ2V0O307ZXhwb3J0cy5kZWZhdWx0PW1lbnVSZWR1Y2VyO3ZhciBpbml0aWFsU3RhdGU9e3VzZXJBcHBsaWNhdGlvbnM6W119Oy8vIFVzZSB0aGUgaW5pdGlhbFN0YXRlIGFzIGEgZGVmYXVsdCB2YWx1ZVxuZnVuY3Rpb24gbWVudVJlZHVjZXIoKXt2YXIgc3RhdGU9YXJndW1lbnRzLmxlbmd0aD4wJiZhcmd1bWVudHNbMF0hPT11bmRlZmluZWQ/YXJndW1lbnRzWzBdOmluaXRpYWxTdGF0ZTt2YXIgYWN0aW9uPWFyZ3VtZW50c1sxXTtjb25zb2xlLmxvZygnbWVudVJlZHVjZXInLGFjdGlvbik7Ly8gVGhlIHJlZHVjZXIgbm9ybWFsbHkgbG9va3MgYXQgdGhlIGFjdGlvbiB0eXBlIGZpZWxkIHRvIGRlY2lkZSB3aGF0IGhhcHBlbnNcbnN3aXRjaChhY3Rpb24udHlwZSl7Ly8gRG8gc29tZXRoaW5nIGhlcmUgYmFzZWQgb24gdGhlIGRpZmZlcmVudCB0eXBlcyBvZiBhY3Rpb25zXG5jYXNlJ3VzZXJBcHBsaWNhdGlvbnMnOntyZXR1cm4gX2V4dGVuZHMoe30sc3RhdGUse3VzZXJBcHBsaWNhdGlvbnM6YWN0aW9uLnVzZXJBcHBsaWNhdGlvbnMscmVsb2FkQWN0aXZlUGFnZUNvbXBvbmVudDpmYWxzZX0pO31kZWZhdWx0Oi8vIElmIHRoaXMgcmVkdWNlciBkb2Vzbid0IHJlY29nbml6ZSB0aGUgYWN0aW9uIHR5cGUsIG9yIGRvZXNuJ3Rcbi8vIGNhcmUgYWJvdXQgdGhpcyBzcGVjaWZpYyBhY3Rpb24sIHJldHVybiB0aGUgZXhpc3Rpbmcgc3RhdGUgdW5jaGFuZ2VkXG5yZXR1cm4gc3RhdGU7fX1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2Zyb250ZW5kL3JlZHVjZXJzL3VzZXJBcHBsaWNhdGlvbnMuanNcbi8vIG1vZHVsZSBpZCA9IDMzMFxuLy8gbW9kdWxlIGNodW5rcyA9IDMiLCIndXNlIHN0cmljdCc7dmFyIF90eXBlb2Y9dHlwZW9mIFN5bWJvbD09PVwiZnVuY3Rpb25cIiYmdHlwZW9mIFN5bWJvbC5pdGVyYXRvcj09PVwic3ltYm9sXCI/ZnVuY3Rpb24ob2JqKXtyZXR1cm4gdHlwZW9mIG9iajt9OmZ1bmN0aW9uKG9iail7cmV0dXJuIG9iaiYmdHlwZW9mIFN5bWJvbD09PVwiZnVuY3Rpb25cIiYmb2JqLmNvbnN0cnVjdG9yPT09U3ltYm9sJiZvYmohPT1TeW1ib2wucHJvdG90eXBlP1wic3ltYm9sXCI6dHlwZW9mIG9iajt9O3ZhciBjb21wb3NlPXJlcXVpcmUoJ3JlZHV4JykuY29tcG9zZTtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLmNvbXBvc2VXaXRoRGV2VG9vbHM9dHlwZW9mIHdpbmRvdyE9PSd1bmRlZmluZWQnJiZ3aW5kb3cuX19SRURVWF9ERVZUT09MU19FWFRFTlNJT05fQ09NUE9TRV9fP3dpbmRvdy5fX1JFRFVYX0RFVlRPT0xTX0VYVEVOU0lPTl9DT01QT1NFX186ZnVuY3Rpb24oKXtpZihhcmd1bWVudHMubGVuZ3RoPT09MClyZXR1cm4gdW5kZWZpbmVkO2lmKF90eXBlb2YoYXJndW1lbnRzWzBdKT09PSdvYmplY3QnKXJldHVybiBjb21wb3NlO3JldHVybiBjb21wb3NlLmFwcGx5KG51bGwsYXJndW1lbnRzKTt9O2V4cG9ydHMuZGV2VG9vbHNFbmhhbmNlcj10eXBlb2Ygd2luZG93IT09J3VuZGVmaW5lZCcmJndpbmRvdy5fX1JFRFVYX0RFVlRPT0xTX0VYVEVOU0lPTl9fP3dpbmRvdy5fX1JFRFVYX0RFVlRPT0xTX0VYVEVOU0lPTl9fOmZ1bmN0aW9uKCl7cmV0dXJuIGZ1bmN0aW9uKG5vb3Ape3JldHVybiBub29wO307fTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vcmVkdXgtZGV2dG9vbHMtZXh0ZW5zaW9uL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAzMzFcbi8vIG1vZHVsZSBjaHVua3MgPSAzIiwiXCJ1c2Ugc3RyaWN0XCI7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7dmFyIF9leHBvcnROYW1lcz17YmF0Y2g6dHJ1ZX07T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsXCJiYXRjaFwiLHtlbnVtZXJhYmxlOnRydWUsZ2V0OmZ1bmN0aW9uIGdldCgpe3JldHVybiBfcmVhY3RCYXRjaGVkVXBkYXRlcy51bnN0YWJsZV9iYXRjaGVkVXBkYXRlczt9fSk7dmFyIF9zaGltPXJlcXVpcmUoXCJ1c2Utc3luYy1leHRlcm5hbC1zdG9yZS9zaGltXCIpO3ZhciBfd2l0aFNlbGVjdG9yPXJlcXVpcmUoXCJ1c2Utc3luYy1leHRlcm5hbC1zdG9yZS9zaGltL3dpdGgtc2VsZWN0b3JcIik7dmFyIF9yZWFjdEJhdGNoZWRVcGRhdGVzPXJlcXVpcmUoXCIuL3V0aWxzL3JlYWN0QmF0Y2hlZFVwZGF0ZXNcIik7dmFyIF9iYXRjaD1yZXF1aXJlKFwiLi91dGlscy9iYXRjaFwiKTt2YXIgX3VzZVNlbGVjdG9yPXJlcXVpcmUoXCIuL2hvb2tzL3VzZVNlbGVjdG9yXCIpO3ZhciBfY29ubmVjdD1yZXF1aXJlKFwiLi9jb21wb25lbnRzL2Nvbm5lY3RcIik7dmFyIF9leHBvcnRzPXJlcXVpcmUoXCIuL2V4cG9ydHNcIik7T2JqZWN0LmtleXMoX2V4cG9ydHMpLmZvckVhY2goZnVuY3Rpb24oa2V5KXtpZihrZXk9PT1cImRlZmF1bHRcInx8a2V5PT09XCJfX2VzTW9kdWxlXCIpcmV0dXJuO2lmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChfZXhwb3J0TmFtZXMsa2V5KSlyZXR1cm47aWYoa2V5IGluIGV4cG9ydHMmJmV4cG9ydHNba2V5XT09PV9leHBvcnRzW2tleV0pcmV0dXJuO09iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLGtleSx7ZW51bWVyYWJsZTp0cnVlLGdldDpmdW5jdGlvbiBnZXQoKXtyZXR1cm4gX2V4cG9ydHNba2V5XTt9fSk7fSk7Ly8gVGhlIHByaW1hcnkgZW50cnkgcG9pbnQgYXNzdW1lcyB3ZSdyZSB3b3JraW5nIHdpdGggc3RhbmRhcmQgUmVhY3RET00vUk4sIGJ1dFxuLy8gb2xkZXIgdmVyc2lvbnMgdGhhdCBkbyBub3QgaW5jbHVkZSBgdXNlU3luY0V4dGVybmFsU3RvcmVgIChSZWFjdCAxNi45IC0gMTcueCkuXG4vLyBCZWNhdXNlIG9mIHRoYXQsIHRoZSB1c2VTeW5jRXh0ZXJuYWxTdG9yZSBjb21wYXQgc2hpbSBpcyBuZWVkZWQuXG4oMCxfdXNlU2VsZWN0b3IuaW5pdGlhbGl6ZVVzZVNlbGVjdG9yKShfd2l0aFNlbGVjdG9yLnVzZVN5bmNFeHRlcm5hbFN0b3JlV2l0aFNlbGVjdG9yKTsoMCxfY29ubmVjdC5pbml0aWFsaXplQ29ubmVjdCkoX3NoaW0udXNlU3luY0V4dGVybmFsU3RvcmUpOy8vIEVuYWJsZSBiYXRjaGVkIHVwZGF0ZXMgaW4gb3VyIHN1YnNjcmlwdGlvbnMgZm9yIHVzZVxuLy8gd2l0aCBzdGFuZGFyZCBSZWFjdCByZW5kZXJlcnMgKFJlYWN0RE9NLCBSZWFjdCBOYXRpdmUpXG4oMCxfYmF0Y2guc2V0QmF0Y2gpKF9yZWFjdEJhdGNoZWRVcGRhdGVzLnVuc3RhYmxlX2JhdGNoZWRVcGRhdGVzKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vcmVhY3QtcmVkdXgvbGliL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAzMzJcbi8vIG1vZHVsZSBjaHVua3MgPSAzIiwiJ3VzZSBzdHJpY3QnO2lmKHByb2Nlc3MuZW52Lk5PREVfRU5WPT09J3Byb2R1Y3Rpb24nKXttb2R1bGUuZXhwb3J0cz1yZXF1aXJlKCcuLi9janMvdXNlLXN5bmMtZXh0ZXJuYWwtc3RvcmUtc2hpbS5wcm9kdWN0aW9uLm1pbi5qcycpO31lbHNle21vZHVsZS5leHBvcnRzPXJlcXVpcmUoJy4uL2Nqcy91c2Utc3luYy1leHRlcm5hbC1zdG9yZS1zaGltLmRldmVsb3BtZW50LmpzJyk7fVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi91c2Utc3luYy1leHRlcm5hbC1zdG9yZS9zaGltL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAzMzNcbi8vIG1vZHVsZSBjaHVua3MgPSAzIiwiLyoqXG4gKiBAbGljZW5zZSBSZWFjdFxuICogdXNlLXN5bmMtZXh0ZXJuYWwtc3RvcmUtc2hpbS5wcm9kdWN0aW9uLm1pbi5qc1xuICpcbiAqIENvcHlyaWdodCAoYykgRmFjZWJvb2ssIEluYy4gYW5kIGl0cyBhZmZpbGlhdGVzLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovJ3VzZSBzdHJpY3QnO3ZhciBlPXJlcXVpcmUoXCJyZWFjdFwiKTtmdW5jdGlvbiBoKGEsYil7cmV0dXJuIGE9PT1iJiYoMCE9PWF8fDEvYT09PTEvYil8fGEhPT1hJiZiIT09Yjt9dmFyIGs9XCJmdW5jdGlvblwiPT09dHlwZW9mIE9iamVjdC5pcz9PYmplY3QuaXM6aCxsPWUudXNlU3RhdGUsbT1lLnVzZUVmZmVjdCxuPWUudXNlTGF5b3V0RWZmZWN0LHA9ZS51c2VEZWJ1Z1ZhbHVlO2Z1bmN0aW9uIHEoYSxiKXt2YXIgZD1iKCksZj1sKHtpbnN0Ont2YWx1ZTpkLGdldFNuYXBzaG90OmJ9fSksYz1mWzBdLmluc3QsZz1mWzFdO24oZnVuY3Rpb24oKXtjLnZhbHVlPWQ7Yy5nZXRTbmFwc2hvdD1iO3IoYykmJmcoe2luc3Q6Y30pO30sW2EsZCxiXSk7bShmdW5jdGlvbigpe3IoYykmJmcoe2luc3Q6Y30pO3JldHVybiBhKGZ1bmN0aW9uKCl7cihjKSYmZyh7aW5zdDpjfSk7fSk7fSxbYV0pO3AoZCk7cmV0dXJuIGQ7fWZ1bmN0aW9uIHIoYSl7dmFyIGI9YS5nZXRTbmFwc2hvdDthPWEudmFsdWU7dHJ5e3ZhciBkPWIoKTtyZXR1cm4hayhhLGQpO31jYXRjaChmKXtyZXR1cm4hMDt9fWZ1bmN0aW9uIHQoYSxiKXtyZXR1cm4gYigpO312YXIgdT1cInVuZGVmaW5lZFwiPT09dHlwZW9mIHdpbmRvd3x8XCJ1bmRlZmluZWRcIj09PXR5cGVvZiB3aW5kb3cuZG9jdW1lbnR8fFwidW5kZWZpbmVkXCI9PT10eXBlb2Ygd2luZG93LmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQ/dDpxO2V4cG9ydHMudXNlU3luY0V4dGVybmFsU3RvcmU9dm9pZCAwIT09ZS51c2VTeW5jRXh0ZXJuYWxTdG9yZT9lLnVzZVN5bmNFeHRlcm5hbFN0b3JlOnU7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3VzZS1zeW5jLWV4dGVybmFsLXN0b3JlL2Nqcy91c2Utc3luYy1leHRlcm5hbC1zdG9yZS1zaGltLnByb2R1Y3Rpb24ubWluLmpzXG4vLyBtb2R1bGUgaWQgPSAzMzRcbi8vIG1vZHVsZSBjaHVua3MgPSAzIiwiLyoqXG4gKiBAbGljZW5zZSBSZWFjdFxuICogdXNlLXN5bmMtZXh0ZXJuYWwtc3RvcmUtc2hpbS5kZXZlbG9wbWVudC5qc1xuICpcbiAqIENvcHlyaWdodCAoYykgRmFjZWJvb2ssIEluYy4gYW5kIGl0cyBhZmZpbGlhdGVzLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovJ3VzZSBzdHJpY3QnO2lmKHByb2Nlc3MuZW52Lk5PREVfRU5WIT09XCJwcm9kdWN0aW9uXCIpeyhmdW5jdGlvbigpeyd1c2Ugc3RyaWN0JzsvKiBnbG9iYWwgX19SRUFDVF9ERVZUT09MU19HTE9CQUxfSE9PS19fICovaWYodHlwZW9mIF9fUkVBQ1RfREVWVE9PTFNfR0xPQkFMX0hPT0tfXyE9PSd1bmRlZmluZWQnJiZ0eXBlb2YgX19SRUFDVF9ERVZUT09MU19HTE9CQUxfSE9PS19fLnJlZ2lzdGVySW50ZXJuYWxNb2R1bGVTdGFydD09PSdmdW5jdGlvbicpe19fUkVBQ1RfREVWVE9PTFNfR0xPQkFMX0hPT0tfXy5yZWdpc3RlckludGVybmFsTW9kdWxlU3RhcnQobmV3IEVycm9yKCkpO312YXIgUmVhY3Q9cmVxdWlyZSgncmVhY3QnKTt2YXIgUmVhY3RTaGFyZWRJbnRlcm5hbHM9UmVhY3QuX19TRUNSRVRfSU5URVJOQUxTX0RPX05PVF9VU0VfT1JfWU9VX1dJTExfQkVfRklSRUQ7ZnVuY3Rpb24gZXJyb3IoZm9ybWF0KXt7e2Zvcih2YXIgX2xlbjI9YXJndW1lbnRzLmxlbmd0aCxhcmdzPW5ldyBBcnJheShfbGVuMj4xP19sZW4yLTE6MCksX2tleTI9MTtfa2V5MjxfbGVuMjtfa2V5MisrKXthcmdzW19rZXkyLTFdPWFyZ3VtZW50c1tfa2V5Ml07fXByaW50V2FybmluZygnZXJyb3InLGZvcm1hdCxhcmdzKTt9fX1mdW5jdGlvbiBwcmludFdhcm5pbmcobGV2ZWwsZm9ybWF0LGFyZ3Mpey8vIFdoZW4gY2hhbmdpbmcgdGhpcyBsb2dpYywgeW91IG1pZ2h0IHdhbnQgdG8gYWxzb1xuLy8gdXBkYXRlIGNvbnNvbGVXaXRoU3RhY2tEZXYud3d3LmpzIGFzIHdlbGwuXG57dmFyIFJlYWN0RGVidWdDdXJyZW50RnJhbWU9UmVhY3RTaGFyZWRJbnRlcm5hbHMuUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZTt2YXIgc3RhY2s9UmVhY3REZWJ1Z0N1cnJlbnRGcmFtZS5nZXRTdGFja0FkZGVuZHVtKCk7aWYoc3RhY2shPT0nJyl7Zm9ybWF0Kz0nJXMnO2FyZ3M9YXJncy5jb25jYXQoW3N0YWNrXSk7fS8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1pbnRlcm5hbC9zYWZlLXN0cmluZy1jb2VyY2lvblxudmFyIGFyZ3NXaXRoRm9ybWF0PWFyZ3MubWFwKGZ1bmN0aW9uKGl0ZW0pe3JldHVybiBTdHJpbmcoaXRlbSk7fSk7Ly8gQ2FyZWZ1bDogUk4gY3VycmVudGx5IGRlcGVuZHMgb24gdGhpcyBwcmVmaXhcbmFyZ3NXaXRoRm9ybWF0LnVuc2hpZnQoJ1dhcm5pbmc6ICcrZm9ybWF0KTsvLyBXZSBpbnRlbnRpb25hbGx5IGRvbid0IHVzZSBzcHJlYWQgKG9yIC5hcHBseSkgZGlyZWN0bHkgYmVjYXVzZSBpdFxuLy8gYnJlYWtzIElFOTogaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlYWN0L2lzc3Vlcy8xMzYxMFxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWludGVybmFsL25vLXByb2R1Y3Rpb24tbG9nZ2luZ1xuRnVuY3Rpb24ucHJvdG90eXBlLmFwcGx5LmNhbGwoY29uc29sZVtsZXZlbF0sY29uc29sZSxhcmdzV2l0aEZvcm1hdCk7fX0vKipcbiAqIGlubGluZWQgT2JqZWN0LmlzIHBvbHlmaWxsIHRvIGF2b2lkIHJlcXVpcmluZyBjb25zdW1lcnMgc2hpcCB0aGVpciBvd25cbiAqIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0phdmFTY3JpcHQvUmVmZXJlbmNlL0dsb2JhbF9PYmplY3RzL09iamVjdC9pc1xuICovZnVuY3Rpb24gaXMoeCx5KXtyZXR1cm4geD09PXkmJih4IT09MHx8MS94PT09MS95KXx8eCE9PXgmJnkhPT15Ly8gZXNsaW50LWRpc2FibGUtbGluZSBuby1zZWxmLWNvbXBhcmVcbjt9dmFyIG9iamVjdElzPXR5cGVvZiBPYmplY3QuaXM9PT0nZnVuY3Rpb24nP09iamVjdC5pczppczsvLyBkaXNwYXRjaCBmb3IgQ29tbW9uSlMgaW50ZXJvcCBuYW1lZCBpbXBvcnRzLlxudmFyIHVzZVN0YXRlPVJlYWN0LnVzZVN0YXRlLHVzZUVmZmVjdD1SZWFjdC51c2VFZmZlY3QsdXNlTGF5b3V0RWZmZWN0PVJlYWN0LnVzZUxheW91dEVmZmVjdCx1c2VEZWJ1Z1ZhbHVlPVJlYWN0LnVzZURlYnVnVmFsdWU7dmFyIGRpZFdhcm5PbGQxOEFscGhhPWZhbHNlO3ZhciBkaWRXYXJuVW5jYWNoZWRHZXRTbmFwc2hvdD1mYWxzZTsvLyBEaXNjbGFpbWVyOiBUaGlzIHNoaW0gYnJlYWtzIG1hbnkgb2YgdGhlIHJ1bGVzIG9mIFJlYWN0LCBhbmQgb25seSB3b3Jrc1xuLy8gYmVjYXVzZSBvZiBhIHZlcnkgcGFydGljdWxhciBzZXQgb2YgaW1wbGVtZW50YXRpb24gZGV0YWlscyBhbmQgYXNzdW1wdGlvbnNcbi8vIC0tIGNoYW5nZSBhbnkgb25lIG9mIHRoZW0gYW5kIGl0IHdpbGwgYnJlYWsuIFRoZSBtb3N0IGltcG9ydGFudCBhc3N1bXB0aW9uXG4vLyBpcyB0aGF0IHVwZGF0ZXMgYXJlIGFsd2F5cyBzeW5jaHJvbm91cywgYmVjYXVzZSBjb25jdXJyZW50IHJlbmRlcmluZyBpc1xuLy8gb25seSBhdmFpbGFibGUgaW4gdmVyc2lvbnMgb2YgUmVhY3QgdGhhdCBhbHNvIGhhdmUgYSBidWlsdC1pblxuLy8gdXNlU3luY0V4dGVybmFsU3RvcmUgQVBJLiBBbmQgd2Ugb25seSB1c2UgdGhpcyBzaGltIHdoZW4gdGhlIGJ1aWx0LWluIEFQSVxuLy8gZG9lcyBub3QgZXhpc3QuXG4vL1xuLy8gRG8gbm90IGFzc3VtZSB0aGF0IHRoZSBjbGV2ZXIgaGFja3MgdXNlZCBieSB0aGlzIGhvb2sgYWxzbyB3b3JrIGluIGdlbmVyYWwuXG4vLyBUaGUgcG9pbnQgb2YgdGhpcyBzaGltIGlzIHRvIHJlcGxhY2UgdGhlIG5lZWQgZm9yIGhhY2tzIGJ5IG90aGVyIGxpYnJhcmllcy5cbmZ1bmN0aW9uIHVzZVN5bmNFeHRlcm5hbFN0b3JlKHN1YnNjcmliZSxnZXRTbmFwc2hvdCwvLyBOb3RlOiBUaGUgc2hpbSBkb2VzIG5vdCB1c2UgZ2V0U2VydmVyU25hcHNob3QsIGJlY2F1c2UgcHJlLTE4IHZlcnNpb25zIG9mXG4vLyBSZWFjdCBkbyBub3QgZXhwb3NlIGEgd2F5IHRvIGNoZWNrIGlmIHdlJ3JlIGh5ZHJhdGluZy4gU28gdXNlcnMgb2YgdGhlIHNoaW1cbi8vIHdpbGwgbmVlZCB0byB0cmFjayB0aGF0IHRoZW1zZWx2ZXMgYW5kIHJldHVybiB0aGUgY29ycmVjdCB2YWx1ZVxuZ2V0U2VydmVyU25hcHNob3Qpe3tpZighZGlkV2Fybk9sZDE4QWxwaGEpe2lmKFJlYWN0LnN0YXJ0VHJhbnNpdGlvbiE9PXVuZGVmaW5lZCl7ZGlkV2Fybk9sZDE4QWxwaGE9dHJ1ZTtlcnJvcignWW91IGFyZSB1c2luZyBhbiBvdXRkYXRlZCwgcHJlLXJlbGVhc2UgYWxwaGEgb2YgUmVhY3QgMTggdGhhdCAnKydkb2VzIG5vdCBzdXBwb3J0IHVzZVN5bmNFeHRlcm5hbFN0b3JlLiBUaGUgJysndXNlLXN5bmMtZXh0ZXJuYWwtc3RvcmUgc2hpbSB3aWxsIG5vdCB3b3JrIGNvcnJlY3RseS4gVXBncmFkZSAnKyd0byBhIG5ld2VyIHByZS1yZWxlYXNlLicpO319fS8vIFJlYWQgdGhlIGN1cnJlbnQgc25hcHNob3QgZnJvbSB0aGUgc3RvcmUgb24gZXZlcnkgcmVuZGVyLiBBZ2FpbiwgdGhpc1xuLy8gYnJlYWtzIHRoZSBydWxlcyBvZiBSZWFjdCwgYW5kIG9ubHkgd29ya3MgaGVyZSBiZWNhdXNlIG9mIHNwZWNpZmljXG4vLyBpbXBsZW1lbnRhdGlvbiBkZXRhaWxzLCBtb3N0IGltcG9ydGFudGx5IHRoYXQgdXBkYXRlcyBhcmVcbi8vIGFsd2F5cyBzeW5jaHJvbm91cy5cbnZhciB2YWx1ZT1nZXRTbmFwc2hvdCgpO3tpZighZGlkV2FyblVuY2FjaGVkR2V0U25hcHNob3Qpe3ZhciBjYWNoZWRWYWx1ZT1nZXRTbmFwc2hvdCgpO2lmKCFvYmplY3RJcyh2YWx1ZSxjYWNoZWRWYWx1ZSkpe2Vycm9yKCdUaGUgcmVzdWx0IG9mIGdldFNuYXBzaG90IHNob3VsZCBiZSBjYWNoZWQgdG8gYXZvaWQgYW4gaW5maW5pdGUgbG9vcCcpO2RpZFdhcm5VbmNhY2hlZEdldFNuYXBzaG90PXRydWU7fX19Ly8gQmVjYXVzZSB1cGRhdGVzIGFyZSBzeW5jaHJvbm91cywgd2UgZG9uJ3QgcXVldWUgdGhlbS4gSW5zdGVhZCB3ZSBmb3JjZSBhXG4vLyByZS1yZW5kZXIgd2hlbmV2ZXIgdGhlIHN1YnNjcmliZWQgc3RhdGUgY2hhbmdlcyBieSB1cGRhdGluZyBhbiBzb21lXG4vLyBhcmJpdHJhcnkgdXNlU3RhdGUgaG9vay4gVGhlbiwgZHVyaW5nIHJlbmRlciwgd2UgY2FsbCBnZXRTbmFwc2hvdCB0byByZWFkXG4vLyB0aGUgY3VycmVudCB2YWx1ZS5cbi8vXG4vLyBCZWNhdXNlIHdlIGRvbid0IGFjdHVhbGx5IHVzZSB0aGUgc3RhdGUgcmV0dXJuZWQgYnkgdGhlIHVzZVN0YXRlIGhvb2ssIHdlXG4vLyBjYW4gc2F2ZSBhIGJpdCBvZiBtZW1vcnkgYnkgc3RvcmluZyBvdGhlciBzdHVmZiBpbiB0aGF0IHNsb3QuXG4vL1xuLy8gVG8gaW1wbGVtZW50IHRoZSBlYXJseSBiYWlsb3V0LCB3ZSBuZWVkIHRvIHRyYWNrIHNvbWUgdGhpbmdzIG9uIGEgbXV0YWJsZVxuLy8gb2JqZWN0LiBVc3VhbGx5LCB3ZSB3b3VsZCBwdXQgdGhhdCBpbiBhIHVzZVJlZiBob29rLCBidXQgd2UgY2FuIHN0YXNoIGl0IGluXG4vLyBvdXIgdXNlU3RhdGUgaG9vayBpbnN0ZWFkLlxuLy9cbi8vIFRvIGZvcmNlIGEgcmUtcmVuZGVyLCB3ZSBjYWxsIGZvcmNlVXBkYXRlKHtpbnN0fSkuIFRoYXQgd29ya3MgYmVjYXVzZSB0aGVcbi8vIG5ldyBvYmplY3QgYWx3YXlzIGZhaWxzIGFuIGVxdWFsaXR5IGNoZWNrLlxudmFyIF91c2VTdGF0ZT11c2VTdGF0ZSh7aW5zdDp7dmFsdWU6dmFsdWUsZ2V0U25hcHNob3Q6Z2V0U25hcHNob3R9fSksaW5zdD1fdXNlU3RhdGVbMF0uaW5zdCxmb3JjZVVwZGF0ZT1fdXNlU3RhdGVbMV07Ly8gVHJhY2sgdGhlIGxhdGVzdCBnZXRTbmFwc2hvdCBmdW5jdGlvbiB3aXRoIGEgcmVmLiBUaGlzIG5lZWRzIHRvIGJlIHVwZGF0ZWRcbi8vIGluIHRoZSBsYXlvdXQgcGhhc2Ugc28gd2UgY2FuIGFjY2VzcyBpdCBkdXJpbmcgdGhlIHRlYXJpbmcgY2hlY2sgdGhhdFxuLy8gaGFwcGVucyBvbiBzdWJzY3JpYmUuXG51c2VMYXlvdXRFZmZlY3QoZnVuY3Rpb24oKXtpbnN0LnZhbHVlPXZhbHVlO2luc3QuZ2V0U25hcHNob3Q9Z2V0U25hcHNob3Q7Ly8gV2hlbmV2ZXIgZ2V0U25hcHNob3Qgb3Igc3Vic2NyaWJlIGNoYW5nZXMsIHdlIG5lZWQgdG8gY2hlY2sgaW4gdGhlXG4vLyBjb21taXQgcGhhc2UgaWYgdGhlcmUgd2FzIGFuIGludGVybGVhdmVkIG11dGF0aW9uLiBJbiBjb25jdXJyZW50IG1vZGVcbi8vIHRoaXMgY2FuIGhhcHBlbiBhbGwgdGhlIHRpbWUsIGJ1dCBldmVuIGluIHN5bmNocm9ub3VzIG1vZGUsIGFuIGVhcmxpZXJcbi8vIGVmZmVjdCBtYXkgaGF2ZSBtdXRhdGVkIHRoZSBzdG9yZS5cbmlmKGNoZWNrSWZTbmFwc2hvdENoYW5nZWQoaW5zdCkpey8vIEZvcmNlIGEgcmUtcmVuZGVyLlxuZm9yY2VVcGRhdGUoe2luc3Q6aW5zdH0pO319LFtzdWJzY3JpYmUsdmFsdWUsZ2V0U25hcHNob3RdKTt1c2VFZmZlY3QoZnVuY3Rpb24oKXsvLyBDaGVjayBmb3IgY2hhbmdlcyByaWdodCBiZWZvcmUgc3Vic2NyaWJpbmcuIFN1YnNlcXVlbnQgY2hhbmdlcyB3aWxsIGJlXG4vLyBkZXRlY3RlZCBpbiB0aGUgc3Vic2NyaXB0aW9uIGhhbmRsZXIuXG5pZihjaGVja0lmU25hcHNob3RDaGFuZ2VkKGluc3QpKXsvLyBGb3JjZSBhIHJlLXJlbmRlci5cbmZvcmNlVXBkYXRlKHtpbnN0Omluc3R9KTt9dmFyIGhhbmRsZVN0b3JlQ2hhbmdlPWZ1bmN0aW9uIGhhbmRsZVN0b3JlQ2hhbmdlKCl7Ly8gVE9ETzogQmVjYXVzZSB0aGVyZSBpcyBubyBjcm9zcy1yZW5kZXJlciBBUEkgZm9yIGJhdGNoaW5nIHVwZGF0ZXMsIGl0J3Ncbi8vIHVwIHRvIHRoZSBjb25zdW1lciBvZiB0aGlzIGxpYnJhcnkgdG8gd3JhcCB0aGVpciBzdWJzY3JpcHRpb24gZXZlbnRcbi8vIHdpdGggdW5zdGFibGVfYmF0Y2hlZFVwZGF0ZXMuIFNob3VsZCB3ZSB0cnkgdG8gZGV0ZWN0IHdoZW4gdGhpcyBpc24ndFxuLy8gdGhlIGNhc2UgYW5kIHByaW50IGEgd2FybmluZyBpbiBkZXZlbG9wbWVudD9cbi8vIFRoZSBzdG9yZSBjaGFuZ2VkLiBDaGVjayBpZiB0aGUgc25hcHNob3QgY2hhbmdlZCBzaW5jZSB0aGUgbGFzdCB0aW1lIHdlXG4vLyByZWFkIGZyb20gdGhlIHN0b3JlLlxuaWYoY2hlY2tJZlNuYXBzaG90Q2hhbmdlZChpbnN0KSl7Ly8gRm9yY2UgYSByZS1yZW5kZXIuXG5mb3JjZVVwZGF0ZSh7aW5zdDppbnN0fSk7fX07Ly8gU3Vic2NyaWJlIHRvIHRoZSBzdG9yZSBhbmQgcmV0dXJuIGEgY2xlYW4tdXAgZnVuY3Rpb24uXG5yZXR1cm4gc3Vic2NyaWJlKGhhbmRsZVN0b3JlQ2hhbmdlKTt9LFtzdWJzY3JpYmVdKTt1c2VEZWJ1Z1ZhbHVlKHZhbHVlKTtyZXR1cm4gdmFsdWU7fWZ1bmN0aW9uIGNoZWNrSWZTbmFwc2hvdENoYW5nZWQoaW5zdCl7dmFyIGxhdGVzdEdldFNuYXBzaG90PWluc3QuZ2V0U25hcHNob3Q7dmFyIHByZXZWYWx1ZT1pbnN0LnZhbHVlO3RyeXt2YXIgbmV4dFZhbHVlPWxhdGVzdEdldFNuYXBzaG90KCk7cmV0dXJuIW9iamVjdElzKHByZXZWYWx1ZSxuZXh0VmFsdWUpO31jYXRjaChlcnJvcil7cmV0dXJuIHRydWU7fX1mdW5jdGlvbiB1c2VTeW5jRXh0ZXJuYWxTdG9yZSQxKHN1YnNjcmliZSxnZXRTbmFwc2hvdCxnZXRTZXJ2ZXJTbmFwc2hvdCl7Ly8gTm90ZTogVGhlIHNoaW0gZG9lcyBub3QgdXNlIGdldFNlcnZlclNuYXBzaG90LCBiZWNhdXNlIHByZS0xOCB2ZXJzaW9ucyBvZlxuLy8gUmVhY3QgZG8gbm90IGV4cG9zZSBhIHdheSB0byBjaGVjayBpZiB3ZSdyZSBoeWRyYXRpbmcuIFNvIHVzZXJzIG9mIHRoZSBzaGltXG4vLyB3aWxsIG5lZWQgdG8gdHJhY2sgdGhhdCB0aGVtc2VsdmVzIGFuZCByZXR1cm4gdGhlIGNvcnJlY3QgdmFsdWVcbi8vIGZyb20gYGdldFNuYXBzaG90YC5cbnJldHVybiBnZXRTbmFwc2hvdCgpO312YXIgY2FuVXNlRE9NPSEhKHR5cGVvZiB3aW5kb3chPT0ndW5kZWZpbmVkJyYmdHlwZW9mIHdpbmRvdy5kb2N1bWVudCE9PSd1bmRlZmluZWQnJiZ0eXBlb2Ygd2luZG93LmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQhPT0ndW5kZWZpbmVkJyk7dmFyIGlzU2VydmVyRW52aXJvbm1lbnQ9IWNhblVzZURPTTt2YXIgc2hpbT1pc1NlcnZlckVudmlyb25tZW50P3VzZVN5bmNFeHRlcm5hbFN0b3JlJDE6dXNlU3luY0V4dGVybmFsU3RvcmU7dmFyIHVzZVN5bmNFeHRlcm5hbFN0b3JlJDI9UmVhY3QudXNlU3luY0V4dGVybmFsU3RvcmUhPT11bmRlZmluZWQ/UmVhY3QudXNlU3luY0V4dGVybmFsU3RvcmU6c2hpbTtleHBvcnRzLnVzZVN5bmNFeHRlcm5hbFN0b3JlPXVzZVN5bmNFeHRlcm5hbFN0b3JlJDI7LyogZ2xvYmFsIF9fUkVBQ1RfREVWVE9PTFNfR0xPQkFMX0hPT0tfXyAqL2lmKHR5cGVvZiBfX1JFQUNUX0RFVlRPT0xTX0dMT0JBTF9IT09LX18hPT0ndW5kZWZpbmVkJyYmdHlwZW9mIF9fUkVBQ1RfREVWVE9PTFNfR0xPQkFMX0hPT0tfXy5yZWdpc3RlckludGVybmFsTW9kdWxlU3RvcD09PSdmdW5jdGlvbicpe19fUkVBQ1RfREVWVE9PTFNfR0xPQkFMX0hPT0tfXy5yZWdpc3RlckludGVybmFsTW9kdWxlU3RvcChuZXcgRXJyb3IoKSk7fX0pKCk7fVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi91c2Utc3luYy1leHRlcm5hbC1zdG9yZS9janMvdXNlLXN5bmMtZXh0ZXJuYWwtc3RvcmUtc2hpbS5kZXZlbG9wbWVudC5qc1xuLy8gbW9kdWxlIGlkID0gMzM1XG4vLyBtb2R1bGUgY2h1bmtzID0gMyIsIid1c2Ugc3RyaWN0JztpZihwcm9jZXNzLmVudi5OT0RFX0VOVj09PSdwcm9kdWN0aW9uJyl7bW9kdWxlLmV4cG9ydHM9cmVxdWlyZSgnLi4vY2pzL3VzZS1zeW5jLWV4dGVybmFsLXN0b3JlLXNoaW0vd2l0aC1zZWxlY3Rvci5wcm9kdWN0aW9uLm1pbi5qcycpO31lbHNle21vZHVsZS5leHBvcnRzPXJlcXVpcmUoJy4uL2Nqcy91c2Utc3luYy1leHRlcm5hbC1zdG9yZS1zaGltL3dpdGgtc2VsZWN0b3IuZGV2ZWxvcG1lbnQuanMnKTt9XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3VzZS1zeW5jLWV4dGVybmFsLXN0b3JlL3NoaW0vd2l0aC1zZWxlY3Rvci5qc1xuLy8gbW9kdWxlIGlkID0gMzM2XG4vLyBtb2R1bGUgY2h1bmtzID0gMyIsIi8qKlxuICogQGxpY2Vuc2UgUmVhY3RcbiAqIHVzZS1zeW5jLWV4dGVybmFsLXN0b3JlLXNoaW0vd2l0aC1zZWxlY3Rvci5wcm9kdWN0aW9uLm1pbi5qc1xuICpcbiAqIENvcHlyaWdodCAoYykgRmFjZWJvb2ssIEluYy4gYW5kIGl0cyBhZmZpbGlhdGVzLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovJ3VzZSBzdHJpY3QnO3ZhciBoPXJlcXVpcmUoXCJyZWFjdFwiKSxuPXJlcXVpcmUoXCJ1c2Utc3luYy1leHRlcm5hbC1zdG9yZS9zaGltXCIpO2Z1bmN0aW9uIHAoYSxiKXtyZXR1cm4gYT09PWImJigwIT09YXx8MS9hPT09MS9iKXx8YSE9PWEmJmIhPT1iO312YXIgcT1cImZ1bmN0aW9uXCI9PT10eXBlb2YgT2JqZWN0LmlzP09iamVjdC5pczpwLHI9bi51c2VTeW5jRXh0ZXJuYWxTdG9yZSx0PWgudXNlUmVmLHU9aC51c2VFZmZlY3Qsdj1oLnVzZU1lbW8sdz1oLnVzZURlYnVnVmFsdWU7ZXhwb3J0cy51c2VTeW5jRXh0ZXJuYWxTdG9yZVdpdGhTZWxlY3Rvcj1mdW5jdGlvbihhLGIsZSxsLGcpe3ZhciBjPXQobnVsbCk7aWYobnVsbD09PWMuY3VycmVudCl7dmFyIGY9e2hhc1ZhbHVlOiExLHZhbHVlOm51bGx9O2MuY3VycmVudD1mO31lbHNlIGY9Yy5jdXJyZW50O2M9dihmdW5jdGlvbigpe2Z1bmN0aW9uIGEoYSl7aWYoIWMpe2M9ITA7ZD1hO2E9bChhKTtpZih2b2lkIDAhPT1nJiZmLmhhc1ZhbHVlKXt2YXIgYj1mLnZhbHVlO2lmKGcoYixhKSlyZXR1cm4gaz1iO31yZXR1cm4gaz1hO31iPWs7aWYocShkLGEpKXJldHVybiBiO3ZhciBlPWwoYSk7aWYodm9pZCAwIT09ZyYmZyhiLGUpKXJldHVybiBiO2Q9YTtyZXR1cm4gaz1lO312YXIgYz0hMSxkLGssbT12b2lkIDA9PT1lP251bGw6ZTtyZXR1cm5bZnVuY3Rpb24oKXtyZXR1cm4gYShiKCkpO30sbnVsbD09PW0/dm9pZCAwOmZ1bmN0aW9uKCl7cmV0dXJuIGEobSgpKTt9XTt9LFtiLGUsbCxnXSk7dmFyIGQ9cihhLGNbMF0sY1sxXSk7dShmdW5jdGlvbigpe2YuaGFzVmFsdWU9ITA7Zi52YWx1ZT1kO30sW2RdKTt3KGQpO3JldHVybiBkO307XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3VzZS1zeW5jLWV4dGVybmFsLXN0b3JlL2Nqcy91c2Utc3luYy1leHRlcm5hbC1zdG9yZS1zaGltL3dpdGgtc2VsZWN0b3IucHJvZHVjdGlvbi5taW4uanNcbi8vIG1vZHVsZSBpZCA9IDMzN1xuLy8gbW9kdWxlIGNodW5rcyA9IDMiLCIvKipcbiAqIEBsaWNlbnNlIFJlYWN0XG4gKiB1c2Utc3luYy1leHRlcm5hbC1zdG9yZS1zaGltL3dpdGgtc2VsZWN0b3IuZGV2ZWxvcG1lbnQuanNcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIEZhY2Vib29rLCBJbmMuIGFuZCBpdHMgYWZmaWxpYXRlcy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqLyd1c2Ugc3RyaWN0JztpZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PVwicHJvZHVjdGlvblwiKXsoZnVuY3Rpb24oKXsndXNlIHN0cmljdCc7LyogZ2xvYmFsIF9fUkVBQ1RfREVWVE9PTFNfR0xPQkFMX0hPT0tfXyAqL2lmKHR5cGVvZiBfX1JFQUNUX0RFVlRPT0xTX0dMT0JBTF9IT09LX18hPT0ndW5kZWZpbmVkJyYmdHlwZW9mIF9fUkVBQ1RfREVWVE9PTFNfR0xPQkFMX0hPT0tfXy5yZWdpc3RlckludGVybmFsTW9kdWxlU3RhcnQ9PT0nZnVuY3Rpb24nKXtfX1JFQUNUX0RFVlRPT0xTX0dMT0JBTF9IT09LX18ucmVnaXN0ZXJJbnRlcm5hbE1vZHVsZVN0YXJ0KG5ldyBFcnJvcigpKTt9dmFyIFJlYWN0PXJlcXVpcmUoJ3JlYWN0Jyk7dmFyIHNoaW09cmVxdWlyZSgndXNlLXN5bmMtZXh0ZXJuYWwtc3RvcmUvc2hpbScpOy8qKlxuICogaW5saW5lZCBPYmplY3QuaXMgcG9seWZpbGwgdG8gYXZvaWQgcmVxdWlyaW5nIGNvbnN1bWVycyBzaGlwIHRoZWlyIG93blxuICogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSmF2YVNjcmlwdC9SZWZlcmVuY2UvR2xvYmFsX09iamVjdHMvT2JqZWN0L2lzXG4gKi9mdW5jdGlvbiBpcyh4LHkpe3JldHVybiB4PT09eSYmKHghPT0wfHwxL3g9PT0xL3kpfHx4IT09eCYmeSE9PXkvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXNlbGYtY29tcGFyZVxuO312YXIgb2JqZWN0SXM9dHlwZW9mIE9iamVjdC5pcz09PSdmdW5jdGlvbic/T2JqZWN0LmlzOmlzO3ZhciB1c2VTeW5jRXh0ZXJuYWxTdG9yZT1zaGltLnVzZVN5bmNFeHRlcm5hbFN0b3JlOy8vIGZvciBDb21tb25KUyBpbnRlcm9wLlxudmFyIHVzZVJlZj1SZWFjdC51c2VSZWYsdXNlRWZmZWN0PVJlYWN0LnVzZUVmZmVjdCx1c2VNZW1vPVJlYWN0LnVzZU1lbW8sdXNlRGVidWdWYWx1ZT1SZWFjdC51c2VEZWJ1Z1ZhbHVlOy8vIFNhbWUgYXMgdXNlU3luY0V4dGVybmFsU3RvcmUsIGJ1dCBzdXBwb3J0cyBzZWxlY3RvciBhbmQgaXNFcXVhbCBhcmd1bWVudHMuXG5mdW5jdGlvbiB1c2VTeW5jRXh0ZXJuYWxTdG9yZVdpdGhTZWxlY3RvcihzdWJzY3JpYmUsZ2V0U25hcHNob3QsZ2V0U2VydmVyU25hcHNob3Qsc2VsZWN0b3IsaXNFcXVhbCl7Ly8gVXNlIHRoaXMgdG8gdHJhY2sgdGhlIHJlbmRlcmVkIHNuYXBzaG90LlxudmFyIGluc3RSZWY9dXNlUmVmKG51bGwpO3ZhciBpbnN0O2lmKGluc3RSZWYuY3VycmVudD09PW51bGwpe2luc3Q9e2hhc1ZhbHVlOmZhbHNlLHZhbHVlOm51bGx9O2luc3RSZWYuY3VycmVudD1pbnN0O31lbHNle2luc3Q9aW5zdFJlZi5jdXJyZW50O312YXIgX3VzZU1lbW89dXNlTWVtbyhmdW5jdGlvbigpey8vIFRyYWNrIHRoZSBtZW1vaXplZCBzdGF0ZSB1c2luZyBjbG9zdXJlIHZhcmlhYmxlcyB0aGF0IGFyZSBsb2NhbCB0byB0aGlzXG4vLyBtZW1vaXplZCBpbnN0YW5jZSBvZiBhIGdldFNuYXBzaG90IGZ1bmN0aW9uLiBJbnRlbnRpb25hbGx5IG5vdCB1c2luZyBhXG4vLyB1c2VSZWYgaG9vaywgYmVjYXVzZSB0aGF0IHN0YXRlIHdvdWxkIGJlIHNoYXJlZCBhY3Jvc3MgYWxsIGNvbmN1cnJlbnRcbi8vIGNvcGllcyBvZiB0aGUgaG9vay9jb21wb25lbnQuXG52YXIgaGFzTWVtbz1mYWxzZTt2YXIgbWVtb2l6ZWRTbmFwc2hvdDt2YXIgbWVtb2l6ZWRTZWxlY3Rpb247dmFyIG1lbW9pemVkU2VsZWN0b3I9ZnVuY3Rpb24gbWVtb2l6ZWRTZWxlY3RvcihuZXh0U25hcHNob3Qpe2lmKCFoYXNNZW1vKXsvLyBUaGUgZmlyc3QgdGltZSB0aGUgaG9vayBpcyBjYWxsZWQsIHRoZXJlIGlzIG5vIG1lbW9pemVkIHJlc3VsdC5cbmhhc01lbW89dHJ1ZTttZW1vaXplZFNuYXBzaG90PW5leHRTbmFwc2hvdDt2YXIgX25leHRTZWxlY3Rpb249c2VsZWN0b3IobmV4dFNuYXBzaG90KTtpZihpc0VxdWFsIT09dW5kZWZpbmVkKXsvLyBFdmVuIGlmIHRoZSBzZWxlY3RvciBoYXMgY2hhbmdlZCwgdGhlIGN1cnJlbnRseSByZW5kZXJlZCBzZWxlY3Rpb25cbi8vIG1heSBiZSBlcXVhbCB0byB0aGUgbmV3IHNlbGVjdGlvbi4gV2Ugc2hvdWxkIGF0dGVtcHQgdG8gcmV1c2UgdGhlXG4vLyBjdXJyZW50IHZhbHVlIGlmIHBvc3NpYmxlLCB0byBwcmVzZXJ2ZSBkb3duc3RyZWFtIG1lbW9pemF0aW9ucy5cbmlmKGluc3QuaGFzVmFsdWUpe3ZhciBjdXJyZW50U2VsZWN0aW9uPWluc3QudmFsdWU7aWYoaXNFcXVhbChjdXJyZW50U2VsZWN0aW9uLF9uZXh0U2VsZWN0aW9uKSl7bWVtb2l6ZWRTZWxlY3Rpb249Y3VycmVudFNlbGVjdGlvbjtyZXR1cm4gY3VycmVudFNlbGVjdGlvbjt9fX1tZW1vaXplZFNlbGVjdGlvbj1fbmV4dFNlbGVjdGlvbjtyZXR1cm4gX25leHRTZWxlY3Rpb247fS8vIFdlIG1heSBiZSBhYmxlIHRvIHJldXNlIHRoZSBwcmV2aW91cyBpbnZvY2F0aW9uJ3MgcmVzdWx0LlxuLy8gV2UgbWF5IGJlIGFibGUgdG8gcmV1c2UgdGhlIHByZXZpb3VzIGludm9jYXRpb24ncyByZXN1bHQuXG52YXIgcHJldlNuYXBzaG90PW1lbW9pemVkU25hcHNob3Q7dmFyIHByZXZTZWxlY3Rpb249bWVtb2l6ZWRTZWxlY3Rpb247aWYob2JqZWN0SXMocHJldlNuYXBzaG90LG5leHRTbmFwc2hvdCkpey8vIFRoZSBzbmFwc2hvdCBpcyB0aGUgc2FtZSBhcyBsYXN0IHRpbWUuIFJldXNlIHRoZSBwcmV2aW91cyBzZWxlY3Rpb24uXG5yZXR1cm4gcHJldlNlbGVjdGlvbjt9Ly8gVGhlIHNuYXBzaG90IGhhcyBjaGFuZ2VkLCBzbyB3ZSBuZWVkIHRvIGNvbXB1dGUgYSBuZXcgc2VsZWN0aW9uLlxuLy8gVGhlIHNuYXBzaG90IGhhcyBjaGFuZ2VkLCBzbyB3ZSBuZWVkIHRvIGNvbXB1dGUgYSBuZXcgc2VsZWN0aW9uLlxudmFyIG5leHRTZWxlY3Rpb249c2VsZWN0b3IobmV4dFNuYXBzaG90KTsvLyBJZiBhIGN1c3RvbSBpc0VxdWFsIGZ1bmN0aW9uIGlzIHByb3ZpZGVkLCB1c2UgdGhhdCB0byBjaGVjayBpZiB0aGUgZGF0YVxuLy8gaGFzIGNoYW5nZWQuIElmIGl0IGhhc24ndCwgcmV0dXJuIHRoZSBwcmV2aW91cyBzZWxlY3Rpb24uIFRoYXQgc2lnbmFsc1xuLy8gdG8gUmVhY3QgdGhhdCB0aGUgc2VsZWN0aW9ucyBhcmUgY29uY2VwdHVhbGx5IGVxdWFsLCBhbmQgd2UgY2FuIGJhaWxcbi8vIG91dCBvZiByZW5kZXJpbmcuXG4vLyBJZiBhIGN1c3RvbSBpc0VxdWFsIGZ1bmN0aW9uIGlzIHByb3ZpZGVkLCB1c2UgdGhhdCB0byBjaGVjayBpZiB0aGUgZGF0YVxuLy8gaGFzIGNoYW5nZWQuIElmIGl0IGhhc24ndCwgcmV0dXJuIHRoZSBwcmV2aW91cyBzZWxlY3Rpb24uIFRoYXQgc2lnbmFsc1xuLy8gdG8gUmVhY3QgdGhhdCB0aGUgc2VsZWN0aW9ucyBhcmUgY29uY2VwdHVhbGx5IGVxdWFsLCBhbmQgd2UgY2FuIGJhaWxcbi8vIG91dCBvZiByZW5kZXJpbmcuXG5pZihpc0VxdWFsIT09dW5kZWZpbmVkJiZpc0VxdWFsKHByZXZTZWxlY3Rpb24sbmV4dFNlbGVjdGlvbikpe3JldHVybiBwcmV2U2VsZWN0aW9uO31tZW1vaXplZFNuYXBzaG90PW5leHRTbmFwc2hvdDttZW1vaXplZFNlbGVjdGlvbj1uZXh0U2VsZWN0aW9uO3JldHVybiBuZXh0U2VsZWN0aW9uO307Ly8gQXNzaWduaW5nIHRoaXMgdG8gYSBjb25zdGFudCBzbyB0aGF0IEZsb3cga25vd3MgaXQgY2FuJ3QgY2hhbmdlLlxuLy8gQXNzaWduaW5nIHRoaXMgdG8gYSBjb25zdGFudCBzbyB0aGF0IEZsb3cga25vd3MgaXQgY2FuJ3QgY2hhbmdlLlxudmFyIG1heWJlR2V0U2VydmVyU25hcHNob3Q9Z2V0U2VydmVyU25hcHNob3Q9PT11bmRlZmluZWQ/bnVsbDpnZXRTZXJ2ZXJTbmFwc2hvdDt2YXIgZ2V0U25hcHNob3RXaXRoU2VsZWN0b3I9ZnVuY3Rpb24gZ2V0U25hcHNob3RXaXRoU2VsZWN0b3IoKXtyZXR1cm4gbWVtb2l6ZWRTZWxlY3RvcihnZXRTbmFwc2hvdCgpKTt9O3ZhciBnZXRTZXJ2ZXJTbmFwc2hvdFdpdGhTZWxlY3Rvcj1tYXliZUdldFNlcnZlclNuYXBzaG90PT09bnVsbD91bmRlZmluZWQ6ZnVuY3Rpb24oKXtyZXR1cm4gbWVtb2l6ZWRTZWxlY3RvcihtYXliZUdldFNlcnZlclNuYXBzaG90KCkpO307cmV0dXJuW2dldFNuYXBzaG90V2l0aFNlbGVjdG9yLGdldFNlcnZlclNuYXBzaG90V2l0aFNlbGVjdG9yXTt9LFtnZXRTbmFwc2hvdCxnZXRTZXJ2ZXJTbmFwc2hvdCxzZWxlY3Rvcixpc0VxdWFsXSksZ2V0U2VsZWN0aW9uPV91c2VNZW1vWzBdLGdldFNlcnZlclNlbGVjdGlvbj1fdXNlTWVtb1sxXTt2YXIgdmFsdWU9dXNlU3luY0V4dGVybmFsU3RvcmUoc3Vic2NyaWJlLGdldFNlbGVjdGlvbixnZXRTZXJ2ZXJTZWxlY3Rpb24pO3VzZUVmZmVjdChmdW5jdGlvbigpe2luc3QuaGFzVmFsdWU9dHJ1ZTtpbnN0LnZhbHVlPXZhbHVlO30sW3ZhbHVlXSk7dXNlRGVidWdWYWx1ZSh2YWx1ZSk7cmV0dXJuIHZhbHVlO31leHBvcnRzLnVzZVN5bmNFeHRlcm5hbFN0b3JlV2l0aFNlbGVjdG9yPXVzZVN5bmNFeHRlcm5hbFN0b3JlV2l0aFNlbGVjdG9yOy8qIGdsb2JhbCBfX1JFQUNUX0RFVlRPT0xTX0dMT0JBTF9IT09LX18gKi9pZih0eXBlb2YgX19SRUFDVF9ERVZUT09MU19HTE9CQUxfSE9PS19fIT09J3VuZGVmaW5lZCcmJnR5cGVvZiBfX1JFQUNUX0RFVlRPT0xTX0dMT0JBTF9IT09LX18ucmVnaXN0ZXJJbnRlcm5hbE1vZHVsZVN0b3A9PT0nZnVuY3Rpb24nKXtfX1JFQUNUX0RFVlRPT0xTX0dMT0JBTF9IT09LX18ucmVnaXN0ZXJJbnRlcm5hbE1vZHVsZVN0b3AobmV3IEVycm9yKCkpO319KSgpO31cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdXNlLXN5bmMtZXh0ZXJuYWwtc3RvcmUvY2pzL3VzZS1zeW5jLWV4dGVybmFsLXN0b3JlLXNoaW0vd2l0aC1zZWxlY3Rvci5kZXZlbG9wbWVudC5qc1xuLy8gbW9kdWxlIGlkID0gMzM4XG4vLyBtb2R1bGUgY2h1bmtzID0gMyIsIlwidXNlIHN0cmljdFwiO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO09iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLFwidW5zdGFibGVfYmF0Y2hlZFVwZGF0ZXNcIix7ZW51bWVyYWJsZTp0cnVlLGdldDpmdW5jdGlvbiBnZXQoKXtyZXR1cm4gX3JlYWN0RG9tLnVuc3RhYmxlX2JhdGNoZWRVcGRhdGVzO319KTt2YXIgX3JlYWN0RG9tPXJlcXVpcmUoXCJyZWFjdC1kb21cIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3JlYWN0LXJlZHV4L2xpYi91dGlscy9yZWFjdEJhdGNoZWRVcGRhdGVzLmpzXG4vLyBtb2R1bGUgaWQgPSAzMzlcbi8vIG1vZHVsZSBjaHVua3MgPSAzIiwiXCJ1c2Ugc3RyaWN0XCI7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5nZXRCYXRjaD1leHBvcnRzLnNldEJhdGNoPXZvaWQgMDsvLyBEZWZhdWx0IHRvIGEgZHVtbXkgXCJiYXRjaFwiIGltcGxlbWVudGF0aW9uIHRoYXQganVzdCBydW5zIHRoZSBjYWxsYmFja1xuZnVuY3Rpb24gZGVmYXVsdE5vb3BCYXRjaChjYWxsYmFjayl7Y2FsbGJhY2soKTt9dmFyIGJhdGNoPWRlZmF1bHROb29wQmF0Y2g7Ly8gQWxsb3cgaW5qZWN0aW5nIGFub3RoZXIgYmF0Y2hpbmcgZnVuY3Rpb24gbGF0ZXJcbnZhciBzZXRCYXRjaD1mdW5jdGlvbiBzZXRCYXRjaChuZXdCYXRjaCl7cmV0dXJuIGJhdGNoPW5ld0JhdGNoO307Ly8gU3VwcGx5IGEgZ2V0dGVyIGp1c3QgdG8gc2tpcCBkZWFsaW5nIHdpdGggRVNNIGJpbmRpbmdzXG5leHBvcnRzLnNldEJhdGNoPXNldEJhdGNoO3ZhciBnZXRCYXRjaD1mdW5jdGlvbiBnZXRCYXRjaCgpe3JldHVybiBiYXRjaDt9O2V4cG9ydHMuZ2V0QmF0Y2g9Z2V0QmF0Y2g7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3JlYWN0LXJlZHV4L2xpYi91dGlscy9iYXRjaC5qc1xuLy8gbW9kdWxlIGlkID0gMzQwXG4vLyBtb2R1bGUgY2h1bmtzID0gMyIsIlwidXNlIHN0cmljdFwiO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMuY3JlYXRlU2VsZWN0b3JIb29rPWNyZWF0ZVNlbGVjdG9ySG9vaztleHBvcnRzLnVzZVNlbGVjdG9yPWV4cG9ydHMuaW5pdGlhbGl6ZVVzZVNlbGVjdG9yPXZvaWQgMDt2YXIgX3JlYWN0PXJlcXVpcmUoXCJyZWFjdFwiKTt2YXIgX3VzZVJlZHV4Q29udGV4dD1yZXF1aXJlKFwiLi91c2VSZWR1eENvbnRleHRcIik7dmFyIF9Db250ZXh0PXJlcXVpcmUoXCIuLi9jb21wb25lbnRzL0NvbnRleHRcIik7dmFyIF91c2VTeW5jRXh0ZXJuYWxTdG9yZT1yZXF1aXJlKFwiLi4vdXRpbHMvdXNlU3luY0V4dGVybmFsU3RvcmVcIik7dmFyIHVzZVN5bmNFeHRlcm5hbFN0b3JlV2l0aFNlbGVjdG9yPV91c2VTeW5jRXh0ZXJuYWxTdG9yZS5ub3RJbml0aWFsaXplZDt2YXIgaW5pdGlhbGl6ZVVzZVNlbGVjdG9yPWZ1bmN0aW9uIGluaXRpYWxpemVVc2VTZWxlY3Rvcihmbil7dXNlU3luY0V4dGVybmFsU3RvcmVXaXRoU2VsZWN0b3I9Zm47fTtleHBvcnRzLmluaXRpYWxpemVVc2VTZWxlY3Rvcj1pbml0aWFsaXplVXNlU2VsZWN0b3I7dmFyIHJlZkVxdWFsaXR5PWZ1bmN0aW9uIHJlZkVxdWFsaXR5KGEsYil7cmV0dXJuIGE9PT1iO307LyoqXHJcbiAqIEhvb2sgZmFjdG9yeSwgd2hpY2ggY3JlYXRlcyBhIGB1c2VTZWxlY3RvcmAgaG9vayBib3VuZCB0byBhIGdpdmVuIGNvbnRleHQuXHJcbiAqXHJcbiAqIEBwYXJhbSB7UmVhY3QuQ29udGV4dH0gW2NvbnRleHQ9UmVhY3RSZWR1eENvbnRleHRdIENvbnRleHQgcGFzc2VkIHRvIHlvdXIgYDxQcm92aWRlcj5gLlxyXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IEEgYHVzZVNlbGVjdG9yYCBob29rIGJvdW5kIHRvIHRoZSBzcGVjaWZpZWQgY29udGV4dC5cclxuICovZnVuY3Rpb24gY3JlYXRlU2VsZWN0b3JIb29rKCl7dmFyIGNvbnRleHQ9YXJndW1lbnRzLmxlbmd0aD4wJiZhcmd1bWVudHNbMF0hPT11bmRlZmluZWQ/YXJndW1lbnRzWzBdOl9Db250ZXh0LlJlYWN0UmVkdXhDb250ZXh0O3ZhciB1c2VSZWR1eENvbnRleHQ9Y29udGV4dD09PV9Db250ZXh0LlJlYWN0UmVkdXhDb250ZXh0P191c2VSZWR1eENvbnRleHQudXNlUmVkdXhDb250ZXh0OmZ1bmN0aW9uKCl7cmV0dXJuKDAsX3JlYWN0LnVzZUNvbnRleHQpKGNvbnRleHQpO307cmV0dXJuIGZ1bmN0aW9uIHVzZVNlbGVjdG9yKHNlbGVjdG9yKXt2YXIgZXF1YWxpdHlGbj1hcmd1bWVudHMubGVuZ3RoPjEmJmFyZ3VtZW50c1sxXSE9PXVuZGVmaW5lZD9hcmd1bWVudHNbMV06cmVmRXF1YWxpdHk7aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYhPT0ncHJvZHVjdGlvbicpe2lmKCFzZWxlY3Rvcil7dGhyb3cgbmV3IEVycm9yKFwiWW91IG11c3QgcGFzcyBhIHNlbGVjdG9yIHRvIHVzZVNlbGVjdG9yXCIpO31pZih0eXBlb2Ygc2VsZWN0b3IhPT0nZnVuY3Rpb24nKXt0aHJvdyBuZXcgRXJyb3IoXCJZb3UgbXVzdCBwYXNzIGEgZnVuY3Rpb24gYXMgYSBzZWxlY3RvciB0byB1c2VTZWxlY3RvclwiKTt9aWYodHlwZW9mIGVxdWFsaXR5Rm4hPT0nZnVuY3Rpb24nKXt0aHJvdyBuZXcgRXJyb3IoXCJZb3UgbXVzdCBwYXNzIGEgZnVuY3Rpb24gYXMgYW4gZXF1YWxpdHkgZnVuY3Rpb24gdG8gdXNlU2VsZWN0b3JcIik7fX12YXIgX3VzZVJlZHV4Q29udGV4dDI9dXNlUmVkdXhDb250ZXh0KCksc3RvcmU9X3VzZVJlZHV4Q29udGV4dDIuc3RvcmUsc3Vic2NyaXB0aW9uPV91c2VSZWR1eENvbnRleHQyLnN1YnNjcmlwdGlvbixnZXRTZXJ2ZXJTdGF0ZT1fdXNlUmVkdXhDb250ZXh0Mi5nZXRTZXJ2ZXJTdGF0ZTt2YXIgc2VsZWN0ZWRTdGF0ZT11c2VTeW5jRXh0ZXJuYWxTdG9yZVdpdGhTZWxlY3RvcihzdWJzY3JpcHRpb24uYWRkTmVzdGVkU3ViLHN0b3JlLmdldFN0YXRlLGdldFNlcnZlclN0YXRlfHxzdG9yZS5nZXRTdGF0ZSxzZWxlY3RvcixlcXVhbGl0eUZuKTsoMCxfcmVhY3QudXNlRGVidWdWYWx1ZSkoc2VsZWN0ZWRTdGF0ZSk7cmV0dXJuIHNlbGVjdGVkU3RhdGU7fTt9LyoqXHJcbiAqIEEgaG9vayB0byBhY2Nlc3MgdGhlIHJlZHV4IHN0b3JlJ3Mgc3RhdGUuIFRoaXMgaG9vayB0YWtlcyBhIHNlbGVjdG9yIGZ1bmN0aW9uXHJcbiAqIGFzIGFuIGFyZ3VtZW50LiBUaGUgc2VsZWN0b3IgaXMgY2FsbGVkIHdpdGggdGhlIHN0b3JlIHN0YXRlLlxyXG4gKlxyXG4gKiBUaGlzIGhvb2sgdGFrZXMgYW4gb3B0aW9uYWwgZXF1YWxpdHkgY29tcGFyaXNvbiBmdW5jdGlvbiBhcyB0aGUgc2Vjb25kIHBhcmFtZXRlclxyXG4gKiB0aGF0IGFsbG93cyB5b3UgdG8gY3VzdG9taXplIHRoZSB3YXkgdGhlIHNlbGVjdGVkIHN0YXRlIGlzIGNvbXBhcmVkIHRvIGRldGVybWluZVxyXG4gKiB3aGV0aGVyIHRoZSBjb21wb25lbnQgbmVlZHMgdG8gYmUgcmUtcmVuZGVyZWQuXHJcbiAqXHJcbiAqIEBwYXJhbSB7RnVuY3Rpb259IHNlbGVjdG9yIHRoZSBzZWxlY3RvciBmdW5jdGlvblxyXG4gKiBAcGFyYW0ge0Z1bmN0aW9uPX0gZXF1YWxpdHlGbiB0aGUgZnVuY3Rpb24gdGhhdCB3aWxsIGJlIHVzZWQgdG8gZGV0ZXJtaW5lIGVxdWFsaXR5XHJcbiAqXHJcbiAqIEByZXR1cm5zIHthbnl9IHRoZSBzZWxlY3RlZCBzdGF0ZVxyXG4gKlxyXG4gKiBAZXhhbXBsZVxyXG4gKlxyXG4gKiBpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbiAqIGltcG9ydCB7IHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnXHJcbiAqXHJcbiAqIGV4cG9ydCBjb25zdCBDb3VudGVyQ29tcG9uZW50ID0gKCkgPT4ge1xyXG4gKiAgIGNvbnN0IGNvdW50ZXIgPSB1c2VTZWxlY3RvcihzdGF0ZSA9PiBzdGF0ZS5jb3VudGVyKVxyXG4gKiAgIHJldHVybiA8ZGl2Pntjb3VudGVyfTwvZGl2PlxyXG4gKiB9XHJcbiAqL3ZhciB1c2VTZWxlY3Rvcj0vKiNfX1BVUkVfXyovY3JlYXRlU2VsZWN0b3JIb29rKCk7ZXhwb3J0cy51c2VTZWxlY3Rvcj11c2VTZWxlY3RvcjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vcmVhY3QtcmVkdXgvbGliL2hvb2tzL3VzZVNlbGVjdG9yLmpzXG4vLyBtb2R1bGUgaWQgPSAzNDFcbi8vIG1vZHVsZSBjaHVua3MgPSAzIiwiXCJ1c2Ugc3RyaWN0XCI7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy51c2VSZWR1eENvbnRleHQ9dXNlUmVkdXhDb250ZXh0O3ZhciBfcmVhY3Q9cmVxdWlyZShcInJlYWN0XCIpO3ZhciBfQ29udGV4dD1yZXF1aXJlKFwiLi4vY29tcG9uZW50cy9Db250ZXh0XCIpOy8qKlxyXG4gKiBBIGhvb2sgdG8gYWNjZXNzIHRoZSB2YWx1ZSBvZiB0aGUgYFJlYWN0UmVkdXhDb250ZXh0YC4gVGhpcyBpcyBhIGxvdy1sZXZlbFxyXG4gKiBob29rIHRoYXQgeW91IHNob3VsZCB1c3VhbGx5IG5vdCBuZWVkIHRvIGNhbGwgZGlyZWN0bHkuXHJcbiAqXHJcbiAqIEByZXR1cm5zIHthbnl9IHRoZSB2YWx1ZSBvZiB0aGUgYFJlYWN0UmVkdXhDb250ZXh0YFxyXG4gKlxyXG4gKiBAZXhhbXBsZVxyXG4gKlxyXG4gKiBpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbiAqIGltcG9ydCB7IHVzZVJlZHV4Q29udGV4dCB9IGZyb20gJ3JlYWN0LXJlZHV4J1xyXG4gKlxyXG4gKiBleHBvcnQgY29uc3QgQ291bnRlckNvbXBvbmVudCA9ICgpID0+IHtcclxuICogICBjb25zdCB7IHN0b3JlIH0gPSB1c2VSZWR1eENvbnRleHQoKVxyXG4gKiAgIHJldHVybiA8ZGl2PntzdG9yZS5nZXRTdGF0ZSgpfTwvZGl2PlxyXG4gKiB9XHJcbiAqL2Z1bmN0aW9uIHVzZVJlZHV4Q29udGV4dCgpe3ZhciBjb250ZXh0VmFsdWU9KDAsX3JlYWN0LnVzZUNvbnRleHQpKF9Db250ZXh0LlJlYWN0UmVkdXhDb250ZXh0KTtpZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyYmIWNvbnRleHRWYWx1ZSl7dGhyb3cgbmV3IEVycm9yKCdjb3VsZCBub3QgZmluZCByZWFjdC1yZWR1eCBjb250ZXh0IHZhbHVlOyBwbGVhc2UgZW5zdXJlIHRoZSBjb21wb25lbnQgaXMgd3JhcHBlZCBpbiBhIDxQcm92aWRlcj4nKTt9cmV0dXJuIGNvbnRleHRWYWx1ZTt9XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3JlYWN0LXJlZHV4L2xpYi9ob29rcy91c2VSZWR1eENvbnRleHQuanNcbi8vIG1vZHVsZSBpZCA9IDM0MlxuLy8gbW9kdWxlIGNodW5rcyA9IDMiLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLmRlZmF1bHQ9ZXhwb3J0cy5SZWFjdFJlZHV4Q29udGV4dD12b2lkIDA7dmFyIF9yZWFjdD1yZXF1aXJlKFwicmVhY3RcIik7dmFyIFJlYWN0UmVkdXhDb250ZXh0PS8qI19fUFVSRV9fKi8oMCxfcmVhY3QuY3JlYXRlQ29udGV4dCkobnVsbCk7ZXhwb3J0cy5SZWFjdFJlZHV4Q29udGV4dD1SZWFjdFJlZHV4Q29udGV4dDtpZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl7UmVhY3RSZWR1eENvbnRleHQuZGlzcGxheU5hbWU9J1JlYWN0UmVkdXgnO312YXIgX2RlZmF1bHQ9UmVhY3RSZWR1eENvbnRleHQ7ZXhwb3J0cy5kZWZhdWx0PV9kZWZhdWx0O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9yZWFjdC1yZWR1eC9saWIvY29tcG9uZW50cy9Db250ZXh0LmpzXG4vLyBtb2R1bGUgaWQgPSAzNDNcbi8vIG1vZHVsZSBjaHVua3MgPSAzIiwiXCJ1c2Ugc3RyaWN0XCI7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5ub3RJbml0aWFsaXplZD12b2lkIDA7dmFyIG5vdEluaXRpYWxpemVkPWZ1bmN0aW9uIG5vdEluaXRpYWxpemVkKCl7dGhyb3cgbmV3IEVycm9yKCd1U0VTIG5vdCBpbml0aWFsaXplZCEnKTt9O2V4cG9ydHMubm90SW5pdGlhbGl6ZWQ9bm90SW5pdGlhbGl6ZWQ7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3JlYWN0LXJlZHV4L2xpYi91dGlscy91c2VTeW5jRXh0ZXJuYWxTdG9yZS5qc1xuLy8gbW9kdWxlIGlkID0gMzQ0XG4vLyBtb2R1bGUgY2h1bmtzID0gMyIsIlwidXNlIHN0cmljdFwiO3ZhciBfc2xpY2VkVG9BcnJheT1mdW5jdGlvbigpe2Z1bmN0aW9uIHNsaWNlSXRlcmF0b3IoYXJyLGkpe3ZhciBfYXJyPVtdO3ZhciBfbj10cnVlO3ZhciBfZD1mYWxzZTt2YXIgX2U9dW5kZWZpbmVkO3RyeXtmb3IodmFyIF9pPWFycltTeW1ib2wuaXRlcmF0b3JdKCksX3M7IShfbj0oX3M9X2kubmV4dCgpKS5kb25lKTtfbj10cnVlKXtfYXJyLnB1c2goX3MudmFsdWUpO2lmKGkmJl9hcnIubGVuZ3RoPT09aSlicmVhazt9fWNhdGNoKGVycil7X2Q9dHJ1ZTtfZT1lcnI7fWZpbmFsbHl7dHJ5e2lmKCFfbiYmX2lbXCJyZXR1cm5cIl0pX2lbXCJyZXR1cm5cIl0oKTt9ZmluYWxseXtpZihfZCl0aHJvdyBfZTt9fXJldHVybiBfYXJyO31yZXR1cm4gZnVuY3Rpb24oYXJyLGkpe2lmKEFycmF5LmlzQXJyYXkoYXJyKSl7cmV0dXJuIGFycjt9ZWxzZSBpZihTeW1ib2wuaXRlcmF0b3IgaW4gT2JqZWN0KGFycikpe3JldHVybiBzbGljZUl0ZXJhdG9yKGFycixpKTt9ZWxzZXt0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZVwiKTt9fTt9KCk7dmFyIF90eXBlb2Y9dHlwZW9mIFN5bWJvbD09PVwiZnVuY3Rpb25cIiYmdHlwZW9mIFN5bWJvbC5pdGVyYXRvcj09PVwic3ltYm9sXCI/ZnVuY3Rpb24ob2JqKXtyZXR1cm4gdHlwZW9mIG9iajt9OmZ1bmN0aW9uKG9iail7cmV0dXJuIG9iaiYmdHlwZW9mIFN5bWJvbD09PVwiZnVuY3Rpb25cIiYmb2JqLmNvbnN0cnVjdG9yPT09U3ltYm9sJiZvYmohPT1TeW1ib2wucHJvdG90eXBlP1wic3ltYm9sXCI6dHlwZW9mIG9iajt9O2Z1bmN0aW9uIF90b0NvbnN1bWFibGVBcnJheShhcnIpe2lmKEFycmF5LmlzQXJyYXkoYXJyKSl7Zm9yKHZhciBpPTAsYXJyMj1BcnJheShhcnIubGVuZ3RoKTtpPGFyci5sZW5ndGg7aSsrKXthcnIyW2ldPWFycltpXTt9cmV0dXJuIGFycjI7fWVsc2V7cmV0dXJuIEFycmF5LmZyb20oYXJyKTt9fXZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0PXJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKTtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLmRlZmF1bHQ9ZXhwb3J0cy5pbml0aWFsaXplQ29ubmVjdD12b2lkIDA7dmFyIF9leHRlbmRzMj1faW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2V4dGVuZHNcIikpO3ZhciBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZTI9X2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlXCIpKTt2YXIgX2hvaXN0Tm9uUmVhY3RTdGF0aWNzPV9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcImhvaXN0LW5vbi1yZWFjdC1zdGF0aWNzXCIpKTt2YXIgX3JlYWN0PV9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKHJlcXVpcmUoXCJyZWFjdFwiKSk7dmFyIF9yZWFjdElzPXJlcXVpcmUoXCJyZWFjdC1pc1wiKTt2YXIgX3NlbGVjdG9yRmFjdG9yeT1faW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuLi9jb25uZWN0L3NlbGVjdG9yRmFjdG9yeVwiKSk7dmFyIF9tYXBEaXNwYXRjaFRvUHJvcHM9cmVxdWlyZShcIi4uL2Nvbm5lY3QvbWFwRGlzcGF0Y2hUb1Byb3BzXCIpO3ZhciBfbWFwU3RhdGVUb1Byb3BzPXJlcXVpcmUoXCIuLi9jb25uZWN0L21hcFN0YXRlVG9Qcm9wc1wiKTt2YXIgX21lcmdlUHJvcHM9cmVxdWlyZShcIi4uL2Nvbm5lY3QvbWVyZ2VQcm9wc1wiKTt2YXIgX1N1YnNjcmlwdGlvbj1yZXF1aXJlKFwiLi4vdXRpbHMvU3Vic2NyaXB0aW9uXCIpO3ZhciBfdXNlSXNvbW9ycGhpY0xheW91dEVmZmVjdD1yZXF1aXJlKFwiLi4vdXRpbHMvdXNlSXNvbW9ycGhpY0xheW91dEVmZmVjdFwiKTt2YXIgX3NoYWxsb3dFcXVhbD1faW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuLi91dGlscy9zaGFsbG93RXF1YWxcIikpO3ZhciBfd2FybmluZz1faW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuLi91dGlscy93YXJuaW5nXCIpKTt2YXIgX0NvbnRleHQ9cmVxdWlyZShcIi4vQ29udGV4dFwiKTt2YXIgX3VzZVN5bmNFeHRlcm5hbFN0b3JlPXJlcXVpcmUoXCIuLi91dGlscy91c2VTeW5jRXh0ZXJuYWxTdG9yZVwiKTt2YXIgX2V4Y2x1ZGVkPVtcInJlYWN0UmVkdXhGb3J3YXJkZWRSZWZcIl07ZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKG5vZGVJbnRlcm9wKXtpZih0eXBlb2YgV2Vha01hcCE9PVwiZnVuY3Rpb25cIilyZXR1cm4gbnVsbDt2YXIgY2FjaGVCYWJlbEludGVyb3A9bmV3IFdlYWtNYXAoKTt2YXIgY2FjaGVOb2RlSW50ZXJvcD1uZXcgV2Vha01hcCgpO3JldHVybihfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGU9ZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKG5vZGVJbnRlcm9wKXtyZXR1cm4gbm9kZUludGVyb3A/Y2FjaGVOb2RlSW50ZXJvcDpjYWNoZUJhYmVsSW50ZXJvcDt9KShub2RlSW50ZXJvcCk7fWZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKG9iaixub2RlSW50ZXJvcCl7aWYoIW5vZGVJbnRlcm9wJiZvYmomJm9iai5fX2VzTW9kdWxlKXtyZXR1cm4gb2JqO31pZihvYmo9PT1udWxsfHwodHlwZW9mIG9iaj09PVwidW5kZWZpbmVkXCI/XCJ1bmRlZmluZWRcIjpfdHlwZW9mKG9iaikpIT09XCJvYmplY3RcIiYmdHlwZW9mIG9iaiE9PVwiZnVuY3Rpb25cIil7cmV0dXJue2RlZmF1bHQ6b2JqfTt9dmFyIGNhY2hlPV9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZShub2RlSW50ZXJvcCk7aWYoY2FjaGUmJmNhY2hlLmhhcyhvYmopKXtyZXR1cm4gY2FjaGUuZ2V0KG9iaik7fXZhciBuZXdPYmo9e307dmFyIGhhc1Byb3BlcnR5RGVzY3JpcHRvcj1PYmplY3QuZGVmaW5lUHJvcGVydHkmJk9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7Zm9yKHZhciBrZXkgaW4gb2JqKXtpZihrZXkhPT1cImRlZmF1bHRcIiYmT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaixrZXkpKXt2YXIgZGVzYz1oYXNQcm9wZXJ0eURlc2NyaXB0b3I/T2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmosa2V5KTpudWxsO2lmKGRlc2MmJihkZXNjLmdldHx8ZGVzYy5zZXQpKXtPYmplY3QuZGVmaW5lUHJvcGVydHkobmV3T2JqLGtleSxkZXNjKTt9ZWxzZXtuZXdPYmpba2V5XT1vYmpba2V5XTt9fX1uZXdPYmouZGVmYXVsdD1vYmo7aWYoY2FjaGUpe2NhY2hlLnNldChvYmosbmV3T2JqKTt9cmV0dXJuIG5ld09iajt9dmFyIHVzZVN5bmNFeHRlcm5hbFN0b3JlPV91c2VTeW5jRXh0ZXJuYWxTdG9yZS5ub3RJbml0aWFsaXplZDt2YXIgaW5pdGlhbGl6ZUNvbm5lY3Q9ZnVuY3Rpb24gaW5pdGlhbGl6ZUNvbm5lY3QoZm4pe3VzZVN5bmNFeHRlcm5hbFN0b3JlPWZuO307Ly8gRGVmaW5lIHNvbWUgY29uc3RhbnQgYXJyYXlzIGp1c3QgdG8gYXZvaWQgcmUtY3JlYXRpbmcgdGhlc2VcbmV4cG9ydHMuaW5pdGlhbGl6ZUNvbm5lY3Q9aW5pdGlhbGl6ZUNvbm5lY3Q7dmFyIEVNUFRZX0FSUkFZPVtudWxsLDBdO3ZhciBOT19TVUJTQ1JJUFRJT05fQVJSQVk9W251bGwsbnVsbF07Ly8gQXR0ZW1wdHMgdG8gc3RyaW5naWZ5IHdoYXRldmVyIG5vdC1yZWFsbHktYS1jb21wb25lbnQgdmFsdWUgd2Ugd2VyZSBnaXZlblxuLy8gZm9yIGxvZ2dpbmcgaW4gYW4gZXJyb3IgbWVzc2FnZVxudmFyIHN0cmluZ2lmeUNvbXBvbmVudD1mdW5jdGlvbiBzdHJpbmdpZnlDb21wb25lbnQoQ29tcCl7dHJ5e3JldHVybiBKU09OLnN0cmluZ2lmeShDb21wKTt9Y2F0Y2goZXJyKXtyZXR1cm4gU3RyaW5nKENvbXApO319Oy8vIFRoaXMgaXMgXCJqdXN0XCIgYSBgdXNlTGF5b3V0RWZmZWN0YCwgYnV0IHdpdGggdHdvIG1vZGlmaWNhdGlvbnM6XG4vLyAtIHdlIG5lZWQgdG8gZmFsbCBiYWNrIHRvIGB1c2VFZmZlY3RgIGluIFNTUiB0byBhdm9pZCBhbm5veWluZyB3YXJuaW5nc1xuLy8gLSB3ZSBleHRyYWN0IHRoaXMgdG8gYSBzZXBhcmF0ZSBmdW5jdGlvbiB0byBhdm9pZCBjbG9zaW5nIG92ZXIgdmFsdWVzXG4vLyAgIGFuZCBjYXVzaW5nIG1lbW9yeSBsZWFrc1xuZnVuY3Rpb24gdXNlSXNvbW9ycGhpY0xheW91dEVmZmVjdFdpdGhBcmdzKGVmZmVjdEZ1bmMsZWZmZWN0QXJncyxkZXBlbmRlbmNpZXMpeygwLF91c2VJc29tb3JwaGljTGF5b3V0RWZmZWN0LnVzZUlzb21vcnBoaWNMYXlvdXRFZmZlY3QpKGZ1bmN0aW9uKCl7cmV0dXJuIGVmZmVjdEZ1bmMuYXBwbHkodW5kZWZpbmVkLF90b0NvbnN1bWFibGVBcnJheShlZmZlY3RBcmdzKSk7fSxkZXBlbmRlbmNpZXMpO30vLyBFZmZlY3QgY2FsbGJhY2ssIGV4dHJhY3RlZDogYXNzaWduIHRoZSBsYXRlc3QgcHJvcHMgdmFsdWVzIHRvIHJlZnMgZm9yIGxhdGVyIHVzYWdlXG5mdW5jdGlvbiBjYXB0dXJlV3JhcHBlclByb3BzKGxhc3RXcmFwcGVyUHJvcHMsbGFzdENoaWxkUHJvcHMscmVuZGVySXNTY2hlZHVsZWQsd3JhcHBlclByb3BzLC8vIGFjdHVhbENoaWxkUHJvcHM6IHVua25vd24sXG5jaGlsZFByb3BzRnJvbVN0b3JlVXBkYXRlLG5vdGlmeU5lc3RlZFN1YnMpey8vIFdlIHdhbnQgdG8gY2FwdHVyZSB0aGUgd3JhcHBlciBwcm9wcyBhbmQgY2hpbGQgcHJvcHMgd2UgdXNlZCBmb3IgbGF0ZXIgY29tcGFyaXNvbnNcbmxhc3RXcmFwcGVyUHJvcHMuY3VycmVudD13cmFwcGVyUHJvcHM7cmVuZGVySXNTY2hlZHVsZWQuY3VycmVudD1mYWxzZTsvLyBJZiB0aGUgcmVuZGVyIHdhcyBmcm9tIGEgc3RvcmUgdXBkYXRlLCBjbGVhciBvdXQgdGhhdCByZWZlcmVuY2UgYW5kIGNhc2NhZGUgdGhlIHN1YnNjcmliZXIgdXBkYXRlXG5pZihjaGlsZFByb3BzRnJvbVN0b3JlVXBkYXRlLmN1cnJlbnQpe2NoaWxkUHJvcHNGcm9tU3RvcmVVcGRhdGUuY3VycmVudD1udWxsO25vdGlmeU5lc3RlZFN1YnMoKTt9fS8vIEVmZmVjdCBjYWxsYmFjaywgZXh0cmFjdGVkOiBzdWJzY3JpYmUgdG8gdGhlIFJlZHV4IHN0b3JlIG9yIG5lYXJlc3QgY29ubmVjdGVkIGFuY2VzdG9yLFxuLy8gY2hlY2sgZm9yIHVwZGF0ZXMgYWZ0ZXIgZGlzcGF0Y2hlZCBhY3Rpb25zLCBhbmQgdHJpZ2dlciByZS1yZW5kZXJzLlxuZnVuY3Rpb24gc3Vic2NyaWJlVXBkYXRlcyhzaG91bGRIYW5kbGVTdGF0ZUNoYW5nZXMsc3RvcmUsc3Vic2NyaXB0aW9uLGNoaWxkUHJvcHNTZWxlY3RvcixsYXN0V3JhcHBlclByb3BzLGxhc3RDaGlsZFByb3BzLHJlbmRlcklzU2NoZWR1bGVkLGlzTW91bnRlZCxjaGlsZFByb3BzRnJvbVN0b3JlVXBkYXRlLG5vdGlmeU5lc3RlZFN1YnMsLy8gZm9yY2VDb21wb25lbnRVcGRhdGVEaXNwYXRjaDogUmVhY3QuRGlzcGF0Y2g8YW55PixcbmFkZGl0aW9uYWxTdWJzY3JpYmVMaXN0ZW5lcil7Ly8gSWYgd2UncmUgbm90IHN1YnNjcmliZWQgdG8gdGhlIHN0b3JlLCBub3RoaW5nIHRvIGRvIGhlcmVcbmlmKCFzaG91bGRIYW5kbGVTdGF0ZUNoYW5nZXMpcmV0dXJuIGZ1bmN0aW9uKCl7fTsvLyBDYXB0dXJlIHZhbHVlcyBmb3IgY2hlY2tpbmcgaWYgYW5kIHdoZW4gdGhpcyBjb21wb25lbnQgdW5tb3VudHNcbnZhciBkaWRVbnN1YnNjcmliZT1mYWxzZTt2YXIgbGFzdFRocm93bkVycm9yPW51bGw7Ly8gV2UnbGwgcnVuIHRoaXMgY2FsbGJhY2sgZXZlcnkgdGltZSBhIHN0b3JlIHN1YnNjcmlwdGlvbiB1cGRhdGUgcHJvcGFnYXRlcyB0byB0aGlzIGNvbXBvbmVudFxudmFyIGNoZWNrRm9yVXBkYXRlcz1mdW5jdGlvbiBjaGVja0ZvclVwZGF0ZXMoKXtpZihkaWRVbnN1YnNjcmliZXx8IWlzTW91bnRlZC5jdXJyZW50KXsvLyBEb24ndCBydW4gc3RhbGUgbGlzdGVuZXJzLlxuLy8gUmVkdXggZG9lc24ndCBndWFyYW50ZWUgdW5zdWJzY3JpcHRpb25zIGhhcHBlbiB1bnRpbCBuZXh0IGRpc3BhdGNoLlxucmV0dXJuO30vLyBUT0RPIFdlJ3JlIGN1cnJlbnRseSBjYWxsaW5nIGdldFN0YXRlIG91cnNlbHZlcyBoZXJlLCByYXRoZXIgdGhhbiBsZXR0aW5nIGB1U0VTYCBkbyBpdFxudmFyIGxhdGVzdFN0b3JlU3RhdGU9c3RvcmUuZ2V0U3RhdGUoKTt2YXIgbmV3Q2hpbGRQcm9wcz12b2lkIDAsZXJyb3I9dm9pZCAwO3RyeXsvLyBBY3R1YWxseSBydW4gdGhlIHNlbGVjdG9yIHdpdGggdGhlIG1vc3QgcmVjZW50IHN0b3JlIHN0YXRlIGFuZCB3cmFwcGVyIHByb3BzXG4vLyB0byBkZXRlcm1pbmUgd2hhdCB0aGUgY2hpbGQgcHJvcHMgc2hvdWxkIGJlXG5uZXdDaGlsZFByb3BzPWNoaWxkUHJvcHNTZWxlY3RvcihsYXRlc3RTdG9yZVN0YXRlLGxhc3RXcmFwcGVyUHJvcHMuY3VycmVudCk7fWNhdGNoKGUpe2Vycm9yPWU7bGFzdFRocm93bkVycm9yPWU7fWlmKCFlcnJvcil7bGFzdFRocm93bkVycm9yPW51bGw7fS8vIElmIHRoZSBjaGlsZCBwcm9wcyBoYXZlbid0IGNoYW5nZWQsIG5vdGhpbmcgdG8gZG8gaGVyZSAtIGNhc2NhZGUgdGhlIHN1YnNjcmlwdGlvbiB1cGRhdGVcbmlmKG5ld0NoaWxkUHJvcHM9PT1sYXN0Q2hpbGRQcm9wcy5jdXJyZW50KXtpZighcmVuZGVySXNTY2hlZHVsZWQuY3VycmVudCl7bm90aWZ5TmVzdGVkU3VicygpO319ZWxzZXsvLyBTYXZlIHJlZmVyZW5jZXMgdG8gdGhlIG5ldyBjaGlsZCBwcm9wcy4gIE5vdGUgdGhhdCB3ZSB0cmFjayB0aGUgXCJjaGlsZCBwcm9wcyBmcm9tIHN0b3JlIHVwZGF0ZVwiXG4vLyBhcyBhIHJlZiBpbnN0ZWFkIG9mIGEgdXNlU3RhdGUvdXNlUmVkdWNlciBiZWNhdXNlIHdlIG5lZWQgYSB3YXkgdG8gZGV0ZXJtaW5lIGlmIHRoYXQgdmFsdWUgaGFzXG4vLyBiZWVuIHByb2Nlc3NlZC4gIElmIHRoaXMgd2VudCBpbnRvIHVzZVN0YXRlL3VzZVJlZHVjZXIsIHdlIGNvdWxkbid0IGNsZWFyIG91dCB0aGUgdmFsdWUgd2l0aG91dFxuLy8gZm9yY2luZyBhbm90aGVyIHJlLXJlbmRlciwgd2hpY2ggd2UgZG9uJ3Qgd2FudC5cbmxhc3RDaGlsZFByb3BzLmN1cnJlbnQ9bmV3Q2hpbGRQcm9wcztjaGlsZFByb3BzRnJvbVN0b3JlVXBkYXRlLmN1cnJlbnQ9bmV3Q2hpbGRQcm9wcztyZW5kZXJJc1NjaGVkdWxlZC5jdXJyZW50PXRydWU7Ly8gVE9ETyBUaGlzIGlzIGhhY2t5IGFuZCBub3QgaG93IGB1U0VTYCBpcyBtZWFudCB0byBiZSB1c2VkXG4vLyBUcmlnZ2VyIHRoZSBSZWFjdCBgdXNlU3luY0V4dGVybmFsU3RvcmVgIHN1YnNjcmliZXJcbmFkZGl0aW9uYWxTdWJzY3JpYmVMaXN0ZW5lcigpO319Oy8vIEFjdHVhbGx5IHN1YnNjcmliZSB0byB0aGUgbmVhcmVzdCBjb25uZWN0ZWQgYW5jZXN0b3IgKG9yIHN0b3JlKVxuc3Vic2NyaXB0aW9uLm9uU3RhdGVDaGFuZ2U9Y2hlY2tGb3JVcGRhdGVzO3N1YnNjcmlwdGlvbi50cnlTdWJzY3JpYmUoKTsvLyBQdWxsIGRhdGEgZnJvbSB0aGUgc3RvcmUgYWZ0ZXIgZmlyc3QgcmVuZGVyIGluIGNhc2UgdGhlIHN0b3JlIGhhc1xuLy8gY2hhbmdlZCBzaW5jZSB3ZSBiZWdhbi5cbmNoZWNrRm9yVXBkYXRlcygpO3ZhciB1bnN1YnNjcmliZVdyYXBwZXI9ZnVuY3Rpb24gdW5zdWJzY3JpYmVXcmFwcGVyKCl7ZGlkVW5zdWJzY3JpYmU9dHJ1ZTtzdWJzY3JpcHRpb24udHJ5VW5zdWJzY3JpYmUoKTtzdWJzY3JpcHRpb24ub25TdGF0ZUNoYW5nZT1udWxsO2lmKGxhc3RUaHJvd25FcnJvcil7Ly8gSXQncyBwb3NzaWJsZSB0aGF0IHdlIGNhdWdodCBhbiBlcnJvciBkdWUgdG8gYSBiYWQgbWFwU3RhdGUgZnVuY3Rpb24sIGJ1dCB0aGVcbi8vIHBhcmVudCByZS1yZW5kZXJlZCB3aXRob3V0IHRoaXMgY29tcG9uZW50IGFuZCB3ZSdyZSBhYm91dCB0byB1bm1vdW50LlxuLy8gVGhpcyBzaG91bGRuJ3QgaGFwcGVuIGFzIGxvbmcgYXMgd2UgZG8gdG9wLWRvd24gc3Vic2NyaXB0aW9ucyBjb3JyZWN0bHksIGJ1dFxuLy8gaWYgd2UgZXZlciBkbyB0aG9zZSB3cm9uZywgdGhpcyB0aHJvdyB3aWxsIHN1cmZhY2UgdGhlIGVycm9yIGluIG91ciB0ZXN0cy5cbi8vIEluIHRoYXQgY2FzZSwgdGhyb3cgdGhlIGVycm9yIGZyb20gaGVyZSBzbyBpdCBkb2Vzbid0IGdldCBsb3N0LlxudGhyb3cgbGFzdFRocm93bkVycm9yO319O3JldHVybiB1bnN1YnNjcmliZVdyYXBwZXI7fS8vIFJlZHVjZXIgaW5pdGlhbCBzdGF0ZSBjcmVhdGlvbiBmb3Igb3VyIHVwZGF0ZSByZWR1Y2VyXG52YXIgaW5pdFN0YXRlVXBkYXRlcz1mdW5jdGlvbiBpbml0U3RhdGVVcGRhdGVzKCl7cmV0dXJuIEVNUFRZX0FSUkFZO307ZnVuY3Rpb24gc3RyaWN0RXF1YWwoYSxiKXtyZXR1cm4gYT09PWI7fS8qKlxyXG4gKiBJbmZlcnMgdGhlIHR5cGUgb2YgcHJvcHMgdGhhdCBhIGNvbm5lY3RvciB3aWxsIGluamVjdCBpbnRvIGEgY29tcG9uZW50LlxyXG4gKi92YXIgaGFzV2FybmVkQWJvdXREZXByZWNhdGVkUHVyZU9wdGlvbj1mYWxzZTsvKipcclxuICogQ29ubmVjdHMgYSBSZWFjdCBjb21wb25lbnQgdG8gYSBSZWR1eCBzdG9yZS5cclxuICpcclxuICogLSBXaXRob3V0IGFyZ3VtZW50cywganVzdCB3cmFwcyB0aGUgY29tcG9uZW50LCB3aXRob3V0IGNoYW5naW5nIHRoZSBiZWhhdmlvciAvIHByb3BzXHJcbiAqXHJcbiAqIC0gSWYgMiBwYXJhbXMgYXJlIHBhc3NlZCAoM3JkIHBhcmFtLCBtZXJnZVByb3BzLCBpcyBza2lwcGVkKSwgZGVmYXVsdCBiZWhhdmlvclxyXG4gKiBpcyB0byBvdmVycmlkZSBvd25Qcm9wcyAoYXMgc3RhdGVkIGluIHRoZSBkb2NzKSwgc28gd2hhdCByZW1haW5zIGlzIGV2ZXJ5dGhpbmcgdGhhdCdzXHJcbiAqIG5vdCBhIHN0YXRlIG9yIGRpc3BhdGNoIHByb3BcclxuICpcclxuICogLSBXaGVuIDNyZCBwYXJhbSBpcyBwYXNzZWQsIHdlIGRvbid0IGtub3cgaWYgb3duUHJvcHMgcHJvcGFnYXRlIGFuZCB3aGV0aGVyIHRoZXlcclxuICogc2hvdWxkIGJlIHZhbGlkIGNvbXBvbmVudCBwcm9wcywgYmVjYXVzZSBpdCBkZXBlbmRzIG9uIG1lcmdlUHJvcHMgaW1wbGVtZW50YXRpb24uXHJcbiAqIEFzIHN1Y2gsIGl0IGlzIHRoZSB1c2VyJ3MgcmVzcG9uc2liaWxpdHkgdG8gZXh0ZW5kIG93blByb3BzIGludGVyZmFjZSBmcm9tIHN0YXRlIG9yXHJcbiAqIGRpc3BhdGNoIHByb3BzIG9yIGJvdGggd2hlbiBhcHBsaWNhYmxlXHJcbiAqXHJcbiAqIEBwYXJhbSBtYXBTdGF0ZVRvUHJvcHMgQSBmdW5jdGlvbiB0aGF0IGV4dHJhY3RzIHZhbHVlcyBmcm9tIHN0YXRlXHJcbiAqIEBwYXJhbSBtYXBEaXNwYXRjaFRvUHJvcHMgU2V0dXAgZm9yIGRpc3BhdGNoaW5nIGFjdGlvbnNcclxuICogQHBhcmFtIG1lcmdlUHJvcHMgT3B0aW9uYWwgY2FsbGJhY2sgdG8gbWVyZ2Ugc3RhdGUgYW5kIGRpc3BhdGNoIHByb3BzIHRvZ2V0aGVyXHJcbiAqIEBwYXJhbSBvcHRpb25zIE9wdGlvbnMgZm9yIGNvbmZpZ3VyaW5nIHRoZSBjb25uZWN0aW9uXHJcbiAqXHJcbiAqL2Z1bmN0aW9uIGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLG1hcERpc3BhdGNoVG9Qcm9wcyxtZXJnZVByb3BzKXt2YXIgX3JlZj1hcmd1bWVudHMubGVuZ3RoPjMmJmFyZ3VtZW50c1szXSE9PXVuZGVmaW5lZD9hcmd1bWVudHNbM106e30scHVyZT1fcmVmLnB1cmUsX3JlZiRhcmVTdGF0ZXNFcXVhbD1fcmVmLmFyZVN0YXRlc0VxdWFsLGFyZVN0YXRlc0VxdWFsPV9yZWYkYXJlU3RhdGVzRXF1YWw9PT11bmRlZmluZWQ/c3RyaWN0RXF1YWw6X3JlZiRhcmVTdGF0ZXNFcXVhbCxfcmVmJGFyZU93blByb3BzRXF1YWw9X3JlZi5hcmVPd25Qcm9wc0VxdWFsLGFyZU93blByb3BzRXF1YWw9X3JlZiRhcmVPd25Qcm9wc0VxdWFsPT09dW5kZWZpbmVkP19zaGFsbG93RXF1YWwuZGVmYXVsdDpfcmVmJGFyZU93blByb3BzRXF1YWwsX3JlZiRhcmVTdGF0ZVByb3BzRXF1PV9yZWYuYXJlU3RhdGVQcm9wc0VxdWFsLGFyZVN0YXRlUHJvcHNFcXVhbD1fcmVmJGFyZVN0YXRlUHJvcHNFcXU9PT11bmRlZmluZWQ/X3NoYWxsb3dFcXVhbC5kZWZhdWx0Ol9yZWYkYXJlU3RhdGVQcm9wc0VxdSxfcmVmJGFyZU1lcmdlZFByb3BzRXE9X3JlZi5hcmVNZXJnZWRQcm9wc0VxdWFsLGFyZU1lcmdlZFByb3BzRXF1YWw9X3JlZiRhcmVNZXJnZWRQcm9wc0VxPT09dW5kZWZpbmVkP19zaGFsbG93RXF1YWwuZGVmYXVsdDpfcmVmJGFyZU1lcmdlZFByb3BzRXEsX3JlZiRmb3J3YXJkUmVmPV9yZWYuZm9yd2FyZFJlZixmb3J3YXJkUmVmPV9yZWYkZm9yd2FyZFJlZj09PXVuZGVmaW5lZD9mYWxzZTpfcmVmJGZvcndhcmRSZWYsX3JlZiRjb250ZXh0PV9yZWYuY29udGV4dCxjb250ZXh0PV9yZWYkY29udGV4dD09PXVuZGVmaW5lZD9fQ29udGV4dC5SZWFjdFJlZHV4Q29udGV4dDpfcmVmJGNvbnRleHQ7aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYhPT0ncHJvZHVjdGlvbicpe2lmKHB1cmUhPT11bmRlZmluZWQmJiFoYXNXYXJuZWRBYm91dERlcHJlY2F0ZWRQdXJlT3B0aW9uKXtoYXNXYXJuZWRBYm91dERlcHJlY2F0ZWRQdXJlT3B0aW9uPXRydWU7KDAsX3dhcm5pbmcuZGVmYXVsdCkoJ1RoZSBgcHVyZWAgb3B0aW9uIGhhcyBiZWVuIHJlbW92ZWQuIGBjb25uZWN0YCBpcyBub3cgYWx3YXlzIGEgXCJwdXJlL21lbW9pemVkXCIgY29tcG9uZW50Jyk7fX12YXIgQ29udGV4dD1jb250ZXh0O3ZhciBpbml0TWFwU3RhdGVUb1Byb3BzPSgwLF9tYXBTdGF0ZVRvUHJvcHMubWFwU3RhdGVUb1Byb3BzRmFjdG9yeSkobWFwU3RhdGVUb1Byb3BzKTt2YXIgaW5pdE1hcERpc3BhdGNoVG9Qcm9wcz0oMCxfbWFwRGlzcGF0Y2hUb1Byb3BzLm1hcERpc3BhdGNoVG9Qcm9wc0ZhY3RvcnkpKG1hcERpc3BhdGNoVG9Qcm9wcyk7dmFyIGluaXRNZXJnZVByb3BzPSgwLF9tZXJnZVByb3BzLm1lcmdlUHJvcHNGYWN0b3J5KShtZXJnZVByb3BzKTt2YXIgc2hvdWxkSGFuZGxlU3RhdGVDaGFuZ2VzPUJvb2xlYW4obWFwU3RhdGVUb1Byb3BzKTt2YXIgd3JhcFdpdGhDb25uZWN0PWZ1bmN0aW9uIHdyYXBXaXRoQ29ubmVjdChXcmFwcGVkQ29tcG9uZW50KXtpZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyYmISgwLF9yZWFjdElzLmlzVmFsaWRFbGVtZW50VHlwZSkoV3JhcHBlZENvbXBvbmVudCkpe3Rocm93IG5ldyBFcnJvcihcIllvdSBtdXN0IHBhc3MgYSBjb21wb25lbnQgdG8gdGhlIGZ1bmN0aW9uIHJldHVybmVkIGJ5IGNvbm5lY3QuIEluc3RlYWQgcmVjZWl2ZWQgXCIrc3RyaW5naWZ5Q29tcG9uZW50KFdyYXBwZWRDb21wb25lbnQpKTt9dmFyIHdyYXBwZWRDb21wb25lbnROYW1lPVdyYXBwZWRDb21wb25lbnQuZGlzcGxheU5hbWV8fFdyYXBwZWRDb21wb25lbnQubmFtZXx8J0NvbXBvbmVudCc7dmFyIGRpc3BsYXlOYW1lPVwiQ29ubmVjdChcIit3cmFwcGVkQ29tcG9uZW50TmFtZStcIilcIjt2YXIgc2VsZWN0b3JGYWN0b3J5T3B0aW9ucz17c2hvdWxkSGFuZGxlU3RhdGVDaGFuZ2VzOnNob3VsZEhhbmRsZVN0YXRlQ2hhbmdlcyxkaXNwbGF5TmFtZTpkaXNwbGF5TmFtZSx3cmFwcGVkQ29tcG9uZW50TmFtZTp3cmFwcGVkQ29tcG9uZW50TmFtZSxXcmFwcGVkQ29tcG9uZW50OldyYXBwZWRDb21wb25lbnQsLy8gQHRzLWlnbm9yZVxuaW5pdE1hcFN0YXRlVG9Qcm9wczppbml0TWFwU3RhdGVUb1Byb3BzLC8vIEB0cy1pZ25vcmVcbmluaXRNYXBEaXNwYXRjaFRvUHJvcHM6aW5pdE1hcERpc3BhdGNoVG9Qcm9wcyxpbml0TWVyZ2VQcm9wczppbml0TWVyZ2VQcm9wcyxhcmVTdGF0ZXNFcXVhbDphcmVTdGF0ZXNFcXVhbCxhcmVTdGF0ZVByb3BzRXF1YWw6YXJlU3RhdGVQcm9wc0VxdWFsLGFyZU93blByb3BzRXF1YWw6YXJlT3duUHJvcHNFcXVhbCxhcmVNZXJnZWRQcm9wc0VxdWFsOmFyZU1lcmdlZFByb3BzRXF1YWx9O2Z1bmN0aW9uIENvbm5lY3RGdW5jdGlvbihwcm9wcyl7dmFyIF9yZWYyPSgwLF9yZWFjdC51c2VNZW1vKShmdW5jdGlvbigpey8vIERpc3Rpbmd1aXNoIGJldHdlZW4gYWN0dWFsIFwiZGF0YVwiIHByb3BzIHRoYXQgd2VyZSBwYXNzZWQgdG8gdGhlIHdyYXBwZXIgY29tcG9uZW50LFxuLy8gYW5kIHZhbHVlcyBuZWVkZWQgdG8gY29udHJvbCBiZWhhdmlvciAoZm9yd2FyZGVkIHJlZnMsIGFsdGVybmF0ZSBjb250ZXh0IGluc3RhbmNlcykuXG4vLyBUbyBtYWludGFpbiB0aGUgd3JhcHBlclByb3BzIG9iamVjdCByZWZlcmVuY2UsIG1lbW9pemUgdGhpcyBkZXN0cnVjdHVyaW5nLlxudmFyIHJlYWN0UmVkdXhGb3J3YXJkZWRSZWY9cHJvcHMucmVhY3RSZWR1eEZvcndhcmRlZFJlZix3cmFwcGVyUHJvcHM9KDAsX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UyLmRlZmF1bHQpKHByb3BzLF9leGNsdWRlZCk7cmV0dXJuW3Byb3BzLmNvbnRleHQscmVhY3RSZWR1eEZvcndhcmRlZFJlZix3cmFwcGVyUHJvcHNdO30sW3Byb3BzXSksX3JlZjM9X3NsaWNlZFRvQXJyYXkoX3JlZjIsMykscHJvcHNDb250ZXh0PV9yZWYzWzBdLHJlYWN0UmVkdXhGb3J3YXJkZWRSZWY9X3JlZjNbMV0sd3JhcHBlclByb3BzPV9yZWYzWzJdO3ZhciBDb250ZXh0VG9Vc2U9KDAsX3JlYWN0LnVzZU1lbW8pKGZ1bmN0aW9uKCl7Ly8gVXNlcnMgbWF5IG9wdGlvbmFsbHkgcGFzcyBpbiBhIGN1c3RvbSBjb250ZXh0IGluc3RhbmNlIHRvIHVzZSBpbnN0ZWFkIG9mIG91ciBSZWFjdFJlZHV4Q29udGV4dC5cbi8vIE1lbW9pemUgdGhlIGNoZWNrIHRoYXQgZGV0ZXJtaW5lcyB3aGljaCBjb250ZXh0IGluc3RhbmNlIHdlIHNob3VsZCB1c2UuXG5yZXR1cm4gcHJvcHNDb250ZXh0JiZwcm9wc0NvbnRleHQuQ29uc3VtZXImJi8vIEB0cy1pZ25vcmVcbigwLF9yZWFjdElzLmlzQ29udGV4dENvbnN1bWVyKSgvKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChwcm9wc0NvbnRleHQuQ29uc3VtZXIsbnVsbCkpP3Byb3BzQ29udGV4dDpDb250ZXh0O30sW3Byb3BzQ29udGV4dCxDb250ZXh0XSk7Ly8gUmV0cmlldmUgdGhlIHN0b3JlIGFuZCBhbmNlc3RvciBzdWJzY3JpcHRpb24gdmlhIGNvbnRleHQsIGlmIGF2YWlsYWJsZVxudmFyIGNvbnRleHRWYWx1ZT0oMCxfcmVhY3QudXNlQ29udGV4dCkoQ29udGV4dFRvVXNlKTsvLyBUaGUgc3RvcmUgX211c3RfIGV4aXN0IGFzIGVpdGhlciBhIHByb3Agb3IgaW4gY29udGV4dC5cbi8vIFdlJ2xsIGNoZWNrIHRvIHNlZSBpZiBpdCBfbG9va3NfIGxpa2UgYSBSZWR1eCBzdG9yZSBmaXJzdC5cbi8vIFRoaXMgYWxsb3dzIHVzIHRvIHBhc3MgdGhyb3VnaCBhIGBzdG9yZWAgcHJvcCB0aGF0IGlzIGp1c3QgYSBwbGFpbiB2YWx1ZS5cbnZhciBkaWRTdG9yZUNvbWVGcm9tUHJvcHM9Qm9vbGVhbihwcm9wcy5zdG9yZSkmJkJvb2xlYW4ocHJvcHMuc3RvcmUuZ2V0U3RhdGUpJiZCb29sZWFuKHByb3BzLnN0b3JlLmRpc3BhdGNoKTt2YXIgZGlkU3RvcmVDb21lRnJvbUNvbnRleHQ9Qm9vbGVhbihjb250ZXh0VmFsdWUpJiZCb29sZWFuKGNvbnRleHRWYWx1ZS5zdG9yZSk7aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYhPT0ncHJvZHVjdGlvbicmJiFkaWRTdG9yZUNvbWVGcm9tUHJvcHMmJiFkaWRTdG9yZUNvbWVGcm9tQ29udGV4dCl7dGhyb3cgbmV3IEVycm9yKFwiQ291bGQgbm90IGZpbmQgXFxcInN0b3JlXFxcIiBpbiB0aGUgY29udGV4dCBvZiBcIisoXCJcXFwiXCIrZGlzcGxheU5hbWUrXCJcXFwiLiBFaXRoZXIgd3JhcCB0aGUgcm9vdCBjb21wb25lbnQgaW4gYSA8UHJvdmlkZXI+LCBcIikrXCJvciBwYXNzIGEgY3VzdG9tIFJlYWN0IGNvbnRleHQgcHJvdmlkZXIgdG8gPFByb3ZpZGVyPiBhbmQgdGhlIGNvcnJlc3BvbmRpbmcgXCIrKFwiUmVhY3QgY29udGV4dCBjb25zdW1lciB0byBcIitkaXNwbGF5TmFtZStcIiBpbiBjb25uZWN0IG9wdGlvbnMuXCIpKTt9Ly8gQmFzZWQgb24gdGhlIHByZXZpb3VzIGNoZWNrLCBvbmUgb2YgdGhlc2UgbXVzdCBiZSB0cnVlXG52YXIgc3RvcmU9ZGlkU3RvcmVDb21lRnJvbVByb3BzP3Byb3BzLnN0b3JlOmNvbnRleHRWYWx1ZS5zdG9yZTt2YXIgZ2V0U2VydmVyU3RhdGU9ZGlkU3RvcmVDb21lRnJvbUNvbnRleHQ/Y29udGV4dFZhbHVlLmdldFNlcnZlclN0YXRlOnN0b3JlLmdldFN0YXRlO3ZhciBjaGlsZFByb3BzU2VsZWN0b3I9KDAsX3JlYWN0LnVzZU1lbW8pKGZ1bmN0aW9uKCl7Ly8gVGhlIGNoaWxkIHByb3BzIHNlbGVjdG9yIG5lZWRzIHRoZSBzdG9yZSByZWZlcmVuY2UgYXMgYW4gaW5wdXQuXG4vLyBSZS1jcmVhdGUgdGhpcyBzZWxlY3RvciB3aGVuZXZlciB0aGUgc3RvcmUgY2hhbmdlcy5cbnJldHVybigwLF9zZWxlY3RvckZhY3RvcnkuZGVmYXVsdCkoc3RvcmUuZGlzcGF0Y2gsc2VsZWN0b3JGYWN0b3J5T3B0aW9ucyk7fSxbc3RvcmVdKTt2YXIgX3JlZjQ9KDAsX3JlYWN0LnVzZU1lbW8pKGZ1bmN0aW9uKCl7aWYoIXNob3VsZEhhbmRsZVN0YXRlQ2hhbmdlcylyZXR1cm4gTk9fU1VCU0NSSVBUSU9OX0FSUkFZOy8vIFRoaXMgU3Vic2NyaXB0aW9uJ3Mgc291cmNlIHNob3VsZCBtYXRjaCB3aGVyZSBzdG9yZSBjYW1lIGZyb206IHByb3BzIHZzLiBjb250ZXh0LiBBIGNvbXBvbmVudFxuLy8gY29ubmVjdGVkIHRvIHRoZSBzdG9yZSB2aWEgcHJvcHMgc2hvdWxkbid0IHVzZSBzdWJzY3JpcHRpb24gZnJvbSBjb250ZXh0LCBvciB2aWNlIHZlcnNhLlxudmFyIHN1YnNjcmlwdGlvbj0oMCxfU3Vic2NyaXB0aW9uLmNyZWF0ZVN1YnNjcmlwdGlvbikoc3RvcmUsZGlkU3RvcmVDb21lRnJvbVByb3BzP3VuZGVmaW5lZDpjb250ZXh0VmFsdWUuc3Vic2NyaXB0aW9uKTsvLyBgbm90aWZ5TmVzdGVkU3Vic2AgaXMgZHVwbGljYXRlZCB0byBoYW5kbGUgdGhlIGNhc2Ugd2hlcmUgdGhlIGNvbXBvbmVudCBpcyB1bm1vdW50ZWQgaW5cbi8vIHRoZSBtaWRkbGUgb2YgdGhlIG5vdGlmaWNhdGlvbiBsb29wLCB3aGVyZSBgc3Vic2NyaXB0aW9uYCB3aWxsIHRoZW4gYmUgbnVsbC4gVGhpcyBjYW5cbi8vIHByb2JhYmx5IGJlIGF2b2lkZWQgaWYgU3Vic2NyaXB0aW9uJ3MgbGlzdGVuZXJzIGxvZ2ljIGlzIGNoYW5nZWQgdG8gbm90IGNhbGwgbGlzdGVuZXJzXG4vLyB0aGF0IGhhdmUgYmVlbiB1bnN1YnNjcmliZWQgaW4gdGhlICBtaWRkbGUgb2YgdGhlIG5vdGlmaWNhdGlvbiBsb29wLlxudmFyIG5vdGlmeU5lc3RlZFN1YnM9c3Vic2NyaXB0aW9uLm5vdGlmeU5lc3RlZFN1YnMuYmluZChzdWJzY3JpcHRpb24pO3JldHVybltzdWJzY3JpcHRpb24sbm90aWZ5TmVzdGVkU3Vic107fSxbc3RvcmUsZGlkU3RvcmVDb21lRnJvbVByb3BzLGNvbnRleHRWYWx1ZV0pLF9yZWY1PV9zbGljZWRUb0FycmF5KF9yZWY0LDIpLHN1YnNjcmlwdGlvbj1fcmVmNVswXSxub3RpZnlOZXN0ZWRTdWJzPV9yZWY1WzFdOy8vIERldGVybWluZSB3aGF0IHtzdG9yZSwgc3Vic2NyaXB0aW9ufSB2YWx1ZSBzaG91bGQgYmUgcHV0IGludG8gbmVzdGVkIGNvbnRleHQsIGlmIG5lY2Vzc2FyeSxcbi8vIGFuZCBtZW1vaXplIHRoYXQgdmFsdWUgdG8gYXZvaWQgdW5uZWNlc3NhcnkgY29udGV4dCB1cGRhdGVzLlxudmFyIG92ZXJyaWRkZW5Db250ZXh0VmFsdWU9KDAsX3JlYWN0LnVzZU1lbW8pKGZ1bmN0aW9uKCl7aWYoZGlkU3RvcmVDb21lRnJvbVByb3BzKXsvLyBUaGlzIGNvbXBvbmVudCBpcyBkaXJlY3RseSBzdWJzY3JpYmVkIHRvIGEgc3RvcmUgZnJvbSBwcm9wcy5cbi8vIFdlIGRvbid0IHdhbnQgZGVzY2VuZGFudHMgcmVhZGluZyBmcm9tIHRoaXMgc3RvcmUgLSBwYXNzIGRvd24gd2hhdGV2ZXJcbi8vIHRoZSBleGlzdGluZyBjb250ZXh0IHZhbHVlIGlzIGZyb20gdGhlIG5lYXJlc3QgY29ubmVjdGVkIGFuY2VzdG9yLlxucmV0dXJuIGNvbnRleHRWYWx1ZTt9Ly8gT3RoZXJ3aXNlLCBwdXQgdGhpcyBjb21wb25lbnQncyBzdWJzY3JpcHRpb24gaW5zdGFuY2UgaW50byBjb250ZXh0LCBzbyB0aGF0XG4vLyBjb25uZWN0ZWQgZGVzY2VuZGFudHMgd29uJ3QgdXBkYXRlIHVudGlsIGFmdGVyIHRoaXMgY29tcG9uZW50IGlzIGRvbmVcbnJldHVybigwLF9leHRlbmRzMi5kZWZhdWx0KSh7fSxjb250ZXh0VmFsdWUse3N1YnNjcmlwdGlvbjpzdWJzY3JpcHRpb259KTt9LFtkaWRTdG9yZUNvbWVGcm9tUHJvcHMsY29udGV4dFZhbHVlLHN1YnNjcmlwdGlvbl0pOy8vIFNldCB1cCByZWZzIHRvIGNvb3JkaW5hdGUgdmFsdWVzIGJldHdlZW4gdGhlIHN1YnNjcmlwdGlvbiBlZmZlY3QgYW5kIHRoZSByZW5kZXIgbG9naWNcbnZhciBsYXN0Q2hpbGRQcm9wcz0oMCxfcmVhY3QudXNlUmVmKSgpO3ZhciBsYXN0V3JhcHBlclByb3BzPSgwLF9yZWFjdC51c2VSZWYpKHdyYXBwZXJQcm9wcyk7dmFyIGNoaWxkUHJvcHNGcm9tU3RvcmVVcGRhdGU9KDAsX3JlYWN0LnVzZVJlZikoKTt2YXIgcmVuZGVySXNTY2hlZHVsZWQ9KDAsX3JlYWN0LnVzZVJlZikoZmFsc2UpO3ZhciBpc1Byb2Nlc3NpbmdEaXNwYXRjaD0oMCxfcmVhY3QudXNlUmVmKShmYWxzZSk7dmFyIGlzTW91bnRlZD0oMCxfcmVhY3QudXNlUmVmKShmYWxzZSk7dmFyIGxhdGVzdFN1YnNjcmlwdGlvbkNhbGxiYWNrRXJyb3I9KDAsX3JlYWN0LnVzZVJlZikoKTsoMCxfdXNlSXNvbW9ycGhpY0xheW91dEVmZmVjdC51c2VJc29tb3JwaGljTGF5b3V0RWZmZWN0KShmdW5jdGlvbigpe2lzTW91bnRlZC5jdXJyZW50PXRydWU7cmV0dXJuIGZ1bmN0aW9uKCl7aXNNb3VudGVkLmN1cnJlbnQ9ZmFsc2U7fTt9LFtdKTt2YXIgYWN0dWFsQ2hpbGRQcm9wc1NlbGVjdG9yPSgwLF9yZWFjdC51c2VNZW1vKShmdW5jdGlvbigpe3ZhciBzZWxlY3Rvcj1mdW5jdGlvbiBzZWxlY3Rvcigpey8vIFRyaWNreSBsb2dpYyBoZXJlOlxuLy8gLSBUaGlzIHJlbmRlciBtYXkgaGF2ZSBiZWVuIHRyaWdnZXJlZCBieSBhIFJlZHV4IHN0b3JlIHVwZGF0ZSB0aGF0IHByb2R1Y2VkIG5ldyBjaGlsZCBwcm9wc1xuLy8gLSBIb3dldmVyLCB3ZSBtYXkgaGF2ZSBnb3R0ZW4gbmV3IHdyYXBwZXIgcHJvcHMgYWZ0ZXIgdGhhdFxuLy8gSWYgd2UgaGF2ZSBuZXcgY2hpbGQgcHJvcHMsIGFuZCB0aGUgc2FtZSB3cmFwcGVyIHByb3BzLCB3ZSBrbm93IHdlIHNob3VsZCB1c2UgdGhlIG5ldyBjaGlsZCBwcm9wcyBhcy1pcy5cbi8vIEJ1dCwgaWYgd2UgaGF2ZSBuZXcgd3JhcHBlciBwcm9wcywgdGhvc2UgbWlnaHQgY2hhbmdlIHRoZSBjaGlsZCBwcm9wcywgc28gd2UgaGF2ZSB0byByZWNhbGN1bGF0ZSB0aGluZ3MuXG4vLyBTbywgd2UnbGwgdXNlIHRoZSBjaGlsZCBwcm9wcyBmcm9tIHN0b3JlIHVwZGF0ZSBvbmx5IGlmIHRoZSB3cmFwcGVyIHByb3BzIGFyZSB0aGUgc2FtZSBhcyBsYXN0IHRpbWUuXG5pZihjaGlsZFByb3BzRnJvbVN0b3JlVXBkYXRlLmN1cnJlbnQmJndyYXBwZXJQcm9wcz09PWxhc3RXcmFwcGVyUHJvcHMuY3VycmVudCl7cmV0dXJuIGNoaWxkUHJvcHNGcm9tU3RvcmVVcGRhdGUuY3VycmVudDt9Ly8gVE9ETyBXZSdyZSByZWFkaW5nIHRoZSBzdG9yZSBkaXJlY3RseSBpbiByZW5kZXIoKSBoZXJlLiBCYWQgaWRlYT9cbi8vIFRoaXMgd2lsbCBsaWtlbHkgY2F1c2UgQmFkIFRoaW5ncyAoVE0pIHRvIGhhcHBlbiBpbiBDb25jdXJyZW50IE1vZGUuXG4vLyBOb3RlIHRoYXQgd2UgZG8gdGhpcyBiZWNhdXNlIG9uIHJlbmRlcnMgX25vdF8gY2F1c2VkIGJ5IHN0b3JlIHVwZGF0ZXMsIHdlIG5lZWQgdGhlIGxhdGVzdCBzdG9yZSBzdGF0ZVxuLy8gdG8gZGV0ZXJtaW5lIHdoYXQgdGhlIGNoaWxkIHByb3BzIHNob3VsZCBiZS5cbnJldHVybiBjaGlsZFByb3BzU2VsZWN0b3Ioc3RvcmUuZ2V0U3RhdGUoKSx3cmFwcGVyUHJvcHMpO307cmV0dXJuIHNlbGVjdG9yO30sW3N0b3JlLHdyYXBwZXJQcm9wc10pOy8vIFdlIG5lZWQgdGhpcyB0byBleGVjdXRlIHN5bmNocm9ub3VzbHkgZXZlcnkgdGltZSB3ZSByZS1yZW5kZXIuIEhvd2V2ZXIsIFJlYWN0IHdhcm5zXG4vLyBhYm91dCB1c2VMYXlvdXRFZmZlY3QgaW4gU1NSLCBzbyB3ZSB0cnkgdG8gZGV0ZWN0IGVudmlyb25tZW50IGFuZCBmYWxsIGJhY2sgdG9cbi8vIGp1c3QgdXNlRWZmZWN0IGluc3RlYWQgdG8gYXZvaWQgdGhlIHdhcm5pbmcsIHNpbmNlIG5laXRoZXIgd2lsbCBydW4gYW55d2F5LlxudmFyIHN1YnNjcmliZUZvclJlYWN0PSgwLF9yZWFjdC51c2VNZW1vKShmdW5jdGlvbigpe3ZhciBzdWJzY3JpYmU9ZnVuY3Rpb24gc3Vic2NyaWJlKHJlYWN0TGlzdGVuZXIpe2lmKCFzdWJzY3JpcHRpb24pe3JldHVybiBmdW5jdGlvbigpe307fXJldHVybiBzdWJzY3JpYmVVcGRhdGVzKHNob3VsZEhhbmRsZVN0YXRlQ2hhbmdlcyxzdG9yZSxzdWJzY3JpcHRpb24sLy8gQHRzLWlnbm9yZVxuY2hpbGRQcm9wc1NlbGVjdG9yLGxhc3RXcmFwcGVyUHJvcHMsbGFzdENoaWxkUHJvcHMscmVuZGVySXNTY2hlZHVsZWQsaXNNb3VudGVkLGNoaWxkUHJvcHNGcm9tU3RvcmVVcGRhdGUsbm90aWZ5TmVzdGVkU3VicyxyZWFjdExpc3RlbmVyKTt9O3JldHVybiBzdWJzY3JpYmU7fSxbc3Vic2NyaXB0aW9uXSk7dXNlSXNvbW9ycGhpY0xheW91dEVmZmVjdFdpdGhBcmdzKGNhcHR1cmVXcmFwcGVyUHJvcHMsW2xhc3RXcmFwcGVyUHJvcHMsbGFzdENoaWxkUHJvcHMscmVuZGVySXNTY2hlZHVsZWQsd3JhcHBlclByb3BzLGNoaWxkUHJvcHNGcm9tU3RvcmVVcGRhdGUsbm90aWZ5TmVzdGVkU3Vic10pO3ZhciBhY3R1YWxDaGlsZFByb3BzPXZvaWQgMDt0cnl7YWN0dWFsQ2hpbGRQcm9wcz11c2VTeW5jRXh0ZXJuYWxTdG9yZSgvLyBUT0RPIFdlJ3JlIHBhc3NpbmcgdGhyb3VnaCBhIGJpZyB3cmFwcGVyIHRoYXQgZG9lcyBhIGJ1bmNoIG9mIGV4dHJhIHNpZGUgZWZmZWN0cyBiZXNpZGVzIHN1YnNjcmliaW5nXG5zdWJzY3JpYmVGb3JSZWFjdCwvLyBUT0RPIFRoaXMgaXMgaW5jcmVkaWJseSBoYWNreS4gV2UndmUgYWxyZWFkeSBwcm9jZXNzZWQgdGhlIHN0b3JlIHVwZGF0ZSBhbmQgY2FsY3VsYXRlZCBuZXcgY2hpbGQgcHJvcHMsXG4vLyBUT0RPIGFuZCB3ZSdyZSBqdXN0IHBhc3NpbmcgdGhhdCB0aHJvdWdoIHNvIGl0IHRyaWdnZXJzIGEgcmUtcmVuZGVyIGZvciB1cyByYXRoZXIgdGhhbiByZWx5aW5nIG9uIGB1U0VTYC5cbmFjdHVhbENoaWxkUHJvcHNTZWxlY3RvcixnZXRTZXJ2ZXJTdGF0ZT9mdW5jdGlvbigpe3JldHVybiBjaGlsZFByb3BzU2VsZWN0b3IoZ2V0U2VydmVyU3RhdGUoKSx3cmFwcGVyUHJvcHMpO306YWN0dWFsQ2hpbGRQcm9wc1NlbGVjdG9yKTt9Y2F0Y2goZXJyKXtpZihsYXRlc3RTdWJzY3JpcHRpb25DYWxsYmFja0Vycm9yLmN1cnJlbnQpeztlcnIubWVzc2FnZSs9XCJcXG5UaGUgZXJyb3IgbWF5IGJlIGNvcnJlbGF0ZWQgd2l0aCB0aGlzIHByZXZpb3VzIGVycm9yOlxcblwiK2xhdGVzdFN1YnNjcmlwdGlvbkNhbGxiYWNrRXJyb3IuY3VycmVudC5zdGFjaytcIlxcblxcblwiO310aHJvdyBlcnI7fSgwLF91c2VJc29tb3JwaGljTGF5b3V0RWZmZWN0LnVzZUlzb21vcnBoaWNMYXlvdXRFZmZlY3QpKGZ1bmN0aW9uKCl7bGF0ZXN0U3Vic2NyaXB0aW9uQ2FsbGJhY2tFcnJvci5jdXJyZW50PXVuZGVmaW5lZDtjaGlsZFByb3BzRnJvbVN0b3JlVXBkYXRlLmN1cnJlbnQ9dW5kZWZpbmVkO2xhc3RDaGlsZFByb3BzLmN1cnJlbnQ9YWN0dWFsQ2hpbGRQcm9wczt9KTsvLyBOb3cgdGhhdCBhbGwgdGhhdCdzIGRvbmUsIHdlIGNhbiBmaW5hbGx5IHRyeSB0byBhY3R1YWxseSByZW5kZXIgdGhlIGNoaWxkIGNvbXBvbmVudC5cbi8vIFdlIG1lbW9pemUgdGhlIGVsZW1lbnRzIGZvciB0aGUgcmVuZGVyZWQgY2hpbGQgY29tcG9uZW50IGFzIGFuIG9wdGltaXphdGlvbi5cbnZhciByZW5kZXJlZFdyYXBwZWRDb21wb25lbnQ9KDAsX3JlYWN0LnVzZU1lbW8pKGZ1bmN0aW9uKCl7cmV0dXJuKC8qI19fUFVSRV9fKi8vLyBAdHMtaWdub3JlXG5fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFdyYXBwZWRDb21wb25lbnQsKDAsX2V4dGVuZHMyLmRlZmF1bHQpKHt9LGFjdHVhbENoaWxkUHJvcHMse3JlZjpyZWFjdFJlZHV4Rm9yd2FyZGVkUmVmfSkpKTt9LFtyZWFjdFJlZHV4Rm9yd2FyZGVkUmVmLFdyYXBwZWRDb21wb25lbnQsYWN0dWFsQ2hpbGRQcm9wc10pOy8vIElmIFJlYWN0IHNlZXMgdGhlIGV4YWN0IHNhbWUgZWxlbWVudCByZWZlcmVuY2UgYXMgbGFzdCB0aW1lLCBpdCBiYWlscyBvdXQgb2YgcmUtcmVuZGVyaW5nXG4vLyB0aGF0IGNoaWxkLCBzYW1lIGFzIGlmIGl0IHdhcyB3cmFwcGVkIGluIFJlYWN0Lm1lbW8oKSBvciByZXR1cm5lZCBmYWxzZSBmcm9tIHNob3VsZENvbXBvbmVudFVwZGF0ZS5cbnZhciByZW5kZXJlZENoaWxkPSgwLF9yZWFjdC51c2VNZW1vKShmdW5jdGlvbigpe2lmKHNob3VsZEhhbmRsZVN0YXRlQ2hhbmdlcyl7Ly8gSWYgdGhpcyBjb21wb25lbnQgaXMgc3Vic2NyaWJlZCB0byBzdG9yZSB1cGRhdGVzLCB3ZSBuZWVkIHRvIHBhc3MgaXRzIG93blxuLy8gc3Vic2NyaXB0aW9uIGluc3RhbmNlIGRvd24gdG8gb3VyIGRlc2NlbmRhbnRzLiBUaGF0IG1lYW5zIHJlbmRlcmluZyB0aGUgc2FtZVxuLy8gQ29udGV4dCBpbnN0YW5jZSwgYW5kIHB1dHRpbmcgYSBkaWZmZXJlbnQgdmFsdWUgaW50byB0aGUgY29udGV4dC5cbnJldHVybigvKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChDb250ZXh0VG9Vc2UuUHJvdmlkZXIse3ZhbHVlOm92ZXJyaWRkZW5Db250ZXh0VmFsdWV9LHJlbmRlcmVkV3JhcHBlZENvbXBvbmVudCkpO31yZXR1cm4gcmVuZGVyZWRXcmFwcGVkQ29tcG9uZW50O30sW0NvbnRleHRUb1VzZSxyZW5kZXJlZFdyYXBwZWRDb21wb25lbnQsb3ZlcnJpZGRlbkNvbnRleHRWYWx1ZV0pO3JldHVybiByZW5kZXJlZENoaWxkO312YXIgX0Nvbm5lY3Q9X3JlYWN0LmRlZmF1bHQubWVtbyhDb25uZWN0RnVuY3Rpb24pOy8vIEFkZCBhIGhhY2t5IGNhc3QgdG8gZ2V0IHRoZSByaWdodCBvdXRwdXQgdHlwZVxudmFyIENvbm5lY3Q9X0Nvbm5lY3Q7Q29ubmVjdC5XcmFwcGVkQ29tcG9uZW50PVdyYXBwZWRDb21wb25lbnQ7Q29ubmVjdC5kaXNwbGF5TmFtZT1Db25uZWN0RnVuY3Rpb24uZGlzcGxheU5hbWU9ZGlzcGxheU5hbWU7aWYoZm9yd2FyZFJlZil7dmFyIF9mb3J3YXJkZWQ9X3JlYWN0LmRlZmF1bHQuZm9yd2FyZFJlZihmdW5jdGlvbiBmb3J3YXJkQ29ubmVjdFJlZihwcm9wcyxyZWYpey8vIEB0cy1pZ25vcmVcbnJldHVybigvKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChDb25uZWN0LCgwLF9leHRlbmRzMi5kZWZhdWx0KSh7fSxwcm9wcyx7cmVhY3RSZWR1eEZvcndhcmRlZFJlZjpyZWZ9KSkpO30pO3ZhciBmb3J3YXJkZWQ9X2ZvcndhcmRlZDtmb3J3YXJkZWQuZGlzcGxheU5hbWU9ZGlzcGxheU5hbWU7Zm9yd2FyZGVkLldyYXBwZWRDb21wb25lbnQ9V3JhcHBlZENvbXBvbmVudDtyZXR1cm4oMCxfaG9pc3ROb25SZWFjdFN0YXRpY3MuZGVmYXVsdCkoZm9yd2FyZGVkLFdyYXBwZWRDb21wb25lbnQpO31yZXR1cm4oMCxfaG9pc3ROb25SZWFjdFN0YXRpY3MuZGVmYXVsdCkoQ29ubmVjdCxXcmFwcGVkQ29tcG9uZW50KTt9O3JldHVybiB3cmFwV2l0aENvbm5lY3Q7fXZhciBfZGVmYXVsdD1jb25uZWN0O2V4cG9ydHMuZGVmYXVsdD1fZGVmYXVsdDtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vcmVhY3QtcmVkdXgvbGliL2NvbXBvbmVudHMvY29ubmVjdC5qc1xuLy8gbW9kdWxlIGlkID0gMzQ1XG4vLyBtb2R1bGUgY2h1bmtzID0gMyIsIlwidXNlIHN0cmljdFwiO2Z1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKXtyZXR1cm4gb2JqJiZvYmouX19lc01vZHVsZT9vYmo6e1wiZGVmYXVsdFwiOm9ian07fW1vZHVsZS5leHBvcnRzPV9pbnRlcm9wUmVxdWlyZURlZmF1bHQ7bW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdPW1vZHVsZS5leHBvcnRzLG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHQuanNcbi8vIG1vZHVsZSBpZCA9IDM0NlxuLy8gbW9kdWxlIGNodW5rcyA9IDMiLCJcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiBfZXh0ZW5kcygpe21vZHVsZS5leHBvcnRzPV9leHRlbmRzPU9iamVjdC5hc3NpZ258fGZ1bmN0aW9uKHRhcmdldCl7Zm9yKHZhciBpPTE7aTxhcmd1bWVudHMubGVuZ3RoO2krKyl7dmFyIHNvdXJjZT1hcmd1bWVudHNbaV07Zm9yKHZhciBrZXkgaW4gc291cmNlKXtpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLGtleSkpe3RhcmdldFtrZXldPXNvdXJjZVtrZXldO319fXJldHVybiB0YXJnZXQ7fTttb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl09bW9kdWxlLmV4cG9ydHMsbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZT10cnVlO3JldHVybiBfZXh0ZW5kcy5hcHBseSh0aGlzLGFyZ3VtZW50cyk7fW1vZHVsZS5leHBvcnRzPV9leHRlbmRzO21vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXT1tb2R1bGUuZXhwb3J0cyxtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXh0ZW5kcy5qc1xuLy8gbW9kdWxlIGlkID0gMzQ3XG4vLyBtb2R1bGUgY2h1bmtzID0gMyIsIlwidXNlIHN0cmljdFwiO2Z1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHNvdXJjZSxleGNsdWRlZCl7aWYoc291cmNlPT1udWxsKXJldHVybnt9O3ZhciB0YXJnZXQ9e307dmFyIHNvdXJjZUtleXM9T2JqZWN0LmtleXMoc291cmNlKTt2YXIga2V5LGk7Zm9yKGk9MDtpPHNvdXJjZUtleXMubGVuZ3RoO2krKyl7a2V5PXNvdXJjZUtleXNbaV07aWYoZXhjbHVkZWQuaW5kZXhPZihrZXkpPj0wKWNvbnRpbnVlO3RhcmdldFtrZXldPXNvdXJjZVtrZXldO31yZXR1cm4gdGFyZ2V0O31tb2R1bGUuZXhwb3J0cz1fb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZTttb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl09bW9kdWxlLmV4cG9ydHMsbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZT10cnVlO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9AYmFiZWwvcnVudGltZS9oZWxwZXJzL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UuanNcbi8vIG1vZHVsZSBpZCA9IDM0OFxuLy8gbW9kdWxlIGNodW5rcyA9IDMiLCIndXNlIHN0cmljdCc7dmFyIHJlYWN0SXM9cmVxdWlyZSgncmVhY3QtaXMnKTsvKipcbiAqIENvcHlyaWdodCAyMDE1LCBZYWhvbyEgSW5jLlxuICogQ29weXJpZ2h0cyBsaWNlbnNlZCB1bmRlciB0aGUgTmV3IEJTRCBMaWNlbnNlLiBTZWUgdGhlIGFjY29tcGFueWluZyBMSUNFTlNFIGZpbGUgZm9yIHRlcm1zLlxuICovdmFyIFJFQUNUX1NUQVRJQ1M9e2NoaWxkQ29udGV4dFR5cGVzOnRydWUsY29udGV4dFR5cGU6dHJ1ZSxjb250ZXh0VHlwZXM6dHJ1ZSxkZWZhdWx0UHJvcHM6dHJ1ZSxkaXNwbGF5TmFtZTp0cnVlLGdldERlZmF1bHRQcm9wczp0cnVlLGdldERlcml2ZWRTdGF0ZUZyb21FcnJvcjp0cnVlLGdldERlcml2ZWRTdGF0ZUZyb21Qcm9wczp0cnVlLG1peGluczp0cnVlLHByb3BUeXBlczp0cnVlLHR5cGU6dHJ1ZX07dmFyIEtOT1dOX1NUQVRJQ1M9e25hbWU6dHJ1ZSxsZW5ndGg6dHJ1ZSxwcm90b3R5cGU6dHJ1ZSxjYWxsZXI6dHJ1ZSxjYWxsZWU6dHJ1ZSxhcmd1bWVudHM6dHJ1ZSxhcml0eTp0cnVlfTt2YXIgRk9SV0FSRF9SRUZfU1RBVElDUz17JyQkdHlwZW9mJzp0cnVlLHJlbmRlcjp0cnVlLGRlZmF1bHRQcm9wczp0cnVlLGRpc3BsYXlOYW1lOnRydWUscHJvcFR5cGVzOnRydWV9O3ZhciBNRU1PX1NUQVRJQ1M9eyckJHR5cGVvZic6dHJ1ZSxjb21wYXJlOnRydWUsZGVmYXVsdFByb3BzOnRydWUsZGlzcGxheU5hbWU6dHJ1ZSxwcm9wVHlwZXM6dHJ1ZSx0eXBlOnRydWV9O3ZhciBUWVBFX1NUQVRJQ1M9e307VFlQRV9TVEFUSUNTW3JlYWN0SXMuRm9yd2FyZFJlZl09Rk9SV0FSRF9SRUZfU1RBVElDUztUWVBFX1NUQVRJQ1NbcmVhY3RJcy5NZW1vXT1NRU1PX1NUQVRJQ1M7ZnVuY3Rpb24gZ2V0U3RhdGljcyhjb21wb25lbnQpey8vIFJlYWN0IHYxNi4xMSBhbmQgYmVsb3dcbmlmKHJlYWN0SXMuaXNNZW1vKGNvbXBvbmVudCkpe3JldHVybiBNRU1PX1NUQVRJQ1M7fS8vIFJlYWN0IHYxNi4xMiBhbmQgYWJvdmVcbnJldHVybiBUWVBFX1NUQVRJQ1NbY29tcG9uZW50WyckJHR5cGVvZiddXXx8UkVBQ1RfU1RBVElDUzt9dmFyIGRlZmluZVByb3BlcnR5PU9iamVjdC5kZWZpbmVQcm9wZXJ0eTt2YXIgZ2V0T3duUHJvcGVydHlOYW1lcz1PYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lczt2YXIgZ2V0T3duUHJvcGVydHlTeW1ib2xzPU9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHM7dmFyIGdldE93blByb3BlcnR5RGVzY3JpcHRvcj1PYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO3ZhciBnZXRQcm90b3R5cGVPZj1PYmplY3QuZ2V0UHJvdG90eXBlT2Y7dmFyIG9iamVjdFByb3RvdHlwZT1PYmplY3QucHJvdG90eXBlO2Z1bmN0aW9uIGhvaXN0Tm9uUmVhY3RTdGF0aWNzKHRhcmdldENvbXBvbmVudCxzb3VyY2VDb21wb25lbnQsYmxhY2tsaXN0KXtpZih0eXBlb2Ygc291cmNlQ29tcG9uZW50IT09J3N0cmluZycpey8vIGRvbid0IGhvaXN0IG92ZXIgc3RyaW5nIChodG1sKSBjb21wb25lbnRzXG5pZihvYmplY3RQcm90b3R5cGUpe3ZhciBpbmhlcml0ZWRDb21wb25lbnQ9Z2V0UHJvdG90eXBlT2Yoc291cmNlQ29tcG9uZW50KTtpZihpbmhlcml0ZWRDb21wb25lbnQmJmluaGVyaXRlZENvbXBvbmVudCE9PW9iamVjdFByb3RvdHlwZSl7aG9pc3ROb25SZWFjdFN0YXRpY3ModGFyZ2V0Q29tcG9uZW50LGluaGVyaXRlZENvbXBvbmVudCxibGFja2xpc3QpO319dmFyIGtleXM9Z2V0T3duUHJvcGVydHlOYW1lcyhzb3VyY2VDb21wb25lbnQpO2lmKGdldE93blByb3BlcnR5U3ltYm9scyl7a2V5cz1rZXlzLmNvbmNhdChnZXRPd25Qcm9wZXJ0eVN5bWJvbHMoc291cmNlQ29tcG9uZW50KSk7fXZhciB0YXJnZXRTdGF0aWNzPWdldFN0YXRpY3ModGFyZ2V0Q29tcG9uZW50KTt2YXIgc291cmNlU3RhdGljcz1nZXRTdGF0aWNzKHNvdXJjZUNvbXBvbmVudCk7Zm9yKHZhciBpPTA7aTxrZXlzLmxlbmd0aDsrK2kpe3ZhciBrZXk9a2V5c1tpXTtpZighS05PV05fU1RBVElDU1trZXldJiYhKGJsYWNrbGlzdCYmYmxhY2tsaXN0W2tleV0pJiYhKHNvdXJjZVN0YXRpY3MmJnNvdXJjZVN0YXRpY3Nba2V5XSkmJiEodGFyZ2V0U3RhdGljcyYmdGFyZ2V0U3RhdGljc1trZXldKSl7dmFyIGRlc2NyaXB0b3I9Z2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHNvdXJjZUNvbXBvbmVudCxrZXkpO3RyeXsvLyBBdm9pZCBmYWlsdXJlcyBmcm9tIHJlYWQtb25seSBwcm9wZXJ0aWVzXG5kZWZpbmVQcm9wZXJ0eSh0YXJnZXRDb21wb25lbnQsa2V5LGRlc2NyaXB0b3IpO31jYXRjaChlKXt9fX19cmV0dXJuIHRhcmdldENvbXBvbmVudDt9bW9kdWxlLmV4cG9ydHM9aG9pc3ROb25SZWFjdFN0YXRpY3M7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3JlYWN0LXJlZHV4L34vaG9pc3Qtbm9uLXJlYWN0LXN0YXRpY3MvZGlzdC9ob2lzdC1ub24tcmVhY3Qtc3RhdGljcy5janMuanNcbi8vIG1vZHVsZSBpZCA9IDM0OVxuLy8gbW9kdWxlIGNodW5rcyA9IDMiLCIndXNlIHN0cmljdCc7aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlY9PT0ncHJvZHVjdGlvbicpe21vZHVsZS5leHBvcnRzPXJlcXVpcmUoJy4vY2pzL3JlYWN0LWlzLnByb2R1Y3Rpb24ubWluLmpzJyk7fWVsc2V7bW9kdWxlLmV4cG9ydHM9cmVxdWlyZSgnLi9janMvcmVhY3QtaXMuZGV2ZWxvcG1lbnQuanMnKTt9XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3JlYWN0LXJlZHV4L34vaG9pc3Qtbm9uLXJlYWN0LXN0YXRpY3Mvfi9yZWFjdC1pcy9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMzUwXG4vLyBtb2R1bGUgY2h1bmtzID0gMyIsIi8qKiBAbGljZW5zZSBSZWFjdCB2MTYuMTMuMVxuICogcmVhY3QtaXMucHJvZHVjdGlvbi5taW4uanNcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIEZhY2Vib29rLCBJbmMuIGFuZCBpdHMgYWZmaWxpYXRlcy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqLyd1c2Ugc3RyaWN0Jzt2YXIgX3R5cGVvZj10eXBlb2YgU3ltYm9sPT09XCJmdW5jdGlvblwiJiZ0eXBlb2YgU3ltYm9sLml0ZXJhdG9yPT09XCJzeW1ib2xcIj9mdW5jdGlvbihvYmope3JldHVybiB0eXBlb2Ygb2JqO306ZnVuY3Rpb24ob2JqKXtyZXR1cm4gb2JqJiZ0eXBlb2YgU3ltYm9sPT09XCJmdW5jdGlvblwiJiZvYmouY29uc3RydWN0b3I9PT1TeW1ib2wmJm9iaiE9PVN5bWJvbC5wcm90b3R5cGU/XCJzeW1ib2xcIjp0eXBlb2Ygb2JqO307dmFyIGI9XCJmdW5jdGlvblwiPT09dHlwZW9mIFN5bWJvbCYmU3ltYm9sLmZvcixjPWI/U3ltYm9sLmZvcihcInJlYWN0LmVsZW1lbnRcIik6NjAxMDMsZD1iP1N5bWJvbC5mb3IoXCJyZWFjdC5wb3J0YWxcIik6NjAxMDYsZT1iP1N5bWJvbC5mb3IoXCJyZWFjdC5mcmFnbWVudFwiKTo2MDEwNyxmPWI/U3ltYm9sLmZvcihcInJlYWN0LnN0cmljdF9tb2RlXCIpOjYwMTA4LGc9Yj9TeW1ib2wuZm9yKFwicmVhY3QucHJvZmlsZXJcIik6NjAxMTQsaD1iP1N5bWJvbC5mb3IoXCJyZWFjdC5wcm92aWRlclwiKTo2MDEwOSxrPWI/U3ltYm9sLmZvcihcInJlYWN0LmNvbnRleHRcIik6NjAxMTAsbD1iP1N5bWJvbC5mb3IoXCJyZWFjdC5hc3luY19tb2RlXCIpOjYwMTExLG09Yj9TeW1ib2wuZm9yKFwicmVhY3QuY29uY3VycmVudF9tb2RlXCIpOjYwMTExLG49Yj9TeW1ib2wuZm9yKFwicmVhY3QuZm9yd2FyZF9yZWZcIik6NjAxMTIscD1iP1N5bWJvbC5mb3IoXCJyZWFjdC5zdXNwZW5zZVwiKTo2MDExMyxxPWI/U3ltYm9sLmZvcihcInJlYWN0LnN1c3BlbnNlX2xpc3RcIik6NjAxMjAscj1iP1N5bWJvbC5mb3IoXCJyZWFjdC5tZW1vXCIpOjYwMTE1LHQ9Yj9TeW1ib2wuZm9yKFwicmVhY3QubGF6eVwiKTo2MDExNix2PWI/U3ltYm9sLmZvcihcInJlYWN0LmJsb2NrXCIpOjYwMTIxLHc9Yj9TeW1ib2wuZm9yKFwicmVhY3QuZnVuZGFtZW50YWxcIik6NjAxMTcseD1iP1N5bWJvbC5mb3IoXCJyZWFjdC5yZXNwb25kZXJcIik6NjAxMTgseT1iP1N5bWJvbC5mb3IoXCJyZWFjdC5zY29wZVwiKTo2MDExOTtmdW5jdGlvbiB6KGEpe2lmKFwib2JqZWN0XCI9PT0odHlwZW9mIGE9PT1cInVuZGVmaW5lZFwiP1widW5kZWZpbmVkXCI6X3R5cGVvZihhKSkmJm51bGwhPT1hKXt2YXIgdT1hLiQkdHlwZW9mO3N3aXRjaCh1KXtjYXNlIGM6c3dpdGNoKGE9YS50eXBlLGEpe2Nhc2UgbDpjYXNlIG06Y2FzZSBlOmNhc2UgZzpjYXNlIGY6Y2FzZSBwOnJldHVybiBhO2RlZmF1bHQ6c3dpdGNoKGE9YSYmYS4kJHR5cGVvZixhKXtjYXNlIGs6Y2FzZSBuOmNhc2UgdDpjYXNlIHI6Y2FzZSBoOnJldHVybiBhO2RlZmF1bHQ6cmV0dXJuIHU7fX1jYXNlIGQ6cmV0dXJuIHU7fX19ZnVuY3Rpb24gQShhKXtyZXR1cm4geihhKT09PW07fWV4cG9ydHMuQXN5bmNNb2RlPWw7ZXhwb3J0cy5Db25jdXJyZW50TW9kZT1tO2V4cG9ydHMuQ29udGV4dENvbnN1bWVyPWs7ZXhwb3J0cy5Db250ZXh0UHJvdmlkZXI9aDtleHBvcnRzLkVsZW1lbnQ9YztleHBvcnRzLkZvcndhcmRSZWY9bjtleHBvcnRzLkZyYWdtZW50PWU7ZXhwb3J0cy5MYXp5PXQ7ZXhwb3J0cy5NZW1vPXI7ZXhwb3J0cy5Qb3J0YWw9ZDtleHBvcnRzLlByb2ZpbGVyPWc7ZXhwb3J0cy5TdHJpY3RNb2RlPWY7ZXhwb3J0cy5TdXNwZW5zZT1wO2V4cG9ydHMuaXNBc3luY01vZGU9ZnVuY3Rpb24oYSl7cmV0dXJuIEEoYSl8fHooYSk9PT1sO307ZXhwb3J0cy5pc0NvbmN1cnJlbnRNb2RlPUE7ZXhwb3J0cy5pc0NvbnRleHRDb25zdW1lcj1mdW5jdGlvbihhKXtyZXR1cm4geihhKT09PWs7fTtleHBvcnRzLmlzQ29udGV4dFByb3ZpZGVyPWZ1bmN0aW9uKGEpe3JldHVybiB6KGEpPT09aDt9O2V4cG9ydHMuaXNFbGVtZW50PWZ1bmN0aW9uKGEpe3JldHVyblwib2JqZWN0XCI9PT0odHlwZW9mIGE9PT1cInVuZGVmaW5lZFwiP1widW5kZWZpbmVkXCI6X3R5cGVvZihhKSkmJm51bGwhPT1hJiZhLiQkdHlwZW9mPT09Yzt9O2V4cG9ydHMuaXNGb3J3YXJkUmVmPWZ1bmN0aW9uKGEpe3JldHVybiB6KGEpPT09bjt9O2V4cG9ydHMuaXNGcmFnbWVudD1mdW5jdGlvbihhKXtyZXR1cm4geihhKT09PWU7fTtleHBvcnRzLmlzTGF6eT1mdW5jdGlvbihhKXtyZXR1cm4geihhKT09PXQ7fTtleHBvcnRzLmlzTWVtbz1mdW5jdGlvbihhKXtyZXR1cm4geihhKT09PXI7fTtleHBvcnRzLmlzUG9ydGFsPWZ1bmN0aW9uKGEpe3JldHVybiB6KGEpPT09ZDt9O2V4cG9ydHMuaXNQcm9maWxlcj1mdW5jdGlvbihhKXtyZXR1cm4geihhKT09PWc7fTtleHBvcnRzLmlzU3RyaWN0TW9kZT1mdW5jdGlvbihhKXtyZXR1cm4geihhKT09PWY7fTtleHBvcnRzLmlzU3VzcGVuc2U9ZnVuY3Rpb24oYSl7cmV0dXJuIHooYSk9PT1wO307ZXhwb3J0cy5pc1ZhbGlkRWxlbWVudFR5cGU9ZnVuY3Rpb24oYSl7cmV0dXJuXCJzdHJpbmdcIj09PXR5cGVvZiBhfHxcImZ1bmN0aW9uXCI9PT10eXBlb2YgYXx8YT09PWV8fGE9PT1tfHxhPT09Z3x8YT09PWZ8fGE9PT1wfHxhPT09cXx8XCJvYmplY3RcIj09PSh0eXBlb2YgYT09PVwidW5kZWZpbmVkXCI/XCJ1bmRlZmluZWRcIjpfdHlwZW9mKGEpKSYmbnVsbCE9PWEmJihhLiQkdHlwZW9mPT09dHx8YS4kJHR5cGVvZj09PXJ8fGEuJCR0eXBlb2Y9PT1ofHxhLiQkdHlwZW9mPT09a3x8YS4kJHR5cGVvZj09PW58fGEuJCR0eXBlb2Y9PT13fHxhLiQkdHlwZW9mPT09eHx8YS4kJHR5cGVvZj09PXl8fGEuJCR0eXBlb2Y9PT12KTt9O2V4cG9ydHMudHlwZU9mPXo7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3JlYWN0LXJlZHV4L34vaG9pc3Qtbm9uLXJlYWN0LXN0YXRpY3Mvfi9yZWFjdC1pcy9janMvcmVhY3QtaXMucHJvZHVjdGlvbi5taW4uanNcbi8vIG1vZHVsZSBpZCA9IDM1MVxuLy8gbW9kdWxlIGNodW5rcyA9IDMiLCIvKiogQGxpY2Vuc2UgUmVhY3QgdjE2LjEzLjFcbiAqIHJlYWN0LWlzLmRldmVsb3BtZW50LmpzXG4gKlxuICogQ29weXJpZ2h0IChjKSBGYWNlYm9vaywgSW5jLiBhbmQgaXRzIGFmZmlsaWF0ZXMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi8ndXNlIHN0cmljdCc7dmFyIF90eXBlb2Y9dHlwZW9mIFN5bWJvbD09PVwiZnVuY3Rpb25cIiYmdHlwZW9mIFN5bWJvbC5pdGVyYXRvcj09PVwic3ltYm9sXCI/ZnVuY3Rpb24ob2JqKXtyZXR1cm4gdHlwZW9mIG9iajt9OmZ1bmN0aW9uKG9iail7cmV0dXJuIG9iaiYmdHlwZW9mIFN5bWJvbD09PVwiZnVuY3Rpb25cIiYmb2JqLmNvbnN0cnVjdG9yPT09U3ltYm9sJiZvYmohPT1TeW1ib2wucHJvdG90eXBlP1wic3ltYm9sXCI6dHlwZW9mIG9iajt9O2lmKHByb2Nlc3MuZW52Lk5PREVfRU5WIT09XCJwcm9kdWN0aW9uXCIpeyhmdW5jdGlvbigpeyd1c2Ugc3RyaWN0JzsvLyBUaGUgU3ltYm9sIHVzZWQgdG8gdGFnIHRoZSBSZWFjdEVsZW1lbnQtbGlrZSB0eXBlcy4gSWYgdGhlcmUgaXMgbm8gbmF0aXZlIFN5bWJvbFxuLy8gbm9yIHBvbHlmaWxsLCB0aGVuIGEgcGxhaW4gbnVtYmVyIGlzIHVzZWQgZm9yIHBlcmZvcm1hbmNlLlxudmFyIGhhc1N5bWJvbD10eXBlb2YgU3ltYm9sPT09J2Z1bmN0aW9uJyYmU3ltYm9sLmZvcjt2YXIgUkVBQ1RfRUxFTUVOVF9UWVBFPWhhc1N5bWJvbD9TeW1ib2wuZm9yKCdyZWFjdC5lbGVtZW50Jyk6MHhlYWM3O3ZhciBSRUFDVF9QT1JUQUxfVFlQRT1oYXNTeW1ib2w/U3ltYm9sLmZvcigncmVhY3QucG9ydGFsJyk6MHhlYWNhO3ZhciBSRUFDVF9GUkFHTUVOVF9UWVBFPWhhc1N5bWJvbD9TeW1ib2wuZm9yKCdyZWFjdC5mcmFnbWVudCcpOjB4ZWFjYjt2YXIgUkVBQ1RfU1RSSUNUX01PREVfVFlQRT1oYXNTeW1ib2w/U3ltYm9sLmZvcigncmVhY3Quc3RyaWN0X21vZGUnKToweGVhY2M7dmFyIFJFQUNUX1BST0ZJTEVSX1RZUEU9aGFzU3ltYm9sP1N5bWJvbC5mb3IoJ3JlYWN0LnByb2ZpbGVyJyk6MHhlYWQyO3ZhciBSRUFDVF9QUk9WSURFUl9UWVBFPWhhc1N5bWJvbD9TeW1ib2wuZm9yKCdyZWFjdC5wcm92aWRlcicpOjB4ZWFjZDt2YXIgUkVBQ1RfQ09OVEVYVF9UWVBFPWhhc1N5bWJvbD9TeW1ib2wuZm9yKCdyZWFjdC5jb250ZXh0Jyk6MHhlYWNlOy8vIFRPRE86IFdlIGRvbid0IHVzZSBBc3luY01vZGUgb3IgQ29uY3VycmVudE1vZGUgYW55bW9yZS4gVGhleSB3ZXJlIHRlbXBvcmFyeVxuLy8gKHVuc3RhYmxlKSBBUElzIHRoYXQgaGF2ZSBiZWVuIHJlbW92ZWQuIENhbiB3ZSByZW1vdmUgdGhlIHN5bWJvbHM/XG52YXIgUkVBQ1RfQVNZTkNfTU9ERV9UWVBFPWhhc1N5bWJvbD9TeW1ib2wuZm9yKCdyZWFjdC5hc3luY19tb2RlJyk6MHhlYWNmO3ZhciBSRUFDVF9DT05DVVJSRU5UX01PREVfVFlQRT1oYXNTeW1ib2w/U3ltYm9sLmZvcigncmVhY3QuY29uY3VycmVudF9tb2RlJyk6MHhlYWNmO3ZhciBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFPWhhc1N5bWJvbD9TeW1ib2wuZm9yKCdyZWFjdC5mb3J3YXJkX3JlZicpOjB4ZWFkMDt2YXIgUkVBQ1RfU1VTUEVOU0VfVFlQRT1oYXNTeW1ib2w/U3ltYm9sLmZvcigncmVhY3Quc3VzcGVuc2UnKToweGVhZDE7dmFyIFJFQUNUX1NVU1BFTlNFX0xJU1RfVFlQRT1oYXNTeW1ib2w/U3ltYm9sLmZvcigncmVhY3Quc3VzcGVuc2VfbGlzdCcpOjB4ZWFkODt2YXIgUkVBQ1RfTUVNT19UWVBFPWhhc1N5bWJvbD9TeW1ib2wuZm9yKCdyZWFjdC5tZW1vJyk6MHhlYWQzO3ZhciBSRUFDVF9MQVpZX1RZUEU9aGFzU3ltYm9sP1N5bWJvbC5mb3IoJ3JlYWN0LmxhenknKToweGVhZDQ7dmFyIFJFQUNUX0JMT0NLX1RZUEU9aGFzU3ltYm9sP1N5bWJvbC5mb3IoJ3JlYWN0LmJsb2NrJyk6MHhlYWQ5O3ZhciBSRUFDVF9GVU5EQU1FTlRBTF9UWVBFPWhhc1N5bWJvbD9TeW1ib2wuZm9yKCdyZWFjdC5mdW5kYW1lbnRhbCcpOjB4ZWFkNTt2YXIgUkVBQ1RfUkVTUE9OREVSX1RZUEU9aGFzU3ltYm9sP1N5bWJvbC5mb3IoJ3JlYWN0LnJlc3BvbmRlcicpOjB4ZWFkNjt2YXIgUkVBQ1RfU0NPUEVfVFlQRT1oYXNTeW1ib2w/U3ltYm9sLmZvcigncmVhY3Quc2NvcGUnKToweGVhZDc7ZnVuY3Rpb24gaXNWYWxpZEVsZW1lbnRUeXBlKHR5cGUpe3JldHVybiB0eXBlb2YgdHlwZT09PSdzdHJpbmcnfHx0eXBlb2YgdHlwZT09PSdmdW5jdGlvbid8fC8vIE5vdGU6IGl0cyB0eXBlb2YgbWlnaHQgYmUgb3RoZXIgdGhhbiAnc3ltYm9sJyBvciAnbnVtYmVyJyBpZiBpdCdzIGEgcG9seWZpbGwuXG50eXBlPT09UkVBQ1RfRlJBR01FTlRfVFlQRXx8dHlwZT09PVJFQUNUX0NPTkNVUlJFTlRfTU9ERV9UWVBFfHx0eXBlPT09UkVBQ1RfUFJPRklMRVJfVFlQRXx8dHlwZT09PVJFQUNUX1NUUklDVF9NT0RFX1RZUEV8fHR5cGU9PT1SRUFDVF9TVVNQRU5TRV9UWVBFfHx0eXBlPT09UkVBQ1RfU1VTUEVOU0VfTElTVF9UWVBFfHwodHlwZW9mIHR5cGU9PT0ndW5kZWZpbmVkJz8ndW5kZWZpbmVkJzpfdHlwZW9mKHR5cGUpKT09PSdvYmplY3QnJiZ0eXBlIT09bnVsbCYmKHR5cGUuJCR0eXBlb2Y9PT1SRUFDVF9MQVpZX1RZUEV8fHR5cGUuJCR0eXBlb2Y9PT1SRUFDVF9NRU1PX1RZUEV8fHR5cGUuJCR0eXBlb2Y9PT1SRUFDVF9QUk9WSURFUl9UWVBFfHx0eXBlLiQkdHlwZW9mPT09UkVBQ1RfQ09OVEVYVF9UWVBFfHx0eXBlLiQkdHlwZW9mPT09UkVBQ1RfRk9SV0FSRF9SRUZfVFlQRXx8dHlwZS4kJHR5cGVvZj09PVJFQUNUX0ZVTkRBTUVOVEFMX1RZUEV8fHR5cGUuJCR0eXBlb2Y9PT1SRUFDVF9SRVNQT05ERVJfVFlQRXx8dHlwZS4kJHR5cGVvZj09PVJFQUNUX1NDT1BFX1RZUEV8fHR5cGUuJCR0eXBlb2Y9PT1SRUFDVF9CTE9DS19UWVBFKTt9ZnVuY3Rpb24gdHlwZU9mKG9iamVjdCl7aWYoKHR5cGVvZiBvYmplY3Q9PT0ndW5kZWZpbmVkJz8ndW5kZWZpbmVkJzpfdHlwZW9mKG9iamVjdCkpPT09J29iamVjdCcmJm9iamVjdCE9PW51bGwpe3ZhciAkJHR5cGVvZj1vYmplY3QuJCR0eXBlb2Y7c3dpdGNoKCQkdHlwZW9mKXtjYXNlIFJFQUNUX0VMRU1FTlRfVFlQRTp2YXIgdHlwZT1vYmplY3QudHlwZTtzd2l0Y2godHlwZSl7Y2FzZSBSRUFDVF9BU1lOQ19NT0RFX1RZUEU6Y2FzZSBSRUFDVF9DT05DVVJSRU5UX01PREVfVFlQRTpjYXNlIFJFQUNUX0ZSQUdNRU5UX1RZUEU6Y2FzZSBSRUFDVF9QUk9GSUxFUl9UWVBFOmNhc2UgUkVBQ1RfU1RSSUNUX01PREVfVFlQRTpjYXNlIFJFQUNUX1NVU1BFTlNFX1RZUEU6cmV0dXJuIHR5cGU7ZGVmYXVsdDp2YXIgJCR0eXBlb2ZUeXBlPXR5cGUmJnR5cGUuJCR0eXBlb2Y7c3dpdGNoKCQkdHlwZW9mVHlwZSl7Y2FzZSBSRUFDVF9DT05URVhUX1RZUEU6Y2FzZSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFOmNhc2UgUkVBQ1RfTEFaWV9UWVBFOmNhc2UgUkVBQ1RfTUVNT19UWVBFOmNhc2UgUkVBQ1RfUFJPVklERVJfVFlQRTpyZXR1cm4gJCR0eXBlb2ZUeXBlO2RlZmF1bHQ6cmV0dXJuICQkdHlwZW9mO319Y2FzZSBSRUFDVF9QT1JUQUxfVFlQRTpyZXR1cm4gJCR0eXBlb2Y7fX1yZXR1cm4gdW5kZWZpbmVkO30vLyBBc3luY01vZGUgaXMgZGVwcmVjYXRlZCBhbG9uZyB3aXRoIGlzQXN5bmNNb2RlXG52YXIgQXN5bmNNb2RlPVJFQUNUX0FTWU5DX01PREVfVFlQRTt2YXIgQ29uY3VycmVudE1vZGU9UkVBQ1RfQ09OQ1VSUkVOVF9NT0RFX1RZUEU7dmFyIENvbnRleHRDb25zdW1lcj1SRUFDVF9DT05URVhUX1RZUEU7dmFyIENvbnRleHRQcm92aWRlcj1SRUFDVF9QUk9WSURFUl9UWVBFO3ZhciBFbGVtZW50PVJFQUNUX0VMRU1FTlRfVFlQRTt2YXIgRm9yd2FyZFJlZj1SRUFDVF9GT1JXQVJEX1JFRl9UWVBFO3ZhciBGcmFnbWVudD1SRUFDVF9GUkFHTUVOVF9UWVBFO3ZhciBMYXp5PVJFQUNUX0xBWllfVFlQRTt2YXIgTWVtbz1SRUFDVF9NRU1PX1RZUEU7dmFyIFBvcnRhbD1SRUFDVF9QT1JUQUxfVFlQRTt2YXIgUHJvZmlsZXI9UkVBQ1RfUFJPRklMRVJfVFlQRTt2YXIgU3RyaWN0TW9kZT1SRUFDVF9TVFJJQ1RfTU9ERV9UWVBFO3ZhciBTdXNwZW5zZT1SRUFDVF9TVVNQRU5TRV9UWVBFO3ZhciBoYXNXYXJuZWRBYm91dERlcHJlY2F0ZWRJc0FzeW5jTW9kZT1mYWxzZTsvLyBBc3luY01vZGUgc2hvdWxkIGJlIGRlcHJlY2F0ZWRcbmZ1bmN0aW9uIGlzQXN5bmNNb2RlKG9iamVjdCl7e2lmKCFoYXNXYXJuZWRBYm91dERlcHJlY2F0ZWRJc0FzeW5jTW9kZSl7aGFzV2FybmVkQWJvdXREZXByZWNhdGVkSXNBc3luY01vZGU9dHJ1ZTsvLyBVc2luZyBjb25zb2xlWyd3YXJuJ10gdG8gZXZhZGUgQmFiZWwgYW5kIEVTTGludFxuY29uc29sZVsnd2FybiddKCdUaGUgUmVhY3RJcy5pc0FzeW5jTW9kZSgpIGFsaWFzIGhhcyBiZWVuIGRlcHJlY2F0ZWQsICcrJ2FuZCB3aWxsIGJlIHJlbW92ZWQgaW4gUmVhY3QgMTcrLiBVcGRhdGUgeW91ciBjb2RlIHRvIHVzZSAnKydSZWFjdElzLmlzQ29uY3VycmVudE1vZGUoKSBpbnN0ZWFkLiBJdCBoYXMgdGhlIGV4YWN0IHNhbWUgQVBJLicpO319cmV0dXJuIGlzQ29uY3VycmVudE1vZGUob2JqZWN0KXx8dHlwZU9mKG9iamVjdCk9PT1SRUFDVF9BU1lOQ19NT0RFX1RZUEU7fWZ1bmN0aW9uIGlzQ29uY3VycmVudE1vZGUob2JqZWN0KXtyZXR1cm4gdHlwZU9mKG9iamVjdCk9PT1SRUFDVF9DT05DVVJSRU5UX01PREVfVFlQRTt9ZnVuY3Rpb24gaXNDb250ZXh0Q29uc3VtZXIob2JqZWN0KXtyZXR1cm4gdHlwZU9mKG9iamVjdCk9PT1SRUFDVF9DT05URVhUX1RZUEU7fWZ1bmN0aW9uIGlzQ29udGV4dFByb3ZpZGVyKG9iamVjdCl7cmV0dXJuIHR5cGVPZihvYmplY3QpPT09UkVBQ1RfUFJPVklERVJfVFlQRTt9ZnVuY3Rpb24gaXNFbGVtZW50KG9iamVjdCl7cmV0dXJuKHR5cGVvZiBvYmplY3Q9PT0ndW5kZWZpbmVkJz8ndW5kZWZpbmVkJzpfdHlwZW9mKG9iamVjdCkpPT09J29iamVjdCcmJm9iamVjdCE9PW51bGwmJm9iamVjdC4kJHR5cGVvZj09PVJFQUNUX0VMRU1FTlRfVFlQRTt9ZnVuY3Rpb24gaXNGb3J3YXJkUmVmKG9iamVjdCl7cmV0dXJuIHR5cGVPZihvYmplY3QpPT09UkVBQ1RfRk9SV0FSRF9SRUZfVFlQRTt9ZnVuY3Rpb24gaXNGcmFnbWVudChvYmplY3Qpe3JldHVybiB0eXBlT2Yob2JqZWN0KT09PVJFQUNUX0ZSQUdNRU5UX1RZUEU7fWZ1bmN0aW9uIGlzTGF6eShvYmplY3Qpe3JldHVybiB0eXBlT2Yob2JqZWN0KT09PVJFQUNUX0xBWllfVFlQRTt9ZnVuY3Rpb24gaXNNZW1vKG9iamVjdCl7cmV0dXJuIHR5cGVPZihvYmplY3QpPT09UkVBQ1RfTUVNT19UWVBFO31mdW5jdGlvbiBpc1BvcnRhbChvYmplY3Qpe3JldHVybiB0eXBlT2Yob2JqZWN0KT09PVJFQUNUX1BPUlRBTF9UWVBFO31mdW5jdGlvbiBpc1Byb2ZpbGVyKG9iamVjdCl7cmV0dXJuIHR5cGVPZihvYmplY3QpPT09UkVBQ1RfUFJPRklMRVJfVFlQRTt9ZnVuY3Rpb24gaXNTdHJpY3RNb2RlKG9iamVjdCl7cmV0dXJuIHR5cGVPZihvYmplY3QpPT09UkVBQ1RfU1RSSUNUX01PREVfVFlQRTt9ZnVuY3Rpb24gaXNTdXNwZW5zZShvYmplY3Qpe3JldHVybiB0eXBlT2Yob2JqZWN0KT09PVJFQUNUX1NVU1BFTlNFX1RZUEU7fWV4cG9ydHMuQXN5bmNNb2RlPUFzeW5jTW9kZTtleHBvcnRzLkNvbmN1cnJlbnRNb2RlPUNvbmN1cnJlbnRNb2RlO2V4cG9ydHMuQ29udGV4dENvbnN1bWVyPUNvbnRleHRDb25zdW1lcjtleHBvcnRzLkNvbnRleHRQcm92aWRlcj1Db250ZXh0UHJvdmlkZXI7ZXhwb3J0cy5FbGVtZW50PUVsZW1lbnQ7ZXhwb3J0cy5Gb3J3YXJkUmVmPUZvcndhcmRSZWY7ZXhwb3J0cy5GcmFnbWVudD1GcmFnbWVudDtleHBvcnRzLkxhenk9TGF6eTtleHBvcnRzLk1lbW89TWVtbztleHBvcnRzLlBvcnRhbD1Qb3J0YWw7ZXhwb3J0cy5Qcm9maWxlcj1Qcm9maWxlcjtleHBvcnRzLlN0cmljdE1vZGU9U3RyaWN0TW9kZTtleHBvcnRzLlN1c3BlbnNlPVN1c3BlbnNlO2V4cG9ydHMuaXNBc3luY01vZGU9aXNBc3luY01vZGU7ZXhwb3J0cy5pc0NvbmN1cnJlbnRNb2RlPWlzQ29uY3VycmVudE1vZGU7ZXhwb3J0cy5pc0NvbnRleHRDb25zdW1lcj1pc0NvbnRleHRDb25zdW1lcjtleHBvcnRzLmlzQ29udGV4dFByb3ZpZGVyPWlzQ29udGV4dFByb3ZpZGVyO2V4cG9ydHMuaXNFbGVtZW50PWlzRWxlbWVudDtleHBvcnRzLmlzRm9yd2FyZFJlZj1pc0ZvcndhcmRSZWY7ZXhwb3J0cy5pc0ZyYWdtZW50PWlzRnJhZ21lbnQ7ZXhwb3J0cy5pc0xhenk9aXNMYXp5O2V4cG9ydHMuaXNNZW1vPWlzTWVtbztleHBvcnRzLmlzUG9ydGFsPWlzUG9ydGFsO2V4cG9ydHMuaXNQcm9maWxlcj1pc1Byb2ZpbGVyO2V4cG9ydHMuaXNTdHJpY3RNb2RlPWlzU3RyaWN0TW9kZTtleHBvcnRzLmlzU3VzcGVuc2U9aXNTdXNwZW5zZTtleHBvcnRzLmlzVmFsaWRFbGVtZW50VHlwZT1pc1ZhbGlkRWxlbWVudFR5cGU7ZXhwb3J0cy50eXBlT2Y9dHlwZU9mO30pKCk7fVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9yZWFjdC1yZWR1eC9+L2hvaXN0LW5vbi1yZWFjdC1zdGF0aWNzL34vcmVhY3QtaXMvY2pzL3JlYWN0LWlzLmRldmVsb3BtZW50LmpzXG4vLyBtb2R1bGUgaWQgPSAzNTJcbi8vIG1vZHVsZSBjaHVua3MgPSAzIiwiJ3VzZSBzdHJpY3QnO2lmKHByb2Nlc3MuZW52Lk5PREVfRU5WPT09J3Byb2R1Y3Rpb24nKXttb2R1bGUuZXhwb3J0cz1yZXF1aXJlKCcuL2Nqcy9yZWFjdC1pcy5wcm9kdWN0aW9uLm1pbi5qcycpO31lbHNle21vZHVsZS5leHBvcnRzPXJlcXVpcmUoJy4vY2pzL3JlYWN0LWlzLmRldmVsb3BtZW50LmpzJyk7fVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9yZWFjdC1yZWR1eC9+L3JlYWN0LWlzL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAzNTNcbi8vIG1vZHVsZSBjaHVua3MgPSAzIiwiLyoqXG4gKiBAbGljZW5zZSBSZWFjdFxuICogcmVhY3QtaXMucHJvZHVjdGlvbi5taW4uanNcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIEZhY2Vib29rLCBJbmMuIGFuZCBpdHMgYWZmaWxpYXRlcy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqLyd1c2Ugc3RyaWN0Jzt2YXIgX3R5cGVvZj10eXBlb2YgU3ltYm9sPT09XCJmdW5jdGlvblwiJiZ0eXBlb2YgU3ltYm9sLml0ZXJhdG9yPT09XCJzeW1ib2xcIj9mdW5jdGlvbihvYmope3JldHVybiB0eXBlb2Ygb2JqO306ZnVuY3Rpb24ob2JqKXtyZXR1cm4gb2JqJiZ0eXBlb2YgU3ltYm9sPT09XCJmdW5jdGlvblwiJiZvYmouY29uc3RydWN0b3I9PT1TeW1ib2wmJm9iaiE9PVN5bWJvbC5wcm90b3R5cGU/XCJzeW1ib2xcIjp0eXBlb2Ygb2JqO307dmFyIGI9U3ltYm9sLmZvcihcInJlYWN0LmVsZW1lbnRcIiksYz1TeW1ib2wuZm9yKFwicmVhY3QucG9ydGFsXCIpLGQ9U3ltYm9sLmZvcihcInJlYWN0LmZyYWdtZW50XCIpLGU9U3ltYm9sLmZvcihcInJlYWN0LnN0cmljdF9tb2RlXCIpLGY9U3ltYm9sLmZvcihcInJlYWN0LnByb2ZpbGVyXCIpLGc9U3ltYm9sLmZvcihcInJlYWN0LnByb3ZpZGVyXCIpLGg9U3ltYm9sLmZvcihcInJlYWN0LmNvbnRleHRcIiksaz1TeW1ib2wuZm9yKFwicmVhY3Quc2VydmVyX2NvbnRleHRcIiksbD1TeW1ib2wuZm9yKFwicmVhY3QuZm9yd2FyZF9yZWZcIiksbT1TeW1ib2wuZm9yKFwicmVhY3Quc3VzcGVuc2VcIiksbj1TeW1ib2wuZm9yKFwicmVhY3Quc3VzcGVuc2VfbGlzdFwiKSxwPVN5bWJvbC5mb3IoXCJyZWFjdC5tZW1vXCIpLHE9U3ltYm9sLmZvcihcInJlYWN0LmxhenlcIiksdD1TeW1ib2wuZm9yKFwicmVhY3Qub2Zmc2NyZWVuXCIpLHU7dT1TeW1ib2wuZm9yKFwicmVhY3QubW9kdWxlLnJlZmVyZW5jZVwiKTtmdW5jdGlvbiB2KGEpe2lmKFwib2JqZWN0XCI9PT0odHlwZW9mIGE9PT1cInVuZGVmaW5lZFwiP1widW5kZWZpbmVkXCI6X3R5cGVvZihhKSkmJm51bGwhPT1hKXt2YXIgcj1hLiQkdHlwZW9mO3N3aXRjaChyKXtjYXNlIGI6c3dpdGNoKGE9YS50eXBlLGEpe2Nhc2UgZDpjYXNlIGY6Y2FzZSBlOmNhc2UgbTpjYXNlIG46cmV0dXJuIGE7ZGVmYXVsdDpzd2l0Y2goYT1hJiZhLiQkdHlwZW9mLGEpe2Nhc2UgazpjYXNlIGg6Y2FzZSBsOmNhc2UgcTpjYXNlIHA6Y2FzZSBnOnJldHVybiBhO2RlZmF1bHQ6cmV0dXJuIHI7fX1jYXNlIGM6cmV0dXJuIHI7fX19ZXhwb3J0cy5Db250ZXh0Q29uc3VtZXI9aDtleHBvcnRzLkNvbnRleHRQcm92aWRlcj1nO2V4cG9ydHMuRWxlbWVudD1iO2V4cG9ydHMuRm9yd2FyZFJlZj1sO2V4cG9ydHMuRnJhZ21lbnQ9ZDtleHBvcnRzLkxhenk9cTtleHBvcnRzLk1lbW89cDtleHBvcnRzLlBvcnRhbD1jO2V4cG9ydHMuUHJvZmlsZXI9ZjtleHBvcnRzLlN0cmljdE1vZGU9ZTtleHBvcnRzLlN1c3BlbnNlPW07ZXhwb3J0cy5TdXNwZW5zZUxpc3Q9bjtleHBvcnRzLmlzQXN5bmNNb2RlPWZ1bmN0aW9uKCl7cmV0dXJuITE7fTtleHBvcnRzLmlzQ29uY3VycmVudE1vZGU9ZnVuY3Rpb24oKXtyZXR1cm4hMTt9O2V4cG9ydHMuaXNDb250ZXh0Q29uc3VtZXI9ZnVuY3Rpb24oYSl7cmV0dXJuIHYoYSk9PT1oO307ZXhwb3J0cy5pc0NvbnRleHRQcm92aWRlcj1mdW5jdGlvbihhKXtyZXR1cm4gdihhKT09PWc7fTtleHBvcnRzLmlzRWxlbWVudD1mdW5jdGlvbihhKXtyZXR1cm5cIm9iamVjdFwiPT09KHR5cGVvZiBhPT09XCJ1bmRlZmluZWRcIj9cInVuZGVmaW5lZFwiOl90eXBlb2YoYSkpJiZudWxsIT09YSYmYS4kJHR5cGVvZj09PWI7fTtleHBvcnRzLmlzRm9yd2FyZFJlZj1mdW5jdGlvbihhKXtyZXR1cm4gdihhKT09PWw7fTtleHBvcnRzLmlzRnJhZ21lbnQ9ZnVuY3Rpb24oYSl7cmV0dXJuIHYoYSk9PT1kO307ZXhwb3J0cy5pc0xhenk9ZnVuY3Rpb24oYSl7cmV0dXJuIHYoYSk9PT1xO307ZXhwb3J0cy5pc01lbW89ZnVuY3Rpb24oYSl7cmV0dXJuIHYoYSk9PT1wO307ZXhwb3J0cy5pc1BvcnRhbD1mdW5jdGlvbihhKXtyZXR1cm4gdihhKT09PWM7fTtleHBvcnRzLmlzUHJvZmlsZXI9ZnVuY3Rpb24oYSl7cmV0dXJuIHYoYSk9PT1mO307ZXhwb3J0cy5pc1N0cmljdE1vZGU9ZnVuY3Rpb24oYSl7cmV0dXJuIHYoYSk9PT1lO307ZXhwb3J0cy5pc1N1c3BlbnNlPWZ1bmN0aW9uKGEpe3JldHVybiB2KGEpPT09bTt9O2V4cG9ydHMuaXNTdXNwZW5zZUxpc3Q9ZnVuY3Rpb24oYSl7cmV0dXJuIHYoYSk9PT1uO307ZXhwb3J0cy5pc1ZhbGlkRWxlbWVudFR5cGU9ZnVuY3Rpb24oYSl7cmV0dXJuXCJzdHJpbmdcIj09PXR5cGVvZiBhfHxcImZ1bmN0aW9uXCI9PT10eXBlb2YgYXx8YT09PWR8fGE9PT1mfHxhPT09ZXx8YT09PW18fGE9PT1ufHxhPT09dHx8XCJvYmplY3RcIj09PSh0eXBlb2YgYT09PVwidW5kZWZpbmVkXCI/XCJ1bmRlZmluZWRcIjpfdHlwZW9mKGEpKSYmbnVsbCE9PWEmJihhLiQkdHlwZW9mPT09cXx8YS4kJHR5cGVvZj09PXB8fGEuJCR0eXBlb2Y9PT1nfHxhLiQkdHlwZW9mPT09aHx8YS4kJHR5cGVvZj09PWx8fGEuJCR0eXBlb2Y9PT11fHx2b2lkIDAhPT1hLmdldE1vZHVsZUlkKT8hMDohMTt9O2V4cG9ydHMudHlwZU9mPXY7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3JlYWN0LXJlZHV4L34vcmVhY3QtaXMvY2pzL3JlYWN0LWlzLnByb2R1Y3Rpb24ubWluLmpzXG4vLyBtb2R1bGUgaWQgPSAzNTRcbi8vIG1vZHVsZSBjaHVua3MgPSAzIiwiLyoqXG4gKiBAbGljZW5zZSBSZWFjdFxuICogcmVhY3QtaXMuZGV2ZWxvcG1lbnQuanNcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIEZhY2Vib29rLCBJbmMuIGFuZCBpdHMgYWZmaWxpYXRlcy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqLyd1c2Ugc3RyaWN0Jzt2YXIgX3R5cGVvZj10eXBlb2YgU3ltYm9sPT09XCJmdW5jdGlvblwiJiZ0eXBlb2YgU3ltYm9sLml0ZXJhdG9yPT09XCJzeW1ib2xcIj9mdW5jdGlvbihvYmope3JldHVybiB0eXBlb2Ygb2JqO306ZnVuY3Rpb24ob2JqKXtyZXR1cm4gb2JqJiZ0eXBlb2YgU3ltYm9sPT09XCJmdW5jdGlvblwiJiZvYmouY29uc3RydWN0b3I9PT1TeW1ib2wmJm9iaiE9PVN5bWJvbC5wcm90b3R5cGU/XCJzeW1ib2xcIjp0eXBlb2Ygb2JqO307aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYhPT1cInByb2R1Y3Rpb25cIil7KGZ1bmN0aW9uKCl7J3VzZSBzdHJpY3QnOy8vIEFUVEVOVElPTlxuLy8gV2hlbiBhZGRpbmcgbmV3IHN5bWJvbHMgdG8gdGhpcyBmaWxlLFxuLy8gUGxlYXNlIGNvbnNpZGVyIGFsc28gYWRkaW5nIHRvICdyZWFjdC1kZXZ0b29scy1zaGFyZWQvc3JjL2JhY2tlbmQvUmVhY3RTeW1ib2xzJ1xuLy8gVGhlIFN5bWJvbCB1c2VkIHRvIHRhZyB0aGUgUmVhY3RFbGVtZW50LWxpa2UgdHlwZXMuXG52YXIgUkVBQ1RfRUxFTUVOVF9UWVBFPVN5bWJvbC5mb3IoJ3JlYWN0LmVsZW1lbnQnKTt2YXIgUkVBQ1RfUE9SVEFMX1RZUEU9U3ltYm9sLmZvcigncmVhY3QucG9ydGFsJyk7dmFyIFJFQUNUX0ZSQUdNRU5UX1RZUEU9U3ltYm9sLmZvcigncmVhY3QuZnJhZ21lbnQnKTt2YXIgUkVBQ1RfU1RSSUNUX01PREVfVFlQRT1TeW1ib2wuZm9yKCdyZWFjdC5zdHJpY3RfbW9kZScpO3ZhciBSRUFDVF9QUk9GSUxFUl9UWVBFPVN5bWJvbC5mb3IoJ3JlYWN0LnByb2ZpbGVyJyk7dmFyIFJFQUNUX1BST1ZJREVSX1RZUEU9U3ltYm9sLmZvcigncmVhY3QucHJvdmlkZXInKTt2YXIgUkVBQ1RfQ09OVEVYVF9UWVBFPVN5bWJvbC5mb3IoJ3JlYWN0LmNvbnRleHQnKTt2YXIgUkVBQ1RfU0VSVkVSX0NPTlRFWFRfVFlQRT1TeW1ib2wuZm9yKCdyZWFjdC5zZXJ2ZXJfY29udGV4dCcpO3ZhciBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFPVN5bWJvbC5mb3IoJ3JlYWN0LmZvcndhcmRfcmVmJyk7dmFyIFJFQUNUX1NVU1BFTlNFX1RZUEU9U3ltYm9sLmZvcigncmVhY3Quc3VzcGVuc2UnKTt2YXIgUkVBQ1RfU1VTUEVOU0VfTElTVF9UWVBFPVN5bWJvbC5mb3IoJ3JlYWN0LnN1c3BlbnNlX2xpc3QnKTt2YXIgUkVBQ1RfTUVNT19UWVBFPVN5bWJvbC5mb3IoJ3JlYWN0Lm1lbW8nKTt2YXIgUkVBQ1RfTEFaWV9UWVBFPVN5bWJvbC5mb3IoJ3JlYWN0LmxhenknKTt2YXIgUkVBQ1RfT0ZGU0NSRUVOX1RZUEU9U3ltYm9sLmZvcigncmVhY3Qub2Zmc2NyZWVuJyk7Ly8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbnZhciBlbmFibGVTY29wZUFQST1mYWxzZTsvLyBFeHBlcmltZW50YWwgQ3JlYXRlIEV2ZW50IEhhbmRsZSBBUEkuXG52YXIgZW5hYmxlQ2FjaGVFbGVtZW50PWZhbHNlO3ZhciBlbmFibGVUcmFuc2l0aW9uVHJhY2luZz1mYWxzZTsvLyBObyBrbm93biBidWdzLCBidXQgbmVlZHMgcGVyZm9ybWFuY2UgdGVzdGluZ1xudmFyIGVuYWJsZUxlZ2FjeUhpZGRlbj1mYWxzZTsvLyBFbmFibGVzIHVuc3RhYmxlX2F2b2lkVGhpc0ZhbGxiYWNrIGZlYXR1cmUgaW4gRmliZXJcbi8vIHN0dWZmLiBJbnRlbmRlZCB0byBlbmFibGUgUmVhY3QgY29yZSBtZW1iZXJzIHRvIG1vcmUgZWFzaWx5IGRlYnVnIHNjaGVkdWxpbmdcbi8vIGlzc3VlcyBpbiBERVYgYnVpbGRzLlxudmFyIGVuYWJsZURlYnVnVHJhY2luZz1mYWxzZTsvLyBUcmFjayB3aGljaCBGaWJlcihzKSBzY2hlZHVsZSByZW5kZXIgd29yay5cbnZhciBSRUFDVF9NT0RVTEVfUkVGRVJFTkNFO3tSRUFDVF9NT0RVTEVfUkVGRVJFTkNFPVN5bWJvbC5mb3IoJ3JlYWN0Lm1vZHVsZS5yZWZlcmVuY2UnKTt9ZnVuY3Rpb24gaXNWYWxpZEVsZW1lbnRUeXBlKHR5cGUpe2lmKHR5cGVvZiB0eXBlPT09J3N0cmluZyd8fHR5cGVvZiB0eXBlPT09J2Z1bmN0aW9uJyl7cmV0dXJuIHRydWU7fS8vIE5vdGU6IHR5cGVvZiBtaWdodCBiZSBvdGhlciB0aGFuICdzeW1ib2wnIG9yICdudW1iZXInIChlLmcuIGlmIGl0J3MgYSBwb2x5ZmlsbCkuXG5pZih0eXBlPT09UkVBQ1RfRlJBR01FTlRfVFlQRXx8dHlwZT09PVJFQUNUX1BST0ZJTEVSX1RZUEV8fGVuYWJsZURlYnVnVHJhY2luZ3x8dHlwZT09PVJFQUNUX1NUUklDVF9NT0RFX1RZUEV8fHR5cGU9PT1SRUFDVF9TVVNQRU5TRV9UWVBFfHx0eXBlPT09UkVBQ1RfU1VTUEVOU0VfTElTVF9UWVBFfHxlbmFibGVMZWdhY3lIaWRkZW58fHR5cGU9PT1SRUFDVF9PRkZTQ1JFRU5fVFlQRXx8ZW5hYmxlU2NvcGVBUEl8fGVuYWJsZUNhY2hlRWxlbWVudHx8ZW5hYmxlVHJhbnNpdGlvblRyYWNpbmcpe3JldHVybiB0cnVlO31pZigodHlwZW9mIHR5cGU9PT0ndW5kZWZpbmVkJz8ndW5kZWZpbmVkJzpfdHlwZW9mKHR5cGUpKT09PSdvYmplY3QnJiZ0eXBlIT09bnVsbCl7aWYodHlwZS4kJHR5cGVvZj09PVJFQUNUX0xBWllfVFlQRXx8dHlwZS4kJHR5cGVvZj09PVJFQUNUX01FTU9fVFlQRXx8dHlwZS4kJHR5cGVvZj09PVJFQUNUX1BST1ZJREVSX1RZUEV8fHR5cGUuJCR0eXBlb2Y9PT1SRUFDVF9DT05URVhUX1RZUEV8fHR5cGUuJCR0eXBlb2Y9PT1SRUFDVF9GT1JXQVJEX1JFRl9UWVBFfHwvLyBUaGlzIG5lZWRzIHRvIGluY2x1ZGUgYWxsIHBvc3NpYmxlIG1vZHVsZSByZWZlcmVuY2Ugb2JqZWN0XG4vLyB0eXBlcyBzdXBwb3J0ZWQgYnkgYW55IEZsaWdodCBjb25maWd1cmF0aW9uIGFueXdoZXJlIHNpbmNlXG4vLyB3ZSBkb24ndCBrbm93IHdoaWNoIEZsaWdodCBidWlsZCB0aGlzIHdpbGwgZW5kIHVwIGJlaW5nIHVzZWRcbi8vIHdpdGguXG50eXBlLiQkdHlwZW9mPT09UkVBQ1RfTU9EVUxFX1JFRkVSRU5DRXx8dHlwZS5nZXRNb2R1bGVJZCE9PXVuZGVmaW5lZCl7cmV0dXJuIHRydWU7fX1yZXR1cm4gZmFsc2U7fWZ1bmN0aW9uIHR5cGVPZihvYmplY3Qpe2lmKCh0eXBlb2Ygb2JqZWN0PT09J3VuZGVmaW5lZCc/J3VuZGVmaW5lZCc6X3R5cGVvZihvYmplY3QpKT09PSdvYmplY3QnJiZvYmplY3QhPT1udWxsKXt2YXIgJCR0eXBlb2Y9b2JqZWN0LiQkdHlwZW9mO3N3aXRjaCgkJHR5cGVvZil7Y2FzZSBSRUFDVF9FTEVNRU5UX1RZUEU6dmFyIHR5cGU9b2JqZWN0LnR5cGU7c3dpdGNoKHR5cGUpe2Nhc2UgUkVBQ1RfRlJBR01FTlRfVFlQRTpjYXNlIFJFQUNUX1BST0ZJTEVSX1RZUEU6Y2FzZSBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFOmNhc2UgUkVBQ1RfU1VTUEVOU0VfVFlQRTpjYXNlIFJFQUNUX1NVU1BFTlNFX0xJU1RfVFlQRTpyZXR1cm4gdHlwZTtkZWZhdWx0OnZhciAkJHR5cGVvZlR5cGU9dHlwZSYmdHlwZS4kJHR5cGVvZjtzd2l0Y2goJCR0eXBlb2ZUeXBlKXtjYXNlIFJFQUNUX1NFUlZFUl9DT05URVhUX1RZUEU6Y2FzZSBSRUFDVF9DT05URVhUX1RZUEU6Y2FzZSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFOmNhc2UgUkVBQ1RfTEFaWV9UWVBFOmNhc2UgUkVBQ1RfTUVNT19UWVBFOmNhc2UgUkVBQ1RfUFJPVklERVJfVFlQRTpyZXR1cm4gJCR0eXBlb2ZUeXBlO2RlZmF1bHQ6cmV0dXJuICQkdHlwZW9mO319Y2FzZSBSRUFDVF9QT1JUQUxfVFlQRTpyZXR1cm4gJCR0eXBlb2Y7fX1yZXR1cm4gdW5kZWZpbmVkO312YXIgQ29udGV4dENvbnN1bWVyPVJFQUNUX0NPTlRFWFRfVFlQRTt2YXIgQ29udGV4dFByb3ZpZGVyPVJFQUNUX1BST1ZJREVSX1RZUEU7dmFyIEVsZW1lbnQ9UkVBQ1RfRUxFTUVOVF9UWVBFO3ZhciBGb3J3YXJkUmVmPVJFQUNUX0ZPUldBUkRfUkVGX1RZUEU7dmFyIEZyYWdtZW50PVJFQUNUX0ZSQUdNRU5UX1RZUEU7dmFyIExhenk9UkVBQ1RfTEFaWV9UWVBFO3ZhciBNZW1vPVJFQUNUX01FTU9fVFlQRTt2YXIgUG9ydGFsPVJFQUNUX1BPUlRBTF9UWVBFO3ZhciBQcm9maWxlcj1SRUFDVF9QUk9GSUxFUl9UWVBFO3ZhciBTdHJpY3RNb2RlPVJFQUNUX1NUUklDVF9NT0RFX1RZUEU7dmFyIFN1c3BlbnNlPVJFQUNUX1NVU1BFTlNFX1RZUEU7dmFyIFN1c3BlbnNlTGlzdD1SRUFDVF9TVVNQRU5TRV9MSVNUX1RZUEU7dmFyIGhhc1dhcm5lZEFib3V0RGVwcmVjYXRlZElzQXN5bmNNb2RlPWZhbHNlO3ZhciBoYXNXYXJuZWRBYm91dERlcHJlY2F0ZWRJc0NvbmN1cnJlbnRNb2RlPWZhbHNlOy8vIEFzeW5jTW9kZSBzaG91bGQgYmUgZGVwcmVjYXRlZFxuZnVuY3Rpb24gaXNBc3luY01vZGUob2JqZWN0KXt7aWYoIWhhc1dhcm5lZEFib3V0RGVwcmVjYXRlZElzQXN5bmNNb2RlKXtoYXNXYXJuZWRBYm91dERlcHJlY2F0ZWRJc0FzeW5jTW9kZT10cnVlOy8vIFVzaW5nIGNvbnNvbGVbJ3dhcm4nXSB0byBldmFkZSBCYWJlbCBhbmQgRVNMaW50XG5jb25zb2xlWyd3YXJuJ10oJ1RoZSBSZWFjdElzLmlzQXN5bmNNb2RlKCkgYWxpYXMgaGFzIGJlZW4gZGVwcmVjYXRlZCwgJysnYW5kIHdpbGwgYmUgcmVtb3ZlZCBpbiBSZWFjdCAxOCsuJyk7fX1yZXR1cm4gZmFsc2U7fWZ1bmN0aW9uIGlzQ29uY3VycmVudE1vZGUob2JqZWN0KXt7aWYoIWhhc1dhcm5lZEFib3V0RGVwcmVjYXRlZElzQ29uY3VycmVudE1vZGUpe2hhc1dhcm5lZEFib3V0RGVwcmVjYXRlZElzQ29uY3VycmVudE1vZGU9dHJ1ZTsvLyBVc2luZyBjb25zb2xlWyd3YXJuJ10gdG8gZXZhZGUgQmFiZWwgYW5kIEVTTGludFxuY29uc29sZVsnd2FybiddKCdUaGUgUmVhY3RJcy5pc0NvbmN1cnJlbnRNb2RlKCkgYWxpYXMgaGFzIGJlZW4gZGVwcmVjYXRlZCwgJysnYW5kIHdpbGwgYmUgcmVtb3ZlZCBpbiBSZWFjdCAxOCsuJyk7fX1yZXR1cm4gZmFsc2U7fWZ1bmN0aW9uIGlzQ29udGV4dENvbnN1bWVyKG9iamVjdCl7cmV0dXJuIHR5cGVPZihvYmplY3QpPT09UkVBQ1RfQ09OVEVYVF9UWVBFO31mdW5jdGlvbiBpc0NvbnRleHRQcm92aWRlcihvYmplY3Qpe3JldHVybiB0eXBlT2Yob2JqZWN0KT09PVJFQUNUX1BST1ZJREVSX1RZUEU7fWZ1bmN0aW9uIGlzRWxlbWVudChvYmplY3Qpe3JldHVybih0eXBlb2Ygb2JqZWN0PT09J3VuZGVmaW5lZCc/J3VuZGVmaW5lZCc6X3R5cGVvZihvYmplY3QpKT09PSdvYmplY3QnJiZvYmplY3QhPT1udWxsJiZvYmplY3QuJCR0eXBlb2Y9PT1SRUFDVF9FTEVNRU5UX1RZUEU7fWZ1bmN0aW9uIGlzRm9yd2FyZFJlZihvYmplY3Qpe3JldHVybiB0eXBlT2Yob2JqZWN0KT09PVJFQUNUX0ZPUldBUkRfUkVGX1RZUEU7fWZ1bmN0aW9uIGlzRnJhZ21lbnQob2JqZWN0KXtyZXR1cm4gdHlwZU9mKG9iamVjdCk9PT1SRUFDVF9GUkFHTUVOVF9UWVBFO31mdW5jdGlvbiBpc0xhenkob2JqZWN0KXtyZXR1cm4gdHlwZU9mKG9iamVjdCk9PT1SRUFDVF9MQVpZX1RZUEU7fWZ1bmN0aW9uIGlzTWVtbyhvYmplY3Qpe3JldHVybiB0eXBlT2Yob2JqZWN0KT09PVJFQUNUX01FTU9fVFlQRTt9ZnVuY3Rpb24gaXNQb3J0YWwob2JqZWN0KXtyZXR1cm4gdHlwZU9mKG9iamVjdCk9PT1SRUFDVF9QT1JUQUxfVFlQRTt9ZnVuY3Rpb24gaXNQcm9maWxlcihvYmplY3Qpe3JldHVybiB0eXBlT2Yob2JqZWN0KT09PVJFQUNUX1BST0ZJTEVSX1RZUEU7fWZ1bmN0aW9uIGlzU3RyaWN0TW9kZShvYmplY3Qpe3JldHVybiB0eXBlT2Yob2JqZWN0KT09PVJFQUNUX1NUUklDVF9NT0RFX1RZUEU7fWZ1bmN0aW9uIGlzU3VzcGVuc2Uob2JqZWN0KXtyZXR1cm4gdHlwZU9mKG9iamVjdCk9PT1SRUFDVF9TVVNQRU5TRV9UWVBFO31mdW5jdGlvbiBpc1N1c3BlbnNlTGlzdChvYmplY3Qpe3JldHVybiB0eXBlT2Yob2JqZWN0KT09PVJFQUNUX1NVU1BFTlNFX0xJU1RfVFlQRTt9ZXhwb3J0cy5Db250ZXh0Q29uc3VtZXI9Q29udGV4dENvbnN1bWVyO2V4cG9ydHMuQ29udGV4dFByb3ZpZGVyPUNvbnRleHRQcm92aWRlcjtleHBvcnRzLkVsZW1lbnQ9RWxlbWVudDtleHBvcnRzLkZvcndhcmRSZWY9Rm9yd2FyZFJlZjtleHBvcnRzLkZyYWdtZW50PUZyYWdtZW50O2V4cG9ydHMuTGF6eT1MYXp5O2V4cG9ydHMuTWVtbz1NZW1vO2V4cG9ydHMuUG9ydGFsPVBvcnRhbDtleHBvcnRzLlByb2ZpbGVyPVByb2ZpbGVyO2V4cG9ydHMuU3RyaWN0TW9kZT1TdHJpY3RNb2RlO2V4cG9ydHMuU3VzcGVuc2U9U3VzcGVuc2U7ZXhwb3J0cy5TdXNwZW5zZUxpc3Q9U3VzcGVuc2VMaXN0O2V4cG9ydHMuaXNBc3luY01vZGU9aXNBc3luY01vZGU7ZXhwb3J0cy5pc0NvbmN1cnJlbnRNb2RlPWlzQ29uY3VycmVudE1vZGU7ZXhwb3J0cy5pc0NvbnRleHRDb25zdW1lcj1pc0NvbnRleHRDb25zdW1lcjtleHBvcnRzLmlzQ29udGV4dFByb3ZpZGVyPWlzQ29udGV4dFByb3ZpZGVyO2V4cG9ydHMuaXNFbGVtZW50PWlzRWxlbWVudDtleHBvcnRzLmlzRm9yd2FyZFJlZj1pc0ZvcndhcmRSZWY7ZXhwb3J0cy5pc0ZyYWdtZW50PWlzRnJhZ21lbnQ7ZXhwb3J0cy5pc0xhenk9aXNMYXp5O2V4cG9ydHMuaXNNZW1vPWlzTWVtbztleHBvcnRzLmlzUG9ydGFsPWlzUG9ydGFsO2V4cG9ydHMuaXNQcm9maWxlcj1pc1Byb2ZpbGVyO2V4cG9ydHMuaXNTdHJpY3RNb2RlPWlzU3RyaWN0TW9kZTtleHBvcnRzLmlzU3VzcGVuc2U9aXNTdXNwZW5zZTtleHBvcnRzLmlzU3VzcGVuc2VMaXN0PWlzU3VzcGVuc2VMaXN0O2V4cG9ydHMuaXNWYWxpZEVsZW1lbnRUeXBlPWlzVmFsaWRFbGVtZW50VHlwZTtleHBvcnRzLnR5cGVPZj10eXBlT2Y7fSkoKTt9XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3JlYWN0LXJlZHV4L34vcmVhY3QtaXMvY2pzL3JlYWN0LWlzLmRldmVsb3BtZW50LmpzXG4vLyBtb2R1bGUgaWQgPSAzNTVcbi8vIG1vZHVsZSBjaHVua3MgPSAzIiwiXCJ1c2Ugc3RyaWN0XCI7dmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQ9cmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMucHVyZUZpbmFsUHJvcHNTZWxlY3RvckZhY3Rvcnk9cHVyZUZpbmFsUHJvcHNTZWxlY3RvckZhY3Rvcnk7ZXhwb3J0cy5kZWZhdWx0PWZpbmFsUHJvcHNTZWxlY3RvckZhY3Rvcnk7dmFyIF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlMj1faW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2VcIikpO3ZhciBfdmVyaWZ5U3Vic2VsZWN0b3JzPV9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vdmVyaWZ5U3Vic2VsZWN0b3JzXCIpKTt2YXIgX2V4Y2x1ZGVkPVtcImluaXRNYXBTdGF0ZVRvUHJvcHNcIixcImluaXRNYXBEaXNwYXRjaFRvUHJvcHNcIixcImluaXRNZXJnZVByb3BzXCJdO2Z1bmN0aW9uIHB1cmVGaW5hbFByb3BzU2VsZWN0b3JGYWN0b3J5KG1hcFN0YXRlVG9Qcm9wcyxtYXBEaXNwYXRjaFRvUHJvcHMsbWVyZ2VQcm9wcyxkaXNwYXRjaCxfcmVmMil7dmFyIGFyZVN0YXRlc0VxdWFsPV9yZWYyLmFyZVN0YXRlc0VxdWFsLGFyZU93blByb3BzRXF1YWw9X3JlZjIuYXJlT3duUHJvcHNFcXVhbCxhcmVTdGF0ZVByb3BzRXF1YWw9X3JlZjIuYXJlU3RhdGVQcm9wc0VxdWFsO3ZhciBoYXNSdW5BdExlYXN0T25jZT1mYWxzZTt2YXIgc3RhdGU9dm9pZCAwO3ZhciBvd25Qcm9wcz12b2lkIDA7dmFyIHN0YXRlUHJvcHM9dm9pZCAwO3ZhciBkaXNwYXRjaFByb3BzPXZvaWQgMDt2YXIgbWVyZ2VkUHJvcHM9dm9pZCAwO2Z1bmN0aW9uIGhhbmRsZUZpcnN0Q2FsbChmaXJzdFN0YXRlLGZpcnN0T3duUHJvcHMpe3N0YXRlPWZpcnN0U3RhdGU7b3duUHJvcHM9Zmlyc3RPd25Qcm9wcztzdGF0ZVByb3BzPW1hcFN0YXRlVG9Qcm9wcyhzdGF0ZSxvd25Qcm9wcyk7ZGlzcGF0Y2hQcm9wcz1tYXBEaXNwYXRjaFRvUHJvcHMoZGlzcGF0Y2gsb3duUHJvcHMpO21lcmdlZFByb3BzPW1lcmdlUHJvcHMoc3RhdGVQcm9wcyxkaXNwYXRjaFByb3BzLG93blByb3BzKTtoYXNSdW5BdExlYXN0T25jZT10cnVlO3JldHVybiBtZXJnZWRQcm9wczt9ZnVuY3Rpb24gaGFuZGxlTmV3UHJvcHNBbmROZXdTdGF0ZSgpe3N0YXRlUHJvcHM9bWFwU3RhdGVUb1Byb3BzKHN0YXRlLG93blByb3BzKTtpZihtYXBEaXNwYXRjaFRvUHJvcHMuZGVwZW5kc09uT3duUHJvcHMpZGlzcGF0Y2hQcm9wcz1tYXBEaXNwYXRjaFRvUHJvcHMoZGlzcGF0Y2gsb3duUHJvcHMpO21lcmdlZFByb3BzPW1lcmdlUHJvcHMoc3RhdGVQcm9wcyxkaXNwYXRjaFByb3BzLG93blByb3BzKTtyZXR1cm4gbWVyZ2VkUHJvcHM7fWZ1bmN0aW9uIGhhbmRsZU5ld1Byb3BzKCl7aWYobWFwU3RhdGVUb1Byb3BzLmRlcGVuZHNPbk93blByb3BzKXN0YXRlUHJvcHM9bWFwU3RhdGVUb1Byb3BzKHN0YXRlLG93blByb3BzKTtpZihtYXBEaXNwYXRjaFRvUHJvcHMuZGVwZW5kc09uT3duUHJvcHMpZGlzcGF0Y2hQcm9wcz1tYXBEaXNwYXRjaFRvUHJvcHMoZGlzcGF0Y2gsb3duUHJvcHMpO21lcmdlZFByb3BzPW1lcmdlUHJvcHMoc3RhdGVQcm9wcyxkaXNwYXRjaFByb3BzLG93blByb3BzKTtyZXR1cm4gbWVyZ2VkUHJvcHM7fWZ1bmN0aW9uIGhhbmRsZU5ld1N0YXRlKCl7dmFyIG5leHRTdGF0ZVByb3BzPW1hcFN0YXRlVG9Qcm9wcyhzdGF0ZSxvd25Qcm9wcyk7dmFyIHN0YXRlUHJvcHNDaGFuZ2VkPSFhcmVTdGF0ZVByb3BzRXF1YWwobmV4dFN0YXRlUHJvcHMsc3RhdGVQcm9wcyk7c3RhdGVQcm9wcz1uZXh0U3RhdGVQcm9wcztpZihzdGF0ZVByb3BzQ2hhbmdlZCltZXJnZWRQcm9wcz1tZXJnZVByb3BzKHN0YXRlUHJvcHMsZGlzcGF0Y2hQcm9wcyxvd25Qcm9wcyk7cmV0dXJuIG1lcmdlZFByb3BzO31mdW5jdGlvbiBoYW5kbGVTdWJzZXF1ZW50Q2FsbHMobmV4dFN0YXRlLG5leHRPd25Qcm9wcyl7dmFyIHByb3BzQ2hhbmdlZD0hYXJlT3duUHJvcHNFcXVhbChuZXh0T3duUHJvcHMsb3duUHJvcHMpO3ZhciBzdGF0ZUNoYW5nZWQ9IWFyZVN0YXRlc0VxdWFsKG5leHRTdGF0ZSxzdGF0ZSxuZXh0T3duUHJvcHMsb3duUHJvcHMpO3N0YXRlPW5leHRTdGF0ZTtvd25Qcm9wcz1uZXh0T3duUHJvcHM7aWYocHJvcHNDaGFuZ2VkJiZzdGF0ZUNoYW5nZWQpcmV0dXJuIGhhbmRsZU5ld1Byb3BzQW5kTmV3U3RhdGUoKTtpZihwcm9wc0NoYW5nZWQpcmV0dXJuIGhhbmRsZU5ld1Byb3BzKCk7aWYoc3RhdGVDaGFuZ2VkKXJldHVybiBoYW5kbGVOZXdTdGF0ZSgpO3JldHVybiBtZXJnZWRQcm9wczt9cmV0dXJuIGZ1bmN0aW9uIHB1cmVGaW5hbFByb3BzU2VsZWN0b3IobmV4dFN0YXRlLG5leHRPd25Qcm9wcyl7cmV0dXJuIGhhc1J1bkF0TGVhc3RPbmNlP2hhbmRsZVN1YnNlcXVlbnRDYWxscyhuZXh0U3RhdGUsbmV4dE93blByb3BzKTpoYW5kbGVGaXJzdENhbGwobmV4dFN0YXRlLG5leHRPd25Qcm9wcyk7fTt9Ly8gVE9ETzogQWRkIG1vcmUgY29tbWVudHNcbi8vIFRoZSBzZWxlY3RvciByZXR1cm5lZCBieSBzZWxlY3RvckZhY3Rvcnkgd2lsbCBtZW1vaXplIGl0cyByZXN1bHRzLFxuLy8gYWxsb3dpbmcgY29ubmVjdCdzIHNob3VsZENvbXBvbmVudFVwZGF0ZSB0byByZXR1cm4gZmFsc2UgaWYgZmluYWxcbi8vIHByb3BzIGhhdmUgbm90IGNoYW5nZWQuXG5mdW5jdGlvbiBmaW5hbFByb3BzU2VsZWN0b3JGYWN0b3J5KGRpc3BhdGNoLF9yZWYpe3ZhciBpbml0TWFwU3RhdGVUb1Byb3BzPV9yZWYuaW5pdE1hcFN0YXRlVG9Qcm9wcyxpbml0TWFwRGlzcGF0Y2hUb1Byb3BzPV9yZWYuaW5pdE1hcERpc3BhdGNoVG9Qcm9wcyxpbml0TWVyZ2VQcm9wcz1fcmVmLmluaXRNZXJnZVByb3BzLG9wdGlvbnM9KDAsX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UyLmRlZmF1bHQpKF9yZWYsX2V4Y2x1ZGVkKTt2YXIgbWFwU3RhdGVUb1Byb3BzPWluaXRNYXBTdGF0ZVRvUHJvcHMoZGlzcGF0Y2gsb3B0aW9ucyk7dmFyIG1hcERpc3BhdGNoVG9Qcm9wcz1pbml0TWFwRGlzcGF0Y2hUb1Byb3BzKGRpc3BhdGNoLG9wdGlvbnMpO3ZhciBtZXJnZVByb3BzPWluaXRNZXJnZVByb3BzKGRpc3BhdGNoLG9wdGlvbnMpO2lmKHByb2Nlc3MuZW52Lk5PREVfRU5WIT09J3Byb2R1Y3Rpb24nKXsoMCxfdmVyaWZ5U3Vic2VsZWN0b3JzLmRlZmF1bHQpKG1hcFN0YXRlVG9Qcm9wcyxtYXBEaXNwYXRjaFRvUHJvcHMsbWVyZ2VQcm9wcyk7fXJldHVybiBwdXJlRmluYWxQcm9wc1NlbGVjdG9yRmFjdG9yeShtYXBTdGF0ZVRvUHJvcHMsbWFwRGlzcGF0Y2hUb1Byb3BzLG1lcmdlUHJvcHMsZGlzcGF0Y2gsb3B0aW9ucyk7fVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9yZWFjdC1yZWR1eC9saWIvY29ubmVjdC9zZWxlY3RvckZhY3RvcnkuanNcbi8vIG1vZHVsZSBpZCA9IDM1NlxuLy8gbW9kdWxlIGNodW5rcyA9IDMiLCJcInVzZSBzdHJpY3RcIjt2YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdD1yZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIik7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5kZWZhdWx0PXZlcmlmeVN1YnNlbGVjdG9yczt2YXIgX3dhcm5pbmc9X2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi4vdXRpbHMvd2FybmluZ1wiKSk7ZnVuY3Rpb24gdmVyaWZ5KHNlbGVjdG9yLG1ldGhvZE5hbWUpe2lmKCFzZWxlY3Rvcil7dGhyb3cgbmV3IEVycm9yKFwiVW5leHBlY3RlZCB2YWx1ZSBmb3IgXCIrbWV0aG9kTmFtZStcIiBpbiBjb25uZWN0LlwiKTt9ZWxzZSBpZihtZXRob2ROYW1lPT09J21hcFN0YXRlVG9Qcm9wcyd8fG1ldGhvZE5hbWU9PT0nbWFwRGlzcGF0Y2hUb1Byb3BzJyl7aWYoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzZWxlY3RvciwnZGVwZW5kc09uT3duUHJvcHMnKSl7KDAsX3dhcm5pbmcuZGVmYXVsdCkoXCJUaGUgc2VsZWN0b3IgZm9yIFwiK21ldGhvZE5hbWUrXCIgb2YgY29ubmVjdCBkaWQgbm90IHNwZWNpZnkgYSB2YWx1ZSBmb3IgZGVwZW5kc09uT3duUHJvcHMuXCIpO319fWZ1bmN0aW9uIHZlcmlmeVN1YnNlbGVjdG9ycyhtYXBTdGF0ZVRvUHJvcHMsbWFwRGlzcGF0Y2hUb1Byb3BzLG1lcmdlUHJvcHMpe3ZlcmlmeShtYXBTdGF0ZVRvUHJvcHMsJ21hcFN0YXRlVG9Qcm9wcycpO3ZlcmlmeShtYXBEaXNwYXRjaFRvUHJvcHMsJ21hcERpc3BhdGNoVG9Qcm9wcycpO3ZlcmlmeShtZXJnZVByb3BzLCdtZXJnZVByb3BzJyk7fVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9yZWFjdC1yZWR1eC9saWIvY29ubmVjdC92ZXJpZnlTdWJzZWxlY3RvcnMuanNcbi8vIG1vZHVsZSBpZCA9IDM1N1xuLy8gbW9kdWxlIGNodW5rcyA9IDMiLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLmRlZmF1bHQ9d2FybmluZzsvKipcclxuICogUHJpbnRzIGEgd2FybmluZyBpbiB0aGUgY29uc29sZSBpZiBpdCBleGlzdHMuXHJcbiAqXHJcbiAqIEBwYXJhbSB7U3RyaW5nfSBtZXNzYWdlIFRoZSB3YXJuaW5nIG1lc3NhZ2UuXHJcbiAqIEByZXR1cm5zIHt2b2lkfVxyXG4gKi9mdW5jdGlvbiB3YXJuaW5nKG1lc3NhZ2Upey8qIGVzbGludC1kaXNhYmxlIG5vLWNvbnNvbGUgKi9pZih0eXBlb2YgY29uc29sZSE9PSd1bmRlZmluZWQnJiZ0eXBlb2YgY29uc29sZS5lcnJvcj09PSdmdW5jdGlvbicpe2NvbnNvbGUuZXJyb3IobWVzc2FnZSk7fS8qIGVzbGludC1lbmFibGUgbm8tY29uc29sZSAqL3RyeXsvLyBUaGlzIGVycm9yIHdhcyB0aHJvd24gYXMgYSBjb252ZW5pZW5jZSBzbyB0aGF0IGlmIHlvdSBlbmFibGVcbi8vIFwiYnJlYWsgb24gYWxsIGV4Y2VwdGlvbnNcIiBpbiB5b3VyIGNvbnNvbGUsXG4vLyBpdCB3b3VsZCBwYXVzZSB0aGUgZXhlY3V0aW9uIGF0IHRoaXMgbGluZS5cbnRocm93IG5ldyBFcnJvcihtZXNzYWdlKTsvKiBlc2xpbnQtZGlzYWJsZSBuby1lbXB0eSAqL31jYXRjaChlKXt9LyogZXNsaW50LWVuYWJsZSBuby1lbXB0eSAqL31cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vcmVhY3QtcmVkdXgvbGliL3V0aWxzL3dhcm5pbmcuanNcbi8vIG1vZHVsZSBpZCA9IDM1OFxuLy8gbW9kdWxlIGNodW5rcyA9IDMiLCJcInVzZSBzdHJpY3RcIjt2YXIgX3R5cGVvZj10eXBlb2YgU3ltYm9sPT09XCJmdW5jdGlvblwiJiZ0eXBlb2YgU3ltYm9sLml0ZXJhdG9yPT09XCJzeW1ib2xcIj9mdW5jdGlvbihvYmope3JldHVybiB0eXBlb2Ygb2JqO306ZnVuY3Rpb24ob2JqKXtyZXR1cm4gb2JqJiZ0eXBlb2YgU3ltYm9sPT09XCJmdW5jdGlvblwiJiZvYmouY29uc3RydWN0b3I9PT1TeW1ib2wmJm9iaiE9PVN5bWJvbC5wcm90b3R5cGU/XCJzeW1ib2xcIjp0eXBlb2Ygb2JqO307dmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQ9cmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMubWFwRGlzcGF0Y2hUb1Byb3BzRmFjdG9yeT1tYXBEaXNwYXRjaFRvUHJvcHNGYWN0b3J5O3ZhciBfYmluZEFjdGlvbkNyZWF0b3JzPV9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4uL3V0aWxzL2JpbmRBY3Rpb25DcmVhdG9yc1wiKSk7dmFyIF93cmFwTWFwVG9Qcm9wcz1yZXF1aXJlKFwiLi93cmFwTWFwVG9Qcm9wc1wiKTt2YXIgX2ludmFsaWRBcmdGYWN0b3J5PXJlcXVpcmUoXCIuL2ludmFsaWRBcmdGYWN0b3J5XCIpO2Z1bmN0aW9uIG1hcERpc3BhdGNoVG9Qcm9wc0ZhY3RvcnkobWFwRGlzcGF0Y2hUb1Byb3BzKXtyZXR1cm4gbWFwRGlzcGF0Y2hUb1Byb3BzJiYodHlwZW9mIG1hcERpc3BhdGNoVG9Qcm9wcz09PVwidW5kZWZpbmVkXCI/XCJ1bmRlZmluZWRcIjpfdHlwZW9mKG1hcERpc3BhdGNoVG9Qcm9wcykpPT09J29iamVjdCc/KDAsX3dyYXBNYXBUb1Byb3BzLndyYXBNYXBUb1Byb3BzQ29uc3RhbnQpKGZ1bmN0aW9uKGRpc3BhdGNoKXtyZXR1cm4oLy8gQHRzLWlnbm9yZVxuKDAsX2JpbmRBY3Rpb25DcmVhdG9ycy5kZWZhdWx0KShtYXBEaXNwYXRjaFRvUHJvcHMsZGlzcGF0Y2gpKTt9KTohbWFwRGlzcGF0Y2hUb1Byb3BzPygwLF93cmFwTWFwVG9Qcm9wcy53cmFwTWFwVG9Qcm9wc0NvbnN0YW50KShmdW5jdGlvbihkaXNwYXRjaCl7cmV0dXJue2Rpc3BhdGNoOmRpc3BhdGNofTt9KTp0eXBlb2YgbWFwRGlzcGF0Y2hUb1Byb3BzPT09J2Z1bmN0aW9uJz8vLyBAdHMtaWdub3JlXG4oMCxfd3JhcE1hcFRvUHJvcHMud3JhcE1hcFRvUHJvcHNGdW5jKShtYXBEaXNwYXRjaFRvUHJvcHMsJ21hcERpc3BhdGNoVG9Qcm9wcycpOigwLF9pbnZhbGlkQXJnRmFjdG9yeS5jcmVhdGVJbnZhbGlkQXJnRmFjdG9yeSkobWFwRGlzcGF0Y2hUb1Byb3BzLCdtYXBEaXNwYXRjaFRvUHJvcHMnKTt9XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3JlYWN0LXJlZHV4L2xpYi9jb25uZWN0L21hcERpc3BhdGNoVG9Qcm9wcy5qc1xuLy8gbW9kdWxlIGlkID0gMzU5XG4vLyBtb2R1bGUgY2h1bmtzID0gMyIsIlwidXNlIHN0cmljdFwiO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMuZGVmYXVsdD1iaW5kQWN0aW9uQ3JlYXRvcnM7ZnVuY3Rpb24gYmluZEFjdGlvbkNyZWF0b3JzKGFjdGlvbkNyZWF0b3JzLGRpc3BhdGNoKXt2YXIgYm91bmRBY3Rpb25DcmVhdG9ycz17fTt2YXIgX2xvb3A9ZnVuY3Rpb24gX2xvb3Aoa2V5KXt2YXIgYWN0aW9uQ3JlYXRvcj1hY3Rpb25DcmVhdG9yc1trZXldO2lmKHR5cGVvZiBhY3Rpb25DcmVhdG9yPT09J2Z1bmN0aW9uJyl7Ym91bmRBY3Rpb25DcmVhdG9yc1trZXldPWZ1bmN0aW9uKCl7cmV0dXJuIGRpc3BhdGNoKGFjdGlvbkNyZWF0b3IuYXBwbHkodW5kZWZpbmVkLGFyZ3VtZW50cykpO307fX07Zm9yKHZhciBrZXkgaW4gYWN0aW9uQ3JlYXRvcnMpe19sb29wKGtleSk7fXJldHVybiBib3VuZEFjdGlvbkNyZWF0b3JzO31cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vcmVhY3QtcmVkdXgvbGliL3V0aWxzL2JpbmRBY3Rpb25DcmVhdG9ycy5qc1xuLy8gbW9kdWxlIGlkID0gMzYwXG4vLyBtb2R1bGUgY2h1bmtzID0gMyIsIlwidXNlIHN0cmljdFwiO3ZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0PXJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKTtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLndyYXBNYXBUb1Byb3BzQ29uc3RhbnQ9d3JhcE1hcFRvUHJvcHNDb25zdGFudDtleHBvcnRzLmdldERlcGVuZHNPbk93blByb3BzPWdldERlcGVuZHNPbk93blByb3BzO2V4cG9ydHMud3JhcE1hcFRvUHJvcHNGdW5jPXdyYXBNYXBUb1Byb3BzRnVuYzt2YXIgX3ZlcmlmeVBsYWluT2JqZWN0PV9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4uL3V0aWxzL3ZlcmlmeVBsYWluT2JqZWN0XCIpKTtmdW5jdGlvbiB3cmFwTWFwVG9Qcm9wc0NvbnN0YW50KC8vICogTm90ZTpcbi8vICBJdCBzZWVtcyB0aGF0IHRoZSBkaXNwYXRjaCBhcmd1bWVudFxuLy8gIGNvdWxkIGJlIGEgZGlzcGF0Y2ggZnVuY3Rpb24gaW4gc29tZSBjYXNlcyAoZXg6IHdoZW5NYXBEaXNwYXRjaFRvUHJvcHNJc01pc3NpbmcpXG4vLyAgYW5kIGEgc3RhdGUgb2JqZWN0IGluIHNvbWUgb3RoZXJzIChleDogd2hlbk1hcFN0YXRlVG9Qcm9wc0lzTWlzc2luZylcbmdldENvbnN0YW50KXtyZXR1cm4gZnVuY3Rpb24gaW5pdENvbnN0YW50U2VsZWN0b3IoZGlzcGF0Y2gpe3ZhciBjb25zdGFudD1nZXRDb25zdGFudChkaXNwYXRjaCk7ZnVuY3Rpb24gY29uc3RhbnRTZWxlY3Rvcigpe3JldHVybiBjb25zdGFudDt9Y29uc3RhbnRTZWxlY3Rvci5kZXBlbmRzT25Pd25Qcm9wcz1mYWxzZTtyZXR1cm4gY29uc3RhbnRTZWxlY3Rvcjt9O30vLyBkZXBlbmRzT25Pd25Qcm9wcyBpcyB1c2VkIGJ5IGNyZWF0ZU1hcFRvUHJvcHNQcm94eSB0byBkZXRlcm1pbmUgd2hldGhlciB0byBwYXNzIHByb3BzIGFzIGFyZ3Ncbi8vIHRvIHRoZSBtYXBUb1Byb3BzIGZ1bmN0aW9uIGJlaW5nIHdyYXBwZWQuIEl0IGlzIGFsc28gdXNlZCBieSBtYWtlUHVyZVByb3BzU2VsZWN0b3IgdG8gZGV0ZXJtaW5lXG4vLyB3aGV0aGVyIG1hcFRvUHJvcHMgbmVlZHMgdG8gYmUgaW52b2tlZCB3aGVuIHByb3BzIGhhdmUgY2hhbmdlZC5cbi8vXG4vLyBBIGxlbmd0aCBvZiBvbmUgc2lnbmFscyB0aGF0IG1hcFRvUHJvcHMgZG9lcyBub3QgZGVwZW5kIG9uIHByb3BzIGZyb20gdGhlIHBhcmVudCBjb21wb25lbnQuXG4vLyBBIGxlbmd0aCBvZiB6ZXJvIGlzIGFzc3VtZWQgdG8gbWVhbiBtYXBUb1Byb3BzIGlzIGdldHRpbmcgYXJncyB2aWEgYXJndW1lbnRzIG9yIC4uLmFyZ3MgYW5kXG4vLyB0aGVyZWZvcmUgbm90IHJlcG9ydGluZyBpdHMgbGVuZ3RoIGFjY3VyYXRlbHkuLlxuLy8gVE9ETyBDYW4gdGhpcyBnZXQgcHVsbGVkIG91dCBzbyB0aGF0IHdlIGNhbiBzdWJzY3JpYmUgZGlyZWN0bHkgdG8gdGhlIHN0b3JlIGlmIHdlIGRvbid0IG5lZWQgb3duUHJvcHM/XG5mdW5jdGlvbiBnZXREZXBlbmRzT25Pd25Qcm9wcyhtYXBUb1Byb3BzKXtyZXR1cm4gbWFwVG9Qcm9wcy5kZXBlbmRzT25Pd25Qcm9wcz9Cb29sZWFuKG1hcFRvUHJvcHMuZGVwZW5kc09uT3duUHJvcHMpOm1hcFRvUHJvcHMubGVuZ3RoIT09MTt9Ly8gVXNlZCBieSB3aGVuTWFwU3RhdGVUb1Byb3BzSXNGdW5jdGlvbiBhbmQgd2hlbk1hcERpc3BhdGNoVG9Qcm9wc0lzRnVuY3Rpb24sXG4vLyB0aGlzIGZ1bmN0aW9uIHdyYXBzIG1hcFRvUHJvcHMgaW4gYSBwcm94eSBmdW5jdGlvbiB3aGljaCBkb2VzIHNldmVyYWwgdGhpbmdzOlxuLy9cbi8vICAqIERldGVjdHMgd2hldGhlciB0aGUgbWFwVG9Qcm9wcyBmdW5jdGlvbiBiZWluZyBjYWxsZWQgZGVwZW5kcyBvbiBwcm9wcywgd2hpY2hcbi8vICAgIGlzIHVzZWQgYnkgc2VsZWN0b3JGYWN0b3J5IHRvIGRlY2lkZSBpZiBpdCBzaG91bGQgcmVpbnZva2Ugb24gcHJvcHMgY2hhbmdlcy5cbi8vXG4vLyAgKiBPbiBmaXJzdCBjYWxsLCBoYW5kbGVzIG1hcFRvUHJvcHMgaWYgcmV0dXJucyBhbm90aGVyIGZ1bmN0aW9uLCBhbmQgdHJlYXRzIHRoYXRcbi8vICAgIG5ldyBmdW5jdGlvbiBhcyB0aGUgdHJ1ZSBtYXBUb1Byb3BzIGZvciBzdWJzZXF1ZW50IGNhbGxzLlxuLy9cbi8vICAqIE9uIGZpcnN0IGNhbGwsIHZlcmlmaWVzIHRoZSBmaXJzdCByZXN1bHQgaXMgYSBwbGFpbiBvYmplY3QsIGluIG9yZGVyIHRvIHdhcm5cbi8vICAgIHRoZSBkZXZlbG9wZXIgdGhhdCB0aGVpciBtYXBUb1Byb3BzIGZ1bmN0aW9uIGlzIG5vdCByZXR1cm5pbmcgYSB2YWxpZCByZXN1bHQuXG4vL1xuZnVuY3Rpb24gd3JhcE1hcFRvUHJvcHNGdW5jKG1hcFRvUHJvcHMsbWV0aG9kTmFtZSl7cmV0dXJuIGZ1bmN0aW9uIGluaXRQcm94eVNlbGVjdG9yKGRpc3BhdGNoLF9yZWYpe3ZhciBkaXNwbGF5TmFtZT1fcmVmLmRpc3BsYXlOYW1lO3ZhciBwcm94eT1mdW5jdGlvbiBtYXBUb1Byb3BzUHJveHkoc3RhdGVPckRpc3BhdGNoLG93blByb3BzKXtyZXR1cm4gcHJveHkuZGVwZW5kc09uT3duUHJvcHM/cHJveHkubWFwVG9Qcm9wcyhzdGF0ZU9yRGlzcGF0Y2gsb3duUHJvcHMpOnByb3h5Lm1hcFRvUHJvcHMoc3RhdGVPckRpc3BhdGNoLHVuZGVmaW5lZCk7fTsvLyBhbGxvdyBkZXRlY3RGYWN0b3J5QW5kVmVyaWZ5IHRvIGdldCBvd25Qcm9wc1xucHJveHkuZGVwZW5kc09uT3duUHJvcHM9dHJ1ZTtwcm94eS5tYXBUb1Byb3BzPWZ1bmN0aW9uIGRldGVjdEZhY3RvcnlBbmRWZXJpZnkoc3RhdGVPckRpc3BhdGNoLG93blByb3BzKXtwcm94eS5tYXBUb1Byb3BzPW1hcFRvUHJvcHM7cHJveHkuZGVwZW5kc09uT3duUHJvcHM9Z2V0RGVwZW5kc09uT3duUHJvcHMobWFwVG9Qcm9wcyk7dmFyIHByb3BzPXByb3h5KHN0YXRlT3JEaXNwYXRjaCxvd25Qcm9wcyk7aWYodHlwZW9mIHByb3BzPT09J2Z1bmN0aW9uJyl7cHJveHkubWFwVG9Qcm9wcz1wcm9wcztwcm94eS5kZXBlbmRzT25Pd25Qcm9wcz1nZXREZXBlbmRzT25Pd25Qcm9wcyhwcm9wcyk7cHJvcHM9cHJveHkoc3RhdGVPckRpc3BhdGNoLG93blByb3BzKTt9aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYhPT0ncHJvZHVjdGlvbicpKDAsX3ZlcmlmeVBsYWluT2JqZWN0LmRlZmF1bHQpKHByb3BzLGRpc3BsYXlOYW1lLG1ldGhvZE5hbWUpO3JldHVybiBwcm9wczt9O3JldHVybiBwcm94eTt9O31cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vcmVhY3QtcmVkdXgvbGliL2Nvbm5lY3Qvd3JhcE1hcFRvUHJvcHMuanNcbi8vIG1vZHVsZSBpZCA9IDM2MVxuLy8gbW9kdWxlIGNodW5rcyA9IDMiLCJcInVzZSBzdHJpY3RcIjt2YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdD1yZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIik7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5kZWZhdWx0PXZlcmlmeVBsYWluT2JqZWN0O3ZhciBfaXNQbGFpbk9iamVjdD1faW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL2lzUGxhaW5PYmplY3RcIikpO3ZhciBfd2FybmluZz1faW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3dhcm5pbmdcIikpO2Z1bmN0aW9uIHZlcmlmeVBsYWluT2JqZWN0KHZhbHVlLGRpc3BsYXlOYW1lLG1ldGhvZE5hbWUpe2lmKCEoMCxfaXNQbGFpbk9iamVjdC5kZWZhdWx0KSh2YWx1ZSkpeygwLF93YXJuaW5nLmRlZmF1bHQpKG1ldGhvZE5hbWUrXCIoKSBpbiBcIitkaXNwbGF5TmFtZStcIiBtdXN0IHJldHVybiBhIHBsYWluIG9iamVjdC4gSW5zdGVhZCByZWNlaXZlZCBcIit2YWx1ZStcIi5cIik7fX1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vcmVhY3QtcmVkdXgvbGliL3V0aWxzL3ZlcmlmeVBsYWluT2JqZWN0LmpzXG4vLyBtb2R1bGUgaWQgPSAzNjJcbi8vIG1vZHVsZSBjaHVua3MgPSAzIiwiXCJ1c2Ugc3RyaWN0XCI7dmFyIF90eXBlb2Y9dHlwZW9mIFN5bWJvbD09PVwiZnVuY3Rpb25cIiYmdHlwZW9mIFN5bWJvbC5pdGVyYXRvcj09PVwic3ltYm9sXCI/ZnVuY3Rpb24ob2JqKXtyZXR1cm4gdHlwZW9mIG9iajt9OmZ1bmN0aW9uKG9iail7cmV0dXJuIG9iaiYmdHlwZW9mIFN5bWJvbD09PVwiZnVuY3Rpb25cIiYmb2JqLmNvbnN0cnVjdG9yPT09U3ltYm9sJiZvYmohPT1TeW1ib2wucHJvdG90eXBlP1wic3ltYm9sXCI6dHlwZW9mIG9iajt9O2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMuZGVmYXVsdD1pc1BsYWluT2JqZWN0Oy8qKlxyXG4gKiBAcGFyYW0ge2FueX0gb2JqIFRoZSBvYmplY3QgdG8gaW5zcGVjdC5cclxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdGhlIGFyZ3VtZW50IGFwcGVhcnMgdG8gYmUgYSBwbGFpbiBvYmplY3QuXHJcbiAqL2Z1bmN0aW9uIGlzUGxhaW5PYmplY3Qob2JqKXtpZigodHlwZW9mIG9iaj09PVwidW5kZWZpbmVkXCI/XCJ1bmRlZmluZWRcIjpfdHlwZW9mKG9iaikpIT09J29iamVjdCd8fG9iaj09PW51bGwpcmV0dXJuIGZhbHNlO3ZhciBwcm90bz1PYmplY3QuZ2V0UHJvdG90eXBlT2Yob2JqKTtpZihwcm90bz09PW51bGwpcmV0dXJuIHRydWU7dmFyIGJhc2VQcm90bz1wcm90bzt3aGlsZShPYmplY3QuZ2V0UHJvdG90eXBlT2YoYmFzZVByb3RvKSE9PW51bGwpe2Jhc2VQcm90bz1PYmplY3QuZ2V0UHJvdG90eXBlT2YoYmFzZVByb3RvKTt9cmV0dXJuIHByb3RvPT09YmFzZVByb3RvO31cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vcmVhY3QtcmVkdXgvbGliL3V0aWxzL2lzUGxhaW5PYmplY3QuanNcbi8vIG1vZHVsZSBpZCA9IDM2M1xuLy8gbW9kdWxlIGNodW5rcyA9IDMiLCJcInVzZSBzdHJpY3RcIjt2YXIgX3R5cGVvZj10eXBlb2YgU3ltYm9sPT09XCJmdW5jdGlvblwiJiZ0eXBlb2YgU3ltYm9sLml0ZXJhdG9yPT09XCJzeW1ib2xcIj9mdW5jdGlvbihvYmope3JldHVybiB0eXBlb2Ygb2JqO306ZnVuY3Rpb24ob2JqKXtyZXR1cm4gb2JqJiZ0eXBlb2YgU3ltYm9sPT09XCJmdW5jdGlvblwiJiZvYmouY29uc3RydWN0b3I9PT1TeW1ib2wmJm9iaiE9PVN5bWJvbC5wcm90b3R5cGU/XCJzeW1ib2xcIjp0eXBlb2Ygb2JqO307ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5jcmVhdGVJbnZhbGlkQXJnRmFjdG9yeT1jcmVhdGVJbnZhbGlkQXJnRmFjdG9yeTtmdW5jdGlvbiBjcmVhdGVJbnZhbGlkQXJnRmFjdG9yeShhcmcsbmFtZSl7cmV0dXJuIGZ1bmN0aW9uKGRpc3BhdGNoLG9wdGlvbnMpe3Rocm93IG5ldyBFcnJvcihcIkludmFsaWQgdmFsdWUgb2YgdHlwZSBcIisodHlwZW9mIGFyZz09PVwidW5kZWZpbmVkXCI/XCJ1bmRlZmluZWRcIjpfdHlwZW9mKGFyZykpK1wiIGZvciBcIituYW1lK1wiIGFyZ3VtZW50IHdoZW4gY29ubmVjdGluZyBjb21wb25lbnQgXCIrb3B0aW9ucy53cmFwcGVkQ29tcG9uZW50TmFtZStcIi5cIik7fTt9XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3JlYWN0LXJlZHV4L2xpYi9jb25uZWN0L2ludmFsaWRBcmdGYWN0b3J5LmpzXG4vLyBtb2R1bGUgaWQgPSAzNjRcbi8vIG1vZHVsZSBjaHVua3MgPSAzIiwiXCJ1c2Ugc3RyaWN0XCI7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5tYXBTdGF0ZVRvUHJvcHNGYWN0b3J5PW1hcFN0YXRlVG9Qcm9wc0ZhY3Rvcnk7dmFyIF93cmFwTWFwVG9Qcm9wcz1yZXF1aXJlKFwiLi93cmFwTWFwVG9Qcm9wc1wiKTt2YXIgX2ludmFsaWRBcmdGYWN0b3J5PXJlcXVpcmUoXCIuL2ludmFsaWRBcmdGYWN0b3J5XCIpO2Z1bmN0aW9uIG1hcFN0YXRlVG9Qcm9wc0ZhY3RvcnkobWFwU3RhdGVUb1Byb3BzKXtyZXR1cm4hbWFwU3RhdGVUb1Byb3BzPygwLF93cmFwTWFwVG9Qcm9wcy53cmFwTWFwVG9Qcm9wc0NvbnN0YW50KShmdW5jdGlvbigpe3JldHVybnt9O30pOnR5cGVvZiBtYXBTdGF0ZVRvUHJvcHM9PT0nZnVuY3Rpb24nPy8vIEB0cy1pZ25vcmVcbigwLF93cmFwTWFwVG9Qcm9wcy53cmFwTWFwVG9Qcm9wc0Z1bmMpKG1hcFN0YXRlVG9Qcm9wcywnbWFwU3RhdGVUb1Byb3BzJyk6KDAsX2ludmFsaWRBcmdGYWN0b3J5LmNyZWF0ZUludmFsaWRBcmdGYWN0b3J5KShtYXBTdGF0ZVRvUHJvcHMsJ21hcFN0YXRlVG9Qcm9wcycpO31cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vcmVhY3QtcmVkdXgvbGliL2Nvbm5lY3QvbWFwU3RhdGVUb1Byb3BzLmpzXG4vLyBtb2R1bGUgaWQgPSAzNjVcbi8vIG1vZHVsZSBjaHVua3MgPSAzIiwiXCJ1c2Ugc3RyaWN0XCI7dmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQ9cmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMuZGVmYXVsdE1lcmdlUHJvcHM9ZGVmYXVsdE1lcmdlUHJvcHM7ZXhwb3J0cy53cmFwTWVyZ2VQcm9wc0Z1bmM9d3JhcE1lcmdlUHJvcHNGdW5jO2V4cG9ydHMubWVyZ2VQcm9wc0ZhY3Rvcnk9bWVyZ2VQcm9wc0ZhY3Rvcnk7dmFyIF9leHRlbmRzMj1faW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2V4dGVuZHNcIikpO3ZhciBfdmVyaWZ5UGxhaW5PYmplY3Q9X2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi4vdXRpbHMvdmVyaWZ5UGxhaW5PYmplY3RcIikpO3ZhciBfaW52YWxpZEFyZ0ZhY3Rvcnk9cmVxdWlyZShcIi4vaW52YWxpZEFyZ0ZhY3RvcnlcIik7ZnVuY3Rpb24gZGVmYXVsdE1lcmdlUHJvcHMoc3RhdGVQcm9wcyxkaXNwYXRjaFByb3BzLG93blByb3BzKXsvLyBAdHMtaWdub3JlXG5yZXR1cm4oMCxfZXh0ZW5kczIuZGVmYXVsdCkoe30sb3duUHJvcHMsc3RhdGVQcm9wcyxkaXNwYXRjaFByb3BzKTt9ZnVuY3Rpb24gd3JhcE1lcmdlUHJvcHNGdW5jKG1lcmdlUHJvcHMpe3JldHVybiBmdW5jdGlvbiBpbml0TWVyZ2VQcm9wc1Byb3h5KGRpc3BhdGNoLF9yZWYpe3ZhciBkaXNwbGF5TmFtZT1fcmVmLmRpc3BsYXlOYW1lLGFyZU1lcmdlZFByb3BzRXF1YWw9X3JlZi5hcmVNZXJnZWRQcm9wc0VxdWFsO3ZhciBoYXNSdW5PbmNlPWZhbHNlO3ZhciBtZXJnZWRQcm9wcz12b2lkIDA7cmV0dXJuIGZ1bmN0aW9uIG1lcmdlUHJvcHNQcm94eShzdGF0ZVByb3BzLGRpc3BhdGNoUHJvcHMsb3duUHJvcHMpe3ZhciBuZXh0TWVyZ2VkUHJvcHM9bWVyZ2VQcm9wcyhzdGF0ZVByb3BzLGRpc3BhdGNoUHJvcHMsb3duUHJvcHMpO2lmKGhhc1J1bk9uY2Upe2lmKCFhcmVNZXJnZWRQcm9wc0VxdWFsKG5leHRNZXJnZWRQcm9wcyxtZXJnZWRQcm9wcykpbWVyZ2VkUHJvcHM9bmV4dE1lcmdlZFByb3BzO31lbHNle2hhc1J1bk9uY2U9dHJ1ZTttZXJnZWRQcm9wcz1uZXh0TWVyZ2VkUHJvcHM7aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYhPT0ncHJvZHVjdGlvbicpKDAsX3ZlcmlmeVBsYWluT2JqZWN0LmRlZmF1bHQpKG1lcmdlZFByb3BzLGRpc3BsYXlOYW1lLCdtZXJnZVByb3BzJyk7fXJldHVybiBtZXJnZWRQcm9wczt9O307fWZ1bmN0aW9uIG1lcmdlUHJvcHNGYWN0b3J5KG1lcmdlUHJvcHMpe3JldHVybiFtZXJnZVByb3BzP2Z1bmN0aW9uKCl7cmV0dXJuIGRlZmF1bHRNZXJnZVByb3BzO306dHlwZW9mIG1lcmdlUHJvcHM9PT0nZnVuY3Rpb24nP3dyYXBNZXJnZVByb3BzRnVuYyhtZXJnZVByb3BzKTooMCxfaW52YWxpZEFyZ0ZhY3RvcnkuY3JlYXRlSW52YWxpZEFyZ0ZhY3RvcnkpKG1lcmdlUHJvcHMsJ21lcmdlUHJvcHMnKTt9XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3JlYWN0LXJlZHV4L2xpYi9jb25uZWN0L21lcmdlUHJvcHMuanNcbi8vIG1vZHVsZSBpZCA9IDM2NlxuLy8gbW9kdWxlIGNodW5rcyA9IDMiLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLmNyZWF0ZVN1YnNjcmlwdGlvbj1jcmVhdGVTdWJzY3JpcHRpb247dmFyIF9iYXRjaD1yZXF1aXJlKFwiLi9iYXRjaFwiKTtmdW5jdGlvbiBjcmVhdGVMaXN0ZW5lckNvbGxlY3Rpb24oKXt2YXIgYmF0Y2g9KDAsX2JhdGNoLmdldEJhdGNoKSgpO3ZhciBmaXJzdD1udWxsO3ZhciBsYXN0PW51bGw7cmV0dXJue2NsZWFyOmZ1bmN0aW9uIGNsZWFyKCl7Zmlyc3Q9bnVsbDtsYXN0PW51bGw7fSxub3RpZnk6ZnVuY3Rpb24gbm90aWZ5KCl7YmF0Y2goZnVuY3Rpb24oKXt2YXIgbGlzdGVuZXI9Zmlyc3Q7d2hpbGUobGlzdGVuZXIpe2xpc3RlbmVyLmNhbGxiYWNrKCk7bGlzdGVuZXI9bGlzdGVuZXIubmV4dDt9fSk7fSxnZXQ6ZnVuY3Rpb24gZ2V0KCl7dmFyIGxpc3RlbmVycz1bXTt2YXIgbGlzdGVuZXI9Zmlyc3Q7d2hpbGUobGlzdGVuZXIpe2xpc3RlbmVycy5wdXNoKGxpc3RlbmVyKTtsaXN0ZW5lcj1saXN0ZW5lci5uZXh0O31yZXR1cm4gbGlzdGVuZXJzO30sc3Vic2NyaWJlOmZ1bmN0aW9uIHN1YnNjcmliZShjYWxsYmFjayl7dmFyIGlzU3Vic2NyaWJlZD10cnVlO3ZhciBsaXN0ZW5lcj1sYXN0PXtjYWxsYmFjazpjYWxsYmFjayxuZXh0Om51bGwscHJldjpsYXN0fTtpZihsaXN0ZW5lci5wcmV2KXtsaXN0ZW5lci5wcmV2Lm5leHQ9bGlzdGVuZXI7fWVsc2V7Zmlyc3Q9bGlzdGVuZXI7fXJldHVybiBmdW5jdGlvbiB1bnN1YnNjcmliZSgpe2lmKCFpc1N1YnNjcmliZWR8fGZpcnN0PT09bnVsbClyZXR1cm47aXNTdWJzY3JpYmVkPWZhbHNlO2lmKGxpc3RlbmVyLm5leHQpe2xpc3RlbmVyLm5leHQucHJldj1saXN0ZW5lci5wcmV2O31lbHNle2xhc3Q9bGlzdGVuZXIucHJldjt9aWYobGlzdGVuZXIucHJldil7bGlzdGVuZXIucHJldi5uZXh0PWxpc3RlbmVyLm5leHQ7fWVsc2V7Zmlyc3Q9bGlzdGVuZXIubmV4dDt9fTt9fTt9dmFyIG51bGxMaXN0ZW5lcnM9e25vdGlmeTpmdW5jdGlvbiBub3RpZnkoKXt9LGdldDpmdW5jdGlvbiBnZXQoKXtyZXR1cm5bXTt9fTtmdW5jdGlvbiBjcmVhdGVTdWJzY3JpcHRpb24oc3RvcmUscGFyZW50U3ViKXt2YXIgdW5zdWJzY3JpYmU9dm9pZCAwO3ZhciBsaXN0ZW5lcnM9bnVsbExpc3RlbmVycztmdW5jdGlvbiBhZGROZXN0ZWRTdWIobGlzdGVuZXIpe3RyeVN1YnNjcmliZSgpO3JldHVybiBsaXN0ZW5lcnMuc3Vic2NyaWJlKGxpc3RlbmVyKTt9ZnVuY3Rpb24gbm90aWZ5TmVzdGVkU3Vicygpe2xpc3RlbmVycy5ub3RpZnkoKTt9ZnVuY3Rpb24gaGFuZGxlQ2hhbmdlV3JhcHBlcigpe2lmKHN1YnNjcmlwdGlvbi5vblN0YXRlQ2hhbmdlKXtzdWJzY3JpcHRpb24ub25TdGF0ZUNoYW5nZSgpO319ZnVuY3Rpb24gaXNTdWJzY3JpYmVkKCl7cmV0dXJuIEJvb2xlYW4odW5zdWJzY3JpYmUpO31mdW5jdGlvbiB0cnlTdWJzY3JpYmUoKXtpZighdW5zdWJzY3JpYmUpe3Vuc3Vic2NyaWJlPXBhcmVudFN1Yj9wYXJlbnRTdWIuYWRkTmVzdGVkU3ViKGhhbmRsZUNoYW5nZVdyYXBwZXIpOnN0b3JlLnN1YnNjcmliZShoYW5kbGVDaGFuZ2VXcmFwcGVyKTtsaXN0ZW5lcnM9Y3JlYXRlTGlzdGVuZXJDb2xsZWN0aW9uKCk7fX1mdW5jdGlvbiB0cnlVbnN1YnNjcmliZSgpe2lmKHVuc3Vic2NyaWJlKXt1bnN1YnNjcmliZSgpO3Vuc3Vic2NyaWJlPXVuZGVmaW5lZDtsaXN0ZW5lcnMuY2xlYXIoKTtsaXN0ZW5lcnM9bnVsbExpc3RlbmVyczt9fXZhciBzdWJzY3JpcHRpb249e2FkZE5lc3RlZFN1YjphZGROZXN0ZWRTdWIsbm90aWZ5TmVzdGVkU3Viczpub3RpZnlOZXN0ZWRTdWJzLGhhbmRsZUNoYW5nZVdyYXBwZXI6aGFuZGxlQ2hhbmdlV3JhcHBlcixpc1N1YnNjcmliZWQ6aXNTdWJzY3JpYmVkLHRyeVN1YnNjcmliZTp0cnlTdWJzY3JpYmUsdHJ5VW5zdWJzY3JpYmU6dHJ5VW5zdWJzY3JpYmUsZ2V0TGlzdGVuZXJzOmZ1bmN0aW9uIGdldExpc3RlbmVycygpe3JldHVybiBsaXN0ZW5lcnM7fX07cmV0dXJuIHN1YnNjcmlwdGlvbjt9XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3JlYWN0LXJlZHV4L2xpYi91dGlscy9TdWJzY3JpcHRpb24uanNcbi8vIG1vZHVsZSBpZCA9IDM2N1xuLy8gbW9kdWxlIGNodW5rcyA9IDMiLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLnVzZUlzb21vcnBoaWNMYXlvdXRFZmZlY3Q9ZXhwb3J0cy5jYW5Vc2VET009dm9pZCAwO3ZhciBfcmVhY3Q9cmVxdWlyZShcInJlYWN0XCIpOy8vIFJlYWN0IGN1cnJlbnRseSB0aHJvd3MgYSB3YXJuaW5nIHdoZW4gdXNpbmcgdXNlTGF5b3V0RWZmZWN0IG9uIHRoZSBzZXJ2ZXIuXG4vLyBUbyBnZXQgYXJvdW5kIGl0LCB3ZSBjYW4gY29uZGl0aW9uYWxseSB1c2VFZmZlY3Qgb24gdGhlIHNlcnZlciAobm8tb3ApIGFuZFxuLy8gdXNlTGF5b3V0RWZmZWN0IGluIHRoZSBicm93c2VyLiBXZSBuZWVkIHVzZUxheW91dEVmZmVjdCB0byBlbnN1cmUgdGhlIHN0b3JlXG4vLyBzdWJzY3JpcHRpb24gY2FsbGJhY2sgYWx3YXlzIGhhcyB0aGUgc2VsZWN0b3IgZnJvbSB0aGUgbGF0ZXN0IHJlbmRlciBjb21taXRcbi8vIGF2YWlsYWJsZSwgb3RoZXJ3aXNlIGEgc3RvcmUgdXBkYXRlIG1heSBoYXBwZW4gYmV0d2VlbiByZW5kZXIgYW5kIHRoZSBlZmZlY3QsXG4vLyB3aGljaCBtYXkgY2F1c2UgbWlzc2VkIHVwZGF0ZXM7IHdlIGFsc28gbXVzdCBlbnN1cmUgdGhlIHN0b3JlIHN1YnNjcmlwdGlvblxuLy8gaXMgY3JlYXRlZCBzeW5jaHJvbm91c2x5LCBvdGhlcndpc2UgYSBzdG9yZSB1cGRhdGUgbWF5IG9jY3VyIGJlZm9yZSB0aGVcbi8vIHN1YnNjcmlwdGlvbiBpcyBjcmVhdGVkIGFuZCBhbiBpbmNvbnNpc3RlbnQgc3RhdGUgbWF5IGJlIG9ic2VydmVkXG4vLyBNYXRjaGVzIGxvZ2ljIGluIFJlYWN0J3MgYHNoYXJlZC9FeGVjdXRpb25FbnZpcm9ubWVudGAgZmlsZVxudmFyIGNhblVzZURPTT0hISh0eXBlb2Ygd2luZG93IT09J3VuZGVmaW5lZCcmJnR5cGVvZiB3aW5kb3cuZG9jdW1lbnQhPT0ndW5kZWZpbmVkJyYmdHlwZW9mIHdpbmRvdy5kb2N1bWVudC5jcmVhdGVFbGVtZW50IT09J3VuZGVmaW5lZCcpO2V4cG9ydHMuY2FuVXNlRE9NPWNhblVzZURPTTt2YXIgdXNlSXNvbW9ycGhpY0xheW91dEVmZmVjdD1jYW5Vc2VET00/X3JlYWN0LnVzZUxheW91dEVmZmVjdDpfcmVhY3QudXNlRWZmZWN0O2V4cG9ydHMudXNlSXNvbW9ycGhpY0xheW91dEVmZmVjdD11c2VJc29tb3JwaGljTGF5b3V0RWZmZWN0O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9yZWFjdC1yZWR1eC9saWIvdXRpbHMvdXNlSXNvbW9ycGhpY0xheW91dEVmZmVjdC5qc1xuLy8gbW9kdWxlIGlkID0gMzY4XG4vLyBtb2R1bGUgY2h1bmtzID0gMyIsIlwidXNlIHN0cmljdFwiO3ZhciBfdHlwZW9mPXR5cGVvZiBTeW1ib2w9PT1cImZ1bmN0aW9uXCImJnR5cGVvZiBTeW1ib2wuaXRlcmF0b3I9PT1cInN5bWJvbFwiP2Z1bmN0aW9uKG9iail7cmV0dXJuIHR5cGVvZiBvYmo7fTpmdW5jdGlvbihvYmope3JldHVybiBvYmomJnR5cGVvZiBTeW1ib2w9PT1cImZ1bmN0aW9uXCImJm9iai5jb25zdHJ1Y3Rvcj09PVN5bWJvbCYmb2JqIT09U3ltYm9sLnByb3RvdHlwZT9cInN5bWJvbFwiOnR5cGVvZiBvYmo7fTtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLmRlZmF1bHQ9c2hhbGxvd0VxdWFsO2Z1bmN0aW9uIGlzKHgseSl7aWYoeD09PXkpe3JldHVybiB4IT09MHx8eSE9PTB8fDEveD09PTEveTt9ZWxzZXtyZXR1cm4geCE9PXgmJnkhPT15O319ZnVuY3Rpb24gc2hhbGxvd0VxdWFsKG9iakEsb2JqQil7aWYoaXMob2JqQSxvYmpCKSlyZXR1cm4gdHJ1ZTtpZigodHlwZW9mIG9iakE9PT0ndW5kZWZpbmVkJz8ndW5kZWZpbmVkJzpfdHlwZW9mKG9iakEpKSE9PSdvYmplY3QnfHxvYmpBPT09bnVsbHx8KHR5cGVvZiBvYmpCPT09J3VuZGVmaW5lZCc/J3VuZGVmaW5lZCc6X3R5cGVvZihvYmpCKSkhPT0nb2JqZWN0J3x8b2JqQj09PW51bGwpe3JldHVybiBmYWxzZTt9dmFyIGtleXNBPU9iamVjdC5rZXlzKG9iakEpO3ZhciBrZXlzQj1PYmplY3Qua2V5cyhvYmpCKTtpZihrZXlzQS5sZW5ndGghPT1rZXlzQi5sZW5ndGgpcmV0dXJuIGZhbHNlO2Zvcih2YXIgaT0wO2k8a2V5c0EubGVuZ3RoO2krKyl7aWYoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmpCLGtleXNBW2ldKXx8IWlzKG9iakFba2V5c0FbaV1dLG9iakJba2V5c0FbaV1dKSl7cmV0dXJuIGZhbHNlO319cmV0dXJuIHRydWU7fVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9yZWFjdC1yZWR1eC9saWIvdXRpbHMvc2hhbGxvd0VxdWFsLmpzXG4vLyBtb2R1bGUgaWQgPSAzNjlcbi8vIG1vZHVsZSBjaHVua3MgPSAzIiwiXCJ1c2Ugc3RyaWN0XCI7dmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQ9cmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO3ZhciBfZXhwb3J0TmFtZXM9e1Byb3ZpZGVyOnRydWUsY29ubmVjdDp0cnVlLFJlYWN0UmVkdXhDb250ZXh0OnRydWUsdXNlRGlzcGF0Y2g6dHJ1ZSxjcmVhdGVEaXNwYXRjaEhvb2s6dHJ1ZSx1c2VTZWxlY3Rvcjp0cnVlLGNyZWF0ZVNlbGVjdG9ySG9vazp0cnVlLHVzZVN0b3JlOnRydWUsY3JlYXRlU3RvcmVIb29rOnRydWUsc2hhbGxvd0VxdWFsOnRydWV9O09iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLFwiUHJvdmlkZXJcIix7ZW51bWVyYWJsZTp0cnVlLGdldDpmdW5jdGlvbiBnZXQoKXtyZXR1cm4gX1Byb3ZpZGVyLmRlZmF1bHQ7fX0pO09iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLFwiY29ubmVjdFwiLHtlbnVtZXJhYmxlOnRydWUsZ2V0OmZ1bmN0aW9uIGdldCgpe3JldHVybiBfY29ubmVjdC5kZWZhdWx0O319KTtPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cyxcIlJlYWN0UmVkdXhDb250ZXh0XCIse2VudW1lcmFibGU6dHJ1ZSxnZXQ6ZnVuY3Rpb24gZ2V0KCl7cmV0dXJuIF9Db250ZXh0LlJlYWN0UmVkdXhDb250ZXh0O319KTtPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cyxcInVzZURpc3BhdGNoXCIse2VudW1lcmFibGU6dHJ1ZSxnZXQ6ZnVuY3Rpb24gZ2V0KCl7cmV0dXJuIF91c2VEaXNwYXRjaC51c2VEaXNwYXRjaDt9fSk7T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsXCJjcmVhdGVEaXNwYXRjaEhvb2tcIix7ZW51bWVyYWJsZTp0cnVlLGdldDpmdW5jdGlvbiBnZXQoKXtyZXR1cm4gX3VzZURpc3BhdGNoLmNyZWF0ZURpc3BhdGNoSG9vazt9fSk7T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsXCJ1c2VTZWxlY3RvclwiLHtlbnVtZXJhYmxlOnRydWUsZ2V0OmZ1bmN0aW9uIGdldCgpe3JldHVybiBfdXNlU2VsZWN0b3IudXNlU2VsZWN0b3I7fX0pO09iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLFwiY3JlYXRlU2VsZWN0b3JIb29rXCIse2VudW1lcmFibGU6dHJ1ZSxnZXQ6ZnVuY3Rpb24gZ2V0KCl7cmV0dXJuIF91c2VTZWxlY3Rvci5jcmVhdGVTZWxlY3Rvckhvb2s7fX0pO09iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLFwidXNlU3RvcmVcIix7ZW51bWVyYWJsZTp0cnVlLGdldDpmdW5jdGlvbiBnZXQoKXtyZXR1cm4gX3VzZVN0b3JlLnVzZVN0b3JlO319KTtPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cyxcImNyZWF0ZVN0b3JlSG9va1wiLHtlbnVtZXJhYmxlOnRydWUsZ2V0OmZ1bmN0aW9uIGdldCgpe3JldHVybiBfdXNlU3RvcmUuY3JlYXRlU3RvcmVIb29rO319KTtPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cyxcInNoYWxsb3dFcXVhbFwiLHtlbnVtZXJhYmxlOnRydWUsZ2V0OmZ1bmN0aW9uIGdldCgpe3JldHVybiBfc2hhbGxvd0VxdWFsLmRlZmF1bHQ7fX0pO3ZhciBfUHJvdmlkZXI9X2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9jb21wb25lbnRzL1Byb3ZpZGVyXCIpKTt2YXIgX2Nvbm5lY3Q9X2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9jb21wb25lbnRzL2Nvbm5lY3RcIikpO3ZhciBfQ29udGV4dD1yZXF1aXJlKFwiLi9jb21wb25lbnRzL0NvbnRleHRcIik7dmFyIF91c2VEaXNwYXRjaD1yZXF1aXJlKFwiLi9ob29rcy91c2VEaXNwYXRjaFwiKTt2YXIgX3VzZVNlbGVjdG9yPXJlcXVpcmUoXCIuL2hvb2tzL3VzZVNlbGVjdG9yXCIpO3ZhciBfdXNlU3RvcmU9cmVxdWlyZShcIi4vaG9va3MvdXNlU3RvcmVcIik7dmFyIF9zaGFsbG93RXF1YWw9X2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi91dGlscy9zaGFsbG93RXF1YWxcIikpO3ZhciBfdHlwZXM9cmVxdWlyZShcIi4vdHlwZXNcIik7T2JqZWN0LmtleXMoX3R5cGVzKS5mb3JFYWNoKGZ1bmN0aW9uKGtleSl7aWYoa2V5PT09XCJkZWZhdWx0XCJ8fGtleT09PVwiX19lc01vZHVsZVwiKXJldHVybjtpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoX2V4cG9ydE5hbWVzLGtleSkpcmV0dXJuO2lmKGtleSBpbiBleHBvcnRzJiZleHBvcnRzW2tleV09PT1fdHlwZXNba2V5XSlyZXR1cm47T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsa2V5LHtlbnVtZXJhYmxlOnRydWUsZ2V0OmZ1bmN0aW9uIGdldCgpe3JldHVybiBfdHlwZXNba2V5XTt9fSk7fSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3JlYWN0LXJlZHV4L2xpYi9leHBvcnRzLmpzXG4vLyBtb2R1bGUgaWQgPSAzNzBcbi8vIG1vZHVsZSBjaHVua3MgPSAzIiwiXCJ1c2Ugc3RyaWN0XCI7dmFyIF90eXBlb2Y9dHlwZW9mIFN5bWJvbD09PVwiZnVuY3Rpb25cIiYmdHlwZW9mIFN5bWJvbC5pdGVyYXRvcj09PVwic3ltYm9sXCI/ZnVuY3Rpb24ob2JqKXtyZXR1cm4gdHlwZW9mIG9iajt9OmZ1bmN0aW9uKG9iail7cmV0dXJuIG9iaiYmdHlwZW9mIFN5bWJvbD09PVwiZnVuY3Rpb25cIiYmb2JqLmNvbnN0cnVjdG9yPT09U3ltYm9sJiZvYmohPT1TeW1ib2wucHJvdG90eXBlP1wic3ltYm9sXCI6dHlwZW9mIG9iajt9O2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMuZGVmYXVsdD12b2lkIDA7dmFyIF9yZWFjdD1faW50ZXJvcFJlcXVpcmVXaWxkY2FyZChyZXF1aXJlKFwicmVhY3RcIikpO3ZhciBfQ29udGV4dD1yZXF1aXJlKFwiLi9Db250ZXh0XCIpO3ZhciBfU3Vic2NyaXB0aW9uPXJlcXVpcmUoXCIuLi91dGlscy9TdWJzY3JpcHRpb25cIik7dmFyIF91c2VJc29tb3JwaGljTGF5b3V0RWZmZWN0PXJlcXVpcmUoXCIuLi91dGlscy91c2VJc29tb3JwaGljTGF5b3V0RWZmZWN0XCIpO2Z1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZShub2RlSW50ZXJvcCl7aWYodHlwZW9mIFdlYWtNYXAhPT1cImZ1bmN0aW9uXCIpcmV0dXJuIG51bGw7dmFyIGNhY2hlQmFiZWxJbnRlcm9wPW5ldyBXZWFrTWFwKCk7dmFyIGNhY2hlTm9kZUludGVyb3A9bmV3IFdlYWtNYXAoKTtyZXR1cm4oX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlPWZ1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZShub2RlSW50ZXJvcCl7cmV0dXJuIG5vZGVJbnRlcm9wP2NhY2hlTm9kZUludGVyb3A6Y2FjaGVCYWJlbEludGVyb3A7fSkobm9kZUludGVyb3ApO31mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChvYmosbm9kZUludGVyb3Ape2lmKCFub2RlSW50ZXJvcCYmb2JqJiZvYmouX19lc01vZHVsZSl7cmV0dXJuIG9iajt9aWYob2JqPT09bnVsbHx8KHR5cGVvZiBvYmo9PT1cInVuZGVmaW5lZFwiP1widW5kZWZpbmVkXCI6X3R5cGVvZihvYmopKSE9PVwib2JqZWN0XCImJnR5cGVvZiBvYmohPT1cImZ1bmN0aW9uXCIpe3JldHVybntkZWZhdWx0Om9ian07fXZhciBjYWNoZT1fZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUobm9kZUludGVyb3ApO2lmKGNhY2hlJiZjYWNoZS5oYXMob2JqKSl7cmV0dXJuIGNhY2hlLmdldChvYmopO312YXIgbmV3T2JqPXt9O3ZhciBoYXNQcm9wZXJ0eURlc2NyaXB0b3I9T2JqZWN0LmRlZmluZVByb3BlcnR5JiZPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO2Zvcih2YXIga2V5IGluIG9iail7aWYoa2V5IT09XCJkZWZhdWx0XCImJk9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosa2V5KSl7dmFyIGRlc2M9aGFzUHJvcGVydHlEZXNjcmlwdG9yP09iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqLGtleSk6bnVsbDtpZihkZXNjJiYoZGVzYy5nZXR8fGRlc2Muc2V0KSl7T2JqZWN0LmRlZmluZVByb3BlcnR5KG5ld09iaixrZXksZGVzYyk7fWVsc2V7bmV3T2JqW2tleV09b2JqW2tleV07fX19bmV3T2JqLmRlZmF1bHQ9b2JqO2lmKGNhY2hlKXtjYWNoZS5zZXQob2JqLG5ld09iaik7fXJldHVybiBuZXdPYmo7fWZ1bmN0aW9uIFByb3ZpZGVyKF9yZWYpe3ZhciBzdG9yZT1fcmVmLnN0b3JlLGNvbnRleHQ9X3JlZi5jb250ZXh0LGNoaWxkcmVuPV9yZWYuY2hpbGRyZW4sc2VydmVyU3RhdGU9X3JlZi5zZXJ2ZXJTdGF0ZTt2YXIgY29udGV4dFZhbHVlPSgwLF9yZWFjdC51c2VNZW1vKShmdW5jdGlvbigpe3ZhciBzdWJzY3JpcHRpb249KDAsX1N1YnNjcmlwdGlvbi5jcmVhdGVTdWJzY3JpcHRpb24pKHN0b3JlKTtyZXR1cm57c3RvcmU6c3RvcmUsc3Vic2NyaXB0aW9uOnN1YnNjcmlwdGlvbixnZXRTZXJ2ZXJTdGF0ZTpzZXJ2ZXJTdGF0ZT9mdW5jdGlvbigpe3JldHVybiBzZXJ2ZXJTdGF0ZTt9OnVuZGVmaW5lZH07fSxbc3RvcmUsc2VydmVyU3RhdGVdKTt2YXIgcHJldmlvdXNTdGF0ZT0oMCxfcmVhY3QudXNlTWVtbykoZnVuY3Rpb24oKXtyZXR1cm4gc3RvcmUuZ2V0U3RhdGUoKTt9LFtzdG9yZV0pOygwLF91c2VJc29tb3JwaGljTGF5b3V0RWZmZWN0LnVzZUlzb21vcnBoaWNMYXlvdXRFZmZlY3QpKGZ1bmN0aW9uKCl7dmFyIHN1YnNjcmlwdGlvbj1jb250ZXh0VmFsdWUuc3Vic2NyaXB0aW9uO3N1YnNjcmlwdGlvbi5vblN0YXRlQ2hhbmdlPXN1YnNjcmlwdGlvbi5ub3RpZnlOZXN0ZWRTdWJzO3N1YnNjcmlwdGlvbi50cnlTdWJzY3JpYmUoKTtpZihwcmV2aW91c1N0YXRlIT09c3RvcmUuZ2V0U3RhdGUoKSl7c3Vic2NyaXB0aW9uLm5vdGlmeU5lc3RlZFN1YnMoKTt9cmV0dXJuIGZ1bmN0aW9uKCl7c3Vic2NyaXB0aW9uLnRyeVVuc3Vic2NyaWJlKCk7c3Vic2NyaXB0aW9uLm9uU3RhdGVDaGFuZ2U9dW5kZWZpbmVkO307fSxbY29udGV4dFZhbHVlLHByZXZpb3VzU3RhdGVdKTt2YXIgQ29udGV4dD1jb250ZXh0fHxfQ29udGV4dC5SZWFjdFJlZHV4Q29udGV4dDsvLyBAdHMtaWdub3JlICdBbnlBY3Rpb24nIGlzIGFzc2lnbmFibGUgdG8gdGhlIGNvbnN0cmFpbnQgb2YgdHlwZSAnQScsIGJ1dCAnQScgY291bGQgYmUgaW5zdGFudGlhdGVkIHdpdGggYSBkaWZmZXJlbnQgc3VidHlwZVxucmV0dXJuKC8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KENvbnRleHQuUHJvdmlkZXIse3ZhbHVlOmNvbnRleHRWYWx1ZX0sY2hpbGRyZW4pKTt9dmFyIF9kZWZhdWx0PVByb3ZpZGVyO2V4cG9ydHMuZGVmYXVsdD1fZGVmYXVsdDtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vcmVhY3QtcmVkdXgvbGliL2NvbXBvbmVudHMvUHJvdmlkZXIuanNcbi8vIG1vZHVsZSBpZCA9IDM3MVxuLy8gbW9kdWxlIGNodW5rcyA9IDMiLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLmNyZWF0ZURpc3BhdGNoSG9vaz1jcmVhdGVEaXNwYXRjaEhvb2s7ZXhwb3J0cy51c2VEaXNwYXRjaD12b2lkIDA7dmFyIF9Db250ZXh0PXJlcXVpcmUoXCIuLi9jb21wb25lbnRzL0NvbnRleHRcIik7dmFyIF91c2VTdG9yZT1yZXF1aXJlKFwiLi91c2VTdG9yZVwiKTsvKipcclxuICogSG9vayBmYWN0b3J5LCB3aGljaCBjcmVhdGVzIGEgYHVzZURpc3BhdGNoYCBob29rIGJvdW5kIHRvIGEgZ2l2ZW4gY29udGV4dC5cclxuICpcclxuICogQHBhcmFtIHtSZWFjdC5Db250ZXh0fSBbY29udGV4dD1SZWFjdFJlZHV4Q29udGV4dF0gQ29udGV4dCBwYXNzZWQgdG8geW91ciBgPFByb3ZpZGVyPmAuXHJcbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gQSBgdXNlRGlzcGF0Y2hgIGhvb2sgYm91bmQgdG8gdGhlIHNwZWNpZmllZCBjb250ZXh0LlxyXG4gKi9mdW5jdGlvbiBjcmVhdGVEaXNwYXRjaEhvb2soKXt2YXIgY29udGV4dD1hcmd1bWVudHMubGVuZ3RoPjAmJmFyZ3VtZW50c1swXSE9PXVuZGVmaW5lZD9hcmd1bWVudHNbMF06X0NvbnRleHQuUmVhY3RSZWR1eENvbnRleHQ7dmFyIHVzZVN0b3JlPS8vIEB0cy1pZ25vcmVcbmNvbnRleHQ9PT1fQ29udGV4dC5SZWFjdFJlZHV4Q29udGV4dD9fdXNlU3RvcmUudXNlU3RvcmU6KDAsX3VzZVN0b3JlLmNyZWF0ZVN0b3JlSG9vaykoY29udGV4dCk7cmV0dXJuIGZ1bmN0aW9uIHVzZURpc3BhdGNoKCl7dmFyIHN0b3JlPXVzZVN0b3JlKCk7Ly8gQHRzLWlnbm9yZVxucmV0dXJuIHN0b3JlLmRpc3BhdGNoO307fS8qKlxyXG4gKiBBIGhvb2sgdG8gYWNjZXNzIHRoZSByZWR1eCBgZGlzcGF0Y2hgIGZ1bmN0aW9uLlxyXG4gKlxyXG4gKiBAcmV0dXJucyB7YW55fGZ1bmN0aW9ufSByZWR1eCBzdG9yZSdzIGBkaXNwYXRjaGAgZnVuY3Rpb25cclxuICpcclxuICogQGV4YW1wbGVcclxuICpcclxuICogaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrIH0gZnJvbSAncmVhY3QnXHJcbiAqIGltcG9ydCB7IHVzZURpc3BhdGNoIH0gZnJvbSAncmVhY3QtcmVkdXgnXHJcbiAqXHJcbiAqIGV4cG9ydCBjb25zdCBDb3VudGVyQ29tcG9uZW50ID0gKHsgdmFsdWUgfSkgPT4ge1xyXG4gKiAgIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKVxyXG4gKiAgIGNvbnN0IGluY3JlYXNlQ291bnRlciA9IHVzZUNhbGxiYWNrKCgpID0+IGRpc3BhdGNoKHsgdHlwZTogJ2luY3JlYXNlLWNvdW50ZXInIH0pLCBbXSlcclxuICogICByZXR1cm4gKFxyXG4gKiAgICAgPGRpdj5cclxuICogICAgICAgPHNwYW4+e3ZhbHVlfTwvc3Bhbj5cclxuICogICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtpbmNyZWFzZUNvdW50ZXJ9PkluY3JlYXNlIGNvdW50ZXI8L2J1dHRvbj5cclxuICogICAgIDwvZGl2PlxyXG4gKiAgIClcclxuICogfVxyXG4gKi92YXIgdXNlRGlzcGF0Y2g9LyojX19QVVJFX18qL2NyZWF0ZURpc3BhdGNoSG9vaygpO2V4cG9ydHMudXNlRGlzcGF0Y2g9dXNlRGlzcGF0Y2g7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3JlYWN0LXJlZHV4L2xpYi9ob29rcy91c2VEaXNwYXRjaC5qc1xuLy8gbW9kdWxlIGlkID0gMzcyXG4vLyBtb2R1bGUgY2h1bmtzID0gMyIsIlwidXNlIHN0cmljdFwiO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMuY3JlYXRlU3RvcmVIb29rPWNyZWF0ZVN0b3JlSG9vaztleHBvcnRzLnVzZVN0b3JlPXZvaWQgMDt2YXIgX3JlYWN0PXJlcXVpcmUoXCJyZWFjdFwiKTt2YXIgX0NvbnRleHQ9cmVxdWlyZShcIi4uL2NvbXBvbmVudHMvQ29udGV4dFwiKTt2YXIgX3VzZVJlZHV4Q29udGV4dD1yZXF1aXJlKFwiLi91c2VSZWR1eENvbnRleHRcIik7LyoqXHJcbiAqIEhvb2sgZmFjdG9yeSwgd2hpY2ggY3JlYXRlcyBhIGB1c2VTdG9yZWAgaG9vayBib3VuZCB0byBhIGdpdmVuIGNvbnRleHQuXHJcbiAqXHJcbiAqIEBwYXJhbSB7UmVhY3QuQ29udGV4dH0gW2NvbnRleHQ9UmVhY3RSZWR1eENvbnRleHRdIENvbnRleHQgcGFzc2VkIHRvIHlvdXIgYDxQcm92aWRlcj5gLlxyXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IEEgYHVzZVN0b3JlYCBob29rIGJvdW5kIHRvIHRoZSBzcGVjaWZpZWQgY29udGV4dC5cclxuICovZnVuY3Rpb24gY3JlYXRlU3RvcmVIb29rKCl7dmFyIGNvbnRleHQ9YXJndW1lbnRzLmxlbmd0aD4wJiZhcmd1bWVudHNbMF0hPT11bmRlZmluZWQ/YXJndW1lbnRzWzBdOl9Db250ZXh0LlJlYWN0UmVkdXhDb250ZXh0O3ZhciB1c2VSZWR1eENvbnRleHQ9Ly8gQHRzLWlnbm9yZVxuY29udGV4dD09PV9Db250ZXh0LlJlYWN0UmVkdXhDb250ZXh0P191c2VSZWR1eENvbnRleHQudXNlUmVkdXhDb250ZXh0OmZ1bmN0aW9uKCl7cmV0dXJuKDAsX3JlYWN0LnVzZUNvbnRleHQpKGNvbnRleHQpO307cmV0dXJuIGZ1bmN0aW9uIHVzZVN0b3JlKCl7dmFyIF91c2VSZWR1eENvbnRleHQyPXVzZVJlZHV4Q29udGV4dCgpLHN0b3JlPV91c2VSZWR1eENvbnRleHQyLnN0b3JlOy8vIEB0cy1pZ25vcmVcbnJldHVybiBzdG9yZTt9O30vKipcclxuICogQSBob29rIHRvIGFjY2VzcyB0aGUgcmVkdXggc3RvcmUuXHJcbiAqXHJcbiAqIEByZXR1cm5zIHthbnl9IHRoZSByZWR1eCBzdG9yZVxyXG4gKlxyXG4gKiBAZXhhbXBsZVxyXG4gKlxyXG4gKiBpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbiAqIGltcG9ydCB7IHVzZVN0b3JlIH0gZnJvbSAncmVhY3QtcmVkdXgnXHJcbiAqXHJcbiAqIGV4cG9ydCBjb25zdCBFeGFtcGxlQ29tcG9uZW50ID0gKCkgPT4ge1xyXG4gKiAgIGNvbnN0IHN0b3JlID0gdXNlU3RvcmUoKVxyXG4gKiAgIHJldHVybiA8ZGl2PntzdG9yZS5nZXRTdGF0ZSgpfTwvZGl2PlxyXG4gKiB9XHJcbiAqL3ZhciB1c2VTdG9yZT0vKiNfX1BVUkVfXyovY3JlYXRlU3RvcmVIb29rKCk7ZXhwb3J0cy51c2VTdG9yZT11c2VTdG9yZTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vcmVhY3QtcmVkdXgvbGliL2hvb2tzL3VzZVN0b3JlLmpzXG4vLyBtb2R1bGUgaWQgPSAzNzNcbi8vIG1vZHVsZSBjaHVua3MgPSAzIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3JlYWN0LXJlZHV4L2xpYi90eXBlcy5qc1xuLy8gbW9kdWxlIGlkID0gMzc0XG4vLyBtb2R1bGUgY2h1bmtzID0gMyIsIlwidXNlIHN0cmljdFwiO09iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLFwiX19lc01vZHVsZVwiLHt2YWx1ZTp0cnVlfSk7ZXhwb3J0cy5kZWZhdWx0PXZvaWQgMDsvKiogQSBmdW5jdGlvbiB0aGF0IGFjY2VwdHMgYSBwb3RlbnRpYWwgXCJleHRyYSBhcmd1bWVudFwiIHZhbHVlIHRvIGJlIGluamVjdGVkIGxhdGVyLFxyXG4gKiBhbmQgcmV0dXJucyBhbiBpbnN0YW5jZSBvZiB0aGUgdGh1bmsgbWlkZGxld2FyZSB0aGF0IHVzZXMgdGhhdCB2YWx1ZVxyXG4gKi9mdW5jdGlvbiBjcmVhdGVUaHVua01pZGRsZXdhcmUoZXh0cmFBcmd1bWVudCl7Ly8gU3RhbmRhcmQgUmVkdXggbWlkZGxld2FyZSBkZWZpbml0aW9uIHBhdHRlcm46XG4vLyBTZWU6IGh0dHBzOi8vcmVkdXguanMub3JnL3R1dG9yaWFscy9mdW5kYW1lbnRhbHMvcGFydC00LXN0b3JlI3dyaXRpbmctY3VzdG9tLW1pZGRsZXdhcmVcbnZhciBtaWRkbGV3YXJlPWZ1bmN0aW9uIG1pZGRsZXdhcmUoX3JlZil7dmFyIGRpc3BhdGNoPV9yZWYuZGlzcGF0Y2gsZ2V0U3RhdGU9X3JlZi5nZXRTdGF0ZTtyZXR1cm4gZnVuY3Rpb24obmV4dCl7cmV0dXJuIGZ1bmN0aW9uKGFjdGlvbil7Ly8gVGhlIHRodW5rIG1pZGRsZXdhcmUgbG9va3MgZm9yIGFueSBmdW5jdGlvbnMgdGhhdCB3ZXJlIHBhc3NlZCB0byBgc3RvcmUuZGlzcGF0Y2hgLlxuLy8gSWYgdGhpcyBcImFjdGlvblwiIGlzIHJlYWxseSBhIGZ1bmN0aW9uLCBjYWxsIGl0IGFuZCByZXR1cm4gdGhlIHJlc3VsdC5cbmlmKHR5cGVvZiBhY3Rpb249PT0nZnVuY3Rpb24nKXsvLyBJbmplY3QgdGhlIHN0b3JlJ3MgYGRpc3BhdGNoYCBhbmQgYGdldFN0YXRlYCBtZXRob2RzLCBhcyB3ZWxsIGFzIGFueSBcImV4dHJhIGFyZ1wiXG5yZXR1cm4gYWN0aW9uKGRpc3BhdGNoLGdldFN0YXRlLGV4dHJhQXJndW1lbnQpO30vLyBPdGhlcndpc2UsIHBhc3MgdGhlIGFjdGlvbiBkb3duIHRoZSBtaWRkbGV3YXJlIGNoYWluIGFzIHVzdWFsXG5yZXR1cm4gbmV4dChhY3Rpb24pO307fTt9O3JldHVybiBtaWRkbGV3YXJlO312YXIgdGh1bms9Y3JlYXRlVGh1bmtNaWRkbGV3YXJlKCk7Ly8gQXR0YWNoIHRoZSBmYWN0b3J5IGZ1bmN0aW9uIHNvIHVzZXJzIGNhbiBjcmVhdGUgYSBjdXN0b21pemVkIHZlcnNpb25cbi8vIHdpdGggd2hhdGV2ZXIgXCJleHRyYSBhcmdcIiB0aGV5IHdhbnQgdG8gaW5qZWN0IGludG8gdGhlaXIgdGh1bmtzXG50aHVuay53aXRoRXh0cmFBcmd1bWVudD1jcmVhdGVUaHVua01pZGRsZXdhcmU7dmFyIF9kZWZhdWx0PXRodW5rO2V4cG9ydHMuZGVmYXVsdD1fZGVmYXVsdDtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vcmVkdXgtdGh1bmsvbGliL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAzNzVcbi8vIG1vZHVsZSBjaHVua3MgPSAzIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbnZhciBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG52YXIgUHJvcFR5cGVzID0gcmVxdWlyZSgncHJvcC10eXBlcycpO1xuXG52YXIgTWFpblJlZ2lzdGVyID0gcmVxdWlyZSgnLi8uLi9kb2NzL21haW4vaW5kZXguanN4Jyk7XG52YXIgTWFpbkRvYyA9IHJlcXVpcmUoJy4vLi4vZG9jcy9tYWluL2RvY3VtZW50L2luZGV4LmpzeCcpO1xuXG52YXIgX3JlcXVpcmUgPSByZXF1aXJlKCdyZWFjdC1yb3V0ZXItZG9tJyksXG4gICAgUm91dGUgPSBfcmVxdWlyZS5Sb3V0ZTtcbi8vY29uc3QgY3JlYXRlSGFzaEhpc3RvcnkgPSByZXF1ZXJ5KCdoaXN0b3J5L2xpYi9jcmVhdGVIYXNoSGlzdG9yeScpXG5cblxudmFyIF9yZXF1aXJlMiA9IHJlcXVpcmUoJ3JhZGl1bScpLFxuICAgIFN0eWxlUm9vdCA9IF9yZXF1aXJlMi5TdHlsZVJvb3Q7XG5cbnZhciBNT0RVTEUgPSAnbWFpbic7XG5cbi8vY29uc3Qgc3RvcmUgPSByZXF1aXJlICgnLi8uLi9zdG9yZScpO1xuXG52YXIgQXBwID0gZnVuY3Rpb24gKF9SZWFjdCRDb21wb25lbnQpIHtcbiAgICBfaW5oZXJpdHMoQXBwLCBfUmVhY3QkQ29tcG9uZW50KTtcblxuICAgIGZ1bmN0aW9uIEFwcChwcm9wcykge1xuICAgICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgQXBwKTtcblxuICAgICAgICB2YXIgX3RoaXMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCAoQXBwLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoQXBwKSkuY2FsbCh0aGlzLCBwcm9wcykpO1xuXG4gICAgICAgIF90aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgdXBkYXRlZDogZmFsc2VcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cblxuICAgIF9jcmVhdGVDbGFzcyhBcHAsIFt7XG4gICAgICAgIGtleTogJ3JlbmRlcicsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICAgICAgICB2YXIgc3RvcmUgPSB0aGlzLnByb3BzLnN0b3JlO1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ3Byb3BzJywgdGhpcy5wcm9wcyk7XG4gICAgICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICBTdHlsZVJvb3QsXG4gICAgICAgICAgICAgICAgbnVsbCxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFJvdXRlLCB7IGV4YWN0OiB0cnVlLCBwYXRoOiAnL21haW4nLFxuICAgICAgICAgICAgICAgICAgICByZW5kZXI6IGZ1bmN0aW9uIHJlbmRlcihwcm9wcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoTWFpblJlZ2lzdGVyLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RvcmU6IHN0b3JlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhpc3Rvcnk6IHByb3BzLmhpc3RvcnksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kdWxlOiBNT0RVTEUgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFJvdXRlLCB7IGV4YWN0OiB0cnVlLCBwYXRoOiAnL21haW4vOmRvY0lkJyxcbiAgICAgICAgICAgICAgICAgICAgcmVuZGVyOiBmdW5jdGlvbiByZW5kZXIocHJvcHMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KE1haW5Eb2MsIF9leHRlbmRzKHt9LCBwcm9wcywge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhpc3Rvcnk6IHByb3BzLmhpc3RvcnksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RvcmU6IHN0b3JlXG4gICAgICAgICAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFJvdXRlLCB7IGV4YWN0OiB0cnVlLCBwYXRoOiAnLycsXG4gICAgICAgICAgICAgICAgICAgIHJlbmRlcjogZnVuY3Rpb24gcmVuZGVyKHByb3BzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChNYWluUmVnaXN0ZXIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdG9yZTogc3RvcmUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGlzdG9yeTogcHJvcHMuaGlzdG9yeSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2R1bGU6IE1PRFVMRSB9KTtcbiAgICAgICAgICAgICAgICAgICAgfSB9KVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgIH1dKTtcblxuICAgIHJldHVybiBBcHA7XG59KFJlYWN0LkNvbXBvbmVudCk7XG5cbm1vZHVsZS5leHBvcnRzID0gQXBwO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vZnJvbnRlbmQvbW9kdWxlcy9tYWluLmpzeFxuLy8gbW9kdWxlIGlkID0gMzc2XG4vLyBtb2R1bGUgY2h1bmtzID0gMyIsIid1c2Ugc3RyaWN0JztcblxuLy9pbXBvcnQgYXV0aG9ycyBmcm9tIFwiLi4vLi4vcmVkdWNlcnMvYXV0aG9yc1wiO1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbnZhciBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG52YXIgRG9jdW1lbnRzID0gcmVxdWlyZSgnLi8uLi9kb2N1bWVudHMvZG9jdW1lbnRzLmpzeCcpO1xudmFyIHN0eWxlcyA9IHJlcXVpcmUoJy4vc3R5bGVzJyk7XG5cbnZhciBfZmV0Y2hEYXRhID0gcmVxdWlyZSgnLi8uLi8uLi8uLi9saWJzL2ZldGNoRGF0YScpO1xudmFyIE1lbnUgPSByZXF1aXJlKCcuLy4uLy4uL2NvbXBvbmVudHMvbWVudS10b29sYmFyL21lbnUtdG9vbGJhci5qc3gnKTtcbnZhciBDb25zdCA9IHJlcXVpcmUoJy4vLi4vLi4vLi4vY29uZmlnL2NvbnN0YW50cycpO1xuXG52YXIgUmVnaXN0ZXJDb21wb25lbnQgPSByZXF1aXJlKCcuL3JlZ2lzdGVyLWNvbXBvbmVudC5qc3gnKTtcbnZhciBQaWN0dXJlQ29tcG9uZW50ID0gcmVxdWlyZSgnLi9waWN0dXJlLWNvbXBvbmVudC5qc3gnKTtcbnZhciBVc2VyQXBwbGljYXRpb25zQ29tcG9uZW50ID0gcmVxdWlyZSgnLi91c2VyQXBwbGljYXRpb25zLWNvbXBvbmVudC5qc3gnKTtcbnZhciBEZWFsc0NvbXBvbmVudCA9IHJlcXVpcmUoJy4vZGVhbHNSZWdpc3Rlci1jb21wb25lbnQuanN4Jyk7XG52YXIgQXV0aG9yc0NvbXBvbmVudCA9IHJlcXVpcmUoJy4vYXV0aG9yc1JlZ2lzdGVyLWNvbXBvbmVudC5qc3gnKTtcblxudmFyIEZpbHRlckNvbXBvbmVudCA9IHJlcXVpcmUoJy4vZmlsdGVyLWNvbXBvbmVudC5qc3gnKTtcblxudmFyIGJ0blBhcmFtcyA9IHtcbiAgICBidG5TdGFydDoge1xuICAgICAgICBzaG93OiB0cnVlXG4gICAgfSxcbiAgICBidG5Mb2dpbjoge1xuICAgICAgICBzaG93OiB0cnVlLFxuICAgICAgICBkaXNhYmxlZDogZmFsc2VcbiAgICB9LFxuICAgIGJ0bkFjY291bnQ6IHtcbiAgICAgICAgc2hvdzogdHJ1ZSxcbiAgICAgICAgZGlzYWJsZWQ6IGZhbHNlXG4gICAgfVxuXG59O1xuXG4vKipcclxuICog0JrQu9Cw0YHRgSDRgNC10LDQu9C40LfRg9C10YIg0LTQvtC60YPQvNC10L3RgiDRgdC/0YDQsNCy0L7Rh9C90LjQutCwINC/0YDQuNC30L3QsNC60L7Qsi5cclxuICovXG5cbnZhciBSZWdpc3RlciA9IGZ1bmN0aW9uIChfUmVhY3QkUHVyZUNvbXBvbmVudCkge1xuICAgIF9pbmhlcml0cyhSZWdpc3RlciwgX1JlYWN0JFB1cmVDb21wb25lbnQpO1xuXG4gICAgZnVuY3Rpb24gUmVnaXN0ZXIocHJvcHMpIHtcbiAgICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFJlZ2lzdGVyKTtcblxuICAgICAgICB2YXIgX3RoaXMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCAoUmVnaXN0ZXIuX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihSZWdpc3RlcikpLmNhbGwodGhpcywgcHJvcHMpKTtcblxuICAgICAgICBfdGhpcy5idG5DbGlja0V2ZW50SGFuZGxlciA9IF90aGlzLmJ0bkNsaWNrRXZlbnRIYW5kbGVyLmJpbmQoX3RoaXMpO1xuICAgICAgICBfdGhpcy5mZXRjaERhdGEgPSBfdGhpcy5mZXRjaERhdGEuYmluZChfdGhpcyk7XG4gICAgICAgIF90aGlzLmJ0bkFkZENsaWNrID0gX3RoaXMuYnRuQWRkQ2xpY2suYmluZChfdGhpcyk7XG4gICAgICAgIF90aGlzLmxvYWRMaWJzID0gX3RoaXMubG9hZExpYnMuYmluZChfdGhpcyk7XG4gICAgICAgIF90aGlzLmRhdGEgPSBbXTtcbiAgICAgICAgX3RoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICB3YXJuaW5nOiBudWxsLFxuICAgICAgICAgICAgaW5pdExvYWQ6IGZhbHNlLFxuICAgICAgICAgICAgZWRpdERvY3VtZW50OiBmYWxzZSxcbiAgICAgICAgICAgIHBpY3R1cmVJZDogbnVsbCxcbiAgICAgICAgICAgIGFjdGl2ZUNvbXBvbmVudDogJ3BpY3R1cmVzJyxcbiAgICAgICAgICAgIGZpbHRlcjogJydcblxuICAgICAgICAgICAgLy/Qv9C+0LTQv9C40YHRi9Cy0LDQtdC80YHRjyDQvdCwINC40LfQvNC10L3QtdC90LjRjyDQsiDRgdGC0L7RgNC1XG4gICAgICAgIH07dmFyIHN0b3JlID0gX3RoaXMucHJvcHMuc3RvcmU7XG4gICAgICAgIGlmIChzdG9yZSkge1xuICAgICAgICAgICAgc3RvcmUuc3Vic2NyaWJlKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICB2YXIgZmlsdGVyID0gc3RvcmUuZ2V0U3RhdGUoKS5maWx0ZXJzLmZpbHRlcjtcbiAgICAgICAgICAgICAgICB2YXIgYWN0aXZlQ29tcG9uZW50ID0gc3RvcmUuZ2V0U3RhdGUoKS5zdGF0dXNlcy5hY3RpdmVQYWdlQ29tcG9uZW50O1xuICAgICAgICAgICAgICAgIGlmIChmaWx0ZXIuc2VhcmNoVGV4dCAhPT0gX3RoaXMuc3RhdGUuZmlsdGVyIHx8IEpTT04uc3RyaW5naWZ5KGZpbHRlci5hZGRpdGlvbmFsRmlsdGVyKSAhPT0gSlNPTi5zdHJpbmdpZnkoX3RoaXMuc3RhdGUuYWRkaXRpb25hbEZpbHRlcikpIHtcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVyOiBmaWx0ZXIuc2VhcmNoVGV4dCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkZGl0aW9uYWxGaWx0ZXI6IGZpbHRlci5hZGRpdGlvbmFsRmlsdGVyXG4gICAgICAgICAgICAgICAgICAgIH0sIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vINC+0LHQvdC+0LLQuNC8INC30LDQv9GA0L7RgVxuICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMuZmV0Y2hEYXRhKCk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vINC90L7QstC+0Lkg0LrQvtC80L/QvtC90LXRgiDQsiDQvNC10L3RjlxuICAgICAgICAgICAgICAgIGlmIChhY3RpdmVDb21wb25lbnQgIT09IF90aGlzLnN0YXRlLmFjdGl2ZUNvbXBvbmVudCkge1xuICAgICAgICAgICAgICAgICAgICBfdGhpcy5zZXRTdGF0ZSh7IGFjdGl2ZUNvbXBvbmVudDogYWN0aXZlQ29tcG9uZW50IH0sIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdGhpcy5mZXRjaERhdGEoKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdmFyIHJlbG9hZCA9IHN0b3JlLmdldFN0YXRlKCkuc3RhdHVzZXMucmVsb2FkQWN0aXZlUGFnZUNvbXBvbmVudDtcbiAgICAgICAgICAgICAgICBpZiAocmVsb2FkKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgc3RvcmUuZGlzcGF0Y2goeyB0eXBlOiAncmVsb2FkQWN0aXZlUGFnZUNvbXBvbmVudCcsIHJlbG9hZEFjdGl2ZVBhZ2VDb21wb25lbnQ6IGZhbHNlIH0pO1xuICAgICAgICAgICAgICAgICAgICAvLyDQvtCx0L3QvtCy0LjQvCDQt9Cw0L/RgNC+0YFcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMuZmV0Y2hEYXRhKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuXG4gICAgLyoqXHJcbiAgICAgKiDQv9C40YjQtdC8INC00LXQu9Cw0LXQvCDQt9Cw0L/RgNC+0YEg0L/QviDQuNGC0L7Qs9GDINC30LDQs9GA0YPQt9C60LhcclxuICAgICAqL1xuXG5cbiAgICBfY3JlYXRlQ2xhc3MoUmVnaXN0ZXIsIFt7XG4gICAgICAgIGtleTogJ2NvbXBvbmVudERpZE1vdW50JyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICAgICAgLy8g0LTQtdC70LDQtdC8INC30LDQv9GA0L7RgVxuICAgICAgICAgICAgdGhpcy5mZXRjaERhdGEoKTtcbiAgICAgICAgICAgIC8vINCz0YDRg9C30LjQvCDQsdC40LHQu9C40L7RgtC10LrQuFxuICAgICAgICAgICAgdGhpcy5sb2FkTGlicygncmVsb2FkJywgJ2F1dGhvcnMnKTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAncmVuZGVyJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgICAgICAgIHZhciBfc3R5bGUgPSBPYmplY3QuYXNzaWduKHt9LCBzdHlsZXMsIHRoaXMucHJvcHMuc3R5bGUgPyB0aGlzLnByb3BzLnN0eWxlIDoge30pO1xuICAgICAgICAgICAgdmFyIHdhcm5pbmdTdHlsZSA9IG51bGw7IC8vdGhpcy5zdGF0ZS53YXJuaW5nVHlwZSAmJiBzdHlsZXNbdGhpcy5zdGF0ZS53YXJuaW5nVHlwZV0gPyBzdHlsZXNbdGhpcy5zdGF0ZS53YXJuaW5nVHlwZV0gOiBudWxsO1xuXG4gICAgICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICAnZGl2JyxcbiAgICAgICAgICAgICAgICB7IHN0eWxlOiBfc3R5bGUuZG9jIH0sXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChNZW51LCB7IHBhcmFtczogYnRuUGFyYW1zLFxuICAgICAgICAgICAgICAgICAgICByZWY6ICdtZW51JyxcbiAgICAgICAgICAgICAgICAgICAgc3RvcmU6IHRoaXMucHJvcHMuc3RvcmUsXG4gICAgICAgICAgICAgICAgICAgIGJ0bkNsaWNrRXZlbnRIYW5kbGVyOiB0aGlzLmJ0bkNsaWNrRXZlbnRIYW5kbGVyLFxuICAgICAgICAgICAgICAgICAgICBoaXN0b3J5OiB0aGlzLnByb3BzLmhpc3RvcnksXG4gICAgICAgICAgICAgICAgICAgIG1vZHVsZTogdGhpcy5wcm9wcy5tb2R1bGUgfSksXG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS53YXJuaW5nID8gUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICAgICAgVG9vbGJhckNvbnRhaW5lcixcbiAgICAgICAgICAgICAgICAgICAgeyByZWY6ICd0b29sYmFyLWNvbnRhaW5lcicgfSxcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICAgICAgICAgICdkaXYnLFxuICAgICAgICAgICAgICAgICAgICAgICAgeyBzdHlsZTogd2FybmluZ1N0eWxlIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdzcGFuJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBudWxsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUud2FybmluZ1xuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgKSA6IG51bGwsXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICAgICAgJ2RpdicsXG4gICAgICAgICAgICAgICAgICAgIHsgc3R5bGU6IHN0eWxlcy5wYWdlRnJhbWUgfSxcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICAgICAgICAgICdkaXYnLFxuICAgICAgICAgICAgICAgICAgICAgICAgeyBzdHlsZTogc3R5bGVzLmZpbHRlckZyYW1lIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdzcGFuJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBudWxsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdBZGRpdGlvbiBmaWx0ZXJzJ1xuICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoRmlsdGVyQ29tcG9uZW50LCB7IHN0b3JlOiB0aGlzLnByb3BzLnN0b3JlIH0pXG4gICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgICAgICAgICAnZGl2JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgc3R5bGU6IHN0eWxlcy5jb21wb25lbnRGcmFtZSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5hY3RpdmVDb21wb25lbnQgPT0gJ3BpY3R1cmVzJyA/IFJlYWN0LmNyZWF0ZUVsZW1lbnQoUmVnaXN0ZXJDb21wb25lbnQsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdG9yZTogdGhpcy5wcm9wcy5zdG9yZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBidG5DbGlja0V2ZW50SGFuZGxlcjogdGhpcy5idG5DbGlja0V2ZW50SGFuZGxlclxuICAgICAgICAgICAgICAgICAgICAgICAgfSkgOiBudWxsLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5hY3RpdmVDb21wb25lbnQgPT0gJ0RFQUxTJyA/IFJlYWN0LmNyZWF0ZUVsZW1lbnQoRGVhbHNDb21wb25lbnQsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdG9yZTogdGhpcy5wcm9wcy5zdG9yZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBidG5DbGlja0V2ZW50SGFuZGxlcjogdGhpcy5idG5DbGlja0V2ZW50SGFuZGxlclxuICAgICAgICAgICAgICAgICAgICAgICAgfSkgOiBudWxsLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5hY3RpdmVDb21wb25lbnQgPT0gJ1RBT1RMVVNfTE9HSU4nID8gUmVhY3QuY3JlYXRlRWxlbWVudChVc2VyQXBwbGljYXRpb25zQ29tcG9uZW50LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RvcmU6IHRoaXMucHJvcHMuc3RvcmUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnRuQ2xpY2tFdmVudEhhbmRsZXI6IHRoaXMuYnRuQ2xpY2tFdmVudEhhbmRsZXJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pIDogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuYWN0aXZlQ29tcG9uZW50ID09ICdBVVRIT1JTJyA/IFJlYWN0LmNyZWF0ZUVsZW1lbnQoQXV0aG9yc0NvbXBvbmVudCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0b3JlOiB0aGlzLnByb3BzLnN0b3JlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ0bkNsaWNrRXZlbnRIYW5kbGVyOiB0aGlzLmJ0bkNsaWNrRXZlbnRIYW5kbGVyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KSA6IG51bGxcbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5hY3RpdmVDb21wb25lbnQgPT0gJ3BpY3R1cmVzJyAmJiB0aGlzLnN0YXRlLmVkaXREb2N1bWVudCA/IFJlYWN0LmNyZWF0ZUVsZW1lbnQoUGljdHVyZUNvbXBvbmVudCwge1xuICAgICAgICAgICAgICAgICAgICBzdG9yZTogdGhpcy5wcm9wcy5zdG9yZSxcbiAgICAgICAgICAgICAgICAgICAgaWQ6IHRoaXMuc3RhdGUucGljdHVyZUlkLFxuICAgICAgICAgICAgICAgICAgICBzaG93OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBidG5DbGlja0V2ZW50SGFuZGxlcjogdGhpcy5idG5DbGlja0V2ZW50SGFuZGxlclxuICAgICAgICAgICAgICAgIH0pIDogbnVsbFxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqINC+0LHRgNCw0LHQvtGC0YfQuNC6INGB0L7QsdGL0YLQuNC5INC60L3QvtC/0LrQuFxyXG4gICAgICAgICAqIEBwYXJhbSBldmVudFxyXG4gICAgICAgICAqIEBwYXJhbSBkb2NJZFxyXG4gICAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAgICBrZXk6ICdidG5DbGlja0V2ZW50SGFuZGxlcicsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBidG5DbGlja0V2ZW50SGFuZGxlcihldmVudCwgZG9jSWQpIHtcbiAgICAgICAgICAgIHN3aXRjaCAoZXZlbnQpIHtcbiAgICAgICAgICAgICAgICBjYXNlICdidG5BZGQnOlxuICAgICAgICAgICAgICAgICAgICAvLyDQvdC+0LLQsNGPINC60LDRgNGC0LjQvdC60LBcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGVkaXREb2N1bWVudDogdHJ1ZSwgcGljdHVyZUlkOiBudWxsIH0pO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICdyZWxvYWQnOlxuICAgICAgICAgICAgICAgICAgICAvLyByZWxvYWRcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5mZXRjaERhdGEoKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGVkaXREb2N1bWVudDogZmFsc2UsIHBpY3R1cmVJZDogZG9jSWQgfSk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgJ0NhbmNlbCc6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBlZGl0RG9jdW1lbnQ6IGZhbHNlLCBwaWN0dXJlSWQ6IG51bGwgfSk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgJ3NhdmVkJzpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGVkaXREb2N1bWVudDogZmFsc2UsIHBpY3R1cmVJZDogZG9jSWQgfSk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog0JLQtdGA0L3QtdGCINC60L7QvNC/0L7QvdC10YIgLSDQv9Cw0L3QtdC70Ywg0LjQvdGB0YLRgNGD0LzQtdC90YLQvtCyINC00L7QutGD0LzQtdC90YLQsFxyXG4gICAgICAgICAqIEByZXR1cm5zIHtYTUx9XHJcbiAgICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ3JlbmRlckRvY1Rvb2xCYXInLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyRG9jVG9vbEJhcigpIHtcbiAgICAgICAgICAgIHZhciB0b29sYmFyUGFyYW1zID0ge1xuICAgICAgICAgICAgICAgIGJ0blN0YXJ0OiB7XG4gICAgICAgICAgICAgICAgICAgIHNob3c6IHRydWVcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGJ0bkFkZDoge1xuICAgICAgICAgICAgICAgICAgICBzaG93OiB0cnVlXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBidG5Mb2dpbjoge1xuICAgICAgICAgICAgICAgICAgICBzaG93OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZDogZmFsc2VcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGJ0bkFjY291bnQ6IHtcbiAgICAgICAgICAgICAgICAgICAgc2hvdzogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ6IGZhbHNlXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICAnZGl2JyxcbiAgICAgICAgICAgICAgICBudWxsLFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgICAgICdkaXYnLFxuICAgICAgICAgICAgICAgICAgICB7IHN0eWxlOiBzdHlsZXMuZG9jUm93IH0sXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgICAgICAgICBUb29sYmFyQ29udGFpbmVyLFxuICAgICAgICAgICAgICAgICAgICAgICAgeyByZWY6ICd0b29sYmFyQ29udGFpbmVyJyB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChCdG5BZGQsIHsgb25DbGljazogdGhpcy5idG5BZGRDbGljayxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaG93OiB0b29sYmFyUGFyYW1zWydidG5BZGQnXS5zaG93LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGU6IHRvb2xiYXJQYXJhbXNbJ2J0bkFkZCddLmRpc2FibGVkIH0pXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdidG5BZGRDbGljaycsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBidG5BZGRDbGljaygpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdtYWluIGJ0bkFkZENsaWNrJyk7XG4gICAgICAgICAgICB0aGlzLmZldGNoRGF0YSgpO1xuICAgICAgICAgICAgdGhpcy5mb3JjZVVwZGF0ZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog0L/RgNC4INC90LXQvtCx0YXQvtC00LjQvNC+0YHRgtC4INC/0L7QtNCz0YDRg9GF0LfQuNGCINC90YPQttC90YPRjiDQsdC40LHQu9C40L7RgtC10LrRg1xyXG4gICAgICAgICAqIEBwYXJhbSBsaWJyYXJ5XHJcbiAgICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2xvYWRMaWJzJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGxvYWRMaWJzKGV2ZW50LCBsaWJyYXJ5KSB7XG4gICAgICAgICAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgICAgICAgICAgLy8gMS4g0LXRgdC70Lgg0LHQuNCx0LvQuNC+0YLQtdC60LAg0L3QtSDQt9Cw0LPRgNGD0LbQtdC90LAsINCz0YDRg9C30LjQvFxuICAgICAgICAgICAgdmFyIGxpYiA9IFtdO1xuICAgICAgICAgICAgaWYgKGxpYnJhcnkgPT09ICdhdXRob3JzJykge1xuICAgICAgICAgICAgICAgIGxpYiA9IHRoaXMucHJvcHMuc3RvcmUuZ2V0U3RhdGUoKS5hdXRob3JzLmF1dGhvcnM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIWxpYiB8fCAhbGliLmxlbmd0aCB8fCBldmVudCA9PT0gJ3JlbG9hZCcpIHtcbiAgICAgICAgICAgICAgICAvLyDRgdC/0YDQsNCy0L7Rh9C90LjQuiDQvdC1INC/0L7QtNCz0YDRg9C20LXQvVxuXG4gICAgICAgICAgICAgICAgdmFyIHVybCA9ICcvbWFpbi8nICsgbGlicmFyeTtcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmVkLCByZWplY3RlZCkge1xuICAgICAgICAgICAgICAgICAgICBfZmV0Y2hEYXRhWydmZXRjaERhdGFQb3N0J10odXJsKS50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2xpYiBsb2FkIHJlc3BvbnNlJywgcmVzcG9uc2UuZGF0YSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBlcnJvciBoYW5kbGluZ1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gMjAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHN0b3JlID0gX3RoaXMyLnByb3BzLnN0b3JlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vINGB0L7RhdGA0LDQvdC40Lwg0LTQsNC90L3Ri9C1INCyINGB0YLQvtGA0LVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdG9yZS5kaXNwYXRjaCh7IHR5cGU6IGxpYnJhcnksIGxpYnJhcnk6IHJlc3BvbnNlLmRhdGEuZGF0YSB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdGhpczIuZm9yY2VVcGRhdGUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlZChyZXNwb25zZS5kYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignc3RhdHVzICE9PSAyMDAnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVqZWN0ZWQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSkuY2F0Y2goZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdmZXRjaCBlcnJvcicsIGVycm9yKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFNvbWV0aGluZyBoYXBwZW5lZCBpbiBzZXR0aW5nIHVwIHRoZSByZXF1ZXN0IHRoYXQgdHJpZ2dlcmVkIGFuIEVycm9yXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVqZWN0ZWQoZXJyb3IpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gMi8g0LXRgdC70Lgg0L3QsNC00L4g0L7QsdC90L7QstC40YLRjCwg0L7QsdC90L7QstC70Y/QtdC8XG4gICAgICAgIH1cblxuICAgICAgICAvKipcclxuICAgICAgICAgKiDQt9Cw0LPRgNGD0LfQutCwINC00LDQvdC90YvRhVxyXG4gICAgICAgICAqIEByZXR1cm5zIHsqfFByb21pc2U8QXhpb3NSZXNwb25zZTx1bmtub3duPiB8IG5ldmVyPn1cclxuICAgICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnZmV0Y2hEYXRhJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGZldGNoRGF0YSh1cmwpIHtcbiAgICAgICAgICAgIHZhciBfdGhpczMgPSB0aGlzO1xuXG4gICAgICAgICAgICB2YXIgVVJMID0gJy9tYWluL2RhdGEvJztcbiAgICAgICAgICAgIGlmICh0aGlzLnN0YXRlLmFjdGl2ZUNvbXBvbmVudCAhPT0gJ3BpY3R1cmVzJykge1xuICAgICAgICAgICAgICAgIFVSTCA9ICcvbWFpbi8nICsgdGhpcy5zdGF0ZS5hY3RpdmVDb21wb25lbnQudG9Mb3dlckNhc2UoKSArICcvJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vINC10YHQu9C4INC30LDQtNCw0L0g0LDQtNGA0LXRgSwg0LjRgdC/0L7Qu9GM0LfRg9C10Lwg0LXQs9C+XG4gICAgICAgICAgICBpZiAodXJsKSB7XG4gICAgICAgICAgICAgICAgVVJMID0gdXJsO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zb2xlLmxvZygndGhpcy5zdGF0ZS5hY3RpdmVDb21wb25lbnQnLCB0aGlzLnN0YXRlLmFjdGl2ZUNvbXBvbmVudCwgVVJMKTtcbiAgICAgICAgICAgIHZhciB1c2VyID0gdGhpcy5wcm9wcy5zdG9yZS5nZXRTdGF0ZSgpLnN0YXR1c2VzLnVzZXI7XG4gICAgICAgICAgICB2YXIgYWRkaXRpb25hbEZpbHRlcnMgPSB0aGlzLnByb3BzLnN0b3JlLmdldFN0YXRlKCkuZmlsdGVycy5maWx0ZXIuYWRkaXRpb25hbEZpbHRlcjtcbiAgICAgICAgICAgIHZhciBmaWx0ZXIgPSB0aGlzLnByb3BzLnN0b3JlLmdldFN0YXRlKCkuZmlsdGVycy5maWx0ZXIuc2VhcmNoVGV4dDtcbiAgICAgICAgICAgIHZhciBwYXJhbXMgPSB7IGZpbHRlcjogZmlsdGVyLCBhZGRpdGlvbmFsRmlsdGVyczogYWRkaXRpb25hbEZpbHRlcnMsIHVzZXI6IHVzZXIgfTtcblxuICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlZCwgcmVqZWN0ZWQpIHtcblxuICAgICAgICAgICAgICAgIF9mZXRjaERhdGFbJ2ZldGNoRGF0YVBvc3QnXShVUkwsIHBhcmFtcykudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3Jlc3BvbnNlJywgcmVzcG9uc2UpO1xuICAgICAgICAgICAgICAgICAgICAvLyBlcnJvciBoYW5kbGluZ1xuICAgICAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSAyMDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBzdG9yZSA9IF90aGlzMy5wcm9wcy5zdG9yZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vINGB0L7RhdGA0LDQvdC40Lwg0LTQsNC90L3Ri9C1INCyINGB0YLQvtGA0LVcbiAgICAgICAgICAgICAgICAgICAgICAgIHN3aXRjaCAoX3RoaXMzLnN0YXRlLmFjdGl2ZUNvbXBvbmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ3BpY3R1cmVzJzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3BpY3R1cmVzIGRpc3BhdGNoIGNhbGxlZCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RvcmUuZGlzcGF0Y2goeyB0eXBlOiAncGljdHVyZXMnLCBwaWN0dXJlczogcmVzcG9uc2UuZGF0YS5kYXRhIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdUQU9UTFVTX0xPR0lOJzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1RBT1RMVVNfTE9HSU4gZGlzcGF0Y2ggY2FsbGVkJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdG9yZS5kaXNwYXRjaCh7IHR5cGU6ICd1c2VyQXBwbGljYXRpb25zJywgdXNlckFwcGxpY2F0aW9uczogcmVzcG9uc2UuZGF0YS5kYXRhIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdERUFMUyc6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdERUFMUyBkaXNwYXRjaCBjYWxsZWQnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0b3JlLmRpc3BhdGNoKHsgdHlwZTogJ2RlYWxzJywgZGVhbHM6IHJlc3BvbnNlLmRhdGEuZGF0YSB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnQVVUSE9SUyc6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdBVVRIT1JTJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdG9yZS5kaXNwYXRjaCh7IHR5cGU6ICdhdXRob3JzJywgbGlicmFyeTogcmVzcG9uc2UuZGF0YS5kYXRhIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vINC90LDQstC10YDQvdC+0LUgcGljdHVyZVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMzLmZvcmNlVXBkYXRlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlZChyZXNwb25zZS5kYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ3N0YXR1cyAhPT0gMjAwJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVqZWN0ZWQoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pLmNhdGNoKGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICBsZXQgc3RhdGUgPSB0aGlzLnByb3BzLnN0b3JlLmdldFN0YXRlKClcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignZ290IGZldGNoIGVycm9yJywgZXJyb3IsIFVSTCwgcGFyYW1zKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gU29tZXRoaW5nIGhhcHBlbmVkIGluIHNldHRpbmcgdXAgdGhlIHJlcXVlc3QgdGhhdCB0cmlnZ2VyZWQgYW4gRXJyb3JcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlamVjdGVkKGVycm9yKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfV0pO1xuXG4gICAgcmV0dXJuIFJlZ2lzdGVyO1xufShSZWFjdC5QdXJlQ29tcG9uZW50KTtcblxubW9kdWxlLmV4cG9ydHMgPSBSZWdpc3RlcjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2Zyb250ZW5kL2RvY3MvbWFpbi9pbmRleC5qc3hcbi8vIG1vZHVsZSBpZCA9IDM3N1xuLy8gbW9kdWxlIGNodW5rcyA9IDMiLCIndXNlIHN0cmljdCc7XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKCFzZWxmKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxudmFyIFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcbnZhciBzdHlsZXMgPSByZXF1aXJlKCcuL3N0eWxlcycpO1xudmFyIFBpY3R1cmVDb21wb25lbnQgPSByZXF1aXJlKCcuL3BpY3R1cmUtY29tcG9uZW50LmpzeCcpO1xudmFyIERlYWxDb21wb25lbnQgPSByZXF1aXJlKCcuL2RlYWwtY29tcG9uZW50LmpzeCcpO1xuXG4vKipcclxuICog0JrQu9Cw0YHRgSDRgNC10LDQu9C40LfRg9C10YIg0LTQvtC60YPQvNC10L3RgiDRgdC/0YDQsNCy0L7Rh9C90LjQutCwINC/0YDQuNC30L3QsNC60L7Qsi5cclxuICovXG5cbnZhciBSZWdpc3RlckNvbXBvbmVudCA9IGZ1bmN0aW9uIChfUmVhY3QkUHVyZUNvbXBvbmVudCkge1xuICAgIF9pbmhlcml0cyhSZWdpc3RlckNvbXBvbmVudCwgX1JlYWN0JFB1cmVDb21wb25lbnQpO1xuXG4gICAgZnVuY3Rpb24gUmVnaXN0ZXJDb21wb25lbnQocHJvcHMpIHtcbiAgICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFJlZ2lzdGVyQ29tcG9uZW50KTtcblxuICAgICAgICB2YXIgX3RoaXMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCAoUmVnaXN0ZXJDb21wb25lbnQuX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihSZWdpc3RlckNvbXBvbmVudCkpLmNhbGwodGhpcywgcHJvcHMpKTtcblxuICAgICAgICBfdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIHdhcm5pbmc6IG51bGwsXG4gICAgICAgICAgICBpbml0TG9hZDogZmFsc2UsXG4gICAgICAgICAgICBwaWN0dXJlczogW10sXG4gICAgICAgICAgICB1c2VyOiB7fSxcbiAgICAgICAgICAgIGVkaXREb2N1bWVudDogZmFsc2UsXG4gICAgICAgICAgICBzYWxlRG9jdW1lbnQ6IGZhbHNlLFxuICAgICAgICAgICAgcGljdHVyZUlkOiBudWxsXG5cbiAgICAgICAgfTtcbiAgICAgICAgX3RoaXMuYnRuQ2xpY2tIYW5kbGVyID0gX3RoaXMuYnRuQ2xpY2tIYW5kbGVyLmJpbmQoX3RoaXMpO1xuXG4gICAgICAgIC8v0L/QvtC00L/QuNGB0YvQstCw0LXQvNGB0Y8g0L3QsCDQuNC30LzQtdC90LXQvdC40Y8g0LIg0YHRgtC+0YDQtVxuICAgICAgICB2YXIgc3RvcmUgPSBfdGhpcy5wcm9wcy5zdG9yZTtcbiAgICAgICAgaWYgKHN0b3JlKSB7XG4gICAgICAgICAgICBzdG9yZS5zdWJzY3JpYmUoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHZhciBwaWN0dXJlcyA9IHN0b3JlLmdldFN0YXRlKCkucGljdHVyZXMucGljdHVyZXM7XG4gICAgICAgICAgICAgICAgdmFyIHVzZXIgPSBzdG9yZS5nZXRTdGF0ZSgpLnN0YXR1c2VzLnVzZXI7XG5cbiAgICAgICAgICAgICAgICBpZiAoSlNPTi5zdHJpbmdpZnkocGljdHVyZXMpICE9PSBKU09OLnN0cmluZ2lmeShfdGhpcy5zdGF0ZS5waWN0dXJlcykgfHwgSlNPTi5zdHJpbmdpZnkodXNlcikgIT09IEpTT04uc3RyaW5naWZ5KF90aGlzLnN0YXRlLnVzZXIpKSB7XG4gICAgICAgICAgICAgICAgICAgIF90aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBpY3R1cmVzOiBwaWN0dXJlcyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHVzZXI6IHVzZXJcbiAgICAgICAgICAgICAgICAgICAgfSwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMuZm9yY2VVcGRhdGUoKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cblxuICAgIF9jcmVhdGVDbGFzcyhSZWdpc3RlckNvbXBvbmVudCwgW3tcbiAgICAgICAga2V5OiAncmVuZGVyJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgICAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgICAgICAgICB2YXIgQ29tcG9uZW50ID0gdm9pZCAwO1xuICAgICAgICAgICAgdmFyIHBpY3R1cmVzID0gdGhpcy5zdGF0ZS5waWN0dXJlcztcbiAgICAgICAgICAgIGlmICghcGljdHVyZXMubGVuZ3RoICYmIHRoaXMucHJvcHMuc3RvcmUpIHtcbiAgICAgICAgICAgICAgICAvLyDQv9C+0LTQs9GA0YPQt9C40Lwg0LjQtyDRgdGC0L7RgNCwXG4gICAgICAgICAgICAgICAgcGljdHVyZXMgPSB0aGlzLnByb3BzLnN0b3JlLmdldFN0YXRlKCkucGljdHVyZXMucGljdHVyZXM7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHZhciBsb2dlZEluID0gZmFsc2U7XG4gICAgICAgICAgICBpZiAodGhpcy5wcm9wcy5zdG9yZSkge1xuICAgICAgICAgICAgICAgIHZhciB1c2VyID0gdGhpcy5wcm9wcy5zdG9yZS5nZXRTdGF0ZSgpLnN0YXR1c2VzLnVzZXI7XG4gICAgICAgICAgICAgICAgbG9nZWRJbiA9IHVzZXIgJiYgdXNlci5pZCA/IHRydWUgOiBmYWxzZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc29sZS5sb2coJ3JlbmRlciAnLCBwaWN0dXJlcyk7XG4gICAgICAgICAgICBpZiAocGljdHVyZXMgJiYgcGljdHVyZXMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgQ29tcG9uZW50ID0gcGljdHVyZXMubWFwKGZ1bmN0aW9uIChwaWN0dXJlLCBpZHgpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgICAgICAgICAnZGl2JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgc3R5bGU6IHN0eWxlcy5kb2NSb3csIGtleTogcGljdHVyZS5pZCB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnZGl2JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHN0eWxlOiBzdHlsZXMuZG9jQ29sdW1uIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2RpdicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3R5bGU6IHN0eWxlcy5mcmFtZSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KCdpbWcnLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM6ICdkYXRhOmltYWdlL2pwZWc7YmFzZTY0LC8nICsgcGljdHVyZS5maWxlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0OiAnSW1hZ2UnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OiBwaWN0dXJlLmlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU6IHN0eWxlcy5pbWcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmOiAnL21haW4vJyArIHBpY3R1cmUuaWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnZGl2JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHN0eWxlOiBzdHlsZXMuZG9jQ29sdW1uIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2RpdicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3R5bGU6IHN0eWxlcy5kb2NSb3csIGtleTogcGljdHVyZS5pZCB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2dlZEluID8gUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdidXR0b24nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlOiBzdHlsZXMuYnRuRWRpdCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrOiBmdW5jdGlvbiBvbkNsaWNrKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3RoaXMyLmJ0bkNsaWNrSGFuZGxlcignZWRpdCcsIGlkeCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkRvdWJsZUNsaWNrOiBmdW5jdGlvbiBvbkRvdWJsZUNsaWNrKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3RoaXMyLmJ0bkNsaWNrSGFuZGxlcignZWRpdCcsIGlkeCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2ltZycsIHsgcmVmOiAnaW1hZ2UnLCBzcmM6IHN0eWxlcy5pY29uc1snZWRpdCddIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiBudWxsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2dlZEluICYmIHBpY3R1cmUuc3RhdHVzID09PSAxID8gUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdidXR0b24nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlOiBzdHlsZXMuYnRuU2FsZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrOiBmdW5jdGlvbiBvbkNsaWNrKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3RoaXMyLmJ0bkNsaWNrSGFuZGxlcignc2FsZScsIGlkeCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkRvdWJsZUNsaWNrOiBmdW5jdGlvbiBvbkRvdWJsZUNsaWNrKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3RoaXMyLmJ0bkNsaWNrSGFuZGxlcignc2FsZScsIGlkeCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2ltZycsIHsgcmVmOiAnaW1hZ2UnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYzogc3R5bGVzLmljb25zWydzYWxlJ11cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IG51bGxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdzcGFuJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ0NvZGU6ICdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JywgeyB2YWx1ZTogcGljdHVyZS5rb29kIHx8ICcnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2tvb2QnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3NwYW4nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBudWxsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnRGVzY3JpcHRpb246J1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudCgnaW5wdXQnLCB7IHZhbHVlOiBwaWN0dXJlLmRlc2NyaXB0aW9uIHx8ICcnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2Rlc2NyaXB0aW9uJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdzcGFuJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ0F1dGhvcjonXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KCdpbnB1dCcsIHsgdmFsdWU6IHBpY3R1cmUuYXV0aG9yIHx8ICcnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ0F1dGhvcidcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnc3BhbicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG51bGwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdQcmljZTonXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KCdpbnB1dCcsIHsgdmFsdWU6IHBpY3R1cmUucHJpY2UgfHwgJycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAnUHJpY2UnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3NwYW4nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBudWxsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnU3RhdHVzOidcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JywgeyB2YWx1ZTogcGljdHVyZS5zdGF0dXNfbmFtZSB8fCAnJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdTdGF0dXMnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgQ29tcG9uZW50ID0gUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICAgICAgJ2RpdicsXG4gICAgICAgICAgICAgICAgICAgIG51bGwsXG4gICAgICAgICAgICAgICAgICAgICdQaWN0dXJlcyBhcmUgbG9hZGluZydcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIHBpY3R1cmVJZCA9IHZvaWQgMDtcbiAgICAgICAgICAgIGlmICh0aGlzLnByb3BzLnN0b3JlKSB7XG4gICAgICAgICAgICAgICAgcGljdHVyZUlkID0gdGhpcy5wcm9wcy5zdG9yZS5nZXRTdGF0ZSgpLnN0YXR1c2VzLnBpY3R1cmVJZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICdkaXYnLFxuICAgICAgICAgICAgICAgIG51bGwsXG4gICAgICAgICAgICAgICAgQ29tcG9uZW50LFxuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuZWRpdERvY3VtZW50ID8gUmVhY3QuY3JlYXRlRWxlbWVudChQaWN0dXJlQ29tcG9uZW50LCB7XG4gICAgICAgICAgICAgICAgICAgIHN0b3JlOiB0aGlzLnByb3BzLnN0b3JlLFxuICAgICAgICAgICAgICAgICAgICBpZDogcGljdHVyZUlkLFxuICAgICAgICAgICAgICAgICAgICBzaG93OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBidG5DbGlja0V2ZW50SGFuZGxlcjogdGhpcy5wcm9wcy5idG5DbGlja0V2ZW50SGFuZGxlclxuICAgICAgICAgICAgICAgIH0pIDogbnVsbCxcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnNhbGVEb2N1bWVudCA/IFJlYWN0LmNyZWF0ZUVsZW1lbnQoRGVhbENvbXBvbmVudCwge1xuICAgICAgICAgICAgICAgICAgICBzdG9yZTogdGhpcy5wcm9wcy5zdG9yZSxcbiAgICAgICAgICAgICAgICAgICAgaWQ6IHBpY3R1cmVJZCxcbiAgICAgICAgICAgICAgICAgICAgc2hvdzogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgYnRuQ2xpY2tFdmVudEhhbmRsZXI6IHRoaXMucHJvcHMuYnRuQ2xpY2tFdmVudEhhbmRsZXJcbiAgICAgICAgICAgICAgICB9KSA6IG51bGxcbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2J0bkNsaWNrSGFuZGxlcicsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBidG5DbGlja0hhbmRsZXIoZXZlbnQsIGlkeCkge1xuICAgICAgICAgICAgdmFyIHBpY3R1cmVzID0gdGhpcy5wcm9wcy5zdG9yZS5nZXRTdGF0ZSgpLnBpY3R1cmVzLnBpY3R1cmVzO1xuICAgICAgICAgICAgdmFyIHBpY3R1cmVJZCA9IHBpY3R1cmVzW2lkeF0uaWQ7XG5cbiAgICAgICAgICAgIHRoaXMucHJvcHMuc3RvcmUuZGlzcGF0Y2goeyB0eXBlOiAncGljdHVyZUlkJywgcGljdHVyZUlkOiBwaWN0dXJlSWQgfSk7XG4gICAgICAgICAgICBzd2l0Y2ggKGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgY2FzZSAnYnRuQWRkJzpcbiAgICAgICAgICAgICAgICAgICAgLy8g0L3QvtCy0LDRjyDQutCw0YDRgtC40L3QutCwXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBlZGl0RG9jdW1lbnQ6IHRydWUsIHBpY3R1cmVJZDogbnVsbCB9KTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAnZWRpdCc6XG4gICAgICAgICAgICAgICAgICAgIC8vINC80LXQvdGP0LXQvCDRgdGC0LDRgtGD0YEg0L7QutC90LBcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5zdG9yZS5kaXNwYXRjaCh7IHR5cGU6ICdpc1BpY3R1cmVTaG93JywgaXNQaWN0dXJlU2hvdzogdHJ1ZSB9KTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGVkaXREb2N1bWVudDogdHJ1ZSwgc2FsZURvY3VtZW50OiBmYWxzZSwgcGljdHVyZUlkOiBwaWN0dXJlSWQgfSk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgJ3NhbGUnOlxuICAgICAgICAgICAgICAgICAgICAvLyDQvNC10L3Rj9C10Lwg0YHRgtCw0YLRg9GBINC+0LrQvdCwXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuc3RvcmUuZGlzcGF0Y2goeyB0eXBlOiAnaXNQaWN0dXJlU2hvdycsIGlzUGljdHVyZVNob3c6IHRydWUgfSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzYWxlRG9jdW1lbnQ6IHRydWUsIGVkaXREb2N1bWVudDogZmFsc2UsIHBpY3R1cmVJZDogcGljdHVyZUlkIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfV0pO1xuXG4gICAgcmV0dXJuIFJlZ2lzdGVyQ29tcG9uZW50O1xufShSZWFjdC5QdXJlQ29tcG9uZW50KTtcblxubW9kdWxlLmV4cG9ydHMgPSBSZWdpc3RlckNvbXBvbmVudDtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2Zyb250ZW5kL2RvY3MvbWFpbi9yZWdpc3Rlci1jb21wb25lbnQuanN4XG4vLyBtb2R1bGUgaWQgPSAzNzhcbi8vIG1vZHVsZSBjaHVua3MgPSAzIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbnZhciBQcm9wVHlwZXMgPSByZXF1aXJlKCdwcm9wLXR5cGVzJyk7XG5cbnZhciBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0JyksXG4gICAgc3R5bGVzID0gcmVxdWlyZSgnLi9zdHlsZXMnKTtcbnZhciBmZXRjaERhdGEgPSByZXF1aXJlKCcuLy4uLy4uLy4uL2xpYnMvZmV0Y2hEYXRhJyk7XG5cbi8vY29uc3Qgc3RvcmUgPSByZXF1aXJlKCcuLy4uLy4uL3N0b3JlJyk7XG5cbnZhciBNb2RhbFBhZ2UgPSByZXF1aXJlKCcuLy4uLy4uL2NvbXBvbmVudHMvbW9kYWxwYWdlL21vZGFsUGFnZS5qc3gnKTtcblxudmFyIFBpY3R1cmUgPSBmdW5jdGlvbiAoX1JlYWN0JFB1cmVDb21wb25lbnQpIHtcbiAgICBfaW5oZXJpdHMoUGljdHVyZSwgX1JlYWN0JFB1cmVDb21wb25lbnQpO1xuXG4gICAgZnVuY3Rpb24gUGljdHVyZShwcm9wcykge1xuICAgICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgUGljdHVyZSk7XG5cbiAgICAgICAgdmFyIF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgKFBpY3R1cmUuX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihQaWN0dXJlKSkuY2FsbCh0aGlzLCBwcm9wcykpO1xuXG4gICAgICAgIF90aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgc2VsZWN0ZWRGaWxlOiAnJyxcbiAgICAgICAgICAgIHNlbGVjdGVkRmlsZXM6IG51bGwsXG4gICAgICAgICAgICBzZWxlY3RlZEZpbGVUeXBlOiAnJyxcbiAgICAgICAgICAgIHVwbG9hZGVkSW1hZ2U6IG51bGwsXG4gICAgICAgICAgICBmaWxlTmFtZTogJycsXG4gICAgICAgICAgICBzaG93OiB0cnVlLFxuICAgICAgICAgICAgaWQ6IF90aGlzLnByb3BzLmlkLFxuICAgICAgICAgICAgbGFzdElkOiAwLFxuICAgICAgICAgICAga29vZDogX3RoaXMucHJvcHMua29vZCxcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBfdGhpcy5wcm9wcy5kZXNjcmlwdGlvbixcbiAgICAgICAgICAgIGF1dGhvcl9pZDogMCxcbiAgICAgICAgICAgIGF1dGhvcjogJydcbiAgICAgICAgfTtcbiAgICAgICAgX3RoaXMub25DbGlja0hhbmRsZWQgPSBfdGhpcy5vbkNsaWNrSGFuZGxlZC5iaW5kKF90aGlzKTtcbiAgICAgICAgX3RoaXMub25DaGFuZ2VIYW5kbGVyID0gX3RoaXMub25DaGFuZ2VIYW5kbGVyLmJpbmQoX3RoaXMpO1xuICAgICAgICBfdGhpcy5mZWN0aERhdGEgPSBfdGhpcy5mZWN0aERhdGEuYmluZChfdGhpcyk7XG4gICAgICAgIF90aGlzLm9uQ2hhbmdlSW5wdXQgPSBfdGhpcy5vbkNoYW5nZUlucHV0LmJpbmQoX3RoaXMpO1xuICAgICAgICBfdGhpcy5nZXRQaWN0dXJlRnJvbVN0b3JlID0gX3RoaXMuZ2V0UGljdHVyZUZyb21TdG9yZS5iaW5kKF90aGlzKTtcblxuICAgICAgICAvL9C/0L7QtNC/0LjRgdGL0LLQsNC10LzRgdGPINC90LAg0LjQt9C80LXQvdC10L3QuNGPINCyINGB0YLQvtGA0LVcbiAgICAgICAgdmFyIHN0b3JlID0gX3RoaXMucHJvcHMuc3RvcmU7XG4gICAgICAgIGlmIChzdG9yZSkge1xuICAgICAgICAgICAgc3RvcmUuc3Vic2NyaWJlKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICB2YXIgaXNQaWN0dXJlU2hvdyA9IHN0b3JlLmdldFN0YXRlKCkuc3RhdHVzZXMuaXNQaWN0dXJlU2hvdztcbiAgICAgICAgICAgICAgICB2YXIgYXV0aG9ycyA9IHN0b3JlLmdldFN0YXRlKCkuYXV0aG9ycy5hdXRob3JzO1xuXG4gICAgICAgICAgICAgICAgX3RoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICBzaG93OiBpc1BpY3R1cmVTaG93LFxuICAgICAgICAgICAgICAgICAgICBhdXRob3JzOiBhdXRob3JzXG4gICAgICAgICAgICAgICAgfSwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICBfdGhpcy5mb3JjZVVwZGF0ZSgpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuXG4gICAgX2NyZWF0ZUNsYXNzKFBpY3R1cmUsIFt7XG4gICAgICAgIGtleTogJ2NvbXBvbmVudERpZE1vdW50JyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJvcHMuaWQpIHtcbiAgICAgICAgICAgICAgICAvLyDRgNC10LTQsNC60YLQuNGA0L7QstCw0L3QuNC1XG4gICAgICAgICAgICAgICAgdmFyIHBpY3R1cmUgPSB0aGlzLmdldFBpY3R1cmVGcm9tU3RvcmUoKTtcbiAgICAgICAgICAgICAgICBpZiAoIXBpY3R1cmUgfHwgIXBpY3R1cmUubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB2YXIgc3RvcmUgPSB0aGlzLnByb3BzLnN0b3JlO1xuICAgICAgICAgICAgICAgIC8vINC/0YDQvtCy0LXRgNC40Lwg0YHQv9GA0LDQstC+0YfQvdC40Log0LDQstGC0L7RgNC+0LJcbiAgICAgICAgICAgICAgICB2YXIgYXV0aG9ycyA9IHN0b3JlLmdldFN0YXRlKCkuYXV0aG9ycztcblxuICAgICAgICAgICAgICAgIGlmIChhdXRob3JzICYmICFhdXRob3JzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICAvLyDRgdC/0YDQsNCy0L7Rh9C90LjQuiDQv9GD0YHRgiwg0LfQsNCz0YDRg9C20LDQtdC8XG4gICAgICAgICAgICAgICAgICAgIHN0b3JlLmRpc3BhdGNoKHsgdHlwZTogJ2dldEF1dGhvcnMnLCBwYXlsb2FkOiBbXSB9KTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAga29vZDogcGljdHVyZVswXS5rb29kLFxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogcGljdHVyZVswXS5kZXNjcmlwdGlvbixcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRGaWxlOiAnZGF0YTppbWFnZS9qcGVnO2Jhc2U2NCwvJyArIHBpY3R1cmVbMF0uZmlsZSxcbiAgICAgICAgICAgICAgICAgICAgaWQ6IHBpY3R1cmVbMF0uaWQsXG4gICAgICAgICAgICAgICAgICAgIGZpbGVOYW1lOiBwaWN0dXJlWzBdLm5hbWUsXG4gICAgICAgICAgICAgICAgICAgIGF1dGhvcl9pZDogcGljdHVyZVswXS5hdXRob3JfaWRcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAncmVuZGVyJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgICAgICAgIHZhciBtaW1lVHlwZXMgPSBcIi5qcGcsIC5wbmdcIjtcbiAgICAgICAgICAgIHZhciBhdXRob3JzID0gW3sgaWQ6IDAsIGNvZGU6ICcnLCBuYW1lOiAnJyB9XS5jb25jYXQodGhpcy5wcm9wcy5zdG9yZS5nZXRTdGF0ZSgpLmF1dGhvcnMpO1xuICAgICAgICAgICAgdmFyIHBpY3R1cmUgPSB0aGlzLmdldFBpY3R1cmVGcm9tU3RvcmUoKTtcbiAgICAgICAgICAgIHZhciBwaWN0dXJlSWQgPSBwaWN0dXJlICYmIHBpY3R1cmUubGVuZ3RoID8gcGljdHVyZVswXSA6IDA7XG4gICAgICAgICAgICB2YXIgc2VsZWN0ZWRGaWxlID0gcGljdHVyZSAmJiBwaWN0dXJlLmxlbmd0aCA/ICdkYXRhOmltYWdlL2pwZWc7YmFzZTY0LC8nICsgcGljdHVyZVswXS5maWxlIDogbnVsbDtcblxuICAgICAgICAgICAgaWYgKCFwaWN0dXJlSWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICAgICAgJ2RpdicsXG4gICAgICAgICAgICAgICAgICAgIG51bGwsXG4gICAgICAgICAgICAgICAgICAgICdEYXRhIGlzIGxvYWRpbmcnXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgTW9kYWxQYWdlLFxuICAgICAgICAgICAgICAgIHsgc2hvdzogdGhpcy5zdGF0ZS5zaG93LFxuICAgICAgICAgICAgICAgICAgICBtb2RhbFBhZ2VCdG5DbGljazogdGhpcy5vbkNsaWNrSGFuZGxlZFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgIXBpY3R1cmVJZCA/IFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JywgeyB0eXBlOiAnZmlsZScsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdmaWxlJyxcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U6IHRoaXMub25DaGFuZ2VIYW5kbGVyLFxuICAgICAgICAgICAgICAgICAgICBhY2NlcHQ6IG1pbWVUeXBlcyB9KSA6IG51bGwsXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICAgICAgJ2RpdicsXG4gICAgICAgICAgICAgICAgICAgIHsgc3R5bGU6IHN0eWxlcy5kb2NSb3cgfSxcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICAgICAgICAgICdkaXYnLFxuICAgICAgICAgICAgICAgICAgICAgICAgeyBzdHlsZTogc3R5bGVzLnBpY3R1cmVGcmFtZSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgcGljdHVyZUlkID8gUmVhY3QuY3JlYXRlRWxlbWVudCgnaW1nJywge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYzogc2VsZWN0ZWRGaWxlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdDogJ0ltYWdlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6ICdpbWdfMScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU6IHN0eWxlcy5waWN0dXJlXG4gICAgICAgICAgICAgICAgICAgICAgICB9KSA6IG51bGxcbiAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICAgICAgICAgICdkaXYnLFxuICAgICAgICAgICAgICAgICAgICAgICAgeyBzdHlsZTogc3R5bGVzLmRvY0NvbHVtbiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnbGFiZWwnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG51bGwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ0tvb2Q6ICdcbiAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KCdpbnB1dCcsIHsgdHlwZTogJ3RleHQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiAna29vZCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2tvb2QnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlOiB0aGlzLm9uQ2hhbmdlSW5wdXQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHBpY3R1cmVbMF0ua29vZCB8fCAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdsYWJlbCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnRGVzY3JpcHRpb246ICdcbiAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KCdpbnB1dCcsIHsgdHlwZTogJ3RleHQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiAnZGVzY3JpcHRpb24nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdkZXNjcmlwdGlvbicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U6IHRoaXMub25DaGFuZ2VJbnB1dCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogcGljdHVyZVswXS5kZXNjcmlwdGlvbiB8fCAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdsYWJlbCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnQXRob3I6ICdcbiAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdzZWxlY3QnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgcmVmOiAnc2VsZWN0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU6IHN0eWxlcy5zZWxlY3QsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBwaWN0dXJlWzBdLmF1dGhvcl9pZCB8fCAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogJ2F1dGhvcicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdhdXRob3InLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZTogdGhpcy5vbkNoYW5nZUlucHV0IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXV0aG9ycy5tYXAoZnVuY3Rpb24gKGl0ZW0sIGluZGV4KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ29wdGlvbicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHZhbHVlOiBpdGVtLmlkIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnICcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLmNvZGUgKyAnICAnICsgaXRlbS5uYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJyAnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ29uQ2hhbmdlSW5wdXQnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gb25DaGFuZ2VJbnB1dChlKSB7XG4gICAgICAgICAgICB2YXIgZmllbGRWYWx1ZSA9IGUudGFyZ2V0LnZhbHVlO1xuICAgICAgICAgICAgdmFyIGZpZWxkTmFtZSA9IGUudGFyZ2V0Lm5hbWU7XG5cbiAgICAgICAgICAgIHN3aXRjaCAoZmllbGROYW1lKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAna29vZCc6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBrb29kOiBmaWVsZFZhbHVlIH0pO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICdkZXNjcmlwdGlvbic6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBkZXNjcmlwdGlvbjogZmllbGRWYWx1ZSB9KTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAnYXV0aG9yJzpcbiAgICAgICAgICAgICAgICAgICAgLy8g0L3QsNC50YLQuCDQuCDRgdC+0YXRgNCw0L3QuNGC0Ywg0LjQvNGPINCw0LLRgtC+0YDQsFxuICAgICAgICAgICAgICAgICAgICB2YXIgYXV0aG9yTmFtZSA9ICcnO1xuICAgICAgICAgICAgICAgICAgICBpZiAoZmllbGRWYWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGF1dGhvciA9IHRoaXMucHJvcHMuc3RvcmUuZ2V0U3RhdGUoKS5hdXRob3JzLmZpbHRlcihmdW5jdGlvbiAocm93KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJvdy5pZCA9PSBmaWVsZFZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoYXV0aG9yKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXV0aG9yTmFtZSA9IGF1dGhvclswXS5uYW1lO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBhdXRob3JfaWQ6IGZpZWxkVmFsdWUsIGF1dGhvcjogYXV0aG9yTmFtZSB9KTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ29uQ2hhbmdlSGFuZGxlcicsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBvbkNoYW5nZUhhbmRsZXIoZXZlbnQpIHtcbiAgICAgICAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgICAgICAgICB2YXIgaW1nID0gZXZlbnQudGFyZ2V0LmZpbGVzWzBdO1xuICAgICAgICAgICAgdmFyIGltZ05hbWUgPSBpbWcubmFtZTtcbiAgICAgICAgICAgIHZhciB0eXBlID0gaW1nLnR5cGU7XG5cbiAgICAgICAgICAgIHZhciByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xuICAgICAgICAgICAgcmVhZGVyLnJlYWRBc0RhdGFVUkwoZXZlbnQudGFyZ2V0LmZpbGVzWzBdKTtcblxuICAgICAgICAgICAgcmVhZGVyLm9ubG9hZCA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMyLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgdXBsb2FkZWRJbWFnZTogZS50YXJnZXQucmVzdWx0LFxuICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZEZpbGU6IFVSTC5jcmVhdGVPYmplY3RVUkwoaW1nKSxcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRGaWxlVHlwZTogdHlwZSxcbiAgICAgICAgICAgICAgICAgICAgZmlsZU5hbWU6IGltZ05hbWVcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ29uQ2xpY2tIYW5kbGVkJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIG9uQ2xpY2tIYW5kbGVkKGV2ZW50KSB7XG4gICAgICAgICAgICBpZiAoZXZlbnQgPT0gJ09rJykge1xuXG4gICAgICAgICAgICAgICAgLy8g0YHQvtGF0YDQsNC90Y/QtdC8XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuc3RhdGUuc2VsZWN0ZWRGaWxlKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZmVjdGhEYXRhKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgc2hvdzogIXRoaXMuc3RhdGUuc2hvdyB9KTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnZmVjdGhEYXRhJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGZlY3RoRGF0YSgpIHtcbiAgICAgICAgICAgIHZhciBfdGhpczMgPSB0aGlzO1xuXG4gICAgICAgICAgICB2YXIgdXNlciA9IHRoaXMucHJvcHMuc3RvcmUuZ2V0U3RhdGUoKS51c2VyO1xuICAgICAgICAgICAgdmFyIGRhdGEgPSBuZXcgRm9ybURhdGEoKTtcbiAgICAgICAgICAgIHZhciBpbWFnZSA9IG5ldyBGaWxlKFt0aGlzLnN0YXRlLnVwbG9hZGVkSW1hZ2VdLCB0aGlzLnN0YXRlLmZpbGVOYW1lKTtcbiAgICAgICAgICAgIGRhdGEuYXBwZW5kKCdmaWxlJywgaW1hZ2UsIHRoaXMuc3RhdGUuZmlsZU5hbWUpO1xuICAgICAgICAgICAgZGF0YS5hcHBlbmQoJ2tvb2QnLCB0aGlzLnN0YXRlLmtvb2QpO1xuICAgICAgICAgICAgZGF0YS5hcHBlbmQoJ2lkJywgdGhpcy5zdGF0ZS5pZCk7XG4gICAgICAgICAgICBkYXRhLmFwcGVuZCgnZGVzY3JpcHRpb24nLCB0aGlzLnN0YXRlLmRlc2NyaXB0aW9uKTtcbiAgICAgICAgICAgIGRhdGEuYXBwZW5kKCdhdXRob3JfaWQnLCB0aGlzLnN0YXRlLmF1dGhvcl9pZCA/IHRoaXMuc3RhdGUuYXV0aG9yX2lkIDogdXNlci5pZCk7XG5cbiAgICAgICAgICAgIGZldGNoRGF0YS5mZXRjaERhdGFQb3N0KCcvdXBsb2FkJywgZGF0YSwgdGhpcy5zdGF0ZS5zZWxlY3RlZEZpbGVUeXBlKS50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICBfdGhpczMuc2V0U3RhdGUoeyBpZDogcmVzdWx0LmRhdGEucmVzdWx0IH0pO1xuICAgICAgICAgICAgICAgIHZhciBzdG9yZSA9IF90aGlzMy5wcm9wcy5zdG9yZTtcbiAgICAgICAgICAgICAgICBzdG9yZS5kaXNwYXRjaCh7IHR5cGU6ICdhZGRQaWN0dXJlJywgcGljdHVyZTogcmVzdWx0LmRhdGEuZG9jZGF0YSB9KTtcbiAgICAgICAgICAgICAgICAvLyDQstGL0LfQstCw0YLRjCDQv9C10YDQtdCz0YDRg9C30LrRgyDQutCw0YDRgtC40L1cbiAgICAgICAgICAgICAgICBfdGhpczMucHJvcHMuYnRuQ2xpY2tFdmVudEhhbmRsZXIoJ3NhdmVkJywgcmVzdWx0LmRhdGEucmVzdWx0KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog0LLQtdGA0L3QtdGCINC+0LHRjNC10LrRgiDRgSDQutCw0YDRgtC40L3QvtC5XHJcbiAgICAgICAgICogQHJldHVybnMge1RbXXxBcnJheX1cclxuICAgICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnZ2V0UGljdHVyZUZyb21TdG9yZScsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRQaWN0dXJlRnJvbVN0b3JlKCkge1xuICAgICAgICAgICAgdmFyIHN0b3JlID0gdGhpcy5wcm9wcy5zdG9yZTtcbiAgICAgICAgICAgIGlmICghc3RvcmUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gW107XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgcGljdHVyZXMgPSBzdG9yZS5nZXRTdGF0ZSgpLnBpY3R1cmVzLnBpY3R1cmVzO1xuICAgICAgICAgICAgdmFyIHBpY3R1cmVJZCA9IHN0b3JlLmdldFN0YXRlKCkuc3RhdHVzZXMucGljdHVyZUlkO1xuICAgICAgICAgICAgcmV0dXJuIHBpY3R1cmVzLmZpbHRlcihmdW5jdGlvbiAocm93KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJvdy5pZCA9PT0gcGljdHVyZUlkO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XSk7XG5cbiAgICByZXR1cm4gUGljdHVyZTtcbn0oUmVhY3QuUHVyZUNvbXBvbmVudCk7XG5cblBpY3R1cmUucHJvcFR5cGVzID0ge1xuICAgIGRpc2FibGVkOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBzaG93OiBQcm9wVHlwZXMuYm9vbFxufTtcblxuUGljdHVyZS5kZWZhdWx0UHJvcHMgPSB7XG4gICAgZGlzYWJsZWQ6IGZhbHNlLnZhbHVlT2YoKSxcbiAgICBwYWdlczogW11cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gUGljdHVyZTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2Zyb250ZW5kL2RvY3MvbWFpbi9waWN0dXJlLWNvbXBvbmVudC5qc3hcbi8vIG1vZHVsZSBpZCA9IDM3OVxuLy8gbW9kdWxlIGNodW5rcyA9IDMiLCIndXNlIHN0cmljdCc7XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKCFzZWxmKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxudmFyIFByb3BUeXBlcyA9IHJlcXVpcmUoJ3Byb3AtdHlwZXMnKTtcblxudmFyIFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKSxcbiAgICBzdHlsZXMgPSByZXF1aXJlKCcuL3N0eWxlcycpO1xudmFyIGZldGNoRGF0YSA9IHJlcXVpcmUoJy4vLi4vLi4vLi4vbGlicy9mZXRjaERhdGEnKTtcblxuLy9jb25zdCBzdG9yZSA9IHJlcXVpcmUoJy4vLi4vLi4vc3RvcmUnKTtcblxudmFyIE1vZGFsUGFnZSA9IHJlcXVpcmUoJy4vLi4vLi4vY29tcG9uZW50cy9tb2RhbHBhZ2UvbW9kYWxQYWdlLmpzeCcpO1xuXG52YXIgRGVhbCA9IGZ1bmN0aW9uIChfUmVhY3QkUHVyZUNvbXBvbmVudCkge1xuICAgIF9pbmhlcml0cyhEZWFsLCBfUmVhY3QkUHVyZUNvbXBvbmVudCk7XG5cbiAgICBmdW5jdGlvbiBEZWFsKHByb3BzKSB7XG4gICAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBEZWFsKTtcblxuICAgICAgICB2YXIgX3RoaXMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCAoRGVhbC5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKERlYWwpKS5jYWxsKHRoaXMsIHByb3BzKSk7XG5cbiAgICAgICAgX3RoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBzZWxlY3RlZEZpbGU6ICcnLFxuICAgICAgICAgICAgc2VsZWN0ZWRGaWxlczogbnVsbCxcbiAgICAgICAgICAgIHNlbGVjdGVkRmlsZVR5cGU6ICcnLFxuICAgICAgICAgICAgdXBsb2FkZWRJbWFnZTogbnVsbCxcbiAgICAgICAgICAgIGZpbGVOYW1lOiAnJyxcbiAgICAgICAgICAgIHNob3c6IF90aGlzLnByb3BzLnNob3csXG4gICAgICAgICAgICBpZDogX3RoaXMucHJvcHMuaWQsXG4gICAgICAgICAgICBsYXN0SWQ6IDAsXG4gICAgICAgICAgICBrb29kOiBfdGhpcy5wcm9wcy5rb29kLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246IF90aGlzLnByb3BzLmRlc2NyaXB0aW9uLFxuICAgICAgICAgICAgYXV0aG9yX2lkOiAwLFxuICAgICAgICAgICAgYXV0aG9yOiAnJyxcbiAgICAgICAgICAgIHByaWNlOiBfdGhpcy5wcm9wcy5wcmljZVxuICAgICAgICB9O1xuICAgICAgICBfdGhpcy5vbkNsaWNrSGFuZGxlZCA9IF90aGlzLm9uQ2xpY2tIYW5kbGVkLmJpbmQoX3RoaXMpO1xuICAgICAgICAvLyAgICAgICAgdGhpcy5vbkNoYW5nZUhhbmRsZXIgPSB0aGlzLm9uQ2hhbmdlSGFuZGxlci5iaW5kKHRoaXMpO1xuICAgICAgICBfdGhpcy5mZWN0aERhdGEgPSBfdGhpcy5mZWN0aERhdGEuYmluZChfdGhpcyk7XG4gICAgICAgIF90aGlzLm9uQ2hhbmdlSW5wdXQgPSBfdGhpcy5vbkNoYW5nZUlucHV0LmJpbmQoX3RoaXMpO1xuICAgICAgICBfdGhpcy5nZXRQaWN0dXJlRnJvbVN0b3JlID0gX3RoaXMuZ2V0UGljdHVyZUZyb21TdG9yZS5iaW5kKF90aGlzKTtcblxuICAgICAgICAvL9C/0L7QtNC/0LjRgdGL0LLQsNC10LzRgdGPINC90LAg0LjQt9C80LXQvdC10L3QuNGPINCyINGB0YLQvtGA0LVcbiAgICAgICAgdmFyIHN0b3JlID0gX3RoaXMucHJvcHMuc3RvcmU7XG4gICAgICAgIGlmIChzdG9yZSkge1xuICAgICAgICAgICAgc3RvcmUuc3Vic2NyaWJlKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICB2YXIgaXNQaWN0dXJlU2hvdyA9IHN0b3JlLmdldFN0YXRlKCkuc3RhdHVzZXMuaXNQaWN0dXJlU2hvdztcbiAgICAgICAgICAgICAgICB2YXIgcGljdHVyZUlkID0gc3RvcmUuZ2V0U3RhdGUoKS5zdGF0dXNlcy5waWN0dXJlSWQ7XG4gICAgICAgICAgICAgICAgdmFyIHBpY3R1cmUgPSBfdGhpcy5nZXRQaWN0dXJlRnJvbVN0b3JlKCk7XG5cbiAgICAgICAgICAgICAgICBfdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgIHNob3c6IGlzUGljdHVyZVNob3csXG4gICAgICAgICAgICAgICAgICAgIGlkOiBwaWN0dXJlSWQsXG4gICAgICAgICAgICAgICAgICAgIGtvb2Q6IHBpY3R1cmVbMF0ua29vZCxcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IHBpY3R1cmVbMF0uZGVzY3JpcHRpb24sXG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkRmlsZTogJ2RhdGE6aW1hZ2UvanBlZztiYXNlNjQsLycgKyBwaWN0dXJlWzBdLmZpbGUsXG4gICAgICAgICAgICAgICAgICAgIGZpbGVOYW1lOiBwaWN0dXJlWzBdLm5hbWUsXG4gICAgICAgICAgICAgICAgICAgIGF1dGhvcl9pZDogcGljdHVyZVswXS5hdXRob3JfaWQsXG4gICAgICAgICAgICAgICAgICAgIHByaWNlOiBOdW1iZXIocGljdHVyZVswXS5wcmljZSkgKiAyXG4gICAgICAgICAgICAgICAgfSwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICBfdGhpcy5mb3JjZVVwZGF0ZSgpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cblxuICAgIF9jcmVhdGVDbGFzcyhEZWFsLCBbe1xuICAgICAgICBrZXk6ICdjb21wb25lbnREaWRNb3VudCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgICAgIC8vINGA0LXQtNCw0LrRgtC40YDQvtCy0LDQvdC40LVcbiAgICAgICAgICAgIHZhciBwaWN0dXJlID0gdGhpcy5nZXRQaWN0dXJlRnJvbVN0b3JlKCk7XG5cbiAgICAgICAgICAgIGlmICghcGljdHVyZSB8fCAhcGljdHVyZS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdkZWFsIGNvbXAgZGlkIG1vdW50JywgcGljdHVyZSk7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICBrb29kOiBwaWN0dXJlWzBdLmtvb2QsXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IHBpY3R1cmVbMF0uZGVzY3JpcHRpb24sXG4gICAgICAgICAgICAgICAgc2VsZWN0ZWRGaWxlOiAnZGF0YTppbWFnZS9qcGVnO2Jhc2U2NCwvJyArIHBpY3R1cmVbMF0uZmlsZSxcbiAgICAgICAgICAgICAgICBpZDogcGljdHVyZVswXS5pZCxcbiAgICAgICAgICAgICAgICBmaWxlTmFtZTogcGljdHVyZVswXS5uYW1lLFxuICAgICAgICAgICAgICAgIGF1dGhvcl9pZDogcGljdHVyZVswXS5hdXRob3JfaWQsXG4gICAgICAgICAgICAgICAgcHJpY2U6IE51bWJlcihwaWN0dXJlWzBdLnByaWNlKSAqIDJcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdyZW5kZXInLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgTW9kYWxQYWdlLFxuICAgICAgICAgICAgICAgIHsgc2hvdzogdGhpcy5zdGF0ZS5zaG93LFxuICAgICAgICAgICAgICAgICAgICBtb2RhbFBhZ2VCdG5DbGljazogdGhpcy5vbkNsaWNrSGFuZGxlZCB9LFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgICAgICdkaXYnLFxuICAgICAgICAgICAgICAgICAgICB7IHN0eWxlOiBzdHlsZXMuZG9jUm93IH0sXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgICAgICAgICAnZGl2JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgc3R5bGU6IHN0eWxlcy5waWN0dXJlRnJhbWUgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuc2VsZWN0ZWRGaWxlID8gUmVhY3QuY3JlYXRlRWxlbWVudCgnaW1nJywge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYzogdGhpcy5zdGF0ZS5zZWxlY3RlZEZpbGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0OiAnSW1hZ2UnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleTogJ2ltZ18xJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZTogc3R5bGVzLnBpY3R1cmVcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pIDogbnVsbFxuICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICAgICAgICAgJ2RpdicsXG4gICAgICAgICAgICAgICAgICAgICAgICB7IHN0eWxlOiBzdHlsZXMuZG9jQ29sdW1uIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdsYWJlbCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnS29vZDogJ1xuICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JywgeyB0eXBlOiAndGV4dCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6ICdrb29kJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAna29vZCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHRoaXMuc3RhdGUua29vZCB8fCAnJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZDogdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdsYWJlbCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnRGVzY3JpcHRpb246ICdcbiAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KCdpbnB1dCcsIHsgdHlwZTogJ3RleHQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiAnZGVzY3JpcHRpb24nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdkZXNjcmlwdGlvbicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHRoaXMuc3RhdGUuZGVzY3JpcHRpb24gfHwgJycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ6IHRydWVcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnbGFiZWwnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG51bGwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ05ldyBwcmljZTogJ1xuICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JywgeyB0eXBlOiAnbnVtYmVyJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWY6ICdwcmljZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHRoaXMuc3RhdGUucHJpY2UgfHwgMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogJ3ByaWNlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAncHJpY2UnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlOiB0aGlzLm9uQ2hhbmdlSW5wdXQgfSlcbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ29uQ2hhbmdlSW5wdXQnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gb25DaGFuZ2VJbnB1dChlKSB7XG4gICAgICAgICAgICB2YXIgZmllbGRWYWx1ZSA9IGUudGFyZ2V0LnZhbHVlO1xuICAgICAgICAgICAgdmFyIGZpZWxkTmFtZSA9IGUudGFyZ2V0Lm5hbWU7XG5cbiAgICAgICAgICAgIHN3aXRjaCAoZmllbGROYW1lKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAncHJpY2UnOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgcHJpY2U6IGZpZWxkVmFsdWUgfSk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdvbkNsaWNrSGFuZGxlZCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBvbkNsaWNrSGFuZGxlZChldmVudCkge1xuICAgICAgICAgICAgaWYgKGV2ZW50ID09ICdPaycpIHtcbiAgICAgICAgICAgICAgICAvLyDRgdC+0YXRgNCw0L3Rj9C10LxcbiAgICAgICAgICAgICAgICB0aGlzLmZlY3RoRGF0YSgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB2YXIgc3RvcmUgPSB0aGlzLnByb3BzLnN0b3JlO1xuICAgICAgICAgICAgLy8g0LzQtdC90Y/QtdC8INGB0YLQsNGC0YPRgSDQvtC60L3QsFxuICAgICAgICAgICAgc3RvcmUuZGlzcGF0Y2goeyB0eXBlOiAnaXNQaWN0dXJlU2hvdycsIGlzUGljdHVyZVNob3c6IGZhbHNlIH0pO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdmZWN0aERhdGEnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gZmVjdGhEYXRhKCkge1xuICAgICAgICAgICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICAgICAgICAgIHZhciBkYXRhID0ge1xuICAgICAgICAgICAgICAgIHBpY3R1cmVfaWQ6IHRoaXMuc3RhdGUuaWQsXG4gICAgICAgICAgICAgICAgcHJpY2U6IHRoaXMuc3RhdGUucHJpY2UsXG4gICAgICAgICAgICAgICAgdXNlcjogdGhpcy5wcm9wcy5zdG9yZS5nZXRTdGF0ZSgpLnN0YXR1c2VzLnVzZXJcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBmZXRjaERhdGEuZmV0Y2hEYXRhUG9zdCgnL21haW4vbmV3RGVhbCcsIGRhdGEpLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgIF90aGlzMi5zZXRTdGF0ZSh7IGlkOiByZXN1bHQuZGF0YS5yZXN1bHQgfSk7XG4gICAgICAgICAgICAgICAgdmFyIHN0b3JlID0gX3RoaXMyLnByb3BzLnN0b3JlO1xuICAgICAgICAgICAgICAgIC8vINCy0YvQt9C+0LLQtdC8INC/0LXRgNC10LPRgNGD0LfQutGDXG4gICAgICAgICAgICAgICAgc3RvcmUuZGlzcGF0Y2goeyB0eXBlOiAncmVsb2FkQWN0aXZlUGFnZUNvbXBvbmVudCcsIHJlbG9hZEFjdGl2ZVBhZ2VDb21wb25lbnQ6IHRydWUgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqINCy0LXRgNC90LXRgiDQvtCx0YzQtdC60YIg0YEg0LrQsNGA0YLQuNC90L7QuVxyXG4gICAgICAgICAqIEByZXR1cm5zIHtUW118QXJyYXl9XHJcbiAgICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2dldFBpY3R1cmVGcm9tU3RvcmUnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0UGljdHVyZUZyb21TdG9yZSgpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdnZXRQaWN0dXJlRnJvbVN0b3JlJyk7XG4gICAgICAgICAgICB2YXIgc3RvcmUgPSB0aGlzLnByb3BzLnN0b3JlO1xuICAgICAgICAgICAgaWYgKCFzdG9yZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBbXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBwaWN0dXJlcyA9IHN0b3JlLmdldFN0YXRlKCkucGljdHVyZXMucGljdHVyZXM7XG4gICAgICAgICAgICB2YXIgcGljdHVyZUlkID0gc3RvcmUuZ2V0U3RhdGUoKS5zdGF0dXNlcy5waWN0dXJlSWQ7XG4gICAgICAgICAgICBpZiAoIXBpY3R1cmVJZCB8fCAhcGljdHVyZXMgfHwgIXBpY3R1cmVzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHBpY3R1cmVzLmZpbHRlcihmdW5jdGlvbiAocm93KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJvdy5pZCA9PSBwaWN0dXJlSWQ7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnbG9hZFBpY3R1cmUnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gbG9hZFBpY3R1cmUoKSB7XG4gICAgICAgICAgICAvLyAgICAgICAgbGV0IHNvdXJjZSA9IHJlcXVpcmUoJy4vLi4vLi4vLi4vcHVibGljL2ltYWdlcy9hcnRfMS5qcGcnKS5kZWZhdWx0XG4gICAgICAgICAgICByZXR1cm4gc291cmNlO1xuICAgICAgICB9XG4gICAgfV0pO1xuXG4gICAgcmV0dXJuIERlYWw7XG59KFJlYWN0LlB1cmVDb21wb25lbnQpO1xuXG5EZWFsLnByb3BUeXBlcyA9IHtcbiAgICBkaXNhYmxlZDogUHJvcFR5cGVzLmJvb2wsXG4gICAgc2hvdzogUHJvcFR5cGVzLmJvb2xcbn07XG5cbkRlYWwuZGVmYXVsdFByb3BzID0ge1xuICAgIGRpc2FibGVkOiBmYWxzZS52YWx1ZU9mKCksXG4gICAgcGFnZXM6IFtdXG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IERlYWw7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9mcm9udGVuZC9kb2NzL21haW4vZGVhbC1jb21wb25lbnQuanN4XG4vLyBtb2R1bGUgaWQgPSAzODBcbi8vIG1vZHVsZSBjaHVua3MgPSAzIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbnZhciBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG52YXIgc3R5bGVzID0gcmVxdWlyZSgnLi9zdHlsZXMnKTtcbnZhciBfZmV0Y2hEYXRhID0gcmVxdWlyZSgnLi8uLi8uLi8uLi9saWJzL2ZldGNoRGF0YScpO1xudmFyIEF1dGhvckNvbXBvbmVudCA9IHJlcXVpcmUoJy4vYXV0aG9yLWNvbXBvbmVudC5qc3gnKTtcblxuLyoqXHJcbiAqINCa0LvQsNGB0YEg0YDQtdCw0LvQuNC30YPQtdGCINC00L7QutGD0LzQtdC90YIg0YHQv9GA0LDQstC+0YfQvdC40LrQsCDQv9GA0LjQt9C90LDQutC+0LIuXHJcbiAqL1xuXG52YXIgVXNlckFwcGxpY2F0aW9uc0NvbXBvbmVudCA9IGZ1bmN0aW9uIChfUmVhY3QkUHVyZUNvbXBvbmVudCkge1xuICAgIF9pbmhlcml0cyhVc2VyQXBwbGljYXRpb25zQ29tcG9uZW50LCBfUmVhY3QkUHVyZUNvbXBvbmVudCk7XG5cbiAgICBmdW5jdGlvbiBVc2VyQXBwbGljYXRpb25zQ29tcG9uZW50KHByb3BzKSB7XG4gICAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBVc2VyQXBwbGljYXRpb25zQ29tcG9uZW50KTtcblxuICAgICAgICB2YXIgX3RoaXMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCAoVXNlckFwcGxpY2F0aW9uc0NvbXBvbmVudC5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKFVzZXJBcHBsaWNhdGlvbnNDb21wb25lbnQpKS5jYWxsKHRoaXMsIHByb3BzKSk7XG5cbiAgICAgICAgX3RoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICB3YXJuaW5nOiBudWxsLFxuICAgICAgICAgICAgaW5pdExvYWQ6IGZhbHNlLFxuICAgICAgICAgICAgdXNlckFwcGxpY2F0aW9uczogW10sXG4gICAgICAgICAgICB1c2VyOiB7fSxcbiAgICAgICAgICAgIGluZm86IG51bGwsXG4gICAgICAgICAgICBlZGl0RG9jdW1lbnQ6IGZhbHNlXG5cbiAgICAgICAgfTtcbiAgICAgICAgX3RoaXMuYnRuQ2xpY2tIYW5kbGVyID0gX3RoaXMuYnRuQ2xpY2tIYW5kbGVyLmJpbmQoX3RoaXMpO1xuICAgICAgICBfdGhpcy5yZW5kZXJHcmlkQ29tcG9uZW50ID0gX3RoaXMucmVuZGVyR3JpZENvbXBvbmVudC5iaW5kKF90aGlzKTtcbiAgICAgICAgX3RoaXMuZmV0Y2hEYXRhID0gX3RoaXMuZmV0Y2hEYXRhLmJpbmQoX3RoaXMpO1xuXG4gICAgICAgIC8v0L/QvtC00L/QuNGB0YvQstCw0LXQvNGB0Y8g0L3QsCDQuNC30LzQtdC90LXQvdC40Y8g0LIg0YHRgtC+0YDQtVxuICAgICAgICB2YXIgc3RvcmUgPSBfdGhpcy5wcm9wcy5zdG9yZTtcbiAgICAgICAgaWYgKHN0b3JlKSB7XG4gICAgICAgICAgICBzdG9yZS5zdWJzY3JpYmUoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHZhciB1c2VyQXBwbGljYXRpb25zID0gc3RvcmUuZ2V0U3RhdGUoKS51c2VyQXBwbGljYXRpb25zLnVzZXJBcHBsaWNhdGlvbnM7XG4gICAgICAgICAgICAgICAgdmFyIHVzZXIgPSBzdG9yZS5nZXRTdGF0ZSgpLnN0YXR1c2VzLnVzZXI7XG5cbiAgICAgICAgICAgICAgICBpZiAoSlNPTi5zdHJpbmdpZnkodXNlckFwcGxpY2F0aW9ucykgIT09IEpTT04uc3RyaW5naWZ5KF90aGlzLnN0YXRlLnVzZXJBcHBsaWNhdGlvbnMpIHx8IEpTT04uc3RyaW5naWZ5KHVzZXIpICE9PSBKU09OLnN0cmluZ2lmeShfdGhpcy5zdGF0ZS51c2VyKSkge1xuICAgICAgICAgICAgICAgICAgICBfdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICB1c2VyQXBwbGljYXRpb25zOiB1c2VyQXBwbGljYXRpb25zLFxuICAgICAgICAgICAgICAgICAgICAgICAgdXNlcjogdXNlclxuICAgICAgICAgICAgICAgICAgICB9LCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5mb3JjZVVwZGF0ZSgpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuXG4gICAgX2NyZWF0ZUNsYXNzKFVzZXJBcHBsaWNhdGlvbnNDb21wb25lbnQsIFt7XG4gICAgICAgIGtleTogJ3JlbmRlcicsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICAgICAgICB2YXIgQ29tcG9uZW50ID0gdm9pZCAwO1xuICAgICAgICAgICAgdmFyIHVzZXJBcHBsaWNhdGlvbnMgPSB0aGlzLnN0YXRlLnVzZXJBcHBsaWNhdGlvbnM7XG4gICAgICAgICAgICBpZiAoIXVzZXJBcHBsaWNhdGlvbnMubGVuZ3RoICYmIHRoaXMucHJvcHMuc3RvcmUpIHtcbiAgICAgICAgICAgICAgICAvLyDQv9C+0LTQs9GA0YPQt9C40Lwg0LjQtyDRgdGC0L7RgNCwXG4gICAgICAgICAgICAgICAgdXNlckFwcGxpY2F0aW9ucyA9IHRoaXMucHJvcHMuc3RvcmUuZ2V0U3RhdGUoKS51c2VyQXBwbGljYXRpb25zLnVzZXJBcHBsaWNhdGlvbnM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodXNlckFwcGxpY2F0aW9ucyAmJiB1c2VyQXBwbGljYXRpb25zLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIENvbXBvbmVudCA9IHRoaXMucmVuZGVyR3JpZENvbXBvbmVudCh1c2VyQXBwbGljYXRpb25zKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgQ29tcG9uZW50ID0gUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICAgICAgJ2RpdicsXG4gICAgICAgICAgICAgICAgICAgIG51bGwsXG4gICAgICAgICAgICAgICAgICAgICdEYXRhIGFyZSBsb2FkaW5nJ1xuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gQ29tcG9uZW50O1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdyZW5kZXJHcmlkQ29tcG9uZW50JyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlckdyaWRDb21wb25lbnQoZGF0YSkge1xuICAgICAgICAgICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdyZW5kZXJHcmlkQ29tcG9uZW50Jyk7XG5cbiAgICAgICAgICAgIHZhciB1c2VyID0gdGhpcy5zdGF0ZS51c2VyO1xuXG4gICAgICAgICAgICBpZiAoIXVzZXIpIHtcbiAgICAgICAgICAgICAgICAvLyDQv9C+0LTQs9GA0YPQt9C40Lwg0LjQtyDRgdGC0L7RgNCwXG4gICAgICAgICAgICAgICAgdXNlciA9IHRoaXMucHJvcHMuc3RvcmUuZ2V0U3RhdGUoKS5zdGF0dXNlcy51c2VyO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB2YXIgbG9nZWRJbiA9IHVzZXIgJiYgdXNlci5pZCA/IHRydWUgOiBmYWxzZTtcbiAgICAgICAgICAgIHZhciBpc0FkbWluID0gdXNlciAmJiB1c2VyLmlzX2FkbWluID8gdHJ1ZSA6IGZhbHNlO1xuXG4gICAgICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICAnZGl2JyxcbiAgICAgICAgICAgICAgICB7IHN0eWxlOiBzdHlsZXMuZ3JpZC5ncmlkQ29udGFpbmVyIH0sXG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5pbmZvID8gUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICAgICAgJ2RpdicsXG4gICAgICAgICAgICAgICAgICAgIG51bGwsXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgICAgICAgICAnc3BhbicsXG4gICAgICAgICAgICAgICAgICAgICAgICBudWxsLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5pbmZvXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICApIDogbnVsbCxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICAgICAndGFibGUnLFxuICAgICAgICAgICAgICAgICAgICB7IHJlZjogJ2RhdGFHcmlkVGFibGUnLCBzdHlsZTogc3R5bGVzLmdyaWQubWFpblRhYmxlLCBvbktleVByZXNzOiB0aGlzLmhhbmRsZUtleURvd24gfSxcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICAgICAgICAgICd0Ym9keScsXG4gICAgICAgICAgICAgICAgICAgICAgICBudWxsLFxuICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAndHInLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG51bGwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3RoJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBzdHlsZTogc3R5bGVzLmdyaWQubWFpblRhYmxlLnRoIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdMb2dpbidcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICd0aCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3R5bGU6IHN0eWxlcy5ncmlkLm1haW5UYWJsZS50aCB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnVXNlciBuYW1lJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3RoJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBzdHlsZTogc3R5bGVzLmdyaWQubWFpblRhYmxlLnRoIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdFbWFpbCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICd0aCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3R5bGU6IHN0eWxlcy5ncmlkLm1haW5UYWJsZS50aCB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnU3RhdHVzJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgZGF0YS5tYXAoZnVuY3Rpb24gKHJvdykge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3RyJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBudWxsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICd0ZCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3R5bGU6IHN0eWxlcy5ncmlkLm1haW5UYWJsZS50ZCB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3cua2FzdXRhamFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICd0ZCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3R5bGU6IHN0eWxlcy5ncmlkLm1haW5UYWJsZS50ZCB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3cubmltaVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3RkJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBzdHlsZTogc3R5bGVzLmdyaWQubWFpblRhYmxlLnRkIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvdy5lbWFpbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3RkJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBzdHlsZTogc3R5bGVzLmdyaWQubWFpblRhYmxlLnRkIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvdy5zdGF0dXNfbmFtZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3RkJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBzdHlsZTogc3R5bGVzLmdyaWQubWFpblRhYmxlLnRkQnV0dG9ucyB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2dlZEluID8gUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdidXR0b24nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlOiBzdHlsZXMuYnRuRWRpdCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrOiBmdW5jdGlvbiBvbkNsaWNrKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3RoaXMyLmJ0bkNsaWNrSGFuZGxlcignZWRpdCcsIHJvdy5pZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkRvdWJsZUNsaWNrOiBmdW5jdGlvbiBvbkRvdWJsZUNsaWNrKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3RoaXMyLmJ0bkNsaWNrSGFuZGxlcignZWRpdCcsIHJvdy5pZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2ltZycsIHsgcmVmOiAnaW1hZ2UnLCBzcmM6IHN0eWxlcy5pY29uc1snZWRpdCddIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiBudWxsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc0FkbWluICYmIHJvdy5zdGF0dXMgPT09IDAgPyBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2J1dHRvbicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU6IHN0eWxlcy5idXR0b25fYWNjZXB0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s6IGZ1bmN0aW9uIG9uQ2xpY2soKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdGhpczIuYnRuQ2xpY2tIYW5kbGVyKCdhY2NlcHQnLCByb3cuaWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25Eb3VibGVDbGljazogZnVuY3Rpb24gb25Eb3VibGVDbGljaygpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF90aGlzMi5idG5DbGlja0hhbmRsZXIoJ2FjY2VwdCcsIHJvdy5pZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2ltZycsIHsgcmVmOiAnaW1hZ2UnLCBzcmM6IHN0eWxlcy5pY29uc1snb2snXSB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNBZG1pbiA/IFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnYnV0dG9uJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZTogc3R5bGVzLmJ1dHRvbl9kZWxldGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljazogZnVuY3Rpb24gb25DbGljaygpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF90aGlzMi5idG5DbGlja0hhbmRsZXIoJ2RlbGV0ZScsIHJvdy5pZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkRvdWJsZUNsaWNrOiBmdW5jdGlvbiBvbkRvdWJsZUNsaWNrKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3RoaXMyLmJ0bkNsaWNrSGFuZGxlcignZGVsZXRlJywgcm93LmlkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudCgnaW1nJywgeyByZWY6ICdpbWFnZScsIHNyYzogc3R5bGVzLmljb25zWydkZWxldGUnXSB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogbnVsbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmVkaXREb2N1bWVudCA/IFJlYWN0LmNyZWF0ZUVsZW1lbnQoQXV0aG9yQ29tcG9uZW50LCB7XG4gICAgICAgICAgICAgICAgICAgIHN0b3JlOiB0aGlzLnByb3BzLnN0b3JlLFxuICAgICAgICAgICAgICAgICAgICBzaG93OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBidG5DbGlja0V2ZW50SGFuZGxlcjogdGhpcy5wcm9wcy5idG5DbGlja0V2ZW50SGFuZGxlclxuICAgICAgICAgICAgICAgIH0pIDogbnVsbFxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqINCe0LHRgNCw0LHQvtGC0LrQsCDRgdC+0LHRi9GC0LjRjyDQutC70LjQutCwINC/0L4g0LrQvdC+0L/QutCw0LxcclxuICAgICAgICAgKiBAcGFyYW0gZXZlbnRcclxuICAgICAgICAgKiBAcGFyYW0gYXBwbGljYXRpb25JZFxyXG4gICAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAgICBrZXk6ICdidG5DbGlja0hhbmRsZXInLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gYnRuQ2xpY2tIYW5kbGVyKGV2ZW50LCBhcHBsaWNhdGlvbklkKSB7XG4gICAgICAgICAgICBpZiAoZXZlbnQgPT0gJ2RlbGV0ZScgfHwgZXZlbnQgPT0gJ2FjY2VwdCcpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmZldGNoRGF0YShldmVudCwgYXBwbGljYXRpb25JZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoZXZlbnQgPT0gJ2VkaXQnKSB7XG4gICAgICAgICAgICAgICAgLy8g0YHQvtGF0YDQsNC90Y/QtdC8INC40LQg0LDQstGC0L7RgNCwINC4INC/0LjRiNC10Lwg0LXQs9C+INCyINGB0YLQvtGALiDQntGC0LrRgNGL0LLQsNC10Lwg0L3QsCDRgNC10LTQsNC60YLQuNGA0L7QstCw0L3QuNC1XG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5zdG9yZS5kaXNwYXRjaCh7IHR5cGU6ICdwaWN0dXJlSWQnLCBwaWN0dXJlSWQ6IGFwcGxpY2F0aW9uSWQgfSk7XG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5zdG9yZS5kaXNwYXRjaCh7IHR5cGU6ICdpc1BpY3R1cmVTaG93JywgaXNQaWN0dXJlU2hvdzogdHJ1ZSB9KTtcbiAgICAgICAgICAgICAgICAvLyBpc1BpY3R1cmVTaG93XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGVkaXREb2N1bWVudDogdHJ1ZSwgYXBwbGljYXRpb25JZDogYXBwbGljYXRpb25JZCB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqINC30LDQs9GA0YPQt9C60LAg0LTQsNC90L3Ri9GFXHJcbiAgICAgICAgICogQHJldHVybnMgeyp8UHJvbWlzZTxBeGlvc1Jlc3BvbnNlPHVua25vd24+IHwgbmV2ZXI+fVxyXG4gICAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAgICBrZXk6ICdmZXRjaERhdGEnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gZmV0Y2hEYXRhKGV2ZW50LCBhcHBsaWNhdGlvbklkKSB7XG4gICAgICAgICAgICB2YXIgX3RoaXMzID0gdGhpcztcblxuICAgICAgICAgICAgaWYgKGV2ZW50ICE9PSAnYWNjZXB0Jykge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBVUkwgPSAnL21haW4vdGFvdGx1c19hY2NlcHQvJztcblxuICAgICAgICAgICAgdmFyIHBhcmFtcyA9IHsgaWQ6IGFwcGxpY2F0aW9uSWQsIGV2ZW50OiBldmVudCB9O1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlZCwgcmVqZWN0ZWQpIHtcbiAgICAgICAgICAgICAgICBfZmV0Y2hEYXRhWydmZXRjaERhdGFQb3N0J10oVVJMLCBwYXJhbXMpLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGVycm9yIGhhbmRsaW5nXG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDIwMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMzLnNldFN0YXRlKHsgaW5mbzogJ1VwZGF0ZSBzdWNjZWZ1bGwnIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKF90aGlzMy5wcm9wcy5idG5DbGlja0V2ZW50SGFuZGxlcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vINC00LDQtNC40Lwg0L3QsCDQstC10YDRhSDQutC+0LzQsNC90LTRgyDQvdCwINGA0LXQu9C+0LDQtFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzMy5wcm9wcy5idG5DbGlja0V2ZW50SGFuZGxlcigncmVsb2FkJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlZChyZXNwb25zZS5kYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ3N0YXR1cyAhPT0gMjAwJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBfdGhpczMuc2V0U3RhdGUoeyBpbmZvOiAnVXBkYXRlIHdpdGggZXJyb3InIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlamVjdGVkKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KS5jYXRjaChmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignZmV0Y2ggZXJyb3InLCBlcnJvcik7XG4gICAgICAgICAgICAgICAgICAgIF90aGlzMy5zZXRTdGF0ZSh7IGluZm86ICdVcGRhdGUgd2l0aCBlcnJvciAnICsgZXJyb3IgfSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZWplY3RlZChlcnJvcik7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1dKTtcblxuICAgIHJldHVybiBVc2VyQXBwbGljYXRpb25zQ29tcG9uZW50O1xufShSZWFjdC5QdXJlQ29tcG9uZW50KTtcblxubW9kdWxlLmV4cG9ydHMgPSBVc2VyQXBwbGljYXRpb25zQ29tcG9uZW50O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vZnJvbnRlbmQvZG9jcy9tYWluL3VzZXJBcHBsaWNhdGlvbnMtY29tcG9uZW50LmpzeFxuLy8gbW9kdWxlIGlkID0gMzgxXG4vLyBtb2R1bGUgY2h1bmtzID0gMyIsIid1c2Ugc3RyaWN0JztcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxudmFyIF9jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0oKTtcblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG52YXIgUHJvcFR5cGVzID0gcmVxdWlyZSgncHJvcC10eXBlcycpO1xuXG52YXIgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpLFxuICAgIHN0eWxlcyA9IHJlcXVpcmUoJy4vc3R5bGVzJyk7XG52YXIgZmV0Y2hEYXRhID0gcmVxdWlyZSgnLi8uLi8uLi8uLi9saWJzL2ZldGNoRGF0YScpO1xuXG4vL2NvbnN0IHN0b3JlID0gcmVxdWlyZSgnLi8uLi8uLi9zdG9yZScpO1xuXG52YXIgTW9kYWxQYWdlID0gcmVxdWlyZSgnLi8uLi8uLi9jb21wb25lbnRzL21vZGFscGFnZS9tb2RhbFBhZ2UuanN4Jyk7XG5cbnZhciBBcnRpc3QgPSBmdW5jdGlvbiAoX1JlYWN0JFB1cmVDb21wb25lbnQpIHtcbiAgICBfaW5oZXJpdHMoQXJ0aXN0LCBfUmVhY3QkUHVyZUNvbXBvbmVudCk7XG5cbiAgICBmdW5jdGlvbiBBcnRpc3QocHJvcHMpIHtcbiAgICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEFydGlzdCk7XG5cbiAgICAgICAgdmFyIF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgKEFydGlzdC5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKEFydGlzdCkpLmNhbGwodGhpcywgcHJvcHMpKTtcblxuICAgICAgICBfdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIGthc3V0YWphOiAnJyxcbiAgICAgICAgICAgIGxvZ2luOiAnJyxcbiAgICAgICAgICAgIGNvZGU6ICcnLFxuICAgICAgICAgICAgbmFtZTogJycsXG4gICAgICAgICAgICBpZDogMCxcbiAgICAgICAgICAgIGVtYWlsOiAnJyxcbiAgICAgICAgICAgIGFhZHJlc3M6ICcnLFxuICAgICAgICAgICAgY29udGluZW50OiAnJyxcbiAgICAgICAgICAgIHJlZ2lvbjogJycsXG4gICAgICAgICAgICBjaXR5OiAnJyxcbiAgICAgICAgICAgIHNob3c6IHRydWUsXG4gICAgICAgICAgICBpc0VkaXRlTW9kZTogZmFsc2VcbiAgICAgICAgfTtcbiAgICAgICAgX3RoaXMub25DbGlja0hhbmRsZWQgPSBfdGhpcy5vbkNsaWNrSGFuZGxlZC5iaW5kKF90aGlzKTtcbiAgICAgICAgX3RoaXMuZmVjdGhEYXRhID0gX3RoaXMuZmVjdGhEYXRhLmJpbmQoX3RoaXMpO1xuICAgICAgICBfdGhpcy5vbkNoYW5nZUlucHV0ID0gX3RoaXMub25DaGFuZ2VJbnB1dC5iaW5kKF90aGlzKTtcbiAgICAgICAgX3RoaXMuZ2V0QXV0aG9yRnJvbVN0b3JlID0gX3RoaXMuZ2V0QXV0aG9yRnJvbVN0b3JlLmJpbmQoX3RoaXMpO1xuXG4gICAgICAgIC8v0L/QvtC00L/QuNGB0YvQstCw0LXQvNGB0Y8g0L3QsCDQuNC30LzQtdC90LXQvdC40Y8g0LIg0YHRgtC+0YDQtVxuICAgICAgICB2YXIgc3RvcmUgPSBfdGhpcy5wcm9wcy5zdG9yZTtcbiAgICAgICAgaWYgKHN0b3JlKSB7XG4gICAgICAgICAgICBzdG9yZS5zdWJzY3JpYmUoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHZhciBpc1BpY3R1cmVTaG93ID0gc3RvcmUuZ2V0U3RhdGUoKS5zdGF0dXNlcy5pc1BpY3R1cmVTaG93O1xuICAgICAgICAgICAgICAgIHZhciBhdXRob3IgPSBfdGhpcy5nZXRBdXRob3JGcm9tU3RvcmUoKTtcblxuICAgICAgICAgICAgICAgIF90aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgc2hvdzogaXNQaWN0dXJlU2hvdyxcbiAgICAgICAgICAgICAgICAgICAgbG9naW46IGF1dGhvclswXS5sb2dpbixcbiAgICAgICAgICAgICAgICAgICAgbmltaTogYXV0aG9yWzBdLm5pbWksXG4gICAgICAgICAgICAgICAgICAgIGlkOiBhdXRob3JbMF0uaWQsXG4gICAgICAgICAgICAgICAgICAgIGVtYWlsOiBhdXRob3JbMF0uZW1haWwsXG4gICAgICAgICAgICAgICAgICAgIGFhZHJlc3M6IGF1dGhvclswXS5hYWRyZXNzLFxuICAgICAgICAgICAgICAgICAgICBjb250aW5lbnQ6IGF1dGhvclswXS5jb250aW5lbnQsXG4gICAgICAgICAgICAgICAgICAgIHJlZ2lvbjogYXV0aG9yWzBdLnJlZ2lvbixcbiAgICAgICAgICAgICAgICAgICAgY2l0eTogYXV0aG9yWzBdLmNpdHlcbiAgICAgICAgICAgICAgICB9LCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIF90aGlzLmZvcmNlVXBkYXRlKCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuXG4gICAgX2NyZWF0ZUNsYXNzKEFydGlzdCwgW3tcbiAgICAgICAga2V5OiAnY29tcG9uZW50RGlkTW91bnQnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgICAgICAvLyDRgNC10LTQsNC60YLQuNGA0L7QstCw0L3QuNC1XG4gICAgICAgICAgICB2YXIgYXV0aG9yID0gdGhpcy5nZXRBdXRob3JGcm9tU3RvcmUoKTtcblxuICAgICAgICAgICAgaWYgKCFhdXRob3IgfHwgIWF1dGhvci5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdwcm9wcy5pZCcsIHRoaXMucHJvcHMuaWQpO1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgbG9naW46IGF1dGhvclswXS5sb2dpbixcbiAgICAgICAgICAgICAgICBjb2RlOiBhdXRob3JbMF0uY29kZSxcbiAgICAgICAgICAgICAgICBuYW1lOiBhdXRob3JbMF0ubmFtZSxcbiAgICAgICAgICAgICAgICBpZDogYXV0aG9yWzBdLmlkLFxuICAgICAgICAgICAgICAgIGVtYWlsOiBhdXRob3JbMF0uZW1haWwsXG4gICAgICAgICAgICAgICAgYWFkcmVzczogYXV0aG9yWzBdLmFhZHJlc3MsXG4gICAgICAgICAgICAgICAgY29udGluZW50OiBhdXRob3JbMF0uY29udGluZW50LFxuICAgICAgICAgICAgICAgIHJlZ2lvbjogYXV0aG9yWzBdLnJlZ2lvbixcbiAgICAgICAgICAgICAgICBjaXR5OiBhdXRob3JbMF0uY2l0eSxcbiAgICAgICAgICAgICAgICBzaG93OiB0cnVlXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAncmVuZGVyJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgICAgICAgIHZhciBzaG93ID0gdGhpcy5wcm9wcy5zdG9yZS5nZXRTdGF0ZSgpLnN0YXR1c2VzLmlzUGljdHVyZVNob3c7XG4gICAgICAgICAgICB2YXIgYXV0aG9yID0gdGhpcy5nZXRBdXRob3JGcm9tU3RvcmUoKVswXTtcbiAgICAgICAgICAgIGlmICh0aGlzLnN0YXRlLmlzRWRpdGVNb2RlKSB7XG4gICAgICAgICAgICAgICAgYXV0aG9yID0gdGhpcy5zdGF0ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgIE1vZGFsUGFnZSxcbiAgICAgICAgICAgICAgICB7IHNob3c6IHNob3csXG4gICAgICAgICAgICAgICAgICAgIG1vZGFsUGFnZUJ0bkNsaWNrOiB0aGlzLm9uQ2xpY2tIYW5kbGVkIH0sXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICAgICAgJ2RpdicsXG4gICAgICAgICAgICAgICAgICAgIHsgc3R5bGU6IHN0eWxlcy5kb2NSb3cgfSxcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICAgICAgICAgICdsYWJlbCcsXG4gICAgICAgICAgICAgICAgICAgICAgICB7IHN0eWxlOiBzdHlsZXMubGFiZWwgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICdMb2dpbjogJ1xuICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KCdpbnB1dCcsIHsgdHlwZTogJ3RleHQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ6ICdsb2dpbicsXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAnbG9naW4nLFxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogYXV0aG9yLmxvZ2luIHx8ICcnXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICAgICAnZGl2JyxcbiAgICAgICAgICAgICAgICAgICAgeyBzdHlsZTogc3R5bGVzLmRvY1JvdyB9LFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICAgICAgICAgJ2xhYmVsJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgc3R5bGU6IHN0eWxlcy5sYWJlbCB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgJ0NvZGU6ICdcbiAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudCgnaW5wdXQnLCB7IHR5cGU6ICd0ZXh0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkOiAnY29kZScsXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAnY29kZScsXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZTogdGhpcy5vbkNoYW5nZUlucHV0LFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGF1dGhvci5jb2RlIHx8ICcnXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICAgICAnZGl2JyxcbiAgICAgICAgICAgICAgICAgICAgeyBzdHlsZTogc3R5bGVzLmRvY1JvdyB9LFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICAgICAgICAgJ2xhYmVsJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgc3R5bGU6IHN0eWxlcy5sYWJlbCB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgJ05hbWU6ICdcbiAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudCgnaW5wdXQnLCB7IHR5cGU6ICd0ZXh0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkOiAnbmFtZScsXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAnbmFtZScsXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZTogdGhpcy5vbkNoYW5nZUlucHV0LFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGF1dGhvci5uYW1lIHx8ICcnXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICAgICAnZGl2JyxcbiAgICAgICAgICAgICAgICAgICAgeyBzdHlsZTogc3R5bGVzLmRvY1JvdyB9LFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICAgICAgICAgJ2xhYmVsJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgc3R5bGU6IHN0eWxlcy5sYWJlbCB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgJ0VtYWlsOiAnXG4gICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JywgeyB0eXBlOiAndGV4dCcsXG4gICAgICAgICAgICAgICAgICAgICAgICByZWY6ICdlbWFpbCcsXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogYXV0aG9yLmVtYWlsIHx8ICcnLFxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ6ICdlbWFpbCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAnZW1haWwnLFxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U6IHRoaXMub25DaGFuZ2VJbnB1dCB9KVxuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICAgICAgJ2RpdicsXG4gICAgICAgICAgICAgICAgICAgIHsgc3R5bGU6IHN0eWxlcy5kb2NSb3cgfSxcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICAgICAgICAgICdsYWJlbCcsXG4gICAgICAgICAgICAgICAgICAgICAgICB7IHN0eWxlOiBzdHlsZXMubGFiZWwgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICdBZGRyZXNzOiAnXG4gICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JywgeyB0eXBlOiAndGV4dCcsXG4gICAgICAgICAgICAgICAgICAgICAgICByZWY6ICdhYWRyZXNzJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBhdXRob3IuYWFkcmVzcyB8fCAnJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkOiAnYWFkcmVzcycsXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAnYWFkcmVzcycsXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZTogdGhpcy5vbkNoYW5nZUlucHV0IH0pXG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICAgICAnZGl2JyxcbiAgICAgICAgICAgICAgICAgICAgeyBzdHlsZTogc3R5bGVzLmRvY1JvdyB9LFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICAgICAgICAgJ2xhYmVsJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgc3R5bGU6IHN0eWxlcy5sYWJlbCB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgJ0NvbnRpbmVudDogJ1xuICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICAgICAgICAgJ3NlbGVjdCcsXG4gICAgICAgICAgICAgICAgICAgICAgICB7IHJlZjogJ3NlbGVjdCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU6IHN0eWxlcy5zZWxlY3QsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGF1dGhvci5jb250aW5lbnQgfHwgJycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6ICdjb250aW5lbnQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdjb250aW5lbnQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlOiB0aGlzLm9uQ2hhbmdlSW5wdXQgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuc3RvcmUuZ2V0U3RhdGUoKS5zdGF0dXNlcy5jb250aW5lbnRzLm1hcChmdW5jdGlvbiAoaXRlbSwgaW5kZXgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ29wdGlvbicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgdmFsdWU6IGl0ZW0gfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICAgICAnZGl2JyxcbiAgICAgICAgICAgICAgICAgICAgeyBzdHlsZTogc3R5bGVzLmRvY1JvdyB9LFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICAgICAgICAgJ2xhYmVsJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgc3R5bGU6IHN0eWxlcy5sYWJlbCB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgJ1JlZ2lvbjogJ1xuICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICAgICAgICAgJ3NlbGVjdCcsXG4gICAgICAgICAgICAgICAgICAgICAgICB7IHJlZjogJ3NlbGVjdCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU6IHN0eWxlcy5zZWxlY3QsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGF1dGhvci5yZWdpb24gfHwgJycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6ICdyZWdpb24nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdyZWdpb24nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlOiB0aGlzLm9uQ2hhbmdlSW5wdXQgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuc3RvcmUuZ2V0U3RhdGUoKS5zdGF0dXNlcy5yZWdpb25zLm1hcChmdW5jdGlvbiAoaXRlbSwgaW5kZXgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ29wdGlvbicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgdmFsdWU6IGl0ZW0gfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICAgICAnZGl2JyxcbiAgICAgICAgICAgICAgICAgICAgeyBzdHlsZTogc3R5bGVzLmRvY1JvdyB9LFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICAgICAgICAgJ2xhYmVsJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgc3R5bGU6IHN0eWxlcy5sYWJlbCB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgJ0NpdHk6ICdcbiAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICAgICAgICAgICdzZWxlY3QnLFxuICAgICAgICAgICAgICAgICAgICAgICAgeyByZWY6ICdjaXR5JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZTogc3R5bGVzLnNlbGVjdCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogYXV0aG9yLmNpdHkgfHwgJycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6ICdjaXR5JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAnY2l0eScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U6IHRoaXMub25DaGFuZ2VJbnB1dCB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5zdG9yZS5nZXRTdGF0ZSgpLnN0YXR1c2VzLmNpdGllcy5tYXAoZnVuY3Rpb24gKGl0ZW0sIGluZGV4KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdvcHRpb24nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHZhbHVlOiBpdGVtIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ29uQ2hhbmdlSW5wdXQnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gb25DaGFuZ2VJbnB1dChlKSB7XG4gICAgICAgICAgICB2YXIgZmllbGRWYWx1ZSA9IGUudGFyZ2V0LnZhbHVlO1xuICAgICAgICAgICAgdmFyIGZpZWxkTmFtZSA9IGUudGFyZ2V0Lm5hbWU7XG4gICAgICAgICAgICB2YXIgc3RhdGUgPSB7fTtcbiAgICAgICAgICAgIHN0YXRlW2ZpZWxkTmFtZV0gPSBmaWVsZFZhbHVlO1xuICAgICAgICAgICAgc3RhdGUgPSBfZXh0ZW5kcyh7fSwgdGhpcy5zdGF0ZSwgeyBzdGF0ZTogc3RhdGUgfSk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnZmllbGROYW1lJywgZmllbGRWYWx1ZSwgc3RhdGUpO1xuICAgICAgICAgICAgc3dpdGNoIChmaWVsZE5hbWUpIHtcbiAgICAgICAgICAgICAgICBjYXNlICdjb2RlJzpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGNvZGU6IGZpZWxkVmFsdWUsIGlzRWRpdGVNb2RlOiB0cnVlIH0pO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICduYW1lJzpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IG5hbWU6IGZpZWxkVmFsdWUsIGlzRWRpdGVNb2RlOiB0cnVlIH0pO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICdhYWRyZXNzJzpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGFhZHJlc3M6IGZpZWxkVmFsdWUsIGlzRWRpdGVNb2RlOiB0cnVlIH0pO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICd0ZWwnOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgdGVsOiBmaWVsZFZhbHVlLCBpc0VkaXRlTW9kZTogdHJ1ZSB9KTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAnZW1haWwnOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgZW1haWw6IGZpZWxkVmFsdWUsIGlzRWRpdGVNb2RlOiB0cnVlIH0pO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICdjb250aW5lbnQnOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgY29udGluZW50OiBmaWVsZFZhbHVlLCBpc0VkaXRlTW9kZTogdHJ1ZSB9KTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAncmVnaW9uJzpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHJlZ2lvbjogZmllbGRWYWx1ZSwgaXNFZGl0ZU1vZGU6IHRydWUgfSk7XG4gICAgICAgICAgICAgICAgY2FzZSAnY2l0eSc6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBjaXR5OiBmaWVsZFZhbHVlLCBpc0VkaXRlTW9kZTogdHJ1ZSB9KTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ29uQ2xpY2tIYW5kbGVkJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIG9uQ2xpY2tIYW5kbGVkKGV2ZW50KSB7XG4gICAgICAgICAgICBpZiAoZXZlbnQgPT0gJ09rJykge1xuICAgICAgICAgICAgICAgIC8vINGB0L7RhdGA0LDQvdGP0LXQvFxuICAgICAgICAgICAgICAgIHRoaXMuZmVjdGhEYXRhKCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzaG93OiBmYWxzZSB9KTtcbiAgICAgICAgICAgIHZhciBzdG9yZSA9IHRoaXMucHJvcHMuc3RvcmU7XG4gICAgICAgICAgICAvLyDQvNC10L3Rj9C10Lwg0YHRgtCw0YLRg9GBINC+0LrQvdCwXG4gICAgICAgICAgICBzdG9yZS5kaXNwYXRjaCh7IHR5cGU6ICdpc1BpY3R1cmVTaG93JywgaXNQaWN0dXJlU2hvdzogZmFsc2UgfSk7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2ZlY3RoRGF0YScsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBmZWN0aERhdGEoKSB7XG4gICAgICAgICAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgICAgICAgICAgdmFyIGRhdGEgPSB7XG4gICAgICAgICAgICAgICAgaWQ6IHRoaXMuc3RhdGUuaWQsXG4gICAgICAgICAgICAgICAgY29kZTogdGhpcy5zdGF0ZS5jb2RlLFxuICAgICAgICAgICAgICAgIG5hbWU6IHRoaXMuc3RhdGUubmFtZSxcbiAgICAgICAgICAgICAgICBlbWFpbDogdGhpcy5zdGF0ZS5lbWFpbCxcbiAgICAgICAgICAgICAgICBhYWRyZXNzOiB0aGlzLnN0YXRlLmFhZHJlc3MsXG4gICAgICAgICAgICAgICAgY29udGluZW50OiB0aGlzLnN0YXRlLmNvbnRpbmVudCxcbiAgICAgICAgICAgICAgICByZWdpb246IHRoaXMuc3RhdGUucmVnaW9uLFxuICAgICAgICAgICAgICAgIGNpdHk6IHRoaXMuc3RhdGUuY2l0eSxcbiAgICAgICAgICAgICAgICB1c2VyOiB0aGlzLnByb3BzLnN0b3JlLmdldFN0YXRlKCkuc3RhdHVzZXMudXNlclxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdmZXRjaCBzdGF0ZScsIGRhdGEpO1xuICAgICAgICAgICAgZmV0Y2hEYXRhLmZldGNoRGF0YVBvc3QoJy9tYWluL3NhdmVfYXV0aG9yJywgZGF0YSkudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgX3RoaXMyLnNldFN0YXRlKHsgaWQ6IHJlc3VsdC5kYXRhLnJlc3VsdCB9KTtcbiAgICAgICAgICAgICAgICB2YXIgc3RvcmUgPSBfdGhpczIucHJvcHMuc3RvcmU7XG4gICAgICAgICAgICAgICAgLy8g0LLRi9C30L7QstC10Lwg0L/QtdGA0LXQs9GA0YPQt9C60YNcbiAgICAgICAgICAgICAgICBzdG9yZS5kaXNwYXRjaCh7IHR5cGU6ICdyZWxvYWRBY3RpdmVQYWdlQ29tcG9uZW50JywgcmVsb2FkQWN0aXZlUGFnZUNvbXBvbmVudDogdHJ1ZSB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog0LLQtdGA0L3QtdGCINC+0LHRjNC10LrRgiDRgSDQutCw0YDRgtC40L3QvtC5XHJcbiAgICAgICAgICogQHJldHVybnMge1RbXXxBcnJheX1cclxuICAgICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnZ2V0QXV0aG9yRnJvbVN0b3JlJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGdldEF1dGhvckZyb21TdG9yZSgpIHtcbiAgICAgICAgICAgIHZhciBzdG9yZSA9IHRoaXMucHJvcHMuc3RvcmU7XG4gICAgICAgICAgICBpZiAoIXN0b3JlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFtdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIGF1dGhvcklkID0gc3RvcmUuZ2V0U3RhdGUoKS5zdGF0dXNlcy5waWN0dXJlSWQ7IC8vINC/0L7Qu9GD0YfQuNC8INC40LQg0LTQvtC60YPQvNC10L3RgtCwXG5cbiAgICAgICAgICAgIHZhciBhdXRob3JzID0gc3RvcmUuZ2V0U3RhdGUoKS5hdXRob3JzO1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ2F1dGhvcklkJywgYXV0aG9ySWQsIGF1dGhvcnMpO1xuXG4gICAgICAgICAgICByZXR1cm4gYXV0aG9ycy5maWx0ZXIoZnVuY3Rpb24gKHJvdykge1xuICAgICAgICAgICAgICAgIHJldHVybiByb3cuaWQgPT0gYXV0aG9ySWQ7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1dKTtcblxuICAgIHJldHVybiBBcnRpc3Q7XG59KFJlYWN0LlB1cmVDb21wb25lbnQpO1xuXG5BcnRpc3QucHJvcFR5cGVzID0ge1xuICAgIGRpc2FibGVkOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBzaG93OiBQcm9wVHlwZXMuYm9vbFxufTtcblxuQXJ0aXN0LmRlZmF1bHRQcm9wcyA9IHtcbiAgICBkaXNhYmxlZDogZmFsc2UudmFsdWVPZigpLFxuICAgIHBhZ2VzOiBbXVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBBcnRpc3Q7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9mcm9udGVuZC9kb2NzL21haW4vYXV0aG9yLWNvbXBvbmVudC5qc3hcbi8vIG1vZHVsZSBpZCA9IDM4MlxuLy8gbW9kdWxlIGNodW5rcyA9IDMiLCIndXNlIHN0cmljdCc7XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKCFzZWxmKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxudmFyIFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcbnZhciBzdHlsZXMgPSByZXF1aXJlKCcuL3N0eWxlcycpO1xudmFyIF9mZXRjaERhdGEgPSByZXF1aXJlKCcuLy4uLy4uLy4uL2xpYnMvZmV0Y2hEYXRhJyk7XG5cbi8qKlxyXG4gKiDQmtC70LDRgdGBINGA0LXQsNC70LjQt9GD0LXRgiDQtNC+0LrRg9C80LXQvdGCINGB0L/RgNCw0LLQvtGH0L3QuNC60LAg0L/RgNC40LfQvdCw0LrQvtCyLlxyXG4gKi9cblxudmFyIERlYWxzUmVnaXN0ZXJDb21wb25lbnQgPSBmdW5jdGlvbiAoX1JlYWN0JFB1cmVDb21wb25lbnQpIHtcbiAgICBfaW5oZXJpdHMoRGVhbHNSZWdpc3RlckNvbXBvbmVudCwgX1JlYWN0JFB1cmVDb21wb25lbnQpO1xuXG4gICAgZnVuY3Rpb24gRGVhbHNSZWdpc3RlckNvbXBvbmVudChwcm9wcykge1xuICAgICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgRGVhbHNSZWdpc3RlckNvbXBvbmVudCk7XG5cbiAgICAgICAgdmFyIF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgKERlYWxzUmVnaXN0ZXJDb21wb25lbnQuX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihEZWFsc1JlZ2lzdGVyQ29tcG9uZW50KSkuY2FsbCh0aGlzLCBwcm9wcykpO1xuXG4gICAgICAgIF90aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgd2FybmluZzogbnVsbCxcbiAgICAgICAgICAgIGluaXRMb2FkOiBmYWxzZSxcbiAgICAgICAgICAgIGRlYWxzOiBbXSxcbiAgICAgICAgICAgIHVzZXI6IHt9LFxuICAgICAgICAgICAgaW5mbzogbnVsbFxuXG4gICAgICAgIH07XG4gICAgICAgIF90aGlzLmJ0bkNsaWNrSGFuZGxlciA9IF90aGlzLmJ0bkNsaWNrSGFuZGxlci5iaW5kKF90aGlzKTtcbiAgICAgICAgX3RoaXMucmVuZGVyR3JpZENvbXBvbmVudCA9IF90aGlzLnJlbmRlckdyaWRDb21wb25lbnQuYmluZChfdGhpcyk7XG4gICAgICAgIF90aGlzLmZldGNoRGF0YSA9IF90aGlzLmZldGNoRGF0YS5iaW5kKF90aGlzKTtcblxuICAgICAgICAvL9C/0L7QtNC/0LjRgdGL0LLQsNC10LzRgdGPINC90LAg0LjQt9C80LXQvdC10L3QuNGPINCyINGB0YLQvtGA0LVcbiAgICAgICAgdmFyIHN0b3JlID0gX3RoaXMucHJvcHMuc3RvcmU7XG4gICAgICAgIGlmIChzdG9yZSkge1xuICAgICAgICAgICAgc3RvcmUuc3Vic2NyaWJlKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICB2YXIgZGVhbHMgPSBzdG9yZS5nZXRTdGF0ZSgpLmRlYWxzLmRlYWxzO1xuICAgICAgICAgICAgICAgIHZhciB1c2VyID0gc3RvcmUuZ2V0U3RhdGUoKS5zdGF0dXNlcy51c2VyO1xuXG4gICAgICAgICAgICAgICAgaWYgKEpTT04uc3RyaW5naWZ5KGRlYWxzKSAhPT0gSlNPTi5zdHJpbmdpZnkoX3RoaXMuc3RhdGUuZGVhbHMpIHx8IEpTT04uc3RyaW5naWZ5KHVzZXIpICE9PSBKU09OLnN0cmluZ2lmeShfdGhpcy5zdGF0ZS51c2VyKSkge1xuICAgICAgICAgICAgICAgICAgICBfdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICBkZWFsczogZGVhbHMsXG4gICAgICAgICAgICAgICAgICAgICAgICB1c2VyOiB1c2VyXG4gICAgICAgICAgICAgICAgICAgIH0sIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLmZvcmNlVXBkYXRlKCk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG5cbiAgICAvKlxyXG4gICAgICAgIC8vIHdpbGwgdXBkYXRlIHN0YXRlIGlmIHByb3BzIGNoYW5nZWRcclxuICAgICAgICBzdGF0aWMgZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzKG5leHRQcm9wcywgcHJldlN0YXRlKSB7XHJcbiAgICAgICAgICAgIGlmIChuZXh0UHJvcHMuZGVhbHMgIT09IHByZXZTdGF0ZS5kZWFscyB8fFxyXG4gICAgICAgICAgICAgICAgSlNPTi5zdHJpbmdpZnkobmV4dFByb3BzLnVzZXIpICE9PSBKU09OLnN0cmluZ2lmeShwcmV2U3RhdGUudXNlcikpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB7dmFsdWU6IG5leHRQcm9wcy5kZWFscywgdXNlcjogbmV4dFByb3BzLnVzZXJ9O1xyXG4gICAgICAgICAgICB9IGVsc2UgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgKi9cblxuICAgIF9jcmVhdGVDbGFzcyhEZWFsc1JlZ2lzdGVyQ29tcG9uZW50LCBbe1xuICAgICAgICBrZXk6ICdyZW5kZXInLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgICAgICAgdmFyIENvbXBvbmVudCA9IHZvaWQgMDtcbiAgICAgICAgICAgIHZhciBkZWFscyA9IHRoaXMuc3RhdGUuZGVhbHM7XG4gICAgICAgICAgICBpZiAoIWRlYWxzLmxlbmd0aCAmJiB0aGlzLnByb3BzLnN0b3JlKSB7XG4gICAgICAgICAgICAgICAgLy8g0L/QvtC00LPRgNGD0LfQuNC8INC40Lcg0YHRgtC+0YDQsFxuICAgICAgICAgICAgICAgIGRlYWxzID0gdGhpcy5wcm9wcy5zdG9yZS5nZXRTdGF0ZSgpLmRlYWxzLmRlYWxzO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGRlYWxzICYmIGRlYWxzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIENvbXBvbmVudCA9IHRoaXMucmVuZGVyR3JpZENvbXBvbmVudChkZWFscyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIENvbXBvbmVudCA9IFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgICAgICdkaXYnLFxuICAgICAgICAgICAgICAgICAgICBudWxsLFxuICAgICAgICAgICAgICAgICAgICAnRGF0YSBhcmUgbG9hZGluZydcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIENvbXBvbmVudDtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAncmVuZGVyR3JpZENvbXBvbmVudCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXJHcmlkQ29tcG9uZW50KGRhdGEpIHtcbiAgICAgICAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgICAgICAgICB2YXIgdXNlciA9IHRoaXMuc3RhdGUudXNlcjtcblxuICAgICAgICAgICAgaWYgKCF1c2VyKSB7XG4gICAgICAgICAgICAgICAgLy8g0L/QvtC00LPRgNGD0LfQuNC8INC40Lcg0YHRgtC+0YDQsFxuICAgICAgICAgICAgICAgIHVzZXIgPSB0aGlzLnByb3BzLnN0b3JlLmdldFN0YXRlKCkuc3RhdHVzZXMudXNlcjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdmFyIGxvZ2VkSW4gPSB1c2VyICYmIHVzZXIuaWQgPyB0cnVlIDogZmFsc2U7XG4gICAgICAgICAgICB2YXIgaXNBZG1pbiA9IHVzZXIgJiYgdXNlci5pc19hZG1pbiA/IHRydWUgOiBmYWxzZTtcblxuICAgICAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgJ2RpdicsXG4gICAgICAgICAgICAgICAgeyBzdHlsZTogc3R5bGVzLmdyaWQuZ3JpZENvbnRhaW5lciB9LFxuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuaW5mbyA/IFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgICAgICdkaXYnLFxuICAgICAgICAgICAgICAgICAgICBudWxsLFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICAgICAgICAgJ3NwYW4nLFxuICAgICAgICAgICAgICAgICAgICAgICAgbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuaW5mb1xuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgKSA6IG51bGwsXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICAgICAgJ3RhYmxlJyxcbiAgICAgICAgICAgICAgICAgICAgeyByZWY6ICdkYXRhR3JpZFRhYmxlJywgc3R5bGU6IHN0eWxlcy5ncmlkLm1haW5UYWJsZSwgb25LZXlQcmVzczogdGhpcy5oYW5kbGVLZXlEb3duIH0sXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgICAgICAgICAndGJvZHknLFxuICAgICAgICAgICAgICAgICAgICAgICAgbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3RyJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBudWxsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICd0aCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3R5bGU6IHN0eWxlcy5ncmlkLm1haW5UYWJsZS50aCB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAna29vZCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICd0aCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3R5bGU6IHN0eWxlcy5ncmlkLm1haW5UYWJsZS50aCB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnRGVzY3JpcHRpb24nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAndGgnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHN0eWxlOiBzdHlsZXMuZ3JpZC5tYWluVGFibGUudGggfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ0RlYWwgZGF0ZSdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICd0aCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3R5bGU6IHN0eWxlcy5ncmlkLm1haW5UYWJsZS50aCB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnQ2xpZW50J1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3RoJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBzdHlsZTogc3R5bGVzLmdyaWQubWFpblRhYmxlLnRoIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdQcmljZSdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICd0aCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3R5bGU6IHN0eWxlcy5ncmlkLm1haW5UYWJsZS50aCB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnU3RhdHVzJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgZGF0YS5tYXAoZnVuY3Rpb24gKHJvdywgcm93SW5kZXgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICd0cicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBvbkNsaWNrOiBfdGhpczIuaGFuZGxlQ2VsbENsaWNrLmJpbmQoX3RoaXMyLCByb3dJbmRleClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICd0ZCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3R5bGU6IHN0eWxlcy5ncmlkLm1haW5UYWJsZS50ZCB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3cua29vZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3RkJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBzdHlsZTogc3R5bGVzLmdyaWQubWFpblRhYmxlLnRkIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvdy5kZXNjcmlwdGlvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3RkJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBzdHlsZTogc3R5bGVzLmdyaWQubWFpblRhYmxlLnRkIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvdy5kZWFsX2RhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICd0ZCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3R5bGU6IHN0eWxlcy5ncmlkLm1haW5UYWJsZS50ZCB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3cuY2xpZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAndGQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHN0eWxlOiBzdHlsZXMuZ3JpZC5tYWluVGFibGUudGQgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm93LnByaWNlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAndGQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHN0eWxlOiBzdHlsZXMuZ3JpZC5tYWluVGFibGUudGQgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm93LnN0YXR1c19uYW1lXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAndGQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHN0eWxlOiBzdHlsZXMuZ3JpZC5tYWluVGFibGUudGRCdXR0b25zIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzQWRtaW4gJiYgcm93LnN0YXR1cyA9PT0gMCA/IFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnYnV0dG9uJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZTogc3R5bGVzLmJ1dHRvbl9hY2NlcHQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljazogZnVuY3Rpb24gb25DbGljaygpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMyLmJ0bkNsaWNrSGFuZGxlcignYWNjZXB0Jywgcm93SW5kZXgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25Eb3VibGVDbGljazogZnVuY3Rpb24gb25Eb3VibGVDbGljaygpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF90aGlzMi5idG5DbGlja0hhbmRsZXIoJ2FjY2VwdCcsIHJvd0luZGV4KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudCgnaW1nJywgeyByZWY6ICdpbWFnZScsIHNyYzogc3R5bGVzLmljb25zWydvayddIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiBudWxsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc0FkbWluICYmIChyb3cuc3RhdHVzID09PSAxIHx8IHJvdy5zdGF0dXMgPT09IDApID8gUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdidXR0b24nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlOiBzdHlsZXMuYnV0dG9uX2RlbGV0ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrOiBmdW5jdGlvbiBvbkNsaWNrKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3RoaXMyLmJ0bkNsaWNrSGFuZGxlcignZGVsZXRlJywgcm93SW5kZXgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25Eb3VibGVDbGljazogZnVuY3Rpb24gb25Eb3VibGVDbGljaygpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF90aGlzMi5idG5DbGlja0hhbmRsZXIoJ2RlbGV0ZScsIHJvd0luZGV4KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudCgnaW1nJywgeyByZWY6ICdpbWFnZScsIHNyYzogc3R5bGVzLmljb25zWydkZWxldGUnXSB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogbnVsbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnaGFuZGxlQ2VsbENsaWNrJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGhhbmRsZUNlbGxDbGljayhpZHgpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdoYW5kbGVDZWxsQ2xpY2snLCBpZHgpO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdidG5DbGlja0hhbmRsZXInLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gYnRuQ2xpY2tIYW5kbGVyKGV2ZW50LCByb3dJbmRleCkge1xuICAgICAgICAgICAgdmFyIGRhdGEgPSB0aGlzLnByb3BzLnN0b3JlLmdldFN0YXRlKCkuZGVhbHMuZGVhbHM7XG4gICAgICAgICAgICB2YXIgcm93ID0gZGF0YVtyb3dJbmRleF07XG5cbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdidG5DbGljaycsIGV2ZW50LCByb3cpO1xuICAgICAgICAgICAgdGhpcy5mZXRjaERhdGEoZXZlbnQsIHJvdy5pZCk7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcclxuICAgICAgICAgKiDQt9Cw0LPRgNGD0LfQutCwINC00LDQvdC90YvRhVxyXG4gICAgICAgICAqIEByZXR1cm5zIHsqfFByb21pc2U8QXhpb3NSZXNwb25zZTx1bmtub3duPiB8IG5ldmVyPn1cclxuICAgICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnZmV0Y2hEYXRhJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGZldGNoRGF0YShldmVudCwgZGVhbElkKSB7XG4gICAgICAgICAgICB2YXIgX3RoaXMzID0gdGhpcztcblxuICAgICAgICAgICAgdmFyIFVSTCA9ICcvbWFpbi9kZWFsX2FjY2VwdC8nO1xuICAgICAgICAgICAgdmFyIHVzZXIgPSB0aGlzLnByb3BzLnN0b3JlLmdldFN0YXRlKCkuc3RhdHVzZXMudXNlcjtcbiAgICAgICAgICAgIHZhciBwYXJhbXMgPSB7IGlkOiBkZWFsSWQsIGV2ZW50OiBldmVudCwgdXNlcjogdXNlciB9O1xuXG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmVkLCByZWplY3RlZCkge1xuICAgICAgICAgICAgICAgIF9mZXRjaERhdGFbJ2ZldGNoRGF0YVBvc3QnXShVUkwsIHBhcmFtcykudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gZXJyb3IgaGFuZGxpbmdcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gMjAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfdGhpczMuc2V0U3RhdGUoeyBpbmZvOiAnVXBkYXRlIHN1Y2NlZnVsbCcgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoX3RoaXMzLnByb3BzLmJ0bkNsaWNrRXZlbnRIYW5kbGVyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8g0LTQsNC00LjQvCDQvdCwINCy0LXRgNGFINC60L7QvNCw0L3QtNGDINC90LAg0YDQtdC70L7QsNC0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMzLnByb3BzLmJ0bkNsaWNrRXZlbnRIYW5kbGVyKCdyZWxvYWQnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmVkKHJlc3BvbnNlLmRhdGEpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignc3RhdHVzICE9PSAyMDAnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzMy5zZXRTdGF0ZSh7IGluZm86ICdVcGRhdGUgd2l0aCBlcnJvcicgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVqZWN0ZWQoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pLmNhdGNoKGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdmZXRjaCBlcnJvcicsIGVycm9yKTtcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMzLnNldFN0YXRlKHsgaW5mbzogJ1VwZGF0ZSB3aXRoIGVycm9yICcgKyBlcnJvciB9KTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlamVjdGVkKGVycm9yKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfV0pO1xuXG4gICAgcmV0dXJuIERlYWxzUmVnaXN0ZXJDb21wb25lbnQ7XG59KFJlYWN0LlB1cmVDb21wb25lbnQpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IERlYWxzUmVnaXN0ZXJDb21wb25lbnQ7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9mcm9udGVuZC9kb2NzL21haW4vZGVhbHNSZWdpc3Rlci1jb21wb25lbnQuanN4XG4vLyBtb2R1bGUgaWQgPSAzODNcbi8vIG1vZHVsZSBjaHVua3MgPSAzIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbnZhciBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG52YXIgc3R5bGVzID0gcmVxdWlyZSgnLi9zdHlsZXMnKTtcbnZhciBmZXRjaERhdGEgPSByZXF1aXJlKCcuLy4uLy4uLy4uL2xpYnMvZmV0Y2hEYXRhJyk7XG52YXIgQXV0aG9yQ29tcG9uZW50ID0gcmVxdWlyZSgnLi9hdXRob3ItY29tcG9uZW50LmpzeCcpO1xuXG4vKipcclxuICog0JrQu9Cw0YHRgSDRgNC10LDQu9C40LfRg9C10YIg0LTQvtC60YPQvNC10L3RgiDRgdC/0YDQsNCy0L7Rh9C90LjQutCwINC/0YDQuNC30L3QsNC60L7Qsi5cclxuICovXG5cbnZhciBBdXRob3JzUmVnaXN0ZXJDb21wb25lbnQgPSBmdW5jdGlvbiAoX1JlYWN0JFB1cmVDb21wb25lbnQpIHtcbiAgICBfaW5oZXJpdHMoQXV0aG9yc1JlZ2lzdGVyQ29tcG9uZW50LCBfUmVhY3QkUHVyZUNvbXBvbmVudCk7XG5cbiAgICBmdW5jdGlvbiBBdXRob3JzUmVnaXN0ZXJDb21wb25lbnQocHJvcHMpIHtcbiAgICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEF1dGhvcnNSZWdpc3RlckNvbXBvbmVudCk7XG5cbiAgICAgICAgdmFyIF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgKEF1dGhvcnNSZWdpc3RlckNvbXBvbmVudC5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKEF1dGhvcnNSZWdpc3RlckNvbXBvbmVudCkpLmNhbGwodGhpcywgcHJvcHMpKTtcblxuICAgICAgICBfdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIHdhcm5pbmc6IG51bGwsXG4gICAgICAgICAgICBpbml0TG9hZDogZmFsc2UsXG4gICAgICAgICAgICBhdXRob3JzOiBbXSxcbiAgICAgICAgICAgIGF1dGhvcklkOiBudWxsLFxuICAgICAgICAgICAgdXNlcjoge30sXG4gICAgICAgICAgICBpbmZvOiBudWxsXG5cbiAgICAgICAgfTtcbiAgICAgICAgX3RoaXMuYnRuQ2xpY2tIYW5kbGVyID0gX3RoaXMuYnRuQ2xpY2tIYW5kbGVyLmJpbmQoX3RoaXMpO1xuICAgICAgICBfdGhpcy5yZW5kZXJHcmlkQ29tcG9uZW50ID0gX3RoaXMucmVuZGVyR3JpZENvbXBvbmVudC5iaW5kKF90aGlzKTtcbiAgICAgICAgLy8gICAgICAgIHRoaXMuZmV0Y2hEYXRhID0gdGhpcy5mZXRjaERhdGEuYmluZCh0aGlzKTtcblxuICAgICAgICAvL9C/0L7QtNC/0LjRgdGL0LLQsNC10LzRgdGPINC90LAg0LjQt9C80LXQvdC10L3QuNGPINCyINGB0YLQvtGA0LVcbiAgICAgICAgdmFyIHN0b3JlID0gX3RoaXMucHJvcHMuc3RvcmU7XG4gICAgICAgIGlmIChzdG9yZSkge1xuICAgICAgICAgICAgc3RvcmUuc3Vic2NyaWJlKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICB2YXIgYXV0aG9ycyA9IHN0b3JlLmdldFN0YXRlKCkuYXV0aG9ycztcbiAgICAgICAgICAgICAgICB2YXIgdXNlciA9IHN0b3JlLmdldFN0YXRlKCkuc3RhdHVzZXMudXNlcjtcblxuICAgICAgICAgICAgICAgIGlmIChKU09OLnN0cmluZ2lmeShhdXRob3JzKSAhPT0gSlNPTi5zdHJpbmdpZnkoX3RoaXMuc3RhdGUuYXV0aG9ycykgfHwgSlNPTi5zdHJpbmdpZnkodXNlcikgIT09IEpTT04uc3RyaW5naWZ5KF90aGlzLnN0YXRlLnVzZXIpKSB7XG4gICAgICAgICAgICAgICAgICAgIF90aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGF1dGhvcnM6IGF1dGhvcnMsXG4gICAgICAgICAgICAgICAgICAgICAgICB1c2VyOiB1c2VyXG4gICAgICAgICAgICAgICAgICAgIH0sIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLmZvcmNlVXBkYXRlKCk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG5cbiAgICAvLyB3aWxsIHVwZGF0ZSBzdGF0ZSBpZiBwcm9wcyBjaGFuZ2VkXG5cblxuICAgIF9jcmVhdGVDbGFzcyhBdXRob3JzUmVnaXN0ZXJDb21wb25lbnQsIFt7XG4gICAgICAgIGtleTogJ3JlbmRlcicsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICAgICAgICB2YXIgQ29tcG9uZW50ID0gdm9pZCAwO1xuICAgICAgICAgICAgdmFyIGF1dGhvcnMgPSBbXTtcbiAgICAgICAgICAgIHZhciBhdXRob3JJZCA9IG51bGw7XG4gICAgICAgICAgICBpZiAoIWF1dGhvcnMubGVuZ3RoICYmIHRoaXMucHJvcHMuc3RvcmUpIHtcbiAgICAgICAgICAgICAgICAvLyDQv9C+0LTQs9GA0YPQt9C40Lwg0LjQtyDRgdGC0L7RgNCwXG4gICAgICAgICAgICAgICAgdmFyIHN0b3JlID0gdGhpcy5wcm9wcy5zdG9yZTtcbiAgICAgICAgICAgICAgICBhdXRob3JzID0gc3RvcmUuZ2V0U3RhdGUoKS5hdXRob3JzO1xuICAgICAgICAgICAgICAgIGF1dGhvcklkID0gc3RvcmUuZ2V0U3RhdGUoKS5zdGF0dXNlcy5waWN0dXJlSWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoYXV0aG9ycyAmJiBhdXRob3JzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIENvbXBvbmVudCA9IHRoaXMucmVuZGVyR3JpZENvbXBvbmVudChhdXRob3JzKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgQ29tcG9uZW50ID0gUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICAgICAgJ2RpdicsXG4gICAgICAgICAgICAgICAgICAgIG51bGwsXG4gICAgICAgICAgICAgICAgICAgICdEYXRhIGFyZSBsb2FkaW5nJ1xuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICAnZGl2JyxcbiAgICAgICAgICAgICAgICBudWxsLFxuICAgICAgICAgICAgICAgIENvbXBvbmVudCxcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmVkaXREb2N1bWVudCA/IFJlYWN0LmNyZWF0ZUVsZW1lbnQoQXV0aG9yQ29tcG9uZW50LCB7XG4gICAgICAgICAgICAgICAgICAgIHN0b3JlOiB0aGlzLnByb3BzLnN0b3JlLFxuICAgICAgICAgICAgICAgICAgICBpZDogYXV0aG9ySWQsXG4gICAgICAgICAgICAgICAgICAgIHNob3c6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGJ0bkNsaWNrRXZlbnRIYW5kbGVyOiB0aGlzLnByb3BzLmJ0bkNsaWNrRXZlbnRIYW5kbGVyXG4gICAgICAgICAgICAgICAgfSkgOiBudWxsXG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdyZW5kZXJHcmlkQ29tcG9uZW50JyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlckdyaWRDb21wb25lbnQoZGF0YSkge1xuICAgICAgICAgICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICAgICAgICAgIHZhciB1c2VyID0gdGhpcy5zdGF0ZS51c2VyO1xuXG4gICAgICAgICAgICBpZiAoIXVzZXIpIHtcbiAgICAgICAgICAgICAgICAvLyDQv9C+0LTQs9GA0YPQt9C40Lwg0LjQtyDRgdGC0L7RgNCwXG4gICAgICAgICAgICAgICAgdXNlciA9IHRoaXMucHJvcHMuc3RvcmUuZ2V0U3RhdGUoKS5zdGF0dXNlcy51c2VyO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB2YXIgbG9nZWRJbiA9IHVzZXIgJiYgdXNlci5pZCA/IHRydWUgOiBmYWxzZTtcbiAgICAgICAgICAgIHZhciBpc0FkbWluID0gdXNlciAmJiB1c2VyLmlzX2FkbWluID8gdHJ1ZSA6IGZhbHNlO1xuXG4gICAgICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICAnZGl2JyxcbiAgICAgICAgICAgICAgICB7IHN0eWxlOiBzdHlsZXMuZ3JpZC5ncmlkQ29udGFpbmVyIH0sXG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5pbmZvID8gUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICAgICAgJ2RpdicsXG4gICAgICAgICAgICAgICAgICAgIG51bGwsXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgICAgICAgICAnc3BhbicsXG4gICAgICAgICAgICAgICAgICAgICAgICBudWxsLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5pbmZvXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICApIDogbnVsbCxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICAgICAndGFibGUnLFxuICAgICAgICAgICAgICAgICAgICB7IHJlZjogJ2RhdGFHcmlkVGFibGUnLCBzdHlsZTogc3R5bGVzLmdyaWQubWFpblRhYmxlLCBvbktleVByZXNzOiB0aGlzLmhhbmRsZUtleURvd24gfSxcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICAgICAgICAgICd0Ym9keScsXG4gICAgICAgICAgICAgICAgICAgICAgICBudWxsLFxuICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAndHInLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG51bGwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3RoJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBzdHlsZTogc3R5bGVzLmdyaWQubWFpblRhYmxlLnRoIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdMb2dpbidcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICd0aCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3R5bGU6IHN0eWxlcy5ncmlkLm1haW5UYWJsZS50aCB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnQ29kZSdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICd0aCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3R5bGU6IHN0eWxlcy5ncmlkLm1haW5UYWJsZS50aCB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnTmFtZSdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICd0aCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3R5bGU6IHN0eWxlcy5ncmlkLm1haW5UYWJsZS50aCB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnUGhvbmUnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAndGgnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHN0eWxlOiBzdHlsZXMuZ3JpZC5tYWluVGFibGUudGggfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ0VtYWlsJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgZGF0YS5tYXAoZnVuY3Rpb24gKHJvdykge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3JvdycsIHJvdyk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAndHInLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG51bGwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3RkJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBzdHlsZTogc3R5bGVzLmdyaWQubWFpblRhYmxlLnRkIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvdy5sb2dpblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3RkJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBzdHlsZTogc3R5bGVzLmdyaWQubWFpblRhYmxlLnRkIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvdy5jb2RlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAndGQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHN0eWxlOiBzdHlsZXMuZ3JpZC5tYWluVGFibGUudGQgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm93Lm5hbWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICd0ZCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3R5bGU6IHN0eWxlcy5ncmlkLm1haW5UYWJsZS50ZCB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3cucGhvbmVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICd0ZCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3R5bGU6IHN0eWxlcy5ncmlkLm1haW5UYWJsZS50ZCB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3cuZW1haWxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICd0ZCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3R5bGU6IHN0eWxlcy5ncmlkLm1haW5UYWJsZS50ZCB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2dlZEluID8gUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdidXR0b24nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlOiBzdHlsZXMuYnRuRWRpdCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrOiBmdW5jdGlvbiBvbkNsaWNrKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3RoaXMyLmJ0bkNsaWNrSGFuZGxlcignZWRpdCcsIHJvdy5pZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkRvdWJsZUNsaWNrOiBmdW5jdGlvbiBvbkRvdWJsZUNsaWNrKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3RoaXMyLmJ0bkNsaWNrSGFuZGxlcignZWRpdCcsIHJvdy5pZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2ltZycsIHsgcmVmOiAnaW1hZ2UnLCBzcmM6IHN0eWxlcy5pY29uc1snZWRpdCddIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiBudWxsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdidG5DbGlja0hhbmRsZXInLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gYnRuQ2xpY2tIYW5kbGVyKGV2ZW50LCBhdXRob3JJZCkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ2J0bkNsaWNrSGFuZGxlcicsIGV2ZW50LCBhdXRob3JJZCk7XG4gICAgICAgICAgICB0aGlzLnByb3BzLnN0b3JlLmRpc3BhdGNoKHsgdHlwZTogJ3BpY3R1cmVJZCcsIHBpY3R1cmVJZDogYXV0aG9ySWQgfSk7XG4gICAgICAgICAgICBzd2l0Y2ggKGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgY2FzZSAnYnRuQWRkJzpcbiAgICAgICAgICAgICAgICAgICAgLy8g0L3QvtCy0LDRjyDQutCw0YDRgtC40L3QutCwXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgJ2VkaXQnOlxuICAgICAgICAgICAgICAgICAgICAvLyDQvNC10L3Rj9C10Lwg0YHRgtCw0YLRg9GBINC+0LrQvdCwXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuc3RvcmUuZGlzcGF0Y2goeyB0eXBlOiAnaXNQaWN0dXJlU2hvdycsIGlzUGljdHVyZVNob3c6IHRydWUgfSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBlZGl0RG9jdW1lbnQ6IHRydWUsIGF1dGhvcklkOiBhdXRob3JJZCB9KTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAnQ2FuY2VsJzpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGVkaXREb2N1bWVudDogZmFsc2UsIGF1dGhvcklkOiBudWxsIH0pO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICdzYXZlZCc6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBlZGl0RG9jdW1lbnQ6IGZhbHNlLCBhdXRob3JJZDogYXV0aG9ySWQgfSk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvKlxyXG4gICAgICAgICAgICAvISoqXHJcbiAgICAgICAgICAgICAqINC30LDQs9GA0YPQt9C60LAg0LTQsNC90L3Ri9GFXHJcbiAgICAgICAgICAgICAqIEByZXR1cm5zIHsqfFByb21pc2U8QXhpb3NSZXNwb25zZTx1bmtub3duPiB8IG5ldmVyPn1cclxuICAgICAgICAgICAgICohL1xyXG4gICAgICAgICAgICBmZXRjaERhdGEoZXZlbnQsIGRlYWxJZCkge1xyXG4gICAgICAgICAgICAgICAgbGV0IFVSTCA9IGAvbWFpbi9kZWFsX2FjY2VwdC9gO1xyXG4gICAgICAgICAgICAgICAgbGV0IHVzZXIgPSB0aGlzLnByb3BzLnN0b3JlLmdldFN0YXRlKCkuc3RhdHVzZXMudXNlcjtcclxuICAgICAgICAgICAgICAgIGxldCBwYXJhbXMgPSB7aWQ6IGRlYWxJZCwgZXZlbnQ6IGV2ZW50LCB1c2VyOiB1c2VyfTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZWQsIHJlamVjdGVkKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZldGNoRGF0YVsnZmV0Y2hEYXRhUG9zdCddKFVSTCwgcGFyYW1zKS50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGVycm9yIGhhbmRsaW5nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSAyMDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtpbmZvOiAnVXBkYXRlIHN1Y2NlZnVsbCd9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnByb3BzLmJ0bkNsaWNrRXZlbnRIYW5kbGVyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vINC00LDQtNC40Lwg0L3QsCDQstC10YDRhSDQutC+0LzQsNC90LTRgyDQvdCwINGA0LXQu9C+0LDQtFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmJ0bkNsaWNrRXZlbnRIYW5kbGVyKCdyZWxvYWQnKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlZChyZXNwb25zZS5kYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignc3RhdHVzICE9PSAyMDAnKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2luZm86ICdVcGRhdGUgd2l0aCBlcnJvcid9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByZWplY3RlZCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KS5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ2ZldGNoIGVycm9yJywgZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7aW5mbzogYFVwZGF0ZSB3aXRoIGVycm9yICR7ZXJyb3J9YH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVqZWN0ZWQoZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgKi9cblxuICAgIH1dLCBbe1xuICAgICAgICBrZXk6ICdnZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzKG5leHRQcm9wcywgcHJldlN0YXRlKSB7XG4gICAgICAgICAgICBpZiAobmV4dFByb3BzLmRlYWxzICE9PSBwcmV2U3RhdGUuZGVhbHMgfHwgSlNPTi5zdHJpbmdpZnkobmV4dFByb3BzLnVzZXIpICE9PSBKU09OLnN0cmluZ2lmeShwcmV2U3RhdGUudXNlcikpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4geyB2YWx1ZTogbmV4dFByb3BzLmRlYWxzLCB1c2VyOiBuZXh0UHJvcHMudXNlciB9O1xuICAgICAgICAgICAgfSBlbHNlIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgfV0pO1xuXG4gICAgcmV0dXJuIEF1dGhvcnNSZWdpc3RlckNvbXBvbmVudDtcbn0oUmVhY3QuUHVyZUNvbXBvbmVudCk7XG5cbm1vZHVsZS5leHBvcnRzID0gQXV0aG9yc1JlZ2lzdGVyQ29tcG9uZW50O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vZnJvbnRlbmQvZG9jcy9tYWluL2F1dGhvcnNSZWdpc3Rlci1jb21wb25lbnQuanN4XG4vLyBtb2R1bGUgaWQgPSAzODRcbi8vIG1vZHVsZSBjaHVua3MgPSAzIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbnZhciByYWRpdW0gPSByZXF1aXJlKCdyYWRpdW0nKTtcblxudmFyIFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKSxcbiAgICBzdHlsZXMgPSByZXF1aXJlKCcuL3N0eWxlcycpO1xuXG52YXIgRmlsdGVycyA9IGZ1bmN0aW9uIChfUmVhY3QkUHVyZUNvbXBvbmVudCkge1xuICAgIF9pbmhlcml0cyhGaWx0ZXJzLCBfUmVhY3QkUHVyZUNvbXBvbmVudCk7XG5cbiAgICBmdW5jdGlvbiBGaWx0ZXJzKHByb3BzKSB7XG4gICAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBGaWx0ZXJzKTtcblxuICAgICAgICB2YXIgX3RoaXMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCAoRmlsdGVycy5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKEZpbHRlcnMpKS5jYWxsKHRoaXMsIHByb3BzKSk7XG5cbiAgICAgICAgX3RoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICB2YWx1ZTogJycsXG4gICAgICAgICAgICByZWdpb246ICcnLFxuICAgICAgICAgICAgY29udGluZW50OiAnJyxcbiAgICAgICAgICAgIGNpdHk6ICcnXG4gICAgICAgIH07XG4gICAgICAgIF90aGlzLm9uQ2hhbmdlID0gX3RoaXMub25DaGFuZ2UuYmluZChfdGhpcyk7XG4gICAgICAgIF90aGlzLnVwZGF0ZVN0b3JlID0gX3RoaXMudXBkYXRlU3RvcmUuYmluZChfdGhpcyk7XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG5cbiAgICBfY3JlYXRlQ2xhc3MoRmlsdGVycywgW3tcbiAgICAgICAga2V5OiAnb25DaGFuZ2UnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gb25DaGFuZ2UoZSkge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHZhbHVlOiBlLnRhcmdldC52YWx1ZSB9KTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAncmVuZGVyJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgICAgICAgIHZhciBzdG9yZSA9IHRoaXMucHJvcHMuc3RvcmU7XG4gICAgICAgICAgICB2YXIgcmVnaW9ucyA9IFtdO1xuICAgICAgICAgICAgdmFyIGNvbnRpbmVudHMgPSBbXTtcbiAgICAgICAgICAgIHZhciBjaXRpZXMgPSBbXTtcbiAgICAgICAgICAgIGlmIChzdG9yZSkge1xuXG4gICAgICAgICAgICAgICAgcmVnaW9ucyA9IHN0b3JlLmdldFN0YXRlKCkuc3RhdHVzZXMucmVnaW9ucztcbiAgICAgICAgICAgICAgICBjb250aW5lbnRzID0gc3RvcmUuZ2V0U3RhdGUoKS5zdGF0dXNlcy5jb250aW5lbnRzO1xuICAgICAgICAgICAgICAgIGNpdGllcyA9IHN0b3JlLmdldFN0YXRlKCkuc3RhdHVzZXMuY2l0aWVzO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICAnZGl2JyxcbiAgICAgICAgICAgICAgICBudWxsLFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgICAgICdkaXYnLFxuICAgICAgICAgICAgICAgICAgICB7IHN0eWxlOiBzdHlsZXMuZmlsdGVyQmxvY2sgfSxcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICAgICAgICAgICdsYWJlbCcsXG4gICAgICAgICAgICAgICAgICAgICAgICB7IHN0eWxlOiBzdHlsZXMuZmlsdGVyTGFiZWwgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICdDb250aW5lbnRzOiAnXG4gICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgICAgICAgICAnc2VsZWN0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgcmVmOiAnc2VsZWN0LWNvbnRpbmVudHMnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlOiBzdHlsZXMuc2VsZWN0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiB0aGlzLnN0YXRlLmNvbnRpbmVudCB8fCAnJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogJ2NvbnRpbmVudCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2NvbnRpbmVudCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U6IHRoaXMub25DaGFuZ2UgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbmVudHMubWFwKGZ1bmN0aW9uIChpdGVtLCBpbmRleCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnb3B0aW9uJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyB2YWx1ZTogaXRlbSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnICcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICcnICsgaXRlbSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJyAnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgICAgICdkaXYnLFxuICAgICAgICAgICAgICAgICAgICB7IHN0eWxlOiBzdHlsZXMuZmlsdGVyQmxvY2sgfSxcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICAgICAgICAgICdsYWJlbCcsXG4gICAgICAgICAgICAgICAgICAgICAgICB7IHN0eWxlOiBzdHlsZXMuZmlsdGVyTGFiZWwgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICdSZWdpb25zOiAnXG4gICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgICAgICAgICAnc2VsZWN0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgcmVmOiAnc2VsZWN0LXJlZ2lvbicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU6IHN0eWxlcy5zZWxlY3QsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHRoaXMuc3RhdGUucmVnaW9uIHx8ICcnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiAncmVnaW9uJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAncmVnaW9uJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZTogdGhpcy5vbkNoYW5nZSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgcmVnaW9ucy5tYXAoZnVuY3Rpb24gKGl0ZW0sIGluZGV4KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdvcHRpb24nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHZhbHVlOiBpdGVtIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICcgJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJycgKyBpdGVtLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnICdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICAgICAgJ2RpdicsXG4gICAgICAgICAgICAgICAgICAgIHsgc3R5bGU6IHN0eWxlcy5maWx0ZXJCbG9jayB9LFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICAgICAgICAgJ2xhYmVsJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgc3R5bGU6IHN0eWxlcy5maWx0ZXJMYWJlbCB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgJ0NpdGllczogJ1xuICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICAgICAgICAgJ3NlbGVjdCcsXG4gICAgICAgICAgICAgICAgICAgICAgICB7IHJlZjogJ3NlbGVjdC1jaXRpZXMnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlOiBzdHlsZXMuc2VsZWN0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiB0aGlzLnN0YXRlLmNpdHkgfHwgJycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6ICdjaXR5JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAnY2l0eScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U6IHRoaXMub25DaGFuZ2UgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNpdGllcy5tYXAoZnVuY3Rpb24gKGl0ZW0sIGluZGV4KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdvcHRpb24nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHZhbHVlOiBpdGVtIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICcgJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJycgKyBpdGVtLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnICdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcclxuICAgICAgICAgKiDQntGC0YHQu9C10LTQuNGCINC40LfQvNC10L3QtdC90LjRjyDQt9C90LDRh9C10L3QuNC5INC/0L7Qu9C10Lkg0YTQuNC70YzRgtGA0LDRhtC40LhcclxuICAgICAgICAgKiBAcGFyYW0gZVxyXG4gICAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAgICBrZXk6ICdvbkNoYW5nZScsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBvbkNoYW5nZShlKSB7XG4gICAgICAgICAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgICAgICAgICAgdmFyIG5hbWUgPSBlLnRhcmdldC5uYW1lO1xuICAgICAgICAgICAgc3dpdGNoIChuYW1lKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAnY29udGluZW50JzpcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGNvbnRpbmVudDogZS50YXJnZXQudmFsdWUgfSwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdGhpczIudXBkYXRlU3RvcmUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYXNlICdyZWdpb24nOlxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgcmVnaW9uOiBlLnRhcmdldC52YWx1ZSB9LCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF90aGlzMi51cGRhdGVTdG9yZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhc2UgJ2NpdHknOlxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgY2l0eTogZS50YXJnZXQudmFsdWUgfSwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdGhpczIudXBkYXRlU3RvcmUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqINCe0LHQvdC+0LLQuNGC0YwgINC00L7Qvy4g0YTQuNC70YzRgtGAINCyINGB0YLQvtGA0LVcclxuICAgICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgICAga2V5OiAndXBkYXRlU3RvcmUnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gdXBkYXRlU3RvcmUoKSB7XG4gICAgICAgICAgICB2YXIgYWRkdGlvbmFsRmlsdGVyID0ge1xuICAgICAgICAgICAgICAgIGNvbnRpbmVudDogdGhpcy5zdGF0ZS5jb250aW5lbnQsXG4gICAgICAgICAgICAgICAgcmVnaW9uOiB0aGlzLnN0YXRlLnJlZ2lvbixcbiAgICAgICAgICAgICAgICBjaXR5OiB0aGlzLnN0YXRlLmNpdHlcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICB0aGlzLnByb3BzLnN0b3JlLmRpc3BhdGNoKHsgdHlwZTogJ2FkZGl0aW9uYWxGaWx0ZXInLCBhZGRpdGlvbmFsRmlsdGVyOiBhZGR0aW9uYWxGaWx0ZXIgfSk7XG4gICAgICAgIH1cbiAgICB9XSk7XG5cbiAgICByZXR1cm4gRmlsdGVycztcbn0oUmVhY3QuUHVyZUNvbXBvbmVudCk7XG5cbm1vZHVsZS5leHBvcnRzID0gcmFkaXVtKEZpbHRlcnMpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vZnJvbnRlbmQvZG9jcy9tYWluL2ZpbHRlci1jb21wb25lbnQuanN4XG4vLyBtb2R1bGUgaWQgPSAzODVcbi8vIG1vZHVsZSBjaHVua3MgPSAzIiwiJ3VzZSBzdHJpY3QnO1xuXG4vL2NvbnN0IHN0b3JlID0gcmVxdWlyZShcIi4uLy4uLy4uL3N0b3JlXCIpO1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbnZhciBQcm9wVHlwZXMgPSByZXF1aXJlKCdwcm9wLXR5cGVzJyk7XG52YXIgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xudmFyIF9mZXRjaERhdGEgPSByZXF1aXJlKCcuLy4uLy4uLy4uLy4uL2xpYnMvZmV0Y2hEYXRhJyk7XG52YXIgRG9jQ29udGV4dCA9IHJlcXVpcmUoJy4vLi4vLi4vLi4vZG9jLWNvbnRleHQuanMnKTtcbnZhciBzdHlsZXMgPSByZXF1aXJlKCcuL3N0eWxlcycpO1xuXG4vKipcclxuICog0JrQu9Cw0YHRgSDRgNC10LDQu9C40LfRg9C10YIg0LHQsNC30L7QstGL0Lkg0LTQvtC60YPQvNC10L3RgiAuXHJcbiAqL1xuXG52YXIgTWFpbkRvYyA9IGZ1bmN0aW9uIChfUmVhY3QkQ29tcG9uZW50KSB7XG4gICAgX2luaGVyaXRzKE1haW5Eb2MsIF9SZWFjdCRDb21wb25lbnQpO1xuXG4gICAgZnVuY3Rpb24gTWFpbkRvYyhwcm9wcykge1xuICAgICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgTWFpbkRvYyk7XG5cbiAgICAgICAgdmFyIF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgKE1haW5Eb2MuX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihNYWluRG9jKSkuY2FsbCh0aGlzLCBwcm9wcykpO1xuXG4gICAgICAgIF90aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgZG9jSWQ6IDAsIC8v0LXRgdC70LggSWQg0LTQvtC60YPQvNC10L3RgtCwINC90LUg0L/QtdGA0LXQtNCw0L0sINGC0L4g0YHQvtC30LTQsNC10Lwg0L3QvtCy0YvQuSDQtNC+0LpcbiAgICAgICAgICAgIHJlbG9hZERhdGE6IHRydWUsXG4gICAgICAgICAgICBkYXRhOiBbXSxcbiAgICAgICAgICAgIGlkOiAwLFxuICAgICAgICAgICAgc2VsZWN0ZWRGaWxlOiBudWxsLFxuICAgICAgICAgICAgc2VsZWN0ZWRGaWxlVHlwZTogJycsXG4gICAgICAgICAgICB1cGxvYWRlZEltYWdlOiBudWxsLFxuICAgICAgICAgICAgZmlsZU5hbWU6ICcnXG5cbiAgICAgICAgfTtcbiAgICAgICAgX3RoaXMuZmV0Y2hEYXRhID0gX3RoaXMuZmV0Y2hEYXRhLmJpbmQoX3RoaXMpO1xuICAgICAgICBfdGhpcy5idG5DbGljayA9IF90aGlzLmJ0bkNsaWNrLmJpbmQoX3RoaXMpO1xuICAgICAgICBfdGhpcy5yZW5kZXJUb29sQmFyID0gX3RoaXMucmVuZGVyVG9vbEJhci5iaW5kKF90aGlzKTtcbiAgICAgICAgX3RoaXMub25DaGFuZ2VJbnB1dCA9IF90aGlzLm9uQ2hhbmdlSW5wdXQuYmluZChfdGhpcyk7XG4gICAgICAgIF90aGlzLm9uQ2hhbmdlSGFuZGxlciA9IF90aGlzLm9uQ2hhbmdlSGFuZGxlci5iaW5kKF90aGlzKTtcblxuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuXG4gICAgX2NyZWF0ZUNsYXNzKE1haW5Eb2MsIFt7XG4gICAgICAgIGtleTogJ2NvbXBvbmVudERpZE1vdW50JyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuc3RhdGUucmVsb2FkRGF0YSAmJiB0aGlzLnByb3BzLm1hdGNoICYmIHRoaXMucHJvcHMubWF0Y2gucGFyYW1zLmRvY0lkKSB7XG4gICAgICAgICAgICAgICAgLy/QtNC10LvQsNC10Lwg0LfQsNC/0YDQvtGBINC90LAg0L/QvtC70YPRh9C10L3QuNC1INC00LDQvdC90YvRhVxuICAgICAgICAgICAgICAgIHRoaXMuZmV0Y2hEYXRhKHRoaXMucHJvcHMubWF0Y2gucGFyYW1zLmRvY0lkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAncmVuZGVyJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICdkaXYnLFxuICAgICAgICAgICAgICAgIHsgc3R5bGU6IHN0eWxlcy5kb2MgfSxcbiAgICAgICAgICAgICAgICB0aGlzLnJlbmRlclRvb2xCYXIoKSxcbiAgICAgICAgICAgICAgICAhdGhpcy5zdGF0ZS5kYXRhLmlkID8gUmVhY3QuY3JlYXRlRWxlbWVudCgnaW5wdXQnLCB7IHR5cGU6ICdmaWxlJyxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2ZpbGUnLFxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZTogdGhpcy5vbkNoYW5nZUhhbmRsZXIsXG4gICAgICAgICAgICAgICAgICAgIGFjY2VwdDogXCIuanBnXCIgfSkgOiBudWxsLFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgICAgICdkaXYnLFxuICAgICAgICAgICAgICAgICAgICB7IHN0eWxlOiBzdHlsZXMuZG9jUm93IH0sXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgICAgICAgICAnZGl2JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgc3R5bGU6IHN0eWxlcy5kb2NDb2x1bW4gfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2xhYmVsJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBudWxsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdDb2RlOiAnXG4gICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudCgnaW5wdXQnLCB7IHR5cGU6ICd0ZXh0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogJ2NvZGUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdrb29kJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZTogdGhpcy5vbkNoYW5nZUlucHV0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiB0aGlzLnN0YXRlLmRhdGEua29vZCB8fCAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdsYWJlbCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnRGVzY3JpcHRpb246ICdcbiAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KCdpbnB1dCcsIHsgdHlwZTogJ3RleHQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiAnZGVzY3JpcHRpb24nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdkZXNjcmlwdGlvbicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U6IHRoaXMub25DaGFuZ2VJbnB1dCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogdGhpcy5zdGF0ZS5kYXRhLmRlc2NyaXB0aW9uIHx8ICcnXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICAgICAgICAgJ2RpdicsXG4gICAgICAgICAgICAgICAgICAgICAgICB7IHN0eWxlOiBzdHlsZXMuZG9jQ29sdW1uIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdkaXYnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3R5bGU6IHN0eWxlcy5waWN0dXJlRnJhbWUgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmRhdGEuZmlsZSA/IFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2ltZycsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjOiB0aGlzLnN0YXRlLmRhdGEuaWQgPyAnZGF0YTppbWFnZS9qcGVnO2Jhc2U2NCwvJyArIHRoaXMuc3RhdGUuZGF0YS5maWxlIDogdGhpcy5zdGF0ZS51cGxvYWRlZEltYWdlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ6ICdJbWFnZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleTogJ2ltZ18xJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU6IHN0eWxlcy5waWN0dXJlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkgOiBudWxsXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdvbkNoYW5nZUlucHV0JyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIG9uQ2hhbmdlSW5wdXQoZSkge1xuICAgICAgICAgICAgdmFyIGZpZWxkVmFsdWUgPSBlLnRhcmdldC52YWx1ZTtcbiAgICAgICAgICAgIHZhciBmaWVsZE5hbWUgPSBlLnRhcmdldC5uYW1lO1xuICAgICAgICAgICAgdmFyIGRhdGEgPSB0aGlzLnN0YXRlLmRhdGE7XG5cbiAgICAgICAgICAgIHN3aXRjaCAoZmllbGROYW1lKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAna29vZCc6XG4gICAgICAgICAgICAgICAgICAgIGRhdGFbJ2tvb2QnXSA9IGZpZWxkVmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgJ2Rlc2NyaXB0aW9uJzpcbiAgICAgICAgICAgICAgICAgICAgZGF0YVsnZGVzY3JpcHRpb24nXSA9IGZpZWxkVmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgZGF0YTogZGF0YSB9KTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnb25DaGFuZ2VIYW5kbGVyJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIG9uQ2hhbmdlSGFuZGxlcihldmVudCkge1xuICAgICAgICAgICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICAgICAgICAgIHZhciBpbWcgPSBldmVudC50YXJnZXQuZmlsZXNbMF07XG4gICAgICAgICAgICB2YXIgaW1nTmFtZSA9IGltZy5uYW1lO1xuICAgICAgICAgICAgdmFyIHR5cGUgPSBpbWcudHlwZTtcblxuICAgICAgICAgICAgdmFyIHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XG4gICAgICAgICAgICByZWFkZXIucmVhZEFzRGF0YVVSTChldmVudC50YXJnZXQuZmlsZXNbMF0pO1xuICAgICAgICAgICAgdmFyIGRhdGEgPSB0aGlzLnN0YXRlLmRhdGE7XG4gICAgICAgICAgICBkYXRhWydmaWxlJ10gPSAnZmlsZSc7XG5cbiAgICAgICAgICAgIHJlYWRlci5vbmxvYWQgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICAgIF90aGlzMi5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgIHVwbG9hZGVkSW1hZ2U6IGUudGFyZ2V0LnJlc3VsdCxcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRGaWxlOiBVUkwuY3JlYXRlT2JqZWN0VVJMKGltZyksXG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkRmlsZVR5cGU6IHR5cGUsXG4gICAgICAgICAgICAgICAgICAgIGZpbGVOYW1lOiBpbWdOYW1lLFxuICAgICAgICAgICAgICAgICAgICBkYXRhOiBkYXRhXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog0JLQtdGA0L3QtdGCINC60L7QvNC/0L7QvdC10YIgLSDQv9Cw0L3QtdC70Ywg0LjQvdGB0YLRgNGD0LzQtdC90YLQvtCyINC00L7QutGD0LzQtdC90YLQsFxyXG4gICAgICAgICAqIEByZXR1cm5zIHtYTUx9XHJcbiAgICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ3JlbmRlclRvb2xCYXInLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyVG9vbEJhcigpIHtcbiAgICAgICAgICAgIHZhciB0b29sYmFyU3R5bGUgPSBPYmplY3QuYXNzaWduKHt9LCBzdHlsZXMudG9vbEJhckNvbnRhaW5lclN0eWxlLCBzdHlsZXMucmlnaHQpO1xuICAgICAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgJ2RpdicsXG4gICAgICAgICAgICAgICAgbnVsbCxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICAgICAnZGl2JyxcbiAgICAgICAgICAgICAgICAgICAgeyBzdHlsZTogc3R5bGVzLmRvY1JvdyB9LFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICAgICAgICAgJ2RpdicsXG4gICAgICAgICAgICAgICAgICAgICAgICB7IHJlZjogJ3Rvb2xiYXJDb250YWluZXInLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlOiB0b29sYmFyU3R5bGVcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdidXR0b24nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgb25DbGljazogdGhpcy5idG5DbGljayB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdTYXZlJ1xuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnYnRuQ2xpY2snLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gYnRuQ2xpY2soZXZlbnQpIHtcbiAgICAgICAgICAgIHZhciBfdGhpczMgPSB0aGlzO1xuXG4gICAgICAgICAgICB2YXIgZGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xuICAgICAgICAgICAgLy8g0LXRgdC70Lgg0YTQvtGC0L7Qs9GA0LDRhNC40Y8g0YPQttC1INC00L7QsdCw0LLQu9C10L3QsCwg0YLQviDQv9C+0LLRgtC+0YDQvdC+INC10LUg0YPQttC1INC90LUg0LTQvtCx0LDQu9GP0LXQvFxuICAgICAgICAgICAgaWYgKCF0aGlzLnN0YXRlLmRhdGEuaWQpIHtcblxuICAgICAgICAgICAgICAgIHZhciBpbWFnZSA9IG5ldyBGaWxlKFt0aGlzLnN0YXRlLnVwbG9hZGVkSW1hZ2VdLCB0aGlzLnN0YXRlLmZpbGVOYW1lKTtcbiAgICAgICAgICAgICAgICBkYXRhLmFwcGVuZCgnZmlsZScsIGltYWdlLCB0aGlzLnN0YXRlLmZpbGVOYW1lKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZGF0YS5hcHBlbmQoJ2lkJywgdGhpcy5zdGF0ZS5kYXRhLmlkKTtcbiAgICAgICAgICAgIGRhdGEuYXBwZW5kKCdrb29kJywgdGhpcy5zdGF0ZS5kYXRhLmtvb2QpO1xuICAgICAgICAgICAgZGF0YS5hcHBlbmQoJ2Rlc2NyaXB0aW9uJywgdGhpcy5zdGF0ZS5kYXRhLmRlc2NyaXB0aW9uKTtcblxuICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICAgICAgICBfZmV0Y2hEYXRhLmZldGNoRGF0YVBvc3QoJy91cGxvYWQnLCBkYXRhLCBfdGhpczMuc3RhdGUuc2VsZWN0ZWRGaWxlVHlwZSkudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gZXJyb3IgaGFuZGxpbmdcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gMjAwICYmIHJlc3BvbnNlLmRhdGEucmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJlc3BvbnNlLmRhdGEpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3RoaXMzLnByb3BzLmhpc3RvcnkucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGF0aG5hbWU6ICcvJ1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCd2aWdhJywgcmVzcG9uc2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlamVjdCgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqINC30LDQs9GA0YPQt9C60LAg0LTQsNC90L3Ri9GFXHJcbiAgICAgICAgICogQHJldHVybnMgeyp8UHJvbWlzZTxBeGlvc1Jlc3BvbnNlPHVua25vd24+IHwgbmV2ZXI+fVxyXG4gICAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAgICBrZXk6ICdmZXRjaERhdGEnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gZmV0Y2hEYXRhKGRvY0lkKSB7XG4gICAgICAgICAgICB2YXIgX3RoaXM0ID0gdGhpcztcblxuICAgICAgICAgICAgdmFyIFVSTCA9ICcvbWFpbi9kYXRhLycgKyBkb2NJZDtcbiAgICAgICAgICAgIHZhciBwYXJhbXMgPSB7fTtcbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZWQsIHJlamVjdGVkKSB7XG5cbiAgICAgICAgICAgICAgICBfZmV0Y2hEYXRhWydmZXRjaERhdGFQb3N0J10oVVJMLCBwYXJhbXMpLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGVycm9yIGhhbmRsaW5nXG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDIwMCkge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBsb2FkIHN0b3JlIHdpdGggZGF0YVxuICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXM0LnNldFN0YXRlKHsgcmVsb2FkOiBmYWxzZSwgZGF0YTogcmVzcG9uc2UuZGF0YS5kYXRhWzBdIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZWQocmVzcG9uc2UuZGF0YSk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdzdGF0dXMgIT09IDIwMCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlamVjdGVkKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KS5jYXRjaChmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignZmV0Y2ggZXJyb3InLCBlcnJvcik7XG4gICAgICAgICAgICAgICAgICAgIC8vIFNvbWV0aGluZyBoYXBwZW5lZCBpbiBzZXR0aW5nIHVwIHRoZSByZXF1ZXN0IHRoYXQgdHJpZ2dlcmVkIGFuIEVycm9yXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZWplY3RlZChlcnJvcik7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1dKTtcblxuICAgIHJldHVybiBNYWluRG9jO1xufShSZWFjdC5Db21wb25lbnQpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IE1haW5Eb2M7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9mcm9udGVuZC9kb2NzL21haW4vZG9jdW1lbnQvaW5kZXguanN4XG4vLyBtb2R1bGUgaWQgPSAzODZcbi8vIG1vZHVsZSBjaHVua3MgPSAzIiwiJ3VzZSBzdHJpY3QnO21vZHVsZS5leHBvcnRzPXtkb2NSb3c6e2Rpc3BsYXk6J2ZsZXgnLGZsZXhEaXJlY3Rpb246J3JvdycvKlxyXG4gICAgICAgICAgICAgICAgYm9yZGVyOiAnMXB4IHNvbGlkIGJsdWUnXHJcbiAgICAgICAgKi99LGRvY0NvbHVtbjp7ZGlzcGxheTonZmxleCcsZmxleERpcmVjdGlvbjonY29sdW1uJyxtYXJnaW46J2F1dG8nfSxkb2M6e2Rpc3BsYXk6J2ZsZXgnLGZsZXhEaXJlY3Rpb246J2NvbHVtbicvKlxyXG4gICAgICAgICAgICAgICAgYm9yZGVyOiAnMXB4IHNvbGlkIGJyb3duJ1xyXG4gICAgICAgICovfSxvazp7YmFja2dyb3VuZENvbG9yOidsaWdodGdyZWVuJyx3aWR0aDonMTAwJScsdGV4dEFsaWduOidyaWdodCd9LGVycm9yOntiYWNrZ3JvdW5kQ29sb3I6J2xpZ2h0Y29yYWwnLHdpZHRoOicxMDAlJyx0ZXh0QWxpZ246J3JpZ2h0J30sbm90VmFsaWQ6e2JhY2tncm91bmRDb2xvcjoneWVsbG93Jyx3aWR0aDonMTAwJScsdGV4dEFsaWduOidyaWdodCd9LG1vZGFsVmFsaWRhdGU6e2ljb25JbWFnZTonL2ltYWdlcy9pY29ucy9pbmZvLnBuZyd9LHBpY3R1cmVGcmFtZTp7d2lkdGg6JzUwJSd9LHBpY3R1cmU6e29iamVjdEZpdDonY29udGFpbicsd2lkdGg6JzEwMCUnfSx0b29sQmFyQ29udGFpbmVyU3R5bGU6e2Rpc3BsYXk6J2ZsZXgnLHdpZHRoOicxMDAlJyxoZWlnaHQ6J0F1dG8nLG1hcmdpbkJvdHRvbTonNXB4JyxtYXJnaW5IZWlnaHQ6JzVweCcsYm9yZGVyUmFkaXVzOic1cHgnfSxyaWdodDp7anVzdGlmeUNvbnRlbnQ6J2ZsZXgtZW5kJ30sbGVmdDp7anVzdGlmeUNvbnRlbnQ6J2ZsZXgtc3RhcnQnfX07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9mcm9udGVuZC9kb2NzL21haW4vZG9jdW1lbnQvc3R5bGVzLmpzXG4vLyBtb2R1bGUgaWQgPSAzODdcbi8vIG1vZHVsZSBjaHVua3MgPSAzIl0sIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FDSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FDdkdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUMzQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQ05BOzs7Ozs7QUNBQTs7Ozs7O0FDQUE7QUFDQTs7Ozs7O0FDREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FDVkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FDVkE7Ozs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQ1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FDdkJBO0FBQ0E7Ozs7OztBQ0RBOzs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUNoQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUNSQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQ3BCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FDZkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQ1RBOzs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUNMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQ0xBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQzlDQTtBQUNBOzs7Ozs7QUNEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUNWQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQ0xBOzs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQ0xBO0FBQ0E7Ozs7OztBQ0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FDUkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQzNFQTtBQUNBOzs7Ozs7QUNEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQ1JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUN2Q0E7Ozs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUNIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUM1QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FDaEJBO0FBQ0E7Ozs7OztBQ0RBOzs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQ3BIQTs7Ozs7O0FDQUE7Ozs7OztBQ0FBOzs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUNQQTtBQUNBOzs7Ozs7QUNEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUNoQkE7QUFDQTs7Ozs7O0FDREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUNSQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUM1QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUNMQTs7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUNSQTtBQUNBO0FBQ0E7Ozs7OztBQ0ZBOzs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQzFCQTs7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQ0hBOzs7Ozs7QUNBQTtBQUNBOzs7Ozs7QUNEQTtBQUNBO0FBQ0E7Ozs7OztBQ0ZBOzs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FDVEE7Ozs7OztBQ0FBOzs7Ozs7QUNBQTtBQUNBOzs7Ozs7QUNEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FDM0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUNyQkE7Ozs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQ1ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQ2xGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FDdFlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQ2pQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQ2pUQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FDaFBBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUMxUkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FDclhBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUMxUkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FDM1JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FDck1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUNsUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OyIsInNvdXJjZVJvb3QiOiIifQ==