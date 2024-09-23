import './App.css'

interface ColorSquareProps{
  color : string
  size : number
}


const ColorSquare = ({color, size} : ColorSquareProps) => {
  return <div style={{width: size, height: size, backgroundColor: color}} onClick={(_event) => { alert(`${color} clicked!`); }}/>
}

const randomColor = (): string => {
  const randomColor: number = Math.floor(Math.random() * 16777215);
  const colorString: string = "#" + randomColor.toString(16);
  return colorString;
};

const App = () => {
  return (
    <div style={{display: "flex", flexDirection: "row", justifyContent: "center"}}>
    <ColorSquare color={randomColor()} size={100} ></ColorSquare>
    <ColorSquare color={randomColor()} size={100} ></ColorSquare>
    <ColorSquare color={randomColor()} size={100} ></ColorSquare>
    <ColorSquare color={randomColor()} size={100} ></ColorSquare>
    <ColorSquare color={randomColor()} size={100} ></ColorSquare>
    <ColorSquare color={randomColor()} size={100} ></ColorSquare>
    <ColorSquare color={randomColor()} size={100} ></ColorSquare>
    <ColorSquare color={randomColor()} size={100} ></ColorSquare>
    <ColorSquare color={randomColor()} size={100} ></ColorSquare>
    </div>
  );
}

export default App
