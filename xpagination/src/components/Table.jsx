import { useEffect, useState } from "react";
import "./Table.css";

function Table({ totalData }) {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [disablePrevious, setDisablePrevious] = useState(true);
  const [disableNext, setDisableNext] = useState(false);

  useEffect(() => {
    currentPage > 1 ? setDisablePrevious(false) : setDisablePrevious(true);
    currentPage === Math.ceil(data.length/10) ? setDisableNext(true) : setDisableNext(false);
  }, [currentPage, data]);

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
      <table className="table-container">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
          </tr>
        </thead>
        <tbody>
          {data
            .filter(
              (val) =>
                val.id >= currentPage * 10 - 9 && val.id < currentPage * 10 + 1
            )
            .map((val) => {
              return (
                <tr key={val.id}>
                  <td>{val.id}</td>
                  <td>{val.name}</td>
                  <td>{val.email}</td>
                  <td>{val.role}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
      <div>
        <button
          name="Previous"
          disabled={disablePrevious}
          onClick={() => {
            setCurrentPage((prev) => prev - 1);
          }}
        >
          Previous
        </button>
        <button name="Current">{currentPage}</button>
        <button
          name="Next"
          disabled={disableNext}
          onClick={() => {
            setCurrentPage((prev) => prev + 1);
          }}
        >
          Next
        </button>
      </div>
    </>
  );
}

export default Table;
