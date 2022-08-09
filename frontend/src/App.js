import './App.css';
import { BrowserRouter, Routes, Route, Link, Navigate } from 'react-router-dom';
import Authorisor from './components/Auth';
import Home from './components/Home';
import Model3D from './components/Model3D';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Signup from './components/Signup';
import { Suspense, useState } from 'react';
import { UserProvider } from './useContext';

function App() {
  const [currentUser, setcurrentUser] = useState(JSON.parse(sessionStorage.getItem("user")));
  

  
    return (
     <UserProvider currentUser={currentUser}>
      <BrowserRouter>
      <Navbar/>
      
        <Routes>
          {/* <Route element={
            <Authorisor>
              
              <Model3D/>
            </Authorisor>

          }
          path="/Model3D" /> */}


          
          <Route element={
            <Authorisor>
          <Suspense fallback={null}>
          <Model3D></Model3D>
          </Suspense>
          </Authorisor>
          } path="Model3D"/>
          <Route  element={<Home></Home>} path="/"/>
          <Route element={<Login></Login>} path="Login" />
          <Route element={<Home></Home>} path="Home"/>
          <Route element={<Signup></Signup>} path="Signup" />
         
        </Routes>
      </BrowserRouter>
      </UserProvider>
    );
  }
  
  export default App;