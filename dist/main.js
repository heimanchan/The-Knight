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

/***/ "./src/controls.js":
/*!*************************!*\
  !*** ./src/controls.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _knight_knight_sprites__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./knight/knight_sprites */ \"./src/knight/knight_sprites.js\");\n\n\nconst controlListeners = game => {\n  const knight = game.knight;\n\n  window.addEventListener('keydown', ({key, repeat}) => {\n    if (repeat) return;\n\n    switch(key) {\n      case ('w' || false):\n        console.log(\"jump\");\n        knight.jump();\n        break;\n      case('a' || false):\n        console.log(\"left\");\n        console.log(knight.faceLeft)\n        knight.toLeft();\n        break;\n      case('d' || false):\n        console.log(\"right\")\n        console.log(knight.faceLeft)\n        knight.toRight();\n        break;\n      case ('j'):\n        console.log(\"attack\");\n        knight.attack();\n        break;\n      default:\n        return;\n    }\n  })\n\n  window.addEventListener('keyup', ({key}) => {\n    knight.stop(key);\n  })\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (controlListeners);\n\n//# sourceURL=webpack:///./src/controls.js?");

/***/ }),

/***/ "./src/enemy/enemy.js":
/*!****************************!*\
  !*** ./src/enemy/enemy.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _enemy_sprites__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./enemy_sprites */ \"./src/enemy/enemy_sprites.js\");\n\n\nclass Enemy {\n  constructor() {\n    this.sprite = _enemy_sprites__WEBPACK_IMPORTED_MODULE_0__[\"enemytDeathSprite\"];\n\n    this.x = 350;\n    this.y = 340;\n  }\n\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Enemy);\n\n//# sourceURL=webpack:///./src/enemy/enemy.js?");

/***/ }),

/***/ "./src/enemy/enemy_sprites.js":
/*!************************************!*\
  !*** ./src/enemy/enemy_sprites.js ***!
  \************************************/
