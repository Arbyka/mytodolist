// src/App.tsx
import React from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import { useTodos } from './hooks/useTodos';


const App: React.FC = () => {
  const { todos, addTodo, toggleTodo, deleteTodo, count } = useTodos();

  return (
    <div className="container">
      <p>Chores ToDo List</p>
      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo}/>
      <hr/>
      <p>Done: {count}</p>
      <TodoForm addTodo={addTodo} />
    </div>
  );
};

export default App;
