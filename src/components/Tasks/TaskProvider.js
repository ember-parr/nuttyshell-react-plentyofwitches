import React, { useState, createContext } from "react";

/*
    The context is imported and used by individual components
    that need data
*/
export const taskContext = createContext();

/*
 This component establishes what data can be used.
 */
export const TaskProvider = (props) => {
	const [tasks, setTasks] = useState([]);

	const [searchTerms, setSearchTerms] = useState("");

	// you'll need to to change the expanded route.
	const getTasks = () => {
		return fetch("http://localhost:8088/tasks?_expand=location")
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

	const releaseTask = (taskId) => {
		return fetch(`http://localhost:8088/tasks/${taskId}`, {
			method: "DELETE",
		}).then(getTasks);
	};

	const updateTask = (task) => {
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
		return fetch(
			`http://localhost:8088/tasks/${id}?_expand=location&_expand=customer`
		).then((res) => res.json());
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
				updateTask,
				releaseTask,
				searchTerms,
				setSearchTerms,
			}}
		>
			{props.children}
		</TaskContext.Provider>
	);
};
