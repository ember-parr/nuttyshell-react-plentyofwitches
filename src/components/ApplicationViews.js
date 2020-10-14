import React from "react";
import { Route } from "react-router-dom";
import { Home } from "./home/Home";
import { MessageProvider } from "./messages/MessageProvider";
import { MessageList } from "./messages/MessageList";
import { EventProvider } from "./events/EventProvider"
import { EventList } from "./events/EventList"
import { EventForm } from "./events/EventForm"
import { EventDetail } from "./events/EventDetail"
import { EventSearch } from "./events/EventSearch"
import { ArticleProvider } from "./articles/ArticleProvider";
import { ArticleList } from "./articles/ArticleList";
import { ArticleDetail } from "./articles/ArticleDetail";
import { ArticleForm } from "./articles/ArticleForm";
import { FriendProvider } from "./friends/FriendProvider";
import { FriendList } from "./friends/FriendList";
import { FriendDetail } from "./friends/FriendDetail";
import { FriendSearch } from "./friends/FriendSearch";
import { TaskList } from "./Tasks/TaskList";
import { TaskProvider } from "./Tasks/TaskProvider";
import { TaskDetail } from "./Tasks/TaskDetail";
import { UserProvider } from "./users/UserProvider";
import { TaskForm } from "./Tasks/TaskForm";

export const ApplicationViews = (props) => {
  return (
    <>
      {/* Render the location list when http://localhost:3000/ */}
      <Route exact path="/">
        <Home />
      </Route>

      <ArticleProvider>
        <Route exact path="/articles">
          <ArticleList />
        </Route>
      </ArticleProvider>

      {/* *EVENTS* */}

      <EventProvider>
        <Route exact path="/events">
          <EventSearch />
          <EventList />
        </Route>
      </EventProvider>

      <EventProvider>
        <Route exact path="/events/detail/:eventId(\d+)">
          <EventDetail />
        </Route>
      </EventProvider>

      <EventProvider>
        <Route exact path="/events/create">
          <EventForm />
        </Route>
      </EventProvider>

      <EventProvider>
        <Route exact path="/events/edit/:eventId(\d+)">
          <EventForm />
        </Route>
      </EventProvider>

      <ArticleProvider>
        <Route exact path="/articles/detail/:articleId(\d+)">
          <ArticleDetail />
        </Route>
      </ArticleProvider>

      <ArticleProvider>
        <Route exact path="/articles/create">
          <ArticleForm />
        </Route>
      </ArticleProvider>

      <ArticleProvider>
        <Route exact path="/articles/edit/:articleId(\d+)">
          <ArticleForm />
        </Route>
      </ArticleProvider>

      <MessageProvider>
        <Route exact path="/">
          <MessageList />
        </Route>
      </MessageProvider>

      <ArticleProvider>
        <Route exact path="/articles">
          <ArticleList />
        </Route>
      </ArticleProvider>

      <TaskProvider>
        <Route exact path="/tasks">
          <TaskList />
        </Route>
      </TaskProvider>

      <TaskProvider>
        <UserProvider>
          <Route exact path="/tasks/edit">
            <TaskForm />
          </Route>
        </UserProvider>
      </TaskProvider>

      <TaskProvider>
        <UserProvider>
          <Route exact path="/tasks/detail/:taskId(\d+)">
            <TaskDetail />
          </Route>
        </UserProvider>
      </TaskProvider>

      <TaskProvider>
        <UserProvider>
          <Route exact path="/tasks/edit/:taskId(\d+)">
            <TaskForm />
          </Route>
        </UserProvider>
      </TaskProvider>
      <UserProvider>
        <FriendProvider>
          <Route exact path="/friends">
            <FriendSearch />
            <FriendList />
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
