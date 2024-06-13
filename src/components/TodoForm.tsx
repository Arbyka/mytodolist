import React, { useRef, useCallback } from 'react';
import { Button, Container } from '@chakra-ui/react';


interface TodoFormProps {
  addTodo: (text: string) => void;
}

const TodoForm: React.FC<TodoFormProps> = ({ addTodo }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = useCallback((event: React.FormEvent) => {
    event.preventDefault();
    if (inputRef.current && inputRef.current.value.trim()) {
      addTodo(inputRef.current.value.trim());
      inputRef.current.value = '';
    }
  }, [addTodo]);

  return (
    <Container alignContent='left' justifyContent='left' textAlign='left'>
    <form onSubmit={handleSubmit}>
    <h2>Add Task</h2>
        <input color='blue' ref={inputRef} type="text" style={{ color: 'black' }}/>
        <Button colorScheme='blue' size='md'type="submit">Add Task</Button>
    </form>
    </Container>
  );
};

export default TodoForm;
