var thickness,wall;
var bullet, speed, weight;
function setup() {
  createCanvas(1600,400);
  // createSprite(400, 200, 50, 50);
  speed=random(223,321);
  weight=random(30,50);
  thickness=random(22,83);
  bullet = createSprite(50,200,50,50)
  bullet.velocityX = speed;
  wall=createSprite(1200,200,thickness,200);
}

function draw() {
  background(255,255,255);  
  drawSprites();        
  if(wall.x - bullet.x < bullet.width/2 + wall.width/2){
    damage = (0.5*weight*speed*speed)/(thickness*thickness*thickness);
    bullet.velocityX = 0;
    if(damage<10) {
      wall.shapeColor = "green";
    }

    if(damage>10) {
      wall.shapeColor = "red";
    }
    
  }

  
}