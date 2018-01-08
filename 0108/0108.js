var waves = 3;
var color1_hue = 10;
var color1_saturation = 80;
var color1_brightness = 80;

var color2_hue = 70;
var color2_saturation = 50;
var color2_brightness = 50

var visible = true;
var gui;

var canvas;

function setup() {
    canvas = createCanvas(windowWidth, windowHeight);
    textSize(16);
    
    colorMode(HSB, 100);
    
    gui = createGui('CONTROLS');
    gui.addGlobals('waves', 'color1_hue', 'color1_saturation', 'color1_brightness', 'color2_hue', 'color2_saturation', 'color2_brightness');
 
}

function draw() {
    
    var c1 = color(color1_hue, color1_saturation, color1_brightness);
    var c2 = color(color2_hue, color2_saturation, color2_brightness);

    var strokes = [];

    for (var i=0; i<width; i++){
        var inter = map(i, 0, width, 0, waves*PI);
        strokes[i] = lerpColor(c1, c2, abs(sin(inter)));
    }
    
    for (var i = 0; i < width; i++) {
        stroke(strokes[i]);
        line(i, 0, i, height);
   }
    
    text('January 8, 2018 - ( press "s" to save )', 20,  windowHeight - 20);
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
