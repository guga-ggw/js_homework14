import React, { useCallback, useEffect, useState } from 'react';
import Done from './Components/Done';
import Todochild from './Components/Todochild';
import './App.css';

function MyComponent() {
  const [todolist, setTodolist] = useState([]);
  const [text, setText] = useState('');
  const [completed, setcomplete ] = useState([])



  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const handleclick = () => {
    const newTodo = {
      id: Date.now(),
      txt: text,
    };
    setTodolist([...todolist, newTodo]);
    setText('');
  };

  const completetask = useCallback((idi, text) =>{
    
    const completed = {
      id : idi,
      txt: text
    }

    setcomplete((prev) => [...prev, completed])
    deletetask(idi)
  })

  const deletetask = useCallback((id, cmp) => {
  if(cmp !== true){
    const deletedtask = todolist.filter((i) => i.id !== id);
    setTodolist(deletedtask); 
  }
  else{
    const deletedcomptask = completed.filter((i) => i.id !== id);
    setcomplete(deletedcomptask); 
  }
    
  }, [todolist, completed]);

  return (
    <div className='app'>
      <div className="input">
        <h2>type goal for today</h2>
        <input
          type="text"
          value={text}
          onChange={handleTextChange}
        />
        <button onClick={handleclick}>add</button>
      </div>
      <div className="borders">
        <Todochild todos={todolist} rem={deletetask} complete={completetask}/> {/* Pass rem prop */}
        <Done tasks={completed} rem={deletetask}/>
      </div>
    </div>
  );
}

export default MyComponent;