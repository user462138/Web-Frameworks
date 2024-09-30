import { useState } from 'react'
import './App.css'



const ColorSelect = () => {
  const [colors, _setColors] = useState<string[]>(["red", "green", "blue", "yellow", "orange", "purple", "black", "white"]);
  // const [color, setColor] = useState<string>("");
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [showSelectedColors, setShowSelectedColors] = useState<string[]>([]);


  const brandChange : React.ChangeEventHandler<HTMLSelectElement> = (event) => {
    setSelectedBrands([...Array.from(event.target.selectedOptions)].map(option => option.value));
  }
  return (
    <>
    <div>
      <select style={{height: "150px"}} multiple onChange={brandChange} value={selectedBrands} >
        {colors.map(x => <option value={x}>{x}</option>)}
      </select>
      <button style={{display: "block", marginTop: "15px", marginBottom: "15px"}} onClick={ () => setShowSelectedColors(selectedBrands)}>Show Colors</button>
    </div>
    {showSelectedColors &&     <div style={{display: "flex", flexDirection: "column", width: "100%", height: "200px"}}>
      {showSelectedColors.map(color => <div style={{flex: "1 1 0%", height: "200px", backgroundColor: color }}></div> )}
    </div>}
    </> 
  )
} 
const App = () => {
  return (
    <>
    <ColorSelect></ColorSelect>
    </>
  )
}

export default App