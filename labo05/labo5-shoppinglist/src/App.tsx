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
  const [confirmationText, setConfirmationText] = useState("")
  const [errorText, setErrorText] = useState("")


  const addIetm: React.MouseEventHandler<HTMLButtonElement> = () => {
    if (!name) {
      setErrorText(" Name must not be empty")
      setConfirmationText("")
    }
    if (quantity <= 0) {
      setErrorText(" Quantity must be greater than 0")
      setConfirmationText("")
    } if (name && quantity > 0) {
      setShoppingList([...shoppingList, { name: name, quantity: quantity }])
      setConfirmationText(`Item added to shopping list.`)
      setErrorText("")
    }
  }

  const removeIetm = (name : string) => {
    let numbersCpy = shoppingList.filter((Item) => Item.name !== name);
    setShoppingList(numbersCpy);
    setConfirmationText(`Item removed from shopping list.`)
  }
  return (
    <>
      <div style={{ width: '500px' }}>
        {confirmationText && <div
          style={{
            backgroundColor: " #dff0d8",
            border: "1px solid #d6e9c6",
            borderRadius: "4px",
            color: " #3c763d",
            marginBottom: "10px",
            padding: "10px"
          }}
        > {confirmationText} </div>}
        {errorText && <div
          style={{
            backgroundColor: "#f2dede",
            border: "1px solid #ebccd1",
            borderRadius: "4px",
            color: " #a94442",
            marginBottom: "10px",
            padding: "10px"
          }}
        > {errorText} </div>}
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
                <td><input value="Remove" type="button" onClick={_e => removeIetm(x.name)}  /></td>
              </tr>
            )}
          </tbody>
        </table>
      </div >
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
