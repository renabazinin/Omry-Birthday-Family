document.addEventListener('DOMContentLoaded', function () {
  // Confetti after content reveal
  setTimeout(function () { createConfettiBurst(); }, 2000);
  setTimeout(function () { createConfettiBurst(25); }, 2800);

  // Starburst on age badge after drop animation lands
  setTimeout(function () {
    var badge = document.querySelector('.age-badge');
    if (badge) badge.classList.add('landed');
  }, 1500);
});

function createConfettiBurst(count) {
  var container = document.getElementById('confetti-container');
  var colors = ['#f72585', '#b5179e', '#7209b7', '#667eea', '#4cc9f0', '#4361ee', '#ff6b9d', '#F4C063', '#43bb4e'];
  var particleCount = count || 60;
  var particles = [];

  // SVG shape templates
  var shapes = [
    // circle
    function(color, size) {
      return '<svg viewBox="0 0 10 10" width="' + size + '" height="' + size + '"><circle cx="5" cy="5" r="5" fill="' + color + '"/></svg>';
    },
    // star
    function(color, size) {
      return '<svg viewBox="0 0 10 10" width="' + size + '" height="' + size + '"><polygon points="5,0 6.2,3.5 10,3.5 7,5.7 8,9.5 5,7 2,9.5 3,5.7 0,3.5 3.8,3.5" fill="' + color + '"/></svg>';
    },
    // diamond
    function(color, size) {
      return '<svg viewBox="0 0 10 10" width="' + size + '" height="' + size + '"><polygon points="5,0 10,5 5,10 0,5" fill="' + color + '"/></svg>';
    },
    // streamer (wavy line)
    function(color, size) {
      var w = size * 1.5;
      return '<svg viewBox="0 0 20 8" width="' + w + '" height="' + (size * 0.5) + '"><path d="M0,4 Q5,0 10,4 T20,4" fill="none" stroke="' + color + '" stroke-width="2.5" stroke-linecap="round"/></svg>';
    }
  ];

  for (var i = 0; i < particleCount; i++) {
    var particle = document.createElement('div');
    var color = colors[Math.floor(Math.random() * colors.length)];
    var size = Math.random() * 10 + 6;
    var startX = Math.random() * 100;
    var startY = Math.random() * 30 + 10;
    var endX = startX + (Math.random() - 0.5) * 40;
    var endY = startY + Math.random() * 60 + 30;
    var rotation = Math.random() * 720 - 360;
    var duration = Math.random() * 1500 + 1500;
    var delay = Math.random() * 500;
    var shapeFn = shapes[Math.floor(Math.random() * shapes.length)];

    particle.innerHTML = shapeFn(color, size);
    particle.style.cssText =
      'position:absolute;' +
      'top:' + startY + '%;' +
      'left:' + startX + '%;' +
      'opacity:1;' +
      'pointer-events:none;' +
      'line-height:0;' +
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
