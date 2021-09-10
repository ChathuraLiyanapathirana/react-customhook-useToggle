import React, { Component } from 'react';
import { render } from 'react-dom';
import useToggle from './useToggle';

const App = () => {
  const { toggledValue, toggleValue } = useToggle(false);

  return (
    <div>
      <h1>Value : {toggledValue.toString()}</h1>

      <h5>Default Toggle</h5>
      <button onClick={() => toggleValue()}>Toggle Value</button>

      <h5>Toggle With Specific Value (true)</h5>
      <button onClick={() => toggleValue(true)}>Toggle Value</button>

      <h5>Toggle With Specific Value (false)</h5>
      <button onClick={() => toggleValue(false)}>Toggle Value</button>
    </div>
  );
};

render(<App />, document.getElementById('root'));
