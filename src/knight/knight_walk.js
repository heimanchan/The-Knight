import Sprite from '../sprite';

const knightWalk = new Image();
knightWalk.src = "./sprite/knight/knight_walk.png";

export const knightWalkSprite = new Sprite(knightWalk, 336, 42, 1, 8);