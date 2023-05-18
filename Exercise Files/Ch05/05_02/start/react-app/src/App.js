import "./App.css";
import { useState } from "react";

function App() {
  const [title, setTitle] = useState("");
  const [color, setColor] = useState("#000");
  console.log(title);
  console.log(color);
  const submit = (e) => {
    e.preventDefault();
    alert(`${title}, ${color}`);
    setTitle("");
    setColor("#000");
  };
  return (
    <form onSubmit={submit}>
      <input type='text' placeholder='color title...' value={title} onChange={(event) => setTitle(event.target.value)} />
      <input type='color' value={color} onChange={(e) => setColor(e.target.value)} />
      <button>ADD</button>
    </form>
  );
}

export default App;
