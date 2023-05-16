import "./App.css";
import { useReducer } from "react";

function App() {
  const [checked, setChecked] = useReducer((checked) => !checked, false);
  console.log(checked);
  return (
    <div className='App'>
      <input
        type='checkbox'
        name='check-box'
        id=''
        value={checked}
        onChange={setChecked}
      />
      <label htmlFor='check-box' name='check-box'>
        {checked ? "Checked" : "Not checked"}
      </label>
    </div>
  );
}

export default App;
