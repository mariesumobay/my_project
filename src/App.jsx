import React, { useState } from 'react';
import './App.css';

const Calculator = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleClick = (value) => {
    if (value === '=') {
      try {
        // Use a safer evaluation method or a library
        const sanitizedInput = input.replace(/[^-()\d/*+.]/g, '');
        setResult(eval(sanitizedInput).toString());
      } catch (error) {
        setResult('Error');
      }
    } else if (value === 'C') {
      setInput('');
      setResult('');
    } else {
      setInput((prevInput) => prevInput + value);
    }
  };

  return (
    <div className="calculator">
      <h1>My Calculator</h1> {/* Add a name/title here */}
      <div className="display">
        <input type="text" value={input} readOnly />
        <div className="result">{result}</div>
      </div>
      <div className="buttons">
        {['7', '8', '9', '/', '4', '5', '6', '*', '1', '2', '3', '-', '0', '.', '=', '+'].map((value) => (
          <button key={value} onClick={() => handleClick(value)}>
            {value}
          </button>
        ))}
        <button onClick={() => handleClick('C')} className="clear">
          C
        </button>
      </div>
    </div>
  );
};

export default Calculator;
/*
import React, { useState } from 'react';
import './App.css'; 

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const decrement = () => {
    setCount((prevCount) => prevCount - 1);
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <div className="counter">
      <h1>Counter App</h1>
      <div className="display">
        <p>Current Count: {count}</p>
      </div>
      <div className="buttons">
        <button onClick={increment}>Increment (+)</button>
        <button onClick={decrement}>Decrement (-)</button>
        <button onClick={reset} className="reset">Reset</button>
      </div>
    </div>
  );
};

export default Counter;
*/
