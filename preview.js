const puppeteer = require('puppeteer');
const path = require('path');

(async () => {
  const browser = await puppeteer.launch({ headless: 'new' });
  const page = await browser.newPage();
  await page.setViewport({ width: 390, height: 844, deviceScaleFactor: 2 });
  const htmlPath = 'file://' + path.resolve(__dirname, 'index.html').replace(/\\/g, '/');
  await page.goto(htmlPath, { waitUntil: 'domcontentloaded' });
  await new Promise(r => setTimeout(r, 2000));
  await page.screenshot({ path: path.join(__dirname, 'preview.png'), type: 'png' });
  await browser.close();
  console.log('Done');
})();
