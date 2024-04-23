import { useEffect, useState } from "react";
import "./App.css";
import Countries from "./components/Countries";

function App() {
  const [data, setData] = useState([]);
  const [loader, setLoader] = useState(true);

  const fetchData = async () => {
    setLoader(true);
    await fetch("https://restcountries.com/v3.1/all")
      .then((response) => response.json())
      .then((newData) => {
        setData(newData);
      })
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
    // eslint-disable-next-line
  }, []);

  return (
    <>
      {loader === true ? (
        <div className="loader">Data Loading........</div>
      ) : (
        <>
          <Countries totalData={data}/>
        </>
      )}
    </>
  );
}

export default App;
