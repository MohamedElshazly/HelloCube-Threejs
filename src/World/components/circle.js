import { CircleBufferGeometry, MeshBasicMaterial, MeshStandardMaterial, Mesh, MathUtils} from 'three';

function createCircle() {
    const radius = 5; 
    const segments = 100;
    
    let radiansPerSecond = 0;

    const geometry = new CircleBufferGeometry(radius, segments);
    const material = new MeshBasicMaterial({color: '#27b85c'});
    const circle = new Mesh(geometry, material);
    circle.position.set(8, 0, 0);
    circle.rotation.set(-0.5, -0.1, 0.8);

    circle.tick = (delta) => {
        radiansPerSecond += 0.01;
        circle.position.x += 0 + Math.cos(radiansPerSecond*delta)*10 ;
        circle.position.z += 0 + Math.sin(radiansPerSecond*delta)*10;
        
    }


    return circle;
}

export {createCircle}