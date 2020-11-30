var wall, thickness;
var speed,weight,bullet;

function setup() {
  createCanvas(1600,400);
  bullet=createSprite(50, 200, 70, 10);
thickness=random(22,83)

wall=createSprite(1200,200,thickness,height/2);



wall.shapeColor =color(80,80,80);
bullet.shapeColor =color(255,255,255)

  speed=random(223,321);
  weight=random(30,52);

  bullet.velocityX = speed;

  
}

function draw() {

  if(wall.x-bullet.x < (bullet.width+wall.width)/2)
{
  bullet.velocityX=0;
  var damage=0.5 * weight * speed * speed/(thickness*thickness*thickness);
  if(damage>10)
  {
    wall.shapeColor=color(255,0,0);
  }
  else 


if (damage < 10)
{
  wall.shapeColor=color(0,255,0)
}
}
  background(0,0,0);  
  drawSprites();
}
