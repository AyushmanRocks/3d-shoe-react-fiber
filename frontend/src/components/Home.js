import React from "react";
import "./home.css";

const Home = () => {
  return (
    <div><div className="background"></div>
      <div className="container__card">
        <div className="card__father">
          <div className="card">
            <div className="card__front">
              <div className="bg"></div>
              <div className="body__card_front">
                <h1>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
                </h1>
              </div>
            </div>
            <div className="card__back">
              <div className="body__card_back">
                <h1>Card 1</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Pariatur ab quas recusandae voluptatum aliquid tempore animi
                  corporis voluptas. Tempore neque iure necessitatibus voluptas
                  nesciunt animi dolores incidunt delectus sapiente illum.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="card__father">
          <div className="card">
            <div className="card__front">
              <div className="bg"></div>
              <div className="body__card_front">
                <h1>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </h1>
              </div>
            </div>
            <div className="card__back">
              <div className="body__card_back">
                <h1>Card 2</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Pariatur ab quas recusandae voluptatum aliquid tempore animi
                  corporis voluptas. Tempore neque iure necessitatibus voluptas
                  nesciunt animi dolores incidunt delectus sapiente illum.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="card__father">
          <div className="card">
            <div className="card__front">
              <div className="bg"></div>
              <div className="body__card_front">
                <h1>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
                </h1>
              </div>
            </div>
            <div className="card__back">
              <div className="body__card_back">
                <h1>Card 3</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Pariatur ab quas recusandae voluptatum aliquid tempore animi
                  corporis voluptas. Tempore neque iure necessitatibus voluptas
                  nesciunt animi dolores incidunt delectus sapiente illum.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
