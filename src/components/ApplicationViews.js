import React from "react";
import { Route } from "react-router-dom";
import { Home } from "./home/Home";
import { MessageProvider } from "./messages/MessageProvider";
import { MessageList } from "./messages/MessageList";
import { FriendProvider } from "./friends/FriendProvider";
import { FriendList } from "./friends/FriendList";
import { UserProvider } from "./users/UserProvider";
import { FriendAdd } from "./friends/FriendAdd";
import { FriendDetail } from "./friends/FriendDetail";
import { FriendSearch } from "./friends/FriendSearch";

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

      <UserProvider>
        <FriendProvider>
          <Route exact path="/">
            <FriendSearch />
            <FriendList />
            <FriendAdd />
          </Route>
        </FriendProvider>
      </UserProvider>

      <UserProvider>
        <FriendProvider>
          <Route exact path="/friends/detail/:friendId(\d+)">
            <FriendDetail />
          </Route>
        </FriendProvider>
      </UserProvider>
    </>
  );
};
