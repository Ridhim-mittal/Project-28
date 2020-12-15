class Boy {
    constructor(x, y) {
      var options = {

           isStatic: true,
          'restitution':0,
          'friction':1
          
      }
      this.body = Bodies.rectangle(x, y, 150, 300, options);
      this.width = 150;
      this.height = 300;
      this.image = loadImage("boy.png");
      
     
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      imageMode(CENTER);
      image(this.image,0, 0, this.width, this.height);
      pop();
    }
  };