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
await page.evaluate(() => document.fonts.ready);
await page.waitForTimeout(2000);

const settledY = await page.evaluate(() => {
  window.scrollTo({ top: 720, behavior: "instant" });
  return window.scrollY;
});
await page.waitForTimeout(200);
const heldY = await page.evaluate(() => window.scrollY);
assert(heldY > 200, `page is scrolled before opening the menu (y=${heldY})`);
assert(Math.abs(heldY - settledY) < 8, `scroll stays put after settling (y=${heldY})`);

await page.getByRole("button", { name: "תפריט" }).click({ force: true });
await page.waitForSelector(".nav-drawer");
const yAfterOpen = await page.evaluate(() => window.scrollY);
assert(Math.abs(yAfterOpen - heldY) < 8, `opening the menu keeps scroll position (before=${heldY}, after=${yAfterOpen})`);

const headerBox = await page.locator(".site-header").boundingBox();
const closeBtn = page.getByRole("button", { name: "סגור תפריט" });

assert(Boolean(headerBox), "header still has a box after opening the menu while scrolled");
assert(headerBox && headerBox.y < 8, `header stays at the top of the viewport (y=${headerBox?.y})`);
assert(await closeBtn.isVisible(), "close (X) button is visible without scrolling the menu");

await closeBtn.click({ force: true });
await page.waitForSelector(".nav-drawer", { state: "detached" });
await page.waitForTimeout(80);
const yAfterClose = await page.evaluate(() => window.scrollY);
assert(
  Math.abs(yAfterClose - heldY) < 8,
  `closing the menu keeps scroll position (before=${heldY}, after=${yAfterClose})`,
);
assert(await page.getByRole("button", { name: "תפריט" }).isVisible(), "hamburger is visible after close");

await page.evaluate(() => window.scrollTo({ top: 0, behavior: "instant" }));
await page.getByRole("button", { name: "תפריט" }).click({ force: true });
await page.waitForSelector(".nav-drawer");
assert(await page.getByRole("link", { name: "עלינו" }).isVisible(), "about link is visible in the drawer");
await page.getByRole("button", { name: "סגור תפריט" }).click({ force: true });
assert((await page.locator(".nav-drawer").count()) === 0, "menu closes from the top of the page too");

await browser.close();

if (failures.length) {
  console.error(`\n${failures.length} Playwright check(s) failed.`);
  process.exit(1);
}

console.log("\nAll Playwright hamburger checks passed.");
