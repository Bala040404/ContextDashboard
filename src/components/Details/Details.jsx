import React, { useContext, useState } from "react";
import "./details.css";
import { useNavigate } from "react-router-dom";
import userContext from "../../contexts/userContext";
function Details() {
  const [curUser, setCuruser] = useState({ name: "", age: 0 });
  const { setUser } = useContext(userContext);
  const navigator = useNavigate();

  return (
    <div className="details">
      <h1>details</h1>
      <input
        type="text"
        name="name"
        id=""
        value={curUser.name}
        onChange={(e) => {
          setCuruser({ ...curUser, [e.target.name]: e.target.value });
        }}
      />
      <input
        type="number"
        name="age"
        id=""
        value={curUser.age}
        onChange={(e) => {
          setCuruser({ ...curUser, [e.target.name]: e.target.value });
        }}
      />
      <button
        onClick={() => {
          setUser({ ...curUser });
          navigator("/");
        }}
      >
        submit
      </button>
    </div>
  );
}

export default Details;
