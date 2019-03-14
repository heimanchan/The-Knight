import Stage from './stage';
import Sprite from './sprite';
import Game from './game'

function component() {
  let element = document.createElement('div');
  // element.appendChild(Stage)
  const canvas = document.getElementById("game-canvas");
  let stage = new Stage(canvas)
  stage.play();
  return element;
}

document.body.appendChild(component());
