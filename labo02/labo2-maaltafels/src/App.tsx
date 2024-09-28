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
      <th></th> {/* Lege cel voor de linkerkant */}
      {[...Array(max).keys()].map(i => (
        <th key={i}>{i + 1}</th>
      ))}
    </>
  )
}

const App = () => {

  return (
    <>
      <h1>Maaltafels</h1>
      <MultiplicationTable max={5} />
      <MultiplicationTable max={10} />
      <MultiplicationTable max={15} />
    </>
  );
};

export default App;