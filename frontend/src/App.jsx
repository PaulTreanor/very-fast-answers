import { useState } from "react";
import Card from "./components/Cards";
import Result from "./components/Result";
import ApiEndpointSelector from "./components/ApiEndpointSelector";
import TitleSection from "./TitleSection";

export default function App() {
  const [query, setQuery] = useState("Should I invest in Vodafone?");
  const [gptResponse, setGptResponse] = useState("");
  const [apiEndpoint, setApiEndpoint] = useState("localhost");  // default to localhost

  const dataFlowSteps = [
    {
      stepNumber: 1,
      stepName: "Analysing keywords",
      status: "done"
    }, 
    {
      stepNumber: 2,
      stepName: "Searching relevant news",
      status: "done"
    },
    {
      stepNumber: 3,
      stepName: "Searching relevant news",
      status: "done"
    }
  ]

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
      < TitleSection />
      <div className="md:w-3/4 xl:w-3/5 text-left mx-auto px-4">
        <ApiEndpointSelector apiEndpoint={apiEndpoint} setApiEndpoint={setApiEndpoint}/>
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

        {/* Progress cards */}
        {dataFlowSteps[dataFlowSteps.length - 1].status != "done" ? 
        <div  className="flex ">
          { dataFlowSteps.map((step) => (
            step.status != "none" &&
            <div key={step.stepNumber} className="mr-5">
              <Card status={step.status} stepNumber={step.stepNumber} stepName={step.stepName} className="" />
            </div>
          ))}
        </div>
        :
        < Result />
        
          }
      </div>
    </div>
  );
}
