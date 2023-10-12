# ZapSearch backend API

- This is a HTTP API made with node.js running on AWS Lambda and API Gateway using the Serverless Framework.
- This API calls the OpenAI completions API, which must be run on a server. 
- If there's CORS issues with this when it's deployed I can fix it (documentation is poor)

### Local development

You can invoke your function locally by using the following command:

```bash
serverless invoke local --function hello

serverless invoke local --function api --data '{ "body": "{ \"text\": \"hello\" }" }'

## Run entire API on localhost
serverless offline
```
