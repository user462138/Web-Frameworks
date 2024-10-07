import { useEffect, useState } from 'react';
import './App.css'

interface TimerProps {
  interval: number
}
const Timer = ({ interval }: TimerProps) => {
  const [number, setNumber] = useState(0);
  useEffect(() => {
    let handle = setInterval(() => {
      setNumber(number => number + 1);
    }, interval);

    return () => {
      clearInterval(handle);
    }
  }, [interval]);

  return <p>{number}</p>
}

const CurrentTime = ({ interval }: TimerProps) => {
  const [currentTime, setCurrentTime] = useState<string>(new Date().toLocaleTimeString());
  useEffect(() => {
    const timerId = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => {
      clearInterval(timerId);
    }
  }, [interval]);

  return (
    <>
      <p>Current time: <strong>{currentTime}</strong> </p>
    </>
  )
}

interface RandomValueProps {
  min: number
  max: number
}
const RandomValue = ({ min, max }: RandomValueProps) => {
  const [randomNumber, setRandomNumber] = useState<number>(0);
  const generateRandomNumber = () => {
    const newRandomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    setRandomNumber(newRandomNumber);
  };

  useEffect(() => {
    generateRandomNumber()
    let handle = setInterval(() => {
      generateRandomNumber();
    }, 1000);
    return () => {
      clearInterval(handle);
    }
  },[])
  return (
    <>
      <p>Random value between {min} and {max}: {randomNumber} </p>
    </>
  )
}

const App = () => {
  return (
    <>
      <Timer interval={1000}></Timer>
      <CurrentTime interval={1000}></CurrentTime>
      <RandomValue min={1} max={100}></RandomValue>
      <RandomValue min={100} max={200}></RandomValue>
    </>
  )
}
export default App
