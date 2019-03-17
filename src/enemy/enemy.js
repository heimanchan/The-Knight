import { enemytWalkSprite, enemytDeathSprite } from './enemy_sprites';
import Velocity from '../velocity'

class Enemy {
  constructor() {
    this.sprite = enemytWalkSprite;
    this.velocity = new Velocity(400, 340);
    this.velocity.dLeft = 5;  
  }

  // static enemySpawn(now) {
  //   const enemies = [];
  //   for (let i = 0; i < 10; i++) {
  //   // for (let i = 0; i<(now/3000); i++) {
  //     enemies.push(new Enemy);
  //   }

  //   return enemies;
  // }

  enemyDead() {
    // x: -100 dead

  }
}

export default Enemy;

// Math.random() * (3640 - 300) + 30