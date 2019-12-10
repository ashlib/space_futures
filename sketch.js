
//draw flashlight and sync to mouse
//buckets go faster..
//music??

state = 0;

var b, g;
var bridge;
var bucket;
var leftHeld, rightHeld, upHeld, downHeld;
var proph1;
var proph2;
var proph3;
var riddleFont;
var sword;
var tower;
var x,y;
var zKey;

var allBucketsComplete = false;
var bucketComplete = false;
var timer1 = 30;
var timer2 = 30;
var timer3 = 30;

var buckets = [];

function preload() {

	riddleFont = loadFont("ComicRelief.ttf");

	bridge = loadImage("bridge.png");
	bucket = loadImage("bucket.png");
	proph1 = loadImage("Raghnall.png");
	proph2 = loadImage("Bazala.png");
	proph3 = loadImage("Thaddia.png");
	sword = loadImage("sword.png");
	tower = loadImage("tower.png");
}

function setup() {
	createCanvas(1280,720);

	x = width/2;
	y = height/2;

	buckets.push(new Bucket(width*0.2,height*0.65));

	g = new Galaxy(new p5.Vector(width/2, height/2));
}

function draw() {
	if (state == 0) {
		background(0);
		homeScreen();
	}
	if (state == 1) {
		background(0);
		planets();
	}
	if (state==2) {
		background(10,5,35);
		ragChal();
		winRag()
		loseRag();
	}
	if (state==3) {
		background(175,225,250);
		bazChal();
		for (var i = 0; i < buckets.length; i++) {
			buckets[i].display();
		winBaz();
		loseBaz();
		activateKeys();
	}
	}

	if (state==4) {
		background(0);
		thadChal();
		winThad();
		loseThad();
}
	}

function homeScreen() {
	g.addStar();
  g.run();

	fill(255);
	textAlign(CENTER);
	textSize(30);
	text("Hello Chosen One! \nThe Age of Darkness is here and the Prophets \nmust prepare for what is to come. \nYou have been prophesized to stop the Age of Darkness, \nbut not without a few tests first. \nTo prove yourself you must successfully complete \n3 challenges set by the Prophets themselves. \nFail and doom the world! \nAre your ready to embark on your quest? \nCLICK MOUSE TO START ", width/2, y)

  y = y - 0.5;
	if (y < -350) {
		y = height;
	}
}

function planets() {
	g.addStar();
  g.run();

	push();
	fill(255);
	textAlign(CENTER);
	textSize(35);
	translate(width/2, 75)
	text("Welcome to the DaVinci Galaxy, the universe of The Prophets!", 0,0)
	pop();

	push();
	fill(59,122,87);
	noStroke();
	translate(width*0.15, height/2);
	ellipse(0,0,100,100);
	pop();

	push();
	fill(255);
	textAlign(CENTER);
	textSize(18);
	translate(width*0.15, height*0.65)
	text("Ragnahla \nFounded by Raghnall the Wise in the Yr 4067",0,0);
	pop();

	push();
	fill(178,132,190);
	noStroke();
	translate(width/2, height/2);
	ellipse(0,0,100,100);
	pop();

	push();
	fill(255);
	textAlign(CENTER);
	textSize(18);
	translate(width/2, height*0.65)
	text("Bazalis \nFounded by Bazala the Generous in the Yr 3020",0,0);
	pop();

	push();
	fill(196,98,16);
	noStroke();
	translate(width*0.85, height/2);
	ellipse(0,0,100,100);
	pop();

	push();
	fill(255);
	textAlign(CENTER);
	textSize(18);
	translate(width*0.85, height*0.65)
	text("Thadius \nFounded by Thaddia the Valient in the Yr 5117",0,0);
	pop();

	push();
	fill(255,0,0);
	stroke(255,0,0);
	textSize(20);
	translate(width*0.85, height*0.95);
	text("Press 'z' to enter cryosleep as you journey \nto Ragnahla to begin your first challenge", 0,0);
	pop();
}

