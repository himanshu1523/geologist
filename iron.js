class Iron {
    constructor(x,y,w,h){
    this.x=x;
    this.y=y;
    this.width=w;
    this.height=h;
        var option={
        'restitution':0.8,
        'friction':3,
        'density':30
    }

   this.body=Bodies.rectangle(x,y,this.width,this.height,option) 
    World.add(world,this.body);

}
display(){
    var pos=this.body.position;
    push()
    translate(pos.x,pos.y);
    rectMode(CENTER);
    fill("grey");
    rect(0,0,this.width,this.height);
    pop()
    }
}