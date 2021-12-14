import './App.css';
import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import Homepage from './Routes/Homepage';
import SearchPage from './Routes/SearchPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/explore' element={<SearchPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
