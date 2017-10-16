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
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(1);

__webpack_require__(2);

/***/ }),
/* 1 */
/***/ (function(module, exports) {

throw new Error("Module build failed: ReferenceError: window is not defined\n    at D:\\automake\\webpack\\extract-text-webpack-plugin\\node_modules\\.0.19.0@style-loader\\index.js!D:\\automake\\webpack\\extract-text-webpack-plugin\\node_modules\\.0.28.7@css-loader\\index.js!D:\\automake\\webpack\\extract-text-webpack-plugin\\node_modules\\.6.0.6@sass-loader\\lib\\loader.js!D:\\automake\\webpack\\extract-text-webpack-plugin\\src\\ui\\header.sass:220:9\n    at D:\\automake\\webpack\\extract-text-webpack-plugin\\node_modules\\.0.19.0@style-loader\\index.js!D:\\automake\\webpack\\extract-text-webpack-plugin\\node_modules\\.0.28.7@css-loader\\index.js!D:\\automake\\webpack\\extract-text-webpack-plugin\\node_modules\\.6.0.6@sass-loader\\lib\\loader.js!D:\\automake\\webpack\\extract-text-webpack-plugin\\src\\ui\\header.sass:209:46\n    at module.exports.module.exports (D:\\automake\\webpack\\extract-text-webpack-plugin\\node_modules\\.0.19.0@style-loader\\index.js!D:\\automake\\webpack\\extract-text-webpack-plugin\\node_modules\\.0.28.7@css-loader\\index.js!D:\\automake\\webpack\\extract-text-webpack-plugin\\node_modules\\.6.0.6@sass-loader\\lib\\loader.js!D:\\automake\\webpack\\extract-text-webpack-plugin\\src\\ui\\header.sass:264:46)\n    at Object.<anonymous> (D:\\automake\\webpack\\extract-text-webpack-plugin\\node_modules\\.0.19.0@style-loader\\index.js!D:\\automake\\webpack\\extract-text-webpack-plugin\\node_modules\\.0.28.7@css-loader\\index.js!D:\\automake\\webpack\\extract-text-webpack-plugin\\node_modules\\.6.0.6@sass-loader\\lib\\loader.js!D:\\automake\\webpack\\extract-text-webpack-plugin\\src\\ui\\header.sass:82:36)\n    at __webpack_require__ (D:\\automake\\webpack\\extract-text-webpack-plugin\\node_modules\\.0.19.0@style-loader\\index.js!D:\\automake\\webpack\\extract-text-webpack-plugin\\node_modules\\.0.28.7@css-loader\\index.js!D:\\automake\\webpack\\extract-text-webpack-plugin\\node_modules\\.6.0.6@sass-loader\\lib\\loader.js!D:\\automake\\webpack\\extract-text-webpack-plugin\\src\\ui\\header.sass:21:30)\n    at D:\\automake\\webpack\\extract-text-webpack-plugin\\node_modules\\.0.19.0@style-loader\\index.js!D:\\automake\\webpack\\extract-text-webpack-plugin\\node_modules\\.0.28.7@css-loader\\index.js!D:\\automake\\webpack\\extract-text-webpack-plugin\\node_modules\\.6.0.6@sass-loader\\lib\\loader.js!D:\\automake\\webpack\\extract-text-webpack-plugin\\src\\ui\\header.sass:64:18\n    at Object.<anonymous> (D:\\automake\\webpack\\extract-text-webpack-plugin\\node_modules\\.0.19.0@style-loader\\index.js!D:\\automake\\webpack\\extract-text-webpack-plugin\\node_modules\\.0.28.7@css-loader\\index.js!D:\\automake\\webpack\\extract-text-webpack-plugin\\node_modules\\.6.0.6@sass-loader\\lib\\loader.js!D:\\automake\\webpack\\extract-text-webpack-plugin\\src\\ui\\header.sass:67:10)\n    at Module._compile (module.js:569:30)\n    at Object.exec (D:\\automake\\webpack\\extract-text-webpack-plugin\\node_modules\\.3.7.1@webpack\\lib\\NormalModule.js:129:12)\n    at D:\\automake\\webpack\\extract-text-webpack-plugin\\node_modules\\.3.0.1@extract-text-webpack-plugin\\dist\\loader.js:131:26\n    at compile (D:\\automake\\webpack\\extract-text-webpack-plugin\\node_modules\\.3.7.1@webpack\\lib\\Compiler.js:304:11)\n    at applyPluginsAsync.err (D:\\automake\\webpack\\extract-text-webpack-plugin\\node_modules\\.3.7.1@webpack\\lib\\Compiler.js:514:14)\n    at next (D:\\automake\\webpack\\extract-text-webpack-plugin\\node_modules\\.0.2.8@tapable\\lib\\Tapable.js:202:11)\n    at Compiler.<anonymous> (D:\\automake\\webpack\\extract-text-webpack-plugin\\node_modules\\.3.0.1@extract-text-webpack-plugin\\dist\\loader.js:112:7)\n    at next (D:\\automake\\webpack\\extract-text-webpack-plugin\\node_modules\\.0.2.8@tapable\\lib\\Tapable.js:204:14)\n    at Compiler.<anonymous> (D:\\automake\\webpack\\extract-text-webpack-plugin\\node_modules\\.3.7.1@webpack\\lib\\CachePlugin.js:78:5)\n    at Compiler.applyPluginsAsyncSeries (D:\\automake\\webpack\\extract-text-webpack-plugin\\node_modules\\.0.2.8@tapable\\lib\\Tapable.js:206:13)\n    at compilation.seal.err (D:\\automake\\webpack\\extract-text-webpack-plugin\\node_modules\\.3.7.1@webpack\\lib\\Compiler.js:511:11)\n    at Compilation.applyPluginsAsyncSeries (D:\\automake\\webpack\\extract-text-webpack-plugin\\node_modules\\.0.2.8@tapable\\lib\\Tapable.js:195:46)\n    at self.applyPluginsAsync.err (D:\\automake\\webpack\\extract-text-webpack-plugin\\node_modules\\.3.7.1@webpack\\lib\\Compilation.js:678:19)\n    at Compilation.applyPluginsAsyncSeries (D:\\automake\\webpack\\extract-text-webpack-plugin\\node_modules\\.0.2.8@tapable\\lib\\Tapable.js:195:46)\n    at self.applyPluginsAsync.err (D:\\automake\\webpack\\extract-text-webpack-plugin\\node_modules\\.3.7.1@webpack\\lib\\Compilation.js:669:11)\n    at Compilation.applyPluginsAsyncSeries (D:\\automake\\webpack\\extract-text-webpack-plugin\\node_modules\\.0.2.8@tapable\\lib\\Tapable.js:195:46)\n    at self.applyPluginsAsync.err (D:\\automake\\webpack\\extract-text-webpack-plugin\\node_modules\\.3.7.1@webpack\\lib\\Compilation.js:664:10)\n    at Compilation.applyPluginsAsyncSeries (D:\\automake\\webpack\\extract-text-webpack-plugin\\node_modules\\.0.2.8@tapable\\lib\\Tapable.js:195:46)\n    at sealPart2 (D:\\automake\\webpack\\extract-text-webpack-plugin\\node_modules\\.3.7.1@webpack\\lib\\Compilation.js:660:9)\n    at Compilation.applyPluginsAsyncSeries (D:\\automake\\webpack\\extract-text-webpack-plugin\\node_modules\\.0.2.8@tapable\\lib\\Tapable.js:195:46)\n    at Compilation.seal (D:\\automake\\webpack\\extract-text-webpack-plugin\\node_modules\\.3.7.1@webpack\\lib\\Compilation.js:603:8)\n    at applyPluginsParallel.err (D:\\automake\\webpack\\extract-text-webpack-plugin\\node_modules\\.3.7.1@webpack\\lib\\Compiler.js:508:17)\n    at D:\\automake\\webpack\\extract-text-webpack-plugin\\node_modules\\.0.2.8@tapable\\lib\\Tapable.js:289:11");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

throw new Error("Module build failed: ReferenceError: window is not defined\n    at D:\\automake\\webpack\\extract-text-webpack-plugin\\node_modules\\.0.19.0@style-loader\\index.js!D:\\automake\\webpack\\extract-text-webpack-plugin\\node_modules\\.0.28.7@css-loader\\index.js!D:\\automake\\webpack\\extract-text-webpack-plugin\\node_modules\\.6.0.6@sass-loader\\lib\\loader.js!D:\\automake\\webpack\\extract-text-webpack-plugin\\src\\ui\\footer.sass:220:9\n    at D:\\automake\\webpack\\extract-text-webpack-plugin\\node_modules\\.0.19.0@style-loader\\index.js!D:\\automake\\webpack\\extract-text-webpack-plugin\\node_modules\\.0.28.7@css-loader\\index.js!D:\\automake\\webpack\\extract-text-webpack-plugin\\node_modules\\.6.0.6@sass-loader\\lib\\loader.js!D:\\automake\\webpack\\extract-text-webpack-plugin\\src\\ui\\footer.sass:209:46\n    at module.exports.module.exports (D:\\automake\\webpack\\extract-text-webpack-plugin\\node_modules\\.0.19.0@style-loader\\index.js!D:\\automake\\webpack\\extract-text-webpack-plugin\\node_modules\\.0.28.7@css-loader\\index.js!D:\\automake\\webpack\\extract-text-webpack-plugin\\node_modules\\.6.0.6@sass-loader\\lib\\loader.js!D:\\automake\\webpack\\extract-text-webpack-plugin\\src\\ui\\footer.sass:264:46)\n    at Object.<anonymous> (D:\\automake\\webpack\\extract-text-webpack-plugin\\node_modules\\.0.19.0@style-loader\\index.js!D:\\automake\\webpack\\extract-text-webpack-plugin\\node_modules\\.0.28.7@css-loader\\index.js!D:\\automake\\webpack\\extract-text-webpack-plugin\\node_modules\\.6.0.6@sass-loader\\lib\\loader.js!D:\\automake\\webpack\\extract-text-webpack-plugin\\src\\ui\\footer.sass:82:36)\n    at __webpack_require__ (D:\\automake\\webpack\\extract-text-webpack-plugin\\node_modules\\.0.19.0@style-loader\\index.js!D:\\automake\\webpack\\extract-text-webpack-plugin\\node_modules\\.0.28.7@css-loader\\index.js!D:\\automake\\webpack\\extract-text-webpack-plugin\\node_modules\\.6.0.6@sass-loader\\lib\\loader.js!D:\\automake\\webpack\\extract-text-webpack-plugin\\src\\ui\\footer.sass:21:30)\n    at D:\\automake\\webpack\\extract-text-webpack-plugin\\node_modules\\.0.19.0@style-loader\\index.js!D:\\automake\\webpack\\extract-text-webpack-plugin\\node_modules\\.0.28.7@css-loader\\index.js!D:\\automake\\webpack\\extract-text-webpack-plugin\\node_modules\\.6.0.6@sass-loader\\lib\\loader.js!D:\\automake\\webpack\\extract-text-webpack-plugin\\src\\ui\\footer.sass:64:18\n    at Object.<anonymous> (D:\\automake\\webpack\\extract-text-webpack-plugin\\node_modules\\.0.19.0@style-loader\\index.js!D:\\automake\\webpack\\extract-text-webpack-plugin\\node_modules\\.0.28.7@css-loader\\index.js!D:\\automake\\webpack\\extract-text-webpack-plugin\\node_modules\\.6.0.6@sass-loader\\lib\\loader.js!D:\\automake\\webpack\\extract-text-webpack-plugin\\src\\ui\\footer.sass:67:10)\n    at Module._compile (module.js:569:30)\n    at Object.exec (D:\\automake\\webpack\\extract-text-webpack-plugin\\node_modules\\.3.7.1@webpack\\lib\\NormalModule.js:129:12)\n    at D:\\automake\\webpack\\extract-text-webpack-plugin\\node_modules\\.3.0.1@extract-text-webpack-plugin\\dist\\loader.js:131:26\n    at compile (D:\\automake\\webpack\\extract-text-webpack-plugin\\node_modules\\.3.7.1@webpack\\lib\\Compiler.js:304:11)\n    at applyPluginsAsync.err (D:\\automake\\webpack\\extract-text-webpack-plugin\\node_modules\\.3.7.1@webpack\\lib\\Compiler.js:514:14)\n    at next (D:\\automake\\webpack\\extract-text-webpack-plugin\\node_modules\\.0.2.8@tapable\\lib\\Tapable.js:202:11)\n    at Compiler.<anonymous> (D:\\automake\\webpack\\extract-text-webpack-plugin\\node_modules\\.3.0.1@extract-text-webpack-plugin\\dist\\loader.js:112:7)\n    at next (D:\\automake\\webpack\\extract-text-webpack-plugin\\node_modules\\.0.2.8@tapable\\lib\\Tapable.js:204:14)\n    at Compiler.<anonymous> (D:\\automake\\webpack\\extract-text-webpack-plugin\\node_modules\\.3.7.1@webpack\\lib\\CachePlugin.js:78:5)\n    at Compiler.applyPluginsAsyncSeries (D:\\automake\\webpack\\extract-text-webpack-plugin\\node_modules\\.0.2.8@tapable\\lib\\Tapable.js:206:13)\n    at compilation.seal.err (D:\\automake\\webpack\\extract-text-webpack-plugin\\node_modules\\.3.7.1@webpack\\lib\\Compiler.js:511:11)\n    at Compilation.applyPluginsAsyncSeries (D:\\automake\\webpack\\extract-text-webpack-plugin\\node_modules\\.0.2.8@tapable\\lib\\Tapable.js:195:46)\n    at self.applyPluginsAsync.err (D:\\automake\\webpack\\extract-text-webpack-plugin\\node_modules\\.3.7.1@webpack\\lib\\Compilation.js:678:19)\n    at Compilation.applyPluginsAsyncSeries (D:\\automake\\webpack\\extract-text-webpack-plugin\\node_modules\\.0.2.8@tapable\\lib\\Tapable.js:195:46)\n    at self.applyPluginsAsync.err (D:\\automake\\webpack\\extract-text-webpack-plugin\\node_modules\\.3.7.1@webpack\\lib\\Compilation.js:669:11)\n    at Compilation.applyPluginsAsyncSeries (D:\\automake\\webpack\\extract-text-webpack-plugin\\node_modules\\.0.2.8@tapable\\lib\\Tapable.js:195:46)\n    at self.applyPluginsAsync.err (D:\\automake\\webpack\\extract-text-webpack-plugin\\node_modules\\.3.7.1@webpack\\lib\\Compilation.js:664:10)\n    at Compilation.applyPluginsAsyncSeries (D:\\automake\\webpack\\extract-text-webpack-plugin\\node_modules\\.0.2.8@tapable\\lib\\Tapable.js:195:46)\n    at sealPart2 (D:\\automake\\webpack\\extract-text-webpack-plugin\\node_modules\\.3.7.1@webpack\\lib\\Compilation.js:660:9)\n    at Compilation.applyPluginsAsyncSeries (D:\\automake\\webpack\\extract-text-webpack-plugin\\node_modules\\.0.2.8@tapable\\lib\\Tapable.js:195:46)\n    at Compilation.seal (D:\\automake\\webpack\\extract-text-webpack-plugin\\node_modules\\.3.7.1@webpack\\lib\\Compilation.js:603:8)\n    at applyPluginsParallel.err (D:\\automake\\webpack\\extract-text-webpack-plugin\\node_modules\\.3.7.1@webpack\\lib\\Compiler.js:508:17)\n    at D:\\automake\\webpack\\extract-text-webpack-plugin\\node_modules\\.0.2.8@tapable\\lib\\Tapable.js:289:11");

/***/ })
/******/ ]);