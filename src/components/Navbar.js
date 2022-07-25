import { Switch } from '@mui/material';
import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    
    
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      
      <div class="container-fluid">
        
        <button
          class="navbar-toggler"
          type="button"
          data-mdb-toggle="collapse"
          data-mdb-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i class="fas fa-bars"></i>
        </button>
    
        
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          
          <a class="navbar-brand mt-2 mt-lg-0" href="#">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiHyxna68sO7A2aCeQ3REh_hheH3XS1E0CwA&usqp=CAU"
              height="40"
              alt="WebsiteLogo"
              loading="lazy"
            />
          </a>
          
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <NavLink className="nav-link" to="/Model3D">View Models</NavLink>
            </li>
           
          </ul>
          
        </div>
        
    
        
        <div class="d-flex align-items-center">
         
          <div class="dropdown">
            <a
              class="dropdown-toggle d-flex align-items-center hidden-arrow"
              href="#"
              id="navbarDropdownMenuAvatar"
              role="button"
              data-mdb-toggle="dropdown"
              aria-expanded="false"
            >
              <img
                src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png"
                class="rounded-circle"
                height="25"
                alt="Portrait of a Man"
                loading="lazy"
              />
            </a>
            <ul
              class="dropdown-menu dropdown-menu-end"
              aria-labelledby="navbarDropdownMenuAvatar"
            >
              <li>
                <a class="dropdown-item" href="#">My profile</a>
              </li>
              <li>
                <a class="dropdown-item" href="#">Settings</a>
              </li>
              <li>
                <a class="dropdown-item" href="#">Logout</a>
              </li>

              <li>
             
              </li>
            </ul>
          </div>
        </div>
        
      </div>
      
    </nav>
    

  )
}
export default Navbar;