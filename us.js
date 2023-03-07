function thrust(xThrust, yThrust) {
  translate(0, 175);
  rotate(PI);
  translate(0, -175);
  fill(255, 255, 255);
  ellipse(xThrust, yThrust + 175, 50, 50);
  push();
  fill(0, 0, 0);
  noStroke();
  ellipse(xThrust - 13, yThrust - 10 + 175, 8);
  ellipse(xThrust + 3, yThrust - 15 + 175, 20);
  pop();

  push();
  strokeWeight(1);
  stroke(255, 255, 255);
  line(xThrust - 5, yThrust - 30 + 175, xThrust - 10, yThrust - 50 + 175);
  line(xThrust, yThrust - 31 + 175, xThrust - 3, yThrust - 50 + 175);
  line(xThrust + 4, yThrust - 31 + 175, xThrust + 6, yThrust - 50 + 175);
  line(xThrust + 9, yThrust - 30 + 175, xThrust + 13, yThrust - 50 + 175);
  pop();
}
thrust(0, 0);
