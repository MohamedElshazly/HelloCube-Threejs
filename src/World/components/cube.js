import { BoxBufferGeometry, MeshBasicMaterial, MeshStandardMaterial, Mesh } from 'three';

function createCube(){

    const width = 10; 
    const height = 10;
    const depth = 10;
    
    const geometry = new BoxBufferGeometry(width,height,depth);
    const material = new MeshStandardMaterial({color:'#a85d98'});
    const cube = new Mesh(geometry, material);
    cube.position.set(-5, 2, 0);
    cube.rotation.set(-0.5, -0.1, 0.8);

    return cube;
}
export { createCube }