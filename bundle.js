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


var _wrench = __webpack_require__(1);

var _wrench2 = _interopRequireDefault(_wrench);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

document.addEventListener("DOMContentLoaded", function () {
  var canvasEl = document.getElementById("myCanvas");
  canvasEl.width = 1420;
  canvasEl.height = 680;
  var ctx = canvasEl.getContext("2d");

  var boardStart = canvasEl.width / 4;

  var wrenches = [];

  ctx.scale(10, 10);

  var matrix = [[1, 1, 1, 1, 1], [0, 1, 1, 1, 0], [0, 1, 1, 1, 0], [0, 0, 1, 0, 0]];

  var draw = function draw() {

    ctx.fillStyle = 'black';
    ctx.fillRect(boardStart / 10, 0, canvasEl.width / 20, canvasEl.height);

    // ctx.clearRect(0,0, canvasEl.width, canvasEl.height);
    drawMatrix(matrix, offset);
  };

  var drawMatrix = function drawMatrix(matrix, offset) {
    matrix.forEach(function (row, y) {
      row.forEach(function (value, x) {
        if (value !== 0) {
          ctx.fillStyle = 'red';
          ctx.fillRect(x + offset.x, y + offset.y, 1, 1);
        }
      });
    });
  };

  var dropCounter = 0;
  var dropInterval = 10;
  var lastTime = 0;
  var update = function update() {
    var time = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

    var deltaTime = time - lastTime;
    lastTime = time;

    dropCounter += deltaTime;
    if (dropCounter > dropInterval) {
      offset.y += 1;
      dropCounter = 0;
    }
    draw();
    requestAnimationFrame(update);
  };

  var offset = {
    x: boardStart / (Math.random() * 6.5 + 3.5),
    y: 0
  };

  update();
  // const game = new Game();
  // new GameView(game, ctx).start();
});

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Wrench = function Wrench() {
  _classCallCheck(this, Wrench);
};

exports.default = Wrench;

/***/ })
/******/ ]);