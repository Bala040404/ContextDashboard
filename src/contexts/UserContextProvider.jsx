import React, { useState } from "react";
import userContext from "./userContext";

function UserContextProvider({ children }) {
  let [user, setUser] = useState({ name: "bala", age: "19" });

  return (
    <userContext.Provider value={{ user, setUser }}>
      {children}
    </userContext.Provider>
  );
}

export default UserContextProvider;
