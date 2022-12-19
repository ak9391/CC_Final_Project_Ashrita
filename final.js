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
}

function draw() {
  if (option == 0) {
    image(bgi, 0, 0, 1460, 702);
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
    //image(frame3,420,59,565,449);
    image(monet, 480, 88, 444, 388);
  }

  if (mouseX >= 24 && mouseX <= 233 && mouseY >= 197 && mouseY <= 473) {
    strokeWeight(3);
    noFill();
    rect(24, 197, 208, 276);
  }
}

function mousePressed() {
  if (mouseX >= 24 && mouseX <= 233 && mouseY >= 197 && mouseY <= 473) {
    noStroke();
    fill(255, 200);
    rect(0, 0, 1440, 702);
    option = 1;
  }
  /*if (mouseX >= 258 && mouseX <= 589 && mouseY >= 288 && mouseY <= 449 ){
 	option = 2;
 }
  if (mouseX >= 793 && mouseX <= 1049 && mouseY >= 270 && mouseY <= 434 ){
 	option = 2;
 }
  if (mouseX >= 1089 && mouseX <= 1424 && mouseY >= 209 && mouseY <= 488 ){
 	option = 2;
 }*/
}

function gallary() {
  image(bgi, 0, 0, 1460, 702);
}

function keyPressed() {
  if (keyCode == ESCAPE) {
    option = 0;
  }
}


