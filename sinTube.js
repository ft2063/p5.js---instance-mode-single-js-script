// Play at https://editor.p5js.org/ft2063/sketches/OGZH8r9zh

let y;
function setup() {
  createCanvas(windowWidth, windowHeight);
    background(220);
  y = height/2;
  
}

function draw() {
  background(255,255,255,10)
  
  y = map(mouseY, 0,windowWidth,-PI*2, PI*2);
  
  y = sin(y)*200;
  
  rect(width/5,mouseY , windowWidth/1.8 , 20+abs(y), abs(y));
  
  fill(y+ y, y, 255-y*2)
  
  
}
