import React, { useContext, useState, useEffect } from "react";
import { FriendContext } from "./FriendProvider";
import { UserContext } from "../users/UserProvider";
import { FriendCard } from "./FriendCard";

import { useHistory } from "react-router-dom";

export const FriendForm = () => {
  const { friends, getFriends } = useContext(FriendContext);
  const { users, getUsers } = useContext(UserContext);
  const [filteredFriends, setFriends] = useState([]);

  useEffect(() => {
    getFriends().then(getUsers);
  }, []);

  useEffect(() => {
    const checkFollowing = friends.map((friend) => friend.followingId);
    const checkUser = friends.map((friend) => friend.userId);
    const allRealtionships = [...checkFollowing, ...checkUser];

    const nonFriendInformation = users.filter(
      (user) =>
        allRealtionships.includes(user.id) === false &&
        user.id !== parseInt(localStorage.user)
    );

    setFriends(nonFriendInformation);
  }, [friends, users]);

  return (
    <>
      <div className="friends">
        {filteredFriends.map((friend) => (
          <FriendCard key={friend.id} friend={friend} />
        ))}
      </div>
      {console.log(filteredFriends)}
    </>
  );
};
