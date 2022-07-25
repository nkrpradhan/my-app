import logo from "./logo.svg";
import React from "react";
import "./App.css";
import Greet from "./components/Greet";
import Welcome from "./components/Welcome";
import Hello from "./components/Hello";
import Button from "./components/Button";
import { UseEff } from "./components/hooks/useEff";
import Header from "./components/Header";
import Nestedchild from "./components/Nestedchild";
import { CallingFn } from "./components/Nestedchild2";
import Login from "./components/login/Login";
import Routeconfig from "./components/route/routeconfig";
function App() {
  return (
    <>
      {/* <Header /> */}
      {/* <Nestedchild></Nestedchild> */}
      {/* <CallingFn /> */}
      <Routeconfig/>
    </>
  );
}

export default App;
