import React from 'react';
import { GlobalProvider } from './context/GlobalContext';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import ManageData from './components/ManageData';
import Home from './components/Home';
import './App.css';

function App() {
  return (
    <>
      <BrowserRouter>
        <GlobalProvider>
          <Navbar/>
          <Routes>
          <Route path='/' element={<Home/>} />
            <Route path='/manage-data' element={<ManageData/>} />
          </Routes>
        </GlobalProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
