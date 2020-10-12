import React from "react";
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
						With supporting text below as a natural lead-in to additional
						content.
					</CardText>
					<Button>this doesn't work</Button>
				</Card>
			</Col>
		</Row>
	);
};
