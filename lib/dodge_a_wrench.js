document.addEventListener("DOMContentLoaded", function(){
  const canvasEl = document.getElementById("myCanvas");
  canvasEl.width = 1420;
  canvasEl.height = 680;

  const ctx = canvasEl.getContext("2d");
  ctx.fillStyle = 'black';
  ctx.fillRect(0,0, canvasEl.width, canvasEl.height);
  // const game = new Game();
  // new GameView(game, ctx).start();
});
