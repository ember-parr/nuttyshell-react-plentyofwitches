import React, { useContext, useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { TaskContext } from './TaskProvider';
import { UserContext } from '../users/UserProvider';

const TaskForm = (props) => {
  const activeUserId = localStorage.getItem('user');

  const { addTask, getTaskById, editTask, getTask } = useContext(TaskContext);
  const { getUsers } = useContext(UserContext);

  const [task, setTask] = useState({});

  const [isLoading, setIsLoading] = useState(true);

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
      window.alert('Please select a date');
    } else {
      setIsLoading(true);
      if (taskId) {
        // Update a task already in the database
        editTask({
          id: task.id,
          name: task.name,
          taskStatus: task.taskStatus,
          userId: activeUserId,
          date: date,
        });
      } else {
      }
    }
  };

  return (
    <Form>
      <FormGroup>
        <Label for="exampleEmail">Email</Label>
        <Input
          type="email"
          name="email"
          id="exampleEmail"
          placeholder="with a placeholder"
        />
      </FormGroup>
      <FormGroup>
        <Label for="examplePassword">Password</Label>
        <Input
          type="password"
          name="password"
          id="examplePassword"
          placeholder="password placeholder"
        />
      </FormGroup>
      <FormGroup>
        <Label for="exampleSelect">Select</Label>
        <Input type="select" name="select" id="exampleSelect">
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </Input>
      </FormGroup>
      <FormGroup>
        <Label for="exampleSelectMulti">Select Multiple</Label>
        <Input
          type="select"
          name="selectMulti"
          id="exampleSelectMulti"
          multiple
        >
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </Input>
      </FormGroup>
      <FormGroup>
        <Label for="exampleText">Text Area</Label>
        <Input type="textarea" name="text" id="exampleText" />
      </FormGroup>
      <FormGroup>
        <Label for="exampleFile">File</Label>
        <Input type="file" name="file" id="exampleFile" />
        <FormText color="muted">
          This is some placeholder block-level help text for the above input.
          It's a bit lighter and easily wraps to a new line.
        </FormText>
      </FormGroup>
      <FormGroup tag="fieldset">
        <legend>Radio Buttons</legend>
        <FormGroup check>
          <Label check>
            <Input type="radio" name="radio1" /> Option one is this and that—be
            sure to include why it's great
          </Label>
        </FormGroup>
        <FormGroup check>
          <Label check>
            <Input type="radio" name="radio1" /> Option two can be something
            else and selecting it will deselect option one
          </Label>
        </FormGroup>
        <FormGroup check disabled>
          <Label check>
            <Input type="radio" name="radio1" disabled /> Option three is
            disabled
          </Label>
        </FormGroup>
      </FormGroup>
      <FormGroup check>
        <Label check>
          <Input type="checkbox" /> Check me out
        </Label>
      </FormGroup>
      <Button>Submit</Button>
    </Form>
  );
};
