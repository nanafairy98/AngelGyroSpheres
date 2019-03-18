// "Parsimonious Vigorously Apprehensive Spirit of Verbrosity Compendium" by Kaneo

var spirits=[];
var camRotation=0;
// let spirits; // Declare object

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  // Create object

 for(var i=0; i < 30; i++){ //loop 5 times
    //put an object in the array for each loop
    // var d=random(100,200);
    // pulse[i] = new Pulser(width/2, height/2, d,d); 
  // spirits = new ghost();
  spirits[i] = new ghost();
  }

  colorMode(HSB, 360, 100, 100);
}

function draw() {
  //background(50, 89, 100);
  // background(50);
  background(0);


  // push();
  // translate(0,0,-600);
  // // fill(0, 120);
  // rect(0, 0, 5000, 5000);
  // pop();

  let orbitRadius= mouseX/2+50;
  let ypos= mouseY;
  let xpos= cos(radians(camRotation))*orbitRadius;
  let zpos= sin(radians(camRotation))*orbitRadius;
      
      camera(xpos, ypos, zpos, 0, 0, 0, 0, -1, 0);
      camRotation++;

  // let camX = map(mouseX, 0, width, -2, 2);
  // let camY = map(mouseY, 0, height, -2, 2);
  // rotateY(camX);
  // rotateX(camY);
  // let camZ = map(mouseX, )
  // let camY=0;

  // camera(camX, camY, (height/2)/ tan(PI / 6), 0, 0, 0, 0, 1, 0)
  for(var i=0; i < 30; i++){
  spirits[i].move();
  spirits[i].display();
  // spirits[i].rotation();
}
}

// My class
class ghost {
	constructor() {
    this.x = random(width);
    this.y = random(height);
    this.z = random(0-width,700);
    this.diameter = random(10, 200);
    this.speed = 2;
    this.dim = width*.5;
    this.rX;
    this.rY;
    this.h = random(0, 360);
    this.accel = random(-1,1);
    // this.c = random(  )
  }

  move() {
    this.x += random(-this.speed, this.speed);
    this.y += random(-this.speed, this.speed);
    this.z += random(-this.speed, this.speed);
    // push();
      // 
      // 
    // pop();
  }

//   rotation() {

// // push();
//     // translate(this.x, this.y, this.z);
//     this.rX = this.accel;
//     this.rY = this.accel;
    
//     // pop();

//   }


  display() {
    
    
  	// ellipseMode( RADIUS );
    ellipseMode( CENTER );
    
	// noFill();
	// noStroke()36
	// blendMode( BLEND ); //Not working?
 
  push();
  
      // translate(0-width*.5,0-height*.5, this.z);
      translate(this.x-width*.5,this.y-height*.5, this.z);
      
      // rotateY(this.rX);
      // translate(this.x,this.y, this.z);
  		
      for ( var i = 1; i <= this.diameter; i++ )
		{
			let f = random(-1,1);
			let ls = random(-10, 10);
			var c = int( map( i, 1, this.diameter, 0, 360 ) );
			// let b = c+= random(0,10);
			// let h = random(0,100);
			// stroke( c+ls, c*f, c*h );
      stroke(c-this.h+ls, c+this.h*f, c+this.h)
      // stroke(this.h, 90*f, 90);
			// this.h++;
		
			noFill();
			//fill(h,90,90);
			// h = (h + 1) % 360;
       // rotateY(this.rX); // Ball Mode
       rotateY(this.accel++);
      rotateX(this.accel++);

			ellipse(0, 0, i, i );
      // ellipse(0, 0, i, i );
		}
    //ellipse(this.x, this.y, this.diameter, this.diameter);
    pop();
  }
}
