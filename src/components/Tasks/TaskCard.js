import React from "react";
import { Link } from "react-router-dom";
import {
	Card,
	Button,
	CardTitle,
	CardSubtitle,
	CardText,
	Row,
	Col,
} from "reactstrap";
// import "./Task.css";

export const TaskCard = ({ task }) => {
	return (
		<Row>
			<Col sm="6">
				<Card body>
					<CardTitle>{task.name}</CardTitle>
					<CardSubtitle>
						Task Date:
						{new Date(task.date).toUTCString("en-US")}
					</CardSubtitle>
					<CardText>
						<b>Task Status: </b>
						{task.taskStatus ? "Complete" : "incomplete"}
					</CardText>
					<Link to={`/tasks/detail/${task.id}`}>
						<Button>Details</Button>
					</Link>
				</Card>
			</Col>
		</Row>
	);
};
