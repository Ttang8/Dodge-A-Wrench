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

var _player = __webpack_require__(2);

var _player2 = _interopRequireDefault(_player);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

document.addEventListener('DOMContentLoaded', function () {
  var canvas = document.getElementById('myCanvas');
  var ctx = canvas.getContext('2d');

  var buttonCanvas = document.getElementById('buttons');
  var ctxBut = buttonCanvas.getContext('2d');

  var backgroundImage = new Image();
  backgroundImage.src = './assets/images/floor.png';
  var buttonImage = new Image();
  buttonImage.src = './assets/images/button.png';

  var drawBg = function drawBg() {
    ctx.drawImage(backgroundImage, 0, 0, 833, 600);
  };

  var drawLeftUp = function drawLeftUp() {
    ctxBut.drawImage(buttonImage, 100, 1062, 230, 230, 0, 0, 90, 90);
  };

  var drawLeftDown = function drawLeftDown() {
    ctxBut.drawImage(buttonImage, 348, 1062, 230, 230, 0, 0, 90, 90);
  };

  var drawRightUp = function drawRightUp() {
    ctxBut.drawImage(buttonImage, 100, 802, 230, 230, 100, 0, 90, 90);
  };

  var drawRightDown = function drawRightDown() {
    ctxBut.drawImage(buttonImage, 348, 802, 230, 230, 100, 0, 90, 90);
  };

  var drawMuteOff = function drawMuteOff() {
    ctxBut.drawImage(buttonImage, 348, 5496, 230, 230, 250, 0, 90, 90);
  };

  var drawMuteOn = function drawMuteOn() {
    ctxBut.drawImage(buttonImage, 615, 5496, 230, 230, 250, 0, 90, 90);
  };

  var bgMusic = new Audio('assets/audio/bg_music.mp3');
  bgMusic.loop = true;
  bgMusic.volume = 0.1;
  // bgMusic.play();

  var introSpeech = new Audio('assets/audio/intro_speech_dodge.mp3');
  // introSpeech.play();

  var paused = false;
  var muteCheck = false;
  window.addEventListener('keypress', function (event) {
    // if (event.keyCode === 112) {
    //   if (pause) {
    //     pause = false;
    //   } else {
    //     pause = true;
    //   }
    // }
    if (event.keyCode === 13) {
      newGame();
      // togglePause();
    }
    if (event.keyCode === 109) {

      if (muteCheck) {
        muteCheck = false;
      } else {
        muteCheck = true;
      }
    }
  });

  var key = void 0;
  window.addEventListener('keydown', function (event) {
    key = event.keyCode;
  });

  window.addEventListener('keyup', function (e) {
    key = 0;
  });

  var lastTime = 0;
  var execute = 0;
  var deltaTime = void 0;
  var wrench = void 0;
  var player = void 0;

  wrench = new _wrench2.default();
  player = new _player2.default();

  var newGame = function newGame() {
    wrench = new _wrench2.default();
    player = new _player2.default();
    player.lives = 5;
    // introSpeech.pause();
    bgMusic.play();
    animate();
  };

  window.onload = function () {
    drawBg();
    player.draw(ctx);
    drawLeftUp();
    drawRightUp();
    drawMuteOff();
  };

  var togglePause = function togglePause() {
    paused = !paused;
  };

  var myReq = void 0;
  var update = function update(deltaTime) {
    console.log(paused);
    if (muteCheck) {
      bgMusic.volume = 0;
    } else {
      bgMusic.volume = 0.1;
    }
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBg();
    ctx.font = '30px Gloria Hallelujah';
    ctx.fillStyle = 'red';
    ctx.fillText('Lives: ' + player.lives, 25, 100);

    if (muteCheck === true) {
      drawMuteOn();
    } else {
      drawMuteOff();
    }
    drawLeftUp();
    drawRightUp();

    wrench.create();
    wrench.draw(ctx);
    wrench.update(deltaTime);
    wrench.destroy();
    wrench.handleThrow();
    if (!paused) {
      myReq = requestAnimationFrame(animate);
    }
    if (player.lives === 0) {
      // ctx.clearRect(player.data.cx, player.data.cy, 64, 64);

      player.data.sy = 128;
      player.data.sx = 64;
      player.draw(ctx);
      cancelAnimationFrame(myReq);
      bgMusic.pause();
    }

    player.draw(ctx);
    player.update(deltaTime);
    if (key && key === 37) {
      player.move(-4);
      drawLeftDown();
    }

    if (key && key === 39) {
      player.move(4);
      drawRightDown();
    }
    wrench.hit(player);
  };

  var animate = function animate() {
    var time = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

    deltaTime = time - lastTime;
    lastTime = time;
    update(deltaTime);
  };

  var updateButtons = function updateButtons() {
    if (muteCheck === true) {
      drawMuteOn();
    } else {
      drawMuteOff();
    }
    if (muteCheck) {
      bgMusic.volume = 0;
    } else {
      bgMusic.volume = 0.1;
    }
    drawLeftUp();
    drawRightUp();
    if (key && key === 37) {
      // player.move(-4);
      drawLeftDown();
    }

    if (key && key === 39) {
      // player.move(4);
      drawRightDown();
    }
  };

  var animateButtons = function animateButtons() {
    updateButtons();
    requestAnimationFrame(animateButtons);
  };
  animateButtons();
});

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Wrench = function () {
  function Wrench() {
    _classCallCheck(this, Wrench);

    this.image = new Image();
    this.image.src = './assets/images/wrench_small.png';
    this.wrenchHit = new Audio('assets/audio/wrench_hit.mp3');
    this.wrenchHit.volume = 1;

    this.data = {
      sx: 0,
      sy: 0,
      sw: 64,
      sh: 64,
      cx: 0,
      cy: 0,
      dw: 64,
      dh: 64
    };
    this.wrenches = [];
    this.execute = 0;
  }

  _createClass(Wrench, [{
    key: 'create',
    value: function create() {
      if (this.data.cx < 832) {
        this.wrenches.push({
          sx: this.data.sx,
          sy: this.data.sy,
          cx: this.data.cx,
          cy: this.data.cy,
          width: 64,
          height: 64,
          throwing: false
        });
      }
      this.data.cx += 64;
    }
  }, {
    key: 'draw',
    value: function draw(ctx) {
      var _this = this;

      this.wrenches.forEach(function (wrench, idx) {
        ctx.drawImage(_this.image, wrench.sx, wrench.sy, wrench.width, wrench.height, wrench.cx, wrench.cy, wrench.width, wrench.height);
      });
    }
  }, {
    key: 'update',
    value: function update(deltaTime) {
      var _this2 = this;

      this.execute += deltaTime;
      this.wrenches.forEach(function (wrench, idx) {
        if (wrench.throwing) {
          wrench.cy += 5;
          if (_this2.execute > 100) {
            wrench.sx += 64;
          }
          if (wrench.sx > 192) {
            wrench.sx = 0;
          }
        }
      });
      if (this.execute > 100) {
        this.execute = 0;
      }
    }
  }, {
    key: 'destroy',
    value: function destroy() {
      this.wrenches.forEach(function (wrench, idx) {
        if (wrench.cy >= 612) {
          wrench.throwing = false;
          wrench.sx = 0;
          wrench.cy = 0;
        }
      });
    }
  }, {
    key: 'setThrow',
    value: function setThrow(idx) {
      if (this.wrenches.length === 13) {
        this.wrenches[idx].throwing = true;
      }
    }
  }, {
    key: 'handleThrow',
    value: function handleThrow() {
      var throwInterval = Math.round(Math.random() * 4);
      if (throwInterval === 4) {
        this.setThrow(Math.floor(Math.random() * 13));
      }
    }
  }, {
    key: 'hit',
    value: function hit(player) {
      for (var i = 0; i < this.wrenches.length; i++) {
        var playerLeft = player.data.cx + 0;
        var playerRight = player.data.cx + 64;
        if (this.wrenches[i].cx + 32 > playerLeft && this.wrenches[i].cx + 32 < playerRight && this.wrenches[i].cy + 32 > player.data.cy && this.wrenches[i].cy + 32 < player.data.cy + 64) {
          this.wrenchHit.play();
          this.wrenches[i].cy = 0;
          this.wrenches[i].throwing = false;
          player.lives -= 1;
          player.hit = true;
        }
      }
    }
  }]);

  return Wrench;
}();

