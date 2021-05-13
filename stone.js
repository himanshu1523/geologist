class Stone {
    constructor(x,y,w,h){
    this.x=x;
    this.y=y;
    this.width=w;
    this.height=h;
        var option={
        'restitution':0.8,
        'friction':3,
        'density':1
    }
    this.body=Bodies.rectangle(this.x,this.y,this.width,this.height);
    World.add(world,this.body);
}
display(){
    var pos=this.body.position;
    push()
    translate(pos.x,pos.y);
    rectMode(CENTER);
    fill("darkgrey");
    rect(0,0,this.width,this.height);
    pop()
    }
}