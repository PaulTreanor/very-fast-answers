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
          const banglessQuery = searchQuery.substring(bangList[i].length + 1);

          // Redirect the tab to the GPT-3 search page
          chrome.tabs.update(tabId, { url: "http://localhost:5173/" });

          // wait for page to load then Enter the search query into the "query-box" input field on the GPT-3 search page
          console.log("Waiting for page to load...")
          chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
            if (changeInfo.status === 'complete' && tab.url) {
              console.log("Page loaded, entering search query...")
              chrome.scripting.executeScript({
                target: { tabId: tabId },
                function: function (query) {
                  document.getElementById('query-box').value = query;
                  document.getElementById('query-box').focus();
                  document.getElementById('query-box').select();
                  // press enter key in the search box
                  var e = new Event("keydown");
                },
                args: [banglessQuery]
              });
            }
          });

          // Break out of the loop after redirecting
          return;
        }
      }
    }
  }
});
