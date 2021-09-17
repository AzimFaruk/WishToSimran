var canvas;

var bgImg;
var form, wisher;

var simran,  simranAnimation;

var sound;

function preload(){
  bgImg = loadImage("bg.jpg");
  simranAnimation = loadImage("simran.png");

  sound = loadSound("music.mp3");
}

function setup(){
  canvas = createCanvas(500, 600);

  sound.play();

  form = new Form();

  wisher = new Wisher();

  simran = createSprite(400, 500, 100, 100);
  simran.addImage(simranAnimation);
  simran.scale = 0.2;
}

function draw(){

  background(bgImg);

  form.display();

  drawSprites();

  textSize(20);
  stroke("red");
  fill("yellow");
  textFont("Lucida Sans");
  text("Wish me! Wish me on my birthday here below", 20, 15);
  
  stroke(255);
  line(0, 25, 500, 25);
}