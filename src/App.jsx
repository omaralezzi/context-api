import React from 'react';

import MyProvider from './context/MyProvider';
import Count from './components/Count';
import Counter from './components/Counter';

import './App.css';

const App = () => {
  return (
    <MyProvider>
      <main>
        <h1>Context Api</h1>
        <Count />
        <Counter />
      </main>
    </MyProvider>
  );
};

export default App;
