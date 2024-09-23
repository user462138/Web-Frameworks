// import React from "react";

const rij: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const kolom: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// interface MultiplicationTableProps{
//   max :  number
// }
// const MultiplicationTable = ({max} : MultiplicationTableProps) => {
//   return(
//     <>
    
//     </>
//   )
// }

const App = () => {

  return (
    <>
      <table>
        {kolom.map(y =>
          <tr>
            {rij.map(x =>
              <td>{y*x}</td>
            )}
          </tr>)
        }

      </table>
    </>
  );
};

export default App;