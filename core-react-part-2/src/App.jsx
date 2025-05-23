
import { Suspense } from 'react'
import './App.css'
import Batsman from './Batsman'
import Counter from './Counter'
import Users from './Users'

const fetchUsers = fetch('https://jsonplaceholder.typicode.com/users')
  .then(res => res.json())


function App() {

  function handleClick() {
    alert("I am clicked!")
  }

  const handleClick3 = () => {
    alert("Clicked 3!")
  }

  const handleAdd5 = (num) => {
    const newNum = num + 5;
    alert(newNum)

  }

  return (
    <>
      <h3>Vite + React</h3>
      <Suspense fallback={<h3>Loading...</h3>}>
        <Users fetchUsers ={fetchUsers}></Users>
      </Suspense>

      <Batsman></Batsman>

      <Counter></Counter>


      {/* <button onclick = "handleClick()">Click me</button> */}

      <button onClick={handleClick}>Click me</button>

      <button onClick={function handleClick2() {
        alert("Clicked 2!")
      }}>Click me 2</button>

      <button onClick={handleClick3}>Click me 3</button>

      <button onClick={() => alert("click 4!")}>Click me 4</button>

      <button onClick={() => handleAdd5(10)}>Click me 5</button>




    </>
  )
}

export default App
