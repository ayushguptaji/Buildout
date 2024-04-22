import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  const startStop = () => {
    setIsRunning(!isRunning);
  };

  const reset = () => {
    setIsRunning(false);
    setTime(0);
  };

  const formatTime = (seconds) => {
    let sec = seconds % 60;
    const mins = Math.floor(seconds / 60);
    if (sec < 10) {
      sec = "0" + sec;
    }
    return `${mins}:${sec}`;
  };

  useEffect(()=> {
    let intervalId;
    if(isRunning) {
      intervalId = setInterval(() => {
        setTime((prev) => prev+1);
      }, 1000);
    }
    return () => {
      clearInterval(intervalId);
    }
  }, [isRunning])
  return (
    <>
      <h1>Stopwatch</h1>
      <p>Time: {formatTime(time)}</p>
      {!isRunning ? (
        <button name="Start" onClick={startStop}>
          Start
        </button>
      ) : (
        <button name="Stop" onClick={startStop}>
          Stop
        </button>
      )}
      <button name="Reset" onClick={reset}>
        Reset
      </button>
    </>
  );
}

export default App;
