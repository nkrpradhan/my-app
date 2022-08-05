import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
// import { useSelector } from "react-redux";
import { LoginStore } from "store/store";
function Home() {
  const location = useLocation();
  const navigate = useNavigate();
  const globalUser = LoginStore().user.user;
  const { logoutUser } = LoginStore();
  console.log("home page user---", globalUser);
  console.log(location);

  const handleLogout = () => {
    logoutUser();
    navigate("../");
  };
  return (
    <>
      <button
        style={{ position: "absolute", top: "1rem", right: "5rem" }}
        onClick={handleLogout}
      >
        Logout
      </button>
      <div>Home Page</div>
      <h1>User name-- {globalUser}</h1>
    </>
  );
}

export default Home;
