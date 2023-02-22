
// Sketch One
var a = function( p ) { 
  var i= 0;
  p.setup = function() {
    p.createCanvas(p.select('#c2').width, p.select('#c2').height);
    p.angleMode(p.DEGREES);
  };

  p.draw = function() {
    p.background(14,14,104, 5);
  
    p.push();
    p.strokeWeight(1)
    p.translate(p.width/2, p.height/2)
    
    p.fill(255,254,2)
    p.ellipse(0,0,70)
    
    //mercury
    p.fill(231, 178, 0)
    p.rotate(i*32)
    
    p.ellipse(50,0,5)
    
    //venus
    p.fill(205, 96, 0)
    p.rotate(-i*5)
    p.ellipse(-75,0,10)
    
    //earth
    p.fill(71,139,204)
    p.rotate(-i*20)
    p.ellipse(100,0,7)
    
    //mars
    p.fill(205, 96, 5)
    p.rotate(i*30)
    p.ellipse(-125,0,20)
    
    //jupiter
    p.fill(255, 189, 41)
    p.rotate(i)
    p.ellipse(170,0,45)
    
    //saturnus
    p.fill(255,217,170)
    p.rotate(-i*43)
    p.ellipse(-220,0,40)
    
    //uranus
    p.fill(153, 207, 235)
    p.rotate(i*15)
    p.ellipse(260,0,15)
    
    //neptune
    p.fill(2,113,169)
    p.rotate(i*50)
    p.ellipse(-300,0,15)
    
    
    p.pop();
    i=i+0.005;

    };
};
var myp5 = new p5(a, 'c2');


// Sketch Two
var b = function( p ) { 
    p.setup = function() {
    p.createCanvas(700, 500);
    p.angleMode(p.DEGREES)
    p.rectMode(p.CENTER)
  };

  p.draw = function() {
    p.background(10,20,30)
    p.noFill()
    p.translate(p.width/2, p.height/2)
    
    for (var i =0; i<200; i++){
      p.push()
      
      p.rotate(p.sin(p.frameCount+i)*100)
      
      var r = p.map(p.sin(p.frameCount), -1, 1, 50, 255)
      var b = p.map(p.sin(p.frameCount/4), -1, 1, 50, 255)
      p.stroke(r,p.random(200,250),b)
      p.rect(0,0,400-i*3,600-i*3, 200-i)
      p.pop()
      
    }

  };
};
var myp5 = new p5(b, 'c3');


// // Sketch Three
var c = function( p ) { // p could be any variable name
  var rotation = 0;
  var len = 100;
  p.setup = function() {
    p.createCanvas(500, 400);
    p.angleMode(p.DEGREES);
    p.background(255)
  };

  p.draw = function() {
    p.background(0, 0, 0, 15);
  
    p.fill(0,255,0)
    p.translate(p.width/2, p.height/2)
    p.rotate(rotation)
    p.ellipse(len,0,10)
    
    
    p.fill(0,0,255)
    p.translate(len, 0)
    p.rotate(rotation)
    p.ellipse(len,0,10)
    
    p.fill(298,0,100)
    p.translate(len, 0)
    p.rotate(rotation*2)
    p.ellipse(len,0,10)
    
      
    
    p.translate(len, 0)
    p.rotate(rotation*3)
    p.fill(255,255,0)
    p.ellipse(len,0,10)
    
    
    p.translate(len, 0)
    p.rotate(rotation*3)
    p.fill(255,128,100)
    p.ellipse(len,0,10)
    
    
    
    p.translate(len, 0)
    p.rotate(rotation*3)
    p.fill(255,0,255)
    p.ellipse(len,0,10)
    
    p.translate(len, 0)
    p.rotate(rotation*2)
    p.fill(51,255,255)
    p.ellipse(len,0,10)
    
    p.translate(len, 0)
    p.rotate(rotation*2)
    p.fill(178,255,102)
    p.ellipse(len,0,10)
    
    rotation =  rotation + 2;
  };
};
var myp5 = new p5(c, 'c1');


