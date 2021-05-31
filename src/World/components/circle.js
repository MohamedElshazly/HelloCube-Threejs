import { CircleBufferGeometry, MeshBasicMaterial, MeshStandardMaterial, Mesh } from 'three';

function createCircle() {
    const radius = 5; 
    const segments = 100; 

    const geometry = new CircleBufferGeometry(radius, segments);
    const material = new MeshBasicMaterial({color: '#27b85c'});
    const circle = new Mesh(geometry, material);
    circle.position.set(8, 0, 0);
    circle.rotation.set(-0.5, -0.1, 0.8);


    return circle;
}

export {createCircle}