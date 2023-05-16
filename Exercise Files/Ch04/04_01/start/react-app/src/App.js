import "./App.css";
import { useState } from "react";

function App() {
  const [emotion, setEmotion] = useState("happy");
  console.log(emotion);
  return (
    <div className='App'>
      <h1>Current emotion is {emotion}</h1>
      <button onClick={() => setEmotion("depressed")}>Depressed 😔</button>
    </div>
  );
}

export default App;
