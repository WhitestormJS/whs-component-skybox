import * as THREE from 'three';
import {Shape, extend, texture, Loop} from 'whitestormjs';
import * as Physijs from 'whitestormjs/physics/index';

//https://github.com/WhitestormJS/whitestorm.js/blob/dev/src/framework/extras/Skybox.js

class Skybox extends Shape {
  constructor(params = {}) {
    super(params, 'skybox');

    extend(params, {
      skyType: 'box',
      imgSuffix: '.png',
      radius: 10,
      fog: true,
      path: ''
    });

    this.build(params);
    super.wrap();
  }

  build(params = {}) {

      let skyGeometry, skyMat;

      switch (params.skyType) {
          case 'box': {
              const directions = ['xpos', 'xneg', 'ypos', 'yneg', 'zpos', 'zneg'],
              matArray = [];

              skyGeometry = new THREE.CubeGeometry(params.radius, params.radius, params.radius);

          for (let i = 0; i < 6; i++) {
              matArray.push(new THREE.MeshBasicMaterial({
                  map: texture(params.path + directions[i] + params.imgSuffix, false),
                  side: THREE.BackSide,
                  fog: params.fog
              }));
          }

          skyMat = new THREE.MeshFaceMaterial(matArray);

          break;
          }

          case 'sphere': {
              skyGeometry = new THREE.SphereGeometry(params.radius / 2, 60, 40);
              skyMat = new THREE.MeshBasicMaterial({
                  map: texture(params.path + params.imgSuffix, false),
                  side: THREE.BackSide,
                  fog: params.fog
              });

              break;
          }
          default:
      }

      const mesh = new THREE.Mesh(skyGeometry, skyMat);
      mesh.renderDepth = 1000.0;

      super.native = mesh;

    // const _Mesh = this.physics ? Physijs.SphereMesh : THREE.Mesh,
    //   material = new THREE.MeshLambertMaterial({color: 0x00ff00}),
    //   geometry = new THREE.SphereGeometry(
    //     params.geometry.radius,
    //     params.geometry.segmentA * 2,
    //     params.geometry.segmentB * 2
    //   ),
    //   gShape = geometry.clone();
    //
    // const anim = new Loop((t) => {
    //   const timeA = Math.sin(t.getElapsedTime() / 1.5 * 180 * Math.PI / 180);
    //
    //   for (let i = 0; i < gShape.vertices.length; i++) {
    //     const v1 = gShape.vertices[i];
    //     const v2 = geometry.vertices[i];
    //
    //     const c = Math.sqrt(v1.x * v1.x + v1.z * v1.z);
    //     const d = c + Math.sin(Math.abs(Math.asin(v1.z / c) / 2 * Math.PI * 180)) / 4 * timeA;
    //
    //     v2.x = v1.x * d / c;
    //     v2.z = v1.z * d / c;
    //   }
    //
    //   geometry.verticesNeedUpdate = true;
    // });
    //
    // this.run = () => {
    //   anim.start(this.parent);
    // };
    //
    // setInterval(() => {
    //   anim.clock.elapsedTime = 0;
    // }, 3000);
    //
    // return new Promise((resolve) => {
    //   this.native = new _Mesh(
    //     geometry,
    //     material,
    //     this.params
    //   );
    //
    //   resolve();
    // });
  }

  clone() {
    return new Skybox(this.params).copy(this);
  }
}

export {
  Skybox as default
};
