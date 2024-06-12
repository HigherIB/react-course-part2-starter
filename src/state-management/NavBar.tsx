import { useContext } from 'react';
import TasksContext from './tasks/tasksContext';
import { LoginStatus } from './auth';
import useCounterStore from './counter/store';

const NavBar = () => {
  
  const { tasks } = useContext(TasksContext);
  const { counter } = useCounterStore()
  return (
    <nav className="navbar d-flex justify-content-between">
      <span className="badge text-bg-secondary">{counter}</span>
      <LoginStatus />
    </nav>
  );
};

export default NavBar;
