// const GOOGLE_SEARCH_API_KEY = AIzaSyDO7bnm1UXmS60iFDR9ZGMOARTMIubBjis 
// const SEARCH_ENGINE_ID = b18f4db7e156d4460

const keywords = ["buy shares", "financial institution", "make money"]

// keywords must be url encoded - "" around search terms becomes %22, " " becomes %20
function encodeKeywordsForUrl(keywords) {
    const quotedKeywords = keywords.map(keyword => `"${keyword}"`).join(" ");
    return encodeURIComponent(quotedKeywords)
}

console.log(encodeKeywordsForUrl(keywords))

curl "https://www.googleapis.com/customsearch/v1?key=AIzaSyDO7bnm1UXmS60iFDR9ZGMOARTMIubBjis&cx=b18f4db7e156d4460&q=%22powered%20by%20datasette%22%20-site%3Agithub.com%20-site%3Asimonwillison.net%20-site%3Adatasette.io%20-site%3Apypi.org"


// given a list of keywords
// url encode the list into a string of words

// create the google api call using the encoded search term
// call that api url 
// return the results

