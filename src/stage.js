// const canvas = document.createElement("canvas");
// const ctx = canvas.getContext("2d");
// canvas.width = 640;
// canvas.height = 480;
// document.body.appendChild(canvas);

// let background = {};

// loadImage("Layer_0010_1");
// loadImage("Layer_0008_3");
// loadImage("Layer_0009_2");
// loadImage("Layer_0007_Lights");
// loadImage("Layer_0005_5");
// loadImage("Layer_0006_4");
// loadImage("Layer_0004_Lights");
// loadImage("Layer_0002_7");
// loadImage("Layer_0003_6");
// loadImage("Layer_0000_9");
// loadImage("Layer_0001_8");

// function loadImage(name) {
//   background[name] = new Image();
//   background[name].onload = function () {
//     resourceLoaded();
//   }
//   background[name].src = `../img/background/${name}.png`;
// }

// const totalResources = 11;
// let numResourcesLoaded = 0;
// let fps = 30;

// function resourceLoaded() {
//   numResourcesLoaded += 1;
//   if (numResourcesLoaded === totalResources) {
//     setInterval(redraw, 1000 / fps);
//   }
// }

// function redraw() {
//   canvas.width = canvas.width
//   ctx.drawImage(background["Layer_0010_1"], 0, -310);
//   ctx.drawImage(background["Layer_0008_3"], 0, -310);
//   ctx.drawImage(background["Layer_0009_2"], 0, -310);
//   ctx.drawImage(background["Layer_0007_Lights"], 0, -310);
//   ctx.drawImage(background["Layer_0005_5"], 0, -310);
//   ctx.drawImage(background["Layer_0006_4"], 0, -310);
//   ctx.drawImage(background["Layer_0004_Lights"], 0, -310);
//   ctx.drawImage(background["Layer_0002_7"], 0, -310);
//   ctx.drawImage(background["Layer_0003_6"], 0, -310);
//   ctx.drawImage(background["Layer_0000_9"], 0, -310);
//   ctx.drawImage(background["Layer_0001_8"], 0, -310);
// }

import Sprite from './sprite'

class Stage {
  constructor(canvas){
    this.canvas = canvas;
    this.ctx = this.canvas.getContext("2d");
    this.canvas.width = 640;
    this.canvas.height = 480;
    document.body.appendChild(this.canvas);
  }

  play() {
    // let knightImage = new Image();
    // knightImage.src = './sprite/knight/knight_idle.png';

    // const knight = new Sprite({
    //   context: this.ctx,
    //   width: 48,
    //   height: 48,
    //   image: knightImage
    // })

    // knight.render();
  }
}

export default Stage;