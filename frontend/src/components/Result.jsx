import React from 'react';

export default function Result({ results }) {
  // first 3 results 
  const topResults = results.slice(0, 3);

  return (
    <div className="resultContainer max-w-1/2 mt-5">
      {topResults.map((result, index) => (
        <div key={index} className="summary border rounded-lg hover:shadow-md p-4 hover:bg-blue-100 mt-4">
          <div className="font-extrabold text-xl">𝚫 Score: {
            Math.floor(Math.random() * 100) + 1
            }</div>
          <h2 className="font-bold my-1">{result.title}</h2>
          <p className="my-1">{result.snippet}</p>
          <a href={result.link} className="text-blue-500 my-1">
            {result.link}
          </a>
        </div>
      ))}
    </div>
  );
}
