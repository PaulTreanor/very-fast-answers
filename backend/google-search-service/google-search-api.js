import fetch from 'node-fetch'

const googleSearchApiKey = "AIzaSyDO7bnm1UXmS60iFDR9ZGMOARTMIubBjis"
const searchEngineId = "b18f4db7e156d4460"

const keywords = ["buy shares", "invest", "natural gas", "news", "october 2023", "bbc", "fox"]

// keywords must be url encoded - "" around search terms becomes %22, " " becomes %20
function encodeKeywordsForUrl(keywords) {
    const quotedKeywords = keywords.map(keyword => `"${keyword}"`).join(" ");
    return encodeURIComponent(quotedKeywords)
}

function createGoogleSearchURL(googleSearchApiKey, searchEngineId, quotedKeywords) {
    const url = `https://www.googleapis.com/customsearch/v1?key=${googleSearchApiKey}&cx=${searchEngineId}&q=${quotedKeywords}`
    return url
}

function removeCrapFromJSON(jsonData) {
    const cleanedData = jsonData.items.map(item => {
        return {
            title: item.title,
            link: item.link,
            snippet: item.snippet
        }
    })
    return cleanedData
}

function searchGoogle(keywords) {
    // URL encode the list into a string of words
    const encodedSearchString = encodeKeywordsForUrl(keywords)
    // Create the google api call using the encoded search term
    const url = createGoogleSearchURL(googleSearchApiKey, searchEngineId, encodedSearchString)
    // Call that api url 
    fetch(url)
        .then(response => response.json())
        .then(jsonData => {
            console.log(removeCrapFromJSON(jsonData))
            return jsonData
        })
}

export { searchGoogle }


