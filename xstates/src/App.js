import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("none");
  const [states, setStates] = useState([]);
  const [selectedState, setSelectedState] = useState("none");
  const [cities, setCities] = useState([]);
  const [selectedCity, setSelectedCity] = useState("none");

  useEffect(() => {
    let isFlag = true;
    const fetchCity = async () => {
      if (selectedState === "none" || selectedCountry === "none") {
        return;
      }
      await fetch(
        `https://crio-location-selector.onrender.com/country=${selectedCountry}/state=${selectedState}/cities`
      )
        .then((response) => response.json())
        .then((data) => {
          setCities(data);
          setSelectedCity("none");
        })
        .catch((error) => console.error("Error fetching cities: ", error));
    };
    if (isFlag) {
      fetchCity();
    }
    return () => {
      isFlag = false;
    };
  }, [selectedState, selectedCountry]);

  useEffect(() => {
    let isFlag = true;
    const fetchState = async () => {
      if (selectedCountry === "none") {
        return;
      }
      await fetch(
        `https://crio-location-selector.onrender.com/country=${selectedCountry}/states`
      )
        .then((response) => response.json())
        .then((data) => {
          setStates(data);
          setSelectedState("none");
          setCities([]);
          setSelectedCity("none");
        })
        .catch((error) => console.error("Error fetching states: ", error));
    };
    if (isFlag) {
      fetchState();
    }
    return () => {
      isFlag = false;
    };
  }, [selectedCountry]);

  useEffect(() => {
    let isFlag = true;
    const fetchCountry = async () => {
      await fetch("https://crio-location-selector.onrender.com/countries")
        .then((response) => response.json())
        .then((data) => setCountries(data))
        .catch((error) => console.error("Error fetching countries: ", error));
    };
    if (isFlag) {
      fetchCountry();
    }
    return () => {
      isFlag = false;
    };
  }, []);
  return (
    <>
      <div className="main">
        <h1>Select Location</h1>
        <div className="dropdowns">
          <select
            name="country"
            id="country"
            value={selectedCountry}
            onChange={(e) => setSelectedCountry(e.target.value)}
            className="dropdown"
          >
            <option value="none" disabled>
              Select Country
            </option>
            {countries.map((val, idx) => {
              return (
                <option value={val} key={idx}>
                  {val}
                </option>
              );
            })}
          </select>
          <select
            name="state"
            id="state"
            disabled={selectedCountry === "none" ? true : false}
            value={selectedState}
            onChange={(e) => setSelectedState(e.target.value)}
            className="dropdown"
          >
            <option value="none" disabled>
              Select State
            </option>
            {states.map((val, idx) => {
              return (
                <option value={val} key={idx}>
                  {val}
                </option>
              );
            })}
          </select>
          <select
            name="city"
            id="city"
            disabled={selectedState === "none" ? true : false}
            value={selectedCity}
            onChange={(e) => setSelectedCity(e.target.value)}
            className="dropdown"
          >
            <option value="none" disabled>
              Select City
            </option>
            {cities.map((val, idx) => {
              return (
                <option value={val} key={idx}>
                  {val}
                </option>
              );
            })}
          </select>
        </div>
        {selectedCity === "none" ? null : (
          <p>
            You selected {selectedCity}, {selectedState}, {selectedCountry}
          </p>
        )}
      </div>
    </>
  );
}

export default App;
