
import { BrowserRouter, Routes, Route, Link, Navigate } from 'react-router-dom';
import Model3D from './components/Model3D';
import Navbar from './components/Navbar';
function App() {


    return (
     
      <BrowserRouter>
      <Navbar/>
       
        <Routes>
          <Route element={<Model3D></Model3D>} path="Model3D"/>
         
        </Routes>
      </BrowserRouter>

    );
  }
  
  export default App;