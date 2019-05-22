
function setup() {
  var cnv = createCanvas(500, 400);}
  
    
    function draw() {
  background(150);
 
        
noStroke();//head weight
fill('pink');
        circle (254, 205, 100)  //head
 stroke(1);
        strokeWeight(3);
       fill(250);

    ellipse(205, 200,40,); //eyeleft
    ellipse(300, 200, 40,); //eyeright

       
        strokeWeight(1);//nose weight
    
        triangle( 250, 244, 240, 222, 263, 223,); 

    }

