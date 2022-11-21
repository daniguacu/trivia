
import './App.css';
import UserForm from './components/userform/UserForm';
import Header from './components/header/Header';
import Category from './components/category/Category';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from 'react';
function App() {
  
  return (
    
    <div className="App">
    <BrowserRouter>
    <div>
      <Header></Header>
    </div>
    <Routes>
    <Route exact path="/trivia"  element={<UserForm/>} />
    <Route exact path="/trivia/user"  element={<Category />} />
    
    
    </Routes>
    </BrowserRouter>
      
    </div>
    
  );
}

export default App;
