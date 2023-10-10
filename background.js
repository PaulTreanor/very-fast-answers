// background.js - This script runs in the background as a service worker.

// Define an event listener to handle tab updates.
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.status === 'complete' && tab.url) {
    console.log("Tab URL: " + tab.url);
    
    // Place your logic for handling tab updates here.
    // You can also communicate with other parts of your extension from here.
  }
});


