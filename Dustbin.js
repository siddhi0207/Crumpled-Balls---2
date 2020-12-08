class Dustbin{
    constructor(x,y,width,height){

    var options ={
        isStatic : true
    }
    this.body = Bodies.rectangle(x,y,width,height,options);
    this.image = loadImage("dustbin.png")
    this.width = width;
    this.height = height;

    World.add(world,this.body);
    }

    display(){
        var pos = this.body.position;
        fill('red');
      
        rect(pos.x,pos.y,this.width,this.height);
        imageMode(CENTER);
        image(this.image, 1200,550,250,250);

    }






}