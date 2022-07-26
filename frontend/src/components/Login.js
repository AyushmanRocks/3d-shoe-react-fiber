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
                  <div className="">

                      <Formik initialValues={{email : '', password : ''}} onSubmit={userSubmit}>
                          {({values, handleChange, handleSubmit}) => (
                              <form onSubmit={handleSubmit}>
                                  
                                  <h3 className="text-center">Log-in Here</h3>
                                  <hr />

                                  <label className='mt-2'>Email</label>
                                  <input value={values.email} onChange={handleChange} id="email" className='form-control' />
                                  
                                  <label className='mt-2'>Password</label>
                                  <input value={values.password} onChange={handleChange} id="password" type="password" className='form-control' />
                              
                                  <button className='btn btn-secondary mt-4 mb-4'>Login Now</button>

                              </form>
                          )}
                      </Formik>

                  </div>
              </div>
          </div>
      </div>
)
}

//       <div className="m-4">
//         <h1 className="my-h1">{n}</h1>
//         <h2 className="my-h1">{myName}</h2>
//         <ul>
//           {item}
//           {item}
//           {item}
//           {item}
//         </ul>
//         <button style={pagestyle.btn}>React Button</button>
//         <br />
//         <button className="my-btn1"  >React Button</button>

//         <h1 className="display-6">{addNum(46,54)}</h1>
        



// {/* Login page */}
//         <div className="row d-flex justify-content-center align-items-center">
//         <form className="w-50 styleform p-3">
//         <h1 className="text-center">Login</h1>
//           <div class="form-outline mb-4 styleinput">
//             <input type="email" id="form2Example1" class="form-control" />
//             <label class="form-label" for="form2Example1">
//               Email address
//             </label>
//           </div>
  
//           <div class="form-outline mb-4 styleinput">
//             <input type="password" id="form2Example2" class="form-control" />
//             <label class="form-label" for="form2Example2">
//               Password
//             </label>
//           </div>
  
//           <div class="row mb-4">
//             <div class="col d-flex justify-content-center">
//               <div class="form-check">
//                 <input
//                   class="form-check-input"
//                   type="checkbox"
//                   value=""
//                   id="form2Example34"
//                   checked
//                 />
//                 <label class="form-check-label" for="form2Example34">
//                   {" "}
//                   Remember me{" "}
//                 </label>
//               </div>
//             </div>
  
//             <div class="col">
//               <a href="#!">Forgot password?</a>
//             </div>
//           </div>
  
//           <button type="submit" class="btn btn-success btn-block mb-4">
//             Sign in
//           </button>
  
//           <div class="text-center">
//             <p>
//               Not a member? <a href="#!">Register</a>
//             </p>
//             <p>or sign up with:</p>
//             <button type="button" class="btn btn-primary btn-floating mx-1">
//               <i class="fab fa-facebook-f"></i>
//             </button>
  
//             <button type="button" class="btn btn-primary btn-floating mx-1">
//               <i class="fab fa-google"></i>
//             </button>
  
//             <button type="button" class="btn btn-primary btn-floating mx-1">
//               <i class="fab fa-twitter"></i>
//             </button>
  
//             <button type="button" class="btn btn-primary btn-floating mx-1">
//               <i class="fab fa-github"></i>
//             </button>
//           </div>
//         </form>
//         </div>
  
//       </div>

      // <Paper>
      //   <div className="col-md-4 mx-auto">
      //     <Card>
      //       <CardContent>
      //         <TextField sx={{mt:5}} fullWidth label="Email" helperText="Invalid Mail"/>
      //         <TextField sx={{mt:5}} fullWidth label="Password" helperText="Wrong"/>
      //         <TextField sx={{mt:5}} fullWidth label="Name" />
      //         <Button color="success" variant="contained" sx={{mt:10}}>Login</Button>
              
              
      //       </CardContent> 




      //     </Card>
      //   </div>


      //   <Button variant="contained">Material UI</Button>
      //   <Button disabled>Hello</Button>
      // </Paper>


// const pagestyle={
//   btn:{
//     background:'red',
//     color:'white',
//     border:'1px solid white',
//     padding:'10px'
//   }
// }

export default Login;