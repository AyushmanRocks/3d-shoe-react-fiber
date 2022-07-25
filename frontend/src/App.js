import './App.css';
import { BrowserRouter, Routes, Route, Link, Navigate } from 'react-router-dom';
import Home from './components/Home';
import Model3D from './components/Model3D';
import Navbar from './components/Navbar';
function App() {


    return (
     
      <BrowserRouter>
      <Navbar/>
      
        <Routes>
          <Route element={<Model3D></Model3D>} path="Model3D"/>
         <Route element={<Home></Home>} path="/" />
        </Routes>
      </BrowserRouter>

    );
  }
  
  export default App;