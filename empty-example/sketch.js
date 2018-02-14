var s;
var scl=20;
var food;
function setup() {
  createCanvas(600,600);
    s=new snake();
    frameRate(10);
    food=createVector(random(width),random(height));
    picklocation();

}
function picklocation(){
    var col=floor(width/scl);
    var rows=floor(height/scl);
    food=createVector(floor(random(col)),floor(random(rows)));
    food.mult(scl);
}
function draw() {
    background(51);
    s.update();
    s.show();
    if (s.eat(food)){
    picklocation();}
    fill(225,0,100);
    rect(food.x,food.y,scl,scl);
}
function keyPressed(){
if(keyCode==UP_ARROW){
    s.dir(0,-1);
}
    else if(keyCode==DOWN_ARROW){
    s.dir(0,1);
}
    else if(keyCode==RIGHT_ARROW){
    s.dir(1,0);
}
    else if(keyCode==LEFT_ARROW){
    s.dir(-1,0);
}
}



function snake(){
    this.x=0;
    this.y=0;
    this.xspeed=1;
    this.yspeed=0;
    this.total=0;
    this.tail=[];
this.dir=function(x,y){
    this.xspeed=x;
    this.yspeed=y;
}
    this.update=function (){
        for(var i=0;i<this.tail.length-1;i++){
            this.tail[i]=this.tail[i+1];
        }
this.tail[this.total-1]=createVector(this.x,this.y);
        this.x=this.x+this.xspeed*scl;
        this.y=this.y+this.yspeed*scl;
        this.x=constrain(this.x,0,width-scl);
        this.y=constrain(this.y,0,height-scl);

    }

    this.show=function(){
        fill(225);
        for(var i=0;i<this.total;i++)
        rect(this.tail[i].x,this.tail[i].y,scl,scl);
        rect(this.x,this.y,scl,scl);
    }

    this.eat=function(pos){
        if(dist(this.x,this.y,pos.x,pos.y)<1){

        this.total++;
        return true;}
        else
        return false;

    }
}

