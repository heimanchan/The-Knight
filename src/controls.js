const controlListeners = game => {
  window.addEventListener('keydown', keysPressed, false)
  window.addEventListener('keyup', keysReleased, false)

  const knight = game.knight;
  const keysDown = game.keysDown;

  function keysPressed({key}) {
    keysDown[key] = true;

    if ('a' in keysDown) {
      console.log("left");
      knight.toLeft();
    }

    if ('d' in keysDown) {
      console.log("Right");
      knight.toRight();
    }

    if ('w' in keysDown) {
      console.log("Jump");
      knight.jump();
    }

    if ('j' in keysDown) {
      console.log("attack");
      knight.attack();
    }
    console.log(keysDown)
    // key.preventDefault();
  }

  function keysReleased({key}) {
    delete keysDown[key];
    knight.stop(key);
  }
}
export default controlListeners;