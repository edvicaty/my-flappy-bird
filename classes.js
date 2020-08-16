//canvas && context
const $canvas = document.querySelector("canvas");
const context = $canvas.getContext("2d");
// board class
class Board {
  constructor() {
    this.x = 0;
    this.y = 0;
    this.width = $canvas.width;
    this.heigth = $canvas.height;
    this.image = new Image();
    this.image.src = "./images/bg.png";
    this.image.onload = this.draw();
  }
  draw() {
    this.x--;
    if (this.x < -this.width) {
      this.x = 0;
    }
    context.drawImage(this.image, this.x, this.y, this.width, this.heigth);
    context.drawImage(
      this.image,
      this.x + this.width,
      this.y,
      this.width,
      this.heigth
    );
  }
}
//board object
const board = new Board();

//Flappy class
class Character {
  constructor() {
    this.width = 45;
    this.height = 50;
    this.x = 200;
    this.y = 30;
    this.velY = 0;
    this.gravity = 0.98;
    this.jumpHeight = 7;
    this.image = new Image();
    this.image.src = "./images/paps.png";
    this.image.onload = this.draw();
  }
  draw() {
    context.drawImage(this.image, this.x, this.y, this.width, this.height);
    if (this.y < 0) {
      this.y = 0;
    }
  }
  fall() {
    this.velY += this.gravity;
    this.y += this.velY;
    if (this.y > $canvas.height) {
      this.y = $canvas.height - this.height;
    }
  }
  jump() {
    this.velY -= this.velY + this.jumpHeight;
  }
}
//flappy object
const character = new Character();

//Object class
class Obstacle {
  constructor(y) {
    this.x = $canvas.width;
    this.y = y;
    this.width = 138 / 3;
    this.height = 500;
    this.imageBottom = new Image();
    this.imageBottom.src = "./images/obstacle_bottom.png";
    this.imageTop = new Image();
    this.imageTop.src = "./images/obstacle_top.png";
  }
  draw() {
    this.x--;
    if (this.y < 0) {
      context.drawImage(this.imageTop, this.x, this.y, this.width, this.height);
    }
    if (this.y > 0) {
      context.drawImage(
        this.imageBottom,
        this.x,
        this.y,
        this.width,
        this.height
      );
    }
  }
}
