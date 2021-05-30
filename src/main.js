import { World } from './World/World';

function main(){
    const container = document.querySelector('#scene-container');
    const show = document.getElementById("showWorld");
    const world = new World(container);

    show.onclick = world.render;
    // world.render();
}
main();