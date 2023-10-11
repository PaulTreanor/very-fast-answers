export default function App() {
  return (
    <div className="h-screen bg-gray-50 flex flex-col items-center justify-start pt-36">
      {/* Title */}
      <div className="absolute top-0 left-0 ml-8 mt-6">
        <h1 className="text-4xl font-extrabold tracking-tighter">ZapSearch ⚡️</h1>
      </div>

      
      <div>
        
      </div>

    {/* Container for Query and Answer Sections */}
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
         To roast a chicken you need to preheat the oven to 425 degrees F. Then, you need to wash the chicken and pat it dry. Next, you need to season the chicken with salt and pepper. Finally, you need to roast the chicken for 1 hour and 15 minutes.
        </p>
      </div>
    </div>
  );
}
