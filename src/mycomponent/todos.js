import React from 'react'
import Todoitem from "./todoitem";
export default function Todos(props) {
  return (
    <div className='container' >
      <h1>todoloist</h1>
 <Todoitem todo ={props.todos[0]}/>
 {/* props.todo[0] jo hena vo todoitem mai dal dena todo k name se */}
    </div>
  )
}
