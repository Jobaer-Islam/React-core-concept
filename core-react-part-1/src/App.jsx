
import './App.css'

function App() {

  return (
    <>
      
      <h1>Vite + React</h1>
      <Person></Person>
      <Sports></Sports>
      <Person></Person>
      <Person></Person>
      <Sports></Sports>
      
    </>
  )
}

function Person(){
  const age = 24;
  return (
    <p>I am a person {age}</p>
  )
}

function Sports(){
  return(
    <div>
      <h1>Cricekt</h1>
      <p>Playing and loosing</p>
    </div>
  )
}

export default App
