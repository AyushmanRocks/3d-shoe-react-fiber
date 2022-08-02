import { Button, TextField } from '@mui/material';
import { Formik } from 'formik';
import React from 'react';
import * as Yup from 'yup';
import Swal from "sweetalert2";
import { useNavigate } from 'react-router-dom';


const Signup = () => {


const navigate = useNavigate();

    const userSumbit = async (formdata) => { 
        console.log(formdata);

         const response = await fetch('http://localhost:5000/user/add', {method: 'POST', body: JSON.stringify(formdata), //converting javascript object to json 
        headers: {'Content-Type': 'application/json'}})

        if(response.status===200){
          console.log('success');
          Swal.fire({
            icon: 'success',
            title: 'Success👍',
            text: 'User added successfully',
          });

          navigate('/login');
      }
      else{
          console.log('error occured');
          Swal.fire({
            icon: 'error',
            title: 'Oops...😂',
            text: 'Something went wrong!',
          });

      }

    }

    const SignupSchema = Yup.object().shape({
        name: Yup.string()
          .min(2, 'Too Short!')
          .max(50, 'Too Long!')
          .required('Required'),
       
        email: Yup.string().email('Invalid email').required('Required'),
      });


  return (
    <div className='container col-md-4 mx-auto bg-light'>
      <div className="cards">
      <h1 className='text-center'>Sign Up Here</h1>
    <hr />


    <Formik initialValues={{
        name: '',
        email: '',
        password: '',
        mobile  : '',
        age : '',
    }} onSubmit={userSumbit} validationSchema={SignupSchema}>
    {({values, handleChange, handleSubmit,errors})=>(  
    <form onSubmit={handleSubmit}>
        <TextField className='bg-light border rounded-3' value={values.name} onChange={handleChange} id="name" sx={{mt:5}} fullWidth label="Full Name" helperText={errors.name} error={errors.name ? true : false}/>
        <TextField className='bg-light border rounded-3' value={values.email} onChange={handleChange} id="email" sx={{mt:5}} fullWidth label="Email Id" type="email"/>
        <TextField className='bg-light border rounded-3' value={values.mobile} onChange={handleChange} id="mobile" sx={{mt:3}} fullWidth label="Mobile Number"/>
        <TextField className='bg-light border rounded-3' value={values.age} onChange={handleChange} id="age" sx={{mt:3}} fullWidth label="Age"/>
        <TextField className='bg-light border rounded-3' value={values.password} onChange={handleChange} id="password" sx={{mt:3}} fullWidth label="Password" type="password"/>
        <Button className='bg-secondary' type="submit" sx={{mt:4, color:'white'}}>Sumbit</Button>
    </form>
    )}
    </Formik>

    </div>
    </div>
  )
}

export default Signup;