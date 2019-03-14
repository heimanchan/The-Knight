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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// import Sprite from './sprite';\n\n// class Game {\n//   constructor(canvas) {\n//     this.canvas = canvas;\n//     canvas.width = 640;\n//     canvas.height = 480;\n\n//     this.gameOver = false;\n//   }\n\n//   draw() {\n//     const ctx = this.canvas.getContext(\"2d\");\n//   }\n\n//   run() {\n//     this.draw();\n    \n//   }\n\n//   isGameOver() {\n//     this.seconds = 0\n//     this.gamerOver = true;\n//   }\n\n// }\n\n// export default Game;\n\n//# sourceURL=webpack:///./src/game.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _stage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./stage */ \"./src/stage.js\");\n/* harmony import */ var _sprite__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sprite */ \"./src/sprite.js\");\n/* harmony import */ var _sprite__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_sprite__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./game */ \"./src/game.js\");\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_game__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\nfunction component() {\n  let element = document.createElement('div');\n  // element.appendChild(Stage)\n  const canvas = document.getElementById(\"game-canvas\");\n  let stage = new _stage__WEBPACK_IMPORTED_MODULE_0__[\"default\"](canvas)\n  stage.play();\n  return element;\n}\n\ndocument.body.appendChild(component());\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/sprite.js":
/*!***********************!*\
  !*** ./src/sprite.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// function sprite(options) {\n//   let that = {},\n//   frameIndex = 0,\n//   tickCount = 0,\n//   ticksPerFrame = options.ticksPerFrame || 0,\n//   numberOfFrames = options.numberOfFrames || 1;\n\n//   that.context = options.context;\n//   that.width = options.width;\n//   that.height = options.height;\n//   that.image = options.image;\n\n//   const canvas = document.getElementById(\"game-canvas\");\n\n//   that.loop = options.loop\n\n//   that.update = function () {\n//     tickCount += 1;\n\n//     if (tickCount > ticksPerFrame) {\n//       tickCount = 0;\n\n//       if (frameIndex < numberOfFrames - 1) {\n//         frameIndex += 1;\n//       } else if (that.loop) {\n//         frameIndex = 0;\n//       }\n//     }\n//   }\n\n//   that.render = function () {\n//     that.context.drawImage(\n//       that.image,\n//       // srcX, srcY\n//       // 0, 0, that.width, that.height,\n//       frameIndex * that.width / numberOfFrames, 0, that.width / numberOfFrames, that.height,\n//       // canvas-destination x & y\n//       0, 0, that.width / numberOfFrames, that.height\n//     )\n//   }\n\n//   return that;\n// }\n\n// let knightImage = new Image();\n// knightImage.src = './sprite/knight/knight_idle.png';\n\n// const knight = sprite({\n//   context: canvas.getContext(\"2d\"),\n//   width: 48,\n//   height: 48,\n//   image: knightImage\n// })\n\n// knight.render();\n\n// export default sprite;\n\nclass Sprite {\n  constructor(){\n    this.canWidth = 650;\n    this.canHeight = 300;\n\n    this.x = 0;\n    this.y = 0;\n\n    this.srcX;\n    this.srcY;\n\n    this.sheetWidth = 168;\n    this.sheetHeight = 42;\n  }\n}\n\n//# sourceURL=webpack:///./src/sprite.js?");

/***/ }),

/***/ "./src/stage.js":
/*!**********************!*\
  !*** ./src/stage.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _sprite__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sprite */ \"./src/sprite.js\");\n/* harmony import */ var _sprite__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_sprite__WEBPACK_IMPORTED_MODULE_0__);\n// const canvas = document.createElement(\"canvas\");\n// const ctx = canvas.getContext(\"2d\");\n// canvas.width = 640;\n// canvas.height = 480;\n// document.body.appendChild(canvas);\n\n// let background = {};\n\n// loadImage(\"Layer_0010_1\");\n// loadImage(\"Layer_0008_3\");\n// loadImage(\"Layer_0009_2\");\n// loadImage(\"Layer_0007_Lights\");\n// loadImage(\"Layer_0005_5\");\n// loadImage(\"Layer_0006_4\");\n// loadImage(\"Layer_0004_Lights\");\n// loadImage(\"Layer_0002_7\");\n// loadImage(\"Layer_0003_6\");\n// loadImage(\"Layer_0000_9\");\n// loadImage(\"Layer_0001_8\");\n\n// function loadImage(name) {\n//   background[name] = new Image();\n//   background[name].onload = function () {\n//     resourceLoaded();\n//   }\n//   background[name].src = `../img/background/${name}.png`;\n// }\n\n// const totalResources = 11;\n// let numResourcesLoaded = 0;\n// let fps = 30;\n\n// function resourceLoaded() {\n//   numResourcesLoaded += 1;\n//   if (numResourcesLoaded === totalResources) {\n//     setInterval(redraw, 1000 / fps);\n//   }\n// }\n\n// function redraw() {\n//   canvas.width = canvas.width\n//   ctx.drawImage(background[\"Layer_0010_1\"], 0, -310);\n//   ctx.drawImage(background[\"Layer_0008_3\"], 0, -310);\n//   ctx.drawImage(background[\"Layer_0009_2\"], 0, -310);\n//   ctx.drawImage(background[\"Layer_0007_Lights\"], 0, -310);\n//   ctx.drawImage(background[\"Layer_0005_5\"], 0, -310);\n//   ctx.drawImage(background[\"Layer_0006_4\"], 0, -310);\n//   ctx.drawImage(background[\"Layer_0004_Lights\"], 0, -310);\n//   ctx.drawImage(background[\"Layer_0002_7\"], 0, -310);\n//   ctx.drawImage(background[\"Layer_0003_6\"], 0, -310);\n//   ctx.drawImage(background[\"Layer_0000_9\"], 0, -310);\n//   ctx.drawImage(background[\"Layer_0001_8\"], 0, -310);\n// }\n\n\n\nclass Stage {\n  constructor(canvas){\n    this.canvas = canvas;\n    this.ctx = this.canvas.getContext(\"2d\");\n    this.canvas.width = 640;\n    this.canvas.height = 480;\n    document.body.appendChild(this.canvas);\n  }\n\n  play() {\n    let knightImage = new Image();\n    knightImage.src = './sprite/knight/knight_idle.png';\n\n    const knight = _sprite__WEBPACK_IMPORTED_MODULE_0___default()({\n      context: this.ctx,\n      width: 48,\n      height: 48,\n      image: knightImage\n    })\n\n    knight.render();\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Stage);\n\n//# sourceURL=webpack:///./src/stage.js?");

/***/ })

/******/ });