import { 
  enemytWalkSprite, 
  enemytWalkFromRightSprite, 
  enemytDeathSprite 
} from './enemy_sprites';
import Velocity from '../velocity'

class Enemy {
  constructor(speed, bonus) {
    this.fromLeft = Math.random() < 0.5 ? 0 : true, false
    this.sprite = this.fromLeft ? enemytWalkSprite : enemytWalkFromRightSprite;
    this.velocity = new Velocity(this.fromLeft ? 0 : 620, 340);
    this.velocity.dLeft = this.fromLeft ? 0 : speed || 3;
    this.velocity.dRight = this.fromLeft ? speed || 3 : 0;
    this.bonus = bonus || false;
  }

  isOutScreen() {
    return (this.velocity.x < 0 || this.velocity.x > 620)
  }
}

export default Enemy;

// Math.random() * (3640 - 300) + 30