/*! exports provided: enemytWalkSprite, enemytDeathSprite */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"enemytWalkSprite\", function() { return enemytWalkSprite; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"enemytDeathSprite\", function() { return enemytDeathSprite; });\n/* harmony import */ var _sprite__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../sprite */ \"./src/sprite.js\");\n\n\nconst enemytWalk = new Image();\nconst enemytDeath = new Image();\n\nenemytWalk.src = \"./sprite/enemy.png\";\nenemytDeath.src = \"./sprite/enemy_death.png\";\n\nconst enemytWalkSprite = new _sprite__WEBPACK_IMPORTED_MODULE_0__[\"default\"](enemytWalk, 960, 80, 1, 12);\nconst enemytDeathSprite = new _sprite__WEBPACK_IMPORTED_MODULE_0__[\"default\"](enemytDeath, 960, 80, 1, 12);\n\n//# sourceURL=webpack:///./src/enemy/enemy_sprites.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _knight_knight__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./knight/knight */ \"./src/knight/knight.js\");\n/* harmony import */ var _knight_drawKnight__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./knight/drawKnight */ \"./src/knight/drawKnight.js\");\n/* harmony import */ var _enemy_enemy__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./enemy/enemy */ \"./src/enemy/enemy.js\");\n\n\n\n\nclass Game {\n  constructor(canvas, ctx){\n    this.canvas = canvas;\n    this.ctx = ctx;\n    this.canvas.width = 640;\n    this.canvas.height = 480;\n    document.body.appendChild(this.canvas);\n    this.knight = new _knight_knight__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n    this.enemy = new _enemy_enemy__WEBPACK_IMPORTED_MODULE_2__[\"default\"]();\n  }\n\n  draw(fps) {\n    const fpsInterval = 1000 / fps;\n    let then = performance.now();\n\n    //update loop\n    const animate = () => {\n      requestAnimationFrame(animate);\n\n      const now = performance.now();\n      const elapsed = now - then;\n\n      if (elapsed > fpsInterval) {\n        then = now - (elapsed % fpsInterval);\n\n        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);\n\n        Object(_knight_drawKnight__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(this.knight, this.ctx);\n\n        // extract to drawKnight(ctx) later\n        const enemy = this.enemy;\n        this.ctx.drawImage(enemy.sprite.img,\n          enemy.sprite.srcX(),\n          enemy.sprite.srcY(),\n          enemy.sprite.width,\n          enemy.sprite.height,\n          enemy.x,\n          enemy.y,\n          enemy.sprite.width,\n          enemy.sprite.height,\n        )\n        enemy.sprite.updateFrame();\n        // extract to drawKnight(ctx) later\n      }\n    };\n    animate();\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Game);\n\n//# sourceURL=webpack:///./src/game.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _sprite__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sprite */ \"./src/sprite.js\");\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game */ \"./src/game.js\");\n/* harmony import */ var _controls__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./controls */ \"./src/controls.js\");\n\n\n\n\nfunction component() {\n  let element = document.createElement('div');\n  const canvas = document.getElementById(\"game-canvas\");\n  const ctx = canvas.getContext(\"2d\");\n  \n  let game = new _game__WEBPACK_IMPORTED_MODULE_1__[\"default\"](canvas, ctx);\n  Object(_controls__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(game);\n  game.draw(10);\n  \n  return element;\n}\n\ndocument.body.appendChild(component());\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/knight/drawKnight.js":
/*!**********************************!*\
  !*** ./src/knight/drawKnight.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst drawKnight = (knight, ctx) => {\n  if (knight.isOutBound) knight.resetPosition();\n  // ctx.scale(-1, 1);\n  ctx.drawImage(knight.sprite.img,\n    knight.sprite.srcX(),\n    knight.sprite.srcY(),\n    knight.sprite.width ,\n    knight.sprite.height,\n    knight.velocity.x,\n    knight.velocity.y,\n    knight.sprite.width * 2,\n    knight.sprite.height * 2,\n  )\n  knight.sprite.updateFrame();\n  knight.velocity.updatePos();\n  knight.velocity.resetOnGround();\n  \n  // TEST\n  console.log(`Air: ${knight.velocity.isInTheAir()}, dLeft: ${knight.velocity.dLeft}, dRight: ${knight.velocity.dRight}\n  `)\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (drawKnight);\n\n//# sourceURL=webpack:///./src/knight/drawKnight.js?");

/***/ }),

