import { 
  knightAttackSprite,
  knightAttackLeftSprite,
  knightDeathSprite
 } from "./knight/knight_sprites";
import Game from './game';

const collides = (x, y, r, b, x2, y2, r2, b2) => {
  return !(
    r <= x2 || x > r2 ||
    b <= y2 || y > b2  
  )
}

export const checkAttack = (knight, enemy) => {
  return (!knight.faceLeft && knight.sprite === knightAttackSprite && collides(
    knight.velocity.x, //x
    knight.velocity.y, //y
    knight.velocity.x + knight.sprite.width, //r
    knight.velocity.y + knight.sprite.height,//b
    enemy.velocity.x - 30,
    enemy.velocity.y,
    enemy.velocity.x + enemy.sprite.width - 50,
    enemy.velocity.y + enemy.sprite.height
  )) ||
   (knight.sprite === knightAttackLeftSprite && collides(
    knight.velocity.x, //x
    knight.velocity.y, //y
    knight.velocity.x + knight.sprite.width, //r
    knight.velocity.y + knight.sprite.height,//b
    enemy.velocity.x - 10,
    enemy.velocity.y,
    enemy.velocity.x + enemy.sprite.width - 20,
    enemy.velocity.y + enemy.sprite.height
  ))
}

export const checkCollisions = (knight, enemy) => {
  if (!knight.faceLeft && knight.sprite === knightAttackSprite && collides(
    knight.velocity.x, //x
    knight.velocity.y, //y
    knight.velocity.x + knight.sprite.width, //r
    knight.velocity.y + knight.sprite.height,//b
    enemy.velocity.x - 30,
    enemy.velocity.y,
    enemy.velocity.x + enemy.sprite.width - 50,
    enemy.velocity.y + enemy.sprite.height
  )) {
    console.log("RIGHT ATTACK: HIIIIITTT!")
  }
  else if (knight.sprite === knightAttackLeftSprite && collides(
      knight.velocity.x, //x
      knight.velocity.y, //y
      knight.velocity.x + knight.sprite.width, //r
      knight.velocity.y + knight.sprite.height,//b
      enemy.velocity.x - 10,
      enemy.velocity.y,
      enemy.velocity.x + enemy.sprite.width - 20,
      enemy.velocity.y + enemy.sprite.height
  )) {
    console.log("LEFT ATTACK: HIIIIITTT!")
  } else if (!knight.faceLeft && collides(
    knight.velocity.x, //x
    knight.velocity.y, //y
    knight.velocity.x + knight.sprite.width, //r
    knight.velocity.y + knight.sprite.height,//b
    enemy.velocity.x - 10,
    enemy.velocity.y,
    enemy.velocity.x + enemy.sprite.width - 45,
    enemy.velocity.y + enemy.sprite.height
  )) {
    console.log("RIGHT: HIIIIITTT!")    
    knight.sprite = knightDeathSprite;
  } else if (collides(
    knight.velocity.x, //x
    knight.velocity.y, //y
    knight.velocity.x + knight.sprite.width, //r
    knight.velocity.y + knight.sprite.height,//b
    enemy.velocity.x - 10,
    enemy.velocity.y,
    enemy.velocity.x + enemy.sprite.width - 50,
    enemy.velocity.y + enemy.sprite.height
  )) {
    console.log("LEFT: HIIIIITTT!")
    knight.sprite = knightDeathSprite;
  }
}