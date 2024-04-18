import { useEffect, useState } from "react";
import "./App.css";
import Card from "./components/Card";

function App() {
  const [data, setData] = useState([]);
  const [loader, setLoader] = useState(true);

  const fetchData = () => {
    setLoader(true);
    fetch("https://restcountries.com/v3.1/all")
    .then((response) => response.json())
    .then((data) => setData(data))
    .catch((error) => console.error("Error fetching data: ", error));
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
