const controlListeners = game => {
  window.addEventListener('keydown', keysPressed, false)
  window.addEventListener('keyup', keysReleased, false)

  const knight = game.knight;
  const keysDown = game.keysDown;

  function keysPressed({key}) {
    keysDown[key] = true;

    if ('a' in keysDown) {
      knight.toLeft();
    }

    if ('d' in keysDown) {
      knight.toRight();
    }

    if ('w' in keysDown) {
      knight.jump();
    }

    if ('j' in keysDown) {
      knight.attack();
    }
  }

  function keysReleased({key}) {
    delete keysDown[key];
    knight.stop(key);
  }
}
export default controlListeners;