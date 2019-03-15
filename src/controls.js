import {
  knightIdleSprite,
  knightWalkSprite,
  knightAttackSprite,
  knightBlockSprite,
  knightDeathSprite
} from './knight/knight_sprites';

const controlListeners = game => {
  const knight = game.knight;

  window.addEventListener('keydown', ({key, repeat}) => {
    if (repeat) return;

    switch(key) {
      case ('w' || "UP"):
        console.log("jump");
        knight.sprite = knightBlockSprite;
        break;
      case('a' || "LEFT"):
        console.log("left");
        knight.toLeft();
        break;
      case('d' || "RIGHT"):
        console.log(knight.physics.dRight);
        knight.toRight();
        break;
      case ('j'):
        console.log("attack");
        knight.sprite = knightAttackSprite;
        break;
      default:
        console.log("idle");
        knight.sprite = knightIdleSprite;
        return;
    }
  })

  window.addEventListener('keyup', ({key}) => {
    knight.stop(key);
  })
}

export default controlListeners;