function setup() {
    createCanvas(windowWidth, windowHeight);
    textAlign(CENTER);
    textSize(32);
}

function draw() {

    background(255,255,0);

    text('Hello, 2018!', windowWidth/2, windowHeight/2);
    fill(0, 0, 255);

}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}