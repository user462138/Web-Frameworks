
import { useEffect, useState } from 'react'
import './App.css'


interface SquareProps {
  size: number
  color: string
  work: number
  setWork: () => void
}
const Square = ({ size, color, work, setWork }: SquareProps) => {
  const [productivity, setProductivity] = useState(1)
  const [clicked, setClicked] = useState(0)

  let isActiveTimer: boolean = false
  const Timer = () => {
    const [number, setNumber] = useState(0);
    useEffect(() => {
      let handle = setInterval(() => {
        setNumber(number => number + 1);
      }, 1000);

      return () => {
        clearInterval(handle);
      }
    }, [1000]);
    { number === 5 ? (setProductivity(1), isActiveTimer = false) : setProductivity(0) }
  }
  const onClickFun = () => {
    setWork()
    setClicked(prevCount => prevCount != 10 ? prevCount + 1 : prevCount)
  }
  function name() {
    { clicked === 10 ? setProductivity(0) : setProductivity(1) }
    { productivity === 0 && !isActiveTimer ? (isActiveTimer = false, Timer()) : (isActiveTimer) }
  } name()

  return (
    <>

      {productivity === 0 ?
        <div className='joske_PLu8' style={{ backgroundColor: color, height: size, width: size }}>
          <p>😵</p>
        </div>
        : (work === 100 ?
          (<div className='joske_PLu8' onClick={onClickFun} style={{ backgroundColor: color, height: size, width: size }}>
            <p>😃</p>
          </div>)
          :
          (<div className='joske_PLu8' onClick={onClickFun} style={{ backgroundColor: color, height: size, width: size }}>
            <p>😐</p>
          </div>))}
    </>
  )
}

const App = () => {
  const [work, setWork] = useState(0)
  const increaseSetWork = () => {
    setWork(prevCount => prevCount != 100 ? prevCount + 1 : prevCount)
  }
  return (
    <>
      <progress max={100} value={work}></progress>
      <div style={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap"
      }}>
        <Square size={100} color={'red'} setWork={increaseSetWork} work={work}></Square>
        <Square size={100} color={'green'} setWork={increaseSetWork} work={work}></Square>
        <Square size={100} color={'pink'} setWork={increaseSetWork} work={work}></Square>
      </div>
    </>
  )
}

export default App
