# ZapSearch backend API

**Do not under any circumstances use my API key outside of the `env.json` file in the `backend` service (This is `.gitignore`-ed)**

# The API 

### Keywords API

```bash
serverless invoke local --function keywordsApi --data '{ "body": "{ \"queryType\":  \"keywords\", \"query\": \"Should I invest in vodafone\" }" }'
```

### Search API

```bash
serverless invoke local --function googleSearchApi --data '{ "body": "{ \"keywords\": [\"hello\"] }" }'
```

### Selection API 
```bash
serverless invoke local --function selectionApi --data '{ "body": "{ \"query\": \"Should I invest in vodafone\" }" }'
```

# Local development

```bash
## Run entire API on localhost
serverless offline
```

# Setup 
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