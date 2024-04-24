import { useState } from 'react';
import './App.css';
import data from './data';

function App() {
  const [definition, setDefinition] = useState("Definition:");
  const [search, setSearch] = useState("");
  const [showMessage, setShowMessage] = useState(false);

  const searchWord = () => {
    let found = false;
    data.forEach((val) => {
      if(val.word.toLowerCase() === search.toLowerCase()) {
        setDefinition((prev) => prev+val.meaning);
        found = true;
      }
    })
    if(!found) {
      setDefinition("Definition:");
      setShowMessage(true); 
    } else {
      setShowMessage(false);
    }
  }

  return (
    <>
      <h1>Dictionary App</h1>
      <input type="text" placeholder='Search for a word...' value={search} onChange={(e) => setSearch(e.target.value)}/>
      <button type='button' name='Search' onClick={searchWord}>Search</button>
      <p>{definition}</p>
      {showMessage? <p>Word not found in the dictionary.</p>: null}
    </>
  );
}

export default App;
