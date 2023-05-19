import "./App.css";
import { useState, useEffect } from "react";

function GitHubUser({ name, userUrl, userType, email, avatar }) {
  const propsList = [userUrl, name, userType, email];
  console.log(propsList);
  console.log(name);
  return (
    <div>
      <h1>{name}'s Github Data:</h1>
      <img src={avatar} alt={name} height={150} />
      <ul>
        <li>{userUrl}</li>
        <li>Type: {userType}</li>
        <li>Email: {email}</li>
      </ul>
    </div>
  );
}

function App() {
  const [data, setData] = useState(null);
  useEffect(() => {
    //fetch() is built into the browser for making HTTP request from whatever source
    fetch(`https://api.github.com/users/felixlee-catcodes`)
      .then((response) => response.json())
      .then(setData);
  }, []);
  if (data) return <GitHubUser name={data.name} userUrl={data.url} userType={data.type} email={data.email} avatar={data.avatar_url} />;
  else return <h1>ERROR, NO DATA FOUND!</h1>;
}

export default App;
