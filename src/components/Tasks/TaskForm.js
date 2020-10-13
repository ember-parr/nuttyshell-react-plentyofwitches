import React, { useContext, useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { TaskContext } from './TaskProvider';
import { UserContext } from '../users/UserProvider';

export const TaskForm = (props) => {
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
          date: task.date,
        });
      } else {
        addTask({
          id: task.id,
          name: task.name,
          taskStatus: task.taskStatus,
          userId: activeUserId,
          date: task.date,
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
        />
      </FormGroup>
      <FormGroup>
        <Label for="taskDate">Task Date</Label>
        <Input type="date" name="date" id="taskDate" placeholder="Task Date" />
      </FormGroup>
      <FormGroup check>
        <Label check>
          <Input name="taskStatus" type="checkbox" /> Task Complete?
        </Label>
      </FormGroup>
      <Button
        className="btn-primary"
        disabled={isLoading}
        onClick={(event) => {
          event.preventDefault(); // Prevent browser from submitting the form
          constructTaskObject();
        }}
      >
        {taskId ? <>Save Task</> : <>Add Task</>}
      </Button>
    </Form>
  );
};
