
import './App.css';
import UserForm from './components/userform/UserForm';
import Header from './components/header/Header';
import Category from './components/category/Category';
import Interview from './components/interview/Interview';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from 'react';
function App() {

  const [puntuacion,setpuntuacion]=useState(0)
  const[preguntactual,setpreguntactual]=useState(0)
  const [isFinished,setisfinished]=useState(false)
  const [length,setlength]=useState(0)

  
  
  console.log(puntuacion,preguntactual,isFinished)

  if (isFinished)
  return (
    <main className="app">
      <div className="juego-terminado">
        <span>
          {" "}
          Obtuviste {puntuacion} de {length}
        </span>
        
        
      </div>
    </main>
  );
  
  return (
    
    <div className="App">
    <BrowserRouter>
    <div>
      <Header></Header>
    </div>
    <Routes>
    <Route exact path="/trivia"  element={<UserForm/>} />
    <Route exact path="/trivia/user"  element={<Category />} />
    <Route exact path="/trivia/user/:categoryId"  element={<Interview puntuacion={puntuacion} setpuntuacion={setpuntuacion} preguntactual={preguntactual}setpreguntactual={setpreguntactual} isFinished={isFinished} setisfinished={setisfinished} setlength={setlength}/>} />
    
    
    </Routes>
    </BrowserRouter>
      
    </div>
    
  );
}

export default App;
