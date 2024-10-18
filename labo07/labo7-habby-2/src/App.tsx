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
  const [isActiveTimer, setIsActiveTimer] = useState(false) // Manage isActiveTimer as a state
  const [number, setNumber] = useState(0) // Timer state

  useEffect(() => {
    let timerHandle: number|undefined;

    if (isActiveTimer) {
      timerHandle = setInterval(() => {
        setNumber((prevNumber) => prevNumber + 1)
      }, 1000)
    }

    if (number === 5) {
      setProductivity(1)
      setIsActiveTimer(false) // Stop the timer when the condition is met
      clearInterval(timerHandle)
    }

    return () => {
      clearInterval(timerHandle)
    }
  }, [isActiveTimer, number])

  const onClickFun = () => {
    setWork()
    setClicked((prevCount) => (prevCount !== 10 ? prevCount + 1 : prevCount))

    // Start the timer if productivity hits 0 and the timer isn't running
    if (clicked === 10 && !isActiveTimer) {
      setProductivity(0)
      setNumber(0)
      setIsActiveTimer(true)
    }
  }

  return (
    <>
      {productivity === 0 ? (
        <div
          className='joske_PLu8'
          style={{ backgroundColor: color, height: size, width: size }}
        >
          <p>😵</p>
        </div>
      ) : work === 100 ? (
        <div
          className='joske_PLu8'
          onClick={onClickFun}
          style={{ backgroundColor: color, height: size, width: size }}
        >
          <p>😃</p>
        </div>
      ) : (
        <div
          className='joske_PLu8'
          onClick={onClickFun}
          style={{ backgroundColor: color, height: size, width: size }}
        >
          <p>😐</p>
        </div>
      )}
    </>
  )
}

const App = () => {
  const [work, setWork] = useState(0)

  const increaseSetWork = () => {
    setWork((prevCount) => (prevCount !== 100 ? prevCount + 1 : prevCount))
  }

  return (
    <>
      <progress max={100} value={work}></progress>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
        }}
      >
        <Square
          size={100}
          color={'red'}
          setWork={increaseSetWork}
          work={work}
        ></Square>
        <Square
          size={100}
          color={'green'}
          setWork={increaseSetWork}
          work={work}
        ></Square>
        <Square
          size={100}
          color={'pink'}
          setWork={increaseSetWork}
          work={work}
        ></Square>
      </div>
    </>
  )
}

export default App
