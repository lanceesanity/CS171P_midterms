let scene = new THREE.Scene();
let camera = new THREE.PerspectiveCamera( 100, window.innerWidth / window.innerHeight, 0.1, 10000 );
let renderer = new THREE.WebGLRenderer();
let starGeo = new THREE.Geometry();
   for(let i=0;i<50;i++) {
   let star = new THREE.Vector3(
      Math.random() * 600 - 300,
      Math.random() * 600 - 300,
      Math.random() * 600 - 300
   );
   star.velocity = 0;
   star.acceleration = 0;
   starGeo.vertices.push(star);
  }
  //floor
  const geomFloor= new THREE.BoxGeometry(10000,0.5,10000,1,1,1);
  let textureFloor= new THREE.TextureLoader().load( 'assets/textures/floor.jpg' );
  let matFloor = new THREE.MeshPhongMaterial({shading:THREE.FlatShading, map:textureFloor});
  let floor = new THREE.Mesh(geomFloor, matFloor);
  floor.position.set(-100,-370 ,-100);
  floor.castShadow = true;
  floor.receiveShadow = true;
  scene.add(floor);

//   //ring
//   var geomRing = new THREE.RingGeometry(100,300,720 );
//   var matRing= new THREE.MeshBasicMaterial( { color: 0xffff00, side: THREE.DoubleSide } );
//   var ring = new THREE.Mesh( geomRing, matRing );
//   ring.rotation.x =1.5;
//   ring.position.set(-1,-1 ,-1);
//   ring.castShadow = true;
//   ring.receiveShadow = true;
//   scene.add( ring );



  let sprite = new THREE.TextureLoader().load( 'assets/textures/wood.png' );
     let starMaterial = new THREE.PointsMaterial({
       color: 0xaaaaaa,
       size: 10,
       map: sprite
     });

     stars = new THREE.Points(starGeo,starMaterial);
     scene.add(stars);
 
     window.addEventListener("resize", onWindowResize, false);

renderer.setSize( window.innerWidth, window.innerHeight );
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
clock = new THREE.Clock();

let spotLight = new THREE.SpotLight( 0xffffff );
spotLight.position.set(500, 1500, 400);

spotLight.castShadow = true;
spotLight.shadow.camera.near = 500;
spotLight.shadow.camera.far = 10000;
spotLight.shadow.camera.fov = 30;
scene.add( spotLight );

// let spotLightHelper = new THREE.SpotLightHelper( spotLight );
// scene.add( spotLightHelper );



let ambientLight = new THREE.AmbientLight( 0x404040, .5 );
scene.add(ambientLight);

let light = new THREE.PointLight(0xffffff, 1.0, 600);
//scene.add (light);

//for statue
var loader = new THREE.GLTFLoader();
loader.load( 'assets/models/statue/scene.gltf', function ( gltf ) {
    gltf.scene.scale.set(200,200,200);
    gltf.scene.position.set(300,-2800,200);
	scene.add( gltf.scene );

}, undefined, function ( error ) {

	console.error( error );

} );


//for balloon

var loader = new THREE.GLTFLoader();

loader.load( 'assets/models/balloon/scene.gltf', function ( gltf ) {

  scene.add( gltf.scene );
  
  balloon = gltf.scene;
 gltf.scene.scale.set(10,10, 10);

 balloon.position.x=200;
 balloon.position.y=200;

 var x = false;
    var y = false;
    var z = false;

    //variables for the increasing speed of the cube whenever it hits the imaginary walls
    var x1spd = 1;
    var x2spd = 1;
    var x3spd = 1;
    var x4spd = 1;

    function animate() {

        if(x==false){
          balloon.position.x += x1spd;
         }
      
         //else statement will run together with else of y
         else{
            x==true;
            balloon.position.x -= x2spd;
         }
      
         //if statement for the y axis. will run together with the if(x==false)
         if(y==false){
          balloon.position.y += x3spd;
         }
      
         //else statement will run together with else of x
         else{
            y==true;
            balloon.position.y -= x4spd;
         }

         if(z==false){
          balloon.position.z += x3spd;
         }

         else{
             z==true;
             balloon.position.z -= x4spd;
         }
      
         //pesex
         if(balloon.position.x > 400){
            x=true;
         }
      
         else if(balloon.position.x < 100){
            x=false;
         }
      
         if(balloon.position.y > 400){
            y=true;
         }
      
         else if(balloon.position.y < 10){
            y=false;
         }

         if(balloon.position.z > 400){
             z=true;
         }

         else if (balloon.position.z < 100){
             z=false;
         }
         controls.update();
         requestAnimationFrame(animate);
         renderer.render(scene, camera);
     }
     animate();


}, undefined, function ( error ) {

	console.error( error );

} );
//for ufo

var loader = new THREE.GLTFLoader();

