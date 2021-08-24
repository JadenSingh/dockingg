var  issIMG, spacebg, spacecraft1IMG, spacecraft2IMG, spacecraft3IMG, spacecraft4IMG;
var hasDocked=false
var spacecraft



function preload(){
spacebg=loadImage("spacebg.jpg")
spacecraft1IMG=loadImage("spacecraft1.png")
spacecraft2IMG=loadImage("spacecraft2.png")
spacecraft3IMG=loadImage("spacecraft3.png")
spacecraft4IMG=loadImage("spacecraft4.png")
issIMG=loadImage("iss.png")



}

function setup() {
  createCanvas(800,400);
  

  iss=createSprite(400,100)
  iss.addImage(issIMG)
  iss.scale=0.5;

  spacecraft=createSprite(400,300)
  spacecraft.addImage(spacecraft1IMG, spacecraft2IMG, spacecraft3IMG, spacecraft4IMG)
  spacecraft.scale=0.2

  
}

function draw() {
  background(spacebg);  

if(!hasDocked){

  spacecraft.x+spacecraft.x+random(-1,1)


if(keyDown(UP_ARROW)){

  spacecraft.y=spacecraft.y-2
}
if(keyDown(DOWN_ARROW)){

  spacecraft.y=spacecraft.y+2
  spacecraft.addImage(spacecraft2IMG)
}
if(keyDown(LEFT_ARROW)){

  spacecraft.x=spacecraft.x-2
  spacecraft.addImage(spacecraft3IMG)
}
if(keyDown(RIGHT_ARROW)){

  spacecraft.x=spacecraft.x+2
  spacecraft.addImage(spacecraft4IMG)
}


}
if(spacecraft.y<=(iss.y+70)&& spacecraft.x<=(iss.x-10)){
  hasDocked=true;
  fill("white")
  text("Mission Success",400,200)
  
  }
  drawSprites();
}