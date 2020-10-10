import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { UserContext } from "../users/UserProvider";
import { Link } from "react-router-dom";

export const FriendDetail = () => {
  const { getUserById } = useContext(UserContext);
  const [user, setUser] = useState({});

  //get id based on username selected
  const { friendId } = useParams();

  //get single user from database
  useEffect(() => {
    getUserById(friendId).then((response) => {
      setUser(response);
    });
  }, []);

  return (
    <>
      <section key={user.id} className="friend">
        {/* go back to home page*/}
        <Link to="/">Back</Link>
        <h3 className="friend__username">{user.username}</h3>
        <p className="friend__name">
          {user.firstName} {user.lastName}
        </p>
        <p className="friend__email">{user.email}</p>
        <p className="friend__dateOfDate">Birth Date: {user.dateOfBirth}</p>
      </section>
    </>
  );
};
