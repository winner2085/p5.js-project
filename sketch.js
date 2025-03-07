let snowflakes = [];

function setup() {
    createCanvas(710, 400);
    /*background(0);
    strokeWeight(10);
    colorMode(HSB);
    describe('A blank canvas where the user draws by dragging the mouse');
    let drawButton = createButton('Rainbow Draw');
    let kButton = createButton('Kalaidescope');
    let snowButton = createButton('Snow Day'); */

    angleMode(DEGREES);

  // Create snowflake objects
  for (let i = 0; i < 300; i++) {
    snowflakes.push(new Snowflake());
  }
}

function draw() {
    background(0);
  
    // Update and display each snowflake in the array
    let currentTime = frameCount / 60;
  
    for (let flake of snowflakes) {
      // Update each snowflake position and display
      flake.update(currentTime);
      flake.display();
    }
  }
  
  // Define the snowflake class
  
  class Snowflake {
    constructor() {
      this.posX = 0;
      this.posY = random(-height, 0);
      this.initialAngle = random(0, 360);
      this.size = random(2, 5);
      this.radius = sqrt(random(pow(width / 2, 2)));
      this.color = color(random(200, 256), random(200, 256), random(200, 256));
    }
  
    update(time) {
      // Define angular speed (degrees / second)
      let angularSpeed = 35;
  
      // Calculate the current angle
      let angle = this.initialAngle + angularSpeed * time;
  
      // x position follows a sine wave
      this.posX = width / 2 + this.radius * sin(angle);
  
      // Different size snowflakes fall at different y speeds
      let ySpeed = 8 / this.size;
      this.posY += ySpeed;
  
      // When snowflake reaches the bottom, move it to the top
      if (this.posY > height) {
        this.posY = -50;
      }
    }
  
    display() {
      fill(this.color);
      noStroke();
      ellipse(this.posX, this.posY, this.size);
    }
  }

  

  
 /* function mouseDragged() {
    let lineHue = mouseX - mouseY;
    stroke(lineHue, 90, 90);
    line(pmouseX, pmouseY, mouseX, mouseY);
  } */