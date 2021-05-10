var player, player_img;
var background_img, back_ground;
var gameState = "play";
var score = 0;

var obstacle_img1,obstacle_img2,obstacle_img3;
var obstacle1, obstacle2, obstacle3;
var obstacle1Group;
var background2_img;

function preload(){
    player_img = loadImage("spaceship.png");
    background_img = loadImage("background1.png");
    background2_img = loadImage("background2.png");
    obstacle_img1 = loadImage("obstacle1.png");
    obstacle_img2 = loadImage("obstacle2.png");
    obstacle_img3 = loadImage("obstacle3.png");


}

function setup(){

 createCanvas(800,800);

 back_ground = createSprite(400,400,800,800);
 back_ground.addImage(background_img);
 back_ground.scale = 3;

 player = createSprite(400, 650, 50, 50);
 player.addImage(player_img);
 player.scale = 0.4;

 obstacle1Group = new Group();

}

function draw(){

  

 if(gameState === "play"){

    back_ground.velocityY = ( 4 + 3*score/100);

     if(back_ground.y > 700){
         back_ground.y = 400;
     }
     if(keyDown(LEFT_ARROW)){
         player.x = player.x - 5;
     }
     if(keyDown(RIGHT_ARROW)){
         player.x = player.x + 5;
     }

/*     if(score >= 100){
         gameState = "end";
     }*/
       score = score + Math.round(getFrameRate()/60);

  spawnObstacle1();
  spawnObstacle2();
  spawnObstacle3();

    drawSprites();

  if(player.isTouching(obstacle1Group)|| score >= 100){
     gameState = "end";

  }
    

 }
 if( gameState === "end"){
     if(score >= 100){
     background(background2_img);
     stroke(20);
     fill("orange");
     textSize(50);
     text("YOU WON", 280, 300)
     }
   else{
     //  background("black");
     stroke(20);
     fill("yellow");
     textSize(50);
     text("YOU LOSE", 280, 300)
   }


 }

     stroke(10);
     fill("red");
     textSize(30);
     text("Score: "+ score, 10,50);
}

function spawnObstacle1(){
    if( frameCount % 80 === 0){
      obstacle1 = createSprite(Math.round(random(100,700)),20,30,30);
      obstacle1.addImage(obstacle_img1);
      obstacle1.velocityY = (6+3*score/100);
      obstacle1.scale = 0.3;
      obstacle1.lifetime = 500;
      obstacle1Group.add(obstacle1);
    }

}

function spawnObstacle2(){

}

function spawnObstacle3(){

}