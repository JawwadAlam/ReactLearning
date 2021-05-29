import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App'

function AppWithStateExample(){
  const [emotion, setEmotion] = useState("happy");
  console.log(emotion);
  return <>
    <h1>Current emotion is {emotion}</h1>
    <button onClick={() => setEmotion("happy")}>happy</button>
    <button onClick={() => setEmotion("frustrated")}>frustrate</button>
    <button onClick={() => setEmotion("enthusiastic")}>enthuse</button>
  </>
}

ReactDOM.render(
  // <App authorized={true}/>,
  <AppWithStateExample />,
  document.getElementById('root')
);