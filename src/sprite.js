class Sprite {
  constructor(img, sheetWidth, sheetHeight, rows, frameCount) {
    this.img = img,
    this.width = sheetWidth / frameCount;
    this.height = sheetHeight / rows;
    this.frameCount = frameCount;
    this.currentFrame = 0;
    this.faceLeft = false;
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