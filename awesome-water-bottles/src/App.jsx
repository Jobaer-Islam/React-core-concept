
import { Suspense } from 'react'
import './App.css'
import Bottles from './components/Bottles/Bottles'

const bottlesPromise = fetch('../public/bottles.json').then(res => res.json());

function App() {

  return (
    <>
     
      <h1>Buy Awesome Water Bottles</h1>
      <Suspense fallback={<h2>Bottles are Loading...</h2>}>
        <Bottles bottlesPromise = {bottlesPromise}>

        </Bottles>
      </Suspense>
      
    </>
  )
}

export default App
