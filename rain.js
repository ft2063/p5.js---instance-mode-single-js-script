// Play at https://editor.p5js.org/ft2063/sketches/YiGv9pIPi

var sky = 100;
y=sky;
var ySpeed = 50;



function setup() {
  createCanvas(windowWidth, windowHeight);
  
}

function draw() {
  background(255,25);
  fill(random(160,190),random(205,230),random(200, 255));
  c1 = color(255);
  c2 = color(0);
  
  for(let y=0; y<sky; y++){
    n = map(y,0,sky,1,0);
    let newc = lerpColor(c1,c2,n);
    stroke(newc);
    line(0,y,width, y);
  }
  ellipse(random(windowWidth),y,20);
  
  ellipse(random(windowWidth),y-10,20);
    ellipse(random(windowWidth),y-10,20);
    ellipse(random(windowWidth),y-30,20);
    ellipse(random(windowWidth),y-50,20);
  ellipse(random(windowWidth),y-15,20);
  ellipse(random(windowWidth),y-20,20);
  ellipse(random(windowWidth),y-25,20);
  ellipse(random(windowWidth),y-30,20);
  ellipse(random(windowWidth),y-40,20);
  
  ellipse(random(windowWidth),y-50,20);
  ellipse(random(windowWidth),y,20);
  ellipse(random(windowWidth),y,20);
   ellipse(random(windowWidth),y,20);
  ellipse(random(windowWidth),y,20);
  ellipse(random(windowWidth),y,20);  ellipse(random(windowWidth),y,20);
  
  print(y);
  y+= ySpeed;
  if (y == 1300)y=sky;

  
}
