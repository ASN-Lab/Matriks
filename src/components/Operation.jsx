import React from 'react';

const Operation = ({ onAdd, onSubtract, onMultiply, onTranspose, onInverse }) => {
  return (
    <div className="flex flex-wrap gap-4 justify-center p-10"> 
      <button
        onClick={onAdd}
        className="cursor-pointer transition-all bg-teal-400 text-white px-6 py-2 rounded-lg
        border-teal-600
        border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px]
        active:border-b-[2px] active:brightness-90 active:translate-y-[2px]"
      >
        Add
      </button>
      <button
        onClick={onSubtract}
        className="cursor-pointer transition-all bg-teal-400 text-white px-6 py-2 rounded-lg
        border-teal-600
        border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px]
        active:border-b-[2px] active:brightness-90 active:translate-y-[2px]"
      >
        Substract
      </button>
      <button
        onClick={onMultiply}
        className="cursor-pointer transition-all bg-teal-400 text-white px-6 py-2 rounded-lg
        border-teal-600
        border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px]
        active:border-b-[2px] active:brightness-90 active:translate-y-[2px]"
      >
        Multiply
      </button>
      <button
        onClick={onTranspose}
        className="cursor-pointer transition-all bg-teal-400 text-white px-6 py-2 rounded-lg
        border-teal-600
        border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px]
        active:border-b-[2px] active:brightness-90 active:translate-y-[2px]"
      >
        Transpose
      </button>
      <button
        onClick={onInverse}
        className="cursor-pointer transition-all bg-teal-400 text-white px-6 py-2 rounded-lg
        border-teal-600
        border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px]
        active:border-b-[2px] active:brightness-90 active:translate-y-[2px]"
      >
        Inverse
      </button>
    </div>
  );
};

export default Operation;
