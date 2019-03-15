import Knight from './knight/knight';

class Game {
  constructor(canvas, ctx){
    this.canvas = canvas;
    this.ctx = ctx;
    this.canvas.width = 640;
    this.canvas.height = 480;
    document.body.appendChild(this.canvas);
    this.knight = new Knight();
  }

  draw(fps) {
    const fpsInterval = 1000 / fps;
    let then = performance.now();

    const animate = () => {
      requestAnimationFrame(animate);

      const now = performance.now();
      const elapsed = now - then;

      if (elapsed > fpsInterval) {
        then = now - (elapsed % fpsInterval);

        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        // extract to drawKnight(ctx) later
        const knight = this.knight;
        this.ctx.drawImage(knight.sprite.img,
          knight.sprite.srcX(), 
          knight.sprite.srcY(), 
          knight.sprite.width, 
          knight.sprite.height,
          knight.x, 
          knight.y, 
          knight.sprite.width * 2, 
          knight.sprite.height * 2,
        )
        knight.sprite.updateFrame();
        // extract to drawKnight(ctx) later
      }
    };
    animate();
  }
}

export default Game;