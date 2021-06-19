import { World } from './World/World';

function main(){
    const container = document.querySelector('#scene-container');
    const show = document.getElementById("showWorld");
    const stop = document.getElementById("stop");
    const world = new World(container);


    // show.onclick = world.render;
    show.onclick = world.start;
    stop.onclick = world.stop;
    // world.render();
}
main();