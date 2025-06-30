import React, { useState } from 'react';

const App = () => {

  const [counter, setCounter] = useState(0);

  return (
    <div>
      <h1>Total Clicked: {counter}</h1>
      <button onClick={()=>setCounter(counter+1)} className="btn btn-success">Success</button>
      
    </div>

    
  );
};

export default App;