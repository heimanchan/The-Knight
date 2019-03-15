import { 
  knightIdleSprite,
  knightWalkSprite,
  knightAttackSprite,
  knightBlockSprite,
  knightDeathSprite
 } from './knight_sprites';
import Physics from '../physics';

class Knight {
  constructor() {
    this.sprite = knightIdleSprite;
    this.x = 150;
    this.y = 340;
    this.physics = new Physics(150, 340);
    this.faceLeft = false;
    this.isMoving = false;
  }

  jump() {
    this.sprite = knightBlockSprite;
    this.sprite.faceLeft = this.faceLeft;
    this.physics.dUp = 80;
  }

  toRight() {
    if (this.moving) return;
    this.isMoving = true;
    this.sprite = knightWalkSprite;
    this.faceLeft = false;
    this.sprite.faceLeft = this.faceLeft;
    this.physics.dLeft = 0;
    this.physics.dRight = 10;
  }

  toLeft() {
    if (this.moving) return;
    this.isMoving = true;
    this.sprite = knightWalkSprite;
    // this.faceLeft = true;
    this.sprite.faceLeft = this.faceLeft;
    this.physics.dRight = 0;
    this.physics.dLeft = 10;
  }

  stop(keyUp) {
    if (keyUp === 'd' || 'RIGHT') {
      this.isMoving = false;
      this.physics.dRight = 0;
    }

    if (keyUp === 'a' || 'LEFT') {
      this.isMoving = false;
      this.physics.dLeft = 0;
    }

    if (this.physics.dX() === 0) {
      this.sprite = knightIdleSprite;
      this.sprite.faceLeft = this.faceLeft;
    }
  }

  attack() {
    this.sprite = knightAttackSprite;
  }

  isOutBound() {
    return (this.physics.x < 0 || this.physics.x + this.sprite.width > 640)
  }

  resetPosition() {
    if (this.physics.x < 0) {
      this.physics.x = 0;
    }

    if (this.physics.x + this.sprite.width > 640) {
      this.physics.x = 640 - this.sprite.width;
    }
  }
}

export default Knight;