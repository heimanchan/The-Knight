import Sprite from '../sprite';

const knightIdle = new Image();
knightIdle.src = "./sprite/knight/knight_idle.png";

export const knightIdleSprite = new Sprite(knightIdle, 168, 42, 1, 4);