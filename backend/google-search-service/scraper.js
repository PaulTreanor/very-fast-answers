import { chromium } from "playwright";
import fs from "fs/promises";

const siteUrl = "https://www.rte.ie/news/2023/1006/1409428-call-to-phase-out-oil-and-gas-boilers-before-2030/";

const browser = await chromium.launch({
headless: false,
});

const page = await browser.newPage();
// go to the site
await page.goto(siteUrl);

// Note: Don't bother trying to accept GDPR cookies, you can scrape without doing that most of the time

// Define a list of common cookie banner button texts
const cookieBannerButtonVariations = [
    "Accept All Cookies",
    "Accept Cookies",
    "Accept",
    "Agree",
    "OK",
    "Close",
  ];

// Function to click the cookie banner button if found
const clickCookieBannerButton = async () => {
    for (const variation of cookieBannerButtonVariations) {
      const button = await page.$(`button:has-text("${variation}")`);
      if (button) {
        await button.click();
        return true; // Clicked the button
      }
    }
    return false; // No suitable button found
  };
  
  // Check for and click the cookie banner button
  const clickedCookieBanner = await clickCookieBannerButton();
  
  if (clickedCookieBanner) {
    console.log("Clicked the cookie banner button.");
  }
  

// Get the text content of the entire page (excluding HTML tags, CSS, and JS)
const pageTextContent = await page.textContent("html");

console.log(pageTextContent);

await fs.writeFile("pageContent.txt", pageTextContent);

// wait 2 seconds
await page.waitForTimeout(2000);

await browser.close();
