import React, { useState, createContext } from "react";

/*
    The context is imported and used by individual components
    that need data
*/
export const TaskContext = createContext();

/*
 This component establishes what data can be used.
 */
export const TaskProvider = (props) => {
	const [tasks, setTasks] = useState([]);

	// you'll need to to change the expanded route.
	const getTasks = () => {
		return fetch("http://localhost:8088/tasks")
			.then((res) => res.json())
			.then(setTasks);
	};

	const addTask = (TaskObj) => {
		return fetch("http://localhost:8088/tasks", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(TaskObj),
		}).then(getTasks);
	};

	const deleteTask = (taskId) => {
		return fetch(`http://localhost:8088/tasks/${taskId}`, {
			method: "DELETE",
		}).then(getTasks);
	};

	const editTask = (task) => {
		return fetch(`http://localhost:8088/tasks/${task.id}`, {
			method: "PUT",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(task),
		}).then(getTasks);
	};

	// You'll need to change the expanded routes
	const getTaskById = (id) => {
		return fetch(`http://localhost:8088/tasks/${id}?_expand=user`).then((res) =>
			res.json()
		);
	};

	/*
        You return a context provider which has the
        `locations` state, the `addLocation` function,
        and the `getLocation` function as keys. This
        allows any child elements to access them.
    */
	return (
		<TaskContext.Provider
			value={{
				tasks,
				getTasks,
				addTask,
				getTaskById,
				deleteTask,
				editTask,
			}}
		>
			{props.children}
		</TaskContext.Provider>
	);
};
