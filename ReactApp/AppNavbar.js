import {Component} from 'react';
import {Navbar, NavbarBrand} from 'reactstrap';
import {Link} from 'react-router-dom';


import React from 'react'

const AppNavbar = () => {
  return (
   
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
                </ul>
            </div>
    </div>
</nav>
  )
}

export default AppNavbar
