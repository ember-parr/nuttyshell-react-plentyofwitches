import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { UserContext } from "../users/UserProvider";
import { Link } from "react-router-dom";

export const FriendDetail = () => {
  const { getUserById } = useContext(UserContext);
  const [user, setUser] = useState({});

  //get id based on username selected
  const { friendId } = useParams();

  const dateOfBirthString = (dobString) => {
    var mL = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    if (dobString !== undefined) {
      const dateString = dobString.split("-");
      const month = mL[parseInt(dateString[1] - 1)];
      const day = dateString[2];
      return `${month} ${day}`;
    }
  };

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
        <p className="friend__email"> Emial{user.email}</p>
        <p className="friend__dateOfDate">
          Birthday: {dateOfBirthString(user.dateOfBirth)}
        </p>
      </section>
    </>
  );
};
