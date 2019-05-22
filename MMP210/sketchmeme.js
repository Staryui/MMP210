let img;
let img2;
let img3;


let draggedY =0;
let draggedX = 0;

function preload() {
  img = loadImage('KermFir.png');
    img2 = loadImage ('KermLove.png');
        img3 = loadImage ('KermPill.png');
}


function setup() {
    
  createCanvas(800,700);
   
image(img,10,0);
    image(img2, 50,0);
        image(img3,70,0);
    
input = createInput();
  input.position(20, 65);

  button = createButton('submit');
  button.position(input.x + input.width, 65);
  button.mousePressed(greet);

  greeting = createElement('h2', 'Make your Own Meme');
  greeting.position(300, 5);

  textAlign(CENTER);
  textSize(50);

}


function draw() {
  background (200);
  image(img, draggedX - img.width/2, draggedY - img.height/2);
    image(img2, draggedX - img.width/2, draggedY - img.height/2);
        image(img3, draggedX - img.width/2, draggedY - img.height/2);
  // Displays the image at point (0, height/2) at half size
  //image(img, 0, height / 2, img.width / 2, img.height / 2);
}

function mouseDragged(){
  draggedX= mouseX;
  draggedY= mouseY;


}
    
function greet() {
  const name = input.value();
  greeting.html(' ' + name + '');
  input.value(''); 
 
    for (let i = 0; i < 200; i++) {
        
    text(name, 600, 500);
 
    }
}
    

