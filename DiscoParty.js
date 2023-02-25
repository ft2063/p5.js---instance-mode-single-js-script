//Play at https://editor.p5js.org/ft2063/sketches/fBAp6zwzD

var y = 0;
var x = 0;
r = 0;
g = 0;
b = 0;

var speed=0;


function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0,40);
  fill(r,g,b);
  for (var x =0; x<speed; x++)
  ellipse(random(windowWidth),random(windowHeight),random(80));

  speed +=1;
  
  if(speed == 30)speed = 0;
  r = random(255);
  g = random(255);
  b = random(255);
  
}
