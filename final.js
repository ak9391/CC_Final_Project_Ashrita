//final

let gallery;
let plain;
let frame1;
let frame2;
let monalisa;
let night;
let monet;

let option = 0;
var bg;

var WIDTH;
var HEIGHT;

var num = 1000;
var particles = [num];
var noiseScale=500;
var noiseStrength=1;
let int;


function preload(){

 // bg = loadSound('data/bgmusic.mp3');
  gallery = loadImage('data/artroom.jpg');
  plain = loadImage('data/plain.png');
  frame1 = loadImage('data/frame1.png');
  frame2 = loadImage('data/frame2.png');
  frame3 = loadImage('data/frame3.png');
  monalisa = loadImage('data/download.jpg');
  night = loadImage('data/night.jpg');
  monet = loadImage('data/monet.jpg');

}

function setup(){
	createCanvas(windowWidth,windowHeight);

  // bg.play();
push();
  monalisa.resize(windowWidth/2,windowHeight);
 imageMode(CENTER);
pop();
  noStroke();

push();
  night.resize(windowWidth,windowHeight);
 imageMode(CENTER);
 pop();
  noStroke();

  for (let i=0; i<num; i++) {
    var loc = createVector(random(width*1.2), random(height), 2);
    var angle = random(TWO_PI);
    var dir = createVector(cos(angle), sin(angle));
    var speed = random(0.5, 2);
    particles[i]= new Particle(loc, dir, speed);
  }
}


function draw(){
	if(option == 0){

		background(gallery);
  image(frame1,95,225,156,212);

  image(frame2,267,284,330,180);
  
  image(frame3,1061,250,400,220);

  image(monalisa,120,248,107,165);

  image(night,280,294,305,159);

  image(monet,1105,265,310,185);
	}

  if (option == 1){

    //image(frame1,564,59,355,483);
  // image(monalisa,604,89,275,423);

  // Get the color of a random pixel.
  monalisa.loadPixels();
  const pixelX = random(windowWidth/2);
  const pixelY = random(windowHeight);
  const pixelColor = monalisa.get(pixelX, pixelY);

  // Paint that pixel with a circle.
  fill(pixelColor);
  ellipse(pixelX, pixelY,8, 8);
}

  if (option == 2){
    /*background(plain);
  image(frame2,267,284,330,180);
image(night,280,294,305,159);*/
fill(0, 10);
  noStroke();
  rect(0, 0, width, height);
  for (let i=0; i<particles.length; i++) {
    particles[i].run();
  }
  }


  if (option == 3){

   background(plain);

 image(frame3,420,59,565,449);
    image(monet,480,88,444,388);

  }
}


function mousePressed() {
  option++;

  if (option > 3) {
    option = 0;
 }
}

class Particle{
  constructor(_loc,_dir,_speed){
    this.loc = _loc;
    this.dir = _dir;
    this.speed = _speed;
  }
  run() {
    this.move();
    this.checkEdges();
    this.update();
  }
  move(){
    let angle=noise(this.loc.x/noiseScale, this.loc.y/noiseScale, frameCount/noiseScale)*TWO_PI*noiseStrength; //0-2PI
    this.dir.x = cos(angle);
    this.dir.y = sin(angle);
    var vel = this.dir.copy();
    var d =1;  
    vel.mult(this.speed*d); 
    this.loc.add(vel); 
  }
  checkEdges(){
    if (this.loc.x<0 || this.loc.x>width || this.loc.y<0 || this.loc.y>height) {    
      this.loc.x = random(width*1.2);
      this.loc.y = random(height);
      
    }
  }
  update(){
    fill(255);
    ellipse(this.loc.x, this.loc.y, this.loc.z);
  
  }
}
