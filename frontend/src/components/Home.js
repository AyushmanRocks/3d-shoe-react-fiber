import React from "react";
import "./home.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div><div className="background"></div>
      <div className="container__card">
        <div className="card__father">
          <div className="card">
            <div className="card__front">
              <div className="bg img-design img-1"></div>
              <div className="body__card_front">
                <h1 style={{top:"30px", position:"absolute"}}>Design 1</h1>
                <h3 className="text-card">Hover To See Transition</h3>
              </div>
            </div>
            <div className="card__back">
            <div className="bg img-design img-2"></div>
              <div className="body__card_back">
                <h1>Design 1</h1>
              </div>
              <Link className="text-card" style={{left:"20%"}} to="/Model3D" ><h2>Click To Design</h2></Link>
            </div>
          </div>
        </div>
      

        <div className="card__father">
          <div className="card">
            <div className="card__front">
              <div className="bg img-design img-1"></div>
              <div className="body__card_front">
                <h1 style={{top:"30px", position:"absolute"}}>Design 1</h1>
                <h3 className="text-card">Hover To See Transition</h3>
              </div>
            </div>
            <div className="card__back">
            <div className="bg img-design img-2"></div>
              <div className="body__card_back">
                <h1>Design 1</h1>
              </div>
              <Link className="text-card" style={{left:"20%"}} to="/Model3D" ><h2>Click To Design</h2></Link>
            </div>
          </div>
        </div>


        <div className="card__father">
          <div className="card">
            <div className="card__front">
              <div className="bg img-design img-1"></div>
              <div className="body__card_front">
                <h1 style={{top:"30px", position:"absolute"}}>Design 1</h1>
                <h3 className="text-card">Hover To See Transition</h3>
              </div>
            </div>
            <div className="card__back">
            <div className="bg img-design img-2"></div>
              <div className="body__card_back">
                <h1>Design 1</h1>
              </div>
              <Link className="text-card" style={{left:"20%"}} to="/Model3D" ><h2>Click To Design</h2></Link>
            </div>
          </div>
        </div>


        <div className="card__father">
          <div className="card">
            <div className="card__front">
              <div className="bg img-design img-1"></div>
              <div className="body__card_front">
                <h1 style={{top:"30px", position:"absolute"}}>Design 1</h1>
                <h3 className="text-card">Hover To See Transition</h3>
              </div>
            </div>
            <div className="card__back">
            <div className="bg img-design img-2"></div>
              <div className="body__card_back">
                <h1>Design 1</h1>
              </div>
              <Link className="text-card" style={{left:"20%"}} to="/Model3D" ><h2>Click To Design</h2></Link>
            </div>
          </div>
        </div>

        <div className="card__father">
          <div className="card">
            <div className="card__front">
              <div className="bg img-design img-1"></div>
              <div className="body__card_front">
                <h1 style={{top:"30px", position:"absolute"}}>Design 1</h1>
                <h3 className="text-card">Hover To See Transition</h3>
              </div>
            </div>
            <div className="card__back">
            <div className="bg img-design img-2"></div>
              <div className="body__card_back">
                <h1>Design 1</h1>
              </div>
              <Link className="text-card" style={{left:"20%"}} to="/Model3D" ><h2>Click To Design</h2></Link>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Home;
