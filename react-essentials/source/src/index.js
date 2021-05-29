import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App'

function AppWithStateExample(){
  const [emotion, setEmotion] = useState("happy");
  const [secondary, setSecondary] = useState("tired");

  useEffect(() => {
    console.log(`It's ${emotion} around here`)
  },[emotion]);

  useEffect(() => {
    console.log(`Secondary emotion is ${secondary}`);
  }, [secondary]);

  return <>
    <h1>Current emotion is {emotion} and {secondary}</h1>
    <button onClick={() => setEmotion("happy")}>happy</button>
    <button onClick={() => setSecondary("flustered")}>Make flustered</button>
    <button onClick={() => setEmotion("frustrated")}>frustrate me</button>
    <button onClick={() => setSecondary("confused")}>Confuse Me</button>
    <button onClick={() => setEmotion("enthusiastic")}>enthuse</button>
    <button onClick={() => setSecondary("dizzy")}>Make Sleepy</button>
  </>
}

ReactDOM.render(
  // <App authorized={true}/>,
  <AppWithStateExample />,
  document.getElementById('root')
);