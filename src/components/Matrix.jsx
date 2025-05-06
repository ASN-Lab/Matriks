import React from 'react';
import Input from './Input';
import Operation from './Operation';
import Result from './Result';

const Matrix = () => {
  return (
    <div className='w-full flex flex-col md:flex-wrap pt-20 md:pt-20 items-center justify-center gap-10 p-5'>
        <Input />
        <Operation />
        <Result />
    </div>
  );
};

export default Matrix;