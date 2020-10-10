import React, { useContext, useState, useEffect } from "react";
import { FriendContext } from "./FriendProvider";
import { UserContext } from "../users/UserProvider";
import { FriendCard } from "./FriendCard";

import { useHistory } from "react-router-dom";

export const FriendForm = () => {
  const { friends, getFriends } = useContext(FriendContext);
  const { users, getUsers } = useContext(UserContext);
  const [filteredUsers, setUsers] = useState([]);

  useEffect(() => {
    getFriends().then(getUsers);
  }, []);

  useEffect(() => {
    const friendsOfUser = friends.filter(
      (friend) => friend.userId === parseInt(localStorage.user)
    );

    const followingId = friendsOfUser.map((friend) => friend.followingId);

    const nonFriendInformation = users.filter(
      (user) =>
        followingId.includes(user.id) === false &&
        user.id !== parseInt(localStorage.user)
    );

    setUsers(nonFriendInformation);
  }, [friends, users]);

  return (
    <>
      <div className="friends">
        {filteredUsers.map((user) => (
          <>
            <FriendCard key={user.id} friend={user} />
          </>
        ))}
      </div>
    </>
  );
};
