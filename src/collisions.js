import { 
  knightAttackSprite,
  knightAttackLeftSprite,
  knightDeathSprite
 } from "./knight/knight_sprites";

export const collides = (x, y, r, b, x2, y2, r2, b2) => {
  return !(
    r <= x2 || x > r2 ||
    b <= y2 || y > b2  
  )
}

export const isHit = (knight, enemy) => {
  return (!knight.faceLeft && knight.sprite === knightAttackSprite && collides(
    knight.velocity.x, //x
    knight.velocity.y, //y
    knight.velocity.x + knight.sprite.width, //r
    knight.velocity.y + knight.sprite.height,//b
    enemy.velocity.x,
    enemy.velocity.y,
    enemy.velocity.x + enemy.sprite.width-50,
    enemy.velocity.y + enemy.sprite.height
  )) ||
   (knight.sprite === knightAttackLeftSprite && collides(
    knight.velocity.x, //x
    knight.velocity.y, //y
    knight.velocity.x + knight.sprite.width, //r
    knight.velocity.y + knight.sprite.height,//b
    enemy.velocity.x + 30,
    enemy.velocity.y,
    enemy.velocity.x + enemy.sprite.width - 20,
    enemy.velocity.y + enemy.sprite.height
  ))
}

export const checkCollisions = (knight, enemy) => {
  return (!isHit(knight, enemy) && collides(
      knight.velocity.x, //x
      knight.velocity.y, //y
      knight.velocity.x + knight.sprite.width, //r
      knight.velocity.y + knight.sprite.height,//b
      enemy.velocity.x + 30,
      enemy.velocity.y,
      enemy.velocity.x + enemy.sprite.width - 80,
      enemy.velocity.y + enemy.sprite.height
    )
  )
}