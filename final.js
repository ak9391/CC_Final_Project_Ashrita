//This is a series of events and scenes 
//As the sun sets and the moon raises you fall asleep
//You enter the dream world
//mousepress to switch through scenes 

let set;
let raise;
let sky;
let scene = 1; //size 
let cox = 0;
let coy = 0;
let r = 0;
let y = 0;
let h = 0;
let ih = 900;
let color1;
let color2;
let fluff;
let cmount;
let dmount;
let pole1;
let pole2;
let lantern1;
let lantern2;
let lantern3;
let lantern4;
let lantern5;
let lantern6;
let lantern7;
let lantern8;
let lantern9;
let lantern10;
let fluff2;


function setup() { 
 createCanvas(windowWidth, windowHeight);

 color1= color(18,28,61);
 color2= color(61,88,159);

//objects from various classes 
 set = new Sun;
raise = new Moon;
fluff = new Cloud(0,0);
cmount = new Cliff();
dmount = new Cliff2();
pole1 = new Pole(0,0);
pole2 = new Pole(630,0);
lantern1 = new Lantern(0,0);
lantern2 = new Lantern(50,30);
lantern3 = new Lantern(150,130);
lantern4 = new Lantern(250,70);
lantern5 = new Lantern(325,200);
lantern6 = new Lantern(400,80);
lantern7 = new Lantern(450,150);
lantern8 = new Lantern(550,50);
lantern9 = new Lantern(620,80);
lantern10 = new Lantern(650,0);
fluff2 = new Cloud(950,0);

}


