import React from 'react'

function Done({tasks, rem}) {
  return (
    <div className='done'>
        <h3>today's goals</h3>
        {tasks.map((item) =>(
            <div className="todo_box">
                <h1>{item.txt}</h1>
                <div className="buttons">
                <button onClick={() => rem(item.id, true)}>Delete</button>
                </div>
            </div>
        ))}
    </div>
  )
}

export default React.memo(Done)