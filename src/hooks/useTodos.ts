// src/hooks/useTodos.ts
import { useState, useCallback } from 'react';

interface Todo {
  id: number;
  text: string;
  checked: boolean;
}

export const useTodos = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [count, setCount] = useState<number>(0);

  const addTodo = useCallback((text: string) => {
    setTodos(prevTodos => [
      ...prevTodos,
      { id: Date.now(), text, checked: false }
    ]);
  }, []);

  const toggleTodo = useCallback((id: number) => {
    setTodos(prevTodos => 
      prevTodos.map(todo => 
        todo.id === id ? { ...todo, checked: !todo.checked } : todo
      )
    );
    setCount(prevCount => prevCount + 1);
  }, []);

  const deleteTodo = useCallback((id: number) => {
    setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id));
    setCount(prevCount => prevCount - 1);
  }, []);

  return {
    todos,
    addTodo,
    toggleTodo,
    deleteTodo,
    count
  };
};
