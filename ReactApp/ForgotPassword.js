import React, { useState } from 'react'
import AppNavbar from './AppNavbar'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const ForgotPassword = () => {
    let navigate = useNavigate()
    
    const[userEmail, setEmail] = useState('');
    const[password, setPassword] = useState('');
    const[tempPassword, setTempPassword] = useState('');
    
    const handleSubmit = (e) => {
        e.preventDefault();
    

        const params = new URLSearchParams({
            'userEmail': userEmail,
            'password': password
        });
        const apiUrl = `/api/tutorials?${params}`;
    
        fetch(apiUrl, {
            method: 'PUT',
        })
          .then((response) => {
            const responseData = response.data;
            console.log(responseData);
            e.target.reset();
            const successAlert = document.createElement('div');
                successAlert.classList.add('alert', 'alert-success');
                successAlert.setAttribute('role', 'alert');
                successAlert.textContent = 'Password reset! Redirecting...';
                document.body.insertBefore(successAlert, document.body.firstChild);
                setTimeout(() => {
                  navigate('/login');
                  
                  setTimeout(() => {
                      successAlert.remove();
                  }, 2000); 
              }, 2000);
            
          })
          .catch((error) => {
            console.log(error);
          })
        
      };
  return (
    <div>
    <AppNavbar/>
       <form onSubmit={handleSubmit}>
       <div style={{width: "250px", display: "flex", justifyContent: "center", flexDirection: "column", marginLeft: "40%", marginTop: "18%"}}>
       <div class="mb-3">
  <label for="exampleInputEmail1" class="form-label">Enter Username</label>
  <div class="input-group">
  <span class="input-group-text"><i class="bi bi-file-person"/></span>
    <input required type="email" name="userEmail" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={event => setEmail(event.target.value)}/>
  </div>
</div>
  
  <div class="mb-3">
  <label for="exampleInputEmail1" class="form-label">Enter new Password</label>
  <div class="input-group">
  <span class="input-group-text"><i class="bi bi-lock-fill"/></span>
    <input required type="password" name="userEmail" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={event => setTempPassword(event.target.value)}/>
  </div>
</div>

  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Confirm Password</label>
    <div class="input-group">
    <span class="input-group-text"><i class="bi bi-lock-fill"></i></span>
    <input required type="password" name="password" class="form-control" id="exampleInputPassword1" onChange={event => setPassword(event.target.value)}/>
  </div>
  </div>
  <button  type="submit" class="btn btn-primary">Submit</button>
  </div>
</form>
    </div>
  )
}

export default ForgotPassword
