obstaclesArray = [];
let intervalId;
let frames = 0;
function clearCanvas() {
  context.fillRect(0, 0, $canvas.width, $canvas.height);
}

function characterMovement() {
  character.draw();
  character.fall();
}

//event listeners

document.addEventListener("keypress", function (event) {
  let keyPressed = event.code;
  if (keyPressed === "Space" && frames === 0) {
    startGame();
  }
  if (keyPressed === "Space" && frames > 0) {
    character.jump();
  }
});

//obstacle creator

function obstacleCreator() {
  let topMinY = -500;
  let topMaxY = 0;
  let gap = 150;
  let randomHeight = Math.random() * (topMaxY - topMinY) + topMinY;
  obstaclesArray.push(new Obstacle(randomHeight));
  obstaclesArray.push(new Obstacle(randomHeight + gap + 500));
}

//obstacle drawer
function obstacleDrawer() {
  obstaclesArray.forEach((obstacle) => {
    obstacle.draw();
    if (collisionDetecter(obstacle)) {
      gameOver();
    }
  });
}

//collision detecter
function collisionDetecter(obstacle) {
  return (
    character.y < obstacle.y + obstacle.height &&
    character.y + character.height > obstacle.y &&
    character.x < obstacle.x + obstacle.width &&
    character.x + character.width > obstacle.x
  );
}

function gameOver() {
  clearInterval(intervalId);
  context.fillStyle = "Black";
  context.fillRect(0, 100, 350, 200);
  context.fillStyle = "Red";
  context.font = "35px Verdana";
  context.fillText(`Uy perdiste score:${Math.floor(frames / 300)}`, 0, 250);
}

function scoreUpdate() {
  context.font = "20px Verdana";
  context.fillStyle = "White";
  context.fillText(`score : ${Math.floor(frames / 300)}`, 30, 50);
}
