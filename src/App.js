import React from 'react';
import './App.css';
import {Route, Routes,BrowserRouter as  Router} from "react-router-dom";
import './components/pomodoro-1.jpg';
import 'bootstrap/dist/css/bootstrap.css';
import TodoPage from "./components/HomeTodo.js";

function App() {


  return (
    <div className="App" >
      <Router>
        <Routes>
          <Route path='/' element={<TodoPage />} />
        </Routes>

      </Router>
      
      
      </div>
  );
}

export default App;
