/*************************************************************************
    (*)p5jsHaveFunTimerClickable
          (*)by Emily Farrow

    (*)Overview - Simple timer and button code. It prompts a question after clicking your mouse and also has a timer that 
	tells you after 5 seconds that time has run out. You can answer the question by clicking on either of the plant images,
	the browser will send an alert if it was correct or false. 
 
    ---------------------------------------------------------------------
    (*)Notes: (ie: To be fixed, I Need Help With, Clarify This, etc etc: )
     (1) I would've liked to have the two buttons go away after the time was up but I couldn't figure out how.
**************************************************************************/

var simpleTimer;

var progBarWidth;
var progBarHeight = 20;
var h = 200;
var v = 60;

var waitForMouse = true;


//clickable object
var calatheaButton;
var africanmaskButton;

//image from assets folder
var calatheaImage;
var africanmaskImage;

var countdown;

function preload(){
	calatheaImage = loadImage('assets/calathea.png');
	africanmaskImage = loadImage('assets/africanmask.png');

}

function setup() {
  createCanvas(windowWidth, windowHeight);

  makeCalatheaButton();
  makeAfricanmaskButton();

  simpleTimer = new Timer(5000);

  textAlign(LEFT);
  textSize(24);
  rectMode(CORNER);

  progBarWidth = width - (h*2); 

 }


// Draw code goes here
function draw() {
  background(23,50,40);
  calatheaButton.draw();
  calatheaButton.resize(300,300);
  africanmaskButton.draw();
  africanmaskButton.resize(300,300);

 
  if(waitForMouse){
  	textSize(26);
  	fill(255);
  	text("Click mouse to see the question", h, 60);
  }
  else{
  	//wait for mouse === false
  	drawProgressBar();
  	drawQuestion();
  	//drawTimerText();

  	if(simpleTimer.expired()){
  		fill(255);
  		text("time has run out", h, 60);
  	}
  }
}

//draw bar
function drawProgressBar(){
	//Draw a growing rectangle from left to right
	noStroke();
	fill(240, 124, 0);
	rect(h, v + progBarHeight, progBarWidth*simpleTimer.getPercentageElapsed(), progBarHeight );
	
	//draw outline on top of the wav	
	noFill();
	stroke(50);
	strokeWeight(1);
	rect(h, v + progBarHeight, progBarWidth, progBarHeight);

	noStroke();
}

function drawQuestion(){
	textSize(26);
	fill(255);
  	text("which plant is easier to take care of?", width/2, height/4);
}

function mousePressed(){
	// start the timer if we are waiting for a mouseclick
	if( waitForMouse ){
		waitForMouse = false;
		simpleTimer.start();
	}
	else if(simpleTimer.expired()){
		waitForMouse = true;
	}
}



function makeCalatheaButton(){
	//create clickable object
	calatheaButton = new Clickable();

	//set image to png
	calatheaButton.image = calatheaImage;
	calatheaButton.text = "";

	//calatheaButton.color = "#FFFFFF";

	calatheaButton.width = calatheaImage.width;
	calatheaButton.Height = calatheaImage.height;

	calatheaButton.locate( width/3 - calatheaButton.width/2, height/3 - calatheaButton.height/2 );

	calatheaButton.onPress = calatheaButtonPressed;
}

calatheaButtonPressed = function (){
	alert("false");
}


function makeAfricanmaskButton(){
	//create clickable object
	africanmaskButton = new Clickable();

	//set image to png
	africanmaskButton.image = africanmaskImage;
	africanmaskButton.text = "";

	//calatheaButton.color = "#FFFFFF";

	africanmaskButton.width = africanmaskImage.width;
	africanmaskButton.Height = africanmaskImage.height;

	africanmaskButton.locate( width/1.5 - africanmaskButton.width/2, height/3 - africanmaskButton.height/2 );

	africanmaskButton.onPress = africanmaskButtonPressed;
}

africanmaskButtonPressed = function (){
	alert("correct");
}

