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

/***/ "./src/collisions.js":
/*!***************************!*\
  !*** ./src/collisions.js ***!
  \***************************/
/*! exports provided: collides, isHit, checkCollisions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"collides\", function() { return collides; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isHit\", function() { return isHit; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"checkCollisions\", function() { return checkCollisions; });\n/* harmony import */ var _knight_knight_sprites__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./knight/knight_sprites */ \"./src/knight/knight_sprites.js\");\n\n\nconst collides = (x, y, r, b, x2, y2, r2, b2) => {\n  return !(\n    r <= x2 || x > r2 ||\n    b <= y2 || y > b2  \n  )\n}\n\nconst isHit = (knight, enemy) => {\n  return (!knight.faceLeft && knight.sprite === _knight_knight_sprites__WEBPACK_IMPORTED_MODULE_0__[\"knightAttackSprite\"] && collides(\n    knight.velocity.x, //x\n    knight.velocity.y, //y\n    knight.velocity.x + knight.sprite.width, //r\n    knight.velocity.y + knight.sprite.height,//b\n    enemy.velocity.x,\n    enemy.velocity.y,\n    enemy.velocity.x + enemy.sprite.width-50,\n    enemy.velocity.y + enemy.sprite.height\n  )) ||\n   (knight.sprite === _knight_knight_sprites__WEBPACK_IMPORTED_MODULE_0__[\"knightAttackLeftSprite\"] && collides(\n    knight.velocity.x, //x\n    knight.velocity.y, //y\n    knight.velocity.x + knight.sprite.width, //r\n    knight.velocity.y + knight.sprite.height,//b\n    enemy.velocity.x + 30,\n    enemy.velocity.y,\n    enemy.velocity.x + enemy.sprite.width - 20,\n    enemy.velocity.y + enemy.sprite.height\n  ))\n}\n\nconst checkCollisions = (knight, enemy) => {\n  return (!isHit(knight, enemy) && collides(\n      knight.velocity.x, //x\n      knight.velocity.y, //y\n      knight.velocity.x + knight.sprite.width, //r\n      knight.velocity.y + knight.sprite.height,//b\n      enemy.velocity.x + 30,\n      enemy.velocity.y,\n      enemy.velocity.x + enemy.sprite.width - 50,\n      enemy.velocity.y + enemy.sprite.height\n    )\n  )\n}\n\n//# sourceURL=webpack:///./src/collisions.js?");

/***/ }),

/***/ "./src/controls.js":
/*!*************************!*\
  !*** ./src/controls.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst controlListeners = game => {\n  window.addEventListener('keydown', keysPressed, false)\n  window.addEventListener('keyup', keysReleased, false)\n\n  const knight = game.knight;\n  const keysDown = game.keysDown;\n\n  function keysPressed({key}) {\n    keysDown[key] = true;\n\n    if ('a' in keysDown) {\n      console.log(\"left\");\n      knight.toLeft();\n    }\n\n    if ('d' in keysDown) {\n      console.log(\"Right\");\n      knight.toRight();\n    }\n\n    if ('w' in keysDown) {\n      console.log(\"Jump\");\n      knight.jump();\n    }\n\n    if ('j' in keysDown) {\n      console.log(\"attack\");\n      knight.attack();\n    }\n    console.log(keysDown)\n    // key.preventDefault();\n  }\n\n  function keysReleased({key}) {\n    delete keysDown[key];\n    knight.stop(key);\n  }\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (controlListeners);\n\n//# sourceURL=webpack:///./src/controls.js?");

/***/ }),

/***/ "./src/enemy/draw_enemy.js":
/*!*********************************!*\
  !*** ./src/enemy/draw_enemy.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _collisions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../collisions */ \"./src/collisions.js\");\n\n\nconst drawEnemy = (knight, enemy, ctx) => {\n  ctx.save();\n  ctx.drawImage(enemy.sprite.img,\n    enemy.sprite.srcX(),\n    enemy.sprite.srcY(),\n    enemy.sprite.width,\n    enemy.sprite.height,\n    enemy.velocity.x,\n    enemy.velocity.y,\n    enemy.sprite.width,\n    enemy.sprite.height,\n  )\n  ctx.restore();\n\n  enemy.velocity.updatePos();\n  enemy.sprite.updateFrame();\n}\n\nconst drawEnemies = (knight, enemies, ctx) => {\n  for (let i = 0; i < enemies.length; i++) {\n    drawEnemy(knight, enemies[i], ctx)\n  }\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (drawEnemies);\n\n\n//# sourceURL=webpack:///./src/enemy/draw_enemy.js?");

