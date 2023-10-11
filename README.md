# ZapSearch ⚡️

The fastest way to access LLMs. 

ZapSearch is a browser extension I am working on to allow users to ask LLMs questions and get answers faster than Google Search or ChatGPT. 

As the internet becomes more saturated with ads and SEO spam, Google search is becoming less effective and finding answers for simple questions is becomign harder. LLMs have become a good substitution for Google but the Chatbot interface isn't a perfect drop-in replacement. Chat applications require features these slow down users and API calls. 

The DuckDuckGo style `bang` is the easiest user interface for access LLMs that I can think of. Call GPT (or another LLM) directly from your browsers address bar by specifying `gpt!` before your query, this will route your question through the openAI api and a special prompt designed for short concrete answers. 

### How to use the extension 
To call an LLM direcly from the Chrome or Firefox address bar, specify the name of the model (or a shortcut) followed by the `!` symbol. 

For example:
```bash 
gpt! How do I roast a small chicken
gpt4! Who is the richest person in history

# Or use a shortcut
g! What is the currency in France # gpt-3.5
g4! What foods are good after exercise # gpt-4
l! What is the difference between arm64 and x64 # llama2 - if configured to run locally
```

The answer to your question is displayed in plaintext, under a search bar that you can use to ask LLMs more things. There is no context and no chat history. 