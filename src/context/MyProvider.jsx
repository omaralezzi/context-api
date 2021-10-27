import React, { useState } from 'react';

import MyContext from './MyContext';

const MyProvider = (props) => {
  const [count, setCount] = useState(0);

  return (
    <MyContext.Provider value={{ count, setCount }}>
      {props.children}
    </MyContext.Provider>
  );
};

export default MyProvider;
