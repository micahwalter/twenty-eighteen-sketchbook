function setup() {
    createCanvas(windowWidth, windowHeight);
    textSize(16);
}

function draw() {
    
    
    var sinewave = [];

    for (var i=0; i<width; i++) {
        var amount = map(i, 0, width, 0, PI);
        sinewave[i] = abs(sin(amount));
    }

    for (var i=0; i<width; i++) {
        stroke(sinewave[i] * 255);
        line(i, 0, i, height);
    }
    
    text('January 3, 2018', 20,  windowHeight - 20);
    fill(255, 255, 255);

    
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}