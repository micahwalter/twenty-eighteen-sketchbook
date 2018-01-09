var color1_hue = 10;
var color1_saturation = 80;
var color1_brightness = 80;

var color2_hue = 70;
var color2_saturation = 50;
var color2_brightness = 50

var visible = true;

var gui;

var canvas;

var dim;

function setup() {

    canvas = createCanvas(windowWidth, windowHeight);
    textSize(16);
    
    colorMode(HSB, 360, 100, 100);
    ellipseMode(RADIUS);

    gui = createGui('CONTROLS');
    gui.addGlobals('color1_hue', 'color1_saturation', 'color1_brightness', 'color2_hue', 'color2_saturation', 'color2_brightness');
    
    noStroke();
}

function draw() {

    background(0);
    
    var c1 = color(color1_hue, color1_saturation, color1_brightness);
    var c2 = color(color2_hue, color2_saturation, color2_brightness);


    for (var s = width; s > 0; --s) {
        var inter = map(s, 0, width, 0, 1);
        var c = lerpColor(c1, c2, inter);

        fill(c)
        rect(0, 0, s, s);
    }
    
    fill(100);
    text('January 9, 2018 - ( press "s" to save )', 20,  windowHeight - 20);

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
