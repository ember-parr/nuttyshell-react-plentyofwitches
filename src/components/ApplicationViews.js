import React from "react";
import { Route } from "react-router-dom";
import { Home } from "./home/Home";
import { MessageProvider } from "./messages/MessageProvider";
import { MessageList } from "./messages/MessageList";
import { FriendProvider } from "./friends/FriendProvider";
import { FriendList } from "./friends/FriendList";

export const ApplicationViews = (props) => {
  return (
    <>
      {/* Render the location list when http://localhost:3000/ */}
      <Route exact path="/">
        <Home />
      </Route>

      <MessageProvider>
        <Route exact path="/">
          <MessageList />
        </Route>
      </MessageProvider>

      <FriendProvider exact path="/">
        <Route>
          <FriendList />
        </Route>
      </FriendProvider>
    </>
  );
};
