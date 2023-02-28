//states
function startScreen() {
  background(0, 0, 255);
  text("Start", width / 2 - 25, height / 2);
}

function gameScreen() {
  background(255, 255, 0);
  text("Game", width / 2 - 25, height / 2);
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
function mouseClicked() {
  if (state === "start") {
    state = "game";
  } else if (state === "end") {
    state = "game";
  }
}
