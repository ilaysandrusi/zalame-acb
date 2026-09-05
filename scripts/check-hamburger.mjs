import { chromium } from "playwright";

const url = process.env.APP_URL || "http://127.0.0.1:5174/";
const browser = await chromium.launch({ headless: true });
const page = await browser.newPage({ viewport: { width: 390, height: 844 } });
const failures = [];

function assert(ok, message) {
  if (!ok) failures.push(message);
  console.log(`${ok ? "PASS" : "FAIL"}  ${message}`);
}

await page.goto(url, { waitUntil: "networkidle" });
await page.waitForSelector(".menu-btn");

await page.evaluate(() => window.scrollTo(0, 900));
await page.waitForTimeout(200);

await page.getByRole("button", { name: "תפריט" }).click();
await page.waitForSelector(".nav-drawer");

const headerBox = await page.locator(".site-header").boundingBox();
const closeBtn = page.getByRole("button", { name: "סגור תפריט" });

assert(Boolean(headerBox), "header still has a box after opening the menu while scrolled");
assert(headerBox && headerBox.y < 8, `header stays at the top of the viewport (y=${headerBox?.y})`);
assert(await closeBtn.isVisible(), "close (X) button is visible without scrolling the menu");

await closeBtn.click();
await page.waitForTimeout(150);
assert((await page.locator(".nav-drawer").count()) === 0, "menu closes from the header X");
assert(await page.getByRole("button", { name: "תפריט" }).isVisible(), "hamburger is visible after close");

await page.evaluate(() => window.scrollTo(0, 0));
await page.getByRole("button", { name: "תפריט" }).click();
await page.waitForSelector(".nav-drawer");
assert(await page.getByRole("link", { name: "עלינו" }).isVisible(), "about link is visible in the drawer");
await page.getByRole("button", { name: "סגור תפריט" }).click();
assert((await page.locator(".nav-drawer").count()) === 0, "menu closes from the top of the page too");

await browser.close();

if (failures.length) {
  console.error(`\n${failures.length} Playwright check(s) failed.`);
  process.exit(1);
}

console.log("\nAll Playwright hamburger checks passed.");
