import { useEffect, useState } from 'react';
import './App.css'

const DadJoke = () => {
  const [newDadJoke, setNewDadJoke] = useState("")
  const [myFavDadJoke, setMyFavDadJoke] = useState<string>(localStorage.getItem("myFavDadJoke") ?? "");

  const fetchNewJoke = async () => {
    try {
      const response = await fetch('https://icanhazdadjoke.com/', {
        headers: {
          'Accept': 'application/json',
        },
      });
      const data = await response.json();
      setNewDadJoke(data.joke);
    } catch (error) {
      console.error('Error fetching the joke: ', error);
    }
  };

  useEffect(() => {
    document.title = "labo5-localstorage";
  }, [])

  useEffect(() => {
    fetchNewJoke();
  }, [])

  useEffect(() => {
    localStorage.setItem("myFavDadJoke", myFavDadJoke);
  }, [myFavDadJoke]);

  return (
    <>
      <div>
        <p>Random joke:</p>
        <p>{newDadJoke}</p>
        <button onClick={() => setMyFavDadJoke(newDadJoke)}>Set as favorite</button>
        <button onClick={fetchNewJoke}>New joke</button>
      </div>
      {myFavDadJoke && (
        <div>
          <p>Favorite joke:</p>
          <p>{myFavDadJoke}</p>
          <button onClick={() => setMyFavDadJoke("")}>Delete My Favorite joke</button>
        </div>
      )}
    </>
  )
}

const App = () => {
  return (
    <>
      <DadJoke></DadJoke>
    </>
  )
}

export default App