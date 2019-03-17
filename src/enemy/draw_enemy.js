import {checkCollisions} from '../collisions'

const drawEnemy = (knight, enemy, ctx) => {
  ctx.save();
  ctx.drawImage(enemy.sprite.img,
    enemy.sprite.srcX(),
    enemy.sprite.srcY(),
    enemy.sprite.width,
    enemy.sprite.height,
    enemy.velocity.x,
    enemy.velocity.y,
    enemy.sprite.width,
    enemy.sprite.height,
  )
  ctx.restore();

  checkCollisions(knight, enemy);
  enemy.velocity.updatePos();
  enemy.sprite.updateFrame();
}

const drawEnemies = (knight, enemies, ctx) => {
  for (let i = 0; i < enemies.length; i++) {
    drawEnemy(knight, enemies[i], ctx)
  }
}
export default drawEnemies;
