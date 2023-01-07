import React from 'react';
import { Routes,store } from './config';
import { Provider } from 'react-redux';


function App() {
  return (
    // store nanti berisi seluruh state global , props store
    <Provider store={store}> 
      <Routes/>
    </Provider>
    
  );
}

export default App;
