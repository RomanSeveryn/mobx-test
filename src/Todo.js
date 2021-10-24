import { observer } from 'mobx-react-lite';
import React from 'react';
import todo from './store/todo';

const Todo = observer(() => {
  console.log('render');
  return (
    <div>
      <button onClick={() => todo.fetchTodos()}>fetch todo</button>
      {todo.todos.map(t => 
        <div key={t.id}>
          <input type='checkbox' checked={t.comleted} onChange={()=> todo.completeTodo(t.id)}/>
          {t.title}
          <button onClick={() => todo.removeTodo()}>X</button>
        </div>)}    
    </div>
  );
})

export default Todo;
