//let x = 250;
let x = 500;
let y = 500;
let score = 0;
let nextlevel = 0;
let timer = 6;
let mousecord;
let diameter = 100;
let fr = 100;
let highscore = 60;
let circlediameter = 20;
let circlediameter2 = 15;
let circlediameter3 = 10;
let circlediameter4 = 5;
let circlediameter5 = 2.5;
let circlediameter6 = 2;
let bool = true;
//let error = false;
//let difficulty = false;
//let gopherimage;
let soundAudio;
 let programMusic;
 let start;
 //let gif;
 //let audio;

 function preload(){

  //gopherimage = loadImage("gopher.png");
  soundAudio = loadSound("squeaky.mp3");
  programMusic = loadSound("gametrack.mp3");
  start = loadImage("background.png");
  //gif = loadImage("gif.gif");
  //audio = loadSound("error.mp3");
 
}

function setup() {
  createCanvas(1000, 1000);
  textAlign(CENTER);
  textSize(30);

  
}



function draw() {
  background(220);
  
 
  //ellipseMode(CORNER);

  
    
  image(start, 0, 0);
  start.resize(1000, 1000);

  


if(bool == false){
  

  if (nextlevel < 5) {
    levelOne();
  }else if(nextlevel >= 5){
    levelTwo();
  }else if(nextlevel >= 10){
      levelThree();
  }else if(nextlevel >= 15) {
    levelFour();
  }else if(nextlevel >= 20) {
    levelFive();
  } else if (nextlevel >= 30) {
    levelSix();
  }else if (nextlevel >= 40) {
    levelSeven();
  } else {
    levelEight();
  }


  if (timer === 0) {

    gameover();
  }

  if (score > highscore) {
    beathighscore();
  }

  countdown();

  if (timer >= 6) {
    timer = 6;
  }

  text("Score: " + score, width / 2, 40);
}
  
}
function countdown() {
  timer -= 1 / 60;

  text(round(timer) + " " + "Seconds", width / 2, 100);
  if (timer <= 0) {
    timer = 0;
  }
}

function levelOne() {
  background("green");

  frameRate(fr);
  //image(gopherimage, x, y);
 // gopherimage.resize(diameter, diameter);
 circle(x, y, diameter);
  text("Level One", width / 2, height - 20);
 text("High Score: " + highscore, width / 2, height - 80)
  mousecord = dist(mouseX, mouseY, x, y);
  if (mousecord < diameter && mouseIsPressed) {
  
    soundAudio.play();
    x = random(0, 900);
    y = random(0, 900);
    diameter = random(40, 50);

    circle(x, y, diameter);
    //print(diameter);
    addup = score + 1;
    score = addup;
    timer = timer + 1;
    
    nextlevel = nextlevel + 1;
   


  if (nextlevel >= 5) {
    levelTwo();
  }

}



/*if  (difficulty == true){
  image(gif, 0, 0);
  gif.resize(600, 600);

  if (mousecord < diameter && mouseIsPressed) {
  
    soundAudio.play();
    x = random(0, 500);
    y = random(0, 500);
    diameter = random(40, 50);

    circle(x, y, diameter);
    //print(diameter);
    addup = score + 1;
    score = addup;
    timer = timer + 1;
    
    nextlevel = nextlevel + 1;
   


  if (nextlevel >= 5) {
    levelTwo();
  }

}

}*/

}




function levelTwo() {
  background("#FFE637");
  frameRate(fr);
  circle(x, y, diameter);
  text("Level Two", width / 2, height - 20);
  text("High Score: " + highscore, width / 2, height - 80)
  mousecord = dist(mouseX, mouseY, x, y);
  if (mousecord < diameter && mouseIsPressed) {
    soundAudio.play();
    x = random(0, 900);
    y = random(0, 900);
    diameter = random(30, 40);
    circle(x, y, diameter);
    //print(diameter);
    addup = score + 1;
    score = addup;
    timer = timer + 1;
    nextlevel = nextlevel + 1;
  }

  if (nextlevel >= 10) {
    levelThree();
  }
}

function levelThree() {
  background("#F7C902");
  frameRate(fr);
  circle(x, y, circlediameter);
  text("Level Three", width / 2, height - 20);
  text("High Score: " + highscore, width / 2, height - 80)
  mousecord = dist(mouseX, mouseY, x, y);
  if (mousecord < circlediameter && mouseIsPressed) {
    x = random(0, 900);
    y = random(0, 900);
    circlediameter = random(15, 30);
    circle(x, y, circlediameter);
    //print(circlediameter);
    addup = score + 1;
    score = addup;
    timer = timer + 1;
    nextlevel = nextlevel + 1;
  }

  if (nextlevel >= 15) {
    levelFour();
  }
}

