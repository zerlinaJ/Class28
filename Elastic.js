class Elastic{
    constructor(bodyA,pointB){
  
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness:0.004,
            length:1
        }
        this.sling = Constraint.create(options);
        World.add(world,this.sling);
    
      }
  
      fly(){
             this.sling.bodyA = null;  
           
        
      }
      
      display(){
       if(this.sling.bodyA){
        var pointA = this.sling.bodyA.position;
        var pointB = this.sling.pointB;
  
        stroke("white");
        strokeWeight(3);
        line(pointA.x,pointA.y,pointB.x,pointB.y);
     }
    }

    attach(body){
		this.sling.bodyA=body;
	}

  }
