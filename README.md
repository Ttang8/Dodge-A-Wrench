# Dodge-A-Wrench


[Dodge-A-Wrench Live][Dodge]


Dodge-A-Wrench is a full javascript game. The game is a take on the Texas Instruments graphing calculator game, *Avalanche*.

This project was blueprinted and created with a 4day deadline using vanilla Javascript, HTML Canvas and CSS

## Technology

* Dodge-A-Wrench was built using vanilla Javascript for the overall logic and structure of the game.

* HTML and CSS was used for the audio, sprite handling and overall aesthetics.

* Webpack used to bundle files

## How to Play

Press Enter to start playing. Use &#8592;/&#8594; arrow keys to dodge incoming wrenches. Grab a power ball and become a super dodgeball player.  A life is lost when you get hit by a wrench. Survive as long as you can and get the high score!

## Features & Implementation

The wrenches and the powerups are treated a projectiles and are given a thrown property that toggles between true and false to determine probability of being thrown.

``` javascript
// wrench.js
setThrowBall(idx) {
  if (this.powerBall.length === 13) {
    this.powerBall[idx].throwing = true;
  }
}

handleThrow() {
  let num = (Math.floor(this.level) * 0.5);
  if ((4 - num) < 1) {
    num = 3;
  }
  let prob = Math.round(Math.random() * 4) - num;

  let throwInterval = Math.round(Math.random() * (4-Math.round(num)));
  if (throwInterval === (4-Math.round(num))) {
    this.setThrow(Math.floor(Math.random() * 13));
  }

  let ballProb = Math.round(Math.random() * 100);
  if (ballProb === 100) {
    this.setThrowBall(Math.floor(Math.random() * 13));
  }
}
```

As levels go up, the speed of the projectiles and the player increases for more difficulty.

``` javascript
// wrench.js
update(deltaTime) {
  this.execute += deltaTime;
  this.powerBall.forEach((ball) => {
    if (ball.throwing) {
      ball.cy += (5 + Math.floor(this.level));
      if (this.execute > 100) {
        ball.sx += 64;
      }
      if (ball.sx > 128) {
        ball.sx = 0;
      }
    }
  });

  this.wrenches.forEach( (wrench, idx) => {
    if (wrench.throwing) {
      wrench.cy += (5 + (Math.floor(this.level)));
      if (this.execute > 100) {
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

// dodge_a_wrench.js
if (key && key === 37) {
  player.move(-3.5 - (wrench.level/2));
  drawLeftDown();
}

if (key && key === 39) {
  player.move(3.5 + (wrench.level/2));
  drawRightDown();
}
```

## Future Features for the Project

- [ ] More kinds of power ups
- [ ] Ability to use a mouse to move player
- [ ] Ability for player to go up and down

[Dodge]:https://ttang8.github.io/Dodge-A-Wrench/
