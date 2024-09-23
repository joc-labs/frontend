import React, { useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents page reload

    // Placeholder for API call to register user
    console.log(`Name: ${name}, Email: ${email}, Password: ${password}`);

    // Simulate successful registration
    setMessage("User registered successfully!");

    // You can add your fetch API call here later
    /*
    fetch('https://your-backend-url/api/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, password })
    })
    .then(response => response.json())
    .then(data => {
      setMessage(data.success ? 'User registered successfully!' : 'Registration failed');
    })
    .catch((error) => {
      setMessage('An error occurred: ' + error.message);
    });
    */
  };

  return (
    <div className="App">
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <button type="submit">Register</button>
      </form>

      {message && <p>{message}</p>}
    </div>
  );
}

export default App;
