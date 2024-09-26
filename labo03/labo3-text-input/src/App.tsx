

interface TextInputProps {
  size: number
}

const getTextInputs = (numberOfTextInputs: number) => {
  let TextInputs: number[] = [];
  for (let index = 0; index < numberOfTextInputs; index++) {
    TextInputs.push(Math.floor(Math.random() * 5))
  }
  return TextInputs
}

const TextInput = ({ size }: TextInputProps) => {
  let TextInputs = getTextInputs(size)
  return (
    <>
      {TextInputs.map((_x, index) =>
        <input
          key={index}
          type="text"
          onChange={(event) => { alert(`Textbox ${index} changed to ${event.target.value}`); }}
        />
      )}
    </>
  )
}

const App = () => {
  return (
    <div>
      <TextInput size={50}></TextInput>
    </div>
  );
};

export default App;