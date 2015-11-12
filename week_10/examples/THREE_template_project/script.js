//create a new scene
var scene = new THREE.Scene();
//create a new camera
var camera = new THREE.PerspectiveCamera( 60, window.innerWidth/window.innerHeight, 0.1, 1000 );

//create a new renderer
var renderer = new THREE.WebGLRenderer();
renderer.setClearColor(0xffffff);
renderer.setSize( window.innerWidth, window.innerHeight );
//add the renderer dom Element to our document body
document.body.appendChild( renderer.domElement );
//set the z position of our camera
camera.position.z = 5;

//write your setup code here...

//this function gets called once per draw frame
//a la the draw() function in p5.js
var render = function () {
  requestAnimationFrame( render );
  renderer.render(scene, camera);
};
render();