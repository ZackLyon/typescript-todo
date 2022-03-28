import React, { FC } from 'react';

type TodoProps = {
  todo: string;
};

const TodoItem: FC<TodoProps> = ({ todo }) => {
  return <div>{todo}</div>;
};

export default TodoItem;
