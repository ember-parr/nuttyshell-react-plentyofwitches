import React, { useState, createContext } from "react";

export const UserContext = createContext();

export const UserProvider = (props) => {
  const [users, setUsers] = useState([]);

  const getUsers = () => {
    return fetch("http://localhost:8088/users")
      .then((res) => res.json())
      .then(setUsers);
  };

  return (
    <AnimalContext.Provider
      value={{
        users,
        setUsers,
        getUsers,
      }}
    >
      {props.children}
    </AnimalContext.Provider>
  );
};
