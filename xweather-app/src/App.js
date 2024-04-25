import "./App.css";
import { useState } from "react";
import Card from "./Card";

function App() {
  const [search, setSearch] = useState("");
  const [data, setData] = useState({});
  const [loader, setLoader] = useState(0);

  const fetchData = async () => {
    setLoader(1);
    try {
      const res = await fetch(
        `https://api.weatherapi.com/v1/current.json?Key=32ece3f7297a4967aa862416242802&q=${search}`
      );
      if (res.status === 200) {
        const resJson = await res.json();
        setLoader(2);
        setData(resJson);
      } else {
        throw new Error("");
      }
    } catch (e) {
      alert("Failed to fetch weather data");
      setLoader(0);
    }
  };
  return (
    <>
      <div className="main">
        <div>
          <input
            type="text"
            placeholder="Enter city name"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button type="button" onClick={fetchData}>
            Search
          </button>
        </div>
        {loader === 1 ? <p>Loading data...</p> : null}
        {loader === 2 ? (
          <div className="weather-cards">
            <Card data={data.current.temp_c} name="Temperature" unit="°C" />
            <Card data={data.current.humidity} name="Humidity" unit="%" />
            <Card data={data.current.condition.text} name="Condition" unit="" />
            <Card data={data.current.wind_kph} name="Wind Speed" unit=" kph" />
          </div>
        ) : null}
      </div>
    </>
  );
}

export default App;
