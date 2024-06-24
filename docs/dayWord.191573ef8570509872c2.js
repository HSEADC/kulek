/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 2408:
/***/ ((__unused_webpack_module, exports) => {

var __webpack_unused_export__;
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var l=Symbol.for("react.element"),n=Symbol.for("react.portal"),p=Symbol.for("react.fragment"),q=Symbol.for("react.strict_mode"),r=Symbol.for("react.profiler"),t=Symbol.for("react.provider"),u=Symbol.for("react.context"),v=Symbol.for("react.forward_ref"),w=Symbol.for("react.suspense"),x=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),z=Symbol.iterator;function A(a){if(null===a||"object"!==typeof a)return null;a=z&&a[z]||a["@@iterator"];return"function"===typeof a?a:null}
var B={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},C=Object.assign,D={};function E(a,b,e){this.props=a;this.context=b;this.refs=D;this.updater=e||B}E.prototype.isReactComponent={};
E.prototype.setState=function(a,b){if("object"!==typeof a&&"function"!==typeof a&&null!=a)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,a,b,"setState")};E.prototype.forceUpdate=function(a){this.updater.enqueueForceUpdate(this,a,"forceUpdate")};function F(){}F.prototype=E.prototype;function G(a,b,e){this.props=a;this.context=b;this.refs=D;this.updater=e||B}var H=G.prototype=new F;
H.constructor=G;C(H,E.prototype);H.isPureReactComponent=!0;var I=Array.isArray,J=Object.prototype.hasOwnProperty,K={current:null},L={key:!0,ref:!0,__self:!0,__source:!0};
function M(a,b,e){var d,c={},k=null,h=null;if(null!=b)for(d in void 0!==b.ref&&(h=b.ref),void 0!==b.key&&(k=""+b.key),b)J.call(b,d)&&!L.hasOwnProperty(d)&&(c[d]=b[d]);var g=arguments.length-2;if(1===g)c.children=e;else if(1<g){for(var f=Array(g),m=0;m<g;m++)f[m]=arguments[m+2];c.children=f}if(a&&a.defaultProps)for(d in g=a.defaultProps,g)void 0===c[d]&&(c[d]=g[d]);return{$$typeof:l,type:a,key:k,ref:h,props:c,_owner:K.current}}
function N(a,b){return{$$typeof:l,type:a.type,key:b,ref:a.ref,props:a.props,_owner:a._owner}}function O(a){return"object"===typeof a&&null!==a&&a.$$typeof===l}function escape(a){var b={"=":"=0",":":"=2"};return"$"+a.replace(/[=:]/g,function(a){return b[a]})}var P=/\/+/g;function Q(a,b){return"object"===typeof a&&null!==a&&null!=a.key?escape(""+a.key):b.toString(36)}
function R(a,b,e,d,c){var k=typeof a;if("undefined"===k||"boolean"===k)a=null;var h=!1;if(null===a)h=!0;else switch(k){case "string":case "number":h=!0;break;case "object":switch(a.$$typeof){case l:case n:h=!0}}if(h)return h=a,c=c(h),a=""===d?"."+Q(h,0):d,I(c)?(e="",null!=a&&(e=a.replace(P,"$&/")+"/"),R(c,b,e,"",function(a){return a})):null!=c&&(O(c)&&(c=N(c,e+(!c.key||h&&h.key===c.key?"":(""+c.key).replace(P,"$&/")+"/")+a)),b.push(c)),1;h=0;d=""===d?".":d+":";if(I(a))for(var g=0;g<a.length;g++){k=
a[g];var f=d+Q(k,g);h+=R(k,b,e,f,c)}else if(f=A(a),"function"===typeof f)for(a=f.call(a),g=0;!(k=a.next()).done;)k=k.value,f=d+Q(k,g++),h+=R(k,b,e,f,c);else if("object"===k)throw b=String(a),Error("Objects are not valid as a React child (found: "+("[object Object]"===b?"object with keys {"+Object.keys(a).join(", ")+"}":b)+"). If you meant to render a collection of children, use an array instead.");return h}
function S(a,b,e){if(null==a)return a;var d=[],c=0;R(a,d,"","",function(a){return b.call(e,a,c++)});return d}function T(a){if(-1===a._status){var b=a._result;b=b();b.then(function(b){if(0===a._status||-1===a._status)a._status=1,a._result=b},function(b){if(0===a._status||-1===a._status)a._status=2,a._result=b});-1===a._status&&(a._status=0,a._result=b)}if(1===a._status)return a._result.default;throw a._result;}
var U={current:null},V={transition:null},W={ReactCurrentDispatcher:U,ReactCurrentBatchConfig:V,ReactCurrentOwner:K};function X(){throw Error("act(...) is not supported in production builds of React.");}
__webpack_unused_export__={map:S,forEach:function(a,b,e){S(a,function(){b.apply(this,arguments)},e)},count:function(a){var b=0;S(a,function(){b++});return b},toArray:function(a){return S(a,function(a){return a})||[]},only:function(a){if(!O(a))throw Error("React.Children.only expected to receive a single React element child.");return a}};__webpack_unused_export__=E;__webpack_unused_export__=p;__webpack_unused_export__=r;__webpack_unused_export__=G;__webpack_unused_export__=q;__webpack_unused_export__=w;
__webpack_unused_export__=W;__webpack_unused_export__=X;
__webpack_unused_export__=function(a,b,e){if(null===a||void 0===a)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+a+".");var d=C({},a.props),c=a.key,k=a.ref,h=a._owner;if(null!=b){void 0!==b.ref&&(k=b.ref,h=K.current);void 0!==b.key&&(c=""+b.key);if(a.type&&a.type.defaultProps)var g=a.type.defaultProps;for(f in b)J.call(b,f)&&!L.hasOwnProperty(f)&&(d[f]=void 0===b[f]&&void 0!==g?g[f]:b[f])}var f=arguments.length-2;if(1===f)d.children=e;else if(1<f){g=Array(f);
for(var m=0;m<f;m++)g[m]=arguments[m+2];d.children=g}return{$$typeof:l,type:a.type,key:c,ref:k,props:d,_owner:h}};__webpack_unused_export__=function(a){a={$$typeof:u,_currentValue:a,_currentValue2:a,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null};a.Provider={$$typeof:t,_context:a};return a.Consumer=a};__webpack_unused_export__=M;__webpack_unused_export__=function(a){var b=M.bind(null,a);b.type=a;return b};__webpack_unused_export__=function(){return{current:null}};
__webpack_unused_export__=function(a){return{$$typeof:v,render:a}};__webpack_unused_export__=O;__webpack_unused_export__=function(a){return{$$typeof:y,_payload:{_status:-1,_result:a},_init:T}};__webpack_unused_export__=function(a,b){return{$$typeof:x,type:a,compare:void 0===b?null:b}};__webpack_unused_export__=function(a){var b=V.transition;V.transition={};try{a()}finally{V.transition=b}};__webpack_unused_export__=X;__webpack_unused_export__=function(a,b){return U.current.useCallback(a,b)};__webpack_unused_export__=function(a){return U.current.useContext(a)};
__webpack_unused_export__=function(){};__webpack_unused_export__=function(a){return U.current.useDeferredValue(a)};__webpack_unused_export__=function(a,b){return U.current.useEffect(a,b)};__webpack_unused_export__=function(){return U.current.useId()};__webpack_unused_export__=function(a,b,e){return U.current.useImperativeHandle(a,b,e)};__webpack_unused_export__=function(a,b){return U.current.useInsertionEffect(a,b)};__webpack_unused_export__=function(a,b){return U.current.useLayoutEffect(a,b)};
__webpack_unused_export__=function(a,b){return U.current.useMemo(a,b)};__webpack_unused_export__=function(a,b,e){return U.current.useReducer(a,b,e)};__webpack_unused_export__=function(a){return U.current.useRef(a)};__webpack_unused_export__=function(a){return U.current.useState(a)};__webpack_unused_export__=function(a,b,e){return U.current.useSyncExternalStore(a,b,e)};__webpack_unused_export__=function(){return U.current.useTransition()};__webpack_unused_export__="18.3.1";


