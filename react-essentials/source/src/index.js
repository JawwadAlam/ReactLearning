import React, { useState, useEffect, useReducer } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App'

/*
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

    //{ <input type="checkbox" onChange={() => setChecked((checked) => !checked)} value={checked} /> }
    <input type="checkbox" onChange={toggle} value={checked} />
    <p>{checked ? "Checked" : "Not Checked"}</p>
  </>
}

*/

function AppWithUseEffectForDataHook({login}) {
  const [data, setData] = useState(null);

  useEffect(() => {
console.log("I am being called")

    fetch(`https://api.github.com/users/${login}`)
    .then((response) => response.json())
    .then(setData);
  }, []);

  if (data) {
    return (
    <div>
      <h1>{data.name}</h1>
      <p>Total Repos: {data.public_repos}</p>
      <img alt={data.login} src={data.avatar_url} />
    </div>
    );
  }

  return <div>No Data available</div>
}
ReactDOM.render(
  // <App authorized={true}/>,
  <AppWithUseEffectForDataHook login="jawwadalam"/>,
  document.getElementById('root')
);