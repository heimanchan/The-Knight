import Knight from './knight/knight';
import drawKnight from './knight/drawKnight';
import Enemy from './enemy/enemy';
import drawEnemies from './enemy/draw_enemy';
import initialEntities from './entities';
import {checkAttack} from './collisions'

class Game {
  constructor(canvas, ctx){
    this.canvas = canvas;
    this.ctx = ctx;
    this.canvas.width = 640;
    this.canvas.height = 480;
    document.body.appendChild(this.canvas);
    this.enemies = [];
    this.entities = initialEntities();
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

        const entities = Object.values(this.entities)
        const [knight, enemies] = entities;

        drawKnight(knight, this.ctx);
        if (parseInt(now/1000)%3 === 0) {
          this.enemies.push(new Enemy);
        }
        drawEnemies(knight, this.enemies, this.ctx)
        
        for (let i = 0; i < this.enemies.length; i++) {
          if (checkAttack(knight, this.enemies[i])) {
            this.enemies.splice(i, 1);
            console.log(this.enemies)

          }
        }
        // console.log(`Enemy x: ${enemy.velocity.x} dLeft: ${enemy.velocity.dLeft}`)
        // console.log(`x: ${knight.velocity.x} srcX: ${knight.sprite.width}`)
        // console.log(`sec: ${parseInt(now/1000)} now: ${now}, then: ${then}`)
      }
      
    };
    animate();
  }
}

export default Game;