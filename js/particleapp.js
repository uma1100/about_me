var particles = Particles.init({
	selector: '.background',
  color: ['#DA0463', '#404B69', '#DBEDF3'],
  connectParticles: true
});

function pause() {
  particles.pauseAnimation();
}