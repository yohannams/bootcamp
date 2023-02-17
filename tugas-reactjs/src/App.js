import React from 'react';
import { GlobalProvider } from './context/GlobalContext';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar';
import Tugas15Form from './tugas15/Tugas15Form';
import Tugas15List from './tugas15/Tugas15List';
import Tugas7 from './tugas7/tugas7';
import './App.css';

function App() {
  return (
    <>
      <BrowserRouter>
        <GlobalProvider>
          <Navbar/>
          <Routes>
          <Route path='/' element={<Tugas7/>} />
            <Route path='/tugas15' element={<Tugas15List/>} />
            <Route path='/create' element={<Tugas15Form/>} />
            <Route path='/edit/:IdData' element={<Tugas15Form/>} />
          </Routes>
        </GlobalProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
