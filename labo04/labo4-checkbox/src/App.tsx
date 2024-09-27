import { useState } from "react"

interface ShowVideoProps {
  show : boolean 
}
const ShowVideo = ( {show} : ShowVideoProps) => {
  return(
    <>{show && (
    <div><img src="https://media.tenor.com/yheo1GGu3FwAAAAM/rick-roll-rick-ashley.gif&quot"/></div>
    ) }
    </>
  )
}

const Checkbox  = () => {
  const [ Hide, Show] = useState(false);
  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    Show (event.target.checked);
  }
  return(
    <>
    <input type="checkbox" checked={Hide} onChange={handleChange}/>Show/Hide
    <ShowVideo show={Hide}></ShowVideo>
    </>
  )
}


const App = () => { 
  return (
    <>
    <div>
      <Checkbox></Checkbox>
    </div>
    </>
  )
}

export default App
