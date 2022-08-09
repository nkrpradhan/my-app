import React from "react";
import "./login.css";
import { useNavigate } from "react-router-dom";
import { loginService } from "../../service/loginService";
import { useDispatch } from "react-redux";
import { setGlobalUser } from "../../rtk/features/login/userSlice";
import axios from "axios";
import Alert from "react-bootstrap/Alert";
function Login() {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [error, setError] = React.useState("");
  const dispatch = useDispatch();
  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("submit clicked");
    if (username === "" || password === "") {
      setError("Username or password is empty");
      return;
    }
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

      console.log("testresp---", testresp);
      if (testresp.status === 200) {
        dispatch(setGlobalUser(username));
        navigate("./home", { state: { user: username } });
      }
    } catch (e) {
      console.log("catch error block");
      console.log("error in the test--", e);
      // typeof e.response.data === "undefined"
      //   ? alert("No response from server")
      //   : alert(e.response.data);
      setError(
        e.response.data === "undefined"
          ? "No response from server"
          : e.response.data
      );
    }
  };
  return (
    <>
      <div className="bg-image"></div>
      <div className="grid grid-container">
        <h1>Login page</h1>
        <form className="grid form-container">
          <label htmlFor="usernameField">
            User Name
            <input
              type="text"
              name="usernameField"
              id="usernameField"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </label>
          <label htmlFor="passwordField">
            Password
            <input
              type="password"
              name="passwordField"
              id="passwordField"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <button className="form-btn-submit" onClick={handleSubmit}>
            Enter
          </button>
        </form>
        {error !== "" && (
          <Alert key="danger" variant="danger">
            {error}
          </Alert>
        )}
      </div>
    </>
  );
}

export default Login;
