import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState(null);
  useEffect(() => {
    //fetch() is built into the browser for making HTTP request from whatever source
    fetch(`https://api.github.com/users/felixlee-catcodes`)
      .then((response) => response.json())
      .then(setData);
  }, []);
  if (data) return <pre>{JSON.stringify(data, null, 2)}</pre>;
  return (
    <>
      <h1>Fetching Data with Hooks</h1>
    </>
  );
}

export default App;
