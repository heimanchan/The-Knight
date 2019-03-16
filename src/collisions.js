import { knightAttackLeftSprite } from "./knight/knight_sprites";

const collides = (x, y, r, b, x2, y2, r2, b2) => {
  return !(
    r <= x2 || x > r2 ||
    b <= y2 || y > b2  
  )
}

export const checkCollisions = (knight, enemy) => {
  if (!knight.faceLeft) {
    if (collides(
      knight.velocity.x, //x
      knight.velocity.y, //y
      knight.velocity.x + knight.sprite.width, //r
      knight.velocity.y + knight.sprite.height,//b
      enemy.velocity.x - 10,
      enemy.velocity.y,
      enemy.velocity.x + enemy.sprite.width - 50,
      enemy.velocity.y + enemy.sprite.height
    )) {
      console.log("RIGHT: HIIIIITTT!")
    }
  } else {
      if (knight.sprite === knightAttackLeftSprite) {
        if (collides(
          knight.velocity.x, //x
          knight.velocity.y, //y
          knight.velocity.x + knight.sprite.width, //r
          knight.velocity.y + knight.sprite.height,//b
          enemy.velocity.x - 10,
          enemy.velocity.y,
          enemy.velocity.x + enemy.sprite.width - 20,
          enemy.velocity.y + enemy.sprite.height
        )) {
          console.log("RIGHT: HIIIIITTT!")
        }
      }
  }
  
}