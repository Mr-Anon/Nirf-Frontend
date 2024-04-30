import React from 'react';
import Home from './components/Home';
import College from './components/College';
import { Routes, Route} from "react-router-dom";
import NotFoundPage from './components/NotFoundPage';


function App() {
  return (
    <Routes >
      <Route path='/' element = {<Home/>}/>
      <Route path="/college/:name" element = {<College/>} />
      <Route path='*' element = {<NotFoundPage/>}/>
    </Routes>
  );
}

export default App;