exports.default = Wrench;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Player = function () {
  function Player() {
    _classCallCheck(this, Player);

    this.image = new Image();
    this.image.src = './assets/images/dodgeball_player.png';
    this.lives = 5;
    this.execute = 0;
    this.hit = false;

    this.data = {
      sx: 0,
      sy: 0,
      sw: 64,
      sh: 64,
      cx: 400,
      cy: 536,
      dw: 64,
      dh: 64
    };
  }

  _createClass(Player, [{
    key: 'draw',
    value: function draw(ctx) {
      ctx.drawImage(this.image, this.data.sx, this.data.sy, this.data.sw, this.data.sh, this.data.cx, this.data.cy, this.data.dw, this.data.dh);
    }
  }, {
    key: 'update',
    value: function update(deltaTime) {
      this.execute += deltaTime;
      if (this.hit) {
        this.data.sx = 0;
        this.data.sy = 128;
        if (this.execute > 1000) {
          this.execute = 0;
          this.hit = false;
        }
      } else {
        if (this.execute > 200) {
          this.data.sx += 64;
          this.data.sy = 0;
        }
        if (this.data.sx > 64) {
          this.data.sx = 0;
          this.data.sy = 0;
        }
        if (this.execute > 200) {
          this.execute = 0;
        }
      }
    }
  }, {
    key: 'move',
    value: function move(speed) {
      if (speed < 0) {
        if (this.data.cx > 0) {
          this.data.cx += speed;
        }
      } else {
        if (this.data.cx < 800 - 32) {
          this.data.cx += speed;
        }
      }
    }
  }, {
    key: 'kill',
    value: function kill(ctx) {
      this.data.sy = 336;
    }
  }]);

  return Player;
}();

exports.default = Player;

/***/ })
/******/ ]);