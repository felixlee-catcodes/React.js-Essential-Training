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
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    //fetch() is built into the browser for making HTTP request from whatever source
    fetch(`https://api.github.com/users/felixlee-catcodes`)
      .then((response) => response.json())
      .then(setData)
      .then(() => setLoading(false))
      .catch(setError);
  }, []);

  if (loading) return <h1>Loading...</h1>;
  if (error) return <pre>{JSON.stringify(error)}</pre>;
  if (!data) return null;

  return <GitHubUser name={data.name} userUrl={data.url} userType={data.type} email={data.email} avatar={data.avatar_url} />;
}

export default App;
