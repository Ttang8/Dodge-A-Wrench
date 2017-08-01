import Wrench from './wrench';

document.addEventListener("DOMContentLoaded", function(){
  const canvasEl = document.getElementById("myCanvas");
  canvasEl.width = 1420;
  canvasEl.height = 680;
  const ctx = canvasEl.getContext("2d");


  let boardStart = canvasEl.width/4;

  let wrenches = [];

  ctx.scale(10,10);

  const matrix = [
    [1,1,1,1,1],
    [0,1,1,1,0],
    [0,1,1,1,0],
    [0,0,1,0,0],
  ];

  const draw = () => {

    ctx.fillStyle = 'black';
    ctx.fillRect(boardStart/10,0, canvasEl.width/20, canvasEl.height);

    // ctx.clearRect(0,0, canvasEl.width, canvasEl.height);
    drawMatrix(matrix, offset);
  };

  const drawMatrix = (matrix, offset) => {
    matrix.forEach((row,y) => {
      row.forEach((value,x) => {
        if (value !== 0) {
          ctx.fillStyle = 'red';
          ctx.fillRect(x + offset.x ,y + offset.y,1,1);
        }
      });
    });
  };

  let dropCounter = 0;
  let dropInterval = 10;
  let lastTime = 0;
  const update = (time = 0) => {
    const deltaTime = time - lastTime;
    lastTime = time;

    dropCounter += deltaTime;
    if (dropCounter > dropInterval) {
      offset.y += 1;
      dropCounter = 0;
    }
    draw();
    requestAnimationFrame(update);
  };

  const offset = {
    x: boardStart/((Math.random() * 6.5) + 3.5 ),
    y: 0
  };

  update();
  // const game = new Game();
  // new GameView(game, ctx).start();
});
