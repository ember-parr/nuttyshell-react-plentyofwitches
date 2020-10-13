import React from "react";
import { Route } from "react-router-dom";
import { Home } from "./home/Home";
import { UserProvider } from "./users/UserProvider";
import { MessageProvider } from "./messages/MessageProvider";
import { MessageList } from "./messages/MessageList";
import { ArticleProvider } from "./articles/ArticleProvider";
import { ArticleList } from "./articles/ArticleList";
import { ArticleDetail } from "./articles/ArticleDetail";
import { ArticleForm } from "./articles/ArticleForm";
import { FriendProvider } from "./friends/FriendProvider";
import { FriendList } from "./friends/FriendList";
import { UserProvider } from "./users/UserProvider";
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
		</>
	);
};
