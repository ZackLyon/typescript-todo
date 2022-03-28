import React, { FC } from 'react';
import TodoItem from './TodoItem';

type ListProps = {
  list: string[];
};

const TodoList: FC<ListProps> = ({ list }) => {
  return (
    <div>
      {list.map((todo, i) => (
        <TodoItem key={i} todo={todo} />
      ))}
    </div>
  );
};

export default TodoList;
