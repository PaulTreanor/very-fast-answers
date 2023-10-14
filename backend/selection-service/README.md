- This file takes a user query and a list of articles in JSON form
- For each article it returns a score based on it's impact to the user query
- It returns the top 3 articles

```json
const responseFormat = {
    "articles": [
        {
            "id": "article_id",
            "score": 0.5,
            "title": "article_title",
            "url": "article_url",
            "summary": "article_summary"
        },
        {
            "id": "article_id",
            "score": 0.5,
            "title": "article_title",
            "url": "article_url",
            "summary": "article_summary"
        },
        {
            "id": "article_id",
            "score": 0.5,
            "title": "article_title",
            "url": "article_url",
            "summary": "article_summary"
        }
    ]
}
```

### Input 
    
```json
{
    "title": 'Home | Stand Together For Canada | Tony Lam',
    "link": "'https://www.standtogetherforcanada.com/'",
    "snippet": "'... natural gas, Trudeau offers lectures on decarbonizing · - Fake News Friday | Toronto Star misrepresents doctor who questioned lockdowns · - Smith hints pandemic ..."
  }
```