import { useState } from 'react'
import './App.css'


const ContactForm = () => {
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [confirmationText, setConfirmationText] = useState("")

  const handleChangeFirstName: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    setFirstName(event.target.value);
  }
  const handleChangeLastName: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    setLastName(event.target.value);
  }
  const handleChangeEmail: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    setEmail(event.target.value);
  }
  const handleChangeMessage: React.ChangeEventHandler<HTMLTextAreaElement> = (event) => {
    setMessage(event.target.value);
  }
  const handleChangeSendForm: React.MouseEventHandler<HTMLButtonElement> = (_event) => {
    setFirstName("")
    setLastName("");
    setEmail("");
    setMessage("");
    setConfirmationText(`Thanks ${firstName} ${lastName}! We will contact you at ${email}.`)
  }
  return (
    <>
      <form style={{ display: "grid", gridTemplateColumns: "100px 1fr", gap: "5px" }}>
        <label>First name:</label>
        <input type="text" value={firstName} onChange={handleChangeFirstName} />
        <label>Last name:</label>
        <input type="text" value={lastName} onChange={handleChangeLastName} />
        <label>Email:</label>
        <input type="email" value={email} onChange={handleChangeEmail} />
        <label>Message:</label>
        <textarea value={message} onChange={handleChangeMessage}></textarea>
        {
          firstName && lastName && email && message ?
            <button onClick={handleChangeSendForm} type="submit" style={{ gridColumn: "1 / span 2" }}>Send</button> :
            <button disabled type="submit" style={{ gridColumn: "1 / span 2" }}>Send</button>
        }
        {confirmationText && <div style={{ gridRowStart: 6, gridColumn: "1 / span 2", color: "greenyellow" }}>{confirmationText}</div>}
      </form>
    </>
  )
}
const App = () => {
  return (
    <>
      <ContactForm></ContactForm>
    </>
  )
}

export default App
