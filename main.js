function preload(){
    
}  
function setup() {
    createCanvas(650, 450);
      canvas.style= "position: absolute; top: 180px; bottom: 180px; left: 120px; right:50px; border:2px dotted black";
      video = createCapture(VIDEO);
    video.hide();
    }
  
  function draw() {
    //Image(video,0,0,250,250);
    circle(30, 30, 20);
describe('A black circle with black outline in the middle of a white canvas.');
ellipse(56, 46, 55, 55);
describe('A blue ellipse with black outline in middle of a white canvas.');
  }
function capturesnapshot() {
save("img.png");
}

