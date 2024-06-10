import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useRef } from 'react';
import { Todo } from './hooks/useTodos';
import axios from 'axios';
import useAddTodo from './hooks/useAddTodo';


const TodoForm = () => {
  const { addTodo } = useAddTodo();

  const ref = useRef<HTMLInputElement>(null);

  return (
        <>
        {addTodo.error && <div className='alert alert-danger'>{addTodo.error.message}</div> }
          <form 
            className="row mb-3"
            onSubmit={
              e => {
                e.preventDefault();

                if(ref.current && ref.current.value)
                addTodo.mutate({
                  id: 0,
                  title: ref.current?.value,
                  completed: false,
                  userId: 1
                })
                if (ref.current) ref.current.value = '';
              }
            }
          >
            <div className="col">
              <input ref={ref} type="text" className="form-control" />
            </div>
            <div className="col">
              <button className="btn btn-primary">
                {addTodo.isLoading ? 'Adding...' : 'Add'}
              </button>
            </div>
          </form>
        </>
  );
};

export default TodoForm;
