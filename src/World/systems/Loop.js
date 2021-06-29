import {Clock} from 'three';
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls'
// import CCapture from 'ccapture.js'; 

const clock = new Clock();
class Loop{
    constructor(scene, camera, renderer){
        this.scene = scene; 
        this.camera = camera;
        this.renderer = renderer;
        this.updatables = [];
        this.controls =  new OrbitControls( this.camera, this.renderer.domElement );
        this.controls.enableDamping = true;

         
    }
    


    start(capturer){

        this.renderer.setAnimationLoop(() => {
            this.controls.update();

            this.tick();
            this.renderer.render(this.scene, this.camera);

            capturer.capture(this.renderer.domElement);

        });
    }

    stop(capturer){
        this.renderer.setAnimationLoop(null);
        capturer.stop();

        // default save, will download automatically a file called {name}.extension (webm/gif/tar)
        capturer.save();
    }

    tick(){
        //get the delta
        const delta = clock.getDelta();

        for(const object of this.updatables){
            object.tick(delta);
        }
    }
}

export{Loop};