var bg, sleep, brush, gym1, eat, drink, move, bath;
var spaceship, astronaut;
var edges;


function preload(){
  
  bg = loadImage("iss.png");
  sleep = loadAnimation("sleep.png");
  brush = loadAnimation("brush.png");
  gym1 = loadAnimation("gym1.png","gym2.png");
  eat = loadAnimation("eat1.png","eat2.png");
  drink = loadAnimation("drink1.png","drink2.png");
  move = loadAnimation("move.png","move1.png");
  bath = loadAnimation("bath1.png","bath2.png");

}

function setup() {
  createCanvas(400, 400);

  spaceship = createSprite(200,200);
  spaceship.addImage("backGround",bg);
  spaceship.scale = 0.1;

  edges = createEdgeSprites();

  astronaut = createSprite(300,230);
  astronaut.addAnimation("sleeping",sleep);
  astronaut.scale = 0.1;
  astronaut.setCollider("rectangle",0,0,1000,2200);
  astronaut.debug = false;
}

function draw() {
  background(0);
  
  fill(255);
  text("Instructions: Up Arrow = Brushing, Down Arrow = Gymming",10,10);
  fill(255);
  text("Left Arrow = Eating, Right Arrow = Bathing, m key = Bathing.",10,20);
  
  astronaut.bounceOff(edges);

  if(keyDown("UP_ARROW")){
    astronaut.addAnimation("brushing",brush);
    astronaut.changeAnimation("brushing");
    astronaut.y = 230;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
    astronaut.setCollider("rectangle",0,0,1000,2500);
  }

  if(keyDown("DOWN_ARROW")){
    astronaut.addAnimation("workout",gym1);
    astronaut.changeAnimation("workout");
    astronaut.y = 230;
    astronaut.x = 200;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
    astronaut.setCollider("rectangle",0,0,2000,2200);
  }

  if(keyDown("LEFT_ARROW")){
    astronaut.addAnimation("eating",eat);
    astronaut.changeAnimation("eating");
    astronaut.y = 230;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
    astronaut.setCollider("rectangle",0,0,1500,2200);
  }
  
  if(keyDown("RIGHT_ARROW")){
    astronaut.addAnimation("bathing",bath);
    astronaut.changeAnimation("bathing");
    astronaut.y = 230;
    astronaut.x = 200;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
    astronaut.setCollider("rectangle",0,0,1300,2500);
  }

  if(keyDown("m")){
   astronaut.velocityX = 2;
   astronaut.velocityY = 2; 
  }
  
  drawSprites();
}