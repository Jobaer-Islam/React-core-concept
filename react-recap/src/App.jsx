import React, { useState } from 'react';

const App = () => {

  const [counter, setCounter] = useState(0);

  const handleLogin = (event) =>{
    event.preventDefault();
    console.log(event.target.name.value);
  }

  return (
    <div>
      <form onSubmit={handleLogin}>
        <input
          className='input input-primary'
          type="text"
          name='name'
          placeholder='Your Name'
          />
          <button type='submit' className='btn btn-accent'>Submit</button>
      </form>

    </div>


  );
};

export default App;