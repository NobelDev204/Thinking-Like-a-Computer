var aRect, bRect;


function setup() {
  createCanvas(800,400);
  aRect=createSprite(400,200,50,100);
  bRect=createSprite(200,200,100,50);
  aRect.debug=true;
  bRect.debug=true;
}

function draw() {
  background(0); 
  bRect.x=World.mouseX;
  bRect.y=World.mouseY;

  if(bRect.x-aRect.x < bRect.width/2 + aRect.width/2 && 
    aRect.x-bRect.x< bRect.width/2 + aRect.width/2 &&
    bRect.y-aRect.y < bRect.height/2 + aRect.height/2 && 
    aRect.y-bRect.y< bRect.height/2 + aRect.height/2) {
    aRect.shapeColor="purple";
    bRect.shapeColor="purple";
  }
  else{
    bRect.shapeColor="teal";
    aRect.shapeColor="teal";
  }


  drawSprites();
}