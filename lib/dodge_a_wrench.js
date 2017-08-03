import Wrench from './wrench';
import Player from './player';

document.addEventListener('DOMContentLoaded', () => {
  const canvas = document.getElementById('myCanvas');
  const ctx = canvas.getContext('2d');

  const buttonCanvas = document.getElementById('buttons');
  const ctxBut = buttonCanvas.getContext('2d');

  const backgroundImage = new Image();
  backgroundImage.src = './assets/images/floor.png';
  const buttonImage = new Image();
  buttonImage.src = './assets/images/button.png';

  const drawBg = () =>{
    ctx.drawImage(backgroundImage,0,0,832,600);
  };

  const drawLeftUp = () => {
    ctxBut.drawImage(buttonImage,100,1062,230,230,0,0,90,90);
  };

  const drawLeftDown = () => {
    ctxBut.drawImage(buttonImage,348,1062,230,230,0,0,90,90);
  };

  const drawRightUp = () => {
    ctxBut.drawImage(buttonImage,100,802,230,230,100,0,90,90);
  };

  const drawRightDown = () => {
    ctxBut.drawImage(buttonImage,348,802,230,230,100,0,90,90);
  };

  const drawMuteOff = () => {
    ctxBut.drawImage(buttonImage,348,5496,230,230,250,0,90,90);
  };

  const drawMuteOn = () => {
    ctxBut.drawImage(buttonImage,615,5496,230,230,250,0,90,90);
  };

  const bgMusic = new Audio('assets/audio/bg_music.mp3');
  bgMusic.loop = true;
  bgMusic.volume = 0.1;
  // bgMusic.play();

  const introSpeech = new Audio('assets/audio/intro_speech_dodge.mp3');
  introSpeech.play();

  let pause = false;
  let muteCheck = false;
  window.addEventListener('keypress', event => {
    if (event.keyCode === 112) {
      if (pause) {
        pause = false;
      } else {
        pause = true;
      }
    }
    if (event.keyCode === 13) {
      newGame();
    }
    if (event.keyCode === 109) {

      if (muteCheck) {
        muteCheck = false;
      } else {
        muteCheck = true;
      }
    }
  });

  let key;
  window.addEventListener('keydown', event => {
    key = event.keyCode;
  });

  window.addEventListener('keyup', e => {
    key = 0;
  });

  let lastTime = 0;
  let execute = 0;
  let deltaTime;
  let wrench;
  let player;

  const newGame = ()=>{
    wrench = new Wrench();
    player = new Player();
    player.lives = 5;
    introSpeech.pause();
    bgMusic.play();
    animate();
  };


  const update = (deltaTime) => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBg();
    ctx.font = '30px Gloria Hallelujah';
    ctx.fillStyle = 'red';
    ctx.fillText(`Lives: ${player.lives}`, 25, 100);

    if (muteCheck === true) {
      drawMuteOn();
    } else {
      drawMuteOff();
    }
    drawLeftUp();
    drawRightUp();
    if (player.lives === 0) {
      player.data.sy = 128;
      player.data.sx = 64;
      player.draw(ctx);
      cancelAnimationFrame(myReq);
      bgMusic.pause();
    } else {

      player.draw(ctx);
    }
    player.update(deltaTime);
    if (key && key === 37) {
      player.move(-4);
      drawLeftDown();
    }

    if (key && key === 39) {
      player.move(4);
      drawRightDown();
    }

    wrench.create();
    wrench.draw(ctx);
    wrench.update(deltaTime);
    wrench.destroy();
    wrench.handleThrow();

    wrench.hit(player);
    let myReq = requestAnimationFrame(animate);

  };

  const animate = (time = 0) => {
    deltaTime = time - lastTime;
    lastTime = time;
    update(deltaTime);
  };


});
