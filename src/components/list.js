import React from 'react';

import {data} from '../data';

var todo = data;
console.log("this is todo.task")
console.log(todo.task)
const ToDoList = ({toDoList}) => {
   return (
       
       <ol>
           {todo.map(todo => {
               return (

                   <li>{todo.task}</li>
               )
           })}
       </ol>
   );
};
 
export default ToDoList;