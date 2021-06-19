import { BoxBufferGeometry, MeshBasicMaterial, MeshStandardMaterial, Mesh, MathUtils } from 'three';

function createCube(){
    
    const radiansPerSecond = MathUtils.degToRad(90); 

    const width = 10; 
    const height = 10;
    const depth = 10;
    
    const geometry = new BoxBufferGeometry(width,height,depth);
    const material = new MeshStandardMaterial({color:'#a85d98'});
    const cube = new Mesh(geometry, material);
    cube.position.set(0, 2, 0);
    cube.rotation.set(-0.5, -0.1, 0.8);

    cube.tick = (delta) => {
        cube.rotation.z += radiansPerSecond * delta;
        cube.rotation.y += radiansPerSecond * delta;
        cube.rotation.x += radiansPerSecond * delta;
    }

    return cube;
}
export { createCube }