/***/ }),

/***/ "./src/enemy/enemy.js":
/*!****************************!*\
  !*** ./src/enemy/enemy.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _enemy_sprites__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./enemy_sprites */ \"./src/enemy/enemy_sprites.js\");\n/* harmony import */ var _velocity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../velocity */ \"./src/velocity.js\");\n\n\n\nclass Enemy {\n  constructor(speed, bonus) {\n    this.fromLeft = Math.random() < 0.5 ? 0 : true, false\n    this.sprite = this.fromLeft ? _enemy_sprites__WEBPACK_IMPORTED_MODULE_0__[\"enemytWalkSprite\"] : _enemy_sprites__WEBPACK_IMPORTED_MODULE_0__[\"enemytWalkFromRightSprite\"];\n    this.velocity = new _velocity__WEBPACK_IMPORTED_MODULE_1__[\"default\"](this.fromLeft ? 0 : 620, 340);\n    this.velocity.dLeft = this.fromLeft ? 0 : speed || 3;\n    this.velocity.dRight = this.fromLeft ? speed || 3 : 0;\n    this.bonus = bonus || false;\n  }\n\n  isOutScreen() {\n    return (this.velocity.x < 0 || this.velocity.x > 620)\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Enemy);\n\n// Math.random() * (3640 - 300) + 30\n\n//# sourceURL=webpack:///./src/enemy/enemy.js?");

/***/ }),

/***/ "./src/enemy/enemy_sprites.js":
/*!************************************!*\
  !*** ./src/enemy/enemy_sprites.js ***!
  \************************************/
/*! exports provided: enemytWalkSprite, enemytWalkFromRightSprite, enemytDeathSprite */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"enemytWalkSprite\", function() { return enemytWalkSprite; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"enemytWalkFromRightSprite\", function() { return enemytWalkFromRightSprite; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"enemytDeathSprite\", function() { return enemytDeathSprite; });\n/* harmony import */ var _sprite__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../sprite */ \"./src/sprite.js\");\n\n\nconst enemytWalk = new Image();\nconst enemytWalkFromRight = new Image();\nconst enemytDeath = new Image();\n\nenemytWalk.src = \"./sprite/enemy.png\";\nenemytWalkFromRight.src = \"./sprite/enemy_a.png\";\nenemytDeath.src = \"./sprite/enemy_death.png\";\n\nconst enemytWalkSprite = new _sprite__WEBPACK_IMPORTED_MODULE_0__[\"default\"](enemytWalk, 960, 80, 1, 12);\nconst enemytWalkFromRightSprite = new _sprite__WEBPACK_IMPORTED_MODULE_0__[\"default\"](enemytWalkFromRight, 960, 80, 1, 12);\nconst enemytDeathSprite = new _sprite__WEBPACK_IMPORTED_MODULE_0__[\"default\"](enemytDeath, 960, 80, 1, 12);\n\n//# sourceURL=webpack:///./src/enemy/enemy_sprites.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _knight_knight__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./knight/knight */ \"./src/knight/knight.js\");\n/* harmony import */ var _knight_drawKnight__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./knight/drawKnight */ \"./src/knight/drawKnight.js\");\n/* harmony import */ var _enemy_enemy__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./enemy/enemy */ \"./src/enemy/enemy.js\");\n/* harmony import */ var _enemy_draw_enemy__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./enemy/draw_enemy */ \"./src/enemy/draw_enemy.js\");\n/* harmony import */ var _collisions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./collisions */ \"./src/collisions.js\");\n/* harmony import */ var _knight_knight_sprites__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./knight/knight_sprites */ \"./src/knight/knight_sprites.js\");\n/* harmony import */ var _timer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./timer */ \"./src/timer.js\");\n/* harmony import */ var _game_status__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./game_status */ \"./src/game_status.js\");\n/* harmony import */ var _score__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./score */ \"./src/score.js\");\n\n\n\n\n\n\n\n\n\n\n\nclass Game {\n  constructor(canvas, ctx){\n    this.canvas = canvas;\n    this.ctx = ctx;\n    this.canvas.width = 640;\n    this.canvas.height = 480;\n    document.body.appendChild(this.canvas);\n    this.knight = new _knight_knight__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\n    this.enemies = [];\n    this.score = 0;\n    this.isGameOver = false;\n    this.gameState = \"play\";\n    this.keysDown = {};\n  }\n\n  draw(fps) {\n    const fpsInterval = 1000 / fps;\n    let then = performance.now();\n\n    //update loop\n    const animate = () => {\n      if (this.gameState === 'game over') {\n        Object(_game_status__WEBPACK_IMPORTED_MODULE_7__[\"drawGameOver\"])(this.ctx, this.score, then)\n        this.ctx = null;\n        this.enemies = [];\n        return;\n      }\n\n      requestAnimationFrame(animate);\n      const now = performance.now();\n      const elapsed = now - then;\n      const knight = this.knight;\n      const enemies = this.enemies;\n\n      Object(_timer__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(this.ctx, now)\n      Object(_score__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(this.ctx, this.score)\n\n      if (elapsed > fpsInterval) {\n        then = now - (elapsed % fpsInterval);\n        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);\n\n        Object(_knight_drawKnight__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(knight, this.ctx);\n        if (parseInt((now / 1000) + 20) % 7 === 0) {\n          //                                               max - min + 1 + min\n          enemies.push(new _enemy_enemy__WEBPACK_IMPORTED_MODULE_2__[\"default\"](Math.floor((Math.random() * 7 - 2 + 1) + 3)));\n        }\n        \n        if (parseInt((now / 1000) + 1000) % 30 === 0) {\n          enemies.push(new _enemy_enemy__WEBPACK_IMPORTED_MODULE_2__[\"default\"](15, true));\n          console.log(\"BOOOOOONNNUUS\")\n        }\n        \n        Object(_enemy_draw_enemy__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(knight, enemies, this.ctx)\n        for (let i = 0; i < enemies.length; i++) {\n          if (Object(_collisions__WEBPACK_IMPORTED_MODULE_4__[\"isHit\"])(knight, enemies[i])) {\n            enemies.splice(i, 1);\n            if (knight.faceLeft) {\n              if (enemies[i].bonus) {\n                this.score += 1000;\n              } else this.score += 100;\n              console.log(\"LEFT ATTAAAAAAAACK\")\n            } else {\n                if (enemies[i].bonus) {\n                  this.score += 1000;\n                } else this.score += 100;\n              console.log(\"RIGHT ATTAAAAAAAACK\")\n            }\n          }\n          \n          if (Object(_collisions__WEBPACK_IMPORTED_MODULE_4__[\"checkCollisions\"])(knight, enemies[i])) {\n            this.gameState = 'game over';\n            knight.sprite = _knight_knight_sprites__WEBPACK_IMPORTED_MODULE_5__[\"knightDeathSprite\"]\n          }\n\n          if (enemies[i].isOutScreen()) {\n            enemies.splice(i, 1);\n          }\n        }\n\n        if (60 - parseInt(now / 1000) === 0) {\n          this.gameState = 'game over';\n        }\n      }\n    }\n    animate();  \n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Game);\n\n//# sourceURL=webpack:///./src/game.js?");

