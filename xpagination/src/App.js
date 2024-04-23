import { useEffect, useState } from "react";
import "./App.css";
import Table from "./components/Table";

function App() {
  const [data, setData] = useState([]);
  const [loader, setLoader] = useState(true);

  const fetchData = async () => {
    setLoader(true);
    await fetch("https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json")
      .then((response) => response.json())
      .then((newData) => {
        setData(newData);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
        alert("failed to fetch data");
      });
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
        <div id="main-page">
          <h1>Employee Data Table</h1>
          <Table totalData={data}/>
        </div>
      )}
    </>
  );
}

export default App;
