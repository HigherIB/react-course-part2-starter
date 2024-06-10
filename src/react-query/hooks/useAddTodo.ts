import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Todo } from "./useTodos";
import axios from "axios";

interface AddTodoContext {
    previousTodos: Todo[];
  }
  

const useAddTodo = () => {
    const queryClient = useQueryClient();
    const addTodo = useMutation<Todo, Error, Todo, AddTodoContext>({
      mutationFn: (todo: Todo) => 
        axios
          .post<Todo>('https://jsonplaceholder.typicode.com/todos', todo)
          .then(res => res.data),
      onMutate: (newTodo: Todo) => {
        const previousTodos = queryClient.setQueryData<Todo[]>(['todos'], todos => [...(todos || [])]) || [];
        queryClient.setQueryData<Todo[]>(['todos'], todos => [newTodo, ...(todos || [])]);
  
        return { previousTodos }
      },
      onSuccess: (savedTodo, newTodo) => {
        queryClient.setQueryData<Todo[]>(['todos'], todos =>
           todos?.map(todo => 
            todo === newTodo ? savedTodo : todo))
      },
      onError: (error: Error, newTodo, context) => {
          if (!context) return;
          queryClient.setQueryData<Todo[]>(['todos'],context.previousTodos )
      }
    });
    return {addTodo}
}

export default useAddTodo