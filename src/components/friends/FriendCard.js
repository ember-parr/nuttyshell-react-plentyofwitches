import React from "react";
import { Link } from "react-router-dom";
import { Card, CardText, CardBody, CardTitle } from "reactstrap";

export const FriendCard = ({ friend, isFriend }) => (
  <Card>
    <CardBody>
      <CardTitle>
        <h3 className="friend__username">
          <Link to={`/friends/detail/${friend.id}`}>{friend.username}</Link>
        </h3>
      </CardTitle>
      <CardText>
        {friend.firstName} {friend.lastName}
      </CardText>
      <CardText>{friend.email}</CardText>
      <CardText>{isFriend}</CardText>
    </CardBody>
  </Card>
);
