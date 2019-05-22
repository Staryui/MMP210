let hasPlayed = false;
let scene = 1;
let numberScenes = 4;
let value = 0; 
let img;
let img1;
let img2;
let img3;
let snd;
let snd1;
let sndr;
var mic; 
let voice;
let v;
let v1;
let v2;
function setup() {
  var cnv = createCanvas(450, 800);
    mic = new p5.AudioIn()
    mic.start();
  img = loadImage('Back1.png');
    img1 = loadImage('Back.png');
     img2 = loadImage('Sun.png');
        img3 = loadImage ('SunR.png')
    snd = loadSound('Magi.wav');
    snd1 = loadSound('Flip.wav');
    sndr= loadSound('Rev.wav')
    voice = loadSound('SunFlower.wav');
    v = loadSound ('Num.wav');
    v1 = loadSound ('SunD.wav');
    v2 = loadSound ('RevSun.wav');
}
    function draw() {
  background(150);
                fill(value);
      micLevel = mic.getLevel();
        //image(img,0,0);
 ellipse(205, 200,40,);
ellipse ( 100, 200, 19);
ellipse ( 200, 10, 19,);
ellipse ( 200, 730, 19,);
        ellipse ( 400, 400, 19,);
        ellipse ( 359, 10, 19,);
         ellipse ( 359, 730, 19,);
        if (scene == 1){
            value = 0;
            image(img,0,0);
           
        }
        if (scene == 2){
            image(img1,0,0);
            value =255;
            if (!snd1.isPlaying() && !hasPlayed){
            snd1.play();
            hasPlayed = true;
        }
        }
        if (scene == 3) {
            hasPlayed = false;
               image(img2,0,0);
        snd.isPlaying();
        value = 233;
        }
        if (scene == 4){
          image(img,0,0);
            value = 220;
        }
         if (scene == 5){
            value = ('green');
             image(img2,0,0);
        }
        if (scene == 6){
         image (img3,0,0);
        value = ('blue')
        }
   //     console.log(scene);
        console.log(micLevel);
        if (micLevel > .2){
            scene = 3;
        }
}

    
function mousePressed(){
    //snd.play();
  var distance= dist(mouseX, mouseY, 205,200 );
var distance2= dist (mouseX, mouseY, 100, 200);
    var distance3= dist(mouseX, mouseY, 200, 10);
     var distance4= dist(mouseX, mouseY, 200, 730);
      var distance5= dist(mouseX, mouseY, 400, 400);
    var distance6= dist(mouseX, mouseY,359, 10);
    var distance7= dist(mouseX, mouseY, 359, 730);
  if (distance<30)  { 
    if (scene < numberScenes){
       // scene++;
scene = 2;
    } 
    else{
        scene = 1;
    }
  }
    if (distance2< 50){
        snd.play();
        voice.play();
        console.log("beep");
        if (scene < numberScenes){
            scene = 5;
         }
        }
     if (distance3<50){
        snd.play();
        v.play();
        console.log("beep");
        if (scene < numberScenes){
            scene = 5;
         }
        }
     if (distance4<50){
        snd.play();
        v1.play();
        console.log("AH");
        if (scene < numberScenes){
            scene = 5;
         }
        }
      if (distance5<50){
        sndr.play();
        console.log("REV");
        if (scene > numberScenes){
            scene = 6;
         }
        }
    if (distance6<50){
        snd.play();
        v2.play();
        console.log("REV");
        if (scene <= numberScenes){
            scene = 6;
         }
        }
    if (distance7<50){
        snd.play();
        v.play();
        console.log("REV");
        if (scene <= numberScenes){
            scene = 6;
         }
        }
        // if (snd.isPlaying() && distance3 <10) {
//     snd.stop();
//snd2.play()
// }
        
// if (snd.isPlaying()) {
//     snd.stop();
//     if(scene<numberScenes){
//         scene = 5;
//     } else {
//         snd.play();
//     }
// }
    }
