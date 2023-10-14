import { searchGoogle } from "../google-search-service/google-search-api.js";

const handler = async (event) => {
  try {
    const requestBody = JSON.parse(event.body);
    const { keywords } = requestBody.query;
    
    const searchResults = await searchGoogle(keywords);

    return {
      statusCode: 200,
      body: JSON.stringify({
        searchResults,
      }),
    };
  } catch (error) {
    console.error(error);
    return {
      statusCode: 500,
      body: JSON.stringify({
        message: "An error occurred while processing your request.",
      }),
    };
  }
};

export { handler };
