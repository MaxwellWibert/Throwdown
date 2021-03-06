function Particle(x, y, hue, firework, swirly, isUp){
  this.pos = createVector(x,y);
  this.firework = firework;
  this.lifespan = 255;
  this.hue = hue;
  this.acc = createVector(0,0);
  this.isUp = isUp;
  
  if (this.firework) {
    this.vel = createVector(0, -10*this.isUp);
  } else if(this.swirly){
    this.vel = 0;
  } else {
    this.vel = p5.Vector.random2D();
    this.vel.mult(random(10,20));
  }
  
  this.applyForce = function(force){
    this.acc.add(force);
  }
  
  this.update = function(){
    if (!this.firework) {
      this.vel.mult(0.9);
      this.lifespan -= 4;
    }
    
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.mult(0);
  }
  
  this.done = function(){
    if(this.lifespan < 0){
      return true;
    }else{
      return false;
    }
  }
  
  this.show = function(){
    colorMode(HSB);
    if(this.firework){
      strokeWeight(4);
      stroke(hue, 255, 255);
    }else if(this.swirly){
      strokeWeight(20-this.radius);
    }else{
      strokeWeight(2);
      stroke(hue, 255, 255, this.lifespan);
    }  
    point(this.pos.x, this.pos.y);
  }
}