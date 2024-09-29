import { useState } from 'react'
import './App.css'

interface Position {
  top : number
  left : number
}
const RandomCat = () => {
  const [position, setPosition] = useState<Position>();

  const handleClick = () => {
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    const randomTop = Math.floor(Math.random() * windowHeight);
    const randomLeft = Math.floor(Math.random() * windowWidth);
    setPosition({ top: randomTop, left: randomLeft });
  };

  return (
    <>
      <button onClick={handleClick}>Random Cat</button>
      { position &&
      <div
        style={{
          position: 'absolute', // To allow free positioning on the screen
          top: `${position.top}px`,
          left: `${position.left}px`,
          width: '200px',
          height: '200px',
          backgroundImage: 'url("https://cataas.com/cat?width=200&height=200")',
          border: '1px solid blue',
          borderRadius:'50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
      </div>
      }
    </>
  )
}

const App = () => {

  return (
    <>
      <RandomCat></RandomCat>
    </>
  )
}

export default App
