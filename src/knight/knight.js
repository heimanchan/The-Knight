import { 
  knightIdleSprite,
  knightIdleLeftSprite,
  knightWalkSprite,
  knightWalkLeftSprite,
  knightAttackSprite,
  knightAttackLeftSprite,
  knightBlockSprite,
  knightBlockLeftSprite,
  knightDeathSprite
 } from './knight_sprites';
import Velocity from '../velocity';

class Knight {
  constructor() {
    this.sprite = knightIdleSprite;
    this.velocity = new Velocity(150, 340);
    this.faceLeft = false;
    this.isMoving = false;
    this.isJumping = this.velocity.isInTheAir();
  }

  jump() {
    if (this.faceLeft === true) {
      this.sprite = knightBlockLeftSprite;
      this.velocity.dLeft = 18;
    } else {
      this.sprite = knightBlockSprite;
      this.velocity.dRight = 18;
    }
    this.sprite.faceLeft = this.faceLeft;
    this.velocity.dUp = 50;
  }

  toRight() {
    this.faceLeft = false;
    if (this.moving) return;
    this.isMoving = true;
    this.sprite = knightWalkSprite;
    this.sprite.faceLeft = this.faceLeft;
    this.velocity.dLeft = 0;
    this.velocity.dRight = 12;
  }

  toLeft() {
    this.faceLeft = true;
    if (this.moving) return;
    this.isMoving = true;
    this.sprite = knightWalkLeftSprite;
    this.sprite.faceLeft = this.faceLeft;
    this.velocity.dRight = 0;
    this.velocity.dLeft = 12;
  }

  stop(keyUp) {
    if (keyUp === 'd' || 'RIGHT') {
      this.isMoving = false;
      this.velocity.dRight = 0;
    }

    if (keyUp === 'a' || 'LEFT') {
      this.isMoving = false;
      this.velocity.dLeft = 0;
    }

    // if (keyUp === 'w' || 'UP') {
    //   this.isJumping = false;
    // }

    if (this.velocity.dX() === 0) {
      this.sprite.faceLeft = this.faceLeft;
      if (this.faceLeft === true) {
        this.sprite = knightIdleLeftSprite
      } else this.sprite = knightIdleSprite;
    }
  }

  attack() {
    if (this.faceLeft === true) {
      this.sprite = knightAttackLeftSprite
    } else this.sprite = knightAttackSprite;
  }

  isOutBound() {
    return (this.velocity.x < 0 || this.velocity.x + this.sprite.width > 640)
  }

  resetPosition() {
    if (this.velocity.x < 0) {
      this.velocity.x = 0;
    }

    if (this.velocity.x + this.sprite.width > 640) {
      this.velocity.x = 640 - this.sprite.width;
    }
  }
}

export default Knight;