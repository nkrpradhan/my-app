import React from "react";
import "./login.css";
import { useNavigate } from "react-router-dom";

// import { loginService } from "../../service/loginService";
// import { useDispatch } from "react-redux";
// import { setGlobalUser } from "../../rtk/features/login/userSlice";
import { LoginStore } from "store/store";
import axios from "axios";
import { useEffect } from "react";
function Login() {
  const [username, setUsername] = React.useState();
  const [password, setPassword] = React.useState();

  let navigate = useNavigate();

  const { user, postUser } = LoginStore();
  // const setUser  = LoginStore().setUser;
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("submit clicked", username, password);

    postUser({ username, password });
  };
  useEffect(() => {
    console.log("redux state--", user);
    if (user.user !== "") {
      navigate("./home", { state: { user: user } });
    }
  }, [user.user]);
  return (
    <>
      <div className="bg-image"></div>
      <div className="grid grid-container">
        <h1>Login page</h1>
        <form className="grid form-container">
          <label htmlFor="">
            User Name
            <input
              type="text"
              name=""
              id=""
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </label>
          <label htmlFor="">
            Password
            <input
              type="password"
              name=""
              id=""
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <button className="form-btn-submit" onClick={handleSubmit}>
            Enter
          </button>
        </form>
      </div>
    </>
  );
}

export default Login;
