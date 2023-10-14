import searchData from './sampleResults.json' assert { type: 'json' };
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});
 
export async function callGpt (req, res) {
  console.log(req)
  const query = req || '';
  if (query.trim().length === 0) {
    throw new Error("Please enter a valid query");
  }

  try {
    const prompt = generatePrompt(query, searchData)
    console.log({prompt: prompt})
    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        { role: "user", content: prompt },
      ],
      max_tokens: 100,
      temperature: 0.6,
    });
    return completion.choices[0].text
  } catch(error) {
    if (error.response) {
      throw new Error(error.response.data)
    } else {
      throw new Error(`Error with OpenAI API request: ${error.message}`);
    }
  }
}



function generatePrompt(initialQuery, searchData) {
    return `
    Our user wants to make an investment, this is their query:

    ${initialQuery}

    Given the following JSON list of articles, which articles are the most impactful to the user's query?

    ${JSON.stringify(searchData)}

    Return the top 3 articles that you deem to be the most impactful to the user's query. 
    
    You should return these as a single JSON object with the following structure:

    "topArticles": [
        {
            "title": "The title of the topic the article discusses",
            "link": "The link to the article",
            "summary": "Try your best to summarise what the article covers in a single sentence",
            "impact-rating": "A number between 0 and 1 that represents how impactful the article is to the user's query"
        },
        {
            "title": "The title of the topic the article discusses",
            "link": "The link to the article",
            "summary": "Try your best to summarise what the article covers in a single sentence",
            "impact-rating": "A number between 0 and 1 that represents how impactful the article is to the user's query"
        },
        {
            "title": "The title of the topic the article discusses",
            "link": "The link to the article",
            "summary": "Try your best to summarise what the article covers in a single sentence",
            "impact-rating": "A number between 0 and 1 that represents how impactful the article is to the user's query"
        },
    ]

  `;
}
