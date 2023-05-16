import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [emotion, setEmotion] = useState("happy");
  const [secondary, setSecondary] = useState("tired");
  useEffect(() => {
    console.log(`We're ${emotion} right now`);
  }, [emotion, secondary]);

  useEffect(() => {
    console.log(`We're also feeling ${secondary}`);
  }, [secondary]);

  console.log(emotion);
  return (
    <div className='App'>
      <h1>Current emotion is {emotion}</h1>
      <button onClick={() => setEmotion("depressed")}>Depressed 😔</button>
      <button onClick={() => setEmotion("just okay")}>Just OK 🙂</button>
      <button onClick={() => setEmotion("meh")}>Meh 🤷🏾‍♂️</button>
      <h2>Current secondary emotion is {secondary}</h2>
      <button onClick={() => setSecondary("grateful")}>Grateful 🥹</button>
      <button onClick={() => setSecondary("loving")}>Loving 🥰</button>
    </div>
  );
}

export default App;
