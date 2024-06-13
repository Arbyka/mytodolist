import React from 'react';
import { Checkbox, Container } from '@chakra-ui/react';

import { IconButton } from '@chakra-ui/react';
import { DeleteIcon } from '@chakra-ui/icons';

interface TodoListProps {
  todos: { id: number; text: string; checked: boolean }[];
  toggleTodo: (id: number) => void;
  deleteTodo: (id: number) => void;
}

const TodoList: React.FC<TodoListProps> = ({ todos, toggleTodo, deleteTodo }) => {
  return (
    <Container>
  <div>
    {todos.map(todo => (
      <div key={todo.id} className="todo-item">
        <Checkbox colorScheme='green' type="checkbox" checked={todo.checked} onChange={() => toggleTodo(todo.id)} />
        <span className="todo-text">{todo.text}</span>
        <IconButton color='#F9ADB4' border='1px' borderColor='#F9ADB4' colorScheme='none' aria-label='Delete' icon={<DeleteIcon />} onClick={() => deleteTodo(todo.id)} />
      </div>
    ))}
  </div>
</Container>
    
  );
};

export default TodoList;
