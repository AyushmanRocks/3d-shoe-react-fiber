import "./signup.css";
import { Button, TextField } from "@mui/material";
import { Formik } from "formik";
import React from "react";
import * as Yup from "yup";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

import { paper, Group, view, Path } from "paper/dist/paper-core";

const Signup = () => {
  const navigate = useNavigate();

  const userSumbit = async (formdata) => {
    console.log(formdata);

    const response = await fetch("http://localhost:5000/user/add", {
      method: "POST",
      body: JSON.stringify(formdata), //converting javascript object to json
      headers: { "Content-Type": "application/json" },
    });

    if (response.status === 200) {
      console.log("success");
      Swal.fire({
        icon: "success",
        title: "Success👍",
        text: "User added successfully",
      });

      navigate("/login");
    } else {
      console.log("error occured");
      Swal.fire({
        icon: "error",
        title: "Oops...😂",
        text: "Something went wrong!",
      });
    }
  };

  const SignupSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),

    email: Yup.string().email("Invalid email").required("Required"),
  });

  //for form javascrip design

  /* ====================== *
   *  Initiate Canvas       *
   * ====================== */

  paper.install(window);
  paper.setup(document.getElementById("canvas"));

  // Paper JS Variables
  var canvasWidth, canvasHeight, canvasMiddleX, canvasMiddleY;

  var shapeGroup = new Group();

  var positionArray = [];

  function getCanvasBounds() {
    // Get current canvas size
    canvasWidth = view.size.width;
    canvasHeight = view.size.height;
    canvasMiddleX = canvasWidth / 2;
    canvasMiddleY = canvasHeight / 2;
    // Set path position
    var position1 = {
      x: canvasMiddleX / 2 + 100,
      y: 100,
    };

    var position2 = {
      x: 200,
      y: canvasMiddleY,
    };

    var position3 = {
      x: canvasMiddleX - 50 + canvasMiddleX / 2,
      y: 150,
    };

    var position4 = {
      x: 0,
      y: canvasMiddleY + 100,
    };

    var position5 = {
      x: canvasWidth - 130,
      y: canvasHeight - 75,
    };

    var position6 = {
      x: canvasMiddleX + 80,
      y: canvasHeight - 50,
    };

    var position7 = {
      x: canvasWidth + 60,
      y: canvasMiddleY - 50,
    };

    var position8 = {
      x: canvasMiddleX + 100,
      y: canvasMiddleY + 100,
    };

    positionArray = [
      position3,
      position2,
      position5,
      position4,
      position1,
      position6,
      position7,
      position8,
    ];
  }

  /* ====================== *
   * Create Shapes          *
   * ====================== */
  function initializeShapes() {
    // Get Canvas Bounds
    getCanvasBounds();

    var shapePathData = [
      "M231,352l445-156L600,0L452,54L331,3L0,48L231,352",
      "M0,0l64,219L29,343l535,30L478,37l-133,4L0,0z",
      "M0,65l16,138l96,107l270-2L470,0L337,4L0,65z",
      "M333,0L0,94l64,219L29,437l570-151l-196-42L333,0",
      "M331.9,3.6l-331,45l231,304l445-156l-76-196l-148,54L331.9,3.6z",
      "M389,352l92-113l195-43l0,0l0,0L445,48l-80,1L122.7,0L0,275.2L162,297L389,352",
      "M 50 100 L 300 150 L 550 50 L 750 300 L 500 250 L 300 450 L 50 100",
      "M 700 350 L 500 350 L 700 500 L 400 400 L 200 450 L 250 350 L 100 300 L 150 50 L 350 100 L 250 150 L 450 150 L 400 50 L 550 150 L 350 250 L 650 150 L 650 50 L 700 150 L 600 250 L 750 250 L 650 300 L 700 350 ",
    ];

    for (var i = 0; i <= shapePathData.length; i++) {
      // Create shape
      var headerShape = new Path({
        strokeColor: "rgba(255, 255, 255, 0.9)",
        strokeWidth: 2,
        parent: shapeGroup,
      });
      // Set path data
      headerShape.pathData = shapePathData[i];
      headerShape.scale(2);
      // Set path position
      headerShape.position = positionArray[i];
    }
  }

  initializeShapes();

  /* ====================== *
   * Animation              *
   * ====================== */
  view.onFrame = function paperOnFrame(event) {
    if (event.count % 4 === 0) {
      // Slows down frame rate
      for (var i = 0; i < shapeGroup.children.length; i++) {
        if (i % 2 === 0) {
          shapeGroup.children[i].rotate(-0.1);
        } else {
          shapeGroup.children[i].rotate(0.1);
        }
      }
    }
  };

  view.onResize = function paperOnResize() {
    getCanvasBounds();

    for (var i = 0; i < shapeGroup.children.length; i++) {
      shapeGroup.children[i].position = positionArray[i];
    }

    if (canvasWidth < 700) {
      shapeGroup.children[3].opacity = 0;
      shapeGroup.children[2].opacity = 0;
      shapeGroup.children[5].opacity = 0;
    } else {
      shapeGroup.children[3].opacity = 1;
      shapeGroup.children[2].opacity = 1;
      shapeGroup.children[5].opacity = 1;
    }
  };

  return (
    // <div className='container col-md-4 mx-auto bg-light'>
    //   <div className="cards">
    //   <h1 className='text-center'>Sign Up Here</h1>
    // <hr />

    // <Formik initialValues={{
    //     name: '',
    //     email: '',
    //     password: '',
    //     mobile  : '',
    //     age : '',
    // }} onSubmit={userSumbit} validationSchema={SignupSchema}>
    // {({values, handleChange, handleSubmit,errors})=>(
    // <form onSubmit={handleSubmit}>
    //     <TextField className='bg-light border rounded-3' value={values.name} onChange={handleChange} id="name" sx={{mt:5}} fullWidth label="Full Name" helperText={errors.name} error={errors.name ? true : false}/>
    //     <TextField className='bg-light border rounded-3' value={values.email} onChange={handleChange} id="email" sx={{mt:5}} fullWidth label="Email Id" type="email"/>
    //     <TextField className='bg-light border rounded-3' value={values.mobile} onChange={handleChange} id="mobile" sx={{mt:3}} fullWidth label="Mobile Number"/>
    //     <TextField className='bg-light border rounded-3' value={values.age} onChange={handleChange} id="age" sx={{mt:3}} fullWidth label="Age"/>
    //     <TextField className='bg-light border rounded-3' value={values.password} onChange={handleChange} id="password" sx={{mt:3}} fullWidth label="Password" type="password"/>
    //     <Button className='bg-secondary' type="submit" sx={{mt:4, color:'white'}}>Sumbit</Button>
    // </form>
    // )}
    // </Formik>

    // </div>
    // </div>
    <div className="signup-body">
      <div id="back">
        <canvas id="canvas" className="canvas-back"></canvas>
        <div className="backRight"></div>
        <div className="backLeft"></div>
      </div>

      <div id="slideBox">
        <div className="topLayer">
          <div className="right">
            <div className=" content-signup">
              <h2>Sign Up</h2>
              <Formik
                initialValues={{
                  name: "",
                  email: "",
                  password: "",
                  mobile: "",
                  age: "",
                }}
                onSubmit={userSumbit}
                validationSchema={SignupSchema}
              >
                {({ values, handleChange, handleSubmit, errors }) => (
                  <form
                    onSubmit={handleSubmit}
                    id="form-signup"
                    method="post"
                    onsubmit="return false;"
                  >
                    <div className="form-element form-stack">
                      <TextField
                        className="input-signup"
                        value={values.name}
                        onChange={handleChange}
                        id="name"
                        sx={{ mt: 2 }}
                        fullWidth
                        label="Full Name"
                        helperText={errors.name}
                        error={errors.name ? true : false}
                      />
                    </div>
                    <div className="form-element form-stack">
                      <TextField
                        className="input-signup"
                        value={values.email}
                        onChange={handleChange}
                        id="email"
                        sx={{ mt: 2 }}
                        fullWidth
                        label="Email Id"
                        type="email"
                      />
                    </div>
                    <div className="form-element form-stack">
                      <TextField
                        className="input-signup "
                        value={values.mobile}
                        onChange={handleChange}
                        id="mobile"
                        sx={{ mt: 2 }}
                        fullWidth
                        label="Mobile Number"
                      />
                    </div>
                    <div className="form-element form-stack">
                      <TextField
                        className="input-signup "
                        value={values.age}
                        onChange={handleChange}
                        id="age"
                        sx={{ mt: 3 }}
                        fullWidth
                        label="Age"
                      />
                    </div>
                    <div className="form-element form-stack">
                      <TextField
                        className="input-signup "
                        value={values.password}
                        onChange={handleChange}
                        id="password"
                        sx={{ mt: 3 }}
                        fullWidth
                        label="Password"
                        type="password"
                      />
                    </div>
                    <div className="form-element form-checkbox">
                      <input
                        className="input checkbox"
                        id="confirm-terms"
                        type="checkbox"
                        name="confirm"
                        value="yes"
                      />
                      <label for="confirm-terms">
                        I agree to the <a href="#">Terms of Service</a> and{" "}
                        <a href="#">Privacy Policy</a>
                      </label>
                    </div>
                    <div className="form-element form-submit">
                         <Button className='signup' type="submit" sx={{mt:1, color:'white', height:'40px', width:'50px'}}>Sumbit</Button>
                    </div>
                  </form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