/***/ "./src/knight/knight.js":
/*!******************************!*\
  !*** ./src/knight/knight.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _knight_sprites__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./knight_sprites */ \"./src/knight/knight_sprites.js\");\n/* harmony import */ var _velocity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../velocity */ \"./src/velocity.js\");\n\n\n\nclass Knight {\n  constructor() {\n    this.sprite = _knight_sprites__WEBPACK_IMPORTED_MODULE_0__[\"knightIdleSprite\"];\n    this.velocity = new _velocity__WEBPACK_IMPORTED_MODULE_1__[\"default\"](150, 340);\n    this.faceLeft = false;\n    this.isMoving = false;\n    this.isJumping = this.velocity.isInTheAir();\n  }\n\n  jump() {\n    if (this.faceLeft === true) {\n      this.sprite = _knight_sprites__WEBPACK_IMPORTED_MODULE_0__[\"knightBlockLeftSprite\"];\n      this.velocity.dLeft = 18;\n    } else {\n      this.sprite = _knight_sprites__WEBPACK_IMPORTED_MODULE_0__[\"knightBlockSprite\"];\n      this.velocity.dRight = 18;\n    }\n    this.sprite.faceLeft = this.faceLeft;\n    this.velocity.dUp = 50;\n  }\n\n  toRight() {\n    this.faceLeft = false;\n    if (this.moving) return;\n    this.isMoving = true;\n    this.sprite = _knight_sprites__WEBPACK_IMPORTED_MODULE_0__[\"knightWalkSprite\"];\n    this.sprite.faceLeft = this.faceLeft;\n    this.velocity.dLeft = 0;\n    this.velocity.dRight = 12;\n  }\n\n  toLeft() {\n    this.faceLeft = true;\n    if (this.moving) return;\n    this.isMoving = true;\n    this.sprite = _knight_sprites__WEBPACK_IMPORTED_MODULE_0__[\"knightWalkLeftSprite\"];\n    this.sprite.faceLeft = this.faceLeft;\n    this.velocity.dRight = 0;\n    this.velocity.dLeft = 12;\n  }\n\n  stop(keyUp) {\n    if (keyUp === 'd' || 'RIGHT') {\n      this.isMoving = false;\n      this.velocity.dRight = 0;\n    }\n\n    if (keyUp === 'a' || 'LEFT') {\n      this.isMoving = false;\n      this.velocity.dLeft = 0;\n    }\n\n    // if (keyUp === 'w' || 'UP') {\n    //   this.isJumping = false;\n    // }\n\n    if (this.velocity.dX() === 0) {\n      this.sprite.faceLeft = this.faceLeft;\n      if (this.faceLeft === true) {\n        this.sprite = _knight_sprites__WEBPACK_IMPORTED_MODULE_0__[\"knightIdleLeftSprite\"]\n      } else this.sprite = _knight_sprites__WEBPACK_IMPORTED_MODULE_0__[\"knightIdleSprite\"];\n    }\n  }\n\n  attack() {\n    if (this.faceLeft === true) {\n      this.sprite = _knight_sprites__WEBPACK_IMPORTED_MODULE_0__[\"knightAttackLeftSprite\"]\n    } else this.sprite = _knight_sprites__WEBPACK_IMPORTED_MODULE_0__[\"knightAttackSprite\"];\n  }\n\n  isOutBound() {\n    return (this.velocity.x < 0 || this.velocity.x + this.sprite.width > 640)\n  }\n\n  resetPosition() {\n    if (this.velocity.x < 0) {\n      this.velocity.x = 0;\n    }\n\n    if (this.velocity.x + this.sprite.width > 640) {\n      this.velocity.x = 640 - this.sprite.width;\n    }\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Knight);\n\n//# sourceURL=webpack:///./src/knight/knight.js?");

/***/ }),

/***/ "./src/knight/knight_sprites.js":
/*!**************************************!*\
  !*** ./src/knight/knight_sprites.js ***!
  \**************************************/
