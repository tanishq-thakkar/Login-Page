import React, { useState } from 'react'
import ReactDOM from 'react-dom';
import AppNavbar from './AppNavbar'
import { Await, Navigate, useNavigate } from 'react-router-dom'
import axios from 'axios';
import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google';
import App from './App';
import PropTypes from 'prop-types'

const Login = () => {
   
    let navigate = useNavigate()
    const[myEmail, setEmail] = useState('');
    const[myPassword, setPassword] = useState('');
    
    const clickLogin = async(e) => {
        e.preventDefault();
        // const token = await Login({
        //     id: myEmail,
        //     pass: myPassword
        // })
        const params = new URLSearchParams({
            'userEmail': myEmail,
            'password': myPassword
        });
    
        const apiUrl = `/api/tutorials?${params}`;
    
        fetch(apiUrl, {
            method: 'GET',
        })
        .then(response => response.text())
        .then(text => {
            if (text === "SUCCESS") {
                console.log(text);
                const successAlert = document.createElement('div');
                successAlert.classList.add('alert', 'alert-success');
                successAlert.setAttribute('role', 'alert');
                successAlert.textContent = 'Login successful! Redirecting...';
                document.body.insertBefore(successAlert, document.body.firstChild);
                // setToken(token)
                setTimeout(() => {
                    navigate('/');
                    
                    setTimeout(() => {
                        successAlert.remove();
                    }, 2000); 
                }, 2000);

            } else if (text === "No Users exists") {
                const errorAlert = document.createElement('div');
                errorAlert.classList.add('alert', 'alert-danger');
                errorAlert.setAttribute('role', 'alert');
                errorAlert.textContent = 'No Users exist';
                document.body.insertBefore(errorAlert,document.body.firstChild);

                    setTimeout(() => {
                        errorAlert.remove();
                    }, 3000); 

            } else {
                const errorAlert = document.createElement('div');
                errorAlert.classList.add('alert', 'alert-danger');
                errorAlert.setAttribute('role', 'alert');
                errorAlert.textContent = 'Incorrect Password!';
                document.body.insertBefore(errorAlert,document.body.firstChild);

                    setTimeout(() => {
                        errorAlert.remove();
                    }, 3000); 
            }
        })

        .catch(error => {
            console.error('Error:', error);
        });

    }

      return(
        <div>
           <AppNavbar/>
            <form onSubmit={clickLogin}>
       <div style={{width: "250px", display: "flex", justifyContent: "center", flexDirection: "column", marginLeft: "40%", marginTop: "18%"}}>
  <div class="mb-3">
  <label for="exampleInputEmail1" class="form-label">Email address</label>
  <div class="input-group">
  <span class="input-group-text"><i class="bi bi-file-person"/></span>
    <input required type="email" name="userEmail" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={event => setEmail(event.target.value)}/>
  </div>
    </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <div class="input-group">
    <span class="input-group-text"><i class="bi bi-lock-fill"></i></span>
    <input required type="password" name="password" class="form-control" id="exampleInputPassword1" onChange={event => setPassword(event.target.value)}/>
  </div>
  </div>
  <button  type="login" class="btn btn-primary">Login</button>

  <a href= "/forgot" class="text-end"><p style={{marginTop:"10px"}}>ForgotPassword?</p></a>

  <div style={{justifyContent:"center",flexDirection: "column"}}>
    <GoogleOAuthProvider clientId="696809128481-v0lj69tm2h34bbq650ali3ejcktf4man.apps.googleusercontent.com">
    <GoogleLogin
            onSuccess={credentialResponse => {
              console.log(credentialResponse);
              navigate('/')
            }}
            shape="circle"

            onError={() => {
              console.log('Login Failed');
            }}
          />
        </GoogleOAuthProvider>
      </div>
  </div>
  
</form>
    
</div>
    )
}

// Login.propTypes = {
//     setToken: PropTypes.func.isRequired
// }

export default Login