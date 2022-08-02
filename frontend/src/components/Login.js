import React, { useContext } from "react";
// import { Button,Card, CardContent,Paper,TextField } from "@mui/material";
import "./login.css";
import { Button, } from "@mui/material";
import { Formik } from "formik";
import Swal from "sweetalert2";
import {Link, Navigate, useNavigate } from "react-router-dom";
import { UserContext } from '../useContext';
import * as Yup from 'yup';

const Login = () => {

  const navigate = useNavigate();

  const {setLoggedIn} = useContext(UserContext);

  const userSubmit = async (formdata) => {
    console.log(formdata);

    // 1.url
    // 2. request method
    // 3. data
    // 4. data format

    const res = await fetch("http://localhost:5000/user/authenticate", {
      method: "POST",
      body: JSON.stringify(formdata),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (res.status === 200) {
      console.log("success");
      Swal.fire({
        icon: "success",
        title: "Success👍",
        text: "User added successfully",
      });
      
        
      const data = await res.json();
      sessionStorage.setItem("user", JSON.stringify(data));
      setLoggedIn(true);
      navigate('/Home');
      
    } else if (res.status === 400) {
      Swal.fire({
        icon: "error",
        title: "Login Failed",
        text: "Invalid user name or password",
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "Login Failed",
        text: "Something went wrong!",
      });
    }
  };

  const SignupSchema = Yup.object().shape({
    password: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
});

  return (
    <div className="container">
      <div className="col-md-4 mx-auto bg-light">
        <div className="cards mt-5">
          <div className="card-body">
            <Formik
              initialValues={{ email: "", password: "" }}
              onSubmit={userSubmit}
            >
              {({ values, handleChange, handleSubmit }) => (
                <form onSubmit={handleSubmit} validationSchema={SignupSchema}>
                  <h3 className="text-center">Sign-in Here</h3>
                  <hr />

                  <label className="mt-4">Email</label>
                  <input
                    value={values.email}
                    onChange={handleChange}
                    id="email"
                    className="form-control"
                  />

                  <label className="mt-4">Password</label>
                  <input
                    value={values.password}
                    onChange={handleChange}
                    id="password"
                    type="password"
                    className="form-control"
                  />

                  <Button type="submit"
                    color="secondary"
                    variant="contained"
                    sx={{ mt: 1 }} 
                    className="btn btn-secondary mt-5 mb-4">
                    Login Now
                  </Button>
                </form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
