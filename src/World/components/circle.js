import { CircleBufferGeometry, MeshBasicMaterial, Mesh } from 'three';

function createCircle() {
    const radius = 5; 
    const segments = 32; 

    const geometry = new CircleBufferGeometry(radius, segments);
    const material = new MeshBasicMaterial({color: '#27b85c'});
    const circle = new Mesh(geometry, material);
    circle.position.set(10, 0, 0);

    return circle;
}

export {createCircle}