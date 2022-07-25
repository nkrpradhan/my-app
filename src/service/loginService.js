export const loginService = (username, pwd) => {
  console.log("loginservice--", username, pwd);
  if (username === "test" && pwd === "test123") {
    return Promise.resolve({ status: 200, message: "successs" });
  } else {
    return Promise.reject({ status: 404, message: "failure" });
  }
};
