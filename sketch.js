var database ;
var ink = [];
function setup(){
    var  canvas =   createCanvas(1500,400);
    canvas.mousePressed(startInk);
    database = firebase.database();

}

function startInk(){
    realtimePath = [] ;
 ink.push(realtimePath);


}

function draw(){
    background(0);
    
    if(mouseIsPressed){
        var point = {
            x : mouseX ,
            y : mouseY 
        }
        realtimePath.push(point);
        database.ref("/").update({
            positions :ink
        });
    
    }
        stroke(100,200,150);
        strokeWeight(10);
        noFill();
        for(var i = 0 ; i   < ink.length ; i++){
            var path = ink[i];
            beginShape();
            for(var t = 0 ; t   < path.length ;t++){
                vertex(path[t].x,path[t].y)
            }
            endShape();
        }
}