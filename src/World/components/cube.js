import { BoxBufferGeometry, MeshBasicMaterial, Mesh } from 'three';

function createCube(){

    const width = 10; 
    const height = 10;
    const depth = 2;
    
    const geometry = new BoxBufferGeometry(width,height,depth);
    const material = new MeshBasicMaterial({color:'#bf93f5'});
    const cube = new Mesh(geometry, material);
    cube.position.set(-5, 0, 0);

    return cube;
}
export { createCube }