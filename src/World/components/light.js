import { DirectionalLight } from 'three';

function createLight(){

    const light = new DirectionalLight(0x610858, 8);
    light.position.set(10, 10, 10);
    
    return light;
}

export{createLight}