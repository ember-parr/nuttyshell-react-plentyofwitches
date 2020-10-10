import React, { useState, createContext } from "react";

export const FriendContext = createContext();

export const FriendProvider = (props) => {
  const [friends, setFriends] = useState([]);

  const getFriends = () => {
    return fetch("http://localhost:8088/friends?_expand=user")
      .then((res) => res.json())
      .then(setFriends);
  };

  const getFriendById = (id) => {
    return fetch(
      `http://localhost:8088/friends/${id}?_expand=user`
    ).then((res) => res.json());
  };

  return (
    <FriendContext.Provider
      value={{
        friends,
        setFriends,
        getFriends,
        getFriendById,
      }}
    >
      {props.children}
    </FriendContext.Provider>
  );
};
