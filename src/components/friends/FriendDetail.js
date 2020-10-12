import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { UserContext } from "../users/UserProvider";
import { Link } from "react-router-dom";
import { Container, Card, CardText, CardBody, CardTitle } from "reactstrap";

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
      <Container>
        <Card className="m-5">
          <CardBody>
            <Link to="/friends">Back</Link>
            <CardTitle className="m-4">
              <h3 className="friend__username">{user.username}</h3>
            </CardTitle>
            <CardText>
              {user.firstName} {user.lastName}
            </CardText>
            <CardText>{user.email}</CardText>
            <CardText>Birthday: {dateOfBirthString(user.dateOfBirth)}</CardText>
          </CardBody>
        </Card>
      </Container>
    </>
  );
};
