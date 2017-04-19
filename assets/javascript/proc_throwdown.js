var fireworks = [];
var canvas;
var gravity;

function windowResized() {
  resizeCanvas(windowWidth, 2*windowHeight);
}

function setup() {
  canvas = createCanvas(windowWidth, 2*windowHeight);
  canvas.position(0,0);
  canvas.style('z-index', '-1');
  colorMode(HSB);
  gravity = createVector(0, 0.2);
  stroke(255);
  strokeWeight(4);
  background(0);
}

function draw() {
  colorMode(RGB);
  background(0,0,0,10);
  
  for (var i = fireworks.length - 1; i>=0; i--){
    fireworks[i].update();
    fireworks[i].show();
    
    if(fireworks[i].done()) {
      fireworks.splice(i, 1);
    }
  }
}