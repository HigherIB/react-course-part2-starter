import { useContext } from 'react';
import TasksContext from './tasksContext';
import { useAuth } from '../auth/LoginStatus';

const useTasks = () => useContext(TasksContext);

interface Task {
  id: number;
  title: string;
}

const TaskList = () => {
  const { tasks, dispatch } = useTasks();
  const { user } = useAuth();

  return (
    <>
      <h4>Current user: {user}</h4>
      <button
        onClick={() =>
          dispatch({type: 'ADD', task: {id: Date.now(), title: "Task " + Date.now()}})
        }
        className="btn btn-primary my-3"
      >
        Add Task
      </button>
      <ul className="list-group">
        {tasks.map((task) => (
          <li
            key={task.id}
            className="list-group-item d-flex justify-content-between align-items-center"
          >
            <span className="flex-grow-1">{task.title}</span>
            <button
              className="btn btn-outline-danger"
              onClick={() =>
                dispatch({type: 'DELETE', taskId: task.id})
              }
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default TaskList;


