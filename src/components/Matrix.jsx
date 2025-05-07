import React, { useState } from 'react';
import Input from './Input';
import Operation from './Operation';
import Result from './Result';

const Matrix = () => {
  // Initialize two 3x3 matrices as arrays of 9 elements each, default empty strings
  const [matrixA, setMatrixA] = useState(Array(9).fill(''));
  const [matrixB, setMatrixB] = useState(Array(9).fill(''));
  const [result, setResult] = useState(null);
  const [error, setError] = useState('');

  // Convert decimal number to fraction string
  const decimalToFraction = (decimal) => {
    if (Number.isInteger(decimal)) return decimal.toString();

    const tolerance = 1.0E-6;
    let h1 = 1, h2 = 0;
    let k1 = 0, k2 = 1;
    let b = decimal;
    do {
      const a = Math.floor(b);
      let aux = h1; h1 = a * h1 + h2; h2 = aux;
      aux = k1; k1 = a * k1 + k2; k2 = aux;
      b = 1 / (b - a);
    } while (Math.abs(decimal - h1 / k1) > decimal * tolerance);

    return h1 + "/" + k1;
  };

  // Helper to parse matrix inputs to numbers, returns null if invalid
  const parseMatrix = (matrix) => {
    const parsed = matrix.map((val) => {
      if (val === '' || val === null || val === undefined) return 0;
      const num = Number(val);
      if (isNaN(num)) return null;
      return num;
    });
    if (parsed.includes(null)) return null;
    return parsed;
  };


  // Matrix operations
  const addMatrices = () => {
    setError('');
    const a = parseMatrix(matrixA);
    const b = parseMatrix(matrixB);
    if (!a || !b) {
      setError('Input matrices must contain only numbers.');
      setResult(null);
      return;
    }
    const res = a.map((val, i) => val + b[i]);
    setResult(res);
  };

  const subtractMatrices = () => {
    setError('');
    const a = parseMatrix(matrixA);
    const b = parseMatrix(matrixB);
    if (!a || !b) {
      setError('Input matrices must contain only numbers.');
      setResult(null);
      return;
    }
    const res = a.map((val, i) => val - b[i]);
    setResult(res);
  };

  const multiplyMatrices = () => {
    setError('');
    const a = parseMatrix(matrixA);
    const b = parseMatrix(matrixB);
    if (!a || !b) {
      setError('Input matrices must contain only numbers.');
      setResult(null);
      return;
    }
    // Multiply 3x3 matrices
    const res = [];
    for (let row = 0; row < 3; row++) {
      for (let col = 0; col < 3; col++) {
        let sum = 0;
        for (let k = 0; k < 3; k++) {
          sum += a[row * 3 + k] * b[k * 3 + col];
        }
        res[row * 3 + col] = sum;
      }
    }
    setResult(res);
  };

  const transposeMatrix = () => {
    setError('');
    const a = parseMatrix(matrixA);
    if (!a) {
      setError('Input matrix A must contain only numbers.');
      setResult(null);
      return;
    }
    const res = [];
    for (let row = 0; row < 3; row++) {
      for (let col = 0; col < 3; col++) {
        res[col * 3 + row] = a[row * 3 + col];
      }
    }
    setResult(res);
  };

  const inverseMatrix = () => {
    setError('');
    const a = parseMatrix(matrixA);
    if (!a) {
      setError('Input matrix A must contain only numbers.');
      setResult(null);
      return;
    }
    // Calculate inverse of 3x3 matrix a
    const det =
      a[0] * (a[4] * a[8] - a[5] * a[7]) -
      a[1] * (a[3] * a[8] - a[5] * a[6]) +
      a[2] * (a[3] * a[7] - a[4] * a[6]);
    if (det === 0) {
      setError('Matrix A is singular and cannot be inverted.');
      setResult(null);
      return;
    }
    const invDet = 1 / det;
    const res = [
      (a[4] * a[8] - a[5] * a[7]) * invDet,
      (a[2] * a[7] - a[1] * a[8]) * invDet,
      (a[1] * a[5] - a[2] * a[4]) * invDet,
      (a[5] * a[6] - a[3] * a[8]) * invDet,
      (a[0] * a[8] - a[2] * a[6]) * invDet,
      (a[2] * a[3] - a[0] * a[5]) * invDet,
      (a[3] * a[7] - a[4] * a[6]) * invDet,
      (a[1] * a[6] - a[0] * a[7]) * invDet,
      (a[0] * a[4] - a[1] * a[3]) * invDet,
    ];
    setResult(res);
  };

  // Handlers for input changes
  const handleChangeA = (index, value) => {
    const newMatrix = [...matrixA];
    newMatrix[index] = value;
    setMatrixA(newMatrix);
  };

  const handleChangeB = (index, value) => {
    const newMatrix = [...matrixB];
    newMatrix[index] = value;
    setMatrixB(newMatrix);
  };

  return (
    <div className='w-full flex flex-col md:flex-wrap pt-20 md:pt-20 items-center justify-center gap-10 p-5'>
      <Input values={matrixA} onChange={handleChangeA} />
      <Input values={matrixB} onChange={handleChangeB} />
      <Operation
        onAdd={addMatrices}
        onSubtract={subtractMatrices}
        onMultiply={multiplyMatrices}
        onTranspose={transposeMatrix}
        onInverse={inverseMatrix}
      />
      <Result title="Result">
        {error ? (
          <div className="text-red-600 font-bold">{error}</div>
        ) : result ? (
          <div className="grid grid-cols-3 gap-2">
            {result.map((val, i) => (
              <div
                key={i}
                className="border border-gray-400 rounded p-2 text-center bg-white"
              >
                {decimalToFraction(val)}
              </div>
            ))}
          </div>
        ) : (
          "Belum ada hasil"
        )}
      </Result>
    </div>
  );
};

export default Matrix;
