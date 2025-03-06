function setup(){
    createCanvas(710, 400);
    background(0);
    strokeWeight(7);
    colorMode(HSB);
}

function mouseDragged(){
    let lineHue = mouseX - mouseY;
    stroke(lineHue, 90, 90);
    lineHue(pmouseX, pmouseY, mouseX, mouseY);
}

setup();
mouseDragged();