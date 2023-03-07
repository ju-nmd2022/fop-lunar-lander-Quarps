function ufoUpgrade(xMicro, yMicro, sMicro, rotateMicro, thrust) {
  //microwave

  push();
  translate(xMicro + 325, yMicro + 175);
  rotate(rotateMicro);
  scale(sMicro);
  translate(-xMicro - 325, -yMicro - 175);
  //upgrade
  //wings
  beginShape();
  fill(255, 255, 255);
  vertex(xMicro + 100, yMicro + 175);
  vertex(xMicro + 400, yMicro - 35);
  vertex(xMicro + 400, yMicro + 385);
  vertex(xMicro + 100, yMicro + 175);
  endShape();
  //jet engine
  beginShape();
  vertex(xMicro + 575, yMicro + 175);
  vertex(xMicro + 575, yMicro + 175 - 50);
  vertex(xMicro + 600, yMicro + 175 - 30);
  vertex(xMicro + 600, yMicro + 175 + 30);
  vertex(xMicro + 575, yMicro + 175 + 50);
  vertex(xMicro + 575, yMicro + 175);
  endShape();
  //body microwave
  push();
  fill(100, 100, 100);
  rect(xMicro + 75, yMicro + 25, 500, 300, 10);

  //glas on the microwave
  stroke(0, 0, 0);
  fill(50, 50, 50);
  rect(xMicro + 90, yMicro + 40, 350, 270, 10);
  pop();

  //reflection of the glas (main & side)
  //main reflection
  push();
  beginShape();
  stroke(205, 205, 205);
  vertex(xMicro + 310, yMicro + 41);
  vertex(xMicro + 170, yMicro + 309);
  vertex(xMicro + 225, yMicro + 309);
  vertex(xMicro + 360, yMicro + 41);
  endShape();
  //side reflection
  beginShape();
  vertex(xMicro + 389, yMicro + 41);
  vertex(xMicro + 256, yMicro + 309);
  vertex(xMicro + 270, yMicro + 309);
  vertex(xMicro + 400, yMicro + 41);
  endShape();
  pop();

  //divider, line
  beginShape();
  vertex(xMicro + 455, yMicro + 26);
  vertex(xMicro + 455, yMicro + 324);
  endShape();
  fill(0, 0, 0);

  //control panel
  push();
  fill(150, 150, 150);

  //display
  push();
  fill(50, 50, 50);
  rect(xMicro + 470, yMicro + 40, 90, 50, 3);
  //number on the display
  fill(200, 100, 20);
  textSize(22);
  textStyle(BOLD);
  text("13:37", xMicro + 487, yMicro + 73);
  pop();

  //keys
  //upper row
  rect(xMicro + 470, yMicro + 130, 90, 10, 60);
  line(xMicro + 515, yMicro + 130, xMicro + 515, yMicro + 140);
  //lower row
  rect(xMicro + 470, yMicro + 170, 90, 10, 60);
  line(xMicro + 515, yMicro + 170, xMicro + 515, yMicro + 180);

  //wheel
  ellipse(xMicro + 515, yMicro + 230, 50);

  //opener
  rect(xMicro + 470, yMicro + 270, 90, 40, 3);
  pop();
  console.log(xMicro, yMicro);

  if (thrust) {
    // head blowing air
    xThrust = xMicro;
    yThrust = yMicro - 1050;
    translate(0, 175);
    rotate(PI / 2);
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
  pop();
}

ufoUpgrade(200, 200, 0.2, 0, true);
