const { chromium } = require("playwright");
const fs = require("fs");

const routes = [
  ["passenger", "/passenger"],
  ["driver", "/driver"],
  ["admin", "/admin"],
  ["driver-onboarding", "/driver-onboarding"],
  ["app-showcase", "/app-showcase"],
  ["flow-map", "/flow-map"],
  ["architecture", "/architecture"],
  ["mvp-scope", "/mvp-scope"],
];

(async () => {
  fs.mkdirSync("grabme-video-assets", { recursive: true });

  const browser = await chromium.launch();
  const page = await browser.newPage({
    viewport: { width: 1920, height: 1080 },
    deviceScaleFactor: 2,
  });

  for (const [name, route] of routes) {
    await page.goto(`http://localhost:3000${route}`, { waitUntil: "networkidle" });
    await page.waitForTimeout(800);

    const items = await page.locator("div").evaluateAll((els) =>
      els.map((el, i) => {
        const r = el.getBoundingClientRect();
        const text = el.innerText || "";
        return {
          i,
          x: Math.round(r.x),
          y: Math.round(r.y + window.scrollY),
          width: Math.round(r.width),
          height: Math.round(r.height),
          textLength: text.length,
        };
      }).filter(r =>
        r.width >= 160 &&
        r.width <= 500 &&
        r.height >= 250 &&
        r.height <= 1000 &&
        r.textLength > 20
      )
    );

    for (let i = 0; i < items.length; i++) {
      const item = items[i];

      try {
        await page.screenshot({
          path: `grabme-video-assets/${name}-card-${String(i + 1).padStart(2, "0")}.png`,
          clip: {
            x: Math.max(item.x - 12, 0),
            y: Math.max(item.y - 12, 0),
            width: item.width + 24,
            height: item.height + 24,
          },
        });

        console.log(`Saved ${name}-card-${i + 1}`);
      } catch {
        console.log(`Skipped ${name}-card-${i + 1}`);
      }
    }
  }

  await browser.close();
})();