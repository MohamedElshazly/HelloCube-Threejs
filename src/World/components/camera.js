import {PerspectiveCamera} from 'three';

function createCamera(){
    const fov = 75;
    const aspect = 2;
    const near = 0.1;
    const far = 100;
    const OriginZ = 20;
    let posZ = 20;
    const posZMax = 50;
    let inversionFactor = 1;

    const camera = new PerspectiveCamera(fov, aspect, near, far); 
    camera.position.set(0, 0, OriginZ);

    camera.tick = () =>{
        posZ = (((posZ + 0.1) % posZMax*inversionFactor));

        if(((posZ + 0.1) % posZMax*inversionFactor)  >= (posZMax - 0.1)) {
            // inversionFactor *= -1;
            posZ = OriginZ;
            // console.log("___________________________"+posZ+"________________________________");
            // posZ = (((posZ + 0.1) % posZMax*inversionFactor));
        }
        // console.log(posZ+"|||||||"+inversionFactor);
        // if(posZ <= ) 
        camera.position.z = posZ * inversionFactor ;
        // console.log(camera.position.z); 
    }
    return camera;
}

export { createCamera }