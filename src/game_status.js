export const drawGameOver = (ctx, score, now) => {
  // ctx.fillStyle = 'rgb(0, 0, 0)';
  ctx.fillStyle = 'rgba(0, 0, 0, 0.5)';
  ctx.fillRect(0, 0, 640, 480);

  ctx.font = '40px Arial';
  ctx.fillStyle = 'white';
  ctx.textAlign = 'center';
  ctx.fillText(
    'GAME OVER',
    640 / 2,
    480 / 2 ,
  );

  ctx.font = '20px Arial';
  ctx.fillText(
    `SCORE: ${score}`,
    640 / 2,
    480 / 2 + 30,
  );

  ctx.fillText(
    `YOU SURVIVED: ${(parseInt(now / 1000))} seconds`,
    640 / 2,
    480 / 2 + 55,
  );
};
