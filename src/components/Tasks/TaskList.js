import React, { useContext, useEffect } from "react";
import { TaskContext } from "./TaskProvider";
import { TaskCard } from "./TaskCard";
import { useHistory } from "react-router-dom";
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

			<button>Make Task DOESNT WORK</button>
			<div className="tasks">
				{tasks.map((task) => {
					return <TaskCard key={task.id} task={task} />;
				})}
			</div>
		</>
	);
};
