import React from 'react';
import AddTodo from './components/AddTodo';
import Todos from './components/Todos';

const App = () => {
  return (
    <div>
      Learn about redux toolkit
      <AddTodo />
      <Todos />
    </div>
  )
}

export default App;
