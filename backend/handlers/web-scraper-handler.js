import { chromium } from "playwright";

// pass site urls to scraper to pull back page data
const handler = async (siteUrl) => {
  const browser = await chromium.launch({
    headless: false,
  });

  const page = await browser.newPage();
  // go to the site
  await page.goto(siteUrl);

  // Get the raw HTML content of the entire page
  const pageContent = await page.content();

  // Print or use the raw HTML content
  console.log(pageContent);

  await browser.close();
};

export { handler };
