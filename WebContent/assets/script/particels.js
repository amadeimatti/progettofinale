function particel(){

var particleCount = 1000,
    particles = new THREE.Geometry(),
    pMaterial = new THREE.ParticleBasicMaterial({
      color: 0xFFFFFF,
      size: 10,
      map: THREE.ImageUtils.loadTexture(
    		    "assets/textures/snowparticle.png"),
    		    blending: THREE.AdditiveBlending,
    		    transparent: true
    });

// now create the individual particles
for (var p = 0; p < particleCount; p++) {

  // create a particle with random
  // position values, -250 -> 250
  var pX = Math.random() *500 -250,
      pY = Math.random() *350,
      pZ = Math.random() * 500-250,
      particle = new THREE.Vertex(
        new THREE.Vector3(pX, pY, pZ)
      );

  // add it to the geometry
  particles.vertices.push(particle);
}

// create the particle system
var particleSystem = new THREE.ParticleSystem(  particles, pMaterial);
particleSystem.sortParticles = true;

return particleSystem;
}