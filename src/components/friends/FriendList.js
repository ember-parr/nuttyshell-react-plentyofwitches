import React, { useContext, useEffect, useState } from "react";
import { FriendContext } from "./FriendProvider";
import { useHistory, useParams } from "react-router-dom";

export const FriendList = () => {
  const { friends, getFriends } = useContext(FriendContext);
  const [filteredFriends, setFriends] = useState([]);

  useEffect(() => {
    getFriends();
  }, []);

  useEffect(() => {
    const friendsOfUser = friends.filter(
      (friend) => friend.userId === parseInt(localStorage.user)
    );
    setFriends(friendsOfUser);
  }, [friends]);

  return (
    <>
      <h2>Friends</h2>
      <div className="friend__list">
        {filteredFriends.map((friend) => (
          <p>user: {friend.userId}</p>
        ))}
      </div>
    </>
  );
};
