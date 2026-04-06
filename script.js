document.addEventListener('DOMContentLoaded', function () {
  createConfettiBurst();
});

function createConfettiBurst() {
  var container = document.getElementById('confetti-container');
  var colors = ['#f72585', '#b5179e', '#7209b7', '#667eea', '#4cc9f0', '#4361ee', '#ff6b9d'];
  var particleCount = 80;
  var particles = [];

  for (var i = 0; i < particleCount; i++) {
    var particle = document.createElement('div');
    var color = colors[Math.floor(Math.random() * colors.length)];
    var size = Math.random() * 8 + 4;
    var startX = Math.random() * 100;
    var startY = Math.random() * 30 + 10;
    var endX = startX + (Math.random() - 0.5) * 40;
    var endY = startY + Math.random() * 60 + 30;
    var rotation = Math.random() * 720 - 360;
    var duration = Math.random() * 1500 + 1500;
    var delay = Math.random() * 500;

    particle.style.cssText =
      'position:absolute;' +
      'width:' + size + 'px;' +
      'height:' + size + 'px;' +
      'background:' + color + ';' +
      'border-radius:' + (Math.random() > 0.5 ? '50%' : '2px') + ';' +
      'top:' + startY + '%;' +
      'left:' + startX + '%;' +
      'opacity:1;' +
      'pointer-events:none;' +
      'transition:all ' + duration + 'ms cubic-bezier(0.25, 0.46, 0.45, 0.94);' +
      'transition-delay:' + delay + 'ms;';

    container.appendChild(particle);
    particles.push({
      el: particle,
      endX: endX,
      endY: endY,
      rotation: rotation
    });
  }

  // Trigger animation in next frame
  requestAnimationFrame(function () {
    requestAnimationFrame(function () {
      particles.forEach(function (p) {
        p.el.style.transform = 'translate(' + (p.endX - parseFloat(p.el.style.left)) + 'vw, ' + (p.endY - parseFloat(p.el.style.top)) + 'vh) rotate(' + p.rotation + 'deg)';
        p.el.style.opacity = '0';
      });
    });
  });

  // Clean up after animations complete
  setTimeout(function () {
    container.innerHTML = '';
  }, 3500);
}
