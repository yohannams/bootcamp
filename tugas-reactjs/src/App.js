import React from 'react';
import { GlobalProvider } from './context/GlobalContext';
import Tugas7 from './tugas7/tugas7';
import Tugas8 from './tugas8/tugas8';
import Tugas9 from './tugas9/tugas9';
import Tugas10 from './tugas10/tugas10';
import Tugas11 from './tugas11/tugas11';
import Tugas12 from './tugas12/tugas12';
import Tugas13 from './tugas13/tugas13';
import Tugas14 from './tugas14/tugas14';
import './App.css';

function App() {
  return (
    <>
      <GlobalProvider>
        {/* <Tugas7/>
        <Tugas8 name="Yohanna" batch="42" email="yo.hanna.ms.1993@gmail.com"/>
        <Tugas9/>
        <Tugas10/> 
        <Tugas11/> 
        <Tugas12/> */}
        <Tugas14/>
      </GlobalProvider>
    </>
  );
}

export default App;
