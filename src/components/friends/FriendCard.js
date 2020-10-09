import React from "react";

export const FriendCard = ({ friend }) => (
  <section className="friend">
    <h3 className="friend__username">{friend.username}</h3>
    <p className="friend__name">
      {friend.firstName} {friend.lastName}
    </p>
    <p className="friend__email">{friend.email}</p>
  </section>
);
