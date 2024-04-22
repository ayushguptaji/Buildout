import './App.css';
import { useState } from 'react';

function App() {
  const [counter, setCounter] = useState(0);

  const updateCouter = (e) => {
    if(e.target.name === "Increment") {
      setCounter((prev) => prev+1)
    } else {
      setCounter((prev) => prev-1)
    }
  }
  return (
    <>
      <h1>Counter App</h1>
      <p>Count: {counter}</p>
      <button type="button" name="Increment" onClick={updateCouter}>Increment</button>
      <button type="button" name="Decrement" onClick={updateCouter}>Decrement</button>
    </>
  );
}

export default App;
