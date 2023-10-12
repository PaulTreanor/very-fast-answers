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
   
    const completion = await openai.completions.create({
      model: "text-davinci-003",
      prompt: generatePrompt(query),
      max_tokens: 30,
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

function generatePrompt(query) {
  return `You are a bot that delivers informative accurate answers. You will recieve short queries that you should answer in less than 3 sentences (or less, if possible).

  It is important that you include important information that the user might require in your answers, but don't don't go on tangents or include unnecessary information.

  Here is the query that you must answer:

  ${query}
  `
}
