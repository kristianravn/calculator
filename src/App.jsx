import { useState } from 'react'
import { evaluate } from 'mathjs';
import './App.css'




function App() {
  const [input, setInput] = useState('');

  const buttons = [
    { value: 'AC', className: 'span-one' },
    { value: 'DEL' },
    { value: '%' },
    { value: '÷' },
    { value: '1' },
    { value: '2' },
    { value: '3' },
    { value: '*' },
    { value: '4' },
    { value: '5' },
    { value: '6' },
    { value: '+' },
    { value: '7' },
    { value: '8' },
    { value: '9' },
    { value: '-' },
    { value: '.' },
    { value: '0' },
    { value: '=', className: 'span-two' }
  ];

  const handleClick = (value) => {
    if (value === 'AC') {
      setInput('');
    } else if (value === 'DEL') {
      setInput(input.slice(0, -1));
    } else if (value === '=') {
      try {
        // Replace '÷' with '/' for evaluation
        const result = evaluate(input.replace('÷', '/'));
        setInput(result.toString());
      } catch {
        setInput('Error');
      }
    } else {
      setInput(input + value);
    }
  };

  return (
    <div className="calculator">
      <input type="text" className="display" value={input} readOnly />
      <div className="buttons">
        {buttons.map((button, index) => (
          <button key={index} className={button.className || ''} onClick={() => handleClick(button.value)}>
            {button.value}
          </button>
        ))}
      </div>
    </div>
  );
}

export default App;

