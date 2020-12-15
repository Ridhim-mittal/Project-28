class Tree {
    constructor(x, y) {
      var options = {

           isStatic: true,
          'restitution':0,
          'friction':1
          
      }
      this.body = Bodies.rectangle(x, y, 400, 600, options);
      this.width = 400;
      this.height = 600;
      this.image = loadImage("tree.png");
      
      //World.add(world, this.body);
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