const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundimage;
var response,responseType,daytime,hour;
var AMorPM



function preload() {
    // create getBackgroundImg( ) here
    gettime();
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){

    // add condition to check if any background image is there to add
    if(backgroundimage ){
        background(backgroundimage);
        }

    Engine.update(engine);

    // write code to display time in correct format here
    if(hour < 12 && hour > 0){
        AMorPM = "AM";
    }
    else {
        AMorPM = "PM";
    };

    textSize(35);
    text("TIME : " + hour + AMorPM,80,100);
}

async function gettime(){
    response = await fetch("https://worldtimeapi.org/api/timezone/Asia/Kolkata");
    responseType = await response.json();
    daytime = responseType.datetime;
    hour =  daytime.slice(11,13);
   if(hour <= 7 && hour >= 5){
       var bg = "sunrise1.png";
   }
   else if(hour <= 10 && hour >= 8){
       var bg = "sunrise2.png";
   }
   else if(hour <= 12 && hour >= 10){
       var bg = "sunrise4.png";
   }
   else if(hour <= 14 && hour >= 12){
       var bg = "sunrise5.png";
   }
   else if(hour <= 16 && hour >= 14){
       var bg = "sunset7.png";
   }
   else if(hour <= 18 && hour >= 16){
       var bg = "sunset10.png";
   }
   else if(hour <= 20 && hour >= 18){
       var bg = "sunset11.png";
   }
   else {
       var bg = "sunset12.png";
   }
   backgroundimage = loadImage(bg);
    console.log(hour);

}
