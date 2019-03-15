import Knight from './knight/knight';
import Enemy from './enemy/enemy';

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

        // extract to drawKnight(ctx) later
        const knight = this.knight;
        if (knight.isOutBound) knight.resetPosition();
        this.ctx.drawImage(knight.sprite.img,
          knight.sprite.srcX(), 
          knight.sprite.srcY(), 
          knight.sprite.width, 
          knight.sprite.height,
          knight.physics.x,
          knight.physics.y,
          knight.sprite.width * 2, 
          knight.sprite.height * 2,
        )
        knight.sprite.updateFrame();
        knight.physics.updatePos();
        // extract to drawKnight(ctx) later

        // extract to drawKnight(ctx) later
        const enemy = this.enemy;
        this.ctx.drawImage(enemy.sprite.img,
          enemy.sprite.srcX(),
          enemy.sprite.srcY(),
          enemy.sprite.width,
          enemy.sprite.height,
          enemy.x,
          enemy.y,
          enemy.sprite.width,
          enemy.sprite.height,
        )
        enemy.sprite.updateFrame();
        // extract to drawKnight(ctx) later

        // handleInput(knight, elapsed);
      }
    };
    animate();
  }
}

export default Game;