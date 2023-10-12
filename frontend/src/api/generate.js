import OpenAI from 'openai';

const openai = new OpenAI({
     apiKey: import.meta.env.VITE_OPENAI_API_KEY,
     dangerouslyAllowBrowser: true // Let's be honest, you should never do this
});
 
export async function callGpt (req, res) {
  console.log(req)
  const query = req || '';
  if (query.trim().length === 0) {
    res.status(400).json({
      error: {
        message: "Please enter a valid query",
      }
    });
    return;
  }

  try {
   
    const completion = await openai.completions.create({
      model: "text-davinci-003",
      prompt: generatePrompt(query),
      max_tokens: 30,
      temperature: 0.6,
    });
    console.log(completion)
    res.status(200).json({ result: completion.choices[0].text });
  } catch(error) {
    console.log("error???")
    // Consider adjusting the error handling logic for your use casse
    if (error.response) {
      console.error(error.response.status, error.response.data);
      res.status(error.response.status).json(error.response.data);
    } else {
      console.error(`Error with OpenAI API request: ${error.message}`);
      res.status(500).json({
        error: {
          message: 'An error occurred during your request.',
        }
      });
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
