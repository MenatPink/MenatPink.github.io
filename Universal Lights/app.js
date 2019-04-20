// Set the Scene size
const WIDTH = window.innerWidth;
const HEIGHT = window.innerHeight;
const starNumber = 10;

// Set the camera attributes

const VIEW_ANGLE = 45;
const ASPECT = WIDTH / HEIGHT;
const NEAR = 0.1;
const FAR = 10000;

// Get the DOM element to attach to
const container = document.querySelector('body');


// Create a WebGL renderer, camera and a scene

const renderer = new THREE.WebGLRenderer();
renderer.setClearColor("#151718", 1);
const camera = new THREE.PerspectiveCamera(
    VIEW_ANGLE,
    ASPECT,
    NEAR,
    FAR
);


//create the sphere's material
const sphereMaterial = new THREE.MeshLambertMaterial({
    color: 0xCC00FF
});

const scene = new THREE.Scene();

//Add the camera to the scene
camera.lookAt(new THREE.Vector3(0, 50, 0))
scene.add(camera);

// Start the renderer
renderer.setSize(WIDTH, HEIGHT);

//Attach the renderer-supplied to the DOM element.
container.appendChild(renderer.domElement);

//Set up the sphere vars

const RADIUS = 5;
const SEGMENTS = 16;
const RINGS = 16;

//Create a new mesh with sphere geometry - we will cover the sphereMaterial next!


//     //Move the Sphere back in Z so we can see it
// sphere.position.z = -300;

// // Finally, add the sphere to the scene.
scene.add(sphere);

// create a point light
const pointLight = new THREE.PointLight(0xFFFFFF);
const pointLight2 = new THREE.PointLight(0xFFFFFF);

// set its position
pointLight.position.x = 0;
pointLight.position.y = HEIGHT;
pointLight.position.z = 1600;
pointLight2.position.x = 0;
pointLight2.position.y = -HEIGHT;
pointLight2.position.z = 1600;
//add to the scene
scene.add(pointLight);
scene.add(pointLight2);


function Star(rad, zpos, xpos, ypos) {
    this.rad = rad;
    this.zpos = zpos;
    this.xpos = xpos;
    this.ypos = ypos;
}


//This will add a starfield to the background of a scene
var starsGeometry = new THREE.Geometry();

for (var i = 0; i < 500; i++) {

    var star = new THREE.Vector3();
    star.x = THREE.Math.randFloatSpread(Math.round(WIDTH));
    star.y = THREE.Math.randFloatSpread(Math.round(HEIGHT));
    star.z = THREE.Math.randFloatSpread(3000);

    starsGeometry.vertices.push(star);

}

function map(num, in_min, in_max, out_min, out_max) {
    var numerator = (num - in_min) * (out_max - out_min);
    var denominator = (in_max - in_min) + out_min;
    return numerator / denominator;
}
var randomTrueFalse = function () {
    return Math.random() >= 0.5 ? true : false;
}

var circleArr = [];
for (var i = 0; i < 500; i++) {
    var colorVary;
    var colorVary2;
    var colorVary3;


    var material = new THREE.MeshLambertMaterial();
    // { color: "rgb("+ colorVary2 +","+ colorVary3 +"," + colorVary + ")"}

    var sphere = new THREE.Mesh(new THREE.CircleGeometry(RADIUS, SEGMENTS, RINGS), material);

    sphere.position.x = THREE.Math.randFloatSpread(WIDTH);
    sphere.position.y = THREE.Math.randFloatSpread(HEIGHT);
    sphere.position.z = THREE.Math.randFloatSpread(3000);
    sphere.rotationSpeed = i * 0.0000000007;
    sphere.directionX = randomTrueFalse();

    colorVary = map(sphere.position.x, -WIDTH / 2, WIDTH / 2, 0, 1) * (Math.random());
    colorVary2 = map(sphere.position.y, -WIDTH / 2, WIDTH / 2, 0, 1) * (Math.random());
    colorVary3 = map(sphere.position.z, -WIDTH / 2, WIDTH / 2, 0, 1) * (Math.random());

    sphere.material.color = {
        r: colorVary2,
        g: colorVary3,
        b: colorVary,
    }
    circleArr.push(sphere);
    scene.add(sphere);
}
var starsMaterial = new THREE.PointsMaterial({
    color: 0xffffff
});

var starField = new THREE.Points(starsGeometry, starsMaterial);

scene.add(starField);

// sphere geometry
sphere.SphereGeometry



function randomStraightLines(obj, speed) {
    //For a certain amount of time,
    clearInterval(function () {
        // Select either the x, y or z property
        var position;
        var randomRoll = Math.random();
        if (randomRoll <= 0.33) {
            position = obj.rotation.x;
        } else if (randomRoll <= 0.66) {
            position = obj.rotation.y;
        } else {
            position = obj.rotation.z;
        }
    }, 3000);
    //rotate i.property, multiplied by a speed property
    obj.position += speed;
    // Then select a new x, y or z property

}

function rotatex(obj, speed) {
    obj.rotation.x += speed;
}

function rotateAccelerateX(obj, speed) {
    obj.rotation.x += speed;
    sphere.rotationSpeed += 0.0000001;
}

function rotatey(obj, speed) {
    obj.rotation.y += speed;
}

function rotatez(obj, speed) {
    obj.rotation.z += speed;
}

function sceneRotate() {
    scene.rotation.y += .0002;
}

window.addEventListener('resize', function () {
    var width = window.innerWidth;
    var height = window.innerHeight;
    renderer.setSize(width, height);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
});

var controls = new THREE.OrbitControls(camera);
camera.position.set(0, 20, 100);
controls.update();

var randomNumberX = 0.02;
var randomNumberY = 0.02;

(function () {
    setInterval(
        function () {
            randomNumberX = Math.round(Math.random() * 10) / 100;
            randomNumberY = Math.round(Math.random() * 10) / 100;
        }, 1000)
})();



function update() {
    // Draw
    var timer = Date.now() * .00009;
    // camera.rotation.y = Math.cos(timer);
    renderer.render(scene, camera);
    circleArr.forEach(function (i) {
        rotatex(i, randomNumberX);
        rotatey(i, randomNumberY);
    });
    controls.update();
    requestAnimationFrame(update);
}

// Schedule the first frame
requestAnimationFrame(update);