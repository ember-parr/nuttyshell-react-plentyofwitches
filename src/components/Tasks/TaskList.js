import React, { useContext, useEffect } from "react";
import { TaskContext } from "./TaskProvider";
import { TaskCard } from "./TaskCard";
import { Link, useHistory } from "react-router-dom";
import "./Task.css";

export const TaskList = () => {
	// const history = useHistory();
	// This state changes when `getTasks()` is invoked below
	const { tasks, getTasks } = useContext(TaskContext);

	// Empty dependency array - useEffect only runs after first render
	useEffect(() => {
		getTasks();
	}, []);

	return (
		<>
			<h1>Tasks</h1>
			<Link to={`/tasks/edit`}>
				<button>Add a Task</button>
			</Link>
			<div className="tasks">
				{tasks.map((task) => {
					if (task.taskStatus === false) {
						return <TaskCard key={task.id} task={task} />;
					}
				})}
			</div>
		</>
	);
};
