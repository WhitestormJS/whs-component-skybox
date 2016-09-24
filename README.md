# whs-component-skybox
  Skybox plugin

# Usage

### Box Skybox

  ```javascript
  const skybox = new WHS.Skybox({
      skyType: 'box',
      imgSuffix: '.jpg',
      radius: 1000,
      fog: false,
      path: 'assets/DarkSea-'
  });

  skybox.addTo(GAME);
  ```

### Sphere Skybox

  ```javascript
  const skybox = new WHS.Skybox({
      skyType: 'sphere',
      imgSuffix: '.jpg',
      radius: 100,
      fog: false,
      path: 'assets/sphere'
  });

  skybox.addTo(GAME);

  ```

## Live examples
- [Box Skybox](http://whitestormjs.xyz/whs-component-skybox/examples/box.html)
- [Sphere Skybox](http://whitestormjs.xyz/whs-component-skybox/examples/sphere.html)

Credits for Assets in Examples

- [Box Skybox Assets](https://github.com/stemkoski/stemkoski.github.com)

- [Sphere Skybox Assets](http://macsix.deviantart.com/art/Anvil-Spherical-HDRI-Panorama-Skybox-416317312)
