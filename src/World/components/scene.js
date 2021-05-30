// import {createCube} from './cube';
import {Color, Scene} from 'three';

function createScene(){
    const scene = new Scene();
    scene.background = new Color('#1c1936');

    return scene;

}

export{createScene}