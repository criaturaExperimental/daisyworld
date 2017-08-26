// GLOBALS

var radius;
var color_center;
var color_trunk;
var trunk_wide;
var trunk_height;
var color_petal;
var petal_wide;
var petal_long;
var petals;
var bck_color;
var hill_color;

function coloring() {
    // COLORS
    color_center = color(random(0,255), random(0,255), random(0,255));
    color_petal = color(random(0,255), random(0,255), random(0,255));
    color_trunk = color(random(0,255), random(0,255), random(0,255));
    bck_color = color(random(0,20), random(0,20), random(50,255));
    hill_color = color(random(0,250), random(0,20), random(0, 255));
}

function setup() {
    createCanvas(800, 640);
    translate(width/2, height/2);

    seedTheWorld();

}

function createPlanet() {
    noStroke();
    background(bck_color);
    fill(hill_color);
    ellipse(0, height/2-50, width*1.5, height);
}

function createDaisy() {
    // DIMENSIONS
    radius = random(20, 80);
    trunk_height = random(radius*2, (height/2)*0.8);
    trunk_wide = random(10, radius/2)
    petals = ceil(random(7, 15));
    petal_long = random(trunk_height*0.4, trunk_height*0.8 - radius);
    petal_wide = random(trunk_wide*1.4, trunk_wide*2);

    // BLOOM!
    stroke(1);
    fill(color_trunk);
    rect(0-(trunk_wide/2), 0, trunk_wide, trunk_height);

    noStroke();
    fill(color_petal);
    for (var i = 0; i < petals; i++) {
        rect(0, 0 + radius/4, petal_wide, petal_long);
        rotate((2*PI)/petals);
    }

    stroke(2);
    fill(color_center);
    ellipse(0, 0, radius, radius);
}

function seedTheWorld(){
    coloring();
    createPlanet(bck_color, hill_color);
    createDaisy(color_center, color_petal, color_trunk);
}

function mouseClicked() {
    translate(width/2, height/2);
    seedTheWorld();
}

function draw() {

}