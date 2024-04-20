import React, { Component, useState } from 'react';
import './App.css';
import AppNavbar from './AppNavbar';
import { Link, useNavigate } from 'react-router-dom';
import { Button, Container } from 'reactstrap';
import Login from './Login';



const Home = () => {

    // const [token, setToken] = useState()

    // if(!token){
    //     {return <Login setToken={setToken}/>}
    // }

        return (
            <div>
               <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
            <a class="navbar-brand" href="/">Home</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="/clientList">Client List</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="/new">Add Client</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="/login">Login</a>
                    </li>
                </ul>
            </div>
    </div>
</nav>         
            </div>
        );
    
        }

export default Home;