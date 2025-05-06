import React from 'react';

const Result = ({ title = "Result", children }) => {
  return (
    <div className="bg-gray-300 w-full md:w-96 rounded-lg p-4 shadow-2xl">
      <h2 className="text-xl font-bold mb-4">{title}</h2>
      <div className="text-gray-800">
        {children ? children : "No result to display."}
      </div>
    </div>
  );
};

export default Result;
