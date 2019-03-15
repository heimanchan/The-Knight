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
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _knight_knight__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./knight/knight */ \"./src/knight/knight.js\");\n\n\nclass Game {\n  constructor(canvas, ctx){\n    this.canvas = canvas;\n    this.ctx = ctx;\n    this.canvas.width = 640;\n    this.canvas.height = 480;\n    document.body.appendChild(this.canvas);\n    this.knight = new _knight_knight__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n  }\n\n  draw(fps) {\n    const fpsInterval = 1000 / fps;\n    let then = performance.now();\n\n    const animate = () => {\n      requestAnimationFrame(animate);\n\n      const now = performance.now();\n      const elapsed = now - then;\n\n      if (elapsed > fpsInterval) {\n        then = now - (elapsed % fpsInterval);\n\n        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);\n\n        // extract to drawKnight(ctx) later\n        const knight = this.knight;\n        this.ctx.drawImage(knight.sprite.img,\n          knight.sprite.srcX(), \n          knight.sprite.srcY(), \n          knight.sprite.width, \n          knight.sprite.height,\n          knight.x, \n          knight.y, \n          knight.sprite.width * 2, \n          knight.sprite.height * 2,\n        )\n        knight.sprite.updateFrame();\n        // extract to drawKnight(ctx) later\n      }\n    };\n    animate();\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Game);\n\n//# sourceURL=webpack:///./src/game.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _sprite__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sprite */ \"./src/sprite.js\");\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game */ \"./src/game.js\");\n\n\n\nfunction component() {\n  let element = document.createElement('div');\n  const canvas = document.getElementById(\"game-canvas\");\n  const ctx = canvas.getContext(\"2d\");\n  let game = new _game__WEBPACK_IMPORTED_MODULE_1__[\"default\"](canvas, ctx);\n  game.draw(10);\n  return element;\n}\n\ndocument.body.appendChild(component());\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/knight/knight.js":
/*!******************************!*\
  !*** ./src/knight/knight.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _knight_sprites__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./knight_sprites */ \"./src/knight/knight_sprites.js\");\n\n\nclass Knight {\n  constructor() {\n    this.sprite = _knight_sprites__WEBPACK_IMPORTED_MODULE_0__[\"knightAttackSprite\"];\n\n    this.x = 150;\n    this.y = 335;\n  }\n\n  \n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Knight);\n\n//# sourceURL=webpack:///./src/knight/knight.js?");

/***/ }),

/***/ "./src/knight/knight_sprites.js":
/*!**************************************!*\
  !*** ./src/knight/knight_sprites.js ***!
  \**************************************/
/*! exports provided: knightWalkSprite, knightIdleSprite, knightAttackSprite, knightBlockSprite, knightDeathSprite */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"knightWalkSprite\", function() { return knightWalkSprite; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"knightIdleSprite\", function() { return knightIdleSprite; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"knightAttackSprite\", function() { return knightAttackSprite; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"knightBlockSprite\", function() { return knightBlockSprite; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"knightDeathSprite\", function() { return knightDeathSprite; });\n/* harmony import */ var _sprite__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../sprite */ \"./src/sprite.js\");\n\n\nconst knightWalk = new Image();\nconst knightIdle = new Image();\nconst knightAttack = new Image();\nconst knightBlock = new Image();\nconst knightDeath = new Image();\n\nknightIdle.src = \"./sprite/knight/knight_idle.png\";\nknightWalk.src = \"./sprite/knight/knight_walk.png\";\nknightAttack.src = \"./sprite/knight/knight_attack.png\";\nknightBlock.src = \"./sprite/knight/knight_block.png\";\nknightDeath.src = \"./sprite/knight/knight_death.png\";\n\nconst knightWalkSprite = new _sprite__WEBPACK_IMPORTED_MODULE_0__[\"default\"](knightWalk, 336, 42, 1, 8);\nconst knightIdleSprite = new _sprite__WEBPACK_IMPORTED_MODULE_0__[\"default\"](knightIdle, 168, 42, 1, 4);\nconst knightAttackSprite = new _sprite__WEBPACK_IMPORTED_MODULE_0__[\"default\"](knightAttack, 800, 42, 1, 10);\nconst knightBlockSprite = new _sprite__WEBPACK_IMPORTED_MODULE_0__[\"default\"](knightBlock, 294, 42, 1, 7);\nconst knightDeathSprite = new _sprite__WEBPACK_IMPORTED_MODULE_0__[\"default\"](knightDeath, 378, 42, 1, 9);\n\n//# sourceURL=webpack:///./src/knight/knight_sprites.js?");

/***/ }),

/***/ "./src/sprite.js":
/*!***********************!*\
  !*** ./src/sprite.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// const canWidth = 300;\n// const canHeight = 300;\n\n// let x = 100;\n// let y = 335;\n\n// let srcX;\n// let srcY;\n\n// const sheetWidth = 168;\n// const sheetHeight = 42;\n\n// const cols = 4;\n// const rows = 1\n\n// let width = sheetWidth / cols; \n// let height = sheetHeight / rows; \n\n// let currentFrame = 0;\n\n// const character = new Image();\n// character.src = \"./sprite/knight/knight_idle.png\";\n\n// const canvas = document.getElementById(\"game-canvas\");\n// canvas.width = canWidth;\n// canvas.height = canHeight;\n// const ctx = canvas.getContext(\"2d\");\n\n// function updateFrame() {\n//   currentFrame = ++ currentFrame % cols;\n//   srcX = currentFrame * width;\n//   srcY = 0;\n\n//   ctx.clearRect(x, y, width, height)\n// }\n\n// // game class\n// function drawImage() {\n//   updateFrame();\n\n  // ctx.drawImage(character, \n  //   srcX, srcY, width, height,\n  //   x, y, width * 2, height * 2,\n  // )\n// }\n\n// setInterval(function() {\n//   drawImage();\n// }, 300)\n\n\nclass Sprite {\n  constructor(img, sheetWidth, sheetHeight, rows, frameCount) {\n    this.img = img,\n    this.width = sheetWidth / frameCount;\n    this.height = sheetHeight / rows;\n    this.frameCount = frameCount;\n    this.currentFrame = 0;\n  }\n\n  srcX() {\n    return this.currentFrame * this.width;\n  }\n\n  srcY() {\n    return 0;\n  }\n\n  updateFrame() {\n    this.currentFrame = ++this.currentFrame % this.frameCount;\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Sprite);\n\n//# sourceURL=webpack:///./src/sprite.js?");

/***/ })

/******/ });