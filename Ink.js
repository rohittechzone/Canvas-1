class Ink {
    constructor(x,y,width,height) {
      var options = {
          isStatic: true
      }
      this.ink = [];
      this.inkImage = loadImage("ink.png");
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      fill("brown");
      rect(pos.x, pos.y, this.width, this.height);
      if(inkstate === 1){
        var position = [mouseX, mouseY];
        this.ink.push(position);
      }
     
  
      for(var i=0; i<this.ink.length; i++){
        image(this.inkImage, this.ink[i][0], this.ink[i][1]);
      }
    }
  };
    
  