/*! exports provided: knightWalkSprite, knightWalkLeftSprite, knightIdleSprite, knightIdleLeftSprite, knightAttackSprite, knightAttackLeftSprite, knightBlockSprite, knightBlockLeftSprite, knightDeathSprite */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"knightWalkSprite\", function() { return knightWalkSprite; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"knightWalkLeftSprite\", function() { return knightWalkLeftSprite; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"knightIdleSprite\", function() { return knightIdleSprite; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"knightIdleLeftSprite\", function() { return knightIdleLeftSprite; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"knightAttackSprite\", function() { return knightAttackSprite; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"knightAttackLeftSprite\", function() { return knightAttackLeftSprite; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"knightBlockSprite\", function() { return knightBlockSprite; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"knightBlockLeftSprite\", function() { return knightBlockLeftSprite; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"knightDeathSprite\", function() { return knightDeathSprite; });\n/* harmony import */ var _sprite__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../sprite */ \"./src/sprite.js\");\n\n\nconst knightWalk = new Image();\nconst knightWalkLeft = new Image();\nconst knightIdle = new Image();\nconst knightIdleLeft = new Image();\nconst knightAttack = new Image();\nconst knightAttackLeft = new Image();\nconst knightBlock = new Image();\nconst knightBlockLeft = new Image();\nconst knightDeath = new Image();\n\nknightIdle.src = \"./sprite/knight/knight_idle.png\";\nknightIdleLeft.src = \"./sprite/knight/knight_idle_left.png\";\nknightWalk.src = \"./sprite/knight/knight_walk.png\";\nknightWalkLeft.src = \"./sprite/knight/knight_walk_left.png\";\nknightAttack.src = \"./sprite/knight/knight_attack.png\";\nknightAttackLeft.src = \"./sprite/knight/knight_attack_left.png\";\nknightBlock.src = \"./sprite/knight/knight_block.png\";\nknightBlockLeft.src = \"./sprite/knight/knight_block_left.png\";\nknightDeath.src = \"./sprite/knight/knight_death.png\";\n\nconst knightWalkSprite = new _sprite__WEBPACK_IMPORTED_MODULE_0__[\"default\"](knightWalk, 336, 42, 1, 8);\nconst knightWalkLeftSprite = new _sprite__WEBPACK_IMPORTED_MODULE_0__[\"default\"](knightWalkLeft, 416, 41, 1, 8);\nconst knightIdleSprite = new _sprite__WEBPACK_IMPORTED_MODULE_0__[\"default\"](knightIdle, 168, 42, 1, 4);\nconst knightIdleLeftSprite = new _sprite__WEBPACK_IMPORTED_MODULE_0__[\"default\"](knightIdleLeft, 208, 41, 1, 4);\nconst knightAttackSprite = new _sprite__WEBPACK_IMPORTED_MODULE_0__[\"default\"](knightAttack, 800, 42, 1, 10);\nconst knightAttackLeftSprite = new _sprite__WEBPACK_IMPORTED_MODULE_0__[\"default\"](knightAttackLeft, 520, 41, 1, 10);\nconst knightBlockSprite = new _sprite__WEBPACK_IMPORTED_MODULE_0__[\"default\"](knightBlock, 294, 42, 1, 7);\nconst knightBlockLeftSprite = new _sprite__WEBPACK_IMPORTED_MODULE_0__[\"default\"](knightBlockLeft, 364, 41, 1, 7);\nconst knightDeathSprite = new _sprite__WEBPACK_IMPORTED_MODULE_0__[\"default\"](knightDeath, 378, 42, 1, 9);\n\n//# sourceURL=webpack:///./src/knight/knight_sprites.js?");

/***/ }),

/***/ "./src/sprite.js":
/*!***********************!*\
  !*** ./src/sprite.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass Sprite {\n  constructor(img, sheetWidth, sheetHeight, rows, frameCount) {\n    this.img = img,\n    this.width = sheetWidth / frameCount;\n    this.height = sheetHeight / rows;\n    this.frameCount = frameCount;\n    this.currentFrame = 0;\n    this.faceLeft = false;\n  }\n\n  srcX() {\n    return this.currentFrame * this.width;\n  }\n\n  srcY() {\n    return 0;\n  }\n\n  updateFrame() {\n    this.currentFrame = ++this.currentFrame % this.frameCount;\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Sprite);\n\n//# sourceURL=webpack:///./src/sprite.js?");

/***/ }),

/***/ "./src/velocity.js":
/*!*************************!*\
  !*** ./src/velocity.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass Velocity {\n  constructor(x, y) {\n    this.x = x;\n    this.y = y;\n    this.dLeft = 0;\n    this.dRight = 0;\n    this.dUp = 0;\n    this.dDown = 0;\n  }\n\n  dX() {\n    return -this.dLeft + this.dRight;\n  }\n\n  dY() {\n    return -this.dUp + this.dDown;\n  }\n\n  updatePos() {\n    if (this.y < 335) {\n      this.dUp *= 0.9;\n      this.dDown += 10;\n    }\n\n    this.x += this.dX();\n    this.y += this.dY();\n  }\n\n  isInTheAir() {\n    return this.y < 340\n  }\n\n  resetOnGround() {\n    // below the ground\n    if (this.y + this.dY() + 10 > 340) {\n      this.y = 340;\n      this.dDown = 0;\n      this.dUp = 0;\n    }\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Velocity);\n\n//# sourceURL=webpack:///./src/velocity.js?");

/***/ })

/******/ });