//final

let gallery;
let plain;
let monalisa;
let night;
let monet;
let welcome;
let bgi;
let blurr;
let ml;
let option;
let np;
let i;
let lotus;
let pink;


var num = 2000;
var noiseScale=500, noiseStrength=1;
var particles = [num];


let WIDTH = 1120;
let HEIGHT = 630;
let img01, img02;
let CELL = 12;
let counter = 0;
let pg

//var sound;

function preload() {
  //sound = loadSound('data/bgmusic.mp3');
  gallery = loadImage("data/artroom.jpg");
  plain = loadImage("data/plain.png");
  monalisa = loadImage("data/monalisa.png");
  night = loadImage("data/night.png");
  monet = loadImage("data/monet.png");
  welcome = loadImage("data/welcome.png");
  bgi = loadImage("data/bgi.png");
  blurr = loadImage("data/blurr.png");
  ml = loadImage("data/monalisap.png");
  np = loadImage("data/nightp.jpg");
  img = loadImage("data/blue.jpg");
  lotus = loadImage("data/lotus.png");
 pink = loadImage("data/pink.png");
  blue = loadImage("data/blue.jpg");
  black = loadImage("data/black.jpg");
}

function setup() {
  createCanvas(1440, 702);
  //sound.play();
  push();
  ml.resize(670, 702);
  pop();
  noStroke();

  push();
  image(bgi, 0, 0, 1460, 702);
  filter(BLUR, 5);
  image(welcome, 0, 0, 1440, 702);
  pop();

  setTimeout(gallary, 4000);

  noStroke();
  for (let i=0; i<num; i++) {
    //x value start slightly outside the right of canvas, z value how close to viewer
    var loc = createVector(random(width*1.2), random(height), 2);
    var angle = 0; //any value to initialize
    var dir = createVector(cos(angle), sin(angle));
    //var speed = random(0.5,2);
    var speed = random(5,map(mouseX,0,width,5,20));   // faster
    particles[i]= new Particle(loc, dir, speed);



  pg = createGraphics(width, height);
 blue.resize(width, height);
 black.resize(width, height);

}
}

function draw() {


  if (option == 0) {
    image(bgi, 0, 0, 1460, 702);
    if (mouseX >= 24 && mouseX <= 233 && mouseY >= 197 && mouseY <= 473) {
    noStroke();
    fill(255, 50);
    rect(24, 197, 220, 276);
  } if (mouseX >= 258 && mouseX <= 589 && mouseY >= 288 && mouseY <= 449 ){
 	 noStroke();
    fill(255, 50);
    rect(258, 288, 331, 161);
 }
  if (mouseX >= 793 && mouseX <= 1049 && mouseY >= 270 && mouseY <= 434 ){
  	 noStroke();
    fill(255, 50);
    rect(793, 270, 256, 164);
 }
  if (mouseX >= 1089 && mouseX <= 1424 && mouseY >= 209 && mouseY <= 488 ){
  	 noStroke();
    fill(255, 50);
    rect(1089, 209, 335, 279);
 }
  }

  if (option == 1) {
    ml.loadPixels(); // Get the color of a random pixel.
    let pixelX = random(720);
    let pixelY = random(702);
    let pixelColor = ml.get(pixelX, pixelY);

    // Paint that pixel with a circle.
    fill(pixelColor);
    ellipse(pixelX + 380, pixelY, 15, 15);
  }

  if (option == 2) {
  fill(0, 10);
  noStroke();
  rect(0, 0, width, height);
  for (let i=0; i<particles.length; i++) {
    particles[i].run();
  }
}

  if (option == 3){
    image(black, 0, 0)
	pg.clear()
	let noiseSeed = abs(sin(radians(frameCount/10)))
	for(let i = 0; i < width * height / CELL; i ++) {
		let x = int(i / (width / CELL)) * CELL;
		let y = int(i % (width / CELL)) * CELL;
		let v = noise((x+10)*noiseSeed/CELL, (y+10)*noiseSeed/CELL);
		if(v>0.5) continue;
       
		pg.image(blue, x, y, CELL, CELL, x, y, CELL, CELL);
	}
    //tint(255, 100)
	image(pg, 0, 0);
  }

  if (option == 4){
  image(monet,392,86,639,470);
  	frameRate(2);
   image(lotus, random(480,900),random(120,450), 50,50);
   image(pink, random(480,900),random(120,450), 80,60);
   tint(255, random(150,255));
  
  }



}

function mousePressed() {
  if (mouseX >= 24 && mouseX <= 233 && mouseY >= 197 && mouseY <= 473) {
    noStroke();
    fill(255, 200);
    rect(0, 0, 1440, 702);
    option = 1;
  }
  if (mouseX >= 258 && mouseX <= 589 && mouseY >= 288 && mouseY <= 449 ){
 	option = 2;
 }
  if (mouseX >= 793 && mouseX <= 1049 && mouseY >= 270 && mouseY <= 434 ){
  	noStroke();
    fill(255, 200);
    rect(0, 0, 1440, 702);
 	option = 3;
 }
  if (mouseX >= 1089 && mouseX <= 1424 && mouseY >= 209 && mouseY <= 488 ){
  	noStroke();
    fill(255, 200);
    rect(0, 0, 1440, 702);
 	option = 4;
 }
}

function gallary() {
  option = 0;
}

function keyPressed() {
  if (keyCode == ESCAPE) {
    option = 0;
  }
}

class Particle{
  constructor(_loc,_dir,_speed){
    this.loc = _loc;
    this.dir = _dir;
    this.speed = _speed;
    this.pixelColor = np.get(this.pixelX, this.pixelY);
  	// var col;
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
    var d =1;  //direction change 
    vel.mult(this.speed*d); //vel = vel * (speed*d)
    this.loc.add(vel); //loc = loc + vel
  }
  checkEdges(){
    
    if (this.loc.x<0 || this.loc.x>width || this.loc.y<0 || this.loc.y>height) {    
      this.loc.x = random(width*1.2);
      this.loc.y = random(height);
    }
  }
  update(){
    np.loadPixels();
    this.pixelColor = np.get(this.loc.x, this.loc.y);
    fill(this.pixelColor);
    ellipse(this.loc.x*4.5, this.loc.y*4.5, 5);
  }
 } 


 function initNoise(){
  for (let i = 0; i < nb; i ++)
  {
    p[i] = new (random(123), random(123)); 
    speed[i] = new (random(-.02*(i+1), .02*(i+1)), random(-.02*(i+1), .02*(i+1)));
  }
}