function draw() { 

//sun setting and moon raising
if(scene == 1){

sky= map(y,0, 500, 255,0); //background color changing from blue to black 
background(0,sky/2,sky);

set.displaySun();
raise.displayMoon();

y=y+1;

if(y > 400){
noStroke();
fill(255);
ellipse(random(0,windowWidth),random(0,windowHeight),random(0,5),random(0,5));
ellipse(random(0,windowWidth),random(0,windowHeight),random(0,5),random(0,5));
ellipse(random(0,windowWidth),random(0,windowHeight),8,8);
ellipse(random(0,windowWidth),random(0,windowHeight),10,10); //stars 

}
} //scene 1

//eye lid closing and static dark pattern 
if(scene == 2){ 
background(255);

noStroke();
fill(0);
rect(0,0,windowWidth,h);
h = h+5;

if(h> windowHeight){
 h = windowHeight;
 noStroke();

push();
  for (this.cox =  0;this.cox <= width; this.cox+=10) { 
    for (this.coy = 0 ;this.coy <= height ; this.coy+=10){
pop();
          
          fill(0,255,0, random(100,255));
          rect(this.cox,this.coy,4,4);
          fill(0,0,255, random(100,255));
          rect(this.cox+4,this.coy+2,4,4);
          fill(255,0,0, random(100,255));
          rect(this.cox-4,this.coy-2,4,4);  
        }   
        }
      }

} //scene 2 

//aura
if(scene == 3){

background(0);

noStroke();
fill(145,223,178);
circle(windowWidth/2,windowHeight/2,4000); //green fill 

stroke(145,223,178,200);
strokeWeight(40);
fill(179,212,157,200);
circle(windowWidth/2,windowHeight/2,700+r); //green 

stroke(179,212,157,200);
strokeWeight(20);
fill(219,190,131,200);
circle(windowWidth/2,windowHeight/2,600+r); //green dull

stroke(219,190,131,200);
strokeWeight(20);
fill(241,154,134,200);
circle(windowWidth/2,windowHeight/2,500+r); //skin

stroke(241,154,134,70);
strokeWeight(20);
fill(243,132,138,200);
circle(windowWidth/2,windowHeight/2,400+r); //peach 

stroke(243,108,141,200);
strokeWeight(4);
fill(243,108,141);
circle(windowWidth/2,windowHeight/2,300+r); //pink center 

r = r+2;

if(r>800){
 r = 0;
}

} //scene 3

if(scene == 4){


  for(let y=0; y<height; y++){
    n = map(y,0,height,0,1);
    let sky = lerpColor(color1, color2, n); //lerpColor blends two colors 
    stroke(sky);
    line(0,y,width, y);
  }


noStroke();
fill(255);
ellipse(random(0,windowWidth),random(0,windowHeight),5,5);
ellipse(random(0,windowWidth),random(0,windowHeight),3,3);
ellipse(random(0,windowWidth),random(0,windowHeight),7,7);

    fluff.moveCloud();
    fluff2.moveCloud();
    cmount.displayCliff();
    dmount.displayCliff2();
    pole1.displayPole();
    pole2.displayPole();

//moon glow
noStroke();
fill(255,100);
circle(899.5,175.5,200);
fill(255,80);
circle(899.5,175.5,230);
fill(255,60);
circle(899.5,175.5,260);

// moon and its craters    
noStroke();
fill(255);
circle(899.5,175.5,164);

noStroke();
fill(227,228,228);
ellipse(904.5,106,30,11);
circle(858.5,141.5,18);
circle(853,165,7);
circle(880.5,149.5,8);
ellipse(829.5,199.5,10.44,20.95);
circle(880.5,229.5,4);
circle(896,225,7);
circle(899,208,3);
circle(919.5,236.5,28);
circle(952,189,37);
circle(940.5,150.5,10);

//bridge
stroke(28,14,37);
strokeWeight(4);
noFill();
beginShape();
curveVertex(353.5,309.5);
curveVertex(394.95,333.78);
curveVertex(429.17,347.63);
curveVertex(483.64,366.33);
curveVertex(542.3,381.57);
curveVertex(622.61,395.43);
curveVertex(703.62,402.36);
curveVertex(795.8,399.58);
curveVertex(893.56,374.65);
curveVertex(949.43,344.86);
curveVertex(1024.5,280.5);
endShape();

stroke(28,14,37);
strokeWeight(7);
noFill();
beginShape();
curveVertex(345.5,366.5);
curveVertex(419.93,412.21);
curveVertex(466.02,432.99);
curveVertex(527.48,454.46);
curveVertex(593.82,466.93);
curveVertex(666.45,476.63);
curveVertex(731.39,477.32);
curveVertex(802.62,470.4);
curveVertex(888.52,446.15);
curveVertex(949.27,415.67);
curveVertex(1032.5,344.5);
endShape();


stroke(28,14,37);
strokeWeight(4);
line(397.5,335,397.5,399);
line(431.5,349,431.5,418.5);
line(461.5,359,462.5,432);
line(502.5,372,502.5,447);
line(553.5,384,554.5,460);
line(592.5,391,593.5,467);
line(630.5,397,630.5,473);
line(670.5,401,670.5,477);
line(713.5,403,713.5,477.5);
line(745.5,403,745.5,477);
line(784.5,401,784.5,473);
line(827.5,394,827.5,465);
line(869.5,383,869.5,453);
line(905.5,370,905.5,439);
line(944.5,348,944.5,419);
line(981.93,317.56,982.5,388);
line(670.5,400.5,670.74,529.92);

//lanterns
 lantern1.displayLantern();
    lantern2.displayLantern();
    lantern3.displayLantern();
    lantern4.displayLantern();
    lantern5.displayLantern();
    lantern6.displayLantern();
    lantern7.displayLantern();
    lantern8.displayLantern();
    lantern9.displayLantern();
    lantern10.displayLantern();

} //scene 4

} //draw loop

class Sun{
 constructor(){
    this.x = 100;
 }

displaySun(){

stroke(252,182,40,100);
fill(252,182,40,100);
circle(this.x, y ,180); //yellow

stroke(230,116,28,110);
fill(230,116,28,110);
circle(this.x,y,140);

stroke(230,116,28,120);
fill(230,116,28,120);
circle(this.x,y,100); //orange

stroke(230,65,10,130);
fill(230,65,10,130);
circle(this.x,y,60);

stroke(189,31,17,140);
fill(189,31,17,140);
circle(this.x,y,20); //red

y= y+1;

if(this.y > windowHeight){
 this.y = windowHeight;
 }

}
}

class Moon{
    constructor(){
    this.posx = windowWidth-100;
 }

displayMoon(){

stroke(255,50);
fill(255,50);
circle(this.posx, height - y,180);

stroke(255,60);
fill(255,60);
circle(this.posx, height - y,140);

stroke(255,70);
fill(255,70);
circle(this.posx, height - y,100);

stroke(255,80);
fill(255,80);
circle(this.posx, height - y,60);

stroke(255,90);
fill(255,90);
circle(this.posx, height - y,20);

y=y+1;

if(y > windowHeight){
 y = windowHeight;
}

}
}

