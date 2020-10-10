import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FriendContext } from "./FriendProvider";
import { UserContext } from "../users/UserProvider";
import { Link } from "react-router-dom";

export const FriendDetail = () => {
  const { getFriendById } = useContext(FriendContext);
  const { getUserById } = useContext(UserContext);
  const [friend, setFriend] = useState({});
  const [user, setUser] = useState({});

  const { friendId } = useParams();

  useEffect(() => {
    getFriendById(friendId).then((response) => {
      setFriend(response);
    });
  }, []);

  useEffect(() => {
    getUserById(friendId).then((response) => {
      setUser(response);
    });
  }, [friend]);

  return (
    <>
      <section key={friend.id} className="friend">
        <Link to="/">Back</Link>
        <h3 className="friend__username">{user.username}</h3>
        <p className="friend__name">
          {user.firstName} {user.lastName}
        </p>
        <p className="friend__email">{user.email}</p>
        <p className="friend__dateOfDate">{user.dateOfBirth}</p>
      </section>
    </>
  );
};
