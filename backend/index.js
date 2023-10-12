const handler = async (event) => {
  try {
    const requestBody = JSON.parse(event.body);
    const { text } = requestBody;

    if (!text || typeof text !== "string") {
      return {
        statusCode: 400,
        body: JSON.stringify({
          message: "Invalid input. Please send a JSON object with a 'text' property as a string.",
        }),
      };
    }

    const upperCaseText = text.toUpperCase();

    return {
      statusCode: 200,
      body: JSON.stringify({
        upperCaseText,
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