class Cloud{

constructor(x1,y1){
this.x1 = x1;
this.y1 = y1;
}

moveCloud(){
stroke(125,167,213);
strokeWeight(5);
noFill();
beginShape();
curveVertex(this.x1+37.81,this.y1+299.26);
curveVertex(this.x1+41.39,this.y1+292.8);
curveVertex(this.x1+51.5,this.y1+282.5);
curveVertex(this.x1+66.5,this.y1+277.5);
curveVertex(this.x1+76.01,this.y1+278.42);

curveVertex(this.x1+76.01,this.y1+278.42);
curveVertex(this.x1+71.5,this.y1+269.5);
curveVertex(this.x1+72.5,this.y1+258.5);
curveVertex(this.x1+81.5,this.y1+250.5);
curveVertex(this.x1+98.5,this.y1+249.5);
curveVertex(this.x1+110.73,this.y1+255.85);

curveVertex(this.x1+110.73,this.y1+255.85);
curveVertex(this.x1+109.5,this.y1+248.5);
curveVertex(this.x1+113.5,this.y1+241.5);
curveVertex(this.x1+122.5,this.y1+238.5);
curveVertex(this.x1+130.7,this.y1+241.96);

curveVertex(this.x1+130.7,this.y1+241.96);
curveVertex(this.x1+125.06,this.y1+235.23);
curveVertex(this.x1+123.5,this.y1+228.5);
curveVertex(this.x1+126.5,this.y1+220.5);
curveVertex(this.x1+129.83,this.y1+216.78);

curveVertex(this.x1+129.83,this.y1+216.78);
curveVertex(this.x1+116.5,this.y1+208.5);
curveVertex(this.x1+108.5,this.y1+194.5);
curveVertex(this.x1+107.5,this.y1+178.5);
curveVertex(this.x1+113.12,this.y1+164.67);
curveVertex(this.x1+123.76,this.y1+154.27);
curveVertex(this.x1+140.11,this.y1+148.42);
curveVertex(this.x1+153.27,this.y1+149.06);

curveVertex(this.x1+153.27,this.y1+149.06);
curveVertex(this.x1+152.5,this.y1+143.5);
curveVertex(this.x1+154.14,this.y1+138.65);
curveVertex(this.x1+158.22,this.y1+134.87);
curveVertex(this.x1+161.95,this.y1+133.44);

endShape();




beginShape();
curveVertex(this.x1+185.39,this.y1+123.89);
curveVertex(this.x1+177.1,this.y1+123.06);
curveVertex(this.x1+170.64,this.y1+117.81);
curveVertex(this.x1+169.62,this.y1+107.03);
curveVertex(this.x1+176.71,this.y1+97.84);
curveVertex(this.x1+188.96,this.y1+96.72);
curveVertex(this.x1+200.15,this.y1+103.92);
curveVertex(this.x1+204.82,this.y1+113.15);
curveVertex(this.x1+204.49,this.y1+123.89);
curveVertex(this.x1+198.49,this.y1+132.92);
curveVertex(this.x1+187.13,this.y1+138.65);
curveVertex(this.x1+173.87,this.y1+138.85);
curveVertex(this.x1+161.95,this.y1+133.44);
curveVertex(this.x1+150.5,this.y1+120.5);
curveVertex(this.x1+144.59,this.y1+105.66);
curveVertex(this.x1+143.17,this.y1+94.43);
curveVertex(this.x1+146.4,this.y1+75.2);
curveVertex(this.x1+155.88,this.y1+57.91);
curveVertex(this.x1+167.34,this.y1+47.79);
curveVertex(this.x1+188.15,this.y1+39.14);
curveVertex(this.x1+208.84,this.y1+37.07);
curveVertex(this.x1+236.5,this.y1+42.5);
curveVertex(this.x1+257.45,this.y1+54.44);

curveVertex(this.x1+257.45,this.y1+54.44);
curveVertex(this.x1+268.57,this.y1+38.17);
curveVertex(this.x1+286.97,this.y1+25.79);
curveVertex(this.x1+313.5,this.y1+22.5);
curveVertex(this.x1+335.59,this.y1+30.13);
curveVertex(this.x1+351.41,this.y1+46.97);
curveVertex(this.x1+359.03,this.y1+69.19);

curveVertex(this.x1+359.03,this.y1+69.19);
curveVertex(this.x1+377.09,this.y1+65.74);
curveVertex(this.x1+397.23,this.y1+67.46);
curveVertex(this.x1+418.18,this.y1+75.6);
curveVertex(this.x1+433.69,this.y1+90.03);
curveVertex(this.x1+442.5,this.y1+111.5);
curveVertex(this.x1+442.5,this.y1+132.5);
curveVertex(this.x1+437.16,this.y1+152.54);

curveVertex(this.x1+437.16,this.y1+152.54);
curveVertex(this.x1+453.45,this.y1+152.32);
curveVertex(this.x1+467.55,this.y1+155.14);
curveVertex(this.x1+485.28,this.y1+162.74);
curveVertex(this.x1+496.2,this.y1+173.37);
curveVertex(this.x1+501.6,this.y1+186.43);
curveVertex(this.x1+502.27,this.y1+198.55);

curveVertex(this.x1+502.27,this.y1+198.55);
curveVertex(this.x1+523.5,this.y1+197.5);
curveVertex(this.x1+546.5,this.y1+210.5);
curveVertex(this.x1+558.7,this.y1+229.8);
curveVertex(this.x1+560.02,this.y1+246.98);
curveVertex(this.x1+551.34,this.y1+265.21);
curveVertex(this.x1+530.51,this.y1+275.63);
curveVertex(this.x1+511.41,this.y1+263.48);
curveVertex(this.x1+515.75,this.y1+244.38);
endShape();

beginShape();


curveVertex(this.x1+37.81,this.y1+299.26);
curveVertex(this.x1+48.5,this.y1+302.5);
curveVertex(this.x1+63.5,this.y1+302.5);
curveVertex(this.x1+76.5,this.y1+299.5);
curveVertex(this.x1+86.42,this.y1+296.65);

curveVertex(this.x1+86.42,this.y1+296.65);
curveVertex(this.x1+101.5,this.y1+299.5);
curveVertex(this.x1+119.5,this.y1+299.5);
curveVertex(this.x1+134.17,this.y1+294.92);

curveVertex(this.x1+134.17,this.y1+294.92);
curveVertex(this.x1+153.86,this.y1+296.94);
curveVertex(this.x1+174.98,this.y1+295.78);
curveVertex(this.x1+192.95,this.y1+292.03);
curveVertex(this.x1+206.23,this.y1+285.37);
curveVertex(this.x1+217.52,this.y1+274.95);

curveVertex(this.x1+217.52,this.y1+274.95);
curveVertex(this.x1+225.5,this.y1+280.5);
curveVertex(this.x1+234.01,this.y1+286.23);

curveVertex(this.x1+234.01,this.y1+286.23);
curveVertex(this.x1+241.17,this.y1+298.39);
curveVertex(this.x1+253.98,this.y1+310.54);
curveVertex(this.x1+267.92,this.y1+317.23);
curveVertex(this.x1+284.5,this.y1+321.5);
curveVertex(this.x1+303.62,this.y1+321.44);
curveVertex(this.x1+321.7,this.y1+315.75);
curveVertex(this.x1+332.98,this.y1+306.28);
curveVertex(this.x1+339.93,this.y1+295.78);

curveVertex(this.x1+339.93,this.y1+295.78);
curveVertex(this.x1+351.6,this.y1+303.84);
curveVertex(this.x1+365.97,this.y1+308.81);
curveVertex(this.x1+384.12,this.y1+309.62);
curveVertex(this.x1+398.96,this.y1+303.6);
curveVertex(this.x1+408.51,this.y1+292.31);

curveVertex(this.x1+408.51,this.y1+292.31);
curveVertex(this.x1+426.74,this.y1+296.65);
curveVertex(this.x1+445.84,this.y1+290.57);
curveVertex(this.x1+458.86,this.y1+278.42);

curveVertex(this.x1+458.86,this.y1+278.42);
curveVertex(this.x1+477.96,this.y1+285.37);
curveVertex(this.x1+495.95,this.y1+289.06);
curveVertex(this.x1+513.56,this.y1+288.84);
curveVertex(this.x1+532.5,this.y1+283.5);
curveVertex(this.x1+544.81,this.y1+271.47);

curveVertex(this.x1+544.81,this.y1+271.47);
curveVertex(this.x1+558.92,this.y1+273.01);
curveVertex(this.x1+575.5,this.y1+272.5);
curveVertex(this.x1+592.73,this.y1+267.74);
curveVertex(this.x1+609.06,this.y1+260.74);
curveVertex(this.x1+625.55,this.y1+248.03);

curveVertex(this.x1+625.55,this.y1+248.03);
curveVertex(this.x1+635.4,this.y1+251.64);
curveVertex(this.x1+645.52,this.y1+248.9);
curveVertex(this.x1+647.28,this.y1+240.22);
curveVertex(this.x1+641.29,this.y1+238.18);
curveVertex(this.x1+632.5,this.y1+241.09);

curveVertex(this.x1+632.5,this.y1+241.09);
curveVertex(this.x1+634.92,this.y1+234.41);
curveVertex(this.x1+622.95,this.y1+221.99);
curveVertex(this.x1+611.5,this.y1+224.5);
curveVertex(this.x1+603.85,this.y1+229.8);

curveVertex(this.x1+603.85,this.y1+229.8);
curveVertex(this.x1+593.76,this.y1+224.36);
curveVertex(this.x1+579.54,this.y1+221.99);
curveVertex(this.x1+568.26,this.y1+224.38);
curveVertex(this.x1+558.7,this.y1+229.8);
endShape();


beginShape();


curveVertex(this.x1+246.17,this.y1+227.2);
curveVertex(this.x1+228.5,this.y1+213.5);
curveVertex(this.x1+221.27,this.y1+196.74);
curveVertex(this.x1+220.99,this.y1+182.05);
curveVertex(this.x1+228.44,this.y1+163.53);
curveVertex(this.x1+240.09,this.y1+150.8);
curveVertex(this.x1+258.88,this.y1+141.57);
curveVertex(this.x1+277.42,this.y1+139.51);
curveVertex(this.x1+297,this.y1+142.16);
curveVertex(this.x1+310.41,this.y1+150.8);
curveVertex(this.x1+318.4,this.y1+168.76);
curveVertex(this.x1+313.88,this.y1+185.53);
curveVertex(this.x1+303.01,this.y1+192);
curveVertex(this.x1+288.71,this.y1+190.74);
curveVertex(this.x1+279.39,this.y1+183.2);
curveVertex(this.x1+276.55,this.y1+171.64);
curveVertex(this.x1+288.71,this.y1+162.09);
curveVertex(this.x1+298.49,this.y1+164.61);
curveVertex(this.x1+303.46,this.y1+171.64);
curveVertex(this.x1+295.65,this.y1+176.85);

endShape();
}

}

