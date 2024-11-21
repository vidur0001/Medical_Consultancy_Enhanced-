import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Register } from './src/Components/Register';
import { Login } from './src/Components/Login';
import Consultancy from './src/Components/Consultancy';
import { Facilities } from './src/Components/Facilities';   
import { Aboutus } from './src/Components/Aboutus';
import { Home } from './src/Components/Home';
import LogOut from './src/Components/LogOut'; // Make sure to import the LogOut component
import './App.css';
import { useSelector } from 'react-redux';
import Spinner from './src/Components/Spinner';
import FrontPage from './src/Components/FrontPage';
function App() {
  const { loading } = useSelector(state => state.alerts);
  const token = localStorage.getItem("token");

  return (
    <BrowserRouter>
      {loading ? (
        <Spinner />
      ) : (
        <Routes>
          <Route path='/' element={token ? <FrontPage /> : <Navigate to="/Login" />} />
          <Route path='/Login' element={token ? <Navigate to="/" /> : <Login />} />
          <Route path='/Register' element={token ? <Navigate to="/" /> : <Register />} />
          <Route path='/Consultancy' element={<Consultancy />} />
          <Route path='/AboutUs' element={<Aboutus />} />
          <Route path='/Facilities' element={<Facilities />} />
          {/* Conditional rendering of the Logout route */}
          <Route path='/Logout' element={token ? <LogOut /> : <Navigate to="/Login" />} />
        </Routes>
      )}
    </BrowserRouter>
  );
}

export default App;
