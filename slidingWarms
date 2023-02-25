// Play at https://editor.p5js.org/ft2063/sketches/ojQO1xRo8


let xCoords = []
let yCoords = []
let a = []
let b = []
let x = 0
let y = 0

let num = 40;

function setup() {
  createCanvas(windowWidth, windowHeight);
  
  for(var i = 0; i<num; i++){
    xCoords[i] = 0;
    yCoords[i] = 0;
    a[i] = 0;
    b[i] = 0;
    
  }
 
  
}

function draw() {
  background(0, 20);
  
  xCoords[num - 1] = mouseX;
  yCoords[num - 1] = mouseY;
  
  for(var i = 0; i<num; i++){
    
    xCoords[i] = xCoords[i+1];
    yCoords[i] = yCoords[i+1];
    
    
    var size = sin(map(i, 0, num, 0, PI ))
    
    
    rect(xCoords[i], yCoords[i], 100*size, 20*size);
    
     a[i] = lerp(a[i], xCoords[i], 0.05);
     b[i] = lerp(b[i], yCoords[i], 0.05);
    
    
    rect(a[i], b[i], 50*size, 10*size);
    
    
  }
  
  
}
