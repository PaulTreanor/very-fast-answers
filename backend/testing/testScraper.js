import { handler } from "../handlers/web-scraper-handler.js"; 

(async () => {
  try {
    await handler("https://www.google.com");
  } catch (error) {
    console.error("An error occurred:", error);
  }
})();