function ragChal() {
	g.addStar();
  g.run();

	push();
	imageMode(CENTER);
	translate(width/2,height/2);
	image(tower,0,0,1280,850);
	pop();

	image(proph1,0,0,175,200);

	push();
	fill(255);
	noStroke();
	textAlign(LEFT);
	textSize(18);
	translate(width*0.15, height*0.075)
	text("Welcome to Ragnahla, Chosen One! This is the Tower of Light, \nhome to our greatest minds. For weeks our scholars have been searching for a \nspell to combat the Age of Darkness and alas, they've found it. \nHowever, the spell is inside a grimiore locked by an ancient riddle. \nProve yourself and solve the riddle. But be careful, Ragnahlian riddles are \nknown to break the minds of those who seek their answer. ",0,0);
	pop();

	push();
	fill(255,245,0);
	stroke(255,245,0);
	textAlign(CENTER);
	textSize(20);
	textFont(riddleFont);
	translate(width*0.85, height*0.5)
	text("A murderer is condemned to death. \nHe has to choose between \nthree rooms. The first is full of \nraging fires, the second is full of \nassassins with loaded guns, and the \nthird is full of lions that haven't \neaten in 3 years. Which room is \nsafest for him?",0,0);
	pop();

	push();
	fill(0);
	stroke(0);
	textAlign(CENTER);
	textSize(20);
	textFont(riddleFont);
	translate(width*0.85, height*0.85)
	text("1. Fires     2. Assassins   3. Lions",0,0);
	pop();

	push();
	fill(50);
	noStroke();
  textSize(25);
	translate(1250,25);
  text(timer1,0,0);
	pop();

	if (frameCount % 60 == 0 && timer1 > 0) {
    timer1 --;
  }
}

function winRag() {

	if(key === '3') {
		push();
		fill(0);
		rectMode(CENTER);
		translate(width/2,height/2);
		rect(0,0,width,height);
		pop();

		push();
		fill(0,255,0);
		noStroke();
		textAlign(CENTER);
		textSize(75);
		translate(width/2,height/2);
    text("Eureka!",0,0);
		pop();

		push();
		fill(255);
		textAlign(CENTER);
		textSize(25);
		translate(width/2, height*0.6);
    text("What an excellent brain you have! \n You manage to open the grimiore without going insane. \nNow the scholars can get to work. \n\nClick mouse to head to Bazalis.",0,0);
		pop();

		timer1 = 3600;
	}
	}

function loseRag() {

	if(key === '1') {
		push();
		fill(0);
		rectMode(CENTER);
		translate(width/2,height/2);
		rect(0,0,1280,720);
		pop();

		push();
		fill(255,0,0);
		noStroke();
		textAlign(CENTER);
		textSize(75);
		translate(width/2,height/2);
    text("YOU FAILED!",0,0);
		pop();

		push();
		fill(255);
		textAlign(CENTER);
		textSize(25);
		translate(width/2, height*0.6);
		text("Whelp... you lost your mind to the grimiore. Guess you weren't the Chosen One after all...",0,0);
		pop();

		push();
		fill(150);
		noStroke();
		textAlign(RIGHT);
		textSize(20);
		translate(width*0.9, height*0.9);
		text("Click ENTER to be brought back to life \nand restart your quest.",0,0);
		pop();
		}

	if(key === '2') {
		push();
		fill(0);
		rectMode(CENTER);
		translate(width/2,height/2);
		rect(0,0,1280,720);
		pop();

		push();
		fill(255,0,0);
		noStroke();
		textAlign(CENTER);
		textSize(75);
		translate(width/2,height/2);
    text("YOU FAILED!",0,0);
		pop();

		push();
		fill(255);
		textAlign(CENTER);
		textSize(25);
		translate(width/2, height*0.6);
		text("Whelp... you lost your mind to the grimiore. Guess you weren't the Chosen One after all...",0,0);
		pop();

		push();
		fill(150);
		noStroke();
		textAlign(RIGHT);
		textSize(20);
		translate(width*0.9, height*0.9);
		text("Click ENTER to be brought back to life \nand restart your quest.",0,0);
		pop();
		}

	if (timer1 == 0) {
		push();
		fill(0);
		rectMode(CENTER);
		translate(width/2,height/2);
		rect(0,0,1280,720);
		pop();

		push();
		fill(255,0,0);
		noStroke();
		textAlign(CENTER);
		textSize(75);
		translate(width/2,height/2);
    text("YOU FAILED!",0,0);
		pop();

		push();
		fill(255);
		textAlign(CENTER);
		textSize(25);
		translate(width/2, height*0.6);
		text("Whelp... you lost your mind to the grimiore. Guess you weren't the Chosen One after all...",0,0);
		pop();

		push();
		fill(150);
		noStroke();
		textAlign(RIGHT);
		textSize(20);
		translate(width*0.9, height*0.9);
		text("Click ENTER to be brought back to life \nand restart your quest.",0,0);
		pop();
	}
}

