//final

function preload(){
	gallery = loadImage('data/artroom.jpg');
  frame1 = loadImage('data/frame1.png');
  frame2 = loadImage('data/frame2.png');
  frame3 = loadImage('data/frame3.png');
  monalisa = loadImage('data/monalisa.jpg');
  night = loadImage('data/night.jpg');
  monet = loadImage('data/monet.jpg');
}

function setup(){
	createCanvas(windowWidth,windowHeight);
	background(gallery);

  image(frame1,95,225,156,212);

  image(frame2,267,284,330,180);
  
  image(frame3,1061,250,400,220);

  image(monalisa,120,248,107,165);

  image(night,280,294,305,159);

  image(monet,1105,265,310,185);

}