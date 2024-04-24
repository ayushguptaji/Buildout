import "./App.css";
import { useState } from "react";

function App() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === "user" && password === "password") {
      setIsSubmitted(true);
    } else {
      setIsSubmitted(false);
      setError("Invalid username or password");
    }
  };
  return (
    <>
      <div>
        <h1>Login Page</h1>
        {isSubmitted ? (
          <p>Welcome, user!</p>
        ) : (
          <>
            <form onSubmit={handleSubmit}>
              {error === "" ? null : <p>{error}</p>}
              <div>
                <label htmlFor="Username">Username:</label>
                <input
                  required
                  id="Username"
                  type="text"
                  value={username}
                  placeholder="username"
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="Password">Password:</label>
                <input
                  required
                  id="Password"
                  type="password"
                  value={password}
                  placeholder="password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <button type="submit" name="submit">
                Submit
              </button>
            </form>
          </>
        )}
      </div>
    </>
  );
}

export default App;