function bazChal() {
	image(proph2,0,0,175,200);

	push();
	fill(0);
	stroke(0);
	textAlign(LEFT);
	textSize(18);
	translate(width*0.15, height*0.075)
	text("Chosen One, the people of Bazalis need help stocking \nup on resources before the Age of Darkness is upon us. \nHelp them carry water from the Well of Kindness. \nBe careful! The bridge is VERY old!",0,0);
	pop();

	push();
	imageMode(CENTER);
	translate(width/2,height*0.8);
	image(bridge,0,0,width,450);
	pop();

	push();
	fill(0);
	noStroke();
  textSize(25);
	translate(1250,25);
  text(timer2,0,0);
	pop();

	if (frameCount % 60 == 0 && timer2 > 0) {
		 timer2 --;
  }
}

function winBaz() {

	var numberOfCompleteBuckets = 0;

	for (var i = 0; i < buckets.length; i++) {
		if (buckets[i].bucketComplete == true) {
			numberOfCompleteBuckets++;
		}
	}

	if (numberOfCompleteBuckets >= 5) {
		allBucketsComplete = true;
	}

	if(allBucketsComplete == true) {
		push();
		fill(0);
		rectMode(CENTER);
		translate(width/2,height/2);
		rect(0,0,width,height);
		pop();

		push();
		fill(0,255,0);
		noStroke();
		textAlign(CENTER);
		textSize(75);
		translate(width/2,height/2);
    text("YOU'VE DONE IT!",0,0);
		pop();

		push();
		fill(255);
		textAlign(CENTER);
		textSize(25);
		translate(width/2, height*0.6);
    text("Great job Chosen One! \nThe people of Bazalis have enough water for the upcoming doom. \n\nClick mouse to head to Thadius.",0,0);
		pop();

		timer2 = 3600;
	}
}

function loseBaz() {

  if (timer2 == 0) {
		push();
		fill(0);
		rectMode(CENTER);
		translate(width/2,height/2);
		rect(0,0,1280,720);
		pop();

		push();
		fill(255,0,0);
		noStroke();
		textAlign(CENTER);
		textSize(75);
		translate(width/2,height/2);
    text("YOU FAILED!",0,0);
		pop();

		push();
		fill(255);
		textAlign(CENTER);
		textSize(25);
		translate(width/2, height*0.6);
		text("Looks like the bridge collapsed. \nYou can't save the universe now since you're dead...",0,0);
		pop();

		push();
		fill(150);
		noStroke();
		textAlign(RIGHT);
		textSize(20);
		translate(width*0.9, height*0.9);
		text("Click ENTER to be brought back to life \nand restart your quest.",0,0);
		pop();
	  }
}

function thadChal() {

	image(proph3,0,0,175,200);

	push();
	fill(255);
	noStroke();
	textAlign(LEFT);
	textSize(18);
	translate(width*0.15, height*0.075)
	text("Thadius is home to the fiercest warriors and as Chosen One you will \nlead them into battle when the Age of Darkness arrives. To do that, you will need The Sword of Heart. \nThis mighty weapon is embued with the souls of the universes' greatest heroes: /nJon Snow, Han Solo, Tony Stark... \nand will cut down any foe. Find the sword in the Ogre's chamber. \nBut be careful! He's sleeping, for now...",0,0);
	pop();

	fill(255);
	noStroke();
	ellipse(x,y,100,100);

	push();
	translate(width*0.9,height*0.7);
	image(sword,0,0,150,200);
	pop();

	if (upHeld) {y-=1.25;}
	if (downHeld) {y+=1.25;}
	if (leftHeld) {x-=1.25;}
	if (rightHeld) {x+=1.25}

	push();
	fill(255);
	noStroke();
  textSize(25);
	translate(1250,25);
  text(timer3,0,0);
	pop();

	if (frameCount % 60 == 0 && timer3 > 0) {
    timer3 --;
  }
}

function winThad() {

	if (x >= width*0.95) {
		if (y >= height*0.6) {
		push();
		fill(0);
		rectMode(CENTER);
		translate(width/2,height/2);
		rect(0,0,width,height);
		pop();

		push();
		fill(0,255,0);
		noStroke();
		textAlign(CENTER);
		textSize(75);
		translate(width/2,height/2);
    text("MISSION COMPLETE!",0,0);
		pop();

		push();
		fill(255);
		textAlign(CENTER);
		textSize(25);
		translate(width/2, height*0.6);
		text("You've succesfully completed every challenge and \nnow we know for certain that you ARE the true Chosen One! \nGood thing too, becuse it only gets worse from here... \nThe Age of Darkness has come upon us!",0,0);
		pop();

		push();
		fill(150);
		noStroke();
		textAlign(RIGHT);
		textSize(20);
		translate(width*0.9, height*0.9);
		text("Reload to restart",0,0);
		pop();

		timer3 = 3600;
		}
}
}

