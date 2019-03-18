const drawTimer = (ctx, now) => {
  ctx.font ="30px Arial"
  ctx.fillStyle = "yellow";
  ctx.textAlign = "center";
  ctx.fillText(60 - parseInt(now / 1000), 640/2, 50)
}

export default drawTimer;