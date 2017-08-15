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

function setup() {
    createCanvas(800, 640);
    radius = random(20, 80);
    console.log(radius);
    color_center = color(random(0,255), random(0,255), random(0,255));
    color_trunk = color(random(0,255), random(0,255), random(0,255));
    color_petal = color(random(0,255), random(0,255), random(0,255));

    trunk_height = random(20, height/2);
    trunk_wide = random(10, radius/2)
    petals = ceil(random(5, 10));
    // petals = 10;
    petal_separation = 80;
    petal_long = random(trunk_height/6, trunk_height*0.8);
    // petal_long = 100;
    // petal_wide = 50;
    petal_wide = random(trunk_wide*1.4, trunk_wide*2);

    noStroke();
    translate(width/2, height/2)

    fill(color_trunk);
    rect(0-(trunk_wide/2), 0, trunk_wide, trunk_height);

    fill(color_petal);
    for (var i = 0; i < petals; i++) {
        rect(0, 0 + radius/4, petal_wide, petal_long);
        rotate((2*PI)/petals);
    }

    fill(color_center);
    ellipse(0, 0, radius, radius);
}

function draw() {

}