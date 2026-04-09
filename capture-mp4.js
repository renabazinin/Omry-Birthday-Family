const puppeteer = require('puppeteer');
const ffmpeg = require('fluent-ffmpeg');
const ffmpegPath = require('@ffmpeg-installer/ffmpeg').path;
const fs = require('fs');
const path = require('path');

ffmpeg.setFfmpegPath(ffmpegPath);

const sleep = (ms) => new Promise(r => setTimeout(r, ms));

(async () => {
  const WIDTH = 400;
  const HEIGHT = 720;
  const FPS = 20;
  const DURATION_SEC = 4.5;
  const FRAME_COUNT = Math.ceil(FPS * DURATION_SEC);
  const FRAME_DELAY = 1000 / FPS;

  const framesDir = path.join(__dirname, '_frames');
  const outPath = path.join(__dirname, 'invitation.mp4');

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
  await page.setViewport({ width: WIDTH, height: HEIGHT, deviceScaleFactor: 2 });
  await page.goto(htmlPath, { waitUntil: 'domcontentloaded' });
  await sleep(100);

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
  console.log('Browser closed. Encoding MP4...');

  // Encode MP4 with ffmpeg
  await new Promise((resolve, reject) => {
    ffmpeg()
      .input(path.join(framesDir, 'frame_%04d.png'))
      .inputFPS(FPS)
      .noAudio()                  // no audio = WhatsApp shows "GIF" toggle
      .videoCodec('libx264')
      .outputOptions([
        '-profile:v baseline',    // max device compatibility
        '-level 3.0',
        '-pix_fmt yuv420p',
        '-crf 26',                // smaller file, still sharp
        '-preset slow',           // better compression
        '-movflags +faststart',
        '-vf scale=480:-2',       // 480px wide, even height
        '-r 20',
      ])
      .output(outPath)
      .on('end', resolve)
      .on('error', reject)
      .on('stderr', (line) => {
        if (line.includes('frame=')) process.stdout.write('\r  ' + line.trim());
      })
      .run();
  });

  console.log('\nCleaning up frames...');
  fs.rmSync(framesDir, { recursive: true });

  const size = fs.statSync(outPath).size;
  console.log(`Done! MP4 saved to: ${outPath} (${(size / 1024).toFixed(0)} KB)`);
})();
