import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import useFetch from './Hook/useFetch'
import { Debounced } from './Components/Debounced'
import { Throttled } from './Components/Throttled'

function App() {
  const [input, setInput] = useState('')
  const [globalData, setGlobalData] = useState([])

  const { state } = useFetch(`https://jsonplaceholder.typicode.com/photos`)
  //further desctructuring state
  const { data } = state

  return (
    <div className="App">
      <input
        value={input}
        onChange={(e) => {
          setInput(e.target.value)
        }}
      />

      {/* Import Throttle/Debounce Component as per Need */}

      <Debounced data={data} input={input}
        globalData={globalData}
        setGlobalData={setGlobalData}
      />

      <Throttled data={data} input={input}
        globalData={globalData}
        setGlobalData={setGlobalData}
      />

      {/* Comment the components as per Need */}
      
    </div>
  )
}

export default App
