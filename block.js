class Block{
    constructor(x,y,width,height){

        var options={
            restitution:0.8,
            friction:1,
            density:0.04,
            isStatic:false


        }
        this.body=Bodies.rectangle(x,y,width,height,options);
        this.width=width;
        this.height=height;
        World.add(world,this.body);
       
    }

    display(){

        var pos=this.body.position
          push();
          rectMode(CENTER);
          translate(pos.x,pos.y)
          rotate(this.body.angle)
          fill("lime");
          stroke("white")
          strokeWeight(4);
          rect(0,0,this.width,this.height);
          pop();
       
       
    }
          
  
}