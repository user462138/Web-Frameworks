
import { useEffect, useState } from 'react'
import './App.css'


interface pokemons {
  name: string
}
const Pokedex = () => {
  const [limit, setlimit] = useState<number>(15)
  const [number, setNumber] = useState<number>(0);
  const [pokemons, setPokemons] = useState<pokemons[]>([])
  const [searchField, setSearchField] = useState("");
  // const [loading, setLoading] = useState<boolean>(false);


  let filteredPokemons = pokemons.filter(item => item.name.toUpperCase().startsWith(searchField.toUpperCase()));


  useEffect(() => {
    // setLoading(true); // Start loading
    const fetchFunction = async () => {
      let result = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=0`);
      let json = await result.json();
      setPokemons(json.results);
    }
    fetchFunction();
    setTimeout(() => {}, 2000)
    // setLoading(false); // Stop loading
  }, [limit]);

  return (
    <>
      {/* {loading ?? <div>Loading...</div>} */}
      <input placeholder="search" type="text" value={searchField} onChange={(event) => setSearchField(event.target.value)} />
      {filteredPokemons.map(poke => <div key={poke.name}>{poke.name}</div>)}
      <input type="number" onChange={(event) => setNumber(parseInt(event.target.value))} value={number} />
      <button onClick={() => setlimit(number)}>Set Limit</button>
    </>
  )
}

const App = () => {
  return (
    <>
      <Pokedex></Pokedex>
    </>
  )
}

export default App
