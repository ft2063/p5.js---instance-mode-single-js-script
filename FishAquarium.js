//Play at https://editor.p5js.org/ft2063/sketches/HOXbfXrI8

var x = 0;
var targetX = 0;
var y = 0;
var targetY = 0;
var a = 0;
var b = 0;
var c = 0;
var d = 0;
var e = 0;
var f = 0;
  var direction = 1;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  targetX = mouseX;
  targetY = mouseY;
  
 var pX = x;

  x = lerp(x, targetX, 0.07);
  y = lerp(y, targetY, 0.07);
  a = lerp(a, x, 0.05);
  b = lerp(b, y, 0.05);
  c = lerp(c, a, 0.05);
  d = lerp(d, b, 0.05);
  e = lerp(e, c, 0.05);
  f = lerp(f, d, 0.05);
  
  

  background(12,14,80, 80);

  var speedX = mouseX - pmouseX;
 var lerpSpeedX = x - pX;
  var lerpSpeed2 = x - a;
  var lerpSpeed3 = x - c;
  var lerpSpeed4 = x - e;
 
  

  drawFish(targetX, targetY, 100, 50, speedX);
  drawFish(x, y, 50, 80, lerpSpeedX);
  
  drawFish(a, b, 30, 40, lerpSpeed2);
  drawFish(c, d, 60, 20, lerpSpeed3);
   drawFish(e, f, 20, 30, lerpSpeed4);
  
  
  
  
  
}

function drawFish(fishX, fishY, fishLength, fishWidth, speed) {


  if (speed > 0) {
  direction = 1;
  }
  
  if(speed < 0){
  direction = 0;  
  }
  
  if (direction == 1) {
    
  triangle(
    fishX - fishLength / 4,
    fishY,
    fishX - (fishLength * 3) / 4,
    fishY + fishWidth / 2,
    fishX - (fishLength * 3) / 4,
    fishY - fishWidth / 2
  );
  ellipse(fishX, fishY, fishLength, fishWidth);
  ellipse(fishX + fishLength / 4, fishY - fishWidth / 16, 5, 5);
    
  }
  
  if (direction == 0 ) {
  triangle(
    fishX + fishLength / 4,
    fishY,
    fishX + (fishLength * 3) / 4,
    fishY + fishWidth / 2,
    fishX + (fishLength * 3) / 4,
    fishY - fishWidth / 2
  );
  ellipse(fishX, fishY, fishLength, fishWidth);
  ellipse(fishX - fishLength / 4, fishY - fishWidth / 16, 5, 5);
  }
  

 
}
