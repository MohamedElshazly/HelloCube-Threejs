// // import './style.css'
// import {
//   BoxBufferGeometry,
//   Color,
//   Mesh,
//   MeshBasicMaterial,
//   PerspectiveCamera,
//   Scene,
//   WebGLRenderer,
// } from 'three';

// function main(){


// // just waiting for your beautiful creations!
// const container = document.querySelector('#scene-container');
// const renderer = new WebGLRenderer();

// //init scene
// const scene = new Scene();
// scene.background = new Color('#1c1936');
// //create camera
// const fov = 75;
// const aspect = container.clientWidth/ container.clientHeight;
// console.log(aspect);
// const near = 0.1;
// const far = 100;

// const camera = new PerspectiveCamera(fov, aspect, near, far); 
// //move camera a bit back
// camera.position.set(0, 0, 10);
// //create mesh(geometry, material)
// //geometry
// const width = 10; 
// const height = 10;
// const depth = 2;

// const geometry = new BoxBufferGeometry(width,height,depth);
// //material
// const material = new MeshBasicMaterial({color:'#bf93f5'});
// //create Mesh
// const cube = new Mesh(geometry, material);

// // add cube to scene
// scene.add(cube);

// //create renderer 
// renderer.setSize(container.clientWidth, container.clientHeight);
// renderer.setPixelRatio(window.devicePixelRatio);

// //add canvas to the dom
// container.append(renderer.domElement);

// renderer.render(scene, camera);
// }
// main();

