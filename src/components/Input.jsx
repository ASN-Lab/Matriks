import React from 'react';

const Input = ({ values = [], onChange }) => {
  // values is expected to be an array of 9 elements
  // onChange is a function(index, value) to update the value at index

  const handleInputChange = (index, e) => {
    const val = e.target.value;
    // Allow only numbers and optional leading minus sign
    if (/^-?\d*$/.test(val)) {
      onChange(index, val);
    }
  };

  return (
    <div className='flex flex-col md:flex-row items-center justify-center gap-7'>
      <div className="bg-gray-200 backdrop-blur-md shadow-xl border border-black w-full md:w-96 rounded-lg p-4">
        <div className="grid grid-cols-3 gap-2">
          {[...Array(9)].map((_, i) => (
            <input
              key={i}
              type="text"
              value={values[i] || ''}
              onChange={(e) => handleInputChange(i, e)}
              className="border border-gray-400 rounded p-2 text-center"
              placeholder={`Input ${i + 1}`}
              inputMode="tel"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Input;
