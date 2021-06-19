import { createCamera } from './components/camera.js';
import { createCube } from './components/cube.js';
import { createCircle } from './components/circle.js';
import { createScene } from './components/scene.js';
import { createLight } from './components/light';
import { createRenderer } from './systems/renderer.js';
import { Resizer } from './systems/Resizer.js';
import { Loop } from './systems/Loop';
// import {CCapture} from 'ccapture.js';

// These variables are module-scoped: we cannot access them
// from outside the module
let camera;
let renderer;
let scene;
let light;
let loop;

var capturer = new CCapture( { format: 'gif', workersPath: 'node_modules/ccapture.js/src/' } );



class World{

    constructor(container){
        camera = createCamera();
        scene = createScene();
        light = createLight();
        renderer = createRenderer();
        loop = new Loop(scene, camera, renderer);

        container.append(renderer.domElement);

        const cube = createCube();
        const circle = createCircle();
        // cube.add(circle);

        loop.updatables.push(cube, camera);

        scene.add(cube, light);
        // scene.add(circle);
        console.log(scene.children);

        const resizer = new Resizer(container, camera, renderer);

        // resizer.onResize = () => {
        //     this.render();
        // }
    }

    render() {

        renderer.render(scene, camera);

    }

    start() {
        loop.start(capturer);
        // capturer.start();


    }

    stop() {
        loop.stop(capturer);
        // capturer.stop();
        // capturer.save();
    }
}

export{ World };