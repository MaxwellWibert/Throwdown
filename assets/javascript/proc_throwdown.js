var fireworks = [];

var gravity;

function setup() {
  createCanvas(800, 400);
  colorMode(HSB);
  gravity = createVector(0, 0.2);
  stroke(255);
  strokeWeight(4);
  background(0);
}

function mousePressed(){
  colorMode(RGB);
  background(0, 0, 0, 25);
  var mySwirl = new Swirly(mouseX,mouseY);
  fireworks.push(mySwirl);
}

function draw() {
  colorMode(RGB);
  background(0, 0, 0, 25);
  
  for (var i = fireworks.length - 1; i>=0; i--){
    fireworks[i].update();
    fireworks[i].show();
    
    if(fireworks[i].done()) {
      fireworks.splice(i, 1);
    }
  }
}