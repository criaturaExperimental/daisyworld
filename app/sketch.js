var radius;
var color_center;
var color_trunk;
var trunk_wide;
var trunk_height;
var color_petal;
var petal_wide;
var petal_long;
var petals;
var petal_separation;
var petal_y;

function setup() {
    createCanvas(800, 640);
    radius = random(20, 80);
    console.log(radius);
    color_center = color(random(0,255), random(0,255), random(0,255));
    color_trunk = color(random(0,255), random(0,255), random(0,255));
    color_petal = color(random(0,255), random(0,255), random(0,255));

    trunk_height = random(20, height/2);
    trunk_wide = random(2, radius/2)
    // petals = random(3, 10);
    petals = 6;
    petal_separation = 80;
    petal_y = 10;
    // petal_long = random(10, trunk_height - 4);
    petal_long = 100;
    petal_wide = 50;
    // petal_wide = random(5, 20);

    // noStroke();

    fill(color_trunk);
    rect((width/2)-(trunk_wide/2), (height/2), trunk_wide, trunk_height);

    fill(color_center);
    ellipse(width/2, height/2, radius, radius);

    translate(width/2, height/2)
    fill(color_petal);
    for (var i = 0; i < petals; i++) {
        rect(0, 0 + radius/4, petal_wide, petal_long);
        rotate(1);
    }
}

function draw() {

}