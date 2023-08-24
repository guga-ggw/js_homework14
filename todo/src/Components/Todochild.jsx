import React from 'react'

function Todochild({rem, todos, complete}) {
  
  return (
    <div className='to_do'>
        <h3>today's goals</h3>
        {todos.map((item) =>(
            <div className="todo_box">
                <h1>{item.txt}</h1>
                <div className="buttons">
                <button onClick={() => complete(item.id, item.txt)}>Done</button>
                <button onClick={() => rem(item.id, false)}>Delete</button>
                </div>
            </div>
        ))}

    </div>
  )
}

export default React.memo(Todochild)