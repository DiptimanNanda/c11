var pathImg,path
var runnerImg,runner
var lEdge,rEdge

function preload(){
  //pre-load images
   pathImg=loadImage("path.png")
   runnerImg=loadAnimation("Runner-1.png","Runner-2.png")



}

function setup(){
  createCanvas(400,400);
  //create sprites here
   path=createSprite(200,200);
   path.addImage(pathImg);
   path.velocityY=4;
   path.scale=1.2;
   if(path.y>400){
      path.y=height/2;
  }
   runner=createSprite(200,300)
   runner.addAnimation("s1",runnerImg)
   runner.scale=0.1
   lEdge=createSprite(20,200,50,400)
   rEdge=createSprite(380,200,50,400)
   lEdge.visible=false
   rEdge.visible=false
   
}

function draw() {
  background(0);
  if(path.y>400){
    path.y=height/2;
   }
   runner.x=World.mouseX
   runner.collide(lEdge)
   runner.collide(rEdge)








  drawSprites()
}














