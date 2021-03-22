const Bodies=Matter.Bodies;
const Engine=Matter.Engine;
const World=Matter.World;

var engine, world;
var coins=[];
var score=0;


function preload(){
  getBackgroundImg();

}

function setup(){
createCanvas(600,600);
engine=Engine.create();
world=engine.world;
stand1 = new Stand(300,300,250,10);
stand2 = new Stand(400,200,250,10);
stand3 = new Stand(320,500,250,10);
stand4 = new Stand(500,320,250,10);

triumph=new Victory(200,450);


var maxCoins=100;
for(var i=0; i<maxCoins; i++){
    coins.push(new Coins(random(0,400), random(0,400)))
}
   
    
}

function draw(){
  if(backgroundImg)
  background(backgroundImg);


    background(0);
    noStroke();
    textSize(35)
    fill("white")
    text("Score  " + score, width-300, 50)

    Engine.update(engine);

    fill("blue")
    stand1.display();
    stand2.display();
    stand3.display();
    stand4.display();


    for(var i=0; i<coins.length; i++){
        coins[i].display();
        coins[i].update();
        }  
    }

    function scorecount(){
      if(coins.y<0){
        score=score+1;
      }
    }

    function winning(){
      if(score===100){
         triumph.display();
      }
    }
    
    async function getBackgroundImg(){
      var response = await fetch("http://worldtimeapi.org/api/timezone/America/Toronto");
      var responseJSON = await response.json();
  
      var datetime = responseJSON.datetime;
      var hour = datetime.slice(11,13);
      
      if(hour>=06 && hour<=19){
          bg = "sprites/bg1.png";
      }
      else{
          bg = "sprites/bg2.jpg";
      }
  
      backgroundImg = loadImage(bg);
      console.log(backgroundImg);
  }

