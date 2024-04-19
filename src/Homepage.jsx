import React from 'react';
import { useNavigate } from "react-router-dom";

function Homepage() {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/")
  
    console.log("Logout clicked");
  };

  return (
    <div>
      <div>Homepage</div>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Homepage;
