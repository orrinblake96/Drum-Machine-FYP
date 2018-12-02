import {THREE} from './three.js';
import * from '../../build/leap-widgets-0.1.0.js';

function createRoundButton(name, x, y, z, colourPressed, colourReleased){
  let circleGeo = new THREE.CircleGeometry(0.033, 100);
  buttonMesh = new THREE.Mesh(circleGeo, material.clone());
  buttonMesh.name = "round button";

  buttonMesh.position.set(x, y, z);
  scene.add(buttonMesh);

  let roundButton = new PushButton(
    new InteractablePlane(buttonMesh, Leap.loopController, {moveX: false, moveY: false})
  ).on('press', function(mesh){

    mesh.material.color.setHex(colourPressed);

  }).on('release', function(mesh){

    mesh.material.color.setHex(colourReleased);

  });
}
