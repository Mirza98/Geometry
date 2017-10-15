var anglex = 0;
var angley = 0;


var x = -200;

function setup(){
    var W = window.innerWidth, H = window.innerHeight;
    createCanvas(W, H, WEBGL);

    x = innerHeight/3;


}


function mouseDragged(){
    anglex = mouseY/height * 6;
    angley = mouseX/width * 6;
}




function draw(){
    background(173);
    pointLight(255,0,255, 200,0,0);
    
    
        rotateX(anglex);
    rotateY(-angley);





    // box();
    push();
    translate(100,100,100);
    sphere(10);
    pop();



    fill(255,0,255);
    rect(x,x,-2*x,-2*x);
    //torus(100);


    //push();
    rotateX(PI/2);
    fill(0,255,255);
    rect(x,x,-2*x,-2*x);
    //popMatrix();

    rotateY(PI/2);
    fill(255,255,0);
    rect(x,x,-2*x,-2*x);



}