// Sketch Two
var d = function( p ) { 
  var x = 0;
  var y = 0;
  var r = 0;
  var g = 0;
  var b = 0;
  var speed = 0;
  p.setup = function() {
    p.createCanvas(600, 400);
  };

  p.draw = function() {
    r = p.random(255);
    g = p.random(255);
    b = p.random(255);
    p.background(0,50);
    p.fill(r,g,b);
    for (var x =0; x<speed; x++)
      p.ellipse(p.random(p.width),p.random(p.height),p.random(80));

  speed +=1;
  
  if(speed == 30)speed = 0;

  };
};
var myp5 = new p5(d, 'c4');


// Sketch Five


var f = function( p ) { 
  p.setup = function() {
    p.createCanvas(400, 400);
    p.createCanvas(400, 400);
    p.noFill()
    p.rectMode(p.CENTER)
  };

  p.draw = function() {
    p.background(220);
    for (var x = 0; x < 200; x += 20) {
      for (var y = 0; y < 200; y += 20) {
        for(var z = 0; z <= 5; z++) {
          
          p.stroke(p.random(255),p.random(255),p.random(255));
          p.ellipse(x+10, y+10, z*4);
        }
        
      }
    }
    for (var x = 200; x < 400; x += 40) {
      for (var y = 0; y < 200; y += 40) {
        for(var z = 0; z <= 5; z++) {
          
          p.stroke(p.random(255),p.random(255),p.random(255));
          p.ellipse(x+20, y+20, z*4);
        }
        
      }
    }
    for (var x = 200; x < 400; x += 40) {
      for (var y = 0; y < 200; y += 40) {
        for(var z = 0; z <= 7; z++) {
          
          p.stroke(p.random(255),p.random(255),p.random(255));
          p.ellipse(x+20, y+20, z*4);
        }
        
      }
    }
    
    for (var x = 200; x < 400; x += 40) {
      for (var y = 200; y < 400; y += 40) {
        for(var z = 0; z <= 5; z++) {
          
          p.stroke(p.random(255),p.random(255),p.random(255));
          p.ellipse(x+20, y+20, z*8);
        }
        
      }
    }
    
    for (var x = 0; x < 200; x += 200) {
      for (var y = 200; y < 400; y += 200) {
        for(var z = 0; z <= 25; z++) {
          
          p.stroke(p.random(255),p.random(255),p.random(255));
          p.ellipse(x+100, y+100, z*7);
        }
        
      }
    }

  };
};
var myp5 = new p5(f, 'c6');

//Sketch 7
var g = function( p ) { 
   
  p.setup = function() {
    p.createCanvas(400, 400);
    p.noFill()
    p.rectMode(p.CENTER)
  };

  p.draw = function() {
    
  p.background(220);
  


    for (var x = 0; x < 400; x += 20) {
      for (var y = 0; y < 400; y += 20) {
        for(var z = 0; z <= 5; z++) {
          
          p.stroke(p.random(255),p.random(255),p.random(255));
          p.ellipse(x+10, y+10, z*4);
        }
        
      }
    }
    for (var x = 0; x < 400; x += 40) {
      for (var y = 0; y < 400; y += 40) {
        for(var z = 0; z <= 5; z++) {
          
          p.stroke(p.random(255),p.random(255),p.random(255));
          p.ellipse(x+20, y+20, z*4);
        }
        
      }
    }

    
    for (var x = 0; x < 400; x += 40) {
      for (var y = 0; y < 400; y += 40) {
        for(var z = 0; z <= 5; z++) {
          
          p.stroke(p.random(255),p.random(255),p.random(255));
          p.ellipse(x+20, y+20, z*10);
        }
        
      }
    }
    
  

  };
};




// var e = function( p ) { 
//   var x = 100.0; 
//   var y = 100; 
//   var speed = 2.5; 
//   p.setup = function() {
//     p.createCanvas(400, 200);
//   };

//   p.draw = function() {
//     p.background(100);
//     p.fill(1);
//     x += speed; 
//     if(x > p.width){
//       x = 0; 
//     }
//     p.ellipse(x,y,50,50);

//   };
// };
// var myp5 = new p5(e, 'c5');


// var e = function( p ) { 
//   var x = 100.0; 
//   var y = 100; 
//   var speed = 2.5; 
//   p.setup = function() {
//     p.createCanvas(400, 200);
//   };

//   p.draw = function() {
//     p.background(100);
//     p.fill(1);
//     x += speed; 
//     if(x > p.width){
//       x = 0; 
//     }
//     p.ellipse(x,y,50,50);

//   };
// };
// var myp5 = new p5(e, 'c5');