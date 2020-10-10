import React, { useContext, useEffect, useState } from "react";
import { FriendContext } from "./FriendProvider";
import { UserContext } from "../users/UserProvider";
import { useHistory, useParams } from "react-router-dom";
import { FriendCard } from "./FriendCard";
import "./Friend.css";

export const FriendList = () => {
  const { friends, getFriends } = useContext(FriendContext);
  const { users, getUsers } = useContext(UserContext);
  const [filteredUsers, setUsers] = useState([]);

  const history = useHistory();

  useEffect(() => {
    getFriends().then(getUsers);
  }, []);

  useEffect(() => {
    const friendsOfUser = friends.filter(
      (friend) => friend.userId === parseInt(localStorage.user)
    );

    const followingId = friendsOfUser.map((friend) => friend.followingId);

    const friendInformation = users.filter(
      (user) =>
        followingId.includes(user.id) && user.id !== parseInt(localStorage.user)
    );
    setUsers(friendInformation);
  }, [friends, users]);

  return (
    <>
      <h2>Friends</h2>
      <button
        onClick={() => {
          history.push("/friends/manage");
        }}
      >
        Add Friends
      </button>

      <div className="friends">
        {filteredUsers.map((user) => (
          <FriendCard key={user.id} friend={user} />
        ))}
      </div>
    </>
  );
};
