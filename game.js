function setup() {
  createCanvas(1200, 850);
  frameRate(30);
  rotation = PI / 2;
}
//UFO (the microwave) visual drawing
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

//upgraded version of UFO(the microwave) visual drawing
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

  pop();
}
//kitchen visual drawing
function kitchen(y) {
  background(246, 232, 231);
  strokeWeight(2);
  scale(0.9);

  //background
  fill(234, 216, 216);

  //window
  fill(240, 240, 240);
  rect(width / 2 + 30, y - 720, width / 2 - 30, 790);
  fill(223, 239, 243);
  rect(width / 2 + 50, y - 700, width / 2 - 70, 750);

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

//important variables
let ufoY = -350;
let kitchenY = 350;
let accleration = 0.2;
let speed = -0.4;
let velocity = speed + accleration;
let gameActive = false;

//reset functon,
//this was big weird needed this cause the game didnt reset otherwise
function resetGame() {
  ufoY = 350;
  kitchenY = 350;
  accleration = 0.2;
  speed = -0.4;
  rotation = PI / 2;
  velocity = speed + accleration;
  gameActive = false;
}

//all the screens
//start screen
function startScreen() {
  resetGame();
  kitchen(350);
  ufo(20, 430, 1, 0);
  background(50, 50, 50, 100);
  fill(0, 0, 0);
  textSize(50);
  text("Welcome to the EPIC Game", width / 2 - 365, 60, 400);
  textSize(30);
  text("Click ESC to start!!", width / 2 - 365, 200, 400);
  textSize(30);
  text("Use SPACE to control the thruster!!", width / 2 - 365, 250, 350);
}
//gameScreen
function gameScreen() {
  /*
  gameActive was added before the resetgame function, 
  as solution but it didnt solve the problem.
  */
  if (gameActive) {
    kitchen(kitchenY);
    ufoUpgrade(width / 2 - 200, ufoY, 0.9, rotation);
    ufoY = ufoY + velocity;
    velocity += speed + accleration;

    if (ufoY < -100) {
      speed = 0.4;
    }
    if (keyIsDown(32)) {
      ufoY -= velocity;
      accleration = 0;
      velocity = 1;
    }
    if (ufoY > 350 && velocity < 7) {
      accleration = 0.2;
      speed = -0.4;
      state = "endScreenWin";
    }
    if (ufoY > 350 && velocity > 7) {
      accleration = 0.2;
      speed = -0.4;
      velocity = speed + accleration;
      state = "endScreenLose";
      gameActive = false;
    }
    // console.log(velocity);
  }
}

//endScreen
function endScreenWin() {
  kitchen(350);
  ufo(410, 320, 3, 0.2);
  background(50, 50, 50, 100);
  fill(0, 0, 0);
  textSize(50);
  fill(0, 200, 50);
  text("EPIC Game Big W", width / 2 - 365, 60, 300);
  textSize(30);
  text("Click ESC to start!!", width / 2 - 365, 200, 400);
}
function endScreenLose() {
  kitchen(350);
  ufo(410, 320, 3, 3.2);
  background(100, 50, 50, 100);
  fill(0, 0, 0);
  textSize(90);
  fill(200, 0, 0);
  text("Noob... BIG L ", width / 2 - 365, 80, 380);
  textSize(30);
  text("Click ESC to start!!", width / 2 - 365, 300, 400);
}

//variable for the current state
let state = "start";

//draws the current state
function draw() {
  if (state === "start") {
    startScreen();
  } else if (state === "game") {
    gameScreen();
  } else if (state === "endScreenWin") {
    endScreenWin();
  } else if (state === "endScreenLose") {
    endScreenLose();
  }
}

//controls the switch between states
function keyPressed() {
  if (state === "start" && keyCode === 27) {
    state = "game";
    gameActive = true;
  } else if (state === "endScreenLose" && keyCode === 27) {
    state = "start";
  } else if (state === "endScreenWin" && keyCode === 27) {
    state = "start";
  } else if (keyCode === 27) {
    state = "start";
  }
}
