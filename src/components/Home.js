import React from 'react';
import TodoList from './TodoList';

import ChildList from './ChildList';
const Home = () => {
  return (
    <div>
      <h4>Welcome to your Home</h4>
      {/* <ChildList /> */}
      <TodoList />
    </div>
  );
};

export default Home;
