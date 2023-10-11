const bangList = ["gpt3", "gpt4", "gpt", "g3", "g4",  "g"] // Note the order of the list matters, g must be last as it is a substring to the other bangs
let bang

chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
  if (changeInfo.status === 'complete' && tab.url) {
    const googleSearchURLPattern = /https:\/\/www\.google\..*\/search\?.*q=([^&]+)/;
    const match = tab.url.match(googleSearchURLPattern);

    if (match) {
      const searchQuery = decodeURIComponent(match[1].replace(/\+/g, ' '));
      console.log("Search query:", searchQuery);
 
      // Check for "bang" keywords
      for (let i = 0; i < bangList.length; i++) {
        if (searchQuery.toLowerCase().startsWith(bangList[i] + "!")) {
          console.log("Bang detected:", bangList[i]);

          // Redirect the tab to paultreanor.com
          chrome.tabs.update(tabId, { url: "https://www.paultreanor.com/" });

          // Break out of the loop after redirecting
          return;
        }
      }
    }
  }
});
