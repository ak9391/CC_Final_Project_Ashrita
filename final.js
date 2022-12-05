//final


let option = 0;


function preload(){
	gallery = loadImage('data/artroom.jpg');
  plain = loadImage('data/plain.png');
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

function draw(){


  if (option == 1){

   background(plain);
    
    image(frame1,564,59,355,483);
   image(monalisa,604,89,275,423);
    

  }


  if (option == 2){

   background(plain);

 image(frame2,393,154,653,354);
   image(night,419,174,604,315);

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