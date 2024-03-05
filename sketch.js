

let counter = 0
let countInterval = setInterval(MakeRect, 1000, 0, 200);

function setup() {
  createCanvas(400, 300);
  background(220);
}



function mousePressed(){
  setTimeout(MakeRoundSquare, 1000, 0, 0);
  setTimeout(MakeRoundSquare, 2000, 100, 0);
  setTimeout(MakeRoundSquare, 3000, 200, 0);
  setTimeout(MakeRoundSquare, 4000, 300, 0);
  setTimeout(MakeRoundSquare, 5000, 0, 100);
  setTimeout(MakeRoundSquare, 6000, 100, 100);
  setTimeout(MakeRoundSquare, 7000, 200, 100);
  setTimeout(MakeRoundSquare, 8000, 300, 100);
}



function MakeRect(xPos, yPos){
  noStroke();
  fill(random(0, 255), random(0, 255), random(0, 255));
  rect(xPos, yPos, 400, 100);

  counter ++;
  if( counter > 8){
    clearInterval (countInterval)
  }
}

function MakeRoundSquare(xPos, yPos){
  noStroke();
  fill(random(0, 255), random(0, 255), random(0, 255));
  square( xPos, yPos, 100, 10);
}

