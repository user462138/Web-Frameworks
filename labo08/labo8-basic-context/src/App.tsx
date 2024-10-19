
import React, { useContext, useState } from 'react'
import './App.css'

interface SettingsContext {
  color: string
  setColor: (color: string) => void
}

const SettingsContext = React.createContext<SettingsContext>({ color: "red", setColor: (_color: string) => { } })

const Square = () => {
  const { color } = useContext(SettingsContext)
  const { setColor } = useContext(SettingsContext)

  return (
    <div
      onClick={() => {
        color === "red" ?
          setColor("blue") :
          color === "green" ?
            setColor("red") :
            setColor("green")
      }}
      style={{ backgroundColor: color, height: 100, width: 100, margin: 10 }}>
    </div>
  )
}

const SquareRow = () => {
  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <Square></Square>
      <Square></Square>
      <Square></Square>
    </div>
  )
}

const SelectionBox = () => {
  const { color } = useContext(SettingsContext)
  const { setColor } = useContext(SettingsContext)

  return (
    <>
      <select value={color} onChange={(event) => { setColor(event.target.value) }}>
        <option value="red">red</option>
        <option value="blue">blue</option>
        <option value="green">green</option>
      </select>
    </>
  )
}

const App = () => {
  const [color, setColor] = useState("red")
  return (
    <SettingsContext.Provider value={{color,setColor}}>
      <SelectionBox></SelectionBox>
      <SquareRow></SquareRow>
    </SettingsContext.Provider>
  )
}

export default App
