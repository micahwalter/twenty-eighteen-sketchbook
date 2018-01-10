

//var visible = true;
//var gui;

var canvas;


function setup() {

    canvas = createCanvas(windowWidth, windowHeight);
    textSize(16);
    
    colorMode(RGB, width);

}

function draw() {

    background(0);

    for (var x = 0; x <= width; x++){
        distance = dist(width/2, 200, x, 200);
        stroke(distance);
        line(x, 0, x, height);
    }
    
    
    fill(width);
    text('January 10, 2018 - ( press "s" to save )', 20,  windowHeight - 20);

}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}


function keyTyped() {
    if (key === 's') {
        saveCanvas(canvas);
    }
    
    return false;
}
