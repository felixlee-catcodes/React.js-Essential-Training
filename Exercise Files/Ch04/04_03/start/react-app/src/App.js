import "./App.css";
import { useRef } from "react";

function App() {
  const txtTitle = useRef();
  const hexColor = useRef();

  console.log(txtTitle);
  console.log(hexColor);
  const submit = (e) => {
    e.preventDefault();
    const title = txtTitle.current.value;
    const color = hexColor.current.value;
    alert(`${title}, ${color}`);
    txtTitle.current.value = "";
    hexColor.current.value = "";
  };
  return (
    <div className='App'>
      <form action='' onSubmit={submit}>
        <input
          type='text'
          name='txtTitle'
          id=''
          placeholder='color title...'
          ref={txtTitle}
        />
        <input type='color' name='' id='' ref={hexColor} />
        <button>ADD</button>
      </form>
    </div>
  );
}

export default App;
