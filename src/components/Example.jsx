import React, { useContext } from 'react';

import MyContext from '../context/MyContext';

const Example = () => {
  const context = useContext(MyContext);
  const { count } = context;

  return (
    <div>
      <h1>
        This is the example component which has count from the store {count}
      </h1>
    </div>
  );
};

export default Example;
