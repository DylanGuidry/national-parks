import './App.css';
import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useParams,
  BrowserRouter,
} from "react-router-dom";
import Homepage from './Routes/Homepage';
import SearchPage from './Routes/SearchPage';
import Details from './Components/Details';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/explore' element={<SearchPage />} />
        <Route path ='/park/:id' element={<Details />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
