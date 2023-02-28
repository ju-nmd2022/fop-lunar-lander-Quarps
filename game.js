function ufo(xMicro, yMicro, sMicro, rotateMicro) {
  //microwave
  push();
  translate(xMicro, yMicro);
  translate(xMicro + 425, yMicro + 275);
  rotate(rotateMicro);
  scale(sMicro);
  translate(xMicro - 425, yMicro - 275);
  //upgrade
  //wings
  beginShape();
  fill(255, 255, 255);
  vertex(200, 275);
  vertex(500, 65);
  vertex(500, 485);
  vertex(200, 275);
  endShape();
  //jet engine
  beginShape();
  vertex(675, 275);
  vertex(675, 275 - 50);
  vertex(700, 275 - 30);
  vertex(700, 275 + 30);
  vertex(675, 275 + 50);
  vertex(675, 275);
  endShape();
  //body microwave
  push();
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
  fill(205, 205, 205);
  noStroke();
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

function kitchen() {
  background(246, 232, 231);
  strokeWeight(2);
  let y = 350;

  //background
  fill(234, 216, 216);

  //window
  fill(240, 240, 240);
  rect(630 + 50, y - 720, 640, 790);
  fill(223, 239, 243);
  rect(650 + 50, y - 700, 600, 750);

  //countertop
  fill(191, 134, 115);
  rect(0, y + 300, width, 150);
  rect(0, y + 450, width, 25);

  //cabinets
  fill(240, 240, 240);
  //cabinet rightside
  rect(-1, y + 475, width / 2, 1000);
  rect(100, y + 560, width / 2 - 200, 1000 - 100, 5);
  //cabinet leftside
  rect(width / 2 - 1, y + 475, width / 2, 1000);
  rect(width / 2 + 100, y + 560, width / 2 - 200, 1000 - 100, 5);

  //shadow
  push();
  noStroke();
  fill(100, 100, 100, 100);
  rect(0, y + 476, width, 10);
  pop();

  //handles
  fill(113, 121, 126);

  //leftside handle
  rect(width / 2 - 50, y + 500, 15, 100);
  //rightside handle
  rect(width / 2 + 35, y + 500, 15, 100);
}

//states
function startScreen() {
  kitchen();
  ufo(-20, 100, 1, 0);
  background(50, 50, 50, 100);
  fill(0, 0, 0);
  textSize(50);
  text("Welcome to the EPIC Game", width / 2 - 565, 60, 400);
  textSize(30);
  text("Click space to start!!", width / 2 - 565, 200, 400);
}

function gameScreen() {
  kitchen();
}

function endScreen() {
  background(0, 255, 0);
  text("End", width / 2 - 25, height / 2);
}

//variable for the current state
let state = "start";

//draws the current state
function draw() {
  if (state === "start") {
    startScreen();
  } else if (state === "game") {
    gameScreen();
  } else {
    endScreen();
  }
}

//controls the switch between states
function keyPressed() {
  if (state === "start" && keyCode === 32) {
    state = "game";
  } else if (state === "end") {
    state = "game";
  } else if (keyCode === 27) {
    state = "start";
  }
}
