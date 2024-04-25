import React, { useState } from 'react';
import './Signup.css'; // Import the CSS file for styling

import { useNavigate } from 'react-router-dom';

function Signup() {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (firstName === '' || lastName === '' || email === '' || password === '' || confirmPassword === '') {
      alert('Please fill in all the details');
      return;
    }

    if (password !== confirmPassword) {
      alert('Passwords do not match.');
      return;
    }

    const response = await fetch('http://localhost:5000/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ firstName, lastName, email, password, confirmPassword })
    });

    if (response.ok) {
      navigate('/success');
    } else {
      console.error(await response.text());
    }
  };

  return (
    <div className="form-container">
      <h1>Sign Up</h1>
      <form className="signup-form" onSubmit={handleSubmit}>
        <div className="name-fields">
          <div>
            <label htmlFor="firstname">First Name:</label><br />
            <input
              type="text"
              id="firstname"
              name="firstname"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="lastname">Last Name:</label><br />
            <input
              type="text"
              id="lastname"
              name="lastname"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
          </div>
        </div>
        <label htmlFor="email">Email:</label><br />
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        /><br />
        <label htmlFor="password">Create Password:</label><br />
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        /><br />
        <label htmlFor="confirmpassword">Confirm Password:</label><br />
        <input
          type="password"
          id="confirmpassword"
          name="confirmpassword"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        /><br />
        <input type="submit" value="Sign Up" />
      </form>
      <p className="login-text">If you already have an account <a href="/login">login here</a></p>
    </div>
  );
}

export default Signup;