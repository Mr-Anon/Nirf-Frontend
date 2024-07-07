import React from 'react';
import Home from './components/Main/Home';
import Form from './components/Login/Form';
import College from './components/College';
import Approvals from './components/Main/Approvals';
import { Routes, Route} from "react-router-dom";
import NotFoundPage from './components/NotFoundPage';


function App() {
  return (
    <Routes >
      <Route path='/' element = {<Home/>}/>
      <Route path="form" element={<Form />} />
      <Route path="/college/:name" element = {<College/>} />
      <Route path='*' element = {<NotFoundPage/>}/>
      <Route path="/approvals" element = {<Approvals/>} />
    </Routes>
  );
}

export default App;
