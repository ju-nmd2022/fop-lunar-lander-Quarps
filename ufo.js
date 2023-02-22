function ufo(xMicro, yMicro, sMicro, rotateMicro) {
  //microwave
  push();
  translate(xMicro, yMicro);
  translate(xMicro + 425, yMicro + 275);
  rotate(rotateMicro);
  scale(sMicro);
  translate(xMicro - 425, yMicro - 275);
  //body microwave
  push();
  background(255, 255, 255);
  noStroke();
  translate(350, 250);
  fill(100, 100, 100);
  rect(-175, -125, 500, 300, 10);

  //glas on the microwave
  stroke(0, 0, 0);
  fill(50, 50, 50);
  rect(-160, -110, 350, 270, 10);
  translate(0, 0);
  pop();

  //reflection of the glas (main & side)
  //main reflection
  push();
  beginShape();
  stroke(205, 205, 205);
  vertex(410, 141);
  vertex(270, 409);
  vertex(325, 409);
  vertex(460, 141);
  endShape();
  //side reflection
  beginShape();
  vertex(489, 141);
  vertex(356, 409);
  vertex(370, 409);
  vertex(500, 141);
  endShape();
  pop();

  //divider, line
  beginShape();
  vertex(555, 126);
  vertex(555, 424);
  endShape();
  fill(0, 0, 0);

  //control panel
  push();
  fill(150, 150, 150);

  //display
  push();
  fill(50, 50, 50);
  rect(570, 140, 90, 50, 3);

  fill(200, 100, 20);
  textSize(22);
  textStyle(BOLD);
  text("13:37", 587, 173);
  pop();

  //keys
  //upper row
  rect(570, 230, 90, 10, 60);
  line(615, 230, 615, 240);
  //lower row
  rect(570, 270, 90, 10, 60);
  line(615, 270, 615, 280);

  //wheel
  ellipse(615, 330, 50);

  //opener
  rect(570, 370, 90, 40, 3);
  pop();

  pop();
}

ufo(0, 0, 0.4, PI / 2);
