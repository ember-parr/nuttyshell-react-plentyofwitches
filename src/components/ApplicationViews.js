import React from "react";
import { Route } from "react-router-dom";
import { Home } from "./home/Home";
import { TaskList } from "./Tasks/TaskList";
import { TaskProvider } from "./Tasks/TaskProvider";
import { TaskDetail } from "./Tasks/TaskDetail";
import { UserProvider } from "./users/UserProvider";
import { TaskForm } from "./Tasks/TaskForm";

export const ApplicationViews = (props) => {
	return (
		<>
			{/* Render the location list when http://localhost:3000/ */}
			{/* Routes for Tasks based "pages" */}
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
