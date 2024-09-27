import { useState } from "react";

interface InputFieldsProps {
  inputValue : string
}
const InputFields  = ({} : InputFieldsProps ) => {
  const [name, setName] = useState<string>(''); 

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    setName(event.target.value);
  }
  
  return(
    <>
    <input type="text" value={name} onChange={handleChange} />
    <input type="text" value={name} onChange={handleChange} />
    <input type="text" value={name} onChange={handleChange} />
    <input type="text" value={name} onChange={handleChange} />
    </>
  )
}

const App = () => {
  return (
    <>
    <InputFields inputValue={""}></InputFields>
    </>
  )
}

export default App
