import "./App.css";
import { useState } from "react";

const App = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [fullName, setFullName] = useState("");
  const [showFullName, setShowFullName] = useState(false);

  const createFullName = (e) => {
    e.preventDefault();
    setShowFullName(true);
    setFullName("Full Name: " + firstName + " " + lastName);
  };
  return (
    <>
      <h1>Full Name Display</h1>
      <form onSubmit={createFullName}>
        <label for="firstName">First Name:</label>
        <input
          type="text"
          name="firstName"
          id="firstName"
          value={firstName}
          onChange={(e) => {
            if (e.target.value === "") {
              setShowFullName(false);
              setFullName("");
            }
            setFirstName(e.target.value);
          }}
          required
        />
        <br />
        <label for="lastName">Last Name:</label>
        <input
          type="text"
          name="lastName"
          id="lastName"
          value={lastName}
          onChange={(e) => {
            if (e.target.value === "") {
              setShowFullName(false);
              setFullName("");
            }
            setLastName(e.target.value);
          }}
          required
        />
        <br />
        <button type="submit">Submit</button>
      </form>
      {showFullName ? <div>{fullName}</div> : null}
    </>
  );
};

export default App;
