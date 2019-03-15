import Sprite from './sprite';
import Game from './game'

function component() {
  let element = document.createElement('div');
  const canvas = document.getElementById("game-canvas");
  const ctx = canvas.getContext("2d");
  let game = new Game(canvas, ctx);
  game.draw(10);
  return element;
}

document.body.appendChild(component());
