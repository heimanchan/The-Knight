import { 
  knightIdleSprite,
  knightWalkSprite,
  knightAttackSprite,
  knightBlockSprite,
  knightDeathSprite
 } from './knight_sprites';

class Knight {
  constructor() {
    this.sprite = knightAttackSprite;

    this.x = 150;
    this.y = 335;
  }

  
}

export default Knight;