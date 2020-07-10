const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var backgroundImg,platform;


var gameState = "onSling";
var bg = "sprites/bg.png";
function preload() {
    
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    platform = new Ground(150, 305, 300, 170);

    
    

   
    //level one
    block1 = new Box(90,275,30,40);
    block2 = new Box(120,275,30,40);
    block3 = new Box(150,275,30,40);
    block4 = new Box(180,275,30,40);
    block5 = new Box(210,275,30,40);
    block6 = new Box(240,275,30,40);
    block7 = new Box(270,275,30,40);
   //leveltwo
   block8 = new Box(330,235,30,40);
   block9 = new Box(360,235,30,40);
   block10 = new Box(390,235,30,40);
   block11 = new Box(420,235,30,40);
   block12 = new Box(450,235,30,40);
   //levelthree
   block13 = new Box(480,195,30,40);
   block14 = new Box(510,195,30,40);
   block15 = new Box(540,195,30,40);
   //top
   block16 = new Box(390,155,30,40);

    //log6 = new Log(230,180,80, PI/2);
    slingshot = new SlingShot(bird.body,{x:200, y:50});
}

function draw(){
    
         background(0);

    Engine.update(engine);
    //strokeWeight(4);

    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
    block8.display();
    block9.display();
    block10.display();
    block11.display();
    block12.display();
    block13.display();
    block14.display();
    block15.display();
    block16.display();

}

function mouseDragged(){
    if (gameState!=="launched"){
        Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
    }
}


function mouseReleased(){
    slingshot.fly();
    gameState = "launched";
}

function keyPressed(){
    if(keyCode === 32){
       // slingshot.attach(bird.body);
    }
}