/***/ }),

/***/ "./src/game_status.js":
/*!****************************!*\
  !*** ./src/game_status.js ***!
  \****************************/
/*! exports provided: drawGameOver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"drawGameOver\", function() { return drawGameOver; });\nconst drawGameOver = (ctx, score, now) => {\n  ctx.fillStyle = 'rgba(0, 0, 0, 0.5)';\n  ctx.fillRect(0, 0, 640, 480);\n\n  ctx.font = '40px Arial';\n  ctx.fillStyle = 'white';\n  ctx.textAlign = 'center';\n\n  let gameOverText;\n  (60 - parseInt(now / 1000) === 0) ? gameOverText = \"Congraduations!\" : \"GAME OVER\";\n  \n  ctx.fillText(\n    gameOverText,\n    640 / 2,\n    480 / 2 ,\n  );\n\n  ctx.font = '20px Arial';\n  ctx.fillText(\n    `SCORE: ${score}`,\n    640 / 2,\n    480 / 2 + 30,\n  );\n\n  ctx.fillText(\n    `YOU SURVIVED: ${(parseInt(now / 1000))} seconds`,\n    640 / 2,\n    480 / 2 + 55,\n  );\n};\n\n\n//# sourceURL=webpack:///./src/game_status.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ \"./src/game.js\");\n/* harmony import */ var _controls__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./controls */ \"./src/controls.js\");\n\n\n\nwindow.addEventListener(\"DOMContentLoaded\", () => {\n  const canvas = document.getElementById(\"game-canvas\");\n  const ctx = canvas.getContext(\"2d\");\n  let game = new _game__WEBPACK_IMPORTED_MODULE_0__[\"default\"](canvas, ctx);\n  Object(_controls__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(game);\n  game.draw(10);\n})\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/knight/drawKnight.js":
/*!**********************************!*\
  !*** ./src/knight/drawKnight.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst drawKnight = (knight, ctx) => {\n  if (knight.isOutBound) knight.resetPosition();\n\n  ctx.drawImage(knight.sprite.img,\n    knight.sprite.srcX(),\n    knight.sprite.srcY(),\n    knight.sprite.width ,\n    knight.sprite.height,\n    knight.velocity.x,\n    knight.velocity.y,\n    knight.sprite.width * 2,\n    knight.sprite.height * 2,\n  )\n  knight.sprite.updateFrame();\n  knight.velocity.updatePos();\n  knight.velocity.resetOnGround();\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (drawKnight);\n\n//# sourceURL=webpack:///./src/knight/drawKnight.js?");

/***/ }),

