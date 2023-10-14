import { chromium } from "playwright";

// pass site urls to scraper to pull back page data
const handler = async (siteUrl) => {
  const browser = await chromium.launch({
    headless: false,
  });

  const page = await browser.newPage();
  await page.goto(siteUrl);
  await page.waitForTimeout(5000);
  await browser.close();

  // TODO get page body
};

export { handler };
