import React, { useContext, useEffect, useState } from "react";
import { TaskContext } from "./TaskProvider";
import "./Task.css";
import { useParams, useHistory } from "react-router-dom";

export const taskDetail = () => {
	const { deleteTask, getTaskById } = useContext(TaskContext);

	const [task, setTask] = useState({});
	// const [location, setLocation] = useState({});
	// const [customer, setCustomer] = useState({});

	const { taskId } = useParams();
	const history = useHistory();

	useEffect(() => {
		console.log("useEffect", taskId);
		getTaskById(taskId).then((response) => {
			settask(response);
			setLocation(response.location);
			setCustomer(response.customer);
		});
	}, []);

	return (
		<section className="task">
			<h3 className="task__name">Event Name: {task.name}</h3>
			<div className="task__date">
				<b>Date: </b>
				{task.date}
			</div>
			<div className="task__location">
				<b>Location: </b> {location.name}
			</div>
			<div className="task__owner">
				<b>Customer: </b> {customer.name}
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
					releasetask(task.id).then(() => {
						history.push("/tasks");
					});
				}}
			>
				Release task
			</button>
		</section>
	);
};
