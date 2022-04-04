import {useState} from 'react'
const gifts = [
  'CPU i9',
  'RAM 32GB RGB',
  'RBG Keyboard'
]

function App() {

  const [gift, setGift] = useState()

  const randomGift = () => {
    setGift(gifts[Math.floor(Math.random()*3)])
  }

  return (
    <div style={{ padding: 32 }}>
      <h1>{gift || 'chua co phan thuong'}</h1>
      <button onClick={randomGift}>nhan thuong</button>
    </div>
  )
}

export default App;
