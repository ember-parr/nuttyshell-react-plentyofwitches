import React, { useContext, useEffect, useState } from "react";
import { TaskContext } from "./TaskProvider";
import { useParams, useHistory } from "react-router-dom";
import { Form, FormGroup, Label, Input } from "reactstrap";

export const TaskDetail = () => {
	const { getTaskById, deleteTask, editTask } = useContext(TaskContext);

	const [task, setTask] = useState({});

	const { taskId } = useParams();
	const history = useHistory();

	const username = task.user?.username;

	useEffect(() => {
		console.log("useEffect", taskId);
		getTaskById(taskId).then((response) => {
			setTask(response);
		});
	}, []);
	return (
		<section className="task">
			<h3 className="task__name">Task Name: {task.name}</h3>
			<div className="task__date">
				<b>Task Date: </b>
				{new Date(task.date).toUTCString("en-US")}
			</div>
			<div className="task__complete">
				<b>Task status: </b>
				{task.taskStatus ? "Complete" : "Incomplete"}
			</div>
			<div className="task__owner">
				<b>Task Owner:</b> {username}
			</div>

			<button
				onClick={() => {
					history.push(`/tasks/edit/${task.id}`);
				}}
			>
				Edit
			</button>

			<button
				onClick={() => {
					deleteTask(task.id).then(() => {
						history.push("/tasks");
					});
				}}
			>
				Delete Task?
			</button>
		</section>
	);
};
