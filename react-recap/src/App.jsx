import React, { useRef, useState } from 'react';

const App = () => {

  const [counter, setCounter] = useState(0);

  // const handleLogin = (event) =>{
  //   event.preventDefault();
  //   console.log(event.target.name.value);
  // }

  // const buttonRef = useRef(null);

  // const handleClick = () =>{
  //   alert("I got clicked!")
  // }

  // const buttonRef = useRef(null)
  // const handleClick = () => {
  //   console.log(buttonRef.current.value);
  // }

  const [name, setName] = useState('')
  const handleLogin = (event) => {
    event.preventDefault()
  }
  console.log(name);

  return (
    <div>
      <form onSubmit={handleLogin}>
        <input
          className='input input-primary'
          type="text"
          name='name'
          value={name}
          onChange={(event)=> setName(event.target.value)}
          placeholder='Your Name'
          />
          <button type='submit' className='btn btn-accent'>Submit</button>
      </form>

      {/* <input
        className='input input-primary'
        type="text"
        ref={buttonRef}
        placeholder='Your Name'
      />
      <button onClick={handleClick} className='btn btn-active'>Click</button> */}

    </div>


  );
};

export default App;