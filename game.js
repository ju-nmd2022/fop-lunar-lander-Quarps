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
  line(xMicro + 515, yMicro + 170, xMicro + 515, yMicro + 180);

  //wheel
  ellipse(xMicro + 515, yMicro + 230, 50);

  //opener
  rect(xMicro + 470, yMicro + 270, 90, 40, 3);
  pop();

  pop();
}

ufo(200, 200, 1, 0);

function ufoUpgrade(xMicro, yMicro, sMicro, rotateMicro) {
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

  pop();
}

function kitchen(y) {
  background(246, 232, 231);
  strokeWeight(2);

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
  kitchen(350);
  ufo(20, 430, 1, 0);
  background(50, 50, 50, 100);
  fill(0, 0, 0);
  textSize(50);
  text("Welcome to the EPIC Game", width / 2 - 565, 60, 400);
  textSize(30);
  text("Click space to start!!", width / 2 - 565, 200, 400);
}

let ufoY = 0;
let kitchenY = 350;
let accleration = 0.5;
let speed = 5;
let speedAcceleration = speed + accleration;

//gameScreen
function gameScreen() {
  kitchen(kitchenY);
  ufoUpgrade(700, ufoY, 0.9, PI / 2);
  //while (ufoY < 100) {
  //  kitchenY -= speed;
  //  ufoY += speed;
  //}
  ufoY = ufoY + speedAcceleration;

  if (keyIsDown(32)) {
    ufoY -= speed + 5;
  }
  console.log(speedAcceleration);
}

//endScreen
function endScreenWin() {
  kitchen(350);
  ufo(410, 320, 3, 0.2);
  background(50, 50, 50, 100);
  fill(0, 0, 0);
  textSize(50);
  fill(0, 200, 50);
  text("EPIC Game Big W", width / 2 - 600, 60, 300);
  textSize(30);
  text("Click space to start!!", width / 2 - 600, 200, 400);
}
function endScreenLose() {
  kitchen(350);
  ufo(410, 320, 3, 3.2);
  background(100, 50, 50, 100);
  fill(0, 0, 0);
  textSize(90);
  fill(200, 0, 0);
  text("Noob... BIG L ", width / 2 - 340, 80, 380);
  textSize(30);
  text("Click space to start!!", width / 2 - 340, 300, 400);
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
    endScreenWin();
  }
  endScreenWin();
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