/***/ "./src/knight/knight.js":
/*!******************************!*\
  !*** ./src/knight/knight.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _knight_sprites__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./knight_sprites */ \"./src/knight/knight_sprites.js\");\n/* harmony import */ var _velocity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../velocity */ \"./src/velocity.js\");\n\n\n\nclass Knight {\n  constructor() {\n    this.sprite = _knight_sprites__WEBPACK_IMPORTED_MODULE_0__[\"knightIdleSprite\"];\n    this.velocity = new _velocity__WEBPACK_IMPORTED_MODULE_1__[\"default\"](150, 340);\n    this.faceLeft = false;\n    this.isMoving = false;\n    this.isJumping = this.velocity.isInTheAir();\n  }\n\n  jump() {\n    if (this.faceLeft === true) {\n      this.sprite = _knight_sprites__WEBPACK_IMPORTED_MODULE_0__[\"knightBlockLeftSprite\"];\n      this.velocity.dLeft = 18;\n    } else {\n      this.sprite = _knight_sprites__WEBPACK_IMPORTED_MODULE_0__[\"knightBlockSprite\"];\n      this.velocity.dRight = 18;\n    }\n    this.sprite.faceLeft = this.faceLeft;\n    this.velocity.dUp = 50;\n  }\n\n  toRight() {\n    this.faceLeft = false;\n    if (this.moving) return;\n    this.isMoving = true;\n    this.sprite = _knight_sprites__WEBPACK_IMPORTED_MODULE_0__[\"knightWalkSprite\"];\n    this.sprite.faceLeft = this.faceLeft;\n    this.velocity.dLeft = 0;\n    this.velocity.dRight = 12;\n  }\n\n  toLeft() {\n    this.faceLeft = true;\n    if (this.moving) return;\n    this.isMoving = true;\n    this.sprite = _knight_sprites__WEBPACK_IMPORTED_MODULE_0__[\"knightWalkLeftSprite\"];\n    this.sprite.faceLeft = this.faceLeft;\n    this.velocity.dRight = 0;\n    this.velocity.dLeft = 12;\n  }\n\n  stop(keyUp) {\n    if (keyUp === 'd' || 'RIGHT') {\n      this.isMoving = false;\n      this.velocity.dRight = 0;\n    }\n\n    if (keyUp === 'a' || 'LEFT') {\n      this.isMoving = false;\n      this.velocity.dLeft = 0;\n    }\n\n    if (keyUp === 'w' || 'UP') {\n      this.isJumping = false;\n    }\n\n    if (this.velocity.dX() === 0) {\n      this.sprite.faceLeft = this.faceLeft;\n      if (this.faceLeft === true) {\n        this.sprite = _knight_sprites__WEBPACK_IMPORTED_MODULE_0__[\"knightIdleLeftSprite\"]\n      } else this.sprite = _knight_sprites__WEBPACK_IMPORTED_MODULE_0__[\"knightIdleSprite\"];\n    }\n  }\n\n  attack() {\n    if (this.faceLeft === true) {\n      this.sprite = _knight_sprites__WEBPACK_IMPORTED_MODULE_0__[\"knightAttackLeftSprite\"]\n    } else this.sprite = _knight_sprites__WEBPACK_IMPORTED_MODULE_0__[\"knightAttackSprite\"];\n\n  }\n\n  isOutBound() {\n    return (this.velocity.x < 0 || this.velocity.x + this.sprite.width > 640)\n  }\n\n  resetPosition() {\n    if (this.velocity.x < 0) {\n      this.velocity.x = 0;\n    }\n\n    if (this.velocity.x + this.sprite.width > 640) {\n      this.velocity.x = 640 - this.sprite.width;\n    }\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Knight);\n\n//# sourceURL=webpack:///./src/knight/knight.js?");

/***/ }),

/***/ "./src/knight/knight_sprites.js":
/*!**************************************!*\
  !*** ./src/knight/knight_sprites.js ***!
  \**************************************/
