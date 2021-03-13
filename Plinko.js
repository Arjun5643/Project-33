class Plinkos{
    constructor(x,y){
        var options = {
            isStatic: true
        }
        this.body = Bodies.circle(x,y, 10,options);
        this.r = 15;
        World.add(world, this.body);
    }
    display() {
        var pos = this.body.position;
        ellipseMode(CENTER);
        fill(255);
        ellipse(pos.x, pos.y, this.r)
    }
}