import './App.css'




const App = () => {
  function getRandomIntBetween(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  const pokemonArray = Array.from({ length: 150 }, (_v, i) => ({
    id: i + 1,
    name: `Pokémon ${i + 1}`,
    img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${i + 1}.png`
  }));
  return (
    <>
      <img
        src={pokemonArray[getRandomIntBetween(0, 150)].img}
        style={{ filter: 'brightness(0)' }}
      />
      <div>
        <button style={{margin:2}}>{pokemonArray[getRandomIntBetween(0, 150)].name}</button>
        <button style={{margin:2}}>{pokemonArray[getRandomIntBetween(0, 150)].name}</button>
        <button style={{margin:2}}>{pokemonArray[getRandomIntBetween(0, 150)].name}</button>
        <button style={{margin:2}}>{pokemonArray[getRandomIntBetween(0, 150)].name}</button>
      </div>
    </>
  );
};


export default App