loader.load( 'assets/models/ufo/scene.gltf', function ( gltf ) {

  scene.add( gltf.scene );
  
  ufo = gltf.scene;
 gltf.scene.scale.set(1,1,1);

 ufo.position.x=-1800;
 ufo.position.y=1000;
 var x = false;
    var y = false;
    var z = false;

    //variables for the increasing speed of the cube whenever it hits the imaginary walls
    var x1spd = 1;
    var x2spd = 1;
    var x3spd = 1;
    var x4spd = 1;

    function animate() {

        if(x==false){
          ufo.position.x += x1spd;
         }
      
         //else statement will run together with else of y
         else{
            x==true;
            ufo.position.x -= x2spd;
         }
      
         //if statement for the y axis. will run together with the if(x==false)
         if(y==false){
          ufo.position.y += x3spd;
         }
      
         //else statement will run together with else of x
         else{
            y==true;
            ufo.position.y -= x4spd;
         }

         if(z==false){
          ufo.position.z += x3spd;
         }

         else{
             z==true;
             ufo.position.z -= x4spd;
         }
      
         //pesex
         if(ufo.position.x > 400){
            x=true;
         }
      
         else if(ufo.position.x < 100){
            x=false;
         }
      
         if(ufo.position.y > 400){
            y=true;
         }
      
         else if(ufo.position.y < 10){
            y=false;
         }

         if(ufo.position.z > 400){
             z=true;
         }

         else if (ufo.position.z < 100){
             z=false;
         }
         ufo.rotation.y+=0.03;
         controls.update();
         requestAnimationFrame(animate);
         renderer.render(scene, camera);
     }
     animate();


}, undefined, function ( error ) {

	console.error( error );

} );
//for car
var loader = new THREE.GLTFLoader();
loader.load( 'assets/models/car/scene.gltf', function ( gltf ) {
    car=gltf.scene;
    gltf.scene.scale.set(10,10,10);
    gltf.scene.position.set(-500,-365,1);
	scene.add( car );

}, undefined, function ( error ) {

	console.error( error );

} );

//for ring
loader.load( 'assets/models/rings/scene.gltf', function ( gltf ) {
   ring=gltf.scene;
   gltf.scene.scale.set(70,70,70);
   gltf.scene.position.set(-100,300,1);
  scene.add( ring );
   function animate() {
        ring.rotation.y+=0.03;
        controls.update();
        requestAnimationFrame(animate);
        renderer.render(scene, camera);
    }
    animate();
}, undefined, function ( error ) {

  console.error( error );

} );
//for ring
loader.load( 'assets/models/rings/scene.gltf', function ( gltf ) {
   ring2=gltf.scene;
   gltf.scene.scale.set(70,70,70);
   gltf.scene.position.set(-100,500,1);
   ring2.rotation.z=0.02;
  scene.add( ring2 );
   function animate() {
        ring2.rotation.y+=0.03;
        controls.update();
        requestAnimationFrame(animate);
        renderer.render(scene, camera);
    }
    animate();
}, undefined, function ( error ) {

  console.error( error );

} );


let mainBackground = new THREE.TextureLoader().load('assets/textures/background2.jpg' );
scene.background=(mainBackground)
;
controls = new THREE.OrbitControls (camera);
camera.position.set( 1, 60, 700 );
// camera.position.x = 100;
// camera.position.y = 0;

document.body.appendChild( renderer.domElement );

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  }
function animate() {
   camera.position.z -= 1.30;

    // ring.rotation.z += 0.02;
  starGeo.vertices.forEach(p => {
    p.velocity += p.acceleration
    p.x -= p.velocity;
   
    if (p.x < -200) {
      p.x = 200;
      p.velocity = 0;
    }
  });
  starGeo.verticesNeedUpdate = true;
  stars.rotation.x +=0.010;
  
  renderer.render(scene, camera);
  controls.update();
   requestAnimationFrame( animate );
   document.addEventListener("keydown", onDocumentKeyDown, false);
function onDocumentKeyDown(event) {
    var keyCode = event.which;
    if (keyCode == 90) {
        camera.position.x = 300;
        camera.position.y = 800;
        camera.position.z = 600;
        camera.rotation.x = 10;
        camera.rotation.y = 0;
        camera.rotation.z = 0;
    }
    if (keyCode == 88) {
        camera.position.x = -400;
        camera.position.y = 600;
        camera.position.z = 300;
        camera.rotation.x = 0;
        camera.rotation.y = 0;
        camera.rotation.z = 0;
    }
    if (keyCode == 67) {
        camera.position.x = -800;
        camera.position.y = -300;
        camera.position.z = 500;
        camera.rotation.x = 10;
        camera.rotation.y = 100;
        camera.rotation.z = 0;
    }
    if (keyCode == 32) {
      camera.position.x = 0;
      camera.position.y = 200;
      camera.position.z = 1200;
      camera.rotation.x = 0;
      camera.rotation.y = 200;
      camera.rotation.z = 0;
    }
    if (keyCode == 86) {
        camera.position.x = 0;
        camera.position.y = 1500;
        camera.position.z = 1500;
        camera.rotation.x = 0;
        camera.rotation.y = 0;
        camera.rotation.z = 0;
    }
            
        }
}
animate();