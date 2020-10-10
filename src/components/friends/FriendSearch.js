import React, { useContext } from "react";
import { FriendContext } from "./FriendProvider";

export const FriendSearch = () => {
  const { setSearchTerms } = useContext(FriendContext);

  return (
    <>
      <h2>Friends</h2>
      <input
        type="text"
        className="input--wide"
        onKeyUp={(keyEvent) => setSearchTerms(keyEvent.target.value)}
        placeholder="Search for an friend... "
      />
    </>
  );
};
