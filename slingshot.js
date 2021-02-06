class SLING {
    constructor(bodyA, fixedpoint){
        var options = {
            bodyA: bodyA,
            pointB: fixedpoint,
            stiffness: 0.04,
            length: 10
        }
        this.pointB=fixedpoint
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }
    detatch(){
        this.sling.bodyA=null;
    }

    display(){
        if (this.sling.bodyA){
        var pointA = this.sling.bodyA.position;
        var pointB = this.pointB;
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
    }
}
    
}