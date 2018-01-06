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
    gui.addGlobals('h', 's');
 
}

function draw() {
    
    var c1 = color(h,s,100);
    var c2 = color(h,s,0);
    
    for (var i = 0; i <= height; i++) {
        var inter = map(i, 0, height, 0, 1);
        var c = lerpColor(c1, c2, inter);
        stroke(c);

        line(0, i, 0+width, i);
   }
    
    text('January 6, 2018', 20,  windowHeight - 20);
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
