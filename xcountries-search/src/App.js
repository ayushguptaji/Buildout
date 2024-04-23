import { useEffect, useState } from "react";
import "./App.css";
import Card from "./components/Card";

function App() {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [searchedValue, setSearchedValue] = useState("");
  const [loader, setLoader] = useState(true);

  const searchCountries = (e) => {
    setSearchedValue(e.target.value);
    const searchedContent = e.target.value.toLowerCase();
    let newData = data.filter(
      (val) => val.name.common.toLowerCase().search(searchedContent) >= 0
    );
    setFilteredData(newData);
  };

  const fetchData = async () => {
    setLoader(true);
    await fetch("https://restcountries.com/v3.1/all")
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
      {loader === true ? (
        <div className="loader">Data Loading........</div>
      ) : !data.length ? (
        <div className="loader">No Data Found!!!</div>
      ) : (
        <>
          <div id="searchBar">
            <input
              type="text"
              value={searchedValue}
              onChange={searchCountries}
              placeholder="Search Countries"
            />
          </div>

          <div className="card-container">
            {!filteredData.length
              ? data.map((val) => {
                  return (
                    <Card
                      key={val.cca3}
                      name={val.name.common}
                      url={val.flags.png}
                      alt={val.flags.alt}
                    />
                  );
                })
              : filteredData.map((val) => {
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
        </>
      )}
    </>
  );
}

export default App;
