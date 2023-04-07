import React from "react";
import "./Works2.scss";
import Cards from "../Card/Cards";
import { bootcamp } from "../../data.js";

const Works2 = () => {
  return (
    <div className="Container">
      <div className="Navbar">
        <a href="/">
          <img src="/assets/inicio.png" className="inicio" alt="Link al inicio del portfolio"/>
        </a>
      </div>
      <h1 className="galery">Galeria</h1>
      <div className="cards">
        {bootcamp.map((e) => {
          return (
            <Cards
              className="card"
              id={e.id}
              img={e.img}
              desc={e.desc}
              web={e.web ? e.web : ""}
              src={e.src}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Works2;
