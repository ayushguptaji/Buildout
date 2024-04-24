import { useState } from "react";
import "./App.css";
import data from "./data";
import { useEffect } from "react";

function App() {
  const [updatedData, setUpdatedData] = useState([]);
  const sortByDate = () => {
    let newData = [...data];
    newData.sort((a, b) => {
      const aDate = new Date(a.date);
      const bDate = new Date(b.date);
      if (aDate.getFullYear() !== bDate.getFullYear()) {
        return bDate.getFullYear() - aDate.getFullYear();
      } else {
        if (aDate.getMonth() !== bDate.getMonth()) {
          return bDate.getMonth() - aDate.getMonth();
        } else {
          if (aDate.getDate() !== bDate.getDate()) {
            return bDate.getDate() - aDate.getDate();
          } else {
            return b.views - a.views;
          }
        }
      }
    });
    setUpdatedData(newData);
  };

  const sortByViews = () => {
    let newData = [...data];
    newData.sort((a, b) => {
      if (b.views !== a.views) return b.views - a.views;
      const aDate = new Date(a.date);
      const bDate = new Date(b.date);
      if (aDate.getFullYear() !== bDate.getFullYear()) {
        return bDate.getFullYear() - aDate.getFullYear();
      } else {
        if (aDate.getMonth() !== bDate.getMonth()) {
          return bDate.getMonth() - aDate.getMonth();
        } else {
          if (aDate.getDate() !== bDate.getDate()) {
            return bDate.getDate() - aDate.getDate();
          } else {
            return b.views - a.views;
          }
        }
      }
    });
    setUpdatedData(newData);
  };

  useEffect(() => {
    setUpdatedData(data);
  }, []);
  return (
    <>
      <h1>Date and Views Table</h1>
      <button type="button" name="Sort by Date" onClick={sortByDate}>
        Sort by Date
      </button>
      <button type="button" name="Sort by Views" onClick={sortByViews}>
        Sort by Views
      </button>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Views</th>
            <th>Article</th>
          </tr>
        </thead>
        <tbody>
          {updatedData.map((val, idx) => {
            return (
              <tr key={idx}>
                <td>{val.date}</td>
                <td>{val.views}</td>
                <td>{val.article}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default App;