class Cliff{

constructor(){

}

displayCliff(){

stroke(28,14,37);
fill(28,14,37);
beginShape();
vertex(278.5,699.5);
vertex(0,700);
vertex(0,418.5);
vertex(44.06,408.5);
vertex(75.63,408.5);
vertex(96.18,398.08);
vertex(134.95,398.08);
vertex(189.99,388.4);
vertex(228.98,388.4);
vertex(265.18,375);
vertex(304.21,375);
vertex(346.34,382.45);
vertex(363.52,375);
vertex(383.56,389.89);
vertex(383.56,425.69);
vertex(391.01,442.75);
vertex(378.35,463.6);
vertex(341.87,514.22);
vertex(323.26,528.37);
vertex(311.34,561.87);
vertex(309.85,577.51);
vertex(274.12,620.69);
vertex(266.67,637.07);
vertex(262.21,658.66);
vertex(263.69,690.67);
vertex(278.5,699.5);
endShape(CLOSE);
}

}

class Cliff2{
constructor(){

}

displayCliff2(){

stroke(28,14,37);
fill(28,14,37);
beginShape();
vertex(1440,700);
vertex(1138.5,700);
vertex(1139.32,671.71);
vertex(1134.83,652.55);
vertex(1134.83,622.56);
vertex(1130.6,608.28);
vertex(1112.36,578.95);
vertex(1090.08,557.28);
vertex(1067.17,526.62);
vertex(1061.62,506.8);
vertex(1045.33,489.36);
vertex(1021.19,481.43);
vertex(1004.54,457.6);
vertex(989.48,440.21);
vertex(980.76,420.39);
vertex(976,392.64);
vertex(983.93,379.97);
vertex(987.44,366.47);
vertex(1010.38,359.34);
vertex(1033.31,366.47);
vertex(1045.33,359.34);
vertex(1064.19,359.34);
vertex(1083.82,359.34);
vertex(1127.43,364.1);
vertex(1211.5,371.94);
vertex(1286.48,373.61);
vertex(1350.2,373.61);
vertex(1440,370.5);
vertex(1440,700);
endShape(CLOSE);

}

}

