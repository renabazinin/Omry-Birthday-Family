const puppeteer = require('puppeteer');
const ffmpeg = require('fluent-ffmpeg');
const ffmpegPath = require('@ffmpeg-installer/ffmpeg').path;
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

ffmpeg.setFfmpegPath(ffmpegPath);

const sleep = (ms) => new Promise(r => setTimeout(r, ms));

(async () => {
  const WIDTH = 360;
  const HEIGHT = 640;
  const FPS = 12;
  const DURATION_SEC = 4.5;
  const FRAME_COUNT = Math.ceil(FPS * DURATION_SEC);
  const FRAME_DELAY = 1000 / FPS;

  const framesDir = path.join(__dirname, '_frames');
  const outGif = path.join(__dirname, 'invitation.gif');
  const outMp4 = path.join(__dirname, 'invitation.mp4');

  // Clean up / create frames dir
  if (fs.existsSync(framesDir)) {
    fs.rmSync(framesDir, { recursive: true });
  }
  fs.mkdirSync(framesDir);

  const htmlPath = 'file://' + path.resolve(__dirname, 'index.html').replace(/\\/g, '/');

  console.log('Launching browser...');
  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });

  const page = await browser.newPage();
  await page.setViewport({ width: WIDTH, height: HEIGHT, deviceScaleFactor: 1 });
  await page.goto(htmlPath, { waitUntil: 'domcontentloaded' });
  await sleep(150);

  console.log(`Capturing ${FRAME_COUNT} frames at ${FPS} fps...`);

  for (let i = 0; i < FRAME_COUNT; i++) {
    const framePath = path.join(framesDir, `frame_${String(i).padStart(4, '0')}.png`);
    await page.screenshot({ path: framePath, type: 'png' });
    if (i % 10 === 0) {
      console.log(`  frame ${i + 1}/${FRAME_COUNT}`);
    }
    await sleep(FRAME_DELAY);
  }

  await browser.close();
  console.log('Browser closed.');

  // --- GIF via ffmpeg with palette optimization ---
  console.log('\nEncoding GIF (ffmpeg + palette optimization)...');
  const inputPattern = path.join(framesDir, 'frame_%04d.png').replace(/\\/g, '/');

  // Use ffmpeg directly for the two-pass palette approach
  const palettePath = path.join(framesDir, 'palette.png').replace(/\\/g, '/');

  // Pass 1: generate optimal palette from frames
  execSync(
    `"${ffmpegPath}" -y -framerate ${FPS} -i "${inputPattern}" -vf "fps=${FPS},scale=320:-1:flags=lanczos,palettegen=max_colors=128:stats_mode=diff" "${palettePath}"`,
    { stdio: 'inherit' }
  );

  // Pass 2: encode GIF using the palette
  execSync(
    `"${ffmpegPath}" -y -framerate ${FPS} -i "${inputPattern}" -i "${palettePath}" -lavfi "fps=${FPS},scale=320:-1:flags=lanczos [x]; [x][1:v] paletteuse=dither=sierra2_4a" -loop 0 "${outGif.replace(/\\/g, '/')}"`,
    { stdio: 'inherit' }
  );

  const gifSize = fs.statSync(outGif).size;
  console.log(`GIF saved: ${outGif} (${(gifSize / 1024).toFixed(0)} KB)`);

  // --- MP4 for WhatsApp "send as GIF" on mobile ---
  console.log('\nEncoding MP4 (WhatsApp mobile compatible)...');
  await new Promise((resolve, reject) => {
    ffmpeg()
      .input(path.join(framesDir, 'frame_%04d.png'))
      .inputFPS(FPS)
      .noAudio()
      .videoCodec('libx264')
      .outputOptions([
        '-profile:v baseline',
        '-level 3.0',
        '-pix_fmt yuv420p',
        '-crf 26',
        '-preset slow',
        '-movflags +faststart',
        '-vf scale=480:-2',
      ])
      .output(outMp4)
      .on('end', resolve)
      .on('error', reject)
      .on('stderr', (line) => {
        if (line.includes('frame=')) process.stdout.write('\r  ' + line.trim());
      })
      .run();
  });

  const mp4Size = fs.statSync(outMp4).size;
  console.log(`\nMP4 saved: ${outMp4} (${(mp4Size / 1024).toFixed(0)} KB)`);

  // Clean up frames
  fs.rmSync(framesDir, { recursive: true });

  console.log('\n=== Done! ===');
  console.log(`  invitation.gif  (${(gifSize / 1024).toFixed(0)} KB) — send as file/document on WhatsApp`);
  console.log(`  invitation.mp4  (${(mp4Size / 1024).toFixed(0)} KB) — use "GIF" toggle on mobile WhatsApp`);
})();
