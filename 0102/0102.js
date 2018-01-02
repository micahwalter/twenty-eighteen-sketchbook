function setup() {
    createCanvas(windowWidth, windowHeight);
    textSize(16);
}

function draw() {

    for (var i=0; i<width; i++) {
        stroke(i/width * 255);
        line(i, 0, i, height);
    }
    
    text('January 2, 2018', 20,  windowHeight - 20);
    fill(255, 255, 255);

    
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}