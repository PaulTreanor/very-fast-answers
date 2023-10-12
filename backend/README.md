# ZapSearch backend API

**Do not under any circumstances use my API outside of the `.env` file in the `backend` service (This is `.gitignore`-ed)**

- This is a HTTP API made with node.js running on AWS Lambda and API Gateway using the Serverless Framework.v
- This API calls the OpenAI completions API, which must be run on a server. 
- If there's CORS issues with this when it's deployed I can fix it (documentation is poor)

### The API 
The API accepts JSON, with a "query" object that is a string. For example:

```json 
{ "query": "How do I roast a chicken?"}
```

It returns a body with a status code and a completion (response) to the query:

```json
{
    "statusCode": 200,
    "body": "{\"upperCaseText\":\"HELLO\"}"
}
```

### Local development

You can invoke your function locally by using the following command:

```bash
serverless invoke local --function hello

serverless invoke local --function api --data '{ "body": "{ \"query\": \"hello\" }" }'

## Run entire API on localhost
serverless offline
```



