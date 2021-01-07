var tom,tom_Image,jerry,jerry_Image,garden;
function preload() {
    //load the images here
    tom_Image=loadAnimation("tomOne.png","tomTwo.png","tomThree.png","tomFour.png");
    jerry_Image=loadAnimation("jerryOne.png","jerryTwo.png","jerryThree.png","jerryFour.png");
    garden=loadImage("garden.png")

}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    tom=createSprite(900,500,10,10);
    tom.addAnimation("tom_running",tom_Image);
    tom.scale=0.2;
    

     jerry=createSprite(100,550,10,10);
    jerry.addAnimation("jerry_running",jerry_Image);
    jerry.scale=0.2;
    jerry.debug=true;

}

function draw() {

    background(garden);
    //Write condition here to evalute if tom and jerry collide
    tom.velocityX=-2;


   
  if(isTouching(tom,jerry)){
    tom.velocityX=0;
  }
 

  
    drawSprites();
    }


function isTouching(movingrect,fixedrect){
if(movingrect.x-fixedrect.x <= (fixedrect.width/2+movingrect.width/2)&&
  fixedrect.x-movingrect.x <( movingrect.width/2 + fixedrect.width/2)&&
  movingrect.y-fixedrect.y <= (fixedrect.height/2+movingrect.height/2)&&
  fixedrect.y-movingrect.y <( movingrect.height/2 + fixedrect.height/2) )
  {

    return true;
  }
  else
  {
    return false;
  }
}
