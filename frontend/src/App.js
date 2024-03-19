import React from 'react';
import Home from './components/Home';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import NotFoundPage from './components/NotFoundPage';

function App() {
  return (
    <Routes >
      <Route path='/' element = {<Home/>}/>
      <Route path='*' element = {<NotFoundPage/>}/>
    </Routes>
  );
}

export default App;
