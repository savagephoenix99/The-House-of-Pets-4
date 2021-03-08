
//                                                             A N I M A L     S H E L T E R
var database;

var coin 
var coinImg
var CC
var coinBG
var CT

var shop

var BgImg

//hour
var h

//minute
var m

//group
var  s 

var t = true

var f =   false

//GermanShepherd
//State 0 = Empyty 
var  GermanShepherd;
var  GermanShepherdImg;
var  GermanShepherdState = 0;

//Poodle
//State 0 = Empyty
var  Poodle;
var  PoodleImg;
var  PoodleState = 0

//SiameseCat
//State 0 = Empyty
var  SiameseCat;
var  SiameseCatImg;
var  SiameseCatState = 0;

//ANTELOPE
//State 0 = Empyty
var  Antelope;
var  AntelopeImg;
var  AntelopeState = 0;

//WHITE Poodle
//State 0 = Empyty
var  PersianCat;
var  PersianCatImg;
var  PersianCatState = 0;



//ShihTzu
//State 0 = Empyty
var  ShihTzu;
var  ShihTzuImg;
var  ShihTzuState = 0;

//BritishShorthair
//State 0 = Empyty
var  BritishShorthair;
var  BritishShorthairImg;
var  BritishShorthairState = 0;

//KING COBRA
//State 0 = Empyty
var  GuineaPig;
var  GuineaPigImg;
var  GuineaPigState = 0;

//Rabbit
//State 0 = Empyty
var  Rabbit;
var  RabbitImg;
var  RabbitState = 0;

//Husky
//State 0 = Empyty
var  Husky;
var  HuskyImg;
var  HuskyState = 0;

//Husky
//State 0 = Empyty
var  Beagle;
var  BeagleImg;
var  BeagleState = 0;

var gameState;


function preload()
{
   BgImg = loadImage("The House of Pets  (1).png")

    GermanShepherdImg = loadImage("German Shepherd.png");
    PoodleImg = loadImage("Poodle.png");
    ShihTzuImg = loadImage("Shih Tzu.png");
    HuskyImg = loadImage("Husky.png");

    coinImg=loadImage("PetCoin.png");
}



function setup(){

    //creating database
    database=firebase.database();

    coinRef  = database.ref('coinCount');
    coinRef.on("value", getCoin, showError);


    createCanvas(displayWidth, displayHeight);

     s=createGroup();

      GermanShepherd = createSprite(70, 70, 100, 100);
      GermanShepherd.addImage(GermanShepherdImg)
      GermanShepherd.scale=0.25
      s.add(GermanShepherd);

      Poodle = createSprite(GermanShepherd.x+200, 70, 100, 100);
      Poodle.addImage(PoodleImg)
      Poodle.scale=0.25
      Poodle.visible=f
      s.add(Poodle)

      SiameseCat = createSprite(Poodle.x+200, 70, 100, 100);
      //GermanShepherd.visible=  f
      s.add(SiameseCat)
     

      Antelope = createSprite(SiameseCat.x+200, 70, 100, 100);
      //GermanShepherd.visible=  f
      s.add(Antelope);

      PersianCat = createSprite(Antelope.x+200, 70, 100, 100);
      //GermanShepherd.visible=  f
      s.add(PersianCat);

      ShihTzu = createSprite(PersianCat.x+200, 70, 100, 100);
      ShihTzu.addImage(ShihTzuImg);
      ShihTzu.scale=0.25
      ShihTzu.visible=  f
      s.add(ShihTzu);

      BritishShorthair = createSprite(70, 250, 100, 100);
      //GermanShepherd.visible=  f
      s.add(BritishShorthair);

      GuineaPig = createSprite(BritishShorthair.x+200, 250, 100, 100);
      //GermanShepherd.visible=  f
      s.add(GuineaPig);

      Rabbit = createSprite(GuineaPig.x+200, 250, 100, 100);
      //GermanShepherd.visible=  f
      s.add(Rabbit);

      Husky = createSprite(Rabbit.x+200, 250, 100, 100);
      Husky.addImage(HuskyImg)
      Husky.scale=0.25
      Husky.visible=  f
      s.add(Husky);




      coin = createSprite(50, 600, 50, 50);
      coin.addImage(coinImg);
      coin.scale=0.10;
      




}



function draw(){
  background(BgImg);
  //getCoin();
  fill("grey")
  textSize(20);
  stroke("black");
  strokeWeight(5);
  text(CC, 80, 605);
  console.log(CC);
if(frameCount%5000==0){
  huskM();
}
  drawSprites();
    }

    

  


function getCoin(data){
  // refering the location 
  CC=data.val();
  console.log(CC);

}

function showError(){
  console.log("not able to read data")
}

function updateCount(count){
  database.ref('/').update({
    coinCount: count
  });
}

function huskM(){
  
  CC=CC+200;

  updateCount(CC);
}

