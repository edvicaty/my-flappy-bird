function update() {
  frames++;
  clearCanvas();
  board.draw();
  if (frames % 250 === 0) {
    obstacleCreator();
  }
  characterMovement();
  obstacleDrawer();
  scoreUpdate();
}

function startGame() {
  intervalId = setInterval(update, 1000 / 60);
}
