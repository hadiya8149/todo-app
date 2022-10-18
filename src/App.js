import Header from "./components/Header.js";
import React, {useState} from 'react';
import {Form, Button, Card} from 'react-bootstrap'
// import ToDo from "./components/todo.js";
import ToDoList from './components/list.js';


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
      <Form.Group>
        <Form.Control type="text" className = "input" value={value} onChange = {e => setValue(e.target.value)} placeholder="Add new todo"/>

      </Form.Group>
      <Button variant = "primary mb-3" type="submit">Submit</Button>
    </Form>
  )
}
function App() {
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
    <div className="App">
      <Header />
      
      <div className="todolist"> 
      <ToDoList toDoList={toDoList} />
      <FormTodo addTodo = {addTodo} />
    <div>
      {toDoList.map((todo, index) => (
        <Card>
          <Card.Body>
            <Todo 
            key={index}
            index={index}
            todo={todo}
            markTodo ={markTodo}
            removeTodo = {removeTodo} 
            />
          </Card.Body>
        </Card>
      ))}
    </div>
      
      </div>
    </div>
  );
}

export default App;
