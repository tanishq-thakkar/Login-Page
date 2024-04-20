import React, { Component } from 'react';
import './App.css';
import Home from './Home';
// import { BrowserRouter as Switch, Route, Routes } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ClientList from './ClientList';
import AddUser from './AddUser';
import Login from './Login';
import EditUser from './EditUser'
import ForgotPassword from './ForgotPassword';
import { GoogleOAuthProvider } from '@react-oauth/google';
import ReactDOM from 'react-dom';

// import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';

function App  ()  {


    return (
         <Router>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/clientList' exact={true} element={<ClientList/>}/>
            <Route path='/new' element={<AddUser/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/forgot' element={<ForgotPassword/>}/>
            <Route path='/edit' element={<EditUser/>}/>
        </Routes>
        </Router>

    )

}
export default App;
