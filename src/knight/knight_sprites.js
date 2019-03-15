import Sprite from '../sprite';

const knightWalk = new Image();
const knightIdle = new Image();
const knightAttack = new Image();
const knightBlock = new Image();
const knightDeath = new Image();

knightIdle.src = "./sprite/knight/knight_idle.png";
knightWalk.src = "./sprite/knight/knight_walk.png";
knightAttack.src = "./sprite/knight/knight_attack.png";
knightBlock.src = "./sprite/knight/knight_block.png";
knightDeath.src = "./sprite/knight/knight_death.png";

export const knightWalkSprite = new Sprite(knightWalk, 336, 42, 1, 8);
export const knightIdleSprite = new Sprite(knightIdle, 168, 42, 1, 4);
export const knightAttackSprite = new Sprite(knightAttack, 800, 42, 1, 10);
export const knightBlockSprite = new Sprite(knightBlock, 294, 42, 1, 7);
export const knightDeathSprite = new Sprite(knightDeath, 378, 42, 1, 9);