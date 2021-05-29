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

function AppWithUseEffectForDataHook({ login }) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!login) return;

    setLoading(true);

    fetch(`https://api.github.com/users/${login}`)
      .then((response) => response.json())
      .then(setData)
      .then(() => setLoading(false))
      .catch((error) => setError(error));
  }, [login]);

  if (loading) return <h1>Loading...</h1>

  if (error) return <pre>{JSON.stringify(data, null, 2)}</pre>

  if (!data) return <h1>No Data available</h1>

  if(data && data.message) return <pre>{data.message}</pre>
  return (
    <div>
      <h1>{data.name}</h1>
      <p>{data.public_repos}</p>
      <img alt={data.login} src={data.avatar_url} />
    </div>
  );

}
ReactDOM.render(
  // <App authorized={true}/>,
  <AppWithUseEffectForDataHook login="jawwadalam" />,
  document.getElementById('root')
);