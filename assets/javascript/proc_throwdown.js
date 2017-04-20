var fireworks = [];
var canvas;
var gravity;
var textSlot;
var t;

function windowResized() {
  resizeCanvas(windowWidth, 2*windowHeight);
}

function setup() {
  canvas = createCanvas(windowWidth, 2*windowHeight);
  canvas.position(0,0);
  canvas.style('z-index', '-1');
  colorMode(HSB);
  gravity = createVector(0, 0.2);
  strokeWeight(4);
  background(0);
  textSlot = "Schwifty Throwdown";
  t = 0;
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
  if(textSlot !== null){
    drawText();
  }
}

function drawText(){
  var x = windowWidth/2 - textSlot.length*18;
  textSize(72);
  colorMode(RGB);
  fill(255, 50, 180);
  stroke(255, 50, 180);
  strokeWeight(30);
  text(textSlot, x, 350);
  fill(0);
  stroke(0);
  strokeWeight(15+15*Math.sin(0.2*t));
  text(textSlot, x, 350);
  t++;
}

function resetText(){
  textSlot = null;
}