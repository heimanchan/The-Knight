import Knight from './knight/knight';
import drawKnight from './knight/drawKnight';
import Enemy from './enemy/enemy';
import drawEnemies from './enemy/draw_enemy';
import {isHit} from './collisions'
import { checkCollisions } from './collisions'
import { knightDeathSprite } from './knight/knight_sprites';
import drawTimer from './timer';
import { drawGameOver } from './game_status';
import drawScore from './score';

class Game {
  constructor(canvas, ctx){
    this.canvas = canvas;
    this.ctx = ctx;
    this.canvas.width = 640;
    this.canvas.height = 480;
    document.body.appendChild(this.canvas);
    this.knight = new Knight;
    this.enemies = [];
    this.score = 0;
    this.isGameOver = false;
    this.gameState = "play";
    this.keysDown = {};
  }

  draw(fps) {
    const fpsInterval = 1000 / fps;
    let then = performance.now();

    //update loop
    const animate = () => {
      if (this.gameState === 'game over') {
        drawGameOver(this.ctx, this.score, then)
        this.ctx = null;
        this.enemies = [];
        return;
      }

      requestAnimationFrame(animate);
      const now = performance.now();
      const elapsed = now - then;
      const knight = this.knight;
      const enemies = this.enemies;

      drawTimer(this.ctx, now)
      drawScore(this.ctx, this.score)

      if (elapsed > fpsInterval) {
        then = now - (elapsed % fpsInterval);
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        drawKnight(knight, this.ctx);
        if (parseInt((now / 1000) + 20) % 7 === 0) {
          //                                               max - min + 1 + min
          enemies.push(new Enemy(Math.floor((Math.random() * 7 - 2 + 1) + 3)));
        }
        
        if (parseInt((now / 1000) + 1000) % 30 === 0) {
          enemies.push(new Enemy(15, true));
          console.log("BOOOOOONNNUUS")
        }
        
        drawEnemies(knight, enemies, this.ctx)
        for (let i = 0; i < enemies.length; i++) {
          if (isHit(knight, enemies[i])) {
            enemies.splice(i, 1);
            if (knight.faceLeft) {
              if (enemies[i].bonus) {
                this.score += 1000;
              } else this.score += 100;
              console.log("LEFT ATTAAAAAAAACK")
            } else {
                if (enemies[i].bonus) {
                  this.score += 1000;
                } else this.score += 100;
              console.log("RIGHT ATTAAAAAAAACK")
            }
          }
          
          if (checkCollisions(knight, enemies[i])) {
            this.gameState = 'game over';
            knight.sprite = knightDeathSprite
          }

          if (enemies[i].isOutScreen()) {
            enemies.splice(i, 1);
          }
        }

        if (60 - parseInt(now / 1000) === 0) {
          this.gameState = 'game over';
        }
      }
    }
    animate();  
  }
}

export default Game;