//final


let gallery;
let plain;
let monalisa;
let night;
let monet;
let welcome;
let bgi;

let option = 0;
//var sound;

var WIDTH;
var HEIGHT;

let img;


function preload(){

//sound = loadSound('data/bgmusic.mp3');
  gallery = loadImage('data/artroom.jpg');
  plain = loadImage('data/plain.png');
  monalisa = loadImage('data/monalisa.png');
  night = loadImage('data/night.png');
  monet = loadImage('data/monet.png');
  welcome = loadImage('data/welcome.png');
  bgi = loadImage('data/bgi.png');

}

function setup(){
	createCanvas(windowWidth,windowHeight);
//sound.play();
push();
imageMode(CENTER);
  monalisa.resize(windowWidth/2,windowHeight);
pop();
  noStroke();

  	push();
	image(bgi,0,0,windowWidth,windowHeight);
	filter(BLUR, 5);
	image(welcome,0,0,windowWidth,windowHeight);
pop();

setTimeout(gallary,4000);

}


function draw(){


if(option == 1){
    //image(frame1,564,59,355,483);
  // image(monalisa,604,89,275,423);

  // Get the color of a random pixel.
  monalisa.loadPixels();
  const pixelX = random(windowWidth/2);
  const pixelY = random(windowHeight);
  const pixelColor = monalisa.get(pixelX, pixelY);

  // Paint that pixel with a circle.
  fill(pixelColor);
  ellipse(pixelX, pixelY,15, 15);
}


  if (option ==2){

    //image(frame1,564,59,355,483);
  // image(monalisa,604,89,275,423);

  // Get the color of a random pixel.
  monalisa.loadPixels();
  const pixelX = random(windowWidth/2);
  const pixelY = random(windowHeight);
  const pixelColor = monalisa.get(pixelX, pixelY);

  // Paint that pixel with a circle.
  fill(pixelColor);
  ellipse(pixelX, pixelY,15, 15);
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
    option = 1;
 }
}

function gallary(){

background(bgi);

}
