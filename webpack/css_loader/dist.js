/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index_css__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__index_css__);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(2);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(4)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../node_modules/css-loader/index.js!./index.css", function() {
			var newContent = require("!!../node_modules/css-loader/index.js!./index.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(undefined);
// imports


// module
exports.push([module.i, ".footer {\r\n  width: 100%;\r\n  -webkit-box-flex: 0;\r\n      -ms-flex: 0 0 auto;\r\n          flex: 0 0 auto; }\r\n\r\n.footer__inner {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -ms-flex-wrap: wrap;\r\n      flex-wrap: wrap;\r\n  -webkit-box-pack: justify;\r\n      -ms-flex-pack: justify;\r\n          justify-content: space-between;\r\n  -ms-flex-line-pack: center;\r\n      align-content: center;\r\n  padding: 0.4em 0;\r\n  border-top: 1px solid #f2f2f2; }\r\n  @media (min-width: 768px) {\r\n    .footer__inner {\r\n      -webkit-box-orient: vertical;\r\n      -webkit-box-direction: normal;\r\n          -ms-flex-direction: initial;\r\n              flex-direction: initial; } }\r\n\r\n.footer__left,\r\n.footer__right {\r\n  -webkit-box-flex: 0;\r\n      -ms-flex: 0 0 auto;\r\n          flex: 0 0 auto;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  margin: auto;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n  padding: 0.25em 0; }\r\n  @media (min-width: 768px) {\r\n    .footer__left,\r\n    .footer__right {\r\n      margin: 0;\r\n      padding: 0; } }\r\n\r\n@media (min-width: 768px) {\r\n  .footer__left {\r\n    padding-left: 1.5em; } }\r\n\r\n@media (min-width: 768px) {\r\n  .footer__right {\r\n    padding-right: 1.5em; } }\r\n\r\n.footer__middle {\r\n  display: none; }\r\n  @media (min-width: 768px) {\r\n    .footer__middle {\r\n      -webkit-box-flex: 0;\r\n          -ms-flex: 0 0 auto;\r\n              flex: 0 0 auto;\r\n      display: block; } }\r\n\r\n.footer__icon {\r\n  display: inline-block;\r\n  height: 35px; }\r\n  .footer__icon img {\r\n    width: auto;\r\n    height: 100%; }\r\n\r\n.footer__link {\r\n  font-size: 11px;\r\n  text-transform: uppercase;\r\n  color: #999999;\r\n  -webkit-font-smoothing: subpixel-antialiased;\r\n  -moz-osx-font-smoothing: auto; }\r\n  .footer__link:not(:last-child) {\r\n    margin-right: 1.5em; }\r\n  .footer__link:hover {\r\n    color: #333333; }\r\n\r\n.footer__license {\r\n  display: inline-block;\r\n  height: 25px; }\r\n  .footer__license img {\r\n    width: auto;\r\n    height: 100%;\r\n    margin-left: 1px; }\r\n.site {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: column;\r\n          flex-direction: column;\r\n  min-height: 100vh;\r\n  overflow: hidden; }\r\n  .site.nav-displayed {\r\n    height: 100vh; }\r\n/**\r\n * Styling\r\n *\r\n * This file contains the base styling for the site.\r\n *\r\n */\r\n@font-face {\r\n  font-family: 'Geomanist';\r\n  src: url(/1ebd0482aadade65f20ec178219fe012.woff2) format(\"woff2\"), url(/314bbcd238d458622bbf32427346774f.woff) format(\"woff\");\r\n  font-weight: 600;\r\n  font-style: normal; }\r\n\r\n/* Reset */\r\nhtml, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, b, u, i, center, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, embed, figure, figcaption, footer, header, hgroup, menu, nav, output, ruby, section, summary, time, mark, audio, video {\r\n  border: 0;\r\n  font-size: 100%;\r\n  font: inherit;\r\n  vertical-align: baseline;\r\n  margin: 0;\r\n  padding: 0; }\r\n\r\narticle, aside, details, figcaption, figure, footer, header, hgroup, menu, nav, section {\r\n  display: block; }\r\n\r\nbody {\r\n  line-height: 1; }\r\n\r\nblockquote, q {\r\n  quotes: none; }\r\n\r\nblockquote:before, blockquote:after, q:before, q:after {\r\n  content: none; }\r\n\r\ntable {\r\n  border-collapse: collapse;\r\n  border-spacing: 0; }\r\n\r\n*, *:before, *:after {\r\n  -webkit-box-sizing: border-box;\r\n  box-sizing: border-box; }\r\n\r\n* {\r\n  -webkit-box-sizing: inherit;\r\n          box-sizing: inherit; }\r\n\r\nhtml {\r\n  -webkit-box-sizing: border-box;\r\n          box-sizing: border-box; }\r\n\r\nbody {\r\n  font: 400 16px \"Source Sans Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Helvetica, Arial, sans-serif;\r\n  color: #2B3A42;\r\n  -webkit-font-smoothing: antialiased;\r\n  -moz-osx-font-smoothing: grayscale; }\r\n\r\na {\r\n  color: #2086d7;\r\n  text-decoration: none;\r\n  -webkit-transition: color 250ms;\r\n  transition: color 250ms; }\r\n  a.icon-link {\r\n    display: inline-block;\r\n    font-size: 0.7em;\r\n    margin-left: 16px;\r\n    -webkit-transform: rotate(-45deg);\r\n            transform: rotate(-45deg);\r\n    color: #b3b3b3; }\r\n    a.icon-link:hover {\r\n      color: #2086d7; }\r\n  a:hover {\r\n    color: #1a6aab; }\r\n\r\ndetails:focus, summary:focus {\r\n  outline: none;\r\n  background: rgba(255, 255, 255, 0.03);\r\n  border-radius: 2px; }\r\n\r\n@media screen and (-webkit-min-device-pixel-ratio: 0) {\r\n  /* Style details arrow if on webkit */\r\n  details summary::-webkit-details-marker {\r\n    color: #8DD6F9; }\r\n  summary::-webkit-details-marker {\r\n    display: none; }\r\n  summary:after {\r\n    content: \"\\F103\";\r\n    float: left;\r\n    position: relative;\r\n    left: -2px;\r\n    text-align: center;\r\n    font-family: icons;\r\n    color: #3192e0; }\r\n  details[open] summary:after {\r\n    content: \"\\F101\";\r\n    font-family: icons; } }\r\n\r\n::-moz-selection {\r\n  background: rgba(141, 214, 249, 0.35); }\r\n\r\n::selection {\r\n  background: rgba(141, 214, 249, 0.35); }\r\n\r\ncode[class*=\"lang-\"],\r\npre[class*=\"lang-\"] {\r\n  text-align: left;\r\n  white-space: pre;\r\n  word-spacing: normal;\r\n  word-break: normal;\r\n  word-wrap: normal;\r\n  line-height: 1.5;\r\n  -moz-tab-size: 4;\r\n    -o-tab-size: 4;\r\n       tab-size: 4;\r\n  -webkit-hyphens: none;\r\n      -ms-hyphens: none;\r\n          hyphens: none;\r\n  color: #a5cee1;\r\n  -webkit-font-smoothing: subpixel-antialiased;\r\n  -moz-osx-font-smoothing: auto; }\r\n  code[class*=\"lang-\"] a,\r\n  pre[class*=\"lang-\"] a {\r\n    color: inherit; }\r\n\r\n/* Code blocks */\r\npre[class*=\"lang-\"] {\r\n  padding: .4em .8em;\r\n  margin: .5em 0;\r\n  overflow: auto;\r\n  background-color: #2B3A42; }\r\n\r\n/* Inline code */\r\n:not(pre) > code[class*=\"lang-\"] {\r\n  padding: .2em;\r\n  border-radius: .3em;\r\n  -webkit-box-shadow: none;\r\n          box-shadow: none;\r\n  white-space: normal; }\r\n\r\n.token.comment,\r\n.token.prolog,\r\n.token.doctype,\r\n.token.cdata {\r\n  color: #77858c; }\r\n\r\n.token.punctuation {\r\n  color: #e1e6e9; }\r\n\r\n.namespace {\r\n  opacity: .7; }\r\n\r\n.token.property,\r\n.token.tag,\r\n.token.boolean,\r\n.token.number,\r\n.token.constant,\r\n.token.symbol {\r\n  color: #53b7e6; }\r\n\r\n.token.selector,\r\n.token.string,\r\n.token.char,\r\n.token.builtin,\r\n.token.regex,\r\n.token.attr-value,\r\n.token.important {\r\n  color: #4db277; }\r\n\r\n.token.inserted {\r\n  color: #9df29d; }\r\n\r\n.token.deleted {\r\n  color: #f79494; }\r\n\r\n.token.operator,\r\n.token.entity,\r\n.token.url,\r\n.language-css .token.string,\r\n.toke.variable {\r\n  color: #a9becc; }\r\n\r\n.token.atrule,\r\n.token.attr-name,\r\n.token.keyword,\r\n.token.function {\r\n  color: #62b1d8; }\r\n\r\n.token.important,\r\n.token.bold {\r\n  font-weight: bold; }\r\n\r\n.token.italic {\r\n  font-style: italic; }\r\n\r\n.token.entity {\r\n  cursor: help; }\r\n\r\n.page__content {\r\n  line-height: 1.5em; }\r\n  .page__content h1 {\r\n    font-size: 33px; }\r\n  .page__content h2 {\r\n    font-size: 28px; }\r\n  .page__content h3 {\r\n    font-size: 23px; }\r\n  .page__content h4 {\r\n    font-size: 19px; }\r\n  .page__content h5 {\r\n    font-size: 16px; }\r\n  .page__content h6 {\r\n    font-size: 13px; }\r\n  .page__content h1, .page__content h2, .page__content h3, .page__content h4, .page__content h5, .page__content h6 {\r\n    font-family: Geomanist, sans-serif;\r\n    font-weight: 600;\r\n    line-height: 1.4;\r\n    margin: 1.5em 0 0.25em;\r\n    color: #465E69; }\r\n    .page__content h1:first-child, .page__content h2:first-child, .page__content h3:first-child, .page__content h4:first-child, .page__content h5:first-child, .page__content h6:first-child {\r\n      margin-top: 0;\r\n      line-height: 1; }\r\n    .page__content h1 tt, .page__content h1 code, .page__content h2 tt, .page__content h2 code, .page__content h3 tt, .page__content h3 code, .page__content h4 tt, .page__content h4 code, .page__content h5 tt, .page__content h5 code, .page__content h6 tt, .page__content h6 code {\r\n      font-size: 90%;\r\n      color: inherit; }\r\n  .page__content p, .page__content blockquote, .page__content table, .page__content pre {\r\n    margin: 1em 0;\r\n    font-size: 0.875em; }\r\n  .page__content ul, .page__content ol, .page__content dl {\r\n    margin: 0.5em 0 1em; }\r\n  .page__content li {\r\n    margin: 0.5em 0;\r\n    font-size: 0.875em; }\r\n  .page__content hr {\r\n    border: none;\r\n    background-color: #dedede;\r\n    height: 3px;\r\n    margin: 2em 0; }\r\n  .page__content ul, .page__content ol {\r\n    padding-left: 30px; }\r\n    .page__content ul:first-child, .page__content ol:first-child {\r\n      margin-top: 0; }\r\n    .page__content ul:last-child, .page__content ol:last-child {\r\n      margin-bottom: 0; }\r\n  .page__content dl dt {\r\n    font-size: 16px;\r\n    font-weight: bold;\r\n    font-style: italic;\r\n    margin: 15px 0 5px; }\r\n    .page__content dl dt:first-child {\r\n      padding: 0; }\r\n  .page__content dl dd {\r\n    margin: 0 0 15px;\r\n    padding: 0 15px; }\r\n  .page__content dl dt > :first-child, .page__content dl dd > :first-child {\r\n    margin-top: 0; }\r\n  .page__content dl dt > :last-child, .page__content dl dd > :last-child {\r\n    margin-bottom: 0; }\r\n  .page__content blockquote {\r\n    border-left: 4px solid #dddddd;\r\n    padding: 0.75em 1em;\r\n    color: #666666; }\r\n    .page__content blockquote > :first-child {\r\n      margin-top: 0; }\r\n    .page__content blockquote > :last-child {\r\n      margin-bottom: 0; }\r\n    .page__content blockquote.tip, .page__content blockquote.warning, .page__content blockquote.todo {\r\n      border-left: none;\r\n      border-radius: 3px; }\r\n      .page__content blockquote.tip .tip-content, .page__content blockquote.warning .tip-content, .page__content blockquote.todo .tip-content {\r\n        font-style: italic; }\r\n      .page__content blockquote.tip code, .page__content blockquote.warning code, .page__content blockquote.todo code {\r\n        color: inherit; }\r\n    .page__content blockquote.tip {\r\n      background-color: #DCF2FD;\r\n      color: #618ca0; }\r\n    .page__content blockquote.warning {\r\n      background-color: #fbedb7;\r\n      color: #8c8466; }\r\n    .page__content blockquote.todo {\r\n      background-color: #fbddcd;\r\n      color: #907a6e; }\r\n      .page__content blockquote.todo .tip-content::before {\r\n        content: '[TODO]: ';\r\n        font-style: normal; }\r\n  .page__content .table {\r\n    margin: 1em 0; }\r\n    @media (min-width: 768px) {\r\n      .page__content .table {\r\n        overflow-x: auto;\r\n        overflow-y: hidden; } }\r\n    .page__content .table-wrap {\r\n      display: block;\r\n      width: 100%; }\r\n      @media (min-width: 768px) {\r\n        .page__content .table-wrap {\r\n          display: table;\r\n          border-left: 1px solid #cccccc;\r\n          border-bottom: 1px solid #cccccc; } }\r\n    .page__content .table-tr {\r\n      background-color: white;\r\n      margin: 0;\r\n      padding: 0.25em 0;\r\n      display: block;\r\n      border: 1px solid #cccccc;\r\n      border-bottom: none; }\r\n      @media (min-width: 768px) {\r\n        .page__content .table-tr {\r\n          border: none;\r\n          padding: 0;\r\n          display: table-row; } }\r\n      .page__content .table-tr:nth-child(2n) {\r\n        background-color: #f8f8f8; }\r\n      .page__content .table-tr:last-child {\r\n        border-bottom: 1px solid #cccccc; }\r\n    .page__content .table-th {\r\n      font-weight: bold;\r\n      border-bottom: none;\r\n      text-align: left;\r\n      margin: 0;\r\n      padding: 6px 12px;\r\n      background: #f1f4f4; }\r\n    .page__content .table-td {\r\n      text-align: left;\r\n      margin: 0;\r\n      padding: 4px 12px; }\r\n      .page__content .table-td img {\r\n        max-width: none; }\r\n      .page__content .table-td-title {\r\n        display: block;\r\n        width: 40%; }\r\n        @media (min-width: 768px) {\r\n          .page__content .table-td-title {\r\n            display: none;\r\n            width: auto; } }\r\n      .page__content .table-td-content {\r\n        display: block;\r\n        width: 60%; }\r\n        .page__content .table-td-content code {\r\n          white-space: normal;\r\n          word-break: break-word; }\r\n        @media (min-width: 768px) {\r\n          .page__content .table-td-content {\r\n            width: auto; }\r\n            .page__content .table-td-content code {\r\n              word-break: normal;\r\n              white-space: nowrap; } }\r\n    .page__content .table-th, .page__content .table-td {\r\n      display: -webkit-box;\r\n      display: -ms-flexbox;\r\n      display: flex;\r\n      -ms-flex-preferred-size: 100%;\r\n          flex-basis: 100%;\r\n      -ms-flex-item-align: stretch;\r\n          align-self: stretch; }\r\n      @media (min-width: 768px) {\r\n        .page__content .table-th, .page__content .table-td {\r\n          border-top: 1px solid #cccccc;\r\n          border-right: 1px solid #cccccc;\r\n          display: table-cell; } }\r\n    .page__content .table-header {\r\n      display: none; }\r\n      .page__content .table-header .table-tr {\r\n        border-bottom: none; }\r\n      @media (min-width: 768px) {\r\n        .page__content .table-header {\r\n          display: table-header-group; } }\r\n    @media (min-width: 768px) {\r\n      .page__content .table-body {\r\n        display: table-row-group; } }\r\n  .page__content img:not([class*=\"support__\"]) {\r\n    max-width: 100%;\r\n    height: auto; }\r\n  .page__content b, .page__content strong {\r\n    font-weight: 600; }\r\n  .page__content i, .page__content em {\r\n    font-style: italic; }\r\n  .page__content code, .page__content tt {\r\n    font-family: \"Source Code Pro\", Consolas, \"Liberation Mono\", Menlo, Courier, monospace;\r\n    font-size: 90%;\r\n    margin: 0 2px;\r\n    padding: 2px 6px;\r\n    white-space: nowrap;\r\n    background-color: rgba(70, 94, 105, 0.06);\r\n    border-radius: 3px;\r\n    text-shadow: 0 1px 0 rgba(255, 255, 255, 0.6); }\r\n  .page__content a code {\r\n    color: #2086d7; }\r\n  .page__content pre {\r\n    background-color: rgba(238, 238, 238, 0.35);\r\n    background-color: #2B3A42;\r\n    font-size: 13px;\r\n    line-height: 19px;\r\n    overflow: auto;\r\n    padding: 8px 16px;\r\n    border-radius: 3px; }\r\n    .page__content pre code {\r\n      margin: 0;\r\n      padding: 0;\r\n      white-space: pre;\r\n      border: none;\r\n      background: transparent;\r\n      text-shadow: 0 1px 0 rgba(23, 31, 35, 0.5);\r\n      color: #a5cee1; }\r\n      .page__content pre code .code-details-summary-span {\r\n        margin-left: -15px;\r\n        cursor: pointer; }\r\n      .page__content pre code a {\r\n        border-bottom: 1px dotted #1D78C1; }\r\n      .page__content pre code .code-link {\r\n        position: relative; }\r\n        .page__content pre code .code-link:hover {\r\n          color: #479ee3; }\r\n    .page__content pre code, .page__content pre tt {\r\n      background-color: transparent;\r\n      border: none; }\r\n  .page__content p code, .page__content p tt {\r\n    max-width: 100%;\r\n    line-height: initial;\r\n    overflow: auto;\r\n    margin: 0;\r\n    vertical-align: middle; }\r\n  .page__content span code, .page__content span tt {\r\n    white-space: pre-line; }\r\n@font-face {\r\n  font-family: \"icons\";\r\n  src: url(\"data:application/font-woff;charset=utf-8;base64,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\") format(\"woff\");\r\n}\r\n\r\n[class*=\"icon-\"] {\r\n  line-height: 1;\r\n}\r\n\r\n[class*=\"icon-\"]:before {\r\n  font-family: icons !important;\r\n  font-style: normal;\r\n  font-weight: normal !important;\r\n}\r\n\r\n.icon-chevron-down:before {\r\n  content: \"\\F101\";\r\n}\r\n.icon-chevron-left:before {\r\n  content: \"\\F102\";\r\n}\r\n.icon-chevron-right:before {\r\n  content: \"\\F103\";\r\n}\r\n.icon-chevron-up:before {\r\n  content: \"\\F104\";\r\n}\r\n.icon-cross:before {\r\n  content: \"\\F105\";\r\n}\r\n.icon-edit:before {\r\n  content: \"\\F106\";\r\n}\r\n.icon-exit-right:before {\r\n  content: \"\\F107\";\r\n}\r\n.icon-github:before {\r\n  content: \"\\F108\";\r\n}\r\n.icon-gitter:before {\r\n  content: \"\\F109\";\r\n}\r\n.icon-link:before {\r\n  content: \"\\F10A\";\r\n}\r\n.icon-magnifying-glass:before {\r\n  content: \"\\F10B\";\r\n}\r\n.icon-medium:before {\r\n  content: \"\\F10C\";\r\n}\r\n.icon-menu:before {\r\n  content: \"\\F10D\";\r\n}\r\n.icon-stack-overflow:before {\r\n  content: \"\\F10E\";\r\n}\r\n.icon-vertical-bar:before {\r\n  content: \"\\F10F\";\r\n}\r\n.container {\r\n  width: 100%;\r\n  max-width: 1024px;\r\n  margin: 0 auto; }\r\n.notification-bar {\r\n  color: #ffffff;\r\n  background: #535353; }\r\n  .notification-bar p:not(:last-child) {\r\n    padding-bottom: 1em; }\r\n  .notification-bar p {\r\n    font-size: 14px; }\r\n  .notification-bar a {\r\n    color: #8DD6F9; }\r\n    .notification-bar a:hover {\r\n      color: #14aaf3; }\r\n  .notification-bar--dismissed {\r\n    display: none; }\r\n\r\n.notification-bar__inner {\r\n  position: relative;\r\n  padding: 0.5em 1em; }\r\n  @media (min-width: 768px) {\r\n    .notification-bar__inner {\r\n      padding: 0.5em 1.5em; } }\r\n\r\n.notification-bar__close {\r\n  color: #ffffff;\r\n  font-size: 16px;\r\n  padding: 0;\r\n  background: none;\r\n  border: none;\r\n  position: absolute;\r\n  top: 10px;\r\n  right: 1em;\r\n  cursor: pointer;\r\n  -webkit-transition: color 250ms;\r\n  transition: color 250ms; }\r\n  .notification-bar__close:hover {\r\n    color: #8DD6F9; }\r\n  @media (min-width: 768px) {\r\n    .notification-bar__close {\r\n      right: 1.5em; } }\r\n.navigation {\r\n  -webkit-box-flex: 0;\r\n      -ms-flex: 0 0 auto;\r\n          flex: 0 0 auto;\r\n  -webkit-transition: background 250ms;\r\n  transition: background 250ms;\r\n  background: #2B3A42; }\r\n\r\n.navigation__inner {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n  position: relative;\r\n  padding: 0.6em 1em; }\r\n  @media (min-width: 768px) {\r\n    .navigation__inner {\r\n      padding: 0 1.5em; } }\r\n\r\n.navigation__mobile {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  font-size: 1.5em;\r\n  position: absolute;\r\n  top: .64em;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n  color: #ffffff;\r\n  cursor: pointer;\r\n  -webkit-transition: color 250ms;\r\n  transition: color 250ms; }\r\n  .navigation__mobile:active {\r\n    color: #dedede; }\r\n  @media (min-width: 768px) {\r\n    .navigation__mobile {\r\n      display: none; } }\r\n  .navigation__mobile .icon-menu {\r\n    display: -webkit-inline-box;\r\n    display: -ms-inline-flexbox;\r\n    display: inline-flex; }\r\n\r\n.navigation__logo {\r\n  margin: auto; }\r\n\r\n.navigation__links {\r\n  display: none; }\r\n  .navigation__links .dropdown__arrow {\r\n    margin-top: -6px; }\r\n  @media (min-width: 768px) {\r\n    .navigation__links {\r\n      -webkit-box-flex: 1;\r\n          -ms-flex: 1 1 auto;\r\n              flex: 1 1 auto;\r\n      display: -webkit-box;\r\n      display: -ms-flexbox;\r\n      display: flex;\r\n      -webkit-box-align: center;\r\n          -ms-flex-align: center;\r\n              align-items: center;\r\n      -webkit-box-pack: end;\r\n          -ms-flex-pack: end;\r\n              justify-content: flex-end; } }\r\n\r\n@media (min-width: 768px) {\r\n  .navigation__link {\r\n    display: inline-block;\r\n    font-size: 13px;\r\n    text-transform: uppercase;\r\n    color: #ffffff;\r\n    -webkit-transition: all 250ms;\r\n    transition: all 250ms;\r\n    padding: 1.5em 0.75em; }\r\n    .navigation__link:last-child {\r\n      margin-right: 0.75em; } }\r\n\r\n@media (min-width: 1024px) {\r\n  .navigation__link {\r\n    padding: 1.5em; } }\r\n\r\n.navigation__link:hover {\r\n  color: #8DD6F9; }\r\n\r\n.navigation__link--active {\r\n  background: #354851; }\r\n\r\n.navigation__search {\r\n  display: none; }\r\n\r\n.navigation__icon {\r\n  display: none; }\r\n\r\n@media (min-width: 768px) {\r\n  .navigation__search {\r\n    -webkit-box-flex: 0;\r\n        -ms-flex: 0 0 auto;\r\n            flex: 0 0 auto;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-pack: end;\r\n        -ms-flex-pack: end;\r\n            justify-content: flex-end;\r\n    padding: 0.8em 0; }\r\n    .navigation__search-input {\r\n      padding: 0;\r\n      border: none;\r\n      background: transparent;\r\n      width: 0;\r\n      font-size: 14px;\r\n      text-indent: 0.5em;\r\n      border-bottom: 1px solid #465E69;\r\n      margin-right: 0;\r\n      color: #ffffff;\r\n      text-shadow: 0 0 0 #f2f2f2;\r\n      -webkit-transition: all 250ms;\r\n      transition: all 250ms; }\r\n      .navigation__search-input::-webkit-input-placeholder {\r\n        color: #5a7988;\r\n        text-shadow: none;\r\n        -webkit-text-fill-color: initial; }\r\n    .navigation__search-icon {\r\n      font-size: 1em;\r\n      padding: 0;\r\n      border: none;\r\n      cursor: pointer;\r\n      color: #dedede;\r\n      background: transparent;\r\n      -webkit-transition: color 250ms;\r\n      transition: color 250ms; }\r\n      .navigation__search-icon.icon-cross {\r\n        display: none; }\r\n      .navigation__search-icon:hover {\r\n        color: #8DD6F9; }\r\n    .navigation__search-input:focus, .navigation__search-icon:focus {\r\n      outline: none; }\r\n  .navigation__icon {\r\n    display: block;\r\n    margin-left: 1em;\r\n    color: #ffffff; }\r\n    .navigation__icon:hover {\r\n      color: #8DD6F9; }\r\n  .navigation__languages {\r\n    margin-left: 1em;\r\n    margin-top: -4px; } }\r\n\r\n@media (min-width: 768px) {\r\n  .navigation--search-mode .navigation__link {\r\n    pointer-events: none;\r\n    overflow: hidden;\r\n    white-space: nowrap;\r\n    padding: 1.5em 0;\r\n    margin-right: -35px;\r\n    opacity: 0; }\r\n  .navigation--search-mode .navigation__search-input {\r\n    margin-right: 0.5em;\r\n    width: 400px; }\r\n  .navigation--search-mode .navigation__search-icon.icon-cross {\r\n    display: block; }\r\n  .navigation--search-mode .navigation__search-icon.icon-magnifying-glass {\r\n    display: none; } }\r\n\r\n.navigation__bottom {\r\n  display: none;\r\n  background: #354851; }\r\n  @media (min-width: 768px) {\r\n    .navigation__bottom {\r\n      display: block; } }\r\n\r\n.navigation__child {\r\n  font-size: 13px;\r\n  margin: 0.5em 1em 0.6em;\r\n  color: #dedede;\r\n  text-transform: uppercase; }\r\n  .navigation__child:first-of-type {\r\n    margin-left: 0; }\r\n  .navigation__child:hover {\r\n    color: #8DD6F9; }\r\n  .navigation__child--active {\r\n    color: #ffffff;\r\n    font-weight: 600; }\r\n.algolia-autocomplete {\r\n  display: -webkit-box !important;\r\n  display: -ms-flexbox !important;\r\n  display: flex !important;\r\n  position: relative; }\r\n  .algolia-autocomplete .ds-dropdown-menu {\r\n    -webkit-box-shadow: none;\r\n            box-shadow: none; }\r\n    .algolia-autocomplete .ds-dropdown-menu:before {\r\n      content: none; }\r\n    .algolia-autocomplete .ds-dropdown-menu [class^=ds-dataset-] {\r\n      border-radius: 0;\r\n      border-color: #8DD6F9;\r\n      border-width: 2px 0;\r\n      -webkit-box-shadow: 0 0 4px rgba(0, 0, 0, 0.25);\r\n              box-shadow: 0 0 4px rgba(0, 0, 0, 0.25);\r\n      padding: 0; }\r\n    .algolia-autocomplete .ds-dropdown-menu .ds-suggestion.ds-cursor .algolia-docsearch-suggestion--content {\r\n      background: rgba(141, 214, 249, 0.1) !important; }\r\n  .algolia-autocomplete .algolia-docsearch-suggestion {\r\n    padding: 0; }\r\n  .algolia-autocomplete .algolia-docsearch-suggestion--wrapper {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    padding: 0; }\r\n  .algolia-autocomplete .algolia-docsearch-suggestion--text {\r\n    color: #999999; }\r\n    .algolia-autocomplete .algolia-docsearch-suggestion--text .algolia-docsearch-suggestion--highlight {\r\n      color: #2086d7;\r\n      -webkit-box-shadow: none;\r\n              box-shadow: none;\r\n      font-weight: bold; }\r\n  .algolia-autocomplete .algolia-docsearch-suggestion--highlight {\r\n    color: #2086d7;\r\n    background: rgba(141, 214, 249, 0.15); }\r\n  .algolia-autocomplete .algolia-docsearch-suggestion--category-header {\r\n    text-transform: uppercase;\r\n    font-weight: bold;\r\n    font-size: 0.9em;\r\n    border-color: #dedede;\r\n    color: #333333;\r\n    margin: 0;\r\n    padding: 6px 16px; }\r\n  .algolia-autocomplete .algolia-docsearch-suggestion--subcategory-column {\r\n    padding: 8px 16px 8px 12px;\r\n    background: rgba(153, 153, 153, 0.08);\r\n    display: block;\r\n    color: transparent; }\r\n  .algolia-autocomplete .algolia-docsearch-suggestion__secondary .algolia-docsearch-suggestion--subcategory-column {\r\n    color: #666666; }\r\n  .algolia-autocomplete .algolia-docsearch-suggestion--content {\r\n    padding: 8px 16px 8px 12px; }\r\n  .algolia-autocomplete .ds-suggestion:nth-child(n+2) .algolia-docsearch-suggestion--category-header {\r\n    border-top: 1px solid #dedede; }\r\n  .algolia-autocomplete .algolia-docsearch-suggestion--title {\r\n    color: #333333; }\r\n  .algolia-autocomplete .ds-suggestion:last-child .algolia-docsearch-suggestion--subcategory-column,\r\n  .algolia-autocomplete .ds-suggestion:last-child .algolia-docsearch-suggestion--content {\r\n    padding-bottom: 26px; }\r\n  .algolia-autocomplete .algolia-docsearch-footer {\r\n    position: absolute;\r\n    bottom: 4px;\r\n    right: 16px; }\r\n  .algolia-autocomplete .aa-suggestion-title-separator {\r\n    color: #999999; }\r\n.sidebar-mobile {\r\n  position: fixed;\r\n  width: 300px;\r\n  height: 100vh;\r\n  z-index: 100;\r\n  top: 0;\r\n  overflow-y: auto;\r\n  overflow-x: hidden;\r\n  -webkit-overflow-scrolling: touch;\r\n  -webkit-transform: translate3D(-100%, 0, 0);\r\n          transform: translate3D(-100%, 0, 0);\r\n  -webkit-transform: translate3D(calc(-100% + 5px), 0, 0);\r\n          transform: translate3D(calc(-100% + 5px), 0, 0);\r\n  -webkit-transition: all 500ms cubic-bezier(0.23, 1, 0.32, 1);\r\n  transition: all 500ms cubic-bezier(0.23, 1, 0.32, 1); }\r\n  @media (min-width: 768px) {\r\n    .sidebar-mobile {\r\n      display: none; } }\r\n  .sidebar-mobile--visible {\r\n    -webkit-transform: translate3D(0, 0, 0);\r\n            transform: translate3D(0, 0, 0); }\r\n  .sidebar-mobile.no-delay {\r\n    -webkit-transition-duration: 0ms;\r\n            transition-duration: 0ms; }\r\n\r\n.sidebar-mobile__toggle {\r\n  position: absolute;\r\n  top: 45px;\r\n  bottom: 0;\r\n  width: 32px;\r\n  left: 285px; }\r\n\r\n.sidebar-mobile__content {\r\n  position: relative;\r\n  width: 285px;\r\n  height: 100vh;\r\n  overflow-x: hidden;\r\n  padding: 12px 0;\r\n  background: #ffffff;\r\n  -webkit-box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);\r\n          box-shadow: 0 0 15px rgba(0, 0, 0, 0.2); }\r\n\r\n.sidebar-mobile__close {\r\n  position: absolute;\r\n  cursor: pointer;\r\n  right: 22px;\r\n  top: 22px;\r\n  font-size: 1.3em;\r\n  background: #1D78C1;\r\n  color: #ffffff;\r\n  width: 30px;\r\n  height: 30px;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n  border-radius: 50%;\r\n  -webkit-transition: background 150ms;\r\n  transition: background 150ms;\r\n  -webkit-tap-highlight-color: transparent; }\r\n  .sidebar-mobile__close:hover {\r\n    background: #104168; }\r\n\r\n.sidebar-mobile__section {\r\n  border-left: 2px solid transparent;\r\n  padding-bottom: 0.5em; }\r\n  .sidebar-mobile__section--active {\r\n    border-left: 2px solid #8DD6F9; }\r\n    .sidebar-mobile__section--active .sidebar-mobile__section-header {\r\n      color: #658797; }\r\n\r\n.sidebar-mobile__section-header {\r\n  text-transform: uppercase;\r\n  color: #2B3A42;\r\n  padding: 0.75em 16px 0.25em;\r\n  font-weight: 600;\r\n  display: block; }\r\n  .sidebar-mobile__content div:not(:first-of-type) .sidebar-mobile__section-header {\r\n    border-top: 1px solid #dedede; }\r\n\r\n.sidebar-mobile__page {\r\n  display: block;\r\n  padding: 0.5em 17px;\r\n  text-transform: capitalize;\r\n  color: #666666;\r\n  -webkit-tap-highlight-color: transparent;\r\n  font-size: 14px; }\r\n  .sidebar-mobile__page:active, .sidebar-mobile__page--active {\r\n    color: #333333;\r\n    font-weight: 600;\r\n    background: #F1F4F4; }\r\n  .sidebar-mobile__page:hover {\r\n    color: inherit; }\r\n.sidebar-item {\r\n  position: relative;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -ms-flex-wrap: wrap;\r\n      flex-wrap: wrap;\r\n  font-size: 15px;\r\n  margin: 0.6em 0; }\r\n  .sidebar-item__toggle {\r\n    -webkit-box-flex: 0;\r\n        -ms-flex: 0 0 auto;\r\n            flex: 0 0 auto;\r\n    margin-top: 0.125em;\r\n    margin-right: 0.5em;\r\n    cursor: pointer;\r\n    color: #1D78C1;\r\n    -webkit-transition: all 250ms;\r\n    transition: all 250ms; }\r\n    .sidebar-item__toggle:hover {\r\n      color: #333333; }\r\n  .sidebar-item__title {\r\n    -webkit-box-flex: 1;\r\n        -ms-flex: 1 1 auto;\r\n            flex: 1 1 auto;\r\n    font-weight: 600;\r\n    color: #666666;\r\n    max-width: 85%;\r\n    overflow: hidden;\r\n    white-space: nowrap;\r\n    text-overflow: ellipsis; }\r\n  .sidebar-item__anchors {\r\n    position: relative;\r\n    display: none;\r\n    -webkit-box-flex: 0;\r\n        -ms-flex: 0 0 100%;\r\n            flex: 0 0 100%;\r\n    -ms-flex-wrap: wrap;\r\n        flex-wrap: wrap;\r\n    margin: 0.35em 0;\r\n    padding-left: 1.5em;\r\n    overflow: hidden;\r\n    list-style: none; }\r\n    .sidebar-item__anchors:before {\r\n      content: '';\r\n      position: absolute;\r\n      height: calc(100% - 0.6em);\r\n      top: 0;\r\n      left: 1.5em;\r\n      border-left: 1px dashed #999999; }\r\n  .sidebar-item__anchor {\r\n    position: relative;\r\n    -webkit-box-flex: 0;\r\n        -ms-flex: 0 0 100%;\r\n            flex: 0 0 100%;\r\n    margin: 0.25em 0;\r\n    padding-left: 1em;\r\n    overflow: hidden;\r\n    white-space: nowrap;\r\n    text-overflow: ellipsis; }\r\n    .sidebar-item__anchor:first-child {\r\n      margin-top: 0; }\r\n    .sidebar-item__anchor:last-child {\r\n      margin-bottom: 0; }\r\n    .sidebar-item__anchor:before {\r\n      content: '';\r\n      position: absolute;\r\n      width: 0.5em;\r\n      left: 0;\r\n      top: 60%;\r\n      border-bottom: 1px dashed #999999; }\r\n    .sidebar-item__anchor a {\r\n      color: #535353; }\r\n      .sidebar-item__anchor a:hover {\r\n        color: #1D78C1; }\r\n  .sidebar-item--open .sidebar-item__anchors {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex; }\r\n  .sidebar-item--open .sidebar-item__toggle {\r\n    -webkit-transform-origin: center center;\r\n            transform-origin: center center;\r\n    -webkit-transform: rotate(90deg);\r\n            transform: rotate(90deg); }\r\n  .sidebar-item--disabled .sidebar-item__toggle {\r\n    color: #AAA; }\r\n.logo {\r\n  float: left;\r\n  width: auto;\r\n  height: 35px;\r\n  opacity: 0.9;\r\n  -webkit-transition: opacity 250ms;\r\n  transition: opacity 250ms; }\r\n  .logo:hover {\r\n    opacity: 1; }\r\n.dropdown {\r\n  position: relative;\r\n  color: #fff;\r\n  cursor: pointer; }\r\n\r\n.dropdown__language {\r\n  width: 20px;\r\n  height: 20px;\r\n  vertical-align: middle; }\r\n\r\n.dropdown__arrow:before {\r\n  content: \"\\25BE\"; }\r\n\r\n.dropdown__list {\r\n  display: none;\r\n  position: absolute;\r\n  top: 100%;\r\n  right: 0;\r\n  margin: auto;\r\n  background-color: #2B3A42;\r\n  z-index: 1;\r\n  font-size: 14px; }\r\n  .dropdown__list ul {\r\n    padding-top: 0.25em; }\r\n  .dropdown__list ul li {\r\n    padding: 0.25em 0.5em;\r\n    list-style: none;\r\n    color: #fff;\r\n    -webkit-transition: all 250ms;\r\n    transition: all 250ms; }\r\n    .dropdown__list ul li a:link, .dropdown__list ul li a:visited, .dropdown__list ul li a:hover {\r\n      color: #fff; }\r\n    .dropdown__list ul li:hover {\r\n      background: #1D78C1; }\r\n    .dropdown__list ul li span {\r\n      vertical-align: top;\r\n      text-align: left; }\r\n\r\n.dropdown__list--active {\r\n  display: block; }\r\n.support {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -ms-flex-wrap: wrap;\r\n      flex-wrap: wrap;\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n  padding: 0 0.5em 1em; }\r\n  .support__description {\r\n    -webkit-box-flex: 0;\r\n        -ms-flex: 0 0 100%;\r\n            flex: 0 0 100%;\r\n    margin-bottom: 1em; }\r\n  .support__rank {\r\n    text-transform: capitalize; }\r\n    .support__rank:after {\r\n      content: ' '; }\r\n  .support__item {\r\n    position: relative;\r\n    margin: 0 2px 2px 2px; }\r\n  .support__sponsors-avatar-bronze, .support__sponsors-avatar-normal {\r\n    height: 32px; }\r\n  .support__sponsors-avatar-silver {\r\n    height: 64px; }\r\n  .support__sponsors-avatar-gold {\r\n    height: 96px; }\r\n  .support__sponsors-avatar-platinum {\r\n    height: 128px; }\r\n  .support__backers-avatar-normal {\r\n    width: 31px;\r\n    height: 31px;\r\n    border-radius: 50%;\r\n    border: 1px solid white;\r\n    overflow: hidden; }\r\n  .support__outline {\r\n    position: absolute;\r\n    top: 0;\r\n    margin: -1px;\r\n    width: calc(100% + 2px);\r\n    height: calc(100% - 4px);\r\n    border-radius: 50%;\r\n    border: 1px solid #70ca0a; }\r\n  .support__bottom {\r\n    -webkit-box-flex: 0;\r\n        -ms-flex: 0 0 100%;\r\n            flex: 0 0 100%;\r\n    margin-top: 1em; }\r\n  .support__button {\r\n    display: inline-block;\r\n    padding: 0.4em 1em;\r\n    text-transform: uppercase;\r\n    color: #1D78C1;\r\n    border: 1px solid #1D78C1;\r\n    border-radius: 1.25em;\r\n    -webkit-transition: all 250ms;\r\n    transition: all 250ms; }\r\n    .support__button:hover {\r\n      background: #1D78C1;\r\n      color: #ffffff; }\r\n.splash {\r\n  /* XXX: Hack to fix markown parsing issues */ }\r\n  .splash__section {\r\n    position: relative;\r\n    text-align: center; }\r\n    .splash__section--dark {\r\n      background-color: #f3f3f3; }\r\n    .splash__section p {\r\n      margin: 1em auto !important;\r\n      max-width: 800px; }\r\n    .splash__section .container {\r\n      padding: 5em 1em; }\r\n      @media (min-width: 768px) {\r\n        .splash__section .container {\r\n          padding-left: 1.5em;\r\n          padding-right: 1.5em; } }\r\n    .splash__section pre {\r\n      text-align: left; }\r\n    .splash__section .icon-link {\r\n      display: none; }\r\n  .splash__wrap {\r\n    display: block; }\r\n    @media (min-width: 768px) {\r\n      .splash__wrap {\r\n        margin: 0 -30px; } }\r\n    .splash__wrap:before, .splash__wrap:after {\r\n      content: \" \";\r\n      display: table; }\r\n    .splash__wrap:after {\r\n      clear: both; }\r\n  .splash__left, .splash__right {\r\n    width: 100%;\r\n    float: left; }\r\n    @media (min-width: 768px) {\r\n      .splash__left, .splash__right {\r\n        width: 50%;\r\n        padding: 0 15px; } }\r\n  .splash__right {\r\n    margin-bottom: 1em; }\r\n.splash-viz {\r\n  position: relative;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  height: calc(100vh - 55px);\r\n  min-height: 320px;\r\n  max-height: 720px;\r\n  background: #2B3A42;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: column;\r\n          flex-direction: column; }\r\n  .splash-viz__heading {\r\n    color: #ffffff;\r\n    font-size: 33px;\r\n    text-align: center;\r\n    font-weight: 200;\r\n    margin-top: 24px; }\r\n    @media (min-width: 768px) {\r\n      .splash-viz__heading {\r\n        font-size: 40px; } }\r\n  .splash-viz__modules {\r\n    position: absolute;\r\n    left: 0;\r\n    right: 0;\r\n    top: 0;\r\n    bottom: 0;\r\n    width: 75vw;\r\n    min-width: 550px;\r\n    max-width: 1024px;\r\n    margin: auto;\r\n    display: none; }\r\n    @media (min-width: 768px) {\r\n      .splash-viz__modules {\r\n        display: block; } }\r\n    .splash-viz__modules img {\r\n      padding-top: 1.5em;\r\n      width: 100%;\r\n      height: 100%; }\r\n  .splash-viz__cube {\r\n    position: absolute;\r\n    left: 0;\r\n    right: 0;\r\n    top: 0;\r\n    bottom: 0;\r\n    margin: auto;\r\n    z-index: 1; }\r\n.cube {\r\n  position: relative;\r\n  display: block;\r\n  -webkit-transform-style: preserve-3d;\r\n          transform-style: preserve-3d;\r\n  -webkit-transform: rotateX(-33.5deg) rotateY(45deg);\r\n          transform: rotateX(-33.5deg) rotateY(45deg); }\r\n  .cube__inner, .cube__outer {\r\n    display: inline-block;\r\n    -webkit-transform-style: preserve-3d;\r\n            transform-style: preserve-3d;\r\n    -webkit-transition: -webkit-transform 1000ms;\r\n    transition: -webkit-transform 1000ms;\r\n    transition: transform 1000ms;\r\n    transition: transform 1000ms, -webkit-transform 1000ms; }\r\n  .cube__inner {\r\n    position: absolute;\r\n    top: -2px;\r\n    left: 0; }\r\n  .cube__face {\r\n    position: absolute;\r\n    width: 100%;\r\n    height: 100%;\r\n    border: 1px solid #ffffff; }\r\n  .cube .cube__outer .cube__face {\r\n    background: rgba(141, 214, 249, 0.5);\r\n    -webkit-transition: border-width 0.2s;\r\n    transition: border-width 0.2s;\r\n    -webkit-transition-delay: 0.2s;\r\n            transition-delay: 0.2s; }\r\n  .cube .cube__inner .cube__face {\r\n    background: #1D78C1;\r\n    border: 2px solid #ffffff; }\r\n.text-rotater {\r\n  overflow: hidden;\r\n  position: relative;\r\n  display: inline-block;\r\n  padding: 0 0.3em;\r\n  vertical-align: bottom; }\r\n  .text-rotater::after, .text-rotater::before {\r\n    content: '';\r\n    position: absolute;\r\n    height: 3px;\r\n    left: 0; }\r\n  .text-rotater::after {\r\n    top: 0;\r\n    background-image: -webkit-gradient(linear, left top, left bottom, from(getColor(elephant)), to(transparent));\r\n    background-image: linear-gradient(getColor(elephant), transparent); }\r\n  .text-rotater::before {\r\n    bottom: 0;\r\n    z-index: 1;\r\n    background-image: -webkit-gradient(linear, left top, left bottom, from(transparent), to(getColor(elephant)));\r\n    background-image: linear-gradient(transparent, getColor(elephant)); }\r\n  .text-rotater > * {\r\n    display: inline-block; }\r\n\r\n.text-rotater--slide-up {\r\n  -webkit-transition: -webkit-transform 1s;\r\n  transition: -webkit-transform 1s;\r\n  transition: transform 1s;\r\n  transition: transform 1s, -webkit-transform 1s;\r\n  -webkit-transition-timing-function: cubic-bezier(0.7, 0, 0.3, 1);\r\n          transition-timing-function: cubic-bezier(0.7, 0, 0.3, 1);\r\n  -webkit-transform: translateY(-100%);\r\n          transform: translateY(-100%); }\r\n\r\n.text-rotater__wrap {\r\n  display: -webkit-inline-box;\r\n  display: -ms-inline-flexbox;\r\n  display: inline-flex;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: column;\r\n          flex-direction: column;\r\n  text-align: left; }\r\n  .text-rotater__wrap > * {\r\n    -ms-flex-negative: 0;\r\n        flex-shrink: 0; }\r\n.page-links {\r\n  position: absolute;\r\n  display: none;\r\n  top: 1.5em;\r\n  right: 1.5em;\r\n  font-size: 13px;\r\n  font-weight: 600;\r\n  text-transform: uppercase; }\r\n  .page-links__gap {\r\n    margin: 0 1em; }\r\n  .page-links__link {\r\n    display: -webkit-inline-box;\r\n    display: -ms-inline-flexbox;\r\n    display: inline-flex; }\r\n  .page-links__icon {\r\n    -ms-flex-item-align: center;\r\n        align-self: center;\r\n    font-size: 0.9em;\r\n    margin-left: 0.5em; }\r\n  @media (min-width: 768px) {\r\n    .page-links {\r\n      display: block; } }\r\n.contributors__list {\r\n  font-size: 14px;\r\n  margin-left: -0.5em;\r\n  padding-right: 75px; }\r\n\r\n.contributor {\r\n  display: -webkit-inline-box;\r\n  display: -ms-inline-flexbox;\r\n  display: inline-flex;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: column;\r\n          flex-direction: column;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n  margin: 0.5em; }\r\n  .contributor img {\r\n    height: 45px;\r\n    width: 45px;\r\n    border-radius: 50%;\r\n    -webkit-box-shadow: 0 0 2px rgba(0, 0, 0, 0.3);\r\n            box-shadow: 0 0 2px rgba(0, 0, 0, 0.3); }\r\n  .contributor .contributor__name {\r\n    width: 110px;\r\n    margin-top: -6px;\r\n    padding: 0 6px;\r\n    line-height: 1.4;\r\n    border-radius: 2px;\r\n    text-align: center;\r\n    overflow-wrap: break-word;\r\n    -webkit-hyphens: auto;\r\n        -ms-hyphens: auto;\r\n            hyphens: auto;\r\n    color: #465E69;\r\n    -webkit-box-shadow: 0 0 2px rgba(0, 0, 0, 0.3);\r\n            box-shadow: 0 0 2px rgba(0, 0, 0, 0.3);\r\n    background: rgba(255, 255, 255, 0.95);\r\n    -webkit-transition: color 0.1s;\r\n    transition: color 0.1s; }\r\n  .contributor:hover .contributor__name {\r\n    color: #2086d7; }\r\n.page {\r\n  position: relative;\r\n  -webkit-box-flex: 1;\r\n      -ms-flex: 1 0 auto;\r\n          flex: 1 0 auto;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex; }\r\n\r\n.page > div:first-of-type {\r\n  display: none;\r\n  position: relative;\r\n  overflow: hidden; }\r\n  @media (min-width: 768px) {\r\n    .page > div:first-of-type {\r\n      display: block;\r\n      -webkit-box-flex: 0;\r\n          -ms-flex: 0 0 280px;\r\n              flex: 0 0 280px; } }\r\n\r\n.page__content {\r\n  -webkit-box-flex: 1;\r\n      -ms-flex: 1 1 auto;\r\n          flex: 1 1 auto;\r\n  overflow-x: hidden;\r\n  padding: 1.5em 1em; }\r\n  @media break {\r\n    .page__content {\r\n      -webkit-box-flex: 3;\r\n          -ms-flex: 3;\r\n              flex: 3;\r\n      padding: 1.5em; } }\r\n.sidebar {\r\n  display: none;\r\n  width: 100%;\r\n  max-height: 100%;\r\n  overflow: auto;\r\n  will-change: transform; }\r\n  @media (min-width: 768px) {\r\n    .sidebar {\r\n      display: block; } }\r\n\r\n.sidebar__inner {\r\n  padding: 1.5em;\r\n  overflow: hidden; }\r\n.sponsors {\r\n  position: fixed;\r\n  display: none;\r\n  width: 250px;\r\n  margin-top: 1.5em;\r\n  margin-left: calc(-250px - 1.5em);\r\n  padding: 0 1.5em;\r\n  -ms-flex-wrap: wrap;\r\n      flex-wrap: wrap;\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n  -webkit-box-align: start;\r\n      -ms-flex-align: start;\r\n          align-items: flex-start;\r\n  -ms-flex-line-pack: start;\r\n      align-content: flex-start;\r\n  border-right: 1px solid #f2f2f2;\r\n  overflow: hidden;\r\n  -webkit-transition: background-color 250ms;\r\n  transition: background-color 250ms; }\r\n  .sponsors:hover {\r\n    background-color: #f2f2f2; }\r\n  @media (min-width: 1525px) {\r\n    .sponsors {\r\n      display: -webkit-box;\r\n      display: -ms-flexbox;\r\n      display: flex; } }\r\n.gitter {\r\n  float: right; }\r\n\r\n.gitter__button {\r\n  position: fixed;\r\n  display: none;\r\n  padding: 1em;\r\n  bottom: 1.5em;\r\n  margin-left: -3.25em;\r\n  border-radius: 100%;\r\n  background: #59bcb7;\r\n  cursor: pointer;\r\n  will-change: transform;\r\n  -webkit-transition: background 250ms;\r\n  transition: background 250ms; }\r\n  .gitter__button:hover {\r\n    background: #41a19c; }\r\n  @media (min-width: 768px) {\r\n    .gitter__button {\r\n      display: block; } }\r\n\r\n.gitter__icon {\r\n  display: block;\r\n  font-size: 1.25em;\r\n  height: 1em;\r\n  overflow: hidden;\r\n  color: #ffffff; }\r\n@charset \"UTF-8\";\r\n.vote-app {\r\n  margin: 1.5em; }\r\n  .vote-app__top {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: column;\r\n            flex-direction: column; }\r\n    @media (min-width: 768px) {\r\n      .vote-app__top {\r\n        -webkit-box-orient: horizontal;\r\n        -webkit-box-direction: normal;\r\n            -ms-flex-direction: row;\r\n                flex-direction: row; } }\r\n  .vote-app__influence {\r\n    -webkit-box-flex: 0;\r\n        -ms-flex: 0 0 75%;\r\n            flex: 0 0 75%; }\r\n  .vote-app__influence-description {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: column;\r\n            flex-direction: column; }\r\n    @media (min-width: 768px) {\r\n      .vote-app__influence-description {\r\n        -webkit-box-orient: horizontal;\r\n        -webkit-box-direction: normal;\r\n            -ms-flex-direction: row;\r\n                flex-direction: row; } }\r\n  .vote-app__user-section {\r\n    padding: 0 0 30px; }\r\n    @media (min-width: 768px) {\r\n      .vote-app__user-section {\r\n        -webkit-box-flex: 0;\r\n            -ms-flex: 0 0 25%;\r\n                flex: 0 0 25%;\r\n        padding: 0 0 0 20px; } }\r\n    @media (min-width: 1024px) {\r\n      .vote-app__user-section {\r\n        border-left: 2px solid #2B3A42; } }\r\n  .vote-app__influence-section {\r\n    -webkit-box-flex: 0;\r\n        -ms-flex: 0 0 50%;\r\n            flex: 0 0 50%; }\r\n  .vote-app__influence-disclaimer {\r\n    padding: 1em 0;\r\n    font-size: smaller;\r\n    color: red; }\r\n    @media (min-width: 768px) {\r\n      .vote-app__influence-disclaimer {\r\n        text-align: center; } }\r\n  .vote-app__login-button {\r\n    margin: 20px 0; }\r\n    .vote-app__login-button button {\r\n      border: none;\r\n      outline: none;\r\n      color: #ffffff;\r\n      background: #2B3A42;\r\n      padding: 5px 10px 5px 10px;\r\n      border-radius: 2px;\r\n      font-size: 13px;\r\n      cursor: pointer; }\r\n      .vote-app__login-button button:hover {\r\n        background: black; }\r\n      .vote-app__login-button button:active {\r\n        background: #2B3A42; }\r\n    .vote-app__login-button img {\r\n      height: 25px;\r\n      vertical-align: middle;\r\n      padding-left: 5px; }\r\n  .vote-app__userinfo {\r\n    outline: none;\r\n    border: none;\r\n    background: #2B3A42;\r\n    color: white;\r\n    border-radius: 3px;\r\n    font-size: 13px;\r\n    display: inline-block;\r\n    padding: 3px 10px; }\r\n    .vote-app__userinfo img {\r\n      height: 25px;\r\n      vertical-align: middle;\r\n      margin-right: 10px; }\r\n  .vote-app__self-info {\r\n    margin-top: 10px; }\r\n  .vote-app__button-area {\r\n    margin: 5px 0; }\r\n  .vote-app h1 {\r\n    font-size: 16pt;\r\n    font-weight: bold;\r\n    margin-bottom: 10px; }\r\n  .vote-app__item-title {\r\n    font-size: 16pt;\r\n    font-weight: bold;\r\n    margin-right: 10px; }\r\n  .vote-app__item-edit-title {\r\n    width: 100%; }\r\n  .vote-app__item-edit-description {\r\n    width: 100%; }\r\n  .vote-app__currency-list {\r\n    display: block; }\r\n    .vote-app__currency-list > li {\r\n      display: inline-block;\r\n      padding: 5px; }\r\n  .vote-app__item-card {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: column;\r\n            flex-direction: column;\r\n    margin-top: 30px;\r\n    margin-bottom: 30px; }\r\n    @media (min-width: 768px) {\r\n      .vote-app__item-card {\r\n        -webkit-box-orient: horizontal;\r\n        -webkit-box-direction: normal;\r\n            -ms-flex-direction: row;\r\n                flex-direction: row; } }\r\n  .vote-app__score-section {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    border: 1px solid lightgray;\r\n    -webkit-user-select: none;\r\n       -moz-user-select: none;\r\n        -ms-user-select: none;\r\n            user-select: none;\r\n    -ms-flex-wrap: wrap;\r\n        flex-wrap: wrap; }\r\n    @media (min-width: 768px) {\r\n      .vote-app__score-section {\r\n        -webkit-box-flex: 0;\r\n            -ms-flex: 0 0 40%;\r\n                flex: 0 0 40%;\r\n        margin-right: 30px;\r\n        padding: 0 0 0 20px; } }\r\n  .vote-app__item-score {\r\n    -ms-flex-item-align: center;\r\n        align-self: center;\r\n    font-size: 20pt;\r\n    -webkit-box-flex: 0;\r\n        -ms-flex: 0 0 100%;\r\n            flex: 0 0 100%;\r\n    text-align: center; }\r\n    @media (min-width: 768px) {\r\n      .vote-app__item-score {\r\n        -webkit-box-flex: 0;\r\n            -ms-flex: 0 0 20%;\r\n                flex: 0 0 20%;\r\n        text-align: left; } }\r\n  .vote-app__item-button {\r\n    -ms-flex-item-align: center;\r\n        align-self: center;\r\n    -webkit-box-flex: 0;\r\n        -ms-flex: 0 0 50%;\r\n            flex: 0 0 50%; }\r\n    @media (min-width: 768px) {\r\n      .vote-app__item-button {\r\n        -webkit-box-flex: 0;\r\n            -ms-flex: 0 0 40%;\r\n                flex: 0 0 40%; } }\r\n  .vote-app__items-list {\r\n    display: block; }\r\n    .vote-app__items-list > li {\r\n      display: block;\r\n      padding: 5px 0; }\r\n  .vote-app__currency-influence, .vote-app__vote-influence {\r\n    color: blue; }\r\n    .vote-app__currency-influence:before, .vote-app__vote-influence:before {\r\n      content: \"\\25C6\\2009\"; }\r\n  .vote-app__currency-goldenInfluence, .vote-app__vote-golden {\r\n    color: #bfa203; }\r\n    .vote-app__currency-goldenInfluence:before, .vote-app__vote-golden:before {\r\n      content: \"\\25C7\\2009\"; }\r\n  .vote-app__currency-support, .vote-app__vote-support {\r\n    color: green; }\r\n    .vote-app__currency-support:before, .vote-app__vote-support:before {\r\n      content: \"$\\2009\"; }\r\n  .vote-app__admin input, .vote-app__admin textarea, .vote-app__admin button {\r\n    width: 100%; }\r\n.influence-info em {\r\n  font-weight: bolder; }\r\n\r\n.influence-info i {\r\n  font-style: italic; }\r\n\r\n.influence-info__section {\r\n  padding: 0.5em 0; }\r\n  @media (min-width: 768px) {\r\n    .influence-info__section {\r\n      padding: 0 .5em; } }\r\n.vote-button {\r\n  text-align: center; }\r\n  .vote-button__value {\r\n    font-size: 150%; }\r\n  .vote-button__value, .vote-button__my-value, .vote-button__upDown {\r\n    display: block;\r\n    width: 90px; }\r\n  .vote-button__upDown {\r\n    border: 0;\r\n    padding: 0;\r\n    margin: 0; }\r\n\r\n.vote-new-button {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center; }\r\n  @media (min-width: 768px) {\r\n    .vote-new-button {\r\n      -webkit-box-pack: inherit;\r\n          -ms-flex-pack: inherit;\r\n              justify-content: inherit; } }\r\n  .vote-new-button__arrows {\r\n    -webkit-box-flex: 0;\r\n        -ms-flex: 0 0 10%;\r\n            flex: 0 0 10%; }\r\n  .vote-new-button__value {\r\n    font-size: 15pt; }\r\n  .vote-new-button__value, .vote-new-button__my-value {\r\n    display: inline;\r\n    margin-left: 5px;\r\n    -ms-flex-item-align: center;\r\n        align-self: center; }\r\n  .vote-new-button__upDown {\r\n    border: 0;\r\n    padding: 0;\r\n    margin: 0;\r\n    cursor: pointer; }\r\n  .vote-new-button__logout-value {\r\n    -ms-flex-item-align: center;\r\n        align-self: center;\r\n    font-size: 20pt;\r\n    margin: auto; }\r\n.organization {\r\n  padding: 1.5em; }\r\n\r\n.organization__projects {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -ms-flex-wrap: wrap;\r\n      flex-wrap: wrap;\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center; }\r\n  @media (min-width: 768px) {\r\n    .organization__projects {\r\n      -webkit-box-pack: start;\r\n          -ms-flex-pack: start;\r\n              justify-content: flex-start; } }\r\n\r\n.organization__project {\r\n  width: 280px;\r\n  height: 420px;\r\n  margin-right: 1em;\r\n  margin-bottom: 1em;\r\n  padding: 1em;\r\n  border-radius: 2px;\r\n  -webkit-box-shadow: 0 0 1px #666666;\r\n          box-shadow: 0 0 1px #666666;\r\n  overflow: hidden;\r\n  background: #f2f2f2;\r\n  -webkit-transition: all 250ms;\r\n  transition: all 250ms; }\r\n  .organization__project:hover {\r\n    -webkit-box-shadow: 0 0 5px #535353;\r\n            box-shadow: 0 0 5px #535353;\r\n    background: white; }\r\n.starter-kits {\r\n  -webkit-box-flex: 1;\r\n      -ms-flex: 1 1 auto;\r\n          flex: 1 1 auto;\r\n  padding: 1.5em; }\r\n\r\n.starter-kits__tag {\r\n  display: inline-block;\r\n  font-size: 13px;\r\n  font-weight: 600;\r\n  line-height: 1.5em;\r\n  margin: 0 0.25em 0.25em;\r\n  padding: 0 0.5em;\r\n  border-radius: 0.25em;\r\n  color: #ffffff;\r\n  background: #8DD6F9; }\r\n", ""]);

// exports


/***/ }),
/* 3 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getElement = (function (fn) {
	var memo = {};

	return function(selector) {
		if (typeof memo[selector] === "undefined") {
			memo[selector] = fn.call(this, selector);
		}

		return memo[selector]
	};
})(function (target) {
	return document.querySelector(target)
});

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(5);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton) options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
	if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	options.attrs.type = "text/css";

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 5 */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ })
/******/ ]);