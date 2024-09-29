import { ColorRing } from 'react-loader-spinner'
import './App.css'
import { useState } from 'react'

const Loading = () => {
  return (
    <>
      <ColorRing
        visible={true}
        height="80"
        width="80"
        ariaLabel="color-ring-loading"
        wrapperStyle={{}}
        wrapperClass="color-ring-wrapper"
        colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
      />
    </>
  )
}

const App = () => {
  const [loading, setLoading] = useState(false)
  const startLoading = () => {
    setLoading(true)
    setTimeout(() => {setLoading(false)}, 3000)
  }
  return (
    <>
      <center>
        {loading ? <Loading></Loading> : <button onClick={startLoading}>Start loading</button>}
      </center>
    </>
  )
}

export default App
