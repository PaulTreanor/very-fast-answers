import { useState, useEffect } from "react";
import { callGpt } from "./api/generate";

export default function App() {
  // const [query, setQuery] = useState("");
  const [gptResponse, setGptResponse] = useState("");
  
  useEffect(() => {
    async function fetchData() {
      let query = "How to roast a chicken?";
      const response = await callGpt(query);
      setGptResponse(response);
    }
    fetchData();
  }, []);  // Empty dependency array means this useEffect runs once when the component mounts


  return (
    <div className="h-screen bg-gray-50 flex flex-col items-center justify-start pt-36">
      <div className="absolute top-0 left-0 ml-8 mt-6">
        <h1 className="text-4xl font-extrabold tracking-tighter">ZapSearch ⚡️</h1>
      </div>

    <div className="md:w-3/4 xl:w-3/5 text-left  mx-auto px-4">
        {/* Input Box */}
        <input
          type="text"
          className="border-2 border-gray-400 px-4 py-2 w-96 rounded focus:outline-none focus:border-blue-500"
          placeholder="What is your query..."
        />
        {/* Query */}
        <p className="text-xl font-bold text-gray-600 mt-6">
          How to roast a chicken?
        </p>

        {/* Answer */}
        <p className="text-2xl mt-2 text-gray-700">
        {gptResponse}
        </p>
      </div>
    </div>
  );
}
