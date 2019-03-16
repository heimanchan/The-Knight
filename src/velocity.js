class Velocity {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.dLeft = 0;
    this.dRight = 0;
    this.dUp = 0;
    this.dDown = 0;
  }

  dX() {
    return -this.dLeft + this.dRight;
  }

  dY() {
    return -this.dUp + this.dDown;
  }

  updatePos() {
    if (this.y < 335) {
      this.dUp *= 0.9;
      this.dDown += 10;
    }

    this.x += this.dX();
    this.y += this.dY();
  }

  isInTheAir() {
    return this.y < 340
  }

  resetOnGround() {
    // below the ground
    if (this.y + this.dY() + 10 > 340) {
      this.y = 340;
      this.dDown = 0;
      this.dUp = 0;
    }
  }
}

export default Velocity;