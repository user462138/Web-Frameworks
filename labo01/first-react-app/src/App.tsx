import './App.css'
import React from "react";
import logo from "./assets/img.jpg";


// const getLuckText = () => "We hebben geluk gehad";
// const getBadLuckText = () => "We hebben pech gehad";


// const App = () => {
//   return (
//     <>
//       <h1>Titel van mijn boek</h1>
//       <img src={logo}/>
//       {
//         Math.random() > 0.5 ?
//           <p>{getLuckText()}</p> :
//           <p>{getBadLuckText()}</p>
//       }
//     </>
//   );
// };

interface Game {
  id: number
  name: string,
  releaseYear: number,
  sales: number
}

const App = () => {
  const games: Game[] = [
    {
      id: 0,
      name: "World of Warcraft",
      releaseYear: 2004,
      sales: 5
    },
    {
      id: 1,
      name: "Valheim",
      releaseYear: 2021,
      sales: 10
    },
    {
      id: 2,
      name: "Minecraft",
      releaseYear: 2011,
      sales: 20
    }
  ]
  return (
    <>
      <h1>Games</h1>
      <img src={logo} />

      {
        games.filter((game) => game.sales >= 8).map((game) =>
          <React.Fragment key={game.id}>
            <h2>{game.name} ({game.releaseYear})</h2>
            <p>Aantal keer verkocht: {game.sales}</p>
          </React.Fragment>
        )
      }
    </>
  );
}





export default App;