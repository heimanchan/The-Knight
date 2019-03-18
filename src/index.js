import Game from './game'
import controlListeners from './controls';

window.addEventListener("DOMContentLoaded", () => {
  const canvas = document.getElementById("game-canvas");
  const ctx = canvas.getContext("2d");
  let game = new Game(canvas, ctx);
  controlListeners(game);
  game.draw(10);
})