function startScreen() {
  background(255, 255, 255);
}

function gameScreen() {
  background(0, 115, 255);
}

function endScreen() {
  background(0, 255, 100);
}

function draw() {
  if (state === "start") {
    startScreen();
  } else if (state === "game") {
    gameScreen();
    gameTimer += 1;
    if (gameTimer >= 100) {
      gameTimer = 0;
      state = "end";
    }
  } else {
    endScreen();
  }
}
