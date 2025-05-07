import React from 'react'

const Input = () => {
  return (
    <div className='flex flex-col md:flex-row items-center justify-center gap-7'>
        <div className="bg-gray-200 backdrop-blur-md shadow-xl border border-black w-full md:w-96 rounded-lg p-4">
            <div className="grid grid-cols-3 gap-2">
                {[...Array(9)].map((_, i) => (
                    <input
                      key={i}
                      type="text"
                      pattern="-?[0-9]*"
                      inputMode="tel"
                      className="border border-gray-400 rounded p-2 text-center"
                      placeholder={`Input ${i + 1}`}
                    />
                ))}
            </div>
        </div>

        <div className="bg-gray-200 backdrop-blur-md shadow-xl border border-black w-full md:w-96 rounded-lg p-4">
            <div className="grid grid-cols-3 gap-2">
                {[...Array(9)].map((_, i) => (
                    <input
                      key={i}
                      type="text"
                      pattern="-?[0-9]*"
                      inputMode="tel"
                      className="border border-gray-400 rounded p-2 text-center"
                      placeholder={`Input ${i + 1}`}
                    />
                ))}
            </div>
        </div>
    </div>
  );
};

export default Input;
