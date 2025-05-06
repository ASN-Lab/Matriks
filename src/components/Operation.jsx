import React from 'react';

const Operation = () => {
  return (
    <div className="flex flex-wrap gap-4 justify-center p-10"> 
      <button class="cursor-pointer transition-all bg-teal-400 text-white px-6 py-2 rounded-lg
      border-teal-600
      border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px]
      active:border-b-[2px] active:brightness-90 active:translate-y-[2px]">
        Add
      </button>
      <button class="cursor-pointer transition-all bg-teal-400 text-white px-6 py-2 rounded-lg
      border-teal-600
      border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px]
      active:border-b-[2px] active:brightness-90 active:translate-y-[2px]">
        Substract
      </button>
      <button class="cursor-pointer transition-all bg-teal-400 text-white px-6 py-2 rounded-lg
      border-teal-600
      border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px]
      active:border-b-[2px] active:brightness-90 active:translate-y-[2px]">
        Multiply
      </button>
      <button class="cursor-pointer transition-all bg-teal-400 text-white px-6 py-2 rounded-lg
      border-teal-600
      border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px]
      active:border-b-[2px] active:brightness-90 active:translate-y-[2px]">
        Transpose
      </button>
      <button class="cursor-pointer transition-all bg-teal-400 text-white px-6 py-2 rounded-lg
      border-teal-600
      border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px]
      active:border-b-[2px] active:brightness-90 active:translate-y-[2px]">
        Inverse
      </button>
    </div>
  );
};

export default Operation;