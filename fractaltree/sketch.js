// Based on 

var init_length = 80;
var count = 50;
var flip = -1;

function setup() {
	createCanvas(windowWidth, windowHeight);
  angle = 0;
}

function draw() {
	if (count == 255 || count == 50)
		flip = flip*-1;
	if (flip > 0)
		count = count + 1;
	else
		count = count -1;

	background(50);
  stroke(count/3, count, count);
	strokeWeight(5);
  translate(width/2, height/2);
	rotate(-angle);
			//for (angle = 0; angle < TWO_PI; angle = angle +0.01) {
			angle = angle + 0.02;
			push();
			stroke(255);
			strokeWeight(10);
			branch(init_length, angle);
			pop();
			push();
			strokeWeight(5);
			stroke(count/5, count, count/5);
			branch(init_length, angle);
			pop();
			push();
			stroke(255);
			strokeWeight(10);
			branch(-init_length, angle);
			pop();
			push();
			strokeWeight(5);
			stroke(count/5, count, count/5);
			branch(-init_length, angle);
			pop();
	//	}
}

function branch(len, spin) {
  line(0, 0, 0, -len);
  translate(0, -len);
  if (len > 4 || len < -4) {
    push();
    rotate(spin);
    branch(len * 0.67, spin);
    pop();
    push();
    rotate(-spin);
    branch(len * 0.67, spin);
    pop();
  }

  //line(0, 0, 0, -len * 0.67);
}
