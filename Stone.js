class Stone {
    constructor(x, y,r) {
      var options = {
       'isStatic' : false,
        'restitution':0,
        'friction':1.0,
        'density':1.2
    }
      this.x = x;
      this.y = y;
      this.r = r;
      this.body = Bodies.circle(this.x, this.y, this.r/2, options);
    
      this.image = loadImage("sprites/stone.png");
      World.add(world, this.body);
    }
    display(){
      var pos = this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      imageMode(CENTER)
      image(this.image,0,0,this.r*2,this.r*2);
      pop();
    }
  }
  