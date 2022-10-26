import React from 'react';
import './App.css';
import {Route, Routes,BrowserRouter as  Router} from "react-router-dom";
import NavBar from "./components/Navbar.js";
import './components/pomodoro-1.jpg';
import TodoPage from "./components/HomeTodo.js";

function App() {


  return (
    <div className="App">
      <Router>
      <NavBar />
        <Routes>
          <Route path='/' element={<TodoPage />} />
        </Routes>

      </Router>
      
      {/* <Header /> */}
     
      
      </div>
  );
}

export default App;
