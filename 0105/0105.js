var waves = 3;
var h = 50;
var s = 50;

var visible = true;
var gui;

var canvas;

function setup() {
    canvas = createCanvas(windowWidth, windowHeight);
    textSize(16);
    
    colorMode(HSB, 100);
    
    gui = createGui('CONTROLS');
    gui.addGlobals('waves', 'h', 's');
 
}

function draw() {
    
    
    var sinewave = [];

    for (var i=0; i<width; i++) {
        var amount = map(i, 0, width, 0, waves*PI);
        sinewave[i] = abs(sin(amount));
    }

    for (var i=0; i<width; i++) {
        stroke(h, s, sinewave[i] * 100);
        line(i, 0, i, height);
    }
    
    text('January 4, 2018', 20,  windowHeight - 20);
    fill(100);

    
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
