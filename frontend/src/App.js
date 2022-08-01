import './App.css';
import Authorisor from './components/Auth';
import { BrowserRouter, Routes, Route, Link, Navigate } from 'react-router-dom';
import Home from './components/Home';
import Model3D from './components/Model3D';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Signup from './components/Signup';
import { Suspense } from 'react';

function App() {


    return (
     
      <BrowserRouter>
      <Navbar/>
      
        <Routes>
          <Route element={
            <Authorisor>
              
              <Model3D/>
            </Authorisor>

          }
          path="/Model3D" />


          {/* <Route path="/home" element={<Home/>} /> */}
          <Route element={
          <Suspense fallback={null}>
          <Model3D></Model3D>
          </Suspense>
          } path="Model3D"/>
          <Route element={<Login></Login>} path="Login"/>
          <Route element={<Home></Home>} path="Home"/>
          <Route element={<Signup></Signup>} path="Signup" />
         
        </Routes>
      </BrowserRouter>

    );
  }
  
  export default App;