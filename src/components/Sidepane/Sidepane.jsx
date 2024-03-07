import React from "react";
import "./sidepane.css";
import userContext from "../../contexts/userContext";
import { useContext } from "react";
function Sidepane() {
  const { user } = useContext(userContext);
  return <div className="sidepane">hi {user.name}</div>;
}

export default Sidepane;
