import React from "react";
import "./login.css";
import { useNavigate } from "react-router-dom";
import { loginService } from "../../service/loginService";
import { useDispatch } from "react-redux";
import { setGlobalUser } from "../../rtk/features/login/userSlice";
import axios from "axios";
function Login() {
  const [username, setUsername] = React.useState();
  const [password, setPassword] = React.useState();
  const dispatch = useDispatch();
  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("submit clicked");

    try {
      //const testresp = await loginService(username, password);
      //Using application/x-www-form-urlencoded format
      const params = new URLSearchParams();
      params.append("username", username);
      params.append("password", password);

      //node js is not using form data in post its using, application/x-www-form-urlencoded format
      const loginFormData = new FormData();
      loginFormData.append("username", username);
      loginFormData.append("password", password);

      const testresp = await axios.post(
        "https://reactlogin-service.herokuapp.com/login",
        params
      );

      console.log(testresp);
      if (testresp.status === 200) {
        dispatch(setGlobalUser(username));
        navigate("./home", { state: { user: username } });
      }
    } catch (e) {
      console.log("error--", e.response);
      typeof e.response.data === "undefined"
        ? alert("No response from server")
        : alert(e.response.data);
    }
  };
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
