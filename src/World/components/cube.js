import { BoxBufferGeometry, SphereBufferGeometry ,MeshBasicMaterial, MeshStandardMaterial, Mesh, MathUtils,  TextureLoader } from 'three';

const createMaterial = () => {

    const textureLoader = new TextureLoader(); 

    const colorTexture = textureLoader.load(
        '/assets/textures/f1.png',
    );
    const aoTexture = textureLoader.load(
        '/assets/textures/f2.png',
    );
    const metallicTexture = textureLoader.load(
        '/assets/textures/f4.png',
    );
    const normalTexture = textureLoader.load(
        '/assets/textures/f5.png',
    );
    const roughnessTexture = textureLoader.load(
        '/assets/textures/f6.png',
    );
    const material = new MeshStandardMaterial({
        map:colorTexture,
        aoMap: aoTexture,
        metalnessMap:metallicTexture,
        roughnessMap:roughnessTexture,
        normalMap: normalTexture  
    });

    return material;
}

function createCube(){
    
    const radiansPerSecond = MathUtils.degToRad(90); 

    const width = 10; 
    const height = 10;
    const depth = 10;
    
    const geometry = new BoxBufferGeometry(width,height,depth);
    // const material = new MeshStandardMaterial({color:'#a85d98'});
    const material = createMaterial();
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