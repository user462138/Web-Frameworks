import { useState } from 'react';
import './App.css'

interface CounterProps {
  value: number
  index: number
  decreaseCounter: () => void
  increaseCounter: () => void
}

const Counter = ({ value, decreaseCounter, increaseCounter }: CounterProps) => {
  let color = "black";
  if (value > 0) {
    color = "green";
  } else if (value < 0) {
    color = "red";
  }
  return (
    <>
      <div style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", margin: "5px" }}>
        <button onClick={() => decreaseCounter()}>Omlaag</button>
        <div style={{ flex: 1, display: "flex", justifyContent: "center", alignItems: "center", color: color }}>Count: {value}</div>
        <button onClick={() => increaseCounter()}>Omhoog</button>
      </div>
    </>
  )
}

const CounterList = () => {
  const [counters, setCounters] = useState<number[]>([]);

  const addCounter = () => {
    setCounters([...counters, 0]);
  }

  const increaseCounter = (index: number) => {
    setCounters(counterCpy => counterCpy.map((counter, i) => (i === index) ? counter + 1 : counter));
  }

  const decreaseCounter = (index: number) => {
    setCounters(counterCpy => counterCpy.map((counter, i) => (i === index) ? counter - 1 : counter));
  }

  return (
    <>
      {counters.map((counter, index) => {
        return (
          <Counter key={index} value={counter} index={index} decreaseCounter={() => decreaseCounter(index)} increaseCounter={() => increaseCounter(index)}></Counter>
        )
      })}
      <p>Som van de tellers: {counters.reduce((prev, curr) => prev + curr, 0)}</p>
      <button onClick={addCounter}>Voeg teller toe</button>
    </>
  )
}

function App() {
  return (
    <>
      <CounterList></CounterList>
    </>
  )
}

export default App
