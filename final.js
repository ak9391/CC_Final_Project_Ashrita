//final
//press any key to go back to the gallary

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
let blue;

var num = 2000;
var noiseScale = 500,
  noiseStrength = 1;
var particles = [num];

let WIDTH = 1120;
let HEIGHT = 630;
let img01, img02;
let CELL = 12;
let counter = 0;
let pg;

var sound; // declaring variables

function preload() {
  sound = loadSound("data/sound1.mp4");
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
  black = loadImage("data/black.jpg"); // preloading images and sound
}

function setup() {
  createCanvas(1440, 702);

  getAudioContext().suspend(); //the audio doesnt autoplay unless mousepressed
  sound.play(); // plays background music
  sound.loop(); // loops the sound
  push();
  ml.resize(670, 702);
  pop(); //push and pop saves current progress and restors the previous work respectively
  noStroke();

  push();
  image(bgi, 0, 0, 1460, 702);
  filter(BLUR, 5);
  image(welcome, 0, 0, 1440, 702);
  pop();

  setTimeout(gallary, 5000); //setTimeout is used to to exicute certain code after soome time, two parameters function and time in milliseconds

  noStroke();
  for (let i = 0; i < num; i++) {
    //x value start slightly outside the right of canvas, z value how close to viewer
    var loc = createVector(random(width), random(height), 5);
    var angle = 0; //any value to initialize
    var dir = createVector(cos(angle), sin(angle)); //creating new vector and giving the direction
    var speed = random(5, map(mouseX, 0, width, 5, 20)); // distance
    particles[i] = new Particle(loc, dir, speed);
  }

  pg = createGraphics(width, height);
  blue.resize(width, height);
  black.resize(width, height); //resizing the image
}

function draw() {
  if (option == 0) {
    image(bgi, 0, 0, 1460, 702);
    if (mouseX >= 24 && mouseX <= 233 && mouseY >= 197 && mouseY <= 473) {
      noStroke();
      fill(255, 50);
      rect(24, 197, 220, 276);
    }
    if (mouseX >= 258 && mouseX <= 589 && mouseY >= 288 && mouseY <= 449) {
      noStroke();
      fill(255, 50);
      rect(258, 288, 331, 161);
    }
    if (mouseX >= 793 && mouseX <= 1049 && mouseY >= 270 && mouseY <= 434) {
      noStroke();
      fill(255, 50);
      rect(793, 270, 256, 164);
    }
    if (mouseX >= 1089 && mouseX <= 1424 && mouseY >= 209 && mouseY <= 488) {
      noStroke();
      fill(255, 50);
      rect(1089, 209, 335, 279); // mouse position at certain coordinates highlights the painting
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
    rect(0, 0, width, height); //backgroung
    for (let i = 0; i < particles.length; i++) {
      particles[i].run(); // reference from 'https://editor.p5js.org/ada10086/sketches/r1gmVaE07' I used the flow field of the particles and then added an Image
    }
  }

  if (option == 3) {
    image(black, 0, 0);
    pg.clear(); //Clears the pixels within a buffer, only clears the canvas.
    let noiseSeed = abs(sin(radians(frameCount / 10)));
    for (let i = 0; i < (width * height) / CELL; i++) {
      let x = (i / (width / CELL)) * CELL;
      let y = (i % (width / CELL)) * CELL;
      let v = noise(
        ((x + 10) * noiseSeed) / CELL,
        ((y + 10) * noiseSeed) / CELL
      ); //size of the pixel blobs moving
      if (v > 0.5) continue;

      pg.image(blue, x, y, CELL, CELL, x, y, CELL, CELL); //image pixels
    }
    image(pg, 0, 0);
  }

  if (option == 4) {
    image(monet, 392, 86, 639, 470);
    frameRate(2);
    image(lotus, random(480, 900), random(120, 450), 50, 50);
    image(pink, random(480, 900), random(120, 450), 80, 60);
    tint(255, random(150, 255)); //random positions of pink and purple lotus
  }
}

function mousePressed() {
  userStartAudio(); //starts audio when pressed

  if (mouseX >= 24 && mouseX <= 233 && mouseY >= 197 && mouseY <= 473) {
    noStroke();
    fill(255, 200);
    rect(0, 0, 1440, 702);
    option = 1; //when pressed on monalisa
  }
  if (mouseX >= 258 && mouseX <= 589 && mouseY >= 288 && mouseY <= 449) {
    option = 2; //when pressed on starry night
  }
  if (mouseX >= 793 && mouseX <= 1049 && mouseY >= 270 && mouseY <= 434) {
    noStroke();
    fill(255, 200);
    rect(0, 0, 1440, 702);
    option = 3; //when pressed on fluid art
  }
  if (mouseX >= 1089 && mouseX <= 1424 && mouseY >= 209 && mouseY <= 488) {
    noStroke();
    fill(255, 200);
    rect(0, 0, 1440, 702);
    option = 4; //when pressed on water lillies
    //when mouse is pressed on the particular paintings, the scene changes
  }
}

function gallary() {
  option = 0;
}

function keyPressed() {
  option = 0; //press any key to go back to the gallary
}

class Particle {
  constructor(_loc, _dir, _speed) {
    this.loc = _loc;
    this.dir = _dir; //position of pixels
    this.speed = _speed;
    this.pixelColor = np.get(this.pixelX, this.pixelY);
  }
  run() {
    this.move();
    this.checkEdges();
    this.update();
  }
  move() {
    let angle =
      noise(
        this.loc.x / noiseScale,
        this.loc.y / noiseScale,
        frameCount / noiseScale
      ) *
      TWO_PI *
      noiseStrength; //0-2PI
    this.dir.x = cos(angle);
    this.dir.y = sin(angle);
    var vel = this.dir.copy();
    var d = 1; //direction change
    vel.mult(this.speed * d); //vel = vel * (speed*d)
    this.loc.add(vel); //loc = loc + vel
  }
  checkEdges() {
    if (
      this.loc.x < 0 ||
      this.loc.x > width ||
      this.loc.y < 0 ||
      this.loc.y > height
    ) {
      this.loc.x = random(width * 1.2);
      this.loc.y = random(height); //borders of the moving particles
    }
  }
  update() {
    np.loadPixels();
    this.pixelColor = np.get(this.loc.x, this.loc.y);
    fill(this.pixelColor);
    ellipse(this.loc.x * 4.5, this.loc.y * 4.5, 5); //updates each color of the pixelof the image
  }
}
function initNoise() {
  for (let i = 0; i < nb; i++) {
    p[i] = new (random(123), random(123))();
    speed[i] = new (random(-0.02 * (i + 1), 0.02 * (i + 1)),
    random(-0.02 * (i + 1), 0.02 * (i + 1)))();
  }
}
