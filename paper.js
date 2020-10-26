class Paper{
    constructor(x, y) {
        var options = {
            isStatic:false,
            'friction':0.5,
            'density':1.2,
            restitution:0.3,

        }
        this.body = Bodies.circle(x,y,75,options);
        this.radius = 75
        World.add(world, this.body);
        this.image = loadImage("paper.png")

      }
      display(){
        push();
        imageMode(RADIUS);
        image(this.image,this.body.position.x,this.body.position.y,75,75);
        pop();
      }
}