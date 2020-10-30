var database;
var dog, happyDog, foodS, foodStock;
function preload()
{
  happyDog = loadImage("images/dogImg1.png");
  dog = loadImage("images/dogImg.png");
}

function setup() {
	createCanvas(500, 500);
    database = firebase.database();
    var dogSprite = createSprite(250,250,10,10);
    dogSprite.addImage(dog);
   scale(0.10)
    foodStock = database.ref("ball/position");
    foodStock.on("value",readStock);
}


function draw() {  
background(46, 139, 87);
if(keyWentDown(UP_ARROW)){
  writeStock(foodS);
  dogSprite.addImage(happyDog);
}
  drawSprites();
  text(foodStock, 200, 200);
  text("Press Up Arrow Key To Feed The Dog", 200, 20);
}
function readStock(){
  foodS = data.val();
}
function writeStock(x){
  if(x<=0){
    x=0;
  }else{
    x=x-1;
  }
  database.ref('/').update({
    Food:x,
  })
}

