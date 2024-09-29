import { useState } from 'react'
import './App.css'


const ColorPicker = () => {
  const [color, setColor] = useState("#000000")
  const changeColor: React.ChangeEventHandler<HTMLInputElement> = (event) => { setColor(event.target.value) }
  const changeColorSelect: React.ChangeEventHandler<HTMLSelectElement> = (event) => { setColor(event.target.value) }
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <input type="color" value={color} onChange={changeColor}></input>
      <select onChange={changeColorSelect}>
        <option value="#000000">#000000</option>
        <option value="#FF0000">#FF0000</option>
        <option value="#00FF00">#00FF00</option>
        <option value="#0000FF">#0000FF</option>
      </select>
      <div style={{ width: "100px", height: "100px", backgroundColor: color }}></div>
    </div>
  )
}

const App = () => {
  return (
    <>
      <ColorPicker></ColorPicker>
    </>
  )
}

export default App
