# ZapSearch backend API

**Do not under any circumstances use my API key outside of the `env.json` file in the `backend` service (This is `.gitignore`-ed)**

- This is a HTTP API made with node.js running on AWS Lambda and API Gateway using the Serverless Framework.v
- This API calls the OpenAI completions API, which must be run on a server. 
- If there's CORS issues with this when it's deployed I can fix it (documentation is poor)

### Setup 
1. Install bun 
```bash
# To do this on Windows you must use WSL
curl -fsSL https://bun.sh/install | bash
```
2. Install serverless framework 
``` bash
bun i -g serverless
```

3. Install dependencies
```bash
bun i
```

### The API 

**Search API**

```bash
serverless invoke local --function googleSearchAPI --data '{ "body": "{ \"keywords\": [\"hello\"] }" }
```

### Local development

You can invoke your function locally by using the following command:

```bash
c

serverless invoke local --function api --data '{ "body": "{ \"query\": \"hello\" }" }'

## Run entire API on localhost
serverless offline
```