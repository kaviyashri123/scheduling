
import CssBaseline from '@mui/material/CssBaseline';
import { useState } from 'react';
import Header from './components/Header';
import Home from './components/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import FCFS from './components/FCFS'
import Priority from './components/Priority'
import SJF from './components/SJF'
import RoundRobins from './components/RoundRobins'
import Output from './components/Output';


function App() {
  
  
  return (
    <div style={{ backgroundColor:"#a7ddf5"}} >
    <BrowserRouter> 
      <CssBaseline />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/fcfs" element={<FCFS />} />
        <Route path="/sjf" element={<SJF />} />
        <Route path="/roundrobins" element={<RoundRobins />} />
        <Route path="/priority" element={<Priority />} />
        <Route path="/output" element={<Output />} />
      </Routes>  
    </BrowserRouter>
    </div>
  );
}

export default App;
