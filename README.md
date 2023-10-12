# ZapSearch ⚡️

This is an AI **tool** I built for myself and also an AI hackathon **starterkit**. 

## As a  tool 
ZapSearch lets you query LLMs through Chrome's address bar. No need to wait for ChatGPT to load to ask an LLM a simple query, no context or chat history to slow you and the machine down. 

To query an LLM from the address bar, specify the name of the model (or a shortcut) followed by the `!` symbol. 

```bash 
gpt! How do I roast a small chicken
gpt4! Who is the richest person in history

# Or use a shortcut
g! What is the currency in France # gpt-3.5
g4! What foods are good after exercise # gpt-4
l! What is the difference between arm64 and x64 # TODO llama2 - if configured to run locally
```

## As a starterkit
This starterkit contains a deployable and well documented AWS Lambda backend, a React + TailwindCSS frontend, and a working browser extension. You can have an AI powered application setup within 15 minutes. 

https://zapsearch.vercel.app/ 

### To Build
- ~~Get a browser extension started~~
- ~~Get browser extension intercepting searches and redirecting~~
- ~~Set up a placeholder frontend site/design~~
- ~~Deploy the frontend to Vercel~~
- ~~Get the frontend setup with the OpenAI API calls~~ 
- Write tests for the frontend and API completions
- ~~Create a backend to call these APIs from~~
- Get browser extension sending openAI query (using utility)
- Get browser extension to redirect to vercel site and inject query/answer into site
- Write complete tests for this entire workflow
- Figure out some way to stop everyone from stealing my openAI bucks