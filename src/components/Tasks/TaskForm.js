import React, { useContext, useEffect, useRef, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";
import { TaskContext } from "./TaskProvider";
import { UserContext } from "../users/UserProvider";

export const TaskForm = (props) => {
	const activeUserId = localStorage.getItem("user");

	const { addTask, getTaskById, editTask, getTask } = useContext(TaskContext);
	const { getUsers } = useContext(UserContext);

	const [task, setTask] = useState({});

	const [isLoading, setIsLoading] = useState(true);

	const [isChecked, setIsChecked] = useState(false);

	const [isPrivate, setIsPrivate] = useState(false);

	const checkedValue = useRef(null);

	const { taskId } = useParams();

	const history = useHistory();

	const handleControlledInputChange = (event) => {
		const newTask = { ...task };
		newTask[event.target.name] = event.target.value;
		setTask(newTask);
	};

	useEffect(() => {
		getUsers().then(() => {
			if (taskId) {
				getTaskById(taskId).then((task) => {
					setTask(task);
					setIsLoading(false);
				});
			} else {
				setIsLoading(false);
			}
		});
	}, []);

	const constructTaskObject = () => {
		if (task.date === 0) {
			window.alert("Please select a date");
		} else {
			setIsLoading(true);
			if (taskId) {
				// Update a task already in the database
				editTask({
					id: task.id,
					name: task.name,
					taskStatus: isChecked,
					private: isPrivate,
					userId: activeUserId,
					date: Date.parse(task.date),
				});
			} else {
				addTask({
					name: task.name,
					taskStatus: isChecked,
					userId: activeUserId,
					private: isPrivate,
					date: Date.parse(task.date),
				});
			}
		}
	};

	return (
		<Form>
			<FormGroup>
				<Label for="taskName">Task Name</Label>
				<Input
					type="text"
					name="name"
					id="taskName"
					placeholder="Task Name"
					defaultValue={task.name}
					onChange={handleControlledInputChange}
				/>
			</FormGroup>
			<FormGroup>
				<Label for="taskDate">Task Date</Label>
				<Input
					type="date"
					name="date"
					id="taskDate"
					placeholder="Task Date"
					onChange={handleControlledInputChange}
					defaultValue={task.date}
				/>
			</FormGroup>
			<FormGroup check>
				<Label check>
					<Input
						name="taskStatus"
						type="checkbox"
						checked={isChecked}
						onChange={(e) => setIsChecked(e.target.checked)}
					/>
					Task Complete?
				</Label>
			</FormGroup>
			<FormGroup check>
				<Label check>
					<Input
						name="taskPrivate"
						type="checkbox"
						checked={isPrivate}
						onChange={(e) => setIsPrivate(e.target.checked)}
					/>
					Task Private?
				</Label>
			</FormGroup>
			<Button
				className="btn-primary"
				disabled={isLoading}
				onClick={(event) => {
					event.preventDefault(); // Prevent browser from submitting the form
					constructTaskObject();
					history.push("/tasks");
				}}
			>
				{taskId ? <>Save Task</> : <>Add Task</>}
			</Button>
		</Form>
	);
};
