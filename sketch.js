fixedRect, movingRect, gameObject1, gameObject2, gameObject3, gmaeObject4;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 200, 50, 80);
  fixedRect.shapeColor ="green"
  movingRect = createSprite(200,500,80,40);
  movingRect.shapeColor ="green";
  gameObject1 = createSprite(100,100, 50,50)
  gameObject1.shapeColor = "green";
  gameObject2 = createSprite(300,100, 50,50)
  gameObject2.shapeColor = "green";
  gameObject3 = createSprite(500,100, 50,50)
  gameObject3.shapeColor = "green";
  gameObject4 = createSprite(700,100, 50,50)
  gameObject4.shapeColor = "green";
}

function draw() {
  background("black");  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
  
  if (isTouching(movingRect, gameObject3)){
    gameObject3.shapeColor ="red";
      movingRect.shapeColor ="red";
  }
  else{
    gameObject3.shapeColor ="green";
    movingRect.shapeColor ="green";
  }
  drawSprites();
}

function isTouching(object1, object2){
  if(object1.x - object2.x <object1.width/2 + object2.width/2
    && object2.x - object1.x<object1.width/2 + object2.width/2 
    && object2.y -object1.y<object2.height/2 + object1.height/2
    && object1.y - object2.y <object1.height/2 + object2.height/2){
      return true;
    }
    else{
      return false;
    }
    
    
}