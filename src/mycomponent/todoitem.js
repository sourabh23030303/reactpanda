import React from 'react'
// {}mai todo means props k andr ky aha do tarike hote hai props k  
export default function Todoitem({todo}) {
  return (
    <div>
       <h4>{todo.title}</h4> 
       <h4>{todo.desc}</h4> 
       <button className="btn btn-sm btn-danger">delete</button>
    </div>
  )
}


 



































