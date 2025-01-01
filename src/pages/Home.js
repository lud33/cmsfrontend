import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Home.css"; // Assuming you move the CSS to a separate file for cleaner code.

const Home = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div className="h1nh2">
        <h1 className="text">Welcome to class management system</h1>
        <h2 className="text">(CMS)</h2>
      </div>

      <section className="home">
        <div className="circle">
          {/* Admin Section */}
          <div className="cir1">
            <div className="admin">Admin</div>
            <div className="cir">
              <img src="account-svgrepo-com.svg" alt="Admin Icon" />
            </div>
            <div className="bor log">
              {/* Navigate to AdminPage when Login is clicked */}
              <button onClick={() => navigate("/admin-page")}>Login</button>
            </div>
          </div>

          {/* User/Lecturer Section */}
          <div className="cir2">
            <div className="user">User/Lecturer</div>
            <div className="cir">
              <img src="account-svgrepo-com.svg" alt="User Icon" />
            </div>
            <div className="bor sign">
              {/* Navigate to UserPage when Signup is clicked */}
              <button onClick={() => navigate("/user-page")}>Signup</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
