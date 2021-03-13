class Particles{
    constructor(x, y, r){
        var options ={
            restitution: 0.5
        }
        this.body = Bodies.circle(x,y,10,options);
        this.color = color(random(0,255), random(0,255), random(0,255))
        this.r = 10;
        World.add(world, this.body);
    }
    display() {
        var pos = this.body.position;
        push()
        fill(this.color);
        ellipseMode(CENTER);
        ellipse(pos.x,pos.y, this.r);
        pop()
    }
}