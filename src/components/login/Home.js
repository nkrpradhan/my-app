import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
function Home(props) {
  const location = useLocation();
  const navigate = useNavigate();
  const globalUser = useSelector((state) => state.userred.user);
  console.log(location);

  const handleLogout = () => {
    navigate("/");
  };
  return (
    <>
      <button
        style={{ position: "absolute", top: "1rem", right: "5rem" }}
        onClick={handleLogout}
      >
        Logout
      </button>
      <div>Home Page--{location.state.user}</div>
      <h1>{globalUser}</h1>
    </>
  );
}

export default Home;
