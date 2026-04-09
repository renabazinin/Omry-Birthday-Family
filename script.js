document.addEventListener('DOMContentLoaded', function () {
  createConfettiBurst();
  initSoundButton();
});

function createConfettiBurst() {
  var container = document.getElementById('confetti-container');
  var colors = ['#f72585', '#b5179e', '#7209b7', '#667eea', '#4cc9f0', '#4361ee', '#ff6b9d', '#F4C063', '#43bb4e'];
  var particleCount = 60;
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

function initSoundButton() {
  var btn = document.querySelector('.sound-btn');
  if (!btn) return;

  btn.addEventListener('click', function () {
    playPartyHorn();
  });
}

function playPartyHorn() {
  // Generate a short party horn sound using Web Audio API
  var ctx = new (window.AudioContext || window.webkitAudioContext)();
  var duration = 0.6;

  // Main horn tone (sawtooth for buzzy party horn feel)
  var osc1 = ctx.createOscillator();
  osc1.type = 'sawtooth';
  osc1.frequency.setValueAtTime(440, ctx.currentTime);
  osc1.frequency.linearRampToValueAtTime(580, ctx.currentTime + 0.1);
  osc1.frequency.linearRampToValueAtTime(520, ctx.currentTime + duration);

  // Second harmonic for richness
  var osc2 = ctx.createOscillator();
  osc2.type = 'square';
  osc2.frequency.setValueAtTime(880, ctx.currentTime);
  osc2.frequency.linearRampToValueAtTime(1160, ctx.currentTime + 0.1);
  osc2.frequency.linearRampToValueAtTime(1040, ctx.currentTime + duration);

  // Gain envelope
  var gain = ctx.createGain();
  gain.gain.setValueAtTime(0, ctx.currentTime);
  gain.gain.linearRampToValueAtTime(0.15, ctx.currentTime + 0.05);
  gain.gain.linearRampToValueAtTime(0.1, ctx.currentTime + 0.3);
  gain.gain.linearRampToValueAtTime(0, ctx.currentTime + duration);

  var gain2 = ctx.createGain();
  gain2.gain.setValueAtTime(0, ctx.currentTime);
  gain2.gain.linearRampToValueAtTime(0.05, ctx.currentTime + 0.05);
  gain2.gain.linearRampToValueAtTime(0.03, ctx.currentTime + 0.3);
  gain2.gain.linearRampToValueAtTime(0, ctx.currentTime + duration);

  // Noise burst for the initial "pop"
  var noiseBuffer = ctx.createBuffer(1, ctx.sampleRate * 0.08, ctx.sampleRate);
  var noiseData = noiseBuffer.getChannelData(0);
  for (var i = 0; i < noiseData.length; i++) {
    noiseData[i] = (Math.random() * 2 - 1) * 0.3;
  }
  var noise = ctx.createBufferSource();
  noise.buffer = noiseBuffer;
  var noiseGain = ctx.createGain();
  noiseGain.gain.setValueAtTime(0.2, ctx.currentTime);
  noiseGain.gain.linearRampToValueAtTime(0, ctx.currentTime + 0.08);

  osc1.connect(gain);
  osc2.connect(gain2);
  noise.connect(noiseGain);
  gain.connect(ctx.destination);
  gain2.connect(ctx.destination);
  noiseGain.connect(ctx.destination);

  osc1.start(ctx.currentTime);
  osc2.start(ctx.currentTime);
  noise.start(ctx.currentTime);
  osc1.stop(ctx.currentTime + duration);
  osc2.stop(ctx.currentTime + duration);
  noise.stop(ctx.currentTime + 0.08);
}
