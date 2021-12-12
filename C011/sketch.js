//referencia para bibliotecas p5.js: https://p5js.org/libraries/

var dino, dinoImg, dinoAnima;  
var bordas;
var solo;

function preload(){
  dinoImg = loadImage("trex1.png");
  dinoAnima = loadAnimation("trex1.png", "trex3.png", "trex4.png")


}

function setup(){
  createCanvas(600,200);
  
  dino = createSprite(60, 140, 30, 50);
  //dino.addImage(dinoImg);
  dino.addAnimation("correndo", dinoAnima);
  dino.scale = 0.6;
  bordas = createEdgeSprites();
  
  solo = createSprite(110, 190, 200, 20);
  solo.velocityX = -1;
  
}

function draw(){
  background("white");
  drawSprites();
  // controles dino:
  if(keyDown("space")){
    dino.velocityY = -10;
  }
  //dino.velocityY = dino.velocityY + 0.8;
  dino.velocityY += 0.8;
  //dino.collide(bordas[3]);
  dino.collide(solo);
  console.log(solo.x);
  if (solo.x){

  }

  textSize(24);
  text(mouseX+","+mouseY, mouseX, mouseY);
    
}