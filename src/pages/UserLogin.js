import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // for navigation

const UserLogin = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // React Router hook for navigation

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your login logic here, e.g., form validation, API call, etc.
    console.log('Name:', name, 'Password:', password);

    // Example: Navigate to a dashboard after successful login
    // navigate('/dashboard');
  };

  const handleBack = () => {
    navigate('/Home'); // Ensure this route exists in your app
  };

  return (
    <div className="main">
      <div className="container">
        <form onSubmit={handleSubmit}>
          <fieldset>
            <legend>User/Lecturer Login</legend>

            <label>
              <span>Name</span>
              <input
                type="text"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
                required
              />
            </label>

            <label>
              <span>Password</span>
              <input
                type="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                required
              />
            </label>

            <button type="submit">Login</button>
          </fieldset>
        </form>
      </div>

      <div className="footer">
        <button onClick={handleBack}>Back</button>
      </div>
    </div>
  );
};

export default UserLogin;
