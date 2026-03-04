import { useState } from "react";

function Signin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSignup = async (e: any) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3000/api/v1/user/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          password,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage("Signin successful ");
        setUsername("");
        setPassword("");
      } else {
        setMessage(data.error || "Signup failed ");
      }
    } catch (error) {
      setMessage("Something went wrong ");
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h2>Signin</h2>
      <form onSubmit={handleSignup}>
        <div style={{ marginBottom: "10px" }}>
          <input
            type="text"
            placeholder="Enter Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>

        <div style={{ marginBottom: "10px" }}>
          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <button type="submit">Signin</button>
      </form>

      {message && <p style={{ marginTop: "15px" }}>{message}</p>}
    </div>
  );
}

export default Signin;
