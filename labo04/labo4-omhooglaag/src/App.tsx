import { useState } from 'react'


interface CounterProps {
  count : number
}
const Counter = ({} : CounterProps) => {
  const [count, setCount] = useState(0);
  return(
    <>
    <div style={{display: "flex"}}>
    <button onClick={() => {
        setCount(prevCount => prevCount + 1); 
        setCount(prevCount => prevCount + 1);
       }
      }>+</button>      
      <div>
      Count: {count}
      </div>
      <button onClick={() => {
        setCount(prevCount => prevCount - 1); 
        setCount(prevCount => prevCount - 1);
       }
      }>-</button>
    </div>
    </>
  )
}
const App = () => {
  return (
    <>
    <Counter count={0}></Counter>
    <Counter count={0}></Counter>
    <Counter count={0}></Counter>
    <Counter count={0}></Counter>
    </>
  )
}

export default App
