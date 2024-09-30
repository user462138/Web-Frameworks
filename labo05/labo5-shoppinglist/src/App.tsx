import { useState } from 'react'
import './App.css'

interface Item {
  name: string
  quantity: number
}


const ShoppingList = () => {
  const [shoppingList, setShoppingList] = useState<Item[]>([])
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(0);

  const addIetm: React.MouseEventHandler<HTMLButtonElement> = () => {
    setShoppingList([...shoppingList, { name: name, quantity: quantity }]);
  }

  // const addItemHandeler = 
  return (
    <>
      <div style={{width: '500px'}}>
        <div style={{ display: 'grid', gridTemplateColumns: '100px 1fr' }}>
          <label>Name:</label>
          <input type="text" placeholder="Name" value={name} onChange={(event) => setName(event.target.value)} />
          <label>Quantity:</label>
          <input type="number" placeholder="Quantity" value={quantity} onChange={(event) => setQuantity(parseInt(event.target.value))} />
        </div>
        <br />
        <button type="button" onClick={addIetm}> Add </button>
        <br />
        <table>
        <thead>
          <tr>
            <th style={{ width: "400px" }}>Name</th>
            <th>Quantity</th>
            <th style={{ width: "100px" }}></th>
          </tr>
        </thead>
        <tbody>
          {shoppingList.map(x =>
            <tr>
              <td>{x.name}</td>
              <td>{x.quantity}</td>
              <td><input type="button" value="Remove" /></td>
            </tr>
          )}
        </tbody>
      </table>
      </div>
    </>
  )
}
const App = () => {
  return (
    <>
      <ShoppingList></ShoppingList>
    </>
  )
}

export default App
