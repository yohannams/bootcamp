import React from 'react';
import { GlobalProvider } from './context/GlobalContext';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Cookies from "js-cookie";
import Navbar from './components/navbar';
import Tugas15Form from './tugas15/Tugas15Form';
import Tugas15List from './tugas15/Tugas15List';
import Tugas7 from './tugas7/tugas7';
import Home from './components/home';
import Login from './components/login';
import './App.css';
import Layout from './layout/layout';


function App() {

  const LoginRoute = (props) => {
    if(Cookies.get('token') === undefined){
      return props.children
    }else if(Cookies.get('token') !== undefined){
      return <Navigate to='/'/>
    }
    
  }

  return (
    <>
      <BrowserRouter>
        <GlobalProvider>
          {/* <Navbar/> */}
          <Routes>
            <Route path='/' element={
              <Layout>
                <Home />
              </Layout>
            } />

            <Route path='/login' element={
                <LoginRoute>
                 <Layout>
                  <Login />
                 </Layout>
                </LoginRoute>
            } />
            {/* <Route path='/' element={<Tugas7/>} />
            <Route path='/tugas15' element={<Tugas15List/>} />
            <Route path='/create' element={<Tugas15Form/>} />
            <Route path='/edit/:IdData' element={<Tugas15Form/>} /> */}
          </Routes>
        </GlobalProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
