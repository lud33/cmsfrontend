import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // for navigation
import '../styles/AdminLogin.css'; // Move CSS into this file

const AdminLogin = () => {
  const navigate = useNavigate(); // React Router's useNavigate hook for navigation

  const [formData, setFormData] = useState({
    name: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // For now, simply print the form data. You can handle validation or API call here.
    console.log('Admin Login Data:', formData);
    // Redirect to Admin Page after successful login (as an example)
    // navigate('/admin-page');
  };

  return (
    <div className="main">
      <div className="container">
        <form onSubmit={handleSubmit}>
          <fieldset>
            <legend>Admin Login</legend>
            <label>
              <span>Name</span>
              <input
                type="text"
                name="name"
                value={formData.name}
                placeholder="Enter your name"
                onChange={handleChange}
                required
              />
            </label>

            <label>
              <span>Password</span>
              <input
                type="password"
                name="password"
                value={formData.password}
                placeholder="Enter your password"
                onChange={handleChange}
                required
              />
            </label>

            <button type="submit">Login</button>
          </fieldset>
        </form>
      </div>

      <div className="back">
        <button onClick={() => navigate('/')}>Back</button>
      </div>
    </div>
  );
};

export default AdminLogin;