class Pole{

constructor(x2,y2){
this.x2 = x2;
this.y2 = y2;
}

displayPole(){

stroke(28,14,37);
fill(28,14,37);
beginShape();
vertex(this.x2+341.52,this.y2+391.68);
vertex(this.x2+341.52,this.y2+386.84);
vertex(this.x2+344.07,this.y2+385.99);
vertex(this.x2+344.07,this.y2+383.63);
vertex(this.x2+348.36,this.y2+383.63);
vertex(this.x2+348.36,this.y2+323.4);
vertex(this.x2+343.15,this.y2+323.4);
vertex(this.x2+344.94,this.y2+318.25);
vertex(this.x2+349.21,this.y2+318.25);
vertex(this.x2+349.21,this.y2+313.59);
vertex(this.x2+353.65,this.y2+313.59);
vertex(this.x2+353.65,this.y2+309);
vertex(this.x2+361.73,this.y2+309);
vertex(this.x2+361.95,this.y2+313.02);
vertex(this.x2+367.06,this.y2+313.02);
vertex(this.x2+367.06,this.y2+317.51);
vertex(this.x2+370.89,this.y2+317.7);
vertex(this.x2+374.08,this.y2+322.39);
vertex(this.x2+369.61,this.y2+322.39);
vertex(this.x2+369.61,this.y2+383.98);
vertex(this.x2+373.45,this.y2+383.98);
vertex(this.x2+373.45,this.y2+386.66);
vertex(this.x2+376,this.y2+387.33);
vertex(this.x2+376,this.y2+391.01);
vertex(this.x2+341.52,this.y2+391.68);


endShape(CLOSE);



}


}


