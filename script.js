import * as THREE from 'https://threejs.org/build/three.module.js';

function main() {
  const canvas = document.querySelector('#c');
  canvas.width = screen.availWidth;
  canvas.height = screen.availHeight;
  const renderer = new THREE.WebGLRenderer({canvas});

  const fov = 75;
  const aspect = 1;  // the canvas default
  const near = 0.1;
  const far = 5;
  const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
  camera.position.z = 2;

  const scene = new THREE.Scene();
//   scene.background = 0xFFFF00;

  const boxWidth = 0.5;
  const boxHeight = 0.5;
  const boxDepth = 0.5;
  const geometry = new THREE.BoxGeometry(boxWidth, boxHeight, boxDepth);

  const material = new THREE.MeshPhongMaterial({color: 0x44aa88});  // greenish blue

  const cube1 = new THREE.Mesh(geometry, material);
  const cube2 = new THREE.Mesh(geometry, material);
  const cube3 = new THREE.Mesh(geometry, material);
  cube1.position.y = 1;
  cube1.position.x = -1;
  cube3.position.y = -1;
  cube3.position.x = 1;
  scene.add(cube1);
  scene.add(cube2);
  scene.add(cube3);



  const color = 0xFFFFFF;
  const intensity = 1;
  const light1 = new THREE.PointLight(color, intensity,100);
  const light2 = new THREE.DirectionalLight(color, intensity);
  light1.position.set(0,0, 3);
//   light2.position.set(0, 1, 4);

  scene.add(light1);
  scene.add(light2);

//   renderer.render(scene, camera);


function render(time){
    time *= 0.001;
    cube1.rotation.x = time;
    cube2.rotation.z = time;
    cube3.rotation.y = time;
    renderer.render(scene,camera);
    requestAnimationFrame(render);
}
requestAnimationFrame(render);


}

main();
