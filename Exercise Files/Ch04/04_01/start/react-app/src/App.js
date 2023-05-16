import "./App.css";

const [firstCity, secondCity, thirdCity] = ["Tokyo", "Singapore", "Istanbul"];
console.log(
  `I want to go to ${firstCity} but maybe not ${secondCity}. And I've already been to ${thirdCity}`
);

function App({ library }) {
  return (
    <div className='App'>
      <h1>Hello from {library}</h1>
    </div>
  );
}

export default App;
