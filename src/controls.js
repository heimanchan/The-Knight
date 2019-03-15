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
        knight.jump();
        break;
      case('a' || "LEFT"):
        console.log("left");
        console.log(knight.faceLeft)
        knight.toLeft();
        break;
      case('d' || "RIGHT"):
        console.log("right")
        console.log(knight.faceLeft)
        knight.toRight();
        break;
      case ('j'):
        console.log("attack");
        knight.attack();
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