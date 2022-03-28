import React, { FormEvent, useState } from 'react';
import TodoList from '../Components/TodoList';

export default function Todo() {
  const [todo, setTodo] = useState<string>('');
  const [list, setList] = useState<string[]>([]);

  const handleTodo = (e: FormEvent): void => {
    e.preventDefault();
    setList([...list, todo]);
  };

  return (
    <div>
      <form onSubmit={(e) => handleTodo(e)}>
        <input type='text' onChange={(e) => setTodo(e.target.value)}></input>
        <button type='submit'>Submit</button>
      </form>
      <TodoList list={list} />
    </div>
  );
}
