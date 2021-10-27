import React, { useContext } from 'react';

import MyContext from '../context/MyContext';
import Example from './Example';

const Counter = () => {
  const context = useContext(MyContext);
  const { setCount } = context;

  return (
    <div>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        Increment
      </button>
      <button onClick={() => setCount((prevCount) => prevCount - 1)}>
        Decrement
      </button>
      <Example />
    </div>
  );
};

export default Counter;
