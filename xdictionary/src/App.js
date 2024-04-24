import { useState } from 'react';
import './App.css';
import data from './data';

function App() {
  const [definition, setDefinition] = useState("");
  const [search, setSearch] = useState("");
  const [showMessage, setShowMessage] = useState(false);

  const searchWord = () => {
    let found = false;
    data.forEach((val) => {
      if(val.word.toLowerCase() === search.toLowerCase()) {
        setDefinition(val.meaning);
        found = true;
      }
    })
    if(!found) {
      setDefinition("");
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
      <p><strong>Definition:</strong>{definition}</p>
      {showMessage? "Word not found in the dictionary.": null}
    </>
  );
}

export default App;