class Lantern{

constructor(x3,y3){
this.x3 = x3;
this.y3 = y3;
}

displayLantern(){


noStroke();
fill(119,48,47);
  beginShape();

vertex(this.x3+339.91,this.y3+325.66);
vertex(this.x3+347.42,this.y3+321.28);
vertex(this.x3+347.42,this.y3+318.15);
vertex(this.x3+349.92,this.y3+318.15);
vertex(this.x3+349.82,this.y3+321.15);
vertex(this.x3+357,this.y3+325.66);
vertex(this.x3+339.91,this.y3+325.66);


  endShape(CLOSE);


noStroke();
fill(241,204,140);
  beginShape();

vertex(this.x3+339.91,this.y3+325.66);
vertex(this.x3+339.91,this.y3+345.99);
vertex(this.x3+357,this.y3+345.99);
vertex(this.x3+357,this.y3+325.66);
vertex(this.x3+339.91,this.y3+325.66);


  endShape(CLOSE);

  noStroke();
fill(119,48,47);
  beginShape();

vertex(this.x3+339.91,this.y3+345.99);
vertex(this.x3+339.91,this.y3+347.59);
vertex(this.x3+344.92,this.y3+347.55);
vertex(this.x3+344.92,this.y3+350.68);
vertex(this.x3+352.2,this.y3+350.68);
vertex(this.x3+352.2,this.y3+347.72);
vertex(this.x3+357,this.y3+347.7);
vertex(this.x3+357,this.y3+345.99);
vertex(this.x3+339.91,this.y3+345.99);


  endShape(CLOSE);

stroke(119,48,47);
strokeWeight(2);
noFill();
  line(this.x3+345.54,this.y3+345.99,this.x3+345.54,this.y3+325.97);
 line(this.x3+351.8,this.y3+345.99,this.x3+351.8,this.y3+325.97);


stroke(241,204,140,90);
strokeWeight(5);
fill(241,204,140,150);
circle(this.x3+348,this.y3+337,30);

}
}

function mousePressed() {
 scene++;

  if (scene > 4) {
    scene = 1;
  }
}



