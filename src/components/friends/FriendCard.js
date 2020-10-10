import React from "react";
import { Link } from "react-router-dom";

export const FriendCard = ({ friend }) => (
  <section className="friend">
    <h3 className="friend__username">
      <Link to={`/friends/detail/${friend.id}`}>{friend.username}</Link>
    </h3>
    <p className="friend__name">
      {friend.firstName} {friend.lastName}
    </p>
    <p className="friend__email">{friend.email}</p>
  </section>
);
