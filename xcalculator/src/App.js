import './App.css';
import { useState } from 'react';
import Button from './Button';

function App() {
  const buttonValues = ["7", "8", "9", "+", "4", "5", "6", "-", "1", "2", "3", "*", "C", "0", "=", "/"];
  const [inputValue, setInputValue] = useState("");
  const [resultValue, setResultValue] = useState("");
  const calculateResult = (expression) => {
    try {
      return String(eval(expression));
    } catch (error) {
      return "Error";
    }
  };

  const handleClick = (e) => {
    const currentButton = e.target.name;
    if(currentButton === "C") {
      setInputValue("");
      setResultValue("");
    } else if(currentButton === "=") {
      if(inputValue === "") {
        setResultValue("Error");
        return;
      }
      setResultValue(calculateResult(inputValue));
    } else {
      setInputValue((prev)=> prev+currentButton);
    }
  }

  return (
    <>
      <h1>React Calculator</h1>
      <input type="text" value={inputValue} readOnly/>
      {resultValue === ""? null: <div>{resultValue}</div>}
      <div id="allButtons">
        {buttonValues.map((val) => {
          return <Button key={val} name={val} handler={handleClick}/>
        })}
      </div>
    </>
  );
}

export default App;
