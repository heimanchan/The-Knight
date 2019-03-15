// const canWidth = 300;
// const canHeight = 300;

// let x = 100;
// let y = 335;

// let srcX;
// let srcY;

// const sheetWidth = 168;
// const sheetHeight = 42;

// const cols = 4;
// const rows = 1

// let width = sheetWidth / cols; 
// let height = sheetHeight / rows; 

// let currentFrame = 0;

// const character = new Image();
// character.src = "./sprite/knight/knight_idle.png";

// const canvas = document.getElementById("game-canvas");
// canvas.width = canWidth;
// canvas.height = canHeight;
// const ctx = canvas.getContext("2d");

// function updateFrame() {
//   currentFrame = ++ currentFrame % cols;
//   srcX = currentFrame * width;
//   srcY = 0;

//   ctx.clearRect(x, y, width, height)
// }

// // game class
// function drawImage() {
//   updateFrame();

  // ctx.drawImage(character, 
  //   srcX, srcY, width, height,
  //   x, y, width * 2, height * 2,
  // )
// }

// setInterval(function() {
//   drawImage();
// }, 300)


class Sprite {
  constructor(img, sheetWidth, sheetHeight, rows, frameCount) {
    this.img = img,
    this.width = sheetWidth / frameCount;
    this.height = sheetHeight / rows;
    this.frameCount = frameCount;
    this.currentFrame = 0;
  }

  srcX() {
    return this.currentFrame * this.width;
  }

  srcY() {
    return 0;
  }

  updateFrame() {
    this.currentFrame = ++this.currentFrame % this.frameCount;
  }
}

export default Sprite;