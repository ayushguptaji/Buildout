import { useEffect, useState } from "react";
import "./App.css";
import Card from "./components/Card";

function App() {
  const [data, setData] = useState([]);
  const [loader, setLoader] = useState(true);

  const fetchData = async () => {
    setLoader(true);
    try {
      const data = await fetch("https://restcountries.com/v3.1/all");
      if (!data.ok) {
        throw new Error(`HTTP error! Status: ${data.status}`);
      }
      const resJson = await data.json();
      setData(resJson);
    } catch (e) {
      console.error("there is error",e);
    }
    setLoader(false);
  };

  useEffect(() => {
    let isFlag = true;
    if (isFlag) {
      fetchData();
    }
    return () => {
      isFlag = false;
    };
  }, []);
  return (
    <>
      {loader ? (
        <div className="loader">Data Loading........</div>
      ) : !data.length ? (
        <div className="loader">No Data Found!!!</div>
      ) : (
        <div className="card-container">
          {data.map((val) => {
            return (
              <Card
                key={val.cca3}
                name={val.name.common}
                url={val.flags.png}
                alt={val.flags.alt}
              />
            );
          })}
        </div>
      )}
    </>
  );
}

export default App;
