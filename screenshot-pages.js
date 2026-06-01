const { chromium } = require("playwright");
const fs = require("fs");

const pages = [
  ["home", "/"],
  ["passenger", "/passenger"],
  ["driver", "/driver"],
  ["admin", "/admin"],
  ["driver-onboarding", "/driver-onboarding"],
  ["flow-map", "/flow-map"],
  ["architecture", "/architecture"],
  ["mvp-scope", "/mvp-scope"],
  ["app-showcase", "/app-showcase"],
];

(async () => {
  fs.mkdirSync("screenshots", { recursive: true });

  const browser = await chromium.launch();

  const page = await browser.newPage({
    viewport: {
      width: 1920,
      height: 1080,
    },
    deviceScaleFactor: 2,
  });

  for (const [name, route] of pages) {
    await page.goto(`http://localhost:3000${route}`, {
      waitUntil: "networkidle",
    });

    await page.waitForTimeout(1000);

    await page.screenshot({
      path: `screenshots/${name}.png`,
      fullPage: true,
    });

    console.log(`Saved ${name}.png`);
  }

  await browser.close();
})();