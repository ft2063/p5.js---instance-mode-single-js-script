//Play at https://editor.p5js.org/ft2063/full/arNcp_o4X


let numdogs = 1;
let dogs = [];
let body;
let counter = 0;



class Dog {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.speedX = random(-4,4);
    this.speedY = random(-3,3);

    if (this.speedX < 0) {
      this.direction = -1;
    }
    else {
      this.direction = 1;
    }
  }

  update() {
    this.x += this.speedX;
    if (this.x < 0 || this.x > width) {
      this.speedX *= -1;
      this.direction *= -1;
    }
    this.y += this.speedY;
    if (this.y < 0 || this.y > height) {
      this.speedY *= -1;
    }
  }

  display() {
    push();
    translate(this.x, this.y);
    scale(this.direction, 1);
    scale(counter);
    imageMode(CENTER);        // way it's moving
    image(body, 2,3);
    pop();
  }
}

function preload() {
  body = loadImage('dog.png');
}


function setup() {
  createCanvas(windowWidth, windowHeight);

  for (let i=0; i<numdogs; i++) {
    let x = random(width);
    let y = random(height);
    let r = new Dog(x, y);
    dogs.push(r);
    
  }
}


function draw() {
  background(255, 190, 200);
  counter+=0.001;

  for (let i=0; i<dogs.length; i++) {
    let r = dogs[i];
    r.update();
  
    r.display();
  }
  if (random(100) < 1) {
    let r = new Dog(width/2, height/2);
    scale(counter)
    dogs.push(r);
  }
}
