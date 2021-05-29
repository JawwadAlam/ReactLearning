import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App'

function AppTwo() {
  return (
    <h2 className="App">This is second App Content - App Two</h2>
  );
}

ReactDOM.render(
  <>
    <App />
    <AppTwo />
  </>
  ,
  document.getElementById('root')
);