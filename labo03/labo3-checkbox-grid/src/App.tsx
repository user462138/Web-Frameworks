
interface CheckBoxProps {
  size: number
}

const generateGrid = (rows: number, cols: number): boolean[][] => {
  const array = [];
  for (let i = 0; i < rows; i++) {
    const row = [];
    for (let j = 0; j < cols; j++) {
      row.push(false);
    }
    array.push(row);
  }
  return array;
};

const CheckBox = ({ size }: CheckBoxProps) => {
  let array = generateGrid(size, size)
  // let checkBoxChecked : boolean =  false
  return (
    <>
      {array[0].map((_y, index) =>
        <div key={index}>
          { array[1].map((_x, index) =>
            <input key={index} type="checkbox" checked>
            </input>
          )}
        </div>
      )}
    </>
  )
}


const App = () => {
  return (
    <>
      <CheckBox size={10}></CheckBox>
    </>
  )
}

export default App
