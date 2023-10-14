import { useState } from "react";

export default function App() {
  const [query, setQuery] = useState("How to roast a chicken?");
  const [gptResponse, setGptResponse] = useState("");
  const [apiEndpoint, setApiEndpoint] = useState("localhost");  // default to localhost


  const fetchAnswer = () => {
    let url;
    if (apiEndpoint === "localhost") {
      url = "http://localhost:3000/";
    } else if (apiEndpoint === "aws") {
      url = "https://your-aws-url-here.com/";
    }

    const options = {
      "query": `${query}`
    };
    
    fetch(url, {
      method: "POST",
      body: JSON.stringify(options),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
    .then(response => {
      response.json().then(data => {
        console.log(data);
        setGptResponse(data.gptCompletion);
      })
    })
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      fetchAnswer();
    }
  };

  return (
    <div className="h-screen bg-gray-50 flex flex-col items-center justify-start pt-36">
      <div className="absolute top-0 left-0 ml-8 mt-6">
        <h1 className="text-4xl font-extrabold tracking-tighter">ZapSearch ⚡️</h1>
      </div>

      <div className="md:w-3/4 xl:w-3/5 text-left mx-auto px-4">
        {/* API Endpoint Selector */}
        <select onChange={(e) => setApiEndpoint(e.target.value)} className="mb-4 bg-gray-50 border rounded p-1">
          <option value="localhost">Localhost</option>
          <option value="aws">AWS</option>
        </select>
        <br />
        {/* Input Box */}
        <input
          id="query-box"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyPress={handleKeyPress}
          type="text"
          className="border-2 border-gray-400 px-4 py-2 w-3/5 rounded focus:outline-none focus:border-blue-500"
          placeholder="What is your query..."
        />
        {/* Enter Button */}
        <button onClick={fetchAnswer} className="ml-1 px-4 py-2 rounded bg-blue-500 text-white">
          Enter
        </button>
        {/* Query */}
        <p className="text-xl font-bold text-gray-600 mt-6">
          {query}
        </p>

        {/* Answer */}
        <p className="text-2xl mt-2 text-gray-700">
          {gptResponse}
        </p>
      </div>
    </div>
  );
}
