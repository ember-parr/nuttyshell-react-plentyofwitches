import React, { useContext, useEffect, useState } from "react";
import { FriendContext } from "./FriendProvider";
import { UserContext } from "../users/UserProvider";
import { useHistory, useParams } from "react-router-dom";
import { FriendCard } from "./FriendCard";
import "./Friend.css";

export const FriendList = () => {
  const { friends, getFriends } = useContext(FriendContext);
  const { users, getUsers } = useContext(UserContext);
  const [filteredFriends, setFriends] = useState([]);

  useEffect(() => {
    getFriends().then(getUsers);
  }, []);

  useEffect(() => {
    const friendOfUser = friends.filter(
      (friend) => friend.userId === parseInt(localStorage.user)
    );
    const followingId = friendOfUser.map((friend) => friend.followingId);
    const friendInformation = users.filter(
      (user) =>
        followingId.includes(user.id) && user.id !== parseInt(localStorage.user)
    );

    setFriends(friendInformation);
  }, [friends, users]);

  return (
    <>
      <h2>Friends</h2>
      <div className="friends">
        {filteredFriends.map((friend) => (
          <FriendCard key={friend.id} friend={friend} />
        ))}
      </div>
      {console.log(filteredFriends)}
    </>
  );
};
