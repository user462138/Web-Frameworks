import { useState } from 'react'
import './index.css'

interface MultiplicationRowProps {
  factor: number
  max: number
}
const MultiplicationRow = ({ factor, max }: MultiplicationRowProps) => {
  return (
    <>
      <tr>
        <td><strong>{factor}</strong></td>
        {[...Array(max).keys()].map(i =>
          <td key={i}>{factor * (i + 1)}</td>
        )}
      </tr>
    </>
  )
}

interface MultiplicationTableProps {
  max: number
}
const MultiplicationTable = ({ max }: MultiplicationTableProps) => {
  return (
    <table>
      <thead>
        <Header max={max} />
      </thead>
      <tbody>
        {[...Array(max).keys()].map(i => (
          <MultiplicationRow key={i} factor={i + 1} max={max} />
        ))}
      </tbody>
    </table>
  )
}

interface HeaderProps {
  max: number
}
const Header = ({ max }: HeaderProps) => {
  return (
    <>
      <th></th> 
      {[...Array(max).keys()].map(i => (
        <th key={i}>{i + 1}</th>
      ))}
    </>
  )
}

const App = () => {
  const [value, setValue] = useState(5);

  return (
    <center>
      <input style={{marginBottom:"25px"}} type="number" max="10" min="2" onChange={(e) => setValue(parseInt(e.target.value))} value={value} />
      <MultiplicationTable max={value} />
    </center>
  );
};

export default App;