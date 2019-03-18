const drawScore = (ctx, score) => {
  ctx.font = "16px Arial"
  ctx.fillStyle = "yellow";
  ctx.textAlign = "center";
  ctx.fillText(`Score ${score}`, 100, 460)
}

export default drawScore;