import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function callGpt(requestType, request) {
  const query = request || "";
  if (query.trim().length === 0) {
    throw new Error("Please enter a valid query");
  }

  try {
    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        { role: "user", content: formatContent(requestType, request) },
      ],
      max_tokens: 30,
      temperature: 0.6,
    });
    return completion.choices[0].message.content;
  } catch (error) {
    if (error.response) {
      throw new Error(error.response.data);
    } else {
      throw new Error(`Error with OpenAI API request: ${error.message}`);
    }
  }
}

function formatContent(queryType, query) {
  if (queryType === "keywords") {
    return generatePrimaryKeyPrompt(query);
  } else if (queryType === "generic") {
    return generatePrompt(query);
  }
}

function generatePrimaryKeyPrompt(query) {
  return `Extract the primary keywords from this sentence: '${query}'
  
  Return the keywords in a json list with a similar structure: "primaryKeywords": ["investment", "vodafone", "banking"]`;
}

function generatePrompt(query) {
  return `
  You are a bot that delivers informative accurate answers. You will receive short queries that you should answer in less than 3 sentences (or less, if possible).

  It is important that you include important information that the user might require in your answers, but don't don't go on tangents or include unnecessary information.

  Here is the query that you must answer:

  ${query}
  `;
}
