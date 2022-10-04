let mph = 0;
let time = 10;
let programMusic;
let soundAudio;
let horn;
let start;
let car = {

    manufacturer: "Ford",
    name: "Mustange",
    color: "black",
    caron: false,
    bought: true,
    year: "2015",
    speedpower: "180mph",

    cost: 50000,

    speed: function(toofast) {
        print("You are going too " + toofast + "!!");
    },

    slowspeed: function(slowing) {
        print("You are " + slowing);
    },

    constantspeed: function(constant) {
        print("Mantaining " + constant + " speed");
    },

    ignition: function() {
        print("car is turned on");
        soundAudio.play();
    },

    off: function() {
        print("car is turned off");
        soundAudio.stop();

    },

    radiooff: function() {
        print("Radio is turned off");
    },



    setStation: function(station) {
        print("The radio is set to " + station)
    },

    radioon: function(on) {
        print("Radio is turned " + on)
    }
};

function preload(){

    //gopherimage = loadImage("gopher.png");
    // loadSound("squeaky.mp3");
    programMusic = loadSound("music.mp3");
    soundAudio = loadSound("on.mp3");
    horn = loadSound("horn.mp3");
    start = loadImage("background1.png");
    //gif = loadImage("gif.gif");
    //audio = loadSound("error.mp3");
   
  }
function setup() {
    createCanvas(400, 400);
    //background('lightgray');
    image(start, 0, 0);
  start.resize(100, 100);
    noStroke();
    fill('black');
    rect(150, 250, 100, 50);
    rect(90, 335, 80, 10);
    rect(100, 300, 200, 50);
    fill('white');
    rect(190, 260, 40, 40);
    circle(150, 350, 40);
    circle(250, 350, 40);
    fill('black');
    circle(150, 350, 20);
    circle(250, 350, 20);

    //ellipse(150, 350, 10, 20);
    //ellipse(250, 350, 10, 20);

    textSize(30);
    text(mph + " mph", 150, 200);
    print(car);
    print(car.manufacturer);
    print(car.name);
    print(car.color);
    print("Model: " + car.year);
    print("Top Speed: " + car.speedpower);


    //print("My radio was made by " + car.
    //manufacturer);
    if(car.cost > 50000) {
        print("Cost: " + car.cost)
        print("That is an expensive car!");
    }
    else {
        print("Cost: " + car.cost)
        print("That's a good price!");
        print("Bought: " + car.bought);
    }

    print("Is car on? " + car.caron);


}


function draw() {
    frameRate(time);
    //background('lightgray');
    //mouseIsPressed
    
    if(keyCode === RIGHT_ARROW) {
        
        go();


    }

    if(keyCode === BACKSPACE) {
        frameRate(5)
        background('lightgray');
        noStroke();
        fill('black');
        rect(150, 250, 100, 50);
        rect(90, 335, 80, 10);
        rect(100, 300, 200, 50);
        fill('white');
        rect(190, 260, 40, 40);
        circle(150, 350, 40);
        circle(250, 350, 40);
        fill('black');
        circle(150, 350, 20);
        circle(250, 350, 20);

        fill('white');
        circle(80, 340, 10);
        circle(70, 340, 10);
        circle(60, 340, 10);
        circle(50, 340, 10);

        circle(80, 334, 10);
        circle(70, 334, 10);
        circle(60, 334, 10);
        circle(50, 334, 10);

        circle(80, 344, 10);
        circle(70, 344, 10);
        circle(60, 344, 10);
        circle(50, 344, 10);
        fill('black');
        mph = mph - 1;
        text(mph + " mph", 150, 200);
        car.slowspeed("slowing down");
    }

    if(keyCode === LEFT_ARROW) {

        background('lightgray');
        noStroke();
        fill('black');
        rect(150, 250, 100, 50);
        rect(90, 335, 80, 10);
        rect(100, 300, 200, 50);
        fill('white');
        rect(190, 260, 40, 40);
        circle(150, 350, 40);
        circle(250, 350, 40);
        fill('black');
        circle(150, 350, 20);
        circle(250, 350, 20);

        fill('white');
        circle(80, 340, 10);
        circle(70, 340, 10);
        circle(60, 340, 10);
        circle(50, 340, 10);

        circle(80, 334, 10);
        circle(70, 334, 10);
        circle(60, 334, 10);
        circle(50, 334, 10);

        circle(80, 344, 10);
        circle(70, 344, 10);
        circle(60, 344, 10);
        circle(50, 344, 10);
        fill('black');
        text(mph + " mph", 150, 200);
        car.constantspeed("constant");
    }

    if(mph >= 180) {

        car.speed("too fast, slow down");
    }



}


function go() {
    if(mph >= 0 && mph < 180) {
        print("VROOOOOOOOOOOOM!!");
        background('lightgray');
        noStroke();
        fill('black');
        rect(150, 250, 100, 50);
        rect(90, 335, 80, 10);
        rect(100, 300, 200, 50);
        fill('white');
        rect(190, 260, 40, 40);
        circle(150, 350, 40);
        circle(250, 350, 40);
        fill('black');
        circle(150, 350, 20);
        circle(250, 350, 20);

        fill('white');
        circle(80, 340, 10);
        circle(70, 340, 10);
        circle(60, 340, 10);
        circle(50, 340, 10);

        circle(80, 334, 10);
        circle(70, 334, 10);
        circle(60, 334, 10);
        circle(50, 334, 10);

        circle(80, 344, 10);
        circle(70, 344, 10);
        circle(60, 344, 10);
        circle(50, 344, 10);
        fill('black');

        mph = mph + 1;
        text(mph + " mph", 150, 200);
    }

    if(time === 30) {
        frameRate(20);
        mph = mph + 1;
        text(mph + " mph", 150, 200);

    }



    //&& mph >= 180
    /*if(mph >= car.speedpower){
        mph = 180;
        mph = mph -1;
        //something();
        car.speed("too fast, slow down");
       
    }*/


}



function keyPressed() {

    if (keyCode === UP_ARROW){

        programMusic.play();
        
      }
      if(keyCode === DOWN_ARROW){
    
        programMusic.stop();
    
      }

    if(keyCode === ENTER) {
        car.ignition();
    } else if(keyCode === SHIFT) {

        car.off();


    }
    //32 -> spacebar
    else if(keyCode === 32) {
        car.radiooff();
    }


}

function mousePressed() {
    //radio.setStation("Top 40's"); 

    car.radioon("on");
    horn.play();
}

function doubleClicked() {

    car.setStation("Top 90's");

}