function levelFour() {
  background("#FF9527");
  frameRate(fr);
  circle(x, y, circlediameter2);
  text("Level Four", width / 2, height - 20);
  text("High Score: " + highscore, width / 2, height - 80)
  mousecord = dist(mouseX, mouseY, x, y);
  if (mousecord < circlediameter2 && mouseIsPressed) {
    x = random(0, 900);
    y = random(0, 900);
    circlediameter2 = random(10, 15);
    circle(x, y, circlediameter2);
    //print(circlediameter2);
    addup = score + 1;
    score = addup;
    timer = timer + 1;
    nextlevel = nextlevel + 1;
  }

  if (nextlevel >= 20) {
    levelFive();
  }
}
function levelFive() {
  background("#EA7401");
  frameRate(fr);
  circle(x, y, circlediameter3);
  text("Level Five", width / 2, height - 20);
  text("High Score: " + highscore, width / 2, height - 80)
  mousecord = dist(mouseX, mouseY, x, y);
  if (mousecord < circlediameter3 && mouseIsPressed) {
    x = random(0, 900);
    y = random(0, 900);
    circlediameter3 = random(5, 10);
    //print(circlediameter3);
    circle(x, y, circlediameter3);
    addup = score + 1;
    score = addup;
    timer = timer + 1;
    nextlevel = nextlevel + 1;
  }

  if (nextlevel >= 30) {
    levelSix();
  }
}

function levelSix() {
  background("#F56801");
  //noStroke();
  frameRate(fr);
  circle(x, y, circlediameter4);
  text("Level Six", width / 2, height - 20);
  text("High Score: " + highscore, width / 2, height - 80)
  mousecord = dist(mouseX, mouseY, x, y);
  if (mousecord < circlediameter4 && mouseIsPressed) {
    x = random(0, 900);
    y = random(0, 900);
    circlediameter4 = random(2, 6);

    circle(x, y, circlediameter4);
    //print(circlediameter4);
    addup = score + 1;
    score = addup;
    timer = timer + 1;
    nextlevel = nextlevel + 1;
  }

  if (nextlevel >= 40) {
    levelSeven();
  }
}

function levelSeven() {
  background("#F74603");
  noStroke();

  frameRate(fr);
  circle(x, y, circlediameter5);
  text("Level Seven", width / 2, height - 20);
  text("High Score: " + highscore, width / 2, height - 80)
  mousecord = dist(mouseX, mouseY, x, y);
  if (mousecord < circlediameter5 && mouseIsPressed) {
    x = random(0, 900);
    y = random(0, 900);
    circlediameter5 = random(2, 6);

    circle(x, y, circlediameter5);
    //print(circlediameter5);
    addup = score + 1;
    score = addup;
    timer = timer + 1;
    nextlevel = nextlevel + 1;
  }

  if (nextlevel >= 50) {
    levelEight();
  }
}

function levelEight() {
  background("#C70E01");
  noStroke();

  frameRate(fr);
  circle(x, y, circlediameter6);
  text("Level Eight", width / 2, height - 20);
  text("High Score: " + highscore, width / 2, height - 80)
  mousecord = dist(mouseX, mouseY, x, y);
  if (mousecord < circlediameter6 && mouseIsPressed) {
    x = random(0, 900);
    y = random(0, 900);
    circlediameter6 = random(2, 6);

    circle(x, y, circlediameter6);
    //print(circlediameter6);
    addup = score + 1;
    score = addup;
    timer = timer + 1;
    nextlevel = nextlevel + 1;
  }

  if (score > highscore) {
   
    beathighscore();
  }
}

function beathighscore() {
  background("green");
  timer = 0;

  text("Congratulations!! You beat the high score!!", 500, 500);
  text("Your Score is: " + " " + score, 500, 600);
  text("New High Score: " + " " + score, 500, 650);
}

function gameover() {
  background("#C70E01");
  timer = 0;

  text("Game Over. You ran out of time!!", 500, 500);
  text("Your Score is: " + " " + score, 500, 600);
  text("Current High Score: " + " " + highscore, 500, 650);
 
}

/*function mousePressed(){
  soundAudio.play();
 }*/

 function keyPressed(){
  if (keyCode === UP_ARROW){

    programMusic.play();
    
  }
  if(keyCode === DOWN_ARROW){

    programMusic.stop();

  }

  if(keyCode === LEFT_ARROW){
    cursor(CROSS);
  }

 if(keyCode === ENTER){
  bool = false;
 }

 /*if(keyCode === SHIFT){
  difficulty = true;
 }*/

}



