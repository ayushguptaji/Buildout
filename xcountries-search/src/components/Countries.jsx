import { useEffect, useState } from "react";
import "./Countries.css";
import Card from "./Card";

function Countries({ totalData }) {
  const [data, setData] = useState([]);
  const [searchedValue, setSearchedValue] = useState("");

  const searchCountries = (e) => {
    setSearchedValue(e.target.value);
    const searchedContent = e.target.value.toLowerCase();
    let newData = totalData.filter(
      (val) => val.name.common.toLowerCase().search(searchedContent) >= 0
    );
    setData(newData);
  };

  useEffect(() => {
    let isFlag = true;
    if (isFlag) {
      setData(totalData);
    }
    return () => {
      isFlag = false;
    };
    // eslint-disable-next-line
  }, []);

  return (
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
    </>
  );
}

export default Countries;
