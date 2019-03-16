import Game from './game'
import controlListeners from './controls';

function component() {
  let element = document.createElement('div');
  const canvas = document.getElementById("game-canvas");
  const ctx = canvas.getContext("2d");
  let game = new Game(canvas, ctx);
  controlListeners(game);
  game.draw(10);
  return element;
}

document.body.appendChild(component());
