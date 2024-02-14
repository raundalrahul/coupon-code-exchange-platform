import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [Joke, setJoke] = useState(0)

  return (
    <>
      <h1>This is test React Code</h1>
      <h3>Jokes: {Joke.length}</h3>
      {/* {
        Joke.map((Joke, index)=>{
          <div key={Joke.id}>
            <h3>{Joke.name}</h3>
            <p>{Joke.joke}</p>
          </div>
        })
      } */}
    </>
  )
}

export default App
