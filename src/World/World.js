import { createCamera } from './components/camera.js';
import { createCube } from './components/cube.js';
import { createCircle } from './components/circle.js';
import { createScene } from './components/scene.js';

import { createRenderer } from './systems/renderer.js';
import { Resizer } from './systems/Resizer.js';

// These variables are module-scoped: we cannot access them
// from outside the module
let camera;
let renderer;
let scene;

class World{

    constructor(container){
        camera = createCamera();
        scene = createScene();
        renderer = createRenderer();

        container.append(renderer.domElement);

        const cube = createCube();
        const circle = createCircle();
        scene.add(cube);
        scene.add(circle);

        const resizer = new Resizer(container, camera, renderer);
    }

    render() {
        renderer.render(scene, camera);

    }
}

export{ World };