import logo from './logo.svg';
import './App.css';

import React, { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  const [reverse, setReverse] = useState(false);

  const reverseClass = reverse ? 'reverse' : '';

  const handleClick = () => {
    setReverse(!reverse);
    setCount(count + 1);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className={`App-logo ${reverseClass}`} alt="logo" />

        <h1>Contador: {count}</h1>

        <button type="button" onClick={handleClick}>
          Reverse {reverseClass}
        </button>
      </header>
    </div>
  );
}

export default App;
