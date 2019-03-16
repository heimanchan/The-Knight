import Knight from './knight/knight';
import drawKnight from './knight/drawKnight';
import Enemy from './enemy/enemy';
import { checkCollisions } from './collisions'

class Game {
  constructor(canvas, ctx){
    this.canvas = canvas;
    this.ctx = ctx;
    this.canvas.width = 640;
    this.canvas.height = 480;
    document.body.appendChild(this.canvas);
    this.knight = new Knight();
    this.enemy = new Enemy();
  }

  draw(fps) {
    const fpsInterval = 1000 / fps;
    let then = performance.now();

    //update loop
    const animate = () => {
      requestAnimationFrame(animate);

      const now = performance.now();
      const elapsed = now - then;

      if (elapsed > fpsInterval) {
        then = now - (elapsed % fpsInterval);

        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        drawKnight(this.knight, this.ctx);

        // extract to drawKnight(ctx) later
        const enemy = this.enemy;
        this.ctx.drawImage(enemy.sprite.img,
          enemy.sprite.srcX(),
          enemy.sprite.srcY(),
          enemy.sprite.width,
          enemy.sprite.height,
          enemy.velocity.x,
          enemy.velocity.y,
          enemy.sprite.width,
          enemy.sprite.height,
        )
        enemy.sprite.updateFrame();
        console.log(`Enemy x: ${enemy.velocity.x} srcX: ${enemy.sprite.width}`)

        // extract to drawKnight(ctx) later

        checkCollisions(this.knight, enemy)
      }
    };
    animate();
  }
}

export default Game;