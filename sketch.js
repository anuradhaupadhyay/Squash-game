var ball,img,paddle,paddleImage;

function preload() {
  /* preload your images here of the ball and the paddle */
  img = loadImage("ball.png");
  paddleImage = loadImage("paddle.png");
}
function setup() {
  createCanvas(400, 400);
   /* create the Ball Sprite and the Paddle Sprite */
  ball = createSprite(200,200,20,20);
  paddle = createSprite(380,200,20,20);
  
  /* assign the images to the sprites */
  ball.addImage("ball",img);
  paddle.addImage("paddle",paddleImage);
  /* give the ball an initial velocity of 9 in the X direction */
  

}

function draw() {
  background(205,153,0);
  
  /* create Edge Sprites here */
  edges=createEdgeSprites();
  
  /* Allow the ball sprite to bounceOff the left, top and bottom edges only, leaving the right edge of the canvas to be open. */
  if(ball.isTouching(edges[0])||ball.isTouching(edges[2])||ball.isTouching(edges[3])){
  ball.bounceOff(edges[0]);
  ball.bounceOff(edges[2]);
  ball.bounceOff(edges[3]);
  }
  //ball.velocityX=9;
  
  /* Allow the ball to bounceoff from the paddle */
 if(ball.isTouching(paddle)){
    ball.x = ball.x -5;
    ball.velocityX = -ball.velocityX;
  }
  /* Also assign a collision callback function, so that the ball can have a random y velocity, making the game interesting */
randomVelocity();

reset(); 
  
  if(keyDown("space")&&ball.x===200&&ball.y===200){
  ball.velocityX=9  
  }
  if(keyWentDown(UP_ARROW))
  {
     /* what should happen when you press the UP Arrow Key */
    paddle.velocityY=-5;
  }
  if(keyWentUp(UP_ARROW))
  {
     /* what should happen when you press the UP Arrow Key */
    paddle.velocityY=0;
  }
  if(keyWentDown(DOWN_ARROW))
  {
    /* what should happen when you press the UP Arrow Key */
    paddle.velocityY=5;
  }
  if(keyWentUp(DOWN_ARROW))
  {
  /* what should happen when you press the UP Arrow Key */
    paddle.velocityY=0;
  }
  drawSprites();
  text("PRESS SPACE TO SERVE",150,350);
}
 
function randomVelocity()
{
  /* assign the ball a random vertical velocity, so it bounces off in random direction */
  if(ball.isTouching(paddle)||ball.isTouching(edges)){
  ball.velocityY=random(9,-9);
  }
}
function reset(){
if(ball.x>400){
ball.x=200;
ball.y=200;
ball.velocityX=0;
ball.velocityY=0;
}
}