/***/ }),

/***/ 7294:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



if (true) {
  /* unused reexport */ __webpack_require__(2408);
} else {}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7294);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



var A_Modal = function A_Modal(_ref) {
  var onModalRef = _ref.onModalRef,
      onModalRef2 = _ref.onModalRef2,
      words = _ref.words;

  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      showImageInDiv = _useState2[0],
      setShowImageInDiv = _useState2[1];

  var _useState3 = useState(''),
      _useState4 = _slicedToArray(_useState3, 2),
      initialImageSrc = _useState4[0],
      setInitialImageSrc = _useState4[1];

  var _useState5 = useState(false),
      _useState6 = _slicedToArray(_useState5, 2),
      wordGenerated = _useState6[0],
      setWordGenerated = _useState6[1];

  var _useState7 = useState(null),
      _useState8 = _slicedToArray(_useState7, 2),
      selectedWord = _useState8[0],
      setSelectedWord = _useState8[1];

  var _useState9 = useState({}),
      _useState10 = _slicedToArray(_useState9, 2),
      styles = _useState10[0],
      setStyles = _useState10[1];

  useEffect(function () {
    var initialImage = document.querySelector('.A_imageWordMain');

    if (initialImage) {
      setInitialImageSrc(initialImage.src);
    }
  }, []);

  var handleClick = function handleClick() {
    setShowImageInDiv(true);
    setWordGenerated(true);
    var word = words[0];
    setSelectedWord(_objectSpread(_objectSpread({}, word), {}, {
      tag: getTag(word.sub)
    }));
  };

  var getTag = function getTag(sub) {
    switch (sub) {
      case '20-е':
        return 'зумерский слэнг';

      case '10-е':
        return 'зумерский слэнг';

      case '90-е':
        return 'сленг 90-х';

      case '80-е':
        return 'сленг 80-х';

      case '70-е':
        return 'сленг 70-х';

      default:
        return 'сленг 60-х';
    }
  };

  var handleOverlayClick = function handleOverlayClick(event) {
    if (event.target.id === 'overlay') {
      setShowImageInDiv(false);
      setWordGenerated(false);
      setSelectedWord(null);
    }
  };

  var handleCloseClick = function handleCloseClick() {
    setShowImageInDiv(false);
    setWordGenerated(false);
    setSelectedWord(null);
  };

  useEffect(function () {
    var cancelImage = document.querySelector('.A_Cancel');

    if (cancelImage) {
      cancelImage.addEventListener('click', handleCloseClick);
    }

    return function () {
      if (cancelImage) {
        cancelImage.removeEventListener('click', handleCloseClick);
      }
    };
  }, []);
  useEffect(function () {
    if (showImageInDiv) {
      var A_imageWordMain = document.querySelector('.A_imageWordMain3');

      if (A_imageWordMain) {
        A_imageWordMain.src = words[0]['img'];
      } else {
        console.error('Element with class A_imageWordMain3 not found');
      }
    } else {
      var initialImage = document.querySelector('.A_imageWordMain');

      if (initialImage) {
        initialImage.src = initialImageSrc;
      }
    }
  }, [showImageInDiv, initialImageSrc, words]);
  var modalStyle = wordGenerated ? {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  } : {
    display: 'flex'
  };
  var header2Style = wordGenerated ? {
    width: '31.097vw'
  } : {
    width: '22.486vw'
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "A_Overlay",
    id: "overlay",
    onClick: handleOverlayClick
  }, /*#__PURE__*/React.createElement("div", {
    className: "A_Modal ".concat(styles.M_color),
    id: "modal",
    ref: onModalRef,
    style: modalStyle
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../images/main/A_Cancel.svg",
    className: "A_Cancel",
    alt: "Close"
  }), showImageInDiv ? /*#__PURE__*/React.createElement("div", {
    className: "A_imageWordMain2",
    ref: onModalRef2
  }, /*#__PURE__*/React.createElement("img", {
    src: initialImageSrc,
    alt: "\u041E\u0431\u043B\u043E\u0436\u043A\u0430 \u0442\u0435\u0441\u0442\u0430",
    className: "A_imageWordMain3"
  })) : /*#__PURE__*/React.createElement("img", {
    src: "../../images/main/A_imageWordMain.png",
    alt: "\u041E\u0431\u043B\u043E\u0436\u043A\u0430 \u0442\u0435\u0441\u0442\u0430",
    className: "A_imageWordMain",
    ref: onModalRef2
  }), /*#__PURE__*/React.createElement("div", {
    className: "W_textsWord"
  }, wordGenerated && selectedWord && /*#__PURE__*/React.createElement("h1", {
    className: "A_newHeader ".concat(styles.A_nameCard),
    dangerouslySetInnerHTML: {
      __html: selectedWord.tag
    }
  }), /*#__PURE__*/React.createElement("h1", {
    className: "A_headerStartTest ".concat(styles.A_nameCard),
    dangerouslySetInnerHTML: {
      __html: wordGenerated && selectedWord ? selectedWord.word : 'Сгенерируй слово сегодняшнего дня'
    }
  }), /*#__PURE__*/React.createElement("h2", {
    className: "A_header2StartTest ".concat(styles.A_descCard),
    style: header2Style,
    dangerouslySetInnerHTML: {
      __html: wordGenerated && selectedWord ? selectedWord.bigDesc : 'Сгенерируй слово дня и&nbsp;узнай больше о&nbsp;сленге разных поколений'
    }
  }), /*#__PURE__*/React.createElement("button", {
    className: "A_buttonStartTest ".concat(styles.A_ageTag),
    onClick: handleClick
  }, "\u0441\u0433\u0435\u043D\u0435\u0440\u0438\u0440\u043E\u0432\u0430\u0442\u044C"))));
};

/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (A_Modal)));
})();

/******/ })()
;