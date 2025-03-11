let button;
let shouldShowSq = false;
let shouldShowCir = false;
let shouldShowTri = false;

function setup() {
  createCanvas (720, 400);
  angleMode(DEGREES);
  background(220);
  button = createButton('Square');
  button.mousePressed(function() {
    shouldShowSq = !shouldShowSq;
  });
  button = createButton('Circle');
  button.mousePressed(function() {
    shouldShowCir = !shouldShowCir;
  });
  button = createButton('Triangle');
  button.mousePressed(function() {
    shouldShowTri = !shouldShowTri;
  });
}

function draw() {
  background(51);
  if (shouldShowSq) {
    ShowSq();
  }
  
  if (shouldShowCir) {
    ShowCir();
  }

  if (shouldShowTri) {
    ShowTri();
  }
}

function ShowSq() {
  fill(0, 204, 255);
  square(25, 25, 100);
}

function ShowCir() {
  fill (171, 22, 22);
  circle(560, 150, 100);
}

function ShowTri() {
  fill(253, 210, 242);
  triangle(250, 350, 350, 200, 450, 350);
}