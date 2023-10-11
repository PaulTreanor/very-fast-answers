// background.js - Extract the search query from a Google search URL.
chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
  if (changeInfo.status === 'complete' && tab.url) {
    const googleSearchURLPattern = /https:\/\/www\.google\..*\/search\?.*q=([^&]+)/;
    const match = tab.url.match(googleSearchURLPattern);

    if (match) {
      const searchQuery = decodeURIComponent(match[1].replace(/\+/g, ' '));
      console.log("User's Google search query:", searchQuery);
      if (searchQuery.startsWith("gpt!")) {
        console.log("GPT-3 query detected!")
      }
    }
  }
});