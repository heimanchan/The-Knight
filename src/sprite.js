// function sprite(options) {
//   let that = {},
//   frameIndex = 0,
//   tickCount = 0,
//   ticksPerFrame = options.ticksPerFrame || 0,
//   numberOfFrames = options.numberOfFrames || 1;

//   that.context = options.context;
//   that.width = options.width;
//   that.height = options.height;
//   that.image = options.image;

//   const canvas = document.getElementById("game-canvas");

//   that.loop = options.loop

//   that.update = function () {
//     tickCount += 1;

//     if (tickCount > ticksPerFrame) {
//       tickCount = 0;

//       if (frameIndex < numberOfFrames - 1) {
//         frameIndex += 1;
//       } else if (that.loop) {
//         frameIndex = 0;
//       }
//     }
//   }

//   that.render = function () {
//     that.context.drawImage(
//       that.image,
//       // srcX, srcY
//       // 0, 0, that.width, that.height,
//       frameIndex * that.width / numberOfFrames, 0, that.width / numberOfFrames, that.height,
//       // canvas-destination x & y
//       0, 0, that.width / numberOfFrames, that.height
//     )
//   }

//   return that;
// }

// let knightImage = new Image();
// knightImage.src = './sprite/knight/knight_idle.png';

// const knight = sprite({
//   context: canvas.getContext("2d"),
//   width: 48,
//   height: 48,
//   image: knightImage
// })

// knight.render();

// export default sprite;

class Sprite {
  constructor(){
    this.canWidth = 650;
    this.canHeight = 300;

    this.x = 0;
    this.y = 0;

    this.srcX;
    this.srcY;

    this.sheetWidth = 168;
    this.sheetHeight = 42;
  }
}

export default Sprite;