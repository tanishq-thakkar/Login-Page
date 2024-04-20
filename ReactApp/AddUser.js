import React from 'react'
import axios from 'axios'
import AppNavbar from './AppNavbar';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Navigate, useNavigate } from 'react-router-dom'

function AddUser() {
  let navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault();
        const userEmail = e.target.userEmail.value;
        const password = e.target.password.value;
        axios
          .post('/api/tutorials', {
            userEmail,
            password
          })
          .then((response) => {
            const responseData = response.data;
            console.log(responseData);
            e.target.reset();
            const successAlert = document.createElement('div');
                successAlert.classList.add('alert', 'alert-success');
                successAlert.setAttribute('role', 'alert');
                successAlert.textContent = 'User Created! Redirecting...';
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
  <label for="exampleInputEmail1" class="form-label">Email address</label>
  <div class="input-group">
  <span class="input-group-text"><i class="bi bi-file-person"/></span>
    <input required type="email" name="userEmail" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
  </div>
</div>

  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <div class="input-group">
    <span class="input-group-text"><i class="bi bi-lock-fill"></i></span>
    <input required type="password" name="password" class="form-control" id="exampleInputPassword1"/>
  </div>
  </div>
  <button  type="submit" class="btn btn-primary">Submit</button>
  </div>
</form>
    </div>
    
  )
}

export default AddUser
