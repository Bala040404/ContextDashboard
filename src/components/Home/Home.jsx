import React from "react";
import "./home.css";

import userContext from "../../contexts/userContext";
import { useContext } from "react";

function Home() {
  const { user } = useContext(userContext);
  return <div className="home">welcome {user.name}</div>;
}

export default Home;
