import React from "react";
import { useSelector } from "react-redux";
import "./App.css";
import Login from "./components/login/Login";
import Logout from "./components/logout/Logout";
import { selectUser } from "./features/userSlice";

function App() {
  const user = useSelector(selectUser);
  return <div className="App">{user === '' ? <Login /> : <Logout />}</div>;
}

export default App;
