const controlListeners = game => {
  // const knight = game.knight;
  const knight = game.knight;
  
  window.addEventListener('keydown', ({key, repeat}) => {
    if (repeat) return;

    switch(key) {
      case ('w' || "UP"):
        console.log("jump");
        knight.jump();
        break;
      case('a' || "LEFT"):
        console.log("left");
        knight.toLeft();
        break;
      case('d' || "RIGHT"):
        console.log("right")
        knight.toRight();
        break;
      case ('j'):
        console.log("attack");
        knight.attack();
        break;
      default:
        return;
    }
  })

  window.addEventListener('keyup', ({key}) => {
    knight.stop(key);
  })
}
// const controlListeners = game => {
//   let keysDown = {};

//   window.addEventListener('keydown', keysPressed, false)
//   window.addEventListener('keyup', keysReleased, false)

//   const knight = game.knight;

//   function keysPressed({key}) {
//     keysDown[key] = true;

//     if ('a' in keysDown) {
//       console.log("left");
//       knight.toLeft();
//     }

//     if ('d' in keysDown) {
//       console.log("Right");
//       knight.toRight();
//     }

//     if ('w' in keysDown) {
//       console.log("Jump");
//       knight.jump();
//     }

//     if ('j' in keysDown) {
//       console.log("attack");
//       knight.attack();
//     }
//     console.log(keysDown)
//     // key.preventDefault();
//   }

//   function keysReleased({key}) {
//     delete keysDown[key];
//     knight.stop(key);
//   }
// }
export default controlListeners;