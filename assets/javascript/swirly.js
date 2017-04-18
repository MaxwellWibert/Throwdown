function Swirly(x, y){
  this.hue = random(255);
  this.x = x;
  this.y = y;
  this.converged = false;
  this.particles = [];
  this.radius = 200;
  
  this.num = 2*random(4,8);
  for(var i = 0; i < this.num; i++){
    var p = new Particle(this.x + this.radius*Math.cos(2*(i+this.radius)*Math.PI/this.num), this.y + this.radius*Math.sin(2*(i+this.radius)*Math.PI/this.num), this.hue, false, true);
    this.particles.push(p);
  }
  
  this.done = function(){
    if(this.converged){
      return true;
    }else{
      return false;
    }
  }
  
  this.update = function(){
    if(this.radius <= 0){
      this.converged = true;
      var firework = new Firework(this.x, this.y, this.hue);
      fireworks.push(firework);
    }
    this.radius -=5;
    for(var i = this.particles.length - 1; i>=0; i--){
      this.particles[i].pos.x = this.x + this.radius*Math.cos(2*(i+this.radius)*Math.PI/this.num);
      this.particles[i].pos.y = this.y + this.radius*Math.sin(2*(i+this.radius)*Math.PI/this.num);
      if(this.converged){
        this.particles.splice(i, 1);
      }
    }
  }
  
  this.show = function(){
    if(!this.done()){
      for(var i = this.particles.length -1; i>= 0; i--){
        this.particles[i].show();
      }
    }
  }
}