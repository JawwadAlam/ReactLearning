import React, { useState, useEffect, useReducer } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App'

function AppWithStateExample() {
  const [emotion, setEmotion] = useState("happy");
  const [secondary, setSecondary] = useState("tired");
  // const [checked, setChecked] = useState(false);
  const [checked, toggle] = useReducer(
    (checked) => !checked,
    false
    );

  useEffect(() => {
    console.log(`It's ${emotion} around here`)
  }, [emotion]);

  useEffect(() => {
    console.log(`Secondary emotion is ${secondary}`);
  }, [secondary]);

  // function toggle(){
  //   setChecked((checked) => !checked)
  // }

  return <>
    <h1>Current emotion is {emotion} and {secondary}</h1>
    <button onClick={() => setEmotion("happy")}>happy</button>
    <button onClick={() => setSecondary("flustered")}>Make flustered</button>
    <button onClick={() => setEmotion("frustrated")}>frustrate me</button>
    <button onClick={() => setSecondary("confused")}>Confuse Me</button>
    <button onClick={() => setEmotion("enthusiastic")}>enthuse</button>
    <button onClick={() => setSecondary("dizzy")}>Make Sleepy</button>

    {/* <input type="checkbox" onChange={() => setChecked((checked) => !checked)} value={checked} /> */}
    <input type="checkbox" onChange={toggle} value={checked} />
    <p>{checked ? "Checked" : "Not Checked"}</p>
  </>
}

ReactDOM.render(
  // <App authorized={true}/>,
  <AppWithStateExample />,
  document.getElementById('root')
);