const drawKnight = (knight, ctx) => {
  if (knight.isOutBound) knight.resetPosition();

  ctx.drawImage(knight.sprite.img,
    knight.sprite.srcX(),
    knight.sprite.srcY(),
    knight.sprite.width ,
    knight.sprite.height,
    knight.velocity.x,
    knight.velocity.y,
    knight.sprite.width * 2,
    knight.sprite.height * 2,
  )
  knight.sprite.updateFrame();
  knight.velocity.updatePos();
  knight.velocity.resetOnGround();
}

export default drawKnight;