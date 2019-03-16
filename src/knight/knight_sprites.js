import Sprite from '../sprite';

const knightWalk = new Image();
const knightWalkLeft = new Image();
const knightIdle = new Image();
const knightIdleLeft = new Image();
const knightAttack = new Image();
const knightAttackLeft = new Image();
const knightBlock = new Image();
const knightBlockLeft = new Image();
const knightDeath = new Image();

knightIdle.src = "./sprite/knight/knight_idle.png";
knightIdleLeft.src = "./sprite/knight/knight_idle_left.png";
knightWalk.src = "./sprite/knight/knight_walk.png";
knightWalkLeft.src = "./sprite/knight/knight_walk_left.png";
knightAttack.src = "./sprite/knight/knight_attack_1.png";
knightAttackLeft.src = "./sprite/knight/knight_attack_left.png";
knightBlock.src = "./sprite/knight/knight_block.png";
knightBlockLeft.src = "./sprite/knight/knight_block_left.png";
knightDeath.src = "./sprite/knight/knight_death.png";

export const knightWalkSprite = new Sprite(knightWalk, 336, 42, 1, 8);
export const knightWalkLeftSprite = new Sprite(knightWalkLeft, 416, 41, 1, 8);
export const knightIdleSprite = new Sprite(knightIdle, 168, 42, 1, 4);
export const knightIdleLeftSprite = new Sprite(knightIdleLeft, 208, 41, 1, 4);
export const knightAttackSprite = new Sprite(knightAttack, 800, 42, 1, 10);
export const knightAttackLeftSprite = new Sprite(knightAttackLeft, 364, 41, 1, 7);
export const knightBlockSprite = new Sprite(knightBlock, 294, 42, 1, 7);
export const knightBlockLeftSprite = new Sprite(knightBlockLeft, 364, 41, 1, 7);
export const knightDeathSprite = new Sprite(knightDeath, 378, 42, 1, 9);