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

kitchen();
background(50, 50, 50, 100);
fill(0, 0, 0);
textSize(50);
text("Welcome the EPIC Game", width / 2 - 300, 450, 700);
