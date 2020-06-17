const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var inkstate = 0;
var engine, world;
var position; 
var ink = [];
function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

   //ink = new Ink(200,200,50,50);
}

function draw(){
    background(255,255,255);
    Engine.update(engine);
   /* if(inkstate === 1){
        var position = [mouseX,mouseY];
        ink.push(position);
       }
    for(var i=0; i<ink.length; i++){
         rect(ink[i][0],ink[0][i],10,10);
    }*/
    if(inkstate = 1){
        rect(mouseX,mouseY,5,5);
       }
}
function mouseDragged(){
    inkstate = 1;
}
function mouseReleased(){
    inkstate = 0;
}
