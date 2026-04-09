const puppeteer = require('puppeteer');
const GIFEncoder = require('gif-encoder-2');
const { createCanvas, Image } = require('canvas');
const fs = require('fs');
const path = require('path');

const sleep = (ms) => new Promise(r => setTimeout(r, ms));

(async () => {
  const WIDTH = 400;
  const HEIGHT = 720;
  const FPS = 15;
  const DURATION_SEC = 4.5; // capture the full entrance + confetti
  const FRAME_COUNT = Math.ceil(FPS * DURATION_SEC);
  const FRAME_DELAY = 1000 / FPS;

  const htmlPath = 'file://' + path.resolve(__dirname, 'index.html').replace(/\\/g, '/');

  console.log('Launching browser...');
  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });

  const page = await browser.newPage();
  await page.setViewport({ width: WIDTH, height: HEIGHT, deviceScaleFactor: 1 });
  await page.goto(htmlPath, { waitUntil: 'domcontentloaded' });

  // Let the page start rendering
  await sleep(100);

  console.log(`Capturing ${FRAME_COUNT} frames at ${FPS} fps...`);

  const frames = [];
  for (let i = 0; i < FRAME_COUNT; i++) {
    const buf = await page.screenshot({ type: 'png' });
    frames.push(buf);
    if (i % 10 === 0) {
      console.log(`  frame ${i + 1}/${FRAME_COUNT}`);
    }
    await sleep(FRAME_DELAY);
  }

  await browser.close();
  console.log('Browser closed. Encoding GIF...');

  // Encode GIF
  const encoder = new GIFEncoder(WIDTH, HEIGHT, 'neuquant', true);
  encoder.setDelay(Math.round(1000 / FPS));
  encoder.setQuality(10);
  encoder.setRepeat(0); // loop forever
  encoder.start();

  const canvas = createCanvas(WIDTH, HEIGHT);
  const ctx = canvas.getContext('2d');

  for (let i = 0; i < frames.length; i++) {
    const img = new Image();
    img.src = frames[i];
    ctx.drawImage(img, 0, 0, WIDTH, HEIGHT);
    encoder.addFrame(ctx);
    if (i % 10 === 0) {
      console.log(`  encoding frame ${i + 1}/${frames.length}`);
    }
  }

  encoder.finish();

  const outPath = path.join(__dirname, 'invitation.gif');
  const buffer = encoder.out.getData();
  fs.writeFileSync(outPath, buffer);
  console.log(`Done! GIF saved to: ${outPath} (${(buffer.length / 1024 / 1024).toFixed(1)} MB)`);
})();