function loseThad() {

  if (timer3 == 0) {
		push();
		fill(0);
		rectMode(CENTER);
		translate(width/2,height/2);
		rect(0,0,1280,720);
		pop();

		push();
		fill(255,0,0);
		noStroke();
		textAlign(CENTER);
		textSize(75);
		translate(width/2,height/2);
    text("YOU FAILED!",0,0);
		pop();

		push();
		fill(255);
		textAlign(CENTER);
		textSize(25);
		translate(width/2, height*0.6);
		text("OH NO! \nYou took too long. The ogre woke up and ate you.... \nYou're no use to use now that you're dead!",0,0);
		pop();

		push();
		fill(150);
		noStroke();
		textAlign(RIGHT);
		textSize(20);
		translate(width*0.9, height*0.9);
		text("Click ENTER to be brought back to life \nand restart your quest.",0,0);
		pop();
	}
}

function activateKeys (startX, startY, directionX, directionY) {

	this.position = createVector(startX, startY);
	this.direction = createVector(directionX, directionY);

	if (upHeld) { buckets[buckets.length - 1].move(0,-2);}
	if (downHeld) { buckets[buckets.length - 1].move(0,2); }
	if (leftHeld) { buckets[buckets.length - 1].move(-2,0);	}
	if (rightHeld) { buckets[buckets.length - 1].move(2,0); }
}

function keyPressed() {

	if(state == 1) {
		if (key === 'z'){
		zKey = true;
		state = 2;
		}
	}

	if(state == 2) {
	if (key === "Enter"){
				state = 1;
			}
	}

	if(state == 3) {
	if (key === "Enter"){
				state = 1;
				timer2=30;
			}
	}

	if(state == 4) {
	if (key === "Enter"){
				state = 1;
			}
	}

	if (key === "ArrowUp"){upHeld = true; }
	if (key === "ArrowDown"){ downHeld = true; }
	if (key === "ArrowLeft"){ leftHeld = true; }
	if (key === "ArrowRight"){ rightHeld = true; }
}

function keyReleased() {

	if (key == "z"){ zKey = false; }

	if (key === "ArrowUp"){ upHeld = false; }
	if (key === "ArrowDown"){ downHeld = false; }
	if (key === "ArrowLeft"){ leftHeld = false; }
	if (key === "ArrowRight"){ rightHeld = false; }
}

function mouseClicked() {
	state++;
}

var Bucket = function(startX, startY) {
	this.position = createVector(startX, startY);
	this.displayPosition = createVector(startX, startY);
	this.direction = createVector(1,1);
	this.bucketComplete = false;
}

Bucket.prototype.display = function(){
	push();
	this.displayPosition = p5.Vector.lerp(this.position, this.displayPosition, 0.9);
	imageMode(CENTER);
	translate(this.displayPosition.x, this.displayPosition.y);
	image(bucket,0,0,50,75);
	pop();

	if (this.position.x >= width*0.8) {

	if (this.bucketComplete == false) {
			this.bucketComplete = true;
			buckets.push(new Bucket(width*0.2,height*0.65));
		}
	}
}

Bucket.prototype.move = function(xMove, yMove) {
	if (bucketComplete == false) {
	this.position.x += xMove;
	this.position.y += yMove;

	if (this.position.x < 0) { this.position.x = 0; }
	if (this.position.x > width) { this.position.x = width; }
	if (this.position.y < 0) { this.position.y = 0; }
	if (this.position.y > height) { this.position.y = height; }
	}
}


function Star(lvector) {
    this.location = lvector;
    this.lifespan = 255.0;
}

Star.prototype.run = function() {
    this.update();
    this.display();
}

Star.prototype.update = function() {
    this.lifespan -= 1.0;
}

Star.prototype.display = function() {
    stroke(255, this.lifespan);
    fill(255, this.lifespan);
    ellipse(this.location.x, this.location.y, this.lifespan/75.0, this.lifespan/75.0);
}

Star.prototype.isDead = function() {
    return (this.lifespan < 0);
}

function Galaxy(location) {
    this.origin = location;
    this.stars = [];
}

Galaxy.prototype.addStar = function() {
    this.stars.push(new Star(new p5.Vector(random(width), random(height))));
}

Galaxy.prototype.run = function() {
    var s;
    for (var i = this.stars.length - 1; i >= 0; i--) {
        s = this.stars[i];
        s.run();
        if (s.isDead()) {
            this.stars.splice(i, 1);
        }
    }
}
