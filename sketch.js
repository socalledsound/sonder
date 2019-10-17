let pixels = [];

// we want this to change
let numSpawn = 1;


function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  
  
  for(let i = 0; i < pixels.length; i++){
  
    pixels[i].update();
    pixels[i].display();
    
  }
  
}


function mousePressed(){

  
  for(let i = 0; i < numSpawn; i++){
  pixels.push(new CatalystPixel(i));
  }

  if(numSpawn < 64){
numSpawn*=2;
  } else {
  numSpawn = 1;
  }

}




function CatalystPixel(id) {
  
  
  this.x = random(50,350);
  this.y = random(50, 350);
  
//   if(id%2==0){
  
//   this.x = width/2 - (id * 10);
//   this.y = height/2;
  
//   }

  this.alpha = 255;
  //this.color = color(180, 235, 245,this.alpha);
  this.size = 10;


  this.update = function(){
  
    this.alpha-=1;
  }
  
  
  this.display = function() {

  //  fill(this.color);
    fill([180,235,245,this.alpha]);
    noStroke();
    rect(this.x, this.y, this.size, this.size);
  }

}