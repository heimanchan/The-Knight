import Sprite from '../sprite';

const enemytWalk = new Image();
const enemytWalkFromRight = new Image();
const enemytDeath = new Image();

enemytWalk.src = "./sprite/enemy.png";
enemytWalkFromRight.src = "./sprite/enemy_a.png";
enemytDeath.src = "./sprite/enemy_death.png";

export const enemytWalkSprite = new Sprite(enemytWalk, 960, 80, 1, 12);
export const enemytWalkFromRightSprite = new Sprite(enemytWalkFromRight, 960, 80, 1, 12);
export const enemytDeathSprite = new Sprite(enemytDeath, 960, 80, 1, 12);