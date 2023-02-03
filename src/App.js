import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [data, setData] = useState({
    email: "",
    password: ""
  });

  const { email, password } = data;

  const changeHandle = (e) => {
    setData({ ...data, [e.target.name]: [e.target.value] });
  };

  const handleSubmit = (e) => {
    e.prevent.default();
    console.log(data);
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <label>Email</label>
        <input
          type="email"
          name="email"
          value={email}
          onChange={changeHandle}
          required
          min="16"
          max="50"
        />
        <br />
        <label>password</label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={changeHandle}
          required
          min="16"
          max="50"
        />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
