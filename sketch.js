const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var inkstate = 0;
var engine, world;
var position; 
function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
inkreal = new Ink(1333,744,1,1);
   //ink = new Ink(200,200,50,50);
}

function draw(){
    background("pink");
    Engine.update(engine);
    inkreal.display();
   /* if(inkstate === 1){
        var position = [mouseX,mouseY];
        ink.push(position);
       }
    for(var i=0; i<ink.length; i++){
         rect(ink[i][0],ink[0][i],10,10);
    }*/
    
}
function mouseDragged(){
    inkstate = 1;
}
function mouseReleased(){
    inkstate = 0;
}
