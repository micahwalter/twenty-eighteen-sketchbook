var color1_hue = 50;
var color1_saturation = 50;
var color1_brightness = 50;

var color2_hue = 50;
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
    gui.addGlobals('color1_hue', 'color1_saturation', 'color1_brightness', 'color2_hue', 'color2_saturation', 'color2_brightness');
 
}

function draw() {
    
    var c1 = color(color1_hue, color1_saturation, color1_brightness);
    var c2 = color(color2_hue, color2_saturation, color2_brightness);

    for (var i = 0; i <= height; i++) {
        var inter = map(i, 0, height, 0, 1);
        var c = lerpColor(c1, c2, inter);
        stroke(c);

        line(0, i, 0+width, i);
   }
    
    text('January 7, 2018 - ( press "s" to save )', 20,  windowHeight - 20);
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
