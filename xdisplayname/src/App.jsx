import "./App.css";
import { useState } from "react";

const App = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [fullName, setFullName] = useState("");
  const [classValue, setClassValue] = useState("hide");

  const createFullName = (e) => {
    e.preventDefault();
    if (firstName === "" || lastName === "") {
      setClassValue("hide");
      return;
    }
    setClassValue("show");
    setFullName(firstName + " " + lastName);
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
            if (e.target.value === "") setClassValue("hide");
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
            if (e.target.value === "") setClassValue("hide");
            setLastName(e.target.value);
          }}
          required
        />
        <br />
        <button type="submit">Submit</button>
      </form>
      <div className={classValue}>Full Name: {fullName}</div>
    </>
  );
};

export default App;
