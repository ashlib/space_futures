//How to make particles stay within orb?
//Raghnall the Wise...Ragnahla...Tower of Light tower for scholars...there is a riddle maybe within the stones
// Bazala the Generous... Bazalis...Well of Kindness...get all buckets to the other side of bridge before rope collapses
// Thaddia the Valient...Thadius...leading soldiers in battle...find the weapon (if mouse x dist is here...or if mouxe clicked here...)
//CREATE CLASSES FOR EACH GAME?

//use vectors and distance for mouseover
//use vectors for all positioning...set variable and then create Vector HOOOOW???
//How do I shut off boolean
var v1;
var v2;
var v3;
var v4;
var v5;
var v6;
var v7;
var v8;

var g;
var bottom;
var proph1;
var proph2;
var proph3;
var thirdeye;
var foureyes;
var zKey;

state = 0;

function preload() {
	bottom = loadImage("orb_bottom.png");
	thirdeye = loadImage("third_eye.png");
	foureyes = loadImage("handeyes.png");
	proph1 = loadImage("Raghnall.png");
	proph2 = loadImage("Bazala.png");
	proph3 = loadImage("Thaddia.png");
}


function setup() {
	createCanvas(1280,720);
	background(0);

	var v1 = createVector(640,360);

	g = new Galaxy(new p5.Vector(width/2, height/2));
}

function draw() {
	if (state == 0) {
		background(0);
		homeScreen();
	}
	if (state == 1) {
		background(0);
		prophecy();
	}
	if (state == 2) {
		background(0);
		planets();
	}
	if (state==3) {
		background(0);
		ragnChal();
	}
	if (state==4) {
		background(0);
		bazChal();
	}
	if (state==5) {
		background(0);
		thadChal();
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

function homeScreen() {
}

function prophecy() {
	push();
	fill(200,0,255);
	noStroke();
	// translate(v1.x,v1.y);
	translate(width/2,height/2);
	ellipse(0,0,500,500);
	pop();

	g.addStar();
  g.run();

	push();
	translate(width/2 - 205,height/2 + 200);
	image(bottom,0,0,450,75);
	pop();
}

function planets() {
	g.addStar();
  g.run();

	push();
	fill(155);
	noStroke();
	translate(width/2 - 450, height/2);
	ellipse(0,0,100,100);
	pop();

	push();
	fill(155);
	noStroke();
	translate(width/2, height/2);
	ellipse(0,0,100,100);
	pop();

	push();
	fill(155);
	noStroke();
	translate(width/2 + 450, height/2);
	ellipse(0,0,100,100);
	pop();
}

function ragnChal() {
	g.addStar();
  g.run();

	push();
	translate(width/2 - 600,height/2);
	image(proph1,0,0,width/4, height/2);
	pop();
}

function bazChal() {
	g.addStar();
  g.run();

	push();
	translate(width/2 - 600,height/2);
	image(proph2,0,0,width/3.75, height/2);
	pop();
}

function thadChal() {
	g.addStar();
  g.run();

	push();
	translate(width/2 - 600,height/2);
	image(proph3,0,0,width/4.6, height/2);
	pop();
}

function keyPressed() {
	if(state == 3) {
		if (key == "z"){
		zKey = true;
		state = 4;
		}
}
	// if (state == 4) {
	// 	zKey = false;
	// }

// 	if(state == 4) {
// 		if (key == "z"){
// 		zKey = true;
// 		state = 5;
// 		}
// }


}

function mouseClicked() {
	state++;
}
