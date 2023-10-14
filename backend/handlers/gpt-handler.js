import { callGpt } from "../generate.js";

const handler = async (event) => {
  try {
    const requestBody = JSON.parse(event.body);
    const { queryType, query } = requestBody;

    if (!query || typeof query !== "string") {
      return {
        statusCode: 400,
        body: JSON.stringify({
          message:
            "Invalid input. Please send a JSON object with a 'query' property as a string.",
        }),
      };
    }

    const gptCompletion = await callGpt(queryType, query);

    return {
      statusCode: 200,
      body: JSON.stringify({
        gptCompletion,
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
