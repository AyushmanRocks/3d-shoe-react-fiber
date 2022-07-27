import React from "react";
// import { Button,Card, CardContent,Paper,TextField } from "@mui/material";
import './login.css';
import { Formik } from "formik";
import Swal from "sweetalert2";

const Login = () => {

  const userSubmit = async(formdata) => {
      console.log(formdata);

      // 1.url
      // 2. request method
      // 3. data
      // 4. data format

     const res= await fetch("http://localhost:5000/user/authenticate", {
        method: "POST",
       body: JSON.stringify(formdata),
      header: {
        'Content-Type': 'application/json'
      }
      })
if(res.status === 200){
  Swal.fire({
    icon: 'success',
    title: 'Success👍',
    text: 'User added successfully',
  })
}else if (res.status === 400){
    Swal.fire({
      icon: 'error',
      title: 'Login Failed',
      text: 'Invalid user name or password',
})

  }
  else{
    Swal.fire({
      icon: 'error',
      title: 'Login Failed',
      text: 'Something went wrong!'})
  }
}

  return (
      <div className="container">
          <div className="col-md-4 mx-auto bg-light">
              <div className="card mt-5">
                  <div className="card-body">

                      <Formik initialValues={{email : '', password : ''}} onSubmit={userSubmit}>
                          {({values, handleChange, handleSubmit}) => (
                              <form onSubmit={handleSubmit}>
                                  
                                  <h3 className="text-center">Sign-in Here</h3>
                                  <hr />

                                  <label className='mt-4'>Email</label>
                                  <input value={values.email} onChange={handleChange} id="email" className='form-control' />
                                  
                                  <label className='mt-4'>Password</label>
                                  <input value={values.password} onChange={handleChange} id="password" type="password" className='form-control' />
                              
                                  <button className='btn btn-secondary mt-5 mb-4'>Login Now</button>

                              </form>
                          )}
                      </Formik>

                  </div>
              </div>
          </div>
      </div>
)
}



export default Login;