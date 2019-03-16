import {
  enemytWalkSprite,
  enemytDeathSprite
} from './enemy_sprites';
import Velocity from '../velocity'

class Enemy {
  constructor() {
    this.sprite = enemytDeathSprite;
    this.velocity = new Velocity(355, 340);

  }


}

export default Enemy;