/*! exports provided: knightWalkSprite, knightWalkLeftSprite, knightIdleSprite, knightIdleLeftSprite, knightAttackSprite, knightAttackLeftSprite, knightBlockSprite, knightBlockLeftSprite, knightDeathSprite */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"knightWalkSprite\", function() { return knightWalkSprite; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"knightWalkLeftSprite\", function() { return knightWalkLeftSprite; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"knightIdleSprite\", function() { return knightIdleSprite; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"knightIdleLeftSprite\", function() { return knightIdleLeftSprite; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"knightAttackSprite\", function() { return knightAttackSprite; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"knightAttackLeftSprite\", function() { return knightAttackLeftSprite; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"knightBlockSprite\", function() { return knightBlockSprite; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"knightBlockLeftSprite\", function() { return knightBlockLeftSprite; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"knightDeathSprite\", function() { return knightDeathSprite; });\n/* harmony import */ var _sprite__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../sprite */ \"./src/sprite.js\");\n\n\nconst knightWalk = new Image();\nconst knightWalkLeft = new Image();\nconst knightIdle = new Image();\nconst knightIdleLeft = new Image();\nconst knightAttack = new Image();\nconst knightAttackLeft = new Image();\nconst knightBlock = new Image();\nconst knightBlockLeft = new Image();\nconst knightDeath = new Image();\n\nknightIdle.src = \"./sprite/knight/knight_idle.png\";\nknightIdleLeft.src = \"./sprite/knight/knight_idle_left.png\";\nknightWalk.src = \"./sprite/knight/knight_walk.png\";\nknightWalkLeft.src = \"./sprite/knight/knight_walk_left.png\";\nknightAttack.src = \"./sprite/knight/knight_attack.png\";\nknightAttackLeft.src = \"./sprite/knight/knight_attack_left.png\";\nknightBlock.src = \"./sprite/knight/knight_block.png\";\nknightBlockLeft.src = \"./sprite/knight/knight_block_left.png\";\nknightDeath.src = \"./sprite/knight/knight_death.png\";\n\nconst knightWalkSprite = new _sprite__WEBPACK_IMPORTED_MODULE_0__[\"default\"](knightWalk, 336, 42, 1, 8);\nconst knightWalkLeftSprite = new _sprite__WEBPACK_IMPORTED_MODULE_0__[\"default\"](knightWalkLeft, 416, 41, 1, 8);\nconst knightIdleSprite = new _sprite__WEBPACK_IMPORTED_MODULE_0__[\"default\"](knightIdle, 168, 42, 1, 4);\nconst knightIdleLeftSprite = new _sprite__WEBPACK_IMPORTED_MODULE_0__[\"default\"](knightIdleLeft, 208, 41, 1, 4);\nconst knightAttackSprite = new _sprite__WEBPACK_IMPORTED_MODULE_0__[\"default\"](knightAttack, 420, 42, 1, 7);\nconst knightAttackLeftSprite = new _sprite__WEBPACK_IMPORTED_MODULE_0__[\"default\"](knightAttackLeft, 364, 41, 1, 7);\nconst knightBlockSprite = new _sprite__WEBPACK_IMPORTED_MODULE_0__[\"default\"](knightBlock, 294, 42, 1, 7);\nconst knightBlockLeftSprite = new _sprite__WEBPACK_IMPORTED_MODULE_0__[\"default\"](knightBlockLeft, 364, 41, 1, 7);\nconst knightDeathSprite = new _sprite__WEBPACK_IMPORTED_MODULE_0__[\"default\"](knightDeath, 378, 42, 1, 9);\n\n//# sourceURL=webpack:///./src/knight/knight_sprites.js?");

/***/ }),

/***/ "./src/score.js":
/*!**********************!*\
  !*** ./src/score.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst drawScore = (ctx, score) => {\n  ctx.font = \"16px Arial\"\n  ctx.fillStyle = \"yellow\";\n  ctx.textAlign = \"center\";\n  ctx.fillText(`Score ${score}`, 100, 460)\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (drawScore);\n\n//# sourceURL=webpack:///./src/score.js?");

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

/***/ "./src/timer.js":
/*!**********************!*\
  !*** ./src/timer.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst drawTimer = (ctx, now) => {\n  ctx.font =\"30px Arial\"\n  ctx.fillStyle = \"yellow\";\n  ctx.textAlign = \"center\";\n  ctx.fillText(60 - parseInt(now / 1000), 640/2, 50)\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (drawTimer);\n\n//# sourceURL=webpack:///./src/timer.js?");

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