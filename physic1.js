
var Engine = Matter.Engine,
    //Render = Matter.Render,
    World = Matter.World,
    Bodies = Matter.Bodies;

var engine;
var world;
var boxes = [];
var boundaries = [];

var ground;

var t = 0;

function setup(){
	// createCanvas(400, 400);
    createCanvas(windowWidth, windowHeight);
    engine = Engine.create();
    world = engine.world;

    var w = windowWidth;
    var h = windowHeight;

    // boundaries.push(new Boundary(150, 300, width*0.6, 10, 0.3));
    // boundaries.push(new Boundary(250, 200, width*0.6, 10, -0.3));


    boundaries.push(new Boundary(w/2, h/1.6, width*0.6, 10, 0.3));

    // var options = {
    // 	isStatic: true
    // }
    // ground = new Boundary(200, height-50, width, 10);
   
   // World.add(world, ground);

   // Engine.run(engine);
    
    
}


// function mouseDragged(){
function mousePressed(){
    boxes.push(new Box(mouseX, mouseY, random(5, 10)));
}




function draw(){
	background(51);
    Engine.update(engine);
    for(var i = 0; i< boxes.length; i++){
	    boxes[i].show();
	    if(boxes[i].isOffScreen()){
	    	boxes[i].removeFromWorld();
	    	boxes.splice(i, 1);
	    	i--;
	    }
    }


    for(var i = 0; i < boundaries.length; i++){
        boundaries[i].show();
    }

    var w = windowWidth;
    var h = windowHeight;
    // if (t % 4 == 0){
    //   boxes.push(new Box(w*0.3, h*0.2, random(5, 10)));
    // }
    // t += 0.25;



}





function Box(x, y, r){
	var options = {
		friction: 0.1,
		restitution: 0.6
	}
    this.body = Bodies.rectangle(x, y, 50, 100, options);
    // this.body = Bodies.circle(x, y, r, options);
    this.w = 50;//w;
    this.h = 100;//h;
    this.r = r;
    World.add(world, this.body);



    this.isOffScreen = function(){
        var pos = this.body.position;
        return(pos.y > height + 100);
    }


     this.removeFromWorld = function(){
     	World.remove(world, this.body);
     }


    // this.show = function(){
    // 	var pos = this.body.position;
    // 	var angle = this.body.angle;

    // 	push();
    //     translate(pos.x, pos.y);
    //     rotate(angle);
    //     rectMode(CENTER);
    //     strokeWeight(1);
    //     fill(0, 233, 245, 100);
        
    //     ellipse(0,0, this.r * 2);

    // 	pop();
    // }
    this.show = function(){
        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        strokeWeight(1);
        fill(245, 0, 245, 100);
        rect(0,0, this.w, this.h);

        pop();
    }




}











function Boundary(x, y, w, h, a){
	var options = {
		friction: 0.1,
		restitution: 0.6,
		angle: a,
		isStatic: true
	}
    this.body = Bodies.rectangle(x, y, w, h, options);
    this.w = w;
    this.h = h;
    World.add(world, this.body);



    this.show = function(){
    	var pos = this.body.position;
    	var angle = this.body.angle;

    	push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        strokeWeight(1);
        fill(245, 0, 245, 100);
        rect(0,0, this.w, this.h);

    	pop();
    }




}



















