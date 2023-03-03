function ufo(xMicro, yMicro, sMicro, rotateMicro) {
  //microwave
  push();
  translate(xMicro + 325, yMicro + 175);
  scale(sMicro);
  rotate(rotateMicro);
  translate(-xMicro - 325, -yMicro - 175);
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
  line(xMicro + 515, yMicro + 170, xMicro + 515, 280);

  //wheel
  ellipse(xMicro + 515, yMicro + 230, 50);

  //opener
  rect(xMicro + 470, yMicro + 270, 90, 40, 3);
  pop();

  pop();
}

ufo(200, 200, 1, 0);
