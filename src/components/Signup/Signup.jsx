import React, { useState } from 'react';
import './Signup.css';

const Signup = () => {
  const [user, setUser] = useState({
    username: '',
    email: '',
    password: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUser((prevUser) => ({ ...prevUser, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div>
      <h3 className="page-heading">Sign Up</h3>
      <form onSubmit={handleSubmit} className="signup-form">
        <input
          id="username"
          placeholder="Username"
          type="text"
          name="username"
          value={user.username}
          onChange={handleChange}
          required
        />

        <input
          id="email"
          placeholder="Email"
          type="email"
          name="email"
          value={user.email}
          onChange={handleChange}
          required
        />

        <input
          id="password"
          placeholder="Password"
          type="password"
          name="password"
          value={user.password}
          onChange={handleChange}
          required
        />

        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default Signup;
