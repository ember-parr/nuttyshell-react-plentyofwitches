import React, { useContext } from "react";
import { FriendContext } from "./FriendProvider";
import { Container, Input } from "reactstrap";

export const FriendSearch = () => {
  const { setSearchTerms } = useContext(FriendContext);

  return (
    <>
      <Container className="mb-4 mt-5">
        <h1 className="text-center">Friends</h1>
        <Input
          type="text"
          className="input--wide"
          onKeyUp={(keyEvent) => setSearchTerms(keyEvent.target.value)}
          placeholder="Search for an friend... "
        />
      </Container>
    </>
  );
};
