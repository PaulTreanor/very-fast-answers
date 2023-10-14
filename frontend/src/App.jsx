import { useEffect, useState } from "react";
import Card from "./components/Cards";
import Result from "./components/Result";
import ApiEndpointSelector from "./components/ApiEndpointSelector";
import TitleSection from "./TitleSection";

export default function App() {
  const [query, setQuery] = useState("Should I invest in Vodafone?");
  const [gptResponse, setGptResponse] = useState("");
  const [apiEndpoint, setApiEndpoint] = useState("localhost");

  const [step1Complete, setStep1Progress] = useState("none");
  const [step2Complete, setStep2Progress] = useState("none");
  const [step3Complete, setStep3Progress] = useState("none");

  const dataFlowSteps = [
    {
      stepNumber: 1,
      stepName: "Analysing keywords",
      status: step1Complete,
    },
    {
      stepNumber: 2,
      stepName: "Searching relevant news",
      status: step2Complete,
    },
    {
      stepNumber: 3,
      stepName: "Searching relevant news",
      status: step3Complete,
    },
  ];

  const orchestrateAPICalls = async () => {
    try {
      // Call the first API
      setStep1Progress("loading");
      const promptKeyWords = await fetchPromptKeyWords();
      setStep1Progress("done");
      // Process response1 or do something with it

      // Call the second API, using data from the first response if needed
      setStep2Progress("loading");
      const response2 = await fetchNewsArticles(promptKeyWords.gptCompletion);
      setStep2Progress("done");
      // Process response2 or do something with it

      // Continue with more API calls as needed
    } catch (error) {
      // Handle errors here
      console.error(error);
    }
  };

  const fetchPromptKeyWords = () => {
    return new Promise((resolve, reject) => {
      let url;
      if (apiEndpoint === "localhost") {
        url = "http://localhost:3000/getKeywords";
      } else if (apiEndpoint === "aws") {
        url = "https://your-aws-url-here.com/";
      }

      const options = {
        queryType: "keywords",
        query: `${query}`,
      };

      fetch(url, {
        method: "POST",
        body: JSON.stringify(options),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.json();
        })
        .then((data) => {
          console.log(data);
          setGptResponse(data.gptCompletion);
          resolve(data); // Resolve the Promise with the API response data
        })
        .catch((error) => {
          reject(error); // Reject the Promise in case of an error
        });
    });
  };

  const fetchNewsArticles = () => {
    return new Promise((resolve, reject) => {
      let url;
      if (apiEndpoint === "localhost") {
        url = "http://localhost:3000/getSearchResults";
      } else if (apiEndpoint === "aws") {
        url = "https://your-aws-url-here.com/";
      }

      const options = {
        query: '{ "keywords": ["hello"] }',
      };

      fetch(url, {
        method: "POST",
        body: JSON.stringify(options),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.json();
        })
        .then((data) => {
          console.log(data);
          // setGptResponse(data.gptCompletion);
          resolve(data); // Resolve the Promise with the API response data
        })
        .catch((error) => {
          reject(error); // Reject the Promise in case of an error
        });
    });
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      orchestrateAPICalls();
    }
  };

  return (
    <div className="h-screen bg-gray-50 flex flex-col items-center justify-start pt-36">
      <TitleSection />
      <div className="md:w-3/4 xl:w-3/5 text-left mx-auto px-4">
        <ApiEndpointSelector
          apiEndpoint={apiEndpoint}
          setApiEndpoint={setApiEndpoint}
        />
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
        <button
          onClick={orchestrateAPICalls}
          className="ml-1 px-4 py-2 rounded bg-blue-500 text-white"
        >
          Enter
        </button>

        {/* Progress cards */}
        <div className="flex ">
          {dataFlowSteps.map(
            (step) =>
              step.status !== "none" && (
                <div key={step.stepNumber} className="mr-5">
                  <Card
                    status={step.status}
                    stepNumber={step.stepNumber}
                    stepName={step.stepName}
                    className=""
                  />
                </div>
              )
          )}
        </div>

        <Result />
      </div>
    </div>
  );
}
