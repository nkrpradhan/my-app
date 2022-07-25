import { useRoutes } from "react-router-dom";
import Login from "../login/Login";
import Home from "../login/Home";
const Routeconfig = () => {
  let routes = useRoutes([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "home",
      element: <Home/>,
    },
  ]);
  return routes;
};

export default Routeconfig;
