import "./App.css";
import { useState, useRef, useEffect } from "react";

function App() {
  const [show, setShow] = useState(false);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [dob, setDob] = useState("");
  const modalRef = useRef(null);

  const handleShow = () => setShow(true);

  const submitData = (e) => {
    e.preventDefault();
    if (!email.includes("@")) {
      alert("Invalid email. Please check your email address.");
      return;
    } else if (phone.length !== 10) {
      alert("Invalid phone number. Please enter a 10-digit phone number.");
      return;
    } else if (!dob || new Date(dob).getTime() > new Date().getTime()) {
      alert("Invalid date of birth");
      return;
    } else {
      setDob("");
      setEmail("");
      setPhone("");
      setUsername("");
    }
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setShow(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="main">
      <h1>User Details Modal</h1>
      <button variant="primary" onClick={handleShow}>
        Open Form
      </button>

      {show ? (
        <div className="modal-overlay">
          <form ref={modalRef} className="modal" onSubmit={submitData}>
            <div className="modal-content">
              <h2>Fill Details</h2>
              <label htmlFor="username">Username:</label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <label htmlFor="email">Email Address:</label>
              <input
                type="text"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <label htmlFor="phone">Phone Number:</label>
              <input
                type="number"
                id="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
              <label htmlFor="dob">Date of Birth:</label>
              <input
                type="date"
                id="dob"
                value={dob}
                onChange={(e) => setDob(e.target.value)}
              />
              <button type="submit" className="submit-button">
                Submit
              </button>
            </div>
          </form>
        </div>
      ) : null}
    </div>
  );
}

export default App;
