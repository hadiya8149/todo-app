import React, {useState} from 'react';
import {Form, Button, Card} from 'react-bootstrap';
import './App.css';

function Todo({todo, index, markTodo, removeTodo}){
      if(todo.length!==0){
        return(
          <div className="todo">
          <span style = {{ textDecoration: todo.complete ?"Line-through": ""}}>{todo.task}</span>
          <Button variant = "outline-success" onClick = {() => markTodo(index)}>✓</Button>{' '}
          <Button variant = "outline-danger" onClick ={() => removeTodo(index)}>x</Button>
          </div>
        )
      }
     
      
  }
function FormTodo({addTodo}){
  const [value, setValue] = React.useState("");
  const handleSubmit = e => {
    e.preventDefault();
  if(!value) return;
  addTodo(value);
  setValue("");
  };
  return(
    <Form onSubmit = {handleSubmit}>
      <Form.Group className="add-bar">
        <Form.Control type="text" className = "input" value={value} onChange = {e => setValue(e.target.value)} placeholder="Add new todo"/>
        <Button variant = "primary ms-3" type="submit">Submit</Button>
      </Form.Group>
      
    </Form>
  )
}
function TodoPage() {
  const [toDoList, setToDoList]= useState([]);
  const addTodo = task => {
    const newTodos = [...toDoList, {task}];
    setToDoList(newTodos);
  };
  const markTodo = index => {
    const newTodos = [...toDoList];
    newTodos[index].complete = true;
    setToDoList(newTodos);
  };
  const removeTodo = index =>{
    const newTodos = [...toDoList];
    newTodos.splice(index,1);
    setToDoList(newTodos);
  }

  return (
    <div className="Todo-container">
     
      
      
      {/* <ToDoList toDoList={toDoList} /> */}
      <FormTodo addTodo = {addTodo} />
    <div  className="todolist"> 
      <ol>
      {toDoList.map((todo, index) => (
      
            <Todo 
            key={index}
            index={index}
            todo={todo}
            markTodo ={markTodo}
            removeTodo = {removeTodo} 
            />
          
      ))}
      </ol>
    </div>
      
      </div>
  );
}

export default TodoPage;